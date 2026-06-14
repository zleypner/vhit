import {
  Header,
  Hero,
  Services,
  Process,
  WhyUs,
  Pricing,
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
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
