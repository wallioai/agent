import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export interface HideBalanceType {
  value: boolean;
}

const initialState = {
  value: false,
} as HideBalanceType;

export const hideBalanceSlice = createSlice({
  name: "hide-balance",
  initialState,
  reducers: {
    setHideBalance: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setHideBalance } = hideBalanceSlice.actions;

export const selectHideBalance = (state: RootState) => state["hide-balance"].value;

export default hideBalanceSlice.reducer;
