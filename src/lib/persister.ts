import { get, set, del } from "idb-keyval";
import {
  PersistedClient,
  Persister,
} from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export function createIDBPersister(
  idbValidKey: IDBValidKey = "billcheap.ts.query"
) {
  return {
    persistClient: async (client: PersistedClient) => {
      await set(idbValidKey, client);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbValidKey);
    },
    removeClient: async () => {
      await del(idbValidKey);
    },
  } as Persister;
}

export function createPersister() {
  return createSyncStoragePersister({
    serialize: JSON.stringify,
    storage: window.localStorage,
    deserialize: JSON.parse,
  });
}
