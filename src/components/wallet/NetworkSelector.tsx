"use client";

import React, { useState } from "react";
import { useNetwork } from "@/context/network.context";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DexaSWIcon } from "../icons/logo";
import { Network } from "@/db/repos/network.repo";

function NetworkSelector() {
  const [open, setOpen] = useState<boolean>(false);
  const { defaultChain, changeNetwork, networks } = useNetwork();
  const networkColor =
    defaultChain?.type == "testnet" ? "bg-destructive" : "bg-primary";

  const onSelect = (network: Network) => {
    changeNetwork(network);
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger asChild>
        <div
          role="button"
          className={cn("flex cursor-pointer bg-secondary px-4 items-center gap-2 h-9 rounded-full")}
        >
          <div className="flex items-center gap-1">
            {defaultChain && (
              <div className="relative size-5">
                <DexaSWIcon
                  src={defaultChain.icon}
                  className="size-5 rounded-full"
                />
                <div
                  className={cn(
                    "absolute -right-0 bottom-0 size-2 rounded-full",
                    networkColor,
                  )}
                ></div>
              </div>
            )}
            <p className="font-semibold">{defaultChain?.name}</p>
          </div>
          <ChevronDownIcon size={16} className="mt-1" />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-md">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Network List</DialogTitle>
            <DialogDescription>Select your preferred network</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <div className="flex flex-col">
          {networks?.map((n) => (
            <div
              onClick={() => onSelect(n)}
              key={n.chainId}
              role="button"
              className="flex cursor-pointer items-center justify-between border-b px-5 py-3 hover:bg-secondary"
            >
              <div className="flex items-center gap-2">
                <DexaSWIcon src={n.icon} className="size-8 rounded-full" />
                <p>{n.name}</p>
                {n.type == "testnet" && (
                  <p className="bg-destructive/10 px-2 text-xs">Testnet</p>
                )}
              </div>
              <div className="flex size-6 items-center justify-center rounded-full border border-foreground">
                {n.chainId === defaultChain?.chainId && (
                  <div className="size-4 rounded-full bg-foreground"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NetworkSelector;
