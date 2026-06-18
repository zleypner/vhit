"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative bg-[#0F172A] py-20 sm:py-28 lg:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[100px] sm:h-[700px] sm:w-[1400px] sm:blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 h-[250px] w-[250px] rounded-full bg-[#60A5FA]/8 blur-[80px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-[#93C5FD]/6 blur-[80px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827]/80 p-8 sm:rounded-3xl sm:p-14 lg:p-20">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/8 via-transparent to-[#60A5FA]/8" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 h-24 w-24 rounded-tl-2xl border-t-2 border-l-2 border-[#3B82F6]/30 sm:h-32 sm:w-32 sm:rounded-tl-3xl" />
            <div className="absolute right-0 bottom-0 h-24 w-24 rounded-br-2xl border-r-2 border-b-2 border-[#3B82F6]/30 sm:h-32 sm:w-32 sm:rounded-br-3xl" />

            {/* Content */}
            <div className="relative mx-auto max-w-3xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[24px] leading-tight font-bold sm:text-[36px] md:text-[44px]"
              >
                <span className="text-[#F9FAFB]">
                  ¿Su presencia digital refleja realmente
                </span>
                <br />
                <span className="text-gradient">
                  el nivel de excelencia de su empresa?
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 space-y-4 sm:mt-10"
              >
                <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg md:text-xl">
                  Las organizaciones invierten años construyendo una excelente
                  reputación.
                </p>
                <p className="text-base leading-relaxed font-medium text-[#F9FAFB] sm:text-lg md:text-xl">
                  Nosotros ayudamos a que esa reputación también sea{" "}
                  <span className="text-[#60A5FA]">
                    visible en el mundo digital
                  </span>
                  .
                </p>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex justify-center sm:mt-12"
              >
                <a
                  href="https://wa.me/50612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#3B82F6] px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#3B82F6]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#3B82F6]/35 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                >
                  Agendar Conversación Estratégica
                  <ArrowRight
                    size={20}
                    className="flex-shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </div>

            {/* Decorative gradient border effect */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#60A5FA]/20 p-[1px] sm:rounded-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
