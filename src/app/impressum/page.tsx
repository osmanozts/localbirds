"use client";

import { Container, Navbar, Section } from "@/components";
import { Footer } from "@/sections";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Impressum() {
  return (
    <Container>
      <Section id="impressum">
        <Navbar />
        <VStack
          align="start"
          gap="layout.gap"
          py={{ base: "section.paddingY", md: "20" }}
        >
          <Box>
            <Heading
              as="h1"
              size="2xl"
              color="fg"
              letterSpacing="-0.02em"
              mb="3"
            >
              Impressum
            </Heading>

            <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
              Angaben gemäß § 5 TMG.
            </Text>
          </Box>

          <VStack
            align="start"
            gap="stack.gap.sm"
            bg="bg"
            color="fg"
            border="1px solid"
            borderColor="border"
            rounded="card"
            boxShadow="card"
            p="card.padding"
            w="full"
            maxW="lg"
          >
            <Text color="fg" fontWeight="600">
              Local Bird KFZ Werkstatt
            </Text>
            <Text color="fgMuted">localbirds.de</Text>
            <Text color="fg">Inhaber: Max Mustermann</Text>
            <Text color="fg">Musterstraße 1, 45127 Essen</Text>
            <Text color="fg">Telefon: 0201 000000</Text>
            <Text color="fg">E-Mail: hallo@localbirds.de</Text>
          </VStack>
        </VStack>
      </Section>
      <Footer />
    </Container>
  );
}
