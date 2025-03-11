export const dlnDestinationAbi = [
  {
    inputs: [],
    name: "AdminBadRole",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "expectedBeneficiary",
        type: "bytes",
      },
    ],
    name: "AllowOnlyForBeneficiary",
    type: "error",
  },
  {
    inputs: [],
    name: "CallProxyBadRole",
    type: "error",
  },
  {
    inputs: [],
    name: "EthTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ExternalCallIsBlocked",
    type: "error",
  },
  {
    inputs: [],
    name: "GovMonitoringBadRole",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectOrderStatus",
    type: "error",
  },
  {
    inputs: [],
    name: "MismatchGiveChainId",
    type: "error",
  },
  {
    inputs: [],
    name: "MismatchNativeTakerAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "MismatchTakerAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "MismatchedOrderId",
    type: "error",
  },
  {
    inputs: [],
    name: "MismatchedTransferAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "nativeSender",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "chainIdFrom",
        type: "uint256",
      },
    ],
    name: "NativeSenderBadRole",
    type: "error",
  },
  {
    inputs: [],
    name: "NotSupportedDstChain",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedFeeTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalidV",
    type: "error",
  },
  {
    inputs: [],
    name: "TheSameFromTo",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferAmountNotCoverFees",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "UnexpectedBatchSize",
    type: "error",
  },
  {
    inputs: [],
    name: "UnknownEngine",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongAddressLength",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongAutoArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongChain",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "orderTakeFinalAmount",
        type: "uint256",
      },
    ],
    name: "DecreasedTakeAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct DlnBase.Order",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "unlockAuthority",
        type: "address",
      },
    ],
    name: "FulfilledOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct DlnBase.Order",
        name: "order",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "cancelBeneficiary",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "submissionId",
        type: "bytes32",
      },
    ],
    name: "SentOrderCancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "beneficiary",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "submissionId",
        type: "bytes32",
      },
    ],
    name: "SentOrderUnlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainIdFrom",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "dlnSourceAddress",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "enum DlnBase.ChainEngine",
        name: "chainEngine",
        type: "uint8",
      },
    ],
    name: "SetDlnSourceAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "BPS_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EVM_ADDRESS_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GOVMONITORING_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_ADDRESS_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_ORDER_COUNT_PER_BATCH_EVM_UNLOCK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NATIVE_AMOUNT_DIVIDER_FOR_TRANSFER_TO_SOLANA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SOLANA_ADDRESS_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SOLANA_CHAIN_ID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "chainEngines",
    outputs: [
      {
        internalType: "enum DlnBase.ChainEngine",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deBridgeGate",
    outputs: [
      {
        internalType: "contract IDeBridgeGate",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dlnSourceAddresses",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        internalType: "struct DlnBase.Order",
        name: "_order",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_fulFillAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_orderId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_permitEnvelope",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_unlockAuthority",
        type: "address",
      },
    ],
    name: "fulfillOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "cid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        internalType: "struct DlnBase.Order",
        name: "_order",
        type: "tuple",
      },
    ],
    name: "getOrderId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IDeBridgeGate",
        name: "_deBridgeGate",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        internalType: "struct DlnBase.Order",
        name: "_order",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_newSubtrahend",
        type: "uint256",
      },
    ],
    name: "patchOrderTake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_orderIds",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_executionFee",
        type: "uint256",
      },
    ],
    name: "sendBatchEvmUnlock",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        internalType: "struct DlnBase.Order",
        name: "_order",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_cancelBeneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_executionFee",
        type: "uint256",
      },
    ],
    name: "sendEvmOrderCancel",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_orderId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_executionFee",
        type: "uint256",
      },
    ],
    name: "sendEvmUnlock",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        internalType: "struct DlnBase.Order",
        name: "_order",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_cancelBeneficiary",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_executionFee",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_reward1",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_reward2",
        type: "uint64",
      },
    ],
    name: "sendSolanaOrderCancel",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "makerOrderNonce",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "makerSrc",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "giveTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "giveAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takeChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "takeTokenAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "takeAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "receiverDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "givePatchAuthoritySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "orderAuthorityAddressDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedTakerDst",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "externalCall",
            type: "bytes",
          },
        ],
        internalType: "struct DlnBase.Order",
        name: "_order",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_beneficiary",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_executionFee",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_solanaExternalCallReward1",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_solanaExternalCallReward2",
        type: "uint64",
      },
    ],
    name: "sendSolanaUnlock",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainIdFrom",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_dlnSourceAddress",
        type: "bytes",
      },
      {
        internalType: "enum DlnBase.ChainEngine",
        name: "_chainEngine",
        type: "uint8",
      },
    ],
    name: "setDlnSourceAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "takeOrders",
    outputs: [
      {
        internalType: "enum DlnDestination.OrderTakeStatus",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "takerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "giveChainId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "takePatches",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;
