"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  startTransition,
  type ReactNode,
} from "react";

const CONSENT_COOKIE_NAME = "cookie-consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

type ConsentStatus = "pending" | "accepted" | "rejected";

interface CookieConsentContextValue {
  consentStatus: ConsentStatus;
  acceptCookies: () => void;
  rejectCookies: () => void;
  hasConsent: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({
  children,
}: CookieConsentProviderProps) {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [isHydrated, setIsHydrated] = useState(false);

  // Check for existing consent on mount
  useEffect(() => {
    const existingConsent = getCookie(CONSENT_COOKIE_NAME);
    startTransition(() => {
      if (existingConsent === "accepted") {
        setConsentStatus("accepted");
      } else if (existingConsent === "rejected") {
        setConsentStatus("rejected");
      }
      setIsHydrated(true);
    });
  }, []);

  const acceptCookies = useCallback(() => {
    setCookie(CONSENT_COOKIE_NAME, "accepted", COOKIE_MAX_AGE);
    setConsentStatus("accepted");
  }, []);

  const rejectCookies = useCallback(() => {
    setCookie(CONSENT_COOKIE_NAME, "rejected", COOKIE_MAX_AGE);
    setConsentStatus("rejected");
  }, []);

  // Don't render children until hydrated to avoid mismatch
  if (!isHydrated) {
    return null;
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consentStatus,
        acceptCookies,
        rejectCookies,
        hasConsent: consentStatus === "accepted",
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}
