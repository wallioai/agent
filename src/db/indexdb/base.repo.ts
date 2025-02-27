import {
  type StoreNames,
  type IndexNames,
  type StoreKey,
  type StoreValue,
} from "idb";
import { AppDBSchema, DBManager } from "./idb";

export interface BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class BaseIDB<T extends BaseModel, S extends AppDBSchema> {
  protected dbManager: DBManager<S>;
  protected storeName: StoreNames<S>;

  constructor(dbManager: DBManager<S>, storeName: StoreNames<S>) {
    this.dbManager = dbManager;
    this.storeName = storeName;
  }

  // Find all records
  async findAll(): Promise<T[]> {
    const db = await this.dbManager.getDB();
    return db.getAll(this.storeName);
  }

  // Find a record by ID
  async findOne(id: StoreKey<S, StoreNames<S>>): Promise<T | undefined> {
    const db = await this.dbManager.getDB();
    return db.get(this.storeName, id);
  }

  // Create a new record
  async create(data: Omit<T, keyof BaseModel>): Promise<T> {
    const db = await this.dbManager.getDB();
    const now = new Date();
    const newRecord = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: now,
      updatedAt: now,
    } as T;

    await db.add(this.storeName, newRecord as StoreValue<S, StoreNames<S>>);
    return newRecord;
  }

  // Update a record
  async update(
    id: StoreKey<S, StoreNames<S>>,
    changes: Partial<Omit<T, keyof BaseModel>>,
  ): Promise<T | null> {
    const db = await this.dbManager.getDB();
    const record = await db.get(this.storeName, id);

    if (!record) return null;

    const updatedRecord = {
      ...record,
      ...changes,
      updatedAt: new Date(),
    } as T;

    await db.put(this.storeName, updatedRecord as StoreValue<S, StoreNames<S>>);
    return updatedRecord;
  }

  // Delete a record
  async delete(id: StoreKey<S, StoreNames<S>>): Promise<boolean> {
    const db = await this.dbManager.getDB();
    await db.delete(this.storeName, id);
    return true;
  }

  // Find records by a specific index
  async findByIndex(
    indexName: IndexNames<S, StoreNames<S>>,
    value: any,
  ): Promise<T[]> {
    const db = await this.dbManager.getDB();
    return db.getAllFromIndex(this.storeName, indexName, value);
  }
}
