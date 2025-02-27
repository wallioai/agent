import {
  openDB,
  type DBSchema,
  type IDBPDatabase,
  type StoreNames,
  type IndexNames,
} from "idb";

export interface AppDBSchema extends DBSchema {}

export class DBManager<T extends AppDBSchema> {
  private static instance: DBManager<any> | null = null;
  private dbPromise: Promise<IDBPDatabase<any>> | null = null;

  private constructor(
    private dbName: string,
    private dbVersion: number,
    private storeConfigs: {
      name: StoreNames<T>;
      keyPath?: string;
      indexes?: Array<{
        name: string;
        keyPath: string | string[];
        options?: IDBIndexParameters;
      }>;
    }[],
  ) {}

  // Singleton pattern to ensure only one database connection
  public static getInstance<S extends AppDBSchema>(
    dbName: string,
    dbVersion: number,
    storeConfigs: {
      name: StoreNames<S>;
      keyPath?: string;
      indexes?: Array<{
        name: string;
        keyPath: string | string[];
        options?: IDBIndexParameters;
      }>;
    }[],
  ): DBManager<S> {
    if (!this.instance) {
      this.instance = new DBManager<S>(dbName, dbVersion, storeConfigs);
    }
    return this.instance as DBManager<S>;
  }

  public async getDB(): Promise<IDBPDatabase<T>> {
    if (!this.dbPromise) {
      this.dbPromise = openDB<T>(this.dbName, this.dbVersion, {
        upgrade: (db) => {
          // Create all stores defined in the configuration
          for (const config of this.storeConfigs) {
            if (!db.objectStoreNames.contains(config.name)) {
              const store = db.createObjectStore(config.name, {
                keyPath: config.keyPath || "id",
              });

              // Create indexes for the store
              if (config.indexes) {
                for (const index of config.indexes) {
                  store.createIndex(
                    index.name as IndexNames<T, StoreNames<T>>,
                    index.keyPath,
                    index.options,
                  );
                }
              }
            }
          }
        },
      });
    }
    return this.dbPromise;
  }
}
