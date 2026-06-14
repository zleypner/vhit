"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "@/providers/cookie-consent-provider";

export function CookieBanner() {
  const { consentStatus, acceptCookies, rejectCookies } = useCookieConsent();

  if (consentStatus !== "pending") {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed right-0 bottom-0 left-0 z-[10000] border-t border-[#1F2937] bg-[#030712]/95 px-4 py-4 backdrop-blur-sm sm:px-6"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-[#F9FAFB]/80 sm:text-left">
            Usamos cookies para recordar tus preferencias y mejorar tu
            experiencia.{" "}
            <span className="text-[#9CA3AF]">
              Si rechazas, algunas funciones pueden no estar disponibles.
            </span>
          </p>

          <div className="flex shrink-0 gap-3">
            <button
              onClick={rejectCookies}
              className="rounded-full border border-[#9CA3AF]/40 px-4 py-2 text-sm font-medium text-[#9CA3AF] transition-colors hover:border-[#9CA3AF] hover:text-[#F9FAFB]"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="rounded-full border border-[#3B82F6] bg-[#3B82F6] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2563EB]"
            >
              Aceptar
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
