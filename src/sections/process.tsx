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
import { LuCalendar, LuCheck, LuMessageSquare, LuWrench } from "react-icons/lu";

type Step = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    icon: LuCalendar,
    title: "Online-Termin",
    desc: "Wunschtermin wählen und Fahrzeugdaten übermitteln – auf Wunsch mit Hol- & Bringservice.",
  },
  {
    icon: LuMessageSquare,
    title: "Annahme & Diagnose",
    desc: "Transparente Erstprüfung. Wir besprechen Maßnahmen, Preise und Zeitrahmen vor der Freigabe.",
  },
  {
    icon: LuWrench,
    title: "Service & Reparatur",
    desc: "Präzise Ausführung nach Herstellervorgaben. Dokumentation digital – Teile in OE-Qualität.",
  },
  {
    icon: LuCheck,
    title: "Übergabe am selben Tag",
    desc: "Abschlusscheck, Probefahrt und digitale Rechnung. Auf Wunsch HU/AU direkt mit erledigt.",
  },
];

export function Process() {
  return (
    <Section id="ablauf">
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
            So läuft es
          </Heading>

          <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
            Klar definiert. Transparent kommuniziert. Von der Online-Buchung bis
            zur Schlüsselübergabe.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          gap={{ base: "layout.gap", md: "layout.gap" }}
        >
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const Icon = step.icon;

            return (
              <Box key={step.title} position="relative">
                {!isLast && (
                  <>
                    <Box
                      aria-hidden
                      position="absolute"
                      left={{ base: "calc(50% - 1px)", md: "auto" }}
                      top={{ base: "100%", md: "50%" }}
                      width={{ base: "2px", md: "calc(100% + 24px)" }}
                      height={{ base: "24px", md: "2px" }}
                      transform={{
                        base: "translateY(8px)",
                        md: "translateX(12px)",
                      }}
                      bg="divider"
                      rounded="full"
                    />
                    <Box
                      aria-hidden
                      position="absolute"
                      left={{ base: "calc(50% - 1px)", md: "auto" }}
                      top={{ base: "100%", md: "50%" }}
                      width={{ base: "2px", md: "calc(100% + 24px)" }}
                      height={{ base: "24px", md: "2px" }}
                      transform={{
                        base: "translateY(8px)",
                        md: "translateX(12px)",
                      }}
                      bg="primary"
                      rounded="full"
                      opacity={0.9}
                      transformOrigin={{ base: "top", md: "left" }}
                      animation="underline.grow"
                    />
                  </>
                )}

                <Card.Root
                  role="group"
                  variant="outline"
                  bg="bg"
                  borderColor="border"
                  rounded="card"
                  overflow="hidden"
                  boxShadow="card"
                  transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "raised",
                    borderColor: "borderStrong",
                  }}
                  animation="fadeIn.normal"
                  style={{ animationDelay: `${index * 90}ms` }}
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

                  <Box p="card.padding">
                    <Box
                      display="flex"
                      alignItems="flex-start"
                      gap="stack.gap.sm"
                      mb="3"
                    >
                      <Box
                        w="button.height.sm"
                        h="button.height.sm"
                        rounded="badge"
                        bg="badgeBg"
                        color="badgeFg"
                        display="grid"
                        placeItems="center"
                        fontWeight="700"
                        fontSize="sm"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </Box>

                      <Box
                        w="button.height.sm"
                        h="button.height.sm"
                        rounded="badge"
                        bg="surface"
                        border="1px solid"
                        borderColor="border"
                        color="accent"
                        display="grid"
                        placeItems="center"
                        aria-hidden="true"
                      >
                        <Icon size={18} />
                      </Box>
                    </Box>

                    <Heading
                      as="h3"
                      size="md"
                      color="fg"
                      lineHeight="1.2"
                      mb="1"
                    >
                      {step.title}
                    </Heading>

                    <Text color="fgMuted" fontSize="sm">
                      {step.desc}
                    </Text>

                    <Box mt="3">
                      <ChakraLink
                        href={`/ablauf#${encodeURIComponent(
                          step.title.toLowerCase(),
                        )}`}
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
                        Details ansehen
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
                </Card.Root>
              </Box>
            );
          })}
        </SimpleGrid>

        <Box textAlign="center" mt={{ base: "8", md: "12" }}>
          <Text color="fgMuted">
            Bereit für den ersten Schritt?{" "}
            <ChakraLink
              href="/termin"
              color="link"
              _hover={{ color: "linkHover" }}
              _focusVisible={{
                outline: "none",
                boxShadow: "focusRing",
                borderRadius: "interactive",
              }}
            >
              Jetzt Termin buchen.
            </ChakraLink>
          </Text>
        </Box>
      </Container>
    </Section>
  );
}
