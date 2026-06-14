"use client";

import { motion } from "framer-motion";
import { Lightbulb, Brush, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Estrategia",
    description:
      "Analizamos tu negocio, tu mercado y tus objetivos para construir una hoja de ruta clara.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Creación",
    description:
      "Diseñamos contenido pensado para captar atención y generar confianza.",
    icon: Brush,
  },
  {
    number: "03",
    title: "Escalado",
    description:
      "Optimizamos constantemente para maximizar resultados y crecimiento.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="proceso" className="section-padding relative bg-[#0F172A]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/5 blur-[100px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[#60A5FA]/5 blur-[100px]" />
      </div>

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
            Un sistema probado para crecer
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop Timeline Line */}
          <div className="absolute top-[60px] right-[calc(16.666%-20px)] left-[calc(16.666%-20px)] hidden h-[2px] bg-gradient-to-r from-[#3B82F6]/50 via-[#60A5FA]/50 to-[#3B82F6]/50 lg:block" />

          {/* Mobile Timeline Line */}
          <div className="absolute top-0 bottom-0 left-8 w-[2px] bg-gradient-to-b from-[#3B82F6]/50 via-[#60A5FA]/50 to-[#3B82F6]/50 lg:hidden" />

          {/* Steps */}
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Mobile layout */}
                <div className="flex gap-6 lg:hidden">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#3B82F6] bg-[#111827]">
                      <span className="text-xl font-bold text-[#3B82F6]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="mb-3 flex items-center gap-3">
                      <step.icon size={24} className="text-[#60A5FA]" />
                      <h3 className="text-2xl font-bold text-[#F9FAFB]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-[#9CA3AF]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden text-center lg:block">
                  {/* Number circle */}
                  <div className="relative z-10 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-[#3B82F6]/20 blur-xl" />
                    <div className="relative mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full border-2 border-[#3B82F6] bg-[#111827] transition-all duration-300 hover:border-[#60A5FA] hover:shadow-lg hover:shadow-[#3B82F6]/30">
                      <span className="text-3xl font-bold text-[#3B82F6]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <step.icon size={28} className="text-[#60A5FA]" />
                    <h3 className="text-2xl font-bold text-[#F9FAFB]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mx-auto max-w-xs leading-relaxed text-[#9CA3AF]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
