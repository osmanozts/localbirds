"use client"
import { Container as C } from "@chakra-ui/react"


export function Container({ children }: { children: React.ReactNode }) {
return <C maxW="container.xl" px={{ base: 6, md: 8 }}>{children}</C>
}