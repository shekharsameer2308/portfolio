"use client";

import { useState, useEffect } from "react";

export type ViewportSize = "mobile" | "tablet" | "desktop" | "wide";

export function useViewport() {
  const [size, setSize] = useState<ViewportSize>("desktop");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSize("mobile");
        setIsMobile(true);
      } else if (width < 1024) {
        setSize("tablet");
        setIsMobile(false);
      } else if (width < 1440) {
        setSize("desktop");
        setIsMobile(false);
      } else {
        setSize("wide");
        setIsMobile(false);
      }
    };

    // Initial check
    handleResize();

    // Debounce resize slightly for performance
    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return { size, isMobile };
}
