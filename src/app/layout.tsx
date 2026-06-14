import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viral Hit Agency | Agencia de Marketing Digital en Costa Rica",
  description:
    "Viral Hit Agency ayuda a empresas costarricenses a generar atención, confianza y clientes mediante contenido estratégico, gestión profesional de redes sociales y marketing digital orientado al crecimiento.",
  keywords: [
    "marketing digital",
    "redes sociales",
    "Costa Rica",
    "agencia de marketing",
    "community management",
    "contenido",
    "crecimiento",
  ],
  authors: [{ name: "Viral Hit Agency" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Viral Hit Agency | Haz que tu marca sea imposible de ignorar",
    description:
      "Agencia premium de crecimiento digital especializada en gestión de redes sociales, creación de contenido y estrategias de marketing.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
