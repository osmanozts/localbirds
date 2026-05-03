"use client";

import {
  Box,
  Card,
  chakra,
  Collapsible,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Reveal } from "@/components";

type FaqItemProps = {
  question: string;
  answer: string;
  delay?: number;
};

export function FaqItem({ question, answer, delay = 0 }: FaqItemProps) {
  return (
    <Reveal delay={delay}>
      <Card.Root
        role="listitem"
        bg="bg.card"
        rounded="card"
        overflow="hidden"
        boxShadow="card"
        borderWidth={0}
        _hover={{
          boxShadow: "raised",
        }}
        _focusWithin={{
          boxShadow: "focusRing",
        }}
      >
        <Box aria-hidden="true" h="1" bg="bg.accent" />

        <Collapsible.Root unmountOnExit>
          <Collapsible.Trigger asChild>
            <chakra.button
              type="button"
              display="flex"
              w="100%"
              textAlign="left"
              alignItems="center"
              justifyContent="space-between"
              gap={{ base: "3", md: "card.gap" }}
              p={{ base: "5", md: "card.padding" }}
              color="text.primary"
              _focusVisible={{
                outline: "none",
                boxShadow: "focusRing",
              }}
            >
              <Heading
                as="h3"
                color="text.primary"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.25"
                letterSpacing="-0.01em"
                overflowWrap="break-word"
                minW={0}
              >
                {question}
              </Heading>

              <Box
                as="span"
                aria-hidden="true"
                boxSize={{
                  base: "button.height.sm",
                  md: "button.height.md",
                }}
                rounded="badge"
                bg="button.primary"
                color="text.inverse"
                display="grid"
                placeItems="center"
                flexShrink={0}
                fontWeight="700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1"
              >
                +
              </Box>
            </chakra.button>
          </Collapsible.Trigger>

          <Collapsible.Content>
            <Box
              px={{ base: "5", md: "card.padding" }}
              pb={{ base: "5", md: "6" }}
            >
              <Text
                color="text.muted"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.7"
                maxW="4xl"
              >
                {answer}
              </Text>

              <Box mt="3">
                <ChakraLink
                  href="/#kontakt"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  minH="button.height.sm"
                  gap="stack.sm"
                  color="link.primary"
                  fontWeight="600"
                  textDecoration="none"
                  borderRadius="interactive"
                  _hover={{
                    color: "link.hover",
                  }}
                  _focusVisible={{
                    outline: "none",
                    boxShadow: "focusRing",
                  }}
                >
                  Weitere Frage stellen
                </ChakraLink>
              </Box>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Card.Root>
    </Reveal>
  );
}