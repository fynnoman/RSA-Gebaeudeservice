import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Reinigungsleistungen von RSA Gebäudeservice — Unterhalts-, Glas-, Industrie-, Bauend-, Hygiene- und Sonderreinigung im Saarland. Festpreis, eigene Crew, vertraglich abgesichert.",
  alternates: { canonical: "/leistungen" },
};

type Service = {
  num: string;
  name: string;
  short: string;
  body: string;
  bullets: string[];
};

const services: Service[] = [
  {
    num: "01",
    name: "Unterhaltsreinigung",
    short: "Die wiederkehrende Reinigung Ihres Objekts — vertraglich, dokumentiert, mit fester Crew.",
    body: "Tägliche, wöchentliche oder vierzehntägliche Reinigung mit klar definiertem Leistungs­umfang. Wir arbeiten mit einem festen Reinigungs­plan pro Objekt, mit fester Reinigungskraft und einer fest zugeteilten Ansprech­person — auf Wunsch mit digitaler Protokoll­führung.",
    bullets: [
      "Festes Personal pro Objekt — kein wechselndes Subpersonal",
      "Schriftlicher Reinigungsplan mit Intervallen pro Bereich",
      "Auf Wunsch monatliche Foto- und Protokoll­dokumentation",
      "Materialwirtschaft inklusive — Sie liefern nichts zu",
    ],
  },
  {
    num: "02",
    name: "Büroreinigung",
    short: "Diskret, außerhalb Ihrer Geschäftszeiten, mit Sorgfalt für Technik und Vertraulichkeit.",
    body: "Wir reinigen Ihre Büros so, dass Sie morgens den Unterschied sehen — ohne dass Sie uns je begegnen müssen. Schlüssel­verwahrung über zertifizierten Tresor, Mitarbeiter mit polizeilichem Führungs­zeugnis, separate Reinigungs­tücher pro Bereich.",
    bullets: [
      "Reinigung außerhalb der Geschäftszeiten",
      "Schlüssel­sichere Übergabe und Aufbewahrung",
      "Mitarbeiter mit aktuellem polizeilichem Führungs­zeugnis",
      "Separate Wischbezüge für Sanitär / Küche / Büro",
    ],
  },
  {
    num: "03",
    name: "Glas- & Fensterreinigung",
    short: "Vom Schaufenster bis zur Glasfassade — inklusive Rahmen, Lamellen und Wintergarten.",
    body: "Streifenfreie Reinigung mit entsalztem Reinst­wasser bei Glasflächen, klassische Nassreinigung mit Abzieher bei Fenstern. Auf Wunsch ergänzen wir Rahmen, Fenster­bretter und Lamellen — alles in einem Termin.",
    bullets: [
      "Reinst­wasser-Verfahren für streifen­freies Glas",
      "Rahmen, Fensterbänke, Lamellen, Wintergärten",
      "Hubsteiger und Steiger­personal eigen — keine Fremdvergabe",
      "Auch Sonder­termine bei Bau- oder Veranstaltungs­bedarf",
    ],
  },
  {
    num: "04",
    name: "Treppenhausreinigung",
    short: "Für Hausverwaltungen und WEGs — verlässlich, dokumentiert, transparent abgerechnet.",
    body: "Wir reinigen Treppenhäuser und Gemeinschafts­flächen in festen Intervallen — wöchentlich, vierzehn­täglich oder monatlich. Sie erhalten auf Wunsch eine Foto-Dokumentation per Mail und können das Reinigungs­protokoll im Hauseingang aushängen lassen.",
    bullets: [
      "Treppen, Geländer, Briefkasten­anlage, Glas­türen, Lichtschalter",
      "Eingangsbereich, Aufzug, Keller­abgang nach Absprache",
      "Foto- und Datums­dokumentation für Eigentümer­versammlung",
      "Übersichtliche Abrechnung — auf Wunsch direkt mit Hausverwaltung",
    ],
  },
  {
    num: "05",
    name: "Bauend- & Bauschluss­reinigung",
    short: "Nach Neubau oder Renovierung — übergabefertig in zwei klar getrennten Stufen.",
    body: "Wir reinigen in der Reihen­folge Bauend → Bauschluss: erst werden grobe Reste und Staubschichten entfernt, dann erfolgt die übergabe­fähige Feinreinigung mit Beschichtungs­schutz. So vermeiden Sie Übergabe­mängel und sparen Nacharbeit.",
    bullets: [
      "Bauend­reinigung: Grob, Staub, Mörtel, Klebereste",
      "Bauschluss­reinigung: Feinreinigung übergabe­bereit",
      "Schutz von Boden, Beschlägen und sensiblen Oberflächen",
      "Anwesend bei der Übergabe — falls gewünscht",
    ],
  },
  {
    num: "06",
    name: "Grundreinigung",
    short: "Die tiefe Reinigung — mit Maschineneinsatz, Tiefen­wirkung und Folgepflege.",
    body: "Grund­reinigung von Böden (PVC, Linoleum, Stein, Fliese), Reinigung samt Beschichtung und Versiegelung. Geeignet für Flächen, bei denen die Unterhalts­reinigung an ihre Grenzen kommt — z. B. nach Jahren der Nutzung oder vor einem Mieterwechsel.",
    bullets: [
      "Boden­schleifen und Maschinen­reinigung",
      "Neue Schutz­beschichtung mit Polymer­dispersion",
      "Auch für historische und empfindliche Oberflächen",
      "Inklusive Empfehlung zur passenden Folge­pflege",
    ],
  },
  {
    num: "07",
    name: "Industrie- & Hallen­reinigung",
    short: "Produktions­hallen, Werkstätten, Lager und Logistik — auch im laufenden Betrieb.",
    body: "Wir reinigen Industrie­objekte, ohne den Betrieb zu unterbrechen — abgesetzt im Schicht­wechsel oder am Wochenende. Bodenflächen mit Aufsitz­maschinen, Tor- und Decken­bereiche, Sanitär- und Pausenräume inklusive.",
    bullets: [
      "Boden­reinigung mit Aufsitz­scheuersaugmaschinen",
      "Hallen­decken und Lichtbänder mit Hubsteiger",
      "Sozialräume, Sanitär, Pausenraum, Umkleide",
      "Reinigung an Wochenenden und nachts möglich",
    ],
  },
  {
    num: "08",
    name: "Praxis- & Hygiene­reinigung",
    short: "RKI-konforme Reinigung für Arztpraxen, Apotheken und Pflege­einrichtungen.",
    body: "Hygiene­plan nach RKI-Empfehlungen, mit getrennten Reinigungs­zonen, separaten Wisch­bezügen pro Raum und dokumentierter Wischdesinfektion. Reinigungs­personal speziell für medizinische Umgebungen geschult.",
    bullets: [
      "Hygiene­plan nach RKI-Standard",
      "Separate Wisch­bezüge pro Behandlungs­raum",
      "Wisch­desinfektion mit gelisteten Mitteln",
      "Schulung des Reinigungs­personals jährlich aktualisiert",
    ],
  },
  {
    num: "09",
    name: "Teppich- & Polster­reinigung",
    short: "Sprüh­extraktion, Fleck- und Geruchs­entfernung — auch für Allergiker geeignet.",
    body: "Tiefen­reinigung von Teppichen, Sofas und Bürostühlen mit Sprüh­extraktions­verfahren. Lokale Fleck­behandlung mit dem passenden Lösungs­mittel je Material, anschließend rückstands­freie Trocknung.",
    bullets: [
      "Sprühextraktion mit professionellen Geräten",
      "Materialgerechte Fleck­behandlung",
      "Trocknungs­optimiert — schnelle Wieder­nutzung",
      "Allergiker­geeignete Reinigungs­mittel auf Wunsch",
    ],
  },
  {
    num: "10",
    name: "Steinreinigung & -pflege",
    short: "Naturstein, Terrazzo und Beton — schonend gereinigt, fachgerecht versiegelt.",
    body: "Stein­materialien brauchen Sachverstand. Wir reinigen Naturstein, Terrazzo und Beton mit material­schonenden Verfahren, beheben Schäden durch Salz und Streumittel und versiegeln Oberflächen für langfristige Pflege­leichtigkeit.",
    bullets: [
      "Material­bestimmung vor Reinigungs­start",
      "Säurefreie Reinigung bei kalk­haltigen Steinen",
      "Versiegelung mit Imprägnierung gegen Flecken",
      "Beratung zur Folge­pflege im Alltag",
    ],
  },
  {
    num: "11",
    name: "Graffiti-Entfernung",
    short: "Material­schonend, vollständig — mit Schutz­beschichtung gegen Wieder­besprühung.",
    body: "Wir entfernen Graffiti von Putz, Klinker, Beton und Metall mit Verfahren, die auf das jeweilige Material abgestimmt sind. Auf Wunsch tragen wir eine Anti-Graffiti-Beschichtung auf — bei erneuter Besprühung lässt sich die Farbe dann mit klarem Wasser entfernen.",
    bullets: [
      "Material­tests vor Entfernungs­start",
      "Hochdruck-, Niederdruck- und chemische Verfahren",
      "Anti-Graffiti-Beschichtung als Schutz danach",
      "24h-Notfall­einsatz bei Vandalismus auf Anfrage",
    ],
  },
  {
    num: "12",
    name: "Fassadenreinigung",
    short: "Putz, Klinker, Metall — Niederdruck-Verfahren und Hochdruck nach Material­bedarf.",
    body: "Wir reinigen Fassaden mit dem für das Material angemessenen Druck und der richtigen Chemie. Putz braucht andere Sorgfalt als Klinker, beides anderes als Metall- oder Glas­fassaden. Hubsteiger und Steiger­personal stellen wir.",
    bullets: [
      "Material­gerechte Druck­wahl",
      "Hubsteiger inklusive — keine Fremd­vergabe",
      "Auch hist­orische Fassaden nach Absprache",
      "Imprägnierung gegen Algen und Moose verfügbar",
    ],
  },
  {
    num: "13",
    name: "Solar- & PV-Reinigung",
    short: "Mehr Ertrag durch fachgerechte Modul­reinigung — entkalkt, streifen­frei.",
    body: "Verschmutzte Photovoltaik-Module verlieren bis zu 30 Prozent Ertrag. Wir reinigen Module mit entsalztem Wasser, ohne Druck und ohne Spül­mittel — schonend zur Beschichtung, mit messbarem Ertrags­gewinn.",
    bullets: [
      "Entsalztes Reinst­wasser, kein Druck, keine Chemie",
      "Auf Wunsch Reinigungs­intervall im Jahres­vertrag",
      "Dokumentation der Reinigung für Versicherung",
      "Auch große Freiflächen­anlagen",
    ],
  },
  {
    num: "14",
    name: "Dachreinigung",
    short: "Moose, Algen und Flechten — inklusive Imprägnierung für langfristigen Schutz.",
    body: "Wir reinigen Dächer von Moosen, Algen und Flechten mit material­schonenden Verfahren — anschließend wird das Dach imprägniert, sodass der Effekt mehrere Jahre hält. Auch Dachrinnen­reinigung als kombinierter Service.",
    bullets: [
      "Material­gerechte Reinigung (Ziegel, Beton, Schiefer)",
      "Imprägnierung für 5 bis 10 Jahre Wirkung",
      "Dach­rinnen-Reinigung in einem Termin",
      "Arbeits­sicherheit durch zertifizierte Höhen­arbeiter",
    ],
  },
  {
    num: "15",
    name: "Desinfektionsservice",
    short: "Nach DIN — für Praxen, Schulen, Kantinen und Sanitär­bereiche.",
    body: "Wir desinfizieren Flächen und Räume mit gelisteten, behördlich zugelassenen Mitteln. Auf Wunsch mit Sprüh-, Wisch- oder Vernebelungs­verfahren, mit Dokumentation für Ihre eigenen Hygiene-Audits.",
    bullets: [
      "Gelistete Mittel nach VAH und RKI",
      "Wisch- oder Sprüh­verfahren je nach Anwendung",
      "Auf Wunsch Kalt­vernebelung für Großflächen",
      "Schriftliche Dokumentation für Audit",
    ],
  },
  {
    num: "16",
    name: "Hausmeisterservice",
    short: "Kleinreparaturen, Müll­verwaltung, Außen­anlagen — alles aus einer Hand.",
    body: "Wir übernehmen den Hausmeister­dienst für Hausverwaltungen, WEGs und Gewerbe­objekte — Müll­tonnen­dienst, Außen­anlagen­pflege, Klein­reparaturen, Winter­dienst und die Koordination mit Handwerkern bei größeren Aufgaben.",
    bullets: [
      "Müll­tonnen­dienst — raus und rein, stets pünktlich",
      "Kleine Hand­werks­arbeiten und Klein­reparaturen",
      "Außen­anlagen-Pflege ganz­jährig",
      "Koordination mit Handwerkern bei größeren Aufgaben",
    ],
  },
  {
    num: "17",
    name: "Winterdienst",
    short: "Räum- und Streupflicht — vertraglich abgesichert, vor 7 Uhr morgens erledigt.",
    body: "Wir übernehmen Ihre Räum- und Streupflicht. Vor 7 Uhr morgens sind die Wege frei — bei jeder Witterung, jeden Tag, vertraglich abgesichert. Streumittel umwelt­schonend und je nach Boden angepasst.",
    bullets: [
      "Räumung vor 7 Uhr morgens — auch sonntags",
      "Mehrfach­räumung bei anhaltendem Schneefall",
      "Umweltschonende Streumittel je nach Untergrund",
      "Haft­ung versichert — Ihre Pflicht ist erfüllt",
    ],
  },
  {
    num: "18",
    name: "Gartenpflege",
    short: "Hecken, Rasen, Grünanlagen — Saison­pflege und Pflanz­schnitt aus einer Hand.",
    body: "Wir pflegen Außen­anlagen ganzjährig — Rasen­schnitt, Heckenschnitt, Pflanz­pflege, Wege­säuberung. Im Herbst Laub­räumung, im Frühjahr Frühjahrsschnitt. Auf Wunsch im Pauschal­vertrag mit Winter­dienst.",
    bullets: [
      "Rasen- und Heckenschnitt in Intervallen",
      "Frühjahrsschnitt und Herbst­laubräumung",
      "Bewässerung und Düngung nach Bedarf",
      "Pauschal­vertrag mit Winter­dienst möglich",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden isolate">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(800px 500px at 75% 30%, rgba(27, 157, 238, 0.10), transparent 60%)",
            }}
          />
          <div className="noise-overlay opacity-40" />
        </div>

        <div className="container-thin">
          <div className="flex items-baseline gap-3 mb-8">
            <Link
              href="/"
              className="t-eyebrow link-hairline hover:text-ink transition-colors"
            >
              Start
            </Link>
            <span className="t-eyebrow opacity-50">·</span>
            <span className="t-eyebrow text-ink">Leistungen</span>
          </div>

          <h1 className="t-mega font-display max-w-5xl">
            Achtzehn{" "}
            <span className="italic-display">Disziplinen.</span>
            <br />
            Ein <span className="italic-display">Maßstab.</span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg md:text-xl text-ink-2 leading-relaxed">
            Unser komplettes Leistungs­spektrum für Büros, Praxen, Hausverwaltungen,
            Industrie und Gewerbe im Saarland. Jede Leistung mit klarem Festpreis,
            schriftlichem Reinigungs­plan und einer festen Ansprech­person.
          </p>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="relative pb-32 md:pb-40 bg-paper">
        <div className="container-thin">
          {services.map((s, i) => (
            <article
              key={s.num}
              className="grid md:grid-cols-12 gap-8 lg:gap-12 py-14 md:py-20 border-t border-hairline last:border-b last:border-hairline"
            >
              <div className="md:col-span-4">
                <span className="font-numeral text-xs text-terracotta tracking-wider">
                  {s.num} / {String(services.length).padStart(2, "0")}
                </span>
                <h2 className="mt-3 t-display">
                  <span className="italic-display">{s.name}.</span>
                </h2>
                <p className="mt-5 text-[1rem] text-ink-2 leading-relaxed max-w-sm">
                  {s.short}
                </p>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <p className="text-[1.02rem] text-ink-2 leading-[1.7] mb-7">
                  {s.body}
                </p>
                <ul className="space-y-2.5 border-t border-hairline pt-5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-baseline gap-3 text-[0.95rem] text-ink-2 leading-relaxed"
                    >
                      <span className="font-numeral text-[10px] text-terracotta">
                        ·
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-ink text-paper-soft overflow-hidden isolate">
        <div className="noise-overlay opacity-25" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(700px 400px at 30% 50%, rgba(27, 157, 238, 0.18), transparent 60%)",
          }}
        />
        <div className="container-thin">
          <h2 className="t-display max-w-3xl">
            Welche Leistung passt zu Ihrem{" "}
            <span className="italic-display">Objekt?</span>
          </h2>
          <p className="mt-6 text-[1.05rem] text-paper-soft/75 max-w-xl leading-relaxed">
            Schreiben Sie uns kurz, was gereinigt werden soll. Wir melden uns
            innerhalb von 24 Stunden mit einem kostenlosen Vor-Ort-Termin.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl">
            <a
              href="mailto:kontakt@rsa-gebaeudeservice.de"
              className="btn-ink !bg-paper-soft !text-ink !border-paper-soft hover:!bg-azur hover:!text-paper-soft hover:!border-azur"
            >
              kontakt@rsa-gebaeudeservice.de
            </a>
            <a
              href="tel:+4968310000000"
              className="btn-ghost !text-paper-soft !border-paper-soft/35 hover:!bg-paper-soft hover:!text-ink"
            >
              +49 6831 · ___ ___
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
