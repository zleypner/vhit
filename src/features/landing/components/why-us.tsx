"use client";

import { motion } from "framer-motion";

export function WhyUs() {
  return (
    <section className="relative bg-[#030712] py-20 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="bg-glow-static absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <p className="text-sm font-medium tracking-wider text-[#3B82F6] uppercase">
            Por Qué Viral Hit
          </p>

          {/* Title */}
          <h2 className="mt-4 text-[28px] leading-tight font-bold text-[#F9FAFB] sm:text-[36px] md:text-[42px]">
            Más que publicaciones.
            <br />
            <span className="text-gradient">Construimos percepción.</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-relaxed text-[#9CA3AF] sm:mt-8 sm:text-lg md:text-xl">
            Cada publicación, diseño y mensaje contribuye a una sola meta:
          </p>

          {/* Highlighted Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg font-medium text-[#F9FAFB] sm:text-xl md:text-2xl"
          >
            Que cuando un cliente necesite sus servicios,
            <br className="hidden sm:block" />
            <span className="text-[#60A5FA]">recuerde primero su marca.</span>
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex justify-center sm:mt-20"
        >
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#3B82F6]/50 sm:w-20" />
            <div className="h-2 w-2 rounded-full bg-[#3B82F6]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#3B82F6]/50 sm:w-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
