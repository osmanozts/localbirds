import type { Metadata } from "next";
import { ChakraThemeProvider } from "./chakra-theme-provider";
import "./globals.css";

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
        <ChakraThemeProvider>{children}</ChakraThemeProvider>
      </body>
    </html>
  );
}
