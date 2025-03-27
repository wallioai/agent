"use client";

import React from "react";
import Chats from "@/components/chats/Chats";
import Aside from "@/components/layouts/Aside";
import Container from "@/components/layouts/Container";
import MobileMenu from "@/components/layouts/MobileMenu";
import Sidebar from "@/components/layouts/Sidebar";
import { apiRoutes } from "@/lib/routes";
import { WallioInfo } from "@/components/info-cards/wallio.card";
import Ai from "@/assets/images/ai.png";
import clsx from "clsx";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectViewport } from "@/slices/viewport/viewport.slice";
import ChatSidebar from "@/components/chats/sidebar/ChatSidebar";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSearchParams } from "next/navigation";
import { useWallio } from "@/context/wallio.context";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAutoMode, chatMode } = useWallio();
  const isOpen = true;
  return (
    <div className="relative flex h-svh flex-row justify-start overflow-hidden overscroll-contain">
      <Sidebar />
      <div
        className={clsx("bg-light w-full flex-1 overflow-hidden lg:w-4/5", {
          "": !isOpen,
          "": isOpen,
        })}
      >
        <Container>
          <div
            className={clsx("h-full flex-1", {
              hidden: chatMode && !isAutoMode,
              "hidden lg:block": !chatMode && !isAutoMode,
              block: isAutoMode,
            })}
          >
            {children}
          </div>
          <Aside
            className={clsx("w-[38rem]", {
              "w-full border-l-0": chatMode,
              "w-full lg:w-[38rem]": !chatMode,
              hidden: isAutoMode,
            })}
          >
            <Chats
              endpoint={apiRoutes.agents.dexai}
              welcomeComponent={WallioInfo}
              aiImage={Ai}
            />
          </Aside>
        </Container>
      </div>
      <ChatSidebar />
      {/* {isAutoMode && <MobileMenu />} */}
    </div>
  );
}
