import Link from "next/link";
import Logo from "./Logo";

const allServices = [
  "Unterhaltsreinigung",
  "Büroreinigung",
  "Glas- & Fensterreinigung",
  "Treppenhausreinigung",
  "Bauend- / Bauschlussreinigung",
  "Grundreinigung",
  "Industrie- & Hallenreinigung",
  "Praxis- & Hygienereinigung",
  "Teppich- & Polsterreinigung",
  "Steinreinigung & -pflege",
  "Graffiti-Entfernung",
  "Fassadenreinigung",
  "Solar- & PV-Reinigung",
  "Dachreinigung",
  "Desinfektionsservice",
  "Hausmeisterservice",
  "Winterdienst",
  "Gartenpflege",
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
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper-soft overflow-hidden isolate">
      <div className="noise-overlay opacity-25" />

      {/* Soft glow up top */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, rgba(27, 157, 238, 0.16), transparent 70%)",
        }}
      />

      <div className="container-thin pt-24 pb-12 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo size={48} className="text-paper-soft" />
            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-paper-soft/65">
              Gebäudereinigung mit Anspruch — aus Saarlouis für Büros, Praxen,
              Hausverwaltungen, Industrie und Gewerbe im gesamten Saarland.
            </p>
            <div className="mt-8 space-y-1.5 text-sm">
              <a
                href="tel:+4968310000000"
                className="block text-paper-soft hover:text-azur-soft transition-colors"
              >
                +49 6831 · ___ ___
              </a>
              <a
                href="mailto:kontakt@rsa-gebaeudeservice.de"
                className="block text-paper-soft hover:text-azur-soft transition-colors"
              >
                kontakt@rsa-gebaeudeservice.de
              </a>
              <p className="text-paper-soft/55 mt-2 text-xs">
                Adresse folgt · Saarlouis · Saarland
              </p>
            </div>
          </div>

          {/* Leistungen */}
          <div className="lg:col-span-5">
            <h3 className="text-[10px] uppercase tracking-[0.32em] text-paper-soft/55 mb-6">
              Leistungen
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-[0.85rem] text-paper-soft/85">
              {allServices.map((s) => (
                <li key={s}>
                  <Link
                    href="/leistungen"
                    className="hover:text-azur-soft transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standort */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.32em] text-paper-soft/55 mb-6">
              Einsatzgebiet
            </h3>
            <ul className="space-y-2 text-[0.85rem] text-paper-soft/85">
              {cities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-20 border-t border-paper-soft/10 pt-8 overflow-hidden">
          <div className="font-display italic text-[18vw] md:text-[14vw] leading-[0.85] text-paper-soft/[0.05] whitespace-nowrap select-none tracking-tighter">
            RSA · Gebäudeservice
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-paper-soft/55 border-t border-paper-soft/10 pt-6">
          <p>
            © {new Date().getFullYear()} RSA Gebäudeservice · Saarlouis ·{" "}
            <span className="italic-display text-paper-soft/70">
              made in the Saarland
            </span>
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="hover:text-azur-soft transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-azur-soft transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
