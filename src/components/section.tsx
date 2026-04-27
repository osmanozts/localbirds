"use client";
import { Box } from "@chakra-ui/react";
import * as React from "react";

export function Section({
  id,
  children,
  variant = "default",
}: {
  id?: string;
  children: React.ReactNode;
  /**
   * "default"  → nutzt section.bg (Standardhintergrund)
   * "subtle"   → nutzt section.subtle (leicht abgesetzter Hintergrund)
   * "contrast" → nutzt surfaceHi (helle Karte auf dunklem Hintergrund)
   */
  variant?: "default" | "subtle" | "contrast";
}) {
  const bgMap = {
    default: "section.bg",
    subtle: "section.subtle",
    contrast: "surfaceHi",
  } as const;

  return (
    <Box
      as="section"
      id={id}
      bg={bgMap[variant]}
      py={{ base: 16, md: 24 }}
      _dark={{
        color: "fg",
      }}
    >
      {children}
    </Box>
  );
}
