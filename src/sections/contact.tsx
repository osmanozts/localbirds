import { ContactForm, ContactInfo, Section, SectionHeader } from "@/components";
import { SimpleGrid } from "@chakra-ui/react";

export function Contact() {
  return (
    <Section id="kontakt" aria-labelledby="kontakt-heading">
      <SectionHeader
        badge="KONTAKT"
        title="Wir sind für Sie da."
        description="Schnell erreichbar, transparent im Dialog – per Formular, Telefon oder E-Mail."
        headingId="kontakt-heading"
      />

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={{ base: "5", md: "8", lg: "layout.gap" }}
        alignItems="start"
      >
        <ContactForm />
        <ContactInfo />
      </SimpleGrid>
    </Section>
  );
}