"use client";

import React from "react";
import { Button } from "./button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { selectViewport, setViewport } from "@/slices/viewport/viewport.slice";
import { PanelLeftDashedIcon } from "lucide-react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function SidebarToggle({ className }: Props) {
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
      <PanelLeftDashedIcon size={22} />
    </Button>
  );
}

export default SidebarToggle;
