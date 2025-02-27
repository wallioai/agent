import { DBManager, type AppDBSchema } from "./idb";
import { type Network } from "./repos/network.repo";
import { type Token } from "./repos/token.repo";

// Define your database schema
export interface WallioAppDB extends AppDBSchema {
  networks: {
    key: string;
    value: Network;
    indexes: {
      chainId: number;
      nameId: string;
    };
  };
  tokens: {
    key: string;
    value: Token;
    indexes: {
      chainId: string;
      address: string;
    };
  };
}

// Configure all stores in your database
const storeConfigs = [
  {
    name: "networks" as const,
    keyPath: "id",
    indexes: [
      { name: "chainId", keyPath: "chainId" },
      { name: "nameId", keyPath: "nameId" },
    ],
  },
  {
    name: "tokens" as const,
    keyPath: "id",
    indexes: [
      { name: "chainId", keyPath: "chainId" },
      { name: "address", keyPath: "address" },
    ],
  },
];

// Create a singleton database manager
export const dbManager = DBManager.getInstance<WallioAppDB>(
  "wallio",
  1,
  storeConfigs,
);
