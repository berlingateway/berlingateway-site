/**
 * /en/neurological-rehabilitation-germany
 * MCG Institutional Authority Page — Neurological Rehabilitation in Germany
 * Layout: MCG master system — dark navy hero, alternating sections, institutional footer
 */

const NAVY = "#0B1C2C";
const NAVY_BORDER = "#1e3a52";
const SLATE_BG = "#f8fafc";
const MUTED = "#94a3b8";
const BODY = "#475569";
const WHITE = "#f8fafc";

export default function NeurologicalRehabilitationEN() {
  return (
    <div style={{ background: "#fff", color: NAVY, fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <title>Neurological Rehabilitation in Germany | Stroke and Brain Injury Rehabilitation</title>
      <meta name="description" content="Medical Care Germany coordinates neurological rehabilitation pathways for stroke, traumatic brain injury, and complex neurological conditions at German specialist centres." />
      <link rel="canonical" href="https://www.medicalcaregermany.com/en/neurological-rehabilitation-germany" />
      <link rel="alternate" hrefLang="ar" href="https://www.medicalcaregermany.com/ar/neurological-rehabilitation-germany" />
      <link rel="alternate" hrefLang="de" href="https://www.medicalcaregermany.com/de/neurologische-rehabilitation-deutschland" />

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
          <a href="/ar/neurological-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>العربية</a>
          <a href="/de/neurologische-rehabilitation-deutschland" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>Deutsch</a>
          <a href="/send-medical-reports" style={{ fontSize: 12, fontWeight: 500, color: "#fff", background: NAVY, padding: "8px 18px", textDecoration: "none" }}>Send Medical Reports</a>
        </div>
      </nav>

      <section style={{ background: NAVY, padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Medical Care Germany — Neurological Rehabilitation</p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: WHITE, lineHeight: 1.4, marginBottom: 20 }}>Neurological Rehabilitation in Germany</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>Structured coordination of neurological rehabilitation pathways for stroke, brain injury, and complex neurological conditions.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Evaluation</a>
            <a href="https://wa.me/4915781497451" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 28px", background: "transparent", color: MUTED, fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>Request Initial Assessment</a>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "64px 24px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>Neurological rehabilitation requires early, intensive, specialist intervention</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.9, marginBottom: 20 }}>Neurological recovery following stroke, traumatic brain injury, or other neurological events is critically dependent on the quality and intensity of early rehabilitation. German neurological rehabilitation centres provide intensive, multidisciplinary programmes with specialist expertise in neuroplasticity-based rehabilitation, robotic therapy, and functional recovery.</p>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>Medical Care Germany coordinates access to neurological rehabilitation programmes for international patients requiring structured pathway management, including cases with complex neurological profiles or incomplete recovery following prior rehabilitation.</p>
          <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Initial Evaluation</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Case Types Reviewed</p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>Neurological Rehabilitation Cases</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
              <div key="Stroke rehabilitation: acute, subacute, and chronic phase" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Stroke rehabilitation: acute, subacute, and chronic phase</p>
              </div>
              <div key="Traumatic brain injury neurological rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Traumatic brain injury neurological rehabilitation</p>
              </div>
              <div key="Spinal cord injury neurological recovery programme" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Spinal cord injury neurological recovery programme</p>
              </div>
              <div key="Multiple sclerosis rehabilitation and functional maintenance" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Multiple sclerosis rehabilitation and functional maintenance</p>
              </div>
              <div key="Parkinson's disease rehabilitation and movement therapy" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Parkinson's disease rehabilitation and movement therapy</p>
              </div>
              <div key="Guillain-Barré syndrome recovery programme" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Guillain-Barré syndrome recovery programme</p>
              </div>
              <div key="Post-encephalitis neurological rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Post-encephalitis neurological rehabilitation</p>
              </div>
              <div key="Incomplete neurological recovery following prior rehabilitation" style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>Incomplete neurological recovery following prior rehabilitation</p>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 24, lineHeight: 1.55 }}>Documentation required for initial assessment</h2>
            <div key="Neurological event summary and acute hospital discharge report" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Neurological event summary and acute hospital discharge report</p>
            </div>
            <div key="Brain MRI and CT imaging" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Brain MRI and CT imaging</p>
            </div>
            <div key="Neurological assessment including functional scales" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Neurological assessment including functional scales</p>
            </div>
            <div key="Current functional status and rehabilitation goals" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Current functional status and rehabilitation goals</p>
            </div>
            <div key="Prior rehabilitation programme reports" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Prior rehabilitation programme reports</p>
            </div>
            <div key="Referring neurologist or rehabilitation physician summary" style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>Referring neurologist or rehabilitation physician summary</p>
            </div>
          <a href="/send-medical-reports" style={{ display: "inline-block", marginTop: 24, padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Evaluation</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Related Pages</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a key="/en/advanced-rehabilitation-germany" href="/en/advanced-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Advanced Rehabilitation Hub</a>
              <a key="/en/spinal-rehabilitation-germany" href="/en/spinal-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Spinal Rehabilitation</a>
              <a key="/en/second-medical-evaluation-germany" href="/en/second-medical-evaluation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Second Medical Evaluation</a>
              <a key="/ar/neurological-rehabilitation-germany" href="/ar/neurological-rehabilitation-germany" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>النسخة العربية</a>
              <a key="/de/neurologische-rehabilitation-deutschland" href="/de/neurologische-rehabilitation-deutschland" style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>Deutsche Version</a>
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
