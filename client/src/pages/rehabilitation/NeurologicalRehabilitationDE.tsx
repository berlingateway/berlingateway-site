import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
/**
 * /de/neurologische-rehabilitation-deutschland
 * MCG Institutional Authority Page — Neurologische Rehabilitation in Deutschland
 * Layout: MCG master system — dark navy hero, alternating sections, institutional footer
 */

const NAVY = "#0B1C2C";
const NAVY_BORDER = "#1e3a52";
const SLATE_BG = "#f8fafc";
const MUTED = "#94a3b8";
const BODY = "#475569";
const WHITE = "#f8fafc";

export default function NeurologicalRehabilitationDE() {
  return (
    <div style={{ background: "#fff", color: NAVY, fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <SmartNavLayer currentPath="/de/neurologische-rehabilitation-deutschland" />
      <HreflangTags currentPath="/de/neurologische-rehabilitation-deutschland" />
      <title>Neurologische Rehabilitation Deutschland | Schlaganfall und Hirnverletzungsrehabilitation</title>
      <meta name="description" content="Medical Care Germany koordiniert neurologische Rehabilitationspfade für Schlaganfall, Schädel-Hirn-Trauma und komplexe neurologische Erkrankungen in deutschen Fachzentren." />
      <link rel="canonical" href="https://medicalcaregermany.com/de/neurologische-rehabilitation-deutschland" />
      <link rel="alternate" hrefLang="en" href="https://medicalcaregermany.com/en/neurological-rehabilitation-germany" />

      <div style={{ background: NAVY, padding: "10px 24px", textAlign: "center" }}>
        <a href="mailto:info@medicalcaregermany.com" style={{ fontSize: 12, color: MUTED, textDecoration: "none" }}>info@medicalcaregermany.com</a>
      </div>

      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50 }}>
        <div>
          <a href="/" style={{ fontSize: 17, fontWeight: 600, color: NAVY, textDecoration: "none" }}>Medical Care Germany</a>
          <p style={{ fontSize: 10, color: MUTED, margin: "2px 0 0", letterSpacing: "0.1em", textTransform: "uppercase" }}>Institutional Clinical Coordination Authority</p>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="/de/rehabilitation-deutschland" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>← Rehabilitation Hub</a>
          <a href="/ar/neurological-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>العربية</a>
          <a href="/en/neurological-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>English</a>
          <a href="/send-medical-reports" style={{ fontSize: 12, fontWeight: 500, color: "#fff", background: NAVY, padding: "8px 18px", textDecoration: "none" }}>Medizinische Unterlagen senden</a>
        </div>
      </nav>

      <section style={{ background: NAVY, padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Medical Care Germany — Neurologische Rehabilitation</p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: WHITE, lineHeight: 1.4, marginBottom: 20 }}>Neurologische Rehabilitation in Deutschland</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>Strukturierte Koordination neurologischer Rehabilitationspfade für Schlaganfall, Hirnverletzung und komplexe neurologische Erkrankungen.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Medizinische Unterlagen senden</a>
            <a href="https://wa.me/4915781497451" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 28px", background: "transparent", color: MUTED, fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>Erstbewertung anfordern</a>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "64px 24px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>Neurologische Rehabilitation erfordert frühzeitige, intensive Fachintervention</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.9, marginBottom: 20 }}>Die neurologische Erholung nach Schlaganfall, Schädel-Hirn-Trauma oder anderen neurologischen Ereignissen hängt entscheidend von der Qualität und Intensität der Frührehabilitation ab. Deutsche neurologische Rehabilitationszentren bieten intensive, multidisziplinäre Programme.</p>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>Medical Care Germany koordiniert den Zugang zu neurologischen Rehabilitationsprogrammen für internationale Patienten, die eine strukturierte Pfadverwaltung benötigen.</p>
          <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Unterlagen für Erstbewertung einreichen</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Falltypen</p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>Neurologische Rehabilitationsfälle</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
              <div key="Schlaganfallrehabilitation: Akut-, Subakut- und Chronikphase" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Schlaganfallrehabilitation: Akut-, Subakut- und Chronikphase</p>
              </div>
              <div key="Schädel-Hirn-Trauma neurologische Rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Schädel-Hirn-Trauma neurologische Rehabilitation</p>
              </div>
              <div key="Rückenmarksverletzung neurologisches Erholungsprogramm" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Rückenmarksverletzung neurologisches Erholungsprogramm</p>
              </div>
              <div key="Multiple Sklerose Rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Multiple Sklerose Rehabilitation</p>
              </div>
              <div key="Parkinson-Krankheit Rehabilitation und Bewegungstherapie" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Parkinson-Krankheit Rehabilitation und Bewegungstherapie</p>
              </div>
              <div key="Guillain-Barré-Syndrom Erholungsprogramm" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Guillain-Barré-Syndrom Erholungsprogramm</p>
              </div>
              <div key="Post-Enzephalitis neurologische Rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Post-Enzephalitis neurologische Rehabilitation</p>
              </div>
              <div key="Inkomplette neurologische Erholung nach vorheriger Rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Inkomplette neurologische Erholung nach vorheriger Rehabilitation</p>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 24, lineHeight: 1.55 }}>Unterlagen für die Erstbewertung</h2>
            <div key="Neurologisches Ereignis-Zusammenfassung und Entlassungsbrief" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Neurologisches Ereignis-Zusammenfassung und Entlassungsbrief</p>
            </div>
            <div key="Gehirn-MRT und CT-Bildgebung" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Gehirn-MRT und CT-Bildgebung</p>
            </div>
            <div key="Neurologische Bewertung einschließlich Funktionsskalen" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Neurologische Bewertung einschließlich Funktionsskalen</p>
            </div>
            <div key="Aktueller Funktionsstatus und Rehabilitationsziele" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Aktueller Funktionsstatus und Rehabilitationsziele</p>
            </div>
            <div key="Frühere Rehabilitationsberichte" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Frühere Rehabilitationsberichte</p>
            </div>
            <div key="Überweisungsschreiben" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Überweisungsschreiben</p>
            </div>
          <a href="/send-medical-reports" style={{ display: "inline-block", marginTop: 24, padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Unterlagen für Bewertung einreichen</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Verwandte Seiten</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a key="/de/rehabilitation-deutschland" href="/de/rehabilitation-deutschland" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Rehabilitation Hub</a>
              <a key="/de/spinale-rehabilitation-deutschland" href="/de/spinale-rehabilitation-deutschland" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Spinale Rehabilitation</a>
              <a key="/de/medizinische-zweitbewertung-deutschland" href="/de/medizinische-zweitbewertung-deutschland" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Medizinische Zweitbewertung</a>
              <a key="/en/neurological-rehabilitation-germany" href="/en/neurological-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>English Version</a>
          </div>
        </div>
      </section>

      <footer style={{ background: NAVY, padding: "48px 24px 32px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", borderTop: `1px solid ${NAVY_BORDER}`, paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#475569" }}>Tätig innerhalb etablierter klinischer Koordinationsrahmen.</p>
          <p style={{ fontSize: 11, color: "#334155", marginTop: 6 }}>Medical Care Germany · Berlin, Deutschland</p>
        </div>
      </footer>

    </div>
  );
}
