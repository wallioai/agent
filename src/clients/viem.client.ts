import { API_URL, APP_CHAIN } from "@/config/env.config";
import {
  createWalletClient,
  http,
  createPublicClient,
  Account,
  Chain,
} from "viem";

export const publicClient = (chain?: Chain) =>
  createPublicClient({
    chain: chain ?? APP_CHAIN,
    transport: http(chain ? "" : `${API_URL}/rpc`),
  });

export const walletClient = (account: Account) =>
  createWalletClient({
    account,
    chain: APP_CHAIN,
    transport: http(`${API_URL}/rpc`),
  });
