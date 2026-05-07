import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const NAVY = "#0B1C2C";
const GOLD = "#C8A96A";
const SLATE = "#F8F9FA";

const PATH = "/en/orthopedics-germany";

const CASES = [
  "Post-traumatic joint damage and fracture sequelae",
  "Bone and joint injuries from accidents or conflict",
  "Failed previous orthopedic surgery requiring revision",
  "Prosthetics and orthotics coordination after amputation",
  "Spinal deformities and vertebral instability",
  "Pediatric orthopedic conditions",
  "Bone tumors and skeletal oncology evaluation",
  "Sports injuries requiring specialist surgical review",
];

const PATHWAY = [
  { n: "1", title: "Document Submission", body: "Submit MRI, CT, X-ray imaging, surgical reports, and clinical history for initial review." },
  { n: "2", title: "Specialist Matching", body: "We identify the appropriate orthopedic specialist or multidisciplinary team within the German medical network." },
  { n: "3", title: "Diagnostic Evaluation", body: "Structured clinical assessment in Germany, including imaging review and specialist consultation." },
  { n: "4", title: "Treatment Pathway", body: "A coordinated treatment plan is established — surgical, rehabilitative, or prosthetic — based on clinical findings." },
  { n: "5", title: "Ongoing Coordination", body: "Continuous case management throughout the treatment and rehabilitation phases." },
];

const DOCS = [
  "Recent MRI or CT imaging (within 12 months)",
  "X-rays of affected joints or bones",
  "Surgical reports from previous procedures",
  "Prosthetics or orthotics assessment reports (if applicable)",
  "Referring physician summary",
  "Current medication list",
];

const RELATED = [
  { href: "/en/war-injury-rehabilitation-germany", label: "War Injury Rehabilitation" },
  { href: "/en/prosthetics-germany", label: "Prosthetics & Orthotics" },
  { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
  { href: "/en/advanced-rehabilitation-germany", label: "Advanced Rehabilitation" },
  { href: "/submit-case", label: "Submit Medical Reports" },
];

export default function OrthopedicsEN() {
  return (
    <>
      <HreflangTags currentPath={PATH} />
      <SmartNavLayer currentPath={PATH} />
      <div style={{ fontFamily: "'Inter', sans-serif", direction: "ltr", color: "#1a1a1a" }}>

        {/* HERO */}
        <section style={{ background: NAVY, color: "#fff", padding: "80px 24px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
              Medical Care Germany · Orthopedics
            </p>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 300, lineHeight: 1.25, marginBottom: 20 }}>
              Orthopedics & Bone Surgery in Germany
            </h1>
            <p style={{ fontSize: 18, color: "#b0bec5", fontWeight: 300, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>
              Structured coordination for complex orthopedic cases — from trauma sequelae and revision surgery to prosthetics and pediatric bone conditions.
            </p>
            <a
              href="/submit-case"
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
              Submit Medical Reports for Evaluation
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ background: SLATE, padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 26, fontWeight: 400, color: NAVY, marginBottom: 20 }}>
              Orthopedic Case Coordination in Germany
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "#444", marginBottom: 16 }}>
              Germany's orthopedic and trauma surgery centers operate within a structured clinical framework that combines specialist expertise, advanced imaging, and multidisciplinary rehabilitation. Medical Care Germany coordinates access to this framework for international patients with complex bone, joint, and musculoskeletal conditions.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "#444" }}>
              Cases are reviewed based on clinical documentation, imaging quality, and the complexity of the required intervention. Coordination covers initial evaluation, surgical consultation, prosthetics assessment, and post-operative rehabilitation planning.
            </p>
          </div>
        </section>

        {/* CASES */}
        <section style={{ background: NAVY, padding: "64px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 24, fontWeight: 400, color: "#fff", marginBottom: 32 }}>
              Cases Reviewed
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
              Coordination Pathway
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
              Required Documents for Initial Assessment
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
              Submit Orthopedic Reports for Evaluation
            </h2>
            <p style={{ color: "#555", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
              All submissions are reviewed with clinical discretion. Initial assessment is based on documentation quality and case complexity.
            </p>
            <a
              href="/submit-case"
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
              Submit Medical Reports
            </a>
          </div>
        </section>

        {/* RELATED */}
        <section style={{ background: "#fff", padding: "48px 24px", borderTop: "1px solid #e0e0e0" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ color: "#888", fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 20 }}>
              Related Pathways
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
            Operating within established clinical coordination frameworks.
          </p>
        </footer>
      </div>
    </>
  );
}
