"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BoltIcon, CopyIcon, PlusIcon, WalletMinimalIcon } from "lucide-react";
import { Button } from "../ui/button";
import useClipBoard from "@/hooks/clipboard.hook";
import { useAccount } from "@/context/account.context";

function QuickWallet() {
  const { copy, isCopied } = useClipBoard();
  const {} = useAccount();
  
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex size-9 cursor-pointer items-center justify-center rounded-full border-0 bg-secondary">
          <WalletMinimalIcon size={18} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align={"end"}
        side="bottom"
        className="left-0 scrollbar-hide h-full max-h-60 w-[21rem] overflow-y-scroll rounded-2xl px-5"
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-between gap-5">
            <p className="text-lg font-bold">Crypto Balance</p>
            <p>US$0.00</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-1 items-center">
              <div className="size-8 rounded-full"></div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <p className="font-semibold">0xafC2…5500</p>
                  <p className="text-sm">Smart Wallet</p>
                </div>
                <p>US$0.00</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <CopyIcon />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="rounded-full">
              <p className="font-semibold">Add Wallet</p>
              <PlusIcon />
            </Button>
            <Button variant="outline" className="rounded-full">
              <p className="font-semibold">Manage</p>
              <BoltIcon />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default QuickWallet;
