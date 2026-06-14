"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Check,
  TrendingUp,
  Target,
  Rocket,
} from "lucide-react";
import Image from "next/image";

const trustIndicators = [
  "Estrategia",
  "Contenido",
  "Basado en datos",
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
      {/* Background Elements - Blue Only */}
      <div className="absolute inset-0">
        {/* Blue Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-[#2563EB]/12 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-[#3B82F6]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#60A5FA]/5 blur-[150px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-[180px] pb-[140px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#1F2937]/60 px-4 py-2 text-sm font-medium text-[#60A5FA] backdrop-blur-sm">
                <Rocket size={16} className="text-[#3B82F6]" />
                Agencia premium de marketing de crecimiento
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-[42px] leading-[1.05] font-extrabold tracking-tight md:text-[56px] lg:text-[72px]"
            >
              <span className="text-[#F9FAFB]">Haz que tu marca sea</span>
              <br />
              <span className="text-gradient">imposible de ignorar</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[#9CA3AF] md:text-xl"
            >
              Viral Hit Agency ayuda a empresas a generar atención, confianza y
              clientes mediante contenido estratégico, gestión profesional de
              redes sociales y marketing digital orientado al crecimiento.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contacto");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#3B82F6]/35"
              >
                Agenda una llamada estratégica
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#proceso"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#proceso");
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#1F2937] bg-[#1F2937]/60 px-7 py-4 text-base font-semibold text-[#F9FAFB] transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10"
              >
                <Play size={18} className="text-[#3B82F6]" />
                Cómo trabajamos
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2 text-sm text-[#9CA3AF]"
                >
                  <Check size={16} className="text-[#3B82F6]" />
                  {indicator}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Blue Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#2563EB]/20 via-[#3B82F6]/15 to-[#60A5FA]/20 blur-2xl" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-[#3B82F6]/20 shadow-2xl shadow-[#3B82F6]/15">
                <Image
                  src="/assets/images/hero-tech.jpg"
                  alt="Viral Hit Agency - Marketing Digital"
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover"
                  priority
                />

                {/* Blue Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-[#2563EB]/5 to-transparent" />
              </div>

              {/* Floating elements with Lucide icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 rounded-xl border border-[#3B82F6]/20 bg-[#111827]/95 px-5 py-4 shadow-xl shadow-[#3B82F6]/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6]/20">
                    <TrendingUp size={20} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F9FAFB]">
                      +300%
                    </p>
                    <p className="text-xs text-[#9CA3AF]">Engagement</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 rounded-xl border border-[#3B82F6]/20 bg-[#111827]/95 px-5 py-4 shadow-xl shadow-[#3B82F6]/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]/20">
                    <Target size={20} className="text-[#60A5FA]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F9FAFB]">
                      Estrategia
                    </p>
                    <p className="text-xs text-[#9CA3AF]">Personalizada</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
