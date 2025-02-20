"use client";

import React from "react";
import {
  HandCoinsIcon,
  HomeIcon,
  Rotate3DIcon,
  SettingsIcon,
  Wallet2Icon,
} from "lucide-react";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DexaSWIcon, DexaSWLogo } from "../icons/logo";

export default function Sidebar() {
  const path = usePathname();

  const navigation = [
    { name: "Dashboard", href: routes.app.home, icon: HomeIcon },
    {
      name: "ePay",
      href: routes.app.others,
      icon: Wallet2Icon,
    },
    {
      name: "Taxes",
      href: routes.app.others,
      icon: Rotate3DIcon,
    },
    {
      name: "Funding",
      href: routes.app.others,
      icon: HandCoinsIcon,
    },
    {
      name: "Settings",
      href: routes.app.others,
      icon: SettingsIcon,
    },
  ];

  const isActive = (url: string) => path.includes(url);

  return (
    <div
      className={`hidden w-20 flex-col justify-between border-r py-5 sm:flex xl:w-60`}
    >
      <div className="flex-1">
        <DexaSWIcon className="mb-5 ml-5 size-10 rounded-sm" />
        <div className="flex flex-col gap-y-1">
          {navigation.map((nav, key) => (
            <Link
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
            </Link>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
