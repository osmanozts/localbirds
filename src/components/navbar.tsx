"use client";

import {
  Box,
  Collapsible,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { FiMenu, FiX } from "react-icons/fi";

type SectionLink = {
  label: string;
  sectionId: string;
};

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  variant?: "desktop" | "mobile";
};

const SECTION_LINKS: SectionLink[] = [
  { label: "Leistungen", sectionId: "leistungen" },
  { label: "Werkstatt", sectionId: "werkstatt" },
  { label: "Ablauf", sectionId: "ablauf" },
  { label: "FAQ", sectionId: "faq" },
  { label: "Kontakt", sectionId: "kontakt" },
];

const getSectionHref = (sectionId: string) => `/#${sectionId}`;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);

  if (!target) return false;

  target.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  window.history.pushState(null, "", `#${sectionId}`);

  return true;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  onClick,
  variant = "desktop",
}) => {
  const isMobile = variant === "mobile";

  return (
    <chakra.a
      as={NextLink}
      href={href}
      onClick={onClick}
      display="inline-flex"
      alignItems="center"
      justifyContent={isMobile ? "flex-start" : "center"}
      w={isMobile ? "100%" : "auto"}
      minH={isMobile ? "button.height.md" : "auto"}
      px={isMobile ? "button.px" : "3"}
      py={isMobile ? "button.py" : "2"}
      color="text.primary"
      fontSize="sm"
      fontWeight="500"
      lineHeight="1"
      textDecoration="none"
      borderRadius="interactive"
      transition="color 0.2s ease, background-color 0.2s ease"
      _hover={{
        color: "link.hover",
        bg: isMobile ? "bg.primary" : "transparent",
      }}
      _focusVisible={{
        outline: "none",
        boxShadow: "focusRing",
      }}
    >
      {children}
    </chakra.a>
  );
};

export function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleSectionClick =
    (sectionId: string): React.MouseEventHandler<HTMLAnchorElement> =>
      (event) => {
        closeMenu();

        /**
         * Auf Unterseiten wie /impressum oder /datenschutz darf der Klick
         * nicht abgefangen werden, weil die Sections dort nicht existieren.
         * Der Link /#kontakt navigiert dann sauber zur Startseite.
         */
        if (pathname !== "/") {
          return;
        }

        /**
         * Auf der Startseite existiert die Section bereits.
         * Daher verhindern wir eine unnötige Navigation und scrollen direkt.
         */
        const didScroll = scrollToSection(sectionId);

        if (didScroll) {
          event.preventDefault();
        }
      };

  return (
    <Box as="header" position="sticky" top="0" zIndex="overlay">
      <Box
        aria-hidden="true"
        position="absolute"
        inset="0"
        bg="bg.card"
        borderBottomWidth="1px"
        borderColor="divider"
        boxShadow="card"
        opacity={scrolled || open ? 1 : 0}
        backdropFilter="blur(var(--chakra-blurs-glass))"
        transition="opacity 0.28s ease"
        pointerEvents="none"
      />

      <Box
        position="relative"
        zIndex={1}
        maxW="container.DEFAULT"
        mx="auto"
        px={{ base: "4", md: "6" }}
        py={{ base: "2", md: "2" }}
      >
        <HStack
          justify="space-between"
          align="center"
          gap={{ base: "4", md: "6" }}
          minH={{ base: "button.height.md", md: "button.height.lg" }}
        >
          <HStack gap="2.5" minW={0} flex={1}>
            <chakra.a
              as={NextLink}
              href="/"
              display="inline-flex"
              alignItems="center"
              gap="2.5"
              color="text.primary"
              textDecoration="none"
              borderRadius="interactive"
              whiteSpace="nowrap"
              _focusVisible={{
                outline: "none",
                boxShadow: "focusRing",
              }}
            >
              <Box
                position="relative"
                boxSize={{ base: "36px", md: "48px" }}
                flexShrink={0}
              >
                <Image
                  src="/images/local-bird-logo.png"
                  alt="Local Bird Logo"
                  sizes="(max-width: 768px) 36px, 48px"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Text
                as="span"
                fontFamily="heading"
                fontWeight="700"
                fontSize={{ base: "md", md: "lg" }}
                letterSpacing="-0.02em"
                lineHeight="1"
              >
                Local Birds
              </Text>
            </chakra.a>
          </HStack>

          <HStack
            as="nav"
            display={{ base: "none", lg: "flex" }}
            gap={{ lg: "2", xl: "4" }}
            fontSize="sm"
            aria-label="Hauptnavigation"
            flex={1}
            justifyContent="space-between"
          >
            {SECTION_LINKS.map((link) => (
              <NavItem
                key={link.sectionId}
                href={getSectionHref(link.sectionId)}
                onClick={handleSectionClick(link.sectionId)}
              >
                <Text
                  as="span"
                  borderBottomWidth="1px"
                  borderColor="transparent"
                  transition="border-color 0.2s ease"
                  _hover={{
                    borderColor: "border.strong",
                  }}
                >
                  {link.label}
                </Text>
              </NavItem>
            ))}
          </HStack>

          <IconButton
            aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
            aria-expanded={open}
            display={{ base: "inline-flex", lg: "none" }}
            color="text.primary"
            minW="button.height.md"
            h="button.height.md"
            borderRadius="button"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Icon as={open ? FiX : FiMenu} boxSize="icon.md" />
          </IconButton>
        </HStack>

        <Collapsible.Root
          open={open}
          onOpenChange={(details) => setOpen(details.open)}
          unmountOnExit
        >
          <Collapsible.Content>
            <Box display={{ lg: "none" }} pt="inset.sm" pb="inset.md">
              <VStack
                as="nav"
                align="stretch"
                gap="stack.sm"
                aria-label="Mobile Navigation"
              >
                {SECTION_LINKS.map((link) => (
                  <NavItem
                    key={link.sectionId}
                    href={getSectionHref(link.sectionId)}
                    onClick={handleSectionClick(link.sectionId)}
                    variant="mobile"
                  >
                    {link.label}
                  </NavItem>
                ))}
              </VStack>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>
    </Box>
  );
}