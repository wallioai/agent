"use server";

import networkService from "@/db/mongodb/network/network.service";
import tokenService from "@/db/mongodb/token/token.service";
import { verifySession } from "@/lib/dal";

export async function listAllNetworks() {
  await verifySession();
  const networks = await networkService.findAll();
  return networks.map((n) => n.toJSON());
}

export async function listTokensByChain(chainId: number) {
  await verifySession();
  return await tokenService.findByChain(chainId);
}
