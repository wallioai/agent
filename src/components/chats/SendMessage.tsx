"use client";

import React from "react";
import { SendHorizonalIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ChatRequestOptions } from "ai";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectViewport } from "@/slices/viewport/viewport.slice";
import clsx from "clsx";

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
  const fullScreen = useAppSelector(selectViewport);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <footer
          className={clsx(
            "border-light flex max-h-32 items-center space-x-2 border-t bg-white px-4",
            {
              "mx-auto mb-5 min-h-[6.5rem] max-w-2xl flex-col items-start rounded-3xl border shadow-lg":
                fullScreen,
              "min-h-[5rem]": !fullScreen,
            },
          )}
        >
          <div
            className={clsx("flex-1", {
              "w-full": fullScreen,
            })}
          >
            <input
              onChange={onInput}
              className="text-medium scrollbar-hide h-12 w-full bg-transparent py-3 outline-none"
              placeholder={placeholder ?? "Type a message..."}
              value={input}
            />
          </div>

          <div
            className={clsx("", {
              "flex w-full justify-end pb-3": fullScreen,
            })}
          >
            <Button
              type={"submit"}
              size={"icon"}
              className="rounded-full"
              disabled={isLoading || input.length === 0}
            >
              <SendHorizonalIcon className="-rotate-90" size={14} />
            </Button>
          </div>
        </footer>
      </form>
    </>
  );
};

export default SendMessage;
