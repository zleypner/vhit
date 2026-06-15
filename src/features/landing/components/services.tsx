"use client";

import { motion } from "framer-motion";
import { Share2, Palette, Eye, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Gestión Estratégica de Redes Sociales",
    description:
      "Planificamos, publicamos y optimizamos el contenido de sus canales digitales para mantener una presencia constante y profesional.",
  },
  {
    icon: Palette,
    title: "Producción de Contenido para Marcas",
    description:
      "Diseñamos contenido visual y mensajes alineados con la identidad y objetivos de su empresa.",
  },
  {
    icon: Eye,
    title: "Posicionamiento Digital",
    description:
      "Ayudamos a que su marca permanezca visible y relevante frente a clientes actuales y potenciales.",
  },
  {
    icon: BarChart3,
    title: "Análisis y Optimización",
    description:
      "Monitoreamos resultados y ajustamos la estrategia para mejorar continuamente el desempeño digital.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative bg-[#030712] py-16 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#3B82F6]/5 blur-[80px] sm:h-[600px] sm:w-[1000px] sm:blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-28"
        >
          <h2 className="text-[24px] leading-tight font-bold text-[#F9FAFB] sm:text-[36px] md:text-[42px]">
            Las redes sociales no deberían ser una tarea pendiente.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#9CA3AF] sm:mt-8 sm:text-lg">
            La mayoría de las empresas sabe que necesita presencia digital.
            <br className="hidden sm:block" />
            Pocas tienen el tiempo, el equipo o la estrategia para ejecutarla
            correctamente.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[#F9FAFB]/80 sm:mt-4 sm:text-lg">
            Viral Hit se encarga de todo el proceso para que usted pueda
            concentrarse en operar y crecer su negocio.
          </p>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium tracking-wider text-[#3B82F6] uppercase sm:text-sm">
            Nuestros Servicios
          </p>
          <h2 className="mt-2 text-[24px] leading-tight font-bold text-[#F9FAFB] sm:mt-3 sm:text-[36px] md:text-[42px]">
            Lo que hacemos por su marca
          </h2>
        </motion.div>

        {/* Services Grid - 2x2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid gap-4 sm:mt-16 sm:gap-8 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full rounded-xl border border-[#1F2937] bg-[#111827]/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/30 hover:bg-[#111827] hover:shadow-xl hover:shadow-[#3B82F6]/10 sm:rounded-2xl sm:p-8">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-[#3B82F6]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F2937] transition-colors duration-300 group-hover:bg-[#3B82F6]/20 sm:h-14 sm:w-14 sm:rounded-xl">
                    <service.icon
                      size={20}
                      className="text-[#60A5FA] transition-colors group-hover:text-[#93C5FD] sm:h-[28px] sm:w-[28px]"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-4 text-base font-semibold text-[#F9FAFB] transition-colors group-hover:text-white sm:mt-6 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#9CA3AF] sm:mt-3 sm:text-base">
                  {service.description}
                </p>

                {/* Hover gradient line */}
                <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
