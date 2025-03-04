import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/account/auth.slice";
import hideBalanceReducer from "./slices/account/hide-balance.slice";
import bridgeReducer from "./slices/bridge/bridge.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    "hide-balance": hideBalanceReducer,
    bridge: bridgeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
