"use client";

import { Container, Section } from "@/components";
import {
  Box,
  Card,
  Link as ChakraLink,
  Collapsible,
  Heading,
  Text,
  chakra,
} from "@chakra-ui/react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "In der Regel innerhalb von 24 Stunden. Online buchen oder telefonisch – wir bestätigen den Termin und halten Sie per SMS/E-Mail auf dem Laufenden.",
  },
  {
    q: "Bleibt die Herstellergarantie erhalten?",
    a: "Ja. Wir arbeiten strikt nach Herstellervorgaben und dokumentieren alle Schritte digital, inklusive Serviceeinträgen – damit Ihre Garantie bestehen bleibt.",
  },
  {
    q: "Gibt es Ersatzfahrzeuge?",
    a: "Auf Anfrage stellen wir Ersatzfahrzeuge. Alternativ bieten wir Hol- & Bringservice im Umkreis an – einfach bei der Buchung auswählen.",
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
    <Section id="faq">
      <Container>
        <Box
          textAlign="center"
          mb={{ base: "8", md: "12" }}
          animation="fadeIn.normal"
        >
          <Box
            as="span"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            bg="badgeBg"
            color="accent"
            px="input.paddingX"
            py="inset.xs"
            rounded="badge"
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.06em"
            mb="3"
          >
            FRAGEN & ANTWORTEN
          </Box>

          <Heading
            as="h2"
            size="2xl"
            color="fg"
            letterSpacing="-0.02em"
            mb={{ base: "2", md: "3" }}
          >
            Wir hören zu. Und liefern klare Antworten.
          </Heading>

          <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
            Die wichtigsten Fragen rund um Termin, Garantie und Leistungen –
            kurz, verständlich und transparent.
          </Text>
        </Box>

        <Box
          role="list"
          display="grid"
          gap={{ base: "card.gap", md: "5" }}
          maxW="container.default"
          mx="auto"
        >
          {faqs.map((item, index) => (
            <Card.Root
              key={item.q}
              role="group"
              variant="outline"
              bg="bg"
              borderColor="border"
              rounded="card"
              overflow="hidden"
              boxShadow="card"
              transition="box-shadow .2s ease, border-color .2s ease, transform .2s ease"
              _hover={{
                boxShadow: "raised",
                transform: "translateY(-2px)",
                borderColor: "border",
              }}
              animation="fadeIn.normal"
              style={{ animationDelay: `${index * 60}ms` }}
              _focusWithin={{ boxShadow: "focusRing" }}
            >
              <Box
                aria-hidden
                h="2px"
                bg="primary"
                transformOrigin="left"
                transform="scaleX(0.6)"
                transition="transform .25s ease"
                _groupHover={{ transform: "scaleX(1)" }}
              />

              <Collapsible.Root unmountOnExit>
                <Collapsible.Trigger asChild>
                  <chakra.button
                    type="button"
                    display="flex"
                    w="100%"
                    textAlign="left"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="card.gap"
                    px="card.padding"
                    py="card.padding"
                    color="fg"
                    _focusVisible={{
                      outline: "none",
                      boxShadow: "focusRing",
                    }}
                  >
                    <Heading as="h3" size="md" lineHeight="1.2">
                      {item.q}
                    </Heading>

                    <Box
                      as="span"
                      aria-hidden
                      w="6"
                      h="6"
                      position="relative"
                      flexShrink={0}
                    >
                      <Box
                        position="absolute"
                        inset="0"
                        m="auto"
                        w="12px"
                        h="2px"
                        bg="fg"
                        rounded="full"
                        transition="background-color .2s ease"
                      />
                      <Box
                        position="absolute"
                        inset="0"
                        m="auto"
                        w="2px"
                        h="12px"
                        bg="fg"
                        rounded="full"
                        transformOrigin="center"
                        transition="transform .2s ease, opacity .2s ease"
                        _open={{ transform: "scaleY(0)", opacity: 0 }}
                      />
                    </Box>
                  </chakra.button>
                </Collapsible.Trigger>

                <Collapsible.Content>
                  <Box
                    px="card.padding"
                    pb={{ base: "5", md: "6" }}
                    pt="0"
                    animation="slideDown.normal"
                  >
                    <Text color="fgMuted" fontSize={{ base: "sm", md: "md" }}>
                      {item.a}
                    </Text>

                    <Box mt="3">
                      <ChakraLink
                        href="/kontakt"
                        display="inline-flex"
                        alignItems="center"
                        gap="stack.gap.sm"
                        color="link"
                        fontWeight="600"
                        textDecoration="none"
                        role="group"
                        _hover={{ color: "linkHover" }}
                        _focusVisible={{
                          outline: "none",
                          boxShadow: "focusRing",
                          borderRadius: "interactive",
                        }}
                      >
                        Weitere Frage stellen
                        <Box
                          as="span"
                          aria-hidden
                          display="block"
                          h="2px"
                          w="6"
                          bg="primary"
                          transformOrigin="left"
                          transform="scaleX(0)"
                          transition="transform .22s ease"
                          _groupHover={{ transform: "scaleX(1)" }}
                        />
                      </ChakraLink>
                    </Box>
                  </Box>
                </Collapsible.Content>
              </Collapsible.Root>
            </Card.Root>
          ))}
        </Box>

        <Box textAlign="center" mt={{ base: "8", md: "12" }}>
          <Text color="fgMuted">
            Nicht fündig geworden?{" "}
            <ChakraLink
              href="/kontakt"
              color="link"
              _hover={{ color: "linkHover" }}
              _focusVisible={{
                outline: "none",
                boxShadow: "focusRing",
                borderRadius: "interactive",
              }}
            >
              Wir sind gerne persönlich für Sie da.
            </ChakraLink>
          </Text>
        </Box>
      </Container>
    </Section>
  );
}
