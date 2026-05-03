import { ProcessStepCard, Section, SectionHeader } from "@/components";
import { SimpleGrid } from "@chakra-ui/react";

const steps = [
  {
    icon: "message",
    title: "Annahme & Diagnose",
    desc: "Transparente Erstprüfung. Wir besprechen Maßnahmen, Preise und Zeitrahmen vor der Freigabe.",
  },
  {
    icon: "wrench",
    title: "Service & Reparatur",
    desc: "Präzise Ausführung nach Herstellervorgaben. Dokumentation digital – Teile in OE-Qualität.",
  },
  {
    icon: "check",
    title: "Übergabe am selben Tag",
    desc: "Abschlusscheck, Probefahrt und digitale Rechnung. Auf Wunsch HU/AU direkt mit erledigt.",
  },
] as const;

export function Process() {
  return (
    <Section id="ablauf">
      <SectionHeader
        badge="Ablauf"
        title="So läuft es bei uns ab."
        description="Klar definiert. Transparent kommuniziert. Von der Online-Buchung bis zur Schlüsselübergabe."
      />

      <SimpleGrid
        as="ol"
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: "4", md: "5", lg: "6" }}
        alignItems="stretch"
        listStyle="none"
        p="0"
        m="0"
      >
        {steps.map((step, index) => (
          <ProcessStepCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.desc}
            stepNumber={index + 1}
            delay={200 + 100 * index}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}