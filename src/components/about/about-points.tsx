"use client";

import { Box, Text, chakra, } from '@chakra-ui/react';
import React from 'react'

const ABOUT_POINTS = [
    "Persönliche Betreuung vom ersten Gespräch bis zur Übergabe",
    "Klare Einschätzung der notwendigen Arbeiten",
    "Verständliche Kommunikation zu Aufwand und Kosten",
];
export function AboutPoints() {

    return (
        <chakra.ul
            display="grid"
            rowGap={{ base: "3", md: "4" }}
            listStyleType="none"
            m="0"
            p="0"
        >
            {ABOUT_POINTS.map((item) => (
                <chakra.li
                    key={item}
                    display="flex"
                    alignItems="flex-start"
                    gap={{ base: "3", md: "4" }}
                >
                    <Box
                        aria-hidden="true"
                        boxSize={{ base: "6", md: "icon.lg" }}
                        minW={{ base: "6", md: "icon.lg" }}
                        rounded="badge"
                        bg="bg.accent"
                        color="text.inverse"
                        display="grid"
                        placeItems="center"
                        fontWeight="semibold"
                        fontSize="sm"
                        flexShrink={0}
                    >
                        ✓
                    </Box>

                    <Text color="text.primary" fontSize="sm" lineHeight="1.7">
                        {item}
                    </Text>
                </chakra.li>
            ))}
        </chakra.ul>
    )
}
