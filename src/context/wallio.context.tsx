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
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectViewport } from "@/slices/viewport/viewport.slice";

type WallioContextType = {
  isMobile: boolean;
  isAutoMode: boolean;
  chatMode: boolean;
};

const WallioContext = createContext<WallioContextType | undefined>(undefined);

export function WallioProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const chatMode = useAppSelector(selectViewport);

  const isAutoMode = useMemo(() => {
    return isMobile && mode == "auto";
  }, [isMobile, mode]);

  const contextValue = useMemo(
    () => ({
      isMobile,
      isAutoMode,
      chatMode,
    }),
    [isMobile, isAutoMode, chatMode],
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
