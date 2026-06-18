"use client";

import { motion } from "framer-motion";
import { Video, Camera, Palette, Target, Share2 } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Producción de Reels",
    description:
      "Creamos videos diseñados para captar atención desde los primeros segundos y aumentar el alcance orgánico en Instagram, Facebook, TikTok y LinkedIn.",
  },
  {
    icon: Camera,
    title: "Fotografía Profesional",
    description:
      "Sesiones fotográficas para equipos, instalaciones, productos, servicios y marcas que desean proyectar una imagen profesional y consistente.",
  },
  {
    icon: Palette,
    title: "Diseño de Contenido",
    description:
      "Contenido visual alineado con la identidad de la marca para fortalecer reconocimiento y diferenciación.",
  },
  {
    icon: Target,
    title: "Estrategia de Contenido",
    description:
      "Definimos qué comunicar, cuándo hacerlo y cómo hacerlo para generar mejores resultados.",
  },
  {
    icon: Share2,
    title: "Gestión de Redes Sociales",
    description:
      "Administramos la presencia digital de la organización para asegurar consistencia, profesionalismo y crecimiento continuo.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative bg-[#0F172A] py-20 sm:py-28 lg:py-36"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#3B82F6]/6 blur-[80px] sm:h-[500px] sm:w-[900px] sm:blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[200px] w-[200px] rounded-full bg-[#60A5FA]/5 blur-[80px] sm:h-[400px] sm:w-[400px]" />
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
            Nuestros Servicios
          </p>
          <h2 className="mt-3 text-[26px] leading-tight font-bold text-[#F9FAFB] sm:mt-4 sm:text-[36px] md:text-[44px]">
            Soluciones integrales para su{" "}
            <span className="text-gradient">presencia digital</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#9CA3AF] sm:mt-6 sm:text-lg">
            Combinamos creatividad, estrategia y ejecución profesional para
            transformar la forma en que su marca comunica y conecta.
          </p>
        </motion.div>

        {/* Services Grid - First Row: 3 cards, Second Row: 2 cards centered */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* First Row - 3 cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 2 cards centered */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-[66.666%]"
          >
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: { icon: React.ElementType; title: string; description: string };
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827]/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#3B82F6]/40 hover:bg-[#111827] sm:p-8">
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#3B82F6]/15 blur-3xl" />
      </div>

      {/* Icon */}
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-[#3B82F6]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#1F2937]/80 ring-1 ring-[#3B82F6]/20 transition-all duration-300 group-hover:bg-[#3B82F6]/20 group-hover:ring-[#3B82F6]/40 sm:h-14 sm:w-14">
          <service.icon
            size={24}
            className="text-[#60A5FA] transition-colors group-hover:text-[#93C5FD]"
          />
        </div>
      </div>

      {/* Content */}
      <h3 className="mt-5 text-lg font-semibold text-[#F9FAFB] transition-colors group-hover:text-white sm:mt-6 sm:text-xl">
        {service.title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-[#9CA3AF] sm:text-[15px]">
        {service.description}
      </p>

      {/* Bottom gradient line */}
      <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
