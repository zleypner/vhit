"use client";

import { motion } from "framer-motion";
import {
  Share2,
  Palette,
  Video,
  MessageCircle,
  Target,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Gestión de Redes Sociales",
    description:
      "Administración profesional de tus perfiles sociales con estrategia, consistencia y enfoque en resultados.",
  },
  {
    icon: Palette,
    title: "Creación de Contenido",
    description:
      "Diseño de contenido visual y escrito que captura atención y comunica el valor de tu marca.",
  },
  {
    icon: Video,
    title: "Reels y Video Corto",
    description:
      "Producción de videos verticales optimizados para algoritmos y diseñados para viralizar.",
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description:
      "Gestión activa de tu comunidad, respondiendo mensajes y construyendo relaciones con tu audiencia.",
  },
  {
    icon: Target,
    title: "Publicidad Digital",
    description:
      "Campañas de ads en Meta y Google diseñadas para generar leads y maximizar tu inversión.",
  },
  {
    icon: TrendingUp,
    title: "Estrategia de Crecimiento",
    description:
      "Plan integral de marketing digital con métricas claras y optimización continua.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-padding relative bg-[#030712]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#3B82F6]/5 blur-[120px]" />

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
            Todo lo que tu marca necesita para crecer
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#9CA3AF]">
            Una solución integral para aumentar visibilidad, construir confianza
            y generar oportunidades de negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-full rounded-2xl border border-[#1F2937] bg-[#111827]/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/30 hover:bg-[#111827] hover:shadow-xl hover:shadow-[#3B82F6]/10">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-[#3B82F6]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2937] transition-colors duration-300 group-hover:bg-[#3B82F6]/20">
                    <service.icon
                      size={26}
                      className="text-[#60A5FA] transition-colors group-hover:text-[#93C5FD]"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-[#F9FAFB] transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[#9CA3AF]">
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
