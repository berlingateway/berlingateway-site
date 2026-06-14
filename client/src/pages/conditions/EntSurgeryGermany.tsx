/**
 * /ar/ent-surgery-germany
 * جراحة الأنف والأذن والحنجرة في ألمانيا
 */

import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%84%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%20%D9%84%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85";

const PROCEDURES = [
  "جراحة الجيوب الأنفية بالمنظار (FESS)",
  "جراحة انحراف الحاجز الأنفي",
  "جراحة الأذن الوسطى (طبلة الأذن والعظيمات)",
  "جراحة الغدد اللمفاوية في الرقبة",
  "جراحة الحنجرة واستئصال الأورام الحنجرية",
  "جراحة الغدة الدرقية والجار درقية",
  "جراحة الغدة النكفية والغدد اللعابية",
  "جراحة الحوادث والإصابات في الوجه والرقبة",
  "جراحة الأطراف الصناعية الصوتية بعد استئصال الحنجرة",
  "جراحة انقطاع النفس أثناء النوم",
];

const PATHWAY = [
  { n: "01", title: "مراجعة التقارير والأشعة", body: "تحليل الوثائق الطبية الحالية وتحديد نوع الجراحة المطلوبة." },
  { n: "02", title: "التنسيق مع الجراح المختص", body: "ربط الحالة بجراح الأنف والأذن والحنجرة في المستشفى الجامعي المناسب." },
  { n: "03", title: "التقييم قبل الجراحة", body: "فحص سريري شامل مع الفحوصات المخبرية والتصوير اللازم." },
  { n: "04", title: "التخطيط الجراحي", body: "تحديد التقنية الجراحية وخطة التخدير والإقامة المستشفوية." },
  { n: "05", title: "متابعة ما بعد الجراحة", body: "تنسيق الرعاية التعافية وربط الحالة بالتأهيل إذا لزم." },
];

const RELATED = [
  { href: "/ar/ent-germany",               label: "الأنف والأذن والحنجرة — المحور" },
  { href: "/ar/head-neck-tumor-germany",   label: "أورام الرأس والعنق" },
  { href: "/ar/hearing-implant-germany",   label: "زراعة القوقعة وضعف السمع" },
  { href: "/ar/voice-prosthesis-germany",  label: "بدائل الصوت وصمامات الكلام" },
  { href: "/ar/submit-case",               label: "تقديم الحالة الطبية" },
];

export default function EntSurgeryGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/ent-surgery-germany" />
      <HreflangTags currentPath="/ar/ent-surgery-germany" />
      <title>جراحة الأنف والأذن والحنجرة في ألمانيا | تنسيق الحالات الجراحية</title>
      <meta
        name="description"
        content="تنسيق الحالات الجراحية في الأنف والأذن والحنجرة داخل ألمانيا — جراحة الجيوب الأنفية، الأذن الوسطى، الحنجرة، الرقبة، وإصابات الوجه."
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — HNO-Chirurgie
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            جراحة الأنف والأذن والحنجرة في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 32px" }}>
            تنسيق الحالات الجراحية المعقدة في الأنف والأذن والحنجرة — من جراحة الجيوب الأنفية إلى جراحات الحنجرة والرقبة، بالتنسيق مع الجراحين المختصين في المستشفيات الجامعية الألمانية.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none", border: "1px solid #fff" }}>
              إرسال التقارير الطبية للتقييم
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              طلب تقييم أولي
            </a>
          </div>
        </div>
      </section>

      {/* ── PROCEDURES GRID ──────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            الإجراءات الجراحية
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 36, textAlign: "center", lineHeight: 1.5 }}>
            الجراحات التي نُنسِّق تقييمها وتنفيذها
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {PROCEDURES.map((p) => (
              <div key={p} style={{ background: "#fff", padding: "22px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ ...AR, fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATHWAY ──────────────────────────────────────────────── */}
      <section style={{ padding: "64px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
          مسار التنسيق الجراحي
        </p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 36, lineHeight: 1.5 }}>
          كيف نُنسِّق الحالات الجراحية
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRight: "2px solid #e2e8f0" }}>
          {PATHWAY.map((step) => (
            <div key={step.n} style={{ paddingRight: 24, paddingBottom: 32, position: "relative" }}>
              <span style={{ position: "absolute", right: -10, top: 0, width: 18, height: 18, borderRadius: "50%", background: "#0B1C2C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />
              </span>
              <p style={{ ...AR, fontSize: 10, color: "#94a3b8", letterSpacing: "0.15em", marginBottom: 6 }}>{step.n}</p>
              <h3 style={{ ...AR, fontSize: 15, fontWeight: 600, color: "#0B1C2C", marginBottom: 8 }}>{step.title}</h3>
              <p style={{ ...AR, fontSize: 14, color: "#475569", lineHeight: 1.75 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 20, lineHeight: 1.55 }}>
            ابدأ بإرسال التقارير الطبية للتقييم
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#94a3b8", lineHeight: 1.85, marginBottom: 32 }}>
            يُراجَع كل ملف طبي بشكل منفصل. التقييم الأولي يحدد إمكانية التنسيق الجراحي ومدى ملاءمة الحالة للتدخل في ألمانيا.
          </p>
          <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            إرسال التقارير الطبية للتقييم
          </a>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "48px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            صفحات ذات صلة
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {RELATED.map((link) => (
              <a key={link.href} href={link.href} style={{ ...AR, fontSize: 13, color: "#0B1C2C", textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
