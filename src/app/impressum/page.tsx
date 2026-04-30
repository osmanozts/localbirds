import { Section } from "@/components/section";
import {
  Box,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const companyDetails = [
  {
    label: "Anbieter",
    value: "Local Birds KFZ Werkstatt",
  },
  {
    label: "Geschäftsführung",
    value: ["Ömer Isinibilir", "Sagevan Pathmanathan"],
  },
  {
    label: "Anschrift",
    value: "Hooghe Weg 31, 47906 Kempen",
  },
  {
    label: "E-Mail",
    value: "info@localbirds.de",
    href: "mailto:info@localbirds.de",
  },
];

export default function Impressum() {
  return (
    <Section id="impressum">
      <Box color="text.primary">
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ base: "stretch", lg: "start" }}
          justify="space-between"
          gap={{ base: "10", lg: "16" }}
          maxW="container.DEFAULT"
          mx="auto"
        >
          <VStack align="start" gap="6" maxW="box.lg">
            <VStack align="start" gap="3">
              <Text
                color="text.accent"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Rechtliche Angaben
              </Text>

              <Heading
                as="h1"
                color="text.primary"
                fontSize={{ base: "4xl", md: "5xl" }}
                lineHeight="1"
                letterSpacing="-0.02em"
                fontWeight="700"
              >
                Impressum
              </Heading>
            </VStack>

            <Text
              color="text.muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.7"
              maxW="box.md"
            >
              Angaben gemäß § 5 TMG für den Webauftritt der Local Birds KFZ
              Werkstatt.
            </Text>

            <Box
              bg="bg.card"
              borderWidth="1px"
              borderColor="divider.DEFAULT"
              rounded="card"
              px={{ base: "5", md: "6" }}
              py="5"
              maxW="box.md"
            >
              <Text color="text.primary" fontSize="md" lineHeight="1.7">
                Für allgemeine Anfragen nutzen Sie bitte die unten genannten
                Kontaktmöglichkeiten.
              </Text>
            </Box>
          </VStack>

          <Box
            w="full"
            maxW={{ base: "full", lg: "box.lg" }}
            bg="bg.primary"
            borderWidth="1px"
            borderColor="divider.DEFAULT"
            rounded="panel"
            boxShadow="card"
            overflow="hidden"
          >
            <Box
              bg="bg.card"
              borderBottomWidth="1px"
              borderColor="divider.DEFAULT"
              px={{ base: "6", md: "8" }}
              py={{ base: "6", md: "8" }}
            >
              <VStack align="start" gap="2">
                <Heading
                  as="h2"
                  color="text.primary"
                  fontSize={{ base: "xl", md: "2xl" }}
                  lineHeight="1.2"
                  letterSpacing="-0.01em"
                  fontWeight="700"
                >
                  Local Birds KFZ Werkstatt
                </Heading>

                <Text color="text.muted" fontSize="sm" lineHeight="1.6">
                  Verantwortlich für den Inhalt dieses Webauftritts
                </Text>
              </VStack>
            </Box>

            <VStack align="stretch" gap="0" px={{ base: "6", md: "8" }}>
              {companyDetails.map((item) => (
                <SimpleGrid
                  key={item.label}
                  columns={{ base: 1, md: 2 }}
                  gap={{ base: "2", md: "6" }}
                  py={{ base: "5", md: "6" }}
                  borderBottomWidth="1px"
                  borderColor="divider.DEFAULT"
                >
                  <Text
                    color="text.muted"
                    fontSize="sm"
                    lineHeight="1.6"
                    fontWeight="600"
                  >
                    {item.label}
                  </Text>

                  {item.href ? (
                    <Link
                      href={item.href}
                      color="link.primary"
                      fontSize="md"
                      lineHeight="1.6"
                      fontWeight="600"
                      textAlign={{ base: "left", md: "right" }}
                      wordBreak="break-word"
                      _hover={{ color: "link.hover" }}
                    >
                      {item.value}
                    </Link>
                  ) : Array.isArray(item.value) ? (
                    <VStack
                      align={{ base: "start", md: "end" }}
                      gap="1"
                      textAlign={{ base: "left", md: "right" }}
                    >
                      {item.value.map((line) => (
                        <Text
                          key={line}
                          color="text.primary"
                          fontSize="md"
                          lineHeight="1.6"
                          fontWeight="500"
                        >
                          {line}
                        </Text>
                      ))}
                    </VStack>
                  ) : (
                    <Text
                      color="text.primary"
                      fontSize="md"
                      lineHeight="1.6"
                      fontWeight="500"
                      textAlign={{ base: "left", md: "right" }}
                    >
                      {item.value}
                    </Text>
                  )}
                </SimpleGrid>
              ))}
            </VStack>

            <Box px={{ base: "6", md: "8" }} py={{ base: "6", md: "8" }}>
              <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                Inhaltliche Änderungen und Aktualisierungen der Angaben erfolgen
                bei Bedarf zeitnah.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Section>
  );
}