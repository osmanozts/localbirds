"use client";

import { ProcessIcon, Reveal } from "@/components";
import { Box, Card, Heading, Stack, Text } from "@chakra-ui/react";

type ProcessStepIcon = "message" | "wrench" | "check";

type ProcessStepCardProps = {
  icon: ProcessStepIcon;
  title: string;
  description: string;
  stepNumber: number;
  delay?: number;
};

export function ProcessStepCard({
  icon,
  title,
  description,
  stepNumber,
  delay = 0,
}: ProcessStepCardProps) {
  return (
    <Reveal delay={delay}>
      <Card.Root
        as="li"
        bg="bg.card"
        rounded="card"
        overflow="hidden"
        boxShadow="card"
        borderWidth={0}
        h="100%"
        _hover={{
          boxShadow: "raised",
        }}
        _focusWithin={{
          boxShadow: "focusRing",
        }}
      >
        <Box aria-hidden="true" h="1" bg="bg.accent" />

        <Card.Body p={{ base: "5", md: "card.padding" }}>
          <Stack gap="card.gap" h="100%">
            <Box display="flex" alignItems="center" gap="stack.sm">
              <Box
                boxSize={{
                  base: "button.height.sm",
                  md: "button.height.md",
                }}
                rounded="badge"
                bg="bg.accent"
                color="text.inverse"
                display="grid"
                placeItems="center"
                fontWeight="700"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                flexShrink={0}
                aria-label={`Schritt ${stepNumber}`}
              >
                {stepNumber}
              </Box>

              <ProcessIcon icon={icon} />
            </Box>

            <Stack gap="stack.sm" minW={0}>
              <Heading
                as="h3"
                color="text.primary"
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="1.25"
                letterSpacing="-0.01em"
                overflowWrap="break-word"
              >
                {title}
              </Heading>

              <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                {description}
              </Text>
            </Stack>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Reveal>
  );
}