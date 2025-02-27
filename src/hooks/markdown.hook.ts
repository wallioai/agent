"use client";

import { useState, useEffect } from "react";
import { processMarkdown } from "@/lib/markdown";

export function useMarkdown(content: string) {
  const [processedContent, setProcessedContent] = useState("");

  useEffect(() => {
    let isMounted = true;
    processMarkdown(content).then((result) => {
      if (isMounted) {
        setProcessedContent(result);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [content]);

  return processedContent;
}

