"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contacto" className="section-padding relative bg-[#0F172A]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#60A5FA]/8 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-[#93C5FD]/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#1F2937] bg-[#111827]/80 p-12 lg:p-20">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-transparent to-[#60A5FA]/5" />

            {/* Content */}
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-[32px] leading-tight font-bold text-[#F9FAFB] md:text-[40px] lg:text-[48px]">
                ¿Listo para hacer crecer tu marca?
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-[#9CA3AF] md:text-xl">
                Convirtamos tus redes sociales en un activo que genere
                confianza, visibilidad y nuevas oportunidades de negocio.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/50612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#3B82F6]/30"
                >
                  Agenda una llamada
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#servicios");
                  }}
                  className="inline-flex items-center justify-center rounded-xl border border-[#1F2937] bg-[#1F2937]/60 px-8 py-4 text-base font-semibold text-[#F9FAFB] transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-[#1F2937]"
                >
                  Ver Servicios
                </a>
              </div>
            </div>

            {/* Decorative gradient border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#60A5FA]/20 p-[1px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
