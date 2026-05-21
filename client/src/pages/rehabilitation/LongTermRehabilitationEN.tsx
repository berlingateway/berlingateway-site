import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
/**
 * /en/long-term-rehabilitation-germany
 * MCG Institutional Authority Page — Long-Term Rehabilitation in Germany
 * Layout: MCG master system — dark navy hero, alternating sections, institutional footer
 */

const NAVY = "#0B1C2C";
const NAVY_BORDER = "#1e3a52";
const SLATE_BG = "#f8fafc";
const MUTED = "#94a3b8";
const BODY = "#475569";
const WHITE = "#f8fafc";

export default function LongTermRehabilitationEN() {
  return (
    <div style={{ background: "#fff", color: NAVY, fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <SmartNavLayer currentPath="/en/long-term-rehabilitation-germany" />
      <HreflangTags currentPath="/en/long-term-rehabilitation-germany" />
      <title>Long-Term Rehabilitation in Germany | Sustained Rehabilitation Pathway Coordination</title>
      <meta name="description" content="Medical Care Germany coordinates long-term rehabilitation pathways for complex cases requiring sustained multidisciplinary rehabilitation within Germany." />
      <link rel="canonical" href="https://medicalcaregermany.com/en/long-term-rehabilitation-germany" />
      <link rel="alternate" hrefLang="ar" href="https://medicalcaregermany.com/ar/long-term-rehabilitation-germany" />
      <link rel="alternate" hrefLang="de" href="https://medicalcaregermany.com/de/langzeit-rehabilitation-deutschland" />

      <div style={{ background: NAVY, padding: "10px 24px", textAlign: "center" }}>
        <a href="mailto:info@medicalcaregermany.com" style={{ fontSize: 12, color: MUTED, textDecoration: "none" }}>info@medicalcaregermany.com</a>
      </div>

      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50 }}>
        <div>
          <a href="/" style={{ fontSize: 17, fontWeight: 600, color: NAVY, textDecoration: "none" }}>Medical Care Germany</a>
          <p style={{ fontSize: 10, color: MUTED, margin: "2px 0 0", letterSpacing: "0.1em", textTransform: "uppercase" }}>Institutional Clinical Coordination Authority</p>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="/en/advanced-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>← Rehabilitation Hub</a>
          <a href="/ar/long-term-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>العربية</a>
          <a href="/de/langzeit-rehabilitation-deutschland" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>Deutsch</a>
          <a href="/send-medical-reports" style={{ fontSize: 12, fontWeight: 500, color: "#fff", background: NAVY, padding: "8px 18px", textDecoration: "none" }}>Send Medical Reports</a>
        </div>
      </nav>

      <section style={{ background: NAVY, padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Medical Care Germany — Long-Term Rehabilitation</p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: WHITE, lineHeight: 1.4, marginBottom: 20 }}>Long-Term Rehabilitation in Germany</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>Structured coordination of sustained rehabilitation pathways for complex cases requiring long-term multidisciplinary care.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Evaluation</a>
            <a href="https://wa.me/4917647757767" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 28px", background: "transparent", color: MUTED, fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>Request Initial Assessment</a>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "64px 24px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>Some rehabilitation cases require sustained long-term coordination</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.9, marginBottom: 20 }}>Complex neurological, spinal, and trauma cases may require sustained rehabilitation over months or years, with multiple programme phases, specialist reviews, and adaptive treatment planning. Germany's rehabilitation system provides structured frameworks for long-term rehabilitation management within specialist centres.</p>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>Medical Care Germany coordinates long-term rehabilitation pathways for cases requiring sustained management, including programme transitions, specialist reviews, and ongoing clinical liaison between the patient, rehabilitation team, and referring physician.</p>
          <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Initial Evaluation</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Case Types</p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>Long-Term Rehabilitation Cases</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
              <div key="Spinal cord injury requiring sustained multidisciplinary rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Spinal cord injury requiring sustained multidisciplinary rehabilitation</p>
              </div>
              <div key="Traumatic brain injury with prolonged recovery trajectory" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Traumatic brain injury with prolonged recovery trajectory</p>
              </div>
              <div key="Complex war injury requiring multi-phase rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Complex war injury requiring multi-phase rehabilitation</p>
              </div>
              <div key="Neurological conditions requiring ongoing functional maintenance" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Neurological conditions requiring ongoing functional maintenance</p>
              </div>
              <div key="Post-amputation rehabilitation with multiple programme phases" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Post-amputation rehabilitation with multiple programme phases</p>
              </div>
              <div key="Chronic pain management within long-term rehabilitation framework" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Chronic pain management within long-term rehabilitation framework</p>
              </div>
              <div key="Paediatric rehabilitation requiring sustained developmental support" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Paediatric rehabilitation requiring sustained developmental support</p>
              </div>
              <div key="Transition planning from acute to long-term rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Transition planning from acute to long-term rehabilitation</p>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 24, lineHeight: 1.55 }}>Documentation required for long-term pathway assessment</h2>
            <div key="Complete medical and rehabilitation history" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Complete medical and rehabilitation history</p>
            </div>
            <div key="Current functional status and rehabilitation goals" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Current functional status and rehabilitation goals</p>
            </div>
            <div key="Prior rehabilitation programme reports and outcomes" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Prior rehabilitation programme reports and outcomes</p>
            </div>
            <div key="Specialist team assessments as relevant" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Specialist team assessments as relevant</p>
            </div>
            <div key="Long-term care requirements and support needs" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Long-term care requirements and support needs</p>
            </div>
            <div key="Referring physician or rehabilitation team summary" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Referring physician or rehabilitation team summary</p>
            </div>
          <a href="/send-medical-reports" style={{ display: "inline-block", marginTop: 24, padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Evaluation</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Related Pages</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a key="/en/advanced-rehabilitation-germany" href="/en/advanced-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Advanced Rehabilitation Hub</a>
              <a key="/en/neurological-rehabilitation-germany" href="/en/neurological-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Neurological Rehabilitation</a>
              <a key="/en/spinal-rehabilitation-germany" href="/en/spinal-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Spinal Rehabilitation</a>
              <a key="/en/second-medical-evaluation-germany" href="/en/second-medical-evaluation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Second Medical Evaluation</a>
              <a key="/ar/long-term-rehabilitation-germany" href="/ar/long-term-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>النسخة العربية</a>
              <a key="/de/langzeit-rehabilitation-deutschland" href="/de/langzeit-rehabilitation-deutschland" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Deutsche Version</a>
          </div>
        </div>
      </section>

      <footer style={{ background: NAVY, padding: "48px 24px 32px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", borderTop: `1px solid ${NAVY_BORDER}`, paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#475569" }}>Operating within established clinical coordination frameworks.</p>
          <p style={{ fontSize: 11, color: "#334155", marginTop: 6 }}>Medical Care Germany · Berlin, Germany</p>
        </div>
      </footer>

    </div>
  );
}
