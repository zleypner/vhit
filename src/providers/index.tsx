"use client";

import { Toaster } from "sonner";
import { QueryProvider } from "./query-provider";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      {children}
      <Toaster position="top-right" richColors />
    </QueryProvider>
  );
}
