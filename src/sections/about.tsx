import { Section, AboutPoints, Reveal } from "@/components";
import {
  Box,
  Card,
  Link as ChakraLink,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import aboutUsImage from "../assets/images/about-us.jpg";



export function About() {
  return (
    <Section id="werkstatt" >
      <Stack gap={{ base: "8", md: "10", lg: "12" }} >
        <Reveal delay={80}>
          <Stack
            gap="stack.md"
            maxW="3xl"
            textAlign={{ base: "left", md: "center" }}
            mx={{ base: "0", md: "auto" }}
            align={{ base: "flex-start", md: "center" }}
          >
            <Text
              as="p"
              color="text.accent"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              Über die Werkstatt
            </Text>

            <Heading
              as="h2"
              color="text.primary"
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              lineHeight={{ base: "1.12", md: "1.05" }}
              letterSpacing="-0.02em"
              maxW="2xl"
            >
              Sorgfältige Arbeit und klare Kommunikation.
            </Heading>

            <Text
              color="text.muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.7"
              maxW="2xl"
            >
              Eine Kfz-Werkstatt für Wartung, Reparatur und Diagnose mit
              persönlicher Beratung und nachvollziehbaren nächsten Schritten.
            </Text>
          </Stack>
        </Reveal>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "5", md: "8", lg: "10" }}
          alignItems={{ base: "start" }}
        >
          <Reveal delay={100}>
            <Card.Root
              bg="bg.card"
              rounded="panel"
              boxShadow="card"
              borderWidth={0}
              overflow="hidden"
              height={{ base: "box.md", md: "box.sm" }}
            >
              <Card.Body p={{ base: "5", md: "8", lg: "8" }}>
                <Stack gap={{ base: "5", md: "6" }}>
                  <Stack gap="stack.md">
                    <Heading
                      as="h3"
                      color="text.primary"
                      fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                      lineHeight="1.15"
                      letterSpacing="-0.02em"
                    >
                      Was uns wichtig ist
                    </Heading>

                    <Text color="text.muted" fontSize="md" lineHeight="1.7">
                      Gute Werkstattarbeit beginnt mit Zuhören, einer ruhigen
                      Einschätzung und transparenter Abstimmung. So bleibt klar,
                      welche Arbeiten sinnvoll sind und was als Nächstes passiert.
                    </Text>
                  </Stack>

                  <AboutPoints />

                  <Box>
                    <ChakraLink
                      href="/unternehmen"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      minH={{ base: "button.height.sm", lg: "button.height.md" }}
                      px="button.px"
                      py="button.py"
                      rounded="button"
                      bg="button.primary"
                      color="text.inverse"
                      fontWeight="semibold"
                      textDecoration="none"
                      w={{ base: "full", sm: "fit-content" }}
                      _hover={{
                        bg: "button.strong",
                        textDecoration: "none",
                      }}
                      _focusVisible={{
                        boxShadow: "focusRing",
                        outline: "none",
                      }}
                    >
                      Mehr über uns
                    </ChakraLink>
                  </Box>
                </Stack>
              </Card.Body>
            </Card.Root>
          </Reveal>

          <Reveal delay={120}>


            <Box
              h={{
                base: "56",
                sm: "72",
                md: "80",
                lg: "100%",
              }}
              height="box.sm"
              overflow="hidden"
              rounded="card"
            >
              <Image
                src={aboutUsImage.src}
                alt="Einblick in eine Kfz-Werkstatt mit Arbeitsplätzen"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Reveal>
        </SimpleGrid>
      </Stack>
    </Section>
  );
}