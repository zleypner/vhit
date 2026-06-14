"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  startTransition,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "@/providers/cookie-consent-provider";

const COOKIE_NAME = "viral-hit-entry-passed";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

interface EntryGateProps {
  children: React.ReactNode;
}

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

export function EntryGate({ children }: EntryGateProps) {
  const { hasConsent } = useCookieConsent();
  const [showGate, setShowGate] = useState<boolean | null>(null);
  const [escapeAttempts, setEscapeAttempts] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonFlownAway, setButtonFlownAway] = useState(false);
  const [exitDirection] = useState(() => ({
    x: Math.random() > 0.5 ? 1 : -1,
    rotate: Math.random() > 0.5 ? 360 : -360,
  }));
  const [isExiting, setIsExiting] = useState(false);
  const [sequenceStarted, setSequenceStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const atipicaButtonRef = useRef<HTMLButtonElement>(null);

  // Check cookie on mount - determine initial gate visibility
  // This effect is necessary because cookies are only available client-side
  useEffect(() => {
    const shouldShowGate = hasConsent ? !getCookie(COOKIE_NAME) : true;
    startTransition(() => {
      setShowGate(shouldShowGate);
    });
  }, [hasConsent]);

  // Calculate escape position - escapes away from cursor, never overlaps Atípica
  // Formula:
  // 1. Get cursor position relative to button center
  // 2. Calculate escape vector (opposite direction from cursor)
  // 3. Move button along that vector with increasing distance
  // 4. Ensure it doesn't overlap with Atípica button
  const escapeButton = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (escapeAttempts >= 3) {
        setButtonFlownAway(true);
        return;
      }

      const container = containerRef.current;
      const button = buttonRef.current;
      const atipicaButton = atipicaButtonRef.current;
      if (!container || !button) return;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      // Get cursor position
      let cursorX: number, cursorY: number;
      if ("touches" in e) {
        cursorX = e.touches[0].clientX;
        cursorY = e.touches[0].clientY;
      } else {
        cursorX = e.clientX;
        cursorY = e.clientY;
      }

      // Button center in screen coordinates
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      // Vector from cursor to button center (escape direction)
      let escapeX = buttonCenterX - cursorX;
      let escapeY = buttonCenterY - cursorY;

      // Normalize the vector
      const magnitude = Math.sqrt(escapeX * escapeX + escapeY * escapeY);
      if (magnitude > 0) {
        escapeX /= magnitude;
        escapeY /= magnitude;
      } else {
        // If cursor is exactly on button, escape randomly up or down
        escapeX = 0;
        escapeY = Math.random() > 0.5 ? 1 : -1;
      }

      // Distance increases with each attempt
      // Formula: baseDistance + (attempt * increment)
      const baseDistance = 80;
      const increment = 40;
      const attempt = escapeAttempts + 1;
      const escapeDistance = baseDistance + attempt * increment;

      // Calculate new position (relative to initial position 0,0)
      let newX = buttonPosition.x + escapeX * escapeDistance;
      const newY = buttonPosition.y + escapeY * escapeDistance;

      // Get Atípica button position to avoid overlap
      if (atipicaButton) {
        const atipicaRect = atipicaButton.getBoundingClientRect();

        // Check if new position would overlap with Atípica (centered at x=0)
        const overlapThresholdX =
          (buttonRect.width + atipicaRect.width) / 2 + 20;
        const overlapThresholdY =
          (buttonRect.height + atipicaRect.height) / 2 + 10;

        // If overlapping horizontally and vertically, push away
        if (
          Math.abs(newX) < overlapThresholdX &&
          Math.abs(newY) < overlapThresholdY
        ) {
          // Move to the side that's further from cursor
          if (escapeX >= 0) {
            newX = overlapThresholdX + 20;
          } else {
            newX = -overlapThresholdX - 20;
          }
        }
      }

      // Clamp to container bounds
      const maxX = (containerRect.width - buttonRect.width) / 2 - 20;
      const maxY = 180;

      const clampedX = Math.max(-maxX, Math.min(maxX, newX));
      const clampedY = Math.max(-maxY, Math.min(maxY, newY));

      setButtonPosition({ x: clampedX, y: clampedY });
      setEscapeAttempts((prev) => prev + 1);
    },
    [escapeAttempts, buttonPosition]
  );

  // Handle clicking "Atípica"
  const handleAtipicaClick = () => {
    if (sequenceStarted) return;
    setSequenceStarted(true);
  };

  // Handle clicking "Continuar"
  const handleContinue = () => {
    setIsExiting(true);
    // Only save cookie if user has given consent
    if (hasConsent) {
      setCookie(COOKIE_NAME, "true", COOKIE_MAX_AGE);
    }
    setTimeout(() => {
      setShowGate(false);
    }, 800);
  };

  // Show nothing while checking
  if (showGate === null) {
    return null;
  }

  // User has already entered (and had consent)
  if (!showGate) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {!isExiting && (
          <motion.div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] px-6"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Content */}
            <AnimatePresence mode="wait">
              {!sequenceStarted ? (
                <motion.div
                  key="initial-content"
                  className="flex max-w-2xl flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Title */}
                  <motion.h1
                    className="mb-2 text-4xl font-bold tracking-tight text-[#F9FAFB] sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    HOLA
                  </motion.h1>
                  <motion.h2
                    className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <span className="text-[#F9FAFB]">BIENVENIDO A </span>
                    <span className="text-[#3B82F6]">VIRAL HIT</span>
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.p
                    className="mb-10 text-lg text-[#9CA3AF] sm:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    Ayudamos a las marcas a destacar en un mundo lleno de ruido.
                  </motion.p>

                  {/* Question */}
                  <motion.div
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <p className="mb-2 text-base text-[#9CA3AF]/60">
                      Pero antes de continuar:
                    </p>
                    <p className="text-xl font-medium text-[#F9FAFB] sm:text-2xl">
                      ¿Qué tipo de marketing está buscando?
                    </p>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    {/* Escape Button - Típica (Blue) */}
                    <AnimatePresence>
                      {!buttonFlownAway && (
                        <motion.button
                          ref={buttonRef}
                          className="rounded-full border-2 border-[#3B82F6] bg-transparent px-6 py-3 text-sm font-medium text-[#3B82F6] transition-colors hover:bg-[#3B82F6] hover:text-white sm:px-8 sm:text-base"
                          animate={{
                            x: buttonPosition.x,
                            y: buttonPosition.y,
                          }}
                          exit={{
                            x: buttonPosition.x + exitDirection.x * 1000,
                            y: buttonPosition.y - 500,
                            rotate: exitDirection.rotate,
                            opacity: 0,
                            scale: 0.5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          onMouseEnter={(e) => escapeButton(e)}
                          onTouchStart={(e) => {
                            e.preventDefault();
                            escapeButton(e);
                          }}
                          onClick={(e) => escapeButton(e)}
                        >
                          Típica
                        </motion.button>
                      )}
                    </AnimatePresence>

                    {/* Main CTA Button - Atípica (Gray, turns Blue when Típica flies away) */}
                    <motion.button
                      ref={atipicaButtonRef}
                      className={`group relative rounded-full border-2 px-6 py-3 text-sm font-medium transition-all sm:px-8 sm:text-base ${
                        buttonFlownAway
                          ? "border-[#3B82F6] bg-transparent text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
                          : "border-[#9CA3AF]/40 bg-transparent text-[#9CA3AF] hover:border-[#9CA3AF] hover:text-[#F9FAFB]"
                      }`}
                      onClick={handleAtipicaClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      animate={
                        buttonFlownAway
                          ? {
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                "0 0 0px #3B82F6",
                                "0 0 30px #3B82F6",
                                "0 0 15px #3B82F6",
                              ],
                            }
                          : {}
                      }
                      transition={
                        buttonFlownAway
                          ? {
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }
                          : {}
                      }
                    >
                      Atípica
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="sequence-content"
                  className="flex max-w-2xl flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* All messages displayed together */}
                  <motion.p
                    className="mb-4 text-2xl font-medium text-[#3B82F6] sm:text-3xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Excelente elección.
                  </motion.p>

                  <motion.p
                    className="mb-4 text-lg text-[#9CA3AF] sm:text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    No creemos en fórmulas genéricas.
                  </motion.p>

                  <motion.p
                    className="mb-4 text-lg text-[#9CA3AF] sm:text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Creemos en marcas que generan impacto.
                  </motion.p>

                  <motion.p
                    className="mb-10 text-2xl font-bold text-[#F9FAFB] sm:text-3xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    Bienvenido a{" "}
                    <span className="text-[#3B82F6]">Viral Hit</span>.
                  </motion.p>

                  {/* Continue button */}
                  <motion.button
                    className="rounded-full border-2 border-[#3B82F6] bg-[#3B82F6] px-8 py-3 text-base font-medium text-white transition-all hover:bg-transparent hover:text-[#3B82F6] sm:px-10"
                    onClick={handleContinue}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continuar
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative elements - Blue gradients */}
            <motion.div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {/* Gradient orbs */}
              <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-[#3B82F6]/10 blur-3xl" />
              <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-[#60A5FA]/10 blur-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit animation overlay */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#030712]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Main content - always rendered but hidden during gate */}
      <div className={showGate && !isExiting ? "invisible" : "visible"}>
        {children}
      </div>
    </>
  );
}
