import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/account/auth.slice";
import viewportReducer from "./slices/viewport/viewport.slice";
import hideBalanceReducer from "./slices/account/hide-balance.slice";
import chatSidebarReducer from "./slices/chats/sidebar.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    viewport: viewportReducer,
    "hide-balance": hideBalanceReducer,
    "chat-sidebar": chatSidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
