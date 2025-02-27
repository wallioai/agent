"use client";

import React, { ForwardedRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isOutline?: boolean;
}

const Radio = React.forwardRef(
  (
    { className, isOutline = true, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <label className="h-4 w-4 border border-primary rounded-none flex items-center justify-center">
      <input className="peer hidden" ref={ref} {...props} />
      <div className="h-[0.65rem] w-[0.65rem] duration-200 transition-none peer-checked:bg-primary"></div>
    </label>
  )
);
Radio.displayName = "Radio";
export default Radio;
