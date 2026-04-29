import React from 'react'
import { Reveal } from '../animations'
import { Box, Heading, Stack, Text, Link as ChakraLink, } from '@chakra-ui/react'

export function ServiceFooter() {
    return (
        <Reveal delay={120}>
            <Box
                bg="bg.card"
                borderWidth="1px"
                borderColor="divider"
                rounded="panel"
                p={{ base: "5", md: "6", lg: "8" }}
            >
                <Stack
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: "5", md: "6" }}
                    align={{ base: "stretch", md: "center" }}
                    justify="space-between"
                >
                    <Stack gap="stack.sm" maxW="2xl">
                        <Heading
                            as="h3"
                            color="text.primary"
                            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                            lineHeight="1.2"
                            letterSpacing="-0.01em"
                        >
                            Sie sind unsicher, welche Leistung passt?
                        </Heading>

                        <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                            Beschreiben Sie kurz Ihr Anliegen. Die Werkstatt meldet sich
                            mit einer realistischen Einschätzung der nächsten Schritte.
                        </Text>
                    </Stack>

                    <ChakraLink
                        href="/kontakt"
                        color="link.primary"
                        fontWeight="semibold"
                        textDecoration="none"
                        rounded="interactive"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent={{ base: "center", md: "flex-start" }}
                        minH="button.height.md"
                        w={{ base: "100%", md: "auto" }}
                        px={{ base: "button.px", md: "0" }}
                        _hover={{
                            color: "link.hover",
                            textDecoration: "underline",
                        }}
                        _focusVisible={{
                            boxShadow: "focusRing",
                            outline: "none",
                        }}
                    >
                        Kontakt aufnehmen
                    </ChakraLink>
                </Stack>
            </Box>
        </Reveal>
    )
}
