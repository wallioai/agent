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
import { getAgent } from "@/lib/agent";
import { SavedWallet } from "@/types/wallet.type";

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
  try {
    const body = await req.json();
    const wallet = body.wallet as SavedWallet;
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

    // Get the singleton agent instance
    const agent = await getAgent(session.name, wallet);

    if (!returnIntermediateSteps) {
      const eventStream = agent.streamEvents({ messages }, { version: "v2" });

      return LangChainAdapter.toDataStreamResponse(eventStream, {
        callbacks: {
          onFinal(completion) {
            //console.log(completion);
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
