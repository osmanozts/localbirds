"use client";

import { Section } from "@/components";
import {
  Box,
  Button,
  Card,
  Link as ChakraLink,
  Heading,
  SimpleGrid,
  Text,
  chakra,
} from "@chakra-ui/react";

type Plan = {
  name: string;
  price: string;
  sub?: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Inspektion Basis",
    price: "ab 149€",
    sub: "zzgl. Material nach Herstellerfreigabe",
    features: [
      "Ölwechsel inkl. Serviceanzeige",
      "Filterwechsel",
      "Sichtprüfung 30-Punkte",
    ],
  },
  {
    name: "Bremsen Service",
    price: "ab 199€",
    sub: "Achse, Fahrzeug abhängig",
    features: ["Scheiben & Beläge", "Bremsflüssigkeit", "Fachgerechte Montage"],
    popular: true,
  },
  {
    name: "Smart-Repair",
    price: "ab 89€",
    sub: "pro Bauteil / Schadensbild",
    features: ["Kratzerreparatur", "Dellentechnik", "Felgenaufbereitung"],
  },
];

export function Pricing() {
  return (
    <Section id="preise" >
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
          Preise
        </Heading>

        <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
          Klare Pakete, volle Transparenz. Faire Werkstattpreise –
          herstellerkonform, nachvollziehbar.
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={{ base: "card.gap", md: "layout.gap" }}
      >
        {plans.map((plan, index) => (
          <Card.Root
            key={plan.name}
            role="group"
            variant="outline"
            bg="bg"
            borderColor="border"
            rounded="card"
            overflow="hidden"
            position="relative"
            boxShadow={plan.popular ? "raised" : "card"}
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
            {plan.popular && (
              <Box
                position="absolute"
                top="3"
                right="-28px"
                bg="primary"
                color="primaryFg"
                px="3"
                py="1"
                fontSize="xs"
                fontWeight="700"
                letterSpacing="0.06em"
                transform="rotate(45deg)"
                rounded="sm"
                zIndex={1}
              >
                BELIEBT
              </Box>
            )}

            <Box
              aria-hidden
              h="2px"
              bg={plan.popular ? "primary" : "accent"}
              transformOrigin="left"
              transform="scaleX(0.6)"
              transition="transform .25s ease"
              _groupHover={{ transform: "scaleX(1)" }}
            />

            <Box p="card.padding">
              <Heading
                as="h3"
                size="md"
                color="fg"
                lineHeight="1.2"
                mb="2"
              >
                {plan.name}
              </Heading>

              <Box
                display="flex"
                alignItems="baseline"
                gap="stack.gap.sm"
                mb="1"
                flexWrap="wrap"
              >
                <Text
                  as="span"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="800"
                  color="fg"
                  letterSpacing="-0.01em"
                >
                  {plan.price}
                </Text>

                {plan.sub && (
                  <Text as="span" color="fgMuted" fontSize="sm">
                    {plan.sub}
                  </Text>
                )}
              </Box>

              <chakra.ul
                mt="4"
                mb="6"
                display="grid"
                rowGap="stack.gap.sm"
                color="fg"
                listStyleType="none"
                m="0"
                p="0"
              >
                {plan.features.map((feature, featureIndex) => (
                  <chakra.li
                    key={feature}
                    display="flex"
                    alignItems="center"
                    gap="stack.gap.sm"
                    borderTop={featureIndex > 0 ? "1px solid" : undefined}
                    borderColor={featureIndex > 0 ? "border" : undefined}
                    pt={featureIndex > 0 ? "inset.sm" : undefined}
                  >
                    <Box
                      w="6"
                      h="6"
                      rounded="badge"
                      bg="badgeBg"
                      color="badgeFg"
                      display="grid"
                      placeItems="center"
                      fontWeight="700"
                      fontSize="xs"
                      aria-hidden="true"
                      flexShrink={0}
                    >
                      ✓
                    </Box>
                    <Text color="fg">{feature}</Text>
                  </chakra.li>
                ))}
              </chakra.ul>

              <ChakraLink
                href={`/termin?paket=${encodeURIComponent(plan.name)}`}
                display="inline-block"
                _hover={{ textDecoration: "none" }}
                _focusVisible={{
                  outline: "none",
                  boxShadow: "focusRing",
                  borderRadius: "button",
                }}
              >
                <Button
                  bg="buttonSolidBg"
                  color="buttonSolidFg"
                  h="button.height.md"
                  px="button.paddingX"
                  borderRadius="button"
                  fontWeight="700"
                  _hover={{ opacity: 0.92 }}
                  _active={{ transform: "scale(0.98)" }}
                  _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
                >
                  Termin buchen
                </Button>
              </ChakraLink>

              <Text mt="3" color="fgMuted" fontSize="xs">
                Endpreise abhängig von Modell/Umfang. Wir bestätigen Kosten
                vor Arbeitsbeginn.
              </Text>
            </Box>
          </Card.Root>
        ))}
      </SimpleGrid>

      <Box textAlign="center" mt={{ base: "8", md: "12" }}>
        <Text color="fgMuted">
          Sie brauchen etwas anderes?{" "}
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
            Wir erstellen Ihnen ein individuelles Angebot.
          </ChakraLink>
        </Text>
      </Box>
    </Section>
  );
}