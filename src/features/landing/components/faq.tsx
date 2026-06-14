"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer:
      "Los primeros indicadores de mejora suelen verse entre el primer y segundo mes. El posicionamiento sólido y el crecimiento sostenido se consolidan a partir del tercer mes, cuando la estrategia está completamente implementada.",
  },
  {
    question: "¿Quién crea el contenido?",
    answer:
      "Nuestro equipo se encarga de todo el proceso creativo: estrategia, diseño visual, redacción y producción. Usted solo aprueba antes de publicar.",
  },
  {
    question: "¿Incluye gestión de mensajes y comentarios?",
    answer:
      "Sí. Manejamos la interacción con su audiencia de manera profesional, manteniendo la voz y los valores de su marca en cada respuesta.",
  },
  {
    question: "¿Con qué tipo de empresas trabajan?",
    answer:
      "Trabajamos principalmente con empresas de servicios profesionales, clínicas, restaurantes, inmobiliarias e instituciones educativas. Si su negocio busca proyectar una imagen más profesional en digital, podemos ayudarle.",
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer:
      "Solo una llamada de diagnóstico. En ella entendemos su negocio, objetivos y le presentamos una propuesta personalizada. El proceso de onboarding toma aproximadamente una semana.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#030712] py-20 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="bg-glow-static absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6">
        {/* Social Proof Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center sm:mb-24"
        >
          <p className="text-sm font-medium tracking-wider text-[#3B82F6] uppercase">
            Empresas que decidieron destacar
          </p>
          <h2 className="mt-4 text-[28px] leading-tight font-bold text-[#F9FAFB] sm:text-[36px] md:text-[42px]">
            Ayudamos a marcas a proyectar una imagen más profesional,
            consistente y confiable.
          </h2>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-medium tracking-wider text-[#3B82F6] uppercase">
            Preguntas Frecuentes
          </p>
          <h3 className="mt-4 text-[24px] leading-tight font-bold text-[#F9FAFB] sm:text-[28px] md:text-[32px]">
            Lo que necesita saber
          </h3>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl sm:mt-14"
        >
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#3B82F6]/30 bg-[#111827]"
                    : "border-[#1F2937] bg-[#111827]/50 hover:border-[#3B82F6]/20"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="pr-4 text-base font-medium text-[#F9FAFB] sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#60A5FA] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="text-sm leading-relaxed text-[#9CA3AF] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
