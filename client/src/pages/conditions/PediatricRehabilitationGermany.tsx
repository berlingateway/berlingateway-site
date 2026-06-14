/**
 * /ar/pediatric-rehabilitation-germany
 * Arabic Pediatric Authority Page — MCG
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

const CASES = [
  "التأهيل بعد إصابات الدماغ والحبل الشوكي",
  "التأهيل العصبي للأطفال المصابين بالشلل الدماغي",
  "إعادة التأهيل بعد جراحة العظام والمفاصل",
  "التأهيل الحركي بعد الحوادث",
  "التأهيل بعد إصابات الحرب والصدمات",
  "برامج التأهيل متعددة التخصصات",
  "التأهيل طويل المدى للحالات المزمنة",
  "التأهيل بالروبوتيكس للأطفال",
];

const PATHWAY = [
  { n: "01", title: "مراجعة الملف الطبي والتأهيلي", body: "تحليل التقارير والتاريخ الطبي والتأهيلي للطفل." },
  { n: "02", title: "التنسيق مع مركز التأهيل المناسب", body: "ربط الحالة بالمركز المتخصص في ألمانيا." },
  { n: "03", title: "التقييم التأهيلي المتخصص", body: "تقييم شامل لاحتياجات الطفل التأهيلية." },
  { n: "04", title: "البرنامج التأهيلي والمتابعة", body: "تنسيق البرنامج التأهيلي ومتابعة التقدم." },
];

const RELATED = [
  { href: "/ar/advanced-rehabilitation-germany", label: "إعادة التأهيل المتقدم" },
  { href: "/ar/pediatric-neurology-germany", label: "أعصاب الأطفال" },
  { href: "/ar/neurological-rehabilitation-germany", label: "التأهيل العصبي" },
  { href: "/ar/submit-case", label: "تقديم الحالة الطبية" },
];

const DOCS = [
  "تقرير طبي من الطبيب المعالج الحالي",
  "تقارير التأهيل السابقة إن وجدت",
  "أشعة أو تصوير متقدم إن وجد",
  "وصف الحالة الحالية واحتياجات التأهيل",
  "عمر الطفل وتاريخ الإصابة أو الجراحة",
];

export default function PediatricRehabilitationGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/pediatric-rehabilitation-germany" />
      <HreflangTags currentPath="/ar/pediatric-rehabilitation-germany" />
      <title>تأهيل الأطفال في ألمانيا | إعادة التأهيل المتخصص للأطفال</title>
      <meta name="description" content="تنسيق متخصص لإعادة تأهيل الأطفال في ألمانيا — التأهيل العصبي، الحركي، بعد الجراحة، وإصابات الحوادث." />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — تأهيل الأطفال
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            تأهيل الأطفال في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>
            تنسيق مسارات إعادة التأهيل المتخصصة للأطفال في ألمانيا — التأهيل العصبي، الحركي، وما بعد الجراحة.
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

      {/* ── POSITIONING BLOCK ────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "64px 24px", borderTop: "1px solid #1e3a52" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 20, lineHeight: 1.55 }}>
            إعادة تأهيل الأطفال تحتاج نهجًا متخصصًا
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
            التأهيل عند الأطفال يختلف جوهريًا عن البالغين — فهو يراعي مراحل النمو، القدرات التطورية، والاحتياجات النفسية والاجتماعية للطفل. المراكز المتخصصة في ألمانيا تقدم برامج تأهيل مصممة خصيصًا لكل مرحلة عمرية.
          </p>
          <p style={{ ...AR, fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            يعمل فريقنا على تنسيق مسارات التأهيل مع المراكز المتخصصة في ألمانيا، مع مراجعة كاملة للتاريخ الطبي والتقارير السابقة.
          </p>
          <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            إرسال التقارير الطبية للتقييم
          </a>
        </div>
      </section>

      {/* ── CASES GRID ───────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            الحالات المُنسَّقة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>
            حالات تأهيل الأطفال التي نُنسِّق مساراتها
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {CASES.map((c) => (
              <div key={c} style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ ...AR, fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATHWAY ──────────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
          مسار التقييم
        </p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 40, lineHeight: 1.5 }}>
          كيف نُنسِّق مسار تأهيل طفلك في ألمانيا
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, borderRight: "2px solid #e2e8f0" }}>
          {PATHWAY.map((step) => (
            <div key={step.n} style={{ paddingRight: 24, paddingBottom: 36, position: "relative" }}>
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

      {/* ── DOCUMENTS ────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
            المستندات المطلوبة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 28, lineHeight: 1.55 }}>
            ما يلزم لبدء التقييم
          </h2>
          <ul style={{ ...AR, listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: 14 }}>
            {DOCS.map((doc) => (
              <li key={doc} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#94a3b8", marginTop: 7, flexShrink: 0 }} />
                <span style={{ ...AR, fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>{doc}</span>
              </li>
            ))}
          </ul>
          <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            إرسال التقارير الطبية للتقييم
          </a>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "56px 24px" }}>
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
