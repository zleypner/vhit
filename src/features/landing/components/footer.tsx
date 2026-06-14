"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const locations = [
  "San José, Costa Rica",
  "Escazú, Costa Rica",
  "Santa Ana, Costa Rica",
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
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a href="#inicio" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold text-[#F9FAFB]">
                Viral Hit
              </span>
              <span className="text-xl font-light text-[#60A5FA]">Agency</span>
            </a>
            <p className="mt-4 max-w-md leading-relaxed text-[#9CA3AF]">
              Ayudamos a empresas costarricenses a crecer mediante contenido
              estratégico, redes sociales y marketing digital enfocado en
              resultados.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold tracking-wider text-[#F9FAFB] uppercase">
              Navegación
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
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
          >
            <h4 className="text-sm font-semibold tracking-wider text-[#F9FAFB] uppercase">
              Contacto
            </h4>
            <div className="mt-4 space-y-4">
              {/* Email */}
              <a
                href="mailto:hola@viralhitagency.com"
                className="flex items-center gap-3 text-[#9CA3AF] transition-colors hover:text-[#60A5FA]"
              >
                <Mail size={18} className="text-[#60A5FA]" />
                hola@viralhitagency.com
              </a>

              {/* Locations */}
              <div className="space-y-2">
                {locations.map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-3 text-[#9CA3AF]"
                  >
                    <MapPin size={18} className="text-[#60A5FA]" />
                    {location}
                  </div>
                ))}
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
          className="mt-16 border-t border-[#1F2937] pt-8"
        >
          <p className="text-center text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} Viral Hit Agency. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
