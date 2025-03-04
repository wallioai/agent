"use client";

import React from "react";
import BridgeForm from "./BridgeForm";
import Switcher from "./Switcher";
import { useBridge } from "@/context/bridge.context";
import { Button } from "../ui/button";
import { RefreshCwIcon, Settings2Icon, WalletMinimalIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {};

function BridgeIndex({}: Props) {
  const {
    sourceNetwork,
    sourceToken,
    sourceTokens,
    changeSourceNetwork,
    changeSourceToken,
    destinationNetwork,
    destinationToken,
    destinationTokens,
    changeDestinationNetwork,
    changeDestinationToken,
    changeDestinationAddress,
    switchForm,
    isFormValid,
    toAnother,
    toggleToAnother,
  } = useBridge();

  return (
    <div className="h-full px-5 pt-5">
      <div className="mx-auto max-w-lg">
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-1">
            <BridgeForm
              network={sourceNetwork}
              token={sourceToken}
              tokens={sourceTokens}
              onSelectNetwork={(n) => changeSourceNetwork(n)}
              onSelectToken={(t) => changeSourceToken(t)}
            />
            <Switcher onSwitch={switchForm} />
            <BridgeForm
              network={destinationNetwork}
              token={destinationToken}
              tokens={destinationTokens}
              onSelectNetwork={(n) => changeDestinationNetwork(n)}
              onSelectToken={(t) => changeDestinationToken(t)}
              showBalance={false}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-12 flex-1 items-center gap-2 rounded-2xl bg-primary/10 px-4">
              <div className="rounded-md bg-primary/20 px-1">
                <Checkbox
                  id="another"
                  checked={toAnother}
                  onCheckedChange={toggleToAnother}
                />
              </div>
              <Label htmlFor="another">Bridge and send to another wallet</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="size-12 rounded-2xl border-0 bg-primary/10"
              >
                <RefreshCwIcon />
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
                onChange={(e) =>
                  changeDestinationAddress(e.currentTarget.value)
                }
              />
            </div>
          )}
          <Button
            disabled={!isFormValid}
            className="h-12 rounded-full font-medium"
          >
            Preview Swap
          </Button>
        </div>
      </div>
      <div>Table</div>
    </div>
  );
}

export default BridgeIndex;
