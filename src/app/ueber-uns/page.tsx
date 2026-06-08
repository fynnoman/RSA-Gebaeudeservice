import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "RSA Gebäudeservice — Reinigungsbetrieb aus Saarlouis im Saarland. Eigene Crew, Tariflohn, Innungs­betrieb. Verantwortung statt Anonymität.",
  alternates: { canonical: "/ueber-uns" },
};

const values = [
  {
    kicker: "Maßstab",
    title: "Substanz statt Versprechen.",
    body: "Wir bewerben nicht, was wir nicht halten können. Was wir versprechen, steht im Vertrag — und zwar so klar, dass Sie es auch ohne Anwalt verstehen.",
  },
  {
    kicker: "Verantwortung",
    title: "Eine feste Ansprech­person.",
    body: "Pro Objekt eine feste Reinigungs­kraft, ein fester Ansprech­partner. Sie wissen, wer kommt und wer am Telefon hilft. Keine Hotline, keine Schleifen.",
  },
  {
    kicker: "Haltung",
    title: "Tariflohn ist Standard.",
    body: "Unsere Mit­arbeiter werden nach Tarifvertrag der Gebäude­reiniger bezahlt — keine Schwarz­arbeit, kein Lohn­dumping. Das ist Voraussetzung dafür, dass Qualität entsteht.",
  },
  {
    kicker: "Region",
    title: "Aus Saarlouis fürs Saarland.",
    body: "Wir kennen das Saarland — die Wege, die Branchen, die Gegen­heiten. Das macht uns schneller, planbarer und näher dran als jeder über­regionale Anbieter.",
  },
];

const facts = [
  { k: "01", label: "Standort", value: "Saarlouis · Saarland" },
  { k: "02", label: "Rechtsform", value: "Eingetragener Betrieb" },
  { k: "03", label: "Mitarbeiter", value: "Tariflohn nach GR-Tarif" },
  { k: "04", label: "Versicherung", value: "Betriebs­haftpflicht (Police auf Wunsch)" },
  { k: "05", label: "Mitgliedschaft", value: "Innung der Gebäude­reiniger Saarland" },
  { k: "06", label: "Einsatzgebiet", value: "Saarland — werktags planbar" },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden isolate">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(800px 500px at 25% 30%, rgba(27, 157, 238, 0.10), transparent 60%)",
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
            <span className="t-eyebrow text-ink">Über uns</span>
          </div>

          <h1 className="t-mega font-display max-w-5xl">
            Reinigung ist{" "}
            <span className="italic-display">Vertrauen.</span>
            <br />
            <span className="pl-[6%] md:pl-[14%] block">
              Wir nehmen das{" "}
              <span className="italic-display">ernst.</span>
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg md:text-xl text-ink-2 leading-relaxed">
            RSA Gebäudeservice ist ein Reinigungs­betrieb aus Saarlouis. Wir
            arbeiten für Büros, Praxen, Hausverwaltungen, Industrie und Gewerbe
            im Saarland — mit eigenen Mit­arbeitern, mit Tariflohn und mit
            schriftlichen Festpreisen.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 md:py-32 bg-paper-deep">
        <div className="container-thin">
          <div className="flex items-baseline gap-3 mb-12">
            <span className="section-mark text-2xl">§I</span>
            <span className="t-eyebrow">Was uns trägt</span>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {values.map((v) => (
              <div
                key={v.kicker}
                className="bg-paper-deep p-8 md:p-10 transition-colors duration-500 hover:bg-paper-soft"
              >
                <div className="text-xs tracking-[0.28em] uppercase text-terracotta mb-4">
                  {v.kicker}
                </div>
                <h2 className="italic-display text-[1.9rem] md:text-[2.2rem] text-ink mb-4 leading-tight">
                  {v.title}
                </h2>
                <p className="text-[0.95rem] text-ink-2 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eckdaten */}
      <section className="relative py-24 md:py-32 bg-paper">
        <div className="container-thin">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="section-mark text-2xl">§II</span>
                <span className="t-eyebrow">Eckdaten</span>
              </div>
              <h2 className="t-display">
                Der Betrieb auf einen{" "}
                <span className="italic-display">Blick.</span>
              </h2>
            </div>

            <ul className="md:col-span-6 md:col-start-7 border-t border-hairline">
              {facts.map((f) => (
                <li
                  key={f.k}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-hairline"
                >
                  <span className="col-span-2 font-numeral text-[11px] text-terracotta tracking-wider self-baseline">
                    {f.k}
                  </span>
                  <span className="col-span-4 text-[0.78rem] uppercase tracking-[0.22em] text-ink-soft self-baseline">
                    {f.label}
                  </span>
                  <span className="col-span-6 text-[1rem] text-ink self-baseline">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-ink text-paper-soft overflow-hidden isolate">
        <div className="noise-overlay opacity-25" />
        <div className="container-thin">
          <h2 className="t-display max-w-3xl">
            Lernen wir uns persönlich{" "}
            <span className="italic-display">kennen.</span>
          </h2>
          <p className="mt-6 text-[1.05rem] text-paper-soft/75 max-w-xl leading-relaxed">
            Wir kommen zu Ihrem Objekt, schauen es uns an, machen Ihnen ein
            schriftliches Angebot. Das ganze: kostenfrei und ohne Verpflichtung.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl">
            <a
              href="mailto:kontakt@rsa-gebaeudeservice.de"
              className="btn-ink !bg-paper-soft !text-ink !border-paper-soft hover:!bg-azur hover:!text-paper-soft hover:!border-azur"
            >
              Termin anfragen
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
