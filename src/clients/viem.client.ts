import { APP_CHAIN } from "@/config/env.config";
import {
  createWalletClient,
  HDAccount,
  http,
  createPublicClient,
  PrivateKeyAccount,
} from "viem";

export const publicClient = createPublicClient({
  chain: APP_CHAIN,
  transport: http("/api/rpc"),
});
export const walletClient = (account?: HDAccount | PrivateKeyAccount) =>
  createWalletClient({
    account,
    chain: APP_CHAIN,
    transport: http("/api/rpc"),
  });
