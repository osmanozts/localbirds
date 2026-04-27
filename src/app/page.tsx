import { Navbar } from "@/components";
import {
  Process,
  FAQ,
  Footer,
  Contact,
  Pricing,
  About,
  Services,
  Hero,
  Gallery,
  Testimonials,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
