"use server";

import { INetwork } from "@/db/mongodb/network/network.model";
import { postApi, getApi } from "./api.action";
import { verifySession } from "@/lib/dal";
import { apiRoutes } from "@/lib/routes";
import { IToken } from "@/db/mongodb/token/token.model";

export async function listAllNetworks() {
  const response = await getApi<INetwork[]>(apiRoutes.server.network.list);
  return response;
}

export async function listTokensByChain(chainId: number) {
  const response = await getApi<IToken[]>(
    apiRoutes.server.token.byChainId(chainId),
  );
  console.log(response.data.length);
  return response;
}
