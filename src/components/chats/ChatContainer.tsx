"use client";

import React, { Fragment, ReactNode } from "react";
import { Message } from "ai";
import { useStickToBottomContext } from "use-stick-to-bottom";
import ChatItem from "./ChatItem";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import { DotLoader } from "../ui/dotloader";

type Props = {
  messages: Message[];
  welcomeComponent: ReactNode;
  aiImage: string | StaticImport;
  status: "error" | "submitted" | "streaming" | "ready";
};

function ChatContainer({ messages, welcomeComponent, aiImage, status }: Props) {
  const { scrollRef, contentRef, isAtBottom, scrollToBottom } =
    useStickToBottomContext();

  return (
    <div
      ref={scrollRef}
      className="relative scrollbar-hide size-full flex-1 px-4"
    >
      <div
        ref={contentRef}
        className={clsx("", {
          "h-full": messages.length === 0,
        })}
      >
        {messages.length === 0 ? (
          <Fragment>{welcomeComponent}</Fragment>
        ) : (
          <ChatItem messages={messages} aiImage={aiImage} />
        )}
        {status == "streaming" ||
          (status == "submitted" && (
            <div className="mb-5">
              <DotLoader />
            </div>
          ))}
      </div>
      {!isAtBottom && (
        <div className="sticky bottom-4 flex h-10 justify-center">
          <Button
            variant={"outline"}
            size="icon"
            className="cursor-pointer rounded-full"
            onClick={() => scrollToBottom()}
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default ChatContainer;
