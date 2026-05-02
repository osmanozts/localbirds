import type { Metadata } from "next";
import { ChakraThemeProvider } from "./chakra-theme-provider";
import "./globals.css";
import { Navbar } from "@/components";
import { Stack } from "@chakra-ui/react";
import { BottomLine, Footer } from "@/sections";

export const metadata: Metadata = {
  title: "Local Bird KFZ Werkstatt | localbirds.de",
  description: "Präzise Wartung, Reparatur und Service. Termin online buchen.",
  metadataBase: new URL("https://localbirds.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <ChakraThemeProvider>
          <Stack bg="bg.primary">
            <Navbar />
            {children}
            <Footer />
            <BottomLine />
          </Stack>
        </ChakraThemeProvider>
      </body>
    </html >
  );
}
