"use client";

import { Reveal } from "@/components";
import {
    Box,
    Card,
    Heading,
    Icon,
    Stack,
    Text
} from "@chakra-ui/react";
import type { IconType } from "react-icons";

type Service = {
    icon: IconType;
    title: string;
    desc: string;
};

export function ServiceCard({
    service,
    index = 0,
}: {
    service: Service;
    index?: number;
}) {
    return (
        <Reveal delay={Math.min(index * 70, 280)}>
            <Card.Root
                bg="bg.card"
                rounded="card"
                boxShadow="card"
                borderWidth={0}
                overflow="hidden"
                h="100%"
                transition="box-shadow 0.2s ease"
                _focusWithin={{
                    boxShadow: "focusRing",
                }}
            >
                <Card.Body p={{ base: "5", md: "card.padding" }}>
                    <Stack gap="card.gap" align="flex-start">
                        <Box
                            boxSize="button.height.md"
                            rounded="badge"
                            bg="bg.accent"
                            color="text.inverse"
                            display="grid"
                            placeItems="center"
                            flexShrink={0}
                        >
                            <Icon as={service.icon} boxSize="icon.md" />
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
                                {service.title}
                            </Heading>

                            <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                                {service.desc}
                            </Text>
                        </Stack>
                    </Stack>
                </Card.Body>
            </Card.Root>
        </Reveal>
    );
}