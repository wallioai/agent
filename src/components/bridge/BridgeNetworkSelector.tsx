"use client";

import React, { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDownIcon, WebcamIcon } from "lucide-react";
import { Icon } from "../icons/logo";
import { Network } from "@/db/repos/network.repo";
import { useBridge } from "@/context/bridge.context";
import clsx from "clsx";

type Props = {
  selectedNetwork?: Network;
  onSelectNetwork: (n: Network) => void;
  containerRef: React.RefObject<HTMLDivElement>;
};

function BridgeNetworkSelector({
  onSelectNetwork,
  containerRef,
  selectedNetwork,
}: Props) {
  const { networks } = useBridge();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);

  const isSelected = (n: Network) => n.chainId == selectedNetwork?.chainId;

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
        <div className="flex h-12 flex-grow cursor-pointer items-center justify-between rounded-3xl bg-primary/10 px-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <WebcamIcon size={28} />
              {selectedNetwork && (
                <div className="absolute right-0 bottom-0 h-4 w-4 rounded-full">
                  <Icon
                    src={selectedNetwork.icon}
                    className="size-4 rounded-full"
                  />
                </div>
              )}
            </div>
            <div className="">
              <p className="font-medium">
                {selectedNetwork?.shortName ?? "Select"}
              </p>
              <p className="-mt-1 text-xs text-foreground/70">Network</p>
            </div>
          </div>
          <ChevronDownIcon size={18} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align={"start"}
        style={{
          width: width > 0 ? width : "auto",
        }}
        side="bottom"
        className="left-0 scrollbar-hide h-full max-h-60 overflow-y-scroll p-0"
      >
        <div className="grid grid-cols-2 gap-2 bg-primary/5 p-2 md:grid-cols-3">
          {networks?.map((n) => (
            <div
              onClick={() => {
                onSelectNetwork(n);
                setOpen(false);
              }}
              key={n.id}
              className={clsx(
                "scrollbar-hide flex cursor-pointer items-center gap-2 overflow-scroll rounded-md border bg-primary/10 p-2 hover:bg-primary/20",
                {
                  "bg-primary/20 border-primary": isSelected(n),
                },
              )}
            >
              <Icon src={n.icon} className="size-6 rounded-full" />
              <p className="text-nowrap">{n.shortName}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default BridgeNetworkSelector;
