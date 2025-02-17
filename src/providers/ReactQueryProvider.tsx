"use client";

import { PropsWithChildren, useState } from "react";
import {
  PersistQueryClientProvider,
  Persister,
} from "@tanstack/react-query-persist-client";
import { createPersister } from "@/lib/persister";
import { queryClient } from "@/clients/query.client";

export function ReactQueryProvider({ children }: PropsWithChildren) {
  const [persister] = useState<Persister>(createPersister);
  return (
    <PersistQueryClientProvider
      persistOptions={{ persister }}
      client={queryClient}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
