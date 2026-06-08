import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie RSA Gebäudeservice — Reinigung im Saarland. Festpreis-Angebot innerhalb von 24 Stunden, kostenloser Vor-Ort-Termin.",
  alternates: { canonical: "/kontakt" },
};

const channels = [
  {
    kicker: "Telefon",
    title: "Direkt anrufen.",
    body: "Werktags 8–18 Uhr erreichbar. Außerhalb der Zeiten Rückruf innerhalb von 12 Stunden.",
    value: "+49 6831 · ___ ___",
    href: "tel:+4968310000000",
  },
  {
    kicker: "E-Mail",
    title: "Schriftlich anfragen.",
    body: "Schicken Sie uns Objektart, Adresse und Reinigungs­wunsch. Antwort innerhalb von 24 Stunden.",
    value: "kontakt@rsa-gebaeudeservice.de",
    href: "mailto:kontakt@rsa-gebaeudeservice.de",
  },
  {
    kicker: "Vor Ort",
    title: "Wir kommen vorbei.",
    body: "Kostenfreier Vor-Ort-Termin in Saarlouis und im gesamten Saarland — am selben oder nächsten Werktag.",
    value: "Termin anfragen",
    href: "mailto:kontakt@rsa-gebaeudeservice.de?subject=Vor-Ort-Termin%20anfragen",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden isolate">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(800px 500px at 80% 30%, rgba(27, 157, 238, 0.12), transparent 60%)",
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
            <span className="t-eyebrow text-ink">Kontakt</span>
          </div>

          <h1 className="t-mega font-display max-w-5xl">
            Sprechen wir über Ihr{" "}
            <span className="italic-display">Objekt.</span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg md:text-xl text-ink-2 leading-relaxed">
            Telefon, E-Mail oder ein Termin vor Ort — jeder Weg führt zu einem
            schriftlichen Festpreis-Angebot innerhalb von 24 Stunden.
            Kostenfrei und ohne Verpflichtung.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="relative py-24 md:py-32 bg-paper-deep">
        <div className="container-thin">
          <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
            {channels.map((c) => (
              <a
                key={c.kicker}
                href={c.href}
                className="bg-paper-deep p-8 md:p-10 transition-colors duration-500 hover:bg-paper-soft group"
              >
                <div className="text-xs tracking-[0.28em] uppercase text-terracotta mb-4">
                  {c.kicker}
                </div>
                <h2 className="italic-display text-[1.9rem] md:text-[2.1rem] text-ink mb-4 leading-tight">
                  {c.title}
                </h2>
                <p className="text-[0.95rem] text-ink-2 leading-relaxed mb-6">
                  {c.body}
                </p>
                <div className="flex items-baseline gap-3 pt-4 border-t border-hairline">
                  <span className="text-[0.95rem] text-ink font-medium">
                    {c.value}
                  </span>
                  <span className="ml-auto text-azur transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Postal address + hours */}
      <section className="relative py-24 md:py-32 bg-paper">
        <div className="container-thin">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="section-mark text-2xl">§I</span>
                <span className="t-eyebrow">Erreichbarkeit</span>
              </div>
              <h2 className="t-display">
                Wann wir am Telefon{" "}
                <span className="italic-display">dran sind.</span>
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <ul className="border-t border-hairline">
                {[
                  { day: "Montag – Freitag", hours: "8:00 – 18:00 Uhr" },
                  { day: "Samstag", hours: "9:00 – 13:00 Uhr" },
                  { day: "Sonn- & Feiertage", hours: "Notdienst nach Vereinbarung" },
                ].map((row) => (
                  <li
                    key={row.day}
                    className="grid grid-cols-12 gap-4 py-5 border-b border-hairline"
                  >
                    <span className="col-span-7 text-[1rem] text-ink">
                      {row.day}
                    </span>
                    <span className="col-span-5 text-[1rem] text-ink-2 font-numeral text-right md:text-left">
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <p className="t-eyebrow mb-3">Anschrift</p>
                <p className="text-[1.05rem] text-ink leading-relaxed">
                  RSA Gebäudeservice
                  <br />
                  Adresse folgt
                  <br />
                  Saarlouis · Saarland
                </p>
              </div>
            </div>
          </div>
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
              "radial-gradient(700px 400px at 50% 40%, rgba(27, 157, 238, 0.18), transparent 60%)",
          }}
        />
        <div className="container-thin text-center">
          <h2 className="t-display max-w-3xl mx-auto">
            Schreiben oder anrufen —{" "}
            <span className="italic-display">beides geht.</span>
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
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
