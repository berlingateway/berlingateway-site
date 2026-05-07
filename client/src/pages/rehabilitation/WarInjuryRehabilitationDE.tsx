import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
/**
 * /de/rehabilitation-kriegsverletzungen-deutschland
 * MCG Institutional Authority Page — Rehabilitation von Kriegsverletzungen in Deutschland
 * Layout: MCG master system — dark navy hero, alternating sections, institutional footer
 */

const NAVY = "#0B1C2C";
const NAVY_BORDER = "#1e3a52";
const SLATE_BG = "#f8fafc";
const MUTED = "#94a3b8";
const BODY = "#475569";
const WHITE = "#f8fafc";

export default function WarInjuryRehabilitationDE() {
  return (
    <div style={{ background: "#fff", color: NAVY, fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <SmartNavLayer currentPath="/de/rehabilitation-kriegsverletzungen-deutschland" />
      <HreflangTags currentPath="/de/rehabilitation-kriegsverletzungen-deutschland" />
      <title>Rehabilitation Kriegsverletzungen Deutschland | Komplexe Traumarehabilitation</title>
      <meta name="description" content="Medical Care Germany koordiniert strukturierte Rehabilitationspfade für Kriegsverletzungen und komplexe Traumafälle innerhalb des deutschen Rehabilitationssystems." />
      <link rel="canonical" href="https://www.medicalcaregermany.com/de/rehabilitation-kriegsverletzungen-deutschland" />
      <link rel="alternate" hrefLang="en" href="https://www.medicalcaregermany.com/en/war-injury-rehabilitation-germany" />

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
          <a href="/ar/war-injury-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>العربية</a>
          <a href="/en/war-injury-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>English</a>
          <a href="/send-medical-reports" style={{ fontSize: 12, fontWeight: 500, color: "#fff", background: NAVY, padding: "8px 18px", textDecoration: "none" }}>Medizinische Unterlagen senden</a>
        </div>
      </nav>

      <section style={{ background: NAVY, padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Medical Care Germany — Rehabilitation Kriegsverletzungen</p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: WHITE, lineHeight: 1.4, marginBottom: 20 }}>Rehabilitation von Kriegsverletzungen in Deutschland</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>Strukturierte Koordination von Rehabilitationspfaden für komplexe Kriegsverletzungen und Kampftrauma.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Medizinische Unterlagen senden</a>
            <a href="https://wa.me/4915781497451" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 28px", background: "transparent", color: MUTED, fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>Erstbewertung anfordern</a>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "64px 24px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>Komplexe Kriegsverletzungen erfordern strukturierte Rehabilitationskoordination</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.9, marginBottom: 20 }}>Kriegsverletzungen weisen ein besonderes klinisches Profil auf: Polytrauma, Explosionsverletzungen, Amputationen, Rückenmarksverletzungen und Schädel-Hirn-Traumata treten häufig kombiniert auf und erfordern eine koordinierte multidisziplinäre Rehabilitation.</p>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>Medical Care Germany koordiniert die Dokumentationsvorbereitung, Zentrumsidentifikation und den Aufnahmeprozess für Kriegsverletzungs-Rehabilitationsfälle.</p>
          <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Unterlagen für Erstbewertung einreichen</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Falltypen</p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>Kriegsverletzungs- und Traumafälle</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
              <div key="Explosionsverletzungen und Polytrauma aus bewaffneten Konflikten" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Explosionsverletzungen und Polytrauma aus bewaffneten Konflikten</p>
              </div>
              <div key="Schusswundrehabilitation mit neurologischem Defizit" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Schusswundrehabilitation mit neurologischem Defizit</p>
              </div>
              <div key="Amputationsrehabilitation und Prothesenversorgung" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Amputationsrehabilitation und Prothesenversorgung</p>
              </div>
              <div key="Rückenmarksverletzung durch Kampftrauma" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Rückenmarksverletzung durch Kampftrauma</p>
              </div>
              <div key="Schädel-Hirn-Trauma nach Explosion oder Aufprall" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Schädel-Hirn-Trauma nach Explosion oder Aufprall</p>
              </div>
              <div key="Komplexe Frakturfolgen mit funktioneller Rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Komplexe Frakturfolgen mit funktioneller Rehabilitation</p>
              </div>
              <div key="Verbrennungsrehabilitation und rekonstruktive Nachsorge" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Verbrennungsrehabilitation und rekonstruktive Nachsorge</p>
              </div>
              <div key="Posttraumatische Belastungsstörung im multidisziplinären Rahmen" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Posttraumatische Belastungsstörung im multidisziplinären Rahmen</p>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 24, lineHeight: 1.55 }}>Unterlagen für die Erstbewertung</h2>
            <div key="Akutkrankenhaus-Entlassungsbrief und Operationsberichte" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Akutkrankenhaus-Entlassungsbrief und Operationsberichte</p>
            </div>
            <div key="Aktuelle Bildgebung: Röntgen, CT, MRT" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Aktuelle Bildgebung: Röntgen, CT, MRT</p>
            </div>
            <div key="Neurologische Befunde falls zutreffend" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Neurologische Befunde falls zutreffend</p>
            </div>
            <div key="Funktionsstatus und aktuelle Mobilitätsbewertung" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Funktionsstatus und aktuelle Mobilitätsbewertung</p>
            </div>
            <div key="Frühere Rehabilitationsberichte falls vorhanden" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Frühere Rehabilitationsberichte falls vorhanden</p>
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
              <a key="/de/prothetik-deutschland" href="/de/prothetik-deutschland" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Prothetik Deutschland</a>
              <a key="/de/neurologische-rehabilitation-deutschland" href="/de/neurologische-rehabilitation-deutschland" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Neurologische Rehabilitation</a>
              <a key="/en/war-injury-rehabilitation-germany" href="/en/war-injury-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>English Version</a>
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
