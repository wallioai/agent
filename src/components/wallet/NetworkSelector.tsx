"use client";

import React, { useState } from "react";
import { useNetwork } from "@/context/network.context";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Icon } from "../icons/logo";
import { Network } from "@/db/repos/network.repo";
import { Button } from "../ui/button";

type Props = {
  className?: string;
  onlyIcon?: boolean;
};

function NetworkSelector({ className, onlyIcon = false }: Props) {
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
          className={cn(
            "flex h-9 cursor-pointer items-center gap-2 rounded-full bg-secondary px-4",
            className,
          )}
        >
          <div className="flex items-center gap-1">
            {defaultChain && (
              <div className="relative size-5">
                <Icon src={defaultChain.icon} className="size-5 rounded-full" />
                <div
                  className={cn(
                    "absolute -right-0 bottom-0 size-2 rounded-full",
                    networkColor,
                  )}
                ></div>
              </div>
            )}
            {!onlyIcon && (
              <p className="truncate font-semibold">{defaultChain?.name}</p>
            )}
          </div>
          {!onlyIcon && <ChevronDownIcon size={16} className="mt-1" />}
        </div>
      </DialogTrigger>
      <DialogContent className="scrollbar-hide max-h-10/12 gap-0 overflow-scroll border-0 p-0 ring-0 outline-0 sm:max-w-xl">
        <DialogHeader className="sticky top-0 z-10 flex-row items-center justify-between border-b bg-background px-5 py-3">
          <div className="flex flex-col gap-1">
            <DialogTitle>Select network</DialogTitle>
            <VisuallyHidden>
              <DialogDescription>Select your preferred wallet</DialogDescription>
            </VisuallyHidden>
          </div>
          <Button
            onClick={() => setOpen(false)}
            size="icon"
            variant="ghost"
            className="translate-x-2 rounded-full [&_svg:not([class*='size-'])]:size-5"
          >
            <XIcon size={20} />
          </Button>
        </DialogHeader>
        <div className="flex flex-col bg-accent">
          {networks?.map((n) => (
            <div
              onClick={() => onSelect(n)}
              key={n.chainId}
              role="button"
              className="flex cursor-pointer items-center justify-between border-b px-5 py-3 hover:bg-secondary"
            >
              <div className="flex items-center gap-2">
                <Icon src={n.icon} className="size-8 rounded-full" />
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
