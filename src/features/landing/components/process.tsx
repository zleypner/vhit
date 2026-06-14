"use client";

import { motion } from "framer-motion";
import { Search, Layers, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descubrimos",
    description: "Analizamos su negocio, industria y objetivos.",
    icon: Search,
  },
  {
    number: "02",
    title: "Construimos",
    description:
      "Desarrollamos una estrategia de contenido adaptada a su marca.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Ejecutamos",
    description:
      "Gestionamos y optimizamos su presencia digital de forma continua.",
    icon: Zap,
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative bg-[#0F172A] py-20 sm:py-28 lg:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
        <div className="absolute top-1/2 right-0 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#60A5FA]/5 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
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
          <p className="text-sm font-medium tracking-wider text-[#3B82F6] uppercase">
            Nuestro Proceso
          </p>
          <h2 className="mt-4 text-[28px] leading-tight font-bold text-[#F9FAFB] sm:text-[36px] md:text-[42px]">
            Simple. Efectivo. Continuo.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-20">
          {/* Desktop Timeline Line */}
          <div className="absolute top-[60px] right-[calc(16.666%-20px)] left-[calc(16.666%-20px)] hidden h-[2px] bg-gradient-to-r from-[#3B82F6]/50 via-[#60A5FA]/50 to-[#3B82F6]/50 lg:block" />

          {/* Mobile Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-gradient-to-b from-[#3B82F6]/50 via-[#60A5FA]/50 to-[#3B82F6]/50 sm:left-8 lg:hidden" />

          {/* Steps */}
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-8">
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
                <div className="flex gap-5 sm:gap-6 lg:hidden">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#3B82F6] bg-[#111827] sm:h-16 sm:w-16">
                      <span className="text-base font-bold text-[#3B82F6] sm:text-xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 sm:pt-2">
                    <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                      <step.icon
                        size={20}
                        className="text-[#60A5FA] sm:h-6 sm:w-6"
                      />
                      <h3 className="text-xl font-bold text-[#F9FAFB] sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#9CA3AF] sm:text-base">
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
