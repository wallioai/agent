import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { SystemMessage } from "@langchain/core/messages";
import { getChain, Wallio } from "wallioai-kit";
import {
  venusAdapterProvider,
  walletAdapterProvider,
  //dlnAdapterProvider,
} from "wallioai-kit/adapters";
import { ViemAccount } from "wallioai-kit/accounts";
import { generateLangChainTools } from "wallioai-kit/tools";
import { createWalletClient, Hex, http } from "viem";
import { bsc } from "viem/chains";
import { OPEN_AI_KEY } from "@/config/env.config";
import { AGENT_SYSTEM_TEMPLATE } from "@/config/const.config";
import { bridgeAdapterProvider } from "./actions/bridge";
import { LRUCache } from "lru-cache";
import { SavedWallet } from "@/types/wallet.type";
import { accountFromWallet } from "../lib/account";
import { Network } from "@/db/repos/network.repo";
import { createChain } from "@/clients/viem.client";

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
  max: 1,
  ttl: 5 * 60 * 60 * 1000,
  updateAgeOnGet: true,
});

export const getAgent = async (
  username: string,
  wallet: SavedWallet,
  network: Network,
  rpcUrls: Record<number, string[]>,
) => {
  // Check if we already have an agent for this wallet
  const cacheKey = `${wallet.address}-${network.nameId}`;
  const cachedAgent = agent.get(cacheKey);
  if (cachedAgent) return cachedAgent;

  const account = await accountFromWallet(wallet);
  const client = createWalletClient({
    account,
    chain: network ? createChain(network) : bsc,
    transport: http(""),
  });

  //@ts-ignore
  const walletProvider = new ViemAccount(client, rpcUrls);
  const wallio = await Wallio.init({
    account: walletProvider,
    adapters: [
      venusAdapterProvider(),
      walletAdapterProvider(),
      bridgeAdapterProvider(),
    ],
  });
  const wallioTools = await generateLangChainTools(wallio);
  const tools = [...wallioTools];

  const newAgent = createReactAgent({
    llm: model,
    tools,
    prompt: new SystemMessage(AGENT_SYSTEM_TEMPLATE(username)), // You can update this dynamically in the handler
  });

  agent.set(cacheKey, newAgent);

  return newAgent;
};

export { model };
