"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Field,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Reveal } from "../animations";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      company: formData.get("company"), // Honeypot gegen einfache Bots
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Die Nachricht konnte nicht gesendet werden."
        );
      }

      setSuccessMessage("Vielen Dank. Ihre Nachricht wurde erfolgreich gesendet.");
      form.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Die Nachricht konnte nicht gesendet werden."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Reveal delay={400}>
      <form onSubmit={handleSubmit}>
        <Card.Root
          bg="bg.card"
          rounded="card"
          overflow="hidden"
          boxShadow="card"
          borderWidth={0}
          animation="fadeIn .28s ease both"
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
              mb={{ base: "4", md: "5" }}
            >
              Nachricht senden
            </Heading>

            <Stack gap={{ base: "4", md: "5" }} align="stretch">
              <Field.Root required>
                <Field.Label color="text.primary">
                  Name <Field.RequiredIndicator color="text.accent" />
                </Field.Label>

                <Input
                  name="name"
                  placeholder="Ihr Name"
                  h="input.height.md"
                  px="input.px"
                  py="input.py"
                  bg="bg.primary"
                  color="text.primary"
                  borderColor="border.primary"
                  borderRadius="input"
                  required
                  _placeholder={{
                    color: "text.muted",
                  }}
                  _focusVisible={{
                    boxShadow: "focusRing",
                    borderColor: "border.strong",
                  }}
                />

                <Field.HelperText color="text.muted">
                  Bitte geben Sie Ihren vollständigen Namen ein.
                </Field.HelperText>
              </Field.Root>

              <Field.Root required>
                <Field.Label color="text.primary">
                  E-Mail <Field.RequiredIndicator color="text.accent" />
                </Field.Label>

                <Input
                  name="email"
                  type="email"
                  placeholder="name@mail.de"
                  h="input.height.md"
                  px="input.px"
                  py="input.py"
                  bg="bg.primary"
                  color="text.primary"
                  borderColor="border.primary"
                  borderRadius="input"
                  required
                  _placeholder={{
                    color: "text.muted",
                  }}
                  _focusVisible={{
                    boxShadow: "focusRing",
                    borderColor: "border.strong",
                  }}
                />

                <Field.ErrorText>
                  Bitte geben Sie eine gültige E-Mail-Adresse ein.
                </Field.ErrorText>
              </Field.Root>

              <Field.Root>
                <Field.Label color="text.primary">Telefon</Field.Label>

                <Input
                  name="phone"
                  type="tel"
                  placeholder="0151 123456"
                  h="input.height.md"
                  px="input.px"
                  py="input.py"
                  bg="bg.primary"
                  color="text.primary"
                  borderColor="border.primary"
                  borderRadius="input"
                  _placeholder={{
                    color: "text.muted",
                  }}
                  _focusVisible={{
                    boxShadow: "focusRing",
                    borderColor: "border.strong",
                  }}
                />

                <Field.HelperText color="text.muted">
                  Optional – falls wir Sie telefonisch erreichen sollen.
                </Field.HelperText>
              </Field.Root>

              <Field.Root required>
                <Field.Label color="text.primary">
                  Ihr Anliegen <Field.RequiredIndicator color="text.accent" />
                </Field.Label>

                <Textarea
                  name="message"
                  placeholder="Wie können wir helfen?"
                  rows={5}
                  minH={{ base: "32", md: "36" }}
                  px="input.px"
                  py="input.py"
                  bg="bg.primary"
                  color="text.primary"
                  borderColor="border.primary"
                  borderRadius="input"
                  resize="vertical"
                  required
                  _placeholder={{
                    color: "text.muted",
                  }}
                  _focusVisible={{
                    boxShadow: "focusRing",
                    borderColor: "border.strong",
                  }}
                />

                <Field.HelperText color="text.muted">
                  Beschreiben Sie Ihr Anliegen möglichst präzise.
                </Field.HelperText>
              </Field.Root>

              {/* Honeypot: unsichtbar für echte Nutzer, Bots füllen es oft aus */}
              <Input
                name="company"
                display="none"
                tabIndex={-1}
                autoComplete="off"
              />

              {successMessage && (
                <Text color="green.500" fontSize="sm" fontWeight="600">
                  {successMessage}
                </Text>
              )}

              {errorMessage && (
                <Text color="red.500" fontSize="sm" fontWeight="600">
                  {errorMessage}
                </Text>
              )}

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                alignSelf={{ base: "stretch", sm: "start" }}
                w={{ base: "100%", sm: "fit-content" }}
                bg="button.primary"
                color="text.inverse"
                h={{ base: "button.height.lg", md: "button.height.md" }}
                px="button.px"
                py="button.py"
                borderRadius="button"
                fontWeight="700"
                _hover={{
                  bg: "button.strong",
                }}
                _active={{
                  bg: "button.strong",
                  transform: "scale(0.98)",
                }}
                _focusVisible={{
                  boxShadow: "focusRing",
                  outline: "none",
                }}
              >
                {isSubmitting ? "Wird gesendet..." : "Absenden"}
              </Button>

              <Text color="text.muted" fontSize="xs" lineHeight="1.6">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß DSGVO
                zu.
              </Text>
            </Stack>
          </Box>
        </Card.Root>
      </form>
    </Reveal>
  );
}