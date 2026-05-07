import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
/**
 * /en/war-injury-rehabilitation-germany
 * War Injury Rehabilitation — MCG English Authority Page
 * Layout: MCG master system — dark navy hero, alternating sections, institutional footer
 */

const NAVY = "#0B1C2C";
const NAVY_BORDER = "#1e3a52";
const SLATE_BG = "#f8fafc";
const MUTED = "#94a3b8";
const BODY = "#475569";
const WHITE = "#f8fafc";

const CASES = [
  "Blast injury and polytrauma from armed conflict",
  "Gunshot wound rehabilitation with residual neurological deficit",
  "Amputation rehabilitation and prosthetic fitting",
  "Spinal cord injury from combat trauma",
  "Traumatic brain injury following blast or impact",
  "Complex fracture sequelae requiring functional rehabilitation",
  "Burn injury rehabilitation and reconstructive follow-up",
  "Post-traumatic stress within multidisciplinary rehabilitation",
];

export default function WarInjuryRehabilitationEN() {
  return (
    <div style={{ background: "#fff", color: NAVY, fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <SmartNavLayer currentPath="/en/war-injury-rehabilitation-germany" />
      <HreflangTags currentPath="/en/war-injury-rehabilitation-germany" />
      <title>War Injury Rehabilitation in Germany | Complex Trauma Rehabilitation Coordination</title>
      <meta name="description" content="Medical Care Germany coordinates structured rehabilitation pathways for war injury and complex trauma cases within Germany's specialist rehabilitation system." />
      <link rel="canonical" href="https://www.medicalcaregermany.com/en/war-injury-rehabilitation-germany" />
      <link rel="alternate" hrefLang="ar" href="https://www.medicalcaregermany.com/ar/war-injury-rehabilitation-germany" />
      <link rel="alternate" hrefLang="de" href="https://www.medicalcaregermany.com/de/rehabilitation-kriegsverletzungen-deutschland" />
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
          <a href="/en/advanced-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>← Rehabilitation Hub</a>
          <a href="/ar/war-injury-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>العربية</a>
          <a href="/de/rehabilitation-kriegsverletzungen-deutschland" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>Deutsch</a>
          <a href="/send-medical-reports" style={{ fontSize: 12, fontWeight: 500, color: "#fff", background: NAVY, padding: "8px 18px", textDecoration: "none" }}>Send Medical Reports</a>
        </div>
      </nav>

      <section style={{ background: NAVY, padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Medical Care Germany — War Injury Rehabilitation</p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: WHITE, lineHeight: 1.4, marginBottom: 20 }}>War Injury Rehabilitation in Germany</h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>
            Structured coordination of rehabilitation pathways for complex war injury and combat trauma cases within Germany's specialist rehabilitation system.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Evaluation</a>
            <a href="https://wa.me/4915781497451" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 28px", background: "transparent", color: MUTED, fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>Request Initial Assessment</a>
          </div>
        </div>
      </section>

      <section style={{ background: NAVY, padding: "64px 24px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>Complex war injury requires structured rehabilitation coordination</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.9, marginBottom: 20 }}>
            War injuries present a distinct clinical profile: polytrauma, blast injury, amputation, spinal cord damage, and traumatic brain injury frequently occur in combination, requiring coordinated multidisciplinary rehabilitation within a specialist framework.
          </p>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            Medical Care Germany coordinates the documentation preparation, centre identification, and admission process for war injury rehabilitation cases, ensuring clinical alignment between the patient's profile and the rehabilitation programme.
          </p>
          <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Initial Evaluation</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Case Types Reviewed</p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>War Injury and Complex Trauma Cases</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {CASES.map((t) => (
              <div key={t} style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12 }}>Coordination Pathway</p>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 24, lineHeight: 1.5 }}>Structured pathway from documentation to rehabilitation admission</h2>
        {[
          "Submit clinical documentation: discharge summaries, operative reports, imaging, and functional assessment",
          "Clinical coordinator reviews documentation and identifies appropriate rehabilitation pathway",
          "Specialist rehabilitation centre identified based on injury profile and programme requirements",
          "Pre-admission evaluation coordinated with the rehabilitation centre",
          "Admission and programme commencement structured",
          "Ongoing liaison with rehabilitation team and referring physician",
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
            <span style={{ width: 28, height: 28, borderRadius: "50%", background: NAVY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{i + 1}</span>
            <p style={{ fontSize: 14, color: BODY, lineHeight: 1.7, margin: 0 }}>{step}</p>
          </div>
        ))}
      </section>

      <section style={{ background: NAVY, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 24, lineHeight: 1.55 }}>Documentation required for initial assessment</h2>
          {["Acute hospital discharge summary and operative reports", "Current imaging: X-ray, CT, MRI relevant to injury", "Neurological assessment reports where applicable", "Functional assessment and current mobility status", "Prior rehabilitation programme reports if available", "Referring physician summary"].map((doc, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>{doc}</p>
            </div>
          ))}
          <a href="/send-medical-reports" style={{ display: "inline-block", marginTop: 24, padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>Submit Medical Reports for Evaluation</a>
        </div>
      </section>

      <section style={{ background: SLATE_BG, padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Related Pages</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { href: "/en/advanced-rehabilitation-germany", label: "Advanced Rehabilitation Hub" },
              { href: "/en/prosthetics-germany", label: "Prosthetics Germany" },
              { href: "/en/neurological-rehabilitation-germany", label: "Neurological Rehabilitation" },
              { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
              { href: "/ar/war-injury-rehabilitation-germany", label: "النسخة العربية" },
              { href: "/de/rehabilitation-kriegsverletzungen-deutschland", label: "Deutsche Version" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>{link.label}</a>
            ))}
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
