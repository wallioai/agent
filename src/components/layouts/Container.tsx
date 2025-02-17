import { cn } from "@/lib/utils";
import React from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
function Container({ children, className, ...props }: Props) {
  return (
    <div className={cn("flex h-full overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
