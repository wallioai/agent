import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export interface ChatSideBar {
  open: boolean;
}

const initialState = {
  open: false,
} as ChatSideBar;

export const chatSidebarSlice = createSlice({
  name: "chat-sidebar",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = chatSidebarSlice.actions;

export const selectOpen = (state: RootState) =>
  state["chat-sidebar"].open;

export default chatSidebarSlice.reducer;
