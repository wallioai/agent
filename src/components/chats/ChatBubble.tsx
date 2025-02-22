import { Message } from "ai";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { DexaSWIcon } from "../icons/logo";

type Props = {
  message: Message;
  aiImage: string | StaticImport;
};

export default function ChatBubble({ message, aiImage }: Props) {
  const isOwnerMsg = message.role == "user";

  return (
    <div
      className={`my-5 flex flex-col ${
        isOwnerMsg ? "items-end justify-end" : "items-start"
      }`}
    >
      <div
        className={`relative flex max-w-md space-x-2 py-2 break-words ${
          isOwnerMsg ? "rounded-3xl bg-primary px-4 text-white" : ""
        }`}
        style={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {!isOwnerMsg && <DexaSWIcon src={aiImage} className="size-6" />}
        <p className="inline-block w-full break-words whitespace-pre-wrap select-text">
          {message.content}
        </p>
      </div>
    </div>
  );
}
