"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/gtag";

export const usePageView = (pageTitle?: string) => {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname, pageTitle);
  }, [pathname, pageTitle]);
};
