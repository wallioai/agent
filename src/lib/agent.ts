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
import { dlnAdapterProvider } from "@/agent-actions/debridge";
import { LRUCache } from "lru-cache";

// Initialize the ChatOpenAI instance
const chat = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
  apiKey: OPEN_AI_KEY,
});

// Initialize the agent instance
// let agent:  ReturnType<typeof createReactAgent>;

const agent: LRUCache<
  string,
  ReturnType<typeof createReactAgent>
> = new LRUCache({
  max: 1,
  ttl: 5 * 60 * 60 * 1000,
  updateAgeOnGet: true,
});

export const getAgent = async (username: string) => {
  // Check if we already have an agent for this username
  const cachedAgent = agent.get(username);
  if (cachedAgent) return cachedAgent;

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
      dlnAdapterProvider(),
    ],
  });
  const dexAiTools = await generateLangChainTools(dexai);
  const tools = [new Calculator(), ...dexAiTools];

  const newAgent = createReactAgent({
    llm: chat,
    tools,
    prompt: new SystemMessage(AGENT_SYSTEM_TEMPLATE(username)), // You can update this dynamically in the handler
  });

  agent.set(username, newAgent);

  return newAgent;
};

export { chat };
