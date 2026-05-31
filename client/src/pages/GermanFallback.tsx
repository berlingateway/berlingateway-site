/**
 * GermanFallback — /de
 * German language fallback entry point.
 * NOT a full German website — language fallback + 404 prevention only.
 */

const FONT = { fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" };
const NAVY = "#0B1C2C";
const SLATE_TEXT = "#94a3b8";
const SLATE_BODY = "#64748b";
const WHITE = "#f8fafc";

const DE_PAGES = [
  { href: "/de/rehabilitation-deutschland", label: "Rehabilitation in Deutschland" },
  { href: "/de/rehabilitation-kriegsverletzungen-deutschland", label: "Rehabilitation nach Kriegsverletzungen" },
  { href: "/de/prothetik-deutschland", label: "Prothetik und Prothesenversorgung" },
  { href: "/de/spinale-rehabilitation-deutschland", label: "Spinale Rehabilitation" },
  { href: "/de/neurologische-rehabilitation-deutschland", label: "Neurologische Rehabilitation" },
  { href: "/de/medizinische-zweitbewertung-deutschland", label: "Medizinische Zweitmeinung" },
  { href: "/de/langzeit-rehabilitation-deutschland", label: "Langzeit-Rehabilitation" },
  { href: "/de/orthopaedie-deutschland", label: "Orthopädie in Deutschland" },
];

export default function GermanFallback() {
  return (
    <div style={{ ...FONT, background: "#fff", color: NAVY, minHeight: "100vh" }}>
      {/* Meta */}
      <title>Medical Care Germany | Berlin</title>
      <meta
        name="description"
        content="Medical Care Germany — strukturierter medizinischer Zugang zum deutschen Gesundheitssystem für internationale Patienten, Botschaften und institutionelle Partner."
      />
      <link rel="canonical" href="https://medicalcaregermany.com/de" />
      <link rel="alternate" hrefLang="ar" href="https://medicalcaregermany.com/ar" />
      <link rel="alternate" hrefLang="en" href="https://medicalcaregermany.com/" />
      <link rel="alternate" hrefLang="de" href="https://medicalcaregermany.com/de" />
      <link rel="alternate" hrefLang="x-default" href="https://medicalcaregermany.com/" />

      {/* ── HERO ── */}
      <section style={{ background: NAVY, padding: "72px 24px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: SLATE_TEXT, textTransform: "uppercase", marginBottom: 20 }}>
            Medizinische Koordination · Berlin
          </p>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 500, color: WHITE, lineHeight: 1.45, marginBottom: 18 }}>
            Komplexe Fälle brauchen den richtigen Weg ins deutsche Gesundheitssystem.
          </h1>
          <p style={{ fontSize: 15, color: SLATE_TEXT, lineHeight: 1.85, maxWidth: 560, margin: "0 auto 32px" }}>
            Medical Care Germany koordiniert den Zugang zu spezialisierten Ärzten und Universitätskliniken in Deutschland — für internationale Patienten, arabischsprachige Ärzte und institutionelle Partner.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#submit-file"
              style={{ display: "inline-block", padding: "12px 28px", background: "#fff", color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}
            >
              Unterlagen einreichen
            </a>
            <a
              href="/send-medical-reports"
              style={{ display: "inline-block", padding: "12px 28px", background: "transparent", color: SLATE_TEXT, fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      {/* ── LANGUAGE NAVIGATION ── */}
      <section style={{ background: "#f8fafc", padding: "48px 24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: SLATE_BODY, textTransform: "uppercase", marginBottom: 20 }}>
            Sprachauswahl
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" style={{ padding: "10px 24px", background: NAVY, color: "#fff", fontSize: 13, textDecoration: "none" }}>
              English
            </a>
            <a href="/ar" style={{ padding: "10px 24px", background: NAVY, color: "#fff", fontSize: 13, textDecoration: "none" }}>
              العربية
            </a>
            <a href="/de" style={{ padding: "10px 24px", background: "#e2e8f0", color: NAVY, fontSize: 13, textDecoration: "none", fontWeight: 600 }}>
              Deutsch (aktiv)
            </a>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE GERMAN PAGES ── */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: SLATE_BODY, textTransform: "uppercase", marginBottom: 12 }}>
            Verfügbare deutschsprachige Seiten
          </p>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 500, color: NAVY, marginBottom: 32, lineHeight: 1.5 }}>
            Medizinische Koordination in Deutschland
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {DE_PAGES.map((p) => (
              <a
                key={p.href}
                href={p.href}
                style={{ background: "#fff", padding: "20px 24px", display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: NAVY, fontSize: 14, lineHeight: 1.5 }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", flexShrink: 0 }} />
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBMIT CTA ── */}
      <section style={{ background: NAVY, padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 500, color: WHITE, marginBottom: 16, lineHeight: 1.5 }}>
            Sie haben einen Fall — wir kennen den richtigen Ansprechpartner.
          </h2>
          <p style={{ fontSize: 14, color: SLATE_TEXT, lineHeight: 1.8, marginBottom: 28 }}>
            Senden Sie uns die medizinischen Unterlagen. Ein Koordinator meldet sich innerhalb von 24 Stunden.
          </p>
          <a
            href="#submit-file"
            style={{ display: "inline-block", padding: "13px 32px", background: "#fff", color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}
          >
            Jetzt Unterlagen einreichen
          </a>
        </div>
      </section>

      {/* ── TALLY FORM ── */}
      <section id="submit-file" style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: SLATE_BODY, textTransform: "uppercase", marginBottom: 12 }}>
            Unterlagen einreichen
          </p>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 500, color: NAVY, marginBottom: 32, lineHeight: 1.5 }}>
            Medizinische Unterlagen senden
          </h2>
          <iframe
            src="https://tally.so/embed/68MrBP?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            style={{ minHeight: "1200px", border: "none" }}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Medical Care Germany — Unterlagen einreichen"
          />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
        <p style={{ fontSize: 12, color: SLATE_BODY, marginBottom: 8 }}>
          Medical Care Germany | Berlin
        </p>
        <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 16 }}>
          info@medicalcaregermany.com
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" style={{ fontSize: 12, color: SLATE_BODY, textDecoration: "none" }}>English</a>
          <a href="/ar" style={{ fontSize: 12, color: SLATE_BODY, textDecoration: "none" }}>العربية</a>
          <a href="/send-medical-reports" style={{ fontSize: 12, color: SLATE_BODY, textDecoration: "none" }}>Submit Case</a>
        </div>
      </footer>
    </div>
  );
}
