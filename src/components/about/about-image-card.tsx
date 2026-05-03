import { Reveal } from "@/components";
import { Box, Image } from "@chakra-ui/react";

type AboutImageCardProps = {
    src: string;
    alt: string;
    delay?: number;
};

export function AboutImageCard({ src, alt, delay = 0 }: AboutImageCardProps) {
    return (
        <Reveal delay={delay}>
            <Box
                h={{
                    base: "56",
                    sm: "72",
                    md: "80",
                    lg: "100%",
                }}
                height="box.sm"
                overflow="hidden"
                rounded="card"
            >
                <Image src={src} alt={alt} w="100%" h="100%" objectFit="cover" />
            </Box>
        </Reveal>
    );
}