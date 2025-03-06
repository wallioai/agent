import { Dexie, type EntityTable } from "dexie";
import { Network } from "./repos/network.repo";
import { Token } from "./repos/token.repo";

export class IndexDB extends Dexie {
  networks!: EntityTable<Network, "id">;
  tokens!: EntityTable<Token, "id">;

  constructor() {
    super("wallio");

    this.version(1).stores({
      networks: "++id, chainId, nameId",
      tokens: "++id, chainId, address",
    });
  }
}

export const idb = new IndexDB();
