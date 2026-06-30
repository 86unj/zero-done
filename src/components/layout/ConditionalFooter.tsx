"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";

const FULLSCREEN_ROUTES = ["/showcase"];

export function ConditionalFooter() {
  const pathname = usePathname();
  if (FULLSCREEN_ROUTES.includes(pathname)) return null;
  return <Footer />;
}
