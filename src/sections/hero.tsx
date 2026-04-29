import { HeroBackground, HeroContent } from "@/components";
import { Box } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
      position="relative"
      zIndex={1}
      p={{ base: "2", md: "6" }}
      overflow="hidden"
    >
      <HeroBackground />
      <HeroContent />
    </Box>
  );
}