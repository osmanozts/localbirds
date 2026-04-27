"use client"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"
import { system } from "../theme/index"

export function ChakraThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ChakraProvider>
  )
}
