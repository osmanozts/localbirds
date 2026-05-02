import {
    Box,
    Link as ChakraLink,
    HStack,
    Text
} from "@chakra-ui/react";
import React from 'react';

type ULinkProps = React.ComponentProps<typeof ChakraLink>;

const ULink: React.FC<ULinkProps> = ({ children, ...props }) => (
    <ChakraLink
        {...props}
        textDecoration="none"
        borderRadius="interactive"
        overflowWrap="anywhere"
        _hover={{
            color: "link.hover",
            textDecoration: "none",
        }}
        _focusVisible={{
            outline: "none",
            boxShadow: "focusRing",
        }}
    >
        {children}
    </ChakraLink>
);

export function BottomLine() {
    return (
        <Box bg="bg.card">
            <HStack
                justify="space-between"
                align={{ base: "start", md: "center" }}
                gap={{ base: "4", md: "layout.gap" }}
                px={{ base: "5", md: "6" }}
                py={{ base: "5", md: "6" }}
                flexDir={{ base: "column", md: "row" }}
                maxW="container.DEFAULT"
                mx="auto"
            >
                <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                    © 2026 Local Bird. Alle Rechte vorbehalten.
                </Text>

                <HStack
                    gap={{ base: "4", md: "layout.gap" }}
                    flexWrap="wrap"
                    align="center"
                >
                    <ULink color="text.muted" href="/impressum">Impressum</ULink>

                    <Text color="text.muted" display={{ base: "none", md: "inline" }}>
                        |
                    </Text>

                    <ULink color="text.muted" href="/datenschutz">Datenschutz</ULink>
                </HStack>
            </HStack>
        </Box>
    )
}
