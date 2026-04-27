"use client";

import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuBird, LuCalendar } from "react-icons/lu";
import heroImage from "../assets/images/hero.png";
import { Container } from "@/components";

export function Hero() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="surface.inverse"
      color="fgInverse"
    >
      <Box position="absolute" inset={0} pointerEvents="none">
        <Box
          position="absolute"
          top="-20%"
          left="-10%"
          w="60vw"
          h="60vw"
          bg="radial-gradient(circle, var(--chakra-colors-primary) 0%, transparent 60%)"
          filter="blur(40px)"
          opacity={0.22}
          animation="drift.slow"
        />
        <Box
          position="absolute"
          bottom="-25%"
          right="-10%"
          w="55vw"
          h="55vw"
          bg="radial-gradient(circle, var(--chakra-colors-accent) 0%, transparent 60%)"
          filter="blur(50px)"
          opacity={0.18}
          animation="drift.slower"
        />
        <Box
          position="absolute"
          inset={0}
          bgImage="radial-gradient(transparent 0%, rgba(255,255,255,0.06) 1px), radial-gradient(transparent 0%, rgba(255,255,255,0.04) 1px)"
          backgroundSize="24px 24px, 48px 48px"
          backgroundPosition="0 0, 12px 12px"
          opacity={0.25}
        />
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 40%)"
          mixBlendMode="overlay"
        />
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.36) 100%)"
        />
      </Box>

      <Container>
        <Box
          position="relative"
          zIndex={1}
          pt={{ base: "section.paddingY", md: "20" }}
          pb={{ base: "10", md: "16" }}
        >
          <Box
            maxW={{ base: "100%", md: "1100px" }}
            mx="auto"
            position="relative"
          >
            <Box
              position="relative"
              overflow="hidden"
              rounded="panel"
              borderWidth="1px"
              borderColor="border.inverse"
              boxShadow="overlay"
              _after={{
                content: '""',
                position: "absolute",
                inset: 0,
                bg: "linear-gradient(to top, rgba(255,255,255,0.06), transparent 40%)",
                pointerEvents: "none",
              }}
            >
              <Image
                src={heroImage.src}
                alt="Werkstatt"
                w="100%"
                h={{ base: "320px", md: "520px" }}
                objectFit="cover"
                transform="translateZ(0)"
              />
            </Box>

            <VStack
              align="start"
              gap="stack.gap.md"
              position="absolute"
              insetBlockStart={{ base: "inset.lg", md: "50%" }}
              insetInlineStart={{ base: "inset.lg", md: "6" }}
              transform={{ md: "translateY(-50%)" }}
              maxW={{ base: "90%", md: "36ch" }}
              color="fgInverse"
              pointerEvents="none"
            >
              <HStack
                px="input.paddingX"
                py="inset.sm"
                rounded="badge"
                borderWidth="1px"
                borderColor="border.inverseStrong"
                bg="surface.glass"
                backdropFilter="blur(6px)"
              >
                <Icon as={LuBird} boxSize="icon.sm" />
                <Text fontWeight="600">localbirds</Text>
              </HStack>

              <Heading as="h1" size="2xl" lineHeight={1.1}>
                Lokal stark.{" "}
                <Box
                  as="span"
                  bg="linear-gradient(90deg, var(--chakra-colors-primary), var(--chakra-colors-accent))"
                  bgClip="text"
                >
                  Digital sichtbar.
                </Box>
              </Heading>

              <Text fontSize={{ base: "md", md: "lg" }} color="fgInverse">
                Mehr Buchungen & Stammkundschaft für lokale Betriebe – schnell,
                schlank, messbar.
              </Text>

              <HStack gap="stack.gap.sm" pt="inset.sm" pointerEvents="auto">
                <Link href="#termin" _hover={{ textDecoration: "none" }}>
                  <Button
                    bg="buttonSolidBg"
                    color="buttonSolidFg"
                    h="button.height.md"
                    px="button.paddingX"
                    borderRadius="button"
                    fontWeight="600"
                    _hover={{ opacity: 0.92 }}
                    _active={{ transform: "scale(0.98)" }}
                    _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
                  >
                    Termin sichern
                  </Button>
                </Link>

                <Link href="#leistungen" _hover={{ textDecoration: "none" }}>
                  <Button
                    variant="outline"
                    h="button.height.md"
                    px="button.paddingX"
                    borderRadius="button"
                    borderColor="border.inverseStrong"
                    color="fgInverse"
                    bg="surface.glass"
                    fontWeight="600"
                    _hover={{ bg: "surface.glassStrong" }}
                    _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
                  >
                    Leistungen ansehen
                  </Button>
                </Link>
              </HStack>
            </VStack>

            <VStack
              position="absolute"
              right={{ base: "inset.sm", md: "6" }}
              bottom="-5"
              align="start"
              gap="stack.gap.sm"
              px="card.padding"
              py="inset.md"
              rounded="panel"
              bg="surface.glassStrong"
              borderWidth="1px"
              borderColor="border.inverse"
              backdropFilter="blur(10px)"
              boxShadow="raised"
              animation="float.soft"
            >
              <HStack gap="stack.gap.sm">
                <Icon as={LuCalendar} boxSize="icon.sm" color="fgInverse" />
                <Text fontWeight="600" color="fgInverse">
                  Nächster Slot
                </Text>
              </HStack>

              <Text fontSize="sm" color="fgInverse">
                Heute, 15:30
              </Text>

              <Link href="#termin" _hover={{ textDecoration: "none" }}>
                <Button
                  bg="buttonSolidBg"
                  color="buttonSolidFg"
                  h="button.height.sm"
                  px="button.paddingX"
                  borderRadius="button"
                  fontWeight="600"
                  _hover={{ opacity: 0.92 }}
                  _focusVisible={{ boxShadow: "focusRing", outline: "none" }}
                >
                  Buchen
                </Button>
              </Link>
            </VStack>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" pb={{ base: "6", md: "8" }}>
          <Box
            w="2px"
            h="28px"
            bg="border.inverse"
            rounded="full"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-40%"
              left={0}
              right={0}
              h="60%"
              bg="fgInverse"
              rounded="full"
              filter="blur(4px)"
              animation="scrollCue.loop"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}