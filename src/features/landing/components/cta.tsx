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
    <section
      id="contacto"
      className="relative bg-[#0F172A] py-20 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[80px] sm:h-[600px] sm:w-[1200px] sm:blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 h-[200px] w-[200px] rounded-full bg-[#60A5FA]/8 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[200px] w-[200px] rounded-full bg-[#93C5FD]/6 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
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
          <div className="relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827]/80 p-8 sm:rounded-3xl sm:p-12 lg:p-20">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-transparent to-[#60A5FA]/5" />

            {/* Content */}
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-[28px] leading-tight font-bold text-[#F9FAFB] sm:text-[36px] md:text-[42px]">
                Su próxima publicación no debería ser improvisada.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[#9CA3AF] sm:mt-8 sm:text-lg md:text-xl">
                Convierta sus redes sociales en una herramienta de
                posicionamiento y crecimiento para su empresa.
              </p>

              {/* Button */}
              <div className="mt-10 flex justify-center sm:mt-12">
                <a
                  href="https://wa.me/50612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#3B82F6]/30 sm:px-10 sm:py-5 sm:text-lg"
                >
                  Solicitar Diagnóstico
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Decorative gradient border */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/20 via-transparent to-[#60A5FA]/20 p-[1px] sm:rounded-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
