import React from "react";

const textPosClass = {
  CENTER: "text-center justify-center items-center",
  LEFT: "text-left justify-start items-start",
};
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  className?: string;
  value: string;
  onTabChange: (tabId: string) => void;
  activeTabId: string;
  isActiveBg?: boolean;
  isActiveText?: boolean;
  isCenter?: boolean;
  textPos?: "CENTER" | "LEFT";
  isMarker?: boolean;
}

function TabsHeader({
  title,
  className,
  value,
  onTabChange,
  activeTabId,
  isActiveBg,
  isActiveText,
  isCenter = true,
  textPos = "LEFT",
  isMarker = true,
  ...prop
}: Props) {
  const bg = activeTabId === value && isActiveBg ? "bg-primary/10" : "";
  const textColor =
    activeTabId === value && isActiveText
      ? "text-primary"
      : "hover:text-primary";
  const alignClass = isCenter ? "flex-1" : "flex-0";

  return (
    <div
      {...prop}
      onClick={() => onTabChange(value)}
      className={`relative h-8 font-medium select-none ${bg} text-medium flex text-sm ${alignClass} ${textPosClass[textPos]} hover:bg-text-primary cursor-pointer ${className}`}
    >
      <p className={`${textColor} whitespace-nowrap`}>{title}</p>
      {isMarker && (
        <>
          {activeTabId === value && (
            <div
              className={`absolute bottom-0 h-1 w-8 rounded-md bg-primary`}
            ></div>
          )}
        </>
      )}
    </div>
  );
}

export default TabsHeader;
