"use client";

import React, { ReactNode, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { MessageCirclePlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { selectOpen, setOpen } from "@/slices/chats/sidebar.slice";

type Props = VariantProps<typeof buttonVariants> & {
  iconClass?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

function NewChatButton({
  iconClass,
  className,
  onClick,
  children,
  variant = "ghost",
  size = "icon",
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const threadId = searchParams.get("chat");

  const dispatch = useAppDispatch();
  const open = useAppSelector(selectOpen);

  useEffect(() => {
    router.prefetch(pathname);
  }, [router]);

  const newChat = () => {
    onClick?.();
    if (threadId) router.push(pathname, { scroll: false });
    if (open) dispatch(setOpen(false));
  };

  return (
    <Button
      onClick={newChat}
      variant={variant}
      size={size}
      className={cn("[&_svg:not([class*='size-'])]:size-5", className)}
    >
      {!children ? <MessageCirclePlusIcon className={iconClass} /> : children}
    </Button>
  );
}

export default NewChatButton;
