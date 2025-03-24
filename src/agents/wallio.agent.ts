import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { Calculator } from "@langchain/community/tools/calculator";
import { SystemMessage } from "@langchain/core/messages";
import { Wallio } from "wallioai-kit";
import {
  venusAdapterProvider,
  walletAdapterProvider,
  dlnAdapterProvider,
} from "wallioai-kit/adapters";
import { ViemAccount } from "wallioai-kit/accounts";
import { generateLangChainTools } from "wallioai-kit/tools";
import { createWalletClient, Hex, http } from "viem";
import { sonic } from "viem/chains";
import { OPEN_AI_KEY } from "@/config/env.config";
import { AGENT_SYSTEM_TEMPLATE } from "@/config/const.config";
//import { dlnAdapterProvider } from "@/agent-actions/debridge";
import { LRUCache } from "lru-cache";
import { SavedWallet } from "@/types/wallet.type";
import { accountFromWallet } from "../lib/account";

// Initialize the ChatOpenAI instance
const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
  apiKey: OPEN_AI_KEY,
});

// Initialize the agent instance
const agent: LRUCache<
  string,
  ReturnType<typeof createReactAgent>
> = new LRUCache({
  max: 10,
  ttl: 5 * 60 * 60 * 1000,
  updateAgeOnGet: true,
});

export const getAgent = async (username: string, wallet: SavedWallet) => {
  // Check if we already have an agent for this wallet
  const cachedAgent = agent.get(wallet.address);
  if (cachedAgent) return cachedAgent;

  const account = await accountFromWallet(wallet);
  const client = createWalletClient({
    account,
    chain: sonic,
    transport: http(""),
  });

  //@ts-ignore
  const walletProvider = new ViemAccount(client);
  const wallio = await Wallio.init({
    account: walletProvider,
    adapters: [
      venusAdapterProvider(),
      walletAdapterProvider(),
      dlnAdapterProvider(),
    ],
  });
  const wallioTools = await generateLangChainTools(wallio);
  const tools = [new Calculator(), ...wallioTools];

  const newAgent = createReactAgent({
    llm: model,
    tools,
    prompt: new SystemMessage(AGENT_SYSTEM_TEMPLATE(username)), // You can update this dynamically in the handler
  });

  agent.set(wallet.address, newAgent);

  return newAgent;
};

export { model };
