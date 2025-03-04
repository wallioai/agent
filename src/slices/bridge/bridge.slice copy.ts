import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { Network } from "@/db/repos/network.repo";
import { Token } from "@/db/repos/token.repo";
import { zeroAddress } from "viem";

export type BridgeInfo = {
  network?: Network;
  token?: Token;
  amount?: number;
  usdValue?: number;
  balance?: number;
  tokens?: Token[];
};

export interface BridgeState {
  isSameNetwork: boolean;
  source: BridgeInfo;
  destination: BridgeInfo;
}

const initialState = {
  isSameNetwork: false,
  source: {
    tokens: [],
    amount: 0,
    usdValue: 0,
    balance: 0,
  },
  destination: {
    tokens: [],
    amount: 0,
    usdValue: 0,
    balance: 0,
  },
} as BridgeState;

export const bridgeSlice = createSlice({
  name: "bridge",
  initialState,
  reducers: {
    updateSource: (state, action: PayloadAction<Partial<BridgeInfo>>) => {
      state.source = { ...state.source, ...action.payload };

      const srcChainId = state.source?.network?.chainId;
      const dstChainId = state.destination?.network?.chainId;
      const isSameChain = srcChainId === dstChainId;
      if (isSameChain) {
        // Get current selected token on destination chain
        const currentDstToken = state.destination.token;

        // Filter out current destination token from source tokens
        const sourceTokens = state.source.tokens?.filter(
          (t) => t.address !== currentDstToken?.address,
        );

        // Set source tokens array and source token
        const userSelectedToken = action.payload.token;
        state.source.tokens = sourceTokens;
        state.source.token = userSelectedToken;

        /**
         * Update the destination tokens array by removing userSelectedToken
         * from the destination tokens array
         */
        const retrieveToken = sourceTokens.filter(
          (t) => t.address !== userSelectedToken.address,
        );
        const newDstTokenArray = [currentDstToken, ...retrieveToken];
        state.destination.tokens = newDstTokenArray;
      }
    },

    /**
     * The updateSourceToken is called once the network is changed
     * @param state
     * @param action of payload type of Token Array
     */
    updateSourceTokens: (state, action: PayloadAction<Token[]>) => {
      // Auto select token base on chain
      const srcChainId = state.source?.network?.chainId;
      const dstChainId = state.destination?.network?.chainId;
      const isSameChain = srcChainId == dstChainId;
      if (isSameChain) {
        // Get current selected token on destination chain
        const currentDstToken = state.destination.token;

        // Filter out current destination token from payload
        const sourceTokens = action.payload?.filter(
          (t) => t.address !== currentDstToken?.address,
        );

        // Set source tokens array and auto select a token
        const nativeToken = sourceTokens?.find((t) => t.address == zeroAddress);
        const autoSelectedSourceToken = nativeToken ?? sourceTokens[0];
        state.source.tokens = sourceTokens;
        state.source.token = autoSelectedSourceToken;

        /**
         * Update the destination tokens array by removing autoSelectedSourceToken
         * from the destination tokens array
         */
        const newDstTokenArray = state.destination.tokens?.filter(
          (t) => t.address !== autoSelectedSourceToken.address,
        );
        state.destination.tokens = newDstTokenArray;
      } else {
        // Set source tokens array to payload param and auto select a token
        const sourceTokens = action.payload;
        const nativeToken = sourceTokens?.find((t) => t.address == zeroAddress);
        const autoSelectedSourceToken = nativeToken ?? sourceTokens[0];
        state.source.tokens = sourceTokens;
        state.source.token = autoSelectedSourceToken;
      }
    },
    updateDestination: (state, action: PayloadAction<Partial<BridgeInfo>>) => {
      state.destination = { ...state.destination, ...action.payload };

      const srcChainId = state.source?.network?.chainId;
      const dstChainId = state.destination?.network?.chainId;
      const isSameChain = srcChainId === dstChainId;
      if (isSameChain) {
        // Get current selected token on source chain
        const currentSourceToken = state.source.token;

        // Filter out current source token from destination tokens
        const dstTokens = state.source.tokens?.filter(
          (t) => t.address !== currentSourceToken?.address,
        );

        // Set destination tokens array and destination token
        const userSelectedToken = action.payload.token;
        state.destination.tokens = dstTokens;
        state.destination.token = userSelectedToken;

        /**
         * Update the source tokens array by removing userSelectedToken
         * from the source tokens array
         */
        const retrieveToken = dstTokens.filter(
          (t) => t.address !== userSelectedToken?.address,
        );
        const newSourceTokenArray = [currentSourceToken, ...retrieveToken];
        state.source.tokens = newSourceTokenArray;
      }
    },
    /**
     * The updateDestinationToken is called once the network is changed
     * @param state
     * @param action of payload type of Token Array
     */
    updateDestinationTokens: (state, action: PayloadAction<Token[]>) => {
      // Auto select token base on chain
      const dstChainId = state.destination?.network?.chainId;
      const srcChainId = state.source?.network?.chainId;
      const isSameChain = dstChainId == srcChainId;
      if (isSameChain) {
        // Get current selected token on source chain
        const currentSrcToken = state.source.token;

        // Filter out current source token from payload
        const destinationTokens = action.payload?.filter(
          (t) => t.address !== currentSrcToken?.address,
        );

        // Set destination tokens array and auto select a token
        const nativeToken = destinationTokens?.find(
          (t) => t.address == zeroAddress,
        );
        const autoSelectedDstToken = nativeToken ?? destinationTokens[0];
        state.destination.tokens = destinationTokens;
        state.destination.token = autoSelectedDstToken;

        /**
         * Update the source tokens array by removing autoSelectedDstToken
         * from the source tokens array
         */
        const newSourceTokenArray = state.source.tokens?.filter(
          (t) => t.address !== autoSelectedDstToken.address,
        );
        state.source.tokens = newSourceTokenArray;
      } else {
        // Set destination tokens array to payload param and auto select a token
        const destinationTokens = action.payload;
        const nativeToken = destinationTokens?.find(
          (t) => t.address == zeroAddress,
        );
        const autoSelectedDstToken = nativeToken ?? destinationTokens[0];
        state.destination.tokens = destinationTokens;
        state.destination.token = autoSelectedDstToken;
      }
    },

    switchSource: (state) => {
      const source = state.source;
      const destination = state.destination;
      state.source = destination;
      state.destination = source;
    },
  },
});

export const {
  updateDestination,
  updateDestinationTokens,
  updateSource,
  updateSourceTokens,
  switchSource,
} = bridgeSlice.actions;

export const selectBridge = (state: RootState) => state["bridge"];

export default bridgeSlice.reducer;
