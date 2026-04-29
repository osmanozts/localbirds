import {
  Box,
  Card,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Reveal } from "../animations";

export function ContactInfo() {
  return (
    <Stack gap={{ base: "5", md: "6" }} align="stretch">
      <Reveal delay={600}>
        <Card.Root
          bg="bg.card"
          rounded="card"
          overflow="hidden"
          boxShadow="card"
          borderWidth={0}
          animation="fadeIn .28s ease both"
          style={{ animationDelay: "60ms" }}
          transition="transform .2s ease, box-shadow .2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "raised",
          }}
          _focusWithin={{
            boxShadow: "focusRing",
          }}
        >
          <Box aria-hidden="true" h="2px" bg="bg.accent" />

          <Box p={{ base: "5", md: "6" }}>
            <Heading
              as="h3"
              color="text.primary"
              fontSize={{ base: "xl", md: "2xl" }}
              lineHeight="1.2"
              letterSpacing="-0.01em"
              mb={{ base: "3", md: "4" }}
            >
              Direkt erreichen
            </Heading>

            <Stack align="start" gap="2">
              <Text color="text.primary" lineHeight="1.7">
                Telefon:{" "}
                <ChakraLink
                  href="tel:+49201000000"
                  color="link.primary"
                  textDecoration="none"
                  borderRadius="interactive"
                  overflowWrap="anywhere"
                  _hover={{
                    color: "link.hover",
                    textDecoration: "none",
                  }}
                  _focusVisible={{
                    outline: "none",
                    boxShadow: "focusRing",
                  }}
                >
                  0201&nbsp;000000
                </ChakraLink>
              </Text>

              <Text color="text.primary" lineHeight="1.7">
                E-Mail:{" "}
                <ChakraLink
                  href="mailto:hallo@localbirds.de"
                  color="link.primary"
                  textDecoration="none"
                  borderRadius="interactive"
                  overflowWrap="anywhere"
                  _hover={{
                    color: "link.hover",
                    textDecoration: "none",
                  }}
                  _focusVisible={{
                    outline: "none",
                    boxShadow: "focusRing",
                  }}
                >
                  hallo@localbirds.de
                </ChakraLink>
              </Text>

              <Text color="text.muted" lineHeight="1.7">
                Musterstraße 1, 45127 Essen
              </Text>
            </Stack>
          </Box>
        </Card.Root>
      </Reveal>

      <Reveal delay={800}>
        <Card.Root
          bg="bg.card"
          rounded="card"
          overflow="hidden"
          boxShadow="card"
          borderWidth={0}
          animation="fadeIn .28s ease both"
          style={{ animationDelay: "120ms" }}
          transition="transform .2s ease, box-shadow .2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "raised",
          }}
          _focusWithin={{
            boxShadow: "focusRing",
          }}
        >
          <Box aria-hidden="true" h="2px" bg="bg.accent" />

          <Box p={{ base: "5", md: "6" }}>
            <Heading
              as="h3"
              color="text.primary"
              fontSize={{ base: "xl", md: "2xl" }}
              lineHeight="1.2"
              letterSpacing="-0.01em"
              mb={{ base: "3", md: "4" }}
            >
              Öffnungszeiten
            </Heading>

            <Stack align="start" gap="1">
              <Text color="text.primary" lineHeight="1.7">
                Mo–Fr: 08:00–18:00
              </Text>
              <Text color="text.primary" lineHeight="1.7">
                Sa: 09:00–13:00
              </Text>
              <Text color="text.muted" lineHeight="1.7">
                So: geschlossen
              </Text>
            </Stack>
          </Box>
        </Card.Root>
      </Reveal>
    </Stack>
  );
}