import {
  Header,
  Hero,
  ValueIntro,
  Services,
  Differentiator,
  Process,
  ValueCards,
  WhyUs,
  FAQ,
  CTA,
  Footer,
  WhatsAppButton,
} from "@/features/landing";
import { EntryGate } from "@/components/entry-gate";

export default function Home() {
  return (
    <EntryGate>
      <Header />
      <main>
        <Hero />
        <ValueIntro />
        <Services />
        <Differentiator />
        <Process />
        <ValueCards />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </EntryGate>
  );
}
