import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { Network } from "@/db/repos/network.repo";
import { Token } from "@/db/repos/token.repo";
import { zeroAddress } from "viem";
import { createSelector } from "reselect";

export type BridgeInfo = {
  network?: Network;
  token?: Token;
  amount?: number;
  usdValue?: number;
  balance?: number;
};

export interface BridgeState {
  allTokens: Record<string, Token[]>; // chainId -> tokens mapping
  sourceNetwork?: Network;
  destinationNetwork?: Network;
  sourceToken?: Token;
  destinationToken?: Token;
  sourceAmount: number;
  sourceUsdValue: number;
  sourceBalance: number;
  destinationAmount: number;
  destinationUsdValue: number;
  destinationBalance: number;
}

const initialState: BridgeState = {
  allTokens: {},
  sourceAmount: 0,
  sourceUsdValue: 0,
  sourceBalance: 0,
  destinationAmount: 0,
  destinationUsdValue: 0,
  destinationBalance: 0,
};

export const bridgeSlice = createSlice({
  name: "bridge",
  initialState,
  reducers: {
    // Update token lists for a specific chain
    setTokensForChain: (
      state,
      action: PayloadAction<{ chainId: number; tokens: Token[] }>,
    ) => {
      const { chainId, tokens } = action.payload;
      state.allTokens[chainId] = tokens;

      // Auto-select tokens if networks are set but tokens aren't
      if (state.sourceNetwork?.chainId === chainId && !state.sourceToken) {
        state.sourceToken = findDefaultToken(tokens);
      }

      if (
        state.destinationNetwork?.chainId === chainId &&
        !state.destinationToken
      ) {
        // If on same chain as source, filter out source token first
        if (
          state.sourceNetwork?.chainId === state.destinationNetwork?.chainId &&
          state.sourceToken
        ) {
          const availableTokens = tokens.filter(
            (t) => t.address !== state.sourceToken?.address,
          );
          state.destinationToken = findDefaultToken(availableTokens);
        } else {
          state.destinationToken = findDefaultToken(tokens);
        }
      }
    },

    // Set source network
    setSourceNetwork: (state, action: PayloadAction<Network>) => {
      const newNetwork = action.payload;
      state.sourceNetwork = newNetwork;

      // Auto-select token for the new network
      const availableTokens = state.allTokens[newNetwork.chainId] || [];

      // If destination is on same chain, filter out destination token
      if (
        state.destinationNetwork?.chainId === newNetwork.chainId &&
        state.destinationToken
      ) {
        const filteredTokens = availableTokens.filter(
          (t) => t.address !== state.destinationToken?.address,
        );
        state.sourceToken = findDefaultToken(filteredTokens);
      } else {
        state.sourceToken = findDefaultToken(availableTokens);
      }
    },

    // Set destination network
    setDestinationNetwork: (state, action: PayloadAction<Network>) => {
      const newNetwork = action.payload;
      state.destinationNetwork = newNetwork;

      // Auto-select token for the new network
      const availableTokens = state.allTokens[newNetwork.chainId] || [];

      // If source is on same chain, filter out source token
      if (
        state.sourceNetwork?.chainId === newNetwork.chainId &&
        state.sourceToken
      ) {
        const filteredTokens = availableTokens.filter(
          (t) => t.address !== state.sourceToken?.address,
        );
        state.destinationToken = findDefaultToken(filteredTokens);
      } else {
        state.destinationToken = findDefaultToken(availableTokens);
      }
    },

    // Set source token
    setSourceToken: (state, action: PayloadAction<Token>) => {
      const newToken = action.payload;
      state.sourceToken = newToken;

      // If on same chain, ensure destination token is different
      if (
        state.sourceNetwork?.chainId === state.destinationNetwork?.chainId &&
        newToken.address === state.destinationToken?.address
      ) {
        // Need to select a different token for destination
        const availableTokens =
          state.allTokens[state.destinationNetwork.chainId] || [];
        const filteredTokens = availableTokens.filter(
          (t) => t.address !== newToken.address,
        );
        state.destinationToken = findDefaultToken(filteredTokens);
      }
    },

    // Set destination token
    setDestinationToken: (state, action: PayloadAction<Token>) => {
      const newToken = action.payload;
      state.destinationToken = newToken;

      // If on same chain, ensure source token is different
      if (
        state.sourceNetwork?.chainId === state.destinationNetwork?.chainId &&
        newToken.address === state.sourceToken?.address
      ) {
        // Need to select a different token for source
        const availableTokens =
          state.allTokens[state.sourceNetwork.chainId] || [];
        const filteredTokens = availableTokens.filter(
          (t) => t.address !== newToken.address,
        );
        state.sourceToken = findDefaultToken(filteredTokens);
      }
    },

    // Update source details
    updateSourceDetails: (
      state,
      action: PayloadAction<{
        amount?: number;
        usdValue?: number;
        balance?: number;
      }>,
    ) => {
      const { amount, usdValue, balance } = action.payload;
      if (amount !== undefined) state.sourceAmount = amount;
      if (usdValue !== undefined) state.sourceUsdValue = usdValue;
      if (balance !== undefined) state.sourceBalance = balance;
    },

    // Update destination details
    updateDestinationDetails: (
      state,
      action: PayloadAction<{
        amount?: number;
        usdValue?: number;
        balance?: number;
      }>,
    ) => {
      const { amount, usdValue, balance } = action.payload;
      if (amount !== undefined) state.destinationAmount = amount;
      if (usdValue !== undefined) state.destinationUsdValue = usdValue;
      if (balance !== undefined) state.destinationBalance = balance;
    },

    // Switch source and destination
    switchNetworks: (state) => {
      // Swap networks
      const tempNetwork = state.sourceNetwork;
      state.sourceNetwork = state.destinationNetwork;
      state.destinationNetwork = tempNetwork;

      // Swap tokens
      const tempToken = state.sourceToken;
      state.sourceToken = state.destinationToken;
      state.destinationToken = tempToken;

      // Swap amounts and balances
      const tempAmount = state.sourceAmount;
      state.sourceAmount = state.destinationAmount;
      state.destinationAmount = tempAmount;

      const tempUsdValue = state.sourceUsdValue;
      state.sourceUsdValue = state.destinationUsdValue;
      state.destinationUsdValue = tempUsdValue;

      const tempBalance = state.sourceBalance;
      state.sourceBalance = state.destinationBalance;
      state.destinationBalance = tempBalance;
    },
  },
});

// Helper function to find default token (native or first in list)
const findDefaultToken = (tokens: Token[]): Token | undefined => {
  if (!tokens || tokens.length === 0) return undefined;
  return tokens.find((t) => t.address === zeroAddress) || tokens[0];
};

// Selectors
export const selectBridge = (state: RootState) => state["bridge"];

export const selectSourceTokenOptions = createSelector(
  [selectBridge],
  (bridge) => {
    if (!bridge.sourceNetwork) return [];

    const allTokensForChain =
      bridge.allTokens[bridge.sourceNetwork.chainId] || [];

    if (
      bridge.sourceNetwork.chainId === bridge.destinationNetwork?.chainId &&
      bridge.destinationToken
    ) {
      return allTokensForChain.filter(
        (t) => t.address !== bridge.destinationToken?.address,
      );
    }

    return allTokensForChain;
  },
);

export const selectDestinationTokenOptions = createSelector(
  [selectBridge],
  (bridge) => {
    if (!bridge.destinationNetwork) return [];

    const allTokensForChain =
      bridge.allTokens[bridge.destinationNetwork.chainId] || [];

    if (
      bridge.destinationNetwork.chainId === bridge.sourceNetwork?.chainId &&
      bridge.sourceToken
    ) {
      return allTokensForChain.filter(
        (t) => t.address !== bridge.sourceToken?.address,
      );
    }

    return allTokensForChain;
  },
);

export const selectIsSameNetwork = (state: RootState): boolean => {
  const bridge = selectBridge(state);
  return (
    !!bridge.sourceNetwork &&
    !!bridge.destinationNetwork &&
    bridge.sourceNetwork.chainId === bridge.destinationNetwork.chainId
  );
};

export const {
  setTokensForChain,
  setSourceNetwork,
  setDestinationNetwork,
  setSourceToken,
  setDestinationToken,
  updateSourceDetails,
  updateDestinationDetails,
  switchNetworks,
} = bridgeSlice.actions;

export default bridgeSlice.reducer;
