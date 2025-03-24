"use client";

import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/redux.hook";
import { selectOpen, setOpen } from "@/slices/chats/sidebar.slice";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getThreads } from "@/actions/thread.action";
import { QueryKey } from "@/enums/query.enum";
import { useAuth } from "@/context/auth.context";
import { Button } from "../../ui/button";
import { BellDotIcon, PanelRightDashedIcon, SearchIcon } from "lucide-react";
import NewChatButton from "../NewChatButton";
import { selectViewport } from "@/slices/viewport/viewport.slice";
import clsx from "clsx";
import { Icon } from "../../icons/logo";
import ChatSidebarItem from "./ChatSidebarItem";

type Props = {};

// Create a context to manage popover state
export const SidebarContext = React.createContext<{
  isAnyPopoverOpen: boolean;
  setIsAnyPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isAnyPopoverOpen: false,
  setIsAnyPopoverOpen: () => {},
});

function ChatSidebar({}: Props) {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectOpen);
  const fullScreen = useAppSelector(selectViewport);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, user } = useAuth();
  const [isAnyPopoverOpen, setIsAnyPopoverOpen] = useState(false);

  const { data: thread } = useQuery({
    queryKey: [QueryKey.Threads, user?.id],
    queryFn: async () => {
      const res = await getThreads();
      if (res.status) {
        return res.data;
      }
      return [];
    },
    enabled: isAuthenticated && !!user?.id,
    //staleTime: 0,
  });

  // Close sidebar handler
  const closeSidebar = useCallback(() => {
    dispatch(setOpen(false));
  }, [dispatch]);

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Skip if any popover is open
      if (isAnyPopoverOpen) return;

      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        // Also check if the click is on a popover element
        const target = event.target as HTMLElement;
        const isPopoverElement = target.closest(
          "[data-radix-popper-content-wrapper]",
        );

        if (!isPopoverElement) {
          closeSidebar();
        }
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, isAnyPopoverOpen]);

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (open && event.key === "Escape" && !isAnyPopoverOpen) {
        closeSidebar();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [open, isAnyPopoverOpen]);

  return (
    <SidebarContext.Provider value={{ isAnyPopoverOpen, setIsAnyPopoverOpen }}>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-foreground/60 backdrop-blur-sm sm:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 35,
              stiffness: 300,
            }}
            className="absolute right-0 z-50 flex h-svh w-9/12 justify-end overflow-hidden border-l-2 bg-transparent shadow-2xl backdrop-blur-sm sm:w-84 sm:bg-background/60"
          >
            <div className="h-full w-full bg-background sm:size-full">
              <div
                ref={sidebarRef}
                className="relative flex size-full flex-col bg-primary/2"
              >
                <header
                  className={clsx(
                    "z-10 flex h-14 items-center justify-between px-3",
                    {
                      "border-b": !fullScreen,
                    },
                  )}
                >
                  <div className="flex items-center">
                    <NewChatButton onClick={() => dispatch(setOpen(false))} />
                    <Button
                      onClick={() => dispatch(setOpen(false))}
                      variant="ghost"
                      size="icon"
                      className="[&_svg:not([class*='size-'])]:size-5"
                    >
                      <SearchIcon className="rotate-90" />
                    </Button>
                  </div>
                  <Button
                    onClick={() => dispatch(setOpen(false))}
                    variant="ghost"
                    size="icon"
                    className="[&_svg:not([class*='size-'])]:size-5"
                  >
                    <PanelRightDashedIcon />
                  </Button>
                </header>
                <section
                  className={clsx("flex-1 overflow-scroll px-3", {
                    "pt-2": !fullScreen,
                  })}
                >
                  <div className="flex h-10 cursor-pointer items-center gap-2 rounded-md px-2 hover:bg-primary/5">
                    <Icon className="size-5 rounded-md" />
                    <p>WallioAi</p>
                  </div>
                  <div className="flex h-10 cursor-pointer items-center justify-between rounded-md px-2 hover:bg-primary/5">
                    <div className="flex items-center gap-2">
                      <BellDotIcon className="size-5 rounded-md" />
                      <p>Notification</p>
                    </div>
                    <div className="flex size-5 items-center justify-center rounded-sm bg-primary">
                      <p className="text-sm text-background">4</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    {thread?.length > 0 ? (
                      <Fragment>
                        <p className="p-2 font-semibold text-foreground/80">
                          Recent Chats
                        </p>
                        {thread?.map((t) => (
                          <ChatSidebarItem key={t.threadId} thread={t} />
                        ))}
                      </Fragment>
                    ) : (
                      <div className="flex h-60 w-full flex-col items-center justify-center gap-2 rounded-md bg-primary/5 p-5 text-center">
                        <p className="max-w-sm text-foreground/80">
                          You currently do not have any chat
                        </p>
                        <NewChatButton variant="default" size="default">
                          <p>Chat with Wallio</p>
                        </NewChatButton>
                      </div>
                    )}
                  </div>
                </section>
                <footer className="h-14"></footer>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarContext.Provider>
  );
}

export default ChatSidebar;
