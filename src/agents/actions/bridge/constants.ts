import { Chain, getChainMap } from "wallioai-kit";

export const supportedChains = [
  Chain.ARBITRUM,
  Chain.AVALANCHE,
  Chain.BNBCHAIN,
  Chain.ETHEREUM,
  Chain.POLYGON,
  Chain.LINEA,
  Chain.BASE,
  Chain.OPTIMISM,
  Chain.NEON,
  Chain.GNOSIS,
  Chain.METIS,
  Chain.BITROCK,
  Chain.SONIC,
  Chain.CROSS_FI,
  Chain.CRONOS_ZKEVM,
  Chain.ABSTRACT,
  Chain.BERACHAIN,
  Chain.STORY,
  Chain.HYPER_EVM,
];

export const deBridgeGates = {
  [Chain.ETHEREUM]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.BNBCHAIN]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.HECO]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.POLYGON]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.ARBITRUM]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.AVALANCHE]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.FANTOM]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.LINEA]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.BASE]: "0xc1656B63D9EEBa6d114f6bE19565177893e5bCBF",
  [Chain.OPTIMISM]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.NEON]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.GNOSIS]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.METIS]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.BITROCK]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.SONIC]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.CROSS_FI]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.CRONOS_ZKEVM]: "0xa706DaF168865b0b334ef8Ca2418F5AAC55a4b16",
  [Chain.ABSTRACT]: "0xa706DaF168865b0b334ef8Ca2418F5AAC55a4b16",
  [Chain.BERACHAIN]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.STORY]: "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA",
  [Chain.HYPER_EVM]: "0x43de2d77bf8027e25dbd179b491e8d64f38398aa",
};

export enum DLN {
  SOURCE = "source",
  DESTINATION = "destination",
  EXT_CALL_ADAPTER = "external_call_adapter",
  EXT_CALL_EXECUTOR = "external_call_executor",
  CC_FORWARDER = "cross_chain_forwarder",
}

export const evmDLNContracts = {
  [DLN.SOURCE]: "0xeF4fB24aD0916217251F553c0596F8Edc630EB66",
  [DLN.DESTINATION]: "0xe7351fd770a37282b91d153ee690b63579d6dd7f",
  [DLN.EXT_CALL_ADAPTER]: "0x61eF2e01E603aEB5Cd96F9eC9AE76cc6A68f6cF9",
  [DLN.EXT_CALL_EXECUTOR]: "0xFC2CA4022d26AD4dCb3866ae30669669F6A28f19",
  [DLN.CC_FORWARDER]: "0x663dc15d3c1ac63ff12e45ab68fea3f0a883c251",
};

export const svmDLNContracts = {
  [DLN.SOURCE]: "src5qyZHqTqecJV4aY6Cb6zDZLMDzrDKKezs22MPHr4",
  [DLN.DESTINATION]: "dst5MGcFPoBeREFAA5E3tU5ij8m5uVYwkzkSAbsLbNo",
};

export const DLNInternalId = {
  [Chain.ABSTRACT]: 100000017,
  [Chain.ARBITRUM]: 42161,
  [Chain.AVALANCHE]: 43114,
  [Chain.BASE]: 8453,
  [Chain.BERACHAIN]: 100000020,
  [Chain.BITROCK]: 100000005,
  [Chain.BNBCHAIN]: 56,
  [Chain.CRONOS_ZKEVM]: 100000010,
  [Chain.CROSS_FI]: 100000006,
  [Chain.ETHEREUM]: 1,
  [Chain.GNOSIS]: 100000002,
  [Chain.HYPER_EVM]: 100000022,
  [Chain.LINEA]: 59144,
  [Chain.METIS]: 100000004,
  [Chain.NEON]: 100000001,
  [Chain.OPTIMISM]: 10,
  [Chain.POLYGON]: 137,
  [Chain.SONIC]: 100000014,
  [Chain.STORY]: 100000013,
};

/**
 * Retrieve DLN internal ID by passing a chainId
 * @param chainId
 * @returns
 */
export const getDLNByChainId = (chainId: number) => {
  const chain = getChainMap(chainId);
  if (chain) return DLNInternalId[chain];
};
