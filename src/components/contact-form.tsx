"use client";

import {
    Box,
    Button,
    Card,
    Field,
    Heading,
    Input,
    Text,
    Textarea,
    VStack,
} from "@chakra-ui/react";

export function ContactForm() {
  return (
    <Card.Root
      variant="outline"
      bg="surfaceHi"
      borderColor="border"
      rounded="md"
      overflow="hidden"
      animation="fadeIn .28s ease both"
      _focusWithin={{ boxShadow: "focusRing" }}
      transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
      _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
    >
      {/* Accent-Leiste */}
      <Box aria-hidden h="2px" bg="accent" />
      <Box p={{ base: 5, md: 6 }}>
        <Heading as="h3" size="lg" color="fg" mb="4" letterSpacing="-0.01em">
          Nachricht senden
        </Heading>

        <VStack gap="5" align="stretch">
          {/* Name */}
          <Field.Root required>
            <Field.Label color="fg">
              Name <Field.RequiredIndicator color="accent" />
            </Field.Label>
            <Input
              placeholder="Ihr Name"
              size="lg"
              bg="surface"
              borderColor="border"
              _focusVisible={{ boxShadow: "focusRing", borderColor: "border" }}
            />
            <Field.HelperText color="muted">
              Bitte geben Sie Ihren vollständigen Namen ein.
            </Field.HelperText>
          </Field.Root>

          {/* Email */}
          <Field.Root required>
            <Field.Label color="fg">
              E-Mail <Field.RequiredIndicator color="accent" />
            </Field.Label>
            <Input
              type="email"
              placeholder="name@mail.de"
              size="lg"
              bg="surface"
              borderColor="border"
              _focusVisible={{ boxShadow: "focusRing", borderColor: "border" }}
            />
            <Field.ErrorText color="error">
              Bitte geben Sie eine gültige E-Mail-Adresse ein.
            </Field.ErrorText>
          </Field.Root>

          {/* Telefon */}
          <Field.Root>
            <Field.Label color="fg">Telefon</Field.Label>
            <Input
              type="tel"
              placeholder="0151 123456"
              size="lg"
              bg="surface"
              borderColor="border"
              _focusVisible={{ boxShadow: "focusRing", borderColor: "border" }}
            />
            <Field.HelperText color="muted">
              Optional – falls wir Sie telefonisch erreichen sollen.
            </Field.HelperText>
          </Field.Root>

          {/* Nachricht */}
          <Field.Root required>
            <Field.Label color="fg">
              Ihr Anliegen <Field.RequiredIndicator color="accent" />
            </Field.Label>
            <Textarea
              placeholder="Wie können wir helfen?"
              rows={5}
              size="lg"
              bg="surface"
              borderColor="border"
              _focusVisible={{ boxShadow: "focusRing", borderColor: "border" }}
            />
            <Field.HelperText color="muted">
              Beschreiben Sie Ihr Anliegen möglichst präzise.
            </Field.HelperText>
          </Field.Root>

          {/* Absenden */}
          <Button
            alignSelf="start"
            bg="accent"
            color="accentFg"
            _hover={{ bg: "accent/90" }}
            _active={{ bg: "accent/80", transform: "scale(0.98)" }}
            borderRadius="full"
            px="5"
            py="2"
            fontWeight="700"
          >
            Absenden
          </Button>

          <Text color="muted" fontSize="xs">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß DSGVO zu.
          </Text>
        </VStack>
      </Box>
    </Card.Root>
  );
}
