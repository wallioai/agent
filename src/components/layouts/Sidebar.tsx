"use client";

import React from "react";
import {
  BotMessageSquareIcon,
  HandCoinsIcon,
  HomeIcon,
  RadarIcon,
  ReplaceAllIcon,
  Rotate3DIcon,
  SettingsIcon,
  WalletMinimalIcon,
} from "lucide-react";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../icons/logo";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { selectViewport, setViewport } from "@/slices/viewport/viewport.slice";
import { EnhancedLink } from "../ui/link";

export default function Sidebar() {
  const path = usePathname();
  const dispatch = useAppDispatch();

  const navigation = [
    { name: "Dashboard", href: routes.app.home, icon: HomeIcon },
    {
      name: "Bridge",
      href: routes.app.bridge,
      icon: Rotate3DIcon,
    },
    {
      name: "Wallets",
      href: routes.app.settings.managewallet,
      icon: WalletMinimalIcon,
    },
    // {
    //   name: "Swap",
    //   href: routes.app.others,
    //   icon: ReplaceAllIcon,
    // },
    // {
    //   name: "Earn",
    //   href: routes.app.others,
    //   icon: HandCoinsIcon,
    // },
    // {
    //   name: "Chats",
    //   href: routes.app.others,
    //   icon: BotMessageSquareIcon,
    // },
    // {
    //   name: "Discover",
    //   href: routes.app.others,
    //   icon: RadarIcon,
    // },
    // {
    //   name: "Settings",
    //   href: routes.app.others,
    //   icon: SettingsIcon,
    // },
  ];

  const isActive = (url: string) => path.includes(url);

  return (
    <div
      className={`hidden w-20 flex-col justify-between border-r bg-primary/5 py-5 lg:flex xl:w-60`}
    >
      <div className="flex-1">
        <Icon className="mb-5 ml-5 size-10 rounded-sm" />
        <div className="flex flex-col gap-y-1">
          {navigation.map((nav, key) => (
            <EnhancedLink
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setViewport(false));
              }}
              prefetch={true}
              href={nav.href}
              key={key}
              className={`group flex ${
                isActive(nav.href)
                  ? "border-l-4 border-primary bg-primary/10"
                  : "border-l-4 border-transparent"
              } `}
            >
              <div
                className={`flex w-full justify-center space-x-2 px-5 py-4 transition-all duration-200 group-hover:bg-primary/10 xl:justify-start`}
              >
                <nav.icon
                  className={`group-hover:text-primary ${
                    isActive(nav.href) ? "text-primary" : ""
                  }`}
                  size={23.5}
                />
                <p
                  className={`hidden text-base font-semibold group-hover:text-primary xl:inline ${
                    isActive(nav.href) ? "text-primary" : ""
                  }`}
                >
                  {nav.name}
                </p>
              </div>
            </EnhancedLink>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
