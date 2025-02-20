"use client";

import abi from "@/account/abis/account.abi";
import { publicClient } from "@/clients/viem.client";
import Chats from "@/components/chats/Chats";
import Index from "@/components/landing";
import Aside from "@/components/layouts/Aside";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { APP_CHAIN } from "@/config/env.config";
import { useAccount } from "@/context/account.context";
import { createWalletClient, encodeFunctionData, http, parseEther } from "viem";

export default function Dashboard() {
  const { account } = useAccount();
  const initSend = async () => {
    if (!account) return;
    // console.log(account.address);
    // const balance = await publicClient.getBalance({
    //   address: account?.address,
    // });

    // const code = await publicClient.getCode({
    //   address: account?.address,
    // });

    // const isDeployed = await account.isDeployed();
    // console.log(isDeployed);

    // const isSmartContract = code && code.length > 2;
    // console.log(isSmartContract);
    // console.log(balance.toString());

    const amount = parseEther("1");
    const data = "0x";
    const call = encodeFunctionData({
      abi: abi,
      functionName: "execute",
      args: ["0x691889F5944126906F0051c5ca087e975BADABb3", amount, data],
    });
    const walletClient = createWalletClient({
      account,
      chain: APP_CHAIN,
      transport: http("/api/rpc"),
    });
    await walletClient.sendTransaction({
      to: 
    })
  };
  return (
    <Container>
      <Section>
        <div className="relative h-svh overflow-y-scroll">
          <p>Home</p>
          <Button onClick={initSend}>Send</Button>
        </div>
      </Section>
      <Aside>
        <Chats />
      </Aside>
    </Container>
  );
}
