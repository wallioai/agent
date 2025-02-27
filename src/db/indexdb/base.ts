import {
  openDB,
  type DBSchema,
  type IDBPDatabase,
  type StoreNames,
  type IndexNames,
  StoreKey,
  StoreValue,
} from "idb";

export interface BaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class BaseIDB<T extends BaseModel, S extends DBSchema> {
  protected dbName: string;
  protected dbVersion: number;
  protected storeName: StoreNames<S>;
  protected dbPromise: Promise<IDBPDatabase<S>> | null = null;
  protected indexes: {
    name: IndexNames<S, StoreNames<S>>;
    keyPath: string;
    options?: IDBIndexParameters;
  }[] = [];

  constructor(dbName: string, dbVersion: number, storeName: StoreNames<S>) {
    this.dbName = dbName;
    this.dbVersion = dbVersion;
    this.storeName = storeName;
  }

  protected async initDB(): Promise<IDBPDatabase<S>> {
    if (!this.dbPromise) {
      this.dbPromise = openDB<S>(this.dbName, this.dbVersion, {
        upgrade: (db) => {
          // Create the store if it doesn't exist
          if (!db.objectStoreNames.contains(this.storeName)) {
            const store = db.createObjectStore(this.storeName, {
              keyPath: "id",
            });

            // Create indexes
            this.indexes.forEach(({ name, keyPath, options }) => {
              store.createIndex(name, keyPath, options);
            });
          }
        },
      });
    }
    return this.dbPromise;
  }

  // Find all records
  async findAll(): Promise<T[]> {
    const db = await this.initDB();
    return db.getAll(this.storeName);
  }

  // Find a record by ID
  async findOne(
    id: IDBKeyRange | StoreKey<S, StoreNames<S>>,
  ): Promise<T | undefined> {
    const db = await this.initDB();
    return db.get(this.storeName, id);
  }

  // Create a new record
  async create(data: Omit<T, "id" | "createdAt" | "updatedAt">): Promise<T> {
    const db = await this.initDB();
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
    id: IDBKeyRange | StoreKey<S, StoreNames<S>>,
    changes: Partial<Omit<T, "id" | "createdAt" | "updatedAt">>,
  ): Promise<T | null> {
    const db = await this.initDB();
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
  async delete(id: IDBKeyRange | StoreKey<S, StoreNames<S>>): Promise<boolean> {
    const db = await this.initDB();
    await db.delete(this.storeName, id);
    return true;
  }

  // Find records by a specific index
  async findByIndex(
    indexName: IndexNames<S, StoreNames<S>>,
    value: any,
  ): Promise<T[]> {
    const db = await this.initDB();
    return db.getAllFromIndex(this.storeName, indexName, value);
  }
}
