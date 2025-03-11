"use client";

import React, { useState } from "react";
import { useNetwork } from "@/context/network.context";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, DownloadIcon, Eye } from "lucide-react";
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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { importWalletResolver } from "@/schemas/wallet.schema";
import { useAccount } from "@/context/account.context";

function ImportWallet() {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isLoading, isValid },
  } = useForm({ resolver: importWalletResolver });
  const { importAccount } = useAccount();
  const [open, setOpen] = useState<boolean>(false);

  const onImport = async (data: FieldValues) => {
    await importAccount(data.key);
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger asChild>
        <div
          role="button"
          className="flex h-9 cursor-pointer items-center gap-1 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground shadow-xs hover:bg-secondary/80"
          onClick={() => {}}
        >
          <DownloadIcon size={18} />
          <p className="text-foreground/80">Import Wallet</p>
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-3xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import Wallet</DialogTitle>
          <DialogDescription>
            Imported accounts won&apos;t be associated with your Wallio Smart
            Wallet and cannot be recovered through your Wallio Smart Wallet
            either.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="mb-5 flex flex-col text-left">
                <div className="mb-2 flex items-center justify-between">
                  <Label className="font-semibold">
                    Private key<span className="text-destructive">*</span>
                  </Label>
                  <div className="flex items-center justify-end gap-1">
                    <Eye size={16} className="text-primary" />
                    <p className="-mt-1 text-sm leading-0 font-semibold text-primary">
                      view
                    </p>
                  </div>
                </div>
                <Input
                  type="password"
                  onChange={onChange}
                  value={value ?? ""}
                  placeholder="Enter your wallet's private key"
                  className="h-11 shadow-none"
                />
              </div>
            )}
            name="key"
          />

          <Button
            onClick={handleSubmit(onImport)}
            type={"submit"}
            disabled={!isValid || isLoading}
            className="h-10"
          >
            Import
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ImportWallet;
