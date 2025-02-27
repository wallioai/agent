import React from "react";

function TabsRoot({
  className,
  children,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
export default TabsRoot;
