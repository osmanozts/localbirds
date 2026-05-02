import { Box } from "@chakra-ui/react";
import * as React from "react";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      as="section"
      id={id}
      className={className}
      w="100%"
      maxW="container"
      mx="auto"
      px={{ base: 6, md: 8 }}
      py={{ base: 8, md: 12 }}
      scrollMarginTop="96px"
    >
      {children}
    </Box>
  );
}