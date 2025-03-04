import { ArrowDownUpIcon } from "lucide-react";
import React from "react";

type Props = {
  onSwitch: () => void;
};

export default function Switcher({ onSwitch }: Props) {
  return (
    <div
      onClick={onSwitch}
      className="relative flex cursor-pointer justify-center"
    >
      <div className="absolute -top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <ArrowDownUpIcon size={18} />
        </div>
      </div>
    </div>
  );
}
