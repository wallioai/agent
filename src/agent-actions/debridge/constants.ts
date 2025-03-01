import { type Chain as IChain } from "viem/chains";
import * as chains from "viem/chains";

export enum Chain {
  ABSTRACT = "abstract",
  ARBITRUM = "arbitrum",
  AVALANCHE = "avalanche",
  BASE = "base",
  BERACHAIN = "berachain",
  BITROCK = "bitrock",
  BNBCHAIN = "bsc",
  BNB_GNFD_CHAIN = "bscGreenfield",
  CRONOS = "cronos",
  CRONOS_ZKEVM = "cronoszkEVM",
  CROSS_FI = "crossFi",
  ETHEREUM = "ethereum",
  FANTOM = "fantom",
  GNOSIS = "gnosis",
  HECO = "heco",
  HYPER_EVM = "hyperEVM",
  METIS = "metis",
  NEON = "neon",
  LINEA = "linea",
  OPBNB = "opBNB",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  POLYGON_ZKEVM = "polygonzkEVM",
  SEI = "sei",
  SONIC = "sonic",
  STORY = "story",
  TRON = "tron",
}

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

export const ChainById = {
  [Chain.ABSTRACT]: 2741,
  [Chain.ARBITRUM]: 42161,
  [Chain.AVALANCHE]: 43114,
  [Chain.BASE]: 8453,
  [Chain.BERACHAIN]: 80094,
  [Chain.BITROCK]: 7171,
  [Chain.BNBCHAIN]: 56,
  [Chain.BNB_GNFD_CHAIN]: 1017,
  [Chain.CRONOS]: 25,
  [Chain.CRONOS_ZKEVM]: 388,
  [Chain.CROSS_FI]: 4158,
  [Chain.ETHEREUM]: 1,
  [Chain.FANTOM]: 250,
  [Chain.GNOSIS]: 100,
  [Chain.HECO]: 128,
  [Chain.HYPER_EVM]: 999,
  [Chain.LINEA]: 59144,
  [Chain.METIS]: 1088,
  [Chain.NEON]: 245022934,
  [Chain.OPBNB]: 204,
  [Chain.OPTIMISM]: 10,
  [Chain.POLYGON]: 137,
  [Chain.POLYGON_ZKEVM]: 1101,
  [Chain.SEI]: 1329,
  [Chain.SONIC]: 146,
  [Chain.STORY]: 1514,
  [Chain.TRON]: 728126428,
};

export const CoingeckoChainId = {
  [Chain.ABSTRACT]: "abstract-ecosystem",
  [Chain.ARBITRUM]: "arbitrum-ecosystem",
  [Chain.AVALANCHE]: "avalanche-ecosystem",
  [Chain.BASE]: "base-ecosystem",
  [Chain.BERACHAIN]: "berachain-ecosystem",
  [Chain.BITROCK]: "bitrock-ecosystem",
  [Chain.BNBCHAIN]: "binance-smart-chain",
  [Chain.CRONOS]: "cronos-ecosystem",
  [Chain.CRONOS_ZKEVM]: "cronos-zkevm-ecosystem",
  [Chain.ETHEREUM]: "ethereum-ecosystem",
  [Chain.FANTOM]: "fantom-ecosystem",
  [Chain.GNOSIS]: "xdai-ecosystem",
  [Chain.HECO]: "heco-chain-ecosystem",
  [Chain.HYPER_EVM]: "hyperevm-ecosystem",
  [Chain.LINEA]: "linea-ecosystem",
  [Chain.METIS]: "metis-ecosystem",
  [Chain.NEON]: "neon-ecosystem",
  [Chain.OPBNB]: "opbnb-ecosystem",
  [Chain.OPTIMISM]: "optimism-ecosystem",
  [Chain.POLYGON]: "polygon-ecosystem",
  [Chain.POLYGON_ZKEVM]: "polygon-zkevm-ecosystem",
  [Chain.SEI]: "sei-ecosystem",
  [Chain.SONIC]: "sonic-ecosystem",
  [Chain.STORY]: "story-ecosystem",
  [Chain.TRON]: "tron-ecosystem",
};

export const MainnetChains = Object.keys(ChainById).map((value) => value);

export const getChain = (id: string): IChain => {
  const chainList = Object.values(chains);
  return chainList.find((chain) => chain.id === parseInt(id)) as IChain;
};
