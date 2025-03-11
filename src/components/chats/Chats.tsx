"use client";

import React, { ReactNode, useRef, useState } from "react";
import { ArrowLeftIcon, PanelLeftDashedIcon } from "lucide-react";
import { Icon } from "../icons/logo";
import { Button } from "../ui/button";
import SendMessage from "./SendMessage";
import { useChat } from "@ai-sdk/react";
import useToast from "@/hooks/toast.hook";
import { StickToBottom } from "use-stick-to-bottom";
import ChatContainer from "./ChatContainer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useAccount } from "@/context/account.context";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { selectViewport, setViewport } from "@/slices/viewport/viewport.slice";
import clsx from "clsx";
import SidebarToggle from "../ui/sidebarToggle";

type Props = {
  endpoint: string;
  placeholder?: string;
  welcomeComponent: ReactNode;
  aiImage: string | StaticImport;
};

const Chats = ({ endpoint, welcomeComponent, aiImage, placeholder }: Props) => {
  const fullScreen = useAppSelector(selectViewport);
  const { error } = useToast();
  const { activeWallet } = useAccount();
  const endOfMsgRef = useRef<HTMLParagraphElement>(null);
  const [sourcesForMessages, setSourcesForMessages] = useState<
    Record<string, any>
  >({});

  const { messages, input, status, handleInputChange, handleSubmit } = useChat({
    api: endpoint,
    body: {
      wallet: activeWallet,
    },
    onResponse(response) {
      const sourcesHeader = response.headers.get("x-sources");
      const sources = sourcesHeader
        ? JSON.parse(Buffer.from(sourcesHeader, "base64").toString("utf8"))
        : [];

      const messageIndexHeader = response.headers.get("x-message-index");
      if (sources.length && messageIndexHeader !== null) {
        setSourcesForMessages({
          ...sourcesForMessages,
          [messageIndexHeader]: sources,
        });
      }
    },
    onError: (e: any) => {
      console.log(e);
      error(e.message ?? `Error while processing your request`);
    },
  });

  return (
    <div className="h-full">
      <div className={`flex h-full w-auto flex-col justify-between bg-primary/2`}>
        <header className="z-10 h-14">
          <div
            className={clsx(
              "flex h-14 items-center justify-between px-4",
              {
                "border-light border-b": !fullScreen,
              },
            )}
          >
            <div className="flex items-center">
              <div
                className={clsx("flex -translate-x-3", {
                  hidden: !fullScreen,
                })}
              >
                <SidebarToggle />
              </div>
              <p className="truncate font-semibold text-foreground/70">
                Wallio
              </p>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Icon />
            </div>
          </div>
        </header>
        <section className="flex flex-1 overflow-hidden">
          <StickToBottom className="w-full flex-1">
            <ChatContainer
              messages={messages}
              welcomeComponent={welcomeComponent}
              aiImage={aiImage}
              status={status}
            />
          </StickToBottom>
        </section>
        <SendMessage
          handleSubmit={handleSubmit}
          onInput={handleInputChange}
          endOfMsgRef={endOfMsgRef}
          input={input}
          isLoading={status == "streaming"}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Chats;
