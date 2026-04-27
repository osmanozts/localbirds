"use client";

import {
  Box,
  Button,
  chakra,
  Link as ChakraLink,
  Container,
  HStack,
  IconButton,
  Separator,
  Spacer,
  useToken,
  VisuallyHidden,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import NextLink from "next/link";
import { useEffect, useMemo, useState } from "react";

const MotionFlex = chakra(motion.div);

const NAV_LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#werkstatt", label: "Unsere Werkstatt" },
  { href: "#galerie", label: "Galerie" },
  { href: "#stimmen", label: "Kundenstimmen" },
  { href: "#preise", label: "Preise" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hairline] = useToken("semanticTokens.colors", ["border.hairline"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reveal: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: -6 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    [],
  );

  return (
    <Box
      as="header"
      role="banner"
      position="sticky"
      top={0}
      zIndex={100}
      bg="bg.canvas"
      style={{ backdropFilter: "saturate(140%) blur(10px)" }}
      borderBottom="1px solid"
      borderColor={scrolled ? hairline : "transparent"}
      transition="border-color 150ms ease-out"
    >
      <ChakraLink
        href="#main"
        position="absolute"
        left="-999px"
        _focusVisible={{
          left: "12px",
          top: "8px",
          bg: "accent.subtle",
          color: "fg.inverted",
          px: 3,
          py: 2,
          rounded: "md",
          outline: "none",
          boxShadow: "0 0 0 3px var(--chakra-colors-focusRing)",
        }}
      >
        Zum Inhalt springen
      </ChakraLink>

      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <MotionFlex
          display="flex"
          alignItems="center"
          minH={{ base: 14, md: 16 }}
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          {/* Brand */}
          <NextLink href="/" passHref legacyBehavior>
            <ChakraLink
              _hover={{ textDecoration: "none" }}
              aria-label="Startseite"
            >
              <HStack gap={2}>
                <Box
                  as="span"
                  aria-hidden="true"
                  w="22px"
                  h="18px"
                  rounded="sm"
                  bg="brand.parcel"
                  border="1px solid"
                  borderColor="border.hairline"
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    right: "-6px",
                    top: "3px",
                    w: "10px",
                    h: "10px",
                    borderTop: "1px solid",
                    borderRight: "1px solid",
                    borderColor: "border.hairline",
                    transform: "skewX(-15deg)",
                  }}
                />
                <VisuallyHidden>Firma</VisuallyHidden>
                <Box
                  as="span"
                  fontWeight="semibold"
                  letterSpacing="tight"
                  color="fg.default"
                >
                  Local&nbsp;Bird Logistics
                </Box>
              </HStack>
            </ChakraLink>
          </NextLink>

          <Spacer />

          <HStack
            as="nav"
            aria-label="Hauptnavigation"
            display={{ base: "none", md: "flex" }}
            gap={5}
            align="center"
          >
            {NAV_LINKS.map((l) => (
              <NextLink key={l.href} href={l.href} passHref legacyBehavior>
                <ChakraLink
                  fontSize="sm"
                  color="fg.muted"
                  _hover={{ color: "fg.default" }}
                  _focusVisible={{
                    boxShadow: "0 0 0 3px var(--chakra-colors-focusRing)",
                  }}
                  data-testid={`nav-${l.label}`}
                >
                  {l.label}
                </ChakraLink>
              </NextLink>
            ))}
            <Separator
              orientation="vertical"
              h={6}
              borderColor="border.hairline"
            />
            <NextLink href="#kontakt" passHref legacyBehavior>
              <Button
                as={ChakraLink}
                variant="subtle"
                data-testid="cta-secondary"
              >
                Rückruf vereinbaren
              </Button>
            </NextLink>
            <NextLink href="#angebot" passHref legacyBehavior>
              <Button
                as={ChakraLink}
                variant="solid"
                colorPalette="brand"
                data-testid="cta-primary"
              >
                Angebot anfordern
              </Button>
            </NextLink>
          </HStack>

          <IconButton
            aria-label="Navigation öffnen"
            display={{ base: "inline-flex", md: "none" }}
            variant="subtle"
            ml={2}
          />
        </MotionFlex>
      </Container>
    </Box>
  );
}
