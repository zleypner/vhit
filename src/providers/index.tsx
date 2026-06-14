"use client";

import { Toaster } from "sonner";
import { QueryProvider } from "./query-provider";
import { CookieConsentProvider } from "./cookie-consent-provider";
import { CookieBanner } from "@/components/cookie-banner";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <CookieConsentProvider>
        {children}
        <CookieBanner />
        <Toaster position="top-right" richColors />
      </CookieConsentProvider>
    </QueryProvider>
  );
}
