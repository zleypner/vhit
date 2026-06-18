"use client";

import { motion } from "framer-motion";

export function ValueIntro() {
  return (
    <section className="relative bg-[#030712] py-20 sm:py-28 lg:py-36">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/6 blur-[100px] sm:h-[600px] sm:w-[900px] sm:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          {/* Main Heading */}
          <h2 className="text-center text-[26px] leading-[1.15] font-bold tracking-tight sm:text-[38px] md:text-[46px] lg:text-[52px]">
            <span className="text-[#F9FAFB]">
              Contenido que Genera Atención.
            </span>
            <br />
            <span className="text-gradient">
              Estrategia que Genera Resultados.
            </span>
          </h2>

          {/* Content */}
          <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-lg leading-relaxed text-[#9CA3AF] sm:text-xl md:text-2xl"
            >
              Las empresas más visibles no siempre son las más grandes.
              <br className="hidden sm:block" />
              <span className="font-medium text-[#F9FAFB]">
                Son las que comunican mejor.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-3xl space-y-5 text-center sm:space-y-6"
            >
              <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
                En un entorno donde la atención es uno de los activos más
                valiosos para cualquier organización, la calidad del contenido
                puede determinar cómo una empresa es percibida por clientes,
                aliados estratégicos y futuros colaboradores.
              </p>

              <p className="text-base leading-relaxed text-[#F9FAFB]/90 sm:text-lg">
                En{" "}
                <span className="font-semibold text-[#60A5FA]">Viral Hit</span>{" "}
                ayudamos a las organizaciones a fortalecer su presencia digital
                mediante estrategia, producción audiovisual y contenido diseñado
                para generar confianza, diferenciación y crecimiento.
              </p>

              <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
                Cada publicación, fotografía y video tiene un propósito:{" "}
                <span className="text-[#F9FAFB]">
                  proyectar una marca más profesional, más relevante y más
                  memorable.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 flex justify-center sm:mt-20"
          >
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent sm:w-48" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
