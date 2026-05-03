import { AboutPoints, Reveal } from "@/components";
import {
    Box,
    Card,
    Heading,
    Link as ChakraLink,
    Stack,
    Text,
} from "@chakra-ui/react";

type AboutContentCardProps = {
    title: string;
    description: string;
    linkHref: string;
    linkLabel: string;
    delay?: number;
};

export function AboutContentCard({
    title,
    description,
    linkHref,
    linkLabel,
    delay = 0,
}: AboutContentCardProps) {
    return (
        <Reveal delay={delay}>
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
                                {title}
                            </Heading>

                            <Text color="text.muted" fontSize="md" lineHeight="1.7">
                                {description}
                            </Text>
                        </Stack>

                        <AboutPoints />

                        <Box>
                            <ChakraLink
                                href={linkHref}
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
                                aria-label={linkLabel}
                                _hover={{
                                    bg: "button.strong",
                                    textDecoration: "none",
                                }}
                                _focusVisible={{
                                    boxShadow: "focusRing",
                                    outline: "none",
                                }}
                            >
                                {linkLabel}
                            </ChakraLink>
                        </Box>
                    </Stack>
                </Card.Body>
            </Card.Root>
        </Reveal>
    );
}