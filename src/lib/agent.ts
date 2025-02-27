import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { Calculator } from "@langchain/community/tools/calculator";
import { SystemMessage } from "@langchain/core/messages";
import { DexAi } from "dexai";
import { venusAdapterProvider, walletAdapterProvider } from "dexai/adapters";
import { ViemAccount } from "dexai/accounts";
import { generateLangChainTools } from "dexai/tools";
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, Hex, http } from "viem";
import { sonicTestnet } from "viem/chains";
import { OPEN_AI_KEY } from "@/config/env.config";
import { AGENT_SYSTEM_TEMPLATE } from "@/config/const.config";
import { deBridgetAdapterProvider } from "@/agent-actions/debridge";


// Initialize the ChatOpenAI instance
const chat = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
  apiKey: OPEN_AI_KEY,
});

// Initialize the agent instance
let agent: ReturnType<typeof createReactAgent>;

export const getAgent = async (username: string) => {
  if (!agent) {
    console.log("Here 1");
    const account = privateKeyToAccount(process.env.NEXT_PRIVATE_KEY! as Hex);
    const client = createWalletClient({
      account,
      chain: sonicTestnet,
      transport: http(""),
    });

    //@ts-ignore
    const walletProvider = new ViemAccount(client);
    const dexai = await DexAi.init({
      account: walletProvider,
      adapters: [
        venusAdapterProvider(),
        walletAdapterProvider(),
        deBridgetAdapterProvider(),
      ],
    });
    const dexAiTools = await generateLangChainTools(dexai);
    const tools = [new Calculator(), ...dexAiTools];

    agent = createReactAgent({
      llm: chat,
      tools,
      messageModifier: new SystemMessage(AGENT_SYSTEM_TEMPLATE(username)), // You can update this dynamically in the handler
    });
  }

  console.log("Here 2");
  return agent;
};

export { chat };
