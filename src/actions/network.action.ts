"use server";

import { getApi } from "./api.action";
import { apiRoutes } from "@/lib/routes";
import { Token } from "@/db/repos/token.repo";
import { Network } from "@/db/repos/network.repo";
import { CoingeckoPlatformId } from "@/agent-actions/coingecko/constants";
import axios from "axios";
import { COINGECKO_API } from "@/config/env.config";

export async function listAllNetworks() {
  const response = await getApi<Network[]>(apiRoutes.server.network.list);
  return response;
}

export async function listTokensByChain(chainId: number) {
  const response = await getApi<Token[]>(
    apiRoutes.server.token.byChainId(chainId),
  );
  return response;
}

export async function fetchTokensData(nameId: string, address: string) {
  const coingeckoId = CoingeckoPlatformId[nameId];
  await axios.get(`${COINGECKO_API}/coins/${coingeckoId}/contract/${address}`);
}
