import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export interface ViewState {
  fullScreen: boolean;
}

const initialState = {
  fullScreen: true,
} as ViewState;

export const viewportSlice = createSlice({
  name: "viewport",
  initialState,
  reducers: {
    setViewport: (state, action: PayloadAction<boolean>) => {
      state.fullScreen = action.payload;
    },
  },
});

export const { setViewport } = viewportSlice.actions;

export const selectViewport = (state: RootState) => state["viewport"].fullScreen;

export default viewportSlice.reducer;
