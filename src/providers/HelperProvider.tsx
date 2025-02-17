"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

export function HelperProvider() {
  return (
    <Fragment>
      <ProgressBar
        height="4px"
        color="#463acb"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Toaster />
    </Fragment>
  );
}
