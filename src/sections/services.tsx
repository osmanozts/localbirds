"use client";

import { Container, Section } from "@/components";
import {
  Box,
  Card,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { LuBrush, LuCar, LuGauge, LuPlugZap, LuWrench } from "react-icons/lu";

const services = [
  {
    icon: LuCar,
    title: "Inspektion",
    desc: "Wartung nach Herstellervorgaben mit digitalem Serviceprotokoll – transparent, termintreu, herstellerkonform.",
  },
  {
    icon: LuWrench,
    title: "Reparatur",
    desc: "Mechanik, Elektronik & Karosserie aus einer Hand. Diagnose auf OEM-Niveau, Ersatzteile in Erstausrüsterqualität.",
  },
  {
    icon: LuBrush,
    title: "Smart-Repair",
    desc: "Lack, Dellen, Felgen: punktgenaue Instandsetzung ohne Wertverlust – schnell, sauber, kosteneffizient.",
  },
  {
    icon: LuGauge,
    title: "HU-Vorbereitung",
    desc: "Sicher zur Plakette: Vorabcheck inkl. Behebung relevanter Mängel. Auf Wunsch HU/AU direkt bei uns vor Ort.",
  },
  {
    icon: LuPlugZap,
    title: "E-Mobilität",
    desc: "Hochvolt-Service, Batterie-Check & Software-Updates – zertifiziert und herstellerübergreifend.",
  },
];

export function Services() {
  return (
    <Section id="leistungen">
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
            Leistungen
          </Heading>

          <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
            Präzision, Transparenz und Service auf Herstellerniveau – für
            Fahrzeuge mit Verbrenner, Hybrid und Elektro.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "card.gap", md: "layout.gap" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card.Root
                key={service.title}
                role="group"
                variant="outline"
                bg="bg"
                borderColor="border"
                rounded="card"
                overflow="hidden"
                position="relative"
                boxShadow="card"
                transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "raised",
                  borderColor: "borderStrong",
                }}
                animation="fadeIn.normal"
                style={{ animationDelay: `${index * 60}ms` }}
                _focusWithin={{ boxShadow: "focusRing" }}
              >
                <Box
                  aria-hidden
                  position="absolute"
                  insetInline="0"
                  top="0"
                  h="2px"
                  bg="primary"
                  transformOrigin="left"
                  transform="scaleX(0)"
                  transition="transform .22s ease"
                  _groupHover={{ transform: "scaleX(1)" }}
                />

                <Card.Header
                  display="flex"
                  alignItems="flex-start"
                  gap="card.gap"
                  p="card.padding"
                >
                  <Box
                    flexShrink={0}
                    w="button.height.md"
                    h="button.height.md"
                    rounded="badge"
                    bg="badgeBg"
                    color="badgeFg"
                    display="grid"
                    placeItems="center"
                    aria-hidden="true"
                  >
                    <Icon size={20} />
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      size="md"
                      color="fg"
                      lineHeight="1.2"
                      mb="1"
                    >
                      {service.title}
                    </Heading>

                    <Text color="fgMuted" fontSize="sm">
                      {service.desc}
                    </Text>
                  </Box>
                </Card.Header>
              </Card.Root>
            );
          })}
        </SimpleGrid>

        <Box textAlign="center" mt={{ base: "8", md: "12" }}>
          <Text color="fgMuted">
            Nicht das Richtige dabei?{" "}
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
              Wir beraten Sie individuell.
            </ChakraLink>
          </Text>
        </Box>
      </Container>
    </Section>
  );
}