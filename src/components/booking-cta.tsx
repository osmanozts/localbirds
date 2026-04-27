import { Button, Card, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react"
import { Section, Container } from "@/components"


export function BookingCTA() {
return (
<Section id="termin">
<Container>
<Card.Root variant="outline" p={{ base: 6, md: 10 }}>
<HStack gap={6} align="center" justify="space-between" flexDir={{ base: "column", md: "row" }}>
<VStack align="start" gap={2}>
<Heading size="xl">Bereit für den Service</Heading>
<Text color="gray.500">Buchen Sie Ihren Termin online in unter 60 Sekunden.</Text>
</VStack>
<HStack gap={3}>
<Link href="#kontakt"><Button variant="outline" size="lg">Frage stellen</Button></Link>
<Link href="#termin"><Button variant="outline" size="lg">Jetzt Termin buchen</Button></Link>
</HStack>
</HStack>
</Card.Root>
</Container>
</Section>
)
}