import { RPC_URL } from "@/config/env.config";
import { NextResponse } from "next/server";

const rpcUrl = RPC_URL;

function apiResponse(code: number, message: string, data?: any) {
  return NextResponse.json(data ?? {}, {
    status: code,
    statusText: message,
  });
}
export async function POST(req: Request) {
  const body = await req.json();

  console.log(rpcUrl);
  if (rpcUrl === undefined) {
    return apiResponse(401, "You need a RPC URL!");
  }

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
