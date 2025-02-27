import { BaseIDB, BaseModel } from "../base.repo";
import { dbManager, WallioAppDB } from "../config";
import { IToken } from "@/db/mongodb/token/token.model";

export interface Token extends IToken, BaseModel {}

export class TokenRepository extends BaseIDB<Token, WallioAppDB> {
  constructor() {
    super(dbManager, "tokens");
  }

  async createBatch(data: Omit<Token, "id" | "createdAt" | "updatedAt">[]) {
    if (!data.length) return [];

    const db = await this.dbManager.getDB();
    const tx = db.transaction(this.storeName, "readwrite");
    const store = tx.objectStore(this.storeName);

    const now = new Date();
    const newRecords: Token[] = data.map((token) => ({
      id: crypto.randomUUID(),
      ...token,
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

export const tokenRepo = new TokenRepository();
