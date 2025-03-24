"use client";

import type React from "react";

import { createContext, useContext } from "react";
import { useEnhancedRouter } from "@/hooks/router.hook";

// Create a context for the enhanced router
const EnhancedRouterContext = createContext<
  ReturnType<typeof useEnhancedRouter> | undefined
>(undefined);

// Options for the enhanced router
export interface RouterProviderProps {
  children: React.ReactNode;
  preserveParams?: string[];
  excludePaths?: string[];
  includePaths?: string[];
  debug?: boolean; // Add this line
}

export function RouterProvider({
  children,
  preserveParams = ["chat"],
  excludePaths = ["/login", "/register", "/auth"],
  includePaths,
  debug = false, // Add this line
}: RouterProviderProps) {
  // Create the enhanced router
  const enhancedRouter = useEnhancedRouter({
    preserveParams,
    excludePaths,
    includePaths,
    debug, // Add this line
  });

  return (
    <EnhancedRouterContext.Provider value={enhancedRouter}>
      {children}
    </EnhancedRouterContext.Provider>
  );
}

// Hook to use the enhanced router
export function useRouter() {
  const context = useContext(EnhancedRouterContext);

  if (context === undefined) {
    throw new Error("useRouter must be used within a RouterProvider");
  }

  return context;
}
