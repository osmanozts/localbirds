"use client";

import { Section } from "@/components";
import {
  Box,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

type SectionId = "leistungen" | "werkstatt" | "ablauf" | "faq" | "kontakt";

type FooterNavLink = {
  label: string;
  sectionId: SectionId;
};

type ULinkProps = React.ComponentProps<typeof ChakraLink>;

const FOOTER_NAV_LINKS: FooterNavLink[] = [
  { label: "Leistungen", sectionId: "leistungen" },
  { label: "Werkstatt", sectionId: "werkstatt" },
  { label: "Ablauf", sectionId: "ablauf" },
  { label: "FAQ", sectionId: "faq" },
  { label: "Kontakt", sectionId: "kontakt" },
];

const getSectionHref = (sectionId: SectionId) => `/#${sectionId}` as const;

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
      { once: true },
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

  focusSection(target);
  window.history.pushState(null, "", `#${sectionId}`);

  return true;
}

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

type SectionLinkProps = {
  sectionId: SectionId;
  children: React.ReactNode;
  color?: ULinkProps["color"];
};

function SectionLink({
  sectionId,
  children,
  color = "text.muted",
}: SectionLinkProps) {
  const pathname = usePathname();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (pathname !== "/") {
      return;
    }

    const didScroll = scrollToSection(sectionId);

    if (didScroll) {
      event.preventDefault();
    }
  };

  return (
    <ULink
      as={NextLink}
      href={getSectionHref(sectionId)}
      color={color}
      onClick={handleClick}
    >
      {children}
    </ULink>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" aria-labelledby="footer-heading">
      <Section id="footer">
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: "8", md: "10" }}
          py={{ base: "8", md: "12", lg: "16" }}
        >
          <VStack align="start" gap="stack.sm">
            <Heading
              id="footer-heading"
              as="h2"
              color="text.primary"
              fontSize={{ base: "xl", md: "2xl" }}
              letterSpacing="-0.01em"
              lineHeight="1.1"
            >
              Local Bird
            </Heading>

            <Text color="text.muted" lineHeight="1.7">
              <ULink
                as={NextLink}
                href="/"
                color="text.muted"
                aria-label="Zur Startseite von Local Bird"
              >
                www.local-bird.de
              </ULink>
            </Text>

            <Box
              as="address"
              color="text.muted"
              lineHeight="1.7"
              fontStyle="normal"
            >
              Industriering Ost 48, Kempen
            </Box>
          </VStack>

          <Box as="nav" aria-label="Footer-Navigation">
            <VStack align="start" gap="stack.sm" color="text.muted">
              <Text
                as="h2"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="0.04em"
                textTransform="uppercase"
                mb="1"
              >
                Navigation
              </Text>

              <List.Root
                listStyle="none"
                m="0"
                p="0"
                display="flex"
                flexDirection="column"
                gap="stack.sm"
              >
                {FOOTER_NAV_LINKS.map((link) => (
                  <ListItem key={link.sectionId}>
                    <SectionLink sectionId={link.sectionId}>
                      {link.label}
                    </SectionLink>
                  </ListItem>
                ))}
              </List.Root>
            </VStack>
          </Box>

          <VStack
            as="address"
            align="start"
            gap="stack.sm"
            fontStyle="normal"
            gridColumn={{ base: "auto", sm: "1 / -1", lg: "auto" }}
          >
            <Heading
              as="h2"
              color="text.primary"
              fontSize={{ base: "lg", md: "xl" }}
              letterSpacing="-0.01em"
              lineHeight="1.2"
            >
              Schneller Kontakt
            </Heading>

            <Text color="text.muted" lineHeight="1.7">
              Telefon:{" "}
              <ULink
                color="text.accent"
                href="tel:+4921529809660"
                aria-label="Local Bird telefonisch kontaktieren unter 02152 9809660"
              >
                02152&nbsp;9809660
              </ULink>
            </Text>

            <Text color="text.muted" lineHeight="1.7">
              E-Mail:{" "}
              <ULink
                color="text.accent"
                href="mailto:info@local-bird.de"
                aria-label="E-Mail an info@local-bird.de schreiben"
              >
                info@local-bird.de
              </ULink>
            </Text>

            <Text color="text.muted" fontSize="sm" lineHeight="1.7">
              Mo–Fr 08:00–18:00 · Sa 08:00–13:00
            </Text>

            <Text color="text.muted" fontSize="sm" lineHeight="1.7">
              © {year} Local Bird
            </Text>
          </VStack>
        </SimpleGrid>
      </Section>
    </Box>
  );
}