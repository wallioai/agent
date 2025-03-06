"use client";

import React, { useState, useRef } from "react";
import { Network } from "@/db/repos/network.repo";
import BridgeTokenSelector from "./BridgeTokenSelector";
import BridgeNetworkSelector from "./BridgeNetworkSelector";
import { Token } from "@/db/repos/token.repo";
import { cleanCurrencyInput, formatCurrency } from "@/lib/helpers";
import { Input } from "../ui/input";
import clsx from "clsx";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  network?: Network;
  token?: Token;
  tokens?: Token[];
  onSelectNetwork: (network: Network) => void;
  onSelectToken: (token: Token) => void;
  onAmountChange: (value: string) => void;
  amount: string;
  usdValue: string;
  balance?: string;
  showBalance?: boolean;
  isPreparing?: boolean;
};

function BridgeForm({
  onSelectNetwork,
  network,
  token,
  onSelectToken,
  tokens,
  showBalance = true,
  onAmountChange,
  usdValue,
  amount,
  isPreparing,
  balance,
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
      {isPreparing ? (
        <Skeleton className="mt-2 mb-1 h-7 w-9/12 rounded-full" />
      ) : (
        <Input
          inputMode="decimal"
          type="text"
          onChange={(e) =>
            cleanCurrencyInput(e.currentTarget.value, onAmountChange)
          }
          placeholder="0.00"
          className={
            "w-full border-0 px-0 pt-2 pb-1 text-2xl font-bold shadow-none focus-visible:ring-0 focus-visible:outline-0 md:text-2xl"
          }
          value={amount}
        />
      )}
      <div className="flex items-center justify-between">
        {isPreparing ? (
          <Skeleton className="h-[20px] w-[100px] rounded-full" />
        ) : (
          <p>US${usdValue == "" ? "0.00" : formatCurrency(usdValue)}</p>
        )}
        {showBalance && (
          <p className="text-xs">
            Balance {balance} {token?.symbol}
          </p>
        )}
      </div>
    </div>
  );
}

export default BridgeForm;
