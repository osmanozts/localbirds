"use client";

import { Reveal, Section, ServiceCard, ServiceFooter, ServiceMobileSlider } from "@/components";
import {
  Heading,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import {
  LuCalendarCheck,
  LuCar,
  LuCircleGauge,
  LuDisc3,
  LuSearchCheck,
  LuWrench,
} from "react-icons/lu";

const services = [
  {
    icon: LuCar,
    title: "Wartung & Inspektion",
    desc: "Regelmäßige Pflege und Prüfung wichtiger Fahrzeugbereiche.",
  },
  {
    icon: LuWrench,
    title: "Reparatur",
    desc: "Sorgfältige Arbeiten an gängigen Komponenten.",
  },
  {
    icon: LuSearchCheck,
    title: "Diagnose",
    desc: "Strukturierte Fehlersuche mit verständlicher Einschätzung.",
  },
  {
    icon: LuDisc3,
    title: "Bremsen",
    desc: "Prüfung und Instandsetzung relevanter Bremskomponenten.",
  },
  {
    icon: LuCircleGauge,
    title: "Reifenservice",
    desc: "Wechsel, Kontrolle und Beratung rund um Reifen und Räder.",
  },
  {
    icon: LuCalendarCheck,
    title: "Termin & Beratung",
    desc: "Persönliche Abstimmung, klare Kommunikation und Transparenz.",
  },
];



export function Services() {




  return (
    <Section id="leistungen" >
      <Stack gap={{ base: "8", md: "10", lg: "12" }} align="stretch">
        <Reveal>
          <Stack
            gap="stack.md"
            textAlign={{ base: "left", md: "center" }}
            align={{ base: "stretch", md: "center" }}
          >
            <Text
              as="p"
              color="text.accent"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              Leistungen
            </Text>

            <Heading
              as="h2"
              color="text.primary"
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              lineHeight={{ base: "1.12", md: "1.05" }}
              letterSpacing="-0.02em"
              maxW="4xl"
            >
              Zuverlässiger Werkstattservice für den Alltag.
            </Heading>

            <Text
              color="text.muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.7"
              maxW="3xl"
            >
              Wartung, Reparatur und Diagnose mit klarer Beratung, sauberer
              Kommunikation und nachvollziehbarer Kosteneinschätzung.
            </Text>
          </Stack>
        </Reveal>

        <ServiceMobileSlider services={services} />

        <SimpleGrid
          display={{ base: "none", md: "grid" }}
          columns={{ md: 2, lg: 3 }}
          gap={{ md: "5", lg: "6" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </SimpleGrid>

        <ServiceFooter />
      </Stack>
    </Section>
  );
}