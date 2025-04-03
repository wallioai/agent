"use client";

import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CheckCheckIcon, CopyIcon } from "lucide-react";
import useClipBoard from "@/hooks/clipboard.hook";

interface MarkdownContentProps {
  content: string;
  isOwnerMsg?: boolean;
}

export function MarkdownContent({ content, isOwnerMsg }: MarkdownContentProps) {
  const { copy, isCopied } = useClipBoard();
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: ({ className, ...props }) => (
              <h1
                className={cn(
                  "mt-12 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl",
                  className,
                )}
                {...props}
              />
            ),
          },
          h2: {
            component: ({ className, ...props }) => (
              <h2
                className={cn(
                  "mt-10 mb-4 text-3xl font-bold tracking-tight",
                  className,
                )}
                {...props}
              />
            ),
          },
          h3: {
            component: ({ className, ...props }) => (
              <h3
                className={cn(
                  "mt-8 mb-4 text-2xl font-bold tracking-tight",
                  className,
                )}
                {...props}
              />
            ),
          },
          h4: {
            component: ({ className, ...props }) => (
              <h4
                className={cn(
                  "mt-6 mb-4 text-xl font-bold tracking-tight",
                  className,
                )}
                {...props}
              />
            ),
          },
          h5: {
            component: ({ className, ...props }) => (
              <h5
                className={cn(
                  "mt-4 mb-4 text-lg font-bold tracking-tight",
                  className,
                )}
                {...props}
              />
            ),
          },
          h6: {
            component: ({ className, ...props }) => (
              <h6
                className={cn(
                  "mt-4 mb-4 text-base font-bold tracking-tight",
                  className,
                )}
                {...props}
              />
            ),
          },
          p: {
            component: ({ className, ...props }) => (
              <p
                className={cn(
                  "mb-4 leading-7 [&:not(:first-child)]:mt-6",
                  className,
                )}
                {...props}
              />
            ),
          },
          a: {
            component: ({ className, children, href, ...props }) => {
              // Clean the href by removing any surrounding quotes
              const cleanHref = href
                ? href.replace(/^['"](.*)['"]$/, "$1")
                : "";

              // Check if it's an external link
              const isExternal = cleanHref.startsWith("http");
              const anchorClass = `font-medium ${isOwnerMsg ? "text-white" : "text-primary"} hover:underline hover:underline-offset-2 font-bold`;

              return isExternal ? (
                <a
                  className={cn(anchorClass, className)}
                  href={cleanHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              ) : (
                <Link
                  className={cn(anchorClass, className)}
                  href={cleanHref}
                  {...props}
                >
                  {children}
                </Link>
              );
            },
          },
          ul: {
            component: ({ className, ...props }) => (
              <ul
                className={cn("my-2 ml-4 list-disc [&>li]:mt-2", className)}
                {...props}
              />
            ),
          },
          ol: {
            component: ({ className, ...props }) => (
              <ol
                className={cn("my-2 ml-4.5 list-decimal [&>li]:mt-2", className)}
                {...props}
              />
            ),
          },
          li: {
            component: ({ className, ...props }) => (
              <li
                className={cn(
                  "[&>p]:mb-2",
                  isOwnerMsg ? "text-white" : "",
                  className,
                )}
                {...props}
              />
            ),
          },
          blockquote: {
            component: ({ className, ...props }) => (
              <blockquote
                className={cn(
                  "mt-6 border-l-2 border-primary pl-6 italic [&>*]:text-muted-foreground",
                  className,
                )}
                {...props}
              />
            ),
          },
          img: {
            component: ({ alt, src, className, ...props }) => (
              <div className="my-8 overflow-hidden rounded-lg border">
                <Image
                  src={src || ""}
                  alt={alt || ""}
                  width={1200}
                  height={630}
                  className={cn("w-full", className)}
                  {...props}
                />
              </div>
            ),
          },
          hr: {
            component: ({ className, ...props }) => (
              <hr
                className={cn("my-8 border-muted-foreground/20", className)}
                {...props}
              />
            ),
          },
          table: {
            component: ({ className, ...props }) => (
              <div className="my-6 w-full overflow-y-auto">
                <table
                  className={cn("w-full border-collapse", className)}
                  {...props}
                />
              </div>
            ),
          },
          thead: {
            component: ({ className, ...props }) => (
              <thead className={cn("border-b", className)} {...props} />
            ),
          },
          tbody: {
            component: ({ className, ...props }) => (
              <tbody className={cn("", className)} {...props} />
            ),
          },
          tr: {
            component: ({ className, ...props }) => (
              <tr
                className={cn("m-0 border-t p-0 even:bg-muted", className)}
                {...props}
              />
            ),
          },
          th: {
            component: ({ className, ...props }) => (
              <th
                className={cn(
                  "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                  className,
                )}
                {...props}
              />
            ),
          },
          td: {
            component: ({ className, ...props }) => (
              <td
                className={cn(
                  "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  className,
                )}
                {...props}
              />
            ),
          },
          pre: {
            component: ({ className, children, ...props }) => {
              // Extract the text content from the children
              let codeContent = "";
              if (typeof children === "string") {
                codeContent = children;
              } else if (Array.isArray(children)) {
                codeContent = children
                  .map((child) =>
                    typeof child === "string"
                      ? child
                      : child?.props?.children || "",
                  )
                  .join("");
              } else if (children?.props?.children) {
                codeContent = children.props.children;
              }

              return (
                <div className="group relative my-2 flex w-full max-w-full items-center overflow-x-auto rounded-md">
                  <pre
                    className={cn(
                      "scrollbar-hide overflow-x-auto bg-background p-2 font-mono text-sm",
                      className,
                    )}
                    {...props}
                  >
                    {children}
                  </pre>
                  <div className="bg-background">
                    <Button
                      onClick={() => copy(codeContent)}
                      variant={"ghost"}
                      className="rounded-none border-0 bg-background hover:bg-primary/10"
                    >
                      {isCopied ? <CheckCheckIcon className="text-primary" /> : <CopyIcon />}
                    </Button>
                  </div>
                </div>
              );
            },
          },
          code: {
            component: ({ className, ...props }) => (
              <code
                onClick={() => {}}
                className={cn(
                  "relative rounded bg-background px-[0.3rem] py-[0.2rem] font-mono text-sm",
                  className,
                )}
                {...props}
              />
            ),
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
}
