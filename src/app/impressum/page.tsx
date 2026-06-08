import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von RSA Gebäudeservice — Reinigung im Saarland.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
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
          <span className="t-eyebrow text-ink">Impressum</span>
        </div>

        <h1 className="t-display mb-12">
          <span className="italic-display">Impressum.</span>
        </h1>

        <div className="space-y-10 text-[1rem] text-ink-2 leading-[1.7]">
          <section>
            <h2 className="t-eyebrow mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-ink">
              RSA Gebäudeservice
              <br />
              Inhaber: [Name folgt]
              <br />
              [Straße &amp; Hausnummer]
              <br />
              [PLZ] Saarlouis
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">Kontakt</h2>
            <p>
              Telefon: +49 6831 · ___ ___
              <br />
              E-Mail:{" "}
              <a
                href="mailto:kontakt@rsa-gebaeudeservice.de"
                className="link-hairline text-ink hover:text-azur transition-colors"
              >
                kontakt@rsa-gebaeudeservice.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              [USt-IdNr. folgt]
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              [Name folgt]
              <br />
              [Anschrift wie oben]
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hairline text-ink hover:text-azur transition-colors"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="mt-3">
              Wir sind nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>

          <section>
            <h2 className="t-eyebrow mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>

        <p className="mt-16 text-xs text-ink-soft italic">
          Bitte beachten Sie: Dieses Impressum enthält Platzhalter und ist
          rechtlich noch zu vervollständigen — die endgültigen Angaben des
          Inhabers, der Anschrift und der USt-IdNr. werden vor Veröffentlichung
          ergänzt.
        </p>
      </div>
    </article>
  );
}
