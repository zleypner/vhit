"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Film, Send, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Comprendemos la empresa, sus objetivos y su mercado.",
    icon: Search,
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Identificamos oportunidades para diferenciar la marca.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Producción",
    description: "Creamos fotografías, videos y contenido visual.",
    icon: Film,
  },
  {
    number: "04",
    title: "Distribución",
    description: "Publicamos contenido optimizado para cada plataforma.",
    icon: Send,
  },
  {
    number: "05",
    title: "Optimización Continua",
    description: "Analizamos resultados y refinamos la estrategia.",
    icon: TrendingUp,
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative bg-[#0F172A] py-20 sm:py-28 lg:py-36"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-[300px] w-[300px] rounded-full bg-[#3B82F6]/5 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-[#60A5FA]/5 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
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
            Nuestro Proceso
          </p>
          <h2 className="mt-3 text-[26px] leading-tight font-bold sm:mt-4 sm:text-[38px] md:text-[46px]">
            <span className="text-[#F9FAFB]">Del Concepto al </span>
            <span className="text-gradient">Viral Hit</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#9CA3AF] sm:mt-6 sm:text-lg">
            Un proceso estructurado que transforma ideas en resultados medibles.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="mt-14 hidden sm:mt-20 lg:block">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute top-[45px] right-[10%] left-[10%] h-[2px] bg-gradient-to-r from-[#3B82F6]/20 via-[#3B82F6]/50 to-[#3B82F6]/20" />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Number circle */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#3B82F6]/20 blur-xl" />
                    <div className="relative mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full border-2 border-[#3B82F6]/50 bg-[#0F172A] transition-all duration-300 hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/20">
                      <span className="text-2xl font-bold text-[#3B82F6]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon and Title */}
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <step.icon size={20} className="text-[#60A5FA]" />
                    <h3 className="text-lg font-semibold text-[#F9FAFB]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mx-auto max-w-[180px] text-sm leading-relaxed text-[#9CA3AF]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="mt-10 sm:mt-14 lg:hidden">
          {/* Vertical timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-5 w-[2px] bg-gradient-to-b from-[#3B82F6]/50 via-[#60A5FA]/50 to-[#3B82F6]/50 sm:left-8" />

            {/* Steps */}
            <div className="space-y-8 sm:space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-4 sm:gap-6"
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#3B82F6] bg-[#0F172A] sm:h-16 sm:w-16">
                      <span className="text-sm font-bold text-[#3B82F6] sm:text-xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-0.5 sm:pt-2">
                    <div className="mb-1.5 flex items-center gap-2 sm:mb-3 sm:gap-3">
                      <step.icon
                        size={18}
                        className="text-[#60A5FA] sm:h-6 sm:w-6"
                      />
                      <h3 className="text-lg font-bold text-[#F9FAFB] sm:text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[13px] leading-relaxed text-[#9CA3AF] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
