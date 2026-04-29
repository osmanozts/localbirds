import { Navbar } from "@/components";
import {
  Process,
  FAQ,
  Footer,
  Contact,
  About,
  Services,
  Hero,
} from "@/sections";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack bg="bg.primary">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </Stack>
  );
}
