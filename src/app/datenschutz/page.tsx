import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { Footer } from "@/sections";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function Datenschutz() {
  return (
    <Section id="datenschutz" >
      <Navbar />
      <Section>
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
              Datenschutzerklärung
            </Heading>

            <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
              Informationen zur Verarbeitung personenbezogener Daten auf dieser
              Website.
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
            maxW="xl"
          >
            <Text color="fg">
              Diese Website verwendet keine personenbezogenen Tracking-Cookies.
            </Text>

            <Text color="fg">
              Formulareingaben werden ausschließlich zur Bearbeitung der Anfrage
              genutzt.
            </Text>

            <Text color="fgMuted" fontSize="sm">
              Weitere Informationen zur Verarbeitung, Speicherung und Ihren
              Betroffenenrechten können hier ergänzt werden.
            </Text>
          </VStack>
        </VStack>
      </Section>
      <Footer />
    </Section>
  );
}
