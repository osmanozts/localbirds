"use client";

import {
  Box,
  Button,
  Collapsible,
  Container,
  HStack,
  IconButton,
  VStack,
  chakra,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mediaQuery.matches);

    update();

    const handler = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    mediaQuery.addEventListener?.("change", handler);
    mediaQuery.addListener?.(handler);

    return () => {
      mediaQuery.removeEventListener?.("change", handler);
      mediaQuery.removeListener?.(handler);
    };
  }, []);

  return reduceMotion;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  isActive = false,
  onClick,
}) => {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <chakra.a
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      px="button.paddingX"
      py="input.paddingY"
      color={isActive ? "fg" : "fgMuted"}
      fontWeight={isActive ? "600" : "500"}
      lineHeight="1"
      textDecoration="none"
      transition={reduceMotion ? "none" : "color .18s ease-in-out"}
      _hover={{ color: "fg" }}
      _focusVisible={{
        outline: "none",
        boxShadow: "focusRing",
        borderRadius: "interactive",
      }}
    >
      {children}

      <Box
        aria-hidden
        position="absolute"
        left="16px"
        right="16px"
        bottom="6px"
        h="2px"
        bg={isActive ? "primary" : "divider"}
        transformOrigin="left"
        transform={isActive ? "scaleX(1)" : "scaleX(0)"}
        transition={reduceMotion ? "none" : "transform .2s ease"}
        _groupHover={{ transform: "scaleX(1)" }}
      />
    </chakra.a>
  );
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const reduceMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCloseMenu = () => setOpen(false);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex={10}
      borderBottom="1px solid"
      borderColor={scrolled ? "border" : "transparent"}
      boxShadow={scrolled ? "card" : "none"}
      bg={scrolled ? "rgba(255, 255, 255, 0.78)" : "transparent"}
      backdropFilter={scrolled ? "saturate(180%) blur(12px)" : "none"}
      animation={reduceMotion ? "none" : "fadeIn.normal"}
      transition={
        reduceMotion
          ? "none"
          : "background-color .18s ease-in-out, border-color .18s ease-in-out, box-shadow .18s ease-in-out, backdrop-filter .18s ease-in-out"
      }
    >
      <Container maxW="container.default" px="section.paddingX" py="inset.sm">
        <HStack
          justify="space-between"
          align="center"
          gap="layout.gap"
          minH="button.height.lg"
        >
          <chakra.a
            href="/"
            aria-label="Startseite"
            color="fg"
            fontFamily="heading"
            fontWeight="700"
            letterSpacing="-0.02em"
            lineHeight="1"
            textDecoration="none"
            _focusVisible={{
              outline: "none",
              boxShadow: "focusRing",
              borderRadius: "interactive",
            }}
          >
            Local Birds
          </chakra.a>

          <HStack
            as="nav"
            display={{ base: "none", md: "flex" }}
            gap="stack.gap.sm"
            fontSize="sm"
          >
            {NAV_LINKS.map((link) => (
              <NavItem key={link.href} href={link.href}>
                {link.label}
              </NavItem>
            ))}
          </HStack>

          <HStack gap="stack.gap.sm">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              bg="buttonSolidBg"
              color="buttonSolidFg"
              h="buttonHeightMd"
              px="button.paddingX"
              borderRadius="button"
              fontWeight="600"
              _hover={{ opacity: 0.92 }}
              _active={{ transform: "scale(0.98)" }}
              _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
              transition={
                reduceMotion
                  ? "none"
                  : "transform .12s ease-in-out, opacity .12s ease-in-out"
              }
            >
              Termin buchen
            </Button>

            <IconButton
              aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
              display={{ base: "inline-flex", md: "none" }}
              variant="ghost"
              color="fg"
              minW="buttonHeightMd"
              h="buttonHeightMd"
              borderRadius="button"
              onClick={() => setOpen((prev) => !prev)}
              _hover={{ bg: "buttonSubtleBg", color: "buttonSubtleFg" }}
              _active={{ transform: "scale(0.96)" }}
              _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
              transition={reduceMotion ? "none" : "transform .12s ease-in-out"}
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </IconButton>
          </HStack>
        </HStack>

        <Collapsible.Root
          open={open}
          onOpenChange={(details) => setOpen(details.open)}
          unmountOnExit
        >
          <Collapsible.Content>
            <Box
              display={{ md: "none" }}
              pt="inset.sm"
              pb="inset.md"
              animation={reduceMotion ? "none" : "fadeIn.fast"}
            >
              <VStack
                as="nav"
                align="stretch"
                gap="stack.gap.sm"
                animation={reduceMotion ? "none" : "slideDown.normal"}
              >
                {NAV_LINKS.map((link) => (
                  <NavItem
                    key={link.href}
                    href={link.href}
                    onClick={handleCloseMenu}
                  >
                    {link.label}
                  </NavItem>
                ))}

                <Box
                  borderTop="1px solid"
                  borderColor="divider"
                  mt="inset.sm"
                  pt="divider.spacing"
                >
                  <Button
                    w="full"
                    bg="buttonSolidBg"
                    color="buttonSolidFg"
                    h="buttonHeightMd"
                    borderRadius="button"
                    fontWeight="600"
                    _hover={{ opacity: 0.92 }}
                    _active={{ transform: "scale(0.98)" }}
                    _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
                  >
                    Termin buchen
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Container>
    </Box>
  );
};