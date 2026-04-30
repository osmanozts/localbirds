import { Section } from "@/components/section";
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";

const privacySections = [
  {
    title: "1. Verantwortlicher",
    text: [
      "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:",
      "Local Birds KFZ Werkstatt\nHooghe Weg 31\n47906 Kempen\nDeutschland",
      "Vertreten durch die Geschäftsführung:\nSagevan Pathmanathan\nÖmer Isinibilir",
      "E-Mail: info@localbirds.de",
    ],
  },
  {
    title: "2. Allgemeine Hinweise zur Datenverarbeitung",
    text: [
      "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.",
      "Personenbezogene Daten sind alle Informationen, mit denen eine Person direkt oder indirekt identifiziert werden kann, zum Beispiel Name, E-Mail-Adresse, IP-Adresse oder Angaben aus einer Kontaktanfrage.",
      "Die Verarbeitung erfolgt insbesondere auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage der Vorbereitung oder Durchführung eines Vertragsverhältnisses dient, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Wahrung berechtigter Interessen sowie auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO, sofern gesetzliche Pflichten bestehen.",
    ],
  },
  {
    title: "3. Hosting und Server-Logfiles",
    text: [
      "Beim Aufruf dieser Website werden durch den Hosting-Anbieter technisch erforderliche Daten verarbeitet, um die Website sicher und stabil bereitzustellen.",
      "Zu diesen Daten können insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite oder Datei, die übertragene Datenmenge, Browsertyp und Browserversion, Betriebssystem, Referrer-URL sowie der Hostname des zugreifenden Rechners gehören.",
      "Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung der Website, zur Systemsicherheit, zur Fehleranalyse und zur Missbrauchserkennung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb dieser Website.",
      "Die Speicherdauer der Logdaten richtet sich nach den technischen und sicherheitsbezogenen Vorgaben des eingesetzten Hosting-Anbieters. Logdaten werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist.",
    ],
  },
  {
    title: "4. Kontaktformular",
    text: [
      "Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen eingegebenen Daten. Dazu gehören insbesondere Ihr Name, Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht.",
      "Die Daten werden ausschließlich verwendet, um Ihre Anfrage zu bearbeiten, Rückfragen zu stellen und mit Ihnen Kontakt aufzunehmen.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einer möglichen Beauftragung, Terminvereinbarung oder sonstigen vorvertraglichen Maßnahme zusammenhängt. In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung eingehender Anfragen.",
      "Die im Kontaktformular übermittelten Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    ],
  },
  {
    title: "5. Kontaktaufnahme per E-Mail",
    text: [
      "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten personenbezogenen Daten, insbesondere Ihre E-Mail-Adresse, den Inhalt Ihrer Nachricht und gegebenenfalls weitere freiwillig mitgeteilte Angaben.",
      "Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Kommunikation mit Ihnen.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Kommunikation der Vorbereitung oder Durchführung eines Vertrags dient. Andernfalls erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
      "E-Mails werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
    ],
  },
  {
    title: "6. Cookies, lokale Speicherung und Tracking",
    text: [
      "Diese Website verwendet keine Analyse- oder Marketing-Cookies und keine Tracking-Technologien zur Auswertung des Nutzerverhaltens.",
      "Soweit technisch notwendige Informationen im Browser gespeichert werden, dienen diese ausschließlich der Bereitstellung grundlegender Website-Funktionen, zum Beispiel der Darstellung oder Bedienbarkeit der Website.",
      "Eine Auswertung zu Werbe-, Analyse- oder Profilingzwecken findet nicht statt.",
    ],
  },
  {
    title: "7. Schriftarten",
    text: [
      "Die auf dieser Website verwendeten Schriftarten werden lokal beziehungsweise über das Betriebssystem des Nutzers bereitgestellt.",
      "Eine Verbindung zu externen Schriftanbieter-Servern, etwa Google Fonts, findet beim Laden der Schriftarten nicht statt.",
    ],
  },
  {
    title: "8. Empfänger und Dienstleister",
    text: [
      "Personenbezogene Daten können durch technische Dienstleister verarbeitet werden, die uns beim Betrieb der Website, beim Hosting, beim Versand von Kontaktformularen oder bei der E-Mail-Kommunikation unterstützen.",
      "Soweit erforderlich, erfolgt die Einbindung solcher Dienstleister auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO.",
      "Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, wenn dies zur Bearbeitung Ihrer Anfrage erforderlich ist, eine gesetzliche Pflicht besteht oder Sie eingewilligt haben.",
    ],
  },
  {
    title: "9. Drittlandübermittlungen",
    text: [
      "Eine Übermittlung personenbezogener Daten in Staaten außerhalb der Europäischen Union beziehungsweise des Europäischen Wirtschaftsraums findet nur statt, sofern dies zur Nutzung eingesetzter technischer Dienstleister erforderlich ist und die datenschutzrechtlichen Voraussetzungen hierfür vorliegen.",
      "Sofern Dienste mit Sitz oder technischer Infrastruktur außerhalb der EU oder des EWR eingesetzt werden, achten wir auf geeignete Garantien im Sinne der DSGVO.",
    ],
  },
  {
    title: "10. Speicherdauer",
    text: [
      "Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist.",
      "Nach Wegfall des jeweiligen Zwecks werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      "Wenn aus einer Anfrage ein geschäftlicher Vorgang entsteht, können handels- oder steuerrechtliche Aufbewahrungsfristen gelten.",
    ],
  },
  {
    title: "11. Ihre Rechte",
    text: [
      "Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten.",
      "Außerdem haben Sie das Recht auf Berichtigung unrichtiger Daten, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.",
      "Sofern eine Verarbeitung auf einer Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
      "Zur Ausübung Ihrer Rechte können Sie sich jederzeit an die oben genannten Kontaktdaten wenden.",
    ],
  },
  {
    title: "12. Beschwerderecht bei einer Aufsichtsbehörde",
    text: [
      "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt.",
      "Für Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen zuständig.",
    ],
  },
  {
    title: "13. SSL- beziehungsweise TLS-Verschlüsselung",
    text: [
      "Diese Website nutzt aus Sicherheitsgründen eine verschlüsselte Verbindung.",
      "Sie erkennen eine verschlüsselte Verbindung daran, dass die Adresszeile des Browsers mit „https://“ beginnt.",
      "Dadurch können Daten, die Sie an uns übermitteln, nicht ohne Weiteres von Dritten mitgelesen werden.",
    ],
  },
  {
    title: "14. Keine automatisierte Entscheidungsfindung",
    text: [
      "Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.",
    ],
  },
  {
    title: "15. Aktualität dieser Datenschutzerklärung",
    text: [
      "Diese Datenschutzerklärung gilt für den aktuellen Stand dieser Website.",
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich technische, rechtliche oder organisatorische Änderungen ergeben.",
    ],
  },
];

export default function Datenschutz() {
  return (
    <Section id="datenschutz">
      <Box color="text.primary">
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ base: "stretch", lg: "start" }}
          justify="space-between"
          gap={{ base: "10", lg: "16" }}
          maxW="container.DEFAULT"
          mx="auto"
        >
          <VStack align="start" gap="6" maxW="box.lg">
            <VStack align="start" gap="3">
              <Text
                as="p"
                color="text.accent"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Datenschutz
              </Text>

              <Heading
                as="h1"
                color="text.primary"
                fontSize={{ base: "4xl", md: "5xl" }}
                lineHeight="1"
                letterSpacing="-0.02em"
                fontWeight="700"
              >
                Datenschutzerklärung
              </Heading>
            </VStack>

            <Text
              color="text.muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="1.7"
              maxW="box.md"
            >
              Informationen zur Verarbeitung personenbezogener Daten auf dieser
              Website der Local Birds KFZ Werkstatt.
            </Text>

            <Box
              bg="bg.card"
              borderWidth="1px"
              borderColor="divider.DEFAULT"
              rounded="card"
              px={{ base: "5", md: "6" }}
              py="5"
              maxW="box.md"
            >
              <Text color="text.primary" fontSize="md" lineHeight="1.7">
                Diese Website verwendet keine Analyse- oder Marketing-Cookies
                und kein Tracking zur Auswertung des Nutzerverhaltens.
              </Text>
            </Box>
          </VStack>

          <Box
            w="full"
            maxW={{ base: "full", lg: "box.lg" }}
            bg="bg.primary"
            borderWidth="1px"
            borderColor="divider.DEFAULT"
            rounded="panel"
            boxShadow="card"
            overflow="hidden"
          >
            <Box
              bg="bg.card"
              borderBottomWidth="1px"
              borderColor="divider.DEFAULT"
              px={{ base: "6", md: "8" }}
              py={{ base: "6", md: "8" }}
            >
              <VStack align="start" gap="2">
                <Heading
                  as="h2"
                  color="text.primary"
                  fontSize={{ base: "xl", md: "2xl" }}
                  lineHeight="1.2"
                  letterSpacing="-0.01em"
                  fontWeight="700"
                >
                  Umgang mit personenbezogenen Daten
                </Heading>

                <Text color="text.muted" fontSize="sm" lineHeight="1.6">
                  Stand dieser Datenschutzerklärung: April 2026
                </Text>
              </VStack>
            </Box>

            <VStack align="stretch" gap="0" px={{ base: "6", md: "8" }}>
              {privacySections.map((section) => (
                <Box
                  key={section.title}
                  py={{ base: "5", md: "6" }}
                  borderBottomWidth="1px"
                  borderColor="divider.DEFAULT"
                >
                  <VStack align="start" gap="3">
                    <Heading
                      as="h3"
                      color="text.primary"
                      fontSize={{ base: "md", md: "lg" }}
                      lineHeight="1.4"
                      fontWeight="700"
                    >
                      {section.title}
                    </Heading>

                    <VStack align="start" gap="3">
                      {section.text.map((paragraph) => (
                        <Text
                          key={paragraph}
                          color="text.muted"
                          fontSize="sm"
                          lineHeight="1.7"
                          whiteSpace="pre-line"
                        >
                          {paragraph}
                        </Text>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
              ))}
            </VStack>

            <Box px={{ base: "6", md: "8" }} py={{ base: "6", md: "8" }}>
              <Text color="text.muted" fontSize="sm" lineHeight="1.7">
                Hinweis: Die Angaben zu Hosting, E-Mail-Anbieter und technischem
                Versand des Kontaktformulars sollten mit den tatsächlich
                eingesetzten Dienstleistern abgeglichen und bei Bedarf
                konkretisiert werden.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Section>
  );
}