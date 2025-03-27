import { API_URL, APP_CHAIN } from "@/config/env.config";
import { Network } from "@/db/repos/network.repo";
import {
  createWalletClient,
  http,
  createPublicClient,
  Account,
  type Chain,
  defineChain,
  createClient,
} from "viem";

const supportedChainId = [
  1, 10, 56, 137, 250, 8453, 42161, 43114, 59144, 245022934, 100, 1088, 7171,
  388, 1514, 146, 2741, 80094, 999,
];

export const isSupportedChainId = (chainId: number) =>
  supportedChainId.includes(chainId);

export const publicClient = (chain?: Chain) => {
  return createPublicClient({
    chain: chain ?? APP_CHAIN,
    transport: http(
      isSupportedChainId(chain?.id) ? `${API_URL}/rpc?chain=${chain.id}` : "",
    ),
  });
};

export const createCustomClient = (chain?: Chain) =>
  createClient({
    chain: chain ?? APP_CHAIN,
    transport: http(
      isSupportedChainId(chain?.id) ? `${API_URL}/rpc?chain=${chain.id}` : "",
    ),
  });

export const walletClient = (account: Account) =>
  createWalletClient({
    account,
    chain: APP_CHAIN,
    transport: http(`${API_URL}/rpc`),
  });

export const createChain = (network: Network) =>
  defineChain({
    id: network.chainId,
    name: network.name,
    nativeCurrency: {
      decimals: network.nativeCurrency.decimal,
      name: network.cgCoinId ?? network.nativeCurrency.symbol,
      symbol: network.nativeCurrency.symbol,
    },
    rpcUrls: {
      default: {
        http: network.rpcUrls,
        webSocket: network.wssUrls,
      },
    },
    blockExplorers: {
      default: { name: "Explorer", url: network.explorerUrl },
    },
  });
