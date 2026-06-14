"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, BarChart3, Zap } from "lucide-react";

const reasons = [
  {
    icon: Compass,
    title: "Estrategia antes que contenido",
    description:
      "No publicamos por publicar. Cada pieza de contenido responde a un objetivo claro de negocio.",
  },
  {
    icon: Sparkles,
    title: "Contenido diseñado para crecer",
    description:
      "Creamos contenido que no solo se ve bien, sino que está optimizado para los algoritmos.",
  },
  {
    icon: BarChart3,
    title: "Enfoque basado en métricas",
    description:
      "Decisiones respaldadas por datos. Medimos, analizamos y optimizamos constantemente.",
  },
  {
    icon: Zap,
    title: "Comunicación directa y rápida",
    description:
      "Sin intermediarios ni demoras. Acceso directo a tu equipo dedicado vía WhatsApp.",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding relative bg-[#030712]">
      {/* Background */}
      <div className="bg-glow-static absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-[32px] leading-tight font-bold text-[#F9FAFB] md:text-[40px] lg:text-[48px]">
            ¿Por qué trabajar con Viral Hit?
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full rounded-2xl border border-[#1F2937] bg-[#0F172A]/50 p-8 transition-all duration-300 hover:border-[#3B82F6]/30 hover:bg-[#0F172A]">
                <div className="flex gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/10 transition-colors group-hover:bg-[#3B82F6]/20">
                      <reason.icon size={24} className="text-[#60A5FA]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#F9FAFB]">
                      {reason.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#9CA3AF]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
