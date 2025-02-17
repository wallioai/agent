"use client";

import React, { Fragment, type PropsWithChildren } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import { ErrorBoundary } from "@/components/error/ErrorBoundary";
import { ErrorPage } from "@/components/error/ErrorPage";
import Loader from "@/components/ui/loader";

export default function RootProvider(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <Fragment {...props} />
    </ErrorBoundary>
  ) : (
    <Loader />
  );
}
