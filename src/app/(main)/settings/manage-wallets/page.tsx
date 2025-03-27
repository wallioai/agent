"use client";

import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import ImportWallet from "@/components/wallet/ImportWallet";
import { QuickWalletItem } from "@/components/wallet/QuickWallet";
import { useAccount } from "@/context/account.context";
import { useWallio } from "@/context/wallio.context";
import { PlusIcon } from "lucide-react";

export default function Wallet() {
  const { wallets, addAccount } = useAccount();
  const { isMobile } = useWallio();

  return (
    <Section>
      <div className="scrollbar-hide flex h-full flex-col overflow-scroll">
        <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-white px-5">
          <Header title="Manage Wallet" isBack={isMobile} />
        </div>
        <div className="scrollbar-hide flex-1 overflow-scroll">
          <div className="h-full px-5">
            <div className="mt-10 flex items-center gap-x-5">
              <Button
                type="button"
                className="gap-1 rounded-full px-6"
                onClick={addAccount}
              >
                <PlusIcon />
                <p className="">Add Wallet</p>
              </Button>
              <ImportWallet />
            </div>
            <div className="mt-5">
              <div className="flex justify-between gap-9">
                <div className="flex flex-1 justify-between">
                  <p className="font-bold text-foreground/80">Wallet</p>
                  <p className="font-bold text-foreground/80">Balance</p>
                </div>
                <div>
                  <p className="font-bold text-foreground/80">Action</p>
                </div>
              </div>
              {wallets.map((wallet) => (
                <QuickWalletItem
                  className="gap-10 px-0 py-3"
                  key={wallet.id}
                  wallet={wallet}
                  mode="full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
