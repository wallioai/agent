import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { IUser } from "@/types/user.type";

export interface AuthState {
  connected: boolean;
  user?: IUser;
}

const initialState = {
  connected: false,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setUser } = authSlice.actions;

export const selectAuth = (state: RootState) => state["auth"];

export default authSlice.reducer;
