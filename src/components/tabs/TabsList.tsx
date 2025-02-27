import React from "react";

function TabsList({
  children,
  className
}: Readonly<{
  children: React.ReactNode;
  className?: string
}>) {
  return <div className={`flex shrink-0 gap-x-5 ${className}`}>{children}</div>;
}
export default TabsList;
