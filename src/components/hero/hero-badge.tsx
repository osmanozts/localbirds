"use client";

import Image from "next/image";
import { Box, HStack } from "@chakra-ui/react";

export function HeroBadge() {
    return (
        <HStack
            aria-hidden="true"
            px="2"
            py="1.5"
            rounded="badge"
            borderWidth="1px"
            borderColor="border.inverseStrong"
            bg="bg.glass"
            backdropFilter="blur(glass)"
        >
            <Box position="relative" boxSize={{ base: "48px", md: "80px" }}>
                <Image
                    src="/images/local-bird-logo.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 48px, 80px"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </Box>
        </HStack>
    );
}