import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von RSA Gebäudeservice.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <article className="relative pt-36 pb-32 md:pt-44 md:pb-40 bg-paper">
      <div className="container-thin max-w-3xl">
        <div className="flex items-baseline gap-3 mb-8">
          <Link
            href="/"
            className="t-eyebrow link-hairline hover:text-ink transition-colors"
          >
            Start
          </Link>
          <span className="t-eyebrow opacity-50">·</span>
          <span className="t-eyebrow text-ink">Datenschutz</span>
        </div>

        <h1 className="t-display mb-12">
          <span className="italic-display">Datenschutz.</span>
        </h1>

        <div className="space-y-10 text-[1rem] text-ink-2 leading-[1.7]">
          <section>
            <h2 className="t-eyebrow mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3 text-ink">
              RSA Gebäudeservice
              <br />
              [Inhaber-Name folgt]
              <br />
              [Anschrift folgt] · Saarlouis
              <br />
              E-Mail: kontakt@rsa-gebaeudeservice.de
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">2. Erfassung allgemeiner Informationen</h2>
            <p>
              Beim Aufruf dieser Website werden durch unseren Hosting-Anbieter
              automatisch Informationen in sogenannten Server-Log-Dateien
              erfasst — Browsertyp, Betriebssystem, Referrer-URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
              Diese Daten sind nicht bestimmten Personen zuordenbar und werden
              zur statistischen Auswertung und Verbesserung der Website
              verwendet.
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">3. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies, die für den Betrieb der Seite erforderlich sind. Es
              werden keine Cookies zur Analyse oder zu Marketingzwecken ohne
              Ihre ausdrückliche Einwilligung eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre
              Angaben (Name, E-Mail-Adresse, Telefonnummer, Inhalt der
              Anfrage) zur Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse).
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit gemäß Art. 15
              bis 21 DSGVO. Anfragen richten Sie bitte an:{" "}
              <a
                href="mailto:kontakt@rsa-gebaeudeservice.de"
                className="link-hairline text-ink hover:text-azur transition-colors"
              >
                kontakt@rsa-gebaeudeservice.de
              </a>
              .
            </p>
            <p className="mt-3">
              Bei Datenschutzverstößen können Sie sich bei der zuständigen
              Aufsichtsbehörde beschweren: Unabhängiges Datenschutzzentrum
              Saarland, Fritz-Dobisch-Straße 12, 66111 Saarbrücken.
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">6. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es
              für die Bearbeitung Ihrer Anfrage oder die Erfüllung
              vertraglicher Pflichten erforderlich ist, längstens jedoch bis
              zum Ablauf gesetzlicher Aufbewahrungsfristen.
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">7. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Hosting-Anbieter
              betrieben. Personenbezogene Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Mit dem Hoster besteht ein Auftragsverarbeitungsvertrag
              nach Art. 28 DSGVO.
            </p>
          </section>
        </div>

        <p className="mt-16 text-xs text-ink-soft italic">
          Stand: Juni 2026. Diese Datenschutzerklärung wird vor finaler
          Veröffentlichung mit konkreten Anbieter-Angaben (Hoster, Inhaber)
          ergänzt.
        </p>
      </div>
    </article>
  );
}
