import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
/**
 * /en/advanced-rehabilitation-germany
 * Advanced Rehabilitation Hub — MCG English Authority Page
 * Layout: MCG master system — dark navy hero, alternating sections, institutional footer
 */

const NAVY = "#0B1C2C";
const NAVY_BORDER = "#1e3a52";
const SLATE_BG = "#f8fafc";
const MUTED = "#94a3b8";
const BODY = "#475569";
const WHITE = "#f8fafc";
const SANS = { fontFamily: "'Inter', 'Helvetica Neue', sans-serif" };

const CLUSTER_PAGES = [
  { href: "/en/war-injury-rehabilitation-germany", label: "War Injury Rehabilitation" },
  { href: "/en/prosthetics-germany", label: "Prosthetics & Functional Rehabilitation" },
  { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
  { href: "/en/neurological-rehabilitation-germany", label: "Neurological Rehabilitation" },
  { href: "/en/second-medical-evaluation-germany", label: "Second Medical Evaluation" },
  { href: "/en/long-term-rehabilitation-germany", label: "Long-Term Rehabilitation" },
];

const THEMES = [
  "War injury and complex trauma rehabilitation",
  "Prosthetics and mobility restoration",
  "Neurological and spinal cord rehabilitation",
  "Advanced robotic rehabilitation technology",
  "Post-amputation functional rehabilitation",
  "Chronic pain management within rehabilitation",
  "Independent second medical evaluation",
  "Multidisciplinary rehabilitation coordination",
  "Long-term rehabilitation continuity",
];

export default function AdvancedRehabilitationEN() {
  return (
    <div style={{ background: "#fff", color: NAVY, ...SANS }}>
      <SmartNavLayer currentPath="/en/advanced-rehabilitation-germany" />
      <HreflangTags currentPath="/en/advanced-rehabilitation-germany" />
      <title>Advanced Rehabilitation in Germany | Structured Rehabilitation Pathway Coordination</title>
      <meta name="description" content="Medical Care Germany coordinates advanced rehabilitation pathways in Germany — war injuries, prosthetics, neurological rehabilitation, spinal cord, and second medical evaluation." />
      <link rel="canonical" href="https://medicalcaregermany.com/en/advanced-rehabilitation-germany" />
      <link rel="alternate" hrefLang="ar" href="https://medicalcaregermany.com/ar/advanced-rehabilitation-germany" />
      <link rel="alternate" hrefLang="de" href="https://medicalcaregermany.com/de/rehabilitation-deutschland" />
      <link rel="alternate" hrefLang="en" href="https://medicalcaregermany.com/en/advanced-rehabilitation-germany" />

      {/* ── TOP BAR ───────────────────────────────────────────────── */}
      <div style={{ background: NAVY, padding: "10px 24px", textAlign: "center" }}>
        <a href="mailto:info@medicalcaregermany.com" style={{ fontSize: 12, color: MUTED, textDecoration: "none" }}>
          info@medicalcaregermany.com
        </a>
      </div>

      {/* ── NAV ───────────────────────────────────────────────────── */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50 }}>
        <div>
          <a href="/" style={{ fontSize: 17, fontWeight: 600, color: NAVY, textDecoration: "none", letterSpacing: "-0.01em" }}>Medical Care Germany</a>
          <p style={{ fontSize: 10, color: MUTED, margin: "2px 0 0", letterSpacing: "0.1em", textTransform: "uppercase" }}>Institutional Clinical Coordination Authority</p>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="/" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>← Home</a>
          <a href="/ar/advanced-rehabilitation-germany" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>العربية</a>
          <a href="/de/rehabilitation-deutschland" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>Deutsch</a>
          <a href="/send-medical-reports" style={{ fontSize: 12, fontWeight: 500, color: "#fff", background: NAVY, padding: "8px 18px", textDecoration: "none" }}>Send Medical Reports</a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: NAVY, padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — Advanced Rehabilitation Coordination
          </p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: WHITE, lineHeight: 1.4, marginBottom: 20 }}>
            Advanced Rehabilitation in Germany
          </h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>
            Structured coordination of complex rehabilitation pathways within Germany — for cases requiring specialist evaluation, rehabilitation continuity, or multidisciplinary follow-up.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none", border: `1px solid ${WHITE}` }}>
              Submit Medical Reports for Evaluation
            </a>
            <a href="https://wa.me/4917647757767" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 28px", background: "transparent", color: MUTED, fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              Request Initial Assessment
            </a>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC BLOCK ──────────────────────────────────────── */}
      <section style={{ background: NAVY, padding: "64px 24px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>
            Some rehabilitation cases require more than a single treatment phase
          </h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.9, marginBottom: 20 }}>
            In cases involving neurological injury, spinal cord damage, amputation, and complex mobility impairment, the clinical pathway may require additional phases of evaluation, rehabilitation, and multidisciplinary follow-up within Germany — structured according to the clinical evolution of the case and the patient's response to treatment.
          </p>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            Our coordination team structures medical and rehabilitation pathways for cases arriving from abroad or already within Germany requiring specialist evaluation, treatment continuity, or multidisciplinary follow-up.
          </p>
          <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            Submit Medical Reports for Initial Evaluation
          </a>
        </div>
      </section>

      {/* ── REHABILITATION THEMES ─────────────────────────────────── */}
      <section style={{ background: SLATE_BG, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            Rehabilitation Focus Areas
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>
            Coordinated Advanced Rehabilitation Pathways
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {THEMES.map((t) => (
              <div key={t} style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUSTER SUB-PAGES ─────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12 }}>
          Specialist Rehabilitation Pages
        </p>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 32, lineHeight: 1.5 }}>
          Specialist Rehabilitation Pathways
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "#e2e8f0" }}>
          {CLUSTER_PAGES.map((p) => (
            <a key={p.href} href={p.href} style={{ background: "#fff", padding: "28px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", gap: 12 }}>
              <span style={{ fontSize: 14, color: NAVY, fontWeight: 500 }}>{p.label}</span>
              <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── PATHWAY BLOCK ─────────────────────────────────────────── */}
      <section style={{ background: NAVY, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>
            When the initial phase is insufficient
          </h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.9, marginBottom: 20 }}>
            Complex cases may require specialist re-evaluation or a more advanced rehabilitation pathway within Germany — particularly in neurological injury, chronic pain, amputation, and complex mobility impairment.
          </p>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            Some cases may involve additional phases of evaluation and rehabilitation follow-up according to the clinical needs of the case and the evolution of the treatment plan.
          </p>
          <a href="/send-medical-reports" style={{ display: "inline-block", padding: "12px 28px", background: WHITE, color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            Request Medical Report Review
          </a>
        </div>
      </section>

      {/* ── COORDINATION BLOCK ────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 12 }}>
          Medical Coordination
        </p>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: NAVY, marginBottom: 20, lineHeight: 1.5 }}>
          Cases arriving from abroad or already within Germany
        </h2>
        <p style={{ fontSize: 15, color: BODY, lineHeight: 1.9, marginBottom: 32 }}>
          Our team coordinates cases requiring medical evaluation, advanced rehabilitation, or treatment follow-up within Germany — for patients arriving from abroad or already within Germany requiring treatment continuity or specialist re-evaluation.
        </p>
        <a href="/send-medical-reports" style={{ display: "inline-block", padding: "14px 36px", background: NAVY, color: WHITE, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
          Submit Medical File for Evaluation
        </a>
      </section>

      {/* ── RELATED LINKS ─────────────────────────────────────────── */}
      <section style={{ background: SLATE_BG, padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>
            Related Pages
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { href: "/en/neurological-rehabilitation-germany", label: "Neurological Rehabilitation" },
              { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
              { href: "/en/war-injury-rehabilitation-germany", label: "War Injury Rehabilitation" },
              { href: "/en/prosthetics-germany", label: "Prosthetics Germany" },
              { href: "/ar/advanced-rehabilitation-germany", label: "النسخة العربية" },
              { href: "/de/rehabilitation-deutschland", label: "Deutsche Version" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ fontSize: 13, color: NAVY, textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL FOOTER ──────────────────────────────────── */}
      <footer style={{ background: NAVY, padding: "48px 24px 32px", borderTop: `1px solid ${NAVY_BORDER}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: WHITE, marginBottom: 12 }}>Medical Care Germany</p>
              <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.8 }}>
                Independent strategic medical advisory headquartered in Berlin, coordinating structured access to Germany's advanced hospital and rehabilitation system.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase", marginBottom: 12 }}>Rehabilitation Pathways</p>
              {CLUSTER_PAGES.map((p) => (
                <a key={p.href} href={p.href} style={{ display: "block", fontSize: 12, color: "#64748b", textDecoration: "none", marginBottom: 6 }}>{p.label}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase", marginBottom: 12 }}>Contact</p>
              <a href="mailto:info@medicalcaregermany.com" style={{ display: "block", fontSize: 12, color: "#64748b", textDecoration: "none", marginBottom: 6 }}>info@medicalcaregermany.com</a>
              <a href="/send-medical-reports" style={{ display: "block", fontSize: 12, color: "#64748b", textDecoration: "none", marginBottom: 6 }}>Submit Medical Reports</a>
              <p style={{ fontSize: 12, color: "#64748b", marginTop: 12 }}>Berlin, Germany</p>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${NAVY_BORDER}`, paddingTop: 24, textAlign: "center" }}>
            <p style={{ fontSize: 11, color: "#475569" }}>Operating within established clinical coordination frameworks.</p>
            <p style={{ fontSize: 11, color: "#334155", marginTop: 6 }}>Medical Care Germany · Berlin, Germany</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
