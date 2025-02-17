import React, { FC } from "react";
import Image from "next/image";
import LogoImg from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";

export type IconType = {
  className?: string;
  width?: number;
  height?: number;
};

export function Logo({ className, width = 260, height = 260 }: IconType) {
  return (
    <Image
      priority
      src={LogoImg}
      width={width}
      height={height}
      alt={`dexa wallet logo`}
      className={cn("h-10 w-10", className)}
    />
  );
}
