"use client";

import { useState } from "react";

function useClipBoard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const paste = async () => {
    try {
      return await navigator.clipboard.readText();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { copy, paste, isCopied };
}

export default useClipBoard;
