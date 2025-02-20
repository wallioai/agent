"use client";

import React, { useRef } from "react";
import { NextPage } from "next";
import { ArrowLeftIcon } from "lucide-react";
import { DexaSWIcon } from "../icons/logo";
import { Button } from "../ui/button";
import SendMessage from "./SendMessage";

const Chats: NextPage = () => {
  const endOfMsgRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="h-full">
      <div
        className={`flex h-full w-auto flex-col justify-between bg-white`}
      >
        <header className="z-10 h-14">
          <div className="border-light flex h-14 items-center justify-between border-b bg-white px-4 md:bg-primary/10">
            <div className="flex -translate-x-3 lg:hidden">
              <Button type={"button"}>
                <ArrowLeftIcon size={18} />
              </Button>
            </div>
            <div className="max-w-[10rem] md:max-w-xs">
              <p className="truncate font-semibold text-gray-800 dark:text-gray-400">
                SonicAi
              </p>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <DexaSWIcon />
            </div>
          </div>
        </header>
        <section className="flex scrollbar-hide flex-1 overflow-scroll px-4">
          {/* <div className="w-full" ref={elementRef}>
            {currentMsg?.chats
              .sort(
                (a, b) =>
                  new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime(),
              )
              .map((msg: MessageInterface, i: number) => (
                <ChatItem key={i} chat={msg} />
              ))}
            <p
              ref={endOfMsgRef}
              className={`bg-dark mb-1 text-sm text-gray-100 transition`}
            >
              <span className={`hidden font-thin`}></span>
            </p>
          </div> */}
        </section>
        <SendMessage endOfMsgRef={endOfMsgRef} />
      </div>
    </div>
  );
};

export default Chats;
