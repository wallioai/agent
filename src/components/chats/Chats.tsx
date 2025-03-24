"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { PanelLeftDashedIcon } from "lucide-react";
import { Button } from "../ui/button";
import SendMessage from "./SendMessage";
import { useChat } from "@ai-sdk/react";
import useToast from "@/hooks/toast.hook";
import { StickToBottom } from "use-stick-to-bottom";
import ChatContainer from "./ChatContainer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useAccount } from "@/context/account.context";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { selectViewport } from "@/slices/viewport/viewport.slice";
import SidebarToggle from "../ui/sidebarToggle";
import { setOpen } from "@/slices/chats/sidebar.slice";
import { useRouter, useSearchParams } from "next/navigation";
import { ChatRequestOptions } from "ai";
import { generateId } from "@/lib/helpers";
import { createThread } from "@/actions/thread.action";
import { useQuery } from "@tanstack/react-query";
import { getChats } from "@/actions/chat.action";
import { QueryKey } from "@/enums/query.enum";
import useStorage from "@/hooks/storage.hook";
import { StoreKey } from "@/enums/storage.enum";
import { useAuth } from "@/context/auth.context";
import NewChatButton from "./NewChatButton";
import { queryClient } from "@/clients/query.client";

type Props = {
  endpoint: string;
  placeholder?: string;
  welcomeComponent: ReactNode;
  aiImage: string | StaticImport;
};

const Chats = ({ endpoint, welcomeComponent, aiImage, placeholder }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const threadId = searchParams.get("chat");
  const endOfMsgRef = useRef<HTMLParagraphElement>(null);

  const fullScreen = useAppSelector(selectViewport);
  const dispatch = useAppDispatch();
  const { error } = useToast();
  const { activeWallet } = useAccount();
  const { getItem, setItem } = useStorage();
  const { user } = useAuth();
  const [chatId, setChatId] = useState<string>("");
  const [sourcesForMessages, setSourcesForMessages] = useState<
    Record<string, any>
  >({});

  useEffect(() => {
    if (!threadId) {
      const id = generateId({
        isUUID: true,
        dictionary: "hex",
        length: 32,
      });
      setChatId(id);
    } else {
      setChatId(threadId);
    }
  }, [threadId]);

  const { data: initialMessages } = useQuery({
    queryKey: [QueryKey.Chats, threadId],
    queryFn: async () => {
      const res = await getChats(threadId);
      if (res.status) {
        return res.data;
      }
      return [];
    },
    enabled: !!threadId,
    staleTime: 0,
  });

  const { messages, input, status, handleInputChange, setInput, handleSubmit } =
    useChat({
      id: chatId,
      api: endpoint,
      body: {
        wallet: activeWallet,
      },
      initialMessages,
      experimental_throttle: 50,
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
      onFinish: async () => {
        await queryClient.invalidateQueries({
          queryKey: [QueryKey.Threads, user.id],
        });
      },
    });

  const onSubmit = async (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions,
  ) => {
    let newThreadId: string = threadId;
    if (!newThreadId) {
      const activeChat: Record<string, string> =
        getItem(StoreKey.ACTIVE_CHAT) || {};

      newThreadId = chatId;
      await createThread(chatId);

      if (activeChat) {
        activeChat[user.id] = newThreadId;
        setItem(StoreKey.ACTIVE_CHAT, activeChat);
      }

      router.push(`?chat=${newThreadId}`, { scroll: false });
    }

    handleSubmit(event, {
      body: { threadId: newThreadId },
      ...chatRequestOptions,
    });
  };

  return (
    <div className="h-full">
      <div
        className={`flex h-full w-auto flex-col justify-between bg-primary/2`}
      >
        <header className="z-10 h-14">
          <div
            className={clsx("flex h-14 items-center justify-between px-4", {
              "border-light border-b": !fullScreen,
            })}
          >
            <div className="flex -translate-x-3 items-center">
              <div
                className={clsx("", {
                  hidden: !fullScreen,
                  "hidden lg:flex": fullScreen,
                })}
              >
                <SidebarToggle type="open" />
              </div>
              <NewChatButton className="rounded-full" />
              <p className="hidden truncate pl-1 font-semibold md:inline">
                WallioAi
              </p>
            </div>
            <p className="truncate font-semibold md:hidden">WallioAi</p>
            <div className="flex items-center justify-between space-x-2">
              <Button
                onClick={() => dispatch(setOpen(true))}
                variant="ghost"
                size="icon"
                className="translate-x-3 [&_svg:not([class*='size-'])]:size-5"
              >
                <PanelLeftDashedIcon />
              </Button>
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
          handleSubmit={onSubmit}
          onInput={setInput}
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
