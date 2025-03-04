"use client";

import React, { useState, useEffect } from "react";
import { Token } from "@/db/repos/token.repo";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  CircleHelpIcon,
  SearchIcon,
} from "lucide-react";
import { DexaSWIcon } from "../icons/logo";
import { Input } from "../ui/input";
import { formatWalletAddress } from "@/lib/helpers";
import Link from "next/link";
import { zeroAddress } from "viem";
import { Network } from "@/db/repos/network.repo";

type Props = {
  network: Network;
  selectedToken?: Token;
  tokens?: Token[];
  onSelectToken: (n: Token) => void;
  containerRef: React.RefObject<HTMLDivElement>;
};

function BridgeTokenSelector({
  onSelectToken,
  containerRef,
  selectedToken,
  tokens,
  network,
}: Props) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (open && containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
  }, [open]);

  // Update width on window resize
  useEffect(() => {
    const handleResize = () => {
      if (open && containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex-1" asChild>
        <div className="flex h-12 flex-1 cursor-pointer items-center justify-between rounded-3xl bg-primary/10 px-3">
          <div className="flex items-center gap-2">
            <div>
              {selectedToken ? (
                <DexaSWIcon
                  src={selectedToken?.icon}
                  className="size-6 rounded-full"
                />
              ) : (
                <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
                  <CircleHelpIcon size={16} />
                </div>
              )}
            </div>
            <div className="">
              <p className="font-medium">{selectedToken?.symbol ?? "Select"}</p>
              <p className="-mt-1 text-xs text-foreground/70">
                {selectedToken?.name ?? "Token"}
              </p>
            </div>
          </div>
          <ChevronDownIcon size={18} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align={"end"}
        style={{
          width: width > 0 ? width : "auto",
        }}
        side="bottom"
        className="left-0 scrollbar-hide h-full max-h-96 overflow-hidden p-0"
      >
        <div className="grid grid-cols-1 gap-4 bg-primary/5 p-4">
          <div className="relative flex w-full items-center rounded-md border ring-4 ring-ring/10 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1">
            <Input
              placeholder="Search by name or paste address"
              className="w-full rounded-full border-0 font-medium shadow-none focus-visible:ring-0 focus-visible:outline-0"
            />
            <div className="px-2">
              <SearchIcon className="text-foreground/60" size={20} />
            </div>
          </div>
          <div className="scrollbar-hide grid max-h-72 grid-cols-1 gap-1 overflow-scroll">
            {tokens?.map((t) => (
              <div
                onClick={() => {
                  onSelectToken(t);
                  setOpen(false);
                }}
                key={`${network?.chainId}-${t.address}`}
                className="flex cursor-pointer items-center gap-2"
              >
                <DexaSWIcon src={t.icon} className="size-7 rounded-full" />
                <div className="flex flex-1 items-center justify-between">
                  <div className="w-[12rem] flex-1 overflow-hidden">
                    <p className="truncate font-medium">{t.name}</p>
                    <div className="-mt-1 flex gap-1 text-sm text-foreground/60">
                      <p className="font-medium">{t.symbol}</p>
                      {t.address != zeroAddress && (
                        <Link
                          href=""
                          className="flex items-center truncate hover:text-primary"
                        >
                          <span>{formatWalletAddress(t.address)}</span>
                          <ArrowUpRightIcon size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div>
                    <p>0.0</p>
                    <p className="-mt-1 text-sm text-foreground/60">$10</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default BridgeTokenSelector;
