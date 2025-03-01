"use client";

import React from "react";
import { SendHorizonalIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ChatRequestOptions } from "ai";

type Props = {
  endOfMsgRef: React.RefObject<HTMLParagraphElement | null>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions,
  ) => void;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  isLoading: boolean;
  placeholder?: string;
};

const SendMessage = ({
  handleSubmit,
  onInput,
  input,
  isLoading,
  placeholder,
}: Props) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <footer className="border-light flex max-h-20 min-h-[5rem] items-center space-x-2 border-t bg-white px-4">
          <div className="flex-1">
            <input
              onChange={onInput}
              className="text-medium scrollbar-hide h-12 w-full bg-transparent py-3 outline-none"
              placeholder={placeholder ?? "Type a message..."}
              value={input}
            />
          </div>

          <Button
            type={"submit"}
            size={"icon"}
            className="rounded-full"
            disabled={isLoading || input.length === 0}
          >
            <SendHorizonalIcon className="-rotate-90" size={14} />
          </Button>
        </footer>
      </form>
    </>
  );
};

export default SendMessage;
