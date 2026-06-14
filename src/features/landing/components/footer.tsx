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
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <a href="#inicio" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold text-[#F9FAFB]">
                Viral Hit
              </span>
              <span className="text-xl font-light text-[#60A5FA]">Agency</span>
            </a>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-[#9CA3AF]">
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
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]"
            >
              Solicitar diagnóstico
              <ArrowUpRight size={16} />
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
            <h4 className="text-sm font-semibold tracking-wider text-[#F9FAFB] uppercase">
              Navegación
            </h4>
            <nav className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[#9CA3AF] transition-colors hover:text-[#F9FAFB]"
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
            <h4 className="text-sm font-semibold tracking-wider text-[#F9FAFB] uppercase">
              Contacto
            </h4>
            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:hola@viralhitagency.com"
                className="flex items-center gap-3 text-[#9CA3AF] transition-colors hover:text-[#60A5FA]"
              >
                <Mail size={18} className="flex-shrink-0 text-[#60A5FA]" />
                hola@viralhitagency.com
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-[#9CA3AF]">
                <MapPin size={18} className="flex-shrink-0 text-[#60A5FA]" />
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
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#1F2937] pt-8 sm:flex-row"
        >
          <p className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} Viral Hit Agency
          </p>
          <p className="text-sm text-[#9CA3AF]/60">
            Posicionamiento digital para marcas que quieren ser recordadas.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
