"use client";

import React, { useState, useRef } from "react";
import { Network } from "@/db/repos/network.repo";
import BridgeTokenSelector from "./BridgeTokenSelector";
import BridgeNetworkSelector from "./BridgeNetworkSelector";
import { Token } from "@/db/repos/token.repo";

type Props = {
  network?: Network;
  token?: Token;
  tokens?: Token[];
  onSelectNetwork: (network: Network) => void;
  onSelectToken: (token: Token) => void;
  showBalance?: boolean;
};

function BridgeForm({
  onSelectNetwork,
  network,
  token,
  onSelectToken,
  tokens,
  showBalance = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="rounded-4xl bg-primary/5 p-4">
      <div ref={containerRef} className="flex justify-between gap-3">
        <BridgeNetworkSelector
          onSelectNetwork={onSelectNetwork}
          selectedNetwork={network}
          containerRef={containerRef}
        />
        <BridgeTokenSelector
          containerRef={containerRef}
          onSelectToken={onSelectToken}
          selectedToken={token}
          tokens={tokens}
          network={network}
        />
      </div>
      <input
        className="w-full py-1 text-2xl font-bold shadow-none ring-0 outline-0"
        placeholder="0"
      />
      <div className="flex items-center justify-between">
        <p>US$0.00</p>
        {showBalance && <p className="text-xs">Balance 0 {token?.symbol}</p>}
      </div>
    </div>
  );
}

export default BridgeForm;
