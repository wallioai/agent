const factoryAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_entryPoint",
        type: "address",
        internalType: "contract IEntryPoint",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "accountImplementation",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract DexaSmartAccount",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createAccount",
    inputs: [
      { name: "owner", type: "bytes", internalType: "bytes" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
    ],
    outputs: [
      {
        name: "account",
        type: "address",
        internalType: "contract DexaSmartAccount",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getAddress",
    inputs: [
      { name: "owner", type: "bytes", internalType: "bytes" },
      { name: "nonce", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initCodeHash",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
] as const;

export default factoryAbi;
