"use client";

import React, { useState } from "react";
import { Message } from "ai";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Icon } from "../icons/logo";
import useClipBoard from "@/hooks/clipboard.hook";
import { CheckCheckIcon, CopyIcon } from "lucide-react";
import { EnhancedChatMarkdown } from "./ChatMarkdown";

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
      className={`flex flex-col py-2 ${
        isOwnerMsg ? "items-end justify-end" : "items-start"
      }`}
    >
      <div
        className="flex max-w-lg flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-2">
          {isOwnerMsg && (
            <div className="w-5">{isOwnerMsg && isHovered && <CopyItem />}</div>
          )}
          <div
            className={`relative flex max-w-lg flex-1 px-4 space-x-2 py-2 break-words ${
              isOwnerMsg ? "rounded-3xl bg-primary text-white" : "bg-primary/5 py-3 rounded-lg"
            }`}
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            
            <div className="inline-block w-full break-words select-text">
              <EnhancedChatMarkdown id={message.id} content={message.content} />
            </div>

            {/* <p className="inline-block w-full break-words whitespace-pre-wrap select-text">
              {message.content}
            </p> */}
          </div>
        </div>

        <div className="flex h-5 items-center">
          {!isOwnerMsg && isHovered && (
            <div className={"flex pl-3 mt-2"}>
              <CopyItem />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
