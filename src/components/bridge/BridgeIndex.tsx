"use client";

import React from "react";
import BridgeForm from "./BridgeForm";
import Switcher from "./Switcher";
import { useBridge } from "@/context/bridge.context";
import { Button } from "../ui/button";
import { RefreshCwIcon, Settings2Icon, WalletMinimalIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Radio from "../ui/radio";
import clsx from "clsx";
import BridgeTransaction from "./BridgeTransaction";

function BridgeIndex() {
  const {
    updateDestination,
    updateSource,
    source,
    sourceTokens,
    destination,
    destinationTokens,
    switchForm,
    isFormValid,
    toAnother,
    toggleToAnother,
    isPreparing,
    refreshTx,
    updateDestinationAddress,
  } = useBridge();

  const isBalanceValid =
    parseFloat(source?.balance ?? "0") > parseFloat(source?.amount ?? "0");

  return (
    <div className="h-full px-5 pt-5">
      <div className="mx-auto max-w-lg">
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-1">
            <BridgeForm
              network={source.network}
              token={source.token}
              tokens={sourceTokens}
              onSelectNetwork={(network) => {
                updateSource({ network, amount: "", usdValue: "" });
                updateDestination({ amount: "", usdValue: "" });
              }}
              onSelectToken={(token) =>
                updateSource({ token, amount: "", usdValue: "" })
              }
              onAmountChange={(amount) => updateSource({ amount })}
              amount={source.amount}
              usdValue={source.usdValue}
              balance={source.balance}
            />
            <Switcher onSwitch={switchForm} />
            <BridgeForm
              network={destination.network}
              token={destination.token}
              tokens={destinationTokens}
              onSelectNetwork={(network) =>
                updateDestination({ network, amount: "", usdValue: "" })
              }
              onSelectToken={(token) =>
                updateDestination({ token, amount: "", usdValue: "" })
              }
              onAmountChange={(amount) => updateDestination({ amount })}
              showBalance={false}
              amount={destination.amount}
              usdValue={destination.usdValue}
              isPreparing={isPreparing}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-12 flex-1 items-center gap-2 rounded-2xl bg-primary/10 px-4">
              <Radio
                id="another"
                className="rounded-none"
                type="checkbox"
                checked={toAnother}
                onChange={() => toggleToAnother(!toAnother)}
              />
              <Label htmlFor="another">Bridge and send to another wallet</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                disabled={isPreparing}
                onClick={() => {
                  if (
                    source.amount &&
                    source.token &&
                    destination.token &&
                    destination.amount
                  )
                    refreshTx();
                }}
                variant="outline"
                className="size-12 rounded-2xl border-0 bg-primary/10"
              >
                <RefreshCwIcon
                  className={clsx("", {
                    "animate-spin": isPreparing,
                  })}
                />
              </Button>
              <Button
                variant="outline"
                className="size-12 rounded-2xl border-0 bg-primary/10"
              >
                <Settings2Icon />
              </Button>
            </div>
          </div>
          {toAnother && (
            <div className="flex h-12 items-center gap-2 rounded-2xl bg-primary/10 px-4">
              <WalletMinimalIcon />
              <Input
                className="h-full border-0 px-0 font-medium shadow-none focus-visible:ring-0 focus-visible:outline-0"
                placeholder="Enter the reciever's wallet address"
                onChange={(e) => {
                  updateDestinationAddress(e.currentTarget.value);
                }}
              />
            </div>
          )}
          <Button
            disabled={!isFormValid || isPreparing || !isBalanceValid}
            className="h-12 rounded-full font-medium"
          >
            Preview Swap
          </Button>
        </div>
      </div>
      <BridgeTransaction />
    </div>
  );
}

export default BridgeIndex;
