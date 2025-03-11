"use client";

import { isAuthenticated as checkAuthStatus } from "@/actions/auth.action";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { IUser } from "@/types/user.type";
import { selectAuth, setAuth, setUser } from "@/slices/account/auth.slice";
import { createContext, useContext, useEffect, useMemo } from "react";

type AuthContextType = {
  user?: IUser;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector(selectAuth);

  useEffect(() => {
    const initAuthState = async () => {
      const status = await checkAuthStatus();
      dispatch(setAuth(status.state));
      if (status.user) {
        const { iat, exp, ...props } = status.user;
        dispatch(setUser(props));
      }
    };
    initAuthState();
  }, [dispatch]);

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
    }),
    [isAuthenticated, user],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
