"use client";

import { ContactForm, ContactInfo, Container, Section } from "@/components";
import {
  Box,
  Button,
  Card,
  Link as ChakraLink,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Contact() {
  return (
    <Section id="kontakt" variant="subtle">
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
            KONTAKT
          </Box>

          <Heading
            as="h2"
            size="2xl"
            color="fg"
            letterSpacing="-0.02em"
            mb={{ base: "2", md: "3" }}
          >
            Wir sind für Sie da.
          </Heading>

          <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
            Schnell erreichbar, transparent im Dialog – per Formular, Telefon
            oder E-Mail.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: "layout.gap", md: "8" }}
        >
          <ContactForm />
          <ContactInfo />
        </SimpleGrid>

        <Card.Root
          variant="outline"
          bg="bg"
          borderColor="border"
          rounded="card"
          overflow="hidden"
          mt={{ base: "8", md: "12" }}
          boxShadow="card"
          animation="fadeIn.normal"
          _focusWithin={{ boxShadow: "focusRing" }}
          transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "raised",
            borderColor: "border",
          }}
        >
          <Box aria-hidden h="2px" bg="primary" />

          <HStack
            gap={{ base: "card.gap", md: "layout.gap" }}
            align="center"
            justify="space-between"
            flexDir={{ base: "column", md: "row" }}
            p="card.padding"
          >
            <VStack align="start" gap="inset.xs">
              <Heading as="h3" size="xl" color="fg" letterSpacing="-0.01em">
                Bereit für den Service?
              </Heading>

              <Text color="fgMuted">
                Buchen Sie Ihren Termin online in unter 60 Sekunden.
              </Text>
            </VStack>

            <HStack
              gap="stack.gap.sm"
              w={{ base: "full", md: "auto" }}
              flexDir={{ base: "column", sm: "row" }}
            >
              <ChakraLink
                href="/kontakt"
                w={{ base: "full", sm: "auto" }}
                _hover={{ textDecoration: "none" }}
                _focusVisible={{
                  outline: "none",
                  boxShadow: "focusRing",
                  borderRadius: "button",
                }}
              >
                <Button
                  variant="outline"
                  h="button.height.lg"
                  px="button.paddingX"
                  borderRadius="button"
                  borderColor="buttonOutlineBorder"
                  w={{ base: "full", sm: "auto" }}
                  _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
                >
                  Frage stellen
                </Button>
              </ChakraLink>

              <ChakraLink
                href="/termin"
                w={{ base: "full", sm: "auto" }}
                _hover={{ textDecoration: "none" }}
                _focusVisible={{
                  outline: "none",
                  boxShadow: "focusRing",
                  borderRadius: "button",
                }}
              >
                <Button
                  h="button.height.lg"
                  px="button.paddingX"
                  borderRadius="button"
                  bg="buttonSolidBg"
                  color="buttonSolidFg"
                  fontWeight="700"
                  w={{ base: "full", sm: "auto" }}
                  _hover={{ opacity: 0.92 }}
                  _active={{ transform: "scale(0.98)" }}
                  _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
                >
                  Jetzt Termin buchen
                </Button>
              </ChakraLink>
            </HStack>
          </HStack>
        </Card.Root>
      </Container>
    </Section>
  );
}