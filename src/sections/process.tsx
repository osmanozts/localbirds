import { ProcessIcon, Reveal, Section } from "@/components";
import {
  Box,
  Card,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

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
    <Section id="ablauf" >
      <Reveal delay={100}>
        <Stack
          gap={{ base: "2", md: "3" }}
          textAlign={{ base: "left", md: "center" }}
          align={{ base: "flex-start", md: "center" }}
          mb={{ base: "8", md: "10", lg: "12" }}
        >
          <Box
            as="span"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            bg="bg.accent"
            color="text.inverse"
            px="3"
            py="1"
            rounded="badge"
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.06em"
          >
            Ablauf
          </Box>

          <Heading
            as="h2"
            color="text.primary"
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            lineHeight={{ base: "1.12", md: "1.05" }}
            letterSpacing="-0.02em"
            maxW="3xl"
          >
            So läuft es
          </Heading>

          <Text
            color="text.muted"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.7"
            maxW="3xl"
          >
            Klar definiert. Transparent kommuniziert. Von der Online-Buchung bis
            zur Schlüsselübergabe.
          </Text>
        </Stack>
      </Reveal>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: "4", md: "5", lg: "6" }}
        alignItems="stretch"
      >
        {steps.map((step, index) => (
          <Reveal delay={200 + 100 * index}>
            <Card.Root
              key={step.title}
              bg="bg.card"
              rounded="card"
              overflow="hidden"
              boxShadow="card"
              borderWidth={0}
              h="100%"
              _hover={{
                boxShadow: "raised",
              }}
              _focusWithin={{
                boxShadow: "focusRing",
              }}
            >
              <Box aria-hidden="true" h="1" bg="bg.accent" />

              <Card.Body p={{ base: "5", md: "card.padding" }}>
                <Stack gap="card.gap" h="100%">
                  <Box display="flex" alignItems="center" gap="stack.sm">
                    <Box
                      boxSize={{
                        base: "button.height.sm",
                        md: "button.height.md",
                      }}
                      rounded="badge"
                      bg="bg.accent"
                      color="text.inverse"
                      display="grid"
                      placeItems="center"
                      fontWeight="700"
                      fontSize={{ base: "sm", md: "md", lg: "lg" }}
                      aria-hidden="true"
                      flexShrink={0}
                    >
                      {index + 1}
                    </Box>

                    <ProcessIcon icon={step.icon} />
                  </Box>

                  <Stack gap="stack.sm" minW={0}>
                    <Heading
                      as="h3"
                      color="text.primary"
                      fontSize={{ base: "lg", md: "xl" }}
                      lineHeight="1.25"
                      letterSpacing="-0.01em"
                      overflowWrap="break-word"
                    >
                      {step.title}
                    </Heading>

                    <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                      {step.desc}
                    </Text>
                  </Stack>
                </Stack>
              </Card.Body>
            </Card.Root>
          </Reveal>
        ))}
      </SimpleGrid>
    </Section>
  );
}