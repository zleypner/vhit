"use client";

import { motion } from "framer-motion";

export function Differentiator() {
  return (
    <section className="relative bg-[#030712] py-20 sm:py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-[#3B82F6]/5 blur-[100px] sm:h-[500px] sm:w-[500px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[#60A5FA]/5 blur-[100px] sm:h-[500px] sm:w-[500px]" />
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
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.2em] text-[#60A5FA] uppercase sm:text-sm"
            >
              Nuestra Filosofía
            </motion.p>

            <h2 className="mt-4 text-[26px] leading-[1.15] font-bold tracking-tight sm:text-[38px] md:text-[46px] lg:text-[52px]">
              <span className="text-[#F9FAFB]">No Creamos Publicaciones.</span>
              <br />
              <span className="text-gradient">Construimos Marcas.</span>
            </h2>
          </div>

          {/* Content */}
          <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-lg leading-relaxed text-[#9CA3AF] sm:text-xl"
            >
              Muchas empresas publican contenido.
              <br />
              <span className="font-medium text-[#F9FAFB]">
                Pocas desarrollan una estrategia que fortalezca su reputación
                semana tras semana.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-3xl"
            >
              {/* Highlight Box */}
              <div className="relative overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827]/50 p-6 sm:p-10">
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-transparent to-[#60A5FA]/5" />

                <div className="relative space-y-5 text-center sm:space-y-6">
                  <p className="text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
                    Una marca sólida no se construye con una publicación viral.
                  </p>
                  <p className="text-lg leading-relaxed font-medium text-[#F9FAFB] sm:text-xl">
                    Se construye mediante una comunicación consistente que
                    genera <span className="text-[#60A5FA]">confianza</span>,{" "}
                    <span className="text-[#60A5FA]">credibilidad</span> y{" "}
                    <span className="text-[#60A5FA]">recordación</span>.
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 h-20 w-20 rounded-tl-2xl border-t-2 border-l-2 border-[#3B82F6]/30" />
                <div className="absolute right-0 bottom-0 h-20 w-20 rounded-br-2xl border-r-2 border-b-2 border-[#3B82F6]/30" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[#9CA3AF] sm:text-lg"
            >
              Nuestro trabajo consiste en convertir las redes sociales en una{" "}
              <span className="text-[#F9FAFB]">
                extensión profesional de la empresa
              </span>
              , capaz de comunicar el nivel de calidad que ya existe dentro de
              la organización.
            </motion.p>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex justify-center sm:mt-20"
          >
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#3B82F6]/50 sm:w-24" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#3B82F6]/50 sm:w-24" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
