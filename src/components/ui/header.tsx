import React from "react";
import BackButton from "./back";
import NetworkSelector from "../wallet/NetworkSelector";
import QuickWallet from "../wallet/QuickWallet";
import SidebarToggle from "./sidebarToggle";

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
          {!isBack && <SidebarToggle className="-translate-x-3" />}
          <p className="-translate-x-3 text-lg font-normal">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <NetworkSelector />
          <QuickWallet />
        </div>
      </div>
    </div>
  );
}

export default Header;
