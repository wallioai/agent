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

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fullScreen = useAppSelector(selectViewport);
  return (
    <div className="relative flex h-svh flex-col justify-between overflow-hidden overscroll-contain sm:flex-row sm:justify-start">
      <Sidebar />
      <div className="bg-light w-full flex-1 overflow-hidden lg:w-4/5">
        <Container>
          <div
            className={clsx("h-full flex-1", {
              hidden: fullScreen,
            })}
          >
            {children}
          </div>
          <Aside
            className={clsx("w-[38rem]", {
              "w-full border-l-0": fullScreen,
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
      <MobileMenu />
    </div>
  );
}
