"use client";
import React, { useEffect } from "react";
import { HandCoinsIcon, HomeIcon, SettingsIcon, Wallet2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";
import { Button } from "../ui/button";

function MobileMenu() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(routes.app.home);
    router.prefetch(routes.app.home);
    router.prefetch(routes.app.home);
    router.prefetch(routes.app.home);
  }, [router]);

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <div
      className={`h-14 sm:hidden bg-white/80 shadow-sm border-t border-light w-full`}
    >
      <div className="px-5 flex items-center h-full justify-between">
        <Button
          onClick={() => navigateTo(routes.app.home)}
          type={"button"}
          variant={"ghost"}
          size={"icon"}
          className="bg-transparent"
        >
          <HomeIcon height={23} />
        </Button>
        <Button
          onClick={() => {
            navigateTo(routes.app.home);
          }}
          type={"button"}
          variant={"ghost"}
          size={"icon"}
          className="bg-transparent"
        >
          <Wallet2Icon height={23} />
        </Button>
        <Button
          onClick={() => {
            navigateTo(routes.app.home);
          }}
          type={"button"}
          variant={"ghost"}
          size={"icon"}
          className="bg-transparent"
        >
          <HandCoinsIcon height={23} />
        </Button>
        <Button
          onClick={() => {
            navigateTo(routes.app.home);
          }}
          type={"button"}
          variant={"ghost"}
          size={"icon"}
          className="bg-transparent"
        >
          <SettingsIcon height={23} />
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
