"use client";

import React from "react";
import toast, { ToastOptions } from "react-hot-toast";

type Position =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

interface ToastProps extends ToastOptions {
  msg: string;
  pos?: Position;
}

function useToast() {
  const toastId = React.useRef<any>(null);

  const notify = ({ msg, pos = "bottom-center", ...prop }: ToastProps) => {
    toastId.current = toast(msg, {
      position: pos,
      ...prop,
    });
  };

  const loading = ({ msg, pos = "bottom-center", ...prop }: ToastProps) => {
    toastId.current = toast.loading(msg, {
      position: pos,
      ...prop,
    });
  };

  const updateLoading = ({
    msg,
    pos = "bottom-center",
    ...prop
  }: ToastProps) => {
    toast.loading(msg, {
      id: toastId.current,
      position: pos,
      ...prop,
    });
  };

  const success = ({ msg, pos = "bottom-center", ...prop }: ToastProps) => {
    toast.success(msg, {
      id: toastId.current,
      position: pos,
      ...prop,
    });
  };

  const error = ({ msg, pos = "bottom-center", ...prop }: ToastProps) => {
    toastId.current = toast.error(msg, {
      id: toastId.current,
      position: pos,
      ...prop,
    });
  };

  return { notify, loading, error, success, updateLoading };
}

export default useToast;
