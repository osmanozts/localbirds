import { VStack } from "@chakra-ui/react";
import { HeroActions } from "./hero-actions";
import { HeroCopy } from "./hero-copy";

export function HeroContent() {
    return (
        <VStack
            align="start"
            justify="end"
            gap={{ base: "stack.sm", md: "stack.md" }}
            position="absolute"
            inset="0"
            zIndex={1}
            px={{
                base: "6",
                md: "8",
                lg: "12",
            }}
            py={{
                base: "8",
                md: "10",
                lg: "16",
            }}
            color="text.inverse"
            maxW="100%"
        >
            <HeroCopy />
            <HeroActions />
        </VStack>
    );
}