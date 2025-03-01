import React from "react";
import BackButton from "./back";
import NetworkSelector from "../wallet/NetworkSelector";

type Props = {
  title?: string;
  isBack?: boolean;
  children?: React.ReactNode;
};

function Header({ title, isBack = true }: Props) {
  return (
    <div className="sticky top-0 z-50 w-full flex-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start space-x-2">
          {isBack && <BackButton />}
          <p className="text-lg font-normal">{title}</p>
        </div>
        <NetworkSelector />
      </div>
    </div>
  );
}

export default Header;
