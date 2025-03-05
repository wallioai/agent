"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  BoltIcon,
  CheckCheckIcon,
  CopyIcon,
  PlusIcon,
  WalletMinimalIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import useClipBoard from "@/hooks/clipboard.hook";
import { useAccount } from "@/context/account.context";
import { formatWalletAddress } from "@/lib/helpers";
import { Avatar } from "@/assets/avatar";
import { Icon } from "../icons/logo";
import { SavedWallet } from "@/types/wallet.type";
import clsx from "clsx";

function QuickWalletItem({ wallet }: { wallet: SavedWallet }) {
  const { copy, isCopied } = useClipBoard();
  const { activeWallet, activateAccount } = useAccount();
  const isActive = wallet.address == activeWallet.address;

  return (
    <div
      onClick={async () => await activateAccount(wallet)}
      role="button"
      className={clsx(
        "flex cursor-pointer items-center gap-2 px-5 py-2 hover:bg-secondary",
        {
          "bg-secondary": isActive,
        },
      )}
    >
      <div className="flex flex-1 items-center gap-2">
        <div className="size-8 rounded-full">
          <Icon src={Avatar[wallet.avatar]} />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div>
            <p className="font-semibold">
              {formatWalletAddress(wallet.address.toString())}
            </p>
            <p className="-mt-1 text-sm capitalize">
              {wallet.type.split("-").join(" ")}
            </p>
          </div>
          <p>US$0.00</p>
        </div>
      </div>
      <Button
        onClick={() => copy(wallet.address)}
        variant="ghost"
        size="icon"
        className="rounded-full"
      >
        {isCopied ? <CheckCheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  );
}

function QuickWallet() {
  const { wallets, addAccount } = useAccount();
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
        className="left-0 scrollbar-hide h-full max-h-60 w-[21rem] overflow-y-scroll rounded-2xl px-0"
      >
        <div className="grid grid-cols-1">
          <div className="mb-2 flex items-center justify-between gap-5 px-5">
            <p className="text-lg font-bold">Crypto Balance</p>
            <p>US$0.00</p>
          </div>
          {wallets.slice(0, 2).map((wallet) => (
            <QuickWalletItem key={wallet.id} wallet={wallet} />
          ))}
          <div className="mt-2 grid grid-cols-2 gap-3 px-5">
            <Button
              variant="outline"
              onClick={addAccount}
              className="rounded-full"
            >
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
