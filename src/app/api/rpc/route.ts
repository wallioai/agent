import { getChainInfo } from "@/actions/network.action";
import { NextRequest, NextResponse } from "next/server";

export const getRpc = (rpcUrls: string[]) => {
  return rpcUrls[Math.floor(Math.random() * rpcUrls.length)];
};

function apiResponse(code: number, message: string, data?: any) {
  return NextResponse.json(data ?? {}, {
    status: code,
    statusText: message,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const chainId = req?.nextUrl?.searchParams.get("chain");

  const network = await getChainInfo(chainId);
  if (!network.status || network?.data?.rpcUrls.length === 0) {
    return apiResponse(404, "Network not found");
  }

  const rpcUrl = getRpc(network.data.rpcUrls);
  return await fetch(rpcUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (res) => {
      const data = await res.json();
      return apiResponse(res.status, res.statusText, data);
    })
    .catch((error) => {
      console.error("Error:", error);
      return apiResponse(505, "Internal Server Error");
    });
}
