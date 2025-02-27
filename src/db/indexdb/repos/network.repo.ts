import { INetwork } from "@/db/mongodb/network/network.model";
import { BaseIDB, BaseModel } from "../base.repo";
import { dbManager, WallioAppDB } from "../config";

export interface Network extends INetwork, BaseModel {}

export class NetworkRepository extends BaseIDB<Network, WallioAppDB> {
  constructor() {
    super(dbManager, "networks");
  }

  async createBatch(data: Omit<Network, "id" | "createdAt" | "updatedAt">[]) {
    if (!data.length) return [];

    const db = await this.dbManager.getDB();
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

export const networkRepo = new NetworkRepository();
