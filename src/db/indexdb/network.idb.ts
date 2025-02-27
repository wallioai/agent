import type { DBSchema } from "idb";
import { BaseIDB, type BaseModel } from "./base";
import { INetwork } from "../mongodb/network/network.model";

export interface Network extends INetwork, BaseModel {}

interface NetworkDBSchema extends DBSchema {
  networks: {
    key: string;
    value: Network;
    indexes: {
      chainId: number;
      nameId: string;
    };
  };
}

export class NetworkIDB extends BaseIDB<Network, NetworkDBSchema> {
  constructor() {
    super("wallio-db", 1, "networks");

    this.indexes = [
      { name: "chainId", keyPath: "chainId" },
      { name: "nameId", keyPath: "nameId" },
    ];
  }

  async createBatch(data: Omit<Network, "id" | "createdAt" | "updatedAt">[]) {
    if (!data.length) return [];

    const db = await this.initDB();
    const tx = db.transaction(this.storeName, "readwrite");
    const store = tx.objectStore(this.storeName);

    // Fetch all existing networks based on `chainId`
    const existingNetworks = await store.getAll();
    const existingChainIds = new Set(
      existingNetworks.map((net) => net.chainId),
    );

    const now = new Date();
    const newRecords: Network[] = data
      .filter((network) => !existingChainIds.has(network.chainId)) // Filter out duplicates
      .map((network) => ({
        id: crypto.randomUUID(),
        ...network,
        createdAt: now,
        updatedAt: now,
      }));

    for (const record of newRecords) {
      await store.add(record);
    }

    await tx.done;
    return newRecords;
  }
}
export const networkIDB = new NetworkIDB();
