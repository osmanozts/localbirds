import {
    Box,
    Card,
    Link as ChakraLink,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";

export function ContactInfo() {
  return (
    <VStack gap={{ base: 6, md: 8 }} align="stretch">
      <Card.Root
        variant="outline"
        bg="surfaceHi"
        borderColor="border"
        rounded="md"
        overflow="hidden"
        animation="fadeIn .28s ease both"
        style={{ animationDelay: "60ms" }}
        _focusWithin={{ boxShadow: "focusRing" }}
        transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
        _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
      >
        <Box aria-hidden h="2px" bg="accent" />
        <Box p={{ base: 5, md: 6 }}>
          <Heading as="h3" size="lg" color="fg" mb="3">
            Direkt erreichen
          </Heading>
          <VStack align="start" gap="2">
            <Text color="fg">
              Telefon:{" "}
              <ChakraLink
                href="tel:+49201000000"
                color="link"
                _hover={{ color: "navbar.linkActive" }}
              >
                0201&nbsp;000000
              </ChakraLink>
            </Text>
            <Text color="fg">
              E-Mail:{" "}
              <ChakraLink
                href="mailto:hallo@localbirds.de"
                color="link"
                _hover={{ color: "navbar.linkActive" }}
              >
                hallo@localbirds.de
              </ChakraLink>
            </Text>
            <Text color="muted">Musterstraße 1, 45127 Essen</Text>
          </VStack>
        </Box>
      </Card.Root>

      <Card.Root
        variant="outline"
        bg="surfaceHi"
        borderColor="border"
        rounded="md"
        overflow="hidden"
        animation="fadeIn .28s ease both"
        style={{ animationDelay: "120ms" }}
        _focusWithin={{ boxShadow: "focusRing" }}
        transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
        _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
      >
        <Box aria-hidden h="2px" bg="accent" />
        <Box p={{ base: 5, md: 6 }}>
          <Heading as="h3" size="lg" color="fg" mb="3">
            Öffnungszeiten
          </Heading>
          <VStack align="start" gap="1" color="fg">
            <Text>Mo–Fr: 08:00–18:00</Text>
            <Text>Sa: 09:00–13:00</Text>
            <Text color="muted">So: geschlossen</Text>
          </VStack>
        </Box>
      </Card.Root>

    </VStack>
  );
}
