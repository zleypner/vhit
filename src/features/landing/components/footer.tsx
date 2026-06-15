"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-[#1F2937] bg-[#030712]">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <a href="#inicio" className="inline-flex items-center gap-2">
              <span className="text-lg font-bold text-[#F9FAFB] sm:text-xl">
                Viral Hit
              </span>
              <span className="text-lg font-light text-[#60A5FA] sm:text-xl">
                Agency
              </span>
            </a>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-[#9CA3AF] sm:mt-4 sm:text-base">
              Construimos presencia digital para empresas que entienden el valor
              de ser recordadas.
            </p>

            {/* CTA Link */}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contacto");
              }}
              className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA] sm:mt-6 sm:text-sm"
            >
              Solicitar diagnóstico
              <ArrowUpRight size={14} className="sm:h-4 sm:w-4" />
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-semibold tracking-wider text-[#F9FAFB] uppercase sm:text-sm">
              Navegación
            </h4>
            <nav className="mt-3 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[14px] text-[#9CA3AF] transition-colors hover:text-[#F9FAFB] sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h4 className="text-xs font-semibold tracking-wider text-[#F9FAFB] uppercase sm:text-sm">
              Contacto
            </h4>
            <div className="mt-3 space-y-3 sm:mt-5 sm:space-y-4">
              {/* Email */}
              <a
                href="mailto:hola@viralhitagency.com"
                className="flex items-center gap-2.5 text-[14px] text-[#9CA3AF] transition-colors hover:text-[#60A5FA] sm:gap-3 sm:text-base"
              >
                <Mail
                  size={16}
                  className="flex-shrink-0 text-[#60A5FA] sm:h-[18px] sm:w-[18px]"
                />
                hola@viralhitagency.com
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-[14px] text-[#9CA3AF] sm:gap-3 sm:text-base">
                <MapPin
                  size={16}
                  className="flex-shrink-0 text-[#60A5FA] sm:h-[18px] sm:w-[18px]"
                />
                Costa Rica
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#1F2937] pt-6 sm:mt-16 sm:flex-row sm:gap-4 sm:pt-8"
        >
          <p className="text-xs text-[#9CA3AF] sm:text-sm">
            © {new Date().getFullYear()} Viral Hit Agency
          </p>
          <p className="text-center text-xs text-[#9CA3AF]/60 sm:text-sm">
            Posicionamiento digital para marcas que quieren ser recordadas.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
