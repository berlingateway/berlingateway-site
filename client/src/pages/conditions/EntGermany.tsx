/**
 * /ar/ent-germany
 * Arabic ENT / HNO Hub — MCG Authority Page (expanded)
 */

import { useEffect } from "react";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const ENT_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي حالات الأنف والأذن والحنجرة التي يتم تنسيقها في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تشمل الحالات المنسقة: فقدان السمع، زراعة القوقعة الإلكترونية، الطنين المزمن، سرطان الحنجرة، بدائل الصوت، اضطرابات التوازن، وأورام الرأس والعنق للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تقييم حالة فقدان السمع من بعد؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم إرسال نتائج فحوصات السمع والتصوير عبر البريد الإلكتروني أو واتسآب، ويتم تقييمها من برلين خلال 24–48 ساعة لتحديد إمكانية زراعة القوقعة أو التدخل المناسب." }
    },
    {
      "@type": "Question",
      "name": "هل يمكن علاج الطنين المزمن في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "نعم. ألمانيا تمتلك مراكز متخصصة في تشخيص وعلاج الطنين بما يشمل العلاج الصوتي، العلاج المعرفي، والتدخل الجراحي عند الضرورة." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تنسيق حالات الأنف والأذن والحنجرة من ليبيا والسودان ودول الخليج؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم استقبال التوثيق الطبي من برلين وتقييمه من قِبل المنسق الطبي، ثم تحديد المسار العلاجي المناسب داخل منظومة الأنف والأذن والحنجرة في ألمانيا." }
    }
  ]
};

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%84%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%20%D9%84%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85";

const CASES = [
  "فقدان السمع بعد الصدمات أو الإصابات",
  "طنين الأذن المستمر وضعف السمع",
  "اضطرابات التوازن والدوار المزمن",
  "كسور الأنف وانسداد مجرى الهواء",
  "أمراض الجيوب الأنفية المزمنة",
  "إصابات الوجه والرقبة المرتبطة بالحوادث",
  "مشاكل الصوت والحنجرة",
  "تقييم الرأس والرقبة في الحالات المعقدة",
  "المضاعفات العصبية المرتبطة بالأذن والتوازن",
  "الحالات المزمنة بعد إصابات الحرب",
];

const PATHWAY = [
  { n: "01", title: "مراجعة التاريخ الطبي والأشعة", body: "تحليل التقارير والفحوصات السابقة قبل التحويل للمختص." },
  { n: "02", title: "التنسيق مع طبيب الأنف والأذن والحنجرة", body: "ربط الحالة بالمختص الألماني المناسب في العيادة أو المستشفى الجامعي." },
  { n: "03", title: "الفحص والتصوير المتخصص", body: "فحص سريري مع اختبارات السمع والتوازن والتصوير المقطعي أو الرنين." },
  { n: "04", title: "التشخيص وخطة العلاج", body: "تقرير تشخيصي تفصيلي وخطة علاجية — جراحية أو تحفظية." },
  { n: "05", title: "التنسيق مع التخصصات المرتبطة", body: "ربط الحالة بالأعصاب أو الجراحة أو التأهيل حسب الحاجة السريرية." },
];

// HNO sub-pages cluster
const HNO_CLUSTER = [
  { href: "/ar/ent-surgery-germany",        label: "جراحة الأنف والأذن والحنجرة",                 desc: "الجراحات المتخصصة في الأنف والأذن والحنجرة" },
  { href: "/ar/hearing-implant-germany",     label: "زراعة القوقعة وضعف السمع",                   desc: "تقييم وتنسيق زراعة القوقعة الإلكترونية" },
  { href: "/ar/tinnitus-treatment-germany",  label: "علاج الطنين وطنين الأذن",                    desc: "تقييم الطنين المزمن وخيارات العلاج" },
  { href: "/ar/voice-prosthesis-germany",    label: "بدائل الصوت وصمامات الكلام",                 desc: "بعد جراحات الحنجرة وإعادة التأهيل الصوتي" },
  { href: "/ar/head-neck-tumor-germany",     label: "أورام الرأس والعنق",                          desc: "تقييم وتنسيق أورام الرأس والعنق" },
  { href: "/ar/sleep-apnea-snoring-germany", label: "الشخير وانقطاع النفس أثناء النوم",            desc: "تشخيص وعلاج اضطرابات النوم التنفسية" },
  { href: "/ar/pediatric-ent-germany",       label: "طب الأنف والأذن والحنجرة للأطفال",           desc: "الحالات الأنفية والأذنية والحنجرية عند الأطفال" },
  { href: "/ar/dizziness-long-term",         label: "الدوخة المزمنة واضطرابات التوازن",            desc: "الدوار المزمن وضعف التوازن — مسار HNO المرتبط" },
];

const RELATED = [
  { href: "/ar/dizziness-long-term",               label: "الدوار المزمن وضعف التوازن" },
  { href: "/ar/neurology-treatment-germany",        label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/war-injury-rehabilitation-germany",  label: "تأهيل إصابات الحرب" },
  { href: "/ar/complex-trauma-germany",             label: "تقييم الصدمات المعقدة" },
  { href: "/ar/submit-case",                        label: "تقديم الحالة الطبية" },
];

export default function EntGermany() {
  useEffect(() => {
    document.title = "علاج الأنف والأذن والحنجرة في ألمانيا — تنسيق الحالات المعقدة | Medical Care Germany";
    const descContent = "تنسيق متخصص لحالات الأنف والأذن والحنجرة في ألمانيا. للحالات الدولية القادمة من ليبيا والسودان ودول الخليج — تنسيق طبي متخصص من برلين.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/ent-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ENT_FAQ_JSONLD) }} />
      <SmartNavLayer currentPath="/ar/ent-germany" />
      <HreflangTags currentPath="/ar/ent-germany" />
      <title>علاج الأنف والأذن والحنجرة في ألمانيا | تقييم الحالات المعقدة</title>
      <meta
        name="description"
        content="تنسيق متخصص لحالات الأنف والأذن والحنجرة في ألمانيا — فقدان السمع، الدوار، إصابات الأذن، كسور الأنف، أمراض الجيوب الأنفية، ومضاعفات الحوادث."
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — Hals-Nasen-Ohren-Heilkunde
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            علاج الأنف والأذن والحنجرة في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 16px" }}>
            تنسيق الحالات المعقدة في الأنف والأذن والحنجرة داخل ألمانيا، خاصة حالات السمع، الدوخة، الطنين، الحنجرة، اضطرابات الصوت، أورام الرأس والعنق، ومشاكل التنفس والجيوب.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none", border: "1px solid #fff" }}>
              إرسال التقارير الطبية للتقييم
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              طلب تقييم أولي
            </a>
          </div>
        </div>
      </section>

      {/* ── HNO CLUSTER GRID ─────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            تخصصات الأنف والأذن والحنجرة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 36, textAlign: "center", lineHeight: 1.5 }}>
            المسارات التخصصية المتاحة
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {HNO_CLUSTER.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ ...AR, background: "#fff", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 8, textDecoration: "none", color: "inherit" }}
              >
                <span style={{ ...AR, fontSize: 14, fontWeight: 600, color: "#0B1C2C", lineHeight: 1.5 }}>{item.label}</span>
                <span style={{ ...AR, fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{item.desc}</span>
                <span style={{ ...AR, fontSize: 11, color: "#1E4A7A", marginTop: 4 }}>← عرض التفاصيل</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSITIONING BLOCK ────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "64px 24px", borderTop: "1px solid #1e3a52" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 20, lineHeight: 1.55 }}>
            الأنف والأذن والحنجرة في الحالات المعقدة
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
            كثير من حالات الدوار، فقدان السمع، وصعوبات التنفس ترتبط بأسباب متعددة تتشابك بين الأعصاب، الأذن الداخلية، والجيوب الأنفية. التقييم الدقيق من مختص ألماني في طب الأنف والأذن والحنجرة هو الخطوة الأولى لتحديد المسار الصحيح.
          </p>
          <p style={{ ...AR, fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            في الحالات المرتبطة بإصابات الحرب أو الحوادث، قد تحتاج هذه الحالات إلى تقييم متعدد التخصصات يشمل الأعصاب والجراحة والتأهيل.
          </p>
          <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            إرسال التقارير الطبية للتقييم
          </a>
        </div>
      </section>

      {/* ── CASES GRID ───────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            الحالات المُنسَّقة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 36, textAlign: "center", lineHeight: 1.5 }}>
            حالات الأنف والأذن والحنجرة التي نُنسِّق تقييمها
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
      <section style={{ padding: "64px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
          مسار التقييم
        </p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 36, lineHeight: 1.5 }}>
          كيف نُنسِّق حالات الأنف والأذن والحنجرة
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

      {/* ── DOCUMENTS ────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
            المستندات المطلوبة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 28, lineHeight: 1.55 }}>
            ما يلزم لبدء التقييم
          </h2>
          <ul style={{ ...AR, listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "تقرير طبي من الطبيب المعالج الحالي",
              "نتائج اختبارات السمع (Audiogramm) إن وجدت",
              "أشعة CT أو MRI للأذن أو الجيوب الأنفية أو الرقبة",
              "وصف الأعراض ومدة الشكوى",
              "تاريخ الإصابة أو الحادثة إن كانت السبب",
            ].map((doc) => (
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

      <CrossClusterSection
        clusters={["hno_neuro", "vestibular_audiology", "head_neck_tumor", "neuro_spine"]}
        excludeCurrentHref="/ar/ent-germany"
      />
      <ArabicFooterGuide />
    </div>
  );
}
