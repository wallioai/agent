import { APP_CHAIN } from "@/config/env.config";
import { createWalletClient, http, createPublicClient, Account } from "viem";

export const publicClient = createPublicClient({
  chain: APP_CHAIN,
  transport: http("/api/rpc"),
});

export const walletClient = (account: Account) =>
  createWalletClient({
    account,
    chain: APP_CHAIN,
    transport: http("/api/rpc"),
  });
