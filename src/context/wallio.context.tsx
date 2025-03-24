"use client";

import { getChats } from "@/actions/chat.action";
import { QueryKey } from "@/enums/query.enum";
import { Chat } from "@/types/chat.type";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type WallioContextType = {
  threadId?: string;
  initialMessages: Chat[];
  setFetchThreadChats: Dispatch<SetStateAction<boolean>>;
};

const WallioContext = createContext<WallioContextType | undefined>(undefined);

export function WallioProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const threadId = searchParams.get("chat");

  const [fetchThreadChats, setFetchThreadChats] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: [QueryKey.Chats, threadId],
    queryFn: async () => {
      const res = await getChats(threadId);
      if (res.status) {
        return res.data;
      }
      return [];
    },
    enabled: !!threadId && fetchThreadChats,
    staleTime: 0,
  });

  const contextValue = useMemo(
    () => ({
      threadId,
      initialMessages: data ?? [],
      setFetchThreadChats,
    }),
    [setFetchThreadChats, data, threadId],
  );

  return (
    <WallioContext.Provider value={contextValue}>
      {children}
    </WallioContext.Provider>
  );
}

export function useWallio() {
  const context = useContext(WallioContext);
  if (context === undefined) {
    throw new Error("useWalllio must be used within a WallioProvider");
  }
  return context;
}
