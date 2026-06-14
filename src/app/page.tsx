import {
  Header,
  Hero,
  Services,
  Process,
  WhyUs,
  FAQ,
  CTA,
  Footer,
  WhatsAppButton,
} from "@/features/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
