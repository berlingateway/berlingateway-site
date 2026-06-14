import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const NAVY = "#0B1C2C";
const GOLD = "#C8A96A";
const SLATE = "#F8F9FA";

const PATH = "/de/orthopaedie-deutschland";

const CASES = [
  "Posttraumatische Gelenk- und Knochenschäden",
  "Verletzungsfolgen nach Unfällen oder Kriegseinwirkung",
  "Revisionsoperationen nach fehlgeschlagenen Eingriffen",
  "Prothetik und Orthopädie nach Amputation",
  "Wirbelsäulendeformitäten und vertebrale Instabilität",
  "Orthopädische Erkrankungen bei Kindern",
  "Knochentumoren und skelettale Onkologie",
  "Sportverletzungen mit Bedarf an chirurgischer Beurteilung",
];

const PATHWAY = [
  { n: "1", title: "Dokumenteneinreichung", body: "Einreichung von MRT, CT, Röntgenaufnahmen, Operationsberichten und klinischer Anamnese zur Erstbewertung." },
  { n: "2", title: "Spezialistenzuordnung", body: "Identifikation des geeigneten orthopädischen Spezialisten oder interdisziplinären Teams im deutschen Versorgungsnetz." },
  { n: "3", title: "Diagnostische Bewertung", body: "Strukturierte klinische Beurteilung in Deutschland einschließlich Bildgebungsanalyse und Fachkonsultation." },
  { n: "4", title: "Behandlungsplanung", body: "Erstellung eines koordinierten Behandlungsplans — operativ, rehabilitativ oder prothetisch — auf Basis der klinischen Befunde." },
  { n: "5", title: "Laufende Koordination", body: "Kontinuierliches Fallmanagement während der gesamten Behandlungs- und Rehabilitationsphase." },
];

const DOCS = [
  "Aktuelle MRT- oder CT-Aufnahmen (nicht älter als 12 Monate)",
  "Röntgenaufnahmen der betroffenen Gelenke oder Knochen",
  "Operationsberichte aus früheren Eingriffen",
  "Prothetik- oder Orthopädiebewertungen (falls vorhanden)",
  "Zusammenfassung des behandelnden Arztes",
  "Aktuelle Medikamentenliste",
];

const RELATED = [
  { href: "/de/rehabilitation-kriegsverletzungen-deutschland", label: "Rehabilitation Kriegsverletzungen" },
  { href: "/de/prothetik-deutschland", label: "Prothetik" },
  { href: "/de/spinale-rehabilitation-deutschland", label: "Spinale Rehabilitation" },
  { href: "/de/rehabilitation-deutschland", label: "Rehabilitation" },
  { href: "/submit-case", label: "Berichte einreichen" },
];

export default function OrthopaedeDE() {
  return (
    <>
      <HreflangTags currentPath={PATH} />
      <SmartNavLayer currentPath={PATH} />
      <div style={{ fontFamily: "'Inter', sans-serif", direction: "ltr", color: "#1a1a1a" }}>

        {/* HERO */}
        <section style={{ background: NAVY, color: "#fff", padding: "80px 24px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
              Medical Care Germany · Orthopädie
            </p>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 300, lineHeight: 1.25, marginBottom: 20 }}>
              Orthopädie & Knochenchirurgie in Deutschland
            </h1>
            <p style={{ fontSize: 18, color: "#b0bec5", fontWeight: 300, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>
              Strukturierte Koordination für komplexe orthopädische Fälle — von Traumafolgen und Revisionsoperationen bis zu Prothetik und pädiatrischen Knochenerkrankungen.
            </p>
            <a
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: GOLD,
                color: NAVY,
                padding: "14px 36px",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                letterSpacing: 0.5,
              }}
            >
              Medizinische Berichte zur Bewertung einreichen
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ background: SLATE, padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 26, fontWeight: 400, color: NAVY, marginBottom: 20 }}>
              Orthopädische Fallkoordination in Deutschland
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "#444", marginBottom: 16 }}>
              Die orthopädischen und unfallchirurgischen Zentren in Deutschland arbeiten innerhalb eines strukturierten klinischen Rahmens, der Fachkompetenz, fortschrittliche Bildgebung und multidisziplinäre Rehabilitation verbindet. Medical Care Germany koordiniert den Zugang zu diesem Rahmen für internationale Patienten mit komplexen Knochen-, Gelenk- und Bewegungsapparaterkrankungen.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "#444" }}>
              Fälle werden anhand klinischer Dokumentation, Bildqualität und der Komplexität des erforderlichen Eingriffs bewertet. Die Koordination umfasst Erstbewertung, chirurgische Konsultation, Prothetikbewertung und postoperative Rehabilitationsplanung.
            </p>
          </div>
        </section>

        {/* CASES */}
        <section style={{ background: NAVY, padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 24, fontWeight: 400, color: "#fff", marginBottom: 32 }}>
              Behandelte Fallarten
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {CASES.map((c, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                  <span style={{ color: GOLD, fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>—</span>
                  <span style={{ color: "#cfd8dc", fontSize: 16, lineHeight: 1.7 }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PATHWAY */}
        <section style={{ background: SLATE, padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 24, fontWeight: 400, color: NAVY, marginBottom: 36 }}>
              Koordinationsablauf
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {PATHWAY.map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    background: GOLD, color: NAVY, width: 36, height: 36, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 14, flexShrink: 0,
                  }}>{s.n}</div>
                  <div>
                    <p style={{ fontWeight: 600, color: NAVY, marginBottom: 6, fontSize: 16 }}>{s.title}</p>
                    <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section style={{ background: NAVY, padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 24, fontWeight: 400, color: "#fff", marginBottom: 28 }}>
              Erforderliche Unterlagen zur Erstbewertung
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {DOCS.map((d, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                  <span style={{ color: GOLD, fontSize: 18, flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#cfd8dc", fontSize: 15, lineHeight: 1.7 }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: SLATE, padding: "64px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: 24, fontWeight: 400, color: NAVY, marginBottom: 16 }}>
              Orthopädische Berichte zur Bewertung einreichen
            </h2>
            <p style={{ color: "#555", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
              Alle Einreichungen werden mit klinischer Diskretion geprüft. Die Erstbewertung basiert auf der Dokumentationsqualität und der Fallkomplexität.
            </p>
            <a
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: NAVY,
                color: "#fff",
                padding: "14px 40px",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Berichte einreichen
            </a>
          </div>
        </section>

        {/* RELATED */}
        <section style={{ background: "#fff", padding: "48px 24px", borderTop: "1px solid #e0e0e0" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ color: "#888", fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 20 }}>
              Verwandte Bereiche
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {RELATED.map((r) => (
                <a key={r.href} href={r.href} style={{
                  color: NAVY, fontSize: 14, textDecoration: "none",
                  border: `1px solid ${NAVY}`, padding: "8px 18px",
                  transition: "background 0.2s",
                }}>
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: NAVY, color: "#607d8b", padding: "40px 24px", textAlign: "center" }}>
          <p style={{ fontSize: 13, marginBottom: 8 }}>Medical Care Germany · Berlin</p>
          <p style={{ fontSize: 12, color: "#455a64" }}>
            Koordination innerhalb etablierter klinischer Versorgungsstrukturen.
          </p>
        </footer>
      </div>
    </>
  );
}
