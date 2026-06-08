import Link from "next/link";

const services = [
  { num: "01", name: "Unterhaltsreinigung", desc: "Wiederkehrende Reinigung für Büro, Gewerbe und WEG — diskret und dokumentiert." },
  { num: "02", name: "Büroreinigung", desc: "Außerhalb der Geschäftszeiten, schlüsselsicher, mit fester Reinigungskraft." },
  { num: "03", name: "Glas- & Fensterreinigung", desc: "Vom Schaufenster bis zur Glasfassade — inkl. Rahmen, Lamellen und Wintergarten." },
  { num: "04", name: "Treppenhausreinigung", desc: "Hausverwaltungen und WEGs — wöchentlich, vierzehntäglich oder monatlich." },
  { num: "05", name: "Bauend- & Bauschlussreinigung", desc: "Nach Neubau oder Renovierung — übergabefertig in zwei Stufen." },
  { num: "06", name: "Grundreinigung", desc: "Tiefe Reinigung mit Maschineneinsatz und passender Folgepflege." },
  { num: "07", name: "Industrie- & Hallenreinigung", desc: "Produktion, Werkstatt, Lager, Logistik — auch im laufenden Betrieb." },
  { num: "08", name: "Praxis- & Hygienereinigung", desc: "RKI-konforme Reinigung für Arztpraxen, Apotheken und Pflegeeinrichtungen." },
  { num: "09", name: "Teppich- & Polsterreinigung", desc: "Sprühextraktion, Fleck- und Geruchsentfernung, Allergiker­freundlich." },
  { num: "10", name: "Steinreinigung & -pflege", desc: "Naturstein, Terrazzo, Beton — schonend gereinigt und versiegelt." },
  { num: "11", name: "Graffiti-Entfernung", desc: "Materialschonend, mit Schutzbeschichtung gegen Wiederbesprühung." },
  { num: "12", name: "Fassadenreinigung", desc: "Putz, Klinker, Metall — Niederdruck-Verfahren und Hochdruck nach Bedarf." },
  { num: "13", name: "Solar- & PV-Reinigung", desc: "Mehr Ertrag durch fachgerechte Modulreinigung — entkalkt, streifenfrei." },
  { num: "14", name: "Dachreinigung", desc: "Moose, Algen, Flechten — inklusive Imprägnierung für langfristigen Schutz." },
  { num: "15", name: "Desinfektionsservice", desc: "Nach DIN — Praxen, Schulen, Kantinen und Sanitärbereiche." },
  { num: "16", name: "Hausmeisterservice", desc: "Kleinreparaturen, Müllverwaltung, Außenanlagen — fest zugeteilt." },
  { num: "17", name: "Winterdienst", desc: "Räum- und Streupflicht — vertraglich abgesichert, vor 7 Uhr erledigt." },
  { num: "18", name: "Gartenpflege", desc: "Hecken, Rasen, Grünanlagen — Saisonpflege und Pflanzschnitt." },
];

const usps = [
  {
    kicker: "Festpreis",
    title: "Festpreis.",
    body: "Schriftliches Angebot mit klaren Leistungen, klaren Intervallen und ohne versteckte Aufschläge.",
  },
  {
    kicker: "Versichert",
    title: "Versichert.",
    body: "Betriebs­haftpflicht­versicherung mit Deckungs­summe für Personen- und Sachschäden in Ihren Objekten.",
  },
  {
    kicker: "Saarland-weit",
    title: "Regional.",
    body: "Aus Saarlouis für alle Orte im Saarland — von Saarbrücken bis St. Wendel, in der Regel werktags planbar.",
  },
  {
    kicker: "Eigene Crew",
    title: "Verlässlich.",
    body: "Eigene, nach Tarif bezahlte Mitarbeiter — kein Subunternehmer-Roulette, kein wechselndes Personal.",
  },
];

const audiences = [
  { title: "Büros", body: "Tägliche oder wöchentliche Reinigung. Diskret, schlüsselsicher, mit Protokollführung." },
  { title: "Arztpraxen", body: "Hygiene­plan nach RKI, Flächendesinfektion, separate Wischbezüge pro Raum." },
  { title: "Hausverwaltungen", body: "Treppenhaus, Glas, Außen­anlagen — auf Wunsch monatliche Foto­doku­mentation." },
  { title: "Industrie & Handel", body: "Produktions­hallen, Werkstätten, Lager — auch nachts und am Wochenende." },
  { title: "Gastronomie", body: "Küche, Gastraum, Sanitär — alle Reinigungs­stufen nach HACCP-Standard." },
  { title: "Einzelhandel", body: "Schaufenster, Verkaufs­fläche, Sanitär — außerhalb der Öffnungs­zeiten." },
];

const processSteps = [
  { num: "I.", title: "Anfrage", body: "Telefon oder Formular. Wir melden uns innerhalb von 24 Stunden — kostenfrei und unverbindlich." },
  { num: "II.", title: "Vor-Ort-Termin", body: "Wir schauen uns das Objekt persönlich an und nehmen Maß. In Saarlouis und Umgebung am selben oder nächsten Werktag." },
  { num: "III.", title: "Festpreis", body: "Schriftliches Angebot mit klaren Leistungen und Intervallen. Klare Sprache, keine Klauseln." },
  { num: "IV.", title: "Start", body: "Innerhalb von 14 Tagen, mit einer festen Ansprech­person und einer festen Reinigungskraft für Ihr Objekt." },
];

const trustPoints = [
  { headline: "Versichert", body: "Betriebs­haftpflicht­versicherung mit Deckungs­summe für Personen- und Sachschäden — Police auf Wunsch vorab." },
  { headline: "Tarif­treue", body: "Bezahlung nach Tarifvertrag der Gebäude­reiniger. Keine Schwarz­arbeit, kein Lohn­dumping." },
  { headline: "Innung", body: "Eingetragener Handwerksbetrieb, Mitglied in der Innung der Gebäude­reiniger Saarland." },
  { headline: "Eigene Crew", body: "Keine Subunternehmer. Sie kennen Ihre Ansprech­person und die Reinigungskraft Ihres Objekts persönlich." },
];

const cities = [
  "Saarbrücken",
  "Saarlouis",
  "Neunkirchen",
  "Homburg",
  "Völklingen",
  "Merzig",
  "Dillingen",
  "St. Wendel",
  "St. Ingbert",
  "Lebach",
  "Püttlingen",
  "Blieskastel",
];

export default function Home() {
  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative isolate overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 600px at 12% 18%, rgba(27, 157, 238, 0.13), transparent 55%), radial-gradient(900px 500px at 88% 78%, rgba(201, 99, 63, 0.07), transparent 55%)",
            }}
          />
          <div className="noise-overlay opacity-50" />
        </div>

        <div className="container-thin">
          {/* Meta row */}
          <div
            className="grid grid-cols-12 gap-6 items-baseline mb-10 fade-rise"
            style={{ animationDelay: "60ms" }}
          >
            <div className="col-span-12 md:col-span-6 flex items-center gap-3 t-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-azur pulse-dot" />
              <span>Gebäudereinigung · Saarland</span>
            </div>
            <div className="hidden md:flex col-span-6 justify-end gap-8 text-[10px] tracking-[0.28em] uppercase text-ink-soft font-numeral">
              <span className="font-display italic normal-case tracking-normal text-[14px] text-terracotta">
                §
              </span>
              <span>49.31° N · 6.75° O</span>
              <span>Saarlouis</span>
            </div>
          </div>

          <hr
            className="hairline mb-14 fade-rise"
            style={{ animationDelay: "120ms" }}
          />

          {/* Mega heading */}
          <h1 className="t-mega font-display">
            <span
              className="block fade-rise"
              style={{ animationDelay: "180ms" }}
            >
              Saubere{" "}
              <span className="italic-display">Räume.</span>
            </span>
            <span
              className="block pl-[6%] md:pl-[16%] mt-1 md:mt-2 fade-rise"
              style={{ animationDelay: "340ms" }}
            >
              Klare{" "}
              <span className="italic-display">Verantwortung.</span>
            </span>
          </h1>

          {/* Sub block */}
          <div className="mt-14 grid grid-cols-12 gap-6 items-end">
            <div
              className="col-span-12 md:col-span-6 md:col-start-2 fade-rise"
              style={{ animationDelay: "480ms" }}
            >
              <p className="text-lg md:text-xl text-ink-2 leading-[1.55] max-w-xl">
                Wir übernehmen die Reinigung Ihrer Objekte im Saarland —
                Unterhalt, Glas, Industrie, Bauend. Festpreis, Tariflohn,
                eigene Crew. Damit Sie sich um Ihr Geschäft kümmern können.
              </p>
            </div>

            <div
              className="col-span-12 md:col-span-4 md:col-start-9 fade-rise"
              style={{ animationDelay: "600ms" }}
            >
              <div className="flex flex-col gap-3">
                <a href="#kontakt" className="btn-ink w-full justify-between">
                  <span>Kostenloses Angebot</span>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                    <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
                    <path d="M7 11h8m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="1.1" />
                  </svg>
                </a>
                <a href="tel:+4968310000000" className="btn-ghost w-full justify-between">
                  <span>+49 6831 · ___ ___</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <path
                      d="M4.5 3.5l2.5 2.5-2 2c.5 2 3 4.5 5 5l2-2 2.5 2.5-1.5 1.5c-3 1-11-5-11-11l2.5-0.5Z"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom strip — services index */}
          <div
            className="mt-24 md:mt-28 fade-rise"
            style={{ animationDelay: "740ms" }}
          >
            <hr className="hairline" />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-[0.85rem]">
              {[
                "Unterhaltsreinigung",
                "Glas & Fenster",
                "Industrie & Hallen",
                "Bauend / Bauschluss",
                "Praxis & Hygiene",
                "Hausmeisterservice",
              ].map((s, i) => (
                <div key={s} className="flex items-baseline gap-3">
                  <span className="font-numeral text-[11px] text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── §I — USP row ────────────────────── */}
      <section className="relative py-24 md:py-32 bg-paper-deep">
        <div className="container-thin">
          <div className="flex items-baseline gap-3 mb-12">
            <span className="section-mark text-2xl">§I</span>
            <span className="t-eyebrow">Vier Garantien</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
            {usps.map((u) => (
              <div
                key={u.kicker}
                className="bg-paper-deep p-8 md:p-10 transition-colors duration-500 hover:bg-paper-soft"
              >
                <div className="text-xs tracking-[0.28em] uppercase text-terracotta mb-4">
                  {u.kicker}
                </div>
                <div className="italic-display text-[2.2rem] text-ink mb-4 leading-none">
                  {u.title}
                </div>
                <p className="text-[0.95rem] text-ink-2 leading-relaxed">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── §II — Leistungen ─────────────────── */}
      <section
        id="leistungen"
        className="relative py-28 md:py-40 bg-paper isolate overflow-hidden"
      >
        <div className="container-thin relative">
          <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="section-mark text-2xl">§II</span>
                <span className="t-eyebrow">Was wir tun</span>
              </div>
              <h2 className="t-display">
                Achtzehn{" "}
                <span className="italic-display">Disziplinen.</span>
                <br />
                Ein <span className="italic-display">Anspruch.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-[1.05rem] text-ink-2 leading-relaxed">
                Was bei uns Standard ist: sichtbar saubere Ergebnisse,
                dokumentierte Reinigung, Tariflohn für jede Reinigungskraft
                und eine feste Ansprech­person. Unten unsere Leistungen — auf
                Wunsch in jedem Mix kombinier­bar.
              </p>
            </div>
          </div>

          <ul className="border-t border-hairline">
            {services.map((s) => (
              <li
                key={s.num}
                className="group grid grid-cols-12 gap-4 py-6 md:py-7 border-b border-hairline items-baseline transition-colors duration-300 hover:bg-paper-soft"
              >
                <span className="col-span-2 md:col-span-1 font-numeral text-[11px] text-terracotta tracking-wider">
                  {s.num}
                </span>
                <h3 className="col-span-10 md:col-span-4 text-xl md:text-2xl italic-display text-ink">
                  {s.name}
                </h3>
                <p className="col-span-12 md:col-span-7 text-[0.95rem] text-ink-2 leading-relaxed md:pl-6">
                  {s.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ──────────────── §III — Zielgruppen ─────────────────── */}
      <section
        id="zielgruppen"
        className="relative py-28 md:py-36 bg-ink text-paper-soft overflow-hidden isolate"
      >
        <div className="noise-overlay opacity-30" />
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[50vw] h-[40vw] -z-10 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 0%, rgba(27, 157, 238, 0.20), transparent 70%)",
          }}
        />

        <div className="container-thin relative">
          <div className="flex items-baseline gap-3 mb-12">
            <span className="italic-display text-2xl text-terracotta-soft">
              §III
            </span>
            <span className="text-[10px] tracking-[0.32em] uppercase font-medium text-paper-soft/55">
              Für wen wir arbeiten
            </span>
          </div>

          <h2 className="t-display max-w-3xl mb-16">
            Sie kennen Ihr Gebäude.{" "}
            <span className="italic-display text-paper-soft/70">
              Wir kümmern uns.
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-soft/10 border border-paper-soft/10">
            {audiences.map((a) => (
              <div key={a.title} className="bg-ink p-8 md:p-10 group">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="italic-display text-[1.9rem] text-paper-soft leading-none">
                    {a.title}.
                  </h3>
                  <span className="text-azur opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                      <path d="M5 11h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </div>
                <p className="text-[0.92rem] text-paper-soft/70 leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── §IV — Prozess ─────────────────── */}
      <section
        id="prozess"
        className="relative py-28 md:py-36 bg-paper isolate overflow-hidden"
      >
        <div className="container-thin">
          <div className="flex items-baseline gap-3 mb-12">
            <span className="section-mark text-2xl">§IV</span>
            <span className="t-eyebrow">Wie wir starten</span>
          </div>

          <h2 className="t-display mb-16 max-w-3xl">
            Vom ersten Anruf bis zum Start.{" "}
            <span className="italic-display">In vier Schritten.</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {processSteps.map((p, i) => (
              <div key={p.num} className="relative">
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute top-3 -right-4 text-terracotta-soft text-2xl"
                  >
                    →
                  </span>
                )}
                <div className="italic-display text-terracotta text-2xl mb-3">
                  {p.num}
                </div>
                <h3 className="font-display text-2xl md:text-[1.55rem] tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] text-ink-2 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── §V — Vertrauen ──────────────────── */}
      <section className="relative py-28 md:py-36 bg-paper-deep">
        <div className="container-thin">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="section-mark text-2xl">§V</span>
                <span className="t-eyebrow">Warum mit uns</span>
              </div>
              <h2 className="t-display">
                Substanz statt{" "}
                <span className="italic-display">Versprechen.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 self-end">
              <p className="text-[1.05rem] text-ink-2 leading-relaxed">
                Ein Reinigungs­dienst­leister muss vor allem eines: verlässlich
                sein. Wir setzen auf nachprüfbare Standards statt auf Floskeln.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px border border-hairline bg-hairline">
            {trustPoints.map((t) => (
              <div
                key={t.headline}
                className="bg-paper-deep p-8 md:p-10 transition-colors duration-500 hover:bg-paper-soft"
              >
                <h3 className="italic-display text-[2.4rem] text-ink mb-3 leading-none">
                  {t.headline}.
                </h3>
                <p className="text-[0.95rem] text-ink-2 leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── §VI — Einsatzgebiet ──────────────── */}
      <section
        id="einsatzgebiet"
        className="relative py-28 md:py-36 bg-paper"
      >
        <div className="container-thin">
          <div className="flex items-baseline gap-3 mb-12">
            <span className="section-mark text-2xl">§VI</span>
            <span className="t-eyebrow">Einsatzgebiet</span>
          </div>

          <h2 className="t-display mb-16 max-w-3xl">
            Aus Saarlouis ins gesamte{" "}
            <span className="italic-display">Saarland.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 max-w-3xl">
            {cities.map((c, i) => (
              <div
                key={c}
                className="flex items-baseline gap-3 border-b border-hairline pb-3 hover:border-azur/50 transition-colors duration-300"
              >
                <span className="font-numeral text-[11px] text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg md:text-xl">{c}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-ink-soft max-w-xl">
            Ihre Stadt nicht dabei? Auch außerhalb dieser Liste fahren wir
            regelmäßig — sprechen Sie uns an.
          </p>
        </div>
      </section>

      {/* ───────────────── §VII — Kontakt-CTA ─────────────────── */}
      <section
        id="kontakt"
        className="relative py-28 md:py-40 bg-ink text-paper-soft overflow-hidden isolate"
      >
        <div className="noise-overlay opacity-25" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 500px at 20% 30%, rgba(27, 157, 238, 0.20), transparent 60%), radial-gradient(700px 400px at 90% 80%, rgba(201, 99, 63, 0.10), transparent 60%)",
          }}
        />

        <div className="container-thin relative">
          <div className="flex items-baseline gap-3 mb-12">
            <span className="italic-display text-2xl text-terracotta-soft">
              §VII
            </span>
            <span className="text-[10px] tracking-[0.32em] uppercase text-paper-soft/55">
              Jetzt anfragen
            </span>
          </div>

          <h2 className="t-display max-w-3xl mb-10">
            Sprechen wir über Ihr{" "}
            <span className="italic-display">Objekt.</span>
          </h2>

          <p className="text-[1.05rem] text-paper-soft/75 max-w-xl mb-12 leading-relaxed">
            Schreiben Sie uns kurz, was gereinigt werden soll. Wir melden uns
            innerhalb von 24 Stunden und vereinbaren einen kostenlosen
            Vor-Ort-Termin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <a
              href="mailto:kontakt@rsa-gebaeudeservice.de"
              className="btn-ink !bg-paper-soft !text-ink !border-paper-soft hover:!bg-azur hover:!text-paper-soft hover:!border-azur"
            >
              <span>kontakt@rsa-gebaeudeservice.de</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M3 5l6 5 6-5M3 5v9h12V5M3 5h12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </a>
            <a
              href="tel:+4968310000000"
              className="btn-ghost !text-paper-soft !border-paper-soft/35 hover:!bg-paper-soft hover:!text-ink"
            >
              <span>+49 6831 · ___ ___</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M4.5 3l2.5 2.5-2 2c.5 2 3 4.5 5 5l2-2 2.5 2.5-1.5 1.5c-3 1-11-5-11-11L4.5 3Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Trust foot */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-[0.78rem] text-paper-soft/55 max-w-3xl">
            {[
              "Versicherte Betriebs­haftpflicht",
              "Tariflohn nach Gebäude­reiniger­tarif",
              "Eigene, fest zugeteilte Crew",
              "Festpreis schriftlich, vorab",
            ].map((s) => (
              <div key={s} className="flex items-baseline gap-2">
                <span className="text-terracotta-soft">·</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
