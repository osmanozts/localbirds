import {
  AboutContentCard,
  AboutImageCard,
  Section,
  SectionHeader,
} from "@/components";
import { SimpleGrid } from "@chakra-ui/react";
import aboutUsImage from "../assets/images/about-us.jpg";

export function About() {
  return (
    <Section id="werkstatt">
      <SectionHeader
        badge="Über die Werkstatt"
        title="Sorgfältige Arbeit und klare Kommunikation."
        description="Eine Kfz-Werkstatt für Wartung, Reparatur und Diagnose mit persönlicher Beratung und nachvollziehbaren nächsten Schritten."
      />

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={{ base: "5", md: "8", lg: "10" }}
        alignItems="start"
      >
        <AboutContentCard
          title="Was uns wichtig ist"
          description="Gute Werkstattarbeit beginnt mit Zuhören, einer ruhigen Einschätzung und transparenter Abstimmung. So bleibt klar, welche Arbeiten sinnvoll sind und was als Nächstes passiert."
          linkHref="/unternehmen"
          linkLabel="Mehr über uns"
          delay={100}
        />

        <AboutImageCard
          src={aboutUsImage.src}
          alt="Einblick in eine Kfz-Werkstatt mit Arbeitsplätzen"
          delay={120}
        />
      </SimpleGrid>
    </Section>
  );
}