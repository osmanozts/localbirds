import { Heading, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { Reveal } from "@/components";

type SectionHeaderProps = {
    badge: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    headingId?: string;
};

export function SectionHeader({
    badge,
    title,
    description,
    headingId,
}: SectionHeaderProps) {
    return (
        <Reveal>
            <Stack
                gap="stack.md"
                textAlign={{ base: "left", md: "center" }}
                align={{ base: "flex-start", md: "center" }}
            >
                <Text
                    as="p"
                    bg="bg.accent"
                    color="text.inverse"
                    rounded="badge"
                    fontSize="sm"
                    fontWeight="semibold"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    px="3"
                    py="1"
                >
                    {badge}
                </Text>

                <Heading
                    id={headingId}
                    as="h2"
                    color="text.primary"
                    fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                    lineHeight={{ base: "1.12", md: "1.05" }}
                    letterSpacing="-0.02em"
                    maxW="4xl"
                >
                    {title}
                </Heading>

                {description && (
                    <Text
                        color="text.muted"
                        fontSize={{ base: "md", md: "lg" }}
                        lineHeight="1.7"
                        maxW="3xl"
                    >
                        {description}
                    </Text>
                )}
            </Stack>
        </Reveal>
    );
}