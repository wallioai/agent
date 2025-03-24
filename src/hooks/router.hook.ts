"use client";

import {
  usePathname,
  useRouter as useNextRouter,
  useSearchParams,
} from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

type EnhancedRouterOptions = {
  /**
   * Parameters to preserve across navigation
   */
  preserveParams?: string[];

  /**
   * Paths where parameters should NOT be preserved
   */
  excludePaths?: string[];

  /**
   * Paths where parameters should ONLY be preserved
   */
  includePaths?: string[];

  /**
   * Enable debug logging
   */
  debug?: boolean;
};

/**
 * Enhanced router that preserves specified query parameters across navigation
 */
export function useEnhancedRouter({
  preserveParams = ["chat"],
  excludePaths = [],
  includePaths,
  debug = false,
}: EnhancedRouterOptions = {}) {
  const router = useNextRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create a map of parameters to preserve and their current values
  const paramsToPreserve = useMemo(() => {
    const params: Record<string, string> = {};
    preserveParams.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        params[param] = value;
      }
    });
    return params;
  }, [preserveParams, searchParams]);

  // Check if we should preserve parameters on a given path
  const shouldPreserveOnPath = useCallback(
    (path: string) => {
      // Normalize paths by removing trailing slashes
      const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;

      // Check if the path is excluded
      const isExcluded = excludePaths.some((excludePath) => {
        // Normalize exclude path
        const normalizedExcludePath = excludePath.endsWith("/")
          ? excludePath.slice(0, -1)
          : excludePath;

        // Check if the path exactly matches the exclude path
        if (normalizedPath === normalizedExcludePath) {
          return true;
        }

        // Check if the path is a child of the exclude path
        // We need to ensure it's a proper child path by checking for the slash
        if (normalizedPath.startsWith(normalizedExcludePath + "/")) {
          return true;
        }

        return false;
      });

      if (isExcluded) {
        return false;
      }

      // If includePaths is provided, check if the path is included
      if (includePaths && includePaths.length > 0) {
        const isIncluded = includePaths.some((includePath) => {
          // Normalize include path
          const normalizedIncludePath = includePath.endsWith("/")
            ? includePath.slice(0, -1)
            : includePath;

          // Check if the path exactly matches the include path
          if (normalizedPath === normalizedIncludePath) {
            return true;
          }

          // Check if the path is a child of the include path
          if (normalizedPath.startsWith(normalizedIncludePath + "/")) {
            return true;
          }

          return false;
        });

        return isIncluded;
      }

      // If no includePaths provided, preserve on all paths (except excluded ones)
      return true;
    },
    [excludePaths, includePaths],
  );

  // Add preserved parameters to a URL
  const addPreservedParams = useCallback(
    (url: string) => {
      try {
        // If there are no parameters to preserve, return the original URL
        if (Object.keys(paramsToPreserve).length === 0) {
          return url;
        }

        // Parse the URL
        const urlObj = new URL(
          url.startsWith("http") ? url : `${window.location.origin}${url}`,
        );

        // Check if we should preserve parameters on this path
        const shouldPreserve = shouldPreserveOnPath(urlObj.pathname);

        if (debug) {
          console.log(`[EnhancedRouter] URL: ${url}`);
          console.log(`[EnhancedRouter] Path: ${urlObj.pathname}`);
          console.log(`[EnhancedRouter] Should preserve: ${shouldPreserve}`);
          console.log(`[EnhancedRouter] Params to preserve:`, paramsToPreserve);
        }

        if (!shouldPreserve) {
          return url;
        }

        // Add preserved parameters if they're not already in the URL
        let modified = false;
        Object.entries(paramsToPreserve).forEach(([param, value]) => {
          if (!urlObj.searchParams.has(param)) {
            urlObj.searchParams.set(param, value);
            modified = true;
            if (debug) {
              console.log(`[EnhancedRouter] Added param ${param}=${value}`);
            }
          }
        });

        // Return the modified URL if changes were made
        if (modified) {
          return urlObj.pathname + urlObj.search + urlObj.hash;
        }

        return url;
      } catch (error) {
        console.error("Error adding preserved params:", error);
        return url;
      }
    },
    [paramsToPreserve, shouldPreserveOnPath, debug],
  );

  // Enhanced navigation methods
  const push = useCallback(
    (
      url: string,
      options?: { preserveParams?: boolean } & Parameters<
        typeof router.push
      >[1],
    ) => {
      const shouldPreserve = options?.preserveParams !== false;
      const enhancedUrl = shouldPreserve ? addPreservedParams(url) : url;

      if (debug) {
        console.log(`[EnhancedRouter] push: ${url} -> ${enhancedUrl}`);
      }

      router.push(enhancedUrl, options);
    },
    [router, addPreservedParams, debug],
  );

  const replace = useCallback(
    (
      url: string,
      options?: { preserveParams?: boolean } & Parameters<
        typeof router.replace
      >[1],
    ) => {
      const shouldPreserve = options?.preserveParams !== false;
      const enhancedUrl = shouldPreserve ? addPreservedParams(url) : url;

      if (debug) {
        console.log(`[EnhancedRouter] replace: ${url} -> ${enhancedUrl}`);
      }

      router.replace(enhancedUrl, options);
    },
    [router, addPreservedParams, debug],
  );

  // Handle back/forward navigation
  useEffect(() => {
    if (Object.keys(paramsToPreserve).length === 0) return;

    const handlePopState = () => {
      // Check if we should preserve parameters on the current path
      if (!shouldPreserveOnPath(pathname)) return;

      // Check if any preserved parameters are missing
      let missingParams = false;
      for (const [param, value] of Object.entries(paramsToPreserve)) {
        if (!searchParams.has(param)) {
          missingParams = true;
          break;
        }
      }

      // If any parameters are missing, add them
      if (missingParams) {
        const params = new URLSearchParams(searchParams.toString());
        let modified = false;

        Object.entries(paramsToPreserve).forEach(([param, value]) => {
          if (!params.has(param)) {
            params.set(param, value);
            modified = true;
          }
        });

        if (modified) {
          router.replace(`${pathname}?${params.toString()}`);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [pathname, searchParams, paramsToPreserve, shouldPreserveOnPath, router]);

  // Return the enhanced router
  return {
    // Original router methods
    ...router,
    // Enhanced methods
    push,
    replace,
    // Helper methods
    addPreservedParams,
    shouldPreserveOnPath,
    preservedParams: paramsToPreserve,
  };
}
