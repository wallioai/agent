"use client";

import React, { useRef } from "react";
import { PlusIcon, SendHorizonalIcon, Wallet2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { ChatRequestOptions } from "ai";
import { useAppSelector } from "@/hooks/redux.hook";
import { selectViewport } from "@/slices/viewport/viewport.slice";
import clsx from "clsx";
import Editor, { EditorHandle } from "../editor/Editor";
import NetworkSelector from "../wallet/NetworkSelector";
import QuickWallet from "../wallet/QuickWallet";

type Props = {
  endOfMsgRef: React.RefObject<HTMLParagraphElement | null>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions,
  ) => void;
  onInput: React.Dispatch<React.SetStateAction<string>>;
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
  const editorRef = useRef<EditorHandle>(null);
  const fullScreen = useAppSelector(selectViewport);

  const submitMessage = () => {
    if (input.length > 0 && !isLoading) {
      handleSubmit();
      editorRef.current?.clearEditor();
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleSubmit(e);
          editorRef.current?.clearEditor();
        }}
        className={clsx("", {
          "sm:px-5": fullScreen,
        })}
      >
        <footer
          className={clsx(
            "border-light flex max-h-[20rem] items-center space-x-2 border-t bg-white px-4 pt-1",
            {
              "mx-auto min-h-[6.5rem] max-w-2xl flex-col items-start rounded-t-3xl border shadow-lg sm:mb-5 sm:rounded-b-3xl":
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
            <Editor
              onUpdate={onInput}
              defaultValue={input}
              ref={editorRef}
              placeholder={placeholder ?? "Message Wallio"}
              onSubmit={submitMessage}
            />
          </div>

          <div
            className={clsx("flex", {
              "w-full justify-between pb-3": fullScreen,
              "justify-end": !fullScreen,
            })}
          >
            <div
              className={clsx("", {
                "flex items-center gap-3": fullScreen,
                hidden: !fullScreen,
              })}
            >
              <Button
                size={"icon"}
                variant={"outline"}
                className="rounded-full"
              >
                <PlusIcon />
              </Button>
              <QuickWallet
                className="w-auto border bg-background px-3 gap-2 hover:bg-accent hover:text-accent-foreground"
                showName={true}
                align={'center'}
              />
              <NetworkSelector
                onlyIcon={true}
                className="h-9 w-9 border bg-background flex items-center justify-center hover:bg-accent hover:text-accent-foreground"
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
          </div>
        </footer>
      </form>
    </>
  );
};

export default SendMessage;
