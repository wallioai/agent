import { sonicTestnet } from "viem/chains";

export const APP_CHAIN = sonicTestnet;
export const RPC_URL = process.env.NEXT_PRIVATE_RPC_URL;
export const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT;
export const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID;

export const APP_KEY = process.env.NEXT_PRIVATE_APP_KEY;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;
export const ENCRYPTION_KEY = process.env.NEXT_PRIVATE_ENCRYPTION_KEY;
export const WALLET_SECRET = process.env.NEXT_PRIVATE_WALLET_SECRET;
export const OPEN_AI_KEY = process.env.NEXT_PRIVATE_OPENAI_API_KEY;
export const COINGECKO_API = process.env.NEXT_PUBLIC_COINGECKO_API;
export const BLURURL = process.env.NEXT_PUBLIC_BLURURL;

export const BICONOMY = process.env.BICONOMY;
export const IMPLEMENTATION = process.env.IMPLEMENTATION;
export const FACTORY_ADDRESS = process.env.FACTORY_ADDRESS;
