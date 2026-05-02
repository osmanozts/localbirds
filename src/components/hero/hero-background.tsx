import { Box } from "@chakra-ui/react";
import { HeroIllustration } from "./hero-illustration";

export function HeroBackground() {
    return (
        <>
            <Box
                aria-hidden="true"
                position="absolute"
                inset="0"
                bg="overlay"
                opacity="0.45"
            />

            <Box
                aria-hidden="true"
                position="absolute"
                inset="0"
                bg="bg.card"
                opacity="0.22"
                clipPath="polygon(58% 0, 100% 0, 100% 100%, 34% 100%)"
            />

            <Box
                aria-hidden="true"
                position="absolute"
                top={{ base: "12", md: "16" }}
                right={{ base: "-20", md: "8" }}
                w={{ base: "72", md: "xl" }}
                h={{ base: "72", md: "xl" }}
                rounded="full"
                bg="bg.glass"
                borderWidth="1px"
                borderColor="border.inverse"
                backdropFilter="blur(glass)"
            />

            <HeroIllustration />
        </>
    );
}