"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer:
      "Los primeros resultados suelen verse entre el primer y segundo mes, dependiendo del estado actual de tus redes. El crecimiento consistente y sostenido se logra a partir del tercer mes cuando la estrategia está completamente implementada.",
  },
  {
    question: "¿Ustedes crean todo el contenido?",
    answer:
      "Sí, nos encargamos de la creación completa del contenido: desde la estrategia y planificación, hasta el diseño gráfico, copywriting y producción de videos. Solo necesitamos tu aprobación final antes de publicar.",
  },
  {
    question: "¿Gestionan mensajes y comentarios?",
    answer:
      "Sí, con el plan Pro incluimos Community Management completo. Esto incluye responder mensajes directos, comentarios y mantener activa la conversación con tu comunidad de manera profesional y alineada con tu marca.",
  },
  {
    question: "¿Trabajan con cualquier industria?",
    answer:
      "Trabajamos principalmente con empresas de servicios profesionales, clínicas, restaurantes, inmobiliarias, instituciones educativas y marcas locales en Costa Rica. Si tu negocio busca crecer en redes sociales, podemos ayudarte.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Solo necesitas agendar una llamada estratégica con nosotros. En esa llamada entenderemos tu negocio, objetivos y te presentaremos una propuesta personalizada. El onboarding completo toma aproximadamente una semana.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative bg-[#030712]">
      {/* Background */}
      <div className="bg-glow-static absolute inset-0 opacity-50" />

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
            Preguntas Frecuentes
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="space-y-4">
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
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-lg font-medium text-[#F9FAFB]">
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
                      <div className="px-6 pb-5">
                        <p className="leading-relaxed text-[#9CA3AF]">
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
