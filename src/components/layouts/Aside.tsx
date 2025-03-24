import { cn } from "@/lib/utils";
import React from "react";

function Aside({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cn("border-l w-[26rem]", className)}>
      {children}
    </div>
  );
}

export default Aside;
