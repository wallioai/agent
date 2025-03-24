import { API_URL, APP_CHAIN } from "@/config/env.config";
import {
  createWalletClient,
  http,
  createPublicClient,
  Account,
  Chain,
} from "viem";

const supportedChainId = [
  1, 10, 56, 137, 250, 8453, 42161, 43114, 59144, 245022934, 100, 1088, 7171,
  388, 1514, 146, 2741, 80094, 999,
];

export const isSupportedChainId = (chainId: number) =>
  supportedChainId.includes(chainId);

export const publicClient = (chain?: Chain) =>
  createPublicClient({
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
