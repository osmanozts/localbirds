"use client";

import { Container, Section } from "@/components";
import { Box, Card, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const IMAGE_IDS = [1011, 1027, 1031, 1044, 1069, 1074];

export function Gallery() {
  return (
    <Section id="galerie">
      <Container>
        <Box
          textAlign="center"
          mb={8}
          animation="fadeIn.normal"
        >
          <Heading
            as="h2"
            size="2xl"
            color="fg"
            letterSpacing="-0.02em"
            mb={2}
          >
            Galerie
          </Heading>

          <Text color="fgMuted" fontSize={{ base: "md", md: "lg" }}>
            Einblicke in Werkstatt, Ausstattung und tägliche Arbeit.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          gap={{ base: "card.gap", md: "layout.gap" }}
        >
          {IMAGE_IDS.map((id, index) => (
            <Card.Root
              key={id}
              role="group"
              variant="outline"
              bg="bg"
              borderColor="border"
              rounded="card"
              overflow="hidden"
              boxShadow="card"
              animation="fadeIn.normal"
              transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
              style={{ animationDelay: `${index * 60}ms` }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "raised",
                borderColor: "borderStrong",
              }}
            >
              <Box
                aria-hidden
                h="2px"
                bg="primary"
                transformOrigin="left"
                transform="scaleX(0.6)"
                transition="transform .25s ease"
                _groupHover={{ transform: "scaleX(1)" }}
              />

              <Image
                src={`https://picsum.photos/id/${id}/800/600`}
                alt={`Galerie Bild ${index + 1}`}
                w="100%"
                h={{ base: "220px", md: "260px" }}
                objectFit="cover"
              />
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  );
}
