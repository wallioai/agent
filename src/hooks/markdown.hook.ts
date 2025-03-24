"use client";

import { useState, useEffect } from "react";
import { processMarkdown } from "@/lib/markdown";

export function useMarkdown(content: string) {
  const [processedContent, setProcessedContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    processMarkdown(content).then((result) => {
      if (isMounted) {
        setProcessedContent(result);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [content]);

  return { processedContent, isLoading };
}
