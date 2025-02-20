import React from "react";

function Aside({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`hidden border-l lg:block w-[26rem] bg-primary/10 ${className}`}>
      {children}
    </div>
  );
}

export default Aside;
