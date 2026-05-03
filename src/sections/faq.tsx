"use client";

import { FaqItem, Section, SectionHeader } from "@/components";
import { SimpleGrid } from "@chakra-ui/react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer: "In der Regel innerhalb von 24 Stunden. Online buchen oder telefonisch – wir bestätigen den Termin und halten Sie per SMS/E-Mail auf dem Laufenden.",
  },
  {
    question: "Wie werden Kosten kommuniziert?",
    answer: "Transparent und vorab: Sie erhalten eine Kostenschätzung, wir besprechen Abweichungen, bevor wir fortfahren. Keine Arbeit ohne Freigabe.",
  },
  {
    question: "Kann ich kurzfristig Änderungen mitteilen?",
    answer: "Ja. Antworten Sie auf unsere Bestätigungs-Mail oder rufen Sie an – wir planen flexibel um und informieren Sie über die Auswirkungen auf den Zeitrahmen.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHeader
        badge="FRAGEN & ANTWORTEN"
        title="Wir hören zu. Und liefern klare Antworten."
        description="Die wichtigsten Fragen rund um Termin, Garantie und Leistungen – kurz, verständlich und transparent."
      />

      <SimpleGrid
        role="list"
        columns={1}
        gap={{ base: "3", md: "5" }}
        w="100%"
      >
        {faqs.map((item, index) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            delay={200 + 100 * index}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}