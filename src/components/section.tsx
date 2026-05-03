import { Stack, StackProps } from "@chakra-ui/react";
import * as React from "react";

type SectionProps = StackProps & {
  id?: string;
  children: React.ReactNode;
};

export function Section({ id, children, ...props }: SectionProps) {
  return (
    <Stack
      as="section"
      id={id}
      w="100%"
      gap={{ base: "8", md: "10", lg: "12" }}
      maxW="container"
      mx="auto"
      px={{ base: 6, md: 8 }}
      py={{ base: 8, md: 12 }}
      scrollMarginTop="96px"
      {...props}
    >
      {children}
    </Stack>
  );
}