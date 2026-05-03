"use client";

import { Flex, Link as ChakraLink } from "@chakra-ui/react";
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

function focusSection(target: HTMLElement) {
    const hadTabIndex = target.hasAttribute("tabindex");

    if (!hadTabIndex) {
        target.setAttribute("tabindex", "-1");
    }

    target.focus({ preventScroll: true });

    if (!hadTabIndex) {
        target.addEventListener(
            "blur",
            () => {
                target.removeAttribute("tabindex");
            },
            { once: true }
        );
    }
}

function scrollToSection(sectionId: SectionId) {
    const target = document.getElementById(sectionId);

    if (!target) return false;

    target.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
    });

    window.history.pushState(null, "", `#${sectionId}`);

    focusSection(target);

    return true;
}

const baseLinkStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    h: {
        base: "button.height.sm",
        md: "button.height.md",
        lg: "button.height.lg",
    },
    w: {
        base: "100%",
        sm: "auto",
    },
    minW: {
        sm: "max-content",
    },
    px: "button.px",
    py: "button.py",
    borderRadius: "button",
    fontWeight: "700",
    whiteSpace: "nowrap",
    textDecoration: "none",
    _hover: {
        textDecoration: "none",
    },
    _focusVisible: {
        outline: "none",
        boxShadow: "focusRing",
    },
} as const;

export function HeroActions() {
    const pathname = usePathname();

    const handleSectionClick =
        (sectionId: SectionId): React.MouseEventHandler<HTMLAnchorElement> =>
            (event) => {
                if (pathname !== "/") {
                    return;
                }

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
            aria-label="Hero Aktionen"
        >
            <ChakraLink
                as={NextLink}
                href={SECTION_HREFS.kontakt}
                onClick={handleSectionClick("kontakt")}
                bg="button.primary"
                color="text.inverse"
                {...baseLinkStyles}
                _hover={{
                    ...baseLinkStyles._hover,
                    bg: "button.strong",
                    textDecoration: "none",
                }}
            >
                Kontakt aufnehmen
            </ChakraLink>

            <ChakraLink
                as={NextLink}
                href={SECTION_HREFS.leistungen}
                onClick={handleSectionClick("leistungen")}
                bg="button.inverse"
                color="text.accent"
                {...baseLinkStyles}
                _hover={{
                    ...baseLinkStyles._hover,
                    bg: "bg.glassStrong",
                }}
            >
                Leistungen ansehen
            </ChakraLink>
        </Flex>
    );
}