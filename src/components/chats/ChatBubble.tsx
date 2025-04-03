"use client";

import React, { useState } from "react";
import { Message } from "ai";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Icon } from "../icons/logo";
import useClipBoard from "@/hooks/clipboard.hook";
import { CheckCheckIcon, CopyIcon } from "lucide-react";
import { MarkdownContent } from "./ChatMarkdown";
import Markdown from "markdown-to-jsx";

type Props = {
  message: Message;
  aiImage: string | StaticImport;
};

export default function ChatBubble({ message, aiImage }: Props) {
  const isOwnerMsg = message.role == "user";
  const { copy, isCopied } = useClipBoard();
  const [isHovered, setIsHovered] = useState(false);

  const CopyItem = () => (
    <div
      className="cursor-pointer"
      role="button"
      onClick={async () => {
        await copy(message.content);
      }}
    >
      {isCopied ? <CheckCheckIcon size={16} /> : <CopyIcon size={16} />}
    </div>
  );

  return (
    <div
      className={`flex w-full flex-col py-2 ${
        isOwnerMsg ? "items-end justify-end" : "items-start"
      }`}
    >
      <div
        className="flex max-w-full sm:max-w-lg flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-2">
          {isOwnerMsg && (
            <div className="w-5">{isOwnerMsg && isHovered && <CopyItem />}</div>
          )}
          <div
            className={`relative flex max-w-full flex-1 space-x-2 px-4 py-2 ${
              isOwnerMsg
                ? "rounded-3xl bg-primary text-white"
                : "rounded-lg bg-primary/5 py-3"
            }`}
          >
            <div className="w-full overflow-hidden">
              <MarkdownContent
                content={message.content}
                isOwnerMsg={isOwnerMsg}
              />
            </div>
          </div>
        </div>

        <div className="flex h-5 items-center">
          {!isOwnerMsg && isHovered && (
            <div className={"mt-2 flex pl-3"}>
              <CopyItem />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
