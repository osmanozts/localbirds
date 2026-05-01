import { Section } from "@/components";
import {
  Box,
  Button,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";

type ULinkProps = React.ComponentProps<typeof ChakraLink>;

const ULink: React.FC<ULinkProps> = ({ children, ...props }) => (
  <ChakraLink
    {...props}
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
    {children}
  </ChakraLink>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer">
      <Section id="footer" >
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: "8", md: "10" }}
          py={{ base: "8", md: "12", lg: "16" }}
        >
          <VStack align="start" gap="stack.sm">
            <Heading
              as="h3"
              color="text.primary"
              fontSize={{ base: "xl", md: "2xl" }}
              letterSpacing="-0.01em"
              lineHeight="1.1"
            >
              Local Bird
            </Heading>

            <Text color="text.muted" lineHeight="1.7">
              www.local-bird.de
            </Text>

            <Text color="text.muted" lineHeight="1.7">
              Musterstraße 1, 45127 Essen
            </Text>
          </VStack>

          <VStack align="start" gap="stack.sm" color="text.muted">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="0.04em"
              textTransform="uppercase"
              mb="1"
            >
              Navigation
            </Text>

            <ULink color="text.muted" href="/leistungen">Leistungen</ULink>
            <ULink color="text.muted" href="/ablauf">Ablauf</ULink>
            <ULink color="text.muted" href="/preise">Preise</ULink>
            <ULink color="text.muted" href="/unternehmen">Über uns</ULink>
            <ULink color="text.muted" href="/faq">FAQ</ULink>
          </VStack>

          <VStack
            align="start"
            gap="stack.sm"
            gridColumn={{ base: "auto", sm: "1 / -1", lg: "auto" }}
          >
            <Heading
              as="h4"
              color="text.primary"
              fontSize={{ base: "lg", md: "xl" }}
              letterSpacing="-0.01em"
              lineHeight="1.2"
            >
              Schneller Kontakt
            </Heading>

            <Text color="text.muted" lineHeight="1.7">
              Telefon: <ULink color="text.accent" href="tel:+49201000000">0201&nbsp;000000</ULink>
            </Text>

            <Text color="text.muted" lineHeight="1.7">
              E-Mail:{" "}
              <ULink color="text.accent" href="mailto:info@localbirds.de">
                info@local-bird.de
              </ULink>
            </Text>

            <Text color="text.muted" fontSize="sm" lineHeight="1.7">
              Mo–Fr 08:00–18:00 · Sa 09:00–13:00
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              gap="stack.sm"
              pt="1"
              w={{ base: "100%", sm: "auto" }}
              flexWrap="wrap"
            >
              <Button
                asChild
                variant="outline"
                h={{
                  base: "button.height.md",
                  md: "button.height.sm",
                }}
                w={{ base: "100%", sm: "auto" }}
                px="button.px"
                py="button.py"
                borderRadius="button"
                borderColor="border.primary"
                color="text.accent"
                bg="transparent"
                justifyContent="center"
                _hover={{
                  borderColor: "border.strong",
                }}
                _focusVisible={{
                  boxShadow: "focusRing",
                  outline: "none",
                }}
              >
                <ChakraLink
                  href="/kontakt"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  h="100%"
                  _hover={{ textDecoration: "none" }}
                >
                  Frage stellen
                </ChakraLink>
              </Button>

              <Button
                asChild
                h={{
                  base: "button.height.md",
                  md: "button.height.sm",
                }}
                w={{ base: "100%", sm: "auto" }}
                px="button.px"
                py="button.py"
                borderRadius="button"
                bg="button.primary"
                color="text.inverse"
                fontWeight="700"
                justifyContent="center"
                _hover={{
                  bg: "button.strong",
                }}
                _focusVisible={{
                  boxShadow: "focusRing",
                  outline: "none",
                }}
              >
                <ChakraLink
                  href="/termin"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  h="100%"
                  _hover={{ textDecoration: "none" }}
                >
                  Termin buchen
                </ChakraLink>
              </Button>
            </Stack>
          </VStack>
        </SimpleGrid>
      </Section>
    </Box>
  );
}