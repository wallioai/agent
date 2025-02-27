import { zeroAddress } from "viem";
import { Chain, ChainById } from "../constants";

export const ETH_TOKENS = [
  {
    address: zeroAddress,
    symbol: "ETH",
    decimals: 18,
  },
  {
    address: "0x0f719591e2bcb6fcc3e68b16d2a88c89c6ae0d42",
    symbol: "EVOLVE",
    decimals: 18,
  },
  {
    address: "0x5bb29c33c4a3c29f56f8aca40b4db91d8a5fe2c5",
    symbol: "ONS",
    decimals: 18,
  },
  {
    address: "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
    symbol: "ELEC",
    decimals: 18,
  },
  {
    address: "0x77c6e4a580c0dce4e5c7a17d0bc077188a83a059",
    symbol: "SWUSD",
    decimals: 18,
  },
  {
    address: "0xf8e57ac2730d3088d98b79209739b0d5ba085a03",
    symbol: "OPAI",
    decimals: 18,
  },
  {
    address: "0xa58a4f5c4bb043d2cc1e170613b74e767c94189b",
    symbol: "UTU",
    decimals: 18,
  },
  {
    address: "0xc3eb2622190c57429aac3901808994443b64b466",
    symbol: "ORO",
    decimals: 18,
  },
  {
    address: "0x431d5dff03120afa4bdf332c61a6e1766ef37bdb",
    symbol: "JPYC",
    decimals: 18,
  },
  {
    address: "0x9e6be44cc1236eef7e1f197418592d363bedcd5a",
    symbol: "AZUR",
    decimals: 18,
  },
  {
    address: "0x7f5e1a2424ebdd141b0df15f974ddcb87751a012",
    symbol: "LLM",
    decimals: 18,
  },
  {
    address: "0x19848077f45356b21164c412eff3d3e4ff6ebc31",
    symbol: "SPIKE",
    decimals: 9,
  },
  {
    address: "0xb1f8302ee205bfe27514cd7185a3fc69bbbdb284",
    symbol: "EKO",
    decimals: 18,
  },
  {
    address: "0x2370f9d504c7a6e775bf6e14b3f12846b594cd53",
    symbol: "JPYC",
    decimals: 18,
  },
  {
    address: "0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81",
    symbol: "MUSE",
    decimals: 18,
  },
  {
    address: "0x246908bff0b1ba6ecadcf57fb94f6ae2fcd43a77",
    symbol: "DIVI",
    decimals: 8,
  },
  {
    address: "0xdf35988d795d90711e785b488bb2127692e6f956",
    symbol: "BABYFLOKI",
    decimals: 9,
  },
  {
    address: "0x77607588222e01bf892a29abab45796a2047fc7b",
    symbol: "UETH",
    decimals: 18,
  },
  {
    address: "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
    symbol: "TKN",
    decimals: 8,
  },
  {
    address: "0xb478c6245e3d85d6ec3486b62ea872128d562541",
    symbol: "LOOT",
    decimals: 18,
  },
  {
    address: "0xd5e0eda0214f1d05af466e483d9376a77a67448b",
    symbol: "TRALA",
    decimals: 18,
  },
  {
    address: "0xdab396ccf3d84cf2d07c4454e10c8a6f5b008d2b",
    symbol: "GFI",
    decimals: 18,
  },
  {
    address: "0x7051faed0775f664a0286af4f75ef5ed74e02754",
    symbol: "CHANGE",
    decimals: 18,
  },
  {
    address: "0x471a202f69d6e975da55e363dab1bdb2e86e0c0f",
    symbol: "GEKE",
    decimals: 18,
  },
  {
    address: "0xe07ecc676daf0b24b24a1c46c966d9c463984b38",
    symbol: "USEU",
    decimals: 18,
  },
  {
    address: "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8",
    symbol: "FWB",
    decimals: 18,
  },
  {
    address: "0xfad45e47083e4607302aa43c65fb3106f1cd7607",
    symbol: "HOGE",
    decimals: 9,
  },
  {
    address: "0x723cbfc05e2cfcc71d3d89e770d32801a5eef5ab",
    symbol: "BTCP",
    decimals: 8,
  },
  {
    address: "0x6fa5e1c43b5a466cbd1cae7993b67c982400d481",
    symbol: "COINBT",
    decimals: 18,
  },
  {
    address: "0x104e363ac6521e55a24ae724855362acec3febe6",
    symbol: "ACP",
    decimals: 18,
  },
  {
    address: "0x20c64dee8fda5269a78f2d5bdba861ca1d83df7a",
    symbol: "BHIGH",
    decimals: 18,
  },
  {
    address: "0x5dfc78c4d073fd343bc6661668948178522a0de5",
    symbol: "DERP",
    decimals: 18,
  },
  {
    address: "0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb",
    symbol: "XTK",
    decimals: 18,
  },
  {
    address: "0xd7c1eb0fe4a30d3b2a846c04aa6300888f087a5f",
    symbol: "POINTS",
    decimals: 18,
  },
  {
    address: "0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06",
    symbol: "PAR",
    decimals: 18,
  },
  {
    address: "0x70e8de73ce538da2beed35d14187f6959a8eca96",
    symbol: "XSGD",
    decimals: 6,
  },
  {
    address: "0x44a023a4c32bdd2c89ee87ee76a2332b1a883012",
    symbol: "ZAZZLES",
    decimals: 9,
  },
  {
    address: "0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed",
    symbol: "PNT",
    decimals: 18,
  },
  {
    address: "0x72630b1e3b42874bf335020ba0249e3e9e47bafc",
    symbol: "EPAN",
    decimals: 18,
  },
  {
    address: "0x0eb3032bcac2be1fa95e296442f225edb80fc3cd",
    symbol: "ATC",
    decimals: 18,
  },
  {
    address: "0x2f42b7d686ca3effc69778b6ed8493a7787b4d6e",
    symbol: "TARA",
    decimals: 18,
  },
  {
    address: "0xa5ca62d95d24a4a350983d5b8ac4eb8638887396",
    symbol: "YVSUSD",
    decimals: 18,
  },
  {
    address: "0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20",
    symbol: "DDIM",
    decimals: 18,
  },
  {
    address: "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06",
    symbol: "PTOY",
    decimals: 8,
  },
  {
    address: "0x5394794be8b6ed5572fcd6b27103f46b5f390e8f",
    symbol: "AAMMUNIYFIWETH",
    decimals: 18,
  },
  {
    address: "0x8d75959f1e61ec2571aa72798237101f084de63a",
    symbol: "SUB",
    decimals: 18,
  },
  {
    address: "0x2de509bf0014ddf697b220be628213034d320ece",
    symbol: "DBI",
    decimals: 18,
  },
  {
    address: "0x7a939bb714fd2a48ebeb1e495aa9aaa74ba9fa68",
    symbol: "EVZ",
    decimals: 18,
  },
  {
    address: "0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5",
    symbol: "ZEE",
    decimals: 18,
  },
  {
    address: "0x24b47299e756af0571f512232a3629e0dabb52ed",
    symbol: "CVT",
    decimals: 18,
  },
  {
    address: "0x378cb52b00f9d0921cb46dfc099cff73b42419dc",
    symbol: "YVLUSD",
    decimals: 18,
  },
  {
    address: "0xc0c293ce456ff0ed870add98a0828dd4d2903dbf",
    symbol: "AURA",
    decimals: 18,
  },
  {
    address: "0xd31e53966bf212e860d48a3a8651a23d09a7fdc3",
    symbol: "DOGEAI",
    decimals: 18,
  },
  {
    address: "0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63",
    symbol: "ZSC",
    decimals: 18,
  },
  {
    address: "0x6d765cbe5bc922694afe112c140b8878b9fb0390",
    symbol: "YVSUSHI",
    decimals: 18,
  },
  {
    address: "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f",
    symbol: "MUST",
    decimals: 18,
  },
  {
    address: "0x7533d63a2558965472398ef473908e1320520ae2",
    symbol: "INTX",
    decimals: 9,
  },
  {
    address: "0x220b71671b649c03714da9c621285943f3cbcdc6",
    symbol: "DIS",
    decimals: 18,
  },
  {
    address: "0xd109b2a304587569c84308c55465cd9ff0317bfb",
    symbol: "AAMMBPTBALWETH",
    decimals: 18,
  },
  {
    address: "0x5dfe42eea70a3e6f93ee54ed9c321af07a85535c",
    symbol: "UNION",
    decimals: 18,
  },
  {
    address: "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
    symbol: "MLN",
    decimals: 18,
  },
  {
    address: "0xfd0877d9095789caf24c98f7cce092fa8e120775",
    symbol: "YVTUSD",
    decimals: 18,
  },
  {
    address: "0x6c2adc2073994fb2ccc5032cc2906fa221e9b391",
    symbol: "DPY",
    decimals: 18,
  },
  {
    address: "0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404",
    symbol: "SNC",
    decimals: 18,
  },
  {
    address: "0x2602278ee1882889b946eb11dc0e810075650983",
    symbol: "VADER",
    decimals: 18,
  },
  {
    address: "0x2fb3842189fc7a699d047d9e647474f27779331d",
    symbol: "PEPE",
    decimals: 18,
  },
  {
    address: "0x71fc860f7d3a592a4a98740e39db31d25db65ae8",
    symbol: "AUSDT",
    decimals: 6,
  },
  {
    address: "0x0000000000095413afc295d19edeb1ad7b71c952",
    symbol: "LON",
    decimals: 18,
  },
  {
    address: "0xfc05987bd2be489accf0f509e44b0145d68240f7",
    symbol: "ESS",
    decimals: 18,
  },
  {
    address: "0x20c3fa331a385b63ee39137e99d0cf2db142fce1",
    symbol: "SHIL",
    decimals: 18,
  },
  {
    address: "0x1f16d41f9b3db03b462bdd6c92245ee708d1c103",
    symbol: "RPG",
    decimals: 18,
  },
  {
    address: "0x7f0c8b125040f707441cad9e5ed8a8408673b455",
    symbol: "NEBO",
    decimals: 18,
  },
  {
    address: "0x1e797ce986c3cff4472f7d38d5c4aba55dfefe40",
    symbol: "BCDN",
    decimals: 15,
  },
  {
    address: "0x441761326490cacf7af299725b6292597ee822c2",
    symbol: "UNFI",
    decimals: 18,
  },
  {
    address: "0xbdab72602e9ad40fc6a6852caf43258113b8f7a5",
    symbol: "SOV",
    decimals: 18,
  },
  {
    address: "0x66186008c1050627f979d464eabb258860563dbe",
    symbol: "MDS",
    decimals: 18,
  },
  {
    address: "0x21f15966e07a10554c364b988e91dab01d32794a",
    symbol: "SMT",
    decimals: 18,
  },
  {
    address: "0x3505f494c3f0fed0b594e01fa41dd3967645ca39",
    symbol: "SWM",
    decimals: 18,
  },
  {
    address: "0x6ec8a24cabdc339a06a172f8223ea557055adaa5",
    symbol: "GNX",
    decimals: 9,
  },
  {
    address: "0xa5f2211b9b8170f694421f2046281775e8468044",
    symbol: "THOR",
    decimals: 18,
  },
  {
    address: "0xb44b653f147569d88a684cbf6549e1968e8b2a1d",
    symbol: "2DAI",
    decimals: 18,
  },
  {
    address: "0x7968bc6a03017ea2de509aaa816f163db0f35148",
    symbol: "HGET",
    decimals: 6,
  },
  {
    address: "0x671a912c10bba0cfa74cfc2d6fba9ba1ed9530b2",
    symbol: "YVLINK",
    decimals: 18,
  },
  {
    address: "0x873fb544277fd7b977b196a826459a69e27ea4ea",
    symbol: "YVRAI",
    decimals: 18,
  },
  {
    address: "0x6f222e04f6c53cc688ffb0abe7206aac66a8ff98",
    symbol: "ROKO",
    decimals: 18,
  },
  {
    address: "0xa5b947687163fe88c3e6af5b17ae69896f4abccf",
    symbol: "PSDN",
    decimals: 18,
  },
  {
    address: "0xb753428af26e81097e7fd17f40c88aaa3e04902c",
    symbol: "SFI",
    decimals: 18,
  },
  {
    address: "0xdcb5645eda1ed34c5641d81b927d33ebae9cf2a4",
    symbol: "PAYB",
    decimals: 18,
  },
  {
    address: "0x24d73bca2bd9c3a61e99dfc7cb86d3c379ebded7",
    symbol: "MAI",
    decimals: 18,
  },
  {
    address: "0x69000dfd5025e82f48eb28325a2b88a241182ced",
    symbol: "ZAI",
    decimals: 18,
  },
  {
    address: "0xa258c4606ca8206d8aa700ce2143d7db854d168c",
    symbol: "YVWETH",
    decimals: 18,
  },
  {
    address: "0x89fb927240750c1b15d4743cd58440fc5f14a11c",
    symbol: "ATT",
    decimals: 18,
  },
  {
    address: "0xb26631c6dda06ad89b93c71400d25692de89c068",
    symbol: "MINDS",
    decimals: 18,
  },
  {
    address: "0xfa3118b34522580c35ae27f6cf52da1dbb756288",
    symbol: "LET",
    decimals: 6,
  },
  {
    address: "0xb8c3b7a2a618c552c23b1e4701109a9e756bab67",
    symbol: "YV1INCH",
    decimals: 18,
  },
  {
    address: "0xa696a63cc78dffa1a63e9e50587c197387ff6c7e",
    symbol: "YVWBTC",
    decimals: 8,
  },
  {
    address: "0xf29ae508698bdef169b89834f76704c3b205aedf",
    symbol: "YVSNX",
    decimals: 18,
  },
  {
    address: "0x88d50b466be55222019d71f9e8fae17f5f45fca1",
    symbol: "CPT",
    decimals: 8,
  },
  {
    address: "0xf406f7a9046793267bc276908778b29563323996",
    symbol: "VISION",
    decimals: 18,
  },
  {
    address: "0xea01906843ea8d910658a2c485ffce7c104ab2b6",
    symbol: "QTO",
    decimals: 18,
  },
  {
    address: "0xdffa3a7f5b40789c7a437dbe7b31b47f9b08fe75",
    symbol: "HOODIE",
    decimals: 18,
  },
  {
    address: "0x411099c0b413f4feddb10edf6a8be63bd321311c",
    symbol: "HELLO",
    decimals: 18,
  },
  {
    address: "0x4a8f5f96d5436e43112c2fbc6a9f70da9e4e16d4",
    symbol: "INXT",
    decimals: 8,
  },
  {
    address: "0x3fd8f39a962efda04956981c31ab89fab5fb8bc8",
    symbol: "RTH",
    decimals: 18,
  },
  {
    address: "0x4cf488387f035ff08c371515562cba712f9015d4",
    symbol: "WPR",
    decimals: 18,
  },
  {
    address: "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
    symbol: "FUEL",
    decimals: 18,
  },
  {
    address: "0x3d658390460295fb963f54dc0899cfb1c30776df",
    symbol: "COVAL",
    decimals: 8,
  },
  {
    address: "0x5cac718a3ae330d361e39244bf9e67ab17514ce8",
    symbol: "COT",
    decimals: 18,
  },
  {
    address: "0x36905fc93280f52362a1cbab151f25dc46742fb5",
    symbol: "BTO",
    decimals: 18,
  },
  {
    address: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
    symbol: "CETH",
    decimals: 8,
  },
  {
    address: "0x5c6ee304399dbdb9c8ef030ab642b10820db8f56",
    symbol: "B-80BAL-20WETH",
    decimals: 18,
  },
  {
    address: "0xbe428c3867f05dea2a89fc76a102b544eac7f772",
    symbol: "CVT",
    decimals: 18,
  },
  {
    address: "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
    symbol: "RFR",
    decimals: 4,
  },
  {
    address: "0xa64dfe8d86963151e6496bee513e366f6e42ed79",
    symbol: "GOKU",
    decimals: 9,
  },
  {
    address: "0x32c6f1c1731ff8f98ee2ede8954f696446307846",
    symbol: "BEARDY",
    decimals: 18,
  },
  {
    address: "0x515d7e9d75e2b76db60f8a051cd890eba23286bc",
    symbol: "GDAO",
    decimals: 18,
  },
  {
    address: "0xe11ba472f74869176652c35d30db89854b5ae84d",
    symbol: "YVHEGIC",
    decimals: 18,
  },
  {
    address: "0x4da9b813057d04baef4e5800e36083717b4a0341",
    symbol: "ATUSD",
    decimals: 18,
  },
  {
    address: "0xb40c535c8899f95e3b722df2f0619ebd28c4a4ea",
    symbol: "KNDA",
    decimals: 18,
  },
  {
    address: "0x9d86b1b2554ec410eccffbf111a6994910111340",
    symbol: "OPEN",
    decimals: 8,
  },
  {
    address: "0x2bba3cf6de6058cc1b4457ce00deb359e2703d7f",
    symbol: "HSC",
    decimals: 18,
  },
  {
    address: "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3",
    symbol: "FLP",
    decimals: 18,
  },
  {
    address: "0x1571ed0bed4d987fe2b498ddbae7dfa19519f651",
    symbol: "IFARM",
    decimals: 18,
  },
  {
    address: "0x4740735aa98dc8aa232bd049f8f0210458e7fca3",
    symbol: "RDT",
    decimals: 18,
  },
  {
    address: "0x370adc71f67f581158dc56f539df5f399128ddf9",
    symbol: "AAMMUNIMKRWETH",
    decimals: 18,
  },
  {
    address: "0x275f5ad03be0fa221b4c6649b8aee09a42d9412a",
    symbol: "MONA",
    decimals: 18,
  },
  {
    address: "0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43",
    symbol: "FIRE",
    decimals: 8,
  },
  {
    address: "0xaa99199d1e9644b588796f3215089878440d58e0",
    symbol: "ALPHR",
    decimals: 18,
  },
  {
    address: "0x735acdedd91a80334ff72f07bff41e1eecf26677",
    symbol: "EUUS",
    decimals: 18,
  },
  {
    address: "0xe1e1e2dd585c0b10995c4ef292aa9a0795f95811",
    symbol: "ELE",
    decimals: 18,
  },
  {
    address: "0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7",
    symbol: "TCT",
    decimals: 18,
  },
  {
    address: "0x9d91be44c06d373a8a226e1f3b146956083803eb",
    symbol: "AKNC",
    decimals: 18,
  },
  {
    address: "0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40",
    symbol: "AENJ",
    decimals: 18,
  },
  {
    address: "0xf7413489c474ca4399eee604716c72879eea3615",
    symbol: "APYS",
    decimals: 18,
  },
  {
    address: "0x7deb5e830be29f91e298ba5ff1356bb7f8146998",
    symbol: "AMKR",
    decimals: 18,
  },
  {
    address: "0x14d60e7fdc0d71d8611742720e4c50e7a974020c",
    symbol: "USCC",
    decimals: 6,
  },
  {
    address: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
    symbol: "CDAI",
    decimals: 8,
  },
  {
    address: "0x79650799e7899a802cb96c0bc33a6a8d4ce4936c",
    symbol: "AIT",
    decimals: 18,
  },
  {
    address: "0x92e52a1a235d9a103d970901066ce910aacefd37",
    symbol: "UCASH",
    decimals: 8,
  },
  {
    address: "0x23894dc9da6c94ecb439911caf7d337746575a72",
    symbol: "JAM",
    decimals: 18,
  },
  {
    address: "0xdfbc9050f5b01df53512dcc39b4f2b2bbacd517a",
    symbol: "JOB",
    decimals: 8,
  },
  {
    address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    symbol: "CUSDC",
    decimals: 8,
  },
  {
    address: "0xbf776e4fca664d791c4ee3a71e2722990e003283",
    symbol: "SMTY",
    decimals: 18,
  },
  {
    address: "0x9f5f3cfd7a32700c93f971637407ff17b91c7342",
    symbol: "DDD",
    decimals: 18,
  },
  {
    address: "0xc4441c2be5d8fa8126822b9929ca0b81ea0de38e",
    symbol: "USUAL",
    decimals: 18,
  },
  {
    address: "0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f",
    symbol: "BOX",
    decimals: 18,
  },
  {
    address: "0x1a57367c6194199e5d9aea1ce027431682dfb411",
    symbol: "MDF",
    decimals: 18,
  },
  {
    address: "0x657d9aba1dbb59e53f9f3ecaa878447dcfc96dcb",
    symbol: "YNETHX",
    decimals: 18,
  },
  {
    address: "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7",
    symbol: "TIDAL",
    decimals: 18,
  },
  {
    address: "0x9a64977ebf739dff35ed4281a4b5e833bfdb1314",
    symbol: "NFTFN",
    decimals: 18,
  },
  {
    address: "0xf278c1ca969095ffddded020290cf8b5c424ace2",
    symbol: "RUFF",
    decimals: 18,
  },
  {
    address: "0xf1f508c7c9f0d1b15a76fba564eef2d956220cf7",
    symbol: "PPDEX",
    decimals: 18,
  },
  {
    address: "0x2001f2a0cf801ecfda622f6c28fb6e10d803d969",
    symbol: "CLT",
    decimals: 8,
  },
  {
    address: "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
    symbol: "POOL",
    decimals: 18,
  },
  {
    address: "0x1e87d63d11d1c16052bbca06d43ba4ceb4ee686c",
    symbol: "BRC20",
    decimals: 9,
  },
  {
    address: "0x76fca1adb104770b38581b64d55e67fa5a0f3966",
    symbol: "ZKT",
    decimals: 9,
  },
  {
    address: "0x60c24407d01782c2175d32fe7c8921ed732371d1",
    symbol: "LEMO",
    decimals: 18,
  },
  {
    address: "0x1b6e9c73bee68102d9dd4a2627f97bff4183ab0a",
    symbol: "OLE",
    decimals: 18,
  },
  {
    address: "0x06a01a4d579479dd5d884ebf61a31727a3d8d442",
    symbol: "SKEY",
    decimals: 8,
  },
  {
    address: "0xade6fdaba1643e4d1eef68da7170f234470938c6",
    symbol: "HARAMBE",
    decimals: 18,
  },
  {
    address: "0x0557e0d15aec0b9026dd17aa874fdf7d182a2ceb",
    symbol: "CFXQ",
    decimals: 6,
  },
  {
    address: "0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042",
    symbol: "PAINT",
    decimals: 18,
  },
  {
    address: "0x0335a7610d817aeca1bebbefbd392ecc2ed587b8",
    symbol: "NITRO",
    decimals: 18,
  },
  {
    address: "0x6a969d379700b2e5ea4e684d273d63c1c050ba49",
    symbol: "PAF",
    decimals: 18,
  },
  {
    address: "0xd71ecff9342a5ced620049e616c5035f1db98620",
    symbol: "SEUR",
    decimals: 18,
  },
  {
    address: "0x78132543d8e20d2417d8a07d9ae199d458a0d581",
    symbol: "LINU",
    decimals: 18,
  },
  {
    address: "0x6d614686550b9e1c1df4b2cd8f91c9d4df66c810",
    symbol: "SKEB",
    decimals: 18,
  },
  {
    address: "0xcda2f16c6aa895d533506b426aff827b709c87f5",
    symbol: "FAI",
    decimals: 18,
  },
  {
    address: "0xaf9f549774ecedbd0966c52f250acc548d3f36e5",
    symbol: "RFUEL",
    decimals: 18,
  },
  {
    address: "0x444444444444c1a66f394025ac839a535246fcc8",
    symbol: "GENI",
    decimals: 9,
  },
  {
    address: "0x29ceddcf0da3c1d8068a7dfbd0fb06c2e438ff70",
    symbol: "FREL",
    decimals: 18,
  },
  {
    address: "0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd",
    symbol: "RAZOR",
    decimals: 18,
  },
  {
    address: "0x9b00e6e8d787b13756eb919786c9745054db64f9",
    symbol: "WSIENNA",
    decimals: 18,
  },
  {
    address: "0xa13f0743951b4f6e3e3aa039f682e17279f52bc3",
    symbol: "SENC",
    decimals: 18,
  },
  {
    address: "0xa1e349fac47e50b42cd323c4285ef4622b60a5e0",
    symbol: "PEPY",
    decimals: 18,
  },
  {
    address: "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e",
    symbol: "CBAT",
    decimals: 8,
  },
  {
    address: "0x15b543e986b8c34074dfc9901136d9355a537e7e",
    symbol: "STC",
    decimals: 18,
  },
  {
    address: "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
    symbol: "CZRX",
    decimals: 8,
  },
  {
    address: "0xa8b0f154a688c22142e361707df64277e0a0be66",
    symbol: "RAK",
    decimals: 18,
  },
  {
    address: "0xab846fb6c81370327e784ae7cbb6d6a6af6ff4bf",
    symbol: "PAL",
    decimals: 18,
  },
  {
    address: "0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84",
    symbol: "ALINK",
    decimals: 18,
  },
  {
    address: "0xad5fe5b0b8ec8ff4565204990e4405b2da117d8e",
    symbol: "TRXC",
    decimals: 0,
  },
  {
    address: "0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532",
    symbol: "ZEON",
    decimals: 18,
  },
  {
    address: "0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13",
    symbol: "STAK",
    decimals: 18,
  },
  {
    address: "0x82d36570842fc1ac2a3b4dbe0e7c5c0e2e665090",
    symbol: "NFNT",
    decimals: 18,
  },
  {
    address: "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
    symbol: "HMQ",
    decimals: 8,
  },
  {
    address: "0xad78d154baec2e9b4e78182d02388981b5093f80",
    symbol: "SOY",
    decimals: 18,
  },
  {
    address: "0x03042482d64577a7bdb282260e2ea4c8a89c064b",
    symbol: "CNTR",
    decimals: 18,
  },
  {
    address: "0x0cdf9acd87e940837ff21bb40c9fd55f68bba059",
    symbol: "MINT",
    decimals: 18,
  },
  {
    address: "0x4bcea5e4d0f6ed53cf45e7a28febb2d3621d7438",
    symbol: "MODEX",
    decimals: 18,
  },
  {
    address: "0xc5b1aa70410a86383f93d807d02b75f1c34cddb8",
    symbol: "PULSE",
    decimals: 18,
  },
  {
    address: "0x3f5294df68f871241c4b18fcf78ebd8ac18ab654",
    symbol: "STZ",
    decimals: 18,
  },
  {
    address: "0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c",
    symbol: "BERRY",
    decimals: 14,
  },
  {
    address: "0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba",
    symbol: "EOSDAC",
    decimals: 18,
  },
  {
    address: "0xaf91e8afbe87642dc628786188a54b78580a4d76",
    symbol: "FOY",
    decimals: 18,
  },
  {
    address: "0x159a1dfae19057de57dfffcbb3da1ae784678965",
    symbol: "RFX",
    decimals: 8,
  },
  {
    address: "0xc7bba5b765581efb2cdd2679db5bea9ee79b201f",
    symbol: "GEM",
    decimals: 18,
  },
  {
    address: "0x9e10f61749c4952c320412a6b26901605ff6da1d",
    symbol: "THEOS",
    decimals: 18,
  },
  {
    address: "0xada86b1b313d1d5267e3fc0bb303f0a2b66d0ea7",
    symbol: "COV",
    decimals: 18,
  },
  {
    address: "0x9d9e399e5385e2b9a58d4f775a1e16441b571afb",
    symbol: "METANO",
    decimals: 18,
  },
  {
    address: "0xadd5e881984783dd432f80381fb52f45b53f3e70",
    symbol: "VITE",
    decimals: 18,
  },
  {
    address: "0x5b322514ff727253292637d9054301600c2c81e8",
    symbol: "DAD",
    decimals: 9,
  },
  {
    address: "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
    symbol: "STX",
    decimals: 18,
  },
  {
    address: "0xd3999188ff689b99d8097a4876f61e70b22f7881",
    symbol: "SPURDO",
    decimals: 18,
  },
  {
    address: "0x9b4e2b4b13d125238aa0480dd42b4f6fc71b37cc",
    symbol: "MT",
    decimals: 18,
  },
  {
    address: "0x3ebb4a4e91ad83be51f8d596533818b246f4bee1",
    symbol: "SATA",
    decimals: 18,
  },
  {
    address: "0xa8b12cc90abf65191532a12bb5394a714a46d358",
    symbol: "PBTC35A",
    decimals: 18,
  },
  {
    address: "0x79cd36e049f678ace70a58341ae751fda8d8665d",
    symbol: "FREPE",
    decimals: 18,
  },
  {
    address: "0x8b937af714ac7e2129bd33d93641f52b665ca352",
    symbol: "JIZZ",
    decimals: 18,
  },
  {
    address: "0xc56c2b7e71b54d38aab6d52e94a04cbfa8f604fa",
    symbol: "ZUSD",
    decimals: 6,
  },
  {
    address: "0xc08512927d12348f6620a698105e1baac6ecd911",
    symbol: "GYEN",
    decimals: 6,
  },
  {
    address: "0x069f01cdd1e32d7bab5fc81527df191835136c9d",
    symbol: "APUGURL",
    decimals: 9,
  },
  {
    address: "0x7240ac91f01233baaf8b064248e80feaa5912ba3",
    symbol: "OCTO",
    decimals: 18,
  },
  {
    address: "0xbc4171f45ef0ef66e76f979df021a34b46dcc81d",
    symbol: "DORA",
    decimals: 18,
  },
  {
    address: "0x3a8d5bc8a8948b68dfc0ce9c14ac4150e083518c",
    symbol: "PARA",
    decimals: 18,
  },
  {
    address: "0x4abb9cc67bd3da9eb966d1159a71a0e68bd15432",
    symbol: "KEL",
    decimals: 18,
  },
  {
    address: "0x29fa1fee0f4f0ab0e36ef7ab8d7a35439ec6be75",
    symbol: "DVT",
    decimals: 18,
  },
  {
    address: "0xdb2f2bcce3efa95eda95a233af45f3e0d4f00e2a",
    symbol: "AGS",
    decimals: 8,
  },
  {
    address: "0xd945d2031b4c63c0e363304fb771f709b502dc0a",
    symbol: "BMC",
    decimals: 18,
  },
  {
    address: "0xc834fa996fa3bec7aad3693af486ae53d8aa8b50",
    symbol: "CONV",
    decimals: 18,
  },
  {
    address: "0x5228a22e72ccc52d415ecfd199f99d0665e7733b",
    symbol: "PBTC",
    decimals: 18,
  },
  {
    address: "0xaec7d1069e3a914a3eb50f0bfb1796751f2ce48a",
    symbol: "S4F",
    decimals: 18,
  },
  {
    address: "0x76960dccd5a1fe799f7c29be9f19ceb4627aeb2f",
    symbol: "RED",
    decimals: 18,
  },
  {
    address: "0xadb2437e6f65682b85f814fbc12fec0508a7b1d0",
    symbol: "UNCX",
    decimals: 18,
  },
  {
    address: "0x62359ed7505efc61ff1d56fef82158ccaffa23d7",
    symbol: "CORE",
    decimals: 18,
  },
  {
    address: "0x068e3563b1c19590f822c0e13445c4fa1b9eefa5",
    symbol: "WUSD",
    decimals: 18,
  },
  {
    address: "0x20fcefa41045080764c48c2b9429e44c644e5dea",
    symbol: "FOOX",
    decimals: 18,
  },
  {
    address: "0x837ee5a664d51bc2e7d26eb63cffeb48e037bde2",
    symbol: "NMAI",
    decimals: 18,
  },
  {
    address: "0x0f8c45b896784a1e408526b9300519ef8660209c",
    symbol: "XMX",
    decimals: 8,
  },
  {
    address: "0x446c9033e7516d820cc9a2ce2d0b7328b579406f",
    symbol: "SOLVE",
    decimals: 8,
  },
  {
    address: "0x5afff9876c1f98b7d2b53bcb69eb57e92408319f",
    symbol: "MESA",
    decimals: 18,
  },
  {
    address: "0x0b9ae6b1d4f0eeed904d1cef68b9bd47499f3fff",
    symbol: "NATI",
    decimals: 18,
  },
  {
    address: "0xb2e96a63479c2edd2fd62b382c89d5ca79f572d3",
    symbol: "ZNN",
    decimals: 8,
  },
  {
    address: "0xe530441f4f73bdb6dc2fa5af7c3fc5fd551ec838",
    symbol: "GSE",
    decimals: 4,
  },
  {
    address: "0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7",
    symbol: "CVXCRV",
    decimals: 18,
  },
  {
    address: "0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00",
    symbol: "ABAT",
    decimals: 18,
  },
  {
    address: "0xaf04f0912e793620824f4442b03f4d984af29853",
    symbol: "HYDRA",
    decimals: 18,
  },
  {
    address: "0xd559f20296ff4895da39b5bd9add54b442596a61",
    symbol: "FTX",
    decimals: 18,
  },
  {
    address: "0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c",
    symbol: "AREN",
    decimals: 18,
  },
  {
    address: "0x4e4a47cac6a28a62dcc20990ed2cda9bc659469f",
    symbol: "SHIT",
    decimals: 18,
  },
  {
    address: "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d",
    symbol: "ADAI",
    decimals: 18,
  },
  {
    address: "0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f",
    symbol: "AZRX",
    decimals: 18,
  },
  {
    address: "0x328c4c80bc7aca0834db37e6600a6c49e12da4de",
    symbol: "ASNX",
    decimals: 18,
  },
  {
    address: "0x916c5de09cf63f6602d1e1793fb41f6437814a62",
    symbol: "JACY",
    decimals: 9,
  },
  {
    address: "0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3",
    symbol: "DEC",
    decimals: 18,
  },
  {
    address: "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
    symbol: "RAI",
    decimals: 18,
  },
  {
    address: "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
    symbol: "VIBE",
    decimals: 18,
  },
  {
    address: "0x471d113059324321749e097705197a2b44a070fc",
    symbol: "KNG",
    decimals: 18,
  },
  {
    address: "0x8edc6f7d2f23c10653972e611f707ce0562d61b1",
    symbol: "MDX",
    decimals: 18,
  },
  {
    address: "0xb8baa0e4287890a5f79863ab62b7f175cecbd433",
    symbol: "SWRV",
    decimals: 18,
  },
  {
    address: "0x4fe83213d56308330ec302a8bd641f1d0113a4cc",
    symbol: "NU",
    decimals: 18,
  },
  {
    address: "0xda31d0d1bc934fc34f7189e38a413ca0a5e8b44f",
    symbol: "BSSB",
    decimals: 18,
  },
  {
    address: "0xdf8ef8fef6fa5489d097652dedfb6617ce28a0d6",
    symbol: "DUMP",
    decimals: 18,
  },
  {
    address: "0x5fa20d59d2a907e5fed9fb80b4a8d9f0d069a48d",
    symbol: "NOGS",
    decimals: 18,
  },
  {
    address: "0x943ed852dadb5c3938ecdc6883718df8142de4c8",
    symbol: "FTI",
    decimals: 18,
  },
  {
    address: "0x3802c218221390025bceabbad5d8c59f40eb74b8",
    symbol: "GETH",
    decimals: 18,
  },
  {
    address: "0x990e081a7b7d3ccba26a2f49746a68cc4ff73280",
    symbol: "KSC",
    decimals: 18,
  },
  {
    address: "0x05be1d4c307c19450a6fd7ce7307ce72a3829a60",
    symbol: "IMF",
    decimals: 18,
  },
  {
    address: "0x5c59a5b139b0538cb106d775a022cad98dd14b5a",
    symbol: "ORT",
    decimals: 18,
  },
  {
    address: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
    symbol: "OMG",
    decimals: 18,
  },
  {
    address: "0x177ba0cac51bfc7ea24bad39d81dcefd59d74faa",
    symbol: "KIF",
    decimals: 18,
  },
  {
    address: "0x6e98e5401adcb0d76f4debfc3d794b3031f48790",
    symbol: "AUR",
    decimals: 18,
  },
  {
    address: "0x6b15602f008a05d9694d777dead2f05586216cb4",
    symbol: "CYG",
    decimals: 18,
  },
  {
    address: "0x6cacdb97e3fc8136805a9e7c342d866ab77d0957",
    symbol: "SWPR",
    decimals: 18,
  },
  {
    address: "0x299a1503e88433c0fd1bd68625c25c5a703eb64f",
    symbol: "TEAR",
    decimals: 18,
  },
  {
    address: "0xb9eb6f357f040be1d2a3d6b4ba750d1ab8a4233c",
    symbol: "FRESCO",
    decimals: 9,
  },
  {
    address: "0x419777d3e39aa9b00405724eace5ea57620c9062",
    symbol: "PAW",
    decimals: 18,
  },
  {
    address: "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
    symbol: "PLR",
    decimals: 18,
  },
  {
    address: "0xef89c37fe9e5c906b404cd7edae4a2992b5d25fa",
    symbol: "TIME",
    decimals: 18,
  },
  {
    address: "0x0fcbc31c503b4a9ed90e87f8ff46c318a4a14260",
    symbol: "QTF",
    decimals: 8,
  },
  {
    address: "0x31c2415c946928e9fd1af83cdfa38d3edbd4326f",
    symbol: "UMAD",
    decimals: 8,
  },
  {
    address: "0x7ecbb21346c501fd07eb165e406120fa32381c16",
    symbol: "ECOREAL",
    decimals: 18,
  },
  {
    address: "0x07e3c70653548b04f0a75970c1f81b4cbbfb606f",
    symbol: "DLT",
    decimals: 18,
  },
  {
    address: "0x23fa3aa82858e7ad1f0f04352f4bb7f5e1bbfb68",
    symbol: "FRIC",
    decimals: 18,
  },
  {
    address: "0x7d8daff6d70cead12c6f077048552cf89130a2b1",
    symbol: "ARX",
    decimals: 18,
  },
  {
    address: "0x0e573ce2736dd9637a0b21058352e1667925c7a8",
    symbol: "USDV",
    decimals: 6,
  },
  {
    address: "0xe8663a64a96169ff4d95b4299e7ae9a76b905b31",
    symbol: "RATING",
    decimals: 8,
  },
  {
    address: "0xb1f871ae9462f1b2c6826e88a7827e76f86751d4",
    symbol: "GNY",
    decimals: 18,
  },
  {
    address: "0xec213f83defb583af3a000b1c0ada660b1902a0f",
    symbol: "PRE",
    decimals: 18,
  },
  {
    address: "0x0a44a7ccea34a7563ba1d45a5f757d0b02281124",
    symbol: "BBL",
    decimals: 18,
  },
  {
    address: "0x7995ab36bb307afa6a683c24a25d90dc1ea83566",
    symbol: "HIT",
    decimals: 6,
  },
  {
    address: "0x4fc15c91a9c4a9efb404174464687e8e128730c2",
    symbol: "STAT",
    decimals: 18,
  },
  {
    address: "0xaec613188b1e178d42a05d352044d54854c3196a",
    symbol: "DESCI",
    decimals: 18,
  },
  {
    address: "0x3e70f6806171873d17d4bfc984a6f9d20f5a9018",
    symbol: "COIN",
    decimals: 18,
  },
  {
    address: "0xc52fafdc900cb92ae01e6e4f8979af7f436e2eb2",
    symbol: "SEXY",
    decimals: 18,
  },
  {
    address: "0xa2a54f1ec1f09316ef12c1770d32ed8f21b1fb6a",
    symbol: "DFT",
    decimals: 8,
  },
  {
    address: "0x80ee5c641a8ffc607545219a3856562f56427fe9",
    symbol: "BRETT",
    decimals: 9,
  },
  {
    address: "0x93dfaf57d986b9ca77df9376c50878e013d9c7c8",
    symbol: "RARE",
    decimals: 18,
  },
  {
    address: "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
    symbol: "0XBTC",
    decimals: 8,
  },
  {
    address: "0x3aada3e213abf8529606924d8d1c55cbdc70bf74",
    symbol: "XMON",
    decimals: 18,
  },
  {
    address: "0x625ae63000f46200499120b906716420bd059240",
    symbol: "ASUSD",
    decimals: 18,
  },
  {
    address: "0xc07a150ecadf2cc352f5586396e344a6b17625eb",
    symbol: "BIOT",
    decimals: 9,
  },
  {
    address: "0x10bc518c32fbae5e38ecb50a612160571bd81e44",
    symbol: "VRO",
    decimals: 8,
  },
  {
    address: "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
    symbol: "CHZ",
    decimals: 18,
  },
  {
    address: "0xbed4ab0019ff361d83ddeb74883dac8a70f5ea1e",
    symbol: "MRCH",
    decimals: 18,
  },
  {
    address: "0x52928c95c4c7e934e0efcfab08853a0e4558861d",
    symbol: "HART",
    decimals: 18,
  },
  {
    address: "0xaa7d24c3e14491abac746a98751a4883e9b70843",
    symbol: "GURU",
    decimals: 18,
  },
  {
    address: "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a",
    symbol: "BAC",
    decimals: 18,
  },
  {
    address: "0x75ecb52e403c617679fbd3e77a50f9d10a842387",
    symbol: "CSR",
    decimals: 18,
  },
  {
    address: "0xba745513acebcbb977497c569d4f7d340f2a936b",
    symbol: "MFTU",
    decimals: 18,
  },
  {
    address: "0xa5ef74068d04ba0809b7379dd76af5ce34ab7c57",
    symbol: "LUCHOW",
    decimals: 18,
  },
  {
    address: "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4",
    symbol: "CCOMP",
    decimals: 8,
  },
  {
    address: "0x697ef32b4a3f5a4c39de1cb7563f24ca7bfc5947",
    symbol: "ISLA",
    decimals: 18,
  },
  {
    address: "0xc64500dd7b0f1794807e67802f8abbf5f8ffb054",
    symbol: "LOCUS",
    decimals: 18,
  },
  {
    address: "0x08389495d7456e1951ddf7c3a1314a4bfb646d8b",
    symbol: "CRPT",
    decimals: 18,
  },
  {
    address: "0xc4c2614e694cf534d407ee49f8e44d125e4681c4",
    symbol: "CHAIN",
    decimals: 18,
  },
  {
    address: "0x2e85ae1c47602f7927bcabc2ff99c40aa222ae15",
    symbol: "KATA",
    decimals: 18,
  },
  {
    address: "0x26946ada5ecb57f3a1f91605050ce45c482c9eb1",
    symbol: "BSOV",
    decimals: 8,
  },
  {
    address: "0xfbcb5cbedeebcc55dcd136d34db1daaf74cf67e8",
    symbol: "ANIM",
    decimals: 18,
  },
  {
    address: "0x024b6e7dc26f4d5579bdd936f8d7bc31f2339999",
    symbol: "MIS",
    decimals: 18,
  },
  {
    address: "0xa3ad8c7ab6b731045b5b16e3fdf77975c71abe79",
    symbol: "DINERO",
    decimals: 18,
  },
  {
    address: "0x9dfad1b7102d46b1b197b90095b5c4e9f5845bba",
    symbol: "BOTTO",
    decimals: 18,
  },
  {
    address: "0x3010ccb5419f1ef26d40a7cd3f0d707a0fa127dc",
    symbol: "GEMS",
    decimals: 18,
  },
  {
    address: "0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83",
    symbol: "ID",
    decimals: 18,
  },
  {
    address: "0xbadff0ef41d2a68f22de21eabca8a59aaf495cf0",
    symbol: "KABOSU",
    decimals: 18,
  },
  {
    address: "0xf8ad7dfe656188a23e89da09506adf7ad9290d5d",
    symbol: "BLY",
    decimals: 18,
  },
  {
    address: "0xeed3ae7b0f8b5b9bb8c035a9941382b1822671cd",
    symbol: "EVY",
    decimals: 12,
  },
  {
    address: "0xd23ac27148af6a2f339bd82d0e3cff380b5093de",
    symbol: "SI",
    decimals: 18,
  },
  {
    address: "0x44ff8620b8ca30902395a7bd3f2407e1a091bf73",
    symbol: "VIRTUAL",
    decimals: 18,
  },
  {
    address: "0x6adb2e268de2aa1abf6578e4a8119b960e02928f",
    symbol: "SHIBDOGE",
    decimals: 9,
  },
  {
    address: "0x000000007a58f5f58e697e51ab0357bc9e260a04",
    symbol: "CNV",
    decimals: 18,
  },
  {
    address: "0xa1a36d3537bbe375cc9694795f663ddc8d516db9",
    symbol: "POLI",
    decimals: 18,
  },
  {
    address: "0x5d43b66da68706d39f6c97f7f1415615672b446b",
    symbol: "ROG",
    decimals: 18,
  },
  {
    address: "0x3b604747ad1720c01ded0455728b62c0d2f100f0",
    symbol: "WAGMIGAMES",
    decimals: 18,
  },
  {
    address: "0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
    symbol: "USDE",
    decimals: 18,
  },
  {
    address: "0x92d529163c5e880b9de86f01de0cb8924d790357",
    symbol: "EYE",
    decimals: 18,
  },
  {
    address: "0x66a0f676479cee1d7373f3dc2e2952778bff5bd6",
    symbol: "WISE",
    decimals: 18,
  },
  {
    address: "0xe51b8ab09008285a0380dd2680cd9dd5e13924d3",
    symbol: "BSP",
    decimals: 18,
  },
  {
    address: "0x83984d6142934bb535793a82adb0a46ef0f66b6d",
    symbol: "REM",
    decimals: 4,
  },
  {
    address: "0xb683d83a532e2cb7dfa5275eed3698436371cc9f",
    symbol: "BTU",
    decimals: 18,
  },
  {
    address: "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
    symbol: "PBR",
    decimals: 18,
  },
  {
    address: "0xb13de094cc5cee6c4cc0a3737bf0290166d9ca5d",
    symbol: "GMAT",
    decimals: 18,
  },
  {
    address: "0xa1d6df714f91debf4e0802a542e13067f31b8262",
    symbol: "RFOX",
    decimals: 18,
  },
  {
    address: "0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
    symbol: "VSP",
    decimals: 18,
  },
  {
    address: "0x06e0feb0d74106c7ada8497754074d222ec6bcdf",
    symbol: "BTB",
    decimals: 18,
  },
  {
    address: "0xc57d533c50bc22247d49a368880fb49a1caa39f7",
    symbol: "PTF",
    decimals: 18,
  },
  {
    address: "0x6fce4a401b6b80ace52baaefe4421bd188e76f6f",
    symbol: "AMANA",
    decimals: 18,
  },
  {
    address: "0x923b83c26b3809d960ff80332ed00aa46d7ed375",
    symbol: "CTR",
    decimals: 18,
  },
  {
    address: "0x3f9bec82c776c47405bcb38070d2395fd18f89d3",
    symbol: "PHM",
    decimals: 18,
  },
  {
    address: "0x048fe49be32adfc9ed68c37d32b5ec9df17b3603",
    symbol: "SKM",
    decimals: 18,
  },
  {
    address: "0xdc035d45d973e3ec169d2276ddab16f1e407384f",
    symbol: "USDS",
    decimals: 18,
  },
  {
    address: "0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af",
    symbol: "BCUG",
    decimals: 18,
  },
  {
    address: "0xbb1ee07d6c7baeb702949904080eb61f5d5e7732",
    symbol: "DINU",
    decimals: 18,
  },
  {
    address: "0xbcca60bb61934080951369a648fb03df4f96263c",
    symbol: "AUSDC",
    decimals: 6,
  },
  {
    address: "0xc0f1728d9513efc316d0e93a0758c992f88b0809",
    symbol: "SWAT",
    decimals: 8,
  },
  {
    address: "0xeeee2a2e650697d2a8e8bc990c2f3d04203be06f",
    symbol: "FP",
    decimals: 18,
  },
  {
    address: "0x07b701ac44aacb03d8bed42eb85ec38210bdf513",
    symbol: "TAPROOT",
    decimals: 6,
  },
  {
    address: "0x00059ae69c1622a7542edc15e8d17b060fe307b6",
    symbol: "AMON",
    decimals: 18,
  },
  {
    address: "0xc53342fd7575f572b0ff4569e31941a5b821ac76",
    symbol: "ETHV",
    decimals: 18,
  },
  {
    address: "0x98c23e9d8f34fefb1b7bd6a91b7ff122f4e16f5c",
    symbol: "AUSDC",
    decimals: 6,
  },
  {
    address: "0xfcd7ccee4071aa4ecfac1683b7cc0afecaf42a36",
    symbol: "BLAZE",
    decimals: 18,
  },
  {
    address: "0x1780933e83b09371cf716f3630fe5a422a66a39e",
    symbol: "QDX",
    decimals: 18,
  },
  {
    address: "0xd714d91a169127e11d8fab3665d72e8b7ef9dbe2",
    symbol: "BLACK",
    decimals: 18,
  },
  {
    address: "0xa23c1194d421f252b4e6d5edcc3205f7650a4ebe",
    symbol: "LBP",
    decimals: 18,
  },
  {
    address: "0x55a380d134d722006a5ce2d510562e1239d225b1",
    symbol: "MARVIN",
    decimals: 18,
  },
  {
    address: "0x97a9a15168c22b3c137e6381037e1499c8ad0978",
    symbol: "DOP",
    decimals: 18,
  },
  {
    address: "0x23b608675a2b2fb1890d3abbd85c5775c51691d5",
    symbol: "SOCKS",
    decimals: 18,
  },
  {
    address: "0x67954768e721fad0f0f21e33e874497c73ed6a82",
    symbol: "KEK",
    decimals: 18,
  },
  {
    address: "0xa2881f7f441267042f9778ffa0d4f834693426be",
    symbol: "HUSL",
    decimals: 18,
  },
  {
    address: "0xab37e1358b639fd877f015027bb62d3ddaa7557e",
    symbol: "LIEN",
    decimals: 8,
  },
  {
    address: "0xb4a677b0e363c3815d46326954a4e4d2b1ace357",
    symbol: "THE",
    decimals: 18,
  },
  {
    address: "0x40fd72257597aa14c7231a7b1aaa29fce868f677",
    symbol: "XOR",
    decimals: 18,
  },
  {
    address: "0xd90e69f67203ebe02c917b5128629e77b4cd92dc",
    symbol: "ONC",
    decimals: 18,
  },
  {
    address: "0xfeeeef4d7b4bf3cc8bd012d02d32ba5fd3d51e31",
    symbol: "TAIL",
    decimals: 18,
  },
  {
    address: "0x7a58c0be72be218b41c608b7fe7c5bb630736c71",
    symbol: "PEOPLE",
    decimals: 18,
  },
  {
    address: "0xe72b141df173b999ae7c1adcbf60cc9833ce56a8",
    symbol: "ETH+",
    decimals: 18,
  },
  {
    address: "0x076641af1b8f06b7f8c92587156143c109002cbe",
    symbol: "SOP",
    decimals: 18,
  },
  {
    address: "0x487d62468282bd04ddf976631c23128a425555ee",
    symbol: "UPC",
    decimals: 5,
  },
  {
    address: "0xdc5864ede28bd4405aa04d93e05a0531797d9d59",
    symbol: "FNT",
    decimals: 6,
  },
  {
    address: "0x954b890704693af242613edef1b603825afcd708",
    symbol: "CARD",
    decimals: 18,
  },
  {
    address: "0x6c5024cd4f8a59110119c56f8933403a539555eb",
    symbol: "ASUSD",
    decimals: 18,
  },
  {
    address: "0x6524b87960c2d573ae514fd4181777e7842435d4",
    symbol: "BZN",
    decimals: 18,
  },
  {
    address: "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a",
    symbol: "BEPRO",
    decimals: 18,
  },
  {
    address: "0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611",
    symbol: "MM",
    decimals: 18,
  },
  {
    address: "0x39c6b3e42d6a679d7d776778fe880bc9487c2eda",
    symbol: "AKNC",
    decimals: 18,
  },
  {
    address: "0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e",
    symbol: "HOKK",
    decimals: 9,
  },
  {
    address: "0x6b9f031d718dded0d681c20cb754f97b3bb81b78",
    symbol: "GEEQ",
    decimals: 18,
  },
  {
    address: "0xc8871267e07408b89aa5aecc58adca5e574557f8",
    symbol: "IUSDC",
    decimals: 6,
  },
  {
    address: "0x4af5ff1a60a6ef6c7c8f9c4e304cd9051fca3ec0",
    symbol: "RGP",
    decimals: 18,
  },
  {
    address: "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
    symbol: "PNK",
    decimals: 18,
  },
  {
    address: "0x5d285f735998f36631f678ff41fb56a10a4d0429",
    symbol: "MIX",
    decimals: 18,
  },
  {
    address: "0x009178997aff09a67d4caccfeb897fb79d036214",
    symbol: "1SOL",
    decimals: 18,
  },
  {
    address: "0x946551dd05c5abd7cc808927480225ce36d8c475",
    symbol: "ONE",
    decimals: 18,
  },
  {
    address: "0xa7a5c1058194af8f00c187adb7fcc0c95f1c6c2d",
    symbol: "SPIZ",
    decimals: 18,
  },
  {
    address: "0x99295f1141d58a99e939f7be6bbe734916a875b8",
    symbol: "LPL",
    decimals: 18,
  },
  {
    address: "0x25e1474170c4c0aa64fa98123bdc8db49d7802fa",
    symbol: "BID",
    decimals: 18,
  },
  {
    address: "0x73c9275c3a2dd84b5741fd59aebf102c91eb033f",
    symbol: "BTRS",
    decimals: 18,
  },
  {
    address: "0x4527a3b4a8a150403090a99b87effc96f2195047",
    symbol: "P2PS",
    decimals: 8,
  },
  {
    address: "0x1b1ff83ae0751ffb7ce0224e9c330e859e95dd16",
    symbol: "LEGEND",
    decimals: 18,
  },
  {
    address: "0x2b89bf8ba858cd2fcee1fada378d5cd6936968be",
    symbol: "WSCRT",
    decimals: 6,
  },
  {
    address: "0x2fc246aa66f0da5bb1368f688548ecbbe9bdee5d",
    symbol: "TEMCO",
    decimals: 18,
  },
  {
    address: "0xb9d4b6dc1e1ee3577cc442de015cc11f238b35ed",
    symbol: "MAG",
    decimals: 18,
  },
  {
    address: "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
    symbol: "KP3R",
    decimals: 18,
  },
  {
    address: "0xd7cfdb3cdc33dbeb9e9a4c95b61953cf12a008b3",
    symbol: "BRUH",
    decimals: 18,
  },
  {
    address: "0xd585aaafa2b58b1cd75092b51ade9fa4ce52f247",
    symbol: "PEUSD",
    decimals: 18,
  },
  {
    address: "0xbd356a39bff2cada8e9248532dd879147221cf76",
    symbol: "WOM",
    decimals: 18,
  },
  {
    address: "0x97a9bac06f90940bce9caec2b880ff17707519e4",
    symbol: "MNTO",
    decimals: 18,
  },
  {
    address: "0xdd629e5241cbc5919847783e6c96b2de4754e438",
    symbol: "MTBILL",
    decimals: 18,
  },
  {
    address: "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa",
    symbol: "POLS",
    decimals: 18,
  },
  {
    address: "0xef6344de1fcfc5f48c30234c16c1389e8cdc572c",
    symbol: "DNA",
    decimals: 18,
  },
  {
    address: "0xbd3de9a069648c84d27d74d701c9fa3253098b15",
    symbol: "EQX",
    decimals: 18,
  },
  {
    address: "0x630d98424efe0ea27fb1b3ab7741907dffeaad78",
    symbol: "PEAK",
    decimals: 8,
  },
  {
    address: "0xf2051511b9b121394fa75b8f7d4e7424337af687",
    symbol: "HAUS",
    decimals: 18,
  },
  {
    address: "0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c",
    symbol: "APM",
    decimals: 18,
  },
  {
    address: "0x8f43ee50942e96d84052253ab13f59c1d942fb98",
    symbol: "PARA",
    decimals: 9,
  },
  {
    address: "0x067def80d66fb69c276e53b641f37ff7525162f6",
    symbol: "OGPU",
    decimals: 18,
  },
  {
    address: "0xb45ffb51984d626ee758b336c61cf20990c6bf13",
    symbol: "RBNT",
    decimals: 18,
  },
  {
    address: "0x86772b1409b61c639eaac9ba0acfbb6e238e5f83",
    symbol: "NDX",
    decimals: 18,
  },
  {
    address: "0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd",
    symbol: "WOMBAT",
    decimals: 18,
  },
  {
    address: "0xa0bbbe391b0d0957f1d013381b643041d2ca4022",
    symbol: "SHIN",
    decimals: 18,
  },
  {
    address: "0xd3fb8597d260efb2e693efd500d62a330a00f1eb",
    symbol: "TINU",
    decimals: 18,
  },
  {
    address: "0xb97048628db6b661d4c2aa833e95dbe1a905b280",
    symbol: "PAY",
    decimals: 18,
  },
  {
    address: "0x0f71b8de197a1c84d31de0f1fa7926c365f052b3",
    symbol: "ARCONA",
    decimals: 18,
  },
  {
    address: "0x3136ef851592acf49ca4c825131e364170fa32b3",
    symbol: "COFI",
    decimals: 18,
  },
  {
    address: "0x45080a6531d671ddff20db42f93792a489685e32",
    symbol: "FVT",
    decimals: 18,
  },
  {
    address: "0xc4cb5793bd58bad06bf51fb37717b86b02cbe8a4",
    symbol: "CREDIT",
    decimals: 18,
  },
  {
    address: "0x33c04bed4533e31f2afb8ac4a61a48eda38c4fa0",
    symbol: "GORILLA",
    decimals: 9,
  },
  {
    address: "0x544c42fbb96b39b21df61cf322b5edc285ee7429",
    symbol: "INSUR",
    decimals: 18,
  },
  {
    address: "0x5732046a883704404f284ce41ffadd5b007fd668",
    symbol: "BLZ",
    decimals: 18,
  },
  {
    address: "0x04a020325024f130988782bd5276e53595e8d16e",
    symbol: "HERB",
    decimals: 8,
  },
  {
    address: "0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3",
    symbol: "MTN",
    decimals: 18,
  },
  {
    address: "0x20910e5b5f087f6439dfcb0dda4e27d1014ac2b8",
    symbol: "BNA",
    decimals: 18,
  },
  {
    address: "0xad55aebc9b8c03fc43cd9f62260391c13c23e7c0",
    symbol: "CUSDO",
    decimals: 18,
  },
  {
    address: "0xf0939011a9bb95c3b791f0cb546377ed2693a574",
    symbol: "ZERO",
    decimals: 18,
  },
  {
    address: "0xff931a7946d2fa11cf9123ef0dc6f6c7c6cb60c4",
    symbol: "BABY",
    decimals: 9,
  },
  {
    address: "0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e",
    symbol: "BDP",
    decimals: 18,
  },
  {
    address: "0x6b785a0322126826d8226d77e173d75dafb84d11",
    symbol: "VLT",
    decimals: 18,
  },
  {
    address: "0x668dbf100635f593a3847c0bdaf21f0a09380188",
    symbol: "BNSD",
    decimals: 18,
  },
  {
    address: "0x72f020f8f3e8fd9382705723cd26380f8d0c66bb",
    symbol: "PLOT",
    decimals: 18,
  },
  {
    address: "0x9634bdb20bbab07bb52d279fa6e0c53ccc89c879",
    symbol: "PEPEGA",
    decimals: 9,
  },
  {
    address: "0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37",
    symbol: "MARSH",
    decimals: 18,
  },
  {
    address: "0x8238884ec9668ef77b90c6dff4d1a9f4f4823bfe",
    symbol: "USDO",
    decimals: 18,
  },
  {
    address: "0x0563dce613d559a47877ffd1593549fb9d3510d6",
    symbol: "SUPERBID",
    decimals: 18,
  },
  {
    address: "0x2942e3b38e33123965bfbc21e802be943a76bbc6",
    symbol: "EHASH",
    decimals: 18,
  },
  {
    address: "0xd076c4ba62c57b3fa10800bcfd8da66742110e0e",
    symbol: "HVH",
    decimals: 18,
  },
  {
    address: "0x53884b61963351c283118a8e1fc05ba464a11959",
    symbol: "MNS",
    decimals: 18,
  },
  {
    address: "0x1900e8b5619a3596745f715d0427fe617c729ba9",
    symbol: "CBG",
    decimals: 18,
  },
  {
    address: "0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6",
    symbol: "BALPHA",
    decimals: 18,
  },
  {
    address: "0x4159862bcf6b4393a80550b1ed03dffa6f90533c",
    symbol: "OHMI",
    decimals: 18,
  },
  {
    address: "0x7ae0d42f23c33338de15bfa89c7405c068d9dc0a",
    symbol: "VERSE",
    decimals: 18,
  },
  {
    address: "0xbc19712feb3a26080ebf6f2f7849b417fdd792ca",
    symbol: "BORING",
    decimals: 18,
  },
  {
    address: "0x6f87d756daf0503d08eb8993686c7fc01dc44fb1",
    symbol: "TRADE",
    decimals: 18,
  },
  {
    address: "0x5dfbf02313e1be7e8db5aa6f660433588338f201",
    symbol: "PEPEJR",
    decimals: 9,
  },
  {
    address: "0xae3013789c836345dfd63a9df713e3c23fb3a664",
    symbol: "GEOFF",
    decimals: 18,
  },
  {
    address: "0x55c08ca52497e2f1534b59e2917bf524d4765257",
    symbol: "UWU",
    decimals: 18,
  },
  {
    address: "0x5c872500c00565505f3624ab435c222e558e9ff8",
    symbol: "COT",
    decimals: 18,
  },
  {
    address: "0xd6a5ab46ead26f49b03bbb1f9eb1ad5c1767974a",
    symbol: "EMON",
    decimals: 18,
  },
  {
    address: "0x35f6b052c598d933d69a4eec4d04c73a191fe6c2",
    symbol: "ASNX",
    decimals: 18,
  },
  {
    address: "0x7d64bde04e64be1c4cae808719c1127f2ccc252b",
    symbol: "BULLY",
    decimals: 9,
  },
  {
    address: "0xeef9f339514298c6a857efcfc1a762af84438dee",
    symbol: "HEZ",
    decimals: 18,
  },
  {
    address: "0x038a68ff68c393373ec894015816e33ad41bd564",
    symbol: "GLCH",
    decimals: 18,
  },
  {
    address: "0x73374ea518de7addd4c2b624c0e8b113955ee041",
    symbol: "JGN",
    decimals: 18,
  },
  {
    address: "0xe021baa5b70c62a9ab2468490d3f8ce0afdd88df",
    symbol: "SOR",
    decimals: 18,
  },
  {
    address: "0xe3b9cfb8ea8a4f1279fbc28d3e15b4d2d86f18a0",
    symbol: "FOTTIE",
    decimals: 9,
  },
  {
    address: "0x6afcff9189e8ed3fcc1cffa184feb1276f6a82a5",
    symbol: "PETS",
    decimals: 18,
  },
  {
    address: "0x4d2ee5dae46c86da2ff521f7657dad98834f97b8",
    symbol: "PPBLZ",
    decimals: 18,
  },
  {
    address: "0x217ddead61a42369a266f1fb754eb5d3ebadc88a",
    symbol: "DON",
    decimals: 18,
  },
  {
    address: "0x9506d37f70eb4c3d79c398d326c871abbf10521d",
    symbol: "MLT",
    decimals: 18,
  },
  {
    address: "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
    symbol: "SOS",
    decimals: 18,
  },
  {
    address: "0xfb559ce67ff522ec0b9ba7f5dc9dc7ef6c139803",
    symbol: "PROB",
    decimals: 18,
  },
  {
    address: "0xc713e5e149d5d0715dcd1c156a020976e7e56b88",
    symbol: "AMKR",
    decimals: 18,
  },
  {
    address: "0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8",
    symbol: "QRX",
    decimals: 18,
  },
  {
    address: "0x7707aada3ce7722ac63b91727daf1999849f6835",
    symbol: "BNK",
    decimals: 8,
  },
  {
    address: "0xf94b5c5651c888d928439ab6514b93944eee6f48",
    symbol: "YLD",
    decimals: 18,
  },
  {
    address: "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
    symbol: "NKN",
    decimals: 18,
  },
  {
    address: "0xf058501585023d040ea9493134ed72c083553eed",
    symbol: "DMX",
    decimals: 18,
  },
  {
    address: "0xbdeb4b83251fb146687fa19d1c660f99411eefe3",
    symbol: "SVD",
    decimals: 18,
  },
  {
    address: "0x909e34d3f6124c324ac83dcca84b74398a6fa173",
    symbol: "ZKP",
    decimals: 18,
  },
  {
    address: "0xf434908dcf8206691bb99cae9232d4833ec257d4",
    symbol: "JACK",
    decimals: 18,
  },
  {
    address: "0x2a8c22e3b10036f3aef5875d04f8441d4188b656",
    symbol: "MBASIS",
    decimals: 18,
  },
  {
    address: "0x965d79f1a1016b574a62986e13ca8ab04dfdd15c",
    symbol: "M2",
    decimals: 18,
  },
  {
    address: "0x8e0fe2947752be0d5acf73aae77362daf79cb379",
    symbol: "NFTD",
    decimals: 18,
  },
  {
    address: "0x34bdf48a8f753de4822a6cfb1fee275f9b4d662e",
    symbol: "BKC",
    decimals: 18,
  },
  {
    address: "0x6c3f90f043a72fa612cbac8115ee7e52bde6e490",
    symbol: "3CRV",
    decimals: 18,
  },
  {
    address: "0x8c4e7f814d40f8929f9112c5d09016f923d34472",
    symbol: "XLAB",
    decimals: 18,
  },
  {
    address: "0x4297394c20800e8a38a619a243e9bbe7681ff24e",
    symbol: "HOTCROSS",
    decimals: 18,
  },
  {
    address: "0xd32641191578ea9b208125ddd4ec5e7b84fcab4c",
    symbol: "TMED",
    decimals: 18,
  },
  {
    address: "0x4d953cf077c0c95ba090226e59a18fcf97db44ec",
    symbol: "MINI",
    decimals: 18,
  },
  {
    address: "0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d",
    symbol: "SHARE",
    decimals: 9,
  },
  {
    address: "0x4a621d9f1b19296d1c0f87637b3a8d4978e9bf82",
    symbol: "CYFM",
    decimals: 18,
  },
  {
    address: "0x07150e919b4de5fd6a63de1f9384828396f25fdc",
    symbol: "BASE",
    decimals: 9,
  },
  {
    address: "0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2",
    symbol: "PPAY",
    decimals: 18,
  },
  {
    address: "0x41a08648c3766f9f9d85598ff102a08f4ef84f84",
    symbol: "ABPT",
    decimals: 18,
  },
  {
    address: "0x4fbb350052bca5417566f188eb2ebce5b19bc964",
    symbol: "GRG",
    decimals: 18,
  },
  {
    address: "0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e",
    symbol: "AZRX",
    decimals: 18,
  },
  {
    address: "0xa1116930326d21fb917d5a27f1e9943a9595fb47",
    symbol: "STKABPT",
    decimals: 18,
  },
  {
    address: "0x03cce75a4795c1cfab8b7c0a1fb38df46d2f4159",
    symbol: "MAJOR",
    decimals: 9,
  },
  {
    address: "0x32a7c02e79c4ea1008dd6564b35f131428673c41",
    symbol: "CRU",
    decimals: 18,
  },
  {
    address: "0xf418588522d5dd018b425e472991e52ebbeeeeee",
    symbol: "PUSH",
    decimals: 18,
  },
  {
    address: "0x2904b9b16652d7d0408eccfa23a19d4a3358230f",
    symbol: "PURE",
    decimals: 18,
  },
  {
    address: "0x4156d3342d5c385a87d264f90653733592000581",
    symbol: "SALT",
    decimals: 8,
  },
  {
    address: "0x940bdcb99a0ee5fb008a606778ae87ed9789f257",
    symbol: "JFIN",
    decimals: 18,
  },
  {
    address: "0x6d4ca1177087924edfe0908ef655169ea766fdc3",
    symbol: "HEDGEHOG",
    decimals: 18,
  },
  {
    address: "0xdc47f2ba852669b178699449e50682d6ceaf8c07",
    symbol: "STON",
    decimals: 18,
  },
  {
    address: "0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30",
    symbol: "VIDYA",
    decimals: 18,
  },
  {
    address: "0x0aacfbec6a24756c20d41914f2caba817c0d8521",
    symbol: "YAM",
    decimals: 18,
  },
  {
    address: "0xd4fcde9bb1d746dd7e5463b01dd819ee06af25db",
    symbol: "EZEIGEN",
    decimals: 18,
  },
  {
    address: "0x0a913bead80f321e7ac35285ee10d9d922659cb7",
    symbol: "DOS",
    decimals: 18,
  },
  {
    address: "0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7",
    symbol: "PHNX",
    decimals: 18,
  },
  {
    address: "0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373",
    symbol: "GMEE",
    decimals: 18,
  },
  {
    address: "0x2c537e5624e4af88a7ae4060c022609376c8d0eb",
    symbol: "TRYB",
    decimals: 6,
  },
  {
    address: "0xa8262eb913fccea4c3f77fc95b8b4043b384cfbb",
    symbol: "KGC",
    decimals: 18,
  },
  {
    address: "0x2077d81d0c5258230d5a195233941547cb5f0989",
    symbol: "TROG",
    decimals: 9,
  },
  {
    address: "0x04f121600c8c47a754636fc9d75661a9525e05d5",
    symbol: "STARS",
    decimals: 18,
  },
  {
    address: "0xface851a4921ce59e912d19329929ce6da6eb0c7",
    symbol: "CLINK",
    decimals: 8,
  },
  {
    address: "0x2fd61567c29e7adb4ca17e60e1f4a3fcfe68acb8",
    symbol: "SYM",
    decimals: 18,
  },
  {
    address: "0x8e30ea2329d95802fd804f4291220b0e2f579812",
    symbol: "DVP",
    decimals: 18,
  },
  {
    address: "0xffe510a92434a0df346c5e72a3494b043cf249eb",
    symbol: "LBXC",
    decimals: 18,
  },
  {
    address: "0xc77b230f31b517f1ef362e59c173c2be6540b5e8",
    symbol: "VIDY",
    decimals: 18,
  },
  {
    address: "0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41",
    symbol: "PROPS",
    decimals: 18,
  },
  {
    address: "0xfd957f21bd95e723645c07c48a2d8acb8ffb3794",
    symbol: "ETHM",
    decimals: 18,
  },
  {
    address: "0x05bbe7240de66f6480c9aeda77c1376b13393f83",
    symbol: "XNO",
    decimals: 18,
  },
  {
    address: "0xb19dd661f076998e3b0456935092a233e12c2280",
    symbol: "UM",
    decimals: 18,
  },
  {
    address: "0xf2cdf38e24738ba379ffa38d47bc88a941df5627",
    symbol: "ALY",
    decimals: 2,
  },
  {
    address: "0x6c3be406174349cfa4501654313d97e6a31072e1",
    symbol: "CNNS",
    decimals: 18,
  },
  {
    address: "0x62dc4817588d53a056cbbd18231d91ffccd34b2a",
    symbol: "DHV",
    decimals: 18,
  },
  {
    address: "0x3e8203e0b1d56984abc66f183a8d0b1a09a7e607",
    symbol: "LP",
    decimals: 9,
  },
  {
    address: "0xe0b9bcd54bf8a730ea5d3f1ffce0885e911a502c",
    symbol: "ZUM",
    decimals: 8,
  },
  {
    address: "0x77163c968c2506077dbe74838dea72314a2d5760",
    symbol: "SOMA",
    decimals: 18,
  },
  {
    address: "0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc",
    symbol: "MYB",
    decimals: 18,
  },
  {
    address: "0x8a854288a5976036a725879164ca3e91d30c6a1b",
    symbol: "GET",
    decimals: 18,
  },
  {
    address: "0x65a8fba02f641a13bb7b01d5e1129b0521004f52",
    symbol: "AMAS",
    decimals: 18,
  },
  {
    address: "0x5fbc2ffe91ac74e3e286bd7504b233f0e5291c69",
    symbol: "EBET",
    decimals: 8,
  },
  {
    address: "0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f",
    symbol: "RAMP",
    decimals: 18,
  },
  {
    address: "0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b",
    symbol: "UFO",
    decimals: 18,
  },
  {
    address: "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
    symbol: "IDEX",
    decimals: 18,
  },
  {
    address: "0x24da31e7bb182cb2cabfef1d88db19c2ae1f5572",
    symbol: "SHIK",
    decimals: 18,
  },
  {
    address: "0xc1abb8c93be6811affc70675b0432926c4bfbb5d",
    symbol: "UERII",
    decimals: 18,
  },
  {
    address: "0x6c936d4ae98e6d2172db18c16c4b601c99918ee6",
    symbol: "LIFE",
    decimals: 18,
  },
  {
    address: "0xf80d589b3dbe130c270a69f1a69d050f268786df",
    symbol: "DAM",
    decimals: 18,
  },
  {
    address: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
    symbol: "VIB",
    decimals: 18,
  },
  {
    address: "0x5d5e244660ca05c42073c9a526616d99f2c99516",
    symbol: "GTCOIN",
    decimals: 18,
  },
  {
    address: "0xf5717f5df41ea67ef67dfd3c1d02f9940bcf5d08",
    symbol: "SNN",
    decimals: 3,
  },
  {
    address: "0x0ff6ffcfda92c53f615a4a75d982f399c989366b",
    symbol: "LAYER",
    decimals: 18,
  },
  {
    address: "0xfca47962d45adfdfd1ab2d972315db4ce7ccf094",
    symbol: "IXT",
    decimals: 8,
  },
  {
    address: "0x98968f0747e0a261532cacc0be296375f5c08398",
    symbol: "MOONCAT",
    decimals: 18,
  },
  {
    address: "0x2c8ea636345a231e4b1a28f6eeb2072ed909c406",
    symbol: "MEMELON",
    decimals: 18,
  },
  {
    address: "0xacbd826394189cf2623c6df98a18b41fc8ffc16d",
    symbol: "N1",
    decimals: 18,
  },
  {
    address: "0x89509aa1d14a8e1e5364ec4c3b041213bcdbe08d",
    symbol: "ZURR",
    decimals: 18,
  },
  {
    address: "0x2e95cea14dd384429eb3c4331b776c4cfbb6fcd9",
    symbol: "THN",
    decimals: 18,
  },
  {
    address: "0xe67f943af5eb6051ef56f05979cc30b732717fa6",
    symbol: "WATT",
    decimals: 4,
  },
  {
    address: "0x2fe39f22eac6d3c1c86dd9d143640ebb94609fce",
    symbol: "JDC",
    decimals: 18,
  },
  {
    address: "0xdbdb4d16eda451d0503b854cf79d55697f90c8df",
    symbol: "ALCX",
    decimals: 18,
  },
  {
    address: "0x6a7ef4998eb9d0f706238756949f311a59e05745",
    symbol: "KEN",
    decimals: 18,
  },
  {
    address: "0x48fb253446873234f2febbf9bdeaa72d9d387f94",
    symbol: "VBNT",
    decimals: 18,
  },
  {
    address: "0xbc6da0fe9ad5f3b0d58160288917aa56653660e9",
    symbol: "ALUSD",
    decimals: 18,
  },
  {
    address: "0x3301ee63fb29f863f2333bd4466acb46cd8323e6",
    symbol: "AKITA",
    decimals: 18,
  },
  {
    address: "0xac6df26a590f08dcc95d5a4705ae8abbc88509ef",
    symbol: "AENJ",
    decimals: 18,
  },
  {
    address: "0x8bd35250918ed056304fa8641e083be2c42308bb",
    symbol: "ESTEE",
    decimals: 18,
  },
  {
    address: "0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4",
    symbol: "KIT",
    decimals: 18,
  },
  {
    address: "0x08d967bb0134f2d07f7cfb6e246680c53927dd30",
    symbol: "MATH",
    decimals: 18,
  },
  {
    address: "0x035df12e0f3ac6671126525f1015e47d79dfeddf",
    symbol: "0XMR",
    decimals: 18,
  },
  {
    address: "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    symbol: "HUSD",
    decimals: 8,
  },
  {
    address: "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
    symbol: "TRIBE",
    decimals: 18,
  },
  {
    address: "0x70881d5c8a5950ceedf1f1b4b5d4105718642548",
    symbol: "BAG",
    decimals: 18,
  },
  {
    address: "0xa685a61171bb30d4072b338c80cb7b2c865c873e",
    symbol: "AMANA",
    decimals: 18,
  },
  {
    address: "0xb53ecf1345cabee6ea1a65100ebb153cebcac40f",
    symbol: "O",
    decimals: 18,
  },
  {
    address: "0xdf801468a808a32656d2ed2d2d80b72a129739f4",
    symbol: "CUBE",
    decimals: 8,
  },
  {
    address: "0xdd16ec0f66e54d453e6756713e533355989040e4",
    symbol: "TEN",
    decimals: 18,
  },
  {
    address: "0x9ee91f9f426fa633d227f7a9b000e28b9dfd8599",
    symbol: "STMATIC",
    decimals: 18,
  },
  {
    address: "0x85614a474dbeed440d5bbdb8ac50b0f22367f997",
    symbol: "XVG",
    decimals: 18,
  },
  {
    address: "0x3f962f6325e61b90bae9971f110863c4e67036e2",
    symbol: "SQUARES",
    decimals: 18,
  },
  {
    address: "0x666d875c600aa06ac1cf15641361dec3b00432ef",
    symbol: "BTSE",
    decimals: 8,
  },
  {
    address: "0x95e40e065afb3059dcabe4aaf404c1f92756603a",
    symbol: "KDAG",
    decimals: 18,
  },
  {
    address: "0x4e9fcd48af4738e3bf1382009dc1e93ebfce698f",
    symbol: "TAONU",
    decimals: 18,
  },
  {
    address: "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
    symbol: "UBT",
    decimals: 8,
  },
  {
    address: "0x6c3fe25a4de7fa243c653cfe1f165bf11d99704e",
    symbol: "HILO",
    decimals: 18,
  },
  {
    address: "0xb9d09bc374577dac1ab853de412a903408204ea8",
    symbol: "SHEI",
    decimals: 18,
  },
  {
    address: "0x62431de84c503e152a8957ff51c8945aaaa7d929",
    symbol: "BLAST",
    decimals: 9,
  },
  {
    address: "0xe38149abc673a117abeb8af7d1ff3d0d1aa5af15",
    symbol: "RCBETH",
    decimals: 18,
  },
  {
    address: "0x57b946008913b82e4df85f501cbaed910e58d26c",
    symbol: "POND",
    decimals: 18,
  },
  {
    address: "0x0001a500a6b18995b03f44bb040a5ffc28e45cb0",
    symbol: "OLAS",
    decimals: 18,
  },
  {
    address: "0x9cb1aeafcc8a9406632c5b084246ea72f62d37b6",
    symbol: "LBK",
    decimals: 8,
  },
  {
    address: "0x50753cfaf86c094925bf976f218d043f8791e408",
    symbol: "EURR",
    decimals: 6,
  },
  {
    address: "0x42726d074bba68ccc15200442b72afa2d495a783",
    symbol: "ISIKC",
    decimals: 4,
  },
  {
    address: "0x667102bd3413bfeaa3dffb48fa8288819e480a88",
    symbol: "TKX",
    decimals: 8,
  },
  {
    address: "0xc237868a9c5729bdf3173dddacaa336a0a5bb6e0",
    symbol: "WGR",
    decimals: 8,
  },
  {
    address: "0xa0cf46eb152656c7090e769916eb44a138aaa406",
    symbol: "SPH",
    decimals: 18,
  },
  {
    address: "0x4c11249814f11b9346808179cf06e71ac328c1b5",
    symbol: "ORAI",
    decimals: 18,
  },
  {
    address: "0x594daad7d77592a2b97b725a7ad59d7e188b5bfa",
    symbol: "APU",
    decimals: 18,
  },
  {
    address: "0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131",
    symbol: "NGC",
    decimals: 18,
  },
  {
    address: "0xd31a59c85ae9d8edefec411d448f90841571b89c",
    symbol: "SOL",
    decimals: 9,
  },
  {
    address: "0xe5acbb03d73267c03349c76ead672ee4d941f499",
    symbol: "BEAM",
    decimals: 8,
  },
  {
    address: "0xc4de189abf94c57f396bd4c52ab13b954febefd8",
    symbol: "B20",
    decimals: 18,
  },
  {
    address: "0x72e4f9f808c49a2a61de9c5896298920dc4eeea9",
    symbol: "BITCOIN",
    decimals: 8,
  },
  {
    address: "0xb8fa12f8409da31a4fc43d15c4c78c33d8213b9b",
    symbol: "CALI",
    decimals: 18,
  },
  {
    address: "0xab0ceb816ad51168ea61545316ee0b3387122243",
    symbol: "SPEC",
    decimals: 18,
  },
  {
    address: "0x8a9c67fee641579deba04928c4bc45f66e26343a",
    symbol: "JRT",
    decimals: 18,
  },
  {
    address: "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe",
    symbol: "DSLA",
    decimals: 18,
  },
  {
    address: "0x3073f7aaa4db83f95e9fff17424f71d4751a3073",
    symbol: "MOVE",
    decimals: 8,
  },
  {
    address: "0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4",
    symbol: "SYLO",
    decimals: 18,
  },
  {
    address: "0xfd6c31bb6f05fc8db64f4b740ab758605c271fd8",
    symbol: "CTCN",
    decimals: 18,
  },
  {
    address: "0x8bc2bcb1b1896291942c36f3cca3c1afa0aaa7fd",
    symbol: "PACE",
    decimals: 18,
  },
  {
    address: "0xe0bceef36f3a6efdd5eebfacd591423f8549b9d5",
    symbol: "FACTR",
    decimals: 18,
  },
  {
    address: "0x52498f8d9791736f1d6398fe95ba3bd868114d10",
    symbol: "NETVR",
    decimals: 18,
  },
  {
    address: "0x07c8b9deae988726fd443ea8c3c1367f98a31f9c",
    symbol: "BIOHACK",
    decimals: 18,
  },
  {
    address: "0xa7de087329bfcda5639247f96140f9dabe3deed1",
    symbol: "STA",
    decimals: 18,
  },
  {
    address: "0x82a77710495a35549d2add797412b4a4497d33ef",
    symbol: "DOGZ",
    decimals: 18,
  },
  {
    address: "0xc4c346edc55504574cceb00aa1091d22404a4bc3",
    symbol: "MEZZ",
    decimals: 18,
  },
  {
    address: "0x580c8520deda0a441522aeae0f9f7a5f29629afa",
    symbol: "DAWN",
    decimals: 18,
  },
  {
    address: "0x3a880652f47bfaa771908c07dd8673a787daed3a",
    symbol: "DDX",
    decimals: 18,
  },
  {
    address: "0x744030ad4e6c10faf5483b62473d88a254d62261",
    symbol: "NLK",
    decimals: 18,
  },
  {
    address: "0x5e3346444010135322268a4630d2ed5f8d09446c",
    symbol: "LOC",
    decimals: 18,
  },
  {
    address: "0x1c95b093d6c236d3ef7c796fe33f9cc6b8606714",
    symbol: "BOMB",
    decimals: 0,
  },
  {
    address: "0xc538143202f3b11382d8606aae90a96b042a19db",
    symbol: "CNB",
    decimals: 18,
  },
  {
    address: "0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e",
    symbol: "UNISTAKE",
    decimals: 18,
  },
  {
    address: "0xfa14fa6958401314851a17d6c5360ca29f74b57b",
    symbol: "SAITO",
    decimals: 18,
  },
  {
    address: "0x7c5d5100b339fe7d995a893af6cb496b9474373c",
    symbol: "LOON",
    decimals: 18,
  },
  {
    address: "0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a",
    symbol: "AREN",
    decimals: 18,
  },
  {
    address: "0xa19f5264f7d7be11c451c093d8f92592820bea86",
    symbol: "BYTES",
    decimals: 18,
  },
  {
    address: "0x4dfae3690b93c47470b03036a17b23c1be05127c",
    symbol: "PEPE",
    decimals: 18,
  },
  {
    address: "0x0aee8703d34dd9ae107386d3eff22ae75dd616d1",
    symbol: "SLICE",
    decimals: 18,
  },
  {
    address: "0x03042ae6fcfd53e3a0baa1fab5ce70e0cb74e6fb",
    symbol: "TBC",
    decimals: 18,
  },
  {
    address: "0x701c244b988a513c945973defa05de933b23fe1d",
    symbol: "OAX",
    decimals: 18,
  },
  {
    address: "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
    symbol: "TOWER",
    decimals: 18,
  },
  {
    address: "0xbaac2b4491727d78d2b78815144570b9f2fe8899",
    symbol: "DOG",
    decimals: 18,
  },
  {
    address: "0x662b67d00a13faf93254714dd601f5ed49ef2f51",
    symbol: "ORC",
    decimals: 18,
  },
  {
    address: "0xd3e4ba569045546d09cf021ecc5dfe42b1d7f6e4",
    symbol: "MNW",
    decimals: 18,
  },
  {
    address: "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff",
    symbol: "IMX",
    decimals: 18,
  },
  {
    address: "0x213c53c96a01a89e6dcc5683cf16473203e17513",
    symbol: "DSS",
    decimals: 18,
  },
  {
    address: "0x6226e00bcac68b0fe55583b90a1d727c14fab77f",
    symbol: "MTV",
    decimals: 18,
  },
  {
    address: "0xe1fc4455f62a6e89476f1072530c20cf1a0622da",
    symbol: "PHTR",
    decimals: 18,
  },
  {
    address: "0xc05d14442a510de4d3d71a3d316585aa0ce32b50",
    symbol: "LINA",
    decimals: 18,
  },
  {
    address: "0x7e77dcb127f99ece88230a64db8d595f31f1b068",
    symbol: "SILV2",
    decimals: 18,
  },
  {
    address: "0x7199b5a15c7fb79aa861780230adc65fff99ec73",
    symbol: "0XANON",
    decimals: 8,
  },
  {
    address: "0x6f80310ca7f2c654691d1383149fa1a57d8ab1f8",
    symbol: "SILO",
    decimals: 18,
  },
  {
    address: "0x722f97a435278b7383a1e3c47f41773bebf3232c",
    symbol: "UCM",
    decimals: 18,
  },
  {
    address: "0x990f341946a3fdb507ae7e52d17851b87168017c",
    symbol: "STRONG",
    decimals: 18,
  },
  {
    address: "0xe63684bcf2987892cefb4caa79bd21b34e98a291",
    symbol: "KFC",
    decimals: 18,
  },
  {
    address: "0x70d2b7c19352bb76e4409858ff5746e500f2b67c",
    symbol: "UPI",
    decimals: 18,
  },
  {
    address: "0xc813ea5e3b48bebeedb796ab42a30c5599b01740",
    symbol: "NIOX",
    decimals: 4,
  },
  {
    address: "0x9f7fc686cfd64aa5ae15b351d03071e91533094b",
    symbol: "TRACE",
    decimals: 18,
  },
  {
    address: "0xd8912c10681d8b21fd3742244f44658dba12264e",
    symbol: "PLU",
    decimals: 18,
  },
  {
    address: "0xcb8d1260f9c92a3a545d409466280ffdd7af7042",
    symbol: "NFT",
    decimals: 18,
  },
  {
    address: "0x56015bbe3c01fe05bc30a8a9a9fd9a88917e7db3",
    symbol: "CAT",
    decimals: 18,
  },
  {
    address: "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
    symbol: "ENG",
    decimals: 8,
  },
  {
    address: "0xc975342a95ccb75378ddc646b8620fa3cd5bc051",
    symbol: "PUNKETH-20",
    decimals: 18,
  },
  {
    address: "0xecc0f1f860a82ab3b442382d93853c02d6384389",
    symbol: "AXIS",
    decimals: 18,
  },
  {
    address: "0x8a6aca71a218301c7081d4e96d64292d3b275ce0",
    symbol: "SFG",
    decimals: 18,
  },
  {
    address: "0x04e0af0af1b7f0023c6b12af5a94df59b0e8cf59",
    symbol: "SETS",
    decimals: 18,
  },
  {
    address: "0xcbd55d4ffc43467142761a764763652b48b969ff",
    symbol: "ASTRO",
    decimals: 18,
  },
  {
    address: "0x3a8cccb969a61532d1e6005e2ce12c200caece87",
    symbol: "TITAN",
    decimals: 18,
  },
  {
    address: "0xc28e27870558cf22add83540d2126da2e4b464c2",
    symbol: "SASHIMI",
    decimals: 18,
  },
  {
    address: "0x1f19d846d99a0e75581913b64510fe0e18bbc31f",
    symbol: "FGM",
    decimals: 18,
  },
  {
    address: "0xe91598331a36a78f7fefe277ce7c1915da0afb93",
    symbol: "RB",
    decimals: 18,
  },
  {
    address: "0x3b50805453023a91a8bf641e279401a0b23fa6f9",
    symbol: "REZ",
    decimals: 18,
  },
  {
    address: "0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c",
    symbol: "GOF",
    decimals: 18,
  },
  {
    address: "0x5befbb272290dd5b8521d4a938f6c4757742c430",
    symbol: "XFI",
    decimals: 18,
  },
  {
    address: "0xf89674f18309a2e97843c6e9b19c07c22caef6d5",
    symbol: "GAMER",
    decimals: 9,
  },
  {
    address: "0x31429d1856ad1377a8a0079410b297e1a9e214c2",
    symbol: "ANGLE",
    decimals: 18,
  },
  {
    address: "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6",
    symbol: "ABYSS",
    decimals: 18,
  },
  {
    address: "0x0e5f00da8aaef196a719d045db89b5da8f371b32",
    symbol: "CNTM",
    decimals: 18,
  },
  {
    address: "0xedeec5691f23e4914cf0183a4196bbeb30d027a0",
    symbol: "WSTA",
    decimals: 18,
  },
  {
    address: "0x5d942f9872863645bcb181aba66c7d9646a91378",
    symbol: "ASI",
    decimals: 18,
  },
  {
    address: "0x47000bd34d9a7b7cdbeef4ec2ae452e73280a8b5",
    symbol: "SHRUBIUS",
    decimals: 9,
  },
  {
    address: "0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016",
    symbol: "1MIL",
    decimals: 18,
  },
  {
    address: "0xcc7ab8d78dba187dc95bf3bb86e65e0c26d0041f",
    symbol: "SPACE",
    decimals: 18,
  },
  {
    address: "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
    symbol: "BBTC",
    decimals: 8,
  },
  {
    address: "0x3f14920c99beb920afa163031c4e47a3e03b3e4a",
    symbol: "SEND",
    decimals: 0,
  },
  {
    address: "0xb2f79d891f11bc8e9805db135defc04ead8d780e",
    symbol: "AIO",
    decimals: 18,
  },
  {
    address: "0x8e57c27761ebbd381b0f9d09bb92ceb51a358abb",
    symbol: "XDNA",
    decimals: 18,
  },
  {
    address: "0x6369c3dadfc00054a42ba8b2c09c48131dd4aa38",
    symbol: "MPH",
    decimals: 18,
  },
  {
    address: "0x998ffe1e43facffb941dc337dd0468d52ba5b48a",
    symbol: "IDRT",
    decimals: 2,
  },
  {
    address: "0x7122985656e38bdc0302db86685bb972b145bd3c",
    symbol: "STONE",
    decimals: 18,
  },
  {
    address: "0x946fb08103b400d1c79e07acccdef5cfd26cd374",
    symbol: "KIP",
    decimals: 18,
  },
  {
    address: "0xaac41ec512808d64625576eddd580e7ea40ef8b2",
    symbol: "GSWAP",
    decimals: 18,
  },
  {
    address: "0x0391d2021f89dc339f60fff84546ea23e337750f",
    symbol: "BOND",
    decimals: 18,
  },
  {
    address: "0x28ff2e4dd1b58efeb0fc138602a28d5ae81e44e2",
    symbol: "ZKCRO",
    decimals: 18,
  },
  {
    address: "0x16587cf43f044aba0165ffa00acf412631194e4b",
    symbol: "SRC",
    decimals: 18,
  },
  {
    address: "0x25c7b64a93eb1261e130ec21a3e9918caa38b611",
    symbol: "WVG0",
    decimals: 18,
  },
  {
    address: "0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112",
    symbol: "GS",
    decimals: 18,
  },
  {
    address: "0xe75f2acafba1ad56c5ed712ffbc1d31910e74396",
    symbol: "KAI",
    decimals: 18,
  },
  {
    address: "0xbbff34e47e559ef680067a6b1c980639eeb64d24",
    symbol: "L2",
    decimals: 18,
  },
  {
    address: "0xc3c221fe28c33814c28c822b631fd76047ef1a63",
    symbol: "MM",
    decimals: 18,
  },
  {
    address: "0xdacd69347de42babfaecd09dc88958378780fb62",
    symbol: "ATRI",
    decimals: 0,
  },
  {
    address: "0xd849882983f1ba8a3c23b16b65bb0173a7f63b63",
    symbol: "DEAI",
    decimals: 18,
  },
  {
    address: "0x725c263e32c72ddc3a19bea12c5a0479a81ee688",
    symbol: "BMI",
    decimals: 18,
  },
  {
    address: "0x10633216e7e8281e33c86f02bf8e565a635d9770",
    symbol: "DVI",
    decimals: 18,
  },
  {
    address: "0x84c722e6f1363e8d5c6db3ea600bef9a006da824",
    symbol: "MSB",
    decimals: 18,
  },
  {
    address: "0x50b0696468f42cab1ddc76413a1312aff3cabdf6",
    symbol: "CLOSEDAI",
    decimals: 18,
  },
  {
    address: "0x37cfc2e83665d49364670dfea6d2dd4cb1215f22",
    symbol: "RRETH",
    decimals: 18,
  },
  {
    address: "0xfe9a29ab92522d14fc65880d817214261d8479ae",
    symbol: "SNOW",
    decimals: 18,
  },
  {
    address: "0x1fc5ef0337aea85c5f9198853a6e3a579a7a6987",
    symbol: "REAP",
    decimals: 18,
  },
  {
    address: "0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4",
    symbol: "CFI",
    decimals: 18,
  },
  {
    address: "0x26a604dffe3ddab3bee816097f81d3c4a2a4cf97",
    symbol: "CORX",
    decimals: 8,
  },
  {
    address: "0x67b66c99d3eb37fa76aa3ed1ff33e8e39f0b9c7a",
    symbol: "IBETH",
    decimals: 18,
  },
  {
    address: "0x2c2f7e7c5604d162d75641256b80f1bf6f4dc796",
    symbol: "PRARE",
    decimals: 18,
  },
  {
    address: "0x4946fcea7c692606e8908002e55a582af44ac121",
    symbol: "FOAM",
    decimals: 18,
  },
  {
    address: "0x910524678c0b1b23ffb9285a81f99c29c11cbaed",
    symbol: "AZUKI",
    decimals: 18,
  },
  {
    address: "0x191557728e4d8caa4ac94f86af842148c0fa8f7e",
    symbol: "ECO",
    decimals: 8,
  },
  {
    address: "0x581911b360b6eb3a14ef295a83a91dc2bce2d6f7",
    symbol: "MVC",
    decimals: 18,
  },
  {
    address: "0x3175df0976dfa876431c2e9ee6bc45b65d3473cc",
    symbol: "CRVFRAX",
    decimals: 18,
  },
  {
    address: "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
    symbol: "WTC",
    decimals: 18,
  },
  {
    address: "0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4",
    symbol: "TONE",
    decimals: 18,
  },
  {
    address: "0xcbe7142f5c16755d8683ba329efa1abf7b54482d",
    symbol: "MVEDA",
    decimals: 8,
  },
  {
    address: "0xd794dd1cada4cf79c9eebaab8327a1b0507ef7d4",
    symbol: "HYVE",
    decimals: 18,
  },
  {
    address: "0x031b8d752d73d7fe9678acef26e818280d0646b4",
    symbol: "SOVRN",
    decimals: 18,
  },
  {
    address: "0xcb8fb2438a805664cd8c3e640b85ac473da5be87",
    symbol: "CTI",
    decimals: 18,
  },
  {
    address: "0x485d17a6f1b8780392d53d64751824253011a260",
    symbol: "TIME",
    decimals: 8,
  },
  {
    address: "0xf0655dcee37e5c0b70fffd70d85f88f8edf0aff6",
    symbol: "UNIDX",
    decimals: 18,
  },
  {
    address: "0x3a810ff7211b40c4fa76205a14efe161615d0385",
    symbol: "AIN",
    decimals: 18,
  },
  {
    address: "0xce593a29905951e8fc579bc092eca72577da575c",
    symbol: "GR",
    decimals: 6,
  },
  {
    address: "0xa1d65e8fb6e87b60feccbc582f7f97804b725521",
    symbol: "DXD",
    decimals: 18,
  },
  {
    address: "0x69bbc3f8787d573f1bbdd0a5f40c7ba0aee9bcc9",
    symbol: "YUP",
    decimals: 18,
  },
  {
    address: "0xcaeaf8381d4b20b43afa42061d6f80319a8881f6",
    symbol: "R34P",
    decimals: 8,
  },
  {
    address: "0x6876eba317272fe221c67405c5e8eb3b24535547",
    symbol: "MCT",
    decimals: 18,
  },
  {
    address: "0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32",
    symbol: "SYNC",
    decimals: 18,
  },
  {
    address: "0x34950ff2b487d9e5282c5ab342d08a2f712eb79f",
    symbol: "WOZX",
    decimals: 18,
  },
  {
    address: "0xc12d099be31567add4e4e4d0d45691c3f58f5663",
    symbol: "AUC",
    decimals: 18,
  },
  {
    address: "0xdf49c9f599a0a9049d97cff34d0c30e468987389",
    symbol: "SATT",
    decimals: 18,
  },
  {
    address: "0xedf6568618a00c6f0908bf7758a16f76b6e04af9",
    symbol: "ARIA20",
    decimals: 18,
  },
  {
    address: "0x374cb8c27130e2c9e04f44303f3c8351b9de61c1",
    symbol: "BAO",
    decimals: 18,
  },
  {
    address: "0xc014186cf1ba36032aaec7f96088f09eb3934347",
    symbol: "WCX",
    decimals: 18,
  },
  {
    address: "0x2893a91b29b80ab62deffff6eb135f32dda8e1d3",
    symbol: "FAI",
    decimals: 18,
  },
  {
    address: "0xff44b937788215eca197baaf9af69dbdc214aa04",
    symbol: "ROCKI",
    decimals: 18,
  },
  {
    address: "0xe59d2ff6995a926a574390824a657eed36801e55",
    symbol: "AAMMUNIAAVEWETH",
    decimals: 18,
  },
  {
    address: "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38",
    symbol: "PUNDIX",
    decimals: 18,
  },
  {
    address: "0xf16e81dce15b08f326220742020379b855b87df9",
    symbol: "ICE",
    decimals: 18,
  },
  {
    address: "0xf0acf8949e705e0ebb6cb42c2164b0b986454223",
    symbol: "BRTR",
    decimals: 8,
  },
  {
    address: "0x96c645d3d3706f793ef52c19bbace441900ed47d",
    symbol: "MPS",
    decimals: 0,
  },
  {
    address: "0x8162b5bc8f651007cc38a09f557bab2bf4cefb5b",
    symbol: "STRM",
    decimals: 18,
  },
  {
    address: "0x853d955acef822db058eb8505911ed77f175b99e",
    symbol: "FRAX",
    decimals: 18,
  },
  {
    address: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    symbol: "FXS",
    decimals: 18,
  },
  {
    address: "0x6522f491df42651cf5e6636b7261adaa096d095f",
    symbol: "ASAP",
    decimals: 18,
  },
  {
    address: "0xc0200b1c6598a996a339196259ffdc30c1f44339",
    symbol: "KEK",
    decimals: 9,
  },
  {
    address: "0x0c7d5ae016f806603cb1782bea29ac69471cab9c",
    symbol: "BFC",
    decimals: 18,
  },
  {
    address: "0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d",
    symbol: "KINE",
    decimals: 18,
  },
  {
    address: "0x65f9a292f1aeed5d755aa2fd2fb17ab2e9431447",
    symbol: "SOMEE",
    decimals: 18,
  },
  {
    address: "0x4b0181102a0112a2ef11abee5563bb4a3176c9d7",
    symbol: "CSUSHI",
    decimals: 8,
  },
  {
    address: "0x7690202e2c2297bcd03664e31116d1dffe7e3b73",
    symbol: "BOXETH",
    decimals: 18,
  },
  {
    address: "0x0590cc9232ebf68d81f6707a119898219342ecb9",
    symbol: "BCAT",
    decimals: 9,
  },
  {
    address: "0xeabb8996ea1662cad2f7fb715127852cd3262ae9",
    symbol: "CNFI",
    decimals: 18,
  },
  {
    address: "0x5c2975269e74cb3a8514e5b800a1e66c694d4df8",
    symbol: "HER",
    decimals: 18,
  },
  {
    address: "0x87de305311d5788e8da38d19bb427645b09cb4e5",
    symbol: "VRX",
    decimals: 18,
  },
  {
    address: "0x49e833337ece7afe375e44f4e3e8481029218e5c",
    symbol: "VALUE",
    decimals: 18,
  },
  {
    address: "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81",
    symbol: "BIFI",
    decimals: 18,
  },
  {
    address: "0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8",
    symbol: "LCS",
    decimals: 18,
  },
  {
    address: "0x5caf454ba92e6f2c929df14667ee360ed9fd5b26",
    symbol: "DEV",
    decimals: 18,
  },
  {
    address: "0x8666cb197af5103f7a3a0295b50efea47f3df78b",
    symbol: "DUCKS",
    decimals: 18,
  },
  {
    address: "0xca1207647ff814039530d7d35df0e1dd2e91fa84",
    symbol: "DHT",
    decimals: 18,
  },
  {
    address: "0x178bf8fd04b47d2de3ef3f6b3d112106375ad584",
    symbol: "UUSDT",
    decimals: 6,
  },
  {
    address: "0x0d02755a5700414b26ff040e1de35d337df56218",
    symbol: "BEND",
    decimals: 18,
  },
  {
    address: "0xe9b076b476d8865cdf79d1cf7df420ee397a7f75",
    symbol: "FUND",
    decimals: 9,
  },
  {
    address: "0xdb05ea0877a2622883941b939f0bb11d1ac7c400",
    symbol: "OPCT",
    decimals: 18,
  },
  {
    address: "0x4ad0b81f92b16624bbcf46fc0030cfbbf8d02376",
    symbol: "UDAI",
    decimals: 18,
  },
  {
    address: "0xf4172630a656a47ece8616e75791290446fa41a0",
    symbol: "PEPPA",
    decimals: 2,
  },
  {
    address: "0xc691bc298a304d591ad9b352c7a8d216de9f2ced",
    symbol: "POLA",
    decimals: 18,
  },
  {
    address: "0x9d7b68970d2be6dc93124477b4e2e1c9a6b180aa",
    symbol: "DEDE",
    decimals: 9,
  },
  {
    address: "0xec5483804e637d45cde22fa0869656b64b5ab1ab",
    symbol: "ACE",
    decimals: 18,
  },
  {
    address: "0xf97b5aa4593c333fd2451bd85085a14720aa2a4f",
    symbol: "TALK",
    decimals: 18,
  },
  {
    address: "0xec2bc2b25ab6ed8e669e202cd0ee533e24c9a068",
    symbol: "ZKEX",
    decimals: 18,
  },
  {
    address: "0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24",
    symbol: "GUM",
    decimals: 18,
  },
  {
    address: "0x011e128ec62840186f4a07e85e3ace28858c5606",
    symbol: "VAL",
    decimals: 18,
  },
  {
    address: "0x59e9261255644c411afdd00bd89162d09d862e38",
    symbol: "ETHA",
    decimals: 18,
  },
  {
    address: "0x9d5963ba32e877871dff3e2e697283dc64066271",
    symbol: "EDC",
    decimals: 18,
  },
  {
    address: "0x6fc13eace26590b80cccab1ba5d51890577d83b2",
    symbol: "UMB",
    decimals: 18,
  },
  {
    address: "0x93b1e78a3e652cd2e71c4a767595b77282344932",
    symbol: "BITO",
    decimals: 18,
  },
  {
    address: "0xc5fb36dd2fb59d3b98deff88425a3f425ee469ed",
    symbol: "TSUKA",
    decimals: 9,
  },
  {
    address: "0xd4342a57ecf2fe7ffa37c33cb8f63b1500e575e6",
    symbol: "APN",
    decimals: 18,
  },
  {
    address: "0xe516d78d784c77d479977be58905b3f2b1111126",
    symbol: "SPWN",
    decimals: 18,
  },
  {
    address: "0xb49fa25978abf9a248b8212ab4b87277682301c0",
    symbol: "SOFI",
    decimals: 18,
  },
  {
    address: "0x3d3af44cf092a49280e316f09c8f20ecf97bc933",
    symbol: "UCX",
    decimals: 18,
  },
  {
    address: "0x5d3a4f62124498092ce665f865e0b38ff6f5fbea",
    symbol: "IDEA",
    decimals: 18,
  },
  {
    address: "0x14cc8dfaf2258e1b8b2869300dba1b734dc0fe43",
    symbol: "KTT",
    decimals: 18,
  },
  {
    address: "0xfdb15e5e6799be72798b1ccfaecbf186bf73a0c4",
    symbol: "NTX",
    decimals: 8,
  },
  {
    address: "0xea1ea0972fa092dd463f2968f9bb51cc4c981d71",
    symbol: "MOD",
    decimals: 18,
  },
  {
    address: "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da",
    symbol: "HOPR",
    decimals: 18,
  },
  {
    address: "0xd478161c952357f05f0292b56012cd8457f1cfbf",
    symbol: "POLK",
    decimals: 18,
  },
  {
    address: "0xc9bd7011ee97a13dc07087e01499a769ab7e75b4",
    symbol: "PEEZY",
    decimals: 9,
  },
  {
    address: "0x63f88a2298a5c4aee3c216aa6d926b184a4b2437",
    symbol: "GAME",
    decimals: 18,
  },
  {
    address: "0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c",
    symbol: "NUX",
    decimals: 18,
  },
  {
    address: "0xfe8526a77a2c3590e5973ba81308b90bea21fbff",
    symbol: "WAI",
    decimals: 18,
  },
  {
    address: "0xdbcd57cc74b180f928258f7b1a32f6f7e64bf12e",
    symbol: "BEPE",
    decimals: 18,
  },
  {
    address: "0x4c44a8b7823b80161eb5e6d80c014024752607f2",
    symbol: "PAC",
    decimals: 9,
  },
  {
    address: "0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af",
    symbol: "K21",
    decimals: 18,
  },
  {
    address: "0x852e5427c86a3b46dd25e5fe027bb15f53c4bcb8",
    symbol: "NIIFI",
    decimals: 15,
  },
  {
    address: "0x9355372396e3f6daf13359b7b607a3374cc638e0",
    symbol: "WHALE",
    decimals: 4,
  },
  {
    address: "0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374",
    symbol: "VERI",
    decimals: 18,
  },
  {
    address: "0x469eda64aed3a3ad6f868c44564291aa415cb1d9",
    symbol: "FLUX",
    decimals: 18,
  },
  {
    address: "0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70",
    symbol: "PREMIA",
    decimals: 18,
  },
  {
    address: "0x252b9f56359901a0bde52d0675b1f1130d86f471",
    symbol: "PANDO",
    decimals: 18,
  },
  {
    address: "0x53c8395465a84955c95159814461466053dedede",
    symbol: "DG",
    decimals: 18,
  },
  {
    address: "0xfc4b8ed459e00e5400be803a9bb3954234fd50e3",
    symbol: "AWBTC",
    decimals: 8,
  },
  {
    address: "0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8",
    symbol: "ABUSD",
    decimals: 18,
  },
  {
    address: "0x044d078f1c86508e13328842cc75ac021b272958",
    symbol: "PPC",
    decimals: 6,
  },
  {
    address: "0xfc98e825a2264d890f9a1e68ed50e1526abccacd",
    symbol: "MCO2",
    decimals: 18,
  },
  {
    address: "0x3ed3b47dd13ec9a98b44e6204a523e766b225811",
    symbol: "AUSDT",
    decimals: 6,
  },
  {
    address: "0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1",
    symbol: "ABAT",
    decimals: 18,
  },
  {
    address: "0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656",
    symbol: "AWBTC",
    decimals: 8,
  },
  {
    address: "0xa361718326c15715591c299427c62086f69923d9",
    symbol: "ABUSD",
    decimals: 18,
  },
  {
    address: "0x028171bca77440897b824ca71d1c56cac55b68a3",
    symbol: "ADAI",
    decimals: 18,
  },
  {
    address: "0xd69f306549e9d96f183b1aeca30b8f4353c2ecc3",
    symbol: "MCHC",
    decimals: 18,
  },
  {
    address: "0x19ac2659599fd01c853de846919544276ad26f50",
    symbol: "COVN",
    decimals: 18,
  },
  {
    address: "0x79126d32a86e6663f3aaac4527732d0701c1ae6c",
    symbol: "DMT",
    decimals: 18,
  },
  {
    address: "0x86efc496dca70bcfd92d19194290e8457a375773",
    symbol: "UBSN",
    decimals: 0,
  },
  {
    address: "0x101cc05f4a51c0319f570d5e146a8c625198e636",
    symbol: "ATUSD",
    decimals: 18,
  },
  {
    address: "0x5c8c8d560048f34e5f7f8ad71f2f81a89dbd273e",
    symbol: "CART",
    decimals: 18,
  },
  {
    address: "0x8185bc4757572da2a610f887561c32298f1a5748",
    symbol: "ALN",
    decimals: 18,
  },
  {
    address: "0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0",
    symbol: "ALINK",
    decimals: 18,
  },
  {
    address: "0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6",
    symbol: "ERSDL",
    decimals: 18,
  },
  {
    address: "0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43",
    symbol: "CGG",
    decimals: 18,
  },
  {
    address: "0x657b83a0336561c8f64389a6f5ade675c04b0c3b",
    symbol: "PCNT",
    decimals: 18,
  },
  {
    address: "0x9a8bc3b04b7f3d87cfc09ba407dced575f2d61d8",
    symbol: "MCWETH",
    decimals: 18,
  },
  {
    address: "0x269877f972622d3c293fca595c65cf34b7f527ce",
    symbol: "FWB",
    decimals: 18,
  },
  {
    address: "0x92868a5255c628da08f550a858a802f5351c5223",
    symbol: "BRIDGE",
    decimals: 18,
  },
  {
    address: "0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6",
    symbol: "ODDZ",
    decimals: 18,
  },
  {
    address: "0x0fd3822072ad001aac1c90a09d9506f097f24458",
    symbol: "NOA",
    decimals: 9,
  },
  {
    address: "0x9695e0114e12c0d3a3636fab5a18e6b737529023",
    symbol: "DFYN",
    decimals: 18,
  },
  {
    address: "0x5833dbb0749887174b254ba4a5df747ff523a905",
    symbol: "XRUN",
    decimals: 18,
  },
  {
    address: "0xb17c88bda07d28b3838e0c1de6a30eafbcf52d85",
    symbol: "SHFT",
    decimals: 18,
  },
  {
    address: "0x20bc832ca081b91433ff6c17f85701b6e92486c5",
    symbol: "RETH2",
    decimals: 18,
  },
  {
    address: "0xe796d6ca1ceb1b022ece5296226bf784110031cd",
    symbol: "BLES",
    decimals: 18,
  },
  {
    address: "0x9ea3b5b4ec044b70375236a281986106457b20ef",
    symbol: "DELTA",
    decimals: 18,
  },
  {
    address: "0xfe2e637202056d30016725477c5da089ab0a043a",
    symbol: "SETH2",
    decimals: 18,
  },
  {
    address: "0x36919a60a2b67b6d2329863093d180d23d5a0308",
    symbol: "KUSUNOKI",
    decimals: 18,
  },
  {
    address: "0x741b0428efdf4372a8df6fb54b018db5e5ab7710",
    symbol: "ARTX",
    decimals: 18,
  },
  {
    address: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    symbol: "MIST",
    decimals: 18,
  },
  {
    address: "0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6",
    symbol: "ALETH",
    decimals: 18,
  },
  {
    address: "0x30672ae2680c319ec1028b69670a4a786baa0f35",
    symbol: "NS",
    decimals: 9,
  },
  {
    address: "0xf45f6c8bb3d77ea762175b8f7ca4d251941649fa",
    symbol: "LEMD",
    decimals: 18,
  },
  {
    address: "0x1735db6ab5baa19ea55d0adceed7bcdc008b3136",
    symbol: "URQA",
    decimals: 18,
  },
  {
    address: "0x99c6e435ec259a7e8d65e1955c9423db624ba54c",
    symbol: "FMT",
    decimals: 18,
  },
  {
    address: "0x3c72fca8523686fd9e5740b0826fa4bb376e0241",
    symbol: "FIT",
    decimals: 18,
  },
  {
    address: "0xff75ced57419bcaebe5f05254983b013b0646ef5",
    symbol: "COOK",
    decimals: 18,
  },
  {
    address: "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
    symbol: "MTH",
    decimals: 5,
  },
  {
    address: "0x056c1d42fb1326f57da7f19ebb7dda4673f1ff55",
    symbol: "GAINS",
    decimals: 18,
  },
  {
    address: "0xbd2949f67dcdc549c6ebe98696449fa79d988a9f",
    symbol: "EMTRG",
    decimals: 18,
  },
  {
    address: "0x4fee21439f2b95b72da2f9f901b3956f27fe91d5",
    symbol: "FROG",
    decimals: 18,
  },
  {
    address: "0xd7d9babf56a66daff2ac5dc96f7e886c05124676",
    symbol: "OMZ",
    decimals: 18,
  },
  {
    address: "0x181f2cbda1ad44de56baacbb41c8fe448a2036fe",
    symbol: "WIWI",
    decimals: 18,
  },
  {
    address: "0x24fcfc492c1393274b6bcd568ac9e225bec93584",
    symbol: "MAVIA",
    decimals: 18,
  },
  {
    address: "0x2008e3057bd734e10ad13c9eae45ff132abc1722",
    symbol: "ZCO",
    decimals: 8,
  },
  {
    address: "0x6ef6610d24593805144d73b13d4405e00a4e4ac7",
    symbol: "DIE",
    decimals: 18,
  },
  {
    address: "0x430ef9263e76dae63c84292c3409d61c598e9682",
    symbol: "PYR",
    decimals: 18,
  },
  {
    address: "0x2f109021afe75b949429fe30523ee7c0d5b27207",
    symbol: "OCC",
    decimals: 18,
  },
  {
    address: "0x87931e7ad81914e7898d07c68f145fc0a553d8fb",
    symbol: "WIZARD",
    decimals: 18,
  },
  {
    address: "0x21381e026ad6d8266244f2a583b35f9e4413fa2a",
    symbol: "FORM",
    decimals: 18,
  },
  {
    address: "0xb39185e33e8c28e0bb3dbbce24da5dea6379ae91",
    symbol: "PHUNK",
    decimals: 18,
  },
  {
    address: "0xed0439eacf4c4965ae4613d77a5c2efe10e5f183",
    symbol: "SHROOM",
    decimals: 18,
  },
  {
    address: "0x7ca4408137eb639570f8e647d9bd7b7e8717514a",
    symbol: "ALPA",
    decimals: 18,
  },
  {
    address: "0x397deb686c72384fad502a81f4d7fdb89e1f1280",
    symbol: "XELS",
    decimals: 8,
  },
  {
    address: "0x6307b25a665efc992ec1c1bc403c38f3ddd7c661",
    symbol: "GCR",
    decimals: 4,
  },
  {
    address: "0x0f17bc9a994b87b5225cfb6a2cd4d667adb4f20b",
    symbol: "JEUR",
    decimals: 18,
  },
  {
    address: "0x5d858bcd53e085920620549214a8b27ce2f04670",
    symbol: "POP",
    decimals: 18,
  },
  {
    address: "0x0b5326da634f9270fb84481dd6f94d3dc2ca7096",
    symbol: "ETHO",
    decimals: 18,
  },
  {
    address: "0x321c2fe4446c7c963dc41dd58879af648838f98d",
    symbol: "CTX",
    decimals: 18,
  },
  {
    address: "0x565d3902d6a5a2d5ce28ff427423e88933334dd2",
    symbol: "ADULT",
    decimals: 18,
  },
  {
    address: "0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2",
    symbol: "SWISE",
    decimals: 18,
  },
  {
    address: "0x8cc0f052fff7ead7f2edcccac895502e884a8a71",
    symbol: "ARTH",
    decimals: 18,
  },
  {
    address: "0x43a96962254855f16b925556f9e97be436a43448",
    symbol: "HORD",
    decimals: 18,
  },
  {
    address: "0xb5f1457d6fba1956fb8d31b0b7caca14bde0be4b",
    symbol: "STILT",
    decimals: 9,
  },
  {
    address: "0x20cd2e7ec8f5d8b337fe46a4f565ccef1561b9a9",
    symbol: "ESG",
    decimals: 18,
  },
  {
    address: "0x27778e14ce36d3b85e1effeb43816a17bbb7088a",
    symbol: "LGOLD",
    decimals: 18,
  },
  {
    address: "0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577",
    symbol: "YF-DAI",
    decimals: 18,
  },
  {
    address: "0x4a615bb7166210cce20e6642a6f8fb5d4d044496",
    symbol: "NAOS",
    decimals: 18,
  },
  {
    address: "0xb28a3778e1a78a8c327693516ed4f5b11db41306",
    symbol: "CTRL",
    decimals: 9,
  },
  {
    address: "0x0352557b007a4aae1511c114409b932f06f9e2f4",
    symbol: "SRUNE",
    decimals: 18,
  },
  {
    address: "0x20a62aca58526836165ca53fe67dd884288c8abf",
    symbol: "RNB",
    decimals: 18,
  },
  {
    address: "0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a",
    symbol: "SARCO",
    decimals: 18,
  },
  {
    address: "0xcef46305d096fa876dd23048bf80f9345282e3fc",
    symbol: "CBU",
    decimals: 0,
  },
  {
    address: "0xc67b12049c2d0cf6e476bc64c7f82fc6c63cffc5",
    symbol: "GDT",
    decimals: 8,
  },
  {
    address: "0x9d409a0a012cfba9b15f6d4b36ac57a46966ab9a",
    symbol: "YVBOOST",
    decimals: 18,
  },
  {
    address: "0x358aa737e033f34df7c54306960a38d09aabd523",
    symbol: "ARES",
    decimals: 18,
  },
  {
    address: "0xf519381791c03dd7666c142d4e49fd94d3536011",
    symbol: "ASIA",
    decimals: 18,
  },
  {
    address: "0xc064f4f215b6a1e4e7f39bd8530c4de0fc43ee9d",
    symbol: "LM",
    decimals: 18,
  },
  {
    address: "0xc221b7e65ffc80de234bbb6667abdd46593d34f0",
    symbol: "WCFG",
    decimals: 18,
  },
  {
    address: "0x668c50b1c7f46effbe3f242687071d7908aab00a",
    symbol: "COSHI",
    decimals: 9,
  },
  {
    address: "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
    symbol: "BANK",
    decimals: 18,
  },
  {
    address: "0xdd1ad9a21ce722c151a836373babe42c868ce9a4",
    symbol: "UBI",
    decimals: 18,
  },
  {
    address: "0x2b7c0fa747611d4412b54076c62119926474edb3",
    symbol: "NCAT",
    decimals: 9,
  },
  {
    address: "0xac5b038058bcd0424c9c252c6487c25f032e5ddc",
    symbol: "AIEPK",
    decimals: 18,
  },
  {
    address: "0x8baef8c9568c21b1a2b2fd048f8b4da835691fd0",
    symbol: "USDZ",
    decimals: 18,
  },
  {
    address: "0x0c572544a4ee47904d54aaa6a970af96b6f00e1b",
    symbol: "WAS",
    decimals: 18,
  },
  {
    address: "0xc8807f0f5ba3fa45ffbdc66928d71c5289249014",
    symbol: "ISP",
    decimals: 18,
  },
  {
    address: "0xd2adc1c84443ad06f0017adca346bd9b6fc52cab",
    symbol: "DFND",
    decimals: 18,
  },
  {
    address: "0x464fdb8affc9bac185a7393fd4298137866dcfb8",
    symbol: "REALM",
    decimals: 18,
  },
  {
    address: "0x5d30ad9c6374bf925d0a75454fa327aacf778492",
    symbol: "PERI",
    decimals: 18,
  },
  {
    address: "0xd084944d3c05cd115c09d072b9f44ba3e0e45921",
    symbol: "FOLD",
    decimals: 18,
  },
  {
    address: "0x48c276e8d03813224bb1e55f953adb6d02fd3e02",
    symbol: "KUMA",
    decimals: 18,
  },
  {
    address: "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
    symbol: "BCDT",
    decimals: 18,
  },
  {
    address: "0x2a03a891add2dc6d0f7b94419086630ba5cb65b6",
    symbol: "DV",
    decimals: 18,
  },
  {
    address: "0x74d2d73b455540b037298c0e0925bc702aedbe4a",
    symbol: "MEOW",
    decimals: 9,
  },
  {
    address: "0xc28e931814725bbeb9e670676fabbcb694fe7df2",
    symbol: "EQUAD",
    decimals: 18,
  },
  {
    address: "0xfc979087305a826c2b2a0056cfaba50aad3e6439",
    symbol: "DAFI",
    decimals: 18,
  },
  {
    address: "0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321",
    symbol: "VITA",
    decimals: 18,
  },
  {
    address: "0x557b933a7c2c45672b610f8954a3deb39a51a8ca",
    symbol: "REVV",
    decimals: 18,
  },
  {
    address: "0x5cb888182fbffdb62c08fb4b5a343914f00fdfee",
    symbol: "BIPS",
    decimals: 18,
  },
  {
    address: "0x64a77277e37d44957fe5815d6ff442ab8b16cc29",
    symbol: "DAWGS",
    decimals: 9,
  },
  {
    address: "0x887168120cb89fb06f3e74dc4af20d67df0977f6",
    symbol: "SKRT",
    decimals: 18,
  },
  {
    address: "0x675bbc7514013e2073db7a919f6e4cbef576de37",
    symbol: "CLS",
    decimals: 18,
  },
  {
    address: "0x108a850856db3f85d0269a2693d896b394c80325",
    symbol: "TGT",
    decimals: 18,
  },
  {
    address: "0x53dfea0a8cc2a2a2e425e1c174bc162999723ea0",
    symbol: "JCHF",
    decimals: 18,
  },
  {
    address: "0x6100dd79fcaa88420750dcee3f735d168abcb771",
    symbol: "OS",
    decimals: 18,
  },
  {
    address: "0x6bb61215298f296c55b19ad842d3df69021da2ef",
    symbol: "DOP",
    decimals: 18,
  },
  {
    address: "0x997507cc49fbf0cd6ce5e1ee543218556fafdebc",
    symbol: "BT",
    decimals: 18,
  },
  {
    address: "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
    symbol: "MDT",
    decimals: 18,
  },
  {
    address: "0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc",
    symbol: "KTO",
    decimals: 9,
  },
  {
    address: "0xf55a93b613d172b86c2ba3981a849dae2aecde2f",
    symbol: "YFX",
    decimals: 18,
  },
  {
    address: "0xda23d301761e4e2bf474951f978f6dfb6f3c9f14",
    symbol: "TKINU",
    decimals: 9,
  },
  {
    address: "0x846c66cf71c43f80403b51fe3906b3599d63336f",
    symbol: "PMA",
    decimals: 18,
  },
  {
    address: "0xfc70cbb442d5c115ee1497d22b421b1f9bd9f3da",
    symbol: "BTRU",
    decimals: 18,
  },
  {
    address: "0x51db5ad35c671a87207d88fc11d593ac0c8415bd",
    symbol: "MDA",
    decimals: 18,
  },
  {
    address: "0x00d8318e44780edeefcf3020a5448f636788883c",
    symbol: "DAPPX",
    decimals: 18,
  },
  {
    address: "0xc0a4df35568f116c370e6a6a6022ceb908eeddac",
    symbol: "UX",
    decimals: 6,
  },
  {
    address: "0xcb84d72e61e383767c4dfeb2d8ff7f4fb89abc6e",
    symbol: "VEGA",
    decimals: 18,
  },
  {
    address: "0x6123b0049f904d730db3c36a31167d9d4121fa6b",
    symbol: "RBN",
    decimals: 18,
  },
  {
    address: "0x47da5456bc2e1ce391b645ce80f2e97192e4976a",
    symbol: "PLUG",
    decimals: 18,
  },
  {
    address: "0x5eeaa2dcb23056f4e8654a349e57ebe5e76b5e6e",
    symbol: "VPP",
    decimals: 18,
  },
  {
    address: "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
    symbol: "QASH",
    decimals: 6,
  },
  {
    address: "0x5640e0560e6afd6a9f4ddb41230d0201d181fea7",
    symbol: "DMAGA",
    decimals: 9,
  },
  {
    address: "0xf6650117017ffd48b725b4ec5a00b414097108a7",
    symbol: "XIDO",
    decimals: 18,
  },
  {
    address: "0xb67beb26ebeb0dceec354ae0942256d03c01771b",
    symbol: "DS",
    decimals: 18,
  },
  {
    address: "0x5f474906637bdcda05f29c74653f6962bb0f8eda",
    symbol: "DEFX",
    decimals: 18,
  },
  {
    address: "0x9d7630adf7ab0b0cb00af747db76864df0ec82e4",
    symbol: "GATE",
    decimals: 18,
  },
  {
    address: "0x2620638eda99f9e7e902ea24a285456ee9438861",
    symbol: "CSM",
    decimals: 18,
  },
  {
    address: "0x7b7983967409fce461ea8bbdf9ed37631b1d59c9",
    symbol: "KPOP",
    decimals: 18,
  },
  {
    address: "0x8a001303158670e284950565164933372807cd48",
    symbol: "WFAI",
    decimals: 18,
  },
  {
    address: "0xaa4e3edb11afa93c41db59842b29de64b72e355b",
    symbol: "MFI",
    decimals: 18,
  },
  {
    address: "0x35e78b3982e87ecfd5b3f3265b601c046cdbe232",
    symbol: "XAI",
    decimals: 18,
  },
  {
    address: "0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5",
    symbol: "HUNT",
    decimals: 18,
  },
  {
    address: "0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8",
    symbol: "KEX",
    decimals: 6,
  },
  {
    address: "0xc314b0e758d5ff74f63e307a86ebfe183c95767b",
    symbol: "ADP",
    decimals: 18,
  },
  {
    address: "0x8355dbe8b0e275abad27eb843f3eaf3fc855e525",
    symbol: "WOOL",
    decimals: 18,
  },
  {
    address: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    symbol: "RCN",
    decimals: 18,
  },
  {
    address: "0x64d91f12ece7362f91a6f8e7940cd55f05060b92",
    symbol: "ASH",
    decimals: 18,
  },
  {
    address: "0x97b65710d03e12775189f0d113202cc1443b0aa2",
    symbol: "ELONONE",
    decimals: 9,
  },
  {
    address: "0x4da34f8264cb33a5c9f17081b9ef5ff6091116f4",
    symbol: "ELFI",
    decimals: 18,
  },
  {
    address: "0x32e7c8a6e920a3cf224b678112ac78fdc0fb09d1",
    symbol: "BOO",
    decimals: 18,
  },
  {
    address: "0x8f828a0644f12fa352888e645a90333d30f6fd7d",
    symbol: "RINIA",
    decimals: 9,
  },
  {
    address: "0x13b2f6928d7204328b0e8e4bcd0379aa06ea21fa",
    symbol: "AAMMWBTC",
    decimals: 8,
  },
  {
    address: "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    symbol: "CND",
    decimals: 18,
  },
  {
    address: "0x677ddbd918637e5f2c79e164d402454de7da8619",
    symbol: "VUSD",
    decimals: 18,
  },
  {
    address: "0xa1b0edf4460cc4d8bfaa18ed871bff15e5b57eb4",
    symbol: "AAMMUNIBATWETH",
    decimals: 18,
  },
  {
    address: "0x8d137e3337eb1b58a222fef2b2cc7c423903d9cf",
    symbol: "SQGL",
    decimals: 18,
  },
  {
    address: "0xcfa0885131f602d11d4da248d2c65a62063567a9",
    symbol: "TORG",
    decimals: 18,
  },
  {
    address: "0x491e136ff7ff03e6ab097e54734697bb5802fc1c",
    symbol: "KTN",
    decimals: 18,
  },
  {
    address: "0x93c9175e26f57d2888c7df8b470c9eea5c0b0a93",
    symbol: "BCUBE",
    decimals: 18,
  },
  {
    address: "0x508df5aa4746be37b5b6a69684dfd8bdc322219d",
    symbol: "CRF",
    decimals: 18,
  },
  {
    address: "0x70401dfd142a16dc7031c56e862fc88cb9537ce0",
    symbol: "BIRD",
    decimals: 18,
  },
  {
    address: "0x38e491a71291cd43e8de63b7253e482622184894",
    symbol: "AAMMUNISNXWETH",
    decimals: 18,
  },
  {
    address: "0x3d26dcd840fcc8e4b2193ace8a092e4a65832f9f",
    symbol: "AAMMUNIUNIWETH",
    decimals: 18,
  },
  {
    address: "0xb009bfaaf85e53f55d8657781eb69feaaed83672",
    symbol: "EGS",
    decimals: 18,
  },
  {
    address: "0xed0d5747a9ab03a75fbfec3228cd55848245b75d",
    symbol: "NGM",
    decimals: 6,
  },
  {
    address: "0x9f9913853f749b3fe6d6d4e16a1cc3c1656b6d51",
    symbol: "BITT",
    decimals: 18,
  },
  {
    address: "0x08037036451c768465369431da5c671ad9b37dbc",
    symbol: "NFTS",
    decimals: 18,
  },
  {
    address: "0xd24946147829deaa935be2ad85a3291dbf109c80",
    symbol: "AAMMUSDC",
    decimals: 6,
  },
  {
    address: "0xcd7492db29e2ab436e819b249452ee1bbdf52214",
    symbol: "SMI",
    decimals: 8,
  },
  {
    address: "0x559b7bfc48a5274754b08819f75c5f27af53d53b",
    symbol: "QI",
    decimals: 18,
  },
  {
    address: "0xb8647e90c0645152fccf4d9abb6b59eb4aa99052",
    symbol: "KEYFI",
    decimals: 18,
  },
  {
    address: "0xc58f53a8adff2fb4eb16ed56635772075e2ee123",
    symbol: "AAMMUNIWBTCWETH",
    decimals: 18,
  },
  {
    address: "0xf5eda6c581f4373b07ce111baf8d1c4fc21cbaa1",
    symbol: "GTT",
    decimals: 18,
  },
  {
    address: "0x8013266cb5c9dd48be3ad7d1ce832874d64b3ce1",
    symbol: "BOOP",
    decimals: 18,
  },
  {
    address: "0x9196e18bc349b1f64bc08784eae259525329a1ad",
    symbol: "PUSSY",
    decimals: 18,
  },
  {
    address: "0x450e7f6e3a2f247a51b98c39297a9a5bfbdb3170",
    symbol: "EGT",
    decimals: 9,
  },
  {
    address: "0x37fe0f067fa808ffbdd12891c0858532cfe7361d",
    symbol: "CIV",
    decimals: 18,
  },
  {
    address: "0xcdb9d30a3ba48cdfcb0ecbe19317e6cf783672f1",
    symbol: "MNDCC",
    decimals: 18,
  },
  {
    address: "0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5",
    symbol: "BIT",
    decimals: 18,
  },
  {
    address: "0x030ba81f1c18d280636f32af80b9aad02cf0854e",
    symbol: "AWETH",
    decimals: 18,
  },
  {
    address: "0x641927e970222b10b2e8cdbc96b1b4f427316f16",
    symbol: "MEEB",
    decimals: 18,
  },
  {
    address: "0xd1b624f07a4d9b3e3746e33cb58f42df079b5444",
    symbol: "NKCLC",
    decimals: 18,
  },
  {
    address: "0x841fb148863454a3b3570f515414759be9091465",
    symbol: "SHIH",
    decimals: 18,
  },
  {
    address: "0xc9bc48c72154ef3e5425641a3c747242112a46af",
    symbol: "ARAI",
    decimals: 18,
  },
  {
    address: "0xd37ee7e4f452c6638c96536e68090de8cbcdb583",
    symbol: "AGUSD",
    decimals: 2,
  },
  {
    address: "0xffc97d72e13e01096502cb8eb52dee56f74dad7b",
    symbol: "AAAVE",
    decimals: 18,
  },
  {
    address: "0x0d86eb9f43c57f6ff3bc9e23d8f9d82503f0e84b",
    symbol: "MAXI",
    decimals: 8,
  },
  {
    address: "0xb794ad95317f75c44090f64955954c3849315ffe",
    symbol: "RIBBIT",
    decimals: 18,
  },
  {
    address: "0x03d1e72765545729a035e909edd9371a405f77fb",
    symbol: "NABOX",
    decimals: 18,
  },
  {
    address: "0x20a8cec5fffea65be7122bcab2ffe32ed4ebf03a",
    symbol: "DNXC",
    decimals: 18,
  },
  {
    address: "0x9a2af0abb12bee5369b180976be01e8c80d0e7b6",
    symbol: "EMPIRE",
    decimals: 9,
  },
  {
    address: "0xeca82185adce47f39c684352b0439f030f860318",
    symbol: "PERL",
    decimals: 18,
  },
  {
    address: "0xac9518ba93eeb2336a03137d254d8cc2e4d0fa38",
    symbol: "EDUM",
    decimals: 18,
  },
  {
    address: "0xeec2be5c91ae7f8a338e1e5f3b5de49d07afdc81",
    symbol: "DPX",
    decimals: 18,
  },
  {
    address: "0x0ff5a8451a839f5f0bb3562689d9a44089738d11",
    symbol: "RDPX",
    decimals: 18,
  },
  {
    address: "0x1341a2257fa7b770420ef70616f888056f90926c",
    symbol: "ZOOT",
    decimals: 9,
  },
  {
    address: "0x0fd67b4ceb9b607ef206904ec73459c4880132c9",
    symbol: "SHOE",
    decimals: 18,
  },
  {
    address: "0x571f54d23cdf2211c83e9a0cbd92aca36c48fa02",
    symbol: "PAUSD",
    decimals: 18,
  },
  {
    address: "0x8dae6cb04688c62d939ed9b68d32bc62e49970b1",
    symbol: "ACRV",
    decimals: 18,
  },
  {
    address: "0xde5ed76e7c05ec5e4572cfc88d1acea165109e44",
    symbol: "DEUS",
    decimals: 18,
  },
  {
    address: "0x618679df9efcd19694bb1daa8d00718eacfa2883",
    symbol: "XYZ",
    decimals: 18,
  },
  {
    address: "0x69fa0fee221ad11012bab0fdb45d444d3d2ce71c",
    symbol: "XRUNE",
    decimals: 18,
  },
  {
    address: "0xc382e04099a435439725bb40647e2b32dc136806",
    symbol: "COGE",
    decimals: 18,
  },
  {
    address: "0x692accdd8b86692427e0aa4752ae917df01cc56f",
    symbol: "SUNC",
    decimals: 18,
  },
  {
    address: "0x53bd789f2cdb846b227d8ffc7b46ed4263231fdf",
    symbol: "SMBSWAP",
    decimals: 18,
  },
  {
    address: "0xe0a189c975e4928222978a74517442239a0b86ff",
    symbol: "KEYS",
    decimals: 9,
  },
  {
    address: "0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0",
    symbol: "EQZ",
    decimals: 18,
  },
  {
    address: "0x9343e24716659a3551eb10aff9472a2dcad5db2d",
    symbol: "STFX",
    decimals: 18,
  },
  {
    address: "0x3e9bc21c9b189c09df3ef1b824798658d5011937",
    symbol: "LINA",
    decimals: 18,
  },
  {
    address: "0x155ff1a85f440ee0a382ea949f24ce4e0b751c65",
    symbol: "EYE",
    decimals: 18,
  },
  {
    address: "0xad996a45fd2373ed0b10efa4a8ecb9de445a4302",
    symbol: "SHI",
    decimals: 18,
  },
  {
    address: "0xf0c5831ec3da15f3696b4dad8b21c7ce2f007f28",
    symbol: "AXIS",
    decimals: 8,
  },
  {
    address: "0x269616d549d7e8eaa82dfb17028d0b212d11232a",
    symbol: "PUNK",
    decimals: 18,
  },
  {
    address: "0xd779eea9936b4e323cddff2529eb6f13d0a4d66e",
    symbol: "ENTR",
    decimals: 18,
  },
  {
    address: "0xc31cebf8f9e825d1d1244d73d0a65e44bd5210db",
    symbol: "CRYN",
    decimals: 8,
  },
  {
    address: "0xceeb07dd26b36287b6d109f0b06d7e8202ce8c1d",
    symbol: "GOTG",
    decimals: 18,
  },
  {
    address: "0x6b1a8f210ec6b7b6643cea3583fb0c079f367898",
    symbol: "BXX",
    decimals: 18,
  },
  {
    address: "0xee06a81a695750e71a662b51066f2c74cf4478a0",
    symbol: "DG",
    decimals: 18,
  },
  {
    address: "0x4ece5c5cfb9b960a49aae739e15cdb6cfdcc5782",
    symbol: "DBUY",
    decimals: 9,
  },
  {
    address: "0xfa99a87b14b02e2240c79240c5a20f945ca5ef76",
    symbol: "GGTK",
    decimals: 18,
  },
  {
    address: "0xf256cc7847e919fac9b808cc216cac87ccf2f47a",
    symbol: "AXSUSHI",
    decimals: 18,
  },
  {
    address: "0xd6caf5bd23cf057f5fccce295dcc50c01c198707",
    symbol: "EVA",
    decimals: 18,
  },
  {
    address: "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb",
    symbol: "DEPAY",
    decimals: 18,
  },
  {
    address: "0x0b6f3ea2814f3fff804ba5d5c237aebbc364fba9",
    symbol: "UNA",
    decimals: 18,
  },
  {
    address: "0xfb130d93e49dca13264344966a611dc79a456bc5",
    symbol: "DOGEGF",
    decimals: 18,
  },
  {
    address: "0x2c9aceb63181cd08a093d052ec041e191f229692",
    symbol: "ANB",
    decimals: 18,
  },
  {
    address: "0x3bbbb6a231d0a1a12c6b79ba5bc2ed6358db5160",
    symbol: "ZEN",
    decimals: 18,
  },
  {
    address: "0x188e817b02e635d482ae4d81e25dda98a97c4a42",
    symbol: "LITH",
    decimals: 18,
  },
  {
    address: "0x8c6bf16c273636523c29db7db04396143770f6a0",
    symbol: "AAA",
    decimals: 18,
  },
  {
    address: "0x226f7b842e0f0120b7e194d05432b3fd14773a9d",
    symbol: "UNN",
    decimals: 18,
  },
  {
    address: "0x3d9a4d8ab4f5bd1d5d08ae3a95e8ed8bb4d7e3b9",
    symbol: "STONKS",
    decimals: 18,
  },
  {
    address: "0xcda4e840411c00a614ad9205caec807c7458a0e3",
    symbol: "UFI",
    decimals: 18,
  },
  {
    address: "0x777e2ae845272a2f540ebf6a3d03734a5a8f618e",
    symbol: "RYOSHI",
    decimals: 18,
  },
  {
    address: "0x94804dc4948184ffd7355f62ccbb221c9765886f",
    symbol: "RAGE",
    decimals: 18,
  },
  {
    address: "0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442",
    symbol: "ETHPAD",
    decimals: 18,
  },
  {
    address: "0xc4f6e93aeddc11dc22268488465babcaf09399ac",
    symbol: "HI",
    decimals: 18,
  },
  {
    address: "0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f",
    symbol: "DUCK",
    decimals: 18,
  },
  {
    address: "0x3446dd70b2d52a6bf4a5a192d9b0a161295ab7f9",
    symbol: "SUDO",
    decimals: 18,
  },
  {
    address: "0xab306326bc72c2335bd08f42cbec383691ef8446",
    symbol: "PPIZZA",
    decimals: 18,
  },
  {
    address: "0x0ec9f76202a7061eb9b3a7d6b59d36215a7e37da",
    symbol: "BPT",
    decimals: 18,
  },
  {
    address: "0x94e496474f1725f1c1824cb5bdb92d7691a4f03a",
    symbol: "BANANA",
    decimals: 18,
  },
  {
    address: "0x00199c511dc889b8155fa425fc0363ed481e8f48",
    symbol: "BRICK",
    decimals: 18,
  },
  {
    address: "0xcbe771323587ea16dacb6016e269d7f08a7acc4e",
    symbol: "SPO",
    decimals: 18,
  },
  {
    address: "0x28e58ee9932697f610de907a279684d30c407ba9",
    symbol: "DEPIN",
    decimals: 9,
  },
  {
    address: "0x009668a9691e456972c8ec4cc84e99486308b84d",
    symbol: "TERA",
    decimals: 18,
  },
  {
    address: "0x6e765d26388a17a6e86c49a8e41df3f58abcd337",
    symbol: "KANGAL",
    decimals: 18,
  },
  {
    address: "0x6286a9e6f7e745a6d884561d88f94542d6715698",
    symbol: "TECH",
    decimals: 18,
  },
  {
    address: "0xbeab712832112bd7664226db7cd025b153d3af55",
    symbol: "BRIGHT",
    decimals: 18,
  },
  {
    address: "0x0e192d382a36de7011f795acc4391cd302003606",
    symbol: "FST",
    decimals: 18,
  },
  {
    address: "0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559",
    symbol: "EDEN",
    decimals: 18,
  },
  {
    address: "0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3",
    symbol: "FODL",
    decimals: 18,
  },
  {
    address: "0x62959c699a52ec647622c91e79ce73344e4099f5",
    symbol: "DFA",
    decimals: 18,
  },
  {
    address: "0x4463e6a3ded0dbe3f6e15bc8420dfc55e5fea830",
    symbol: "TXA",
    decimals: 18,
  },
  {
    address: "0xe33ae4e795114279721047484e5ad5cc7df24fcb",
    symbol: "MCF",
    decimals: 10,
  },
  {
    address: "0xe94b97b6b43639e238c851a7e693f50033efd75c",
    symbol: "RNBW",
    decimals: 18,
  },
  {
    address: "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817",
    symbol: "WNCG",
    decimals: 18,
  },
  {
    address: "0xa11bd36801d8fa4448f0ac4ea7a62e3634ce8c7c",
    symbol: "ABR",
    decimals: 18,
  },
  {
    address: "0x302cae5dcf8f051d0177043c3438020b89b33218",
    symbol: "BOOST",
    decimals: 18,
  },
  {
    address: "0x012e0e6342308b247f36ee500ecb14dc77a7a8c1",
    symbol: "SKT",
    decimals: 8,
  },
  {
    address: "0x72377f31e30a405282b522d588aebbea202b4f23",
    symbol: "VRN",
    decimals: 18,
  },
  {
    address: "0xaec65404ddc3af3c897ad89571d5772c1a695f22",
    symbol: "PHX",
    decimals: 18,
  },
  {
    address: "0xd528cf2e081f72908e086f8800977df826b5a483",
    symbol: "PBX",
    decimals: 18,
  },
  {
    address: "0xf10da48d4aaa8d784c5e369cb998e263cfe32aa8",
    symbol: "BMONEY",
    decimals: 9,
  },
  {
    address: "0xbd9908b0cdd50386f92efcc8e1d71766c2782df0",
    symbol: "RICE",
    decimals: 18,
  },
  {
    address: "0xa150db9b1fa65b44799d4dd949d922c0a33ee606",
    symbol: "DRC",
    decimals: 0,
  },
  {
    address: "0xd6327ce1fb9d6020e8c2c0e124a1ec23dcab7536",
    symbol: "CUMINU",
    decimals: 18,
  },
  {
    address: "0xdfdb7f72c1f195c5951a234e8db9806eb0635346",
    symbol: "NFD",
    decimals: 18,
  },
  {
    address: "0x3757232b55e60da4a8793183ac030cfce4c3865d",
    symbol: "YDR",
    decimals: 18,
  },
  {
    address: "0x8a0cdfab62ed35b836dc0633482798421c81b3ec",
    symbol: "SPHRI",
    decimals: 18,
  },
  {
    address: "0x9d71ce49ab8a0e6d2a1e7bfb89374c9392fd6804",
    symbol: "NVIR",
    decimals: 18,
  },
  {
    address: "0xa01199c61841fce3b3dafb83fefc1899715c8756",
    symbol: "CIRUS",
    decimals: 18,
  },
  {
    address: "0x4c5cb5d87709387f8821709f7a6664f00dcf0c93",
    symbol: "RAFT",
    decimals: 18,
  },
  {
    address: "0x06a00715e6f92210af9d7680b584931faf71a833",
    symbol: "XNL",
    decimals: 18,
  },
  {
    address: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
    symbol: "XDATA",
    decimals: 18,
  },
  {
    address: "0x61107a409fffe1965126aa456af679719695c69c",
    symbol: "UMI",
    decimals: 18,
  },
  {
    address: "0x4116f14b6d462b32a1c10f98049e4b1765e34fa9",
    symbol: "MOOV",
    decimals: 18,
  },
  {
    address: "0xea7cc765ebc94c4805e3bff28d7e4ae48d06468a",
    symbol: "PAD",
    decimals: 18,
  },
  {
    address: "0x1f19f83fc9a25f3c861260143e36c17706257986",
    symbol: "VEST",
    decimals: 18,
  },
  {
    address: "0x4da0c48376c277cdbd7fc6fdc6936dee3e4adf75",
    symbol: "EPIK",
    decimals: 18,
  },
  {
    address: "0x665f4709940f557e9dde63df0fd9cf6425852b4d",
    symbol: "HALVING",
    decimals: 9,
  },
  {
    address: "0x00000000efe302beaa2b3e6e1b18d08d69a9012a",
    symbol: "AUSD",
    decimals: 6,
  },
  {
    address: "0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c",
    symbol: "NCR",
    decimals: 18,
  },
  {
    address: "0x5dd57da40e6866c9fcc34f4b6ddc89f1ba740dfe",
    symbol: "BRIGHT",
    decimals: 18,
  },
  {
    address: "0x5f0bc16d50f72d10b719dbf6845de2e599eb5624",
    symbol: "VENT",
    decimals: 18,
  },
  {
    address: "0x9cf98eb8a8b28c83e8612046cf55701ce3eb0063",
    symbol: "UGT",
    decimals: 18,
  },
  {
    address: "0x2610f0bfc21ef389fe4d03cfb7de9ac1e6c99d6e",
    symbol: "SKYRIM",
    decimals: 18,
  },
  {
    address: "0x1e4e46b7bf03ece908c88ff7cc4975560010893a",
    symbol: "IOEN",
    decimals: 18,
  },
  {
    address: "0x62dc60b69b650290b0d5b993e145e0e87892be14",
    symbol: "DRAGGY0X62",
    decimals: 9,
  },
  {
    address: "0xae697f994fc5ebc000f8e22ebffee04612f98a0d",
    symbol: "LGCY",
    decimals: 18,
  },
  {
    address: "0x9b7331c6e98bad1dc8f096ff3d98c93b3b9b1173",
    symbol: "BULL",
    decimals: 18,
  },
  {
    address: "0x1bbf25e71ec48b84d773809b4ba55b6f4be946fb",
    symbol: "VOW",
    decimals: 18,
  },
  {
    address: "0xe7f72bc0252ca7b16dbb72eeee1afcdb2429f2dd",
    symbol: "NFTL",
    decimals: 18,
  },
  {
    address: "0x34f797e7190c131cf630524655a618b5bd8738e7",
    symbol: "BACON",
    decimals: 18,
  },
  {
    address: "0xdcb2fa7eab2507613417bb9762efa73093fc6b65",
    symbol: "UNV",
    decimals: 18,
  },
  {
    address: "0x799ebfabe77a6e34311eeee9825190b9ece32824",
    symbol: "BTRST",
    decimals: 18,
  },
  {
    address: "0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b",
    symbol: "URUS",
    decimals: 18,
  },
  {
    address: "0x60f63b76e2fc1649e57a3489162732a90acf59fe",
    symbol: "FLURRY",
    decimals: 18,
  },
  {
    address: "0x7ae1d57b58fa6411f32948314badd83583ee0e8c",
    symbol: "PAPER",
    decimals: 18,
  },
  {
    address: "0x39d30828a163713d91c4eadbba2c497a9139ec5c",
    symbol: "HBDC",
    decimals: 18,
  },
  {
    address: "0x42a501903afaa1086b5975773375c80e363f4063",
    symbol: "CTK",
    decimals: 8,
  },
  {
    address: "0xbb3d7f42c58abd83616ad7c8c72473ee46df2678",
    symbol: "CHAT",
    decimals: 18,
  },
  {
    address: "0x5516ac1aaca7bb2fd5b7bdde1549ef1ea242953d",
    symbol: "DETF",
    decimals: 18,
  },
  {
    address: "0xc73c167e7a4ba109e4052f70d5466d0c312a344d",
    symbol: "SANSHU",
    decimals: 9,
  },
  {
    address: "0xb26c4b3ca601136daf98593feaeff9e0ca702a8d",
    symbol: "ALD",
    decimals: 18,
  },
  {
    address: "0x131157c6760f78f7ddf877c0019eba175ba4b6f6",
    symbol: "BIGSB",
    decimals: 18,
  },
  {
    address: "0x0026dfbd8dbb6f8d0c88303cc1b1596409fda542",
    symbol: "SANSHU",
    decimals: 18,
  },
  {
    address: "0x9783b81438c24848f85848f8df31845097341771",
    symbol: "COLLAR",
    decimals: 18,
  },
  {
    address: "0xee9e5eff401ee921b138490d00ca8d1f13f67a72",
    symbol: "AFIN",
    decimals: 8,
  },
  {
    address: "0xfca89d55a768375ab7ca04485a35a964bea828dd",
    symbol: "DELREY",
    decimals: 18,
  },
  {
    address: "0x232fb065d9d24c34708eedbf03724f2e95abe768",
    symbol: "SHEESHA",
    decimals: 18,
  },
  {
    address: "0xd76050f75627e508fa14b84036fbf40b8cc549bd",
    symbol: "SCRIV",
    decimals: 8,
  },
  {
    address: "0xdb298285fe4c5410b05390ca80e8fbe9de1f259b",
    symbol: "FOREX",
    decimals: 18,
  },
  {
    address: "0x80d55c03180349fff4a229102f62328220a96444",
    symbol: "OPUL",
    decimals: 18,
  },
  {
    address: "0x28b5e12cce51f15594b0b91d5b5adaa70f684a02",
    symbol: "NPX",
    decimals: 2,
  },
  {
    address: "0x2ed2cc2c858a8a8219fd2f2d9e170285dbd02756",
    symbol: "SBET",
    decimals: 18,
  },
  {
    address: "0x1410434b0346f5be678d0fb554e5c7ab620f8f4a",
    symbol: "KAN",
    decimals: 18,
  },
  {
    address: "0x4da08a1bff50be96bded5c7019227164b49c2bfc",
    symbol: "MONONOKE-INU",
    decimals: 9,
  },
  {
    address: "0x922e2708462c7a3d014d8344f7c4d92b27ecf332",
    symbol: "NEURONI",
    decimals: 18,
  },
  {
    address: "0xf1a7000000950c7ad8aff13118bb7ab561a448ee",
    symbol: "FLAY",
    decimals: 18,
  },
  {
    address: "0xfb782396c9b20e564a64896181c7ac8d8979d5f4",
    symbol: "DIVER",
    decimals: 18,
  },
  {
    address: "0x765f0c16d1ddc279295c1a7c24b0883f62d33f75",
    symbol: "DTX",
    decimals: 18,
  },
  {
    address: "0x58f9102bf53cf186682bd9a281d3cd3c616eec41",
    symbol: "TRL",
    decimals: 18,
  },
  {
    address: "0x16cda4028e9e872a38acb903176719299beaed87",
    symbol: "MARS4",
    decimals: 18,
  },
  {
    address: "0x96610186f3ab8d73ebee1cf950c750f3b1fb79c2",
    symbol: "EJS",
    decimals: 18,
  },
  {
    address: "0xe03b2642a5111ad0efc0cbce766498c2dd562ae9",
    symbol: "BC",
    decimals: 9,
  },
  {
    address: "0x4674a4f24c5f63d53f22490fb3a08eaaad739ff8",
    symbol: "BRKL",
    decimals: 18,
  },
  {
    address: "0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41",
    symbol: "TXL",
    decimals: 18,
  },
  {
    address: "0x536381a8628dbcc8c70ac9a30a7258442eab4c92",
    symbol: "PAN",
    decimals: 8,
  },
  {
    address: "0x122303734c898e9d233affc234271f04e42e77ad",
    symbol: "CAT",
    decimals: 18,
  },
  {
    address: "0x1cc7047e15825f639e0752eb1b89e4225f5327f2",
    symbol: "PLX",
    decimals: 18,
  },
  {
    address: "0xdf290b162a7d3e0a328cf198308d421954f08b94",
    symbol: "BP",
    decimals: 18,
  },
  {
    address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
    symbol: "SAND",
    decimals: 18,
  },
  {
    address: "0xb31ef9e52d94d4120eb44fe1ddfde5b4654a6515",
    symbol: "DOSE",
    decimals: 18,
  },
  {
    address: "0x524d524b4c9366be706d3a90dcf70076ca037ae3",
    symbol: "RMRK",
    decimals: 18,
  },
  {
    address: "0x52a047ee205701895ee06a375492490ec9c597ce",
    symbol: "PULSE",
    decimals: 18,
  },
  {
    address: "0x785c34312dfa6b74f6f1829f79ade39042222168",
    symbol: "BUMP",
    decimals: 18,
  },
  {
    address: "0x1337def16f9b486faed0293eb623dc8395dfe46a",
    symbol: "ARMOR",
    decimals: 18,
  },
  {
    address: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
    symbol: "RENBTC",
    decimals: 8,
  },
  {
    address: "0x0aa7efe4945db24d95ca6e117bba65ed326e291a",
    symbol: "OJA",
    decimals: 18,
  },
  {
    address: "0xd7dcd9b99787c619b4d57979521258d1a7267ad7",
    symbol: "EVRY",
    decimals: 18,
  },
  {
    address: "0x23d894fb4a0f551f2f923fc85e09819d1f3894b2",
    symbol: "ITX",
    decimals: 18,
  },
  {
    address: "0x3a1311b8c404629e38f61d566cefefed083b9670",
    symbol: "PINU",
    decimals: 9,
  },
  {
    address: "0x549020a9cb845220d66d3e9c6d9f9ef61c981102",
    symbol: "SIDUS",
    decimals: 18,
  },
  {
    address: "0xe7f58a92476056627f9fdb92286778abd83b285f",
    symbol: "DWEB",
    decimals: 18,
  },
  {
    address: "0x71ab77b7dbb4fa7e017bc15090b2163221420282",
    symbol: "HIGH",
    decimals: 18,
  },
  {
    address: "0x064797ac7f833d01faeeae0e69f3af5a52a91fc8",
    symbol: "SU",
    decimals: 9,
  },
  {
    address: "0x02d3a27ac3f55d5d91fb0f52759842696a864217",
    symbol: "IONX",
    decimals: 18,
  },
  {
    address: "0x60e683c6514edd5f758a55b6f393bebbafaa8d5e",
    symbol: "PAGE",
    decimals: 8,
  },
  {
    address: "0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8",
    symbol: "RADAR",
    decimals: 18,
  },
  {
    address: "0x38d9eb07a7b8df7d86f440a4a5c4a4c1a27e1a08",
    symbol: "BLXM",
    decimals: 18,
  },
  {
    address: "0xf3ae5d769e153ef72b4e3591ac004e89f48107a1",
    symbol: "DPR",
    decimals: 18,
  },
  {
    address: "0xe4dae00bc1c46ea2f44ae71b1beb8b171c15d812",
    symbol: "PRMX",
    decimals: 18,
  },
  {
    address: "0x910c4da718caf4ee38ce5c2490cddaeca689204e",
    symbol: "WACO",
    decimals: 18,
  },
  {
    address: "0x2ba8349123de45e931a8c8264c332e6e9cf593f9",
    symbol: "BCMC",
    decimals: 18,
  },
  {
    address: "0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9",
    symbol: "DERI",
    decimals: 18,
  },
  {
    address: "0xf5b5efc906513b4344ebabcf47a04901f99f09f3",
    symbol: "UBX",
    decimals: 0,
  },
  {
    address: "0x1b8568fbb47708e9e9d31ff303254f748805bf21",
    symbol: "SCX",
    decimals: 18,
  },
  {
    address: "0x1da4858ad385cc377165a298cc2ce3fce0c5fd31",
    symbol: "CCS",
    decimals: 0,
  },
  {
    address: "0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
    symbol: "DEXTF",
    decimals: 18,
  },
  {
    address: "0x5b685863494c33f344081f75e5430c260c224a32",
    symbol: "CMCX",
    decimals: 18,
  },
  {
    address: "0x3c8d2fce49906e11e71cb16fa0ffeb2b16c29638",
    symbol: "NFTL",
    decimals: 18,
  },
  {
    address: "0x8ee325ae3e54e83956ef2d5952d3c8bc1fa6ec27",
    symbol: "TYRANT",
    decimals: 9,
  },
  {
    address: "0xf56408077487cb879c992909c5b5c66d68c02eb4",
    symbol: "RIOT",
    decimals: 18,
  },
  {
    address: "0xc5b3d3231001a776123194cf1290068e8b0c783b",
    symbol: "LIT",
    decimals: 18,
  },
  {
    address: "0x1fac00ccee478eced6a120a50ed2ab28ee7fe32b",
    symbol: "TUNE",
    decimals: 18,
  },
  {
    address: "0xba8a621b4a54e61c442f5ec623687e2a942225ef",
    symbol: "QUARTZ",
    decimals: 18,
  },
  {
    address: "0x9e5bd9d9fad182ff0a93ba8085b664bcab00fa68",
    symbol: "DINGER",
    decimals: 9,
  },
  {
    address: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
    symbol: "GOHM",
    decimals: 18,
  },
  {
    address: "0x296233e84c1d7bff11121bf6d60f0ffa39c3f0cf",
    symbol: "NOONE",
    decimals: 9,
  },
  {
    address: "0x3ef389f264e07fff3106a3926f2a166d1393086f",
    symbol: "SAO",
    decimals: 9,
  },
  {
    address: "0xf453579d18a6f8ca07db9250e0e0100eb8ccb206",
    symbol: "CIPHER",
    decimals: 18,
  },
  {
    address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    symbol: "FEI",
    decimals: 18,
  },
  {
    address: "0x1e9d0bb190ac34492aa11b80d28c1c86487a341f",
    symbol: "NEKO",
    decimals: 18,
  },
  {
    address: "0x005d1123878fc55fbd56b54c73963b234a64af3c",
    symbol: "KIBA",
    decimals: 18,
  },
  {
    address: "0x492798fb464e77cb3cda62b9a2c3c65162db198e",
    symbol: "AGG",
    decimals: 18,
  },
  {
    address: "0xaee433adebe0fbb88daa47ef0c1a513caa52ef02",
    symbol: "TOON",
    decimals: 18,
  },
  {
    address: "0xd502f487e1841fdc805130e13eae80c61186bc98",
    symbol: "ITGR",
    decimals: 18,
  },
  {
    address: "0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b",
    symbol: "SHIBAKEN",
    decimals: 0,
  },
  {
    address: "0x9f52c8ecbee10e00d9faaac5ee9ba0ff6550f511",
    symbol: "SIPHER",
    decimals: 18,
  },
  {
    address: "0x4b91dfa774acde7ed70e93a6438363feaaa40f54",
    symbol: "SPE",
    decimals: 9,
  },
  {
    address: "0x505a84a03e382331a1be487b632cf357748b65d6",
    symbol: "SHIBGF",
    decimals: 18,
  },
  {
    address: "0x44709a920fccf795fbc57baa433cc3dd53c44dbe",
    symbol: "RADAR",
    decimals: 18,
  },
  {
    address: "0x37fc4b48ce93469dbea9918468993c735049642a",
    symbol: "CBX",
    decimals: 18,
  },
  {
    address: "0xb27782fdb56352a684686a852374ef20910457e2",
    symbol: "DSAI",
    decimals: 18,
  },
  {
    address: "0x2e2e7a1f05946ecb2b43b99e3fc2984fa7d7e3bc",
    symbol: "ANDWU",
    decimals: 9,
  },
  {
    address: "0x0944d5848bd9f60a34ba92aea300d4286696eb76",
    symbol: "PLT",
    decimals: 18,
  },
  {
    address: "0xa92c49c403386111c1629aee00936eed2a9e74a6",
    symbol: "KLTR",
    decimals: 18,
  },
  {
    address: "0xebf2096e01455108badcbaf86ce30b6e5a72aa52",
    symbol: "XIDR",
    decimals: 6,
  },
  {
    address: "0xc18b4c1e0b4d4d0f1e9627f25399f5073079ac3d",
    symbol: "BOOH",
    decimals: 18,
  },
  {
    address: "0xb475332d25d34b59176f5c1d94cb9bc9b5e3954a",
    symbol: "HOBBES",
    decimals: 9,
  },
  {
    address: "0x8530b66ca3ddf50e0447eae8ad7ea7d5e62762ed",
    symbol: "METADOGE",
    decimals: 18,
  },
  {
    address: "0x9be776559fed779cabd67042a7b8987aae592541",
    symbol: "BULL",
    decimals: 18,
  },
  {
    address: "0x26c75c7d815efe6bf5a6decd17d20d1fdad96a08",
    symbol: "OCW",
    decimals: 18,
  },
  {
    address: "0xfa5b75a9e13df9775cf5b996a049d9cc07c15731",
    symbol: "VCK",
    decimals: 18,
  },
  {
    address: "0xe5597f0723eeaba1b26948e06f008bf0fc1e37e6",
    symbol: "GM",
    decimals: 18,
  },
  {
    address: "0x6c862f803ff42a97d4a483ab761256ad8c90f4f8",
    symbol: "XLS",
    decimals: 18,
  },
  {
    address: "0x5d929aa919e489505ccaad8a199619c6dca0c2de",
    symbol: "BAAS",
    decimals: 18,
  },
  {
    address: "0xcfffcd2c6294bbb01ca55cbb4a281bdcf532c1ce",
    symbol: "DIAMOND",
    decimals: 9,
  },
  {
    address: "0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a",
    symbol: "BST",
    decimals: 18,
  },
  {
    address: "0x5f944b0c4315cb7c3a846b025ab4045da44abf6c",
    symbol: "GCAKE",
    decimals: 18,
  },
  {
    address: "0x259b0f9494b3f02c652fa11417b94cb700f1f7d8",
    symbol: "CVPAD",
    decimals: 18,
  },
  {
    address: "0xf655c8567e0f213e6c634cd2a68d992152161dc6",
    symbol: "IBEX",
    decimals: 18,
  },
  {
    address: "0xe66b3aa360bb78468c00bebe163630269db3324f",
    symbol: "MTO",
    decimals: 18,
  },
  {
    address: "0xf1ca9cb74685755965c7458528a36934df52a3ef",
    symbol: "AVINOC",
    decimals: 18,
  },
  {
    address: "0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab",
    symbol: "GYSR",
    decimals: 18,
  },
  {
    address: "0x56de8bc61346321d4f2211e3ac3c0a7f00db9b76",
    symbol: "RENA",
    decimals: 18,
  },
  {
    address: "0x5fa3418d828e5cd3c61a66e0fc7fa4a35dadf960",
    symbol: "AVATLY",
    decimals: 18,
  },
  {
    address: "0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5",
    symbol: "NOTE",
    decimals: 8,
  },
  {
    address: "0xe7976c4efc60d9f4c200cc1bcef1a1e3b02c73e7",
    symbol: "MAX",
    decimals: 18,
  },
  {
    address: "0x6cadf6abbceb53e631c288778daacf125481c1bb",
    symbol: "CITADEL",
    decimals: 18,
  },
  {
    address: "0x58fad9e3c3ae54c9ba98c3f0e4bf88ab3e8cf3c5",
    symbol: "SPAY",
    decimals: 18,
  },
  {
    address: "0x45448e05020576929fcdeabc228e35b420098840",
    symbol: "IDV",
    decimals: 18,
  },
  {
    address: "0xac0968a3e2020ac8ca83e60ccf69081ebc6d3bc3",
    symbol: "CIND",
    decimals: 18,
  },
  {
    address: "0x71fc1f555a39e0b698653ab0b475488ec3c34d57",
    symbol: "RAIN",
    decimals: 18,
  },
  {
    address: "0x31ea0de8119307aa264bb4b38727aab4e36b074f",
    symbol: "STORE",
    decimals: 18,
  },
  {
    address: "0x38a94e92a19e970c144ded0b2dd47278ca11cc1f",
    symbol: "F9",
    decimals: 9,
  },
  {
    address: "0x07d1718ff05a8c53c8f05adaed57c0d672945f9a",
    symbol: "ARUSD",
    decimals: 18,
  },
  {
    address: "0xda9fdab21bc4a5811134a6e0ba6ca06624e67c07",
    symbol: "QUIDD",
    decimals: 18,
  },
  {
    address: "0x2653891204f463fb2a2f4f412564b19e955166ae",
    symbol: "NGL",
    decimals: 18,
  },
  {
    address: "0xac506c7dc601500e997cad42ea446624ed40c743",
    symbol: "XCEPT",
    decimals: 18,
  },
  {
    address: "0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24",
    symbol: "STARL",
    decimals: 18,
  },
  {
    address: "0xb549116ac57b47c1b365a890e1d04fd547dfff97",
    symbol: "MDAI",
    decimals: 18,
  },
  {
    address: "0x3a707d56d538e85b783e8ce12b346e7fb6511f90",
    symbol: "IETHV",
    decimals: 18,
  },
  {
    address: "0x62d3c05b9c3d916fbc111819bbd3cee52906c1ae",
    symbol: "EGAME",
    decimals: 18,
  },
  {
    address: "0xc6e145421fd494b26dcf2bfeb1b02b7c5721978f",
    symbol: "CPRX",
    decimals: 18,
  },
  {
    address: "0x17837004ea685690b32dbead02a274ec4333a26a",
    symbol: "BEAR",
    decimals: 18,
  },
  {
    address: "0xe5ef42d0e5e4aa6b36c613d00db8dad303d505f3",
    symbol: "MSOT",
    decimals: 18,
  },
  {
    address: "0xebe4a49df7885d015329c919bf43e6460a858f1e",
    symbol: "SHK",
    decimals: 18,
  },
  {
    address: "0x0d85693b4cb4b8bb4d407e33ba1d9de861db80ca",
    symbol: "PVGO",
    decimals: 18,
  },
  {
    address: "0x4f311c430540db1d64e635eb55f969f1660b2016",
    symbol: "PC",
    decimals: 9,
  },
  {
    address: "0x70edf1c215d0ce69e7f16fd4e6276ba0d99d4de7",
    symbol: "CHEQ",
    decimals: 9,
  },
  {
    address: "0x809826cceab68c387726af962713b64cb5cb3cca",
    symbol: "NCASH",
    decimals: 18,
  },
  {
    address: "0x3f68e7b44e9bcb486c2feadb7a2289d9cdfc9088",
    symbol: "ICONS",
    decimals: 18,
  },
  {
    address: "0x9e04f519b094f5f8210441e285f603f4d2b50084",
    symbol: "1EARTH",
    decimals: 18,
  },
  {
    address: "0xd2af830e8cbdfed6cc11bab697bb25496ed6fa62",
    symbol: "WOUSD",
    decimals: 18,
  },
  {
    address: "0xdfc3829b127761a3218bfcee7fc92e1232c9d116",
    symbol: "PRCY",
    decimals: 8,
  },
  {
    address: "0x9f4909cc95fb870bf48c128c1fdbb5f482797632",
    symbol: "GZLR",
    decimals: 18,
  },
  {
    address: "0xedb171c18ce90b633db442f2a6f72874093b49ef",
    symbol: "WAMPL",
    decimals: 18,
  },
  {
    address: "0x5eaa69b29f99c84fe5de8200340b4e9b4ab38eac",
    symbol: "RAZE",
    decimals: 18,
  },
  {
    address: "0xbe9f61555f50dd6167f2772e9cf7519790d96624",
    symbol: "SX",
    decimals: 18,
  },
  {
    address: "0x066798d9ef0833ccc719076dab77199ecbd178b0",
    symbol: "SAKE",
    decimals: 18,
  },
  {
    address: "0xe19f85c920b572ca48942315b06d6cac86585c87",
    symbol: "PLEB",
    decimals: 18,
  },
  {
    address: "0x69cbaf6c147086c3c234385556f8a0c6488d3420",
    symbol: "69420",
    decimals: 9,
  },
  {
    address: "0x8bbe1a2961b41340468d0548c2cd5b7dfa9b684c",
    symbol: "HANDY",
    decimals: 18,
  },
  {
    address: "0xc36b4311b21fc0c2ead46f1ea6ce97c9c4d98d3d",
    symbol: "CRE8",
    decimals: 18,
  },
  {
    address: "0x4554cc10898f92d45378b98d6d6c2dd54c687fb2",
    symbol: "JBX",
    decimals: 18,
  },
  {
    address: "0x337af08bb6980ecb68389c5ed8876d08643abf8a",
    symbol: "VACHI",
    decimals: 18,
  },
  {
    address: "0xe1bda0c3bfa2be7f740f0119b6a34f057bd58eba",
    symbol: "WNK",
    decimals: 18,
  },
  {
    address: "0x95392f142af1c12f6e39897ff9b09c599666b50c",
    symbol: "BLOOD",
    decimals: 18,
  },
  {
    address: "0x2282c726f54c93193e6b8e5bf1b82303dc11d36e",
    symbol: "DAY",
    decimals: 6,
  },
  {
    address: "0x01597e397605bf280674bf292623460b4204c375",
    symbol: "BENT",
    decimals: 18,
  },
  {
    address: "0x243cacb4d5ff6814ad668c3e225246efa886ad5a",
    symbol: "SHI",
    decimals: 18,
  },
  {
    address: "0x7c84e62859d0715eb77d1b1c4154ecd6abb21bec",
    symbol: "SHPING",
    decimals: 18,
  },
  {
    address: "0xe632ea2ef2cfd8fc4a2731c76f99078aef6a4b31",
    symbol: "THX",
    decimals: 18,
  },
  {
    address: "0x66f73d0fd4161cfad4302dc145ff994375c13475",
    symbol: "DXGM",
    decimals: 18,
  },
  {
    address: "0x8db253a1943dddf1af9bcf8706ac9a0ce939d922",
    symbol: "UNB",
    decimals: 18,
  },
  {
    address: "0x61a35258107563f6b6f102ae25490901c8760b12",
    symbol: "KITTY",
    decimals: 18,
  },
  {
    address: "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
    symbol: "MUSD",
    decimals: 18,
  },
  {
    address: "0xda816459f1ab5631232fe5e97a05bbbb94970c95",
    symbol: "YVDAI",
    decimals: 18,
  },
  {
    address: "0xb5c578947de0fd71303f71f2c3d41767438bd0de",
    symbol: "DEVT",
    decimals: 18,
  },
  {
    address: "0x34be5b8c30ee4fde069dc878989686abe9884470",
    symbol: "SENATE",
    decimals: 18,
  },
  {
    address: "0x8f081eb884fd47b79536d28e2dd9d4886773f783",
    symbol: "BECOIN",
    decimals: 6,
  },
  {
    address: "0x612e1726435fe38dd49a0b35b4065b56f49c8f11",
    symbol: "CCV2",
    decimals: 18,
  },
  {
    address: "0xae6e307c3fe9e922e5674dbd7f830ed49c014c6b",
    symbol: "CREDI",
    decimals: 18,
  },
  {
    address: "0xa0f0546eb5e3ee7e8cfc5da12e5949f3ae622675",
    symbol: "TOKO",
    decimals: 18,
  },
  {
    address: "0xcaabcaa4ca42e1d86de1a201c818639def0ba7a7",
    symbol: "TALK",
    decimals: 18,
  },
  {
    address: "0x9657477ac915f56ca87c253db1320218ec2d5ddd",
    symbol: "JNE",
    decimals: 18,
  },
  {
    address: "0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31",
    symbol: "VXL",
    decimals: 18,
  },
  {
    address: "0xd487892bb4c57edbe7ab401d9fe801c8fe6473f5",
    symbol: "HVE2",
    decimals: 18,
  },
  {
    address: "0x1c4853ec0d55e420002c5efabc7ed8e0ba7a4121",
    symbol: "OKINAMI",
    decimals: 9,
  },
  {
    address: "0x01ba67aac7f75f647d94220cc98fb30fcc5105bf",
    symbol: "LYRA",
    decimals: 18,
  },
  {
    address: "0xa1817b6d8d890f3943b61648992730373b71f156",
    symbol: "MONGOOSE",
    decimals: 9,
  },
  {
    address: "0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6",
    symbol: "ICHI",
    decimals: 18,
  },
  {
    address: "0x98585dfc8d9e7d48f0b1ae47ce33332cf4237d96",
    symbol: "NEWO",
    decimals: 18,
  },
  {
    address: "0xdadb4ae5b5d3099dd1f586f990b845f2404a1c4c",
    symbol: "",
    decimals: 18,
  },
  {
    address: "0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04",
    symbol: "CWEB",
    decimals: 18,
  },
  {
    address: "0x43d4a3cd90ddd2f8f4f693170c9c8098163502ad",
    symbol: "D2D",
    decimals: 18,
  },
  {
    address: "0x7659ce147d0e714454073a5dd7003544234b6aa0",
    symbol: "XCAD",
    decimals: 18,
  },
  {
    address: "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd",
    symbol: "FREE",
    decimals: 18,
  },
  {
    address: "0x77777777772cf0455fb38ee0e75f38034dfa50de",
    symbol: "XY",
    decimals: 18,
  },
  {
    address: "0xf0f9d895aca5c8678f706fb8216fa22957685a13",
    symbol: "CULT",
    decimals: 18,
  },
  {
    address: "0x900db999074d9277c5da2a43f252d74366230da0",
    symbol: "GIV",
    decimals: 18,
  },
  {
    address: "0x3ab6ed69ef663bd986ee59205ccad8a20f98b4c2",
    symbol: "DREP",
    decimals: 18,
  },
  {
    address: "0x15874d65e649880c2614e7a480cb7c9a55787ff6",
    symbol: "EMAX",
    decimals: 18,
  },
  {
    address: "0x90b831fa3bebf58e9744a14d638e25b4ee06f9bc",
    symbol: "MIMO",
    decimals: 18,
  },
  {
    address: "0xe803178b48a0e560c2b19f3b3d4e504f79d229ce",
    symbol: "BOBC",
    decimals: 18,
  },
  {
    address: "0x7237c0b30b1355f1b76355582f182f6f04b08740",
    symbol: "MGG",
    decimals: 18,
  },
  {
    address: "0x19af07b52e5faa0c2b1e11721c52aa23172fe2f5",
    symbol: "MEMES",
    decimals: 9,
  },
  {
    address: "0xa5f1dbb0e55bc31f32c6d032bee330288490e722",
    symbol: "DBD",
    decimals: 18,
  },
  {
    address: "0x383518188c0c6d7730d91b2c03a03c837814a899",
    symbol: "OHM",
    decimals: 9,
  },
  {
    address: "0xda7c0810ce6f8329786160bb3d1734cf6661ca6e",
    symbol: "JAY",
    decimals: 18,
  },
  {
    address: "0x4cd0c43b0d53bc318cc5342b77eb6f124e47f526",
    symbol: "FREE",
    decimals: 18,
  },
  {
    address: "0x4b1d0b9f081468d780ca1d5d79132b64301085d1",
    symbol: "LMR",
    decimals: 8,
  },
  {
    address: "0x162bb2bb5fb03976a69dd25bb9afce6140db1433",
    symbol: "DOG",
    decimals: 9,
  },
  {
    address: "0xd15a1a2a3211b58113e45809f05934252e34e2f8",
    symbol: "WZM",
    decimals: 18,
  },
  {
    address: "0xd1d2eb1b1e90b638588728b4130137d262c87cae",
    symbol: "GALA",
    decimals: 8,
  },
  {
    address: "0xe5097d9baeafb89f9bcb78c9290d545db5f9e9cb",
    symbol: "HBOT",
    decimals: 18,
  },
  {
    address: "0x7717f2828fe4dac8558d23ee4cdfed9544e9321f",
    symbol: "OTX",
    decimals: 18,
  },
  {
    address: "0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6",
    symbol: "SCA",
    decimals: 18,
  },
  {
    address: "0x7eeab3de47a475fd2dec438aef05b128887c6105",
    symbol: "TROPPY",
    decimals: 11,
  },
  {
    address: "0xc2544a32872a91f4a553b404c6950e89de901fdb",
    symbol: "FPIS",
    decimals: 18,
  },
  {
    address: "0xa20f77b7ad5a88badc48800c56507b7274c06fdc",
    symbol: "CHER",
    decimals: 18,
  },
  {
    address: "0x45e412e1878080815d6d51d47b83d17869433459",
    symbol: "CTO",
    decimals: 18,
  },
  {
    address: "0x888888888889c00c67689029d7856aac1065ec11",
    symbol: "OPIUM",
    decimals: 18,
  },
  {
    address: "0x4daeb4a06f70f4b1a5c329115731fe4b89c0b227",
    symbol: "QUA",
    decimals: 18,
  },
  {
    address: "0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de",
    symbol: "MILK2",
    decimals: 18,
  },
  {
    address: "0x6f2dec5da475333b0af4a3ffc9a33b0211a9a452",
    symbol: "CT",
    decimals: 18,
  },
  {
    address: "0x0000000005c6b7c1fd10915a05f034f90d524d6e",
    symbol: "TRYC",
    decimals: 6,
  },
  {
    address: "0x9669890e48f330acd88b78d63e1a6b3482652cd9",
    symbol: "BCNT",
    decimals: 18,
  },
  {
    address: "0xf61bf4d1a948487d61b8fa63808aac06bda55f98",
    symbol: "TR3",
    decimals: 18,
  },
  {
    address: "0xe6602b34d8510b033e000975b3322537c7172441",
    symbol: "FRR",
    decimals: 18,
  },
  {
    address: "0x6006fc2a849fedaba8330ce36f5133de01f96189",
    symbol: "SHAKE",
    decimals: 18,
  },
  {
    address: "0x62f03b52c377fea3eb71d451a95ad86c818755d1",
    symbol: "DOGEVERSE",
    decimals: 18,
  },
  {
    address: "0x9b83f827928abdf18cf1f7e67053572b9bceff3a",
    symbol: "ARTEM",
    decimals: 18,
  },
  {
    address: "0x69b14e8d3cebfdd8196bfe530954a0c226e5008e",
    symbol: "SPACEPI",
    decimals: 9,
  },
  {
    address: "0xcd4ee6c8052df6742e4b342cf720ff3ac74f415e",
    symbol: "STELAI",
    decimals: 9,
  },
  {
    address: "0x84342e932797fc62814189f01f0fb05f52519708",
    symbol: "NHT",
    decimals: 18,
  },
  {
    address: "0x6bba316c48b49bd1eac44573c5c871ff02958469",
    symbol: "GAS",
    decimals: 18,
  },
  {
    address: "0x362bc847a3a9637d3af6624eec853618a43ed7d2",
    symbol: "PRQ",
    decimals: 18,
  },
  {
    address: "0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299",
    symbol: "RBX",
    decimals: 18,
  },
  {
    address: "0x3e5d9d8a63cc8a88748f229999cf59487e90721e",
    symbol: "XMT",
    decimals: 18,
  },
  {
    address: "0x65ef703f5594d2573eb71aaf55bc0cb548492df4",
    symbol: "MULTI",
    decimals: 18,
  },
  {
    address: "0xdd2e93924bdd4e20c3cf4a8736e5955224fa450e",
    symbol: "FOHO",
    decimals: 8,
  },
  {
    address: "0x0f7f961648ae6db43c75663ac7e5414eb79b5704",
    symbol: "XIO",
    decimals: 18,
  },
  {
    address: "0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d",
    symbol: "FUSE",
    decimals: 18,
  },
  {
    address: "0x7f3141c4d6b047fb930991b450f1ed996a51cb26",
    symbol: "X",
    decimals: 18,
  },
  {
    address: "0xf1b99e3e573a1a9c5e6b2ce818b617f0e664e86b",
    symbol: "OSQTH",
    decimals: 18,
  },
  {
    address: "0x1fcdce58959f536621d76f5b7ffb955baa5a672f",
    symbol: "FOR",
    decimals: 18,
  },
  {
    address: "0xd7d8f3b8bc8bc48d3acc37879eaba7b85889fa52",
    symbol: "CLH",
    decimals: 18,
  },
  {
    address: "0x9df03fba103491fffde4fbc5fea15efaa43c67a5",
    symbol: "NFM",
    decimals: 18,
  },
  {
    address: "0xa15865d9de09cb96aaa3a9081b3dfc8481f07d33",
    symbol: "POPE",
    decimals: 18,
  },
  {
    address: "0x6602e9319f2c5ec0ba31ffcdc4301d7ef03b709e",
    symbol: "WBRGE",
    decimals: 18,
  },
  {
    address: "0x5ba19d656b65f1684cfea4af428c23b9f3628f97",
    symbol: "AAG",
    decimals: 18,
  },
  {
    address: "0x69d9905b2e5f6f5433212b7f3c954433f23c1572",
    symbol: "OOKS",
    decimals: 18,
  },
  {
    address: "0xe138fda441fc31b36171122397a8a11d6cd2c479",
    symbol: "GTC",
    decimals: 0,
  },
  {
    address: "0x60f5672a271c7e39e787427a18353ba59a4a3578",
    symbol: "PIKA",
    decimals: 18,
  },
  {
    address: "0x72e364f2abdc788b7e918bc238b21f109cd634d7",
    symbol: "MVI",
    decimals: 18,
  },
  {
    address: "0xa67e9f021b9d208f7e3365b2a155e3c55b27de71",
    symbol: "KLEE",
    decimals: 9,
  },
  {
    address: "0x52f4d5ee6c91e01be67ca1f64b11ed0ee370817d",
    symbol: "CIA",
    decimals: 9,
  },
  {
    address: "0xb3cb8d5aeff0f4d1f432f353309f47b885e404e3",
    symbol: "MEV",
    decimals: 18,
  },
  {
    address: "0x9c32185b81766a051e08de671207b34466dd1021",
    symbol: "BTCPX",
    decimals: 8,
  },
  {
    address: "0x375abb85c329753b1ba849a601438ae77eec9893",
    symbol: "PDT",
    decimals: 18,
  },
  {
    address: "0xb131f337c45d386ceec234e194b2663d5c3d9dcf",
    symbol: "ICOM",
    decimals: 18,
  },
  {
    address: "0x39207d2e2feef178fbda8083914554c59d9f8c00",
    symbol: "INUS",
    decimals: 18,
  },
  {
    address: "0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6",
    symbol: "BED",
    decimals: 18,
  },
  {
    address: "0x64df3aab3b21cc275bb76c4a581cf8b726478ee0",
    symbol: "CRAMER",
    decimals: 18,
  },
  {
    address: "0x85f6eb2bd5a062f5f8560be93fb7147e16c81472",
    symbol: "FLY",
    decimals: 4,
  },
  {
    address: "0x968cbe62c830a0ccf4381614662398505657a2a9",
    symbol: "TPY",
    decimals: 8,
  },
  {
    address: "0x5b71bee9d961b1b848f8485eec8d8787f80217f5",
    symbol: "BF",
    decimals: 18,
  },
  {
    address: "0x58f7345b5295e43aa454911571f13be186655be9",
    symbol: "GRLC",
    decimals: 8,
  },
  {
    address: "0xc9b6a17ebb43491635f603a01f8bb3e4b5d22228",
    symbol: "MAGA",
    decimals: 9,
  },
  {
    address: "0x80ce3027a70e0a928d9268994e9b85d03bd4cdcf",
    symbol: "LKR",
    decimals: 18,
  },
  {
    address: "0x3e828ac5c480069d4765654fb4b8733b910b13b2",
    symbol: "CLNY",
    decimals: 18,
  },
  {
    address: "0x3541a5c1b04adaba0b83f161747815cd7b1516bc",
    symbol: "KNIGHT",
    decimals: 18,
  },
  {
    address: "0x20d4db1946859e2adb0e5acc2eac58047ad41395",
    symbol: "MOONEY",
    decimals: 18,
  },
  {
    address: "0x41a3dba3d677e573636ba691a70ff2d606c29666",
    symbol: "BLANK",
    decimals: 18,
  },
  {
    address: "0xbe9ab37a414c517b2be2bfa5945665bb07379054",
    symbol: "TOMS",
    decimals: 18,
  },
  {
    address: "0xc9fe6e1c76210be83dc1b5b20ec7fd010b0b1d15",
    symbol: "FRIN",
    decimals: 18,
  },
  {
    address: "0x7ab7d54f8cb054141142f04ba0b3d41ac4c4d61c",
    symbol: "NOTHING",
    decimals: 18,
  },
  {
    address: "0x721a1b990699ee9d90b6327faad0a3e840ae8335",
    symbol: "LOOT",
    decimals: 18,
  },
  {
    address: "0xb90cb79b72eb10c39cbdf86e50b1c89f6a235f2e",
    symbol: "AUDT",
    decimals: 18,
  },
  {
    address: "0xd16fd95d949f996e3808eeea0e3881c59e76ef1e",
    symbol: "PARA",
    decimals: 18,
  },
  {
    address: "0x888888435fde8e7d4c54cab67f206e4199454c60",
    symbol: "DFX",
    decimals: 18,
  },
  {
    address: "0x5ee3188a3f8adee1d736edd4ae85000105c88f66",
    symbol: "PEN",
    decimals: 18,
  },
  {
    address: "0xd94a8f9caed25e63ecc90edfefaf3635ea1e182a",
    symbol: "SCOMP",
    decimals: 18,
  },
  {
    address: "0xc383a3833a87009fd9597f8184979af5edfad019",
    symbol: "IETH",
    decimals: 18,
  },
  {
    address: "0x429881672b9ae42b8eba0e26cd9c73711b891ca5",
    symbol: "PICKLE",
    decimals: 18,
  },
  {
    address: "0x5d843fa9495d23de997c394296ac7b4d721e841c",
    symbol: "RELAY",
    decimals: 18,
  },
  {
    address: "0x90edf25b14393350f0c1b5b12b6cb3cd3781fb4a",
    symbol: "CORE",
    decimals: 18,
  },
  {
    address: "0x508b27902c6c14972a10a4e413b9cfa449e9cedb",
    symbol: "AISIG",
    decimals: 18,
  },
  {
    address: "0x8a40c222996f9f3431f63bf80244c36822060f12",
    symbol: "FXF",
    decimals: 18,
  },
  {
    address: "0xc139190f447e929f090edeb554d95abb8b18ac1c",
    symbol: "USDTB",
    decimals: 18,
  },
  {
    address: "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42",
    symbol: "MCB",
    decimals: 18,
  },
  {
    address: "0x5c7cc28ff152c397dc2e17349661db67113d6ce3",
    symbol: "VRTX",
    decimals: 18,
  },
  {
    address: "0x3a0b022f32b3191d44e5847da12dc0b63fb07c91",
    symbol: "SPELLFIRE",
    decimals: 18,
  },
  {
    address: "0xc8d3dcb63c38607cb0c9d3f55e8ecce628a01c36",
    symbol: "MATRIX",
    decimals: 18,
  },
  {
    address: "0xbe56ab825fd35678a32dc35bc4eb17e238e1404f",
    symbol: "DIGITS",
    decimals: 18,
  },
  {
    address: "0x88800092ff476844f74dc2fc427974bbee2794ae",
    symbol: "WALLET",
    decimals: 18,
  },
  {
    address: "0xfeef77d3f69374f66429c91d732a244f074bdf74",
    symbol: "CVXFXS",
    decimals: 18,
  },
  {
    address: "0xb624fde1a972b1c89ec1dad691442d5e8e891469",
    symbol: "SPORK",
    decimals: 18,
  },
  {
    address: "0x5c1d9aa868a30795f92fae903edc9eff269044bf",
    symbol: "CNG",
    decimals: 18,
  },
  {
    address: "0x433fce7dfbec729a79999eaf056cb073b2153eba",
    symbol: "CNW",
    decimals: 6,
  },
  {
    address: "0x59d1e836f7b7210a978b25a855085cc46fd090b5",
    symbol: "JUSTICE",
    decimals: 18,
  },
  {
    address: "0x00281dfce4cfd72c0b6fda2aaaf077258743f9e8",
    symbol: "NRFB",
    decimals: 0,
  },
  {
    address: "0xcb56b52316041a62b6b5d0583dce4a8ae7a3c629",
    symbol: "CIG",
    decimals: 18,
  },
  {
    address: "0xc91a71a1ffa3d8b22ba615ba1b9c01b2bbbf55ad",
    symbol: "ZZ",
    decimals: 18,
  },
  {
    address: "0x6c05b8141cefb64502b6dfcaae7c77babbac18fa",
    symbol: "FU",
    decimals: 18,
  },
  {
    address: "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107",
    symbol: "GOVI",
    decimals: 18,
  },
  {
    address: "0x4f640f2529ee0cf119a2881485845fa8e61a782a",
    symbol: "ORE",
    decimals: 18,
  },
  {
    address: "0x67c5870b4a41d4ebef24d2456547a03f1f3e094b",
    symbol: "G",
    decimals: 2,
  },
  {
    address: "0xc502002aeb1b9309fccb016adf50507987fc6c2b",
    symbol: "GNFT",
    decimals: 18,
  },
  {
    address: "0x881d4c8618d68872fa404518b2460ea839a02a6a",
    symbol: "YAWN",
    decimals: 18,
  },
  {
    address: "0x70c4430f9d98b4184a4ef3e44ce10c320a8b7383",
    symbol: "GYFI",
    decimals: 18,
  },
  {
    address: "0xf1acfb5d95bc090bc55d8ae58a8df4081d73e009",
    symbol: "CTOK",
    decimals: 18,
  },
  {
    address: "0x5c147e74d63b1d31aa3fd78eb229b65161983b2b",
    symbol: "WFLOW",
    decimals: 18,
  },
  {
    address: "0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5",
    symbol: "LYM",
    decimals: 18,
  },
  {
    address: "0x865377367054516e17014ccded1e7d814edc9ce4",
    symbol: "DOLA",
    decimals: 18,
  },
  {
    address: "0x4eca7761a516f8300711cbf920c0b85555261993",
    symbol: "GOATX",
    decimals: 18,
  },
  {
    address: "0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9",
    symbol: "X2Y2",
    decimals: 18,
  },
  {
    address: "0x6e9730ecffbed43fd876a264c982e254ef05a0de",
    symbol: "NORD",
    decimals: 18,
  },
  {
    address: "0xdac657ffd44a3b9d8aba8749830bf14beb66ff2d",
    symbol: "HDAO",
    decimals: 18,
  },
  {
    address: "0xa6422e3e219ee6d4c1b18895275fe43556fd50ed",
    symbol: "STBU",
    decimals: 18,
  },
  {
    address: "0x3927fb89f34bbee63351a6340558eebf51a19fb8",
    symbol: "SPURDO",
    decimals: 18,
  },
  {
    address: "0xa350da05405cc204e551c4eed19c3039646528d5",
    symbol: "BSPT",
    decimals: 18,
  },
  {
    address: "0x95b4ef2869ebd94beb4eee400a99824bf5dc325b",
    symbol: "CMKR",
    decimals: 8,
  },
  {
    address: "0x8eedefe828a0f16c8fc80e46a87bc0f1de2d960c",
    symbol: "DGMV",
    decimals: 18,
  },
  {
    address: "0x3fa729b4548becbad4eab6ef18413470e6d5324c",
    symbol: "MOVE",
    decimals: 18,
  },
  {
    address: "0x055999b83f9cade9e3988a0f34ef72817566800d",
    symbol: "RTB",
    decimals: 18,
  },
  {
    address: "0xba6b0dbb2ba8daa8f5d6817946393aef8d3a4487",
    symbol: "HSF",
    decimals: 18,
  },
  {
    address: "0xea4a2327e75252517535fd013b7c6706609819db",
    symbol: "SNS",
    decimals: 18,
  },
  {
    address: "0xa6586e19ef681b1ac0ed3d46413d199a555dbb95",
    symbol: "LETSGO",
    decimals: 18,
  },
  {
    address: "0x3392d8a60b77f8d3eaa4fb58f09d835bd31add29",
    symbol: "INDI",
    decimals: 18,
  },
  {
    address: "0xbc6e06778708177a18210181b073da747c88490a",
    symbol: "SYNR",
    decimals: 18,
  },
  {
    address: "0x788b6d2b37aa51d916f2837ae25b05f0e61339d1",
    symbol: "MVD",
    decimals: 9,
  },
  {
    address: "0xf1290473e210b2108a85237fbcd7b6eb42cc654f",
    symbol: "HEDG",
    decimals: 18,
  },
  {
    address: "0x6431fa4b812a2dcc062a38cb55cc7d18135adead",
    symbol: "RANKER",
    decimals: 18,
  },
  {
    address: "0x3f95aa88ddbb7d9d484aa3d482bf0a80009c52c9",
    symbol: "BERNX",
    decimals: 18,
  },
  {
    address: "0x201332bd45c8628d814f870bfb584b385a7c351e",
    symbol: "ASTRA",
    decimals: 18,
  },
  {
    address: "0x1a688d3d294ee7bcc1f59011de93d608dc21c377",
    symbol: "UCO",
    decimals: 8,
  },
  {
    address: "0x5b1d655c93185b06b00f7925791106132cb3ad75",
    symbol: "DMT",
    decimals: 18,
  },
  {
    address: "0x5daa087714cb169f605c673a00aef62a9a7236a6",
    symbol: "RWD",
    decimals: 18,
  },
  {
    address: "0x4fabf135bcf8111671870d4399af739683198f96",
    symbol: "XVC",
    decimals: 18,
  },
  {
    address: "0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec",
    symbol: "RHO",
    decimals: 18,
  },
  {
    address: "0x069e4aa272d17d9625aa3b6f863c7ef6cfb96713",
    symbol: "BULEI",
    decimals: 9,
  },
  {
    address: "0x489d79959e6ad1e3fef7c939a2d889deff1668a8",
    symbol: "HOTTIE",
    decimals: 18,
  },
  {
    address: "0xf8ebf4849f1fa4faf0dff2106a173d3a6cb2eb3a",
    symbol: "TROLL",
    decimals: 18,
  },
  {
    address: "0xb44377b74ef1773639b663d0754cb8410a847d02",
    symbol: "DREAM",
    decimals: 18,
  },
  {
    address: "0x4448726b23483927c492f09c1dbfdffd3967b452",
    symbol: "PERCY",
    decimals: 9,
  },
  {
    address: "0x71a28feaee902966dc8d355e7b8aa427d421e7e0",
    symbol: "LUNCH",
    decimals: 18,
  },
  {
    address: "0x06f3c323f0238c72bf35011071f2b5b7f43a054c",
    symbol: "MASQ",
    decimals: 18,
  },
  {
    address: "0x2f9411088cef82fd9fb904eb8092f28eb485c8f6",
    symbol: "ATH",
    decimals: 18,
  },
  {
    address: "0x60bb16c4a931b1a0b8a7d945c651dd90f41d42cf",
    symbol: "FBX",
    decimals: 18,
  },
  {
    address: "0xa774ffb4af6b0a91331c084e1aebae6ad535e6f3",
    symbol: "FLEXUSD",
    decimals: 18,
  },
  {
    address: "0xc91b523a59acc63a64f61fc7bbfb4bfc82dd25f2",
    symbol: "AI",
    decimals: 18,
  },
  {
    address: "0x25722cd432d02895d9be45f5deb60fc479c8781e",
    symbol: "SPONGE",
    decimals: 18,
  },
  {
    address: "0x961d4921e1718e633bac8ded88c4a1cae44b785a",
    symbol: "STFLIP",
    decimals: 18,
  },
  {
    address: "0x6247c86b016bc4d9ae141849c0a9eb38c004b742",
    symbol: "HTL",
    decimals: 18,
  },
  {
    address: "0x36ac219f90f5a6a3c77f2a7b660e3cc701f68e25",
    symbol: "XCM",
    decimals: 18,
  },
  {
    address: "0x3cbc780d2934d55a06069e837fabd3e6fc23dab0",
    symbol: "DBX",
    decimals: 18,
  },
  {
    address: "0xb58e61c3098d85632df34eecfb899a1ed80921cb",
    symbol: "ZCHF",
    decimals: 18,
  },
  {
    address: "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
    symbol: "CRVUSD",
    decimals: 18,
  },
  {
    address: "0x6dde4ffd6db302bc9a46850f61399e082f6c2122",
    symbol: "IAI",
    decimals: 18,
  },
  {
    address: "0x8503a7b00b4b52692cc6c14e5b96f142e30547b7",
    symbol: "MEED",
    decimals: 18,
  },
  {
    address: "0xbfb2b6870501a6ff17121d676a0a45a38c9eed1e",
    symbol: "TOAD",
    decimals: 9,
  },
  {
    address: "0x2bcbec0296cddda988ea88031e43fe247fa6d341",
    symbol: "MOOTUN",
    decimals: 9,
  },
  {
    address: "0x3ba925fdeae6b46d0bb4d424d829982cb2f7309e",
    symbol: "RBX",
    decimals: 18,
  },
  {
    address: "0x144805be43c48ef85435c94e0da4cb4efb1ab4f3",
    symbol: "MBX",
    decimals: 18,
  },
  {
    address: "0xed04915c23f00a313a544955524eb7dbd823143d",
    symbol: "ACH",
    decimals: 8,
  },
  {
    address: "0x6dc6a27822ae2ca3a47da39a2f2bbd525dd693f8",
    symbol: "CYDOGE",
    decimals: 18,
  },
  {
    address: "0xa80f2c8f61c56546001f5fc2eb8d6e4e72c45d4c",
    symbol: "UNQT",
    decimals: 18,
  },
  {
    address: "0x33f391f4c4fe802b70b77ae37670037a92114a7c",
    symbol: "BURP",
    decimals: 18,
  },
  {
    address: "0x88909d489678dd17aa6d9609f89b0419bf78fd9a",
    symbol: "L3",
    decimals: 18,
  },
  {
    address: "0x1864ce27e9f7517047933caae530674e8c70b8a7",
    symbol: "PIB",
    decimals: 18,
  },
  {
    address: "0xa71d0588eaf47f12b13cf8ec750430d21df04974",
    symbol: "QOM",
    decimals: 18,
  },
  {
    address: "0xd43be54c1aedf7ee4099104f2dae4ea88b18a249",
    symbol: "TRAXX",
    decimals: 18,
  },
  {
    address: "0xfe0c30065b384f05761f15d0cc899d4f9f9cc0eb",
    symbol: "ETHFI",
    decimals: 18,
  },
  {
    address: "0x01d33fd36ec67c6ada32cf36b31e88ee190b1839",
    symbol: "BRZ",
    decimals: 18,
  },
  {
    address: "0x56694577564fdd577a0abb20fe95c1e2756c2a11",
    symbol: "ASW",
    decimals: 18,
  },
  {
    address: "0x1afb69dbc9f54d08dab1bd3436f8da1af819e647",
    symbol: "MELOS",
    decimals: 18,
  },
  {
    address: "0x7bef710a5759d197ec0bf621c3df802c2d60d848",
    symbol: "SHOPX",
    decimals: 18,
  },
  {
    address: "0x436da116249044e8b4464f0cf21dd93311d88190",
    symbol: "ZEUM",
    decimals: 18,
  },
  {
    address: "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd",
    symbol: "ETH2X-FLI",
    decimals: 18,
  },
  {
    address: "0x104f3152d8ebfc3f679392977356962ff36566ac",
    symbol: "PORTX",
    decimals: 18,
  },
  {
    address: "0x28cca76f6e8ec81e4550ecd761f899110b060e97",
    symbol: "ARGO",
    decimals: 18,
  },
  {
    address: "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
    symbol: "KEY",
    decimals: 18,
  },
  {
    address: "0x6570ffe19da7e2b425329b157d9109b87f18304b",
    symbol: "UNM",
    decimals: 18,
  },
  {
    address: "0xc8de43bfe33ff496fa14c270d9cb29bda196b9b5",
    symbol: "BIG",
    decimals: 18,
  },
  {
    address: "0xc1f33e0cf7e40a67375007104b929e49a581bafe",
    symbol: "SPOT",
    decimals: 9,
  },
  {
    address: "0x1d96fd43ee07aa79f8fd003cbdf404fb5ce41ad2",
    symbol: "QWLA",
    decimals: 18,
  },
  {
    address: "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a",
    symbol: "ROOK",
    decimals: 18,
  },
  {
    address: "0xcd17fa52528f37facb3028688e62ec82d9417581",
    symbol: "MTRM",
    decimals: 0,
  },
  {
    address: "0x36c79f0b8a2e8a3c0230c254c452973e7a3ba155",
    symbol: "BAI",
    decimals: 9,
  },
  {
    address: "0x849c479d7a90eb378dbd00e8f166371176244eb1",
    symbol: "MUU",
    decimals: 9,
  },
  {
    address: "0xb70eaf5d316192881aac8786c90b7907b83f02e8",
    symbol: "RESET",
    decimals: 18,
  },
  {
    address: "0xde075d9adbd0240b4462f124af926452ad0bac91",
    symbol: "BBF",
    decimals: 18,
  },
  {
    address: "0x1e2f15302b90edde696593607b6bd444b64e8f02",
    symbol: "SHIRYO-INU",
    decimals: 9,
  },
  {
    address: "0x5fa54fddf1870c344dbfabb37dfab8700ec0def1",
    symbol: "FROGEX",
    decimals: 9,
  },
  {
    address: "0x821a278dfff762c76410264303f25bf42e195c0c",
    symbol: "PETH",
    decimals: 18,
  },
  {
    address: "0x3209d14ff61766359e64aceff91877cec2ad968e",
    symbol: "CUP",
    decimals: 18,
  },
  {
    address: "0x2596825a84888e8f24b747df29e11b5dd03c81d7",
    symbol: "FTRB",
    decimals: 18,
  },
  {
    address: "0x9ea59db651a3c79a8d52a394a49da8e9a214d6ae",
    symbol: "BALLS",
    decimals: 9,
  },
  {
    address: "0x4086e77c5e993fdb90a406285d00111a974f877a",
    symbol: "BRWL",
    decimals: 4,
  },
  {
    address: "0x2ecba91da63c29ea80fbe7b52632ca2d1f8e5be0",
    symbol: "FERC",
    decimals: 18,
  },
  {
    address: "0xa35923162c49cf95e6bf26623385eb431ad920d3",
    symbol: "TURBO",
    decimals: 18,
  },
  {
    address: "0xa8b61cff52564758a204f841e636265bebc8db9b",
    symbol: "YIELD",
    decimals: 18,
  },
  {
    address: "0x7712c34205737192402172409a8f7ccef8aa2aec",
    symbol: "BUIDL",
    decimals: 6,
  },
  {
    address: "0xadd353fb2e2c563383ff3272a500f3e7134dafe4",
    symbol: "TUNA",
    decimals: 18,
  },
  {
    address: "0x6069c9223e8a5da1ec49ac5525d4bb757af72cd8",
    symbol: "MUSK",
    decimals: 18,
  },
  {
    address: "0xdc0327d50e6c73db2f8117760592c8bbf1cdcf38",
    symbol: "STRNGR",
    decimals: 18,
  },
  {
    address: "0x3cbb7f5d7499af626026e96a2f05df806f2200dc",
    symbol: "PANDA",
    decimals: 18,
  },
  {
    address: "0x0018d5e01e53878f90feab02f1b2019a21adf8b1",
    symbol: "SHADOWCATS",
    decimals: 18,
  },
  {
    address: "0x3c48ca59bf2699e51d4974d4b6d284ae52076e5e",
    symbol: "CDS",
    decimals: 18,
  },
  {
    address: "0xb840d10d840ef47c233fec1fd040f5b145a6dfa5",
    symbol: "STREETH",
    decimals: 18,
  },
  {
    address: "0x9f284e1337a815fe77d2ff4ae46544645b20c5ff",
    symbol: "KTON",
    decimals: 18,
  },
  {
    address: "0xd78cb66b3affd27569782737fa5b842277e1add7",
    symbol: "GTROK",
    decimals: 9,
  },
  {
    address: "0xb2a63a5dd36c91ec2da59b188ff047f66fac122a",
    symbol: "FOLO",
    decimals: 18,
  },
  {
    address: "0xb94acdf8662cd955f137e0c9c9fba535c87b57b4",
    symbol: "LISA",
    decimals: 18,
  },
  {
    address: "0x22987407fd1fc5a971e3fda3b3e74c88666cda91",
    symbol: "SRT",
    decimals: 18,
  },
  {
    address: "0x329cf160f30d21006bcd24b67eade561e54cde4c",
    symbol: "CARE",
    decimals: 18,
  },
  {
    address: "0x3fab0bbaa03bceaf7c49e2b12877db0142be65fc",
    symbol: "CAST",
    decimals: 8,
  },
  {
    address: "0x24e89bdf2f65326b94e36978a7edeac63623dafa",
    symbol: "TKING",
    decimals: 18,
  },
  {
    address: "0xc229c69eb3bb51828d0caa3509a05a51083898dd",
    symbol: "PTU",
    decimals: 18,
  },
  {
    address: "0x4674672bcddda2ea5300f5207e1158185c944bc0",
    symbol: "GXT",
    decimals: 18,
  },
  {
    address: "0x6a8fee0e33cb65a7e8d21badca62e87639ef74b3",
    symbol: "PDX",
    decimals: 18,
  },
  {
    address: "0xf67366e83cc9b115ef8cca93baed1f03e6d3ca9a",
    symbol: "MVERSE",
    decimals: 18,
  },
  {
    address: "0xf81421fc15300c5a8cca9afe12f5cbad502fa756",
    symbol: "CRDC",
    decimals: 18,
  },
  {
    address: "0xd87de4ccef2c2fe651bc4d130cb1a365248f21fa",
    symbol: "LYFE",
    decimals: 18,
  },
  {
    address: "0xf5cfbc74057c610c8ef151a439252680ac68c6dc",
    symbol: "OCT",
    decimals: 18,
  },
  {
    address: "0x19e2a43fbbc643c3b2d9667d858d49cad17bc2b5",
    symbol: "BNS",
    decimals: 8,
  },
  {
    address: "0x88303fed02b31db9c7a9eafb711da9ef4a03e5d3",
    symbol: "ZIK",
    decimals: 18,
  },
  {
    address: "0xd6c7bb8531295e88d364ea67d5d1acc7d3f87454",
    symbol: "FTR",
    decimals: 18,
  },
  {
    address: "0xdfddf7a69716124bc346ba556d4b9f9e74c4a8bc",
    symbol: "SCCN",
    decimals: 18,
  },
  {
    address: "0xe0c05ec44775e4ad62cdc2eecdf337aa7a143363",
    symbol: "MANC",
    decimals: 2,
  },
  {
    address: "0x4521c9ad6a3d4230803ab752ed238be11f8b342f",
    symbol: "SANI",
    decimals: 18,
  },
  {
    address: "0x46e98ffe40e408ba6412beb670507e083c8b95ff",
    symbol: "PRIMATE",
    decimals: 18,
  },
  {
    address: "0x5319e86f0e41a06e49eb37046b8c11d78bcad68c",
    symbol: "ZLW",
    decimals: 18,
  },
  {
    address: "0x149d8290f653deb8e34c037d239d3d8eee9de5ad",
    symbol: "KING",
    decimals: 18,
  },
  {
    address: "0x1122b6a0e00dce0563082b6e2953f3a943855c1f",
    symbol: "CENNZ",
    decimals: 18,
  },
  {
    address: "0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd",
    symbol: "HAKKA",
    decimals: 18,
  },
  {
    address: "0xb7b1570e26315baad369b8ea0a943b7f140db9eb",
    symbol: "DPS",
    decimals: 9,
  },
  {
    address: "0x547b2f82cecfab9c2b1d36fdda96ef9f58c63b8c",
    symbol: "TXT",
    decimals: 18,
  },
  {
    address: "0x0262e9374e95b9667b78136c3897cb4e4ef7f0c2",
    symbol: "FAKT",
    decimals: 18,
  },
  {
    address: "0xc18c07a18198a6340cf4d94855fe5eb6dd33b46e",
    symbol: "QLINDO",
    decimals: 0,
  },
  {
    address: "0xe5caef4af8780e59df925470b050fb23c43ca68c",
    symbol: "FRM",
    decimals: 6,
  },
  {
    address: "0x0ede75b5f548e0d37f494368f4fa4982b6d0630a",
    symbol: "MEG",
    decimals: 18,
  },
  {
    address: "0xc353bf07405304aeab75f4c2fac7e88d6a68f98e",
    symbol: "HOPE",
    decimals: 18,
  },
  {
    address: "0xc775c0c30840cb9f51e21061b054ebf1a00acc29",
    symbol: "PSL",
    decimals: 5,
  },
  {
    address: "0x274e7eb07b485cfde53d02270555213447570ac6",
    symbol: "GOV",
    decimals: 18,
  },
  {
    address: "0xcba78d126f0b1feda0c538bcaf4c852a7a171099",
    symbol: "MOE",
    decimals: 18,
  },
  {
    address: "0x08a1c30bbb26425c1031ee9e43fa0b9960742539",
    symbol: "LNDX",
    decimals: 6,
  },
  {
    address: "0xd05728038681bcc79b2d5aeb4d9b002e66c93a40",
    symbol: "MRETH",
    decimals: 18,
  },
  {
    address: "0x4d4f3715050571a447fffa2cd4cf091c7014ca5c",
    symbol: "SUMMER",
    decimals: 18,
  },
  {
    address: "0x4c3bae16c79c30eeb1004fb03c878d89695e3a99",
    symbol: "AUTUMN",
    decimals: 18,
  },
  {
    address: "0xccba0b2bc4babe4cbfb6bd2f1edc2a9e86b7845f",
    symbol: "WINTER",
    decimals: 18,
  },
  {
    address: "0xf9c53268e9de692ae1b2ea5216e24e1c3ad7cb1e",
    symbol: "IDO",
    decimals: 18,
  },
  {
    address: "0x310c8f00b9de3c31ab95ea68feb6c877538f7947",
    symbol: "UNDEAD",
    decimals: 18,
  },
  {
    address: "0xb668473944d2e25b6af6d46917eb0233dbac53ae",
    symbol: "NTO",
    decimals: 18,
  },
  {
    address: "0x4d4d883f920f7c0c36a1be71a02aa0cde2aa22d1",
    symbol: "OPCH",
    decimals: 18,
  },
  {
    address: "0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3",
    symbol: "HXRO",
    decimals: 18,
  },
  {
    address: "0xa31b1767e09f842ecfd4bc471fe44f830e3891aa",
    symbol: "ROOBEE",
    decimals: 18,
  },
  {
    address: "0x83249c6794bca5a77eb8c0af9f1a86e055459cea",
    symbol: "GIGA",
    decimals: 9,
  },
  {
    address: "0xd9adfb67381d392c6e9671f64cdd9014bfcd74f2",
    symbol: "MORRA",
    decimals: 18,
  },
  {
    address: "0x4cff49d0a19ed6ff845a9122fa912abcfb1f68a6",
    symbol: "WTK",
    decimals: 18,
  },
  {
    address: "0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84",
    symbol: "ICETH",
    decimals: 18,
  },
  {
    address: "0x0b498ff89709d3838a063f1dfa463091f9801c2b",
    symbol: "BTC2X-FLI",
    decimals: 18,
  },
  {
    address: "0xa4cb0dce4849bdcad2d553e9e68644cf40e26cce",
    symbol: "BAKED",
    decimals: 18,
  },
  {
    address: "0x2be056e595110b30ddd5eaf674bdac54615307d9",
    symbol: "APUFF",
    decimals: 18,
  },
  {
    address: "0x9b2b931d6ab97b6a887b2c5d8529537e6fe73ebe",
    symbol: "ALLIN",
    decimals: 9,
  },
  {
    address: "0x327673ae6b33bd3d90f0096870059994f30dc8af",
    symbol: "LMT",
    decimals: 18,
  },
  {
    address: "0xf34b1db61aca1a371fe97bad2606c9f534fb9d7d",
    symbol: "RBIS",
    decimals: 18,
  },
  {
    address: "0x42a7797351dfd281a80807196c8508eb70bb2af9",
    symbol: "AIS",
    decimals: 18,
  },
  {
    address: "0xa393473d64d2f9f026b60b6df7859a689715d092",
    symbol: "LTX",
    decimals: 8,
  },
  {
    address: "0x72e9d9038ce484ee986fea183f8d8df93f9ada13",
    symbol: "SMARTCREDIT",
    decimals: 18,
  },
  {
    address: "0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27",
    symbol: "IBEUR",
    decimals: 18,
  },
  {
    address: "0xfb19075d77a0f111796fb259819830f4780f1429",
    symbol: "FB",
    decimals: 6,
  },
  {
    address: "0xcab254f1a32343f11ab41fbde90ecb410cde348a",
    symbol: "FROGE",
    decimals: 18,
  },
  {
    address: "0x06874f973dc3c96dc22a10ef0d0609f877f335ea",
    symbol: "STA",
    decimals: 18,
  },
  {
    address: "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec",
    symbol: "KEEP",
    decimals: 18,
  },
  {
    address: "0x2730d6fdc86c95a74253beffaa8306b40fedecbb",
    symbol: "UNI",
    decimals: 8,
  },
  {
    address: "0x71dc40668682a124231301414167e4cf7f55383c",
    symbol: "MIMIR",
    decimals: 18,
  },
  {
    address: "0x87d73e916d7057945c9bcd8cdd94e42a6f47f776",
    symbol: "NFTX",
    decimals: 18,
  },
  {
    address: "0xcdbddbdefb0ee3ef03a89afcd714aa4ef310d567",
    symbol: "VERTAI",
    decimals: 18,
  },
  {
    address: "0x2d80f5f5328fdcb6eceb7cacf5dd8aedaec94e20",
    symbol: "AGA",
    decimals: 4,
  },
  {
    address: "0x3b7f247f21bf3a07088c2d3423f64233d4b069f7",
    symbol: "DYNMT",
    decimals: 2,
  },
  {
    address: "0x5abf88cf3444611d13f6d1b39f3f3ee8575c91a2",
    symbol: "SAT",
    decimals: 18,
  },
  {
    address: "0x8484e645a054586a6d6af60c0ee911d7b5180e64",
    symbol: "DYOR",
    decimals: 18,
  },
  {
    address: "0x4e4990e997e1df3f6b39ff49384e2e7e99bc55fe",
    symbol: "SAUDIBONK",
    decimals: 18,
  },
  {
    address: "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
    symbol: "PPT",
    decimals: 8,
  },
  {
    address: "0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed",
    symbol: "RAINI",
    decimals: 18,
  },
  {
    address: "0xea3eed8616877f5d3c4aebf5a799f2e8d6de9a5e",
    symbol: "RFRM",
    decimals: 18,
  },
  {
    address: "0xf028adee51533b1b47beaa890feb54a457f51e89",
    symbol: "BMT",
    decimals: 18,
  },
  {
    address: "0x656c00e1bcd96f256f224ad9112ff426ef053733",
    symbol: "EFI",
    decimals: 18,
  },
  {
    address: "0x6243d8cea23066d098a15582d81a598b4e8391f4",
    symbol: "FLX",
    decimals: 18,
  },
  {
    address: "0x24c19f7101c1731b85f1127eaa0407732e36ecdd",
    symbol: "SGTV2",
    decimals: 18,
  },
  {
    address: "0x74b1af114274335598da72f5c6ed7b954a016eed",
    symbol: "HIT",
    decimals: 18,
  },
  {
    address: "0x97abee33cd075c58bfdd174e0885e08e8f03556f",
    symbol: "SENT",
    decimals: 18,
  },
  {
    address: "0x569424c5ee13884a193773fdc5d1c5f79c443a51",
    symbol: "PINE",
    decimals: 18,
  },
  {
    address: "0xc57f1d079c862b70aa12faab19293f827187aaf6",
    symbol: "GLG",
    decimals: 18,
  },
  {
    address: "0xab93df617f51e1e415b5b4f8111f122d6b48e55c",
    symbol: "DETO",
    decimals: 18,
  },
  {
    address: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
    symbol: "DPI",
    decimals: 18,
  },
  {
    address: "0xaa602de53347579f86b996d2add74bb6f79462b2",
    symbol: "ZMT",
    decimals: 18,
  },
  {
    address: "0xa92e7c82b11d10716ab534051b271d2f6aef7df5",
    symbol: "ARA",
    decimals: 18,
  },
  {
    address: "0x7714f320adca62b149df2579361afec729c5fe6a",
    symbol: "TUP",
    decimals: 18,
  },
  {
    address: "0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d",
    symbol: "HVN",
    decimals: 8,
  },
  {
    address: "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
    symbol: "SAN",
    decimals: 18,
  },
  {
    address: "0x58002a6b6e659a16de9f02f529b10536e307b0d9",
    symbol: "CHFT",
    decimals: 18,
  },
  {
    address: "0x602f65bb8b8098ad804e99db6760fd36208cd967",
    symbol: "MOPS",
    decimals: 18,
  },
  {
    address: "0xf920e4f3fbef5b3ad0a25017514b769bdc4ac135",
    symbol: "BAX",
    decimals: 18,
  },
  {
    address: "0xfcf8eda095e37a41e002e266daad7efc1579bc0a",
    symbol: "FLEX",
    decimals: 18,
  },
  {
    address: "0x24ccedebf841544c9e6a62af4e8c2fa6e5a46fde",
    symbol: "BLUESPARROW",
    decimals: 9,
  },
  {
    address: "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf",
    symbol: "LA",
    decimals: 18,
  },
  {
    address: "0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c",
    symbol: "X8X",
    decimals: 18,
  },
  {
    address: "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
    symbol: "SRN",
    decimals: 18,
  },
  {
    address: "0x77b1183e730275f6a8024ce53d54bcc12b368f60",
    symbol: "EZREZ",
    decimals: 18,
  },
  {
    address: "0xd98f75b1a3261dab9eed4956c93f33749027a964",
    symbol: "SHR",
    decimals: 2,
  },
  {
    address: "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    symbol: "POLY",
    decimals: 18,
  },
  {
    address: "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
    symbol: "LBA",
    decimals: 18,
  },
  {
    address: "0x4d67edef87a5ff910954899f4e5a0aaf107afd42",
    symbol: "BLUESPARROW",
    decimals: 9,
  },
  {
    address: "0x08f7be99ed83369541501d60f4e66f8e34c3f736",
    symbol: "CKU",
    decimals: 18,
  },
  {
    address: "0x11ebe21e9d7bf541a18e1e3ac94939018ce88f0b",
    symbol: "PITCHFXS",
    decimals: 18,
  },
  {
    address: "0x1bed97cbc3c24a4fb5c069c6e311a967386131f7",
    symbol: "YETH",
    decimals: 18,
  },
  {
    address: "0x973e52691176d36453868d9d86572788d27041a9",
    symbol: "DX",
    decimals: 18,
  },
  {
    address: "0x903bef1736cddf2a537176cf3c64579c3867a881",
    symbol: "ICHI",
    decimals: 9,
  },
  {
    address: "0xcff252a3299be44fa73402966f30a0159308b2ad",
    symbol: "ENVOY",
    decimals: 9,
  },
  {
    address: "0xd96e84ddbc7cbe1d73c55b6fe8c64f3a6550deea",
    symbol: "GMAC",
    decimals: 18,
  },
  {
    address: "0x6e605c269e0c92e70beeb85486f1fc550f9380bd",
    symbol: "CATT",
    decimals: 18,
  },
  {
    address: "0xea60cd69f2b9fd6eb067bddbbf86a5bdeffbbc55",
    symbol: "WECAN",
    decimals: 18,
  },
  {
    address: "0x1b073382e63411e3bcffe90ac1b9a43fefa1ec6f",
    symbol: "BEST",
    decimals: 8,
  },
  {
    address: "0x426fc8be95573230f6e6bc4af91873f0c67b21b4",
    symbol: "BPLC",
    decimals: 18,
  },
  {
    address: "0xbd89b8d708809e7022135313683663911826977e",
    symbol: "OME",
    decimals: 18,
  },
  {
    address: "0xed03ed872159e199065401b6d0d487d78d9464aa",
    symbol: "MXNT",
    decimals: 6,
  },
  {
    address: "0x23d7ff057c696fee679c60cef61fee6614218f04",
    symbol: "UNP",
    decimals: 18,
  },
  {
    address: "0xa52bffad02b1fe3f86a543a4e81962d3b3bb01a7",
    symbol: "DUCKER",
    decimals: 18,
  },
  {
    address: "0x6d57b2e05f26c26b549231c866bdd39779e4a488",
    symbol: "VNXAU",
    decimals: 18,
  },
  {
    address: "0xab2a7b5876d707e0126b3a75ef7781c77c8877ee",
    symbol: "QUAD",
    decimals: 18,
  },
  {
    address: "0x69cade383df52ec02562869da8aa146be08c5c3c",
    symbol: "VTRADING",
    decimals: 18,
  },
  {
    address: "0x1250b98cbde9f99f4c42dcdacee193221f17eb50",
    symbol: "AC",
    decimals: 18,
  },
  {
    address: "0x8a053350ca5f9352a16ded26ab333e2d251dad7c",
    symbol: "MMETH",
    decimals: 18,
  },
  {
    address: "0xfb7b4564402e5500db5bb6d63ae671302777c75a",
    symbol: "DEXT",
    decimals: 18,
  },
  {
    address: "0xfd2cf2202f049064865dc32c6cf81eeb34074b39",
    symbol: "DGH",
    decimals: 18,
  },
  {
    address: "0x6595b8fd9c920c81500dca94e53cdc712513fb1f",
    symbol: "OLY",
    decimals: 18,
  },
  {
    address: "0x473037de59cf9484632f4a27b509cfe8d4a31404",
    symbol: "GST-ETH",
    decimals: 8,
  },
  {
    address: "0xdc7d16b1e7c54f35a67af95d5a6eecaec27b2a62",
    symbol: "PULSE",
    decimals: 18,
  },
  {
    address: "0x3cb48aeb3d1abadc23d2d8a6894b3a68338381c2",
    symbol: "PALAI",
    decimals: 9,
  },
  {
    address: "0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6",
    symbol: "STG",
    decimals: 18,
  },
  {
    address: "0xd7f0cc50ad69408ae58be033f4f85d2367c2e468",
    symbol: "VERA",
    decimals: 18,
  },
  {
    address: "0x4ce4c025692b3142dbde1cd432ef55b9a8d18701",
    symbol: "DCNT",
    decimals: 9,
  },
  {
    address: "0xbf9e72eeb5adb8b558334c8672950b7a379d4266",
    symbol: "CUBT",
    decimals: 18,
  },
  {
    address: "0x8790f2fc7ca2e7db841307fb3f4e72a03baf7b47",
    symbol: "SPILLWAYS",
    decimals: 18,
  },
  {
    address: "0xec12ba5ac0f259e9ac6fc9a3bc23a76ad2fde5d9",
    symbol: "HUGE",
    decimals: 18,
  },
  {
    address: "0x70715e133f3b98af9dcb4897657cd4608d395d49",
    symbol: "NBT",
    decimals: 9,
  },
  {
    address: "0x2598c30330d5771ae9f983979209486ae26de875",
    symbol: "AI",
    decimals: 18,
  },
  {
    address: "0xd2aa35f6d376a9f1cc391db157e3eeb08819479c",
    symbol: "BRAIN",
    decimals: 18,
  },
  {
    address: "0x5d0ebc4ec5ac18d30512fb6287886245061b3dbd",
    symbol: "GATSBY",
    decimals: 9,
  },
  {
    address: "0xa16a609ff4e1a15b6ccb469e7a5dd14e89305283",
    symbol: "SPUME",
    decimals: 18,
  },
  {
    address: "0x879054273cb2dad631980fa4efe6d25eefe08aa4",
    symbol: "MSFRXETH",
    decimals: 18,
  },
  {
    address: "0x230f5ed78a45452f726365b8ad1d6866f5faa68f",
    symbol: "COF",
    decimals: 9,
  },
  {
    address: "0xe46a5e19b19711332e33f33c2db3ea143e86bc10",
    symbol: "MWBETH",
    decimals: 18,
  },
  {
    address: "0x416cdaf616a82d7dd46e0dbf36e7d6fe412bc40e",
    symbol: "LUNA",
    decimals: 18,
  },
  {
    address: "0xb3ad645db386d7f6d753b2b9c3f4b853da6890b8",
    symbol: "CTR",
    decimals: 18,
  },
  {
    address: "0x35b08722aa26be119c1608029ccbc976ac5c1082",
    symbol: "EM",
    decimals: 8,
  },
  {
    address: "0xc4c75f2a0cb1a9acc33929512dc9733ea1fd6fde",
    symbol: "MSI",
    decimals: 18,
  },
  {
    address: "0x3f382dbd960e3a9bbceae22651e88158d2791550",
    symbol: "GHST",
    decimals: 18,
  },
  {
    address: "0x6e109e9dd7fa1a58bc3eff667e8e41fc3cc07aef",
    symbol: "CNHT",
    decimals: 6,
  },
  {
    address: "0x727f064a78dc734d33eec18d5370aef32ffd46e4",
    symbol: "ORION",
    decimals: 18,
  },
  {
    address: "0xd5930c307d7395ff807f2921f12c5eb82131a789",
    symbol: "BOLT",
    decimals: 18,
  },
  {
    address: "0x6bea7cfef803d1e3d5f7c0103f7ded065644e197",
    symbol: "GAMMA",
    decimals: 18,
  },
  {
    address: "0x3b9be07d622accaed78f479bc0edabfd6397e320",
    symbol: "LSS",
    decimals: 18,
  },
  {
    address: "0x116c4b65e14449947bc6fa1bbe844cb16a162d53",
    symbol: "BMAX",
    decimals: 18,
  },
  {
    address: "0x2a3bff78b79a009976eea096a51a948a3dc00e34",
    symbol: "WILD",
    decimals: 18,
  },
  {
    address: "0xd4126f195a8de772eeffa61a4ab6dd43462f4e39",
    symbol: "HIKARI",
    decimals: 18,
  },
  {
    address: "0x171d76d931529384639bc9aad5b77b77041ed604",
    symbol: "MOTG",
    decimals: 18,
  },
  {
    address: "0x65e9ed59a6c03e97ae984b6c4ff912448ebd3566",
    symbol: "RYOSHI",
    decimals: 18,
  },
  {
    address: "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
    symbol: "NOW",
    decimals: 8,
  },
  {
    address: "0x6a6aa13393b7d1100c00a57c76c39e8b6c835041",
    symbol: "OPENAIERC",
    decimals: 9,
  },
  {
    address: "0x556d4f40982cb95e0714989e0c229c42be8b1499",
    symbol: "GLTM",
    decimals: 18,
  },
  {
    address: "0xfcc5c47be19d06bf83eb04298b026f81069ff65b",
    symbol: "YCRV",
    decimals: 18,
  },
  {
    address: "0xc97232527b62efb0d8ed38cf3ea103a6cca4037e",
    symbol: "LP-YCRV",
    decimals: 18,
  },
  {
    address: "0x53fd2342b43ecd24aef1535bc3797f509616ce8c",
    symbol: "ANARCHY",
    decimals: 9,
  },
  {
    address: "0x2a7cad775fd9c5c43f996a948660ffc21b4e628c",
    symbol: "DOP",
    decimals: 18,
  },
  {
    address: "0x8f1cece048cade6b8a05dfa2f90ee4025f4f2662",
    symbol: "GFOX",
    decimals: 18,
  },
  {
    address: "0x5283d291dbcf85356a21ba090e6db59121208b44",
    symbol: "BLUR",
    decimals: 18,
  },
  {
    address: "0x227c7df69d3ed1ae7574a1a7685fded90292eb48",
    symbol: "MILADY",
    decimals: 18,
  },
  {
    address: "0xb755506531786c8ac63b756bab1ac387bacb0c04",
    symbol: "ZARP",
    decimals: 18,
  },
  {
    address: "0xed1167b6dc64e8a366db86f2e952a482d0981ebd",
    symbol: "LBR",
    decimals: 18,
  },
  {
    address: "0xd2e5decc08a80be6538f89f9ab8ff296e2f724df",
    symbol: "STIMA",
    decimals: 6,
  },
  {
    address: "0x49c8efd98ac8114de2fce73d57e2944aebd5613d",
    symbol: "ATEC",
    decimals: 9,
  },
  {
    address: "0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05",
    symbol: "GEL",
    decimals: 18,
  },
  {
    address: "0x20e7125677311fca903a8897042b9983f22ea295",
    symbol: "FWT",
    decimals: 18,
  },
  {
    address: "0x798d1be841a82a273720ce31c822c61a67a601c3",
    symbol: "DIGG",
    decimals: 9,
  },
  {
    address: "0xbc194e6f748a222754c3e8b9946922c09e7d4e91",
    symbol: "LEV",
    decimals: 18,
  },
  {
    address: "0x22c158a3f3ea3419176c083aa11eb593e94965dc",
    symbol: "QTC",
    decimals: 18,
  },
  {
    address: "0x18aaa7115705e8be94bffebde57af9bfc265b998",
    symbol: "AUDIO",
    decimals: 18,
  },
  {
    address: "0x8fc17671d853341d9e8b001f5fc3c892d09cb53a",
    symbol: "BLOCK",
    decimals: 18,
  },
  {
    address: "0xda4dd9586d27202a338843dd6b9824d267006783",
    symbol: "ECT",
    decimals: 9,
  },
  {
    address: "0x513c3200f227ebb62e3b3d00b7a83779643a71cf",
    symbol: "LIFT",
    decimals: 18,
  },
  {
    address: "0x94025780a1ab58868d9b2dbbb775f44b32e8e6e5",
    symbol: "BETS",
    decimals: 18,
  },
  {
    address: "0xcae0dd4bda7ff3e700355c7629b24d5d728bd2ce",
    symbol: "BOWIE",
    decimals: 18,
  },
  {
    address: "0x68d009f251ff3a271477f77acb704c3b0f32a0c0",
    symbol: "CHAD",
    decimals: 18,
  },
  {
    address: "0x054f76beed60ab6dbeb23502178c52d6c5debe40",
    symbol: "FIN",
    decimals: 18,
  },
  {
    address: "0x758b4684be769e92eefea93f60dda0181ea303ec",
    symbol: "PHONON",
    decimals: 18,
  },
  {
    address: "0xcb69b067d9d8d6dd1209fe4557c43586e54f9045",
    symbol: "PSM",
    decimals: 18,
  },
  {
    address: "0xa57ed6e54be8125bbe45d6ca330e45ebb71ef11e",
    symbol: "PEPE",
    decimals: 18,
  },
  {
    address: "0x8888801af4d980682e47f1a9036e589479e835c5",
    symbol: "MPH",
    decimals: 18,
  },
  {
    address: "0x92e187a03b6cd19cb6af293ba17f2745fd2357d5",
    symbol: "DUCK",
    decimals: 18,
  },
  {
    address: "0x1045f5ccb01daea4f8eab055f5fcbb7c0e7c89f0",
    symbol: "DFIAT",
    decimals: 18,
  },
  {
    address: "0x1bfce574deff725a3f483c334b790e25c8fa9779",
    symbol: "CETI",
    decimals: 18,
  },
  {
    address: "0x171120219d3223e008558654ec3254a0f206edb2",
    symbol: "XX",
    decimals: 9,
  },
  {
    address: "0xaa2d8c9a8bd0f7945143bfd509be3ff23dd78918",
    symbol: "ATNT",
    decimals: 3,
  },
  {
    address: "0xc719d010b63e5bbf2c0551872cd5316ed26acd83",
    symbol: "DIP",
    decimals: 18,
  },
  {
    address: "0x9a7703338730b82a803ba050df55f9b3959f3fb2",
    symbol: "CHIKUN",
    decimals: 9,
  },
  {
    address: "0x30dcba0405004cf124045793e1933c798af9e66a",
    symbol: "YDF",
    decimals: 18,
  },
  {
    address: "0x3f5dd1a1538a4f9f82e543098f01f22480b0a3a8",
    symbol: "DKUMA",
    decimals: 18,
  },
  {
    address: "0x52662717e448be36cb54588499d5a8328bd95292",
    symbol: "TENSHI",
    decimals: 18,
  },
  {
    address: "0x382e57ca8e4c4db9649884ca77b0a355692d14ac",
    symbol: "XYXYX",
    decimals: 18,
  },
  {
    address: "0x8052327f1baf94a9dc8b26b9100f211ee3774f54",
    symbol: "ATD",
    decimals: 18,
  },
  {
    address: "0xbd04ccc050058a6a422851fa6c0f92bb65eb06ca",
    symbol: "PRTG",
    decimals: 18,
  },
  {
    address: "0xa79aceef0a240d651948fbecfa38966ad18b446d",
    symbol: "SEDGE",
    decimals: 18,
  },
  {
    address: "0x6a445e9f40e0b97c92d0b8a3366cef1d67f700bf",
    symbol: "FIDU",
    decimals: 18,
  },
  {
    address: "0x94b2d91aa89ba30f2e080205c14e83fcdee310dd",
    symbol: "WEPC",
    decimals: 18,
  },
  {
    address: "0xb9d7dddca9a4ac480991865efef82e01273f79c3",
    symbol: "BLUSD",
    decimals: 18,
  },
  {
    address: "0xd291e7a03283640fdc51b121ac401383a46cc623",
    symbol: "RGT",
    decimals: 18,
  },
  {
    address: "0xa41f142b6eb2b164f8164cae0716892ce02f311f",
    symbol: "AVG",
    decimals: 18,
  },
  {
    address: "0x954a75564cb355ea2d6fccc6c1212fd01fdcb06f",
    symbol: "LOONG",
    decimals: 18,
  },
  {
    address: "0xaaef88cea01475125522e117bfe45cf32044e238",
    symbol: "GF",
    decimals: 18,
  },
  {
    address: "0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54",
    symbol: "HAPI",
    decimals: 18,
  },
  {
    address: "0x75e88b8c2d34a52a6d36deada664d7dc9116e4ef",
    symbol: "ZRS",
    decimals: 18,
  },
  {
    address: "0x73a83269b9bbafc427e76be0a2c1a1db2a26f4c2",
    symbol: "0NE",
    decimals: 18,
  },
  {
    address: "0xef19f4e48830093ce5bc8b3ff7f903a0ae3e9fa1",
    symbol: "BOTX",
    decimals: 18,
  },
  {
    address: "0x050d94685c6b0477e1fc555888af6e2bb8dfbda5",
    symbol: "INU",
    decimals: 18,
  },
  {
    address: "0x03be5c903c727ee2c8c4e9bc0acc860cca4715e2",
    symbol: "CAPS",
    decimals: 18,
  },
  {
    address: "0x678e840c640f619e17848045d23072844224dd37",
    symbol: "CRTS",
    decimals: 18,
  },
  {
    address: "0x6dca182ac5e3f99985bc4ee0f726d6472ab1ec55",
    symbol: "USHI",
    decimals: 18,
  },
  {
    address: "0xaa95f26e30001251fb905d264aa7b00ee9df6c18",
    symbol: "KENDU",
    decimals: 18,
  },
  {
    address: "0x846e57af29fd21391919318a044191b8725822c2",
    symbol: "ETHARDIO",
    decimals: 9,
  },
  {
    address: "0xca30c93b02514f86d5c86a6e375e3a330b435fb5",
    symbol: "BIB01",
    decimals: 18,
  },
  {
    address: "0x3c4008eca800ec1283e4cf500e68d06bfabc00a8",
    symbol: "HAO",
    decimals: 18,
  },
  {
    address: "0x0cba60ca5ef4d42f92a5070a8fedd13be93e2861",
    symbol: "THE",
    decimals: 18,
  },
  {
    address: "0xf12ccd17759367cf139776710b47b00c43d1ac2b",
    symbol: "EMOJI",
    decimals: 9,
  },
  {
    address: "0x992d339532a9c42f1b0e59a57e95f38da38c66f6",
    symbol: "SOUL",
    decimals: 18,
  },
  {
    address: "0x205ed31c867bf715e4182137af95afe9177cd8e7",
    symbol: "DEFY",
    decimals: 18,
  },
  {
    address: "0x244517dc59943e8cdfbd424bdb3262c5f04a1387",
    symbol: "FDAI",
    decimals: 6,
  },
  {
    address: "0x06576eb3b212d605b797dc15523d9dc9f4f66db4",
    symbol: "TCP",
    decimals: 18,
  },
  {
    address: "0x3be7bf1a5f23bd8336787d0289b70602f1940875",
    symbol: "VIDT",
    decimals: 18,
  },
  {
    address: "0x68e2e5c9dff32419a108713f83274a4fb5e194ca",
    symbol: "GLS",
    decimals: 18,
  },
  {
    address: "0xbd1848e1491d4308ad18287a745dd4db2a4bd55b",
    symbol: "MOMA",
    decimals: 18,
  },
  {
    address: "0xbea269038eb75bdab47a9c04d0f5c572d94b93d5",
    symbol: "WFIO",
    decimals: 9,
  },
  {
    address: "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b",
    symbol: "RLY",
    decimals: 18,
  },
  {
    address: "0x77f9cf0bd8c500cffdf420e72343893aecc2ec0b",
    symbol: "LAIKA",
    decimals: 18,
  },
  {
    address: "0xdd2a36ae937bc134ea694d77fc7e2e36f5d86de0",
    symbol: "WELD",
    decimals: 18,
  },
  {
    address: "0x4d5f47fa6a74757f35c14fd3a6ef8e3c9bc514e8",
    symbol: "AWETH",
    decimals: 18,
  },
  {
    address: "0x426aedbed16726e3f220cb4fed4d4060b95cca46",
    symbol: "BAHAMAS",
    decimals: 18,
  },
  {
    address: "0x5ee5bf7ae06d1be5997a1a72006fe6c607ec6de8",
    symbol: "AWBTC",
    decimals: 8,
  },
  {
    address: "0x8eb94a06b4716093dbfe335cbdb098deb2dcde1b",
    symbol: "SHIB05",
    decimals: 18,
  },
  {
    address: "0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4",
    symbol: "VAL",
    decimals: 18,
  },
  {
    address: "0xc744df3419a8c9bd4d6b9852a503eb1c5308a326",
    symbol: "RED",
    decimals: 18,
  },
  {
    address: "0xe5a3229ccb22b6484594973a03a3851dcd948756",
    symbol: "RAE",
    decimals: 18,
  },
  {
    address: "0xaa0c5b3567fd1bac8a2a11eb16c3f81a49eea90f",
    symbol: "MMAI",
    decimals: 7,
  },
  {
    address: "0xe9f84d418b008888a992ff8c6d22389c2c3504e0",
    symbol: "BASE",
    decimals: 8,
  },
  {
    address: "0xf55cd1e399e1cc3d95303048897a680be3313308",
    symbol: "TRIO",
    decimals: 8,
  },
  {
    address: "0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f",
    symbol: "TYPE",
    decimals: 4,
  },
  {
    address: "0x64b78325d7495d6d4be92f234fa3f3b8d8964b8b",
    symbol: "SHOP",
    decimals: 18,
  },
  {
    address: "0x0b319db00d07c8fadfaaef13c910141a5da0aa8f",
    symbol: "FTUSD",
    decimals: 18,
  },
  {
    address: "0x6b0956258ff7bd7645aa35369b55b61b8e6d6140",
    symbol: "LUCKY",
    decimals: 8,
  },
  {
    address: "0x777172d858dc1599914a1c4c6c9fc48c99a60990",
    symbol: "SOLID",
    decimals: 18,
  },
  {
    address: "0xbe92b510007bd3ec0adb3d1fca338dd631e98de7",
    symbol: "DEGEN",
    decimals: 18,
  },
  {
    address: "0x291aa47c58558adfc2bcd6f060578fdae1f6570c",
    symbol: "MBASE",
    decimals: 18,
  },
  {
    address: "0x5891599664ed15c6e88041b4f5bc08594f026f0e",
    symbol: "JPGC",
    decimals: 18,
  },
  {
    address: "0x3f817b28da4940f018c6b5c0a11c555ebb1264f9",
    symbol: "A3A",
    decimals: 18,
  },
  {
    address: "0x23b586c0e79fb291ccb0244d468847eae9bb90f6",
    symbol: "R4RE",
    decimals: 18,
  },
  {
    address: "0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b",
    symbol: "NXM",
    decimals: 18,
  },
  {
    address: "0xba93ef534094f8b7001ece2691168140965341ab",
    symbol: "LOTT",
    decimals: 18,
  },
  {
    address: "0x095797fd4297fb79883cc912a5ba6313b15c445d",
    symbol: "GOLC",
    decimals: 18,
  },
  {
    address: "0x1202f5c7b4b9e47a1a484e8b270be34dbbc75055",
    symbol: "WSTUSR",
    decimals: 18,
  },
  {
    address: "0x63898b3b6ef3d39332082178656e9862bee45c57",
    symbol: "XOGN",
    decimals: 18,
  },
  {
    address: "0x3a781d792ca81b52363f91b1f251f94a8eba4b4b",
    symbol: "POWERAI",
    decimals: 18,
  },
  {
    address: "0x3ddebf2ead6325b1923ba5ff8fd239325c70e9a2",
    symbol: "BRAIN",
    decimals: 9,
  },
  {
    address: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    symbol: "REQ",
    decimals: 18,
  },
  {
    address: "0x238cefec182679c27a3035713416fa0a8198b302",
    symbol: "GMEME",
    decimals: 18,
  },
  {
    address: "0x4bdcb66b968060d9390c1d12bd29734496205581",
    symbol: "ACQ",
    decimals: 18,
  },
  {
    address: "0xe2ba8693ce7474900a045757fe0efca900f6530b",
    symbol: "FDAI",
    decimals: 8,
  },
  {
    address: "0x39903a1a6f289a67e0de94096915c4ccd506ab2a",
    symbol: "MAIV",
    decimals: 18,
  },
  {
    address: "0x8526be2379e853d5cf02f9823bb9690e1a6ff9e2",
    symbol: "HABIBI",
    decimals: 18,
  },
  {
    address: "0x6b32022693210cd2cfc466b9ac0085de8fc34ea6",
    symbol: "DECI",
    decimals: 8,
  },
  {
    address: "0x0c90c57aaf95a3a87eadda6ec3974c99d786511f",
    symbol: "HAN",
    decimals: 18,
  },
  {
    address: "0xc5bcc8ba3f33ab0d64f3473e861bdc0685b19ef5",
    symbol: "MECHA",
    decimals: 18,
  },
  {
    address: "0xa49d7499271ae71cd8ab9ac515e6694c755d400c",
    symbol: "MUTE",
    decimals: 18,
  },
  {
    address: "0xd433138d12beb9929ff6fd583dc83663eea6aaa5",
    symbol: "BTR",
    decimals: 18,
  },
  {
    address: "0xdc349913d53b446485e98b76800b6254f43df695",
    symbol: "BEZOGE",
    decimals: 9,
  },
  {
    address: "0xe453c3409f8ad2b1fe1ed08e189634d359705a5b",
    symbol: "DGI",
    decimals: 18,
  },
  {
    address: "0xf9d4daae1300cff251979722c4a3c45857973079",
    symbol: "CASTLE",
    decimals: 18,
  },
  {
    address: "0xf86cfce1e746456135d7face48c2916d7d3cb676",
    symbol: "EFT",
    decimals: 18,
  },
  {
    address: "0x579cea1889991f68acc35ff5c3dd0621ff29b0c9",
    symbol: "IQ",
    decimals: 18,
  },
  {
    address: "0x1bf7fd22709733ccd7c45ab27dd02c7ec8e50078",
    symbol: "QTCON",
    decimals: 18,
  },
  {
    address: "0x7f280dac515121dcda3eac69eb4c13a52392cace",
    symbol: "FNC",
    decimals: 18,
  },
  {
    address: "0x36f8d0d0573ae92326827c4a82fe4ce4c244cab6",
    symbol: "MADAI",
    decimals: 18,
  },
  {
    address: "0x712bd4beb54c6b958267d9db0259abdbb0bff606",
    symbol: "UDS",
    decimals: 18,
  },
  {
    address: "0x921d07059cb0640997251b577735a1bef90c408f",
    symbol: "FOMO",
    decimals: 9,
  },
  {
    address: "0x2d869ae129e308f94cc47e66eaefb448cee0d03e",
    symbol: "ORAIX",
    decimals: 18,
  },
  {
    address: "0x1ce270557c1f68cfb577b856766310bf8b47fd9c",
    symbol: "MONG",
    decimals: 18,
  },
  {
    address: "0xb8b295df2cd735b15be5eb419517aa626fc43cd5",
    symbol: "STLINK",
    decimals: 18,
  },
  {
    address: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
    symbol: "NMR",
    decimals: 18,
  },
  {
    address: "0x40986a85b4cfcdb054a6cbfb1210194fee51af88",
    symbol: "UFARM",
    decimals: 18,
  },
  {
    address: "0x6923f9b683111dcc0e20124e9a031deeae5dad93",
    symbol: "HUB",
    decimals: 18,
  },
  {
    address: "0x8971f9fd7196e5cee2c1032b50f656855af7dd26",
    symbol: "LAMB",
    decimals: 18,
  },
  {
    address: "0xa02120696c7b8fe16c09c749e4598819b2b0e915",
    symbol: "WXT",
    decimals: 18,
  },
  {
    address: "0x8c088775e4139af116ac1fa6f281bbf71e8c1c73",
    symbol: "PUMLX",
    decimals: 18,
  },
  {
    address: "0x7105e64bf67eca3ae9b123f0e5ca2b83b2ef2da0",
    symbol: "X7DAO",
    decimals: 18,
  },
  {
    address: "0x70008f18fc58928dce982b0a69c2c21ff80dca54",
    symbol: "X7R",
    decimals: 18,
  },
  {
    address: "0x26869045311fc5e5353eadcfa654cd47ddc20356",
    symbol: "QTDAO",
    decimals: 18,
  },
  {
    address: "0xa5269a8e31b93ff27b887b56720a25f844db0529",
    symbol: "MAUSDC",
    decimals: 18,
  },
  {
    address: "0x07f9702ce093db82dfdc92c2c6e578d6ea8d5e22",
    symbol: "OBT",
    decimals: 18,
  },
  {
    address: "0xb15a5aab2a65745314fcd0d7f5080bfa65bd7c03",
    symbol: "TUPELO",
    decimals: 9,
  },
  {
    address: "0x1376a81fe3ee7d0e431f1ac24286b00f3ccf44e7",
    symbol: "WELLE",
    decimals: 18,
  },
  {
    address: "0xfa3e941d1f6b7b10ed84a0c211bfa8aee907965e",
    symbol: "HAY",
    decimals: 18,
  },
  {
    address: "0x72953a5c32413614d24c29c84a66ae4b59581bbf",
    symbol: "CLEV",
    decimals: 18,
  },
  {
    address: "0x2e516ba5bf3b7ee47fb99b09eadb60bde80a82e0",
    symbol: "EGGS",
    decimals: 18,
  },
  {
    address: "0xbeefc011e94f43b8b7b455ebab290c7ab4e216f1",
    symbol: "CSUSDL",
    decimals: 18,
  },
  {
    address: "0x892a6f9df0147e5f079b0993f486f9aca3c87881",
    symbol: "XFUND",
    decimals: 9,
  },
  {
    address: "0x881ba05de1e78f549cc63a8f6cabb1d4ad32250d",
    symbol: "00",
    decimals: 18,
  },
  {
    address: "0xca9b8d6df0729d85dcfc8ef8bb18af1ad1990786",
    symbol: "CATBOY",
    decimals: 18,
  },
  {
    address: "0xb4357054c3da8d46ed642383f03139ac7f090343",
    symbol: "PORT3",
    decimals: 18,
  },
  {
    address: "0x7cc97bf17c5adabe25f9d19d15a1ec8a1ad65f14",
    symbol: "WOLVERINU",
    decimals: 18,
  },
  {
    address: "0xfa93660c3f6a848556bb8e265f994160a1f2b289",
    symbol: "CBT",
    decimals: 18,
  },
  {
    address: "0x2e3cfe45e3ee7c017277f22e35d2f29edc99d570",
    symbol: "WDAG",
    decimals: 8,
  },
  {
    address: "0x42dbbd5ae373fea2fc320f62d44c058522bb3758",
    symbol: "MEM",
    decimals: 18,
  },
  {
    address: "0xe9514a6eba63a0bbbe2faea919e773ebe0f527c1",
    symbol: "KEK",
    decimals: 18,
  },
  {
    address: "0x470ebf5f030ed85fc1ed4c2d36b9dd02e77cf1b7",
    symbol: "TEMPLE",
    decimals: 18,
  },
  {
    address: "0x23a2164d482fd2fec9c2d0b66528d42fee7b8817",
    symbol: "METAMEME",
    decimals: 9,
  },
  {
    address: "0xd61a8bbd5c6d8cd9690a89616b33dc939c9fbda9",
    symbol: "SOLO",
    decimals: 18,
  },
  {
    address: "0x42dae489f1ca3764aabe1907c22bc18776415fcd",
    symbol: "VCT",
    decimals: 18,
  },
  {
    address: "0x109548dc14c0b8d7908a168202a4ab08bb449613",
    symbol: "CBY",
    decimals: 18,
  },
  {
    address: "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
    symbol: "DOV",
    decimals: 18,
  },
  {
    address: "0x850aab69f0e0171a9a49db8be3e71351c8247df4",
    symbol: "KONO",
    decimals: 18,
  },
  {
    address: "0xa0ed3c520dc0632657ad2eaaf19e26c4fd431a84",
    symbol: "HPO",
    decimals: 18,
  },
  {
    address: "0x2b1d36f5b61addaf7da7ebbd11b35fd8cfb0de31",
    symbol: "ITP",
    decimals: 18,
  },
  {
    address: "0xcf4c68db4c2fa0bf58df07b14f45ce7709a716ac",
    symbol: "SHIELD",
    decimals: 18,
  },
  {
    address: "0xfc4b4ec763722b71eb1d729749b447a9645f5f30",
    symbol: "GME",
    decimals: 9,
  },
  {
    address: "0xa1d0e215a23d7030842fc67ce582a6afa3ccab83",
    symbol: "YFII",
    decimals: 18,
  },
  {
    address: "0x63230728bc219d991d2995ce92e96c16fcf8beb6",
    symbol: "KCT",
    decimals: 18,
  },
  {
    address: "0x49642110b712c1fd7261bc074105e9e44676c68f",
    symbol: "DINO",
    decimals: 18,
  },
  {
    address: "0xbf5badfae2d219943dcd9652d1ce65960b8a1e0c",
    symbol: "EARTH",
    decimals: 18,
  },
  {
    address: "0x5e8422345238f34275888049021821e8e08caa1f",
    symbol: "FRXETH",
    decimals: 18,
  },
  {
    address: "0x7495e5cc8f27e0bd5bd4cb86d17f0d841ca58ee4",
    symbol: "ARNC",
    decimals: 18,
  },
  {
    address: "0xf98ab0874b13a7fdc39d7295dedd49850a5d426b",
    symbol: "KIRA",
    decimals: 8,
  },
  {
    address: "0xac3e018457b222d93114458476f3e3416abbe38f",
    symbol: "SFRXETH",
    decimals: 18,
  },
  {
    address: "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86",
    symbol: "OUSD",
    decimals: 18,
  },
  {
    address: "0x1c91d9482c4802315e617267bb3ef50c0aa15c41",
    symbol: "SDUSD",
    decimals: 18,
  },
  {
    address: "0xe7ef051c6ea1026a70967e8f04da143c67fa4e1f",
    symbol: "VETME",
    decimals: 9,
  },
  {
    address: "0x96362879529c15c484eabc861c435940e7af22bb",
    symbol: "RPGMAI",
    decimals: 18,
  },
  {
    address: "0x5cb3ce6d081fb00d5f6677d196f2d70010ea3f4a",
    symbol: "BUSY",
    decimals: 18,
  },
  {
    address: "0xf7e945fce8f19302aacc7e1418b0a0bdef89327b",
    symbol: "IZE",
    decimals: 8,
  },
  {
    address: "0xb1191f691a355b43542bea9b8847bc73e7abb137",
    symbol: "KIRO",
    decimals: 18,
  },
  {
    address: "0xba58444c8050ed9385b7417533a73644036d21eb",
    symbol: "LOGT",
    decimals: 18,
  },
  {
    address: "0x44aad22afbb2606d7828ca1f8f9e5af00e779ae1",
    symbol: "SIMPSON",
    decimals: 9,
  },
  {
    address: "0x599955aa9fbc197a1b717d8da6a7012cafe70ab3",
    symbol: "BOPE",
    decimals: 9,
  },
  {
    address: "0x8e0eef788350f40255d86dfe8d91ec0ad3a4547f",
    symbol: "COR",
    decimals: 18,
  },
  {
    address: "0x8aec4bbdcfb451aa289bfbd3c2f4e34a44ada1be",
    symbol: "DOGWIFHAT",
    decimals: 9,
  },
  {
    address: "0xce391315b414d4c7555956120461d21808a69f3a",
    symbol: "BAO",
    decimals: 18,
  },
  {
    address: "0x2c5bc2ba3614fd27fcc7022ea71d9172e2632c16",
    symbol: "SOV",
    decimals: 18,
  },
  {
    address: "0x3496b523e5c00a4b4150d6721320cddb234c3079",
    symbol: "NUM",
    decimals: 18,
  },
  {
    address: "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78",
    symbol: "ZCN",
    decimals: 10,
  },
  {
    address: "0x6d52dfefb16bb9cdc78bfca09061e44574886626",
    symbol: "CPU",
    decimals: 18,
  },
  {
    address: "0x3f80b1c54ae920be41a77f8b902259d48cf24ccf",
    symbol: "KERNEL",
    decimals: 18,
  },
  {
    address: "0x35ec69a77b79c255e5d47d5a3bdbefefe342630c",
    symbol: "YNLSDE",
    decimals: 18,
  },
  {
    address: "0x08f40811c7d6c013744166f3d4cb1a9a92d3d54e",
    symbol: "NVG",
    decimals: 18,
  },
  {
    address: "0x53229609f907be495704fca99ad0835c5f3abd3a",
    symbol: "RINTARO",
    decimals: 9,
  },
  {
    address: "0xfc1c93a2507975e98b9d0e9260ded61a00152bf1",
    symbol: "NAVI",
    decimals: 18,
  },
  {
    address: "0x4955f6641bf9c8c163604c321f4b36e988698f75",
    symbol: "DOGECAST",
    decimals: 9,
  },
  {
    address: "0x4b6d20acfc764ef6b60f0339e7cbad83284e7d6e",
    symbol: "YBTC",
    decimals: 8,
  },
  {
    address: "0x9afa9999e45484adf5d8eed8d9dfe0693bacd838",
    symbol: "EVERY",
    decimals: 18,
  },
  {
    address: "0x571042b7138ee957a96a6820fce79c48fe2da816",
    symbol: "ESLBR",
    decimals: 18,
  },
  {
    address: "0xa95c5ebb86e0de73b4fb8c47a45b792cfea28c23",
    symbol: "SDL",
    decimals: 18,
  },
  {
    address: "0xe9fa21e671bcfb04e6868784b89c19d5aa2424ea",
    symbol: "ECTE",
    decimals: 18,
  },
  {
    address: "0x2d9d7c64f6c00e16c28595ec4ebe4065ef3a250b",
    symbol: "GFY",
    decimals: 9,
  },
  {
    address: "0x88a9a52f944315d5b4e917b9689e65445c401e83",
    symbol: "FEAR",
    decimals: 18,
  },
  {
    address: "0x590246bfbf89b113d8ac36faeea12b7589f7fe5b",
    symbol: "FLAPPY",
    decimals: 9,
  },
  {
    address: "0x61b34a012646cd7357f58ee9c0160c6d0021fa41",
    symbol: "ELO",
    decimals: 18,
  },
  {
    address: "0x0af0e83d064f160376303ac67dd9a7971af88d4c",
    symbol: "MESLBR",
    decimals: 18,
  },
  {
    address: "0x6d60a8dfb16d09f67d46fcd36a0cd310078257ca",
    symbol: "CIX",
    decimals: 18,
  },
  {
    address: "0x04c17b9d3b29a78f7bd062a57cf44fc633e71f85",
    symbol: "IMPT",
    decimals: 18,
  },
  {
    address: "0xe1d7c7a4596b038ced2a84bf65b8647271c53208",
    symbol: "NFTY",
    decimals: 18,
  },
  {
    address: "0x8260328d0c405d9ca061d80199102ddc9089e43c",
    symbol: "DOJO",
    decimals: 9,
  },
  {
    address: "0xa0ef786bf476fe0810408caba05e536ac800ff86",
    symbol: "MYRIA",
    decimals: 18,
  },
  {
    address: "0x74e9fee3fcb56bccac22e726cce7a78ca90185e1",
    symbol: "RIZO",
    decimals: 18,
  },
  {
    address: "0xf17a3fe536f8f7847f1385ec1bc967b2ca9cae8d",
    symbol: "AMKT",
    decimals: 18,
  },
  {
    address: "0x792833b894775bd769b3c602ba7172e59a83ab3f",
    symbol: "TOONS",
    decimals: 18,
  },
  {
    address: "0x67f4c72a50f8df6487720261e188f2abe83f57d7",
    symbol: "WPOKT",
    decimals: 6,
  },
  {
    address: "0x428dc22668e6f3468273634067e5545ed5417a3e",
    symbol: "MQL",
    decimals: 18,
  },
  {
    address: "0x5eed99d066a8caf10f3e4327c1b3d8b673485eed",
    symbol: "SEED",
    decimals: 18,
  },
  {
    address: "0x68037790a0229e9ce6eaa8a99ea92964106c4703",
    symbol: "PAR",
    decimals: 18,
  },
  {
    address: "0x049715c70fdbdd2be4814f76a53dc3d6f4367756",
    symbol: "NEZUKO",
    decimals: 18,
  },
  {
    address: "0x240d6faf8c3b1a7394e371792a3bf9d28dd65515",
    symbol: "BRETT",
    decimals: 9,
  },
  {
    address: "0x2ba592f78db6436527729929aaf6c908497cb200",
    symbol: "CREAM",
    decimals: 18,
  },
  {
    address: "0x3001f57f8308b189eb412a64322aad5ef9951290",
    symbol: "GEC",
    decimals: 18,
  },
  {
    address: "0xfd09911130e6930bf87f2b0554c44f400bd80d3e",
    symbol: "ETHIX",
    decimals: 18,
  },
  {
    address: "0x2d787d4f5005bd66ac910c2e821241625c406ed5",
    symbol: "BERRY",
    decimals: 18,
  },
  {
    address: "0x9469d013805bffb7d3debe5e7839237e535ec483",
    symbol: "RING",
    decimals: 18,
  },
  {
    address: "0xdf4ef6ee483953fe3b84abd08c6a060445c01170",
    symbol: "WACME",
    decimals: 8,
  },
  {
    address: "0x42bbfa2e77757c645eeaad1655e0911a7553efbc",
    symbol: "BOBA",
    decimals: 18,
  },
  {
    address: "0x4591dbff62656e7859afe5e45f6f47d3669fbb28",
    symbol: "MKUSD",
    decimals: 18,
  },
  {
    address: "0x46cca329970b33e1a007dd4ef0594a1cedb3e72a",
    symbol: "YESP",
    decimals: 18,
  },
  {
    address: "0x5ee84583f67d5ecea5420dbb42b462896e7f8d06",
    symbol: "PLSB",
    decimals: 12,
  },
  {
    address: "0x341c05c0e9b33c0e38d64de76516b2ce970bb3be",
    symbol: "DSETH",
    decimals: 18,
  },
  {
    address: "0x93eeb426782bd88fcd4b48d7b0368cf061044928",
    symbol: "TRG",
    decimals: 18,
  },
  {
    address: "0x41545f8b9472d758bb669ed8eaeeecd7a9c4ec29",
    symbol: "FORT",
    decimals: 18,
  },
  {
    address: "0xe7eaec9bca79d537539c00c58ae93117fb7280b9",
    symbol: "DOGEP",
    decimals: 18,
  },
  {
    address: "0xf4b5470523ccd314c6b9da041076e7d79e0df267",
    symbol: "BBANK",
    decimals: 18,
  },
  {
    address: "0x544f7ba526dc4e835f674c585a478c142dd8cca1",
    symbol: "SFAI",
    decimals: 9,
  },
  {
    address: "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
    symbol: "WNXM",
    decimals: 18,
  },
  {
    address: "0x147faf8de9d8d8daae129b187f0d02d819126750",
    symbol: "GEO",
    decimals: 18,
  },
  {
    address: "0xc76d53f988820fe70e01eccb0248b312c2f1c7ca",
    symbol: "INU",
    decimals: 18,
  },
  {
    address: "0xcfcffe432a48db53f59c301422d2edd77b2a88d7",
    symbol: "TEXAN",
    decimals: 18,
  },
  {
    address: "0x4385328cc4d643ca98dfea734360c0f596c83449",
    symbol: "TOMI",
    decimals: 18,
  },
  {
    address: "0x8ef32a03784c8fd63bbf027251b9620865bd54b6",
    symbol: "BULLET",
    decimals: 8,
  },
  {
    address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
    symbol: "GTC",
    decimals: 18,
  },
  {
    address: "0x94d40b49f020bfebba1a80a0191eb3737b90e8d3",
    symbol: "MNTE",
    decimals: 18,
  },
  {
    address: "0xfb0489e9753b045ddb35e39c6b0cc02ec6b99ac5",
    symbol: "AGG",
    decimals: 18,
  },
  {
    address: "0xd9788f3931ede4d5018184e198699dc6d66c1915",
    symbol: "YVAAVE",
    decimals: 18,
  },
  {
    address: "0x4a3fe75762017db0ed73a71c9a06db7768db5e66",
    symbol: "YVCOMP",
    decimals: 18,
  },
  {
    address: "0xdb25ca703181e7484a155dd612b06f57e12be5f0",
    symbol: "YVYFI",
    decimals: 18,
  },
  {
    address: "0xf32aa187d5bc16a2c02a6afb7df1459d0d107574",
    symbol: "INU",
    decimals: 18,
  },
  {
    address: "0x27b5739e22ad9033bcbf192059122d163b60349d",
    symbol: "ST-YCRV",
    decimals: 18,
  },
  {
    address: "0xf6ccfd6ef2850e84b73adeace9a075526c5910d4",
    symbol: "RUNIX",
    decimals: 18,
  },
  {
    address: "0x39142c18b6db2a8a41b7018f49e1478837560cad",
    symbol: "STATS",
    decimals: 9,
  },
  {
    address: "0xa354f35829ae975e850e23e9615b11da1b3dc4de",
    symbol: "YVUSDC",
    decimals: 6,
  },
  {
    address: "0x3b27f92c0e212c671ea351827edf93db27cc0c65",
    symbol: "YVUSDT",
    decimals: 6,
  },
  {
    address: "0xfbeb78a723b8087fd2ea7ef1afec93d35e8bed42",
    symbol: "YVUNI",
    decimals: 18,
  },
  {
    address: "0x00000000051b48047be6dc0ada6de5c3de86a588",
    symbol: "BABYSHIB",
    decimals: 18,
  },
  {
    address: "0xbe00734799a67a62af2819825580318ac1b1e4ec",
    symbol: "ORD",
    decimals: 18,
  },
  {
    address: "0xab85fc558d722a2b7c040ffb77db676bd9e7d322",
    symbol: "MOROS",
    decimals: 18,
  },
  {
    address: "0x42b91f1d05afea671a2da3c780eda2abf0a2a366",
    symbol: "MNB",
    decimals: 18,
  },
  {
    address: "0xeeb4d8400aeefafc1b2953e0094134a887c76bd8",
    symbol: "AVAIL",
    decimals: 18,
  },
  {
    address: "0x17c50d62e6e8d20d2dc18e9ad79c43263d0720d9",
    symbol: "NFAI",
    decimals: 18,
  },
  {
    address: "0x6bc08509b36a98e829dffad49fde5e412645d0a3",
    symbol: "WOOF",
    decimals: 18,
  },
  {
    address: "0x1981e32c2154936741ab6541a737b87c68f13ce1",
    symbol: "DAII",
    decimals: 18,
  },
  {
    address: "0x7138eb0d563f3f6722500936a11dcae99d738a2c",
    symbol: "LIF3",
    decimals: 18,
  },
  {
    address: "0x6f3277ad0782a7da3eb676b85a8346a100bf9c1c",
    symbol: "DOGPAD",
    decimals: 18,
  },
  {
    address: "0x1e4746dc744503b53b4a082cb3607b169a289090",
    symbol: "IPOR",
    decimals: 18,
  },
  {
    address: "0x97872eafd79940c7b24f7bcc1eadb1457347adc9",
    symbol: "STRP",
    decimals: 18,
  },
  {
    address: "0x7a786dac1f315c8a0e9962172ad8ae0c04d9c9b6",
    symbol: "MEMD",
    decimals: 18,
  },
  {
    address: "0x24ae2da0f361aa4be46b48eb19c91e02c5e4f27e",
    symbol: "MEVETH",
    decimals: 18,
  },
  {
    address: "0x467719ad09025fcc6cf6f8311755809d45a5e5f3",
    symbol: "AXL",
    decimals: 6,
  },
  {
    address: "0x046bad07658f3b6cad9a396cfcbc1243af452ec1",
    symbol: "AL",
    decimals: 18,
  },
  {
    address: "0x2a304fda5a85182dca1d03741bb2f07881b9e095",
    symbol: "DCO",
    decimals: 8,
  },
  {
    address: "0x674c6ad92fd080e4004b2312b45f796a192d27a0",
    symbol: "XTN",
    decimals: 18,
  },
  {
    address: "0x820802fa8a99901f52e39acd21177b0be6ee2974",
    symbol: "EUROE",
    decimals: 6,
  },
  {
    address: "0x235c8ee913d93c68d2902a8e0b5a643755705726",
    symbol: "BAG",
    decimals: 18,
  },
  {
    address: "0xc740181345c65552333e1edc797e03f11852b1c8",
    symbol: "KNTO",
    decimals: 18,
  },
  {
    address: "0xecbee2fae67709f718426ddc3bf770b26b95ed20",
    symbol: "CLIPS",
    decimals: 18,
  },
  {
    address: "0xcb50350ab555ed5d56265e096288536e8cac41eb",
    symbol: "COCO",
    decimals: 18,
  },
  {
    address: "0x9b110fda4e20db18ad7052f8468a455de7449eb6",
    symbol: "RIA",
    decimals: 18,
  },
  {
    address: "0x562e362876c8aee4744fc2c6aac8394c312d215d",
    symbol: "OPTI",
    decimals: 9,
  },
  {
    address: "0x043312456f73d8014d9b84f4337de54995cd2a5b",
    symbol: "BONK20",
    decimals: 9,
  },
  {
    address: "0xb870679a7fa65b924026f496de7f27c1dd0e5c5f",
    symbol: "PET",
    decimals: 18,
  },
  {
    address: "0x7e5981c2e072f53a0323d3d80baca3e31fb1550c",
    symbol: "JOVJOU",
    decimals: 18,
  },
  {
    address: "0x06b884e60794ce02aafab13791b59a2e6a07442f",
    symbol: "UNBNK",
    decimals: 18,
  },
  {
    address: "0x0d8ca4b20b115d4da5c13dc45dd582a5de3e78bf",
    symbol: "GAI",
    decimals: 18,
  },
  {
    address: "0x187df9748016da82578c83a61c3b3093ac6b8669",
    symbol: "KRAZY",
    decimals: 18,
  },
  {
    address: "0xffd822149fa6749176c7a1424e71a417f26189c8",
    symbol: "THING",
    decimals: 18,
  },
  {
    address: "0x1d4fb9bfa1967be6ca74819e28b98c2aa5ae8b59",
    symbol: "NEIREI",
    decimals: 9,
  },
  {
    address: "0xa876f27f13a9eb6e621202cefdd5afc4a90e6457",
    symbol: "IC",
    decimals: 9,
  },
  {
    address: "0x4581af35199bbde87a89941220e04e27ce4b0099",
    symbol: "PARTY",
    decimals: 18,
  },
  {
    address: "0x669c01caf0edcad7c2b8dc771474ad937a7ca4af",
    symbol: "WMINIMA",
    decimals: 18,
  },
  {
    address: "0x04c293144acc45a19da9c2817c08d1352e5be70e",
    symbol: "MUGI",
    decimals: 9,
  },
  {
    address: "0x207e14389183a94343942de7afbc607f57460618",
    symbol: "THOL",
    decimals: 18,
  },
  {
    address: "0x4737d9b4592b40d51e110b94c9c043c6654067ae",
    symbol: "SLVLUSD",
    decimals: 18,
  },
  {
    address: "0x77e06c9eccf2e797fd462a92b6d7642ef85b0a44",
    symbol: "WTAO",
    decimals: 9,
  },
  {
    address: "0x1a6658f40e51b372e593b7d2144c1402d5cf33e8",
    symbol: "PUBLX",
    decimals: 18,
  },
  {
    address: "0xce20bb92ccf9bbf5091ef85649e71e552819ad8c",
    symbol: "SMART",
    decimals: 18,
  },
  {
    address: "0xdd69db25f6d620a7bad3023c5d32761d353d3de9",
    symbol: "GETH",
    decimals: 18,
  },
  {
    address: "0xe3f03cef497c81d2b28a2fae63ae84b373028718",
    symbol: "MARVIN",
    decimals: 9,
  },
  {
    address: "0x1032abe2902a23ddcbab085c20e0e69c33ceb8fa",
    symbol: "SNAKE",
    decimals: 18,
  },
  {
    address: "0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51",
    symbol: "NRCH",
    decimals: 9,
  },
  {
    address: "0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361",
    symbol: "MYST",
    decimals: 18,
  },
  {
    address: "0x4b520c812e8430659fc9f12f6d0c39026c83588d",
    symbol: "DG",
    decimals: 18,
  },
  {
    address: "0x7a8adcf432ebcc2311b955d176ee4bfed13bb9a7",
    symbol: "MANDOX",
    decimals: 9,
  },
  {
    address: "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc",
    symbol: "HOP",
    decimals: 18,
  },
  {
    address: "0xc04207ebf4bbbd81c14596b78ece7cd8c17fb5cf",
    symbol: "BSEN",
    decimals: 18,
  },
  {
    address: "0xddf7fd345d54ff4b40079579d4c4670415dbfd0a",
    symbol: "SG",
    decimals: 18,
  },
  {
    address: "0xd1e64bcc904cfdc19d0faba155a9edc69b4bcdae",
    symbol: "PIKA",
    decimals: 9,
  },
  {
    address: "0xb01dd87b29d187f3e3a4bf6cdaebfb97f3d9ab98",
    symbol: "BOLD",
    decimals: 18,
  },
  {
    address: "0x6985884c4392d348587b19cb9eaaf157f13271cd",
    symbol: "ZRO",
    decimals: 18,
  },
  {
    address: "0x68b36248477277865c64dfc78884ef80577078f3",
    symbol: "HOLD",
    decimals: 18,
  },
  {
    address: "0xe6f4a40156c9e8c7addda66848bbb99fdedecf84",
    symbol: "DETENSOR",
    decimals: 18,
  },
  {
    address: "0xbb556b0ee2cbd89ed95ddea881477723a3aa8f8b",
    symbol: "ALCA",
    decimals: 18,
  },
  {
    address: "0x584bc13c7d411c00c01a62e8019472de68768430",
    symbol: "HEGIC",
    decimals: 18,
  },
  {
    address: "0xed1273928ba97eed7b49e82c2f39d512d7591112",
    symbol: "NERD",
    decimals: 18,
  },
  {
    address: "0x014337b35167b3711195361bb85259009e50a8a4",
    symbol: "DNODE",
    decimals: 9,
  },
  {
    address: "0x2559813bbb508c4c79e9ccce4703bcb1f149edd7",
    symbol: "WAIT",
    decimals: 9,
  },
  {
    address: "0x0c5cb676e38d6973837b9496f6524835208145a2",
    symbol: "KABO",
    decimals: 18,
  },
  {
    address: "0x4096fc7119040175589387656f7c6073265f4096",
    symbol: "4096",
    decimals: 0,
  },
  {
    address: "0x07ddacf367f0d40bd68b4b80b4709a37bdc9f847",
    symbol: "MOJO",
    decimals: 18,
  },
  {
    address: "0x6c22910c6f75f828b305e57c6a54855d8adeabf8",
    symbol: "SATS",
    decimals: 9,
  },
  {
    address: "0x8b802513d4aa6f349b197a4ea4c26563cd6fd5b2",
    symbol: "HIGHER",
    decimals: 18,
  },
  {
    address: "0xc32db1d3282e872d98f6437d3bcfa57801ca6d5c",
    symbol: "ETHEREUM",
    decimals: 18,
  },
  {
    address: "0x23878914efe38d27c4d67ab83ed1b93a74d4086a",
    symbol: "AUSDT",
    decimals: 6,
  },
  {
    address: "0xc97d6c52f3add91fa1c5287a453d7444aecbca83",
    symbol: "DZOO",
    decimals: 18,
  },
  {
    address: "0xcc9ee9483f662091a1de4795249e24ac0ac2630f",
    symbol: "ARETH",
    decimals: 18,
  },
  {
    address: "0xf9ca9523e5b5a42c3018c62b084db8543478c400",
    symbol: "LAKE",
    decimals: 18,
  },
  {
    address: "0x4f08705fb8f33affc231ed66e626b40e84a71870",
    symbol: "FLUT",
    decimals: 11,
  },
  {
    address: "0x018008bfb33d285247a21d44e50697654f754e63",
    symbol: "ADAI",
    decimals: 18,
  },
  {
    address: "0x86eab36585eddb7a949a0b4771ba733d942a8aa7",
    symbol: "REDDIT",
    decimals: 9,
  },
  {
    address: "0x4f14ba78a51925ee934c373a2cf56b2d8da63f7f",
    symbol: "EBIT",
    decimals: 18,
  },
  {
    address: "0x87d907568a0761ea45d2917e324557920668f224",
    symbol: "GROK20",
    decimals: 18,
  },
  {
    address: "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85",
    symbol: "FET",
    decimals: 18,
  },
  {
    address: "0xf66cd2f8755a21d3c8683a10269f795c0532dd58",
    symbol: "COREDAO",
    decimals: 18,
  },
  {
    address: "0x8a458a9dc9048e005d22849f470891b840296619",
    symbol: "AMKR",
    decimals: 18,
  },
  {
    address: "0x5888641e3e6cbea6d84ba81edb217bd691d3be38",
    symbol: "BOBO",
    decimals: 9,
  },
  {
    address: "0x3819f64f282bf135d62168c1e513280daf905e06",
    symbol: "HDRN",
    decimals: 9,
  },
  {
    address: "0x295b42684f90c77da7ea46336001010f2791ec8c",
    symbol: "XI",
    decimals: 18,
  },
  {
    address: "0xf6d2224916ddfbbab6e6bd0d1b7034f4ae0cab18",
    symbol: "AUNI",
    decimals: 18,
  },
  {
    address: "0xc4ee0aa2d993ca7c9263ecfa26c6f7e13009d2b6",
    symbol: "HOICHI",
    decimals: 18,
  },
  {
    address: "0x562e12e1e792643d168c1fa01c1b7198a0f83c9f",
    symbol: "BB",
    decimals: 18,
  },
  {
    address: "0x9a44fd41566876a39655f74971a3a6ea0a17a454",
    symbol: "ALDO",
    decimals: 18,
  },
  {
    address: "0xacf8d5e515ed005655dfefa09c22673a37a7cdee",
    symbol: "FNF",
    decimals: 18,
  },
  {
    address: "0x5791254f5d7a4d7ce4dda0391ce15812b65ac2a2",
    symbol: "SLUGLORD",
    decimals: 9,
  },
  {
    address: "0x49446a0874197839d15395b908328a74ccc96bc0",
    symbol: "MSTETH",
    decimals: 18,
  },
  {
    address: "0x4cce605ed955295432958d8951d0b176c10720d5",
    symbol: "AUDD",
    decimals: 6,
  },
  {
    address: "0x9b9647431632af44be02ddd22477ed94d14aacaa",
    symbol: "KOK",
    decimals: 18,
  },
  {
    address: "0x9ce07410673206c693bcec9b07710767637a564c",
    symbol: "MONKEYS",
    decimals: 9,
  },
  {
    address: "0x9040e237c3bf18347bb00957dc22167d0f2b999d",
    symbol: "STND",
    decimals: 18,
  },
  {
    address: "0x51a59a02ba906194285e81eb1f98ffa28e7cf4c9",
    symbol: "PEPE",
    decimals: 9,
  },
  {
    address: "0xeb575c45004bd7b61c6a8d3446a62a05a6ce18d8",
    symbol: "ELS",
    decimals: 18,
  },
  {
    address: "0xa163af4ab79cd705e5b16941b8619a79805bf9c7",
    symbol: "BABYMARVIN",
    decimals: 18,
  },
  {
    address: "0x2a7e415c169ce3a580c6f374dc26f6aaad1eccfe",
    symbol: "HACHI",
    decimals: 18,
  },
  {
    address: "0x508e00d5cef397b02d260d035e5ee80775e4c821",
    symbol: "1CAT",
    decimals: 18,
  },
  {
    address: "0xf63e309818e4ea13782678ce6c31c1234fa61809",
    symbol: "JANET",
    decimals: 8,
  },
  {
    address: "0x6f3cbe18e9381dec6026e6cb8166c13944fcfee1",
    symbol: "FELIX",
    decimals: 9,
  },
  {
    address: "0xc3681a720605bd6f8fe9a2fabff6a7cdecdc605d",
    symbol: "NIHAO",
    decimals: 18,
  },
  {
    address: "0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202",
    symbol: "KNC",
    decimals: 18,
  },
  {
    address: "0x7c95e7ad2b349dc2f82d0f1117a44b561fa2699a",
    symbol: "GRACY",
    decimals: 18,
  },
  {
    address: "0x6bf765c43030387a983f429c1438e9d2025b7e12",
    symbol: "PEPES",
    decimals: 18,
  },
  {
    address: "0x09a3ecafa817268f77be1283176b946c4ff2e608",
    symbol: "MIR",
    decimals: 18,
  },
  {
    address: "0x80008bcd713c38af90a9930288d446bc3bd2e684",
    symbol: "KARATE",
    decimals: 18,
  },
  {
    address: "0xd54619e0b9899d74cc9b981354eb6b59732c43b1",
    symbol: "GLR",
    decimals: 18,
  },
  {
    address: "0x6ef460eb3563cfcc73f8147b0a77daffee71f867",
    symbol: "ZEUS",
    decimals: 18,
  },
  {
    address: "0xbfc66d8cce39e668fd5d3c10fd1b1eabb82c27b7",
    symbol: "OVO",
    decimals: 18,
  },
  {
    address: "0xa1f410f13b6007fca76833ee7eb58478d47bc5ef",
    symbol: "RJV",
    decimals: 6,
  },
  {
    address: "0x24bff4fe25b5807bad49b2c08d79bb271766e68a",
    symbol: "ALEA",
    decimals: 18,
  },
  {
    address: "0xdcee70654261af21c44c093c300ed3bb97b78192",
    symbol: "WOETH",
    decimals: 18,
  },
  {
    address: "0x9ca8530ca349c966fe9ef903df17a75b8a778927",
    symbol: "LCAI",
    decimals: 18,
  },
  {
    address: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    symbol: "FUN",
    decimals: 8,
  },
  {
    address: "0xb69753c06bb5c366be51e73bfc0cc2e3dc07e371",
    symbol: "POOH",
    decimals: 18,
  },
  {
    address: "0x4dd942baa75810a3c1e876e79d5cd35e09c97a76",
    symbol: "D2T",
    decimals: 18,
  },
  {
    address: "0x5c8190b76e90b4dd0702740cf6eb0f7ee01ab5e9",
    symbol: "ARCAI",
    decimals: 9,
  },
  {
    address: "0x0a58153a0cd1cfaea94ce1f7fdc5d7e679eca936",
    symbol: "IM",
    decimals: 18,
  },
  {
    address: "0x5ac83bfbfcebb3397a40fd259dbe7a4be04237d3",
    symbol: "LBT",
    decimals: 18,
  },
  {
    address: "0x8b39b70e39aa811b69365398e0aace9bee238aeb",
    symbol: "PKF",
    decimals: 18,
  },
  {
    address: "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0",
    symbol: "DF",
    decimals: 18,
  },
  {
    address: "0x13dbd5394c2c7e4bdb85b1838286faa66532a262",
    symbol: "TZU",
    decimals: 18,
  },
  {
    address: "0xcfc5bd99915aaa815401c5a41a927ab7a38d29cf",
    symbol: "THUSD",
    decimals: 18,
  },
  {
    address: "0xf36c5f04127f7470834ed6f98bddc1be62aba48d",
    symbol: "CAI",
    decimals: 18,
  },
  {
    address: "0x045da4bfe02b320f4403674b3b7d121737727a36",
    symbol: "DCHF",
    decimals: 18,
  },
  {
    address: "0x3595e426a7808e2482667ee4e453ef280fbb9cf4",
    symbol: "COCAINE",
    decimals: 9,
  },
  {
    address: "0x808c16ace7404777fe24a6777a9cb2335aa82451",
    symbol: "JOTCHUA",
    decimals: 18,
  },
  {
    address: "0x8e81d527f8fa05d82c514401c8144275174557cd",
    symbol: "CCB",
    decimals: 18,
  },
  {
    address: "0x059956483753947536204e89bfad909e1a434cc6",
    symbol: "ML",
    decimals: 18,
  },
  {
    address: "0x494930dabcfa57748a4c4788c0054f723a789047",
    symbol: "COOMER",
    decimals: 9,
  },
  {
    address: "0xfac77a24e52b463ba9857d6b758ba41ae20e31ff",
    symbol: "LSD",
    decimals: 18,
  },
  {
    address: "0x857de36f92330e1b9a21e8745c692f2ce13866cb",
    symbol: "MEMAGX",
    decimals: 18,
  },
  {
    address: "0xaf8942831f3a096f708b8b31f191b8958cf176c5",
    symbol: "NERF",
    decimals: 18,
  },
  {
    address: "0x1aa51bc7eb181ce48ce626bf62f8956fa9555136",
    symbol: "PAW",
    decimals: 18,
  },
  {
    address: "0x516e2758b044433371076a48127b8cfa7b0bdb43",
    symbol: "SMUDGE",
    decimals: 18,
  },
  {
    address: "0xc89d9aa9d9e54bb196319c6195aea1038d2bc936",
    symbol: "TRENDX",
    decimals: 18,
  },
  {
    address: "0xf3bb9f16677f2b86efd1dfca1c141a99783fde58",
    symbol: "CROWN",
    decimals: 18,
  },
  {
    address: "0x6d3d490964205c8bc8ded39e48e88e8fde45b41f",
    symbol: "GOOCH",
    decimals: 18,
  },
  {
    address: "0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593",
    symbol: "RETH",
    decimals: 18,
  },
  {
    address: "0x675b68aa4d9c2d3bb3f0397048e62e6b7192079c",
    symbol: "FUEL",
    decimals: 9,
  },
  {
    address: "0xa0cc4428fbb652c396f28dce8868b8743742a71c",
    symbol: "PAI",
    decimals: 18,
  },
  {
    address: "0x1c9a2d6b33b4826757273d47ebee0e2dddcd978b",
    symbol: "FFRAX",
    decimals: 8,
  },
  {
    address: "0x81994b9607e06ab3d5cf3afff9a67374f05f27d7",
    symbol: "FUSDT",
    decimals: 8,
  },
  {
    address: "0xc8388e437031b09b2c61fc4277469091382a1b13",
    symbol: "SHOG",
    decimals: 18,
  },
  {
    address: "0x0316eb71485b0ab14103307bf65a021042c6d380",
    symbol: "HBTC",
    decimals: 18,
  },
  {
    address: "0x9db0fb0aebe6a925b7838d16e3993a3976a64aab",
    symbol: "BAM",
    decimals: 18,
  },
  {
    address: "0xbcd4d5ac29e06e4973a1ddcd782cd035d04bc0b7",
    symbol: "QKNTL",
    decimals: 18,
  },
  {
    address: "0x4216663ddc7bd10eaf44609df4dd0f91cd2be7f2",
    symbol: "MPEPE",
    decimals: 18,
  },
  {
    address: "0x7b37a55ffb30c11d95f943672ae98f28cfb7b087",
    symbol: "FUFU",
    decimals: 2,
  },
  {
    address: "0xfa2b947eec368f42195f24f36d2af29f7c24cec2",
    symbol: "USDF",
    decimals: 18,
  },
  {
    address: "0xd2b274cfbf9534f56b59ad0fb7e645e0354f4941",
    symbol: "XDOGE",
    decimals: 8,
  },
  {
    address: "0x1001271083c249bd771e1bb76c22d935809a61ee",
    symbol: "FUKU",
    decimals: 9,
  },
  {
    address: "0x1234567461d3f8db7496581774bd869c83d51c93",
    symbol: "CAT",
    decimals: 18,
  },
  {
    address: "0xcaeda9650ccd356af7776057a105f9e6ffe68213",
    symbol: "LOONG",
    decimals: 18,
  },
  {
    address: "0xd722424cf94b583752dfc80c08e2531ab3b762dc",
    symbol: "HERE",
    decimals: 18,
  },
  {
    address: "0x6942040b6d25d6207e98f8e26c6101755d67ac89",
    symbol: "MELLOW",
    decimals: 9,
  },
  {
    address: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    symbol: "LEO",
    decimals: 18,
  },
  {
    address: "0x48a612a6da945205a221e94bb9f40b0550cd2c4e",
    symbol: "STTIA",
    decimals: 6,
  },
  {
    address: "0xffe203b59393593965842439ce1e7d7c78109b46",
    symbol: "DOGE-1",
    decimals: 18,
  },
  {
    address: "0x69a95185ee2a045cdc4bcd1b1df10710395e4e23",
    symbol: "POOLZ",
    decimals: 18,
  },
  {
    address: "0xb939da54f9748440a1b279d42be1296942732288",
    symbol: "FONZY",
    decimals: 18,
  },
  {
    address: "0xda0c94c73d127ee191955fb46bacd7ff999b2bcd",
    symbol: "STANDARD",
    decimals: 18,
  },
  {
    address: "0xbb3a8fd6ec4bf0fdc6cd2739b1e41192d12b1873",
    symbol: "OBI",
    decimals: 18,
  },
  {
    address: "0x15f74458ae0bfdaa1a96ca1aa779d715cc1eefe4",
    symbol: "GRAI",
    decimals: 18,
  },
  {
    address: "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
    symbol: "TNT",
    decimals: 8,
  },
  {
    address: "0x7cb683151a83c2b10a30cbb003cda9996228a2ba",
    symbol: "IYKYK",
    decimals: 18,
  },
  {
    address: "0x5de597849cf72c72f073e9085bdd0dadd8e6c199",
    symbol: "FBX",
    decimals: 18,
  },
  {
    address: "0xf88baf18fab7e330fa0c4f83949e23f52fececce",
    symbol: "GRAIN",
    decimals: 18,
  },
  {
    address: "0xb4b9dc1c77bdbb135ea907fd5a08094d98883a35",
    symbol: "SWEAT",
    decimals: 18,
  },
  {
    address: "0x68b429161ec09a6c1d65ba70727ab1faa5bc4026",
    symbol: "ODOGE",
    decimals: 18,
  },
  {
    address: "0xbc396689893d065f41bc2c6ecbee5e0085233447",
    symbol: "PERP",
    decimals: 18,
  },
  {
    address: "0x049e9f5369358786a1ce6483d668d062cfe547ec",
    symbol: "CHECKS",
    decimals: 18,
  },
  {
    address: "0x5f18ea482ad5cc6bc65803817c99f477043dce85",
    symbol: "AGI",
    decimals: 18,
  },
  {
    address: "0x0f5def84ced3e9e295dae28df96d0b846de92c1a",
    symbol: "SDG",
    decimals: 18,
  },
  {
    address: "0xb7bda6a89e724f63572ce68fddc1a6d1d5d24bcf",
    symbol: "OGZ",
    decimals: 18,
  },
  {
    address: "0x10010078a54396f62c96df8532dc2b4847d47ed3",
    symbol: "HND",
    decimals: 18,
  },
  {
    address: "0x7da2641000cbb407c329310c461b2cb9c70c3046",
    symbol: "AGI",
    decimals: 18,
  },
  {
    address: "0x519c1001d550c0a1dae7d1fc220f7d14c2a521bb",
    symbol: "PSWAP",
    decimals: 18,
  },
  {
    address: "0x5efcea234f7547de4569aad1215fa5d2adaced38",
    symbol: "HONK",
    decimals: 18,
  },
  {
    address: "0x357c915d7c12dc506d13332bb06c932af13e99a0",
    symbol: "LUCKYSLP",
    decimals: 18,
  },
  {
    address: "0xad1a5b8538a866ecd56ddd328b50ed57ced5d936",
    symbol: "GENSLR",
    decimals: 18,
  },
  {
    address: "0xcc8e21f599995d1c8367054841b8af5024ddf01b",
    symbol: "AG",
    decimals: 18,
  },
  {
    address: "0xc6cc3d07c705e39d11c7f60d8836c7c78d4ac5f1",
    symbol: "OLEA",
    decimals: 18,
  },
  {
    address: "0xf04af3f4e4929f7cd25a751e6149a3318373d4fe",
    symbol: "SPRING",
    decimals: 18,
  },
  {
    address: "0x3ea8ea4237344c9931214796d9417af1a1180770",
    symbol: "FLX",
    decimals: 18,
  },
  {
    address: "0x5138ebe7acaae209d6f0b651e4d02a67ef61f436",
    symbol: "GRAF",
    decimals: 18,
  },
  {
    address: "0x62b6d83d5afbf395ece55136e7161c119a8fd80c",
    symbol: "HOODRAT",
    decimals: 18,
  },
  {
    address: "0x0e7375c46a0552520ce6c976dc268ae1b341f45f",
    symbol: "MTK",
    decimals: 18,
  },
  {
    address: "0x53250b5dfa8c911547afeaf18db025024c8e919a",
    symbol: "KERMIT",
    decimals: 9,
  },
  {
    address: "0xafe7131a57e44f832cb2de78ade38cad644aac2f",
    symbol: "MAUSDT",
    decimals: 18,
  },
  {
    address: "0x80f0c1c49891dcfdd40b6e0f960f84e6042bcb6f",
    symbol: "DXN",
    decimals: 18,
  },
  {
    address: "0xc8020985a6b30773d866cbef65a7a11f96773413",
    symbol: "ENVI",
    decimals: 18,
  },
  {
    address: "0x0d505c03d30e65f6e9b4ef88855a47a89e4b7676",
    symbol: "ZOOMER",
    decimals: 18,
  },
  {
    address: "0xf5ec1a08902ae0ae5323466c35ea49a37409e4ca",
    symbol: "SUP",
    decimals: 18,
  },
  {
    address: "0xf2a22b900dde3ba18ec2aef67d4c8c1a0dab6aac",
    symbol: "MONKEYS",
    decimals: 9,
  },
  {
    address: "0x577fee283e776eec29c9e4d258431982780a38a8",
    symbol: "PEPA",
    decimals: 9,
  },
  {
    address: "0xaf75d880b3128981d1fed3292fc02e3fb37acd53",
    symbol: "TRUTH",
    decimals: 9,
  },
  {
    address: "0x66e564819340cc2f54abceb4e49941fa07e426b4",
    symbol: "BRETT",
    decimals: 9,
  },
  {
    address: "0x3742f3fcc56b2d46c7b8ca77c23be60cd43ca80a",
    symbol: "STAVAIL",
    decimals: 18,
  },
  {
    address: "0x5c559f3ee9a81da83e069c0093471cb05d84052a",
    symbol: "BABYPEPE",
    decimals: 18,
  },
  {
    address: "0x8bcbef61acd66537362f38167f11875134ffcd63",
    symbol: "PEPEG",
    decimals: 18,
  },
  {
    address: "0xe07a836f5201a46f376934a8a4a17185df1708c4",
    symbol: "CHAMPZ",
    decimals: 8,
  },
  {
    address: "0xee772cec929d8430b4fa7a01cd7fbd159a68aa83",
    symbol: "SHANG",
    decimals: 18,
  },
  {
    address: "0x9dc7094530cb1bcf5442c3b9389ee386738a190c",
    symbol: "MACRV",
    decimals: 18,
  },
  {
    address: "0x32f0d04b48427a14fb3cbc73db869e691a9fec6f",
    symbol: "ECI",
    decimals: 18,
  },
  {
    address: "0xd59d7d2e955533fcd21641da8a70eae9624a3c49",
    symbol: "MRING",
    decimals: 18,
  },
  {
    address: "0xad8d0de33c43eefe104a279cdb6ae250c12e6214",
    symbol: "NARUTO",
    decimals: 9,
  },
  {
    address: "0x85bea4ee627b795a79583fcede229e198aa57055",
    symbol: "MARVIN",
    decimals: 18,
  },
  {
    address: "0x18e5f92103d1b34623738ee79214b1659f2ee109",
    symbol: "WCELL",
    decimals: 18,
  },
  {
    address: "0xe46091dce9c67691bcf22768bbee0bc9e20d4beb",
    symbol: "WSBC",
    decimals: 9,
  },
  {
    address: "0x8442e0e292186854bb6875b2a0fc1308b9ded793",
    symbol: "PP",
    decimals: 9,
  },
  {
    address: "0x1a963df363d01eebb2816b366d61c917f20e1ebe",
    symbol: "MEMEME",
    decimals: 18,
  },
  {
    address: "0x1a11ea9d61588d756d9f1014c3cf0d226aedd279",
    symbol: "MILEI",
    decimals: 18,
  },
  {
    address: "0x5582a479f0c403e207d2578963ccef5d03ba636f",
    symbol: "SALD",
    decimals: 18,
  },
  {
    address: "0x244b797d622d4dee8b188b03546acaabd0cf91a0",
    symbol: "FOUR",
    decimals: 18,
  },
  {
    address: "0x553afe6468949e0685959022217336717df5fbe8",
    symbol: "PLT",
    decimals: 18,
  },
  {
    address: "0x8e729198d1c59b82bd6bba579310c40d740a11c2",
    symbol: "ALVA",
    decimals: 18,
  },
  {
    address: "0x15f20f9dfdf96ccf6ac96653b7c0abfe4a9c9f0f",
    symbol: "WSB",
    decimals: 18,
  },
  {
    address: "0xec505c81d6a7567b5bde804870b1038832fe6da1",
    symbol: "CND",
    decimals: 18,
  },
  {
    address: "0xb8c55c80a1cb7394088a36c6b634dc2bf3c6fb67",
    symbol: "PEPEDOGE",
    decimals: 18,
  },
  {
    address: "0xd7b2c1a7f3c67fb0ea57a7ef29bc1f18d7be3195",
    symbol: "VMINT",
    decimals: 18,
  },
  {
    address: "0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5",
    symbol: "EDOGE",
    decimals: 18,
  },
  {
    address: "0xdc7ac5d5d4a9c3b5d8f3183058a92776dc12f4f3",
    symbol: "MONKAS",
    decimals: 9,
  },
  {
    address: "0x32462ba310e447ef34ff0d15bce8613aa8c4a244",
    symbol: "DHN",
    decimals: 18,
  },
  {
    address: "0x0ba74fb26ca523f2dc22fa4318581cc2452eaba1",
    symbol: "BOG",
    decimals: 18,
  },
  {
    address: "0xe07c41e9cdf7e0a7800e4bbf90d414654fd6413d",
    symbol: "CBDC",
    decimals: 9,
  },
  {
    address: "0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096",
    symbol: "AUCTION",
    decimals: 18,
  },
  {
    address: "0xc7a2572fa8fdb0f7e81d6d3c4e3ccf78fb0dc374",
    symbol: "FINALE",
    decimals: 18,
  },
  {
    address: "0xe1ec350ea16d1ddaff57f31387b2d9708eb7ce28",
    symbol: "PC",
    decimals: 9,
  },
  {
    address: "0x2047ab3072b52561596ce5e0131bdbb7c848538d",
    symbol: "BORED",
    decimals: 9,
  },
  {
    address: "0x2f5fa8adf5f09a5f9de05b65fe82a404913f02c4",
    symbol: "TROLL20",
    decimals: 18,
  },
  {
    address: "0x2c7f442aab99d5e18cfae2291c507c0b5f3c1eb5",
    symbol: "KEKO",
    decimals: 18,
  },
  {
    address: "0x0414d8c87b271266a5864329fb4932bbe19c0c49",
    symbol: "WSB",
    decimals: 18,
  },
  {
    address: "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2",
    symbol: "MTA",
    decimals: 18,
  },
  {
    address: "0x81db1949d0e888557bc632f7c0f6698b1f8c9106",
    symbol: "D/ACC",
    decimals: 9,
  },
  {
    address: "0xc69996612249417db3407d98ea5b534faa0e90a7",
    symbol: "DXS",
    decimals: 18,
  },
  {
    address: "0xb076bda1abc154ddb4ccd9be45542a823aee290e",
    symbol: "FLEX",
    decimals: 18,
  },
  {
    address: "0xd08623fb2a1f044025eec65886011cf5d0f06b01",
    symbol: "LARRY",
    decimals: 18,
  },
  {
    address: "0xb2cb83e8e1b326373b7f1068d10c50ebfa04f070",
    symbol: "PEPI",
    decimals: 9,
  },
  {
    address: "0x8457ca5040ad67fdebbcc8edce889a335bc0fbfb",
    symbol: "ALT",
    decimals: 18,
  },
  {
    address: "0xd87d72248093597df8d56d2a53c1ab7c1a0cc8da",
    symbol: "HAHA",
    decimals: 18,
  },
  {
    address: "0x3d2b66bc4f9d6388bd2d97b95b565be1686aefb3",
    symbol: "LAMBO",
    decimals: 18,
  },
  {
    address: "0x7f4c5447af6a96d8eeaee1d932338cfc57890dbd",
    symbol: "DAVE",
    decimals: 18,
  },
  {
    address: "0xbbb32f99e6f2cb29337eebaa43c5069386de6e6c",
    symbol: "PT",
    decimals: 18,
  },
  {
    address: "0xde466831fde62e5141d49ba9d962d3fa3fae466f",
    symbol: "DYSTO",
    decimals: 18,
  },
  {
    address: "0xe60779cc1b2c1d0580611c526a8df0e3f870ec48",
    symbol: "USH",
    decimals: 18,
  },
  {
    address: "0x1f7505f486c22f4338ac2bde67a3e93a547644b9",
    symbol: "CIA",
    decimals: 18,
  },
  {
    address: "0x4bb3205bf648b7f59ef90dee0f1b62f6116bc7ca",
    symbol: "BYN",
    decimals: 18,
  },
  {
    address: "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784",
    symbol: "TRU",
    decimals: 8,
  },
  {
    address: "0x02795795196f563fdafce8dd97fca4871ded51c3",
    symbol: "WNZ",
    decimals: 18,
  },
  {
    address: "0x666cbfaa3baa2faccfac8854fea1e5db140fb104",
    symbol: "PLUMS",
    decimals: 18,
  },
  {
    address: "0x7d8146cf21e8d7cbe46054e01588207b51198729",
    symbol: "BOB",
    decimals: 18,
  },
  {
    address: "0x586a7cfe21e55ec0e24f0bfb118f77fe4ca87bab",
    symbol: "CRYPTO",
    decimals: 18,
  },
  {
    address: "0xe9da5e227e3fa4fc933b5f540be021e7ecc3fd81",
    symbol: "GMFAM",
    decimals: 18,
  },
  {
    address: "0x696733ce8f387c7a648443d9e21c6c1ee8519b94",
    symbol: "SUKI",
    decimals: 9,
  },
  {
    address: "0x8f08b70456eb22f6109f57b8fafe862ed28e6040",
    symbol: "KING",
    decimals: 18,
  },
  {
    address: "0xd4f4d0a10bcae123bb6655e8fe93a30d01eebd04",
    symbol: "LNQ",
    decimals: 18,
  },
  {
    address: "0xa1abecc1b3958da78259fa2793653fc48e976420",
    symbol: "DOGGGO",
    decimals: 18,
  },
  {
    address: "0xea7b7dc089c9a4a916b5a7a37617f59fd54e37e4",
    symbol: "HYPC",
    decimals: 6,
  },
  {
    address: "0xf03d5fc6e08de6ad886fca34abf9a59ef633b78a",
    symbol: "CAPY",
    decimals: 18,
  },
  {
    address: "0xeee0fe52299f2de8e2ed5111cd521ab67dcf0faf",
    symbol: "QWAN",
    decimals: 18,
  },
  {
    address: "0xa4bc2b90743294e5e6fd3321a9a131947f7785db",
    symbol: "JEST",
    decimals: 9,
  },
  {
    address: "0xb2dbf14d0b47ed3ba02bdb7c954e05a72deb7544",
    symbol: "MOFI",
    decimals: 18,
  },
  {
    address: "0x8e235f491ae66b82296d58332adc2a021c449c10",
    symbol: "TIPJA",
    decimals: 18,
  },
  {
    address: "0xe45dfc26215312edc131e34ea9299fbca53275ca",
    symbol: "REL",
    decimals: 18,
  },
  {
    address: "0x378e1be15be6d6d1f23cfe7090b6a77660dbf14d",
    symbol: "FOXE",
    decimals: 18,
  },
  {
    address: "0x6df0e641fc9847c0c6fde39be6253045440c14d3",
    symbol: "DINERO",
    decimals: 18,
  },
  {
    address: "0xc961da88bb5e8ee2ba7dfd4c62a875ef80f7202f",
    symbol: "HARAM",
    decimals: 9,
  },
  {
    address: "0xef8e456967122db4c3c160314bde8d2602ad6199",
    symbol: "WAGMI",
    decimals: 9,
  },
  {
    address: "0xb435a47ecea7f5366b2520e45b9bed7e01d2ffae",
    symbol: "NEMS",
    decimals: 18,
  },
  {
    address: "0x0ebe30595a44e5288c24161ddfc1e9fa08e33a0c",
    symbol: "NYAN",
    decimals: 18,
  },
  {
    address: "0x9ff58067bd8d239000010c154c6983a325df138e",
    symbol: "PROPC",
    decimals: 18,
  },
  {
    address: "0x4fe8d4775b7cb2546b9ee86182081cdf8f77b053",
    symbol: "KAIJU",
    decimals: 18,
  },
  {
    address: "0x33abe795f9c1b6136608c36db211bd7590f5fdae",
    symbol: "WOLF",
    decimals: 18,
  },
  {
    address: "0x730bcbe5cdc1a3061dfe700774b7b8dd1d4173db",
    symbol: "WTF",
    decimals: 18,
  },
  {
    address: "0xc7f950271d118a5bdf250dffc39128dcced8472c",
    symbol: "ARCHIVE",
    decimals: 18,
  },
  {
    address: "0x9c0bd34bebc33a0e898554cfc91e8a84c728bf9f",
    symbol: "PISS",
    decimals: 18,
  },
  {
    address: "0x83f20f44975d03b1b09e64809b757c47f942beea",
    symbol: "SDAI",
    decimals: 18,
  },
  {
    address: "0xe0f63a424a4439cbe457d80e4f4b51ad25b2c56c",
    symbol: "SPX",
    decimals: 8,
  },
  {
    address: "0x2f123cf3f37ce3328cc9b5b8415f9ec5109b45e7",
    symbol: "BC3M",
    decimals: 18,
  },
  {
    address: "0x1e2c4fb7ede391d116e6b41cd0608260e8801d59",
    symbol: "BCSPX",
    decimals: 18,
  },
  {
    address: "0xfe60fba03048effb4acf3f0088ec2f53d779d3bb",
    symbol: "3D3D",
    decimals: 18,
  },
  {
    address: "0xbbc7f7a6aadac103769c66cbc69ab720f7f9eae3",
    symbol: "INX",
    decimals: 18,
  },
  {
    address: "0xf831938caf837cd505de196bbb408d81a06376ab",
    symbol: "JEFF",
    decimals: 18,
  },
  {
    address: "0x455e53cbb86018ac2b8092fdcd39d8444affc3f6",
    symbol: "POL",
    decimals: 18,
  },
  {
    address: "0x370a366f402e2e41cdbbe54ecec12aae0cce1955",
    symbol: "TOAD",
    decimals: 18,
  },
  {
    address: "0x1f17d72cbe65df609315df5c4f5f729efbd00ade",
    symbol: "GYOSHI",
    decimals: 18,
  },
  {
    address: "0x5b649c07e7ba0a1c529deaabed0b47699919b4a2",
    symbol: "SGT",
    decimals: 8,
  },
  {
    address: "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
    symbol: "NEXO",
    decimals: 18,
  },
  {
    address: "0xc666081073e8dff8d3d1c2292a29ae1a2153ec09",
    symbol: "DGTX",
    decimals: 18,
  },
  {
    address: "0x451fd37983d494bce294295f78a426832376b7df",
    symbol: "XENO",
    decimals: 9,
  },
  {
    address: "0x9dcd367e2afa8d6e5d6cf0306094e3eb7bbaaf4d",
    symbol: "BROS",
    decimals: 18,
  },
  {
    address: "0x58083b54013631bacc0bbb6d4efa543fee1d9ce0",
    symbol: "FRC",
    decimals: 18,
  },
  {
    address: "0xf7168c8abb0ff80116413a8d95396bbdc318a3ff",
    symbol: "KEKE",
    decimals: 7,
  },
  {
    address: "0x4743a7a193cdf202035e9bc6830a07f1607630c4",
    symbol: "GUY",
    decimals: 18,
  },
  {
    address: "0xf0edac27aa3e85e2d176f689b0025f90c154393a",
    symbol: "LOVESNOOPY",
    decimals: 18,
  },
  {
    address: "0x04c618cdbc1d59142dfeb4b9864835a06983ec2d",
    symbol: "JSM",
    decimals: 18,
  },
  {
    address: "0x5dcd6272c3cbb250823f0b7e6c618bce11b21f90",
    symbol: "PEAR",
    decimals: 18,
  },
  {
    address: "0xd807f7e2818db8eda0d28b5be74866338eaedb86",
    symbol: "JIM",
    decimals: 18,
  },
  {
    address: "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
    symbol: "OGN",
    decimals: 18,
  },
  {
    address: "0x27f103f86070cc639fef262787a16887d22d8415",
    symbol: "FOFO",
    decimals: 18,
  },
  {
    address: "0xe1a3864dbf62fb94834b108ff6bf439ce70183ac",
    symbol: "VXDEFI",
    decimals: 18,
  },
  {
    address: "0x9ad37205d608b8b219e6a2573f922094cec5c200",
    symbol: "IZI",
    decimals: 18,
  },
  {
    address: "0xa2b8e02ce95b54362f8db7273015478dd725d7e7",
    symbol: "MEMECUP",
    decimals: 8,
  },
  {
    address: "0x14bfc34b292aa3f8afa0c366244ffb77f72761f6",
    symbol: "TNR",
    decimals: 9,
  },
  {
    address: "0xcedefe438860d2789da6419b3a19cece2a41038d",
    symbol: "LHINU",
    decimals: 18,
  },
  {
    address: "0x9b01637302b6adfc2c82678e2a8d680cff6337b7",
    symbol: "FIT",
    decimals: 18,
  },
  {
    address: "0x830a8512db4f6fca51968593e2667156c2c483a8",
    symbol: "WEN",
    decimals: 18,
  },
  {
    address: "0x24249b5a869a445c9b0ce269a08d73c618df9d21",
    symbol: "ETHEREUM",
    decimals: 8,
  },
  {
    address: "0x0d248ce39e26fb00f911fb1e7a45a00d8c94341c",
    symbol: "BUTTER",
    decimals: 18,
  },
  {
    address: "0x77571a64342667f7818520ef004b2b91f47a266b",
    symbol: "SNM",
    decimals: 18,
  },
  {
    address: "0x7163436b8efffb469f6bb81cc908b1661d4795e6",
    symbol: "ESCO",
    decimals: 18,
  },
  {
    address: "0x3d330b8d4eb25b0933e564d7284d462346d453ef",
    symbol: "GROQ",
    decimals: 9,
  },
  {
    address: "0xf190dbd849e372ff824e631a1fdf199f38358bcf",
    symbol: "BARA",
    decimals: 18,
  },
  {
    address: "0xa41d2f8ee4f47d3b860a149765a7df8c3287b7f0",
    symbol: "SYNC",
    decimals: 9,
  },
  {
    address: "0xeb4f5c4bf62fac1be7e4bef9c7c055bf1c52241d",
    symbol: "RUNIC",
    decimals: 18,
  },
  {
    address: "0x90685e300a4c4532efcefe91202dfe1dfd572f47",
    symbol: "CTA",
    decimals: 18,
  },
  {
    address: "0x52284158e02425290f6b627aeb5fff65edf058ad",
    symbol: "FMB",
    decimals: 18,
  },
  {
    address: "0xc092a137df3cf2b9e5971ba1874d26487c12626d",
    symbol: "RING",
    decimals: 18,
  },
  {
    address: "0x78da5799cf427fee11e9996982f4150ece7a99a7",
    symbol: "RGUSD",
    decimals: 18,
  },
  {
    address: "0xbddf903f43dc7d9801f3f0034ba306169074ef8e",
    symbol: "AGB",
    decimals: 18,
  },
  {
    address: "0x2be8e422cb4a5a7f217a8f1b0658952a79132f28",
    symbol: "MSI",
    decimals: 18,
  },
  {
    address: "0x01eeffcd9a10266ed00946121df097eed173b43d",
    symbol: "XD",
    decimals: 18,
  },
  {
    address: "0x3c3a81e81dc49a522a592e7622a7e711c06bf354",
    symbol: "MNT",
    decimals: 18,
  },
  {
    address: "0x9a0df129e798438a8ad995368bd82baa7eee8913",
    symbol: "BEEP",
    decimals: 18,
  },
  {
    address: "0xcae3faa4b6cf660aef18474074949ba0948bc025",
    symbol: "GEN",
    decimals: 18,
  },
  {
    address: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
    symbol: "HEX",
    decimals: 8,
  },
  {
    address: "0x3007083eaa95497cd6b2b809fb97b6a30bdf53d3",
    symbol: "PSYOP",
    decimals: 18,
  },
  {
    address: "0xd1c8fa30fded3e0031dc24c1646d74108b096cc2",
    symbol: "LUCKY",
    decimals: 9,
  },
  {
    address: "0x955d5c14c8d4944da1ea7836bd44d54a8ec35ba1",
    symbol: "RFD",
    decimals: 18,
  },
  {
    address: "0x283344eea472f0fe04d6f722595a2fffefe1901a",
    symbol: "CODE",
    decimals: 13,
  },
  {
    address: "0xb5ce43fe2fcffffb2eece95ec413d08def28046f",
    symbol: "PELO",
    decimals: 18,
  },
  {
    address: "0xf1376bcef0f78459c0ed0ba5ddce976f1ddf51f4",
    symbol: "UNIETH",
    decimals: 18,
  },
  {
    address: "0x1b900b2cde13b384f89d6dd697dc03ac61c702bb",
    symbol: "WHAT",
    decimals: 18,
  },
  {
    address: "0x63f7b1b538a78cb699e5399621b3d2e047c40de4",
    symbol: "MAX",
    decimals: 18,
  },
  {
    address: "0xe66747a101bff2dba3697199dcce5b743b454759",
    symbol: "GT",
    decimals: 18,
  },
  {
    address: "0x013062189dc3dcc99e9cee714c513033b8d99e3c",
    symbol: "INFRA",
    decimals: 18,
  },
  {
    address: "0xd1679946ba555ebf5cb38e8b089ef1e1e5d2abb1",
    symbol: "GUARDAI",
    decimals: 18,
  },
  {
    address: "0xff8c479134a18918059493243943150776cf8cf2",
    symbol: "RENQ",
    decimals: 18,
  },
  {
    address: "0xb2e0f591191ee5f6fb8a7f1777a733b6aa92bb55",
    symbol: "WOPE",
    decimals: 9,
  },
  {
    address: "0x2a961d752eaa791cbff05991e4613290aec0d9ac",
    symbol: "PATTON",
    decimals: 9,
  },
  {
    address: "0x2ad9addd0d97ec3cdba27f92bf6077893b76ab0b",
    symbol: "PLANET",
    decimals: 18,
  },
  {
    address: "0xe0c28a5a2da3920946e8bf821f61f7bea311048b",
    symbol: "KETH",
    decimals: 18,
  },
  {
    address: "0x1d2b8fa9b730fa7eb0fbf0f3c527b2381beed2b2",
    symbol: "QMIND",
    decimals: 18,
  },
  {
    address: "0x38547d918b9645f2d94336b6b61aeb08053e142c",
    symbol: "USC",
    decimals: 18,
  },
  {
    address: "0xecf3672a6d2147e2a77f07069fb48d8cf6f6fbf9",
    symbol: "INMETH",
    decimals: 18,
  },
  {
    address: "0x8365332d4baf69bc24ca2401b90c3853ab9f818e",
    symbol: "WOLF",
    decimals: 18,
  },
  {
    address: "0xd0623da373f754c4b6762209ea77de59b21dd667",
    symbol: "OXYZ",
    decimals: 18,
  },
  {
    address: "0xba386a4ca26b85fd057ab1ef86e3dc7bdeb5ce70",
    symbol: "JESUS",
    decimals: 18,
  },
  {
    address: "0x64d93cf499054170f4c211f91f867f902afaece6",
    symbol: "QAI",
    decimals: 18,
  },
  {
    address: "0xf70ce9ee486106882d3dc43ddbd84e0fa71ac2a5",
    symbol: "DUCKER",
    decimals: 18,
  },
  {
    address: "0x738865301a9b7dd80dc3666dd48cf034ec42bdda",
    symbol: "AGRS",
    decimals: 8,
  },
  {
    address: "0xc4b7af50644c661e270fbb8da770049c9fc0bbe1",
    symbol: "GOS",
    decimals: 18,
  },
  {
    address: "0x7b95ec873268a6bfc6427e7a28e396db9d0ebc65",
    symbol: "ACRV",
    decimals: 18,
  },
  {
    address: "0x807534b396919783b7e30383fe57d857bc084338",
    symbol: "TEST",
    decimals: 18,
  },
  {
    address: "0xc7b4c17861357b8abb91f25581e7263e08dcb59c",
    symbol: "ASNX",
    decimals: 18,
  },
  {
    address: "0x77777feddddffc19ff86db637967013e6c6a116c",
    symbol: "TORN",
    decimals: 18,
  },
  {
    address: "0x2516e7b3f76294e03c42aa4c5b5b4dce9c436fb8",
    symbol: "ABAL",
    decimals: 18,
  },
  {
    address: "0x4db57d585fa82ca32d25086ddc069d899f08d455",
    symbol: "ENOCH",
    decimals: 18,
  },
  {
    address: "0x2c0687215aca7f5e2792d956e170325e92a02aca",
    symbol: "ESS",
    decimals: 18,
  },
  {
    address: "0x696969ade0cc455414fc4800ebea505d690b2429",
    symbol: "PEPENOMICS",
    decimals: 9,
  },
  {
    address: "0xd4e245848d6e1220dbe62e155d89fa327e43cb06",
    symbol: "AFRAX",
    decimals: 18,
  },
  {
    address: "0x7fa768e035f956c41d6aeaa3bd857e7e5141cad5",
    symbol: "INSTETH",
    decimals: 18,
  },
  {
    address: "0x1ba9843bd4327c6c77011406de5fa8749f7e3479",
    symbol: "ASTG",
    decimals: 18,
  },
  {
    address: "0x71aef7b30728b9bb371578f36c5a1f1502a5723e",
    symbol: "A1INCH",
    decimals: 18,
  },
  {
    address: "0xfd07fd5ebea6f24888a397997e262179bf494336",
    symbol: "INOSETH",
    decimals: 18,
  },
  {
    address: "0xd8e163967fed76806df0097b704ba721b9b37656",
    symbol: "COPE",
    decimals: 18,
  },
  {
    address: "0x4ad434b8cdc3aa5ac97932d6bd18b5d313ab0f6f",
    symbol: "EVERMOON",
    decimals: 18,
  },
  {
    address: "0xb5b1b659da79a2507c27aad509f15b4874edc0cc",
    symbol: "DUST",
    decimals: 9,
  },
  {
    address: "0x85225ed797fd4128ac45a992c46ea4681a7a15da",
    symbol: "HYPE",
    decimals: 18,
  },
  {
    address: "0x369733153e6e08d38f2bc72ae2432e855cfbe221",
    symbol: "XALPHA",
    decimals: 18,
  },
  {
    address: "0xd8684adc4664bc2a0c78ddc8657dc005e804af15",
    symbol: "CCD",
    decimals: 18,
  },
  {
    address: "0x1294f4183763743c7c9519bec51773fb3acd78fd",
    symbol: "FI",
    decimals: 18,
  },
  {
    address: "0x259ce0cb3581995d40cbb03fd4badeaaba1edaff",
    symbol: "SXS",
    decimals: 18,
  },
  {
    address: "0xeaebb6cd3a1f9b9cad725d0189ba5bfea25a9d76",
    symbol: "BSIM",
    decimals: 9,
  },
  {
    address: "0x2b46578b7f06f2b373ad0e0c9b28f800dcc80bf3",
    symbol: "ECHO",
    decimals: 9,
  },
  {
    address: "0xda8263d8ce3f726233f8b5585bcb86a3120a58b6",
    symbol: "DOGC",
    decimals: 18,
  },
  {
    address: "0x208bcf9cd1d694d1d3c630362e517940e3724d80",
    symbol: "ORACLE",
    decimals: 9,
  },
  {
    address: "0x8fac8031e079f409135766c7d5de29cf22ef897c",
    symbol: "HEART",
    decimals: 18,
  },
  {
    address: "0x445bd590a01fe6709d4f13a8f579c1e4846921db",
    symbol: "DUMMY",
    decimals: 18,
  },
  {
    address: "0xf56842af3b56fd72d17cb103f92d027bba912e89",
    symbol: "BAMBOO",
    decimals: 18,
  },
  {
    address: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
    symbol: "OHM",
    decimals: 9,
  },
  {
    address: "0xdb0238975ce84f89212ffa56c64c0f2b47f8f153",
    symbol: "FLORK",
    decimals: 18,
  },
  {
    address: "0xeaa63125dd63f10874f99cdbbb18410e7fc79dd3",
    symbol: "HEMULE",
    decimals: 18,
  },
  {
    address: "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3",
    symbol: "FCL",
    decimals: 18,
  },
  {
    address: "0xf941d3aabf2ee0f5589e68ba6047b8329592b366",
    symbol: "HEEL",
    decimals: 9,
  },
  {
    address: "0x176bc22e1855cd5cf5a840081c6c5b92b55e2210",
    symbol: "GBE",
    decimals: 18,
  },
  {
    address: "0xcf9560b9e952b195d408be966e4f6cf4ab8206e5",
    symbol: "EVIL",
    decimals: 18,
  },
  {
    address: "0x8cb8c4263eb26b2349d74ea2cb1b27bc40709e12",
    symbol: "EYWA",
    decimals: 18,
  },
  {
    address: "0x017e9db34fc69af0dc7c7b4b33511226971cddc7",
    symbol: "OCD",
    decimals: 18,
  },
  {
    address: "0x545bd6c032efdde65a377a6719def2796c8e0f2e",
    symbol: "AENS",
    decimals: 18,
  },
  {
    address: "0x5b502e3796385e1e9755d7043b9c945c3accec9c",
    symbol: "AKNC",
    decimals: 18,
  },
  {
    address: "0xbdbdbdd0c22888e63cb9098ad6d68439197cb091",
    symbol: "BDXN",
    decimals: 18,
  },
  {
    address: "0xad038eb671c44b853887a7e32528fab35dc5d710",
    symbol: "DBR",
    decimals: 18,
  },
  {
    address: "0x0e9cc0f7e550bd43bd2af2214563c47699f96479",
    symbol: "UNLEASH",
    decimals: 18,
  },
  {
    address: "0x7dedbce5a2e31e4c75f87fea60bf796c17718715",
    symbol: "PNP",
    decimals: 18,
  },
  {
    address: "0x5eca7b975e34567d9460fa613013a7a6993ad185",
    symbol: "BS",
    decimals: 18,
  },
  {
    address: "0xb76cf92076adbf1d9c39294fa8e7a67579fde357",
    symbol: "ARPL",
    decimals: 18,
  },
  {
    address: "0xc19b6a4ac7c7cc24459f08984bbd09664af17bd1",
    symbol: "SENSO",
    decimals: 0,
  },
  {
    address: "0x3231cb76718cdef2155fc47b5286d82e6eda273f",
    symbol: "EURE",
    decimals: 18,
  },
  {
    address: "0x819c1a1568934ee59d9f3c8b9640908556c44140",
    symbol: "HOBBES",
    decimals: 18,
  },
  {
    address: "0xea3983fc6d0fbbc41fb6f6091f68f3e08894dc06",
    symbol: "UDO",
    decimals: 18,
  },
  {
    address: "0x541f9ac587be412ba0486ea3dbcf09dc11db76ce",
    symbol: "NEBULA",
    decimals: 18,
  },
  {
    address: "0xf8c76dbea329ec4fa987afc514f805b21b249d79",
    symbol: "L",
    decimals: 18,
  },
  {
    address: "0x198065e69a86cb8a9154b333aad8efe7a3c256f8",
    symbol: "KOY",
    decimals: 18,
  },
  {
    address: "0x39b8b6385416f4ca36a20319f70d28621895279d",
    symbol: "EURE",
    decimals: 18,
  },
  {
    address: "0xd7c302fc3ac829c7e896a32c4bd126f3e8bd0a1f",
    symbol: "B2M",
    decimals: 18,
  },
  {
    address: "0x113c65707c530502fef959308197353f6df97867",
    symbol: "JOKER",
    decimals: 18,
  },
  {
    address: "0x6aa3ecec75ceb388d2e929814ead4fc4cd0648fc",
    symbol: "RVSL",
    decimals: 18,
  },
  {
    address: "0x089453742936dd35134383aee9d78bee63a69b01",
    symbol: "GOLD",
    decimals: 18,
  },
  {
    address: "0xbcbda13bd60bc0e91745186e274d1445078d6b33",
    symbol: "FERRET",
    decimals: 18,
  },
  {
    address: "0xbeef01735c132ada46aa9aa4c54623caa92a64cb",
    symbol: "STEAKUSDC",
    decimals: 18,
  },
  {
    address: "0x32b86b99441480a7e5bd3a26c124ec2373e3f015",
    symbol: "BAD",
    decimals: 18,
  },
  {
    address: "0x53be7be0ce7f92bcbd2138305735160fb799be4f",
    symbol: "NTMPI",
    decimals: 6,
  },
  {
    address: "0xf2ec4a773ef90c58d98ea734c0ebdb538519b988",
    symbol: "DOGE20",
    decimals: 9,
  },
  {
    address: "0xa62894d5196bc44e4c3978400ad07e7b30352372",
    symbol: "X",
    decimals: 9,
  },
  {
    address: "0x2f573070e6090b3264fe707e2c9f201716f123c7",
    symbol: "MUMU",
    decimals: 18,
  },
  {
    address: "0xf482d79ae6e8725c199213fc909d6bc30df62815",
    symbol: "RIWA",
    decimals: 9,
  },
  {
    address: "0x26e550ac11b26f78a04489d5f20f24e3559f7dd9",
    symbol: "KEKIUS",
    decimals: 9,
  },
  {
    address: "0x7ba5273d53d8a964b0a338e25def0c082f5c29d3",
    symbol: "WEN",
    decimals: 8,
  },
  {
    address: "0xf257a2783f6633a149b5966e32432b5bb3462c96",
    symbol: "DOGECOIN",
    decimals: 8,
  },
  {
    address: "0xffffffff2ba8f66d4e51811c5190992176930278",
    symbol: "COMBO",
    decimals: 18,
  },
  {
    address: "0x45f93404ae1e4f0411a7f42bc6a5dc395792738d",
    symbol: "DGEN",
    decimals: 18,
  },
  {
    address: "0xb30240d48c05a4b950c470e2d6aefc9117a50624",
    symbol: "RUBY",
    decimals: 18,
  },
  {
    address: "0xd0b3a986fff305854a7238a8e099cce1ced01a3d",
    symbol: "NOVA",
    decimals: 18,
  },
  {
    address: "0x14da230d6726c50f759bc1838717f8ce6373509c",
    symbol: "KAT",
    decimals: 18,
  },
  {
    address: "0x1a88df1cfe15af22b3c4c783d4e6f7f9e0c1885d",
    symbol: "STKGHO",
    decimals: 18,
  },
  {
    address: "0xf31826269ac7f452b1274cc884812f426c18ddca",
    symbol: "MILK",
    decimals: 18,
  },
  {
    address: "0xa0d3707c569ff8c87fa923d3823ec5d81c98be78",
    symbol: "IETHV2",
    decimals: 18,
  },
  {
    address: "0xde67d97b8770dc98c746a3fc0093c538666eb493",
    symbol: "BROCK",
    decimals: 9,
  },
  {
    address: "0xd2c869382c7ac9f87ff73548d029d67c0f9dee31",
    symbol: "WAGIEBOT",
    decimals: 9,
  },
  {
    address: "0x614a48c41be6ba6762b63a92cc33cfb5e8149332",
    symbol: "DUSTY",
    decimals: 9,
  },
  {
    address: "0xa34ee6108fe427f91edce0d6520d9fec0e64f67b",
    symbol: "PLPC",
    decimals: 9,
  },
  {
    address: "0x3127294f1fd3c097ef31e54301069346b29d0209",
    symbol: "BLAST",
    decimals: 18,
  },
  {
    address: "0xbc68ff3b062bc588603d71ec8d4273391edf152c",
    symbol: "OWCT",
    decimals: 18,
  },
  {
    address: "0xf6afc05fccea5a53f22a3e39ffee861e016bd9a0",
    symbol: "WOLF",
    decimals: 18,
  },
  {
    address: "0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9",
    symbol: "SIS",
    decimals: 18,
  },
  {
    address: "0x3feb4fea5132695542f8ede5076ac43296d17c6d",
    symbol: "BTC20",
    decimals: 8,
  },
  {
    address: "0x56978e609f2cab06f77c5c8fd75166fcd8f09bd8",
    symbol: "GENIE",
    decimals: 18,
  },
  {
    address: "0x18cc2ba8995c6307e355726244adb023cf00522f",
    symbol: "MONKE",
    decimals: 9,
  },
  {
    address: "0x99a01a4d6a4d621094983050d9a2f10b2912e53d",
    symbol: "VRSW",
    decimals: 18,
  },
  {
    address: "0x99fe3b1391503a1bc1788051347a1324bff41452",
    symbol: "SX",
    decimals: 18,
  },
  {
    address: "0xce9de5365739b1bed5c8546867aee4209fbb8538",
    symbol: "THUG",
    decimals: 18,
  },
  {
    address: "0x265f542c1e78068f13d87c6fe0df54f3e9562a48",
    symbol: "POP",
    decimals: 9,
  },
  {
    address: "0x46c0f8259c4e4d50320124e52f3040cb9e4d04c7",
    symbol: "SHIELD",
    decimals: 18,
  },
  {
    address: "0x84412819ae69b10250d0d54d58f454018f1c8a42",
    symbol: "DUNG",
    decimals: 18,
  },
  {
    address: "0xf31698ddad0d11160fe85c500397a470cd3d492e",
    symbol: "WEXO",
    decimals: 18,
  },
  {
    address: "0x60eb57d085c59932d5faa6c6026268a4386927d0",
    symbol: "LOCG",
    decimals: 18,
  },
  {
    address: "0x4c0f743928ca8fa7fb24ad89669c8a7838f34917",
    symbol: "STACK",
    decimals: 18,
  },
  {
    address: "0x72fdc31f4a9a1edf6b6132d3c1754f1cdcf5d9b1",
    symbol: "QBX",
    decimals: 18,
  },
  {
    address: "0x267eb2a9a13dc304a9deff4277abe850d0852c5f",
    symbol: "TAI",
    decimals: 8,
  },
  {
    address: "0x128ad1ad707c3b36e6f2ac9739f9df7516fdb592",
    symbol: "ALFA",
    decimals: 18,
  },
  {
    address: "0x0c08638473cafbca3beb113616a1871f4bfad4f9",
    symbol: "ZOO",
    decimals: 18,
  },
  {
    address: "0x95a4492f028aa1fd432ea71146b433e7b4446611",
    symbol: "APY",
    decimals: 18,
  },
  {
    address: "0x7b0df1cd724ec34ec9bc4bd19749b01afb490761",
    symbol: "KOIN",
    decimals: 9,
  },
  {
    address: "0x5aef5bba19e6a1644805bd4f5c93c8557b87c62c",
    symbol: "FAKEAI",
    decimals: 18,
  },
  {
    address: "0x97d4f49eeb0e2c96d5ebaa71ab8418e563ecd9fd",
    symbol: "LSD",
    decimals: 9,
  },
  {
    address: "0xb459f7204a8ac84f9e7758d6d839ebd01670e35c",
    symbol: "LOTTY",
    decimals: 18,
  },
  {
    address: "0x3d234a9d23f01c5556ad3dfa88f470f8982ab1b4",
    symbol: "VATR",
    decimals: 18,
  },
  {
    address: "0xaa8330fb2b4d5d07abfe7a72262752a8505c6b37",
    symbol: "POLC",
    decimals: 18,
  },
  {
    address: "0x0000206329b97db379d5e1bf586bbdb969c63274",
    symbol: "USDA",
    decimals: 18,
  },
  {
    address: "0x72d4bc91fbd9b257eae62a5758288d9797c9a76a",
    symbol: "RUNEVM",
    decimals: 9,
  },
  {
    address: "0x8c130499d33097d4d000d3332e1672f75b431543",
    symbol: "HOPPY",
    decimals: 8,
  },
  {
    address: "0x3d806324b6df5af3c1a81acba14a8a62fe6d643f",
    symbol: "SOLANA",
    decimals: 18,
  },
  {
    address: "0xb446566d6d644249d5d82aab5fea8a5b7da3f691",
    symbol: "TBOS",
    decimals: 0,
  },
  {
    address: "0xc7bb03ddd9311fc0338be013e7b523254092fda9",
    symbol: "N",
    decimals: 18,
  },
  {
    address: "0x4e51a6b3cc6d5ae69a0d44db9de846aeb5a582dd",
    symbol: "GYOZA",
    decimals: 9,
  },
  {
    address: "0x112b08621e27e10773ec95d250604a041f36c582",
    symbol: "KAS",
    decimals: 8,
  },
  {
    address: "0x56528c1df17fd5451451eb6efde297758bc8f9a1",
    symbol: "AFS",
    decimals: 0,
  },
  {
    address: "0x848896470d989f30503d8f883c331f63b73b66ea",
    symbol: "MDI",
    decimals: 18,
  },
  {
    address: "0x7bd44cf5c0566aab26150a0cd5c3d20c5535686f",
    symbol: "EVILPEPE",
    decimals: 18,
  },
  {
    address: "0x414cbf31c62d99515bfd66497b495a585b52f703",
    symbol: "CHAP",
    decimals: 0,
  },
  {
    address: "0x2c623d3cc9a2cc158951b8093cb94e80cf56deea",
    symbol: "NEX",
    decimals: 18,
  },
  {
    address: "0xc9a1f104fbbda8b8752946f7d56d59d28284037f",
    symbol: "DOUG",
    decimals: 18,
  },
  {
    address: "0x12ed0641242e4c6c220e3ca8f616e9d5470ac99a",
    symbol: "EARN",
    decimals: 18,
  },
  {
    address: "0x3f57c35633cb29834bb7577ba8052eab90f52a02",
    symbol: "DFNDR",
    decimals: 18,
  },
  {
    address: "0x8dbd1331b1de57835b24657ed21d0691e2e7362a",
    symbol: "SENT",
    decimals: 18,
  },
  {
    address: "0x27206f5a9afd0c51da95f20972885545d3b33647",
    symbol: "KUKU",
    decimals: 0,
  },
  {
    address: "0x21413c119b0c11c5d96ae1bd328917bc5c8ed67e",
    symbol: "GENE",
    decimals: 18,
  },
  {
    address: "0x9c354503c38481a7a7a51629142963f98ecc12d0",
    symbol: "OGV",
    decimals: 18,
  },
  {
    address: "0x4309e88d1d511f3764ee0f154cee98d783b61f09",
    symbol: "OCAI",
    decimals: 18,
  },
  {
    address: "0xafe53eea0cfe20198328890b69107d5fd8159a77",
    symbol: "X",
    decimals: 9,
  },
  {
    address: "0xb1c064c3f2908f741c9dea4afc5773238b53e6cc",
    symbol: "XRP",
    decimals: 9,
  },
  {
    address: "0xa3c31927a092bd54eb9a0b5dfe01d9db5028bd4f",
    symbol: "ESPR",
    decimals: 9,
  },
  {
    address: "0xbd7e92cf6f857be8541fca6abfb72aef8e16c307",
    symbol: "PRO",
    decimals: 18,
  },
  {
    address: "0xb3912b20b3abc78c15e85e13ec0bf334fbb924f7",
    symbol: "HANA",
    decimals: 9,
  },
  {
    address: "0xe0c8b298db4cffe05d1bea0bb1ba414522b33c1b",
    symbol: "NCDT",
    decimals: 18,
  },
  {
    address: "0xba3335588d9403515223f109edc4eb7269a9ab5d",
    symbol: "GEAR",
    decimals: 18,
  },
  {
    address: "0x94b888e11a9e960a9c3b3528eb6ac807b27ca62e",
    symbol: "INLSETH",
    decimals: 18,
  },
  {
    address: "0x0a13a5929e5f0ff0eaba4bd9e9512c91fce40280",
    symbol: "XAI",
    decimals: 9,
  },
  {
    address: "0x9138c8779a0ac8a84d69617d5715bd8afa23c650",
    symbol: "FLRBRG",
    decimals: 18,
  },
  {
    address: "0xeda8b016efa8b1161208cf041cd86972eee0f31e",
    symbol: "IHT",
    decimals: 18,
  },
  {
    address: "0x59c6766de1dc50a9c9db86cb0461b5ce07408ab7",
    symbol: "SPURDO",
    decimals: 8,
  },
  {
    address: "0xff836a5821e69066c87e268bc51b849fab94240c",
    symbol: "SMURFCAT",
    decimals: 18,
  },
  {
    address: "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
    symbol: "DRGN",
    decimals: 18,
  },
  {
    address: "0xb244b3574a5627849fca2057e3854340def63071",
    symbol: "VEIL",
    decimals: 18,
  },
  {
    address: "0x60927b83ddd2096f38f22a8a2d84cf863402d1a1",
    symbol: "MIND",
    decimals: 18,
  },
  {
    address: "0x3bd7d4f524d09f4e331577247a048d56e4b67a7f",
    symbol: "5IRE",
    decimals: 18,
  },
  {
    address: "0x3ee4b152824b657644c7a9b50694787e80eb8f4a",
    symbol: "BAZED",
    decimals: 18,
  },
  {
    address: "0xe27f31b020f95f90f0db2ae0a5fae3b505df7a3e",
    symbol: "STEALTH",
    decimals: 18,
  },
  {
    address: "0xe1a70b24e109f7a8b39806c554e123efc6769e91",
    symbol: "LSDAI",
    decimals: 18,
  },
  {
    address: "0x4efce4c758ddfb3911a1a1282a29ce0bdb16ef86",
    symbol: "",
    decimals: 18,
  },
  {
    address: "0x312d43881860807fa04b193d69744d087fc3308a",
    symbol: "BD20",
    decimals: 18,
  },
  {
    address: "0xf4308b0263723b121056938c2172868e408079d0",
    symbol: "CRYO",
    decimals: 18,
  },
  {
    address: "0xe0a6136f866684c0f19936c0c42a8c181c066f1b",
    symbol: "TIDE",
    decimals: 18,
  },
  {
    address: "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b",
    symbol: "WPE",
    decimals: 18,
  },
  {
    address: "0x280df82db83abb0a4c734bb02afc7985a1c8eaf2",
    symbol: "EPETS",
    decimals: 9,
  },
  {
    address: "0x1cdd2eab61112697626f7b4bb0e23da4febf7b7c",
    symbol: "USDTSO",
    decimals: 6,
  },
  {
    address: "0x2d886570a0da04885bfd6eb48ed8b8ff01a0eb7e",
    symbol: "BCB",
    decimals: 9,
  },
  {
    address: "0x4501a82790ef2587dfeb93dc038541228e516597",
    symbol: "HYDRA",
    decimals: 18,
  },
  {
    address: "0xda47862a83dac0c112ba89c6abc2159b95afd71c",
    symbol: "PRISMA",
    decimals: 18,
  },
  {
    address: "0x423f4e6138e475d85cf7ea071ac92097ed631eea",
    symbol: "PNDC",
    decimals: 18,
  },
  {
    address: "0xed4e879087ebd0e8a77d66870012b5e0dffd0fa4",
    symbol: "APX",
    decimals: 18,
  },
  {
    address: "0x99f618edcfedca1fcc8302e14daa84802114a8c5",
    symbol: "DBNB",
    decimals: 9,
  },
  {
    address: "0x8e3fa615392688ddd9bf8f25d1f8dc744ac1a12c",
    symbol: "GME",
    decimals: 9,
  },
  {
    address: "0xabec00542d141bddf58649bfe860c6449807237c",
    symbol: "X",
    decimals: 18,
  },
  {
    address: "0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789",
    symbol: "KROM",
    decimals: 18,
  },
  {
    address: "0x07e0edf8ce600fb51d44f51e3348d77d67f298ae",
    symbol: "XRP",
    decimals: 8,
  },
  {
    address: "0xe86df1970055e9caee93dae9b7d5fd71595d0e18",
    symbol: "BTC20",
    decimals: 18,
  },
  {
    address: "0x209a78d23f825950a5df4d6d21288e5212b44f2c",
    symbol: "ANVA",
    decimals: 18,
  },
  {
    address: "0x3e34eabf5858a126cb583107e643080cee20ca64",
    symbol: "LINQ",
    decimals: 18,
  },
  {
    address: "0x19247618d79e3fc4d4866169789e4b8eedef52e6",
    symbol: "CAI",
    decimals: 18,
  },
  {
    address: "0xc14b4d4ca66f40f352d7a50fd230ef8b2fb3b8d4",
    symbol: "TOOLS",
    decimals: 18,
  },
  {
    address: "0xbe1bc2e2338defcd88e7f9f5f745ddb222180ab9",
    symbol: "TESO",
    decimals: 9,
  },
  {
    address: "0xe2512a2f19f0388ad3d7a5263eaa82acd564827b",
    symbol: "SHIDO",
    decimals: 18,
  },
  {
    address: "0xed354cae598148846aa9694254c854fc7051163c",
    symbol: "SHIDO",
    decimals: 18,
  },
  {
    address: "0x98e1f56b334438e3f0bde22d92f5bfd746e0631f",
    symbol: "ILUM",
    decimals: 18,
  },
  {
    address: "0x20945ca1df56d237fd40036d47e866c7dccd2114",
    symbol: "NSURE",
    decimals: 18,
  },
  {
    address: "0x982b50e55394641ca975a0eec630b120b671391a",
    symbol: "ECOTERRA",
    decimals: 9,
  },
  {
    address: "0x1a44e35d5451e0b78621a1b3e7a53dfaa306b1d0",
    symbol: "B-BAOETH-ETH-BPT",
    decimals: 18,
  },
  {
    address: "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb",
    symbol: "SETH",
    decimals: 18,
  },
  {
    address: "0x0ae055097c6d159879521c384f1d2123d1f195e6",
    symbol: "STAKE",
    decimals: 18,
  },
  {
    address: "0xfae30394a76796dc3df37c2714f5fc12083dfdb0",
    symbol: "NAKA",
    decimals: 18,
  },
  {
    address: "0xb1a822ce8c799b0777ed1f260113819247e1bf26",
    symbol: "FTX",
    decimals: 18,
  },
  {
    address: "0x3250577e12b9469915c1fa3a71c22817ca44c4d9",
    symbol: "SOC",
    decimals: 18,
  },
  {
    address: "0x285db79fa7e0e89e822786f48a7c98c6c1dc1c7d",
    symbol: "MIC",
    decimals: 18,
  },
  {
    address: "0xfcaf0e4498e78d65526a507360f755178b804ba8",
    symbol: "SHIB",
    decimals: 18,
  },
  {
    address: "0x320ed4c7243e35a00f9ca30a1ae60929d15eae37",
    symbol: "BLOX",
    decimals: 18,
  },
  {
    address: "0xebb82c932759b515b2efc1cfbb6bf2f6dbace404",
    symbol: "SHARES",
    decimals: 18,
  },
  {
    address: "0xca5b0ae1d104030a9b8f879523508efd86c14483",
    symbol: "TYBENG",
    decimals: 18,
  },
  {
    address: "0xcaa79bf8b1d00bf3d4f6dbec6221955871c04618",
    symbol: "CROC",
    decimals: 18,
  },
  {
    address: "0x7b744eea1deca2f1b7b31f15ba036fa1759452d7",
    symbol: "HIPP",
    decimals: 18,
  },
  {
    address: "0x34df29dd880e9fe2cec0f85f7658b75606fb2870",
    symbol: "NAVYSEAL",
    decimals: 9,
  },
  {
    address: "0x32bd822d615a3658a68b6fdd30c2fcb2c996d678",
    symbol: "MSWETH",
    decimals: 18,
  },
  {
    address: "0x69cd13d248830602a60b1f20ab11f5049385877d",
    symbol: "BABYPEPE",
    decimals: 18,
  },
  {
    address: "0x4594cffbfc09bc5e7ecf1c2e1c1e24f0f7d29036",
    symbol: "0KN",
    decimals: 18,
  },
  {
    address: "0xcd6926193308d3b371fdd6a6219067e550000000",
    symbol: "NEST",
    decimals: 18,
  },
  {
    address: "0xa9ad6830180f9c150349f2cecadd710586e35cb7",
    symbol: "ETHS",
    decimals: 18,
  },
  {
    address: "0x00c5ca160a968f47e7272a0cfcda36428f386cb6",
    symbol: "USDEBT",
    decimals: 18,
  },
  {
    address: "0x0b0a8c7c34374c1d0c649917a97eee6c6c929b1b",
    symbol: "SHEPE",
    decimals: 9,
  },
  {
    address: "0x4b7ffcb2b92fb4890f22f62a52fb7a180eab818e",
    symbol: "DIVA",
    decimals: 18,
  },
  {
    address: "0x43e54c2e7b3e294de3a155785f52ab49d87b9922",
    symbol: "ASDCRV",
    decimals: 18,
  },
  {
    address: "0x24a6a37576377f63f194caa5f518a60f45b42921",
    symbol: "BANK",
    decimals: 18,
  },
  {
    address: "0xe4ab0be415e277d82c38625b72bd7dea232c2e7d",
    symbol: "XRP20",
    decimals: 18,
  },
  {
    address: "0x6a8b188fadbe8b52a2c23ea2d0df74f8956e7730",
    symbol: "QSWAP",
    decimals: 18,
  },
  {
    address: "0x43d7e65b8ff49698d9550a7f315c87e67344fb59",
    symbol: "SHIA",
    decimals: 18,
  },
  {
    address: "0x73c6a7491d0db90bdb0060308cde0f49dfd1d0b0",
    symbol: "DOBO",
    decimals: 18,
  },
  {
    address: "0xd87996ff3d06858bfc20989aef50cc5fcd4d84ca",
    symbol: "GOLDEN",
    decimals: 9,
  },
  {
    address: "0x420fbb6006fb251318414ffa530590c3d7618e33",
    symbol: "ICELAND",
    decimals: 9,
  },
  {
    address: "0x46305b2ebcd92809d5fcef577c20c28a185af03c",
    symbol: "SHADOW",
    decimals: 18,
  },
  {
    address: "0x297e4e5e59ad72b1b0a2fd446929e76117be0e0a",
    symbol: "VALOR",
    decimals: 18,
  },
  {
    address: "0x198d7387fa97a73f05b8578cdeff8f2a1f34cd1f",
    symbol: "WJAURA",
    decimals: 18,
  },
  {
    address: "0x9baa12a9e3b9dc355f162082762f95626367d087",
    symbol: "HANDZ",
    decimals: 18,
  },
  {
    address: "0x97de57ec338ab5d51557da3434828c5dbfada371",
    symbol: "EUSD",
    decimals: 18,
  },
  {
    address: "0xdf3ac4f479375802a821f7b7b46cd7eb5e4262cc",
    symbol: "EUSD",
    decimals: 18,
  },
  {
    address: "0x7ad16874759348f04b6b6119463d66c07ae54899",
    symbol: "PIRB",
    decimals: 18,
  },
  {
    address: "0x776280f68ad33c4d49e6846507b7dbaf7811c89f",
    symbol: "ZETH",
    decimals: 18,
  },
  {
    address: "0x51fe05eac152494908ff1ebbd50e116e960baf64",
    symbol: "XGPT",
    decimals: 18,
  },
  {
    address: "0xd82fd4d6d62f89a1e50b1db69ad19932314aa408",
    symbol: "LIQ",
    decimals: 18,
  },
  {
    address: "0xaf2ca40d3fc4459436d11b94d21fa4b8a89fb51d",
    symbol: "GCOTI",
    decimals: 18,
  },
  {
    address: "0xec21890967a8ceb3e55a3f79dac4e90673ba3c2e",
    symbol: "BEBE",
    decimals: 8,
  },
  {
    address: "0x4208aa4d7a9a10f4f8bb7f6400c1b2161d946969",
    symbol: "DONG",
    decimals: 18,
  },
  {
    address: "0x03ee5026c07d85ff8ae791370dd0f4c1ae6c97fc",
    symbol: "OXL",
    decimals: 18,
  },
  {
    address: "0xaa247c0d81b83812e1abf8bab078e4540d87e3fb",
    symbol: "MSN",
    decimals: 18,
  },
  {
    address: "0xa0117792d4b100fd329b37e8ab4181df8a5b3326",
    symbol: "BREPE",
    decimals: 18,
  },
  {
    address: "0x9532ca064278ce3ba4fcc66cebec6d9f04f58f70",
    symbol: "BOTC",
    decimals: 9,
  },
  {
    address: "0xf6f31b8afbf8e3f7fc8246bef26093f02838da98",
    symbol: "UNIVERSE",
    decimals: 18,
  },
  {
    address: "0xa3cb87080e68ad54d00573983d935fa85d168fde",
    symbol: "IBIT",
    decimals: 8,
  },
  {
    address: "0xf47245e9a3ba3dca8b004e34afc1290b1d435a52",
    symbol: "MBLK",
    decimals: 18,
  },
  {
    address: "0xb281d84989c06e2a6ccdc5ea7bf1663c79a1c31a",
    symbol: "ZETA",
    decimals: 18,
  },
  {
    address: "0x08d0222a206d1aee59a9b66969c04fd1e8a0f864",
    symbol: "MOMOV2",
    decimals: 18,
  },
  {
    address: "0x07c904d8c04323ef9fe6bf13aaeba05b62c54825",
    symbol: "EEYOR",
    decimals: 18,
  },
  {
    address: "0x226d6d842d49b4d757bef1632053a198d5d9c8aa",
    symbol: "BLOCK",
    decimals: 18,
  },
  {
    address: "0xc3ade5ace1bbb033ccae8177c12ecbfa16bd6a9d",
    symbol: "INSWETH",
    decimals: 18,
  },
  {
    address: "0xdb81f7b3f0b2baebd5009cddade5c9a9c82378bb",
    symbol: "JJ",
    decimals: 18,
  },
  {
    address: "0xfbd5fd3f85e9f4c5e8b40eec9f8b8ab1caaa146b",
    symbol: "TREAT",
    decimals: 18,
  },
  {
    address: "0x3540abe4f288b280a0740ad5121aec337c404d15",
    symbol: "TPRO",
    decimals: 18,
  },
  {
    address: "0x68aae81b4241ffe03d3552d42a69940604fe28bf",
    symbol: "MUFFIN",
    decimals: 9,
  },
  {
    address: "0xdcc97d2c1048e8f3f2fc58ace9024ab8b350e4b1",
    symbol: "BEN",
    decimals: 18,
  },
  {
    address: "0xd1b5651e55d4ceed36251c61c50c889b36f6abb5",
    symbol: "SDCRV",
    decimals: 18,
  },
  {
    address: "0x8929e9dbd2785e3ba16175e596cdd61520fee0d1",
    symbol: "ALTD",
    decimals: 18,
  },
  {
    address: "0xd561a593d9dd8b9a0e3a487dfb517c9371d6dda7",
    symbol: "MEOW",
    decimals: 18,
  },
  {
    address: "0x8353b92201f19b4812eee32efd325f7ede123718",
    symbol: "SCM",
    decimals: 18,
  },
  {
    address: "0xca7013ba4bf76bcdc3ffc71735896682644f47c2",
    symbol: "DGN",
    decimals: 18,
  },
  {
    address: "0x75ce16d11b83605aa039d40d7d846ff23064fb65",
    symbol: "DUB",
    decimals: 9,
  },
  {
    address: "0x8e01397163b21f64cec1f06ca6cc7d9aa8f718e9",
    symbol: "LSHARE",
    decimals: 18,
  },
  {
    address: "0x2e19067cbeb38d6554d31a1a83aefc4018a1688a",
    symbol: "CBK",
    decimals: 18,
  },
  {
    address: "0x1142866f451d9d5281c5c8349a332bd338e552a1",
    symbol: "SILKROAD",
    decimals: 18,
  },
  {
    address: "0xe925aa77d51746b865e5c05165a879820cb4b720",
    symbol: "CCASH",
    decimals: 18,
  },
  {
    address: "0x7aa2f174fbc4d0a17b34adfb9b3e1dc029b46d76",
    symbol: "RADA",
    decimals: 18,
  },
  {
    address: "0xc47ef9b19c3e29317a50f5fbe594eba361dada4a",
    symbol: "EDLC",
    decimals: 6,
  },
  {
    address: "0x9f891b5ecbd89dd8a5ee4d1d80efc3fe78b306cb",
    symbol: "SONIK",
    decimals: 18,
  },
  {
    address: "0x4e452b391a86c9240e98df7277ce0bea5be08e43",
    symbol: "PAXU",
    decimals: 18,
  },
  {
    address: "0x473f4068073cd5b2ab0e4cc8e146f9edc6fb52cc",
    symbol: "NUT",
    decimals: 18,
  },
  {
    address: "0x9b0e1c344141fb361b842d397df07174e1cdb988",
    symbol: "EMOTI",
    decimals: 9,
  },
  {
    address: "0x3294395e62f4eb6af3f1fcf89f5602d90fb3ef69",
    symbol: "CELO",
    decimals: 18,
  },
  {
    address: "0xbb63e6be33bc5b5386d7ab0529dc6c400f2ac2ec",
    symbol: "CUCK",
    decimals: 18,
  },
  {
    address: "0x890a60b4450484847380bddca0c3c3ee2ff0dfbe",
    symbol: "XRAI",
    decimals: 18,
  },
  {
    address: "0x96add417293a49e80f024734e96cfd8b355bcc14",
    symbol: "LILA",
    decimals: 18,
  },
  {
    address: "0x37dba54fdc402aff647ce06c66972f5d662c326d",
    symbol: "MELON",
    decimals: 18,
  },
  {
    address: "0x9863bcc2fb23dfdf5fe275aa4c5575a32a580911",
    symbol: "PEPURAI",
    decimals: 18,
  },
  {
    address: "0x09db87a538bd693e9d08544577d5ccfaa6373a48",
    symbol: "YNETH",
    decimals: 18,
  },
  {
    address: "0x75c97384ca209f915381755c582ec0e2ce88c1ba",
    symbol: "FINE",
    decimals: 18,
  },
  {
    address: "0xa9049425b938c46ac3e312d4cdaeccb26282aeb2",
    symbol: "WIK",
    decimals: 18,
  },
  {
    address: "0x69d29f1b0cc37d8d3b61583c99ad0ab926142069",
    symbol: "",
    decimals: 9,
  },
  {
    address: "0x7d51888c5abb7cdfa9cdd6a50673c7f8afaccd7f",
    symbol: "DD",
    decimals: 18,
  },
  {
    address: "0xa40640458fbc27b6eefedea1e9c9e17d4cee7a21",
    symbol: "AEUR",
    decimals: 18,
  },
  {
    address: "0x2cc7a972ebc1865b346085655f929abfa74cd4dc",
    symbol: "SHIFU",
    decimals: 18,
  },
  {
    address: "0xddcc69879e1d2376ce799051afa98c689f234cca",
    symbol: "SMRT",
    decimals: 18,
  },
  {
    address: "0xadf7c35560035944e805d98ff17d58cde2449389",
    symbol: "SPEC",
    decimals: 18,
  },
  {
    address: "0x1063181dc986f76f7ea2dd109e16fc596d0f522a",
    symbol: "CYBA",
    decimals: 9,
  },
  {
    address: "0x03049b395147713ae53c0617093675b4b86dde78",
    symbol: "PSPS",
    decimals: 18,
  },
  {
    address: "0x0c21638d4bcb88568f88bc84a50e317715f8de8a",
    symbol: "GDX",
    decimals: 18,
  },
  {
    address: "0x55a8f6c6b3aa58ad6d1f26f6afeded78f32e19f4",
    symbol: "AEGIS",
    decimals: 9,
  },
  {
    address: "0x4fbaf51b95b024d0d7cab575be2a1f0afedc9b64",
    symbol: "BONK",
    decimals: 18,
  },
  {
    address: "0x2af72850c504ddd3c1876c66a914caee7ff8a46a",
    symbol: "WHL",
    decimals: 18,
  },
  {
    address: "0x518c54fdc12ba593617160eca423f4c2cd3ecac3",
    symbol: "STI",
    decimals: 18,
  },
  {
    address: "0x4d9b0b7a6db042cb990d36a0df5aa2960e552f16",
    symbol: "TETHER",
    decimals: 9,
  },
  {
    address: "0xf385905e56db4d8a208b20aa8a88dbb225f773d4",
    symbol: "BN",
    decimals: 18,
  },
  {
    address: "0x5fe72ed557d8a02fff49b3b826792c765d5ce162",
    symbol: "SHEZMU",
    decimals: 18,
  },
  {
    address: "0x503cd987998824192578d0d7950148445667287c",
    symbol: "FOG",
    decimals: 18,
  },
  {
    address: "0xbfabde619ed5c4311811cf422562709710db587d",
    symbol: "DIVA",
    decimals: 18,
  },
  {
    address: "0x4c45bbec2ff7810ef4a77ad7bd4757c446fe4155",
    symbol: "JNGL",
    decimals: 18,
  },
  {
    address: "0x2de7b02ae3b1f11d51ca7b2495e9094874a064c0",
    symbol: "SHIB2",
    decimals: 18,
  },
  {
    address: "0x089729b0786c8803cff972c16e402f3344d079ea",
    symbol: "BGPT",
    decimals: 18,
  },
  {
    address: "0x1b66474c8eca3827f16202907f41f63785579716",
    symbol: "WXT",
    decimals: 6,
  },
  {
    address: "0xcdd0d11de0225b528b3a20d6436392c8260969d0",
    symbol: "ONIC",
    decimals: 18,
  },
  {
    address: "0x65086e9928d297ebae6a7d24d8c3aea6f8f6b5d7",
    symbol: "TOKI",
    decimals: 18,
  },
  {
    address: "0x405919920765e8d30822db9342b62bb0f92976e8",
    symbol: "QDFI",
    decimals: 18,
  },
  {
    address: "0xcdeb595293511115d9d9d44b189cc0da4a08cfaf",
    symbol: "JFISH",
    decimals: 18,
  },
  {
    address: "0x5faa989af96af85384b8a938c2ede4a7378d9875",
    symbol: "GAL",
    decimals: 18,
  },
  {
    address: "0xd22a61e8503bea5842e5e0126ca9ffc4dd492084",
    symbol: "",
    decimals: 18,
  },
  {
    address: "0x561cf9121e89926c27fa1cfc78dfcc4c422937a4",
    symbol: "SQUID",
    decimals: 18,
  },
  {
    address: "0xc15c94f460c6a01a93b8f9ba919fadcec9310f54",
    symbol: "XAI",
    decimals: 18,
  },
  {
    address: "0x5da151b95657e788076d04d56234bd93e409cb09",
    symbol: "OTSEA",
    decimals: 18,
  },
  {
    address: "0xe2cfd7a01ec63875cd9da6c7c1b7025166c2fa2f",
    symbol: "HYPER",
    decimals: 18,
  },
  {
    address: "0x47b751e318fe7e9769f4b56fabbffb05d530a88c",
    symbol: "PMW",
    decimals: 18,
  },
  {
    address: "0x52d134c6db5889fad3542a09eaf7aa90c0fdf9e4",
    symbol: "BIBTA",
    decimals: 18,
  },
  {
    address: "0x8bf30e9f44e5d068a9d0c20da22660997a532e33",
    symbol: "GDAG",
    decimals: 18,
  },
  {
    address: "0x001823d353a2d71ad744599390cbb2f8240afda9",
    symbol: "CHERRY",
    decimals: 18,
  },
  {
    address: "0x55b2cfcfe99110c773f00b023560dd9ef6c8a13b",
    symbol: "CDETI",
    decimals: 18,
  },
  {
    address: "0x7d3b4f8d5dd14a0c263c4bee7be434c15e188d3e",
    symbol: "MOE",
    decimals: 18,
  },
  {
    address: "0x41ea5d41eeacc2d5c4072260945118a13bb7ebce",
    symbol: "CRE",
    decimals: 18,
  },
  {
    address: "0x9b5c38cc2d1ba05ed87c8f8a2418475bacb20073",
    symbol: "SBIO",
    decimals: 18,
  },
  {
    address: "0x64bc2ca1be492be7185faa2c8835d9b824c8a194",
    symbol: "BIGTIME",
    decimals: 18,
  },
  {
    address: "0x2df7d0e4903029717c949cad204075a3d75c8806",
    symbol: "SWEET",
    decimals: 9,
  },
  {
    address: "0x697a79af2de4af9e9aa0d08905374556ad1353bb",
    symbol: "NINA",
    decimals: 18,
  },
  {
    address: "0x0176b898e92e814c06cc379e508ceb571f70bd40",
    symbol: "TIP",
    decimals: 18,
  },
  {
    address: "0xb113c6cf239f60d380359b762e95c13817275277",
    symbol: "BMEX",
    decimals: 6,
  },
  {
    address: "0xa6345ffadfa23dfc9014bce72ff2fa8712e54231",
    symbol: "KEK",
    decimals: 9,
  },
  {
    address: "0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe",
    symbol: "DZHV",
    decimals: 18,
  },
  {
    address: "0x5713c26280647adad2f25bb54376943ecaa9d8e3",
    symbol: "XMAS",
    decimals: 9,
  },
  {
    address: "0x1abaea1f7c830bd89acc67ec4af516284b1bc33c",
    symbol: "EURC",
    decimals: 6,
  },
  {
    address: "0xa247c6d23c8c7d223420700d16d189cff9357f38",
    symbol: "CHEESED",
    decimals: 9,
  },
  {
    address: "0x83e817e1574e2201a005ec0f7e700ed5606f555e",
    symbol: "MPENDLE",
    decimals: 18,
  },
  {
    address: "0x1903be033d3e436dd79a8cf9030675bcf97ab589",
    symbol: "BJK",
    decimals: 6,
  },
  {
    address: "0x901ea3606d567f9f1e964639d5cbb8659080be8a",
    symbol: "CWT",
    decimals: 18,
  },
  {
    address: "0x790814cd782983fab4d7b92cf155187a865d9f18",
    symbol: "MATT",
    decimals: 9,
  },
  {
    address: "0xddf688e96cb2531a69bf6347c02f069266c1aa81",
    symbol: "MMVG",
    decimals: 18,
  },
  {
    address: "0x1a23a6bfbadb59fa563008c0fb7cf96dfcf34ea1",
    symbol: "COFI",
    decimals: 18,
  },
  {
    address: "0xb8d6196d71cdd7d90a053a7769a077772aaac464",
    symbol: "MARS",
    decimals: 9,
  },
  {
    address: "0x32fd949e1953b21b7a8232ef4259cd708b4e0847",
    symbol: "HBT",
    decimals: 18,
  },
  {
    address: "0x653aab62056b92641116d63927de6141d780e596",
    symbol: "ACHF",
    decimals: 18,
  },
  {
    address: "0xb48eb8368c9c6e9b0734de1ef4ceb9f484b80b9c",
    symbol: "VMPX",
    decimals: 18,
  },
  {
    address: "0x667210a731447f8b385e068205759be2311b86d4",
    symbol: "ETF",
    decimals: 18,
  },
  {
    address: "0x38f9bb135ea88033f4377b9ea0fb5cfb773fec2f",
    symbol: "ALPHA",
    decimals: 18,
  },
  {
    address: "0x34ba042827996821cffeb06477d48a2ff9474483",
    symbol: "SHIB20",
    decimals: 8,
  },
  {
    address: "0x20561172f791f915323241e885b4f7d5187c36e1",
    symbol: "CAL",
    decimals: 18,
  },
  {
    address: "0xda30f261a962d5aae94c9ecd170544600d193766",
    symbol: "ORBR",
    decimals: 18,
  },
  {
    address: "0x642ac912a58428767fa14a26a749f9a1b001ba92",
    symbol: "XX",
    decimals: 9,
  },
  {
    address: "0x9f5e508182e1cbd23ea5ef65d1d6c342beb7d6d3",
    symbol: "JONES",
    decimals: 9,
  },
  {
    address: "0x015628ce9150db1bce2fbb717a09e846f8a32436",
    symbol: "BBC",
    decimals: 18,
  },
  {
    address: "0x2ef8a2ccb058915e00e16aa13cc6e36f19d8893b",
    symbol: "VDO",
    decimals: 18,
  },
  {
    address: "0xeb935deb517e4c2abc282e5e251ed4d05db79e93",
    symbol: "FBG",
    decimals: 18,
  },
  {
    address: "0xd09124e8a1e3d620e8807ad1d968021a5495cee8",
    symbol: "MCBETH",
    decimals: 18,
  },
  {
    address: "0x356e17967206efb413b60ab0ba44e269063a26c9",
    symbol: "OCISLY",
    decimals: 9,
  },
  {
    address: "0xfd4ca4a692f14d88af3e7ae13cf00d5095213b25",
    symbol: "WSKR",
    decimals: 18,
  },
  {
    address: "0x0058c8581b9fed6864faa654505bc89890cdb2dd",
    symbol: "BS9000",
    decimals: 9,
  },
  {
    address: "0x79c6ffe2ccbca761e9e289a69432bffb0b744876",
    symbol: "PINEOWL",
    decimals: 9,
  },
  {
    address: "0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0",
    symbol: "FOUR",
    decimals: 18,
  },
  {
    address: "0xfd1450a131599ff34f3be1775d8c8bf79e353d8c",
    symbol: "SHIBA",
    decimals: 18,
  },
  {
    address: "0x6f91d21de4e40b3b80636b6b3ba425b636b798cf",
    symbol: "WSB",
    decimals: 9,
  },
  {
    address: "0x1cfa5641c01406ab8ac350ded7d735ec41298372",
    symbol: "CJPY",
    decimals: 18,
  },
  {
    address: "0x2c95d751da37a5c1d9c5a7fd465c1d50f3d96160",
    symbol: "WASSIE",
    decimals: 18,
  },
  {
    address: "0x5aa158404fed6b4730c13f49d3a7f820e14a636f",
    symbol: "ULX",
    decimals: 18,
  },
  {
    address: "0x95640a134721475bc78594c8ea66c0182c7b9a50",
    symbol: "MXH",
    decimals: 9,
  },
  {
    address: "0x1236ea13c7339287cd00ab196aaa8217006b04dc",
    symbol: "EPL",
    decimals: 18,
  },
  {
    address: "0x365accfca291e7d3914637abf1f7635db165bb09",
    symbol: "FXN",
    decimals: 18,
  },
  {
    address: "0x394d14d78850e516fa5eb88f843ef43196e136b0",
    symbol: "DIGAU",
    decimals: 18,
  },
  {
    address: "0xf986408a1788ceb3bb4b4be4aa96a43914168554",
    symbol: "FASTAI",
    decimals: 18,
  },
  {
    address: "0x170dec83c7753aaad20c01a0016b5a2e143990d4",
    symbol: "WIGGER",
    decimals: 18,
  },
  {
    address: "0x2105465ab589b74747b01afdaf606d058fb082be",
    symbol: "HIXOKDKEKJCJDKSICND",
    decimals: 18,
  },
  {
    address: "0xed1ddc491a2c8b1f7d6e8933580a47e124ea38db",
    symbol: "IOC",
    decimals: 18,
  },
  {
    address: "0x5277f67a2be2e1a241613c357f26ae12458bf2c9",
    symbol: "FATGUY",
    decimals: 18,
  },
  {
    address: "0x9aaf731799e824a74a4d3a14e6b00bcc28c327db",
    symbol: "JAB",
    decimals: 18,
  },
  {
    address: "0x583019ff0f430721ada9cfb4fac8f06ca104d0b4",
    symbol: "ST-YETH",
    decimals: 18,
  },
  {
    address: "0x34dce75a3d1910cc9d188aa5a75fb9addcae0fcc",
    symbol: "XV",
    decimals: 18,
  },
  {
    address: "0xed40ab79a3225902435c26233ed84fb74bd8ffb8",
    symbol: "GSLAM",
    decimals: 18,
  },
  {
    address: "0xb39364b51d2c97b62b838bc5213b8627eb469101",
    symbol: "SWOT",
    decimals: 18,
  },
  {
    address: "0xf0610eb7d8ee12d59412da32625d5e273e78ff0b",
    symbol: "MDEX",
    decimals: 18,
  },
  {
    address: "0x67c4d14861f9c975d004cfb3ac305bee673e996e",
    symbol: "LANDWU",
    decimals: 9,
  },
  {
    address: "0xe5db5128935e3a8a8eaeabe4577fac2b353ae9fa",
    symbol: "AURK",
    decimals: 18,
  },
  {
    address: "0xee3c722d177559f73288cec91fa3e4bbfd8c27fc",
    symbol: "HHGTTG",
    decimals: 9,
  },
  {
    address: "0x7cd017ca5ddb86861fa983a34b5f495c6f898c41",
    symbol: "WUSD",
    decimals: 18,
  },
  {
    address: "0xc581b735a1688071a1746c968e0798d642ede491",
    symbol: "EURT",
    decimals: 6,
  },
  {
    address: "0x0632aff522a581b9ffdec2fc2b0e99245a917057",
    symbol: "CANDY",
    decimals: 18,
  },
  {
    address: "0x38e382f74dfb84608f3c1f10187f6bef5951de93",
    symbol: "MUBI",
    decimals: 18,
  },
  {
    address: "0x34bc13de8e5124a7c47d4b7ff7c5ade6ee34faba",
    symbol: "DOJO",
    decimals: 18,
  },
  {
    address: "0x3d000462fb9826804a45c0ea869b83b69587f2db",
    symbol: "CMPT",
    decimals: 18,
  },
  {
    address: "0x8c282c35b5e1088bb208991c151182a782637699",
    symbol: "MONAI",
    decimals: 18,
  },
  {
    address: "0x0a8f4c4f23d72857745e26695dcd8dedf8e349b9",
    symbol: "MARKS",
    decimals: 18,
  },
  {
    address: "0x76e222b07c53d28b89b0bac18602810fc22b49a8",
    symbol: "JOE",
    decimals: 18,
  },
  {
    address: "0xd721706581d97ecd202bbab5c71b5a85f0f78e69",
    symbol: "DOGE1",
    decimals: 9,
  },
  {
    address: "0xe0a458bf4acf353cb45e211281a334bb1d837885",
    symbol: "4CHAN",
    decimals: 9,
  },
  {
    address: "0xb58e26ac9cc14c0422c2b419b0ca555ee4dcb7cb",
    symbol: "NIZA",
    decimals: 9,
  },
  {
    address: "0xb70835d7822ebb9426b56543e391846c107bd32c",
    symbol: "GTC",
    decimals: 18,
  },
  {
    address: "0x44971abf0251958492fee97da3e5c5ada88b9185",
    symbol: "BASEDAI",
    decimals: 18,
  },
  {
    address: "0xa1d23bbef17f88fefc2ada631738e4c42e906a2e",
    symbol: "EGOD",
    decimals: 9,
  },
  {
    address: "0x8390a1da07e376ef7add4be859ba74fb83aa02d5",
    symbol: "GROK",
    decimals: 9,
  },
  {
    address: "0x8f0f56472c3e5730b1ea2f444e7829288da261e6",
    symbol: "RMAV",
    decimals: 18,
  },
  {
    address: "0xc7c53760375530e5af29fded5e13989325299382",
    symbol: "WPC",
    decimals: 9,
  },
  {
    address: "0x733fd1b5aa477d55070546922ba1bd3751c167c7",
    symbol: "ZKGPT",
    decimals: 18,
  },
  {
    address: "0xcac1277aa6ecb68b84fad070910d37029e810b79",
    symbol: "BDT",
    decimals: 18,
  },
  {
    address: "0xfe3e6a25e6b192a42a44ecddcd13796471735acf",
    symbol: "REEF",
    decimals: 18,
  },
  {
    address: "0x8c85f830bea7d21c71cbd0047aa6de0d7acf3262",
    symbol: "RNG",
    decimals: 18,
  },
  {
    address: "0xb14ebf566511b9e6002bb286016ab2497b9b9c9d",
    symbol: "HID",
    decimals: 18,
  },
  {
    address: "0x2e5a5af7ee900d34bcfb70c47023bf1d6be35cf5",
    symbol: "XEZETH",
    decimals: 18,
  },
  {
    address: "0xd3cc3b3e226cf187181c57f8bcc2fa84250df651",
    symbol: "UPLOAD",
    decimals: 18,
  },
  {
    address: "0x686d1596e5632fe0471961e7977e8efe371b0b21",
    symbol: "AZEE",
    decimals: 18,
  },
  {
    address: "0xf017d3690346eb8234b85f74cee5e15821fee1f4",
    symbol: "GEKKO",
    decimals: 18,
  },
  {
    address: "0xae3359ed3c567482fb0102c584c23daa2693eacf",
    symbol: "DORK",
    decimals: 18,
  },
  {
    address: "0x390e61f798267fe7aa9bbe61be8bb1776250d44c",
    symbol: "T2T2",
    decimals: 18,
  },
  {
    address: "0x0257ffd7ea2ebba4aaa090c7adbdd032a08c1f74",
    symbol: "ZELIX",
    decimals: 18,
  },
  {
    address: "0x7a8946eda77817126ffe301249f6dc4c7df293c3",
    symbol: "DYL",
    decimals: 18,
  },
  {
    address: "0xa13edd1a27ab4fb8982c033acb082cdb5f98b79b",
    symbol: "DEW",
    decimals: 9,
  },
  {
    address: "0xcb43c88c980ff3a2c3f45f125d9886e7aabcd017",
    symbol: "FREAK",
    decimals: 18,
  },
  {
    address: "0xd1f17b7a6bff962659ed608bcd6d318bb5fbb249",
    symbol: "ZUZALU",
    decimals: 18,
  },
  {
    address: "0x396de8bb0a1745b531bf5cd5952539a1b5fe66e0",
    symbol: "ZAPEX",
    decimals: 9,
  },
  {
    address: "0x0ee27a1f959ea7ea2aa171a7e2e48fd9f17bb8eb",
    symbol: "GROK",
    decimals: 9,
  },
  {
    address: "0xd939212f16560447ed82ce46ca40a63db62419b5",
    symbol: "MYC",
    decimals: 18,
  },
  {
    address: "0xff00644ca76def7a3f7501a281ffe45934aefbfe",
    symbol: "GANG",
    decimals: 9,
  },
  {
    address: "0x746dda2ea243400d5a63e0700f190ab79f06489e",
    symbol: "BOA",
    decimals: 7,
  },
  {
    address: "0x4c746edf20762dc201ac40135e0c13e400d23d58",
    symbol: "GOD",
    decimals: 9,
  },
  {
    address: "0x72831eebef4e3f3697a6b216e3713958210ae8cd",
    symbol: "BLOB",
    decimals: 18,
  },
  {
    address: "0x2b8aac1630f7bc0c4b1ed8036c0fe0d71cb44709",
    symbol: "MASK",
    decimals: 9,
  },
  {
    address: "0xa444ec96ee01bb219a44b285de47bf33c3447ad5",
    symbol: "LEOX",
    decimals: 18,
  },
  {
    address: "0x157a6df6b74f4e5e45af4e4615fde7b49225a662",
    symbol: "ISLAND",
    decimals: 18,
  },
  {
    address: "0x01194726b1b55bbf99cb083ba8e5dcc0834adbc3",
    symbol: "ARCADE",
    decimals: 9,
  },
  {
    address: "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c",
    symbol: "TKST",
    decimals: 18,
  },
  {
    address: "0x1123d17fcf93ed2b41440317503346a0fdfe3ed7",
    symbol: "PMPY",
    decimals: 18,
  },
  {
    address: "0x610dbd98a28ebba525e9926b6aaf88f9159edbfd",
    symbol: "NSTR",
    decimals: 18,
  },
  {
    address: "0x23f3d4625aef6f0b84d50db1d53516e6015c0c9b",
    symbol: "NUTS",
    decimals: 18,
  },
  {
    address: "0xabd601423a2cd5723cb546acc5c40fb01c3422cf",
    symbol: "BABYX",
    decimals: 9,
  },
  {
    address: "0x67f3086f7823eaf35f5aaadfb2e9b9c5b09578cf",
    symbol: "INX",
    decimals: 18,
  },
  {
    address: "0xe28b3b32b6c345a34ff64674606124dd5aceca30",
    symbol: "INJ",
    decimals: 18,
  },
  {
    address: "0x1a8a39f2986cf9688f6dc9e5ee0cc0bc8d5edd67",
    symbol: "DOGGA",
    decimals: 9,
  },
  {
    address: "0x0080428794a79a40ae03cf6e6c1d56bd5467a4a2",
    symbol: "LONG",
    decimals: 18,
  },
  {
    address: "0x88417754ff7062c10f4e3a4ab7e9f9d9cbda6023",
    symbol: "PEEPA",
    decimals: 18,
  },
  {
    address: "0x7e877b99897d514da01bd1d177e693ec639961af",
    symbol: "OGGY",
    decimals: 9,
  },
  {
    address: "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
    symbol: "DYP",
    decimals: 18,
  },
  {
    address: "0xae78736cd615f374d3085123a210448e74fc6393",
    symbol: "RETH",
    decimals: 18,
  },
  {
    address: "0xa8c08d8bb15a2d1a4d3b78def9c635ef1e340e16",
    symbol: "",
    decimals: 18,
  },
  {
    address: "0x6fba952443be1de22232c824eb8d976b426b3c38",
    symbol: "KOCHI",
    decimals: 9,
  },
  {
    address: "0x6ae2a128cd07d672164ca9f2712ea737d198dd41",
    symbol: "GOAT",
    decimals: 18,
  },
  {
    address: "0x47000a7b27a75d44ffadfe9d0b97fa04d569b323",
    symbol: "TRUMPIUS",
    decimals: 9,
  },
  {
    address: "0x4ff57e25eeb7affbbb060e0bad2e1759efc8bec4",
    symbol: "BLOCX",
    decimals: 18,
  },
  {
    address: "0x0f4dc5ada841cf5a7652e52d04ae786070cc9472",
    symbol: "GMCS",
    decimals: 0,
  },
  {
    address: "0xd0a6053f087e87a25dc60701ba6e663b1a548e85",
    symbol: "LRDS",
    decimals: 18,
  },
  {
    address: "0xbe6be64e9e5042b6e84e4c27956cce6353efa5f5",
    symbol: "BEG",
    decimals: 18,
  },
  {
    address: "0xb71bdc7014f3740d0267d41d632cab8371f8ba3c",
    symbol: "MILEI",
    decimals: 18,
  },
  {
    address: "0x973e00eee6d180b5a0eb08ce3047ac4ea7a45cd5",
    symbol: "TOTO",
    decimals: 9,
  },
  {
    address: "0x7df18e4efd6e6f73cfb462937dac40fe42533016",
    symbol: "ZKITTY",
    decimals: 18,
  },
  {
    address: "0xa2fe5e51729be71261bcf42854012827bc44c044",
    symbol: "BURN",
    decimals: 18,
  },
  {
    address: "0xf3e66b03d098d0482be9cb3d6999787231a93ed9",
    symbol: "PROMPTIDE",
    decimals: 9,
  },
  {
    address: "0x683c8e87e74f3f8f27c0d2ebd4350fe4dba814ef",
    symbol: "XGN",
    decimals: 18,
  },
  {
    address: "0x8236a87084f8b84306f72007f36f2618a5634494",
    symbol: "LBTC",
    decimals: 8,
  },
  {
    address: "0x429f0d8233e517f9acf6f0c8293bf35804063a83",
    symbol: "POWER",
    decimals: 18,
  },
  {
    address: "0xb61ebb6bceb7635ecd7e59884ee2e2bcdfd810ba",
    symbol: "XSHIB",
    decimals: 9,
  },
  {
    address: "0x99cffb50aad37d17955253f3a4070556b5127a0b",
    symbol: "MEGA",
    decimals: 18,
  },
  {
    address: "0x4e1a609ec87cf6477613f515f6eb64ef2d31089a",
    symbol: "DGCS",
    decimals: 0,
  },
  {
    address: "0x230ea9aed5d08afdb22cd3c06c47cf24ad501301",
    symbol: "SPX20",
    decimals: 18,
  },
  {
    address: "0xcf16287a869ac8397815aba9b8c962c0f18ba6ea",
    symbol: "VXR",
    decimals: 4,
  },
  {
    address: "0x8ab98330473101309db94b625f9997366a518223",
    symbol: "PTH",
    decimals: 18,
  },
  {
    address: "0xf59ae934f6fe444afc309586cc60a84a0f89aaea",
    symbol: "PDEX",
    decimals: 18,
  },
  {
    address: "0x34635280737b5bfe6c7dc2fc3065d60d66e78185",
    symbol: "CVXPRISMA",
    decimals: 18,
  },
  {
    address: "0x904f36d74bed2ef2729eaa1c7a5b70dea2966a02",
    symbol: "BLB",
    decimals: 18,
  },
  {
    address: "0x3a645ff83560231aab0f9c830ba108b06c94e34a",
    symbol: "LUNAR",
    decimals: 9,
  },
  {
    address: "0x1e971b5b21367888239f00da16f0a6b0effecb03",
    symbol: "LEEROY",
    decimals: 18,
  },
  {
    address: "0x569d0e52c3dbe95983bcc2434cb9f69d905be919",
    symbol: "ROAR",
    decimals: 9,
  },
  {
    address: "0x3850952491606a0e420eb929b1a2e1a450d013f1",
    symbol: "PANO",
    decimals: 18,
  },
  {
    address: "0x3ada3bf9a5c5c59523d6193381c0d14787070e54",
    symbol: "NEVA",
    decimals: 18,
  },
  {
    address: "0xc033f6932f71c6ff1de3177f90dff24b70e50618",
    symbol: "SANDY",
    decimals: 9,
  },
  {
    address: "0x420b879b0d18cc182e7e82ad16a13877c3a88420",
    symbol: "BUD",
    decimals: 9,
  },
  {
    address: "0x6b985d38b1fc891bb57bff59573626b1896d4aa1",
    symbol: "FIDO",
    decimals: 9,
  },
  {
    address: "0xa89b728708be04f57c7a33c6f790b6f077298e26",
    symbol: "BART",
    decimals: 18,
  },
  {
    address: "0x2c540c3c7be7af98278dc6963e092cd450009d1f",
    symbol: "SPARKO",
    decimals: 18,
  },
  {
    address: "0xf538296e7dd856af7044deec949489e2f25705bc",
    symbol: "MILK",
    decimals: 18,
  },
  {
    address: "0x1e3778dd6dbfdc1c5b89f95f7c098b21e80ec4fa",
    symbol: "VIC",
    decimals: 18,
  },
  {
    address: "0x183395dbd0b5e93323a7286d1973150697fffcb3",
    symbol: "CVXFXN",
    decimals: 18,
  },
  {
    address: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    symbol: "SNX",
    decimals: 18,
  },
  {
    address: "0x641c0f8b889f8336a69f464ddae3733e3de3788a",
    symbol: "DAETA",
    decimals: 18,
  },
  {
    address: "0x0b61c4f33bcdef83359ab97673cb5961c6435f4e",
    symbol: "EARN",
    decimals: 18,
  },
  {
    address: "0x97d2fc7d16bc34121c3311f2e2e05d298c19956f",
    symbol: "WFO",
    decimals: 18,
  },
  {
    address: "0x2b81945875f892aff04af0a298d35fb2cf848c7b",
    symbol: "WEB",
    decimals: 9,
  },
  {
    address: "0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c",
    symbol: "UTK",
    decimals: 18,
  },
  {
    address: "0xba25b2281214300e4e649fead9a6d6acd25f1c0a",
    symbol: "TREE",
    decimals: 18,
  },
  {
    address: "0x2817cecf94465a9f7becf43d9b7c8025e88a4213",
    symbol: "WX",
    decimals: 18,
  },
  {
    address: "0x5bb15141bb6def6d2bafeed8ff84bf889c0c573b",
    symbol: "LVM",
    decimals: 18,
  },
  {
    address: "0x6b6ee7393f07b3dd1427b6848d3576f31c313127",
    symbol: "BOMB",
    decimals: 18,
  },
  {
    address: "0x1b9ebb707d87fbec93c49d9f2d994ebb60461b9b",
    symbol: "INCR",
    decimals: 18,
  },
  {
    address: "0x35282d87011f87508d457f08252bc5bfa52e10a0",
    symbol: "ULTRA",
    decimals: 18,
  },
  {
    address: "0xaee9ba9ce49fe810417a36408e34d9962b653e78",
    symbol: "SNIBBU",
    decimals: 9,
  },
  {
    address: "0x4168bbc34baea34e55721809911bca5baaef6ba6",
    symbol: "CEP",
    decimals: 18,
  },
  {
    address: "0x661c70333aa1850ccdbae82776bb436a0fcfeefb",
    symbol: "EBTC",
    decimals: 18,
  },
  {
    address: "0xbdf245957992bfbc62b07e344128a1eec7b7ee3f",
    symbol: "MBTC",
    decimals: 8,
  },
  {
    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    symbol: "MANA",
    decimals: 18,
  },
  {
    address: "0x5ca83216fae72717332469e6a2eb28c4bf9af9ec",
    symbol: "0XC",
    decimals: 18,
  },
  {
    address: "0x423071774c43c0aaf4210b439e7cda8c797e2f26",
    symbol: "GALAXIS",
    decimals: 18,
  },
  {
    address: "0x9b06f3c5de42d4623d7a2bd940ec735103c68a76",
    symbol: "VOLTA",
    decimals: 18,
  },
  {
    address: "0xab5d6508e4726141d29c6074ab366afa03f4ec8d",
    symbol: "TRUCK",
    decimals: 18,
  },
  {
    address: "0x9cf0ed013e67db12ca3af8e7506fe401aa14dad6",
    symbol: "SPECTRE",
    decimals: 18,
  },
  {
    address: "0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988",
    symbol: "TVK",
    decimals: 18,
  },
  {
    address: "0x2bc46eb4ae80ddd9c8a6e064c74327c8244d88e2",
    symbol: "SVM",
    decimals: 18,
  },
  {
    address: "0x0800394f6e23dd539929c8b77a3d45c96f76aefc",
    symbol: "TURT",
    decimals: 18,
  },
  {
    address: "0x9a1722b1f4a1bb2f271211ade8e851afc54f77e5",
    symbol: "METHX",
    decimals: 18,
  },
  {
    address: "0x761a3557184cbc07b7493da0661c41177b2f97fa",
    symbol: "GROW",
    decimals: 18,
  },
  {
    address: "0x77ebcf0659bbf4e68d8ce6d84bb25c5cde207b97",
    symbol: "MOOX",
    decimals: 18,
  },
  {
    address: "0xd33526068d116ce69f19a9ee46f0bd304f21a51f",
    symbol: "RPL",
    decimals: 18,
  },
  {
    address: "0xe3944ab788a60ca266f1eec3c26925b95f6370ad",
    symbol: "RAIN",
    decimals: 18,
  },
  {
    address: "0xdfc5964141c018485b4d017634660f85aa667714",
    symbol: "ODIN",
    decimals: 18,
  },
  {
    address: "0xf8e9f10c22840b613cda05a0c5fdb59a4d6cd7ef",
    symbol: "DOE",
    decimals: 18,
  },
  {
    address: "0x716bb5e0839451068885250442a5b8377f582933",
    symbol: "FOFAR",
    decimals: 9,
  },
  {
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    symbol: "DAI",
    decimals: 18,
  },
  {
    address: "0xc8168d5665f4418353728ac970713e09c0b7c20e",
    symbol: "MONKE",
    decimals: 18,
  },
  {
    address: "0x90de74265a416e1393a450752175aed98fe11517",
    symbol: "UDT",
    decimals: 18,
  },
  {
    address: "0x0000000000085d4780b73119b644ae5ecd22b376",
    symbol: "TUSD",
    decimals: 18,
  },
  {
    address: "0xacdbfcbd4d6d4e9fe72c3ba4280d728ab2ace30f",
    symbol: "TWB",
    decimals: 18,
  },
  {
    address: "0xc1c146e09640fe9e5d670288cc43c6269949d9a1",
    symbol: "ROBO",
    decimals: 18,
  },
  {
    address: "0xf1df7305e4bab3885cab5b1e4dfc338452a67891",
    symbol: "PALM",
    decimals: 9,
  },
  {
    address: "0x57b96d4af698605563a4653d882635da59bf11af",
    symbol: "RCH",
    decimals: 18,
  },
  {
    address: "0x9fd9278f04f01c6a39a9d1c1cd79f7782c6ade08",
    symbol: "BIAO",
    decimals: 9,
  },
  {
    address: "0x1e053d89e08c24aa2ce5c5b4206744dc2d7bd8f5",
    symbol: "TT",
    decimals: 18,
  },
  {
    address: "0x767fe9edc9e0df98e07454847909b5e959d7ca0e",
    symbol: "ILV",
    decimals: 18,
  },
  {
    address: "0xa0dd6dd7775e93eb842db0aa142c9c581031ed3b",
    symbol: "MND",
    decimals: 18,
  },
  {
    address: "0x68592c5c98c4f4a8a4bc6da2121e65da3d1c0917",
    symbol: "USDLR",
    decimals: 6,
  },
  {
    address: "0x7865ec47bef9823ad0010c4970ed90a5e8107e53",
    symbol: "NAAI",
    decimals: 18,
  },
  {
    address: "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9",
    symbol: "FTT",
    decimals: 18,
  },
  {
    address: "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
    symbol: "AXS",
    decimals: 18,
  },
  {
    address: "0x3b6564b5da73a41d3a66e6558a98fd0e9e1e77ad",
    symbol: "UTS",
    decimals: 18,
  },
  {
    address: "0xf1c9acdc66974dfb6decb12aa385b9cd01190e38",
    symbol: "OSETH",
    decimals: 18,
  },
  {
    address: "0x1a8b8e526d093476ac5c488a3ea057f8de9c0dee",
    symbol: "JEFF",
    decimals: 18,
  },
  {
    address: "0xa2762ba628b962f93498d8893b6e4346140fe96d",
    symbol: "INT",
    decimals: 18,
  },
  {
    address: "0xe13cf110176e0dd6590536cd391b8a3522475f82",
    symbol: "RENT",
    decimals: 9,
  },
  {
    address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    symbol: "ZRX",
    decimals: 18,
  },
  {
    address: "0x4f4a556361b8b4869f97b8709ff47c1b057ea13b",
    symbol: "TRUMP",
    decimals: 9,
  },
  {
    address: "0xbd617a1359086e33ff339ea0b9c6de479a3f5943",
    symbol: "IDE",
    decimals: 9,
  },
  {
    address: "0xeff49b0f56a97c7fd3b51f0ecd2ce999a7861420",
    symbol: "FOFAR",
    decimals: 9,
  },
  {
    address: "0x0e4e7f2aecf408aff4f82f067677050239bdc58a",
    symbol: "FUNG",
    decimals: 18,
  },
  {
    address: "0x1e354f9ab5bcc9fb981f31b794c5fe13f7a89218",
    symbol: "NTD",
    decimals: 18,
  },
  {
    address: "0x7c68e725b0b2ffcba8947fded4198c3d1db041e6",
    symbol: "PONGO",
    decimals: 9,
  },
  {
    address: "0x9749ac257e5c7ee59a87cd1a2e93fdb9678a64e6",
    symbol: "RETARD",
    decimals: 18,
  },
  {
    address: "0x9d1a74967eca155782edf8e84782c74db33fc499",
    symbol: "AICOM",
    decimals: 9,
  },
  {
    address: "0xb970e14df2161c0a2f32eba35901f2446581b482",
    symbol: "RKR",
    decimals: 9,
  },
  {
    address: "0xdc524e3c6910257744c1f93cf15e9f472b5bd236",
    symbol: "WITCH",
    decimals: 18,
  },
  {
    address: "0x8b12bd54ca9b2311960057c8f3c88013e79316e3",
    symbol: "REACH",
    decimals: 18,
  },
  {
    address: "0xbf40440703a3f7092b2e73c2f7868727275dbbda",
    symbol: "KEEP",
    decimals: 18,
  },
  {
    address: "0x824e35f7a75324f99300afac75ecf7354e17ea26",
    symbol: "TIA",
    decimals: 9,
  },
  {
    address: "0x2d3590fac07b91c9451e8d16c372ece9758f040f",
    symbol: "RAT",
    decimals: 18,
  },
  {
    address: "0xf995771a957c19319a7d8d58b4082b049420340f",
    symbol: "BONKI",
    decimals: 9,
  },
  {
    address: "0x551d0501cd5df92663c3d12c3201c9d70ba79998",
    symbol: "YOBASE",
    decimals: 18,
  },
  {
    address: "0x44face2e310e543f6d85867eb06fb251e3bfe1fc",
    symbol: "BAKE",
    decimals: 9,
  },
  {
    address: "0x68f108fb7141ffe36b832c5c225d9e7e474bd664",
    symbol: "PEPINU",
    decimals: 18,
  },
  {
    address: "0x6494eaa7df086ad6c9a8a27341a8dc09d47305ba",
    symbol: "SMOL",
    decimals: 18,
  },
  {
    address: "0x922d8563631b03c2c4cf817f4d18f6883aba0109",
    symbol: "LOCK",
    decimals: 18,
  },
  {
    address: "0x2fb652314c3d850e9049057bbe9813f1eee882d3",
    symbol: "RVF",
    decimals: 18,
  },
  {
    address: "0xe90ce7764d8401d19ed3733a211bd3b06c631bc0",
    symbol: "POD",
    decimals: 18,
  },
  {
    address: "0x559cc0850361afe1973c0ba5d0a3446c8a5ad678",
    symbol: "",
    decimals: 18,
  },
  {
    address: "0x3eb9c7ee5f72e51f61e832137719fe8d1e53a2ce",
    symbol: "DMIND",
    decimals: 9,
  },
  {
    address: "0xc289c2d57e2ba371f40d594705dbf9331a2da47d",
    symbol: "LOLCAT",
    decimals: 9,
  },
  {
    address: "0xe73cec024b30a7195af80d13f3b6917d80af11d8",
    symbol: "GOAT",
    decimals: 9,
  },
  {
    address: "0x79349edd0b8e83ffaa1af2e6ba0c8ce87731c267",
    symbol: "WCD",
    decimals: 9,
  },
  {
    address: "0x5a4a503f4745c06a07e29d9a9dd88ab52f7a505b",
    symbol: "MANKRETH",
    decimals: 18,
  },
  {
    address: "0x6bfdb6f4e65ead27118592a41eb927cea6956198",
    symbol: "FMC",
    decimals: 18,
  },
  {
    address: "0x310718274509a38cc5559a1ff48c5edbe75a382b",
    symbol: "MOETH",
    decimals: 18,
  },
  {
    address: "0x6942806d1b2d5886d95ce2f04314ece8eb825833",
    symbol: "GROYPER",
    decimals: 18,
  },
  {
    address: "0x490bd60a5d3e1207fba9b699017561434cc8c675",
    symbol: "BUGS",
    decimals: 18,
  },
  {
    address: "0x355c46eebbcbe1fc2844ade63ee565204addd37c",
    symbol: "URANUS",
    decimals: 9,
  },
  {
    address: "0x1d00e86748573c322f4cc41518aa0e77bd912eb4",
    symbol: "USDE",
    decimals: 18,
  },
  {
    address: "0xa069add2d093f9df0e82ab64ec7dd0320cb4f65d",
    symbol: "GPUBOT",
    decimals: 18,
  },
  {
    address: "0x470c8950c0c3aa4b09654bc73b004615119a44b5",
    symbol: "KIZUNA",
    decimals: 18,
  },
  {
    address: "0x5408d3883ec28c2de205064ae9690142b035fed2",
    symbol: "RASTO",
    decimals: 9,
  },
  {
    address: "0x878fcc2bdcccff8c56812607b9a58f29b274c4f0",
    symbol: "DERP",
    decimals: 18,
  },
  {
    address: "0xeaa78305c19a292e5c141108f0880333a840a2bc",
    symbol: "BNQ",
    decimals: 8,
  },
  {
    address: "0xe3e24b4ea87935e15bbe99a24e9ace9998e4614d",
    symbol: "AIDI",
    decimals: 18,
  },
  {
    address: "0xd01d133166820557db7138963bcd9009c54e4c33",
    symbol: "CEX",
    decimals: 18,
  },
  {
    address: "0x9e20461bc2c4c980f62f1b279d71734207a6a356",
    symbol: "OMNI",
    decimals: 18,
  },
  {
    address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    symbol: "SUSHI",
    decimals: 18,
  },
  {
    address: "0x6034e0d6999741f07cb6fb1162cbaa46a1d33d36",
    symbol: "VITA-FAST",
    decimals: 18,
  },
  {
    address: "0x87c22db324b8b0637c8f09d2670ae7777651dbb8",
    symbol: "ISME",
    decimals: 18,
  },
  {
    address: "0xa4ffdf3208f46898ce063e25c1c43056fa754739",
    symbol: "ATH",
    decimals: 18,
  },
  {
    address: "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
    symbol: "PXETH",
    decimals: 18,
  },
  {
    address: "0x000000000075f13bcf2e6652e84821e8b544f6f9",
    symbol: "SIG",
    decimals: 18,
  },
  {
    address: "0x9ca98c8b217c3b45074834908555d36af2ac6449",
    symbol: "SABR",
    decimals: 18,
  },
  {
    address: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
    symbol: "LDO",
    decimals: 18,
  },
  {
    address: "0x5de869e3e62b0fb2c15573246ba3bb3fd97a2275",
    symbol: "SHEB",
    decimals: 18,
  },
  {
    address: "0x9ba021b0a9b958b5e75ce9f6dff97c7ee52cb3e6",
    symbol: "APXETH",
    decimals: 18,
  },
  {
    address: "0xd795eb12034c2b77d787a22292c26fab5f5c70aa",
    symbol: "PIXFI",
    decimals: 18,
  },
  {
    address: "0x781d201db8c837ea2aefea7394554071da45ff0f",
    symbol: "ATAI",
    decimals: 18,
  },
  {
    address: "0x01202c9a1adfc1475c960c23bdf7530698330fa0",
    symbol: "JUDGE",
    decimals: 18,
  },
  {
    address: "0x01e1d7cbd3bc0eb1030485f33708421011459459",
    symbol: "TOAD",
    decimals: 18,
  },
  {
    address: "0x102c776ddb30c754ded4fdcc77a19230a60d4e4f",
    symbol: "FLC",
    decimals: 18,
  },
  {
    address: "0xbeef698bd78139829e540622d5863e723e8715f1",
    symbol: "BEEF",
    decimals: 9,
  },
  {
    address: "0x40c3b81fb887016c0ad02436309c2b265d069a05",
    symbol: "CTO",
    decimals: 18,
  },
  {
    address: "0x64a5b80089c0fb4858a8c2ca9c2988a484539fd8",
    symbol: "PRINT",
    decimals: 18,
  },
  {
    address: "0x5e05f367a1923b2a886e2f2bc45c2278a0b9b448",
    symbol: "BRCBOT",
    decimals: 9,
  },
  {
    address: "0xdc5e9445169c73cf21e1da0b270e8433cac69959",
    symbol: "ETHEREUM",
    decimals: 9,
  },
  {
    address: "0xcc9e0bd9438ca0056653d134de794abeaff8c676",
    symbol: "LESLIE",
    decimals: 9,
  },
  {
    address: "0xb6182b03d9aea18b6b2a0e5e41d99f0f7f2e5ee9",
    symbol: "DEXED",
    decimals: 9,
  },
  {
    address: "0xd9a442856c234a39a81a089c06451ebaa4306a72",
    symbol: "PUFETH",
    decimals: 18,
  },
  {
    address: "0x695d38eb4e57e0f137e36df7c1f0f2635981246b",
    symbol: "MEMEAI",
    decimals: 9,
  },
  {
    address: "0xeb9e3c6cda17c8755a4e8a1cc944afb7fc7d7905",
    symbol: "MATCH",
    decimals: 18,
  },
  {
    address: "0x2056ec69ac5afaf210b851ff74de4c194fcd986e",
    symbol: "POAI",
    decimals: 18,
  },
  {
    address: "0x455ad1bc4e18fd4e369234b6e11d88acbc416758",
    symbol: "BRCT",
    decimals: 18,
  },
  {
    address: "0x9b3a8159e119eb09822115ae08ee1526849e1116",
    symbol: "MMA",
    decimals: 9,
  },
  {
    address: "0x600d601d8b9eb5de5ac90fefc68d0d08801bfd3f",
    symbol: "ELMT",
    decimals: 8,
  },
  {
    address: "0x1eb7bd905855c483db19f53c8c4d42db42a159fc",
    symbol: "NRDC",
    decimals: 18,
  },
  {
    address: "0xdf87270e04bc5ac140e93571d0dd0c6f4a058b41",
    symbol: "MLH",
    decimals: 18,
  },
  {
    address: "0xe97ad6cf19f5164ea98db503811f21fdd0257bcd",
    symbol: "VIDAI",
    decimals: 18,
  },
  {
    address: "0x5483dc6abda5f094865120b2d251b5744fc2ecb5",
    symbol: "TPAD",
    decimals: 18,
  },
  {
    address: "0x84dad4e4a4d1510052d39e916330372db8cd1238",
    symbol: "DEEZNUTS",
    decimals: 18,
  },
  {
    address: "0xe46a1d19962ea120765d3139c588ffd617be04a8",
    symbol: "EETH",
    decimals: 18,
  },
  {
    address: "0x9802296cc5b76ff2fc6dd6de372f47f96bc0347a",
    symbol: "KALIS",
    decimals: 18,
  },
  {
    address: "0x328a268b191ef593b72498a9e8a481c086eb21be",
    symbol: "MZERO",
    decimals: 18,
  },
  {
    address: "0xec363faa5c4dd0e51f3d9b5d0101263760e7cdeb",
    symbol: "IWBTC",
    decimals: 8,
  },
  {
    address: "0x43fe2b0c5485c10e772a1843e32a7642ace5b88c",
    symbol: "RPILL",
    decimals: 18,
  },
  {
    address: "0xd3843c6be03520f45871874375d618b3c7923019",
    symbol: "ORDIBRIDGE",
    decimals: 9,
  },
  {
    address: "0xf92d62ed69242d655e685c96b98f32f1409c3262",
    symbol: "A4M",
    decimals: 9,
  },
  {
    address: "0x6096b8765eb48cd2193f840a977f3727e7800356",
    symbol: "CRAB",
    decimals: 18,
  },
  {
    address: "0xeeecd285f60e802ecb6d8d8d37790c887f9a4b33",
    symbol: "TOM",
    decimals: 9,
  },
  {
    address: "0x97d0cfeb4fde54b430307c9482d6f79c761fe9b6",
    symbol: "EPOCH",
    decimals: 18,
  },
  {
    address: "0x7236a7ad67976ee07961ab26ed6f4cd23f7a9bd1",
    symbol: "TXN",
    decimals: 18,
  },
  {
    address: "0xc256f81d35a54c3599b424171d719e9ae87b2e9b",
    symbol: "ZOOA",
    decimals: 18,
  },
  {
    address: "0x04815313e9329e8905a77251a1781cfa7934259a",
    symbol: "HOOD",
    decimals: 18,
  },
  {
    address: "0x68749665ff8d2d112fa859aa293f07a622782f38",
    symbol: "XAUT",
    decimals: 6,
  },
  {
    address: "0x4a029f7bcf33acb03547d8fa7be840347973e24e",
    symbol: "MAZZE",
    decimals: 18,
  },
  {
    address: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    symbol: "AST",
    decimals: 4,
  },
  {
    address: "0x2e6a60492fb5b58f5b5d08c7cafc75e740e6dc8e",
    symbol: "TSUJI",
    decimals: 9,
  },
  {
    address: "0xc28eb2250d1ae32c7e74cfb6d6b86afc9beb6509",
    symbol: "OPN",
    decimals: 18,
  },
  {
    address: "0xc9f00080d96cea3ef92d2e2e563d4cd41fb5bb36",
    symbol: "BLOX",
    decimals: 18,
  },
  {
    address: "0x66bff695f3b16a824869a8018a3a6e3685241269",
    symbol: "BRETT",
    decimals: 18,
  },
  {
    address: "0x0f0bbaf936f7ada2aca5b80bed7b655758d66950",
    symbol: "WIFPEPEMOG",
    decimals: 9,
  },
  {
    address: "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
    symbol: "AIT",
    decimals: 18,
  },
  {
    address: "0x8b227d72570d3ead66014bca8305cbef7f90d1ee",
    symbol: "LIZA",
    decimals: 18,
  },
  {
    address: "0xbd6323a83b613f668687014e8a5852079494fb68",
    symbol: "BTC",
    decimals: 18,
  },
  {
    address: "0x00c2999c8b2adf4abc835cc63209533973718eb1",
    symbol: "STATE",
    decimals: 18,
  },
  {
    address: "0x7567d006f6be77e3d87aa831855cb4102e37b17d",
    symbol: "THND",
    decimals: 18,
  },
  {
    address: "0x72f713d11480dcf08b37e1898670e736688d218d",
    symbol: "NAO",
    decimals: 18,
  },
  {
    address: "0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8",
    symbol: "JUP",
    decimals: 18,
  },
  {
    address: "0x67859a9314b9dca2642023ad8231beaa6cbf1933",
    symbol: "WOLF",
    decimals: 18,
  },
  {
    address: "0xb9f69c75a3b67425474f8bcab9a3626d8b8249e1",
    symbol: "TOYBOX",
    decimals: 18,
  },
  {
    address: "0x40a9d39aa50871df092538c5999b107f34409061",
    symbol: "IDAI",
    decimals: 18,
  },
  {
    address: "0xed9f6aa6532869576211fd6367e3c328810fbeb3",
    symbol: "GPTPLUS",
    decimals: 18,
  },
  {
    address: "0xd05d90a656fc375ac1478689d7bcd31098f2dd1f",
    symbol: "FACTORY",
    decimals: 18,
  },
  {
    address: "0xdc9cb148ecb70876db0abeb92f515a5e1dc9f580",
    symbol: "GBTC",
    decimals: 18,
  },
  {
    address: "0xf2dfdbe1ea71bbdcb5a4662a16dbf5e487be3ebe",
    symbol: "CLOUD",
    decimals: 18,
  },
  {
    address: "0x908ddb096bfb3acb19e2280aad858186ea4935c4",
    symbol: "ESE",
    decimals: 18,
  },
  {
    address: "0xc3d2b3e23855001508e460a6dbe9f9e3116201af",
    symbol: "MARS",
    decimals: 9,
  },
  {
    address: "0x56d811088235f11c8920698a204a5010a788f4b3",
    symbol: "BZRX",
    decimals: 18,
  },
  {
    address: "0x9c2b4b0da5ebd20c29ef20758064554a55a88b68",
    symbol: "BYTE",
    decimals: 18,
  },
  {
    address: "0x046eee2cc3188071c02bfc1745a6b17c656e3f3d",
    symbol: "RLB",
    decimals: 18,
  },
  {
    address: "0xd7c9f0e536dc865ae858b0c0453fe76d13c3beac",
    symbol: "XAI",
    decimals: 18,
  },
  {
    address: "0xe469699f617bfd0fbffcd575970d34c2cecffa9f",
    symbol: "VUZZ",
    decimals: 9,
  },
  {
    address: "0xcd24ba0e3364233ee9301c1d608a14753c8739c5",
    symbol: "SOUTH",
    decimals: 18,
  },
  {
    address: "0x0808e6c4400bde1d70db0d02170b67de05e07ef5",
    symbol: "WLYX",
    decimals: 18,
  },
  {
    address: "0xc5170dd7386247cdb8c48545c803f5d0e3347022",
    symbol: "TI",
    decimals: 18,
  },
  {
    address: "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd",
    symbol: "DODO",
    decimals: 18,
  },
  {
    address: "0xe4b4c008ff36e3c50c4299c223504a480de9c833",
    symbol: "SS",
    decimals: 9,
  },
  {
    address: "0xcffcfdada28ab44d5440301470dcd410e75c4765",
    symbol: "PRF",
    decimals: 18,
  },
  {
    address: "0xf976fc699eb81a302a29bac6590d1565e8e5da0d",
    symbol: "RKC",
    decimals: 18,
  },
  {
    address: "0xf857c938829c2a53557fb3fbb1c85d10a5227e03",
    symbol: "ECL",
    decimals: 18,
  },
  {
    address: "0x6c10d1611a5a95cb967e4bcab5791fd101194949",
    symbol: "XERS",
    decimals: 18,
  },
  {
    address: "0xe80c0cd204d654cebe8dd64a4857cab6be8345a3",
    symbol: "JPEG",
    decimals: 18,
  },
  {
    address: "0x2f3d0d2317802a65faac6e4cd94067c37b4d4804",
    symbol: "DCARD",
    decimals: 9,
  },
  {
    address: "0x33f289d91286535c47270c8479f6776fb3adeb3e",
    symbol: "BXBT",
    decimals: 18,
  },
  {
    address: "0xd3dce716f3ef535c5ff8d041c1a41c3bd89b97ae",
    symbol: "SCUSD",
    decimals: 6,
  },
  {
    address: "0x8ab2ff0116a279a99950c66a12298962d152b83c",
    symbol: "ORDS",
    decimals: 18,
  },
  {
    address: "0xce722f60f35c37ab295adc4e6ba45bcc7ca89dd6",
    symbol: "JPGD",
    decimals: 18,
  },
  {
    address: "0x15f73a3ab443ee6ebf36c605c7868159ce5d028c",
    symbol: "SST",
    decimals: 9,
  },
  {
    address: "0x495e02a6e3aa2283d736edc3bcac67224054e394",
    symbol: "RUNNER",
    decimals: 9,
  },
  {
    address: "0x4e241a9ec66832a16bceaeb9156e524487f061d7",
    symbol: "ETF",
    decimals: 18,
  },
  {
    address: "0xd836d22531d810f192ba6bd0ba3c28c35d4606c2",
    symbol: "BONKBEST",
    decimals: 9,
  },
  {
    address: "0x186ef81fd8e77eec8bffc3039e7ec41d5fc0b457",
    symbol: "INSP",
    decimals: 18,
  },
  {
    address: "0x12ef10a4fc6e1ea44b4ca9508760ff51c647bb71",
    symbol: "RSTK",
    decimals: 18,
  },
  {
    address: "0x8b9b95292f890df47fff5ac9cbe93d5fc242bd51",
    symbol: "BEFI",
    decimals: 18,
  },
  {
    address: "0x8b3870df408ff4d7c3a26df852d41034eda11d81",
    symbol: "IOI",
    decimals: 6,
  },
  {
    address: "0x550775e17ed6767621a1aed580e6eb29ede981e9",
    symbol: "AGN",
    decimals: 18,
  },
  {
    address: "0xedb73d4ed90be7a49d06d0d940055e6d181d22fa",
    symbol: "OBLUE",
    decimals: 18,
  },
  {
    address: "0xcefde37817da4fc51ddc24e3820ad316784ee04b",
    symbol: "SONA",
    decimals: 18,
  },
  {
    address: "0x420698cfdeddea6bc78d59bc17798113ad278f9d",
    symbol: "TOWELI",
    decimals: 18,
  },
  {
    address: "0x03dde9e5bb31ee40a471476e2fccf75c67921062",
    symbol: "EML",
    decimals: 18,
  },
  {
    address: "0xa562912e1328eea987e04c2650efb5703757850c",
    symbol: "DROPS",
    decimals: 18,
  },
  {
    address: "0xfae103dc9cf190ed75350761e95403b7b8afa6c0",
    symbol: "RSWETH",
    decimals: 18,
  },
  {
    address: "0x943af2ece93118b973c95c2f698ee9d15002e604",
    symbol: "DUEL",
    decimals: 18,
  },
  {
    address: "0xbbbbbbbb46a1da0f0c3f64522c275baa4c332636",
    symbol: "ZKB",
    decimals: 18,
  },
  {
    address: "0x72fc1c1c926bd26712f62e7485392cd405478f05",
    symbol: "BARK",
    decimals: 9,
  },
  {
    address: "0x55a05cf8898dd1c582eef939df645d5d235c6f74",
    symbol: "COSMIC",
    decimals: 18,
  },
  {
    address: "0x91dfbee3965baaee32784c2d546b7a0c62f268c9",
    symbol: "BONDLY",
    decimals: 18,
  },
  {
    address: "0x7c5b267ed81009aa7374b5ca7e5137da47045ba8",
    symbol: "TKAI",
    decimals: 18,
  },
  {
    address: "0x09d6f0f5a21f5be4f59e209747e2d07f50bc694c",
    symbol: "NFTFI",
    decimals: 18,
  },
  {
    address: "0x6a9b3fdb4a3296ecba1ebfa2cf4a8b16032a769c",
    symbol: "SMILE",
    decimals: 18,
  },
  {
    address: "0x2e1cb26689a0b8763d15ffe9d7b1c637cd9282d4",
    symbol: "OPTA",
    decimals: 18,
  },
  {
    address: "0xb551b43af192965f74e3dfaa476c890b403cad95",
    symbol: "DATA",
    decimals: 9,
  },
  {
    address: "0x8d9d725aaa3f6236763ff548051657a342c37623",
    symbol: "NED",
    decimals: 18,
  },
  {
    address: "0xce246eea10988c495b4a90a905ee9237a0f91543",
    symbol: "VCX",
    decimals: 18,
  },
  {
    address: "0x218de5e6324c5351c3a2bf0c40d76f585b8de04d",
    symbol: "STPETH",
    decimals: 18,
  },
  {
    address: "0xd47bdf574b4f76210ed503e0efe81b58aa061f3d",
    symbol: "TRVL",
    decimals: 18,
  },
  {
    address: "0xa067237f8016d5e3770cf08b20e343ab9ee813d5",
    symbol: "GRL",
    decimals: 9,
  },
  {
    address: "0x9511ff502f982643935a39206f98a6c18d4527cf",
    symbol: "DEFEND",
    decimals: 18,
  },
  {
    address: "0x6553565eac5daa9bfc5e2892b36291634c9b2ad6",
    symbol: "RAKE",
    decimals: 18,
  },
  {
    address: "0x069d89974f4edabde69450f9cf5cf7d8cbd2568d",
    symbol: "BVM",
    decimals: 18,
  },
  {
    address: "0x5e21d1ee5cf0077b314c381720273ae82378d613",
    symbol: "ETH",
    decimals: 18,
  },
  {
    address: "0xc01154b4ccb518232d6bbfc9b9e6c5068b766f82",
    symbol: "NEX",
    decimals: 18,
  },
  {
    address: "0xde5d2530a877871f6f0fc240b9fce117246dadae",
    symbol: "JUICE",
    decimals: 18,
  },
  {
    address: "0x750c3a0a0ce9984eeb8c5d146dff024b584e5e33",
    symbol: "ZKHIVE",
    decimals: 18,
  },
  {
    address: "0x0f5c78f152152dda52a2ea45b0a8c10733010748",
    symbol: "XOX",
    decimals: 18,
  },
  {
    address: "0x619e398858a3110df4d89056a15a40338a01e65f",
    symbol: "GARBAGE",
    decimals: 18,
  },
  {
    address: "0x179f782d7fbe745f40b20e0c7dbb6205d43fa4b9",
    symbol: "INSP",
    decimals: 9,
  },
  {
    address: "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
    symbol: "TRAC",
    decimals: 18,
  },
  {
    address: "0x6a6c2ada3ce053561c2fbc3ee211f23d9b8c520a",
    symbol: "TON",
    decimals: 18,
  },
  {
    address: "0xa711bcc2b6f5c4fc3dfaccc2a01148765cbbab1c",
    symbol: "GROK15",
    decimals: 9,
  },
  {
    address: "0xebf221e4a7c31773aec33766e1743d90593b07f5",
    symbol: "CHAT",
    decimals: 9,
  },
  {
    address: "0xdefb0b264032e4e128b00d02b3fd0aa00331237b",
    symbol: "BUDDHA",
    decimals: 18,
  },
  {
    address: "0x5d56b6581d2e7e7574adce2dc593f499a53d7505",
    symbol: "MACHINA",
    decimals: 18,
  },
  {
    address: "0x661013bb8d1c95d86d9c85f76e9004561f1bb36f",
    symbol: "DRBT",
    decimals: 18,
  },
  {
    address: "0x435998003ccb7abeaa392494c89f7799fe241db5",
    symbol: "INTERN",
    decimals: 18,
  },
  {
    address: "0x61b57bdc01e3072fab3e9e2f3c7b88d482734e05",
    symbol: "MZM",
    decimals: 18,
  },
  {
    address: "0x148255a3b10666d9788ec48bc61ea3e48974bf2c",
    symbol: "DMCC",
    decimals: 18,
  },
  {
    address: "0xd57187e56e5b31b4d7813d7ceea1e9f9b97ee82f",
    symbol: "ZKIN",
    decimals: 18,
  },
  {
    address: "0xd537e3fc08f6d966a0f024c924f358fb15ed2dd9",
    symbol: "UHOSU",
    decimals: 9,
  },
  {
    address: "0x090185f2135308bad17527004364ebcc2d37e5f6",
    symbol: "SPELL",
    decimals: 18,
  },
  {
    address: "0x8ccd897ca6160ed76755383b201c1948394328c7",
    symbol: "BAI",
    decimals: 9,
  },
  {
    address: "0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d",
    symbol: "VGX",
    decimals: 8,
  },
  {
    address: "0x4f604735c1cf31399c6e711d5962b2b3e0225ad3",
    symbol: "USDGLO",
    decimals: 18,
  },
  {
    address: "0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d",
    symbol: "CTSI",
    decimals: 18,
  },
  {
    address: "0x7ae4f8885f6cfa41a692cb9da3789cfa6a83e9f2",
    symbol: "GENOME",
    decimals: 18,
  },
  {
    address: "0xa1f3aca66403d29b909605040c30ae1f1245d14c",
    symbol: "TFBILL",
    decimals: 6,
  },
  {
    address: "0xd8f1460044925d2d5c723c7054cd9247027415b7",
    symbol: "SAIL",
    decimals: 18,
  },
  {
    address: "0xc55126051b22ebb829d00368f4b12bde432de5da",
    symbol: "BTRFLY",
    decimals: 18,
  },
  {
    address: "0xc3cc3076cb304494775b3193ef1aa080ba6bf962",
    symbol: "ODGN",
    decimals: 18,
  },
  {
    address: "0x50b806c5fe274c07e46b96be8c68d2fd2d9597b4",
    symbol: "TUCKER",
    decimals: 18,
  },
  {
    address: "0x7340ea46360576dc46ef49bce99bc5072c32421d",
    symbol: "DSQ",
    decimals: 18,
  },
  {
    address: "0xd4318fa09c45cfb6355ded6085b0d698b64ec1cd",
    symbol: "FEDAI",
    decimals: 8,
  },
  {
    address: "0x4abd5745f326932b1b673bfa592a20d7bb6bc455",
    symbol: "FROGLIC",
    decimals: 18,
  },
  {
    address: "0x576e2bed8f7b46d34016198911cdf9886f78bea7",
    symbol: "TRUMP",
    decimals: 9,
  },
  {
    address: "0x891de5f139791ddf9dbabf519cfe2a049f8fc6d3",
    symbol: "DIBBLE",
    decimals: 18,
  },
  {
    address: "0xbdbe9f26918918bd3f43a0219d54e5fda9ce1bb3",
    symbol: "MOLLY",
    decimals: 9,
  },
  {
    address: "0x3a97e00b48d56bd5e0502e1a2a8c036a040e1b99",
    symbol: "JBOT",
    decimals: 9,
  },
  {
    address: "0xa74a05b17d72e9b0781d973e7963dfaacd266b94",
    symbol: "OASIS",
    decimals: 18,
  },
  {
    address: "0xec70ff4a5b09110e4d20ada4f2db4a86ec61fac6",
    symbol: "GRP",
    decimals: 18,
  },
  {
    address: "0xc8bf8bc34874e07f6a0d4abc8be22ba9e372631b",
    symbol: "SWGT",
    decimals: 8,
  },
  {
    address: "0x504624040e0642921c2c266a9ac37cafbd8cda4e",
    symbol: "LOVE",
    decimals: 18,
  },
  {
    address: "0xc106b98c4d0b3f1c92da0e9a6089e9c63ceacbb0",
    symbol: "TRND",
    decimals: 9,
  },
  {
    address: "0x77be1ba1cd2d7a63bffc772d361168cc327dd8bc",
    symbol: "MEOW",
    decimals: 9,
  },
  {
    address: "0xd555498a524612c67f286df0e0a9a64a73a7cdc7",
    symbol: "DEFROGS",
    decimals: 18,
  },
  {
    address: "0x6953f27db0701e22616e701dba91acc2e4b6deca",
    symbol: "STAR",
    decimals: 18,
  },
  {
    address: "0xe4042c7c1bf740b8ddb2ab43df6d9ed766b2513e",
    symbol: "BADCAT",
    decimals: 9,
  },
  {
    address: "0x3e362038fd3d08887d498944d489af7909619a9b",
    symbol: "CHOW",
    decimals: 18,
  },
  {
    address: "0xea81dab2e0ecbc6b5c4172de4c22b6ef6e55bd8f",
    symbol: "PLEB",
    decimals: 18,
  },
  {
    address: "0x338be6a72db57a239f0d71d0ec4e5b1e38762e9f",
    symbol: "LNDRY",
    decimals: 18,
  },
  {
    address: "0x120a3879da835a5af037bb2d1456bebd6b54d4ba",
    symbol: "RVST",
    decimals: 18,
  },
  {
    address: "0x944824290cc12f31ae18ef51216a223ba4063092",
    symbol: "MASA",
    decimals: 18,
  },
  {
    address: "0xb3999f658c0391d94a37f7ff328f3fec942bcadc",
    symbol: "HFT",
    decimals: 18,
  },
  {
    address: "0x5a9261b023692405f2f680240c6b010638e416dd",
    symbol: "JAN",
    decimals: 18,
  },
  {
    address: "0xb7037457de15fed6cbecc0c62d5d610834b958ec",
    symbol: "WHIRL",
    decimals: 18,
  },
  {
    address: "0x8110af6bd2af3f5c4586032ff813c8934451abbe",
    symbol: "CYPHER",
    decimals: 9,
  },
  {
    address: "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3",
    symbol: "ELON",
    decimals: 18,
  },
  {
    address: "0x4c73c1c8c95de5674d53604b15d968485414cb32",
    symbol: "BOOM",
    decimals: 18,
  },
  {
    address: "0xa7f3508cfcf054cc9cf1440580b78784e07382db",
    symbol: "PAIRED",
    decimals: 18,
  },
  {
    address: "0xbdcd291c32e06bbf2d7b1ffc823959e3258e3583",
    symbol: "WASD",
    decimals: 9,
  },
  {
    address: "0x7d225c4cc612e61d26523b099b0718d03152edef",
    symbol: "FORK",
    decimals: 18,
  },
  {
    address: "0xdaa7699352ac8709f3d2fd092226d3dd7da40474",
    symbol: "OPCAT",
    decimals: 18,
  },
  {
    address: "0xfc385a1df85660a7e041423db512f779070fcede",
    symbol: "ZKL",
    decimals: 18,
  },
  {
    address: "0x1b54a6fa1360bd71a0f28f77a1d6fba215d498c3",
    symbol: "CASINU",
    decimals: 9,
  },
  {
    address: "0x124386504d774979e1e9d2d19c6188391d7af8e3",
    symbol: "HANABI",
    decimals: 9,
  },
  {
    address: "0x482df7483a52496f4c65ab499966dfcdf4ddfdbc",
    symbol: "LDY",
    decimals: 18,
  },
  {
    address: "0x772358ef6ed3e18bde1263f7d229601c5fa81875",
    symbol: "SNPAD",
    decimals: 18,
  },
  {
    address: "0x0447d3454b25935eed47f65b4bd22b9b23be326a",
    symbol: "GEM",
    decimals: 18,
  },
  {
    address: "0xd69a0a9682f679f50e34de40105a93bebb2ff43d",
    symbol: "MACKE",
    decimals: 18,
  },
  {
    address: "0x10703ca5e253306e2ababd68e963198be8887c81",
    symbol: "SCAN",
    decimals: 18,
  },
  {
    address: "0x8c688327c9371bb3bd69f6e1f1a6d8c9ca0880a7",
    symbol: "DADA",
    decimals: 18,
  },
  {
    address: "0x149cac67f1cd5d80651e7c9bb359ec285d821a05",
    symbol: "MINTY",
    decimals: 18,
  },
  {
    address: "0x1bbe973bef3a977fc51cbed703e8ffdefe001fed",
    symbol: "PORTAL",
    decimals: 18,
  },
  {
    address: "0xfe39c384d702914127a005523f9915addb9bd59b",
    symbol: "HPO",
    decimals: 18,
  },
  {
    address: "0xe9572938bcbf08adcee86fd12a7c0d08dc4ab841",
    symbol: "INS",
    decimals: 18,
  },
  {
    address: "0x9c7beba8f6ef6643abd725e45a4e8387ef260649",
    symbol: "G",
    decimals: 18,
  },
  {
    address: "0x00aba6fe5557de1a1d565658cbddddf7c710a1eb",
    symbol: "EZ",
    decimals: 18,
  },
  {
    address: "0xae5b2aa98532c0c27c88f2085d66b5263f4b9fee",
    symbol: "ISEC",
    decimals: 9,
  },
  {
    address: "0x6b0faca7ba905a86f221ceb5ca404f605e5b3131",
    symbol: "DEFI",
    decimals: 18,
  },
  {
    address: "0xc3f8143212871014b472ea83285af7f25928dee4",
    symbol: "SOHOT",
    decimals: 9,
  },
  {
    address: "0x723696965f47b990dff00064fcaca95f0ee01123",
    symbol: "ARBOT",
    decimals: 18,
  },
  {
    address: "0x43415eb6ff9db7e26a15b704e7a3edce97d31c4e",
    symbol: "USTB",
    decimals: 6,
  },
  {
    address: "0x78223d31298107f3e310b09797b07967832046a6",
    symbol: "RSFT",
    decimals: 18,
  },
  {
    address: "0xe340b25fe32b1011616bb8ec495a4d503e322177",
    symbol: "AAMMUNIDAIUSDC",
    decimals: 18,
  },
  {
    address: "0x0305f515fa978cf87226cf8a9776d25bcfb2cc0b",
    symbol: "PEPE20",
    decimals: 18,
  },
  {
    address: "0xa849cd6239906f23b63ba34441b73a5c6eba8a00",
    symbol: "HASH",
    decimals: 18,
  },
  {
    address: "0x2c06ba9e7f0daccbc1f6a33ea67e85bb68fbee3a",
    symbol: "LENDS",
    decimals: 18,
  },
  {
    address: "0x4752613b11dfc4e735c4853692c43542e87f0cc2",
    symbol: "GOOFY",
    decimals: 9,
  },
  {
    address: "0x2d9996f3b9d2e73540fdbfdfe81d71e9e08cbf03",
    symbol: "BOYSCLUB",
    decimals: 9,
  },
  {
    address: "0xc0db17bc219c5ca8746c29ee47862ee3ad742f4a",
    symbol: "SCOTTY",
    decimals: 18,
  },
  {
    address: "0xb67718b98d52318240c52e71a898335da4a28c42",
    symbol: "INNBC",
    decimals: 6,
  },
  {
    address: "0x42069d11a2cc72388a2e06210921e839cfbd3280",
    symbol: "GNOME",
    decimals: 18,
  },
  {
    address: "0x4b7265d153886a7dc717e815862acde6ff7b5bc8",
    symbol: "DENCH",
    decimals: 18,
  },
  {
    address: "0x6d7497751656618fc38cfb5478994a20f7e235df",
    symbol: "SPYRO",
    decimals: 18,
  },
  {
    address: "0x6b0b3a982b4634ac68dd83a4dbf02311ce324181",
    symbol: "ALI",
    decimals: 18,
  },
  {
    address: "0xe7c6bf469e97eeb0bfb74c8dbff5bd47d4c1c98a",
    symbol: "HSK",
    decimals: 18,
  },
  {
    address: "0xa4fb6e1781fbcc921df51352af4cc83ff6c1308f",
    symbol: "DOGE",
    decimals: 9,
  },
  {
    address: "0x38d64ce1bdf1a9f24e0ec469c9cade61236fb4a0",
    symbol: "VETH",
    decimals: 18,
  },
  {
    address: "0x16a3543fa6b32cac3b0a755f64a729e84f89a75c",
    symbol: "TENSOR",
    decimals: 18,
  },
  {
    address: "0x4346139e71ba7b4b6abd405782703006cc180988",
    symbol: "TGPU",
    decimals: 18,
  },
  {
    address: "0xa045fe936e26e1e1e1fb27c1f2ae3643acde0171",
    symbol: "KAI",
    decimals: 9,
  },
  {
    address: "0xf5264e1673c9365e7c5d4d1d8b440bbf131ff435",
    symbol: "VITALEK",
    decimals: 18,
  },
  {
    address: "0x1c92c0295807f1f7c0726cf51a1d26298563f14a",
    symbol: "CRACER",
    decimals: 18,
  },
  {
    address: "0x6e8908cfa881c9f6f2c64d3436e7b80b1bf0093f",
    symbol: "BIST",
    decimals: 18,
  },
  {
    address: "0xfc10cd3895f2c66d6639ec33ae6360d6cfca7d6d",
    symbol: "YES",
    decimals: 18,
  },
  {
    address: "0x9e9fbde7c7a83c43913bddc8779158f1368f0413",
    symbol: "PANDORA",
    decimals: 18,
  },
  {
    address: "0xc01b1979e2244dc94e67891df0af4f7885e57fd4",
    symbol: "LAN",
    decimals: 18,
  },
  {
    address: "0x0c48250eb1f29491f1efbeec0261eb556f0973c7",
    symbol: "AIMBOT",
    decimals: 18,
  },
  {
    address: "0x01824357d7d7eaf4677bc17786abd26cbdec9ad7",
    symbol: "FORWARD",
    decimals: 18,
  },
  {
    address: "0x683a4ac99e65200921f556a19dadf4b0214b5938",
    symbol: "MAPE",
    decimals: 9,
  },
  {
    address: "0x57f5e098cad7a3d1eed53991d4d66c45c9af7812",
    symbol: "WUSDM",
    decimals: 18,
  },
  {
    address: "0x8b91f277501cf8322ebe34f137dd35b384b353c7",
    symbol: "CORE",
    decimals: 9,
  },
  {
    address: "0x0000000000ca73a6df4c58b84c5b4b847fe8ff39",
    symbol: "ASTX",
    decimals: 18,
  },
  {
    address: "0x337c8a3f0cd0580b29e9ee5d7829645709c8f6d2",
    symbol: "BOBA",
    decimals: 9,
  },
  {
    address: "0x354c8cda7e3b737d360513a0dc5abcee8ee1cea3",
    symbol: "BABYTRUMP",
    decimals: 18,
  },
  {
    address: "0x65d72aa8da931f047169112fcf34f52dbaae7d18",
    symbol: "RUSD",
    decimals: 18,
  },
  {
    address: "0x1c530d6de70c05a81bf1670157b9d928e9699089",
    symbol: "MCWBTC",
    decimals: 18,
  },
  {
    address: "0xb8a87405d9a4f2f866319b77004e88dff66c0d92",
    symbol: "SORA",
    decimals: 18,
  },
  {
    address: "0x6930450a416252c7206fbce76c01ecc850a36cb9",
    symbol: "SHEB",
    decimals: 9,
  },
  {
    address: "0x0e186357c323c806c1efdad36d217f7a54b63d18",
    symbol: "CGT",
    decimals: 18,
  },
  {
    address: "0xcdb8fc4ef27dfeaba9b31899a9d165398bf97b9e",
    symbol: "ETHOS",
    decimals: 18,
  },
  {
    address: "0x1ed5cf624240296d941796970ac745bc24bd4a06",
    symbol: "POSHI",
    decimals: 18,
  },
  {
    address: "0xcdf6b7657b8f26c396293417d713b7fc6b8304d9",
    symbol: "ATHENA",
    decimals: 18,
  },
  {
    address: "0x9e91f79070926a191e41367d40ad582686f9e66d",
    symbol: "STYLE",
    decimals: 18,
  },
  {
    address: "0x29e9b047d506f75085533b7b7f53e8de6b43b86f",
    symbol: "DOKEN",
    decimals: 9,
  },
  {
    address: "0x9c7d4fb43919def524c1a9d92fe836169eaf0615",
    symbol: "WOLF",
    decimals: 18,
  },
  {
    address: "0xa3b3beaf9c0a6160a8e47f000c094d34121f1a57",
    symbol: "COFFEE",
    decimals: 18,
  },
  {
    address: "0x40a7df3df8b56147b781353d379cb960120211d7",
    symbol: "MOBY",
    decimals: 18,
  },
  {
    address: "0xe99379955b676d5a7ebe3f42f2b684796e48d437",
    symbol: "EGG",
    decimals: 18,
  },
  {
    address: "0xce6e54daa1ea95fb3530859d69d4bdb978dd821b",
    symbol: "ORBK",
    decimals: 18,
  },
  {
    address: "0x33e80a92a9ea73dd02f6e732d1702d58c68388ca",
    symbol: "XB",
    decimals: 2,
  },
  {
    address: "0x826180541412d574cf1336d22c0c0a287822678a",
    symbol: "FLIP",
    decimals: 18,
  },
  {
    address: "0x6a9da2d710bb9b700acde7cb81f10f1ff8c89041",
    symbol: "BUIDL-I",
    decimals: 6,
  },
  {
    address: "0xfe3aaf3b1dd087331ec68c4dd86e8fe542598d5e",
    symbol: "AKEN",
    decimals: 18,
  },
  {
    address: "0xb60acd2057067dc9ed8c083f5aa227a244044fd6",
    symbol: "STTAO",
    decimals: 9,
  },
  {
    address: "0x7ceec758dfe5ef8c32cde7b2259cc79b1891e8ed",
    symbol: "EVIRE",
    decimals: 18,
  },
  {
    address: "0xaa2ba423875baa1c74abe77df0b6ac655ce151e6",
    symbol: "CROW",
    decimals: 18,
  },
  {
    address: "0x5189688ac92a1eba1710bcba94ab25c695a4dfa2",
    symbol: "BARS",
    decimals: 6,
  },
  {
    address: "0xf3617e8a04265160b9ee10253a2c78565571cb76",
    symbol: "BLEPE",
    decimals: 18,
  },
  {
    address: "0x19efa7d0fc88ffe461d1091f8cbe56dc2708a84f",
    symbol: "UNITAO",
    decimals: 18,
  },
  {
    address: "0xbc544207ff1c5b2bc47a35f745010b603b97e99e",
    symbol: "AI",
    decimals: 18,
  },
  {
    address: "0xdb82c0d91e057e05600c8f8dc836beb41da6df14",
    symbol: "SLN",
    decimals: 18,
  },
  {
    address: "0x62126ec407eae34393ab88b1f5d57e8566e570be",
    symbol: "MATE",
    decimals: 18,
  },
  {
    address: "0xe8b1e79d937c648ce1fe96e6739ddb2714058a18",
    symbol: "GTM",
    decimals: 18,
  },
  {
    address: "0xeb51b8dc2d43469c0f0b7365c8a18438907bdf21",
    symbol: "SHIV",
    decimals: 18,
  },
  {
    address: "0xd3043d66afe00344c115f7f81d18277c5c718ff8",
    symbol: "OMUSD",
    decimals: 6,
  },
  {
    address: "0x8b8aa7777e18408c07b0ed52ca3dd5bdab34eb7e",
    symbol: "PDX",
    decimals: 18,
  },
  {
    address: "0x478156deabfac918369044d52a6bdb5cc5597994",
    symbol: "SGR",
    decimals: 8,
  },
  {
    address: "0xc0bc84e95864bdfdcd1ccfb8a3aa522e79ca1410",
    symbol: "BTCE",
    decimals: 8,
  },
  {
    address: "0xb624960aaad05d433075a5c9e760adec26036934",
    symbol: "MONKE",
    decimals: 9,
  },
  {
    address: "0xd6175692026bcd7cb12a515e39cf0256ef35cb86",
    symbol: "BONZI",
    decimals: 18,
  },
  {
    address: "0x83e9f223e1edb3486f876ee888d76bfba26c475a",
    symbol: "GUILD",
    decimals: 18,
  },
  {
    address: "0x2f57430a6ceda85a67121757785877b4a71b8e6d",
    symbol: "DFP2",
    decimals: 18,
  },
  {
    address: "0xbec771d15f7e67bc0bb4571c7eb409228cc6fef9",
    symbol: "BRAI",
    decimals: 18,
  },
  {
    address: "0xbf72ee725f9b06dc564324774801acebad061946",
    symbol: "DAP",
    decimals: 18,
  },
  {
    address: "0x76a0e27618462bdac7a29104bdcfff4e6bfcea2d",
    symbol: "SOSO",
    decimals: 18,
  },
  {
    address: "0x6033f7f88332b8db6ad452b7c6d5bb643990ae3f",
    symbol: "LSK",
    decimals: 18,
  },
  {
    address: "0xb93746dc7a8bf5e381ffb278085b1f62bd0a1fc8",
    symbol: "SENDEX",
    decimals: 9,
  },
  {
    address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
    symbol: "EURA",
    decimals: 18,
  },
  {
    address: "0xdbb7a34bf10169d6d2d0d02a6cbb436cf4381bfa",
    symbol: "ZENT",
    decimals: 18,
  },
  {
    address: "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
    symbol: "AMPL",
    decimals: 9,
  },
  {
    address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
    symbol: "LRC",
    decimals: 18,
  },
  {
    address: "0x1495bc9e44af1f8bcb62278d2bec4540cf0c05ea",
    symbol: "DEAI",
    decimals: 18,
  },
  {
    address: "0x788d86e00ab31db859c3d6b80d5a9375801d7f2a",
    symbol: "TENET",
    decimals: 18,
  },
  {
    address: "0xef3daa5fda8ad7aabff4658f1f78061fd626b8f0",
    symbol: "MUZZ",
    decimals: 18,
  },
  {
    address: "0xae4533189c7281501f04ba4b7c37e3aded402902",
    symbol: "WFCA",
    decimals: 18,
  },
  {
    address: "0x3fa55eb91be2c5d72890da11a4c0269e7f786555",
    symbol: "PROPHET",
    decimals: 18,
  },
  {
    address: "0xf4fb9bf10e489ea3edb03e094939341399587b0c",
    symbol: "AMB",
    decimals: 18,
  },
  {
    address: "0xe485e2f1bab389c08721b291f6b59780fec83fd7",
    symbol: "SHU",
    decimals: 18,
  },
  {
    address: "0x7a65cb87f596caf31a4932f074c59c0592be77d7",
    symbol: "ZYPTO",
    decimals: 18,
  },
  {
    address: "0xc5842df170b8c8d09eb851a8d5db3dfa00669e3f",
    symbol: "XEROAI",
    decimals: 9,
  },
  {
    address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
    symbol: "APE",
    decimals: 18,
  },
  {
    address: "0xd979c468a68062e7bdff4ba6df7842dfd3492e0f",
    symbol: "BBL",
    decimals: 18,
  },
  {
    address: "0xe020b01b6fbd83066aa2e8ee0ccd1eb8d9cc70bf",
    symbol: "ARCD",
    decimals: 18,
  },
  {
    address: "0x0a907b0bbff60702b29a36b19718d99253cfbd9f",
    symbol: "QLIX",
    decimals: 18,
  },
  {
    address: "0x74fe27e70db10147f8b6b38b3c9d12bbdcf3b5af",
    symbol: "IRYDE",
    decimals: 18,
  },
  {
    address: "0x8fe815417913a93ea99049fc0718ee1647a2a07c",
    symbol: "XSWAP",
    decimals: 18,
  },
  {
    address: "0x740df024ce73f589acd5e8756b377ef8c6558bab",
    symbol: "HLG",
    decimals: 18,
  },
  {
    address: "0xdda31d354a519ecfb0bc2a536b5e7be147c0f7f4",
    symbol: "ELDG",
    decimals: 18,
  },
  {
    address: "0xcf91b70017eabde82c9671e30e5502d312ea6eb2",
    symbol: "PUPPIES",
    decimals: 9,
  },
  {
    address: "0x4a27e9aab8f8ba9de06766c8476ed1d16494e35f",
    symbol: "PEPE",
    decimals: 18,
  },
  {
    address: "0x6abaf438f098f75c5892e1fabf08b1896c805967",
    symbol: "BLOOD",
    decimals: 9,
  },
  {
    address: "0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9",
    symbol: "WRLD",
    decimals: 18,
  },
  {
    address: "0xf7498c98789957f4ee53b3e37ff5b7ef8a6cfc7b",
    symbol: "0XDEV",
    decimals: 18,
  },
  {
    address: "0x102dc1840f0c3c179670f21fa63597e82df34e60",
    symbol: "VIRTU",
    decimals: 18,
  },
  {
    address: "0x352a3144e88d23427993938cfd780291d95ef091",
    symbol: "MOSETH",
    decimals: 18,
  },
  {
    address: "0x41b13e815308485f7f1af5afcc64a01519085609",
    symbol: "KBT",
    decimals: 8,
  },
  {
    address: "0x31ea904a7eca45122890deb8da3473a2081bc9d1",
    symbol: "SEED",
    decimals: 18,
  },
  {
    address: "0x482702745260ffd69fc19943f70cffe2cacd70e9",
    symbol: "JENNER",
    decimals: 18,
  },
  {
    address: "0x1c3d163219bb74f430411b95d66b72056f366ec1",
    symbol: "ENO",
    decimals: 18,
  },
  {
    address: "0x4947b72fed037ade3365da050a9be5c063e605a7",
    symbol: "PEANUT",
    decimals: 9,
  },
  {
    address: "0x9012744b7a564623b6c3e40b144fc196bdedf1a9",
    symbol: "OXN",
    decimals: 18,
  },
  {
    address: "0xfd26e39807772251c3bb90fb1fcd9ce5b80c5c24",
    symbol: "CODEX",
    decimals: 9,
  },
  {
    address: "0x9fdfb933ee990955d3219d4f892fd1f786b47c9b",
    symbol: "MK",
    decimals: 18,
  },
  {
    address: "0xf938346d7117534222b48d09325a6b8162b3a9e7",
    symbol: "CHOPPY",
    decimals: 9,
  },
  {
    address: "0xe96edd48cf0c6e930ce55f171a721017b28e0f08",
    symbol: "NEXUSAI",
    decimals: 9,
  },
  {
    address: "0x393bf304dd474f48210f5ce741f19a2a851703ca",
    symbol: "BALL",
    decimals: 18,
  },
  {
    address: "0xeff9cdb294872b6553f4e9631fb4d1fa4f9c5e6b",
    symbol: "BUILD",
    decimals: 18,
  },
  {
    address: "0xa0e7626287bd02cbe3531c65148261bf0c0ed98b",
    symbol: "SGT",
    decimals: 18,
  },
  {
    address: "0x6b96c78d4472031f1fbed2d1c4bd3895e9212344",
    symbol: "TAOX",
    decimals: 18,
  },
  {
    address: "0xd5eb7e91ae88ea2550f9bfd04208399c95df4dc7",
    symbol: "DOGL",
    decimals: 18,
  },
  {
    address: "0x3824255df9eabc9347abcaa5872b1763fe9d47bc",
    symbol: "NDS",
    decimals: 9,
  },
  {
    address: "0x9d14bce1daddf408d77295bb1be9b343814f44de",
    symbol: "KOI",
    decimals: 18,
  },
  {
    address: "0x4b6d036d0bc62a633acca6d10956e9dbbb16748f",
    symbol: "BC",
    decimals: 18,
  },
  {
    address: "0x9194337c06405623c0f374e63fa1cc94e2788c58",
    symbol: "CYBONK",
    decimals: 18,
  },
  {
    address: "0x70054a18e57bd9e21e8b6361f6a8dfcd86cdc7d0",
    symbol: "TMNS",
    decimals: 9,
  },
  {
    address: "0x1ef846ce0da79d8d4e111bf8c5117cd1209a0478",
    symbol: "ETHINU",
    decimals: 8,
  },
  {
    address: "0x142f4330ab3eda738cb373791c2e99cc325bed20",
    symbol: "SOB",
    decimals: 9,
  },
  {
    address: "0x73c69d24ad28e2d43d03cbf35f79fe26ebde1011",
    symbol: "ARCH",
    decimals: 18,
  },
  {
    address: "0x391fb9429d8685d5d0f14a185fc0820c6ac2817e",
    symbol: "NEONAI",
    decimals: 9,
  },
  {
    address: "0x0e6d98de664a28a32b584c72e606ff7dea898dc6",
    symbol: "PRAI",
    decimals: 18,
  },
  {
    address: "0x747e550a7b848ace786c3cfe754aa78febc8a022",
    symbol: "DODO",
    decimals: 18,
  },
  {
    address: "0x49fb8ad7578148e17c3ef0c344ce23a66ed372c4",
    symbol: "TAOBOT",
    decimals: 18,
  },
  {
    address: "0x07e128e823d2b9b22edbda43820aa1a72de99613",
    symbol: "HOSTAI",
    decimals: 18,
  },
  {
    address: "0x249fc40d68a3a55dac335550b64c1a03b4c0ed72",
    symbol: "DINOSHI",
    decimals: 18,
  },
  {
    address: "0x02a97fd243b8301bcd6ba3a87693162d6bd130bd",
    symbol: "SMAI20",
    decimals: 9,
  },
  {
    address: "0xd9812f24f34e0d727bbf6ea7caaee05b7f7a2603",
    symbol: "TPU",
    decimals: 18,
  },
  {
    address: "0x4eddb15a0abfa2c349e8065af9214e942d9a6d36",
    symbol: "XYRO",
    decimals: 18,
  },
  {
    address: "0xfa816739edaac4ebf329219d4ef575085cc28037",
    symbol: "0XSEARCH",
    decimals: 18,
  },
  {
    address: "0x8e32b8a41f2e86a3ee198912ac8d756c84295b40",
    symbol: "TTF",
    decimals: 9,
  },
  {
    address: "0x8e964e35a76103af4c7d7318e1b1a82c682ae296",
    symbol: "FLZ",
    decimals: 18,
  },
  {
    address: "0x39de85301c78f4d623e5c05cde2fd119a3a92cd9",
    symbol: "BLOBS",
    decimals: 9,
  },
  {
    address: "0x57b49219614859176ddb029298486b6c30193cbd",
    symbol: "ORACLE",
    decimals: 18,
  },
  {
    address: "0xfe7290b932cd0d5aec29c57394e87cdaa41cc054",
    symbol: "SMART",
    decimals: 9,
  },
  {
    address: "0x7086e014fd59e66567a986e7b401a5810c2361ce",
    symbol: "QUANTUM",
    decimals: 9,
  },
  {
    address: "0xa939c02dba8f237b40d2a3e96ad4252b00bb8a72",
    symbol: "MLSETH",
    decimals: 18,
  },
  {
    address: "0xda251891e21e6edb0e6828e77621c7b98ea4e8ba",
    symbol: "MGLS",
    decimals: 18,
  },
  {
    address: "0x571d9b73dc04ed88b4e273e048c8d4848f83b779",
    symbol: "CLOSEDAI",
    decimals: 9,
  },
  {
    address: "0x8dce83eca4af45dbe618da1779f9aaca43201084",
    symbol: "AIKEK",
    decimals: 18,
  },
  {
    address: "0x3c0bb14e8367c384885a97bac6d5cceab474ed75",
    symbol: "AII",
    decimals: 18,
  },
  {
    address: "0xba28a90e44ade1e24d5dd6f31cb9a71756ee65dd",
    symbol: "GSFY",
    decimals: 8,
  },
  {
    address: "0xfd4f2caf941b6d737382dce420b368de3fc7f2d4",
    symbol: "PATEX",
    decimals: 18,
  },
  {
    address: "0xb72e76ccf005313868db7b48070901a44629da98",
    symbol: "SQGROW",
    decimals: 9,
  },
  {
    address: "0x289ff00235d2b98b0145ff5d4435d3e92f9540a6",
    symbol: "BOOE",
    decimals: 18,
  },
  {
    address: "0xf94e7d0710709388bce3161c32b4eea56d3f91cc",
    symbol: "DSYNC",
    decimals: 18,
  },
  {
    address: "0x8e4d27d772099e18900caf5dcc36cb612dcee886",
    symbol: "ARCX",
    decimals: 18,
  },
  {
    address: "0xe842e272a18625319cc36f64eb9f97e5ad0c32af",
    symbol: "YAK",
    decimals: 9,
  },
  {
    address: "0x78e3b2ee11950df78a35fd924e92fbb8d1403780",
    symbol: "HELGA",
    decimals: 18,
  },
  {
    address: "0x2a8bf9e7c91c6e3237095e07eb3defbce358df00",
    symbol: "OPC",
    decimals: 18,
  },
  {
    address: "0xd775997452923437ca96065ba15ed02f4a33ed39",
    symbol: "DWIF",
    decimals: 18,
  },
  {
    address: "0xd55210bb6898c021a19de1f58d27b71f095921ee",
    symbol: "CHKN",
    decimals: 18,
  },
  {
    address: "0x65c4c0517025ec0843c9146af266a2c5a2d148a2",
    symbol: "ETH2X",
    decimals: 18,
  },
  {
    address: "0xbf7bc9e63635dc11b335d52b0349d0100a53a1a7",
    symbol: "LTAO",
    decimals: 9,
  },
  {
    address: "0x93109af5638be68ed2d0e094f618777ff1051d28",
    symbol: "UN",
    decimals: 18,
  },
  {
    address: "0x433f62964edd67d7349088fe44544f822f863a6c",
    symbol: "MOGE",
    decimals: 9,
  },
  {
    address: "0x4d243e8f511045f0d5f9d0288bc628737b10c079",
    symbol: "JASON",
    decimals: 9,
  },
  {
    address: "0xd166b7d9824cc5359360b47389aba9341ce12619",
    symbol: "PNX",
    decimals: 9,
  },
  {
    address: "0xe1c8d908f0e495cf6d8459547d1d28b72bf04bf2",
    symbol: "TSAI",
    decimals: 18,
  },
  {
    address: "0x64d3c2817a22b78cacabe4baa2525065ebdf4012",
    symbol: "SHARX",
    decimals: 18,
  },
  {
    address: "0x6977597bbbdcc453636bd67a161a96d85098f327",
    symbol: "PIPI",
    decimals: 9,
  },
  {
    address: "0x693170bd3c37dcd46168d8b399aa7551a32de2af",
    symbol: "TAOSHARD",
    decimals: 18,
  },
  {
    address: "0x8c7ac134ed985367eadc6f727d79e8295e11435c",
    symbol: "KEKEC",
    decimals: 18,
  },
  {
    address: "0x5ca135cb8527d76e932f34b5145575f9d8cbe08e",
    symbol: "FPI",
    decimals: 18,
  },
  {
    address: "0x8c213ae332274e6314bf4cf989604e7f61162967",
    symbol: "DONGO",
    decimals: 9,
  },
  {
    address: "0xaaa9214f675316182eaa21c85f0ca99160cc3aaa",
    symbol: "QANX",
    decimals: 18,
  },
  {
    address: "0xb80a1d87654bef7ad8eb6bbda3d2309e31d4e598",
    symbol: "21SOL",
    decimals: 9,
  },
  {
    address: "0x1be9d03bfc211d83cff3abdb94a75f9db46e1334",
    symbol: "21BNB",
    decimals: 8,
  },
  {
    address: "0xe9eccde9d26fcbb5e93f536cfc4510a7f46274f8",
    symbol: "INFRA",
    decimals: 9,
  },
  {
    address: "0xad913dcd987fe54ce823e4b755f90598cd62bb15",
    symbol: "MFERS",
    decimals: 18,
  },
  {
    address: "0x6a26edf3bbc9f154ca9175216ceb9812f5305e6e",
    symbol: "PIXE",
    decimals: 18,
  },
  {
    address: "0x85e0b9d3e7e4dba7e59090c533906d0e9211d8b6",
    symbol: "ISHI",
    decimals: 9,
  },
  {
    address: "0x2ae21de576e0fe0367651ddcf76e04dd0608c076",
    symbol: "GAMBIT",
    decimals: 18,
  },
  {
    address: "0xb87b96868644d99cc70a8565ba7311482edebf6e",
    symbol: "OCP404",
    decimals: 18,
  },
  {
    address: "0xd3c68968137317a57a9babeacc7707ec433548b4",
    symbol: "SOCIAL",
    decimals: 18,
  },
  {
    address: "0xb2606492712d311be8f41d940afe8ce742a52d44",
    symbol: "ZEND",
    decimals: 18,
  },
  {
    address: "0x668d78571f124415581b38d32fa9a16f1aaa8417",
    symbol: "1EX",
    decimals: 18,
  },
  {
    address: "0xa91ac63d040deb1b7a5e4d4134ad23eb0ba07e14",
    symbol: "BEL",
    decimals: 18,
  },
  {
    address: "0xfe67a4450907459c3e1fff623aa927dd4e28c67a",
    symbol: "NEXT",
    decimals: 18,
  },
  {
    address: "0x3d1c949a761c11e4cc50c3ae6bdb0f24fd7a39da",
    symbol: "NEURA",
    decimals: 18,
  },
  {
    address: "0x05fe069626543842439ef90d9fa1633640c50cf1",
    symbol: "EVEAI",
    decimals: 18,
  },
  {
    address: "0xa76cec201e939660f8afb1fb8d5865d069df0750",
    symbol: "WANNA",
    decimals: 18,
  },
  {
    address: "0x000000000503be77a5ed27bef2c19943a8b5ae73",
    symbol: "XTREME",
    decimals: 18,
  },
  {
    address: "0x78ba134c3ace18e69837b01703d07f0db6fb0a60",
    symbol: "SNT",
    decimals: 18,
  },
  {
    address: "0x7039cd6d7966672f194e8139074c3d5c4e6dcf65",
    symbol: "STRUMP",
    decimals: 9,
  },
  {
    address: "0x018dd3a0dd7f213cc822076b3800816d3ce1ed86",
    symbol: "HOTKEY",
    decimals: 18,
  },
  {
    address: "0xcdb4a8742ed7d0259b51e3454c46c9d6c48d5e88",
    symbol: "GPT",
    decimals: 18,
  },
  {
    address: "0xda558a295e8d2c1438f7b4806e283940dec7e6db",
    symbol: "TRACK",
    decimals: 9,
  },
  {
    address: "0x80a88dc663fa256e34ecb5a47314702313b162a5",
    symbol: "CYPEPE",
    decimals: 18,
  },
  {
    address: "0x740a5ac14d0096c81d331adc1611cf2fd28ae317",
    symbol: "PLEB",
    decimals: 9,
  },
  {
    address: "0x622984873c958e00aa0f004cbdd2b5301cf0b132",
    symbol: "GAUSS",
    decimals: 9,
  },
  {
    address: "0x004626a008b1acdc4c74ab51644093b155e59a23",
    symbol: "STEUR",
    decimals: 18,
  },
  {
    address: "0xc8dfb57d83bf561457b1a3f6ce22956bb554bcab",
    symbol: "TRDM",
    decimals: 18,
  },
  {
    address: "0xf02c2dc9b3cb7f1ba21ccd82dff4ebc92da8996f",
    symbol: "TSA",
    decimals: 18,
  },
  {
    address: "0x902169d471b62f22ffadc690ca292ec454d0b260",
    symbol: "RBT",
    decimals: 18,
  },
  {
    address: "0x385d65ed9241e415cfc689c3e0bcf5ab2f0505c2",
    symbol: "MOLLARS",
    decimals: 9,
  },
  {
    address: "0x93c5a00b41fb5f3906b421b2399ac64b79fdbd42",
    symbol: "VDZ",
    decimals: 18,
  },
  {
    address: "0x399508a43d7e2b4451cd344633108b4d84b33b03",
    symbol: "21AVAX",
    decimals: 18,
  },
  {
    address: "0x518b63da813d46556fea041a88b52e3caa8c16a8",
    symbol: "ATF",
    decimals: 18,
  },
  {
    address: "0x1a3a8cf347b2bf5890d3d6a1b981c4f4432c8661",
    symbol: "FAC",
    decimals: 18,
  },
  {
    address: "0x722a89f1b925fe41883978219c2176aecc7d6699",
    symbol: "XNK",
    decimals: 18,
  },
  {
    address: "0x0022228a2cc5e7ef0274a7baa600d44da5ab5776",
    symbol: "STUSD",
    decimals: 18,
  },
  {
    address: "0x4123a133ae3c521fd134d7b13a2dec35b56c2463",
    symbol: "OPEN",
    decimals: 8,
  },
  {
    address: "0x0d3cbed3f69ee050668adf3d9ea57241cba33a2b",
    symbol: "PDA",
    decimals: 18,
  },
  {
    address: "0x0488401c3f535193fa8df029d9ffe615a06e74e6",
    symbol: "SRK",
    decimals: 18,
  },
  {
    address: "0xff4927e04c6a01868284f5c3fb9cba7f7ca4aec0",
    symbol: "21BCH",
    decimals: 8,
  },
  {
    address: "0x6d0bb9b6ce385e28ea4ebb7d76dcb3a1aaf7bc4b",
    symbol: "CRET",
    decimals: 18,
  },
  {
    address: "0x08ba718f288c3b12b01146816bef9fa03cc635bc",
    symbol: "CENT",
    decimals: 18,
  },
  {
    address: "0x35ca1e5a9b1c09fa542fa18d1ba4d61c8edff852",
    symbol: "SCHRODI",
    decimals: 18,
  },
  {
    address: "0x8947da500eb47f82df21143d0c01a29862a8c3c5",
    symbol: "THALES",
    decimals: 18,
  },
  {
    address: "0x725024200cd4e1f259fcf2b7153d37fb477e139c",
    symbol: "FLOVI",
    decimals: 9,
  },
  {
    address: "0x070e984fda37dd942f5c953f6b2375339adac308",
    symbol: "AXE",
    decimals: 18,
  },
  {
    address: "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
    symbol: "RARI",
    decimals: 18,
  },
  {
    address: "0x346b46280f559def274f80c5d16471b4b7ef2f14",
    symbol: "WSTOR",
    decimals: 18,
  },
  {
    address: "0x83869de76b9ad8125e22b857f519f001588c0f62",
    symbol: "EXM",
    decimals: 8,
  },
  {
    address: "0xccc80ce58995baae4e5867e5cde3bd9f8b242376",
    symbol: "GOE",
    decimals: 9,
  },
  {
    address: "0xc61edb127f58f42f47a8be8aebe83cf602a53878",
    symbol: "COBE",
    decimals: 18,
  },
  {
    address: "0xca14007eff0db1f8135f4c25b34de49ab0d42766",
    symbol: "STRK",
    decimals: 18,
  },
  {
    address: "0x85d19fb57ca7da715695fcf347ca2169144523a7",
    symbol: "CONAN",
    decimals: 9,
  },
  {
    address: "0x443459d45c30a03f90037d011cbe22e2183d3b12",
    symbol: "TYPE",
    decimals: 18,
  },
  {
    address: "0x898843fb909e3562c82f2b96f4e3d0693af041df",
    symbol: "LEMON",
    decimals: 18,
  },
  {
    address: "0x0a3bb08b3a15a19b4de82f8acfc862606fb69a2d",
    symbol: "IUSD",
    decimals: 18,
  },
  {
    address: "0xbe4d9c8c638b5f0864017d7f6a04b66c42953847",
    symbol: "NIMBUS",
    decimals: 18,
  },
  {
    address: "0x3472a5a71965499acd81997a54bba8d852c6e53d",
    symbol: "BADGER",
    decimals: 18,
  },
  {
    address: "0x886c869cdc619214138c87f1db0ada522b16dfa3",
    symbol: "WIF",
    decimals: 18,
  },
  {
    address: "0x67037abcfefd566aeff31c240168c25d65a0754d",
    symbol: "ZAI",
    decimals: 18,
  },
  {
    address: "0xe304283c3e60cefaf7ea514007cf4e8fdc3d869d",
    symbol: "GEC",
    decimals: 18,
  },
  {
    address: "0xf65b5c5104c4fafd4b709d9d60a185eae063276c",
    symbol: "TRU",
    decimals: 18,
  },
  {
    address: "0x1b78ffbc66139466c4a432f763afce8d4c991060",
    symbol: "CNAI",
    decimals: 18,
  },
  {
    address: "0x4b9278b94a1112cad404048903b8d343a810b07e",
    symbol: "HIFI",
    decimals: 18,
  },
  {
    address: "0x2ec37d45fcae65d9787ecf71dc85a444968f6646",
    symbol: "BRBTC",
    decimals: 8,
  },
  {
    address: "0xc6221ac4e99066ea5443acd67d6108f874e2533d",
    symbol: "DCI",
    decimals: 18,
  },
  {
    address: "0xc4c244f1dbca07083fee35220d2169957c275e68",
    symbol: "STEAK",
    decimals: 18,
  },
  {
    address: "0x53f7535cc14ff028de181f9789d403c838b5f885",
    symbol: "PERPX",
    decimals: 18,
  },
  {
    address: "0xca530408c3e552b020a2300debc7bd18820fb42f",
    symbol: "RYU",
    decimals: 18,
  },
  {
    address: "0xddf7d080c82b8048baae54e376a3406572429b4e",
    symbol: "OOOOOO",
    decimals: 18,
  },
  {
    address: "0x680c89c40de9d14aa608a1122363cad18783f837",
    symbol: "EPIC",
    decimals: 18,
  },
  {
    address: "0x477a3d269266994f15e9c43a8d9c0561c4928088",
    symbol: "YAI",
    decimals: 18,
  },
  {
    address: "0x329cae8c175ac6773d5e79bd30624b953c68a308",
    symbol: "MISTY",
    decimals: 18,
  },
  {
    address: "0x766d2fcece1e3eef32aae8711ab886ee95fd5b2a",
    symbol: "MVP",
    decimals: 18,
  },
  {
    address: "0x69457a1c9ec492419344da01daf0df0e0369d5d0",
    symbol: "FJO",
    decimals: 18,
  },
  {
    address: "0xb45ad160634c528cc3d2926d9807104fa3157305",
    symbol: "SDOLA",
    decimals: 18,
  },
  {
    address: "0xfbe44cae91d7df8382208fcdc1fe80e40fbc7e9a",
    symbol: "GEMAI",
    decimals: 18,
  },
  {
    address: "0xc5ba042bf8832999b17c9036e8212f49dce0501a",
    symbol: "YOURAI",
    decimals: 18,
  },
  {
    address: "0x96884fcaac082db4b32601ada5b177fd6cbffa88",
    symbol: "ZKLK",
    decimals: 18,
  },
  {
    address: "0x72a93697a5ac73cfee39ff87298220f77c538611",
    symbol: "DARE",
    decimals: 18,
  },
  {
    address: "0xb17548c7b510427baac4e267bea62e800b247173",
    symbol: "SMT",
    decimals: 18,
  },
  {
    address: "0x50739bd5b6aff093ba2371365727c48a420a060d",
    symbol: "CRGPT",
    decimals: 18,
  },
  {
    address: "0x5cc5e64ab764a0f1e97f23984e20fd4528356a6a",
    symbol: "XRGB",
    decimals: 18,
  },
  {
    address: "0xda5e1988097297dcdc1f90d4dfe7909e847cbef6",
    symbol: "WLFI",
    decimals: 18,
  },
  {
    address: "0xf3768d6e78e65fc64b8f12ffc824452130bd5394",
    symbol: "KEROSENE",
    decimals: 18,
  },
  {
    address: "0xf614e54d972bab297172765ca83683288f3eae36",
    symbol: "RWB",
    decimals: 9,
  },
  {
    address: "0x66e535e8d2ebf13f49f3d49e5c50395a97c137b1",
    symbol: "MOLTEN",
    decimals: 18,
  },
  {
    address: "0xea3665e272f14052442e433fb0059424d16cc6c7",
    symbol: "SMIDGE",
    decimals: 18,
  },
  {
    address: "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429",
    symbol: "GLM",
    decimals: 18,
  },
  {
    address: "0x033bbde722ea3cdcec73cffea6581df9f9c257de",
    symbol: "VELAR",
    decimals: 6,
  },
  {
    address: "0x814a870726edb7dfc4798300ae1ce3e5da0ac467",
    symbol: "DACAT",
    decimals: 18,
  },
  {
    address: "0x7fed466b893c716235e1b8d685c913f7d2797463",
    symbol: "THUB",
    decimals: 9,
  },
  {
    address: "0x60d91f6d394c5004a782e0d175e2b839e078fb83",
    symbol: "FDM",
    decimals: 18,
  },
  {
    address: "0x2903bd7db50f300b0884f7a15904baffc77f3ec7",
    symbol: "ARC",
    decimals: 18,
  },
  {
    address: "0x00000000e88649dd6aab90088ca25d772d4607d0",
    symbol: "UDW",
    decimals: 18,
  },
  {
    address: "0x0f17eeccc84739b9450c88de0429020e2dec05eb",
    symbol: "OTACON",
    decimals: 18,
  },
  {
    address: "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e",
    symbol: "MXC",
    decimals: 18,
  },
  {
    address: "0x8c0d76c9b18779665475f3e212d9ca1ed6a1a0e6",
    symbol: "ZUNUSD",
    decimals: 18,
  },
  {
    address: "0xe0797ec1d0bb0bec541a82c5262c3b0f93f68bfe",
    symbol: "JOKER",
    decimals: 15,
  },
  {
    address: "0xf90924b4064d88fdf9189d6ffd737ed85c01b9b7",
    symbol: "GFN",
    decimals: 18,
  },
  {
    address: "0x6eef75b8f067b5853a36da5561f52a8f22faa9af",
    symbol: "TST",
    decimals: 9,
  },
  {
    address: "0xd88611a629265c9af294ffdd2e7fa4546612273e",
    symbol: "MPRO",
    decimals: 18,
  },
  {
    address: "0xba5bde662c17e2adff1075610382b9b691296350",
    symbol: "RARE",
    decimals: 18,
  },
  {
    address: "0x84018071282d4b2996272659d9c01cb08dd7327f",
    symbol: "BLENDR",
    decimals: 18,
  },
  {
    address: "0x00b78238925c320159023c2ac9ef89da8f16d007",
    symbol: "VPS",
    decimals: 18,
  },
  {
    address: "0xebb1afb0a4ddc9b1f84d9aa72ff956cd1c1eb4be",
    symbol: "EMRLD",
    decimals: 18,
  },
  {
    address: "0x2de1218c31a04e1040fc5501b89e3a58793b3ddf",
    symbol: "3AC",
    decimals: 18,
  },
  {
    address: "0xe635efcfac44c5f44508f4d17c3a96cb4ce421dd",
    symbol: "SPOT",
    decimals: 18,
  },
  {
    address: "0x0bcc26e40d87873615e082c1b5df15e487f94737",
    symbol: "SMETX",
    decimals: 18,
  },
  {
    address: "0xa700b4eb416be35b2911fd5dee80678ff64ff6c9",
    symbol: "AAAVE",
    decimals: 18,
  },
  {
    address: "0x7022fe5fedbd54b40fdc52be30c1c578fb55c2bf",
    symbol: "SKULL",
    decimals: 18,
  },
  {
    address: "0x7efbac35b65e73484764fd00f18e64929e782855",
    symbol: "CIFI",
    decimals: 18,
  },
  {
    address: "0xf898bae008cd85046431ab0a75f00689d6aa1b1c",
    symbol: "VPN",
    decimals: 18,
  },
  {
    address: "0xad5fdc8c3c18d50315331fca7f66efe5033f6c4c",
    symbol: "CRAZY",
    decimals: 18,
  },
  {
    address: "0x7b66e84be78772a3afaf5ba8c1993a1b5d05f9c2",
    symbol: "VITARNA",
    decimals: 18,
  },
  {
    address: "0xe5018913f2fdf33971864804ddb5fca25c539032",
    symbol: "OLM",
    decimals: 18,
  },
  {
    address: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    symbol: "BUSD",
    decimals: 18,
  },
  {
    address: "0x399ef659fdead53b3e7f97e9491e727925667945",
    symbol: "L1X",
    decimals: 18,
  },
  {
    address: "0x89deb6c8918a42457bd6ddbcaaf979216c4d774c",
    symbol: "HAI",
    decimals: 18,
  },
  {
    address: "0xe973e453977195422b48e1852a207b7ee9c913c7",
    symbol: "AD",
    decimals: 18,
  },
  {
    address: "0x0b452278223d3954f4ac050949d7998e373e7e43",
    symbol: "SUZUME",
    decimals: 18,
  },
  {
    address: "0xb8e3e431ffb17dac4bedec04b901a3c03179fd1b",
    symbol: "DOPE",
    decimals: 8,
  },
  {
    address: "0xf14dd7b286ce197019cba54b189d2b883e70f761",
    symbol: "PEEZY",
    decimals: 9,
  },
  {
    address: "0xc11158c5da9db1d553ed28f0c2ba1cbedd42cfcb",
    symbol: "PAW",
    decimals: 18,
  },
  {
    address: "0x6e0615a03ed9527a6013fcd5b556e36ef4dab1ff",
    symbol: "HNB",
    decimals: 18,
  },
  {
    address: "0x6c3d78e55fc939da4ca94760f6b27c3425a7a865",
    symbol: "MEGADEATH",
    decimals: 9,
  },
  {
    address: "0xa130e3a33a4d84b04c3918c4e5762223ae252f80",
    symbol: "SWASH",
    decimals: 18,
  },
  {
    address: "0x84fad63f8f26335f4f1bebc9fbf5ba277fd23c9e",
    symbol: "AB",
    decimals: 18,
  },
  {
    address: "0xcc4304a31d09258b0029ea7fe63d032f52e44efe",
    symbol: "SWAP",
    decimals: 18,
  },
  {
    address: "0xa3bc09171c009f05df7f0b8aaa818ee42d8a91bc",
    symbol: "TSLA",
    decimals: 9,
  },
  {
    address: "0xc06bf3589345a81f0c2845e4db76bdb64bbbbc9d",
    symbol: "MEGA",
    decimals: 18,
  },
  {
    address: "0xd8c978de79e12728e38aa952a6cb4166f891790f",
    symbol: "ROAR",
    decimals: 18,
  },
  {
    address: "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
    symbol: "EZETH",
    decimals: 18,
  },
  {
    address: "0xe5c6f5fef89b64f36bfccb063962820136bac42f",
    symbol: "HOPPY",
    decimals: 9,
  },
  {
    address: "0x9c2dc0c3cc2badde84b0025cf4df1c5af288d835",
    symbol: "COR",
    decimals: 18,
  },
  {
    address: "0x574d22e2555cac0ce71e44778f6de2e7487ae229",
    symbol: "SOON",
    decimals: 18,
  },
  {
    address: "0x2232f65655c7c41d8b6c8592da3a0e32586273ea",
    symbol: "DRX",
    decimals: 9,
  },
  {
    address: "0x8afe4055ebc86bd2afb3940c0095c9aca511d852",
    symbol: "AIUS",
    decimals: 18,
  },
  {
    address: "0x17d2628d30f8e9e966c9ba831c9b9b01ea8ea75c",
    symbol: "ISK",
    decimals: 18,
  },
  {
    address: "0xe18ab3568fa19e0ed38bc1d974eddd501e61e12d",
    symbol: "BANK",
    decimals: 18,
  },
  {
    address: "0xc4058f6a829ddd684e1b7589b33312827f0a47bb",
    symbol: "ANDY",
    decimals: 18,
  },
  {
    address: "0x888888ae2c4a298efd66d162ffc53b3f2a869888",
    symbol: "OMOCHI",
    decimals: 9,
  },
  {
    address: "0xb10cc888cb2cce7036f4c7ecad8a57da16161338",
    symbol: "SWITCH",
    decimals: 8,
  },
  {
    address: "0x857ffc55b1aa61a7ff847c82072790cae73cd883",
    symbol: "EEFI",
    decimals: 18,
  },
  {
    address: "0x2614f29c39de46468a921fd0b41fdd99a01f2edf",
    symbol: "HLX",
    decimals: 18,
  },
  {
    address: "0xaada04204e9e1099daf67cf3d5d137e84e41cf41",
    symbol: "PEEPO",
    decimals: 18,
  },
  {
    address: "0x000000000a1c6659ac226dbb1c5bdc648df72e9e",
    symbol: "LOOTER",
    decimals: 18,
  },
  {
    address: "0x6630e3a2ec1e7e0a2f9f1d2289a9a89b0551683a",
    symbol: "WIFSA",
    decimals: 18,
  },
  {
    address: "0xfc4913214444af5c715cc9f7b52655e788a569ed",
    symbol: "ICSA",
    decimals: 9,
  },
  {
    address: "0x4b7c762af92dbd917d159eb282b85aa13e955739",
    symbol: "POODL",
    decimals: 18,
  },
  {
    address: "0x8e7bd91f7d51d58145365341fdb37e0edfc8397f",
    symbol: "MAGAPEPE",
    decimals: 9,
  },
  {
    address: "0x25b4f5d4c314bcd5d7962734936c957b947cb7cf",
    symbol: "TGC",
    decimals: 18,
  },
  {
    address: "0x8a0a9b663693a22235b896f70a229c4a22597623",
    symbol: "SCALE",
    decimals: 18,
  },
  {
    address: "0x1f70300bce8c2302780bd0a153ebb75b8ca7efcb",
    symbol: "BARRON",
    decimals: 9,
  },
  {
    address: "0x1f557fb2aa33dce484902695ca1374f413875519",
    symbol: "VES",
    decimals: 18,
  },
  {
    address: "0xbc61e13ca6830fc7f035fd0e90a01cd08be6dcaa",
    symbol: "SHOOT",
    decimals: 18,
  },
  {
    address: "0xf073bac22dab7faf4a3dd6c6189a70d54110525c",
    symbol: "INETH",
    decimals: 18,
  },
  {
    address: "0x0e6641e62baa87d77e01ab1c7e9d2f323f26942b",
    symbol: "ASET",
    decimals: 18,
  },
  {
    address: "0x564a80d0123bdd750fb6a9993834968fc595c09a",
    symbol: "SUBF",
    decimals: 18,
  },
  {
    address: "0x07040971246a73ebda9cf29ea1306bb47c7c4e76",
    symbol: "USPEPE",
    decimals: 9,
  },
  {
    address: "0x15e6e0d4ebeac120f9a97e71faa6a0235b85ed12",
    symbol: "SAVM",
    decimals: 18,
  },
  {
    address: "0xbddc20ed7978b7d59ef190962f441cd18c14e19f",
    symbol: "CAGA",
    decimals: 18,
  },
  {
    address: "0x86b874397ecc811c5d9c1db2d8b68f3425d61a61",
    symbol: "PAUL",
    decimals: 9,
  },
  {
    address: "0x9727eaf447203be268e5d471b6503bf47a71ea72",
    symbol: "ARKY",
    decimals: 9,
  },
  {
    address: "0xc668695dcbcf682de106da94bde65c9bc79362d3",
    symbol: "SVPN",
    decimals: 18,
  },
  {
    address: "0x7137e8a3b069c3f787c4ffbb901b91e4ba47d082",
    symbol: "ZEUS",
    decimals: 9,
  },
  {
    address: "0x95ac17ce4021417e25b8edf807366fc3be091b5e",
    symbol: "ZAAR",
    decimals: 18,
  },
  {
    address: "0x91fbb2503ac69702061f1ac6885759fc853e6eae",
    symbol: "KNINE",
    decimals: 18,
  },
  {
    address: "0x3b21418081528845a6df4e970bd2185545b712ba",
    symbol: "CHI",
    decimals: 18,
  },
  {
    address: "0xf6ce4be313ead51511215f1874c898239a331e37",
    symbol: "BIRDDOG",
    decimals: 9,
  },
  {
    address: "0x724313985dcb55d432d3888ddc0b9e3d3859e86d",
    symbol: "BRUNE",
    decimals: 18,
  },
  {
    address: "0xdd66781d0e9a08d4fbb5ec7bac80b691be27f21d",
    symbol: "AXGT",
    decimals: 18,
  },
  {
    address: "0x3e29793c9bdeb6ce5a84c2beced91ad50c530b16",
    symbol: "ZOOM",
    decimals: 18,
  },
  {
    address: "0x28e67eb7aaa8f5dd9cb7be2b2e3dad6b25edb1ab",
    symbol: "KEKE",
    decimals: 18,
  },
  {
    address: "0x607496f14918891594177c24a983e901c1896e63",
    symbol: "GOLDCAT",
    decimals: 9,
  },
  {
    address: "0x9e22b4f836a461ddc7765e5fad693688e76e6069",
    symbol: "CHAD",
    decimals: 9,
  },
  {
    address: "0xa3889a5f5f84f4296ff734081ad6d333838a56b5",
    symbol: "WIZ",
    decimals: 9,
  },
  {
    address: "0xde7e34ad87bfc5d5906f334661110eb438af718b",
    symbol: "OF",
    decimals: 18,
  },
  {
    address: "0xd1b89856d82f978d049116eba8b7f9df2f342ff3",
    symbol: "PEPO",
    decimals: 9,
  },
  {
    address: "0xa89e2871a850e0e6fd8f0018ec1fc62fa75440d4",
    symbol: "RTF",
    decimals: 18,
  },
  {
    address: "0x71da932ccda723ba3ab730c976bc66daaf9c598c",
    symbol: "MAG",
    decimals: 18,
  },
  {
    address: "0xabd0e3535ecfbf6959b1798220335faf1b7ada3a",
    symbol: "PREAI",
    decimals: 18,
  },
  {
    address: "0x793a5d8b30aab326f83d20a9370c827fea8fdc51",
    symbol: "GIAC",
    decimals: 18,
  },
  {
    address: "0x9b4a69de6ca0defdd02c0c4ce6cb84de5202944e",
    symbol: "PROOF",
    decimals: 9,
  },
  {
    address: "0x6715515f5aa98e8bd3624922e1ba91e6f5fc4402",
    symbol: "SSNC",
    decimals: 18,
  },
  {
    address: "0x748509433ef209c4d11ada51347d5724a5da0ca5",
    symbol: "ANDY",
    decimals: 9,
  },
  {
    address: "0xa0769f7a8fc65e47de93797b4e21c073c117fc80",
    symbol: "EUTBL",
    decimals: 5,
  },
  {
    address: "0xeae00d6f9b16deb1bd584c7965e4c7d762f178a1",
    symbol: "XBG",
    decimals: 18,
  },
  {
    address: "0x5e3f09ab25548616b4b97f6163ff19cf6027930d",
    symbol: "USACOIN",
    decimals: 9,
  },
  {
    address: "0x68bbed6a47194eff1cf514b50ea91895597fc91e",
    symbol: "ANDY",
    decimals: 18,
  },
  {
    address: "0xb8a4350edafd7af34164dd5870e49e28393ff3ec",
    symbol: "MMTR",
    decimals: 18,
  },
  {
    address: "0xb60fdf036f2ad584f79525b5da76c5c531283a1b",
    symbol: "NEMO",
    decimals: 9,
  },
  {
    address: "0x255f1b39172f65dc6406b8bee8b08155c45fe1b6",
    symbol: "HARAMBE",
    decimals: 18,
  },
  {
    address: "0x60158131416f5e53d55d73a11be2e203cb26abcc",
    symbol: "EON",
    decimals: 8,
  },
  {
    address: "0x6b89b97169a797d94f057f4a0b01e2ca303155e4",
    symbol: "CHAD",
    decimals: 18,
  },
  {
    address: "0xce872db165d4f5623af9c29e03afd416bc5f67bc",
    symbol: "SVN",
    decimals: 18,
  },
  {
    address: "0x4cb1e6c430bb4b874869fd6049ed07ae975b02f1",
    symbol: "SWIPES",
    decimals: 9,
  },
  {
    address: "0x44e18207b6e98f4a786957954e462ed46b8c95be",
    symbol: "TERMINUS",
    decimals: 9,
  },
  {
    address: "0xde342a3e269056fc3305f9e315f4c40d917ba521",
    symbol: "BYTE",
    decimals: 9,
  },
  {
    address: "0x313cae7ad4454aac7b208c1f089da2b0e5825e46",
    symbol: "RPK",
    decimals: 18,
  },
  {
    address: "0xb29dc1703facd2967bb8ade2e392385644c6dca9",
    symbol: "GAGA",
    decimals: 18,
  },
  {
    address: "0xc434268603ca8854e0be1a3ff15cad73bd6ec49a",
    symbol: "ZAPI",
    decimals: 9,
  },
  {
    address: "0x94be6962be41377d5beda8dfe1b100f3bf0eacf3",
    symbol: "DORKL",
    decimals: 18,
  },
  {
    address: "0x02020595e6a34a03a8e9c1f5624b1b7713810083",
    symbol: "SPCT",
    decimals: 18,
  },
  {
    address: "0x5ce6f2c0e2a1b4540894f286254bf13b1110d240",
    symbol: "BRX",
    decimals: 18,
  },
  {
    address: "0x420698ebc9b7c225731c02d887d0729057339d39",
    symbol: "CHUCK",
    decimals: 18,
  },
  {
    address: "0xb7cffebb06621287c7850ffefb22c30252e78e6b",
    symbol: "DRIFT",
    decimals: 18,
  },
  {
    address: "0x28cfe98c33b8a8bb5f5ac5068a95d9db6bee5ffd",
    symbol: "SOUP",
    decimals: 18,
  },
  {
    address: "0x7f9b09f4717072cf4dc18b95d1b09e2b30c76790",
    symbol: "VAULT",
    decimals: 18,
  },
  {
    address: "0xbc188b5dbb155b6ea693d46d98bf60b8482939b9",
    symbol: "FTW",
    decimals: 18,
  },
  {
    address: "0x3f91ad19af450b44cf5176b4de719d77cb19eec7",
    symbol: "LTT",
    decimals: 18,
  },
  {
    address: "0x55c3a56e638e96c91f98735cc86f60a6820e6a44",
    symbol: "GAV",
    decimals: 9,
  },
  {
    address: "0xd699b83e43415b774b6ed4ce9999680f049af2ab",
    symbol: "BUBSY",
    decimals: 18,
  },
  {
    address: "0x226bb599a12c826476e3a771454697ea52e9e220",
    symbol: "PRO",
    decimals: 8,
  },
  {
    address: "0xcbf4d5efa82e32a9187385480a7c74cb062b956c",
    symbol: "SATOSHI",
    decimals: 9,
  },
  {
    address: "0x9f04c2bd696a6191246144ba762456a24c457520",
    symbol: "AITAX",
    decimals: 18,
  },
  {
    address: "0xf819d9cb1c2a819fd991781a822de3ca8607c3c9",
    symbol: "UNIBOT",
    decimals: 18,
  },
  {
    address: "0xd015422879a1308ba557510345e944b912b9ab73",
    symbol: "TRUMP",
    decimals: 18,
  },
  {
    address: "0x96e99106d9c58573171dd6c19d767d2ae7ec0435",
    symbol: "PYGES",
    decimals: 9,
  },
  {
    address: "0xb1c9d42fa4ba691efe21656a7e6953d999b990c4",
    symbol: "KANG",
    decimals: 18,
  },
  {
    address: "0xd31695a1d35e489252ce57b129fd4b1b05e6acac",
    symbol: "TKP",
    decimals: 18,
  },
  {
    address: "0x8805792d41facb22b6f47d468b06af36ff3fc1c5",
    symbol: "MAX",
    decimals: 18,
  },
  {
    address: "0x2541a36be4cd39286ed61a3e6afc2307602489d6",
    symbol: "DOGE20",
    decimals: 18,
  },
  {
    address: "0x352a4b34b8e9f43b869f6f80728978cccdced406",
    symbol: "SDLX",
    decimals: 18,
  },
  {
    address: "0xf5d791eebfc229c4fe976e8328ed2c261690cb34",
    symbol: "BOOB",
    decimals: 9,
  },
  {
    address: "0x6968676661ac9851c38907bdfcc22d5dd77b564d",
    symbol: "BOYSCLUB",
    decimals: 18,
  },
  {
    address: "0xe9a53c43a0b58706e67341c4055de861e29ee943",
    symbol: "ELMNT",
    decimals: 18,
  },
  {
    address: "0x41b1f9dcd5923c9542b6957b9b72169595acbc5c",
    symbol: "CHEEMS",
    decimals: 18,
  },
  {
    address: "0xbd32bec7c76d28aa054fc0c907d601b9263e22c7",
    symbol: "PE",
    decimals: 18,
  },
  {
    address: "0x16c22a91c705ec3c2d5945dbe2aca37924f1d2ed",
    symbol: "ERIC",
    decimals: 9,
  },
  {
    address: "0x76aab5fd2243d99eac92d4d9ebf23525d3ace4ec",
    symbol: "GGMT",
    decimals: 18,
  },
  {
    address: "0xb9fa1e2c1f1199784a3e398e23e611dda3a581cb",
    symbol: "ZLDA",
    decimals: 6,
  },
  {
    address: "0x1f38d22f4ec3479c8268c85476b9418716bdb115",
    symbol: "MEH",
    decimals: 9,
  },
  {
    address: "0x13439d2ec5aee05f52712ad9fb9fcadd300bb608",
    symbol: "PRAI",
    decimals: 9,
  },
  {
    address: "0xc78b628b060258300218740b1a7a5b3c82b3bd9f",
    symbol: "COMAI",
    decimals: 18,
  },
  {
    address: "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
    symbol: "SXP",
    decimals: 18,
  },
  {
    address: "0x8b683c400457ef31f3c27c90acb6ab69304d1b77",
    symbol: "ZDAI",
    decimals: 9,
  },
  {
    address: "0xbeef8e0982874e0292e6c5751c5a4092b3e1beef",
    symbol: "MOOBIFI",
    decimals: 18,
  },
  {
    address: "0xbbaec992fc2d637151daf40451f160bf85f3c8c1",
    symbol: "USDM",
    decimals: 6,
  },
  {
    address: "0x663962c0d2b624776d6fd1bf6ba41236761e76a9",
    symbol: "IVEX",
    decimals: 8,
  },
  {
    address: "0x3593d125a4f7849a1b059e64f4517a86dd60c95d",
    symbol: "OM",
    decimals: 18,
  },
  {
    address: "0xb5d730d442e1d5b119fb4e5c843c48a64202ef92",
    symbol: "SABAI",
    decimals: 18,
  },
  {
    address: "0x6efb32bc7893b793603e39643d86594ce3638157",
    symbol: "CNDL",
    decimals: 18,
  },
  {
    address: "0x8a13f32e2a556830f3a5e97a96ae941abfcb1d5c",
    symbol: "ELF",
    decimals: 18,
  },
  {
    address: "0x5e432eecd01c12ee7071ee9219c2477a347da192",
    symbol: "ARQX",
    decimals: 18,
  },
  {
    address: "0xe9689028ede16c2fdfe3d11855d28f8e3fc452a3",
    symbol: "BUBBLE",
    decimals: 18,
  },
  {
    address: "0xd1f2586790a5bd6da1e443441df53af6ec213d83",
    symbol: "LEDGER",
    decimals: 18,
  },
  {
    address: "0xc56c7a0eaa804f854b536a5f3d5f49d2ec4b12b8",
    symbol: "GME",
    decimals: 9,
  },
  {
    address: "0xd2a530170d71a9cfe1651fb468e2b98f7ed7456b",
    symbol: "AUDF",
    decimals: 6,
  },
  {
    address: "0x5044d567f7b30891639d982a05726a6bfe8bae6a",
    symbol: "BRAINERS",
    decimals: 18,
  },
  {
    address: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    symbol: "SUSD",
    decimals: 18,
  },
  {
    address: "0x46b2deae6eff3011008ea27ea36b7c27255ddfa9",
    symbol: "WETHDYDX",
    decimals: 18,
  },
  {
    address: "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
    symbol: "ANKR",
    decimals: 18,
  },
  {
    address: "0x71297312753ea7a2570a5a3278ed70d9a75f4f44",
    symbol: "EBULL",
    decimals: 9,
  },
  {
    address: "0x4e3d6e1a84d9efc479173b60b203bf0e1582b162",
    symbol: "ZOAI",
    decimals: 18,
  },
  {
    address: "0x3429d03c6f7521aec737a0bbf2e5ddcef2c3ae31",
    symbol: "PIXEL",
    decimals: 18,
  },
  {
    address: "0xfcf7985661d2c3f62208970cbe25e70bcce73e7c",
    symbol: "RWA",
    decimals: 18,
  },
  {
    address: "0xb6d78683a4e54b91031acb41510bd8e144fed025",
    symbol: "CNFRG",
    decimals: 18,
  },
  {
    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    symbol: "UNI",
    decimals: 18,
  },
  {
    address: "0x9c4cf40b5b5c3a58761683e65a87902130eb1b7c",
    symbol: "TME",
    decimals: 9,
  },
  {
    address: "0xe79031b5aaeb3ee8d0145e3d75b81b36bffe341d",
    symbol: "BOPPY",
    decimals: 9,
  },
  {
    address: "0x1fdd61ef9a5c31b9a2abc7d39c139c779e8412af",
    symbol: "JJ",
    decimals: 9,
  },
  {
    address: "0x841a3083074b1a40b644bf2ba2491a731b6da277",
    symbol: "FATAL",
    decimals: 12,
  },
  {
    address: "0x26ebb8213fb8d66156f1af8908d43f7e3e367c1d",
    symbol: "RETIK",
    decimals: 18,
  },
  {
    address: "0x32fb7d6e0cbeb9433772689aa4647828cc7cbba8",
    symbol: "COVE",
    decimals: 18,
  },
  {
    address: "0x09d92c109b475dd513292c76544b4e250da13faa",
    symbol: "DOGGY",
    decimals: 18,
  },
  {
    address: "0xda8a1f5eccabc80c26ec9ab493715d5b9ce8fef9",
    symbol: "BOOM",
    decimals: 18,
  },
  {
    address: "0x9eead9ce15383caeed975427340b3a369410cfbf",
    symbol: "AUSDT",
    decimals: 6,
  },
  {
    address: "0x350e52bb0f874f3b558a3679aac24268ee37a699",
    symbol: "SAAS",
    decimals: 18,
  },
  {
    address: "0x0bbcefa5f3630cae34842cb9d9b36bc0d4257a0d",
    symbol: "KAI",
    decimals: 18,
  },
  {
    address: "0x9028c2a7f8c8530450549915c5338841db2a5fea",
    symbol: "FOMO",
    decimals: 18,
  },
  {
    address: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    symbol: "GRT",
    decimals: 18,
  },
  {
    address: "0xfd03723a9a3abe0562451496a9a394d2c4bad4ab",
    symbol: "DYAD",
    decimals: 18,
  },
  {
    address: "0xba00357fd9348da1adbae9b2867b6b596eba4f24",
    symbol: "LCR",
    decimals: 18,
  },
  {
    address: "0x3b37a9caf74ead14e521d46af0bf00737d827828",
    symbol: "HOPE",
    decimals: 18,
  },
  {
    address: "0xcf4c91ecafc43c9f382db723ba20b82efa852821",
    symbol: "TRUTH",
    decimals: 18,
  },
  {
    address: "0x7613c48e0cd50e42dd9bf0f6c235063145f6f8dc",
    symbol: "PIRATE",
    decimals: 18,
  },
  {
    address: "0x9fb7b4477576fe5b32be4c1843afb1e55f251b33",
    symbol: "FUSDC",
    decimals: 6,
  },
  {
    address: "0x5c20b550819128074fd538edf79791733ccedd18",
    symbol: "FUSDT",
    decimals: 6,
  },
  {
    address: "0x2411802d8bea09be0af8fd8d08314a63e706b29c",
    symbol: "FWSTETH",
    decimals: 18,
  },
  {
    address: "0x90551c1795392094fe6d29b758eccd233cfaa260",
    symbol: "FWETH",
    decimals: 18,
  },
  {
    address: "0xbb97e381f1d1e94ffa2a5844f6875e6146981009",
    symbol: "WBX",
    decimals: 18,
  },
  {
    address: "0x130914e1b240a7f4c5d460b7d3a2fd3846b576fa",
    symbol: "ANG",
    decimals: 18,
  },
  {
    address: "0x80034f803afb1c6864e3ca481ef1362c54d094b9",
    symbol: "NPI",
    decimals: 9,
  },
  {
    address: "0x195be8ee12aa1591902c4232b5b25017a9cbbdea",
    symbol: "POPO",
    decimals: 18,
  },
  {
    address: "0x294d44386c9ff8c38659511297a2e08d829f9336",
    symbol: "ARMY",
    decimals: 18,
  },
  {
    address: "0x10dea67478c5f8c5e2d90e5e9b26dbe60c54d800",
    symbol: "TAIKO",
    decimals: 18,
  },
  {
    address: "0x88b9f5c66342ebaf661b3e2836b807c8cb1b3195",
    symbol: "NOBL",
    decimals: 18,
  },
  {
    address: "0x38fb3406532398bc3ec391b5ebeb833cc4c89d58",
    symbol: "VBELLS",
    decimals: 18,
  },
  {
    address: "0xd749b369d361396286f8cc28a99dd3425ac05619",
    symbol: "BRETTEI",
    decimals: 18,
  },
  {
    address: "0xa2ce8366603f3fffc460bef0fb90e980c9337967",
    symbol: "BOOST",
    decimals: 18,
  },
  {
    address: "0x382ea807a61a418479318efd96f1efbc5c1f2c21",
    symbol: "PEW",
    decimals: 18,
  },
  {
    address: "0x5ff46696d6e4896137acb1628b06e28c10ee9634",
    symbol: "JANNY",
    decimals: 9,
  },
  {
    address: "0xc40629464351c37c1e1f47b3640ea2e7aec31ea5",
    symbol: "HTS",
    decimals: 18,
  },
  {
    address: "0x3973c606b493eee0e14b2b5654d5c4049ce9c2d9",
    symbol: "BITG",
    decimals: 18,
  },
  {
    address: "0x58b9cb810a68a7f3e1e4f8cb45d1b9b3c79705e8",
    symbol: "CLEAR",
    decimals: 18,
  },
  {
    address: "0xd29da236dd4aac627346e1bba06a619e8c22d7c5",
    symbol: "MAGA",
    decimals: 9,
  },
  {
    address: "0xb528edbef013aff855ac3c50b381f253af13b997",
    symbol: "AEVO",
    decimals: 18,
  },
  {
    address: "0x63696fc66795b51d02c1590b536484a41fbddf9a",
    symbol: "WELL",
    decimals: 18,
  },
  {
    address: "0xa84f95eb3dabdc1bbd613709ef5f2fd42ce5be8d",
    symbol: "EAI",
    decimals: 18,
  },
  {
    address: "0x9928a8600d14ac22c0be1e8d58909834d7ceaf13",
    symbol: "DNX",
    decimals: 9,
  },
  {
    address: "0xc3d21f79c3120a4ffda7a535f8005a7c297799bf",
    symbol: "TERM",
    decimals: 18,
  },
  {
    address: "0x69a1e699f562d7af66fc6cc473d99f4430c3acd2",
    symbol: "PARAM",
    decimals: 18,
  },
  {
    address: "0x8b95fe1c06e58c269f1267e0f0093b7b26b85481",
    symbol: "MOJO",
    decimals: 18,
  },
  {
    address: "0x9ef3da23c304d88f856f2928b0be17d9f5d0752f",
    symbol: "MUL",
    decimals: 18,
  },
  {
    address: "0x0d88ed6e74bbfd96b831231638b66c05571e824f",
    symbol: "AVT",
    decimals: 18,
  },
  {
    address: "0x986df267bb88a0a0be06dd4a1052e1bdec1a6172",
    symbol: "HQ",
    decimals: 18,
  },
  {
    address: "0xd50b9bbf136d1bd5cd5ac6ed9b3f26c458a6d4a6",
    symbol: "AUSDC",
    decimals: 18,
  },
  {
    address: "0xab814ce69e15f6b9660a3b184c0b0c97b9394a6b",
    symbol: "NEURON",
    decimals: 18,
  },
  {
    address: "0x3330bfb7332ca23cd071631837dc289b09c33333",
    symbol: "RBC",
    decimals: 18,
  },
  {
    address: "0x0f8958c757b65881cec98028cae0c4ee45726eae",
    symbol: "DCN",
    decimals: 18,
  },
  {
    address: "0xd8695414822e25ab796c1d360914ddf510a01138",
    symbol: "KAI",
    decimals: 18,
  },
  {
    address: "0x0113c07b3b8e4f41b62d713b5b12616bf2856585",
    symbol: "HINU",
    decimals: 9,
  },
  {
    address: "0x5a858d94011566f7d53f92feb54aff9ee3785db1",
    symbol: "FEFE",
    decimals: 9,
  },
  {
    address: "0xf38deb975d9a34bc2b8f678de0c1d53692363851",
    symbol: "BRAWL",
    decimals: 18,
  },
  {
    address: "0xd2bdaaf2b9cc6981fd273dcb7c04023bfbe0a7fe",
    symbol: "AVI",
    decimals: 18,
  },
  {
    address: "0x30ae41d5f9988d359c733232c6c693c0e645c77e",
    symbol: "WAAC",
    decimals: 0,
  },
  {
    address: "0x7420b4b9a0110cdc71fb720908340c03f9bc03ec",
    symbol: "JASMY",
    decimals: 18,
  },
  {
    address: "0x9b0b23b35ad8136e6181f22b346134ce5f426090",
    symbol: "CINO",
    decimals: 18,
  },
  {
    address: "0xb131f4a55907b10d1f0a50d8ab8fa09ec342cd74",
    symbol: "MEME",
    decimals: 18,
  },
  {
    address: "0x9813037ee2218799597d83d4a5b6f3b6778218d9",
    symbol: "BONE",
    decimals: 18,
  },
  {
    address: "0x777b6d4730a8a890dc64bf202514ce03ab001c02",
    symbol: "BARS",
    decimals: 18,
  },
  {
    address: "0x47fe8ab9ee47dd65c24df52324181790b9f47efc",
    symbol: "AWETH",
    decimals: 18,
  },
  {
    address: "0x5a59dd979754b09ea686ce93c98d4ce8bdcb43f2",
    symbol: "CROS",
    decimals: 18,
  },
  {
    address: "0x69d26c4901765ffa6d7716045b680c9574cb00b5",
    symbol: "HONKLER",
    decimals: 18,
  },
  {
    address: "0x9cb228d638639881155211b03b8dc1027bf0880d",
    symbol: "O2T",
    decimals: 9,
  },
  {
    address: "0xb0ed164f6e3c6a4153eeb43bf9674955a259ec45",
    symbol: "ABE",
    decimals: 18,
  },
  {
    address: "0x31c5dec1f10dc084b95c239734dea0adb9c97c9c",
    symbol: "OJEE",
    decimals: 18,
  },
  {
    address: "0xcc98d9587786e06fcfd94597a078a1d0389e8a15",
    symbol: "INFC",
    decimals: 18,
  },
  {
    address: "0x0a2c375553e6965b42c135bb8b15a8914b08de0c",
    symbol: "FROG",
    decimals: 9,
  },
  {
    address: "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
    symbol: "CEL",
    decimals: 4,
  },
  {
    address: "0xc82e3db60a52cf7529253b4ec688f631aad9e7c2",
    symbol: "ARC",
    decimals: 18,
  },
  {
    address: "0xd533a949740bb3306d119cc777fa900ba034cd52",
    symbol: "CRV",
    decimals: 18,
  },
  {
    address: "0xc3960227e41c3f54e9b399ce216149dea5315c34",
    symbol: "CZ",
    decimals: 9,
  },
  {
    address: "0x5fde99e121f3ac02e7d6acb081db1f89c1e93c17",
    symbol: "MYT",
    decimals: 18,
  },
  {
    address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    symbol: "SAI",
    decimals: 18,
  },
  {
    address: "0xb6c0189080a6441caf056b856dd4d795b909c460",
    symbol: "MOON",
    decimals: 18,
  },
  {
    address: "0xf477ac7719e2e659001455cdda0cc8f3ad10b604",
    symbol: "AUTOS",
    decimals: 18,
  },
  {
    address: "0x0b38210ea11411557c13457d4da7dc6ea731b88a",
    symbol: "API3",
    decimals: 18,
  },
  {
    address: "0x963cd3e835d81ce8e4ae4836e654336dab4298e9",
    symbol: "TUIT",
    decimals: 18,
  },
  {
    address: "0xa672b803e807ab9b7cb8514350523cd6d2e4d5cc",
    symbol: "NIHAO",
    decimals: 9,
  },
  {
    address: "0xf6801c3e4108ead0deb216a3295338a582734c24",
    symbol: "LBC",
    decimals: 18,
  },
  {
    address: "0x989fa855ce126275bc269e0ec8f04a57b4af02b4",
    symbol: "XBLAZE",
    decimals: 18,
  },
  {
    address: "0x6dc469a3ef387ad9619df7774388ae26439ac8d4",
    symbol: "PAPI",
    decimals: 9,
  },
  {
    address: "0x1776c8ba4883b7e8f710e8f7b68646788340c177",
    symbol: "PTC",
    decimals: 18,
  },
  {
    address: "0x426a688ee72811773eb64f5717a32981b56f10c1",
    symbol: "AMC",
    decimals: 18,
  },
  {
    address: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
    symbol: "YFI",
    decimals: 18,
  },
  {
    address: "0x7d4a23832fad83258b32ce4fd3109ceef4332af4",
    symbol: "STONKS",
    decimals: 9,
  },
  {
    address: "0xddfbe9173c90deb428fdd494cb16125653172919",
    symbol: "SWK",
    decimals: 18,
  },
  {
    address: "0x2a414884a549ef5716bc1a4e648d3dc03f08b2cf",
    symbol: "PERQ",
    decimals: 18,
  },
  {
    address: "0x0a638f07acc6969abf392bb009f216d22adea36d",
    symbol: "BKN",
    decimals: 18,
  },
  {
    address: "0xcfd16933cb1579eee9fe6031686534e87353b148",
    symbol: "AIMR",
    decimals: 18,
  },
  {
    address: "0x6873c95307e13beb58fb8fcddf9a99667655c9e4",
    symbol: "ZKGUN",
    decimals: 18,
  },
  {
    address: "0x2025b2f4c7abe6dcb3843c62c32dfa14990a6269",
    symbol: "SNEK",
    decimals: 9,
  },
  {
    address: "0x33e07f5055173cf8febede8b21b12d1e2b523205",
    symbol: "ELAND",
    decimals: 18,
  },
  {
    address: "0x1776b223ff636d0d76adf2290821f176421dd889",
    symbol: "AMERICA",
    decimals: 9,
  },
  {
    address: "0x9ebb0895bd9c7c9dfab0d8d877c66ba613ac98ea",
    symbol: "MAGAA",
    decimals: 18,
  },
  {
    address: "0x3914bdb4130306f80f5d8ee099c180442d19680d",
    symbol: "DEPLOY",
    decimals: 18,
  },
  {
    address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    symbol: "ALPHA",
    decimals: 18,
  },
  {
    address: "0xa462bde22d98335e18a21555b6752db93a937cff",
    symbol: "BOBBY",
    decimals: 18,
  },
  {
    address: "0x6b5204b0be36771253cc38e88012e02b752f0f36",
    symbol: "ZUN",
    decimals: 18,
  },
  {
    address: "0x4a220e6096b25eadb88358cb44068a3248254675",
    symbol: "QNT",
    decimals: 18,
  },
  {
    address: "0xf411903cbc70a74d22900a5de66a2dda66507255",
    symbol: "VRA",
    decimals: 18,
  },
  {
    address: "0x408e41876cccdc0f92210600ef50372656052a38",
    symbol: "REN",
    decimals: 18,
  },
  {
    address: "0xd05f33b4fa630d6ba8a3ce75f7785439e6a3bb00",
    symbol: "FLOCHI",
    decimals: 18,
  },
  {
    address: "0x9cbefeec232cdbe428ec59ce310c6febc01d6163",
    symbol: "FLOCHI",
    decimals: 18,
  },
  {
    address: "0xe5e880b7a3e3cceca841584be21b290535eba606",
    symbol: "ANDI",
    decimals: 9,
  },
  {
    address: "0x825459139c897d769339f295e962396c4f9e4a4d",
    symbol: "GAME",
    decimals: 18,
  },
  {
    address: "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3",
    symbol: "MIM",
    decimals: 18,
  },
  {
    address: "0x276105758dfb270f5cd845aa04a6ba09c88699ca",
    symbol: "G",
    decimals: 9,
  },
  {
    address: "0xa0246c9032bc3a600820415ae600c6388619a14d",
    symbol: "FARM",
    decimals: 18,
  },
  {
    address: "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff",
    symbol: "SRM",
    decimals: 6,
  },
  {
    address: "0x6db6fdb5182053eecec778afec95e0814172a474",
    symbol: "FARM",
    decimals: 18,
  },
  {
    address: "0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1",
    symbol: "CVP",
    decimals: 18,
  },
  {
    address: "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
    symbol: "CELR",
    decimals: 18,
  },
  {
    address: "0xbba39fd2935d5769116ce38d46a71bde9cf03099",
    symbol: "CHO",
    decimals: 18,
  },
  {
    address: "0x2162f572b25f7358db9376ab58a947a4e45cede1",
    symbol: "LBL",
    decimals: 18,
  },
  {
    address: "0xc08e7e23c235073c6807c2efe7021304cb7c2815",
    symbol: "XUSD",
    decimals: 6,
  },
  {
    address: "0x423352f2c6e0e72422b69af03aba259310146d90",
    symbol: "RMV",
    decimals: 18,
  },
  {
    address: "0x53206bf5b6b8872c1bb0b3c533e06fde2f7e22e4",
    symbol: "BLEPE",
    decimals: 18,
  },
  {
    address: "0x225e5b78f289c6d7d7757ad2b9d23b6ab31a5eea",
    symbol: "MAGATRUMP",
    decimals: 18,
  },
  {
    address: "0x4aa41bc1649c9c3177ed16caaa11482295fc7441",
    symbol: "XFIT",
    decimals: 18,
  },
  {
    address: "0x9303eabc860a743aabcc3a1629014cabcc3f8d36",
    symbol: "AAMMUNIDAIWETH",
    decimals: 18,
  },
  {
    address: "0x6987e0304d1b26a311e68e3f3da26b1c885a4e83",
    symbol: "KAERU",
    decimals: 18,
  },
  {
    address: "0x7f75aa2274273f4d41267a0e2cd6c9b96c5b7510",
    symbol: "POP",
    decimals: 18,
  },
  {
    address: "0x6c5ba91642f10282b576d91922ae6448c9d52f4e",
    symbol: "PHA",
    decimals: 18,
  },
  {
    address: "0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab",
    symbol: "COW",
    decimals: 18,
  },
  {
    address: "0x28b7f370a2b0fd04a9f420c8863b12f35c0f791a",
    symbol: "MONKEI",
    decimals: 9,
  },
  {
    address: "0xaed18826655bf9167a377c8647132a937d6a4f36",
    symbol: "TBD",
    decimals: 18,
  },
  {
    address: "0x53b38ebd32bde4293423234939f6555cb7975f1e",
    symbol: "FOMEOW",
    decimals: 9,
  },
  {
    address: "0x8c19f7854b27758ddffdcdc8908f22bf55e00736",
    symbol: "YIELD",
    decimals: 18,
  },
  {
    address: "0x95af148dcdc6b36b977addf7ea2599c5e0483263",
    symbol: "HACHI",
    decimals: 18,
  },
  {
    address: "0xa0d69e286b938e21cbf7e51d71f6a4c8918f482f",
    symbol: "EUSD",
    decimals: 18,
  },
  {
    address: "0x6d68015171eaa7af9a5a0a103664cf1e506ff699",
    symbol: "TUZKI",
    decimals: 9,
  },
  {
    address: "0x9a0d1b52e0684ab42aa0c2613abb4c04217e8aa6",
    symbol: "MUNCHY",
    decimals: 9,
  },
  {
    address: "0x2781246fe707bb15cee3e5ea354e2154a2877b16",
    symbol: "EL",
    decimals: 18,
  },
  {
    address: "0xde654f497a563dd7a121c176a125dd2f11f13a83",
    symbol: "WXM",
    decimals: 18,
  },
  {
    address: "0x98cf0b67da0f16e1f8f1a1d23ad8dc64c0c70e0b",
    symbol: "MCCBBTC",
    decimals: 18,
  },
  {
    address: "0xe8fc52b1bb3a40fd8889c0f8f75879676310ddf0",
    symbol: "XZK",
    decimals: 18,
  },
  {
    address: "0xb2a25f7d864636e44bc1bf7a316897652bf07463",
    symbol: "LEGION",
    decimals: 18,
  },
  {
    address: "0x09675e24ca1eb06023451ac8088eca1040f47585",
    symbol: "APES",
    decimals: 18,
  },
  {
    address: "0xa6089dbfed19d1bcd43146bbdca2b8f9d9f84a9a",
    symbol: "UGOLD",
    decimals: 18,
  },
  {
    address: "0xf3c3745894d979f8f85761bd060520bddbc464e9",
    symbol: "LION",
    decimals: 9,
  },
  {
    address: "0xc0cfbe1602dd586349f60e4681bf4badca584ec9",
    symbol: "E",
    decimals: 9,
  },
  {
    address: "0x74950fc112473caba58193c6bf6412a6f1e4d7d2",
    symbol: "WVTRS",
    decimals: 18,
  },
  {
    address: "0x9eec1a4814323a7396c938bc86aec46b97f1bd82",
    symbol: "TOKU",
    decimals: 18,
  },
  {
    address: "0x075b1bb99792c9e1041ba13afef80c91a1e70fb3",
    symbol: "CRVRENWSBTC",
    decimals: 18,
  },
  {
    address: "0x048d07bd350ba516b84587e147284881b593eb86",
    symbol: "SYNK",
    decimals: 18,
  },
  {
    address: "0x80795a7bb55f003b1572411a271e31f73e03dd73",
    symbol: "DAUMEN",
    decimals: 9,
  },
  {
    address: "0xdb04fb08378129621634c151e9b61fef56947920",
    symbol: "LGNDX",
    decimals: 18,
  },
  {
    address: "0xb69100340a5947e856d873463694ae2186146c43",
    symbol: "PEPER",
    decimals: 9,
  },
  {
    address: "0x3256cade5f8cb1256ac2bd1e2d854dec6d667bdf",
    symbol: "MOGU",
    decimals: 18,
  },
  {
    address: "0xd12a99dbc40036cec6f1b776dccd2d36f5953b94",
    symbol: "DRAGGY",
    decimals: 9,
  },
  {
    address: "0xffb032d971469fd358f11a4192c4e0b852df5190",
    symbol: "PEPETR",
    decimals: 9,
  },
  {
    address: "0x873259322be8e50d80a4b868d186cc5ab148543a",
    symbol: "PONZIO",
    decimals: 18,
  },
  {
    address: "0x9609b540e5dedddb147abbf9812ade06b1e61b2c",
    symbol: "MICKEY",
    decimals: 18,
  },
  {
    address: "0xf7d75a5e807b5345eb7aab8cc9a2f9e2175eb88e",
    symbol: "INU",
    decimals: 18,
  },
  {
    address: "0xbb126042235e6bd38b17744cb31a8bf4a206c045",
    symbol: "FANC",
    decimals: 18,
  },
  {
    address: "0x949185d3be66775ea648f4a306740ea9eff9c567",
    symbol: "YEL",
    decimals: 18,
  },
  {
    address: "0xcbde0453d4e7d748077c1b0ac2216c011dd2f406",
    symbol: "TERMINUS",
    decimals: 9,
  },
  {
    address: "0x5f5166c4fdb9055efb24a7e75cc1a21ca8ca61a3",
    symbol: "X",
    decimals: 9,
  },
  {
    address: "0x584a4dd38d28fd1ea0e147ba7b70aed29a37e335",
    symbol: "BTCINU",
    decimals: 18,
  },
  {
    address: "0xbe8eff45293598919c99d1cbe5297f2a6935bc64",
    symbol: "TIGRA",
    decimals: 18,
  },
  {
    address: "0x8a944bb731e302fdb3571350513f149f15fcbe34",
    symbol: "RIZZ",
    decimals: 18,
  },
  {
    address: "0x6810e776880c02933d47db1b9fc05908e5386b96",
    symbol: "GNO",
    decimals: 18,
  },
  {
    address: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
    symbol: "OCEAN",
    decimals: 18,
  },
  {
    address: "0x45cb6aa4d4b2b51444b5f1a345bc5f9ff1973ed4",
    symbol: "SWT",
    decimals: 18,
  },
  {
    address: "0x3bb1be077f3f96722ae92ec985ab37fd0a0c4c51",
    symbol: "MARV",
    decimals: 18,
  },
  {
    address: "0x6942016b8de9d18a5831eeda915e48b27cc8e23d",
    symbol: "PICKLE",
    decimals: 9,
  },
  {
    address: "0x76c4ec0068923da13ee11527d6cf9b7521000049",
    symbol: "HAT",
    decimals: 18,
  },
  {
    address: "0x4b5f49487ea7b3609b1ad05459be420548789f1f",
    symbol: "LEVER",
    decimals: 18,
  },
  {
    address: "0x46971fc433d90cf2ff1da4a66abe320dfb0ce3b1",
    symbol: "WNE",
    decimals: 9,
  },
  {
    address: "0x249ca82617ec3dfb2589c4c17ab7ec9765350a18",
    symbol: "VERSE",
    decimals: 18,
  },
  {
    address: "0xce176825afc335d9759cb4e323ee8b31891de747",
    symbol: "CHWY",
    decimals: 9,
  },
  {
    address: "0x30d20208d987713f46dfd34ef128bb16c404d10f",
    symbol: "SD",
    decimals: 18,
  },
  {
    address: "0x6019dcb2d0b3e0d1d8b0ce8d16191b3a4f93703d",
    symbol: "QF",
    decimals: 18,
  },
  {
    address: "0x1caf237d7a2d103e3e9b1855988c01ac10344600",
    symbol: "LEXI",
    decimals: 9,
  },
  {
    address: "0x7434a5066dc317fa5b4d31aaded5088b9c54d667",
    symbol: "CULT",
    decimals: 18,
  },
  {
    address: "0x3261902514414a131202e792a5ef763db795e639",
    symbol: "REPX",
    decimals: 18,
  },
  {
    address: "0xda5fab7affc6dffd24d60e23153d241a3d9f9603",
    symbol: "CRYPTIQ",
    decimals: 18,
  },
  {
    address: "0xec56840be7c495cbf98c0157b458cd207ff85da1",
    symbol: "WRUNI",
    decimals: 6,
  },
  {
    address: "0xf96d4b1e0a0b129e1471e88df6f1281b933bc474",
    symbol: "SPETH",
    decimals: 18,
  },
  {
    address: "0xc555d625828c4527d477e595ff1dd5801b4a600e",
    symbol: "MON",
    decimals: 18,
  },
  {
    address: "0xf792851286fc963535fa9894573b83845bd4c1c2",
    symbol: "SIA",
    decimals: 18,
  },
  {
    address: "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
    symbol: "UMA",
    decimals: 18,
  },
  {
    address: "0x381491960c37b65862819ced0e35385f04b2c78b",
    symbol: "HACHIKO",
    decimals: 9,
  },
  {
    address: "0x6bec5f1c594af73202cd3e5c1f699d440959954c",
    symbol: "HFUN",
    decimals: 18,
  },
  {
    address: "0x6e068796ba34613eb9b285affe0283fef3f4d66f",
    symbol: "STEVE",
    decimals: 18,
  },
  {
    address: "0x5484581038cbf8ef33b7f6daec7a2f01f71db3c2",
    symbol: "HARAMBEAI",
    decimals: 18,
  },
  {
    address: "0x7a486f809c952a6f8dec8cb0ff68173f2b8ed56c",
    symbol: "USDX",
    decimals: 6,
  },
  {
    address: "0xa0385e7283c83e2871e9af49eec0966088421ddd",
    symbol: "APE",
    decimals: 18,
  },
  {
    address: "0x9625ce7753ace1fa1865a47aae2c5c2ce4418569",
    symbol: "KAP",
    decimals: 18,
  },
  {
    address: "0xf197ffc28c23e0309b5559e7a166f2c6164c80aa",
    symbol: "MXNB",
    decimals: 6,
  },
  {
    address: "0xc55c2175e90a46602fd42e931f62b3acc1a013ca",
    symbol: "STARS",
    decimals: 18,
  },
  {
    address: "0x89fd2d8fd8d937f55c89b7da3ceed44fa27e4a81",
    symbol: "BUG",
    decimals: 9,
  },
  {
    address: "0xc5d27f27f08d1fd1e3ebbaa50b3442e6c0d50439",
    symbol: "APP",
    decimals: 18,
  },
  {
    address: "0xf43f21384d03b5cbbddd58d2de64071e4ce76ab0",
    symbol: "GIGACHAD",
    decimals: 18,
  },
  {
    address: "0xefc3f1ecff8b9e9389323ef610bb9149236e62fd",
    symbol: "LMI",
    decimals: 18,
  },
  {
    address: "0xd8e8438cf7beed13cfabc82f300fb6573962c9e3",
    symbol: "HONK",
    decimals: 9,
  },
  {
    address: "0x634ed807647e07a7c038ef1956a58adbc6695f88",
    symbol: "SHEZUSD",
    decimals: 18,
  },
  {
    address: "0x927402ab67c0cda3c187e9dfe34554ac581441f2",
    symbol: "SAITABIT",
    decimals: 18,
  },
  {
    address: "0xbfa7cb34879167e982206fabf6ced5e2ba5cd496",
    symbol: "SQUIRRY",
    decimals: 9,
  },
  {
    address: "0xce682c89c63d2850cb2ca898e44d6c7c30d897a6",
    symbol: "YUM",
    decimals: 18,
  },
  {
    address: "0x9abfc0f085c82ec1be31d30843965fcc63053ffe",
    symbol: "Q",
    decimals: 9,
  },
  {
    address: "0x294b9da569c0d694870239813bbe7b5824fd2339",
    symbol: "AIR",
    decimals: 18,
  },
  {
    address: "0x4c6e2c495b974b8d4220e370f23c7e0e1da9b644",
    symbol: "SMILEY",
    decimals: 9,
  },
  {
    address: "0x25cbb21a9da7c3c63bb77ccca5b2e2482aedb710",
    symbol: "HOBA",
    decimals: 9,
  },
  {
    address: "0x7087c92ec764e75e7be7701eba15cd95d90f501f",
    symbol: "MATT",
    decimals: 18,
  },
  {
    address: "0xf03a7eb46d01d9ecaa104558c732cf82f6b6b645",
    symbol: "MATICX",
    decimals: 18,
  },
  {
    address: "0x8888888888888e0ff220b240499e30430458e568",
    symbol: "GEN",
    decimals: 18,
  },
  {
    address: "0x69420e3a3aa9e17dea102bb3a9b3b73dcddb9528",
    symbol: "ELON",
    decimals: 9,
  },
  {
    address: "0x0f48e776a4d983c0dddf4c0c946d66e3786f134f",
    symbol: "XETRA",
    decimals: 9,
  },
  {
    address: "0x02de007d412266a2e0fa9287c103474170f06560",
    symbol: "EXD",
    decimals: 18,
  },
  {
    address: "0x3300b02efa180c99a2f61f4731665b51e4e254c4",
    symbol: "HMKR",
    decimals: 9,
  },
  {
    address: "0x8854d278bdb3140c161bf011888d9dc7a5918e77",
    symbol: "YUGE",
    decimals: 9,
  },
  {
    address: "0xcc54ac31164b5b3c39db4eef26d89275c468ec9d",
    symbol: "FUELX",
    decimals: 18,
  },
  {
    address: "0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419",
    symbol: "DIA",
    decimals: 18,
  },
  {
    address: "0x88ee7a3537667958d040216d9dc1752d1274d838",
    symbol: "MMC",
    decimals: 6,
  },
  {
    address: "0x8ccedbae4916b79da7f3f612efb2eb93a2bfd6cf",
    symbol: "MNEE",
    decimals: 18,
  },
  {
    address: "0x48fd84c0dfc47f1b61ed6a86367895aaa6ad2a45",
    symbol: "TWIN",
    decimals: 18,
  },
  {
    address: "0x8802269d1283cdb2a5a329649e5cb4cdcee91ab6",
    symbol: "FIGHT",
    decimals: 9,
  },
  {
    address: "0x0000bdaa645097ef80f9d475f341d0d107a45b3a",
    symbol: "BRAINLET",
    decimals: 18,
  },
  {
    address: "0x1e18821e69b9faa8e6e75dffe54e7e25754beda0",
    symbol: "KIMCHI",
    decimals: 18,
  },
  {
    address: "0x974d796e0bea47038f39c3f98b1aa2c5240b5495",
    symbol: "EAVE",
    decimals: 18,
  },
  {
    address: "0x7b67d8b4da0b17a9b98eddc21230b60c8ede69a4",
    symbol: "ZULU",
    decimals: 18,
  },
  {
    address: "0xd4419c2d3daa986dc30444fa333a846be44fd1eb",
    symbol: "ZIK",
    decimals: 18,
  },
  {
    address: "0x69bb12b8ee418e4833b8debe4a2bb997ab9ce18e",
    symbol: "SALMAN",
    decimals: 9,
  },
  {
    address: "0x36c7188d64c44301272db3293899507eabb8ed43",
    symbol: "SWAG",
    decimals: 9,
  },
  {
    address: "0x0bc37bea9068a86c221b8bd71ea6228260dad5a2",
    symbol: "SPARKLET",
    decimals: 18,
  },
  {
    address: "0x69ee720c120ec7c9c52a625c04414459b3185f23",
    symbol: "PEEZY",
    decimals: 18,
  },
  {
    address: "0x0000000de40dfa9b17854cbc7869d80f9f98d823",
    symbol: "DLTA",
    decimals: 18,
  },
  {
    address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    symbol: "KNCL",
    decimals: 18,
  },
  {
    address: "0x8f88cde14d2d5a551618b1a7506e6137249d83ad",
    symbol: "MF",
    decimals: 18,
  },
  {
    address: "0xaa3acc21d184cef6f7fc3385fbdb79575231afba",
    symbol: "HSAI",
    decimals: 18,
  },
  {
    address: "0xbbcc7c16d56fc3b0c0a9a2ced36c74bcf73e683e",
    symbol: "BBCC",
    decimals: 18,
  },
  {
    address: "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24",
    symbol: "GLQ",
    decimals: 18,
  },
  {
    address: "0xfa955ec865f51c55e3b6ce02528a6844c2eb9c26",
    symbol: "OPENLI",
    decimals: 9,
  },
  {
    address: "0x1039bae6254178ee2f6123cd64cde9e4ca79d779",
    symbol: "WUKONG",
    decimals: 18,
  },
  {
    address: "0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe",
    symbol: "EROWAN",
    decimals: 18,
  },
  {
    address: "0x37a2f8701856a78de92dbe35df2200c355eae090",
    symbol: "QNS",
    decimals: 18,
  },
  {
    address: "0x4c7fe8f97db97cbccc76989ab742afc66ca6e75c",
    symbol: "RYO",
    decimals: 18,
  },
  {
    address: "0x03dcee0d21ab39614c768dab67bfc33b0fc0a047",
    symbol: "TRUMPCOIN",
    decimals: 18,
  },
  {
    address: "0x30303101104100c397c069e0642acac518420205",
    symbol: "PC",
    decimals: 9,
  },
  {
    address: "0x6439221d2b06a4cdf38f52a55294ddc28e1bed08",
    symbol: "GNOMY",
    decimals: 18,
  },
  {
    address: "0xbeef69ac7870777598a04b2bd4771c71212e6abc",
    symbol: "STEAKLRT",
    decimals: 18,
  },
  {
    address: "0x823e1b82ce1dc147bbdb25a203f046afab1ce918",
    symbol: "COIL",
    decimals: 18,
  },
  {
    address: "0xe86142af1321eaac4270422081c1eda31eecff0c",
    symbol: "YAYSTONE",
    decimals: 18,
  },
  {
    address: "0xc4506022fb8090774e8a628d5084eed61d9b99ee",
    symbol: "HYETH",
    decimals: 18,
  },
  {
    address: "0xfc21540d6b89667d167d42086e1feb04da3e9b21",
    symbol: "INFI",
    decimals: 18,
  },
  {
    address: "0xba2ae4e0a9c6ecaf172015aa2cdd70a21f5a290b",
    symbol: "IRO",
    decimals: 9,
  },
  {
    address: "0xc278041fdd8249fe4c1aad1193876857eea3d68c",
    symbol: "IDLETUSDYIELD",
    decimals: 18,
  },
  {
    address: "0xe657d49abae3ea21618bb481f1dab4322855f60e",
    symbol: "RAINBOW",
    decimals: 18,
  },
  {
    address: "0x21e5c85a5b1f38bddde68307af77e38f747cd530",
    symbol: "DOGS",
    decimals: 9,
  },
  {
    address: "0xf52cdcd458bf455aed77751743180ec4a595fd3f",
    symbol: "IDLESUSDYIELD",
    decimals: 18,
  },
  {
    address: "0x0f6d4d4643a514132f84f4a270946db3c7cb701c",
    symbol: "LOVELY",
    decimals: 18,
  },
  {
    address: "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4",
    symbol: "ROUTE",
    decimals: 18,
  },
  {
    address: "0x60f67e1015b3f069dd4358a78c38f83fe3a667a9",
    symbol: "ROUTE",
    decimals: 18,
  },
  {
    address: "0x98c26b1768e95d40cc77ace1b6fa77a13fffd963",
    symbol: "DASIA",
    decimals: 4,
  },
  {
    address: "0x97effb790f2fbb701d88f89db4521348a2b77be8",
    symbol: "CVG",
    decimals: 18,
  },
  {
    address: "0x9ba00d6856a4edf4665bca2c2309936572473b7e",
    symbol: "AUSDC",
    decimals: 6,
  },
  {
    address: "0xa0084063ea01d5f09e56ef3ff6232a9e18b0bacd",
    symbol: "CYDX",
    decimals: 18,
  },
  {
    address: "0x5b342f03d126314d925fa57a45654f92905e6451",
    symbol: "MNTA",
    decimals: 18,
  },
  {
    address: "0x7777cec341e7434126864195adef9b05dcc3489c",
    symbol: "ONI",
    decimals: 18,
  },
  {
    address: "0x7d4a7be025652995364e0e232063abd9e8d65e6e",
    symbol: "MONOPOLY",
    decimals: 18,
  },
  {
    address: "0x7316d973b0269863bbfed87302e11334e25ea565",
    symbol: "KEN",
    decimals: 9,
  },
  {
    address: "0xea4170a365952c666a9f34950771e51841732de9",
    symbol: "FILTER",
    decimals: 18,
  },
  {
    address: "0x5afe3855358e112b5647b952709e6165e1c1eeee",
    symbol: "SAFE",
    decimals: 18,
  },
  {
    address: "0x8ccb64623cda445aa0ce7c0caef99486ebd155ba",
    symbol: "SHEZETH",
    decimals: 18,
  },
  {
    address: "0x5362ca75aa3c0e714bc628296640c43dc5cb9ed6",
    symbol: "HOSHI",
    decimals: 9,
  },
  {
    address: "0xac51066d7bec65dc4589368da368b212745d63e8",
    symbol: "ALICE",
    decimals: 6,
  },
  {
    address: "0x1a3496c18d558bd9c6c8f609e1b129f67ab08163",
    symbol: "DEP",
    decimals: 18,
  },
  {
    address: "0x88ce174c655b6d11210a069b2c106632dabdb068",
    symbol: "YAWN",
    decimals: 18,
  },
  {
    address: "0xa28cbb24313df3907b8d87685bab2c1d0bd46b60",
    symbol: "ATX",
    decimals: 18,
  },
  {
    address: "0xa589d8868607b8d79ee4288ce192796051263b64",
    symbol: "TATE",
    decimals: 18,
  },
  {
    address: "0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568",
    symbol: "UNIBTC",
    decimals: 8,
  },
  {
    address: "0x2bb0c32101456f5960d4e994bac183fe0dc6c82c",
    symbol: "XFRXETH",
    decimals: 18,
  },
  {
    address: "0x9f23562ec47249761222ef7ac02b327a8c45ba7d",
    symbol: "XWBTC",
    decimals: 18,
  },
  {
    address: "0xb90d347e10a085b591955cbd0603ac7866fcadc8",
    symbol: "XCVX",
    decimals: 18,
  },
  {
    address: "0xacb3604aadf26e6c0bb8c720420380629a328d2c",
    symbol: "XEETH",
    decimals: 18,
  },
  {
    address: "0x5a097b014c547718e79030a077a91ae37679eff5",
    symbol: "XSTETH",
    decimals: 18,
  },
  {
    address: "0xc2eb40516ecaac04ae9964934983d1e9ebdf51fd",
    symbol: "99BTC",
    decimals: 18,
  },
  {
    address: "0x88fd59e1dd3715a98bb66149da9c944d9e795c12",
    symbol: "MOGUL",
    decimals: 18,
  },
  {
    address: "0x100891bf73ba8274c234aa34621bc626ed6eca8e",
    symbol: "HACHI",
    decimals: 9,
  },
  {
    address: "0xfefe157c9d0ae025213092ff9a5cb56ab492bab8",
    symbol: "FEFE",
    decimals: 9,
  },
  {
    address: "0x69e37422cb87d963367f73a119c8ce9a4d529b72",
    symbol: "ADVT",
    decimals: 9,
  },
  {
    address: "0x856c4efb76c1d1ae02e20ceb03a2a6a08b0b8dc3",
    symbol: "OETH",
    decimals: 18,
  },
  {
    address: "0xbeef047a543e45807105e51a8bbefcc5950fcfba",
    symbol: "STEAKUSDT",
    decimals: 18,
  },
  {
    address: "0x1121acc14c63f3c872bfca497d10926a6098aac5",
    symbol: "DOGE",
    decimals: 18,
  },
  {
    address: "0xa43a7c62d56df036c187e1966c03e2799d8987ed",
    symbol: "TRUMATIC",
    decimals: 18,
  },
  {
    address: "0xcfeb09c3c5f0f78ad72166d55f9e6e9a60e96eec",
    symbol: "VEMP",
    decimals: 18,
  },
  {
    address: "0x755f57af4c14aabfe5fbc92b27b015dcdbd30c15",
    symbol: "ACCORD",
    decimals: 18,
  },
  {
    address: "0x76bc677d444f1e9d57daf5187ee2b7dc852745ae",
    symbol: "XFT",
    decimals: 18,
  },
  {
    address: "0x2e5d4e2a2336045471bfe446caa407f0c3a2419c",
    symbol: "RSVUSDT",
    decimals: 6,
  },
  {
    address: "0x4349929808e515936a68903f6085f5e2b143ff3d",
    symbol: "CAD",
    decimals: 18,
  },
  {
    address: "0x4c1b1302220d7de5c22b495e78b72f2dd2457d45",
    symbol: "BUFFI",
    decimals: 9,
  },
  {
    address: "0x3ddd90ba2c4b028334c08b0adc6352ac9e50f2d7",
    symbol: "GRID",
    decimals: 18,
  },
  {
    address: "0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa",
    symbol: "METH",
    decimals: 18,
  },
  {
    address: "0xa1e770be76bde604f8ebb66f640250a787b9422b",
    symbol: "DEB",
    decimals: 18,
  },
  {
    address: "0xd9b9f72d6f5cdec754243d7d3cefd5b4370af094",
    symbol: "LGAS",
    decimals: 18,
  },
  {
    address: "0x393f1d49425d94f47b26e591a9d111df5cd61065",
    symbol: "GUA",
    decimals: 18,
  },
  {
    address: "0x266b4d1c60634c5ab2b9f5117888a4850d87c4c0",
    symbol: "SSAI",
    decimals: 18,
  },
  {
    address: "0x42c83a91b3a79de5488cd9280a4df564e13a79ee",
    symbol: "MIRAI",
    decimals: 18,
  },
  {
    address: "0xd09eb9099fac55edcbf4965e0a866779ca365a0c",
    symbol: "COLON",
    decimals: 9,
  },
  {
    address: "0x79874e049a65c330b23f99cf09dd93e58b1f46ad",
    symbol: "BBL",
    decimals: 18,
  },
  {
    address: "0xed89fc0f41d8be2c98b13b7e3cd3e876d73f1d30",
    symbol: "GOU",
    decimals: 9,
  },
  {
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    symbol: "WETH",
    decimals: 18,
  },
  {
    address: "0xe063f04f280c60aeca68b38341c2eecbec703ae2",
    symbol: "XETH",
    decimals: 18,
  },
  {
    address: "0xf0a949b935e367a94cdfe0f2a54892c2bc7b2131",
    symbol: "ULTRAETHS",
    decimals: 18,
  },
  {
    address: "0x046029f68b0e00ebec2e394d17f70ec848fcf1d2",
    symbol: "USD3",
    decimals: 18,
  },
  {
    address: "0xa8b919680258d369114910511cc87595aec0be6d",
    symbol: "LYXE",
    decimals: 18,
  },
  {
    address: "0xe3668873d944e4a949da05fc8bde419eff543882",
    symbol: "YPRISMA",
    decimals: 18,
  },
  {
    address: "0xb369daca21ee035312176eb8cf9d88ce97e0aa95",
    symbol: "SKOL",
    decimals: 18,
  },
  {
    address: "0x5fc429110a64bc51b57ca86dce1714fd0fbec303",
    symbol: "DAPP",
    decimals: 18,
  },
  {
    address: "0x82d09e30d5d682d69b4a5d97c61b7ba651457625",
    symbol: "TKN",
    decimals: 18,
  },
  {
    address: "0x7d36f7d8e9220f021305b8f13414c87df688aa8b",
    symbol: "SMP",
    decimals: 18,
  },
  {
    address: "0xbc404429558292ee2d769e57d57d6e74bbd2792d",
    symbol: "SUSX",
    decimals: 18,
  },
  {
    address: "0x70c29e99ca32592c0e88bb571b87444bb0e08e33",
    symbol: "MARVIN",
    decimals: 9,
  },
  {
    address: "0xd1d2c1bc0d97880b67c504e20ae6f4fa2e03b823",
    symbol: "SCALEX",
    decimals: 18,
  },
  {
    address: "0x1796ae0b0fa4862485106a0de9b654efe301d0b2",
    symbol: "PMON",
    decimals: 18,
  },
  {
    address: "0x85f7cfe910393fb5593c65230622aa597e4223f1",
    symbol: "NITEFEEDER",
    decimals: 9,
  },
  {
    address: "0xaa6624d7363ef8284aa8ce4e18146ded5f421b2c",
    symbol: "0DOG",
    decimals: 18,
  },
  {
    address: "0x0d86883faf4ffd7aeb116390af37746f45b6f378",
    symbol: "USD3",
    decimals: 18,
  },
  {
    address: "0x6a159543abfc7baf816fdbc99efd48e4ee7acc63",
    symbol: "FUKU",
    decimals: 9,
  },
  {
    address: "0x56072c95faa701256059aa122697b133aded9279",
    symbol: "SKY",
    decimals: 18,
  },
  {
    address: "0x5972169d49654dda92af57d11d4362fa72c15b03",
    symbol: "ZGEN",
    decimals: 18,
  },
  {
    address: "0x1b141e732a33d793d788ae65e1378013d49e0160",
    symbol: "GENAI",
    decimals: 9,
  },
  {
    address: "0xc4116efc9e279d4bbf577d92f224508f13637c6c",
    symbol: "DHUB",
    decimals: 18,
  },
  {
    address: "0xde8cd13b812bcd82218754a740b27e76ec1e86ad",
    symbol: "TRESTLE",
    decimals: 18,
  },
  {
    address: "0x516d339afa72f6959b8e06a31fbc32da3e49348b",
    symbol: "CNCT",
    decimals: 18,
  },
  {
    address: "0xb39a0dae3c2afd1f3c55ad47d1c7a0bb6c1ca260",
    symbol: "UNREAL",
    decimals: 9,
  },
  {
    address: "0xc328a59e7321747aebbc49fd28d1b32c1af8d3b2",
    symbol: "PHIL",
    decimals: 18,
  },
  {
    address: "0x46fdcddfad7c72a621e8298d231033cc00e067c6",
    symbol: "DOGE",
    decimals: 18,
  },
  {
    address: "0xd0054b65b683dbdd324b51f5f1f16aadeb99a74b",
    symbol: "HEM",
    decimals: 18,
  },
  {
    address: "0x8c6691704d0c3630d6a4fbd5383e0f8e59e10616",
    symbol: "TRITON",
    decimals: 18,
  },
  {
    address: "0x22fc5a29bd3d6cce19a06f844019fd506fce4455",
    symbol: "EPENDLE",
    decimals: 18,
  },
  {
    address: "0x4268a135840e5273e9dcb3dc78303767d3964f43",
    symbol: "NFT",
    decimals: 18,
  },
  {
    address: "0x54d2252757e1672eead234d27b1270728ff90581",
    symbol: "BGB",
    decimals: 18,
  },
  {
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    symbol: "MATIC",
    decimals: 18,
  },
  {
    address: "0x0bffdd787c83235f6f0afa0faed42061a4619b7a",
    symbol: "VUSD",
    decimals: 6,
  },
  {
    address: "0x917cee801a67f933f2e6b33fc0cd1ed2d5909d88",
    symbol: "WEETHS",
    decimals: 18,
  },
  {
    address: "0x7468d234a8db6f1085dbf4e403553bfed41df95c",
    symbol: "IO",
    decimals: 18,
  },
  {
    address: "0x75fa2a76e5ec2269cf507b9296ac108373c72a6e",
    symbol: "NUGX",
    decimals: 18,
  },
  {
    address: "0x6c4a8973e6633da2da7187669479c27830c7b1c4",
    symbol: "BLOOM",
    decimals: 18,
  },
  {
    address: "0x8b68f1d0246320d5caf8cd9828faab28d66ba749",
    symbol: "SMART",
    decimals: 9,
  },
  {
    address: "0x1fdb29ad49330b07ae5a87483f598aa6b292039e",
    symbol: "LTD",
    decimals: 18,
  },
  {
    address: "0x7d5121505149065b562c789a0145ed750e6e8cdd",
    symbol: "VR",
    decimals: 18,
  },
  {
    address: "0x5ea630e00d6ee438d3dea1556a110359acdc10a9",
    symbol: "SDPENDLE",
    decimals: 18,
  },
  {
    address: "0xb538d9f3e1ae450827618519acd96086fc4c0a59",
    symbol: "GIZMO",
    decimals: 18,
  },
  {
    address: "0x45e82579792dddf08cb3a037086604c262d78065",
    symbol: "IX",
    decimals: 18,
  },
  {
    address: "0x3e985250cb137fc1ff55922116934c5982d29f85",
    symbol: "ZENT",
    decimals: 18,
  },
  {
    address: "0xc9bca88b04581699fab5aa276ccaff7df957cbbf",
    symbol: "VISTA",
    decimals: 18,
  },
  {
    address: "0x005f893ecd7bf9667195642f7649da8163e23658",
    symbol: "DGNETH",
    decimals: 18,
  },
  {
    address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    symbol: "COMP",
    decimals: 18,
  },
  {
    address: "0x8f2bf2f59cdf7be4aee71500b9419623202b8636",
    symbol: "CHEF",
    decimals: 18,
  },
  {
    address: "0xecbbe10d3b5adb681deb586d012b588e046bcb9b",
    symbol: "FIBER",
    decimals: 9,
  },
  {
    address: "0x8c444197d64e079323a1eb8d40655910b052f85a",
    symbol: "EQ9",
    decimals: 18,
  },
  {
    address: "0x6ad9a31f02f1e790ff85584ea3c3d0001e45cd64",
    symbol: "C2H6",
    decimals: 9,
  },
  {
    address: "0xa78bcbb74b822e74a847897d2d1d2d5ee2c76bd8",
    symbol: "GOLD",
    decimals: 18,
  },
  {
    address: "0x9ae380f0272e2162340a5bb646c354271c0f5cfc",
    symbol: "CNC",
    decimals: 18,
  },
  {
    address: "0x16950673c9817537e7cda10b482b90c0584c9101",
    symbol: "TALES",
    decimals: 18,
  },
  {
    address: "0x64945165255bcb83f2ef9f31a575975832ca4db4",
    symbol: "KAGE",
    decimals: 18,
  },
  {
    address: "0x786f4782d1a5c602ea30bc4a95154110b9e231ea",
    symbol: "SHEZBTC",
    decimals: 18,
  },
  {
    address: "0x07e98f367aade7f81ddc90189d5d045c78e611d5",
    symbol: "VISTADOG",
    decimals: 18,
  },
  {
    address: "0x41d06390b935356b46ad6750bda30148ad2044a4",
    symbol: "HUSBY",
    decimals: 18,
  },
  {
    address: "0x15f9eb4b9beafa9db35341c5694c0b6573809808",
    symbol: "DEDA",
    decimals: 8,
  },
  {
    address: "0xc283c54df1d858570071a053057806ae73cb6a64",
    symbol: "MAK",
    decimals: 18,
  },
  {
    address: "0x686f2404e77ab0d9070a46cdfb0b7fecdd2318b0",
    symbol: "LORDS",
    decimals: 18,
  },
  {
    address: "0xbbc2ae13b23d715c30720f079fcd9b4a74093505",
    symbol: "ERN",
    decimals: 18,
  },
  {
    address: "0xfa615809a56892b9a9a0d48cf0a550deb0b42521",
    symbol: "PNWR",
    decimals: 18,
  },
  {
    address: "0x93c2bd80cadcfeb541eb5af4052375bde8d6f24f",
    symbol: "SASHA",
    decimals: 18,
  },
  {
    address: "0xff284f2e8cce4cd2f4537d8a9369482b545908fb",
    symbol: "NODE",
    decimals: 9,
  },
  {
    address: "0x5274891bec421b39d23760c04a6755ecb444797c",
    symbol: "IDLEUSDCYIELD",
    decimals: 18,
  },
  {
    address: "0xe77f6acd24185e149e329c1c0f479201b9ec2f4b",
    symbol: "ZBU",
    decimals: 18,
  },
  {
    address: "0xac9d70aebd49555b033751e311044becf3513c0f",
    symbol: "MTK",
    decimals: 18,
  },
  {
    address: "0xbb8ecf8d1342e086c9a751ee1b31a8320007379f",
    symbol: "NXR",
    decimals: 18,
  },
  {
    address: "0xfefe274de1983102d4565b7f14018602d2c830b9",
    symbol: "SIKA",
    decimals: 18,
  },
  {
    address: "0xec12e2d7acd850fe3953d1dbf860f523914654a7",
    symbol: "MIRX",
    decimals: 18,
  },
  {
    address: "0x6d3c9269bd1bc9426798a752ecebbd749e5edaa8",
    symbol: "LNEX",
    decimals: 18,
  },
  {
    address: "0x2597342ff387b63846eb456419590781c4bfcdaf",
    symbol: "TAXI",
    decimals: 18,
  },
  {
    address: "0x1c00c3e03c3a10a0c1d9b6d1a42e797d7cb4147a",
    symbol: "ARCA",
    decimals: 18,
  },
  {
    address: "0x00282fd551d03dc033256c4bf119532e8c735d8a",
    symbol: "BIAO",
    decimals: 2,
  },
  {
    address: "0x0af55d5ff28a3269d69b98680fd034f115dd53ac",
    symbol: "BSL",
    decimals: 8,
  },
  {
    address: "0x32fcde91cf683212299eb054f8a62b705892cb60",
    symbol: "AURI",
    decimals: 9,
  },
  {
    address: "0xc8f69a9b46b235de8d0b77c355fff7994f1b090f",
    symbol: "SPEEDY",
    decimals: 18,
  },
  {
    address: "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
    symbol: "WOO",
    decimals: 18,
  },
  {
    address: "0x70fd93fb088150e203d2243b9bd3190276f80c70",
    symbol: "BIRDDOG",
    decimals: 9,
  },
  {
    address: "0xb56aaac80c931161548a49181c9e000a19489c44",
    symbol: "ABDS",
    decimals: 18,
  },
  {
    address: "0x636bd98fc13908e475f56d8a38a6e03616ec5563",
    symbol: "WAT",
    decimals: 18,
  },
  {
    address: "0x558e7139800f8bc119f68d23a6126fffd43a66a6",
    symbol: "U2U",
    decimals: 18,
  },
  {
    address: "0x1b3be8fcd2e7c5ce9c5c242e0066fdd9740220d0",
    symbol: "LICKER",
    decimals: 9,
  },
  {
    address: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
    symbol: "CBBTC",
    decimals: 8,
  },
  {
    address: "0x96a5399d07896f757bd4c6ef56461f58db951862",
    symbol: "DRAGONX",
    decimals: 18,
  },
  {
    address: "0x98d4224d592fb160d117e96f004decafe88ff590",
    symbol: "CRS",
    decimals: 18,
  },
  {
    address: "0x306fd3e7b169aa4ee19412323e1a5995b8c1a1f4",
    symbol: "FTW",
    decimals: 18,
  },
  {
    address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    symbol: "STETH",
    decimals: 18,
  },
  {
    address: "0x8e42fe26fc1697f57076c9f2a8d1ff69cf7f6fda",
    symbol: "AGURI",
    decimals: 9,
  },
  {
    address: "0x7e331b55e4fbba7cb9c1fc855ed0dac2983e7798",
    symbol: "KOAI",
    decimals: 18,
  },
  {
    address: "0x70734a09b7a89f8ec3558d432fcb518dcc3c0fa0",
    symbol: "KABOSU",
    decimals: 18,
  },
  {
    address: "0xab5a80f79ab4e6c88690ca47ced199d4093249f8",
    symbol: "FINDER",
    decimals: 9,
  },
  {
    address: "0x5e7f6e008c6d9d7ad4c7eb75bd4ce62864cc7454",
    symbol: "TAPBITCOIN",
    decimals: 18,
  },
  {
    address: "0x96cc63eef1f63cde9acd69061bfb7606887f26d8",
    symbol: "BVR",
    decimals: 18,
  },
  {
    address: "0x111111111117dc0aa78b770fa6a738034120c302",
    symbol: "1INCH",
    decimals: 18,
  },
  {
    address: "0xaaf449bf8a33a32575c31ba8cbb90612dd95acfa",
    symbol: "MBD",
    decimals: 18,
  },
  {
    address: "0x2156cd781c5e77323d92a4487a0ec45f128e165e",
    symbol: "BL00P",
    decimals: 18,
  },
  {
    address: "0x7b20798866fe3320ec5395e9978a3c98195c7c36",
    symbol: "DEGEN",
    decimals: 18,
  },
  {
    address: "0x32b77729cd87f1ef2bea4c650c16f89f08472c69",
    symbol: "BOX",
    decimals: 18,
  },
  {
    address: "0x01aac2b594f7bdbec740f0f1aa22910ebb4b74ab",
    symbol: "UNIO",
    decimals: 18,
  },
  {
    address: "0x9b73ff728d7d4a423e2166a8dfaa1e79d30cdde9",
    symbol: "WOOOOO",
    decimals: 18,
  },
  {
    address: "0xf8206a19fca5999425358de4e4cdefc7f5c5d4ca",
    symbol: "WIGL",
    decimals: 9,
  },
  {
    address: "0x8be3460a480c80728a8c4d7a5d5303c85ba7b3b9",
    symbol: "SENA",
    decimals: 18,
  },
  {
    address: "0x9e46a38f5daabe8683e10793b06749eef7d733d1",
    symbol: "NCT",
    decimals: 18,
  },
  {
    address: "0x1c74d8c8fe37b0fa47debc82e0ab6925a3dc4a2f",
    symbol: "STPR",
    decimals: 18,
  },
  {
    address: "0x387f0314a91cd878a6a62f6a58dfbdc4c93be496",
    symbol: "VES",
    decimals: 18,
  },
  {
    address: "0x80810a9c31e7243a0bfb9919b0b4020378d1c134",
    symbol: "GOP",
    decimals: 9,
  },
  {
    address: "0xdae0fafd65385e7775cf75b1398735155ef6acd2",
    symbol: "TRU",
    decimals: 10,
  },
  {
    address: "0x3abe404faa776d2a833d554a068ef1a58193f080",
    symbol: "KOZUE",
    decimals: 9,
  },
  {
    address: "0x358bd0d980e031e23eba9aa793926857703783bd",
    symbol: "AAMMBPTWBTCWETH",
    decimals: 18,
  },
  {
    address: "0x0db56f603e754f3539157e2b207eff10a4ebd641",
    symbol: "DCAY",
    decimals: 9,
  },
  {
    address: "0x97aee01ed2aabad9f54692f94461ae761d225f17",
    symbol: "DEGA",
    decimals: 18,
  },
  {
    address: "0xcc7ed2ab6c3396ddbc4316d2d7c1b59ff9d2091f",
    symbol: "HYDRA",
    decimals: 18,
  },
  {
    address: "0x1bb4afbf2ce0c9ec86e6414ad4ba4d9aab1c0de4",
    symbol: "TORA",
    decimals: 9,
  },
  {
    address: "0x5f8b6827ec4c0de4787e19c30d9eda1e264a7858",
    symbol: "CRYPT",
    decimals: 18,
  },
  {
    address: "0xa6180029845469e89c507fe3eafedfa242687822",
    symbol: "NEIRO",
    decimals: 9,
  },
  {
    address: "0x96665680f4889891f3209713cb9a8205dce7278d",
    symbol: "NXCP",
    decimals: 8,
  },
  {
    address: "0x465dbc39f46f9d43c581a5d90a43e4a0f2a6ff2d",
    symbol: "ITO",
    decimals: 9,
  },
  {
    address: "0x2a762b4587197119539ca675f7c8b214cf9eda73",
    symbol: "UNAI",
    decimals: 18,
  },
  {
    address: "0x79eddec7f9648cf9953db39507efa9f772c83c6e",
    symbol: "MOKA",
    decimals: 18,
  },
  {
    address: "0xedc3be0080f65c628964f44ba3f2b6057e60f8dc",
    symbol: "DASH",
    decimals: 18,
  },
  {
    address: "0x6d3f7af0ba8003a2de0335bccd957921380b2d9e",
    symbol: "LIMON",
    decimals: 9,
  },
  {
    address: "0x236501327e701692a281934230af0b6be8df3353",
    symbol: "FLT",
    decimals: 18,
  },
  {
    address: "0xed2d1ef84a6a07dd49e8ca934908e9de005b7824",
    symbol: "WICKED",
    decimals: 18,
  },
  {
    address: "0xf280b16ef293d8e534e370794ef26bf312694126",
    symbol: "ASTEROID",
    decimals: 9,
  },
  {
    address: "0x786f112c9a6bc840cdc07cfd840105efd6ef2d4b",
    symbol: "EDOGE",
    decimals: 9,
  },
  {
    address: "0x8004c2935cbf88a318c0cf3a2f6458361d2f7015",
    symbol: "DRAFT",
    decimals: 18,
  },
  {
    address: "0x8c41455aaa8d6aba3150058d4964349294bf78a3",
    symbol: "BULL",
    decimals: 9,
  },
  {
    address: "0x78965b1c638a7ff408d1697a96d7b8e47bb7c75f",
    symbol: "CPAL",
    decimals: 18,
  },
  {
    address: "0x92d5942f468447f1f21c2092580f15544923b434",
    symbol: "VSTR",
    decimals: 18,
  },
  {
    address: "0x7de91b204c1c737bcee6f000aaa6569cf7061cb7",
    symbol: "XRT",
    decimals: 9,
  },
  {
    address: "0xc5f3bc77d4762258c99b8a80677d27f71b519398",
    symbol: "APE",
    decimals: 18,
  },
  {
    address: "0x8baf5d75cae25c7df6d1e0d26c52d19ee848301a",
    symbol: "CATALORIAN",
    decimals: 18,
  },
  {
    address: "0xe939f011a3d8fc0aa874c97e8156053a903d7176",
    symbol: "DOLZ",
    decimals: 18,
  },
  {
    address: "0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44",
    symbol: "WHITE",
    decimals: 18,
  },
  {
    address: "0xf0259b72c74d97b3be6c4c48a9a1b111efa3ddaf",
    symbol: "DPT",
    decimals: 18,
  },
  {
    address: "0x60d95823f795f1972dbdbcd886955095e36e04cd",
    symbol: "GENIE",
    decimals: 18,
  },
  {
    address: "0x82e229f145aa61000e523f97e5e8174107414897",
    symbol: "RYNO",
    decimals: 9,
  },
  {
    address: "0x044a3bad20573bbe5895b873ecbfd4e283bc9102",
    symbol: "KND",
    decimals: 18,
  },
  {
    address: "0xa2d4af83f7403285bc1041700737663f8ac43380",
    symbol: "CREATE",
    decimals: 18,
  },
  {
    address: "0x375e104af98872e5b4fe951919e504a47db1757c",
    symbol: "GINNAN",
    decimals: 9,
  },
  {
    address: "0xe2432110c32d0717e33c245fe0cfa2b26c07f47a",
    symbol: "AGX",
    decimals: 18,
  },
  {
    address: "0x3235b13708f178af6f110de7177ed5de10c1093d",
    symbol: "MNFT",
    decimals: 18,
  },
  {
    address: "0x51cb253744189f11241becb29bedd3f1b5384fdb",
    symbol: "DMTR",
    decimals: 18,
  },
  {
    address: "0x5a12975bf0158c9c3b23622f44917d113f31842d",
    symbol: "KOMA",
    decimals: 9,
  },
  {
    address: "0x979e030a78a540e78ac33c1b7745a298fbfa18b3",
    symbol: "GPUL",
    decimals: 9,
  },
  {
    address: "0x3566c8ee9780245e974e759a7716ea6ba0702588",
    symbol: "EVA",
    decimals: 9,
  },
  {
    address: "0x1f57da732a77636d913c9a75d685b26cc85dcc3a",
    symbol: "OL",
    decimals: 18,
  },
  {
    address: "0x0c2e08e459fc43ddd1e2718c122f566473f59665",
    symbol: "BURGER",
    decimals: 9,
  },
  {
    address: "0x0ccae1bc46fb018dd396ed4c45565d4cb9d41098",
    symbol: "MISHA",
    decimals: 9,
  },
  {
    address: "0xe729b15de141944abcea3cceb8e4407ce0dafa08",
    symbol: "MOJO",
    decimals: 18,
  },
  {
    address: "0x1c43cd666f22878ee902769fccda61f401814efb",
    symbol: "INCEPT",
    decimals: 18,
  },
  {
    address: "0x0b2acaaf45fc201d239c5915572730f4bff1999f",
    symbol: "GOOSE",
    decimals: 18,
  },
  {
    address: "0xbf358f7023d6fd0d11ac284eb47b877c1af635aa",
    symbol: "ARCA",
    decimals: 18,
  },
  {
    address: "0xc135a4bbf0d5005f4db3b79b84e8861d22003752",
    symbol: "TITAN",
    decimals: 9,
  },
  {
    address: "0xf1eccd41cce1f4beb8c5ca87de7949816ce05a45",
    symbol: "MOCK",
    decimals: 18,
  },
  {
    address: "0xe56a10448c632e44605dcc5201c36122ff9d0250",
    symbol: "HEDGE",
    decimals: 18,
  },
  {
    address: "0xf5e63b4c9db61c35bb66462745f9a5e64604f0a9",
    symbol: "LAPUTA",
    decimals: 9,
  },
  {
    address: "0x6969f3a3754ab674b48b7829a8572360e98132ba",
    symbol: "IZZY",
    decimals: 9,
  },
  {
    address: "0x00f116ac0c304c570daaa68fa6c30a86a04b5c5f",
    symbol: "INF",
    decimals: 18,
  },
  {
    address: "0x616bbb932602a9c9871e99806bdb63c9e6da9f8b",
    symbol: "CNET",
    decimals: 18,
  },
  {
    address: "0xbe042e9d09cb588331ff911c2b46fd833a3e5bd6",
    symbol: "PEPE",
    decimals: 18,
  },
  {
    address: "0xea46bf7fe6c9a2e29a97d2da2775131067b4ba0c",
    symbol: "L7L",
    decimals: 18,
  },
  {
    address: "0x1814b8a33446549ed5766ab3250b670498699bd6",
    symbol: "INVA",
    decimals: 18,
  },
  {
    address: "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f",
    symbol: "SDT",
    decimals: 18,
  },
  {
    address: "0x0da2082905583cedfffd4847879d0f1cf3d25c36",
    symbol: "MELO",
    decimals: 9,
  },
  {
    address: "0x94c6625371a59f3abe3b810c5d6f4e7c965d1b88",
    symbol: "INSORA",
    decimals: 18,
  },
  {
    address: "0xba0dda8762c24da9487f5fa026a9b64b695a07ea",
    symbol: "OX",
    decimals: 18,
  },
  {
    address: "0xcf078da6e85389de507ceede0e3d217e457b9d49",
    symbol: "SKAI",
    decimals: 18,
  },
  {
    address: "0x284b25d8f199125da962abc9ee6e6b1b6715cae3",
    symbol: "SNAP",
    decimals: 9,
  },
  {
    address: "0x92d6c1e31e14520e676a687f0a93788b716beff5",
    symbol: "ETHDYDX",
    decimals: 18,
  },
  {
    address: "0x18bc66f0c15e27179dd8e2277c1c9c056df0a14d",
    symbol: "DEEPAI",
    decimals: 18,
  },
  {
    address: "0x0575bf910466b306afb07e4544203d9e21413c56",
    symbol: "NOAI",
    decimals: 18,
  },
  {
    address: "0x3b24ed67481a80609af2f8913a45da2049547cfd",
    symbol: "NODE",
    decimals: 18,
  },
  {
    address: "0xb29e475b69f843046a757747943c00dce8a3d982",
    symbol: "SPCTR",
    decimals: 9,
  },
  {
    address: "0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68",
    symbol: "INV",
    decimals: 18,
  },
  {
    address: "0xd9641fc2826ecc9bebf4f3852fe4ed92a5239f02",
    symbol: "AVENT",
    decimals: 18,
  },
  {
    address: "0x65226a023ff652de48ec9fc4f2e89e5a4244a862",
    symbol: "NOUS",
    decimals: 9,
  },
  {
    address: "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72",
    symbol: "ENS",
    decimals: 18,
  },
  {
    address: "0x9155ef3f1a5b5fb43a1bbeb198cc0a7daf482679",
    symbol: "ONYX",
    decimals: 18,
  },
  {
    address: "0x66b5228cfd34d9f4d9f03188d67816286c7c0b74",
    symbol: "VOLT",
    decimals: 18,
  },
  {
    address: "0x6969e5cfe7578ac5f06d313c1a25578927a5bbc9",
    symbol: "MORTI",
    decimals: 18,
  },
  {
    address: "0x27c78a7c10a0673c3509ccf63044aab92e09edac",
    symbol: "FLY",
    decimals: 18,
  },
  {
    address: "0x888c1a341ce9d9ae9c2d2a75a72a7f0d2551a2dc",
    symbol: "CSI",
    decimals: 18,
  },
  {
    address: "0x3739426e21d912b604c106f852d136ba58f61517",
    symbol: "DOGGO",
    decimals: 18,
  },
  {
    address: "0x1580bfe88f772116fd59b042189746af8f78f00d",
    symbol: "DEGEN",
    decimals: 18,
  },
  {
    address: "0xca9de1f80df74331c5fcb7eee2d05e746d47bfb2",
    symbol: "RSVETH",
    decimals: 18,
  },
  {
    address: "0x8a462e6a0051d006e33152fbeadfb9a14198de30",
    symbol: "FYDE",
    decimals: 18,
  },
  {
    address: "0xaddb6dc7e2f7caea67621dd3ca2e8321ade33286",
    symbol: "SHARP",
    decimals: 18,
  },
  {
    address: "0x11a7c8c9e9d5fc47134c305c59cebfcd1a4a9943",
    symbol: "BOG",
    decimals: 18,
  },
  {
    address: "0x78e927fcfb062599d8295163f0808a6fcda7db24",
    symbol: "TURBO",
    decimals: 18,
  },
  {
    address: "0xaf05ce8a2cef336006e933c02fc89887f5b3c726",
    symbol: "LMI",
    decimals: 18,
  },
  {
    address: "0x17b51b1da73a02db9dc20a71684dc3ea70a0dded",
    symbol: "FOXXY",
    decimals: 18,
  },
  {
    address: "0xc0e10854ab40b2e59a5519c481161a090f1162a0",
    symbol: "CAIRO",
    decimals: 9,
  },
  {
    address: "0x1945e804b8a25b98ab140e58295404d768ca3f6b",
    symbol: "MOTION",
    decimals: 18,
  },
  {
    address: "0x5981e98440e41fa993b26912b080922b8ed023c3",
    symbol: "MIHARU",
    decimals: 18,
  },
  {
    address: "0x7e7ef0ee0305c1c195fcae22fd7b207a813eef86",
    symbol: "FIONA",
    decimals: 9,
  },
  {
    address: "0x83389cb4e4f0bff39915efa839cb827460e70d26",
    symbol: "ADX",
    decimals: 9,
  },
  {
    address: "0xa2120b9e674d3fc3875f415a7df52e382f141225",
    symbol: "ATA",
    decimals: 18,
  },
  {
    address: "0x0101013d11e4320d29759f40508c61110f525211",
    symbol: "FROG",
    decimals: 9,
  },
  {
    address: "0xebb66a88cedd12bfe3a289df6dfee377f2963f12",
    symbol: "OSCAR",
    decimals: 9,
  },
  {
    address: "0xd0ebfe04adb5ef449ec5874e450810501dc53ed5",
    symbol: "BRUME",
    decimals: 18,
  },
  {
    address: "0x2637ffece0217ae626529f6775167020f1c17d83",
    symbol: "PAL",
    decimals: 18,
  },
  {
    address: "0x89c1da46d692d09814a88a27270d0dca21e4734d",
    symbol: "GM",
    decimals: 10,
  },
  {
    address: "0xb612bfc5ce2fb1337bd29f5af24ca85dbb181ce2",
    symbol: "KLAUS",
    decimals: 9,
  },
  {
    address: "0x527f788aeaf856ad2e2c7096b5aab634bff281b8",
    symbol: "MUA",
    decimals: 18,
  },
  {
    address: "0x724af984b63fd53fdedb5ded17063001e3afc3e5",
    symbol: "ROCK",
    decimals: 18,
  },
  {
    address: "0x1265a81d42d513df40d0031f8f2e1346954d665a",
    symbol: "MCEUSDC",
    decimals: 18,
  },
  {
    address: "0xd0dfca0b404e866dc9a3038bd2a545c6735d9fa9",
    symbol: "ABE",
    decimals: 18,
  },
  {
    address: "0xbabe3ce7835665464228df00b03246115c30730a",
    symbol: "BABYNEIRO",
    decimals: 9,
  },
  {
    address: "0x3d288a54e08fe41796556efdfc24c015fe47f74e",
    symbol: "WOLT",
    decimals: 18,
  },
  {
    address: "0xa99afcc6aa4530d01dfff8e55ec66e4c424c048c",
    symbol: "AWX",
    decimals: 18,
  },
  {
    address: "0x1634e10c9155be623b5a52d6ca01c7a904d89b0a",
    symbol: "FINE",
    decimals: 18,
  },
  {
    address: "0x164f12c8d7d16b905cc4f11e819a9fc5b183ef71",
    symbol: "DMP",
    decimals: 9,
  },
  {
    address: "0x554fb3b6c1cf4a3cef49779ced321ca51c667d7d",
    symbol: "ARATA",
    decimals: 18,
  },
  {
    address: "0x270b7748cdf8243bfe68face7230ef0fce695389",
    symbol: "HETH",
    decimals: 18,
  },
  {
    address: "0x2f1abb81ed86be95bcf8178ba62c8e72d6834775",
    symbol: "PWBTC",
    decimals: 18,
  },
  {
    address: "0x3391bc034f2935ef0e1e41619445f998b2680d35",
    symbol: "IDLEUSDCSAFE",
    decimals: 18,
  },
  {
    address: "0xa14ea0e11121e6e951e87c66afe460a00bcd6a16",
    symbol: "IDLEDAISAFE",
    decimals: 18,
  },
  {
    address: "0x18a8d75f70eaead79b5a55903d036ce337f623a5",
    symbol: "SIGMA",
    decimals: 18,
  },
  {
    address: "0x6900f7b42fb4abb615c938db6a26d73a9afbed69",
    symbol: "DXY",
    decimals: 18,
  },
  {
    address: "0x46b7cb31a4a6375c69a6d0b9ed9261fb649adb83",
    symbol: "0XP",
    decimals: 9,
  },
  {
    address: "0xa1b014878d47c0836ed79163ddec55985adb7023",
    symbol: "OISHII",
    decimals: 18,
  },
  {
    address: "0x3e9c3dc19efe4271d1a65facfca55906045f7b08",
    symbol: "FROGS",
    decimals: 18,
  },
  {
    address: "0x1aee5ec60fc79b669f11fe368fde789e267649e2",
    symbol: "INTBTC",
    decimals: 18,
  },
  {
    address: "0x9f278dc799bbc61ecb8e5fb8035cbfa29803623b",
    symbol: "BDX",
    decimals: 18,
  },
  {
    address: "0x103143acf2e717acf8f021823e86a1dbfe944fb5",
    symbol: "CHEESEBALL",
    decimals: 9,
  },
  {
    address: "0xf21014b114bb976f890e15c19900ce9be5fb1e12",
    symbol: "INEIGEN",
    decimals: 18,
  },
  {
    address: "0x896c767371e2d2255f1c33301d29e5577a7aca11",
    symbol: "BULLA",
    decimals: 9,
  },
  {
    address: "0x3fe7940616e5bc47b0775a0dccf6237893353bb4",
    symbol: "IDLEDAIYIELD",
    decimals: 18,
  },
  {
    address: "0x4e6221c07dae8d3460a46fa01779cf17fdd72ad8",
    symbol: "POCHITA",
    decimals: 9,
  },
  {
    address: "0x2e7e487d84b5baba5878a9833fb394bc89633fd7",
    symbol: "OMNIA",
    decimals: 18,
  },
  {
    address: "0xfb5c6815ca3ac72ce9f5006869ae67f18bf77006",
    symbol: "PSTAKE",
    decimals: 18,
  },
  {
    address: "0x244f09d92971d03a779aa66d310579a6517ab9a4",
    symbol: "HARAMBE",
    decimals: 18,
  },
  {
    address: "0x160085da9e1b6c8fd9cb6e16253055796599318a",
    symbol: "SOAI",
    decimals: 18,
  },
  {
    address: "0x92d001c60df1c2248ae9020bbac559331cefcdec",
    symbol: "POCHITA",
    decimals: 9,
  },
  {
    address: "0x723abbea6e985fb21c57f550d9cceba1c676a6a9",
    symbol: "SCF",
    decimals: 9,
  },
  {
    address: "0x320623b8e4ff03373931769a31fc52a4e78b5d70",
    symbol: "RSR",
    decimals: 18,
  },
  {
    address: "0x74ab072c91bf33479f959ce70561e785fd7391fd",
    symbol: "GBTC",
    decimals: 9,
  },
  {
    address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    symbol: "AAVE",
    decimals: 18,
  },
  {
    address: "0x6710c63432a2de02954fc0f851db07146a6c0312",
    symbol: "MFG",
    decimals: 18,
  },
  {
    address: "0x3e66c9a569efcf704391b54fd1eebd8ca0556960",
    symbol: "FUBAO",
    decimals: 18,
  },
  {
    address: "0x582dd5e7c8af79d45a96de4af5d1152a061abb50",
    symbol: "RIZZ",
    decimals: 9,
  },
  {
    address: "0xa7f4195f10f1a62b102bd683eab131d657a6c6e4",
    symbol: "MBAG",
    decimals: 18,
  },
  {
    address: "0x283d480dfd6921055e9c335fc177bf8cb9c94184",
    symbol: "VIX",
    decimals: 8,
  },
  {
    address: "0x381ab19e04bd9dc333794a9f4d343daeee3b7069",
    symbol: "DOLAN",
    decimals: 9,
  },
  {
    address: "0x0c7ecdb459111cd806e54adc9da1f4a03b43b64a",
    symbol: "GG",
    decimals: 18,
  },
  {
    address: "0x864cb5194722d5a1596f4be8b899916d30dad8d8",
    symbol: "DOG",
    decimals: 18,
  },
  {
    address: "0x4a7c9897ae01ff08d6e3820507a6b967bdbffa29",
    symbol: "WIZARD",
    decimals: 18,
  },
  {
    address: "0x3ae86d2d2f6a8d29792156dd92db01d7b3cc75fb",
    symbol: "SXETH",
    decimals: 18,
  },
  {
    address: "0xb3e41d6e0ea14b43bc5de3c314a408af171b03dd",
    symbol: "KABOSU",
    decimals: 9,
  },
  {
    address: "0x0d66a792c63b682fd3f6bbbbcde8d3029f90e939",
    symbol: "CRX",
    decimals: 9,
  },
  {
    address: "0xa426660830ed887a25c1c6158ca348038e1a37cb",
    symbol: "CTO",
    decimals: 18,
  },
  {
    address: "0x968496dd59efc1caa11e94fda99ea67db7be5cd9",
    symbol: "DJT",
    decimals: 18,
  },
  {
    address: "0x1842f548295b222c56939745d8ddf74981d40030",
    symbol: "QUDEFI",
    decimals: 18,
  },
  {
    address: "0x24edded3f03abb2e9d047464294133378bddb596",
    symbol: "SECT",
    decimals: 18,
  },
  {
    address: "0xe683d3bda5ae110497aae63f2561694a4374f2ae",
    symbol: "TRUMPSFIGHT",
    decimals: 18,
  },
  {
    address: "0xc9eb61ffb66d5815d643bbb8195e17c49687ae1e",
    symbol: "MIND",
    decimals: 18,
  },
  {
    address: "0x42069026eac8eee0fd9b5f7adfa4f6e6d69a2b39",
    symbol: "MSTR",
    decimals: 9,
  },
  {
    address: "0x59a73bef0f729761bc3b9aa7f41872077e4bf300",
    symbol: "SECT",
    decimals: 18,
  },
  {
    address: "0x8b8f9419ed9fd8c168128bf05c5d5fe7b17fe11d",
    symbol: "MILO",
    decimals: 18,
  },
  {
    address: "0xd692cb29aa3958a7f5c583323be2990903a57977",
    symbol: "QUANT",
    decimals: 18,
  },
  {
    address: "0xa7dfba2dfd3ad9bc0a30d69db439957e92daf1bc",
    symbol: "EGOLD",
    decimals: 18,
  },
  {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    symbol: "USDC",
    decimals: 6,
  },
  {
    address: "0x206a5ec55c531574130691cf9ada0fd711d5f710",
    symbol: "REMILIA",
    decimals: 9,
  },
  {
    address: "0xbfde5ac4f5adb419a931a5bf64b0f3bb5a623d06",
    symbol: "FLUX",
    decimals: 18,
  },
  {
    address: "0x5200b34e6a519f289f5258de4554ebd3db12e822",
    symbol: "GOAT",
    decimals: 9,
  },
  {
    address: "0x694200465963898a9fef06a5b778d9e65721685c",
    symbol: "GECKY",
    decimals: 9,
  },
  {
    address: "0xe77076518a813616315eaaba6ca8e595e845eee9",
    symbol: "EEIGEN",
    decimals: 18,
  },
  {
    address: "0x49d1372124f9b018f32f13b81de6f4c83d89fcc3",
    symbol: "CGPU",
    decimals: 18,
  },
  {
    address: "0x01043bf843b88e1182b1db27bdcc93999aa74c56",
    symbol: "TAOTOOLS",
    decimals: 18,
  },
  {
    address: "0xf34842d05a1c888ca02769a633df37177415c2f8",
    symbol: "IDLEUSDTYIELD",
    decimals: 18,
  },
  {
    address: "0x525574c899a7c877a11865339e57376092168258",
    symbol: "GURU",
    decimals: 18,
  },
  {
    address: "0x4298e4ad48be89bf63a6fdc470a4b4fe9ce633b1",
    symbol: "ESTEE",
    decimals: 9,
  },
  {
    address: "0xefb2beb3b6325855bc257bad9166bf2687c68cc1",
    symbol: "MD",
    decimals: 18,
  },
  {
    address: "0xad86b91a1d1db15a4cd34d0634bbd4ecacb5b61a",
    symbol: "DARAM",
    decimals: 18,
  },
  {
    address: "0x616254b3c79639f89e756495ac687735b27b5e17",
    symbol: "RINO",
    decimals: 18,
  },
  {
    address: "0x28ae7b2ebd6f10f4393f410f6b7896380a949d62",
    symbol: "CREA",
    decimals: 9,
  },
  {
    address: "0x1ee2b89458eb12f93f7f01972c39589b99a8ed5a",
    symbol: "SENDR",
    decimals: 18,
  },
  {
    address: "0x73e0c0d45e048d25fc26fa3159b0aa04bfa4db98",
    symbol: "KBTC",
    decimals: 8,
  },
  {
    address: "0xb0df0e6133ce2bae93f1bb1737ed3f39593c67f5",
    symbol: "XPASS",
    decimals: 18,
  },
  {
    address: "0x0789dbae94fb18e5789b8e4489bcb7a1adb58622",
    symbol: "FSCC",
    decimals: 8,
  },
  {
    address: "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
    symbol: "AGIX",
    decimals: 8,
  },
  {
    address: "0xa684eaf215ad323452e2b2bf6f817d4aa5c116ab",
    symbol: "LPETH",
    decimals: 18,
  },
  {
    address: "0xfe402841227213adebd67ec42921bf7b76415f6c",
    symbol: "GOLDN",
    decimals: 18,
  },
  {
    address: "0xd3c5bdbc6de5ea3899a28f6cd419f29c09fa749f",
    symbol: "SANIN",
    decimals: 9,
  },
  {
    address: "0xf8a0a167bea66247425ef9cb9b622a4b320b8bb6",
    symbol: "RSN",
    decimals: 18,
  },
  {
    address: "0xa5c45d48d36607741e90c0cca29545a46f5ee121",
    symbol: "CHIB",
    decimals: 9,
  },
  {
    address: "0xc21db71648b18c5b9e038d88393c9b254cf8eac8",
    symbol: "ERY",
    decimals: 18,
  },
  {
    address: "0x1e0b2992079b620aa13a7c2e7c88d2e1e18e46e9",
    symbol: "KOMPETE",
    decimals: 10,
  },
  {
    address: "0xb5b543c1b43fd9077152e6d155102514e0f3012a",
    symbol: "SAM",
    decimals: 9,
  },
  {
    address: "0x8808434a831efea81170a56a9ddc57cc9e6de1d8",
    symbol: "BORK",
    decimals: 18,
  },
  {
    address: "0x18e1b6aa7ef866eba192f2817d43bae92d75c817",
    symbol: "OPZ",
    decimals: 18,
  },
  {
    address: "0xed1aecc815c00073ba6707b1cd4bd7f833da7a38",
    symbol: "INTX",
    decimals: 18,
  },
  {
    address: "0x535887989b9edffb63b1fd5c6b99a4d45443b49a",
    symbol: "TRUMP47",
    decimals: 9,
  },
  {
    address: "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
    symbol: "CEEK",
    decimals: 18,
  },
  {
    address: "0xb49bf1dbdc567b997733093880734f030174474c",
    symbol: "FREEDOM",
    decimals: 18,
  },
  {
    address: "0x54012cdf4119de84218f7eb90eeb87e25ae6ebd7",
    symbol: "LUFFY",
    decimals: 9,
  },
  {
    address: "0x5becd80848e096d065f27c3b1498553c705c77ed",
    symbol: "TAI",
    decimals: 18,
  },
  {
    address: "0xa3d4bee77b05d4a0c943877558ce21a763c4fa29",
    symbol: "ROOT",
    decimals: 6,
  },
  {
    address: "0x0a2a015a15a8e019abc386fee88b8a6d7a0d90df",
    symbol: "MXNA",
    decimals: 18,
  },
  {
    address: "0x303c89f3a4a58872d8b6a3e64c14fdd9ec669c99",
    symbol: "BABYNEIRO",
    decimals: 18,
  },
  {
    address: "0x1e762e1fac176bbb341656035daf5601b1c69be5",
    symbol: "WEL",
    decimals: 18,
  },
  {
    address: "0x7b43e3875440b44613dc3bc08e7763e6da63c8f8",
    symbol: "USDR",
    decimals: 6,
  },
  {
    address: "0xf1bb41f9ed87e6c7e1f70e921b7b4bee1df7ae9c",
    symbol: "DCOIN",
    decimals: 18,
  },
  {
    address: "0x5a1bcfa16e3edff07dfa60427bd0b51736ea8d37",
    symbol: "MGGA",
    decimals: 18,
  },
  {
    address: "0x42069f39c71816cea208451598425b492dd2b380",
    symbol: "GOOMPY",
    decimals: 9,
  },
  {
    address: "0x9e456714f6d4101d230b1f0aa9d9a25f72780ca6",
    symbol: "OMAGENT",
    decimals: 8,
  },
  {
    address: "0x880eeea0637f91bb259dfd7bb261638a42bddb25",
    symbol: "BIAI",
    decimals: 9,
  },
  {
    address: "0x007115416ab6c266329a03b09a8aa39ac2ef7d9d",
    symbol: "MBTC",
    decimals: 18,
  },
  {
    address: "0x9778ac3d5a2f916aa9abf1eb85c207d990ca2655",
    symbol: "OGSM",
    decimals: 18,
  },
  {
    address: "0x40e5a14e1d151f34fea6b8e6197c338e737f9bf2",
    symbol: "VY",
    decimals: 18,
  },
  {
    address: "0xb23d80f5fefcddaa212212f028021b41ded428cf",
    symbol: "PRIME",
    decimals: 18,
  },
  {
    address: "0x4b41a481a7a3e0396751aa49bee970b842fdaede",
    symbol: "KYRA",
    decimals: 9,
  },
  {
    address: "0xb62e24b747eaa41454857cf6011832117df59cb8",
    symbol: "EPIKO",
    decimals: 18,
  },
  {
    address: "0x163f8c2467924be0ae7b5347228cabf260318753",
    symbol: "WLD",
    decimals: 18,
  },
  {
    address: "0x6c060ba738af39a09f3b45ac6487dfc9ebb885f6",
    symbol: "RSERG",
    decimals: 9,
  },
  {
    address: "0x84f171f4c7b43966231847cc6e60416e6c3a7360",
    symbol: "EVAI",
    decimals: 18,
  },
  {
    address: "0xd43fba1f38d9b306aeef9d78ad177d51ef802b46",
    symbol: "GONDOLA",
    decimals: 9,
  },
  {
    address: "0x0ea20e7ffb006d4cfe84df2f72d8c7bd89247db0",
    symbol: "AAMMUNICRVWETH",
    decimals: 18,
  },
  {
    address: "0x02e7f808990638e9e67e1f00313037ede2362361",
    symbol: "KIBSHI",
    decimals: 18,
  },
  {
    address: "0xaee5913ffd19dbca4fd1ef6f3925ed0414407d37",
    symbol: "YLAY",
    decimals: 18,
  },
  {
    address: "0xcc42b2b6d90e3747c2b8e62581183a88e3ca093a",
    symbol: "LOTUS",
    decimals: 18,
  },
  {
    address: "0xb146823fb8ea064d14ba1a52e3e55cde09afff2d",
    symbol: "EYE",
    decimals: 18,
  },
  {
    address: "0xbb712c77b69256934cdf2f630a2317ac82570388",
    symbol: "CRIPPL",
    decimals: 18,
  },
  {
    address: "0xe0151763455a8a021e64880c238ba1cff3787ff0",
    symbol: "APED",
    decimals: 18,
  },
  {
    address: "0xb8db81b84d30e2387de0ff330420a4aaa6688134",
    symbol: "AAMMUNILINKWETH",
    decimals: 18,
  },
  {
    address: "0x05d3606d5c81eb9b7b18530995ec9b29da05faba",
    symbol: "TOMOE",
    decimals: 18,
  },
  {
    address: "0xe52a736828c782c2a4a345bbe8052aed010fc82d",
    symbol: "HLT",
    decimals: 2,
  },
  {
    address: "0x435cbf7c09e01d6a07b9997770f7b9d1ab754020",
    symbol: "MAGIC",
    decimals: 9,
  },
  {
    address: "0xb8a914a00664e9361eae187468eff94905dfbc15",
    symbol: "DRIP",
    decimals: 9,
  },
  {
    address: "0x615987d46003cc37387dbe544ff4f16fa1200077",
    symbol: "NASDAQ420",
    decimals: 9,
  },
  {
    address: "0x93181f0625329fc0f5c35d1670ceb541867acc65",
    symbol: "STRA",
    decimals: 9,
  },
  {
    address: "0xd888a5460fffa4b14340dd9fe2710cbabd520659",
    symbol: "KOL",
    decimals: 18,
  },
  {
    address: "0x705d0deca6ce8f16c31bc510708a8512d25011b3",
    symbol: "PALCOIN",
    decimals: 4,
  },
  {
    address: "0x5d19d39852bf99bc4344483cbce3c9ff8f026b43",
    symbol: "AURA",
    decimals: 9,
  },
  {
    address: "0x8f693ca8d21b157107184d29d398a8d082b38b76",
    symbol: "DATA",
    decimals: 18,
  },
  {
    address: "0xc539f8e194569b3db935d70fa2e7cadd7dad7f35",
    symbol: "CZAR",
    decimals: 18,
  },
  {
    address: "0x225c119ffaf1caddcfcdb493283edf4b816bf773",
    symbol: "USUALUSDT",
    decimals: 18,
  },
  {
    address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
    symbol: "WSTETH",
    decimals: 18,
  },
  {
    address: "0xa9e201a4e269d6cd5e9f0fcbcb78520cf815878b",
    symbol: "AAMMUNIRENWETH",
    decimals: 18,
  },
  {
    address: "0x77791a1f85b8c67f17c43ba4a324f9bcd6e83113",
    symbol: "WAGMI",
    decimals: 18,
  },
  {
    address: "0xf8676dee37a9ad404ff58ed03b1a145ad66836bb",
    symbol: "RIXEN",
    decimals: 18,
  },
  {
    address: "0x65ccd72c0813ce6f2703593b633202a0f3ca6a0c",
    symbol: "EGG",
    decimals: 18,
  },
  {
    address: "0x92f419fb7a750aed295b0ddf536276bf5a40124f",
    symbol: "TATSU",
    decimals: 18,
  },
  {
    address: "0x60e254e35dd712394b3aba7a1d19114732e143dd",
    symbol: "RIVUS",
    decimals: 18,
  },
  {
    address: "0x13063bed4bebbe542005e191c459d2cfa96b98e1",
    symbol: "IZUMI",
    decimals: 9,
  },
  {
    address: "0xc25a3a3b969415c80451098fa907ec722572917f",
    symbol: "SCURVE",
    decimals: 18,
  },
  {
    address: "0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1",
    symbol: "AUNI",
    decimals: 18,
  },
  {
    address: "0x396c95abe154b3b2ed204cf45c8726aa7ad47a4d",
    symbol: "GDT",
    decimals: 18,
  },
  {
    address: "0x95ccffae3eb8767d4a941ec43280961dde89f4de",
    symbol: "TBANK",
    decimals: 18,
  },
  {
    address: "0x64d5fea7d2d600918b76159285994d6ed218f264",
    symbol: "TAS",
    decimals: 18,
  },
  {
    address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
    symbol: "TBTC",
    decimals: 18,
  },
  {
    address: "0x2025bf4e0c1117685b1bf2ea2be56c7deb11bc99",
    symbol: "ROBIE",
    decimals: 18,
  },
  {
    address: "0xea50f402653c41cadbafd1f788341db7b7f37816",
    symbol: "SGYD",
    decimals: 18,
  },
  {
    address: "0xf0430bd971ee4a63674a2103e21129e9ccf29686",
    symbol: "GARY",
    decimals: 9,
  },
  {
    address: "0x939069722d568b5498ccba4356e800eaefefd2a5",
    symbol: "FNXAI",
    decimals: 18,
  },
  {
    address: "0x68aaa0d94ea163b9bbf659dc3766defb4c0ac7be",
    symbol: "ANDYMAN",
    decimals: 9,
  },
  {
    address: "0x9a594f5ed8d119b73525dfe23adbceca77fd828d",
    symbol: "TRIANGLE",
    decimals: 18,
  },
  {
    address: "0xd63070114470f685b75b74d60eec7c1113d33a3d",
    symbol: "USUALUSDC+",
    decimals: 18,
  },
  {
    address: "0xd536e7a9543cf9867a580b45cec7f748a1fe11ec",
    symbol: "ORX",
    decimals: 18,
  },
  {
    address: "0x42476f744292107e34519f9c357927074ea3f75d",
    symbol: "LOOM",
    decimals: 18,
  },
  {
    address: "0x140007c65535aa9c3801ea3bbd3f83c378c7f457",
    symbol: "X",
    decimals: 9,
  },
  {
    address: "0x4ade2b180f65ed752b6f1296d0418ad21eb578c0",
    symbol: "KEK",
    decimals: 9,
  },
  {
    address: "0xa728aa2de568766e2fa4544ec7a77f79c0bf9f97",
    symbol: "JOK",
    decimals: 18,
  },
  {
    address: "0xbb22d59b73d7a6f3a8a83a214becc67eb3b511fe",
    symbol: "XRETH",
    decimals: 18,
  },
  {
    address: "0x4166673521e31ed98801e45e8b068b4bc227a110",
    symbol: "PONZIE",
    decimals: 18,
  },
  {
    address: "0x710287d1d39dcf62094a83ebb3e736e79400068a",
    symbol: "ENQAI",
    decimals: 18,
  },
  {
    address: "0x91f322e0d0bd688acd511a789431a2b672a28013",
    symbol: "FTP",
    decimals: 18,
  },
  {
    address: "0x06561dc5cedcc012a4ea68609b17d41499622e4c",
    symbol: "NOOB",
    decimals: 18,
  },
  {
    address: "0x95ed629b028cf6aadd1408bb988c6d1daabe4767",
    symbol: "DORKY",
    decimals: 9,
  },
  {
    address: "0x420110d74c4c3ea14043a09e81fad53e1932f54c",
    symbol: "GROGGO",
    decimals: 18,
  },
  {
    address: "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
    symbol: "SKL",
    decimals: 18,
  },
  {
    address: "0x4d1c297d39c5c1277964d0e3f8aa901493664530",
    symbol: "PUFFER",
    decimals: 18,
  },
  {
    address: "0xf587f2e8aff7d76618d3b6b4626621860fbd54e3",
    symbol: "GTCBBTCC",
    decimals: 18,
  },
  {
    address: "0xe69ccaaaea33ebfe5b76e0dd373cd9a1a31fd410",
    symbol: "PNUT",
    decimals: 9,
  },
  {
    address: "0xe0c98605f279e4d7946d25b75869c69802823763",
    symbol: "RE7WBTC",
    decimals: 18,
  },
  {
    address: "0xdd0f28e19c1780eb6396170735d45153d261490d",
    symbol: "GTUSDC",
    decimals: 18,
  },
  {
    address: "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7",
    symbol: "AKRO",
    decimals: 18,
  },
  {
    address: "0x49849c98ae39fff122806c06791fa73784fb3675",
    symbol: "RENBTCCURVE",
    decimals: 18,
  },
  {
    address: "0x8c81121b15197fa0eeaee1dc75533419dcfd3151",
    symbol: "IDLEWBTCYIELD",
    decimals: 18,
  },
  {
    address: "0x28fac5334c9f7262b3a3fe707e250e01053e07b5",
    symbol: "IDLEUSDTSAFE",
    decimals: 18,
  },
  {
    address: "0x2d81f9460bd21e8578350a4f06e62848ed4bb27e",
    symbol: "OWN",
    decimals: 18,
  },
  {
    address: "0x699ec925118567b6475fe495327ba0a778234aaa",
    symbol: "DUCKY",
    decimals: 9,
  },
  {
    address: "0xca76bf98b6e44df7360da8650e701f6d9d94bb58",
    symbol: "MK",
    decimals: 18,
  },
  {
    address: "0xc0a14627d6a23f70c809777ced873238581c1032",
    symbol: "MCUSD0",
    decimals: 18,
  },
  {
    address: "0xfbdee8670b273e12b019210426e70091464b02ab",
    symbol: "MCWM",
    decimals: 18,
  },
  {
    address: "0x69420cb71f5fa439a84545e79557977c0600c46e",
    symbol: "TRUMP",
    decimals: 9,
  },
  {
    address: "0xba62856e16cb3283d3b8e670b196b9bb02902f30",
    symbol: "LUCE",
    decimals: 9,
  },
  {
    address: "0xccf4429db6322d5c611ee964527d42e5d685dd6a",
    symbol: "CWBTC",
    decimals: 8,
  },
  {
    address: "0xc71b5f631354be6853efe9c3ab6b9590f8302e81",
    symbol: "ZKJ",
    decimals: 18,
  },
  {
    address: "0x7f792db54b0e580cdc755178443f0430cf799aca",
    symbol: "VOLT",
    decimals: 9,
  },
  {
    address: "0xbe9895146f7af43049ca1c1ae358b0541ea49704",
    symbol: "CBETH",
    decimals: 18,
  },
  {
    address: "0x614da3b37b6f66f7ce69b4bbbcf9a55ce6168707",
    symbol: "MMX",
    decimals: 18,
  },
  {
    address: "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    symbol: "BAND",
    decimals: 18,
  },
  {
    address: "0xbeef050ecd6a16c4e7bffbb52ebba7846c4b8cd4",
    symbol: "STEAKETH",
    decimals: 18,
  },
  {
    address: "0xac1d3d7a8878e655cbb063d58e453540641f4117",
    symbol: "TOAD",
    decimals: 18,
  },
  {
    address: "0xb9f599ce614feb2e1bbe58f180f370d05b39344e",
    symbol: "PORK",
    decimals: 18,
  },
  {
    address: "0xf7554eac0bf20d702e69d08c425e817abb976aea",
    symbol: "MAHA",
    decimals: 18,
  },
  {
    address: "0x272f97b7a56a387ae942350bbc7df5700f8a4576",
    symbol: "ABAL",
    decimals: 18,
  },
  {
    address: "0xc4b9e3aa1071741220a548832c887b39cb621970",
    symbol: "FUG",
    decimals: 18,
  },
  {
    address: "0x3f98ee6644b2c68a800c08fefa97e6ecfbdba248",
    symbol: "WHAT",
    decimals: 18,
  },
  {
    address: "0xfe4ee5ea324cda81fef5973f3cfc0a213879f2b2",
    symbol: "MEOW",
    decimals: 18,
  },
  {
    address: "0x4e09ac09eb332f4dd167b8bfb90c7f247f7350ac",
    symbol: "MIKO",
    decimals: 18,
  },
  {
    address: "0x210028b5a1e9effb93ce31006a18629f31131093",
    symbol: "BLK",
    decimals: 9,
  },
  {
    address: "0x70ef0df8b656403fc8c632c52661f19fc9934471",
    symbol: "SKULL",
    decimals: 18,
  },
  {
    address: "0xb36cf340a35f9860d0bb59afb0355580f0000dad",
    symbol: "PADRE",
    decimals: 18,
  },
  {
    address: "0xf4b7b9ab55a2eeb3bd6123b8f45b0abffd5089c7",
    symbol: "SHIB",
    decimals: 9,
  },
  {
    address: "0xb1f1ee126e9c96231cc3d3fad7c08b4cf873b1f1",
    symbol: "BIFI",
    decimals: 18,
  },
  {
    address: "0x50d7ee9708fec39673c92e1aae048eb3685eea9b",
    symbol: "GINNAN",
    decimals: 9,
  },
  {
    address: "0x6fd46112c8ec76e7940dbfdc150774ee6eff27b2",
    symbol: "RUNNER",
    decimals: 18,
  },
  {
    address: "0xca6e4ac78cd8f0226faeabf3b1a3500af2ebff2b",
    symbol: "ART",
    decimals: 18,
  },
  {
    address: "0x690031313d70c2545357f4487c6a3f134c434507",
    symbol: "QQQ",
    decimals: 9,
  },
  {
    address: "0x7ca9403ba20ac9e649c8dba53f920663540985a9",
    symbol: "NEXIS",
    decimals: 18,
  },
  {
    address: "0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9",
    symbol: "DONUT",
    decimals: 18,
  },
  {
    address: "0x156994e6cabea296e7a73cf3742355bf71a64cec",
    symbol: "RANDOM9",
    decimals: 9,
  },
  {
    address: "0xb4c42d3ecb9cf5811e7cf21a81d0bf3fee21a6f3",
    symbol: "NWO",
    decimals: 9,
  },
  {
    address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    symbol: "SHIB",
    decimals: 18,
  },
  {
    address: "0x5485a469faea1492191cfce7528ab6e58135aa4d",
    symbol: "OSMI",
    decimals: 18,
  },
  {
    address: "0xde0a515d133397d62eb3fcdfcc68ba4904ac49c0",
    symbol: "SHNJ",
    decimals: 9,
  },
  {
    address: "0x079d0150cc21e127898db0f51f18ca54db56b1ba",
    symbol: "BTCACT",
    decimals: 9,
  },
  {
    address: "0xafd4f9e5909bfa438c9d064f1851cdc98ab85936",
    symbol: "NERD",
    decimals: 9,
  },
  {
    address: "0xf951e335afb289353dc249e82926178eac7ded78",
    symbol: "SWETH",
    decimals: 18,
  },
  {
    address: "0xbe40491f3261fd42724f1aeb465796eb11c06ddf",
    symbol: "RE7FRAX",
    decimals: 18,
  },
  {
    address: "0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9",
    symbol: "BOR",
    decimals: 18,
  },
  {
    address: "0x4687f007da484efe20d7a17e5b1d105cdbfca0eb",
    symbol: "MORPH",
    decimals: 18,
  },
  {
    address: "0x81fcc294d91bd8ffc8a822d7df0e2fd2f8526c39",
    symbol: "DOGE",
    decimals: 9,
  },
  {
    address: "0x97c0acfd62ba29f70b6fe272efaae0942c8263b5",
    symbol: "LPU",
    decimals: 18,
  },
  {
    address: "0x73b62d93928ce20392dd96df5061c41e734bcda5",
    symbol: "BLOCKINN",
    decimals: 18,
  },
  {
    address: "0x8c024cd50a94978537bde537a1fa25ad89444222",
    symbol: "PC",
    decimals: 18,
  },
  {
    address: "0xd567b5f02b9073ad3a982a099a23bf019ff11d1c",
    symbol: "GAME",
    decimals: 5,
  },
  {
    address: "0x78fc2c2ed1a4cdb5402365934ae5648adad094d0",
    symbol: "RE7WETH",
    decimals: 18,
  },
  {
    address: "0x95eef579155cd2c5510f312c8fa39208c3be01a8",
    symbol: "RE7USDT",
    decimals: 18,
  },
  {
    address: "0x4f460bb11cf958606c69a963b4a17f9daeeea8b6",
    symbol: "FXUSDC",
    decimals: 18,
  },
  {
    address: "0x7dd7d5ca67df3e0f5a7f004af3653444b1fcfb76",
    symbol: "BRRR",
    decimals: 18,
  },
  {
    address: "0x5f7827fdeb7c20b443265fc2f40845b715385ff2",
    symbol: "EURCV",
    decimals: 18,
  },
  {
    address: "0xd1a6616f56221a9f27eb9476867b5bdb2b2d101d",
    symbol: "AGI",
    decimals: 18,
  },
  {
    address: "0x5959e94661e1203e0c8ef84095a7846bacc6a94f",
    symbol: "ZKAI",
    decimals: 18,
  },
  {
    address: "0x60d715515d4411f7f43e4206dc5d4a3677f0ec78",
    symbol: "RE7USDC",
    decimals: 18,
  },
  {
    address: "0x89d80f5e9bc88d8021b352064ae73f0eaf79ebd8",
    symbol: "RE7USDA",
    decimals: 18,
  },
  {
    address: "0x8dd09822e83313adca54c75696ae80c5429697ff",
    symbol: "SIFU",
    decimals: 18,
  },
  {
    address: "0x9994e35db50125e0df82e4c2dde62496ce330999",
    symbol: "MORPHO",
    decimals: 18,
  },
  {
    address: "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f",
    symbol: "ACX",
    decimals: 18,
  },
  {
    address: "0x43fd147d5319b8cf39a6e57143684efca9cf3613",
    symbol: "RE7TBTC",
    decimals: 18,
  },
  {
    address: "0xa02f5e93f783baf150aa1f8b341ae90fe0a772f7",
    symbol: "RE7CBBTC",
    decimals: 18,
  },
  {
    address: "0x7076de6ff1d91e00be7e92458089c833de99e22e",
    symbol: "BONE",
    decimals: 9,
  },
  {
    address: "0x02d7a93829b365b7ad4c582dace1493aac50a290",
    symbol: "CAT",
    decimals: 18,
  },
  {
    address: "0x7ddc52c4de30e94be3a6a0a2b259b2850f421989",
    symbol: "GOMINING",
    decimals: 18,
  },
  {
    address: "0xf5809f3348ff40906bb509f936aba43e6d1961ab",
    symbol: "LESTER",
    decimals: 9,
  },
  {
    address: "0x41a1ef3d81d091465f22e8ed2a7e06d59a8532b7",
    symbol: "FCO",
    decimals: 18,
  },
  {
    address: "0x58c896fa6857a9d67d02bc264c2b04cea47e20e7",
    symbol: "GHUB",
    decimals: 9,
  },
  {
    address: "0xf9fb4ad91812b704ba883b11d2b576e890a6730a",
    symbol: "AAMMWETH",
    decimals: 18,
  },
  {
    address: "0x1de6289894e1763b6ea01401ed638dc1184b0e9b",
    symbol: "INFY",
    decimals: 18,
  },
  {
    address: "0xe34ba9cbdf45c9d5dcc80e96424337365b6fe889",
    symbol: "MEDUSA",
    decimals: 9,
  },
  {
    address: "0x5165d24277cd063f5ac44efd447b27025e888f37",
    symbol: "AYFI",
    decimals: 18,
  },
  {
    address: "0x810296898a4f870619b015c0b13c8c6e65b305e3",
    symbol: "NGTG",
    decimals: 2,
  },
  {
    address: "0x69babe9811cc86dcfc3b8f9a14de6470dd18eda4",
    symbol: "BABYPEPE",
    decimals: 9,
  },
  {
    address: "0x6953dcedb9fdfa31fe630d3dd1e9bcf893060260",
    symbol: "GOATSEUS",
    decimals: 18,
  },
  {
    address: "0x82a605d6d9114f4ad6d5ee461027477eeed31e34",
    symbol: "SNSY",
    decimals: 18,
  },
  {
    address: "0x0a6e7ba5042b38349e437ec6db6214aec7b35676",
    symbol: "SWELL",
    decimals: 18,
  },
  {
    address: "0x520140d71129434635899eca07f845bb23b27987",
    symbol: "VIRTU",
    decimals: 18,
  },
  {
    address: "0x525536d71848f21b66da0d239546c50ee4c1a358",
    symbol: "CTF",
    decimals: 9,
  },
  {
    address: "0x8e0789d39db454dbe9f4a77acef6dc7c69f6d552",
    symbol: "INWSTETHS",
    decimals: 18,
  },
  {
    address: "0x6468e79a80c0eab0f9a2b574c8d5bc374af59414",
    symbol: "EXRD",
    decimals: 18,
  },
  {
    address: "0xe6705367880b4d5d1aeae948fd620f55ef7413e4",
    symbol: "DOGEI",
    decimals: 9,
  },
  {
    address: "0xaf4144cd943ed5362fed2bae6573184659cbe6ff",
    symbol: "LIZ",
    decimals: 18,
  },
  {
    address: "0x33b481cbbf3c24f2b3184ee7cb02daad1c4f49a8",
    symbol: "D",
    decimals: 6,
  },
  {
    address: "0xdbb5cf12408a3ac17d668037ce289f9ea75439d7",
    symbol: "WMTX",
    decimals: 6,
  },
  {
    address: "0x35a18000230da775cac24873d00ff85bccded550",
    symbol: "CUNI",
    decimals: 8,
  },
  {
    address: "0x5da42c37dea61d1c31e7a810e7d2aff736a41643",
    symbol: "YES",
    decimals: 18,
  },
  {
    address: "0x9562e2063122eaa4d7c2d786e7ca2610d70ca8b8",
    symbol: "SHIBC",
    decimals: 18,
  },
  {
    address: "0x18ef464fd73ed484c12339eaa5d5e3c8f6c48180",
    symbol: "COFFEE",
    decimals: 18,
  },
  {
    address: "0x240cd7b53d364a208ed41f8ced4965d11f571b7a",
    symbol: "DOGGO",
    decimals: 9,
  },
  {
    address: "0xd37ae8c16449e7ef858652e02555c51d2572552b",
    symbol: "INSP",
    decimals: 18,
  },
  {
    address: "0x2353f7e7b74c045a5dfbaafee5d21bfd948dc170",
    symbol: "OLA",
    decimals: 18,
  },
  {
    address: "0x2b117f0a9a56dddaaf0257b476bfc39ca7e6fda1",
    symbol: "CONWAI",
    decimals: 18,
  },
  {
    address: "0x40d4e93b888d5ee9ec61a29a018b199070ffc280",
    symbol: "DELAY",
    decimals: 18,
  },
  {
    address: "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
    symbol: "MC",
    decimals: 18,
  },
  {
    address: "0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18",
    symbol: "XCN",
    decimals: 18,
  },
  {
    address: "0xcb0d82f4dfa503c9e3b8abc7a3caa01175b2da39",
    symbol: "AX",
    decimals: 18,
  },
  {
    address: "0x7abc8a5768e6be61a6c693a6e4eacb5b60602c4d",
    symbol: "CXT",
    decimals: 18,
  },
  {
    address: "0xe65cdb6479bac1e22340e4e755fae7e509ecd06c",
    symbol: "CAAVE",
    decimals: 8,
  },
  {
    address: "0x14778860e937f509e651192a90589de711fb88a9",
    symbol: "CYBER",
    decimals: 18,
  },
  {
    address: "0x9e18d5bab2fa94a6a95f509ecb38f8f68322abd3",
    symbol: "OMIKAMI",
    decimals: 9,
  },
  {
    address: "0xb14df3954fcb59a2b3c7fad1e9a24988e339ff78",
    symbol: "O3D",
    decimals: 18,
  },
  {
    address: "0x4278a8944cf63753b13e9f726bbc1192412988d8",
    symbol: "1984",
    decimals: 18,
  },
  {
    address: "0x0cf7356e2d13ae2b57e77286284984a5fc8f88b3",
    symbol: "SCOT",
    decimals: 18,
  },
  {
    address: "0xa7d48da33cf6ac74ed2ba71b7e33005dc51adbb7",
    symbol: "KAAI",
    decimals: 9,
  },
  {
    address: "0x49218282042072e054afdc90e552e832735f8316",
    symbol: "CRX",
    decimals: 18,
  },
  {
    address: "0x50253dc4a01c6408fab9646e804fcbfdb74e3e4c",
    symbol: "INSFRAX",
    decimals: 18,
  },
  {
    address: "0x8e456c9e283aaa67b2164feae82d3e2082687d94",
    symbol: "DIOM",
    decimals: 18,
  },
  {
    address: "0x85122dc2c0ac24e8aacaff4a4ccfcbdf36e80f60",
    symbol: "DOPE",
    decimals: 9,
  },
  {
    address: "0x00e679ba63b509182c349f5614f0a07cdd0ce0c5",
    symbol: "DAMEX",
    decimals: 18,
  },
  {
    address: "0x5832fbf930dacbdd9a1697dca7b3c518277ff0b0",
    symbol: "DDBAM",
    decimals: 8,
  },
  {
    address: "0x6cb25129314123bcd5adcdc844ceaeead65a0896",
    symbol: "CULTUR",
    decimals: 9,
  },
  {
    address: "0x526be1c610616be0e8e69893fc6766fddfbada61",
    symbol: "RTBL",
    decimals: 6,
  },
  {
    address: "0xb8176a66c0d0a84cfd4e403c89cf3416b1e798ad",
    symbol: "BITBEDR",
    decimals: 18,
  },
  {
    address: "0xdc69c06e796ddbe2ca5e3d99f6fd8c40dfd9584a",
    symbol: "DUCKEY",
    decimals: 9,
  },
  {
    address: "0x73a15fed60bf67631dc6cd7bc5b6e8da8190acf5",
    symbol: "USD0",
    decimals: 18,
  },
  {
    address: "0xc77336fdd91e22c737b0f5ec33f4c429caa1d13b",
    symbol: "BALTO",
    decimals: 9,
  },
  {
    address: "0x4e6415bac66d5c66efeb0ded7494ae3c648d68cf",
    symbol: "REE",
    decimals: 3,
  },
  {
    address: "0xd3210f246ae54c5a45a7b4a83315bf718f591bfc",
    symbol: "ARKI",
    decimals: 9,
  },
  {
    address: "0xc83e27f270cce0a3a3a29521173a83f402c1768b",
    symbol: "USDQ",
    decimals: 6,
  },
  {
    address: "0x8df723295214ea6f21026eeeb4382d475f146f9f",
    symbol: "EURQ",
    decimals: 6,
  },
  {
    address: "0xef53462838000184f35f7d991452e5f25110b207",
    symbol: "KFT",
    decimals: 18,
  },
  {
    address: "0x31b2c59d760058cfe57e59472e7542f776d987fb",
    symbol: "EDEN",
    decimals: 18,
  },
  {
    address: "0xc06caead870d3a8af2504637b6c5b7248bed6116",
    symbol: "BUSINESS",
    decimals: 8,
  },
  {
    address: "0x74d1984a64f447371be4019920180b52a33adadd",
    symbol: "INSLISBNB",
    decimals: 18,
  },
  {
    address: "0x37f5ac1b0c1a07d19270983d6889c181a0a3d6f7",
    symbol: "KRON",
    decimals: 18,
  },
  {
    address: "0x3c1e2cce6af05d4adf0a9d40a64f1a3dbb47a7b0",
    symbol: "PIZZA",
    decimals: 18,
  },
  {
    address: "0x2103e845c5e135493bb6c2a4f0b8651956ea8682",
    symbol: "XAUM",
    decimals: 18,
  },
  {
    address: "0xaade1d6701173bd924c9de2d56a00ef4e3d9de4d",
    symbol: "BWS",
    decimals: 9,
  },
  {
    address: "0xf67e2dc041b8a3c39d066037d29f500757b1e886",
    symbol: "SUSDN",
    decimals: 18,
  },
  {
    address: "0x8be8c50e7d7acff6084899e71a6db085ff7134c8",
    symbol: "OPSEC",
    decimals: 18,
  },
  {
    address: "0x22b6c31c2beb8f2d0d5373146eed41ab9ede3caf",
    symbol: "COC",
    decimals: 8,
  },
  {
    address: "0x4f7d2d728ce137dd01ec63ef7b225805c7b54575",
    symbol: "WALLY",
    decimals: 9,
  },
  {
    address: "0x0880164084017b8d49baa0a33f545ad55914e9fd",
    symbol: "DTI",
    decimals: 9,
  },
  {
    address: "0xdbcc27ecc60cff70bd483f79b039f680f1f8af0b",
    symbol: "SHIBASHOOT",
    decimals: 18,
  },
  {
    address: "0x364c65347bdd77e6196fad96d42dbbd6d55cf719",
    symbol: "BRK",
    decimals: 18,
  },
  {
    address: "0x5f4ab80c2c7755d565371236f090597921d18ee5",
    symbol: "WAGMI",
    decimals: 9,
  },
  {
    address: "0x425087bf4969f45818c225ae30f8560ce518582e",
    symbol: "LFDOG",
    decimals: 18,
  },
  {
    address: "0x607f451f850cb612a07b37b6315be23f55165610",
    symbol: "AVRK",
    decimals: 18,
  },
  {
    address: "0x362033a25b37603d4c99442501fa7b2852ddb435",
    symbol: "MATRIX",
    decimals: 9,
  },
  {
    address: "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
    symbol: "RENDER",
    decimals: 18,
  },
  {
    address: "0x9681ee0d91e737c3b60aceba7fbdae61b5462f42",
    symbol: "CYCE",
    decimals: 6,
  },
  {
    address: "0x35f3bad2fcc8053869086885f7898a3d4309db4e",
    symbol: "EMBER",
    decimals: 18,
  },
  {
    address: "0xf23e25286b7abf0458746c098a847fdba3dd9633",
    symbol: "HORUS",
    decimals: 9,
  },
  {
    address: "0x391e86e2c002c70dee155eaceb88f7a3c38f5976",
    symbol: "AAMMUNIUSDCWETH",
    decimals: 18,
  },
  {
    address: "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697",
    symbol: "OVR",
    decimals: 18,
  },
  {
    address: "0x36a0e44c73e5a6a7727817377c0127f320a9456e",
    symbol: "WMPC",
    decimals: 4,
  },
  {
    address: "0xeda8db2f0f8f00f0aedd6fdd756402ed86cd002f",
    symbol: "OPM",
    decimals: 9,
  },
  {
    address: "0x0138f5e99cfdffbacf36e543800c19ef16fa294b",
    symbol: "PROPHT",
    decimals: 18,
  },
  {
    address: "0xe0ad1806fd3e7edf6ff52fdb822432e847411033",
    symbol: "ONX",
    decimals: 18,
  },
  {
    address: "0x90d1964873ddd741f49ed3ca9c47ceb470313a09",
    symbol: "HENLO",
    decimals: 18,
  },
  {
    address: "0x35d8949372d46b7a3d5a56006ae77b215fc69bc0",
    symbol: "USD0++",
    decimals: 18,
  },
  {
    address: "0x58a6d42d91f5995c9f76884d56271fb97d0561e7",
    symbol: "ARS",
    decimals: 18,
  },
  {
    address: "0xa9e8acf069c58aec8825542845fd754e41a9489a",
    symbol: "PEPECOIN",
    decimals: 18,
  },
  {
    address: "0x6c28aef8977c9b773996d0e8376d2ee379446f2f",
    symbol: "QUICK",
    decimals: 18,
  },
  {
    address: "0x0828096494ad6252f0f853abfc5b6ec9dfe9fdad",
    symbol: "TST",
    decimals: 18,
  },
  {
    address: "0xde2f7766c8bf14ca67193128535e5c7454f8387c",
    symbol: "META",
    decimals: 18,
  },
  {
    address: "0x888883b5f5d21fb10dfeb70e8f9722b9fb0e5e51",
    symbol: "EUROP",
    decimals: 6,
  },
  {
    address: "0x47e5c76f155083f1aee39578311a2a5faa938a82",
    symbol: "TNQ",
    decimals: 6,
  },
  {
    address: "0x80a2ae356fc9ef4305676f7a3e2ed04e12c33946",
    symbol: "CYFI",
    decimals: 8,
  },
  {
    address: "0x0b49707fb9706428d1bb51a2906617aeaba82346",
    symbol: "PFT",
    decimals: 18,
  },
  {
    address: "0xcb39637e7c03c2ac25405adb8d95035f2668b0d6",
    symbol: "ALGT",
    decimals: 18,
  },
  {
    address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    symbol: "ENJ",
    decimals: 18,
  },
  {
    address: "0x8a2279d4a90b6fe1c4b30fa660cc9f926797baa2",
    symbol: "CHR",
    decimals: 6,
  },
  {
    address: "0x56cfc19d8cbf7d417d370844249be9cb2d2e19a1",
    symbol: "DOGECAUCUS",
    decimals: 9,
  },
  {
    address: "0x6768d4d4957a2ba2ef3f6d4a8883c0042e230bec",
    symbol: "MF",
    decimals: 18,
  },
  {
    address: "0xfc40b76cdd4e62ef0c8273fdbdbc458253776015",
    symbol: "PEAR",
    decimals: 18,
  },
  {
    address: "0xc824a08db624942c5e5f330d56530cd1598859fd",
    symbol: "HGETH",
    decimals: 18,
  },
  {
    address: "0x57e114b691db790c35207b2e685d4a43181e6061",
    symbol: "ENA",
    decimals: 18,
  },
  {
    address: "0x94d863173ee77439e4292284ff13fad54b3ba182",
    symbol: "ADEL",
    decimals: 18,
  },
  {
    address: "0xa44136dc2e7a1543abbbf1c2a97e57c8d885e0be",
    symbol: "PFROG",
    decimals: 9,
  },
  {
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    symbol: "MKR",
    decimals: 18,
  },
  {
    address: "0xde4ee8057785a7e8e800db58f9784845a5c2cbd6",
    symbol: "DEXE",
    decimals: 18,
  },
  {
    address: "0x6a4402a535d74bd0c9cdb5ce2d51822fc9f6620e",
    symbol: "TOMO",
    decimals: 18,
  },
  {
    address: "0x55bd5f6a1caea02c4f1eae6119b2ac0babab2c9f",
    symbol: "AGTS",
    decimals: 8,
  },
  {
    address: "0xd2a08ff5f31d2f2d70c91960323c2ed31268ae25",
    symbol: "NEOS",
    decimals: 18,
  },
  {
    address: "0x6e6b7adfc7db9feeb8896418ac3422966f65d0a5",
    symbol: "NET",
    decimals: 18,
  },
  {
    address: "0x18eff407bf611ffaab8d8e97e88bf840b8337a35",
    symbol: "KLEAR",
    decimals: 18,
  },
  {
    address: "0x2c2f0ffbfa1b8b9c85400f1726e1bc0892e63d9f",
    symbol: "RFSTETH",
    decimals: 18,
  },
  {
    address: "0xe831f96a7a1dce1aa2eb760b1e296c6a74caa9d5",
    symbol: "NEXM",
    decimals: 8,
  },
  {
    address: "0x62d0a8458ed7719fdaf978fe5929c6d342b0bfce",
    symbol: "BEAM",
    decimals: 18,
  },
  {
    address: "0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28",
    symbol: "BBADGER",
    decimals: 18,
  },
  {
    address: "0xeeacc51af745846ddf46012b46c6910ea9b12898",
    symbol: "DOGC",
    decimals: 18,
  },
  {
    address: "0x109ba5f0230b7b39e4a8ab56e7361db89fa0e108",
    symbol: "TURBO",
    decimals: 18,
  },
  {
    address: "0x4c612e3b15b96ff9a6faed838f8d07d479a8dd4c",
    symbol: "ASDAI",
    decimals: 18,
  },
  {
    address: "0x777be1c6075c20184c4fd76344b7b0b7c858fe6b",
    symbol: "BAR",
    decimals: 18,
  },
  {
    address: "0x418d75f65a02b3d53b2418fb8e1fe493759c7605",
    symbol: "BNB",
    decimals: 18,
  },
  {
    address: "0x8578a8716013c390b95db73065922f512783e2cf",
    symbol: "VIVEK",
    decimals: 9,
  },
  {
    address: "0x6499999951f0b5ba8b9187958884f9f5b50e45fd",
    symbol: "ORBIT",
    decimals: 18,
  },
  {
    address: "0x60215db40b04fe029c42c56ff2e02221c1f288ef",
    symbol: "CHILLGUY",
    decimals: 9,
  },
  {
    address: "0x77777bf11ab5b96753ea48e0401667a70675841e",
    symbol: "PYRA",
    decimals: 18,
  },
  {
    address: "0x68ad75469db9181a1144e769c16adf47f2f32cae",
    symbol: "MAXETH",
    decimals: 18,
  },
  {
    address: "0x6c38f26eaee4e1bdf7d2b4d42467b7a8a6082f5a",
    symbol: "SHIRO",
    decimals: 9,
  },
  {
    address: "0x94e9eb8b5ab9fd6b9ea3169d55ffade62a01702e",
    symbol: "BREED",
    decimals: 18,
  },
  {
    address: "0xbeef094333aedd535c130958c204e84f681fd9fa",
    symbol: "STEAKWBTC",
    decimals: 18,
  },
  {
    address: "0x6d06426a477200c385843a9ac4d4fd55346f2b7b",
    symbol: "GINNAN",
    decimals: 9,
  },
  {
    address: "0x06904a21f2db805487fcbdc3b3fe9607daaa5d54",
    symbol: "MNRY",
    decimals: 18,
  },
  {
    address: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    symbol: "AJNA",
    decimals: 18,
  },
  {
    address: "0x2196b84eace74867b73fb003aff93c11fce1d47a",
    symbol: "PSY",
    decimals: 18,
  },
  {
    address: "0xbeef0075e03a5ce0d84d4accf3481363e0584f5c",
    symbol: "STEAKM",
    decimals: 18,
  },
  {
    address: "0xadd39272e83895e7d3f244f696b7a25635f34234",
    symbol: "PEPU",
    decimals: 18,
  },
  {
    address: "0xbeef07e929f84466a591de130e4154667214f491",
    symbol: "STEAKEURCV",
    decimals: 18,
  },
  {
    address: "0x000000000000012def132e61759048be5b5c6033",
    symbol: "CX",
    decimals: 18,
  },
  {
    address: "0xbeefd1c0c6c1f7c94dc6b989dba2e983a47a26a8",
    symbol: "STEAKUSDL",
    decimals: 18,
  },
  {
    address: "0x08d9040214c4aba39292fd2e7de20bbba7a8dce4",
    symbol: "DGOLD",
    decimals: 18,
  },
  {
    address: "0x06113abcef9d163c026441b112e70c82ee1c4a79",
    symbol: "OMIRA",
    decimals: 18,
  },
  {
    address: "0x5fd48ca1212a409ca1020ea43b49f7ec40010435",
    symbol: "ADEX",
    decimals: 18,
  },
  {
    address: "0x5e8c8a7243651db1384c0ddfdbe39761e8e7e51a",
    symbol: "ALINK",
    decimals: 18,
  },
  {
    address: "0xbeef11ecb698f4b5378685c05a210bdf71093521",
    symbol: "STEAKRUSD",
    decimals: 18,
  },
  {
    address: "0xc5190e7fec4d97a3a3b1ab42dfedac608e2d0793",
    symbol: "FXI",
    decimals: 18,
  },
  {
    address: "0x72b886d09c117654ab7da13a14d603001de0b777",
    symbol: "XDEFI",
    decimals: 18,
  },
  {
    address: "0x7fd4d7737597e7b4ee22acbf8d94362343ae0a79",
    symbol: "WMC",
    decimals: 2,
  },
  {
    address: "0x984ac33e3c6031b7190444aed92d617b92ef2c37",
    symbol: "BOTON",
    decimals: 9,
  },
  {
    address: "0xd00065a096ff5fbaeaec726cdef3414d2c8a5116",
    symbol: "MAGNUS",
    decimals: 9,
  },
  {
    address: "0x094b360ae512a65584d4f5be33d68b2e08677b89",
    symbol: "USUAL",
    decimals: 18,
  },
  {
    address: "0xa6c0c097741d55ecd9a3a7def3a8253fd022ceb9",
    symbol: "AVA",
    decimals: 18,
  },
  {
    address: "0x0b1bd555adf860d4d51c9caba48d756e224451bf",
    symbol: "ESPORT",
    decimals: 18,
  },
  {
    address: "0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9",
    symbol: "LUNC",
    decimals: 18,
  },
  {
    address: "0x87904be82bc1c29e94a0b99474d183b4e08a7e47",
    symbol: "AICM",
    decimals: 9,
  },
  {
    address: "0x513d3246a54148192d6bef4de81885c8f4bfe96c",
    symbol: "GON",
    decimals: 8,
  },
  {
    address: "0x64669032f612ae608671853ff8871df0889870a9",
    symbol: "INU",
    decimals: 18,
  },
  {
    address: "0x0de05f6447ab4d22c8827449ee4ba2d5c288379b",
    symbol: "OOKI",
    decimals: 18,
  },
  {
    address: "0x2c3b62cdeab213ff58ad24fe8bbdf224c7f66dce",
    symbol: "MSM",
    decimals: 18,
  },
  {
    address: "0xffb1018eff5fc021e15215290732f02a89b008e7",
    symbol: "NOTI",
    decimals: 18,
  },
  {
    address: "0x5c8d0c48810fd37a0a824d074ee290e64f7a8fa2",
    symbol: "AVL",
    decimals: 18,
  },
  {
    address: "0x7afd0d633e0a2b1db97506d97cadc880c894eca9",
    symbol: "MARU",
    decimals: 9,
  },
  {
    address: "0x4cd1b2874e020c5bf08c4be18ab69ca86ec25fef",
    symbol: "CRYORAT",
    decimals: 18,
  },
  {
    address: "0xb646c4fe0090bf6fdba226d3ccd8f775b30fdbb5",
    symbol: "CULO",
    decimals: 18,
  },
  {
    address: "0xf2fc894381792ded27a7f08d9f0f246363cbe1ea",
    symbol: "MATRIX",
    decimals: 18,
  },
  {
    address: "0xd19b72e027cd66bde41d8f60a13740a26c4be8f3",
    symbol: "SUIAI",
    decimals: 18,
  },
  {
    address: "0x910812c44ed2a3b611e4b051d9d83a88d652e2dd",
    symbol: "PLEDGE",
    decimals: 18,
  },
  {
    address: "0xba100000625a3754423978a60c9317c58a424e3d",
    symbol: "BAL",
    decimals: 18,
  },
  {
    address: "0xfd409bc96d126bc8a56479d4c7672015d539f96c",
    symbol: "VICE",
    decimals: 18,
  },
  {
    address: "0x44e3ae622c1570dc6e492adb8de92d01ca923d26",
    symbol: "RYZE",
    decimals: 18,
  },
  {
    address: "0x683989afc948477fd38567f8327f501562c955ac",
    symbol: "MORPHAI",
    decimals: 9,
  },
  {
    address: "0xaf8b894229bc800658ab0faf744e97c8c74c4321",
    symbol: "LEMON",
    decimals: 18,
  },
  {
    address: "0xe50e009ddb1a4d8ec668eac9d8b2df1f96348707",
    symbol: "CTRL",
    decimals: 18,
  },
  {
    address: "0xa059b81568fee88791de88232e838465826cf419",
    symbol: "THREE",
    decimals: 9,
  },
  {
    address: "0x81de7654a08b0a37d136eb6e31a54543cdabeb15",
    symbol: "ODDS",
    decimals: 9,
  },
  {
    address: "0xa6c1a66a3ac742f1885207253fc776d94c8beed5",
    symbol: "TRN",
    decimals: 9,
  },
  {
    address: "0xbeef02e5e13584ab96848af90261f0c8ee04722a",
    symbol: "STEAKPYUSD",
    decimals: 18,
  },
  {
    address: "0x2365a4890ed8965e564b7e2d27c38ba67fec4c6f",
    symbol: "AAMMUNIWBTCUSDC",
    decimals: 18,
  },
  {
    address: "0xd5fa38027462691769b8a8ba6c444890103b5b94",
    symbol: "DAWG",
    decimals: 9,
  },
  {
    address: "0x0000000000c5dc95539589fbd24be07c6c14eca4",
    symbol: "CULT",
    decimals: 18,
  },
  {
    address: "0xf19308f923582a6f7c465e5ce7a9dc1bec6665b1",
    symbol: "TITANX",
    decimals: 18,
  },
  {
    address: "0x17a79792fe6fe5c95dfe95fe3fcee3caf4fe4cb7",
    symbol: "AAMMUSDT",
    decimals: 6,
  },
  {
    address: "0xf23114fa21af278fa342d980740cb8b89fc82105",
    symbol: "ARG",
    decimals: 18,
  },
  {
    address: "0xfeac2eae96899709a43e252b6b92971d32f9c0f9",
    symbol: "ANYONE",
    decimals: 18,
  },
  {
    address: "0x25f8087ead173b73d6e8b84329989a8eea16cf73",
    symbol: "YGG",
    decimals: 18,
  },
  {
    address: "0x0000003ceede5c40e5187784d3e8dd5b43dc85f6",
    symbol: "CULTEL",
    decimals: 9,
  },
  {
    address: "0xec463d00aa4da76fb112cd2e4ac1c6bef02da6ea",
    symbol: "HEU",
    decimals: 18,
  },
  {
    address: "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e",
    symbol: "SWFTC",
    decimals: 8,
  },
  {
    address: "0xd6f8ab9b0f0a06a87ec2599c97e8b867b0fa7814",
    symbol: "DATBOI",
    decimals: 18,
  },
  {
    address: "0x335f4e66b9b61cee5ceade4e727fcec20156b2f0",
    symbol: "ELMO",
    decimals: 18,
  },
  {
    address: "0xd7fa4cfc22ea07dfced53033fbe59d8b62b8ee9e",
    symbol: "VYPER",
    decimals: 18,
  },
  {
    address: "0x865ec58b06bf6305b886793aa20a2da31d034e68",
    symbol: "MOC",
    decimals: 18,
  },
  {
    address: "0x0abdace70d3790235af448c88547603b945604ea",
    symbol: "DNT",
    decimals: 18,
  },
  {
    address: "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
    symbol: "VEE",
    decimals: 18,
  },
  {
    address: "0x1ffefd8036409cb6d652bd610de465933b226917",
    symbol: "EVER",
    decimals: 9,
  },
  {
    address: "0xb6ee9668771a79be7967ee29a63d4184f8097143",
    symbol: "CXO",
    decimals: 18,
  },
  {
    address: "0x72e5390edb7727e3d4e3436451dadaff675dbcc0",
    symbol: "HANU",
    decimals: 12,
  },
  {
    address: "0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099",
    symbol: "CELL",
    decimals: 18,
  },
  {
    address: "0xd1ba9bac957322d6e8c07a160a3a8da11a0d2867",
    symbol: "HMT",
    decimals: 18,
  },
  {
    address: "0x6dda263994aab33f5ed612294e26f2a13df0da05",
    symbol: "QHUB",
    decimals: 18,
  },
  {
    address: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
    symbol: "XSUSHI",
    decimals: 18,
  },
  {
    address: "0xff742d05420b6aca4481f635ad8341f81a6300c2",
    symbol: "ASD",
    decimals: 18,
  },
  {
    address: "0x35fa164735182de50811e8e2e824cfb9b6118ac2",
    symbol: "EETH",
    decimals: 18,
  },
  {
    address: "0xc03fbf20a586fa89c2a5f6f941458e1fbc40c661",
    symbol: "COMBO",
    decimals: 18,
  },
  {
    address: "0x8cedb0680531d26e62abdbd0f4c5428b7fdc26d5",
    symbol: "MICRO",
    decimals: 18,
  },
  {
    address: "0x5e29cf3e3fed4df50acab95f8268e9ee26ea36f2",
    symbol: "DXI",
    decimals: 18,
  },
  {
    address: "0x1ae7e1d0ce06364ced9ad58225a1705b3e5db92b",
    symbol: "LMEOW",
    decimals: 9,
  },
  {
    address: "0x09395a2a58db45db0da254c7eaa5ac469d8bdc85",
    symbol: "SQT",
    decimals: 18,
  },
  {
    address: "0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0",
    symbol: "KRL",
    decimals: 18,
  },
  {
    address: "0xbef26bd568e421d6708cca55ad6e35f8bfa0c406",
    symbol: "BCUT",
    decimals: 18,
  },
  {
    address: "0x78a0a62fba6fb21a83fe8a3433d44c73a4017a6f",
    symbol: "OXOLD",
    decimals: 18,
  },
  {
    address: "0x3902d5f4213a6b8c434a470026e0c23709a5bb39",
    symbol: "SCINET",
    decimals: 18,
  },
  {
    address: "0xb67cf01958b1a06c330f5a46501fe1fb2ec82aaa",
    symbol: "OPTION",
    decimals: 18,
  },
  {
    address: "0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a",
    symbol: "WAVES",
    decimals: 18,
  },
  {
    address: "0xa71261c2b51cb8030700f5601ca597c522dc232e",
    symbol: "SAGE",
    decimals: 18,
  },
  {
    address: "0x8a60e489004ca22d775c5f2c657598278d17d9c2",
    symbol: "USDA",
    decimals: 18,
  },
  {
    address: "0x6f2ee0e1ebfa00015d3040760f6c039f46b6c662",
    symbol: "OMNIT",
    decimals: 18,
  },
  {
    address: "0xe344fb85b4fab79e0ef32ce77c00732ce8566244",
    symbol: "FILM",
    decimals: 8,
  },
  {
    address: "0xf59c6767dfb5aa9e908cb8d1831d02e53312e8ff",
    symbol: "EYZ",
    decimals: 18,
  },
  {
    address: "0x7d3e4165fd7d8590fb2a415a550f7bdece5c4f52",
    symbol: "DNA",
    decimals: 18,
  },
  {
    address: "0xf091867ec603a6628ed83d274e835539d82e9cc8",
    symbol: "ZETA",
    decimals: 18,
  },
  {
    address: "0x8bb97a618211695f5a6a889fac3546d1a573ea77",
    symbol: "NBTC",
    decimals: 8,
  },
  {
    address: "0xd7efb00d12c2c13131fd319336fdf952525da2af",
    symbol: "XPR",
    decimals: 4,
  },
  {
    address: "0x27702a26126e0b3702af63ee09ac4d1a084ef628",
    symbol: "ALEPH",
    decimals: 18,
  },
  {
    address: "0x823556202e86763853b40e9cde725f412e294689",
    symbol: "ASTO",
    decimals: 18,
  },
  {
    address: "0x2da719db753dfa10a62e140f436e1d67f2ddb0d6",
    symbol: "CERE",
    decimals: 10,
  },
  {
    address: "0xf8c3527cc04340b208c854e985240c02f7b7793f",
    symbol: "FRONT",
    decimals: 18,
  },
  {
    address: "0xca7af58da871736994ce360f51ec6cd28351a3df",
    symbol: "GATSBY",
    decimals: 18,
  },
  {
    address: "0x13d074303c95a34d304f29928dc8a16dec797e9e",
    symbol: "LAK3",
    decimals: 18,
  },
  {
    address: "0x8c543aed163909142695f2d2acd0d55791a9edb9",
    symbol: "VLX",
    decimals: 18,
  },
  {
    address: "0xee9e7bb7e55bbc86414047b61d65c9c0d91ffbd0",
    symbol: "FT",
    decimals: 18,
  },
  {
    address: "0x168e209d7b2f58f1f24b8ae7b7d35e662bbf11cc",
    symbol: "LAI",
    decimals: 18,
  },
  {
    address: "0x925206b8a707096ed26ae47c84747fe0bb734f59",
    symbol: "WBT",
    decimals: 8,
  },
  {
    address: "0x3af5ba94c29a8407785f5f6d90ef5d69a8eb2436",
    symbol: "UWBTC",
    decimals: 8,
  },
  {
    address: "0x083d41d6dd21ee938f0c055ca4fb12268df0efac",
    symbol: "GOL",
    decimals: 4,
  },
  {
    address: "0xb893a8049f250b57efa8c62d51527a22404d7c9a",
    symbol: "USHIBA",
    decimals: 9,
  },
  {
    address: "0x79be75ffc64dd58e66787e4eae470c8a1fd08ba4",
    symbol: "AAMMDAI",
    decimals: 18,
  },
  {
    address: "0x4104b135dbc9609fc1a9490e61369036497660c8",
    symbol: "APW",
    decimals: 18,
  },
  {
    address: "0x6fcd2db93082e85d662173a70feaf59b97860c3e",
    symbol: "SEAI",
    decimals: 9,
  },
  {
    address: "0x9ab7bb7fdc60f4357ecfef43986818a2a3569c62",
    symbol: "GOG",
    decimals: 18,
  },
  {
    address: "0xb7109df1a93f8fe2b8162c6207c9b846c1c68090",
    symbol: "MAX",
    decimals: 18,
  },
  {
    address: "0x61e90a50137e1f645c9ef4a0d3a4f01477738406",
    symbol: "LOKA",
    decimals: 18,
  },
  {
    address: "0x4161725d019690a3e0de50f6be67b07a86a9fae1",
    symbol: "TPT",
    decimals: 4,
  },
  {
    address: "0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd",
    symbol: "WAXE",
    decimals: 8,
  },
  {
    address: "0xbc5991ccd8caceba01edc44c2bb9832712c29cab",
    symbol: "UUSDC",
    decimals: 6,
  },
  {
    address: "0x76887cb94cf29ec539b3219ba62104be04f26a5c",
    symbol: "NITRO",
    decimals: 18,
  },
  {
    address: "0x0954906da0bf32d5479e25f46056d22f08464cab",
    symbol: "INDEX",
    decimals: 18,
  },
  {
    address: "0xaaee1a9723aadb7afa2810263653a34ba2c21c7a",
    symbol: "MOG",
    decimals: 18,
  },
  {
    address: "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0",
    symbol: "TRB",
    decimals: 18,
  },
  {
    address: "0xdaedbc924dbbccef96c25bb84806e794a4ff3140",
    symbol: "BIO",
    decimals: 9,
  },
  {
    address: "0x947aeb02304391f8fbe5b25d7d98d649b57b1788",
    symbol: "MDX",
    decimals: 18,
  },
  {
    address: "0x808507121b80c02388fad14726482e061b8da827",
    symbol: "PENDLE",
    decimals: 18,
  },
  {
    address: "0x3ffeea07a27fab7ad1df5297fa75e77a43cb5790",
    symbol: "PEIPEI",
    decimals: 18,
  },
  {
    address: "0xf17e65822b568b3903685a7c9f496cf7656cc6c2",
    symbol: "BICO",
    decimals: 18,
  },
  {
    address: "0xa3931d71877c0e7a3148cb7eb4463524fec27fbd",
    symbol: "SUSDS",
    decimals: 18,
  },
  {
    address: "0x474021845c4643113458ea4414bdb7fb74a01a77",
    symbol: "UNO",
    decimals: 18,
  },
  {
    address: "0x8ed97a637a790be1feff5e888d43629dc05408f6",
    symbol: "NPC",
    decimals: 18,
  },
  {
    address: "0xbbbb2d4d765c1e455e4896a64ba3883e914abbbb",
    symbol: "BMP",
    decimals: 18,
  },
  {
    address: "0x06b964d96f5dcf7eae9d7c559b09edce244d4b8e",
    symbol: "USUALX",
    decimals: 18,
  },
  {
    address: "0x03aa6298f1370642642415edc0db8b957783e8d6",
    symbol: "NMT",
    decimals: 18,
  },
  {
    address: "0x4957805230831401caad5b690aa138143b711358",
    symbol: "DORA",
    decimals: 18,
  },
  {
    address: "0x628a3b2e302c7e896acc432d2d0dd22b6cb9bc88",
    symbol: "LMWR",
    decimals: 18,
  },
  {
    address: "0x3e43efbfa058d351a926fc611e997f2338adc2a4",
    symbol: "ORI",
    decimals: 9,
  },
  {
    address: "0xba41ddf06b7ffd89d1267b5a93bfef2424eb2003",
    symbol: "MYTH",
    decimals: 18,
  },
  {
    address: "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
    symbol: "AMP",
    decimals: 18,
  },
  {
    address: "0x657e8c867d8b37dcc18fa4caead9c45eb088c642",
    symbol: "EBTC",
    decimals: 8,
  },
  {
    address: "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55",
    symbol: "SUPER",
    decimals: 18,
  },
  {
    address: "0x41b723c73fe13e8f979d5fa80229ce7f24ebedb8",
    symbol: "ONTACT",
    decimals: 8,
  },
  {
    address: "0x1258d60b224c0c5cd888d37bbf31aa5fcfb7e870",
    symbol: "GPU",
    decimals: 18,
  },
  {
    address: "0x58b6a8a3302369daec383334672404ee733ab239",
    symbol: "LPT",
    decimals: 18,
  },
  {
    address: "0x1b19c19393e2d034d8ff31ff34c81252fcbbee92",
    symbol: "OUSG",
    decimals: 18,
  },
  {
    address: "0x270ca21eb1a37cfe0e9a0e7582d8f897e013cdff",
    symbol: "DOGIUS",
    decimals: 18,
  },
  {
    address: "0xe355de6a6043b0580ff5a26b46051a4809b12793",
    symbol: "4EVER",
    decimals: 18,
  },
  {
    address: "0x81e32d4652be82ae225dedd1bd0bf3bcba8fee07",
    symbol: "XRING",
    decimals: 18,
  },
  {
    address: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    symbol: "LQTY",
    decimals: 18,
  },
  {
    address: "0x6ee2f71049dde9a93b7c0ee1091b72acf9b46810",
    symbol: "MERC",
    decimals: 18,
  },
  {
    address: "0x22514ffb0d7232a56f0c24090e7b68f179faa940",
    symbol: "QORPO",
    decimals: 18,
  },
  {
    address: "0x45804880de22913dafe09f4980848ece6ecbaf78",
    symbol: "PAXG",
    decimals: 18,
  },
  {
    address: "0x5fc111f3fa4c6b32eaf65659cfebdeed57234069",
    symbol: "0XGAS",
    decimals: 18,
  },
  {
    address: "0x004f747a91e05d0e2fbe8bf3cd39cdb2bcfab02c",
    symbol: "TWEET",
    decimals: 18,
  },
  {
    address: "0xccb365d2e11ae4d6d74715c680f56cf58bf4bf10",
    symbol: "WEPE",
    decimals: 18,
  },
  {
    address: "0x58d97b57bb95320f9a05dc918aef65434969c2b2",
    symbol: "MORPHO",
    decimals: 18,
  },
  {
    address: "0xfe3f988a90dea3ee537bb43ec1aca7337a15d002",
    symbol: "PHX",
    decimals: 18,
  },
  {
    address: "0x3e6a1b21bd267677fa49be6425aebe2fc0f89bde",
    symbol: "QBIO",
    decimals: 18,
  },
  {
    address: "0xbe0ed4138121ecfc5c0e56b40517da27e6c5226b",
    symbol: "ATH",
    decimals: 18,
  },
  {
    address: "0xe6829d9a7ee3040e1276fa75293bde931859e8fa",
    symbol: "CMETH",
    decimals: 18,
  },
  {
    address: "0x123fb3dfa7d082291d822ceedaabe3aa0c3f7758",
    symbol: "QAI",
    decimals: 9,
  },
  {
    address: "0x6c3ea9036406852006290770bedfcaba0e23a0e8",
    symbol: "PYUSD",
    decimals: 6,
  },
  {
    address: "0xfd0205066521550d7d7ab19da8f72bb004b4c341",
    symbol: "LIT",
    decimals: 18,
  },
  {
    address: "0x64d0f55cd8c7133a9d7102b13987235f486f2224",
    symbol: "BORG",
    decimals: 18,
  },
  {
    address: "0x66a1e37c9b0eaddca17d3662d6c05f4decf3e110",
    symbol: "USR",
    decimals: 18,
  },
  {
    address: "0x716457d3ee671231e3a9fd320940e88ac247a733",
    symbol: "MAAI",
    decimals: 9,
  },
  {
    address: "0x1982b2f5814301d4e9a8b0201555376e62f82428",
    symbol: "ASTETH",
    decimals: 18,
  },
  {
    address: "0xa3ee21c306a700e682abcdfe9baa6a08f3820419",
    symbol: "CTC",
    decimals: 18,
  },
  {
    address: "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee",
    symbol: "NEIRO",
    decimals: 9,
  },
  {
    address: "0x21cd589a989615a9e901328d3c089bbca16d00b2",
    symbol: "XMONEY",
    decimals: 9,
  },
  {
    address: "0xb868cca38a8e6348d8d299c9b3c80e63d45abe4c",
    symbol: "FUSION",
    decimals: 9,
  },
  {
    address: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
    symbol: "CVX",
    decimals: 18,
  },
  {
    address: "0xddbcdd8637d5cedd15eeee398108fca05a71b32b",
    symbol: "CRAI",
    decimals: 18,
  },
  {
    address: "0x136471a34f6ef19fe571effc1ca711fdb8e49f2b",
    symbol: "USYC",
    decimals: 6,
  },
  {
    address: "0xf4a509313437dfc64e2efed14e2b607b1aed30c5",
    symbol: "FETS",
    decimals: 18,
  },
  {
    address: "0x12652c6d93fdb6f4f37d48a8687783c782bb0d10",
    symbol: "NGL",
    decimals: 18,
  },
  {
    address: "0x8c1bed5b9a0928467c9b1341da1d7bd5e10b6549",
    symbol: "LSETH",
    decimals: 18,
  },
  {
    address: "0x334bd3375fe5bb8aa003e0e6ce880abada57ac89",
    symbol: "MBERRY",
    decimals: 18,
  },
  {
    address: "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb",
    symbol: "ANKRETH",
    decimals: 18,
  },
  {
    address: "0x31ef6148cae611421c5d5c58649faf6b412f6422",
    symbol: "AGV",
    decimals: 8,
  },
  {
    address: "0x58aea10748a00d1781d6651f9d78a414ea32ca46",
    symbol: "VSG",
    decimals: 18,
  },
  {
    address: "0x69e15ab0fd240de689d09e4851181a6667968008",
    symbol: "PEPE",
    decimals: 9,
  },
  {
    address: "0x938f2774e307a71882009a27e0e40e615415fe54",
    symbol: "OPRV",
    decimals: 18,
  },
  {
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    symbol: "LINK",
    decimals: 18,
  },
  {
    address: "0x14fee680690900ba0cccfc76ad70fd1b95d10e16",
    symbol: "PAAL",
    decimals: 9,
  },
  {
    address: "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
    symbol: "MASK",
    decimals: 18,
  },
  {
    address: "0x66761fa41377003622aee3c7675fc7b5c1c2fac5",
    symbol: "CPOOL",
    decimals: 18,
  },
  {
    address: "0x6f40d4a6237c257fff2db00fa0510deeecd303eb",
    symbol: "FLUID",
    decimals: 18,
  },
  {
    address: "0x6e2a43be0b1d33b726f0ca3b8de60b3482b8b050",
    symbol: "ARKM",
    decimals: 18,
  },
  {
    address: "0x36e45dcfe1d3d85a78c65c3bad4068dee4f2a25e",
    symbol: "TRRUE",
    decimals: 18,
  },
  {
    address: "0xf2478a732e5232acd0acef5e410e230b49b35a12",
    symbol: "ROUGE",
    decimals: 9,
  },
  {
    address: "0xf33136452828e8f2dd2b9d8d591ca692f8edaf3c",
    symbol: "GATE",
    decimals: 9,
  },
  {
    address: "0x87b46212e805a3998b7e8077e9019c90759ea88c",
    symbol: "AGA",
    decimals: 18,
  },
  {
    address: "0x90f29ccd18c9181a9243eff8f7546eef4b64994c",
    symbol: "SIMAI",
    decimals: 18,
  },
  {
    address: "0x48129b305a94d68ce4773ca1f0b55782ac735eac",
    symbol: "SUDO",
    decimals: 18,
  },
  {
    address: "0x90e3532cf06d567ef7e6385be532311f10c30096",
    symbol: "RSP",
    decimals: 18,
  },
  {
    address: "0xf107edabf59ba696e38de62ad5327415bd4d4236",
    symbol: "SLAP",
    decimals: 18,
  },
  {
    address: "0xd0f3c49297a85c81bfe98bc0bdc966964c0e7173",
    symbol: "VMC",
    decimals: 18,
  },
  {
    address: "0xb2617246d0c6c0087f18703d576831899ca94f01",
    symbol: "ZIG",
    decimals: 18,
  },
  {
    address: "0x8c15ef5b4b21951d50e53e4fbda8298ffad25057",
    symbol: "FX",
    decimals: 18,
  },
  {
    address: "0x037a54aab062628c9bbae1fdb1583c195585fe41",
    symbol: "LCX",
    decimals: 18,
  },
  {
    address: "0x15700b564ca08d9439c58ca5053166e8317aa138",
    symbol: "DEUSD",
    decimals: 18,
  },
  {
    address: "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e",
    symbol: "METIS",
    decimals: 18,
  },
  {
    address: "0x04cd37283e0f921b4a8838fee72e4264c87a692b",
    symbol: "STAR",
    decimals: 18,
  },
  {
    address: "0x294559fa758c88d639fd085751e463fee7806eab",
    symbol: "METAL",
    decimals: 18,
  },
  {
    address: "0x525a8f6f3ba4752868cde25164382bfbae3990e1",
    symbol: "NYM",
    decimals: 6,
  },
  {
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    symbol: "WBTC",
    decimals: 8,
  },
  {
    address: "0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8",
    symbol: "HOKK",
    decimals: 18,
  },
  {
    address: "0x2a92525fda8d3ab481f8e2a913b64b64bd1c9fdd",
    symbol: "WELF",
    decimals: 18,
  },
  {
    address: "0xb5274d9f803b4b15607c6e180ef8f68fe990f73b",
    symbol: "VOX",
    decimals: 9,
  },
  {
    address: "0x7ce89243cc0d9e746609c57845eccbd9bb4b7315",
    symbol: "LILY",
    decimals: 18,
  },
  {
    address: "0x12e2b8033420270db2f3b328e32370cb5b2ca134",
    symbol: "SFP",
    decimals: 18,
  },
  {
    address: "0xd0e6d04c2f105344860d07912a857ad21204fc97",
    symbol: "NEOT",
    decimals: 18,
  },
  {
    address: "0xccccb68e1a848cbdb5b60a974e07aae143ed40c3",
    symbol: "TOPIA",
    decimals: 18,
  },
  {
    address: "0x8881562783028f5c1bcb985d2283d5e170d88888",
    symbol: "SHFL",
    decimals: 18,
  },
  {
    address: "0x626e8036deb333b408be468f951bdb42433cbf18",
    symbol: "AIOZ",
    decimals: 18,
  },
  {
    address: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    symbol: "POWR",
    decimals: 6,
  },
  {
    address: "0x0f2d719407fdbeff09d87557abb7232601fd9f29",
    symbol: "SYN",
    decimals: 18,
  },
  {
    address: "0x5c5b196abe0d54485975d1ec29617d42d9198326",
    symbol: "SDEUSD",
    decimals: 18,
  },
  {
    address: "0xa2e3356610840701bdf5611a53974510ae27e2e1",
    symbol: "WBETH",
    decimals: 18,
  },
  {
    address: "0x2a79324c19ef2b89ea98b23bc669b7e7c9f8a517",
    symbol: "WAXP",
    decimals: 8,
  },
  {
    address: "0x623cd3a3edf080057892aaf8d773bbb7a5c9b6e9",
    symbol: "SKYA",
    decimals: 18,
  },
  {
    address: "0xfd418e42783382e86ae91e445406600ba144d162",
    symbol: "ZRC",
    decimals: 18,
  },
  {
    address: "0x8d96b4ab6c741a4c8679ae323a100d74f085ba8f",
    symbol: "BZR",
    decimals: 18,
  },
  {
    address: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    symbol: "DENT",
    decimals: 8,
  },
  {
    address: "0xa26b04b41162b0d7c2e1e2f9a33b752e28304a49",
    symbol: "AUDAI",
    decimals: 18,
  },
  {
    address: "0x38e68a37e401f7271568cecaac63c6b1e19130b4",
    symbol: "BANANA",
    decimals: 18,
  },
  {
    address: "0xec9333e7dadeebf82d290d6cb12e66cc30ce46b0",
    symbol: "LUSH",
    decimals: 18,
  },
  {
    address: "0x70bef3bb2f001da2fddb207dae696cd9faff3f5d",
    symbol: "NST",
    decimals: 18,
  },
  {
    address: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    symbol: "CVC",
    decimals: 8,
  },
  {
    address: "0x292fcdd1b104de5a00250febba9bc6a5092a0076",
    symbol: "HASHAI",
    decimals: 18,
  },
  {
    address: "0x3a872ae95f645acdd17db8aa961f4d39e0f5bc39",
    symbol: "BRLN",
    decimals: 18,
  },
  {
    address: "0xc7068fff81f3a5b8c49cf6d35b3bc524c3f045e9",
    symbol: "MYST",
    decimals: 18,
  },
  {
    address: "0xd101dcc414f310268c37eeb4cd376ccfa507f571",
    symbol: "RSC",
    decimals: 18,
  },
  {
    address: "0x50614cc8e44f7814549c223aa31db9296e58057c",
    symbol: "ALIGN",
    decimals: 18,
  },
  {
    address: "0x384efd1e8b05c23dc392a40cb4e515e2229a5243",
    symbol: "HXAI",
    decimals: 9,
  },
  {
    address: "0x93d91003af5e6beffd574036f98d166c12ae6e32",
    symbol: "REV",
    decimals: 9,
  },
  {
    address: "0xaedf386b755465871ff874e3e37af5976e247064",
    symbol: "FTN",
    decimals: 18,
  },
  {
    address: "0xaacbc3725e0af980e8aa9df4c4441a625b387a91",
    symbol: "AETHRA",
    decimals: 18,
  },
  {
    address: "0xce9dcc28791a98edfd4175a7d55da9f86c560199",
    symbol: "ARAI",
    decimals: 18,
  },
  {
    address: "0xe76c6c83af64e4c60245d8c7de953df673a7a33d",
    symbol: "RAIL",
    decimals: 18,
  },
  {
    address: "0xd8dd38ca016f3e0b3bc545d33cce72af274ce075",
    symbol: "SWING",
    decimals: 18,
  },
  {
    address: "0xb7b37b81d4497ab317fc9d4a370cf243043d6bbe",
    symbol: "VAIX",
    decimals: 18,
  },
  {
    address: "0xd38b305cac06990c0887032a02c03d6839f770a8",
    symbol: "LGCT",
    decimals: 18,
  },
  {
    address: "0x33333333fede34409fb7f67c6585047e1f653333",
    symbol: "ORA",
    decimals: 18,
  },
  {
    address: "0x3f31f59f7307a0468501f39b6c1175ff9b6cd927",
    symbol: "ZORA",
    decimals: 18,
  },
  {
    address: "0xb0ac2b5a73da0e67a8e5489ba922b3f8d582e058",
    symbol: "SHIRO",
    decimals: 18,
  },
  {
    address: "0x32b053f2cba79f80ada5078cb6b305da92bde6e1",
    symbol: "NEURAL",
    decimals: 18,
  },
  {
    address: "0x782f97c02c6ace8a3677c4a4c495d048ad67dba2",
    symbol: "LENS",
    decimals: 18,
  },
  {
    address: "0x96f6ef951840721adbf46ac996b59e0235cb985c",
    symbol: "USDY",
    decimals: 18,
  },
  {
    address: "0x4507cef57c46789ef8d1a19ea45f4216bae2b528",
    symbol: "TOKEN",
    decimals: 9,
  },
  {
    address: "0x8248270620aa532e4d64316017be5e873e37cc09",
    symbol: "DEVVE",
    decimals: 18,
  },
  {
    address: "0x08c32b0726c5684024ea6e141c50ade9690bbdcc",
    symbol: "STOS",
    decimals: 18,
  },
  {
    address: "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
    symbol: "ORBS",
    decimals: 18,
  },
  {
    address: "0xca4f53e6117623992126a9a45ce61682fe8678df",
    symbol: "POPPY",
    decimals: 9,
  },
  {
    address: "0x7ca5af5ba3472af6049f63c1abc324475d44efc1",
    symbol: "KNDX",
    decimals: 9,
  },
  {
    address: "0x9ba77c059b5a59a220aa648a6bd97986fb1bf0a9",
    symbol: "AGSYS",
    decimals: 18,
  },
  {
    address: "0xd8a2f109bec88d9c9df6f4958c3301bd9d1929fd",
    symbol: "CLX",
    decimals: 9,
  },
  {
    address: "0xdb9bd37c6d5fe195923d7487ad50a1e3c5b9bd42",
    symbol: "HGAI",
    decimals: 18,
  },
  {
    address: "0x5027fc44a7ba114b8f494b1e4970900c6652fedf",
    symbol: "XAR",
    decimals: 18,
  },
  {
    address: "0x64c5cba9a1bfbd2a5faf601d91beff2dcac2c974",
    symbol: "MYSTERY",
    decimals: 18,
  },
  {
    address: "0x02f92800f57bcd74066f5709f1daa1a4302df875",
    symbol: "PEAS",
    decimals: 18,
  },
  {
    address: "0x65fda84473084ba2cca8452883e6ea3561092234",
    symbol: "RKFI",
    decimals: 18,
  },
  {
    address: "0xdee6cdd28da9f51e3a8421395973894a884f3b2d",
    symbol: "HOODRAT",
    decimals: 9,
  },
  {
    address: "0x2fa39203cb335d08e0af7731a8b9ae23d5a59449",
    symbol: "SCRATCH",
    decimals: 18,
  },
  {
    address: "0x9d39a5de30e57443bff2a8307a4256c8797a3497",
    symbol: "SUSDE",
    decimals: 18,
  },
  {
    address: "0x6ef69ba2d051761afd38f218f0a3cf517d64a760",
    symbol: "CPAI",
    decimals: 18,
  },
  {
    address: "0x08d23468a467d2bb86fae0e32f247a26c7e2e994",
    symbol: "SINV",
    decimals: 18,
  },
  {
    address: "0xc52c326331e9ce41f04484d3b5e5648158028804",
    symbol: "ZCX",
    decimals: 18,
  },
  {
    address: "0xae41b275aaaf484b541a5881a2dded9515184cca",
    symbol: "CSWAP",
    decimals: 18,
  },
  {
    address: "0x770880c3927e63e31d4b90314f7a37e09fbbf2fd",
    symbol: "EVOAI",
    decimals: 18,
  },
  {
    address: "0xcb86c6a22cb56b6cf40cafedb06ba0df188a416e",
    symbol: "SURE",
    decimals: 18,
  },
  {
    address: "0x8db2350d78abc13f5673a411d4700bcf87864dde",
    symbol: "SWBTC",
    decimals: 8,
  },
  {
    address: "0x6af53c6ec427525f7240e211941223288a0e7c66",
    symbol: "WARPED",
    decimals: 18,
  },
  {
    address: "0x52a8845df664d76c69d2eea607cd793565af42b8",
    symbol: "APEX",
    decimals: 18,
  },
  {
    address: "0x2a9bdcff37ab68b95a53435adfd8892e86084f93",
    symbol: "AQT",
    decimals: 18,
  },
  {
    address: "0x4575f41308ec1483f3d399aa9a2826d74da13deb",
    symbol: "OXT",
    decimals: 18,
  },
  {
    address: "0xe9732d4b1e7d3789004ff029f032ba3034db059c",
    symbol: "PATRIOT",
    decimals: 18,
  },
  {
    address: "0x74232704659ef37c08995e386a2e26cc27a8d7b1",
    symbol: "STRIKE",
    decimals: 18,
  },
  {
    address: "0x1a4e7febd24b6689704b10685857d8b30885f05e",
    symbol: "BEATAI",
    decimals: 9,
  },
  {
    address: "0x2be5e8c109e2197d077d13a82daead6a9b3433c5",
    symbol: "TON",
    decimals: 18,
  },
  {
    address: "0x91af0fbb28aba7e31403cb457106ce79397fd4e6",
    symbol: "AERGO",
    decimals: 18,
  },
  {
    address: "0x5c162ec1c1679c67728d824defc0b415a97539e5",
    symbol: "CRAZE",
    decimals: 18,
  },
  {
    address: "0xd85a6ae55a7f33b0ee113c234d2ee308edeaf7fd",
    symbol: "CBK",
    decimals: 18,
  },
  {
    address: "0x8f66cf0f1db84f8ee2a46352409370a69ae4e059",
    symbol: "KHAMOO",
    decimals: 9,
  },
  {
    address: "0xfc82bb4ba86045af6f327323a46e80412b91b27d",
    symbol: "PROM",
    decimals: 18,
  },
  {
    address: "0x59d9356e565ab3a36dd77763fc0d87feaf85508c",
    symbol: "USDM",
    decimals: 18,
  },
  {
    address: "0xa73b792906c79509d73fdfaaa78561e195010706",
    symbol: "PIPO",
    decimals: 18,
  },
  {
    address: "0xc770eefad204b5180df6a14ee197d99d808ee52d",
    symbol: "FOX",
    decimals: 18,
  },
  {
    address: "0x4956b52ae2ff65d74ca2d61207523288e4528f96",
    symbol: "RLP",
    decimals: 18,
  },
  {
    address: "0x877f035c83df617b6c901891f90eebc78f8ce050",
    symbol: "SENTAI",
    decimals: 18,
  },
  {
    address: "0x7448c7456a97769f6cd04f1e83a4a23ccdc46abd",
    symbol: "MAV",
    decimals: 18,
  },
  {
    address: "0xabd4c63d2616a5201454168269031355f4764337",
    symbol: "ORDER",
    decimals: 18,
  },
  {
    address: "0xa1290d69c65a6fe4df752f95823fae25cb99e5a7",
    symbol: "RSETH",
    decimals: 18,
  },
  {
    address: "0xa579472f17b6e1b6c5ded2a785067a89ec536ce8",
    symbol: "ADDON",
    decimals: 18,
  },
  {
    address: "0x6f365eb3686ee95bdefbae71f1728d62c0af7ab1",
    symbol: "AITHER",
    decimals: 18,
  },
  {
    address: "0x498a2e9aaf2309e279b5fcda420cc3ccf16341e4",
    symbol: "CTAX",
    decimals: 9,
  },
  {
    address: "0x32353a6c91143bfd6c7d363b546e62a9a2489a20",
    symbol: "AGLD",
    decimals: 18,
  },
  {
    address: "0x706987611c5d2052541d64ef8f036916807c916a",
    symbol: "BOYS",
    decimals: 18,
  },
  {
    address: "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    symbol: "LOOMOLD",
    decimals: 18,
  },
  {
    address: "0xa9f94f19abf3089d535b1de2cc058a365ea716c7",
    symbol: "AITA",
    decimals: 18,
  },
  {
    address: "0x0ec78ed49c2d27b315d462d43b5bab94d2c79bf8",
    symbol: "MEOW",
    decimals: 18,
  },
  {
    address: "0xda987c655ebc38c801db64a8608bc1aa56cd9a31",
    symbol: "SYNT",
    decimals: 18,
  },
  {
    address: "0xd347514c12d6acbbec08ceea127bc5e57ddb2847",
    symbol: "AVER",
    decimals: 18,
  },
  {
    address: "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    symbol: "MFT",
    decimals: 18,
  },
  {
    address: "0x5c2d8b2c6c0289aa514f42e0b5423f20b99177ac",
    symbol: "MEGA",
    decimals: 18,
  },
  {
    address: "0x33349b282065b0284d756f0577fb39c158f935e6",
    symbol: "MPL",
    decimals: 18,
  },
  {
    address: "0xa2085073878152ac3090ea13d1e41bd69e60dc99",
    symbol: "ELG",
    decimals: 18,
  },
  {
    address: "0x28561b8a2360f463011c16b6cc0b0cbef8dbbcad",
    symbol: "MOODENG",
    decimals: 9,
  },
  {
    address: "0x39fbbabf11738317a448031930706cd3e612e1b9",
    symbol: "WXRP",
    decimals: 18,
  },
  {
    address: "0x115ec79f1de567ec68b7ae7eda501b406626478e",
    symbol: "CRE",
    decimals: 18,
  },
  {
    address: "0x6e15a54b5ecac17e58dadeddbe8506a7560252f9",
    symbol: "F",
    decimals: 18,
  },
  {
    address: "0x6a1d6a577b17b425f3437c8a7c2c4d3a161816d8",
    symbol: "PILLAR",
    decimals: 18,
  },
  {
    address: "0xee573a945b01b788b9287ce062a0cfc15be9fd86",
    symbol: "XED",
    decimals: 18,
  },
  {
    address: "0xef7f7820a001aabac5e0979b175c9ff8af3dd4ec",
    symbol: "XED",
    decimals: 18,
  },
  {
    address: "0xabab3b0db38f2303acbcab672905e41a18e396d8",
    symbol: "APEMAN",
    decimals: 9,
  },
  {
    address: "0x00000000000007c8612ba63df8ddefd9e6077c97",
    symbol: "",
    decimals: 18,
  },
  {
    address: "0xbf2e353f5db1a01e4e7f051222c666afc81b2574",
    symbol: "THEDOGEFATHER",
    decimals: 9,
  },
  {
    address: "0x085780639cc2cacd35e474e71f4d000e2405d8f6",
    symbol: "FXUSD",
    decimals: 18,
  },
  {
    address: "0xd13cfd3133239a3c73a9e535a5c4dadee36b395c",
    symbol: "VAI",
    decimals: 18,
  },
  {
    address: "0x728f30fa2f100742c7949d1961804fa8e0b1387d",
    symbol: "GHX",
    decimals: 18,
  },
  {
    address: "0x1ce7d9942ff78c328a4181b9f3826fee6d845a97",
    symbol: "YUSD",
    decimals: 18,
  },
  {
    address: "0x39b46b212bdf15b42b166779b9d1787a68b9d0c3",
    symbol: "DYP",
    decimals: 18,
  },
  {
    address: "0x0655977feb2f289a4ab78af67bab0d17aab84367",
    symbol: "SCRVUSD",
    decimals: 18,
  },
  {
    address: "0x94a8b4ee5cd64c79d0ee816f467ea73009f51aa0",
    symbol: "RIO",
    decimals: 18,
  },
  {
    address: "0x95ad53e32942c0cf9fd60208964782af8bedb709",
    symbol: "KUMA",
    decimals: 9,
  },
  {
    address: "0x0501b9188436e35bb10f35998c40adc079003866",
    symbol: "AIAT",
    decimals: 18,
  },
  {
    address: "0x5f973ffd42499224b0a7a16dffb3abc25f04ef24",
    symbol: "LAB",
    decimals: 9,
  },
  {
    address: "0x808688c820ab080a6ff1019f03e5ec227d9b522b",
    symbol: "BAG",
    decimals: 18,
  },
  {
    address: "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee",
    symbol: "WEETH",
    decimals: 18,
  },
  {
    address: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
    symbol: "PEPE",
    decimals: 18,
  },
  {
    address: "0xe1bad922f84b198a08292fb600319300ae32471b",
    symbol: "FCT",
    decimals: 18,
  },
  {
    address: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
    symbol: "FLOKI",
    decimals: 9,
  },
  {
    address: "0xa35b1b31ce002fbf2058d22f30f95d405200a15b",
    symbol: "ETHX",
    decimals: 18,
  },
  {
    address: "0xcb21311d3b91b5324f6c11b4f5a656fcacbff122",
    symbol: "QAI",
    decimals: 18,
  },
  {
    address: "0x5a3e6a77ba2f983ec0d371ea3b475f8bc0811ad5",
    symbol: "0X0",
    decimals: 9,
  },
  {
    address: "0x11eef04c884e24d9b7b4760e7476d06ddf797f36",
    symbol: "MX",
    decimals: 18,
  },
  {
    address: "0xddb3422497e61e13543bea06989c0789117555c5",
    symbol: "COTI",
    decimals: 18,
  },
  {
    address: "0x6e5970dbd6fc7eb1f29c6d2edf2bc4c36124c0c1",
    symbol: "TRADE",
    decimals: 18,
  },
  {
    address: "0x282a69142bac47855c3fbe1693fcc4ba3b4d5ed6",
    symbol: "CARROT",
    decimals: 18,
  },
  {
    address: "0x745407c86df8db893011912d3ab28e68b62e49b0",
    symbol: "MAHA",
    decimals: 18,
  },
  {
    address: "0xd11c452fc99cf405034ee446803b6f6c1f6d5ed8",
    symbol: "TETH",
    decimals: 18,
  },
  {
    address: "0xcb1592591996765ec0efc1f92599a19767ee5ffa",
    symbol: "BIO",
    decimals: 18,
  },
  {
    address: "0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f",
    symbol: "CET",
    decimals: 18,
  },
  {
    address: "0x06450dee7fd2fb8e39061434babcfc05599a6fb8",
    symbol: "XEN",
    decimals: 18,
  },
  {
    address: "0x590f820444fa3638e022776752c5eef34e2f89a6",
    symbol: "ALPH",
    decimals: 18,
  },
  {
    address: "0xa72b67f84460b689f1a3054549ab926c9ad88a41",
    symbol: "PIVOT",
    decimals: 9,
  },
  {
    address: "0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54",
    symbol: "SSV",
    decimals: 18,
  },
  {
    address: "0x67466be17df832165f8c80a5a120ccc652bd7e69",
    symbol: "WOLF",
    decimals: 18,
  },
  {
    address: "0x3b991130eae3cca364406d718da22fa1c3e7c256",
    symbol: "SHRUB",
    decimals: 18,
  },
  {
    address: "0x8c9532a60e0e7c6bbd2b2c1303f63ace1c3e9811",
    symbol: "PZETH",
    decimals: 18,
  },
  {
    address: "0xe1b4d34e8754600962cd944b535180bd758e6c2e",
    symbol: "AGETH",
    decimals: 18,
  },
  {
    address: "0xa9d54f37ebb99f83b603cc95fc1a5f3907aaccfd",
    symbol: "PIKA",
    decimals: 18,
  },
  {
    address: "0xa21af1050f7b26e0cff45ee51548254c41ed6b5c",
    symbol: "OSAK",
    decimals: 18,
  },
  {
    address: "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
    symbol: "ABT",
    decimals: 18,
  },
  {
    address: "0x4dfd742c6e5e28f11bcbcf6c5e51a965d15ea315",
    symbol: "AMINO",
    decimals: 18,
  },
  {
    address: "0x2ca9242c1810029efed539f1c60d68b63ad01bfc",
    symbol: "ANVL",
    decimals: 18,
  },
  {
    address: "0x1a2eb478fa07125c9935a77b3c03a82470801e30",
    symbol: "AMO",
    decimals: 18,
  },
  {
    address: "0xed35af169af46a02ee13b9d79eb57d6d68c1749e",
    symbol: "OMI",
    decimals: 18,
  },
  {
    address: "0xaaaaaa20d9e0e2461697782ef11675f668207961",
    symbol: "AURORA",
    decimals: 18,
  },
  {
    address: "0x5de8ab7e27f6e7a1fff3e5b337584aa43961beef",
    symbol: "SDEX",
    decimals: 18,
  },
  {
    address: "0xdb25f211ab05b1c97d595516f45794528a807ad8",
    symbol: "EURS",
    decimals: 2,
  },
  {
    address: "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71",
    symbol: "MVL",
    decimals: 18,
  },
  {
    address: "0xa2b4c0af19cc16a6cfacce81f192b024d625817d",
    symbol: "KISHU",
    decimals: 9,
  },
  {
    address: "0x993864e43caa7f7f12953ad6feb1d1ca635b875f",
    symbol: "SDAO",
    decimals: 18,
  },
  {
    address: "0x391cf4b21f557c935c7f670218ef42c21bd8d686",
    symbol: "XMW",
    decimals: 18,
  },
  {
    address: "0x5dc60c4d5e75d22588fa17ffeb90a63e535efce0",
    symbol: "DKA",
    decimals: 18,
  },
  {
    address: "0x643c4e15d7d62ad0abec4a9bd4b001aa3ef52d66",
    symbol: "SYRUP",
    decimals: 18,
  },
  {
    address: "0x3e5a19c91266ad8ce2477b91585d1856b84062df",
    symbol: "A8",
    decimals: 18,
  },
  {
    address: "0x817bbdbc3e8a1204f3691d14bb44992841e3db35",
    symbol: "CUDOS",
    decimals: 18,
  },
  {
    address: "0xa469b7ee9ee773642b3e93e842e5d9b5baa10067",
    symbol: "USDZ",
    decimals: 18,
  },
  {
    address: "0x006e730a6c36ff47a31a99931bedbddccf3de81c",
    symbol: "RACE",
    decimals: 18,
  },
  {
    address: "0x986ee2b944c42d017f52af21c4c69b84dbea35d8",
    symbol: "BMX",
    decimals: 18,
  },
  {
    address: "0x13e4b8cffe704d3de6f19e52b201d92c21ec18bd",
    symbol: "PAI",
    decimals: 18,
  },
  {
    address: "0x0f51bb10119727a7e5ea3538074fb341f56b09ad",
    symbol: "DAO",
    decimals: 18,
  },
  {
    address: "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
    symbol: "STPT",
    decimals: 18,
  },
  {
    address: "0x8143182a775c54578c8b7b3ef77982498866945d",
    symbol: "QUIL",
    decimals: 8,
  },
  {
    address: "0x40e3d1a4b2c47d9aa61261f5606136ef73e28042",
    symbol: "SERV",
    decimals: 18,
  },
  {
    address: "0x80c62fe4487e1351b47ba49809ebd60ed085bf52",
    symbol: "CLV",
    decimals: 18,
  },
  {
    address: "0xacd2c239012d17beb128b0944d49015104113650",
    symbol: "KARRAT",
    decimals: 18,
  },
  {
    address: "0x8ed955a2b7d2c3a17a9d05daca95e01818f8c11e",
    symbol: "APFC",
    decimals: 18,
  },
  {
    address: "0x12970e6868f88f6557b76120662c1b3e50a646bf",
    symbol: "LADYS",
    decimals: 18,
  },
  {
    address: "0x421b05cf5ce28cb7347e73e2278e84472f0e4a88",
    symbol: "SEN",
    decimals: 18,
  },
  {
    address: "0xb90b2a35c65dbc466b04240097ca756ad2005295",
    symbol: "BOBO",
    decimals: 18,
  },
  {
    address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
    symbol: "LUSD",
    decimals: 18,
  },
  {
    address: "0x5026f006b85729a8b14553fae6af249ad16c9aab",
    symbol: "WOJAK",
    decimals: 18,
  },
  {
    address: "0xd01409314acb3b245cea9500ece3f6fd4d70ea30",
    symbol: "LTO",
    decimals: 8,
  },
  {
    address: "0x3da932456d082cba208feb0b096d49b202bf89c8",
    symbol: "DEGO",
    decimals: 18,
  },
  {
    address: "0x8806926ab68eb5a7b909dcaf6fdbe5d93271d6e2",
    symbol: "UQC",
    decimals: 18,
  },
  {
    address: "0x77fba179c79de5b7653f68b5039af940ada60ce0",
    symbol: "FORTH",
    decimals: 18,
  },
  {
    address: "0x2e9d63788249371f1dfc918a52f8d799f4a38c94",
    symbol: "TOKE",
    decimals: 18,
  },
  {
    address: "0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a",
    symbol: "ORN",
    decimals: 8,
  },
  {
    address: "0xd9fcd98c322942075a5c3860693e9f4f03aae07b",
    symbol: "EUL",
    decimals: 18,
  },
  {
    address: "0x3bbfb303842dd4a76da4c927be644e9cf3170afd",
    symbol: "XCREDI",
    decimals: 18,
  },
  {
    address: "0xaeb3607ec434454ceb308f5cd540875efb54309a",
    symbol: "STRDY",
    decimals: 18,
  },
  {
    address: "0xe6fd75ff38adca4b97fbcd938c86b98772431867",
    symbol: "ELA",
    decimals: 18,
  },
  {
    address: "0x456ff1fbb87ec74165a11460f9d1864775dc227a",
    symbol: "MOXI",
    decimals: 18,
  },
  {
    address: "0xee2a03aa6dacf51c18679c516ad5283d8e7c2637",
    symbol: "NEIRO",
    decimals: 9,
  },
  {
    address: "0x4ec1b60b96193a64acae44778e51f7bff2007831",
    symbol: "EDGE",
    decimals: 18,
  },
  {
    address: "0x80122c6a83c8202ea365233363d3f4837d13e888",
    symbol: "M87",
    decimals: 18,
  },
  {
    address: "0x9ce115f0341ae5dabc8b477b74e83db2018a6f42",
    symbol: "HAIR",
    decimals: 18,
  },
  {
    address: "0xf4d2888d29d722226fafa5d9b24f9164c092421e",
    symbol: "LOOKS",
    decimals: 18,
  },
  {
    address: "0x247e3866f743cce280433b865a669c9361421ecc",
    symbol: "TXN",
    decimals: 9,
  },
  {
    address: "0x09617f6fd6cf8a71278ec86e23bbab29c04353a7",
    symbol: "ULT",
    decimals: 18,
  },
  {
    address: "0x3106a0a076bedae847652f42ef07fd58589e001f",
    symbol: "ADS",
    decimals: 18,
  },
  {
    address: "0xde6aceaf7f2dceb3d425643c5f85351f2b38fcde",
    symbol: "HQ",
    decimals: 18,
  },
  {
    address: "0xec53bf9167f50cdeb3ae105f56099aaab9061f83",
    symbol: "EIGEN",
    decimals: 18,
  },
  {
    address: "0xba50933c268f567bdc86e1ac131be072c6b0b71a",
    symbol: "ARPA",
    decimals: 18,
  },
  {
    address: "0x0f359fd18bda75e9c49bc027e7da59a4b01bf32a",
    symbol: "REUSDC",
    decimals: 18,
  },
  {
    address: "0x1db1afd9552eeb28e2e36597082440598b7f1320",
    symbol: "XRPL",
    decimals: 18,
  },
  {
    address: "0x698b1d54e936b9f772b8f58447194bbc82ec1933",
    symbol: "PEEZY",
    decimals: 9,
  },
  {
    address: "0x2b66aade1e9c062ff411bd47c44e0ad696d43bd9",
    symbol: "SUSDA",
    decimals: 18,
  },
  {
    address: "0xf75302720787c2a2176c87b1919059c4eaac8b98",
    symbol: "CFGI",
    decimals: 18,
  },
  {
    address: "0x6aaeb26b663e37c4d0c995758c69d5e54bbe9984",
    symbol: "ONAI",
    decimals: 18,
  },
  {
    address: "0xb1d1eae60eea9525032a6dcb4c1ce336a1de71be",
    symbol: "DRV",
    decimals: 18,
  },
  {
    address: "0x435f6a29b100123ae46a3e8bf0541ab402949243",
    symbol: "CTB",
    decimals: 18,
  },
  {
    address: "0x1010107b4757c915bc2f1ecd08c85d1bb0be92e0",
    symbol: "BRAIN",
    decimals: 18,
  },
  {
    address: "0x32f4768fc4a238a58fc9da408d9a0da4333012e4",
    symbol: "NAI",
    decimals: 18,
  },
  {
    address: "0xd6203889c22d9fe5e938a9200f50fdffe9dd8e02",
    symbol: "SBR",
    decimals: 9,
  },
  {
    address: "0x4be10da47a07716af28ad199fbe020501bddd7af",
    symbol: "XT",
    decimals: 18,
  },
  {
    address: "0xafb942e2a12ac0861ad81b5c37682f588912c1d9",
    symbol: "PRIVIX",
    decimals: 9,
  },
  {
    address: "0xbe1a001fe942f96eea22ba08783140b9dcc09d28",
    symbol: "BETA",
    decimals: 18,
  },
  {
    address: "0xf8428a5a99cb452ea50b6ea70b052daa3df4934f",
    symbol: "ZERC",
    decimals: 18,
  },
  {
    address: "0x6e79b51959cf968d87826592f46f819f92466615",
    symbol: "HOPPY",
    decimals: 9,
  },
  {
    address: "0x5e3d723c0cb363127d4a6ab5d43d504a17a5c05d",
    symbol: "ERC-AI",
    decimals: 9,
  },
  {
    address: "0x58cb30368ceb2d194740b144eab4c2da8a917dcb",
    symbol: "ZYN",
    decimals: 18,
  },
  {
    address: "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c",
    symbol: "UOS",
    decimals: 4,
  },
  {
    address: "0x68a47fe1cf42eba4a030a10cd4d6a1031ca3ca0a",
    symbol: "TET",
    decimals: 8,
  },
  {
    address: "0xc477d038d5420c6a9e0b031712f61c5120090de9",
    symbol: "BOSON",
    decimals: 18,
  },
  {
    address: "0x427a03fb96d9a94a6727fbcfbba143444090dd64",
    symbol: "PIXL",
    decimals: 18,
  },
  {
    address: "0xb6c3dc857845a713d3531cea5ac546f6767992f4",
    symbol: "ADCO",
    decimals: 6,
  },
  {
    address: "0x22b48e1f20043d1db5f2a11cbf1d520a4f20b198",
    symbol: "XOT",
    decimals: 18,
  },
  {
    address: "0xc6bdb96e29c38dc43f014eed44de4106a6a8eb5f",
    symbol: "INUINU",
    decimals: 18,
  },
  {
    address: "0xf3b9569f82b18aef890de263b84189bd33ebe452",
    symbol: "CAW",
    decimals: 18,
  },
  {
    address: "0x0202be363b8a4820f3f4de7faf5224ff05943ab1",
    symbol: "UFT",
    decimals: 18,
  },
  {
    address: "0x9ce84f6a69986a83d92c324df10bc8e64771030f",
    symbol: "CHEX",
    decimals: 18,
  },
  {
    address: "0x616e8bfa43f920657b3497dbf40d6b1a02d4608d",
    symbol: "AURABAL",
    decimals: 18,
  },
  {
    address: "0x27c70cd1946795b66be9d954418546998b546634",
    symbol: "LEASH",
    decimals: 18,
  },
  {
    address: "0xade00c28244d5ce17d72e40330b1c318cd12b7c3",
    symbol: "ADX",
    decimals: 18,
  },
  {
    address: "0x7636d8722fdf7cd34232a915e48e96aa3eb386bf",
    symbol: "SFI",
    decimals: 18,
  },
  {
    address: "0x4e9623b7e5b6438542458f5ee828d65c24d3af8c",
    symbol: "JYAI",
    decimals: 18,
  },
  {
    address: "0x8e0e57dcb1ce8d9091df38ec1bfc3b224529754a",
    symbol: "CAH",
    decimals: 18,
  },
  {
    address: "0xb33d999469a7e6b9ebc25a3a05248287b855ed46",
    symbol: "FLOCK",
    decimals: 18,
  },
  {
    address: "0x2d8ea194902bc55431420bd26be92b0782dce91d",
    symbol: "ZND",
    decimals: 18,
  },
  {
    address: "0x6965fb688861c004f4f0117980c519b342419941",
    symbol: "NUMBER",
    decimals: 18,
  },
  {
    address: "0xe92344b4edf545f3209094b192e46600a19e7c2d",
    symbol: "ZKML",
    decimals: 18,
  },
  {
    address: "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
    symbol: "ANT",
    decimals: 18,
  },
  {
    address: "0xcac88fbd9b3fb2b018be2b68e3c55aa90628be6e",
    symbol: "ARBX",
    decimals: 9,
  },
  {
    address: "0xd0d56273290d339aaf1417d9bfa1bb8cfe8a0933",
    symbol: "FOOM",
    decimals: 18,
  },
  {
    address: "0x0763fdccf1ae541a5961815c0872a8c5bc6de4d7",
    symbol: "SUKU",
    decimals: 18,
  },
  {
    address: "0x73d7c860998ca3c01ce8c808f5577d94d545d1b4",
    symbol: "IXS",
    decimals: 18,
  },
  {
    address: "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
    symbol: "IOTX",
    decimals: 18,
  },
  {
    address: "0xa02c49da76a085e4e1ee60a6b920ddbc8db599f4",
    symbol: "TREAT",
    decimals: 18,
  },
  {
    address: "0x86ed939b500e121c0c5f493f399084db596dad20",
    symbol: "SPC",
    decimals: 18,
  },
  {
    address: "0x4c1746a800d224393fe2470c70a35717ed4ea5f1",
    symbol: "PLUME",
    decimals: 18,
  },
  {
    address: "0x59a529070fbb61e6d6c91f952ccb7f35c34cf8aa",
    symbol: "ASF",
    decimals: 18,
  },
  {
    address: "0x0aa8a7d1fb4c64b3b1dcea9a7ade81c59c25b95b",
    symbol: "ASTRA",
    decimals: 18,
  },
  {
    address: "0xcccd1ba9f7acd6117834e0d28f25645decb1736a",
    symbol: "ECOX",
    decimals: 18,
  },
  {
    address: "0xf0d33beda4d734c72684b5f9abbebf715d0a7935",
    symbol: "NTX",
    decimals: 6,
  },
  {
    address: "0x9ee8c380e1926730ad89e91665ff27063b13c90a",
    symbol: "CA",
    decimals: 18,
  },
  {
    address: "0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a",
    symbol: "ADS",
    decimals: 11,
  },
  {
    address: "0x3567aa22cd3ab9aef23d7e18ee0d7cf16974d7e6",
    symbol: "SAI",
    decimals: 18,
  },
  {
    address: "0x9f0c013016e8656bc256f948cd4b79ab25c7b94d",
    symbol: "COOK",
    decimals: 18,
  },
  {
    address: "0x7c1156e515aa1a2e851674120074968c905aaf37",
    symbol: "LVLUSD",
    decimals: 18,
  },
  {
    address: "0xcafe001067cdef266afb7eb5a286dcfd277f3de5",
    symbol: "PSP",
    decimals: 18,
  },
  {
    address: "0xe4880249745eac5f1ed9d8f7df844792d560e750",
    symbol: "USTBL",
    decimals: 5,
  },
  {
    address: "0x19062190b1925b5b6689d7073fdfc8c2976ef8cb",
    symbol: "BZZ",
    decimals: 16,
  },
  {
    address: "0x875773784af8135ea0ef43b5a374aad105c5d39e",
    symbol: "IDLE",
    decimals: 18,
  },
  {
    address: "0xda67b4284609d2d48e5d10cfac411572727dc1ed",
    symbol: "USN",
    decimals: 18,
  },
  {
    address: "0xcacd6fd266af91b8aed52accc382b4e165586e29",
    symbol: "FRXUSD",
    decimals: 18,
  },
  {
    address: "0x4308135e3d92eeea3235085a1dd36b7293336938",
    symbol: "CRADLE",
    decimals: 18,
  },
  {
    address: "0xdbde08d475bd50e2d1a6af34c7b10dd430d8396e",
    symbol: "CGX",
    decimals: 18,
  },
  {
    address: "0xc65d8d96cdddb31328186efa113a460b0af9ec63",
    symbol: "PELL",
    decimals: 18,
  },
  {
    address: "0x9b79ea20a8258649401f8c58973281081d905b9f",
    symbol: "N3",
    decimals: 18,
  },
  {
    address: "0xcf62f905562626cfcdd2261162a51fd02fc9c5b6",
    symbol: "SFRXUSD",
    decimals: 18,
  },
  {
    address: "0x8642a849d0dcb7a15a974794668adcfbe4794b56",
    symbol: "PROS",
    decimals: 18,
  },
  {
    address: "0x915424ac489433130d92b04096f3b96c82e92a9d",
    symbol: "PROS",
    decimals: 18,
  },
  {
    address: "0xb5130f4767ab0acc579f25a76e8f9e977cb3f948",
    symbol: "GOD",
    decimals: 18,
  },
  {
    address: "0xcdf7028ceab81fa0c6971208e83fa7872994bee5",
    symbol: "T",
    decimals: 18,
  },
  {
    address: "0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14",
    symbol: "MTLX",
    decimals: 18,
  },
  {
    address: "0x6988a804c74fd04f37da1ea4781cea68c9c00f86",
    symbol: "TRIBL",
    decimals: 18,
  },
  {
    address: "0xfa1b1f13080857bf373de0de93970c96d2c29fd0",
    symbol: "ONDOAI",
    decimals: 18,
  },
  {
    address: "0xd89cc9d79ad3c49e2cd477a8bbc8e63dee53f82e",
    symbol: "KEE",
    decimals: 18,
  },
  {
    address: "0xc5f0f7b66764f6ec8c8dff7ba683102295e16409",
    symbol: "FDUSD",
    decimals: 18,
  },
  {
    address: "0x89ca762f778c82120c13c79a9bfbdf6e8e663ab4",
    symbol: "RISE",
    decimals: 18,
  },
  {
    address: "0x195f5c217b96cd3dd75d39327161b8911a42e509",
    symbol: "NUTS",
    decimals: 18,
  },
  {
    address: "0x243c9be13faba09f945ccc565547293337da0ad7",
    symbol: "TRUF",
    decimals: 18,
  },
  {
    address: "0x129e5915326ed86f831b0e035acda34b209633d5",
    symbol: "PAPPLE",
    decimals: 9,
  },
  {
    address: "0x644192291cc835a93d6330b24ea5f5fedd0eef9e",
    symbol: "NXRA",
    decimals: 18,
  },
  {
    address: "0xe0396ef787f8b0385f0e73d30acf8b922b1761f1",
    symbol: "OCAI",
    decimals: 9,
  },
  {
    address: "0x09d4214c03d01f49544c0448dbe3a27f768f2b34",
    symbol: "RUSD",
    decimals: 18,
  },
  {
    address: "0x000000c396558ffbab5ea628f39658bdf61345b3",
    symbol: "BUNNI",
    decimals: 18,
  },
  {
    address: "0x99999999999999cc837c997b882957dafdcb1af9",
    symbol: "WUSDN",
    decimals: 18,
  },
  {
    address: "0xaf0db65b7296c02ab043f5cb17300c8ee949f247",
    symbol: "SHAO",
    decimals: 18,
  },
  {
    address: "0xc575bd129848ce06a460a19466c30e1d0328f52c",
    symbol: "RAI",
    decimals: 18,
  },
  {
    address: "0x738d1115b90efa71ae468f1287fc864775e23a31",
    symbol: "SRUSD",
    decimals: 18,
  },
  {
    address: "0x957c7fa189a408e78543113412f6ae1a9b4022c4",
    symbol: "LF",
    decimals: 18,
  },
  {
    address: "0xb8690004604b0352b3832408ba7e02fe717e9cfd",
    symbol: "AGI",
    decimals: 9,
  },
  {
    address: "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
    symbol: "DUSK",
    decimals: 18,
  },
  {
    address: "0x9cdf242ef7975d8c68d5c1f5b6905801699b1940",
    symbol: "WHITE",
    decimals: 18,
  },
  {
    address: "0x0341d2c2ce65b62af8887e905245b8cfea2a3b97",
    symbol: "YAYAGETH",
    decimals: 18,
  },
  {
    address: "0xcb76314c2540199f4b844d4ebbc7998c604880ca",
    symbol: "BERRY",
    decimals: 18,
  },
  {
    address: "0x8af78f0c818302164f73b2365fe152c2d1fe80e1",
    symbol: "FNCT",
    decimals: 18,
  },
  {
    address: "0x71d898c440af10566cea48e12c01f435ec788c7a",
    symbol: "MAI",
    decimals: 18,
  },
  {
    address: "0xf944e35f95e819e752f3ccb5faf40957d311e8c5",
    symbol: "MOCA",
    decimals: 18,
  },
  {
    address: "0x8de5b80a0c1b02fe4976851d030b36122dbb8624",
    symbol: "VANRY",
    decimals: 18,
  },
  {
    address: "0xdd3b11ef34cd511a2da159034a05fcb94d806686",
    symbol: "REKT",
    decimals: 18,
  },
  {
    address: "0x866a2bf4e572cbcf37d5071a7a58503bfb36be1b",
    symbol: "M",
    decimals: 6,
  },
  {
    address: "0x8074836637eb9cc73a01a65d5700907fc639c4e9",
    symbol: "DNOW",
    decimals: 18,
  },
  {
    address: "0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f",
    symbol: "GHO",
    decimals: 18,
  },
  {
    address: "0x467bccd9d29f223bce8043b84e8c8b282827790f",
    symbol: "TEL",
    decimals: 2,
  },
  {
    address: "0xde17a000ba631c5d7c2bd9fb692efea52d90dee2",
    symbol: "USDN",
    decimals: 18,
  },
  {
    address: "0x60be1e1fe41c1370adaf5d8e66f07cf1c2df2268",
    symbol: "PERC",
    decimals: 18,
  },
  {
    address: "0xfaba6f8e4a5e8ab82f62fe7c39859fa577269be3",
    symbol: "ONDO",
    decimals: 18,
  },
  {
    address: "0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8",
    symbol: "UNIX",
    decimals: 18,
  },
  {
    address: "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
    symbol: "LIT",
    decimals: 18,
  },
  {
    address: "0xf8f173e20e15f3b6cb686fb64724d370689de083",
    symbol: "HEI",
    decimals: 18,
  },
  {
    address: "0x0c37bcf456bc661c14d596683325623076d7e283",
    symbol: "ARNX",
    decimals: 18,
  },
  {
    address: "0x221657776846890989a759ba2973e427dff5c9bb",
    symbol: "REP",
    decimals: 18,
  },
  {
    address: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    symbol: "BNT",
    decimals: 18,
  },
  {
    address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    symbol: "BAT",
    decimals: 18,
  },
  {
    address: "0x009c43b42aefac590c719e971020575974122803",
    symbol: "BIX",
    decimals: 18,
  },
  {
    address: "0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f",
    symbol: "BFT",
    decimals: 18,
  },
  {
    address: "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
    symbol: "BRD",
    decimals: 18,
  },
  {
    address: "0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6",
    symbol: "DCN",
    decimals: 0,
  },
  {
    address: "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
    symbol: "LEND",
    decimals: 18,
  },
  {
    address: "0x9afc975edb8a0b57f066e8e0a72a5e2adbdcb605",
    symbol: "FSN",
    decimals: 18,
  },
  {
    address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    symbol: "GUSD",
    decimals: 2,
  },
  {
    address: "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    symbol: "HOT",
    decimals: 18,
  },
  {
    address: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    symbol: "HT",
    decimals: 18,
  },
  {
    address: "0x607f4c5bb672230e8672085532f7e901544a7375",
    symbol: "RLC",
    decimals: 9,
  },
  {
    address: "0xfa05a73ffe78ef8f1a739473e462c54bae6567d9",
    symbol: "LUN",
    decimals: 18,
  },
  {
    address: "0x329c6e459ffa7475718838145e5e85802db2a303",
    symbol: "EMAID",
    decimals: 18,
  },
  {
    address: "0x2ebd53d035150f328bd754d6dc66b99b0edb89aa",
    symbol: "MET",
    decimals: 18,
  },
  {
    address: "0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb",
    symbol: "MITH",
    decimals: 18,
  },
  {
    address: "0xbf52f2ab39e26e0951d2a02b49b7702abe30406a",
    symbol: "ODE",
    decimals: 18,
  },
  {
    address: "0x4092678e4e78230f46a1534c0fbc8fa39780892b",
    symbol: "OCN",
    decimals: 18,
  },
  {
    address: "0x75231f58b43240c9718dd58b4967c5114342a86c",
    symbol: "OKB",
    decimals: 18,
  },
  {
    address: "0x64a60493d888728cf42616e034a0dfeae38efcf0",
    symbol: "OLT",
    decimals: 18,
  },
  {
    address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    symbol: "USDP",
    decimals: 18,
  },
  {
    address: "0x75858677e27c930fb622759feaffee2b754af07f",
    symbol: "SOUL",
    decimals: 8,
  },
  {
    address: "0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9",
    symbol: "PST",
    decimals: 18,
  },
  {
    address: "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
    symbol: "NPXS",
    decimals: 18,
  },
  {
    address: "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
    symbol: "QKC",
    decimals: 18,
  },
  {
    address: "0x31c8eacbffdd875c74b94b077895bd78cf1e64a3",
    symbol: "RAD",
    decimals: 18,
  },
  {
    address: "0x2ef52ed7de8c5ce03a4ef0efbe9b7450f2d7edc9",
    symbol: "REV",
    decimals: 6,
  },
  {
    address: "0x46d0dac0926fa16707042cadc23f1eb4141fe86b",
    symbol: "SNM",
    decimals: 18,
  },
  {
    address: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    symbol: "SNT",
    decimals: 18,
  },
  {
    address: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    symbol: "STORJ",
    decimals: 8,
  },
  {
    address: "0xa62cc35625b0c8dc1faea39d33625bb4c15bd71c",
    symbol: "STMX",
    decimals: 18,
  },
  {
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    symbol: "USDT",
    decimals: 6,
  },
  {
    address: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
    symbol: "ZAP",
    decimals: 18,
  },
  {
    address: "0x1c9b158e71bc274ea5519ca57a73e337cac72b3a",
    symbol: "GROWAI",
    decimals: 18,
  },
  {
    address: "0x2e44f3f609ff5aa4819b323fd74690f07c3607c4",
    symbol: "PIN",
    decimals: 18,
  },
  {
    address: "0xf2c88757f8d03634671208935974b60a2a28bdb3",
    symbol: "SHELL",
    decimals: 18,
  },
  {
    address: "0x2565ae0385659badcada1031db704442e1b69982",
    symbol: "ASM",
    decimals: 18,
  },
  {
    address: "0xc96de26018a54d51c097160568752c4e3bd6c364",
    symbol: "FBTC",
    decimals: 8,
  },
  {
    address: "0x888888848b652b3e3a0f34c96e00eec0f3a23f72",
    symbol: "TLM",
    decimals: 4,
  },
  {
    address: "0x7a56e1c57c7475ccf742a1832b028f0456652f97",
    symbol: "SOLVBTC",
    decimals: 18,
  },
  {
    address: "0xccc8cb5229b0ac8069c51fd58367fd1e622afd97",
    symbol: "GODS",
    decimals: 18,
  },
  {
    address: "0x55296f69f40ea6d20e478533c15a6b08b654e758",
    symbol: "XYO",
    decimals: 18,
  },
  {
    address: "0x0aa1e96d2a46ec6beb2923de1e61addf5f5f1dce",
    symbol: "REG",
    decimals: 18,
  },
  {
    address: "0x1f82284c1658ad71c576f7230e6c2dee7901c1fa",
    symbol: "WBTSLA",
    decimals: 18,
  },
  {
    address: "0xa64c9f707bbb4cbc4e22f596a53d85b3ab7000f8",
    symbol: "ARKBD",
    decimals: 18,
  },
  {
    address: "0x4e4016eb5014468f3dba5883c70f9997026ea11e",
    symbol: "ETHED",
    decimals: 18,
  },
  {
    address: "0x3c4024408efac2dbf7ed453c95d9d97889e4846a",
    symbol: "IBITD",
    decimals: 18,
  },
  {
    address: "0x97e4db79d2924f1c5ce2a821e7d5b111f9925e70",
    symbol: "JNJD",
    decimals: 18,
  },
  {
    address: "0xec3e2998c87ac9bced45381f84932c877cad6930",
    symbol: "MCDD",
    decimals: 18,
  },
  {
    address: "0xbb19ea4de2fcd217ca5e4bd413adc49b52855b2b",
    symbol: "QQQD",
    decimals: 18,
  },
  {
    address: "0xf7248e588f88655d4a5230c4cec2db2cf4438ff0",
    symbol: "TQQQD",
    decimals: 18,
  },
  {
    address: "0x4026f916beda6ca2b347c44517a83f5efab3f569",
    symbol: "JPMD",
    decimals: 18,
  },
  {
    address: "0x33e5b290badbd8ba868b51a72ab6062601f9e9b2",
    symbol: "FBTCD",
    decimals: 18,
  },
  {
    address: "0xf0d7ee633636bae1d502a96f1130b00deaf06dc4",
    symbol: "ARKXD",
    decimals: 18,
  },
  {
    address: "0x67637766495858fd3c0a0e65a1feb91f78479753",
    symbol: "BAD",
    decimals: 18,
  },
  {
    address: "0xf12a38e6e51913ea04d70dba97d7420a13fd7941",
    symbol: "BRRRD",
    decimals: 18,
  },
  {
    address: "0x0c7ec64a7b3416bc3578e02d4b1e5763da756183",
    symbol: "BTCOD",
    decimals: 18,
  },
  {
    address: "0x6c1aa3dd4195522ffd963215a13416324eaf9216",
    symbol: "BACD",
    decimals: 18,
  },
  {
    address: "0x18c278edc2ed4ed9d23a8a73a3a6ed014094b784",
    symbol: "BTCWD",
    decimals: 18,
  },
  {
    address: "0x4cfba646ca9c05ad653fea94d485d15cfc449b2d",
    symbol: "CATD",
    decimals: 18,
  },
  {
    address: "0x81b11d330d9af45599be0580b9bcba7f4e57bd35",
    symbol: "DEFID",
    decimals: 18,
  },
  {
    address: "0xaedc5e1e05c2fb8840f6d6df4e8f63e983c32bd5",
    symbol: "HODLD",
    decimals: 18,
  },
  {
    address: "0x103d7c5c657cb92f4acec796da416d52a6a86bf6",
    symbol: "AZND",
    decimals: 18,
  },
  {
    address: "0xcc195aa6859fbbe792b9e0b18c74c00a0e90c1f8",
    symbol: "HOODD",
    decimals: 18,
  },
  {
    address: "0x47db0ac0d6ad7765007f983184b12ae137f8ccac",
    symbol: "HUTD",
    decimals: 18,
  },
  {
    address: "0x4be7aeda82870609cd934babc3a11b886b8cdb02",
    symbol: "IAUD",
    decimals: 18,
  },
  {
    address: "0x842227039640c7d38e3b307a3ab556a7baeee730",
    symbol: "VD",
    decimals: 18,
  },
  {
    address: "0x9f9e5c45d95d66e85e8a878007bf27ca2d987394",
    symbol: "VWOD",
    decimals: 18,
  },
  {
    address: "0x5e796f7e42117ca82b1db3eb227bef11b7a48aa0",
    symbol: "WALRFD",
    decimals: 18,
  },
  {
    address: "0x05fed61f7a3eca96dc7f9a41b38fa7c5f0e62158",
    symbol: "KOD",
    decimals: 18,
  },
  {
    address: "0x251530c7f24d6904a31425b9afa24b0e1e5aafde",
    symbol: "PHOD",
    decimals: 18,
  },
  {
    address: "0x0af5b873df94efeba34c0b0a9fa34a8c13e078cd",
    symbol: "YUMD",
    decimals: 18,
  },
  {
    address: "0x461ad31f69e694e2e20b2070d8be1105626110c3",
    symbol: "RBLXD",
    decimals: 18,
  },
  {
    address: "0x53cce6d10e43d1b3d11872ad22ec2acd8d2537b8",
    symbol: "SMOL",
    decimals: 18,
  },
  {
    address: "0x058d411ab9911f90c74f471bdc9d2bb4cf9b309c",
    symbol: "RIZ",
    decimals: 8,
  },
  {
    address: "0x51129dad3db1c28d693616308ae1062e43280ed7",
    symbol: "ZAI",
    decimals: 18,
  },
  {
    address: "0xaa88ab7413f909eef5bd69bb2a2b6f97dc6743b8",
    symbol: "PGD",
    decimals: 18,
  },
  {
    address: "0x328a9bc033b22de0b82762c49762ce1440b45d4b",
    symbol: "PALLD",
    decimals: 18,
  },
  {
    address: "0x09de9c8fbe90271e8886b55d66e3b37130e3a3da",
    symbol: "CCLD",
    decimals: 18,
  },
  {
    address: "0x9ba08fa0428db35dde85d6c515184642c6301199",
    symbol: "FD",
    decimals: 18,
  },
  {
    address: "0xc3260a0e1dd1f7ac6508ae29cb00f4fa4b544ba7",
    symbol: "RKLBD",
    decimals: 18,
  },
  {
    address: "0x52926f7f983d3d7ddcbe644a809d67bbe4a9e785",
    symbol: "XOMD",
    decimals: 18,
  },
  {
    address: "0x9c879a1c2021bd0594750c148f37176395be0b8f",
    symbol: "SPSKD",
    decimals: 18,
  },
  {
    address: "0xe36fb561dcc177492da42a6ba5fd4a9d0987bfe2",
    symbol: "SIVRD",
    decimals: 18,
  },
  {
    address: "0xb49e40e97b41b253ecfe6b01a11f1a4f021724f9",
    symbol: "SONYD",
    decimals: 18,
  },
  {
    address: "0xe5ad37798daa0231279859d4699cf8f466e8b020",
    symbol: "COSTD",
    decimals: 18,
  },
  {
    address: "0xf373c3d96996ede40ea161f6929fd457cda8111c",
    symbol: "DALD",
    decimals: 18,
  },
  {
    address: "0x43c72ea1736072f42f785e704e5244cc5b9a6779",
    symbol: "GLDD",
    decimals: 18,
  },
  {
    address: "0x9e6dbde4211e6853b33b8bcd5ce82144997c63ba",
    symbol: "SQD",
    decimals: 18,
  },
  {
    address: "0xcf5905de7d83dce7cd109485c42723bb76eba5a6",
    symbol: "EROD",
    decimals: 18,
  },
  {
    address: "0x0a27c31f087cd3d30cdad339731bede4194531a4",
    symbol: "CSCOD",
    decimals: 18,
  },
  {
    address: "0x993d9ca16686746fef44e320e7f091578710cd18",
    symbol: "ITAD",
    decimals: 18,
  },
  {
    address: "0xc4c6213024d9adc5132707942905918df7fbbbe8",
    symbol: "EZBCD",
    decimals: 18,
  },
  {
    address: "0xc60a9145d9e9f1152218e7da6df634b7a74ae444",
    symbol: "CGETHHASHKEY",
    decimals: 18,
  },
  {
    address: "0xe7ae30c03395d66f30a26c49c91edae151747911",
    symbol: "CLBTC",
    decimals: 18,
  },
  {
    address: "0x54991328ab43c7d5d31c19d1b9fa048e77b5cd16",
    symbol: "SOIL",
    decimals: 18,
  },
  {
    address: "0x86ccbf2471be7ebca2c2c92a12fcf7089a44b4df",
    symbol: "SBUXD",
    decimals: 18,
  },
  {
    address: "0x6967f0974d76d34e140cae27efea32cdf546b58e",
    symbol: "GMRT",
    decimals: 18,
  },
  {
    address: "0xe94db607eba8f76a377d9bcc327c9856ed90fbde",
    symbol: "NINA",
    decimals: 9,
  },
  {
    address: "0x088828f0a8e2dc8511e957230f4681371451fa1d",
    symbol: "BOXXD",
    decimals: 18,
  },
  {
    address: "0x2711018a5489df0d9816bdb7670d58ba23fb2d5e",
    symbol: "SPTED",
    decimals: 18,
  },
  {
    address: "0xc580919e2e4b083321f9e4c5ed56bc862f275916",
    symbol: "SOXLD",
    decimals: 18,
  },
  {
    address: "0xdf9be795fee855aaeb82dc112b0f27b62524a17b",
    symbol: "SPUSD",
    decimals: 18,
  },
  {
    address: "0xc49da7892155ccc603f0b88eaedaa3b57910096f",
    symbol: "CVXD",
    decimals: 18,
  },
  {
    address: "0xf0e9e98ef4b78ddfbbfafba519345d877eb7a81e",
    symbol: "EEMD",
    decimals: 18,
  },
  {
    address: "0x88cee7bf66435f6fdbb681a6a522f26598fe39a2",
    symbol: "HYMBD",
    decimals: 18,
  },
  {
    address: "0x52bd2411f090af9b1fc688fcf3c4242ab0e7ddaf",
    symbol: "MELID",
    decimals: 18,
  },
  {
    address: "0x3482968ed0e10bf7446706a6680e8a8f486f61b0",
    symbol: "SNOWD",
    decimals: 18,
  },
  {
    address: "0xd16acb3147bcafd8469ffb288f45db52cc04ae68",
    symbol: "USHYD",
    decimals: 18,
  },
  {
    address: "0xfae8f97cafea5133159992e83a4b30e1aae88328",
    symbol: "SPWOD",
    decimals: 18,
  },
  {
    address: "0x1194e99f23c8b99cb55a328160aeb0bb010bf0c3",
    symbol: "UFOD",
    decimals: 18,
  },
  {
    address: "0x0b3eaead748facdb9d943d3407011f16eb17d0cf",
    symbol: "PMX",
    decimals: 18,
  },
  {
    address: "0x0123b0a381348f3ba793091923daeb7356ec5862",
    symbol: "VXXD",
    decimals: 18,
  },
  {
    address: "0xdec933e2392ad908263e70a386fbf34e703ffe8f",
    symbol: "WBCOIN",
    decimals: 18,
  },
  {
    address: "0x90fa6faf82ddcbbbd48f66ee70b8515a7a626ac3",
    symbol: "TJXD",
    decimals: 18,
  },
  {
    address: "0x7e8101a1c322d394b3961498c7d40d2dfa94c392",
    symbol: "WBNVDA",
    decimals: 18,
  },
  {
    address: "0x1a4f71b0ff3c22540887bcf83b50054a213c673d",
    symbol: "WBMSTR",
    decimals: 18,
  },
  {
    address: "0x527856315a4bcd2f428ea7fa05ea251f7e96a50a",
    symbol: "CDFI",
    decimals: 18,
  },
  {
    address: "0x12c88a3c30a7aabc1dd7f2c08a97145f5dccd830",
    symbol: "G7",
    decimals: 18,
  },
  {
    address: "0x5197ab79b03f1479cbf391a2030b8883546ff251",
    symbol: "SOR",
    decimals: 18,
  },
  {
    address: "0xaf614642e58c65b71a3aaab2d3afc20e5cb93246",
    symbol: "WEATD",
    decimals: 18,
  },
  {
    address: "0x570f09ac53b96929e3868f71864e36ff6b1b67d7",
    symbol: "ARCAS",
    decimals: 17,
  },
  {
    address: "0x3bce5cb273f0f148010bbea2470e7b5df84c7812",
    symbol: "SCETH",
    decimals: 18,
  },
  {
    address: "0x325dc9ebcec31940c658acaca45f8293418d811e",
    symbol: "SOLVBTCENA",
    decimals: 18,
  },
  {
    address: "0x901a020915bc3577d85d29f68024b4c5e240b8cd",
    symbol: "BLASTUP",
    decimals: 18,
  },
  {
    address: "0xa608512bbc9934e4b1ddecf0f5fb38b6ad93308d",
    symbol: "GUD",
    decimals: 18,
  },
  {
    address: "0x320aebbdca1397f2e3c7f1e482e104a7d9ec97e4",
    symbol: "AYIN",
    decimals: 18,
  },
  {
    address: "0xdad33e12e61dc2f2692f2c12e6303b5ade7277ba",
    symbol: "BREWLABS",
    decimals: 9,
  },
  {
    address: "0x38f9bf9dce51833ec7f03c9dc218197999999999",
    symbol: "NYA",
    decimals: 18,
  },
  {
    address: "0xe04f47ff45576249bc5083dfdf987e03d0550113",
    symbol: "SAMA",
    decimals: 18,
  },
  {
    address: "0x19e1f2f837a3b90ebd0730cb6111189be0e1b6d6",
    symbol: "LAIKA",
    decimals: 18,
  },
  {
    address: "0x3be775b699fee916e7de117994358ff8f48e4569",
    symbol: "VCNT",
    decimals: 18,
  },
  {
    address: "0x26d3c0d9f4cc4c130097b6afdebe4f5e497e6bdf",
    symbol: "MNT",
    decimals: 6,
  },
  {
    address: "0x1095ae55b62174d9ea3bc6a4136acacad461d7ce",
    symbol: "ITHACA",
    decimals: 18,
  },
  {
    address: "0xee7527841a932d2912224e20a405e1a1ff747084",
    symbol: "SHX",
    decimals: 7,
  },
  {
    address: "0xc29bbe89e98250ee2eee3ac677bbed542a049efb",
    symbol: "CDN",
    decimals: 18,
  },
  {
    address: "0x4dc26fc5854e7648a064a4abd590bbe71724c277",
    symbol: "ANIME",
    decimals: 18,
  },
  {
    address: "0x7a78c790250fef60ce7e8ef85557d67cc4216a52",
    symbol: "GLUTEU",
    decimals: 18,
  },
  {
    address: "0xac28c9178acc8ba4a11a29e013a3a2627086e422",
    symbol: "BMSTR",
    decimals: 18,
  },
  {
    address: "0x975da7b2325f815f1de23c8b68f721fb483b8071",
    symbol: "LOOPIN",
    decimals: 18,
  },
  {
    address: "0xd8b95b1987741849ca7e71e976aeb535fd2e55a2",
    symbol: "BCSBGC3",
    decimals: 18,
  },
  {
    address: "0x68ccaca9adf1552b3316d6067690ec27397c8ea8",
    symbol: "TOS",
    decimals: 18,
  },
  {
    address: "0x6551698ee65f5db726e49f9ab0ff1ce9419003a7",
    symbol: "PLAY",
    decimals: 18,
  },
  {
    address: "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
    symbol: "ELF",
    decimals: 18,
  },
  {
    address: "0xcd7c6ed75151745c893dfc1dca1daa1d55034e67",
    symbol: "RIOTD",
    decimals: 18,
  },
  {
    address: "0x7fb5da212239593f4bf544fbe2ec70ce91f0afdb",
    symbol: "GMED",
    decimals: 18,
  },
  {
    address: "0xf469fbd2abcd6b9de8e169d128226c0fc90a012e",
    symbol: "PUMPBTC",
    decimals: 8,
  },
  {
    address: "0x9deb0fc809955b79c85e82918e8586d3b7d2695a",
    symbol: "GOLD",
    decimals: 18,
  },
  {
    address: "0x48b847cf774a5710f36f594b11fc10e2e59bba72",
    symbol: "UNIT0",
    decimals: 18,
  },
  {
    address: "0x14a5f2872396802c3cc8942a39ab3e4118ee5038",
    symbol: "BTSLA",
    decimals: 18,
  },
  {
    address: "0x72a9b1c9b191781bb15f1b98f443a1d916557c92",
    symbol: "FFM",
    decimals: 18,
  },
  {
    address: "0x374a457967ba24fd3ae66294cab08244185574b0",
    symbol: "BMSFT",
    decimals: 18,
  },
  {
    address: "0xebee37aaf2905b7bda7e3b928043862e982e8f32",
    symbol: "BGOOGL",
    decimals: 18,
  },
  {
    address: "0x791a5c2261823dbf69b27b63e851b7745532cfa2",
    symbol: "TUA",
    decimals: 18,
  },
  {
    address: "0x7212088a11b4d8f6fc90fbb3dfe793b45dd72323",
    symbol: "BGME",
    decimals: 18,
  },
  {
    address: "0x5ac34c53a04b9aaa0bf047e7291fb4e8a48f2a18",
    symbol: "NAI",
    decimals: 18,
  },
  {
    address: "0x7d12bcab2d53fae6d7e360acb71d9b55ecbd1ce3",
    symbol: "LAC",
    decimals: 18,
  },
  {
    address: "0xfa704148d516b209d52c2d75f239274c8f8eaf1a",
    symbol: "OCTA",
    decimals: 18,
  },
  {
    address: "0xac20315350d7b59cbe846144f5eb8a6d1df1f5fc",
    symbol: "RDDTD",
    decimals: 18,
  },
  {
    address: "0xd9d920aa40f578ab794426f5c90f6c731d159def",
    symbol: "SOLVBTCBBN",
    decimals: 18,
  },
  {
    address: "0xf9fa60ef4f23f00cce403cc4d2c11baf4880a0d6",
    symbol: "FAR",
    decimals: 18,
  },
  {
    address: "0x6ab4ce36260f201e4e2391eca2fd7538f71e4131",
    symbol: "AI",
    decimals: 18,
  },
  {
    address: "0x328ea6e5ba4cc4b58799f2aec3d8ba839f4314ba",
    symbol: "TRUMAGA",
    decimals: 18,
  },
  {
    address: "0x4fd67c2d9e8c4fdd9c66954bafe124ca50fc1819",
    symbol: "RMNER",
    decimals: 18,
  },
  {
    address: "0xc4a217a8b2cdf85eb8206391ae3723d72b3a4e04",
    symbol: "BITBD",
    decimals: 18,
  },
  {
    address: "0xf3527ef8de265eaa3716fb312c12847bfba66cef",
    symbol: "USDX",
    decimals: 18,
  },
  {
    address: "0xf5cb350b40726b5bcf170d12e162b6193b291b41",
    symbol: "BIS",
    decimals: 8,
  },
  {
    address: "0xd71b200bf061509b85df50cc0d8cdee8818a4577",
    symbol: "COIND",
    decimals: 18,
  },
  {
    address: "0xff33a6b3dc0127862eedd3978609404b22298a54",
    symbol: "GORPLES",
    decimals: 18,
  },
  {
    address: "0x5eeecb13a98e2019aaaca47df17683431f5cab04",
    symbol: "SSDX",
    decimals: 18,
  },
  {
    address: "0xc98d64da73a6616c42117b582e832812e7b8d57f",
    symbol: "RSS3",
    decimals: 18,
  },
  {
    address: "0xb2490e357980ce57bf5745e181e537a64eb367b1",
    symbol: "MOON",
    decimals: 18,
  },
  {
    address: "0xd105c45bcc7211f847ae73b187a41b7d8184ade2",
    symbol: "NCASH",
    decimals: 18,
  },
  {
    address: "0x97ad75064b20fb2b2447fed4fa953bf7f007a706",
    symbol: "BERASTONE",
    decimals: 18,
  },
  {
    address: "0x9d1a7a3191102e9f900faa10540837ba84dcbae7",
    symbol: "EURI",
    decimals: 18,
  },
  {
    address: "0xfab13732ae25267a5f47f6f31660c9a82b5fa9f1",
    symbol: "SKIBIDI",
    decimals: 6,
  },
  {
    address: "0xfee293840d23b0b2de8c55e1cf7a9f01c157767c",
    symbol: "DEGEN",
    decimals: 18,
  },
  {
    address: "0x7404ac09adf614603d9c16a7ce85a1101f3514ba",
    symbol: "PLAY",
    decimals: 18,
  },
  {
    address: "0x79bbf4508b1391af3a0f4b30bb5fc4aa9ab0e07c",
    symbol: "ANON",
    decimals: 18,
  },
  {
    address: "0x76bf2d1e6dfda645c0c17440b17eccc181dfc351",
    symbol: "YBETH",
    decimals: 18,
  },
  {
    address: "0x968be3f7bfef0f8edc3c1ad90232ebb0da0867aa",
    symbol: "SWORLD",
    decimals: 18,
  },
  {
    address: "0xf38feedb0c85c1e1d6864c7513ac646d28bb0cfc",
    symbol: "STZETA",
    decimals: 18,
  },
  {
    address: "0xbbbbbbe1da5eab142b32f8887ee8d3872d847c20",
    symbol: "BBONK",
    decimals: 18,
  },
  {
    address: "0xfa59075dfce274e028b58bddfcc3d709960f594a",
    symbol: "YBUSD",
    decimals: 18,
  },
  {
    address: "0x1bd9abf284e893705104e64b564b414620b722f1",
    symbol: "ACM",
    decimals: 18,
  },
  {
    address: "0xed11c9bcf69fdd2eefd9fe751bfca32f171d53ae",
    symbol: "KOIN",
    decimals: 8,
  },
  {
    address: "0xe07710cdcd1c9f0fb04bfd013f9854e4552671ce",
    symbol: "U",
    decimals: 18,
  },
  {
    address: "0x0d3e106b9555c8c7052da0e7909956d640ac2c69",
    symbol: "POPKAT",
    decimals: 8,
  },
  {
    address: "0xf5207ac91c9e7ec7ebb03e93cbcbcad10878ac79",
    symbol: "MIRA",
    decimals: 2,
  },
  {
    address: "0x64d3cae387405d91f7b0d91fb1d824a281719500",
    symbol: "GS",
    decimals: 18,
  },
  {
    address: "0x89e8e084cc60e6988527f0904b4be71656e8bfa9",
    symbol: "SMOG",
    decimals: 6,
  },
  {
    address: "0x92df60c51c710a1b1c20e42d85e221f3a1bfc7f2",
    symbol: "BANANA",
    decimals: 18,
  },
  {
    address: "0x5aa7b9be58d4001a7065718641ce7b121b41ef9b",
    symbol: "APAD",
    decimals: 18,
  },
  {
    address: "0x6aa56e1d98b3805921c170eb4b3fe7d4fda6d89b",
    symbol: "TRUMP",
    decimals: 9,
  },
  {
    address: "0xa34c5e0abe843e10461e2c9586ea03e55dbcc495",
    symbol: "BNVDA",
    decimals: 18,
  },
  {
    address: "0x764a726d9ced0433a8d7643335919deb03a9a935",
    symbol: "POKT",
    decimals: 6,
  },
  {
    address: "0xd454b59f16d42667be2fa55292d16647e27f40c4",
    symbol: "XPRT",
    decimals: 6,
  },
  {
    address: "0xfe18ae03741a5b84e39c295ac9c856ed7991c38e",
    symbol: "CDCETH",
    decimals: 18,
  },
  {
    address: "0x8292bb45bf1ee4d140127049757c2e0ff06317ed",
    symbol: "RLUSD",
    decimals: 18,
  },
  {
    address: "0x4af1bc87e43ddb22188bb3791ae00341586fe8fc",
    symbol: "CHAMP",
    decimals: 18,
  },
  {
    address: "0x90b7e285ab6cf4e3a2487669dba3e339db8a3320",
    symbol: "DUCKIES",
    decimals: 8,
  },
  {
    address: "0xed2d13a70acbd61074fc56bd0d0845e35f793e5e",
    symbol: "MOJO",
    decimals: 18,
  },
  {
    address: "0x572975ff6d5136c81c8d7448b6361ef9eefe1ab0",
    symbol: "WSTUSDT",
    decimals: 18,
  },
  {
    address: "0x4af8aa621df6dd3e2d653188a357fc2b35c6a037",
    symbol: "SELF",
    decimals: 18,
  },
  {
    address: "0x25c31b1f93f846c7c8debfd05898f162740a4581",
    symbol: "WANDER",
    decimals: 18,
  },
  {
    address: "0xeec2e29ff5cd4cecea61de09e9f28fae74c70ddd",
    symbol: "AITT",
    decimals: 8,
  },
  {
    address: "0x77a4b0bfe5c7257f67a1de1b99aa7e157035b1b2",
    symbol: "7007",
    decimals: 18,
  },
  {
    address: "0x85cf7f10683c73359e7b06c082eef5851ff2956d",
    symbol: "LILAI",
    decimals: 18,
  },
  {
    address: "0xc4170fd71eced3c80badca77f4e12e8aac1e3436",
    symbol: "KMON",
    decimals: 18,
  },
  {
    address: "0x911d86c72155c33993d594b0ec7e6206b4c803da",
    symbol: "WSTLINK",
    decimals: 18,
  },
  {
    address: "0xf0187b76be05c1fcaa24f39c0a3aab4434099c4f",
    symbol: "AEG",
    decimals: 18,
  },
  {
    address: "0x50d5118fb90d572b9d42ba65e0addc4900867809",
    symbol: "OSEAN",
    decimals: 18,
  },
  {
    address: "0x0921799cb1d702148131024d18fcde022129dc73",
    symbol: "LL",
    decimals: 18,
  },
  {
    address: "0x580e933d90091b9ce380740e3a4a39c67eb85b4c",
    symbol: "GSWIFT",
    decimals: 18,
  },
  {
    address: "0x4e9e4ab99cfc14b852f552f5fb3aa68617825b6c",
    symbol: "SLR",
    decimals: 18,
  },
  {
    address: "0x3a856d4effa670c54585a5d523e96513e148e95d",
    symbol: "TRIAS",
    decimals: 18,
  },
  {
    address: "0xb2ee0adbe0ef1281025d0676511bb1df14600f4d",
    symbol: "FORE",
    decimals: 18,
  },
  {
    address: "0xc03b43d492d904406db2d7d57e67c7e8234ba752",
    symbol: "WUSDR",
    decimals: 9,
  },
  {
    address: "0xb2492e97a68a6e4b9e9a11b99f6c42e5accd38c7",
    symbol: "VEXT",
    decimals: 18,
  },
  {
    address: "0xdd1b6b259986571a85da82a84f461e1c212591c0",
    symbol: "BLAZEX",
    decimals: 9,
  },
  {
    address: "0x73fbd93bfda83b111ddc092aa3a4ca77fd30d380",
    symbol: "SOPH",
    decimals: 18,
  },
  {
    address: "0xf2b2f7b47715256ce4ea43363a867fdce9353e3a",
    symbol: "BRISE",
    decimals: 9,
  },
  {
    address: "0x8f006d1e1d9dc6c98996f50a4c810f17a47fbf19",
    symbol: "NSFW",
    decimals: 18,
  },
  {
    address: "0xd20523b39faf1d6e9023a4d6085f87b7b0de7926",
    symbol: "OATH",
    decimals: 18,
  },
  {
    address: "0xa7a0b3fe94121e366d774d60d075f6386f750884",
    symbol: "USDFI",
    decimals: 18,
  },
  {
    address: "0x60b9c41d99fe3eb64ecc1344bad31d87f1bced6d",
    symbol: "STABLE",
    decimals: 18,
  },
  {
    address: "0x25931894a86d47441213199621f1f2994e1c39aa",
    symbol: "CGPT",
    decimals: 18,
  },
  {
    address: "0x152649ea73beab28c5b49b26eb48f7ead6d4c898",
    symbol: "CAKE",
    decimals: 18,
  },
  {
    address: "0x4eea762311be76f9071aa01058c047ad12a017a1",
    symbol: "GBURN",
    decimals: 18,
  },
  {
    address: "0x39d5313c3750140e5042887413ba8aa6145a9bd2",
    symbol: "EMP",
    decimals: 18,
  },
  {
    address: "0x6b66ccd1340c479b07b390d326eadcbb84e726ba",
    symbol: "SEAM",
    decimals: 18,
  },
  {
    address: "0x0b925ed163218f6662a35e0f0371ac234f9e9371",
    symbol: "AWSTETH",
    decimals: 18,
  },
  {
    address: "0x7788a3538c5fc7f9c7c8a74eac4c898fc8d87d92",
    symbol: "SUSDX",
    decimals: 18,
  },
  {
    address: "0xd459eceddafcc1d876a3be7290a2e16e801073a3",
    symbol: "BB",
    decimals: 18,
  },
  {
    address: "0x04c46e830bb56ce22735d5d8fc9cb90309317d0f",
    symbol: "EKUBO",
    decimals: 18,
  },
  {
    address: "0x3fe6a295459fae07df8a0cecc36f37160fe86aa9",
    symbol: "ALUSD",
    decimals: 18,
  },
  {
    address: "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
    symbol: "TON",
    decimals: 9,
  },
  {
    address: "0xade6057fcafa57d6d51ffa341c64ce4814995995",
    symbol: "BZPR1",
    decimals: 18,
  },
  {
    address: "0xd711d7d893de57dc13ff465763218770bd42db1d",
    symbol: "EGBP",
    decimals: 18,
  },
  {
    address: "0x054c9d4c6f4ea4e14391addd1812106c97d05690",
    symbol: "LLD",
    decimals: 18,
  },
  {
    address: "0xb55ee890426341fe45ee6dc788d2d93d25b59063",
    symbol: "LOVE",
    decimals: 18,
  },
  {
    address: "0x31e4efe290973ebe91b3a875a7994f650942d28f",
    symbol: "SHRAP",
    decimals: 18,
  },
  {
    address: "0x31a2e08f4232329e4eddb025c0275f43c9cd56d7",
    symbol: "LUSD",
    decimals: 18,
  },
  {
    address: "0x735fa792e731a2e8f83f32eb539841b7b72e6d8f",
    symbol: "EEUR",
    decimals: 18,
  },
  {
    address: "0x1e2aa124385016f9bd3ed87d21d907fac21fe707",
    symbol: "HIVP",
    decimals: 18,
  },
  {
    address: "0x75d86078625d1e2f612de2627d34c7bc411c18b8",
    symbol: "AGII",
    decimals: 18,
  },
  {
    address: "0xe6828d65bf5023ae1851d90d8783cc821ba7eee1",
    symbol: "ABOND",
    decimals: 18,
  },
  {
    address: "0xa2c2c937333165d4c5f2dc5f31a43e1239fecfeb",
    symbol: "HERA",
    decimals: 18,
  },
  {
    address: "0x1f7e5118521b550bb1a9b435727c003eb033fc51",
    symbol: "AGLA",
    decimals: 18,
  },
  {
    address: "0x051fb509e4a775fabd257611eea1efaed8f91359",
    symbol: "CATE",
    decimals: 9,
  },
  {
    address: "0x186d0ba3dfc3386c464eecd96a61fbb1e2da00bf",
    symbol: "TRAVA",
    decimals: 18,
  },
  {
    address: "0x333000333b26ee30214b4af6419d9ab07a450400",
    symbol: "MELD",
    decimals: 18,
  },
  {
    address: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    symbol: "CRO",
    decimals: 8,
  },
  {
    address: "0x7cfea0dd176651e7b5a1ced9c4faf8ee295315fd",
    symbol: "PRNT",
    decimals: 18,
  },
  {
    address: "0xf33893de6eb6ae9a67442e066ae9abd228f5290c",
    symbol: "GRV",
    decimals: 8,
  },
  {
    address: "0x5b8650cd999b23cf39ab12e3213fbc8709c7f5cb",
    symbol: "MAZI",
    decimals: 18,
  },
  {
    address: "0x9ed7e4b1bff939ad473da5e7a218c771d1569456",
    symbol: "REUNI",
    decimals: 6,
  },
  {
    address: "0x91a69021b0baef3445e51726458a0ce601471846",
    symbol: "ERN",
    decimals: 18,
  },
  {
    address: "0x9d1089802ee608ba84c5c98211afe5f37f96b36c",
    symbol: "FUSDC",
    decimals: 6,
  },
  {
    address: "0xa75e7928d3de682e3f44da60c26f33117c4e6c5c",
    symbol: "PEL",
    decimals: 18,
  },
  {
    address: "0x0ae38f7e10a43b5b2fb064b42a2f4514cba909ef",
    symbol: "UNSHETH",
    decimals: 18,
  },
  {
    address: "0x490e3f4af13e1616ec97a8c6600c1061a8d0253e",
    symbol: "TRR",
    decimals: 18,
  },
  {
    address: "0x849a226f327b89e3133d9930d927f9eb9346f8c9",
    symbol: "CGU",
    decimals: 8,
  },
  {
    address: "0xffa188493c15dfaf2c206c97d8633377847b6a52",
    symbol: "WEFI",
    decimals: 18,
  },
  {
    address: "0x395e925834996e558bdec77cd648435d620afb5b",
    symbol: "TFT",
    decimals: 7,
  },
  {
    address: "0x8db4beaccd1698892821a9a0dc367792c0cb9940",
    symbol: "4TOKEN",
    decimals: 18,
  },
  {
    address: "0x26aad156ba8efa501b32b42ffcdc8413f90e9c99",
    symbol: "EDU",
    decimals: 18,
  },
  {
    address: "0x837d904a3799c0769079be9ecbaddf1abd4ccd6e",
    symbol: "TAROT",
    decimals: 18,
  },
  {
    address: "0xd6b48ccf41a62eb3891e58d0f006b19b01d50cca",
    symbol: "SERAPH",
    decimals: 18,
  },
  {
    address: "0x039d2e8f097331278bd6c1415d839310e0d5ece4",
    symbol: "LINDA",
    decimals: 18,
  },
  {
    address: "0x4184aa04215e5d716dd4c213fed519acadc68f92",
    symbol: "ONUS",
    decimals: 18,
  },
  {
    address: "0xb012be90957d70d9a070918027655f998c123a88",
    symbol: "HMX",
    decimals: 18,
  },
  {
    address: "0x0b7f0e51cd1739d6c96982d55ad8fa634dd43a9c",
    symbol: "DMT",
    decimals: 18,
  },
  {
    address: "0xcdb37a4fbc2da5b78aa4e41a432792f9533e85cc",
    symbol: "CDT",
    decimals: 18,
  },
  {
    address: "0x0a5e677a6a24b2f1a2bf4f3bffc443231d2fdec8",
    symbol: "USX",
    decimals: 18,
  },
  {
    address: "0x4c584cd339bdde73b7f5210486dd8bbeee3fde6d",
    symbol: "SHIBELON",
    decimals: 9,
  },
  {
    address: "0xf3e07812ebc8604fddb0aa35ff79a03f48f48948",
    symbol: "JART",
    decimals: 18,
  },
  {
    address: "0x9f90b457dea25ef802e38d470dda7343691d8fe1",
    symbol: "CIOTX",
    decimals: 18,
  },
  {
    address: "0xe28027c99c7746ffb56b0113e5d9708ac86fae8f",
    symbol: "KING",
    decimals: 9,
  },
  {
    address: "0xbe03e60757f21f4b6fc8f16676ad9d5b1002e512",
    symbol: "RST",
    decimals: 18,
  },
  {
    address: "0x5bdc32663ec75e85ff4abc2cae7ae8b606a2cfca",
    symbol: "CP",
    decimals: 18,
  },
  {
    address: "0x25ec98773d7b4ced4cafab96a2a1c0945f145e10",
    symbol: "STUSDT",
    decimals: 18,
  },
  {
    address: "0x188fb5f5ae5bbe4154d5778f2bbb2fb985c94d25",
    symbol: "OBX",
    decimals: 18,
  },
  {
    address: "0xc0b314a8c08637685fc3dafc477b92028c540cfb",
    symbol: "WOM",
    decimals: 18,
  },
  {
    address: "0x5fab9761d60419c9eeebe3915a8fa1ed7e8d2e1b",
    symbol: "DIMO",
    decimals: 18,
  },
  {
    address: "0x672f4fa517894496b8a958b4b3fca068ce513a39",
    symbol: "DCK",
    decimals: 18,
  },
  {
    address: "0x6731827cb6879a2091ce3ab3423f7bf20539b579",
    symbol: "MPWR",
    decimals: 18,
  },
  {
    address: "0xb50721bcf8d664c30412cfbc6cf7a15145234ad1",
    symbol: "ARB",
    decimals: 18,
  },
  {
    address: "0xa4335da338ec4c07c391fc1a9bf75f306adadc08",
    symbol: "EUSD",
    decimals: 18,
  },
  {
    address: "0x83fedbc0b85c6e29b589aa6bdefb1cc581935ecd",
    symbol: "USTB",
    decimals: 18,
  },
  {
    address: "0xb712d62fe84258292d1961b5150a19bc4ab49026",
    symbol: "XCHNG",
    decimals: 18,
  },
  {
    address: "0x7df4122d3eae29fc8fb6be58d9177e8e560be4fb",
    symbol: "XCCX",
    decimals: 6,
  },
  {
    address: "0x96543ef8d2c75c26387c1a319ae69c0bee6f3fe7",
    symbol: "KUJI",
    decimals: 6,
  },
  {
    address: "0x1b3c515f58857e141a966b33182f2f3feecc10e9",
    symbol: "USK",
    decimals: 6,
  },
  {
    address: "0xb5b29320d2dde5ba5bafa1ebcd270052070483ec",
    symbol: "YIELDETH",
    decimals: 18,
  },
  {
    address: "0xb399511642fe1666c6a07f83483e6e4feaed9a00",
    symbol: "EUROS",
    decimals: 18,
  },
  {
    address: "0x800ee7b69dce0f6649bb0c879b468a665b1a44ce",
    symbol: "AMCD",
    decimals: 18,
  },
  {
    address: "0x1f3f677ecc58f6a1f9e2cf410df4776a8546b5de",
    symbol: "VNDC",
    decimals: 0,
  },
  {
    address: "0xb81408a1cc2f4be70a6a3178d351ca95a77c5a06",
    symbol: "XODEX",
    decimals: 18,
  },
  {
    address: "0x3c917054e03485808137eb306eafa8da0ab695cd",
    symbol: "ORB",
    decimals: 18,
  },
  {
    address: "0xc08cd26474722ce93f4d0c34d16201461c10aa8c",
    symbol: "CARV",
    decimals: 18,
  },
  {
    address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    symbol: "BNB",
    decimals: 18,
  },
  {
    address: "0xa670d7237398238de01267472c6f13e5b8010fd1",
    symbol: "SOMM",
    decimals: 6,
  },
  {
    address: "0x2dff88a56767223a5529ea5960da7a3f5f766406",
    symbol: "ID",
    decimals: 18,
  },
  {
    address: "0xa3f4341c3fef5963ab04135d2014ac7d68222e19",
    symbol: "LOGX",
    decimals: 18,
  },
  {
    address: "0x906c012fa4c30d580537c2b72d1789f56f488a80",
    symbol: "POGS",
    decimals: 18,
  },
  {
    address: "0xa89bf95c5f15a847c8eb8d348cd7fed719ad7d80",
    symbol: "AI",
    decimals: 18,
  },
  {
    address: "0x1151cb3d861920e07a38e03eead12c32178567f6",
    symbol: "BONK",
    decimals: 5,
  },
  {
    address: "0x510975eda48a97e0ca228dd04d1217292487bea6",
    symbol: "GXE",
    decimals: 18,
  },
  {
    address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    symbol: "WFTM",
    decimals: 18,
  },
  {
    address: "0x1d1498166ddceee616a6d99868e1e0677300056f",
    symbol: "SPACE",
    decimals: 18,
  },
  {
    address: "0x45df9fb545eca3a16982dccc0b8a21d0489a0047",
    symbol: "VOY",
    decimals: 18,
  },
  {
    address: "0x56c03b8c4fa80ba37f5a7b60caaaef749bb5b220",
    symbol: "CANTO",
    decimals: 18,
  },
  {
    address: "0xc9c4fd7579133701fa2769b6955e7e56bb386db1",
    symbol: "BRG",
    decimals: 18,
  },
  {
    address: "0xb4a3b0faf0ab53df58001804dda5bfc6a3d59008",
    symbol: "SPA",
    decimals: 18,
  },
  {
    address: "0x969786c4a8884013d1c9ff18dcca2aedbbbfaa8f",
    symbol: "LFG",
    decimals: 18,
  },
  {
    address: "0xb9d27bc093ed0a3b7c18366266704cfe5e7af77b",
    symbol: "CBY",
    decimals: 18,
  },
  {
    address: "0x977b6fc5de62598b08c85ac8cf2b745874e8b78c",
    symbol: "ACBETH",
    decimals: 18,
  },
  {
    address: "0x2aeabde1ab736c59e9a19bed67681869eef39526",
    symbol: "DOVU",
    decimals: 8,
  },
  {
    address: "0xff9c1f21c621696c4f91cf781ec31bd913ee2c26",
    symbol: "COM",
    decimals: 18,
  },
  {
    address: "0xab5bff303312e24dc77bb71a451343f9feb20093",
    symbol: "GULL",
    decimals: 18,
  },
  {
    address: "0xb01cf1be9568f09449382a47cd5bf58e2a9d5922",
    symbol: "SPEED",
    decimals: 18,
  },
  {
    address: "0xe2dc070524a6e305ddb64d8513dc444b6a1ec845",
    symbol: "NEX",
    decimals: 8,
  },
  {
    address: "0x0f3adc247e91c3c50bc08721355a41037e89bc20",
    symbol: "ANC",
    decimals: 18,
  },
  {
    address: "0x6acb9ac319bafe509af9e96be642ead00526b9fa",
    symbol: "WGC",
    decimals: 6,
  },
  {
    address: "0x965697b4ef02f0de01384d0d4f9f782b1670c163",
    symbol: "OXY",
    decimals: 6,
  },
  {
    address: "0x499568c250ab2a42292261d6121525d70691894b",
    symbol: "KRW",
    decimals: 18,
  },
  {
    address: "0x06ddb3a8bc0abc14f85e974cf1a93a6f8d4909d9",
    symbol: "8PAY",
    decimals: 18,
  },
  {
    address: "0x6dc02164d75651758ac74435806093e421b64605",
    symbol: "WCHI",
    decimals: 8,
  },
  {
    address: "0x2f913c820ed3beb3a67391a6eff64e70c4b20b19",
    symbol: "M-BTC",
    decimals: 18,
  },
  {
    address: "0x9d9535dae62f5f12ab83f1183dca1ead244b0db3",
    symbol: "YBR",
    decimals: 18,
  },
  {
    address: "0xfb62ae373aca027177d1c18ee0862817f9080d08",
    symbol: "DPET",
    decimals: 18,
  },
  {
    address: "0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
    symbol: "TRDG",
    decimals: 9,
  },
  {
    address: "0x3079f61704e9efa2bcf1db412f735d8d4cfa26f4",
    symbol: "HAPPY",
    decimals: 18,
  },
  {
    address: "0xee1cea7665ba7aa97e982edeaecb26b59a04d035",
    symbol: "ORAO",
    decimals: 18,
  },
  {
    address: "0x0f3a12b78fee11ee088e454a0547bdbc5a253a6d",
    symbol: "MERL",
    decimals: 18,
  },
  {
    address: "0xe95076d9fe7155c17b455ac49497e78912c4ab65",
    symbol: "DOLLAR",
    decimals: 6,
  },
  {
    address: "0xe55d97a97ae6a17706ee281486e98a84095d8aaf",
    symbol: "AIPAD",
    decimals: 18,
  },
  {
    address: "0x7b4328c127b85369d9f82ca0503b000d09cf9180",
    symbol: "DC",
    decimals: 18,
  },
  {
    address: "0x05fb86775fd5c16290f1e838f5caaa7342bd9a63",
    symbol: "HAI",
    decimals: 8,
  },
  {
    address: "0xa771b49064da011df051052848477f18dba1d2ac",
    symbol: "HNS",
    decimals: 6,
  },
  {
    address: "0x438e48ed4ce6beecf503d43b9dbd3c30d516e7fd",
    symbol: "UWON",
    decimals: 18,
  },
  {
    address: "0x388d819724dd6d71760a38f00dc01d310d879771",
    symbol: "JM",
    decimals: 8,
  },
  {
    address: "0x4b19c70da4c6fa4baa0660825e889d2f7eabc279",
    symbol: "GMM",
    decimals: 18,
  },
  {
    address: "0x66d79b8f60ec93bfce0b56f5ac14a2714e509a99",
    symbol: "MAPO",
    decimals: 18,
  },
  {
    address: "0xfe80d611c6403f70e5b1b9b722d2b3510b740b2b",
    symbol: "EQB",
    decimals: 18,
  },
  {
    address: "0x71b3a0566f4bf80331d115d8026a7022bf670cce",
    symbol: "DD",
    decimals: 6,
  },
  {
    address: "0x3b9b5ad79cbb7649143decd5afc749a75f8e6c7f",
    symbol: "GORA",
    decimals: 18,
  },
  {
    address: "0x7135b32e9903bdb4e19a8b1d22fc2038964b8451",
    symbol: "EARLY",
    decimals: 18,
  },
  {
    address: "0x8bcd06492416a749c9369009b3429861b7f27f6e",
    symbol: "BLKC",
    decimals: 8,
  },
  {
    address: "0xae12c5930881c53715b369cec7606b70d8eb229f",
    symbol: "C98",
    decimals: 18,
  },
  {
    address: "0x396ec402b42066864c406d1ac3bc86b575003ed8",
    symbol: "BUY",
    decimals: 2,
  },
  {
    address: "0x180dae91d6d56235453a892d2e56a3e40ba81df8",
    symbol: "DOJO",
    decimals: 18,
  },
  {
    address: "0x8287c7b963b405b7b8d467db9d79eec40625b13a",
    symbol: "SWINGBY",
    decimals: 18,
  },
  {
    address: "0x1d7ca62f6af49ec66f6680b8606e634e55ef22c1",
    symbol: "START",
    decimals: 18,
  },
  {
    address: "0x31f69de127c8a0ff10819c0955490a4ae46fcc2a",
    symbol: "GBYTE",
    decimals: 18,
  },
  {
    address: "0x8848812bd31aeee33313c10a840ffc3169078c5b",
    symbol: "CRFI",
    decimals: 18,
  },
  {
    address: "0x667fd83e24ca1d935d36717d305d54fa0cac991c",
    symbol: "AGS",
    decimals: 18,
  },
  {
    address: "0x9393fdc77090f31c7db989390d43f454b1a6e7f3",
    symbol: "DEC",
    decimals: 3,
  },
  {
    address: "0x8861cff2366c1128fd699b68304ad99a0764ef9a",
    symbol: "CYC",
    decimals: 18,
  },
  {
    address: "0xdb726152680ece3c9291f1016f1d36f3995f6941",
    symbol: "MEDIA",
    decimals: 6,
  },
  {
    address: "0x34965f73cfa05bf8d8af37cb4af64fa950605ea8",
    symbol: "COW",
    decimals: 18,
  },
  {
    address: "0x9ac07635ddbde5db18648c360defb00f5f22537e",
    symbol: "MOCA",
    decimals: 18,
  },
  {
    address: "0x7645ddfeeceda57e41f92679c4acd83c56a81d14",
    symbol: "FLUX",
    decimals: 18,
  },
  {
    address: "0xf99d58e463a2e07e5692127302c20a191861b4d6",
    symbol: "ANY",
    decimals: 18,
  },
  {
    address: "0x9fda7ceec4c18008096c2fe2b85f05dc300f94d0",
    symbol: "GAJ",
    decimals: 18,
  },
  {
    address: "0xe0b0c16038845bed3fcf70304d3e167df81ce225",
    symbol: "CSWAP",
    decimals: 18,
  },
  {
    address: "0x939b462ee3311f8926c047d2b576c389092b1649",
    symbol: "DAPP",
    decimals: 4,
  },
  {
    address: "0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d",
    symbol: "FIS",
    decimals: 18,
  },
  {
    address: "0x154e35c2b0024b3e079c5c5e4fc31c979c189ccb",
    symbol: "RAID",
    decimals: 18,
  },
  {
    address: "0x9d79d5b61de59d882ce90125b18f74af650acb93",
    symbol: "NSBT",
    decimals: 6,
  },
  {
    address: "0x3405a1bd46b85c5c029483fbecf2f3e611026e45",
    symbol: "WOW",
    decimals: 18,
  },
  {
    address: "0x12bb890508c125661e03b09ec06e404bc9289040",
    symbol: "RACA",
    decimals: 18,
  },
  {
    address: "0xca1262e77fb25c0a4112cfc9bad3ff54f617f2e6",
    symbol: "WJXN",
    decimals: 0,
  },
  {
    address: "0x968f6f898a6df937fc1859b323ac2f14643e3fed",
    symbol: "NWC",
    decimals: 18,
  },
  {
    address: "0xcbb8f1bda10b9696c57e13bc128fe674769dcec0",
    symbol: "MOR",
    decimals: 18,
  },
  {
    address: "0xf6719e1a8fcbb1b9c290019e37e004966a8916c9",
    symbol: "PGEN",
    decimals: 18,
  },
  {
    address: "0x65e6b60ea01668634d68d0513fe814679f925bad",
    symbol: "PIXEL",
    decimals: 18,
  },
  {
    address: "0x081131434f93063751813c619ecca9c4dc7862a3",
    symbol: "DAR",
    decimals: 6,
  },
  {
    address: "0xac57de9c1a09fec648e93eb98875b212db0d460b",
    symbol: "BABYDOGE",
    decimals: 9,
  },
  {
    address: "0x55af5865807b196bd0197e0902746f31fbccfa58",
    symbol: "BOO",
    decimals: 18,
  },
  {
    address: "0x9fb83c0635de2e815fd1c21b3a292277540c2e8d",
    symbol: "FEVR",
    decimals: 18,
  },
  {
    address: "0x0343131c0257ac21ea5a8dc83841f071efd9285c",
    symbol: "ZENITH",
    decimals: 18,
  },
  {
    address: "0xd8c1232fcd219286e341271385bd70601503b3d7",
    symbol: "DOGIRA",
    decimals: 9,
  },
  {
    address: "0x288741b45ad4042f7b124e38b53cec5e9cca0376",
    symbol: "KOLZ",
    decimals: 18,
  },
  {
    address: "0xb6dd77fd132dcaa10f1858734e838a0fa7431580",
    symbol: "FCP",
    decimals: 18,
  },
  {
    address: "0x93e32efafd24973d45f363a76d73ccb9edf59986",
    symbol: "BTL",
    decimals: 6,
  },
  {
    address: "0x42baf1f659d765c65ade5bb7e08eb2c680360d9d",
    symbol: "COPI",
    decimals: 18,
  },
  {
    address: "0xe1590a6fa0cff9c960181cb77d8a873601772f64",
    symbol: "WSB",
    decimals: 18,
  },
  {
    address: "0xdf09a216fac5adc3e640db418c0b956076509503",
    symbol: "PKN",
    decimals: 18,
  },
  {
    address: "0x45c2f8c9b4c0bdc76200448cc26c48ab6ffef83f",
    symbol: "DOMI",
    decimals: 18,
  },
  {
    address: "0xa87135285ae208e22068acdbff64b11ec73eaa5a",
    symbol: "LUNR",
    decimals: 4,
  },
  {
    address: "0x965b85d4674f64422c4898c8f8083187f02b32c0",
    symbol: "SFIL",
    decimals: 8,
  },
  {
    address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
    symbol: "USTC",
    decimals: 18,
  },
  {
    address: "0xbd100d061e120b2c67a24453cf6368e63f1be056",
    symbol: "IDYP",
    decimals: 18,
  },
  {
    address: "0x77a1f4e744d810239f465043e35d067ca33de259",
    symbol: "VST",
    decimals: 18,
  },
  {
    address: "0xb51b97dd5569fab69495316b5a065cccff4b829d",
    symbol: "ASTRAFER",
    decimals: 18,
  },
  {
    address: "0xd4b92b1700615afae333b9d16d28eb55e8e689b8",
    symbol: "CATS",
    decimals: 9,
  },
  {
    address: "0xbd31ea8212119f94a611fa969881cba3ea06fa3d",
    symbol: "LUNC",
    decimals: 6,
  },
  {
    address: "0xa831a4e181f25d3b35949e582ff27cc44e703f37",
    symbol: "ALEX",
    decimals: 18,
  },
  {
    address: "0x7118057ff0f4fd0994fb9d2d94de8231d5cca79e",
    symbol: "SOURCE",
    decimals: 18,
  },
  {
    address: "0x9ab70e92319f0b9127df78868fd3655fb9f1e322",
    symbol: "WWY",
    decimals: 18,
  },
  {
    address: "0x25b24b3c47918b7962b3e49c4f468367f73cc0e0",
    symbol: "AXL",
    decimals: 18,
  },
  {
    address: "0xa693b19d2931d498c5b318df961919bb4aee87a5",
    symbol: "UST",
    decimals: 6,
  },
  {
    address: "0x7c9f4c87d911613fe9ca58b579f737911aad2d43",
    symbol: "MATICPO",
    decimals: 18,
  },
  {
    address: "0x845e2e8b42dced7dedcdba9bde32c9e338224f97",
    symbol: "SATOZ",
    decimals: 8,
  },
  {
    address: "0x85f138bfee4ef8e540890cfb48f620571d67eda3",
    symbol: "AVAX",
    decimals: 18,
  },
  {
    address: "0x2f75113b13d136f861d212fa9b572f2c79ac81c4",
    symbol: "EKTA",
    decimals: 18,
  },
  {
    address: "0xc669928185dbce49d2230cc9b0979be6dc797957",
    symbol: "BTT",
    decimals: 18,
  },
  {
    address: "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25",
    symbol: "SLP",
    decimals: 0,
  },
  {
    address: "0xc4bb7277a74678f053259cb1f96140347efbfd46",
    symbol: "COC",
    decimals: 18,
  },
  {
    address: "0x193f4a4a6ea24102f49b931deeeb931f6e32405d",
    symbol: "TLOS",
    decimals: 18,
  },
  {
    address: "0x9b17baadf0f21f03e35249e0e59723f34994f806",
    symbol: "GEM",
    decimals: 18,
  },
  {
    address: "0xee9801669c6138e84bd50deb500827b776777d28",
    symbol: "O3",
    decimals: 18,
  },
  {
    address: "0x7825e833d495f3d1c28872415a4aee339d26ac88",
    symbol: "WTLOS",
    decimals: 18,
  },
  {
    address: "0x2217e5921b7edfb4bb193a6228459974010d2198",
    symbol: "QMALL",
    decimals: 18,
  },
  {
    address: "0xd3c51de3e6dd9b53d7f37699afb3ee3bf9b9b3f4",
    symbol: "MCONTENT",
    decimals: 6,
  },
  {
    address: "0x1f36fb2d91d9951cf58ae4c1956c0b77e224f1e9",
    symbol: "VCG",
    decimals: 18,
  },
  {
    address: "0xa735a3af76cc30791c61c10d585833829d36cbe0",
    symbol: "IMGNAI",
    decimals: 9,
  },
  {
    address: "0x20d60c6eb195868d4643f2c9b0809e4de6cc003d",
    symbol: "PLY",
    decimals: 6,
  },
  {
    address: "0x809e130e10e787139c54e1d12d3d1971b7a675bf",
    symbol: "MTD",
    decimals: 18,
  },
  {
    address: "0x1ab43204a195a0fd37edec621482afd3792ef90b",
    symbol: "PLY",
    decimals: 18,
  },
  {
    address: "0x19193f450086d0442157b852081976d41657ad56",
    symbol: "NNT",
    decimals: 18,
  },
  {
    address: "0xc17c30e98541188614df99239cabd40280810ca3",
    symbol: "RISE",
    decimals: 18,
  },
  {
    address: "0x3d7975eccfc61a2102b08925cbba0a4d4dbb6555",
    symbol: "USDD",
    decimals: 18,
  },
  {
    address: "0x198d14f2ad9ce69e76ea330b374de4957c3f850a",
    symbol: "NFT",
    decimals: 6,
  },
  {
    address: "0x6325cf7b3b645de6355e37e0e88f6ff0030f9e97",
    symbol: "CROW",
    decimals: 18,
  },
  {
    address: "0x446f2a8a39cc730ef378be759a3c57f1a3fe824c",
    symbol: "NBT",
    decimals: 18,
  },
  {
    address: "0x5d7bb43885988eb8bfb9d854077e7ccfd6bf8c50",
    symbol: "ADBED",
    decimals: 18,
  },
  {
    address: "0xbc0899e527007f1b8ced694508fcb7a2b9a46f53",
    symbol: "BSKT",
    decimals: 5,
  },
  {
    address: "0x420a24c9c65bd44c48bfb1cc8d6cd1ea8b1ac840",
    symbol: "JMPT",
    decimals: 18,
  },
  {
    address: "0x4550003152f12014558e5ce025707e4dd841100f",
    symbol: "KZEN",
    decimals: 18,
  },
  {
    address: "0xf6e06b54855eff198a2d9a8686113665499a6134",
    symbol: "CELT",
    decimals: 18,
  },
  {
    address: "0x5052fa4a2a147eaaa4c0242e9cc54a10a4f42070",
    symbol: "HANEP",
    decimals: 18,
  },
  {
    address: "0x40a9a694197a0b4b92f2aad48da6bc1b6ff194e9",
    symbol: "LFG",
    decimals: 18,
  },
  {
    address: "0xbd8fdda057de7e0162b7a386bec253844b5e07a5",
    symbol: "JARVIS",
    decimals: 18,
  },
  {
    address: "0x345887cdb19e12833ed376bbf8b8b38269f5f5c8",
    symbol: "CSIX",
    decimals: 18,
  },
  {
    address: "0x06677dc4fe12d3ba3c7ccfd0df8cd45e4d4095bf",
    symbol: "WQT",
    decimals: 18,
  },
  {
    address: "0xbafdabadcf19d0cfbbe0ab9c69cf050d86ff888c",
    symbol: "ZEDXION",
    decimals: 18,
  },
  {
    address: "0x70bc0dc6414eb8974bc70685f798838a87d8cce4",
    symbol: "CHRP",
    decimals: 18,
  },
  {
    address: "0xbb63a9b64a80e9338b8ea298c51765e57c4f159c",
    symbol: "PICA",
    decimals: 12,
  },
  {
    address: "0xcf67815cce72e682eb4429eca46843bed81ca739",
    symbol: "G3",
    decimals: 18,
  },
  {
    address: "0xb92ba0a6a843379499770de82aa936d6ba0fd8ca",
    symbol: "YOU",
    decimals: 18,
  },
  {
    address: "0xd3c325848d7c6e29b574cb0789998b2ff901f17e",
    symbol: "1ART",
    decimals: 18,
  },
  {
    address: "0xaef420fd77477d9dc8b46d704d44dd09d6c27866",
    symbol: "CGV",
    decimals: 6,
  },
  {
    address: "0x50327c6c5a14dcade707abad2e27eb517df87ab5",
    symbol: "WTRX",
    decimals: 6,
  },
  {
    address: "0x983d8edb44ca96c0595f3c456ebdd47855911f34",
    symbol: "WAR",
    decimals: 18,
  },
  {
    address: "0x967fb0d760ed3ce53afe2f0a071674cccae73550",
    symbol: "XETA",
    decimals: 18,
  },
  {
    address: "0xbdc7c08592ee4aa51d06c27ee23d5087d65adbcd",
    symbol: "USDL",
    decimals: 18,
  },
  {
    address: "0xdd13dedecebda566322195bc4451d672a148752c",
    symbol: "PRIMAL",
    decimals: 18,
  },
  {
    address: "0x560363bda52bc6a44ca6c8c9b4a5fadbda32fa60",
    symbol: "SFUND",
    decimals: 18,
  },
  {
    address: "0xc7026a20a640bc71b9074f7aed52a00cd9147091",
    symbol: "TGR",
    decimals: 18,
  },
  {
    address: "0x69c2fcae7e30b429166bd616a322e32bec036bcf",
    symbol: "MURATIAI",
    decimals: 18,
  },
  {
    address: "0xae788f80f2756a86aa2f410c651f2af83639b95b",
    symbol: "MV",
    decimals: 18,
  },
  {
    address: "0x1416946162b1c2c871a73b07e932d2fb6c932069",
    symbol: "NRG",
    decimals: 18,
  },
  {
    address: "0xb990d93c308a31c737aa91839e8ba8eaf4017d7a",
    symbol: "PIRATE",
    decimals: 8,
  },
  {
    address: "0x9b25889c493ae6df34ceef1ecb10d77c1ba73318",
    symbol: "MEAN",
    decimals: 6,
  },
  {
    address: "0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a",
    symbol: "MAGIC",
    decimals: 18,
  },
  {
    address: "0x83d6c8c06ac276465e4c92e7ac8c23740f435140",
    symbol: "HMX",
    decimals: 18,
  },
  {
    address: "0x5b52bfb8062ce664d74bbcd4cd6dc7df53fd7233",
    symbol: "ZENIQ",
    decimals: 18,
  },
  {
    address: "0xe636f94a71ec52cc61ef21787ae351ad832347b7",
    symbol: "CREO",
    decimals: 18,
  },
  {
    address: "0x378e97d19cf319eb311748ff4d9971dc349c8ad4",
    symbol: "ASCN",
    decimals: 18,
  },
  {
    address: "0x9348e94a447bf8b2ec11f374d3f055fd47d936df",
    symbol: "FLAG",
    decimals: 18,
  },
  {
    address: "0xc3589f56b6869824804a5ea29f2c9886af1b0fce",
    symbol: "HNY",
    decimals: 18,
  },
  {
    address: "0xe2dca969624795985f2f083bcd0b674337ba130a",
    symbol: "SKR",
    decimals: 18,
  },
  {
    address: "0x1901f826dfcbfd9d3138936932366b3493a50893",
    symbol: "SPHYNX",
    decimals: 18,
  },
  {
    address: "0x62760e76dce6b500349ec5f6119228d047913350",
    symbol: "TWIF",
    decimals: 9,
  },
  {
    address: "0x77776b40c3d75cb07ce54dea4b2fd1d07f865222",
    symbol: "BBUSD",
    decimals: 18,
  },
  {
    address: "0xb533687ef77459093368c43e95f8df1c2b5a1f7a",
    symbol: "ASG",
    decimals: 18,
  },
  {
    address: "0xdb0170e2d0c1cc1b2e7a90313d9b9afa4f250289",
    symbol: "ADAPAD",
    decimals: 18,
  },
  {
    address: "0xc2708a3a4ba7f64bddc1a49f92f941bc77cad23a",
    symbol: "EGG",
    decimals: 18,
  },
  {
    address: "0xb8e3bb633f7276cc17735d86154e0ad5ec9928c0",
    symbol: "VLXPAD",
    decimals: 18,
  },
  {
    address: "0x15fa5d3dbd11a831b72b92c1705bc9f801e233cb",
    symbol: "PXP",
    decimals: 18,
  },
  {
    address: "0xf5e11df1ebcf78b6b6d26e04ff19cd786a1e81dc",
    symbol: "BBTC",
    decimals: 18,
  },
  {
    address: "0xe35009059cb55ded065027e9832a2c564aff7512",
    symbol: "SCAI",
    decimals: 18,
  },
  {
    address: "0xd373576a9e738f37dc6882328358ff69c4caf4c6",
    symbol: "ZAM",
    decimals: 18,
  },
  {
    address: "0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4",
    symbol: "NEAR",
    decimals: 24,
  },
  {
    address: "0x798bcb35d2d48c8ce7ef8171860b8d53a98b361d",
    symbol: "MPDAO",
    decimals: 6,
  },
  {
    address: "0xb34e17562e4f1f63a2d4cf684ed8bc124e519771",
    symbol: "NLS",
    decimals: 6,
  },
  {
    address: "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32",
    symbol: "SFRAX",
    decimals: 18,
  },
  {
    address: "0xd2ba23de8a19316a638dc1e7a9adda1d74233368",
    symbol: "QUICK",
    decimals: 18,
  },
  {
    address: "0x614d7f40701132e25fe6fc17801fbd34212d2eda",
    symbol: "BLAST",
    decimals: 9,
  },
  {
    address: "0x8fc8f8269ebca376d046ce292dc7eac40c8d358a",
    symbol: "DFI",
    decimals: 8,
  },
  {
    address: "0x7a5d3a9dcd33cb8d527f7b5f96eb4fef43d55636",
    symbol: "RADIO",
    decimals: 18,
  },
  {
    address: "0x614577036f0a024dbc1c88ba616b394dd65d105a",
    symbol: "GNUS",
    decimals: 18,
  },
  {
    address: "0x26dcfbfa8bc267b250432c01c982eaf81cc5480c",
    symbol: "ANKRMATIC",
    decimals: 18,
  },
  {
    address: "0x9e6b19874e97fe8e8cad77f2c0ab5e7a693e5dbf",
    symbol: "ISHND",
    decimals: 18,
  },
  {
    address: "0x40fed5691e547885cabd7a2990de719dcc8497fc",
    symbol: "SHA",
    decimals: 18,
  },
  {
    address: "0x3f67093dffd4f0af4f2918703c92b60acb7ad78b",
    symbol: "21BTC",
    decimals: 8,
  },
  {
    address: "0xbeef01060047522408756e0000a90ce195a70000",
    symbol: "APTR",
    decimals: 6,
  },
  {
    address: "0x57d579f483854c62fef850b8a5332b0d8424b7e2",
    symbol: "OPENX",
    decimals: 18,
  },
  {
    address: "0x4c3a8eceb656ec63eae80a4ebd565e4887db6160",
    symbol: "SOKU",
    decimals: 18,
  },
  {
    address: "0x88536c9b2c4701b8db824e6a16829d5b5eb84440",
    symbol: "USV",
    decimals: 9,
  },
  {
    address: "0xeeeeeb57642040be42185f49c52f7e9b38f8eeee",
    symbol: "ELK",
    decimals: 18,
  },
  {
    address: "0x2e7b0d4f9b2eaf782ed3d160e3a0a4b1a7930ada",
    symbol: "CERES",
    decimals: 18,
  },
  {
    address: "0xc0041ef357b183448b235a8ea73ce4e4ec8c265f",
    symbol: "COOKIE",
    decimals: 18,
  },
  {
    address: "0xc72633f995e98ac3bb8a89e6a9c4af335c3d6e44",
    symbol: "OSEA",
    decimals: 18,
  },
  {
    address: "0x2b867efd2de4ad2b583ca0cb3df9c4040ef4d329",
    symbol: "LBLOCK",
    decimals: 9,
  },
  {
    address: "0xe3c408bd53c31c085a1746af401a4042954ff740",
    symbol: "GMT",
    decimals: 8,
  },
  {
    address: "0x2c4f1df9c7de0c59778936c9b145ff56813f3295",
    symbol: "MNTL",
    decimals: 6,
  },
  {
    address: "0x57b59f981730c6257df57cf6f0d98283749a9eeb",
    symbol: "BUILD",
    decimals: 18,
  },
  {
    address: "0x839e71613f9aa06e5701cf6de63e303616b0dde3",
    symbol: "VVS",
    decimals: 18,
  },
  {
    address: "0xa80505c408c4defd9522981cd77e026f5a49fe63",
    symbol: "NEUY",
    decimals: 18,
  },
  {
    address: "0x256d1fce1b1221e8398f65f9b36033ce50b2d497",
    symbol: "WALV",
    decimals: 18,
  },
  {
    address: "0xc285b7e09a4584d027e5bc36571785b515898246",
    symbol: "CUSD",
    decimals: 18,
  },
  {
    address: "0x2f32b39023da7d6a6486a85d12b346eb9c2a0d19",
    symbol: "FER",
    decimals: 18,
  },
  {
    address: "0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b",
    symbol: "BOB",
    decimals: 18,
  },
  {
    address: "0x3b79a28264fc52c7b4cea90558aa0b162f7faf57",
    symbol: "WMEMO",
    decimals: 18,
  },
  {
    address: "0xe4a6f23fb9e00fca037aa0ea0a6954de0a6c53bf",
    symbol: "TXAU",
    decimals: 18,
  },
  {
    address: "0x6b431b8a964bfcf28191b07c91189ff4403957d0",
    symbol: "CORGIAI",
    decimals: 18,
  },
  {
    address: "0x61ec85ab89377db65762e234c946b5c25a56e99e",
    symbol: "HTX",
    decimals: 18,
  },
  {
    address: "0x40a32606a4ce9b4f350421642ebf65c052d5389b",
    symbol: "UP",
    decimals: 18,
  },
  {
    address: "0x1db06f39c14d813d7b1ccb275a93f5b052de1cac",
    symbol: "XAV",
    decimals: 18,
  },
  {
    address: "0xac87d4cbb82ce7f4bcf31dbdc0024306cfd3ec5a",
    symbol: "KEI",
    decimals: 18,
  },
  {
    address: "0xd7b675cd5c84a13d1d0f84509345530f6421b57c",
    symbol: "OOOI",
    decimals: 18,
  },
  {
    address: "0x0f76d32cdccdcbd602a55af23eaf58fd1ee17245",
    symbol: "BERNA",
    decimals: 18,
  },
  {
    address: "0xce108380c39e4fe9dace9d5597e048bcc5ef743b",
    symbol: "BLUES",
    decimals: 18,
  },
  {
    address: "0x68449870eea84453044bd430822827e21fd8f101",
    symbol: "ZAI",
    decimals: 18,
  },
  {
    address: "0xd8c0b13b551718b808fc97ead59499d5ef862775",
    symbol: "MUSIC",
    decimals: 8,
  },
  {
    address: "0x9482c407d32204462d8cbbc0755e96c39b79878e",
    symbol: "ARC",
    decimals: 18,
  },
  {
    address: "0xb0ffa8000886e57f86dd5264b9582b2ad87b2b91",
    symbol: "W",
    decimals: 18,
  },
  {
    address: "0xc36983d3d9d379ddfb306dfb919099cb6730e355",
    symbol: "COLLE",
    decimals: 18,
  },
  {
    address: "0xdda9ff241c7160be8295ef9eca2e782361467666",
    symbol: "BONZAI",
    decimals: 18,
  },
  {
    address: "0x1155db64b59265f57533bc0f9ae012fffd34eb7f",
    symbol: "YAKU",
    decimals: 9,
  },
  {
    address: "0x19373ecbb4b8cc2253d70f2a246fa299303227ba",
    symbol: "OCH",
    decimals: 18,
  },
  {
    address: "0xb299751b088336e165da313c33e3195b8c6663a6",
    symbol: "STAR",
    decimals: 18,
  },
  {
    address: "0x0000000000300dd8b0230efcfef136ecdf6abcde",
    symbol: "DGNX",
    decimals: 18,
  },
  {
    address: "0x92cc36d66e9d739d50673d1f27929a371fb83a67",
    symbol: "WAGMI",
    decimals: 18,
  },
  {
    address: "0xf1264873436a0771e440e2b28072fafcc5eebd01",
    symbol: "KNS",
    decimals: 18,
  },
  {
    address: "0x174c47d6a4e548ed2b7d369dc0ffb2e60a6ac0f8",
    symbol: "AMU",
    decimals: 9,
  },
  {
    address: "0x2c2d8a078b33bf7782a16acce2c5ba6653a90d5f",
    symbol: "L3USD",
    decimals: 18,
  },
  {
    address: "0x872952d3c1caf944852c5adda65633f1ef218a26",
    symbol: "LQDX",
    decimals: 18,
  },
  {
    address: "0x53aff1d59ea64f7f836670e33e99a0443f0ef25c",
    symbol: "AVGOD",
    decimals: 18,
  },
  {
    address: "0xd3cc9d8f3689b83c91b7b59cab4946b063eb894a",
    symbol: "XVS",
    decimals: 18,
  },
  {
    address: "0x95987b0cdc7f65d989a30b3b7132a38388c548eb",
    symbol: "PURSE",
    decimals: 18,
  },
  {
    address: "0x79f05c263055ba20ee0e814acd117c20caa10e0c",
    symbol: "ICE",
    decimals: 18,
  },
  {
    address: "0xd3ac016b1b8c80eeadde4d186a9138c9324e4189",
    symbol: "OK",
    decimals: 18,
  },
  {
    address: "0xbbcb0356bb9e6b3faa5cbf9e5f36185d53403ac9",
    symbol: "BCOIN",
    decimals: 18,
  },
  {
    address: "0x2cb5d9fd89d48c516f11904117c57e3934f39524",
    symbol: "CUTE",
    decimals: 18,
  },
  {
    address: "0x75cb71325a44fb102a742626b723054acb7e1394",
    symbol: "ANI",
    decimals: 18,
  },
  {
    address: "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034",
    symbol: "WBAN",
    decimals: 18,
  },
  {
    address: "0xbb6cf73a00f480d0951ba979a7606857cdde626b",
    symbol: "ARIX",
    decimals: 18,
  },
  {
    address: "0x830eb1204380e9c44434db8700257025358707c6",
    symbol: "GOB",
    decimals: 18,
  },
  {
    address: "0x0a77ef9bf662d62fbf9ba4cf861eaa83f9cc4fec",
    symbol: "XWG",
    decimals: 18,
  },
  {
    address: "0x137ddb47ee24eaa998a535ab00378d6bfa84f893",
    symbol: "RDNT",
    decimals: 18,
  },
  {
    address: "0xaf6a1125d4cc55a4110dc63cd2ff6e005afb8676",
    symbol: "PUNK",
    decimals: 18,
  },
  {
    address: "0x4563554284aa7148d6e6d0351519e954ba3b6e02",
    symbol: "RWA",
    decimals: 18,
  },
  {
    address: "0xa10bf0aba0c7953f279c4cb8192d3b5de5ea56e8",
    symbol: "TAROT",
    decimals: 18,
  },
  {
    address: "0xf97e2a78f1f3d1fd438ff7cc3bb7de01e5945b83",
    symbol: "RIDE",
    decimals: 18,
  },
  {
    address: "0x9d3d07439069c9bbc8d626397cf98cb343ac0a72",
    symbol: "TMNG",
    decimals: 18,
  },
  {
    address: "0x2f11eeee0bf21e7661a22dbbbb9068f4ad191b86",
    symbol: "BNIU",
    decimals: 18,
  },
  {
    address: "0x9fd22a17b4a96da3f83797d122172c450381fb88",
    symbol: "JEFE",
    decimals: 9,
  },
  {
    address: "0xa48f322f8b3edff967629af79e027628b9dd1298",
    symbol: "DUSD",
    decimals: 18,
  },
  {
    address: "0x59f4f336bf3d0c49dbfba4a74ebd2a6ace40539a",
    symbol: "CAT",
    decimals: 9,
  },
  {
    address: "0x5e7f20e72c21f6d0bf0a2814fd4164176401cf8e",
    symbol: "DEO",
    decimals: 18,
  },
  {
    address: "0x20b3b07e9c0e37815e2892ab09496559f57c3603",
    symbol: "USDV",
    decimals: 18,
  },
  {
    address: "0x9bd69bc59118ce0fbce9b03551a765a779bd25cf",
    symbol: "ZKE",
    decimals: 18,
  },
  {
    address: "0x31b6100f5f4466e6daeb1edb2f2ce6e548cf8938",
    symbol: "PUFF",
    decimals: 18,
  },
  {
    address: "0x2cad08360009226261ab4d32684aacdbbec3f8da",
    symbol: "NLYD",
    decimals: 18,
  },
  {
    address: "0xd0f48caf8fdb1e7b1fb8b08b914e0b44ed0aade0",
    symbol: "GBTCD",
    decimals: 18,
  },
  {
    address: "0xd2a64bb1776f02e6b2b5503fe6a8ca6bf1f46d07",
    symbol: "WOODD",
    decimals: 18,
  },
  {
    address: "0x0ecb3513ebf1e62be765452900608aa957dbd13d",
    symbol: "SLXD",
    decimals: 18,
  },
] as const;
