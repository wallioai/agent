"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Thread } from "@/types/thread.type";
import { EllipsisIcon, SquarePenIcon, Trash2Icon } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/redux.hook";
import { setOpen } from "@/slices/chats/sidebar.slice";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Input } from "@/components/ui/input";
import { SidebarContext } from "./ChatSidebar";
import { deleteThread, updateThreadTitle } from "@/actions/thread.action";
import { queryClient } from "@/clients/query.client";
import { QueryKey } from "@/enums/query.enum";

type Props = {
  thread: Thread;
};

function ChatSidebarItem({ thread }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const isLgScreen = useMediaQuery("(max-width: 1024px)");
  const threadId = searchParams.get("chat");
  const [selected, setSelected] = useState<boolean>(false);
  const [rename, setRename] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(thread?.title || "");
  const { setIsAnyPopoverOpen } = useContext(SidebarContext);

  // Focus input when rename is enabled
  useEffect(() => {
    if (rename && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [rename]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selected &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selected]);

  const handleItemClick = useCallback(() => {
    dispatch(setOpen(false));
  }, [rename, dispatch]);

  // Handle rename submission
  const handleRenameSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      await updateThreadTitle(title, thread.threadId);
      await queryClient.invalidateQueries({
        queryKey: [QueryKey.Threads, thread.userId],
      });
      setRename(false);
    },
    [title],
  );

  // Handle key press in rename input
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setTitle(thread.title); // Reset to original title
        setRename(false);
      }
    },
    [thread.title],
  );

  // Handle popover actions with stopPropagation
  const handleRenameClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setRename(true);
    setIsAnyPopoverOpen(false);
  }, []);

  const handleDeleteClick = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      await deleteThread(thread.threadId);
      await queryClient.invalidateQueries({
        queryKey: [QueryKey.Threads, thread.userId],
      });
      setIsAnyPopoverOpen(false);
      //handleItemClick();
      if (threadId) router.push(pathname, { scroll: false });
    },
    [thread.threadId, setIsAnyPopoverOpen],
  );

  // Handle popover state changes
  const handlePopoverOpenChange = useCallback(
    (open: boolean) => {
      setIsAnyPopoverOpen(open);
    },
    [setIsAnyPopoverOpen],
  );

  return (
    <div
      onClick={handleItemClick}
      className={clsx(
        "group flex h-10 cursor-pointer items-center justify-between gap-2 rounded-md px-2 hover:bg-primary/5",
        {
          "bg-primary/10": threadId === thread.threadId,
          "bg-primary/5": selected,
        },
      )}
    >
      {rename ? (
        <form
          onSubmit={handleRenameSubmit}
          className="flex-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Input
            ref={inputRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleRenameSubmit}
            onKeyDown={handleKeyDown}
            className="h-8 border-0 px-0 shadow-none outline-0 focus-visible:ring-0 focus-visible:outline-0 md:text-base"
          />
        </form>
      ) : (
        <Link
          href={`?chat=${thread.threadId}`}
          className="flex-1 flex-nowrap overflow-hidden"
        >
          <p className="text-base text-nowrap text-ellipsis">{title}</p>
        </Link>
      )}
      <div
        onClick={(e) => e.stopPropagation()}
        ref={popoverRef}
        className="flex h-10 w-5 items-center justify-center"
      >
        <Popover onOpenChange={handlePopoverOpenChange}>
          <PopoverTrigger
            onClick={(e) => {
              e.stopPropagation();
              setSelected(!selected);
            }}
          >
            <EllipsisIcon
              size={18}
              className={clsx("cursor-pointer text-right", {
                "opacity-0 group-hover:opacity-100": !selected,
                "opacity-100": selected,
              })}
            />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-32 p-2">
            <div
              onClick={handleRenameClick}
              className="flex cursor-pointer items-center gap-1 px-2 py-2 hover:bg-primary/5"
            >
              <SquarePenIcon size={18} />
              <p className="text-sm">Rename</p>
            </div>
            <div
              onClick={handleDeleteClick}
              className="flex cursor-pointer items-center gap-1 px-2 py-2 hover:bg-primary/5"
            >
              <Trash2Icon size={18} className="text-destructive" />
              <p className="text-sm text-destructive">Delete</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default ChatSidebarItem;
