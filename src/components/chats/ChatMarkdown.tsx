"use client";

import { marked } from "marked";
import { memo, useMemo } from "react";
import { useMarkdown } from "@/hooks/markdown.hook";

function parseMarkdownIntoBlocks(markdown: string): string[] {
  const tokens = marked.lexer(markdown);
  return tokens.map((token) => token.raw);
}

interface MarkdownBlockProps {
  content: string;
}

const MemoizedMarkdownBlock = memo<MarkdownBlockProps>(
  ({ content }) => {
    const processedContent = useMarkdown(content);
    return (
      <div className="markdown">
        <div
          className="select-auto"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.content === nextProps.content,
);

MemoizedMarkdownBlock.displayName = "MemoizedMarkdownBlock";

interface EnhancedChatMarkdownProps {
  content: string;
  id: string;
}

export const EnhancedChatMarkdown = memo<EnhancedChatMarkdownProps>(
  ({ content, id }) => {
    const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content]);

    return (
      <>
        {blocks.map((block, index) => (
          <MemoizedMarkdownBlock content={block} key={`${id}-block_${index}`} />
        ))}
      </>
    );
  },
);

EnhancedChatMarkdown.displayName = "EnhancedChatMarkdown";
