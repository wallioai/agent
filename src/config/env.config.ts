import { sonicTestnet } from "viem/chains";

export const APP_CHAIN = sonicTestnet;
export const RPC_URL = process.env.NEXT_PRIVATE_RPC_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const APP_KEY = process.env.NEXT_PRIVATE_APP_KEY;
export const ENCRYPTION_KEY = process.env.NEXT_PRIVATE_ENCRYPTION_KEY;
export const OPEN_AI_KEY = process.env.NEXT_PRIVATE_OPENAI_API_KEY;
export const DB_URI = process.env.NEXT_PRIVATE_DB_URI;
