"use client";

import Image from "next/image";
import { HStack, Box } from "@chakra-ui/react";

export function HeroBadge() {
    return (
        <HStack
            px="2"
            py="1.5"
            rounded="badge"
            borderWidth="1px"
            borderColor="border.inverseStrong"
            bg="bg.glass"
            backdropFilter="blur(glass)"
        >
            <Box
                position="relative"
                boxSize={{ base: "48px", md: "80px" }}
            >
                <Image
                    src="/images/local-bird-logo.png"
                    alt="Local Bird Logo"
                    fill
                    sizes="(max-width: 768px) 40px, 64px"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </Box>
        </HStack>
    );
}