"use client";

import { Reveal, Section } from "@/components";
import {
  Box,
  Card,
  chakra,
  Collapsible,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "In der Regel innerhalb von 24 Stunden. Online buchen oder telefonisch – wir bestätigen den Termin und halten Sie per SMS/E-Mail auf dem Laufenden.",
  },
  {
    q: "Wie werden Kosten kommuniziert?",
    a: "Transparent und vorab: Sie erhalten eine Kostenschätzung, wir besprechen Abweichungen, bevor wir fortfahren. Keine Arbeit ohne Freigabe.",
  },
  {
    q: "Kann ich kurzfristig Änderungen mitteilen?",
    a: "Ja. Antworten Sie auf unsere Bestätigungs-Mail oder rufen Sie an – wir planen flexibel um und informieren Sie über die Auswirkungen auf den Zeitrahmen.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" >
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
            FRAGEN & ANTWORTEN
          </Box>

          <Heading
            as="h2"
            color="text.primary"
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            lineHeight={{ base: "1.12", md: "1.05" }}
            letterSpacing="-0.02em"
            maxW="4xl"
          >
            Wir hören zu. Und liefern klare Antworten.
          </Heading>

          <Text
            color="text.muted"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.7"
            maxW="3xl"
          >
            Die wichtigsten Fragen rund um Termin, Garantie und Leistungen –
            kurz, verständlich und transparent.
          </Text>
        </Stack>
      </Reveal>

      <Box
        role="list"
        display="grid"
        gap={{ base: "3", md: "5" }}
        maxW="container.DEFAULT"
        mx="auto"
      >
        {faqs.map((item, index) => (
          <Reveal delay={200 + 100 * index}>
            <Card.Root
              key={item.q}
              role="listitem"
              bg="bg.card"
              rounded="card"
              overflow="hidden"
              boxShadow="card"
              borderWidth={0}
              _hover={{
                boxShadow: "raised",
              }}
              _focusWithin={{
                boxShadow: "focusRing",
              }}
            >
              <Box aria-hidden="true" h="1" bg="bg.accent" />

              <Collapsible.Root unmountOnExit>
                <Collapsible.Trigger asChild>
                  <chakra.button
                    type="button"
                    display="flex"
                    w="100%"
                    textAlign="left"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={{ base: "3", md: "card.gap" }}
                    p={{ base: "5", md: "card.padding" }}
                    color="text.primary"
                    _focusVisible={{
                      outline: "none",
                      boxShadow: "focusRing",
                    }}
                  >
                    <Heading
                      as="h3"
                      color="text.primary"
                      fontSize={{ base: "md", md: "lg" }}
                      lineHeight="1.25"
                      letterSpacing="-0.01em"
                      overflowWrap="break-word"
                      minW={0}
                    >
                      {item.q}
                    </Heading>

                    <Box
                      as="span"
                      aria-hidden="true"
                      boxSize={{
                        base: "button.height.sm",
                        md: "button.height.md",
                      }}
                      rounded="badge"
                      bg="button.primary"
                      color="text.inverse"
                      display="grid"
                      placeItems="center"
                      flexShrink={0}
                      fontWeight="700"
                      fontSize={{ base: "md", md: "lg" }}
                      lineHeight="1"
                    >
                      +
                    </Box>
                  </chakra.button>
                </Collapsible.Trigger>

                <Collapsible.Content>
                  <Box
                    px={{ base: "5", md: "card.padding" }}
                    pb={{ base: "5", md: "6" }}
                  >
                    <Text
                      color="text.muted"
                      fontSize={{ base: "sm", md: "md" }}
                      lineHeight="1.7"
                      maxW="4xl"
                    >
                      {item.a}
                    </Text>

                    <Box mt="3">
                      <ChakraLink
                        href="/#kontakt"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        minH="button.height.sm"
                        gap="stack.sm"
                        color="link.primary"
                        fontWeight="600"
                        textDecoration="none"
                        borderRadius="interactive"
                        _hover={{
                          color: "link.hover",
                        }}
                        _focusVisible={{
                          outline: "none",
                          boxShadow: "focusRing",
                        }}
                      >
                        Weitere Frage stellen
                      </ChakraLink>
                    </Box>
                  </Box>
                </Collapsible.Content>
              </Collapsible.Root>
            </Card.Root>
          </Reveal>
        ))}
      </Box>yw
    </Section>
  );
}