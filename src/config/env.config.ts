import { sonicTestnet } from "viem/chains";

export const APP_CHAIN = sonicTestnet;
export const RPC_URL = process.env.NEXT_PRIVATE_RPC_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const APP_KEY = process.env.NEXT_PRIVATE_APP_KEY;
export const ENCRYPTION_KEY = process.env.NEXT_PRIVATE_ENCRYPTION_KEY;
export const OPEN_AI_KEY = process.env.NEXT_PRIVATE_OPENAI_API_KEY;
export const DB_URI = process.env.DB_URI;
export const RP_ID = process.env.NEXT_PRIVATE_RP_ID;
export const ORIGIN = process.env.NEXT_PRIVATE_ORIGIN;
export const GOOGLE_CLIENT_ID = process.env.NEXT_PRIVATE_AUTH_GOOGLE_ID;
export const GOOGLE_SECRET_ID = process.env.NEXT_PRIVATE_AUTH_GOOGLE_SECRET;
export const GOOGLE_CALLBACK_URL = process.env.NEXT_PRIVATE_CALLBACK_URL;
export const WALLET_SECRET = process.env.NEXT_PRIVATE_WALLET_SECRET;
export const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID;
