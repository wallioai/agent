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
    <div className={cn("hidden border-l lg:block w-[26rem] bg-primary/10", className)}>
      {children}
    </div>
  );
}

export default Aside;
