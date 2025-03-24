"use client";

import React from "react";
import { Button } from "./button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { selectViewport, setViewport } from "@/slices/viewport/viewport.slice";
import { PanelLeftDashedIcon, PanelRightCloseIcon, PanelRightOpenIcon } from "lucide-react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  type?: "open" | "close";
};

function SidebarToggle({ className, type = "close" }: Props) {
  const dispatch = useAppDispatch();
  const fullScreen = useAppSelector(selectViewport);
  return (
    <Button
      onClick={() => {
        dispatch(setViewport(!fullScreen));
      }}
      type={"button"}
      variant={"ghost"}
      size={"icon"}
      className={cn("[&_svg:not([class*='size-'])]:size-5", className)}
    >
      {type === "open" ? (
        <PanelRightCloseIcon size={22} />
      ) : (
        <PanelRightOpenIcon size={22} />
      )}
    </Button>
  );
}

export default SidebarToggle;
