"use client";

import React from "react";
import BridgeForm from "./BridgeForm";
import Switcher from "./Switcher";
import { useBridge } from "@/context/bridge.context";
import { Button } from "../ui/button";
import { RefreshCwIcon, Settings2Icon } from "lucide-react";

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
    switchForm,
    isFormValid,
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
            <div className="flex-1 bg-primary/10 rounded-2xl h-12"></div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" className="rounded-2xl bg-primary/10 border-0 size-12">
                <RefreshCwIcon />
              </Button>
              <Button variant="outline" className="rounded-2xl bg-primary/10 border-0 size-12">
                <Settings2Icon />
              </Button>
            </div>
          </div>
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
