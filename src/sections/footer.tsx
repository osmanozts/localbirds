"use client";

import { Container, Section } from "@/components";
import {
  Box,
  Button,
  Link as ChakraLink,
  Heading,
  HStack,
  Separator,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";

type ULinkProps = React.ComponentProps<typeof ChakraLink>;

const ULink: React.FC<ULinkProps> = ({ children, ...props }) => (
  <ChakraLink
    {...props}
    position="relative"
    color="fgMuted"
    textDecoration="none"
    role="group"
    transition="color .2s ease"
    _hover={{ color: "linkHover" }}
    _focusVisible={{
      outline: "none",
      boxShadow: "focusRing",
      borderRadius: "interactive",
    }}
  >
    {children}
    <Box
      as="span"
      aria-hidden
      position="absolute"
      left="0"
      right="0"
      bottom="-2px"
      h="2px"
      bg="primary"
      transformOrigin="left"
      transform="scaleX(0)"
      transition="transform .22s ease"
      _groupHover={{ transform: "scaleX(1)" }}
    />
  </ChakraLink>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section id="footer">
      <Container>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: "8", md: "10" }}
          py={{ base: "10", md: "14" }}
        >
          <VStack align="start" gap="stack.gap.sm" animation="fadeIn.normal">
            <Heading
              as="h3"
              size="lg"
              color="fg"
              letterSpacing="-0.01em"
              lineHeight="1.1"
            >
              Local Bird
            </Heading>
            <Text color="fgMuted">localbirds.de</Text>
            <Text color="fgMuted">Musterstraße 1, 45127 Essen</Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 2, md: 2 }}
            gap="layout.gap"
            animation="fadeIn.normal"
          >
            <VStack align="start" gap="stack.gap.sm">
              <Text color="fgMuted" fontSize="sm" mb="inset.xs">
                Navigation
              </Text>
              <ULink href="/leistungen">Leistungen</ULink>
              <ULink href="/ablauf">Ablauf</ULink>
              <ULink href="/preise">Preise</ULink>
              <ULink href="/unternehmen">Über uns</ULink>
              <ULink href="/faq">FAQ</ULink>
            </VStack>

            <VStack align="start" gap="stack.gap.sm">
              <Text color="fgMuted" fontSize="sm" mb="inset.xs">
                Aktionen
              </Text>
              <ULink href="/termin">Termin buchen</ULink>
              <ULink href="/kontakt">Kontakt</ULink>
              <ULink href="/kontakt#anfahrt">Anfahrt</ULink>
              <ULink href="/kontakt#oeffnungszeiten">Öffnungszeiten</ULink>
            </VStack>
          </SimpleGrid>

          <VStack align="start" gap="stack.gap.sm" animation="fadeIn.normal">
            <Heading as="h4" size="md" color="fg" letterSpacing="-0.01em">
              Schneller Kontakt
            </Heading>

            <Text color="fg">
              Telefon: <ULink href="tel:+49201000000">0201&nbsp;000000</ULink>
            </Text>

            <Text color="fg">
              E-Mail:{" "}
              <ULink href="mailto:hallo@localbirds.de">
                hallo@localbirds.de
              </ULink>
            </Text>

            <Text color="fgMuted" fontSize="sm">
              Mo–Fr 08:00–18:00 · Sa 09:00–13:00
            </Text>

            <HStack gap="stack.gap.sm" pt="inset.xs" flexWrap="wrap">
              <Button
                asChild
                variant="outline"
                h="button.height.sm"
                px="button.paddingX"
                borderRadius="button"
                borderColor="buttonOutlineBorder"
                _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
              >
                <ChakraLink href="/kontakt" _hover={{ textDecoration: "none" }}>
                  Frage stellen
                </ChakraLink>
              </Button>

              <Button
                asChild
                h="button.height.sm"
                px="button.paddingX"
                borderRadius="button"
                bg="buttonSolidBg"
                color="buttonSolidFg"
                fontWeight="700"
                _hover={{ opacity: 0.92 }}
                _active={{ transform: "scale(0.98)" }}
                _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
              >
                <ChakraLink href="/termin" _hover={{ textDecoration: "none" }}>
                  Termin buchen
                </ChakraLink>
              </Button>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Separator borderColor="divider" />

        <HStack
          justify="space-between"
          align={{ base: "start", md: "center" }}
          gap={{ base: "4", md: "6" }}
          py={{ base: "6", md: "8" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Text color="fgMuted">© {year} Local Bird</Text>

          <HStack
            gap="6"
            color="fgMuted"
            flexWrap="wrap"
            align="center"
          >
            <ULink href="/impressum">Impressum</ULink>
            <ULink href="/datenschutz">Datenschutz</ULink>

            <Text display={{ base: "none", md: "inline" }} color="fgMuted">
              |
            </Text>

            <Text color="fgMuted">Made with Chakra UI v3 + Next.js</Text>
          </HStack>
        </HStack>
      </Container>
    </Section>
  );
}