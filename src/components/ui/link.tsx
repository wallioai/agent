"use client";

import type React from "react";

import NextLink from "next/link";
import { useEnhancedRouter } from "@/hooks/router.hook";
import { useCallback } from "react";

interface EnhancedLinkProps extends React.ComponentProps<typeof NextLink> {
  preserveParams?: boolean;
  children: React.ReactNode;
}

export function EnhancedLink({
  preserveParams = true,
  href,
  children,
  onClick,
  ...props
}: EnhancedLinkProps) {
  const enhancedRouter = useEnhancedRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      // Call the original onClick if provided
      if (onClick) {
        onClick(e as any);
      }

      // If the default was prevented or preserveParams is false, don't do anything
      if (e.defaultPrevented || !preserveParams) {
        return;
      }

      // Prevent the default navigation
      e.preventDefault();

      // Use our enhanced router to navigate
      enhancedRouter.push(href.toString());
    },
    [href, onClick, preserveParams, enhancedRouter],
  );

  // If preserveParams is true, add the preserved parameters to the href
  const enhancedHref = preserveParams
    ? enhancedRouter.addPreservedParams(href.toString())
    : href;

  return (
    <NextLink href={enhancedHref} {...props} onClick={handleClick}>
      {children}
    </NextLink>
  );
}
