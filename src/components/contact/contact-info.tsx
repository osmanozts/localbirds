"use client";

import {
  Badge,
  Box,
  Card,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import { isHoliday } from "feiertagejs";
import * as React from "react";
import { Reveal } from "../reveal";

const TIME_ZONE = "Europe/Berlin";
const REGION = "NW";

type OpeningStatus = {
  isOpen: boolean;
  isClosedBecauseHoliday: boolean;
  label: string;
  description: string;
};

function getBerlinDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("de-DE", {
    timeZone: TIME_ZONE,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return {
    weekday,
    hour,
    minute,
  };
}

function getOpeningStatus(date: Date): OpeningStatus {
  const { weekday, hour, minute } = getBerlinDateParts(date);
  const minutesSinceMidnight = hour * 60 + minute;

  const isPublicHoliday = isHoliday(date, REGION);

  const isMondayToFriday = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
  ].includes(weekday);

  const isSaturday = weekday === "Samstag";

  const weekdayOpen =
    isMondayToFriday &&
    minutesSinceMidnight >= 8 * 60 &&
    minutesSinceMidnight < 18 * 60;

  const saturdayOpen =
    isSaturday &&
    minutesSinceMidnight >= 8 * 60 &&
    minutesSinceMidnight < 13 * 60;

  const isWithinOpeningHours = weekdayOpen || saturdayOpen;

  if (isPublicHoliday) {
    return {
      isOpen: false,
      isClosedBecauseHoliday: true,
      label: "Heute ggf. geschlossen",
      description:
        "Heute ist in Nordrhein-Westfalen ein Feiertag. An Feiertagen kann geschlossen sein.",
    };
  }

  if (isWithinOpeningHours) {
    return {
      isOpen: true,
      isClosedBecauseHoliday: false,
      label: "Jetzt geöffnet",
      description:
        "Wir sind aktuell innerhalb der regulären Öffnungszeiten erreichbar.",
    };
  }

  return {
    isOpen: false,
    isClosedBecauseHoliday: false,
    label: "Jetzt geschlossen",
    description: "Wir sind aktuell außerhalb der regulären Öffnungszeiten.",
  };
}

function ContactLink(props: React.ComponentProps<typeof ChakraLink>) {
  return (
    <ChakraLink
      {...props}
      color="link.primary"
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
    />
  );
}

function OpeningStatusCard() {
  const [status, setStatus] = React.useState<OpeningStatus | null>(null);

  React.useEffect(() => {
    function updateStatus() {
      setStatus(getOpeningStatus(new Date()));
    }

    updateStatus();

    const intervalId = window.setInterval(updateStatus, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <Reveal delay={400}>
      <Card.Root
        bg="bg.card"
        rounded="card"
        overflow="hidden"
        boxShadow="card"
        borderWidth={0}
        animation="fadeIn .28s ease both"
        style={{ animationDelay: "180ms" }}
        transition="transform .2s ease, box-shadow .2s ease"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "raised",
        }}
        _focusWithin={{
          boxShadow: "focusRing",
        }}
      >
        <Box aria-hidden="true" h="2px" bg="bg.accent" />

        <Box p={{ base: "5", md: "6" }}>
          <Heading
            as="h3"
            color="text.primary"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight="1.2"
            letterSpacing="-0.01em"
            mb={{ base: "3", md: "4" }}
          >
            Aktueller Status
          </Heading>

          <Stack align="start" gap="2" aria-live="polite">
            <Badge
              colorPalette={
                status?.isOpen
                  ? "green"
                  : status?.isClosedBecauseHoliday
                    ? "orange"
                    : "gray"
              }
              borderRadius="full"
              px="3"
              py="1"
            >
              {status?.label ?? "Status wird geladen"}
            </Badge>

            <Text color="text.primary" lineHeight="1.7">
              {status?.description ??
                "Die momentane Uhrzeit wird geladen und anschließend ausgewertet."}
            </Text>

            <Text color="text.muted" lineHeight="1.7">
              An Feiertagen kann geschlossen sein.
            </Text>
          </Stack>
        </Box>
      </Card.Root>
    </Reveal>
  );
}

export function ContactInfo() {
  return (
    <Stack gap={{ base: "5", md: "6" }} align="stretch">
      <Reveal delay={200}>
        <Card.Root
          bg="bg.card"
          rounded="card"
          overflow="hidden"
          boxShadow="card"
          borderWidth={0}
          animation="fadeIn .28s ease both"
          style={{ animationDelay: "60ms" }}
          transition="transform .2s ease, box-shadow .2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "raised",
          }}
          _focusWithin={{
            boxShadow: "focusRing",
          }}
        >
          <Box aria-hidden="true" h="2px" bg="bg.accent" />

          <Box p={{ base: "5", md: "6" }}>
            <Heading
              as="h3"
              color="text.primary"
              fontSize={{ base: "xl", md: "2xl" }}
              lineHeight="1.2"
              letterSpacing="-0.01em"
              mb={{ base: "3", md: "4" }}
            >
              Direkt erreichen
            </Heading>

            <Stack as="address" align="start" gap="2" fontStyle="normal">
              <Text color="text.primary" lineHeight="1.7">
                Telefon:{" "}
                <ContactLink
                  href="tel:+4921529809660"
                  aria-label="Telefonnummer 02152 9809660 anrufen"
                >
                  02152&nbsp;9809660
                </ContactLink>
              </Text>

              <Text color="text.primary" lineHeight="1.7">
                E-Mail:{" "}
                <ContactLink
                  href="mailto:info@local-bird.de"
                  aria-label="E-Mail an info@local-bird.de schreiben"
                >
                  info@local-bird.de
                </ContactLink>
              </Text>

              <Text color="text.muted" lineHeight="1.7">
                Industriering Ost 48, Kempen
              </Text>
            </Stack>
          </Box>
        </Card.Root>
      </Reveal>

      <Reveal delay={300}>
        <Card.Root
          bg="bg.card"
          rounded="card"
          overflow="hidden"
          boxShadow="card"
          borderWidth={0}
          animation="fadeIn .28s ease both"
          style={{ animationDelay: "120ms" }}
          transition="transform .2s ease, box-shadow .2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "raised",
          }}
          _focusWithin={{
            boxShadow: "focusRing",
          }}
        >
          <Box aria-hidden="true" h="2px" bg="bg.accent" />

          <Box p={{ base: "5", md: "6" }}>
            <Heading
              as="h3"
              color="text.primary"
              fontSize={{ base: "xl", md: "2xl" }}
              lineHeight="1.2"
              letterSpacing="-0.01em"
              mb={{ base: "3", md: "4" }}
            >
              Öffnungszeiten
            </Heading>

            <Stack as="ul" align="start" gap="1" listStyle="none" p="0" m="0">
              <Box as="li">
                <Text color="text.primary" lineHeight="1.7">
                  Mo–Fr: 08:00–18:00
                </Text>
              </Box>

              <Box as="li">
                <Text color="text.primary" lineHeight="1.7">
                  Sa: 08:00–13:00
                </Text>
              </Box>

              <Box as="li">
                <Text color="text.muted" lineHeight="1.7">
                  So: geschlossen
                </Text>
              </Box>
            </Stack>
          </Box>
        </Card.Root>
      </Reveal>

      <OpeningStatusCard />
    </Stack>
  );
}