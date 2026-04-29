"use client";

import { Button, Flex, Link as ChakraLink } from "@chakra-ui/react";

export function HeroActions() {
    return (
        <Flex
            gap="stack.sm"
            flexWrap="wrap"
            w={{ base: "100%", sm: "auto" }}
            align="center"
        >
            <Button
                asChild
                h={{
                    base: "button.height.sm",
                    md: "button.height.md",
                    lg: "button.height.lg",
                }}
                w={{
                    base: "100%",
                    sm: "auto",
                }}
                minW={{
                    sm: "max-content",
                }}
                px="button.px"
                py="button.py"
                borderRadius="button"
                bg="button.primary"
                color="text.inverse"
                fontWeight="700"
                justifyContent="center"
                _hover={{
                    bg: "button.strong",
                }}
                _focusVisible={{
                    outline: "none",
                    boxShadow: "focusRing",
                }}
            >
                <ChakraLink
                    href="#kontakt"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    h="100%"
                    whiteSpace="nowrap"
                    _hover={{ textDecoration: "none" }}
                >
                    Kontakt aufnehmen
                </ChakraLink>
            </Button>

            <Button
                asChild
                h={{
                    base: "button.height.sm",
                    md: "button.height.md",
                    lg: "button.height.lg",
                }}
                w={{
                    base: "100%",
                    sm: "auto",
                }}
                minW={{
                    sm: "max-content",
                }}
                px="button.px"
                py="button.py"
                borderRadius="button"
                bg="button.glass"
                color="text.inverse"
                justifyContent="center"
                _hover={{
                    bg: "bg.glassStrong",
                }}
                _focusVisible={{
                    outline: "none",
                    boxShadow: "focusRing",
                }}
            >
                <ChakraLink
                    href="#leistungen"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    h="100%"
                    whiteSpace="nowrap"
                    _hover={{ textDecoration: "none" }}
                >
                    Leistungen ansehen
                </ChakraLink>
            </Button>
        </Flex>
    );
}