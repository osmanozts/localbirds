import { HeroBackground, HeroContent, Section } from "@/components";
import { Box } from "@chakra-ui/react";

export function Hero() {
  return (
    <Section id="hero">
      <Box
        position="relative"
        zIndex={1}
        overflow="hidden"
        borderRadius="panel"
        bg="bg.card"
        w="100%"
        minH={{ base: "60vh", md: "80vh" }}
      >
        <HeroBackground />
        <HeroContent />
      </Box>
    </Section>
  );
}