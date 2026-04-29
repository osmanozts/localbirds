import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HeroBadge } from "./hero-badge";

export function HeroCopy() {
    return (
        <Box
            maxW={{
                base: "100%",
                md: "container.DEFAULT",
            }}
            mb={{ base: "2" }}
        >
            <Flex
                align="center"
                gap={{ base: "2", sm: "3", md: "4" }}
                wrap="wrap"
                maxW={{ base: "100%", md: "none" }}
            >
                <HeroBadge />

                <Heading
                    as="h1"
                    fontSize={{
                        base: "clamp(2rem, 11vw, 3.5rem)",
                        sm: "clamp(2.75rem, 9vw, 4.5rem)",
                        md: "6xl",
                        lg: "7xl",
                    }}
                    lineHeight={{ base: "1", md: "1.05" }}
                    letterSpacing="-0.02em"
                    color="text.inverse"
                    overflowWrap="break-word"
                    maxW="100%"
                >
                    Local Bird
                </Heading>
            </Flex>

            <Text
                mt={{ base: "2", md: "3" }}
                fontSize={{
                    base: "md",
                    md: "lg",
                }}
                lineHeight="1.5"
                color="text.inverse"
                maxW={{ base: "22rem", sm: "26rem", md: "none" }}
            >
                Wartung, Reparatur und Beratung
            </Text>
        </Box>
    );
}