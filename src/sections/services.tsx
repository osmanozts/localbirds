"use client";

import {
  Section,
  SectionHeader,
  ServiceCard,
  ServiceFooter,
  ServiceMobileSlider,
} from "@/components";
import { Box, SimpleGrid } from "@chakra-ui/react";
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
    <Section id="leistungen">
      <SectionHeader
        badge="Leistungen"
        title="Zuverlässiger Werkstattservice für den Alltag."
        description="Wartung, Reparatur und Diagnose mit klarer Beratung, sauberer Kommunikation und nachvollziehbarer Kosteneinschätzung."
      />

      <ServiceMobileSlider services={services} />

      <SimpleGrid
        as="ul"
        display={{ base: "none", md: "grid" }}
        columns={{ md: 2, lg: 3 }}
        gap={{ md: "5", lg: "6" }}
        listStyle="none"
        p="0"
        m="0"
      >
        {services.map((service, index) => (
          <Box as="li" key={service.title} h="100%">
            <ServiceCard service={service} index={index} />
          </Box>
        ))}
      </SimpleGrid>

      <ServiceFooter />
    </Section>
  );
}