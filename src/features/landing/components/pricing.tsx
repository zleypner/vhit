"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Viral Hit Essential",
    price: "₡149,000",
    period: "/ mes",
    description:
      "Ideal para pequeñas empresas que necesitan una presencia profesional constante en redes sociales.",
    features: [
      "Gestión de Facebook e Instagram",
      "12 publicaciones mensuales",
      "Diseño gráfico profesional",
      "Calendario de contenido",
      "Reporte mensual",
      "Soporte por WhatsApp",
    ],
    cta: "Empezar Ahora",
    popular: false,
  },
  {
    name: "Viral Hit Pro",
    price: "₡449,000",
    period: "/ mes",
    description:
      "Para empresas que buscan crecimiento consistente, posicionamiento de marca y generación de clientes.",
    features: [
      "Gestión completa de redes sociales",
      "24 publicaciones mensuales",
      "8 reels profesionales",
      "Community Management",
      "Dashboard de métricas",
      "Estrategia mensual",
      "Reportes avanzados",
      "Soporte prioritario",
    ],
    cta: "Agendar Llamada Estratégica",
    popular: true,
  },
];

export function Pricing() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="precios" className="section-padding relative bg-[#0F172A]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/5 blur-[150px]" />
      </div>

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
            Planes diseñados para crecer
          </h2>
          <p className="mt-6 text-lg text-[#9CA3AF]">
            Elige el plan que mejor se adapte a las necesidades de tu negocio.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#3B82F6] px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/30">
                    <Sparkles size={14} />
                    Más Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-300 lg:p-10 ${
                  plan.popular
                    ? "border-2 border-[#3B82F6]/50 bg-[#111827] shadow-2xl shadow-[#3B82F6]/20"
                    : "border border-[#1F2937] bg-[#111827]/50 hover:border-[#3B82F6]/30"
                }`}
              >
                {/* Plan glow for popular */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3B82F6]/10 via-transparent to-transparent" />
                )}

                <div className="relative">
                  {/* Plan name */}
                  <h3 className="text-xl font-semibold text-[#F9FAFB]">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold lg:text-5xl ${plan.popular ? "text-gradient" : "text-[#F9FAFB]"}`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[#9CA3AF]">{plan.period}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 leading-relaxed text-[#9CA3AF]">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                            plan.popular ? "bg-[#3B82F6]/20" : "bg-[#1F2937]"
                          }`}
                        >
                          <Check
                            size={12}
                            className={
                              plan.popular ? "text-[#60A5FA]" : "text-[#9CA3AF]"
                            }
                          />
                        </div>
                        <span className="text-[#F9FAFB]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contacto");
                    }}
                    className={`mt-10 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#3B82F6] text-white hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-[#3B82F6]/30"
                        : "border border-[#1F2937] bg-[#1F2937] text-[#F9FAFB] hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/20 hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
