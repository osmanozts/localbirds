"use client";

import { Container, Section } from "@/components";
import {
  Box,
  Card,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const TESTIMONIALS = [
  { name: "S. Kramer", text: "Schnell, fair, top Ergebnis." },
  { name: "M. Yilmaz", text: "Termin online, Reparatur am selben Tag." },
  { name: "A. Becker", text: "Beste Werkstatt in der Umgebung." },
];

export function Testimonials() {
  return (
    <Section id="stimmen">
      <Container>
        <Box
          textAlign="center"
          mb={{ base: "8", md: "12" }}
          animation="fadeIn.normal"
        >
          <Heading
            as="h2"
            size="2xl"
            color="fg"
            letterSpacing="-0.02em"
            mb={{ base: "2", md: "3" }}
          >
            Kundenstimmen
          </Heading>

          <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
            Echtes Feedback von Kundinnen und Kunden, die Wert auf Transparenz,
            Geschwindigkeit und saubere Arbeit legen.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: "card.gap", md: "layout.gap" }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <Card.Root
              key={testimonial.name}
              role="group"
              variant="outline"
              bg="bg"
              borderColor="border"
              rounded="card"
              boxShadow="card"
              overflow="hidden"
              animation="fadeIn.normal"
              transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
              style={{ animationDelay: `${index * 60}ms` }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "raised",
                borderColor: "borderStrong",
              }}
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

              <Card.Body p="card.padding">
                <VStack align="start" gap="card.gap">
                  <Text color="fg" fontSize={{ base: "md", md: "lg" }}>
                    “{testimonial.text}”
                  </Text>

                  <Text color="fgMuted" fontWeight="600">
                    {testimonial.name}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  );
}