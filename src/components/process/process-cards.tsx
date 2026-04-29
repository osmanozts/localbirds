"use client";

import {
  Box,
  Card,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { LuCheck, LuMessageSquare, LuWrench } from "react-icons/lu";

const stepIconMap = {
  message: LuMessageSquare,
  wrench: LuWrench,
  check: LuCheck,
} satisfies Record<string, IconType>;

type StepIconKey = keyof typeof stepIconMap;

type Step = {
  icon: StepIconKey;
  title: string;
  desc: string;
};

export function ProcessCards({ steps }: { steps: readonly Step[] }) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      gap={{ base: "4", md: "5", lg: "6" }}
      alignItems="stretch"
    >
      {steps.map((step, index) => {
        const StepIcon = stepIconMap[step.icon];

        return (
          <Card.Root
            key={step.title}
            bg="bg.card"
            rounded="card"
            overflow="hidden"
            boxShadow="card"
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
                    aria-hidden="true"
                    flexShrink={0}
                  >
                    {index + 1}
                  </Box>

                  <Box
                    boxSize={{
                      base: "button.height.sm",
                      md: "button.height.md",
                    }}
                    rounded="interactive"
                    bg="bg.primary"
                    color="text.primary"
                    display="grid"
                    placeItems="center"
                    aria-hidden="true"
                    flexShrink={0}
                  >
                    <Icon
                      as={StepIcon}
                      boxSize={{
                        base: "icon.sm",
                        md: "icon.md",
                        lg: "icon.lg",
                      }}
                    />
                  </Box>
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
                    {step.title}
                  </Heading>

                  <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                    {step.desc}
                  </Text>
                </Stack>
              </Stack>
            </Card.Body>
          </Card.Root>
        );
      })}
    </SimpleGrid>
  );
}