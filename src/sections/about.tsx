"use client";

import {
  Box,
  Card,
  chakra,
  Link as ChakraLink,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import aboutUsImage from "../assets/images/about-us.jpg";
import { Container, Section } from "@/components";

const ABOUT_POINTS = [
  "Meisterbetrieb – markenübergreifende Expertise",
  "OEM-nahe Diagnosetechnik & dokumentierte Prozesse",
  "Same-Day-Übergabe bei vielen Leistungen",
];

export function About() {
  return (
    <Section id="werkstatt" variant="subtle">
      <Container>
        <Box
          textAlign={{ base: "left", md: "center" }}
          maxW="container.default"
          mx="auto"
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
            ÜBER UNS
          </Box>

          <Heading
            as="h2"
            size="2xl"
            color="fg"
            letterSpacing="-0.02em"
            lineHeight="1.1"
            mb={{ base: "2", md: "3" }}
          >
            Präzision, der Sie vertrauen können.
          </Heading>

          <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
            Meistergeführte Werkstatt mit moderner Diagnosetechnik, geschultem
            Team und kompromisslosem Qualitätsanspruch – von der Annahme bis zur
            Übergabe.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "8", md: "10" }}
          alignItems="center"
        >
          <Box animation="slideDown.normal">
            <Heading
              as="h3"
              size="lg"
              color="fg"
              letterSpacing="-0.01em"
              mb="3"
            >
              Wer wir sind
            </Heading>

            <Text color="fgMuted" mb="5">
              Wir verbinden herstellerkonforme Verfahren mit persönlicher
              Beratung – transparent, termintreu und auf Augenhöhe. Unsere
              Prozesse sind digital dokumentiert, damit Sie jederzeit den
              Überblick behalten.
            </Text>

            <chakra.ul
              display="grid"
              rowGap="stack.gap.md"
              color="fg"
              listStyleType="none"
              m="0"
              p="0"
            >
              {ABOUT_POINTS.map((item) => (
                <chakra.li
                  key={item}
                  display="flex"
                  alignItems="center"
                  gap="stack.gap.sm"
                >
                  <Box
                    aria-hidden="true"
                    w="6"
                    h="6"
                    rounded="badge"
                    bg="badgeBg"
                    color="accent"
                    display="grid"
                    placeItems="center"
                    fontWeight="800"
                    fontSize="xs"
                    flexShrink={0}
                  >
                    ✓
                  </Box>
                  <Text color="fg">{item}</Text>
                </chakra.li>
              ))}
            </chakra.ul>

            <Box mt="5">
              <ChakraLink
                href="/unternehmen"
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
                Mehr über uns
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

          <Card.Root
            role="group"
            variant="outline"
            bg="bg"
            borderColor="border"
            rounded="card"
            overflow="hidden"
            position="relative"
            boxShadow="card"
            animation="fadeIn.normal"
            transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "raised",
              borderColor: "border",
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

            <Box position="relative">
              <Image
                src={aboutUsImage.src}
                alt="Werkstatt – Einblick in unsere Arbeitsplätze"
                w="100%"
                h={{ base: "260px", md: "360px" }}
                objectFit="cover"
              />

              <Box
                aria-hidden
                position="absolute"
                inset="0"
                bg="linear-gradient(to top, rgba(0,0,0,0.18), rgba(0,0,0,0))"
              />

              <Box
                position="absolute"
                left="4"
                bottom="4"
                bg="bg"
                color="fg"
                border="1px solid"
                borderColor="border"
                rounded="interactive"
                px="input.paddingX"
                py="input.paddingY"
                boxShadow="card"
              >
                <Text fontSize="xs" color="fgMuted">
                  Blick in die Werkstatt – Diagnose & Montageplätze
                </Text>
              </Box>
            </Box>
          </Card.Root>
        </SimpleGrid>
      </Container>
    </Section>
  );
}
