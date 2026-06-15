"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Check } from "lucide-react";
import Image from "next/image";

const trustIndicators = [
  "Estrategia personalizada",
  "Presencia consistente",
  "Resultados medibles",
];

export function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-[#2563EB]/12 blur-[80px] md:h-[600px] md:w-[600px] md:blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[250px] w-[250px] animate-pulse rounded-full bg-[#3B82F6]/10 blur-[60px] md:h-[500px] md:w-[500px] md:blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#60A5FA]/5 blur-[100px] md:h-[800px] md:w-[800px] md:blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 pt-24 pb-16 sm:px-6 sm:pt-[180px] sm:pb-[140px]">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#1F2937]/60 px-3 py-1.5 text-xs font-medium text-[#60A5FA] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                <Briefcase size={14} className="text-[#3B82F6] sm:h-4 sm:w-4" />
                Agencia de posicionamiento digital
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-[26px] leading-[1.2] font-bold tracking-tight sm:mt-8 sm:text-[36px] md:text-[44px] lg:text-[52px]"
            >
              <span className="text-[#F9FAFB]">
                Su empresa ya hace un gran trabajo.
              </span>
              <br />
              <span className="text-gradient mt-2 block">
                Nosotros nos aseguramos de que más personas lo vean.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base leading-relaxed text-[#9CA3AF] sm:mt-8 sm:text-lg md:text-xl"
            >
              Construimos una presencia digital consistente mediante estrategia,
              contenido y gestión profesional de redes sociales para que su
              marca permanezca visible, relevante y memorable.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contacto");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-5 py-3 text-[15px] font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#3B82F6]/35 sm:px-7 sm:py-4 sm:text-base"
              >
                Agendar Diagnóstico
                <ArrowRight
                  size={18}
                  className="flex-shrink-0 transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#portafolio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#portafolio");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#1F2937] bg-[#1F2937]/60 px-5 py-3 text-[15px] font-semibold text-[#F9FAFB] transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 sm:px-7 sm:py-4 sm:text-base"
              >
                Ver Nuestro Trabajo
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col gap-2.5 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3"
            >
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2 text-[13px] text-[#9CA3AF] sm:text-sm"
                >
                  <Check
                    size={14}
                    className="flex-shrink-0 text-[#3B82F6] sm:h-4 sm:w-4"
                  />
                  {indicator}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Blue Glow behind image */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 via-[#3B82F6]/15 to-[#60A5FA]/20 blur-xl sm:-inset-4 sm:rounded-3xl sm:blur-2xl" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-xl border border-[#3B82F6]/20 shadow-2xl shadow-[#3B82F6]/15 sm:rounded-2xl">
                <Image
                  src="/assets/images/hero-tech.jpg"
                  alt="Viral Hit - Posicionamiento Digital"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  priority
                />

                {/* Blue Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-[#2563EB]/5 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-[#030712] to-transparent sm:h-32" />
    </section>
  );
}
