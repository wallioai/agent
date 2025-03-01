"use server";

import { getApi } from "./api.action";
import { apiRoutes } from "@/lib/routes";
import { Token } from "@/db/repos/token.repo";
import { Network } from "@/db/repos/network.repo";

export async function listAllNetworks() {
  const response = await getApi<Network[]>(apiRoutes.server.network.list);
  return response;
}

export async function listTokensByChain(chainId: number) {
  const response = await getApi<Token[]>(
    apiRoutes.server.token.byChainId(chainId),
  );
  console.log(response.data.length);
  return response;
}
