"use client";

import { motion } from "framer-motion";
import { Award, RefreshCw, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Autoridad",
    description:
      "Ayudamos a proyectar la experiencia y profesionalismo de la organización.",
  },
  {
    icon: RefreshCw,
    title: "Consistencia",
    description:
      "El crecimiento sostenible requiere comunicación estratégica continua.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description:
      "Las personas hacen negocios con marcas que conocen y recuerdan.",
  },
  {
    icon: Sparkles,
    title: "Diferenciación",
    description:
      "Creamos contenido diseñado para destacar en mercados competitivos.",
  },
];

export function ValueCards() {
  return (
    <section className="relative bg-[#030712] py-20 sm:py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[120px] sm:h-[700px] sm:w-[1200px] sm:blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-[#60A5FA] uppercase sm:text-sm">
            Nuestro Valor
          </p>
          <h2 className="mt-3 text-[26px] leading-tight font-bold text-[#F9FAFB] sm:mt-4 sm:text-[38px] md:text-[46px]">
            ¿Por Qué Trabajar con{" "}
            <span className="text-gradient">Viral Hit</span>?
          </h2>
        </motion.div>

        {/* Value Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827]/50 p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:bg-[#111827] sm:p-8">
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2937]/80 ring-1 ring-[#3B82F6]/20 transition-all duration-300 group-hover:bg-[#3B82F6]/20 group-hover:ring-[#3B82F6]/40 sm:mb-6 sm:h-16 sm:w-16">
                  <value.icon
                    size={28}
                    className="text-[#60A5FA] transition-colors group-hover:text-[#93C5FD]"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#F9FAFB] transition-colors group-hover:text-white sm:text-xl">
                  {value.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#9CA3AF] sm:text-[15px]">
                  {value.description}
                </p>

                {/* Top gradient line */}
                <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
