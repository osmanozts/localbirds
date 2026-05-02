"use client";

import { Button, Flex, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

type SectionId = "kontakt" | "leistungen";

const SECTION_HREFS: Record<SectionId, `/#${SectionId}`> = {
    kontakt: "/#kontakt",
    leistungen: "/#leistungen",
};

function prefersReducedMotion() {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToSection(sectionId: SectionId) {
    const target = document.getElementById(sectionId);

    if (!target) return false;

    target.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
    });

    window.history.pushState(null, "", `#${sectionId}`);

    return true;
}

export function HeroActions() {
    const pathname = usePathname();

    const handleSectionClick =
        (sectionId: SectionId): React.MouseEventHandler<HTMLAnchorElement> =>
            (event) => {
                /**
                 * Wenn diese Komponente auf einer Unterseite gerendert wird,
                 * darf der Klick nicht abgefangen werden.
                 * Der Link /#kontakt soll dann normal zur Startseite navigieren.
                 */
                if (pathname !== "/") {
                    return;
                }

                /**
                 * Auf der Startseite existiert die Section bereits.
                 * Deshalb verhindern wir eine unnötige Navigation und scrollen direkt.
                 */
                const didScroll = scrollToSection(sectionId);

                if (didScroll) {
                    event.preventDefault();
                }
            };

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
                    as={NextLink}
                    href={SECTION_HREFS.kontakt}
                    onClick={handleSectionClick("kontakt")}
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
                bg="bg.inverse"
                color="text.accent"
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
                    as={NextLink}
                    href={SECTION_HREFS.leistungen}
                    onClick={handleSectionClick("leistungen")}
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