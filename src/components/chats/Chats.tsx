"use client";

import React, { ReactNode, useRef, useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Icon } from "../icons/logo";
import { Button } from "../ui/button";
import SendMessage from "./SendMessage";
import { useChat } from "@ai-sdk/react";
import useToast from "@/hooks/toast.hook";
import { StickToBottom } from "use-stick-to-bottom";
import ChatContainer from "./ChatContainer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useAccount } from "@/context/account.context";

type Props = {
  endpoint: string;
  placeholder?: string;
  welcomeComponent: ReactNode;
  aiImage: string | StaticImport;
};

const Chats = ({ endpoint, welcomeComponent, aiImage, placeholder }: Props) => {
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
      <div className={`flex h-full w-auto flex-col justify-between bg-white`}>
        <header className="z-10 h-14">
          <div className="border-light flex h-14 items-center justify-between border-b bg-white px-4">
            <div className="flex -translate-x-3 lg:hidden">
              <Button type={"button"}>
                <ArrowLeftIcon size={18} />
              </Button>
            </div>
            <div className="max-w-[10rem] md:max-w-xs">
              <p className="truncate font-semibold text-gray-800 dark:text-gray-400">
                DexAi
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
