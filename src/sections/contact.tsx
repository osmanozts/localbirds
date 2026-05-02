import { ContactForm, ContactInfo, Reveal, Section } from "@/components";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export function Contact() {
  return (
    <Section id="kontakt" >
      <Reveal delay={120}>
        <Stack
          gap={{ base: "2", md: "3" }}
          textAlign={{ base: "left", md: "center" }}
          align={{ base: "flex-start", md: "center" }}
          mb={{ base: "8", md: "10", lg: "12" }}
        >
          <Box
            as="span"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            bg="bg.accent"
            color="text.inverse"
            px="3"
            py="1"
            rounded="badge"
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.06em"
          >
            KONTAKT
          </Box>

          <Heading
            as="h2"
            color="text.primary"
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            lineHeight={{ base: "1.12", md: "1.05" }}
            letterSpacing="-0.02em"
            maxW="3xl"
          >
            Wir sind für Sie da.
          </Heading>

          <Text
            color="text.muted"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="1.7"
            maxW="3xl"
          >
            Schnell erreichbar, transparent im Dialog – per Formular, Telefon
            oder E-Mail.
          </Text>
        </Stack>
      </Reveal>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={{ base: "5", md: "8", lg: "layout.gap" }}
        alignItems="start"
      >
        <ContactForm />
        <ContactInfo />
      </SimpleGrid>
    </Section>
  );
}