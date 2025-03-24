import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, LangChainAdapter } from "ai";
import {
  AIMessage,
  BaseMessage,
  ChatMessage,
  HumanMessage,
  isAIMessage,
  isHumanMessage,
} from "@langchain/core/messages";
import { CookieKeys } from "@/enums/cookie.enum";
import { getServerSession } from "@/lib/session";
import { IDecodedToken } from "@/lib/dal";
import { getAgent } from "@/agents/wallio.agent";
import { SavedWallet } from "@/types/wallet.type";
import { unstable_noStore as noStore } from "next/cache";
import { createThread, updateThreadTitle } from "@/actions/thread.action";
import { saveChat } from "@/actions/chat.action";

// Force the route to be dynamic and allow streaming responses up to 60 seconds
export const dynamic = "force-dynamic";
export const maxDuration = 60;

//export const runtime = "edge";

const convertVercelMessageToLangChainMessage = (message: VercelChatMessage) => {
  if (message.role === "user") {
    return new HumanMessage(message.content);
  } else if (message.role === "assistant") {
    return new AIMessage(message.content);
  } else {
    return new ChatMessage(message.content, message.role);
  }
};

const convertLangChainMessageToVercelMessage = (message: BaseMessage) => {
  if (isHumanMessage(message).valueOf()) {
    return { content: message.content, role: "user" };
  } else if (isAIMessage(message).valueOf()) {
    return {
      content: message.content,
      role: "assistant",
      tool_calls: (message as AIMessage).tool_calls,
    };
  } else {
    return { content: message.content, role: message.getType() };
  }
};

/**
 * This handler initializes and calls an tool caling ReAct agent.
 * See the docs for more information:
 *
 * https://langchain-ai.github.io/langgraphjs/tutorials/quickstart/
 */
export async function POST(req: NextRequest) {
  // Prevent caching of this route
  noStore();

  try {
    const body = await req.json();
    const wallet = body.wallet as SavedWallet;
    const thread_id = body.threadId as string;
    const returnIntermediateSteps = body.show_intermediate_steps;
    const session = (await getServerSession(
      CookieKeys.ACCESS_TOKEN,
    )) as IDecodedToken;

    const messages = (body.messages ?? [])
      .filter(
        (message: VercelChatMessage) =>
          message.role === "user" || message.role === "assistant",
      )
      .map(convertVercelMessageToLangChainMessage);

    const userMessage = messages[messages.length - 1];
    await saveChat(thread_id, userMessage.content, "user");

    // Get the singleton agent instance
    const agent = await getAgent(session.name, wallet);

    if (!returnIntermediateSteps) {
      const eventStream = agent.streamEvents(
        { messages },
        { version: "v2", configurable: { thread_id } },
      );

      return LangChainAdapter.toDataStreamResponse(eventStream, {
        callbacks: {
          async onFinal(completion) {
            if (messages.length === 1) {
              const suggestedTitle = userMessage.content
                .split("\n")[0]
                .slice(0, 50);
              await updateThreadTitle(suggestedTitle, thread_id);
            }
            await saveChat(thread_id, completion, "assistant");
          },
        },
      });
    } else {
      const result = await agent.invoke({ messages });
      return NextResponse.json(
        {
          messages: result.messages.map(convertLangChainMessageToVercelMessage),
        },
        { status: 200 },
      );
    }
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
