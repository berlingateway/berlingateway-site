/**
 * /ar/head-neck-tumor-germany
 * أورام الرأس والعنق في ألمانيا
 */

import { useEffect } from "react";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const HEAD_NECK_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي أنواع أورام الرأس والعنق التي يتم تنسيقها في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تشمل الحالات المنسقة: سرطان الحنجرة، أورام البلعوم، سرطان الغدة الدرقية، أورام الغدد اللعابية، والحالات المعقدة بعد الجراحة والإشعاع للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تقييم حالة سرطان الحنجرة من بعد؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم إرسال تقارير الأورام والأشعة ونتائج الخزعة عبر البريد الإلكتروني أو واتسآب، ويتم تقييمها من برلين خلال 24–48 ساعة لتحديد إمكانية التنسيق مع فريق الأورام في ألمانيا." }
    },
    {
      "@type": "Question",
      "name": "ما هي خيارات العلاج لسرطان الحنجرة في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تشمل خيارات العلاج: الجراحة بالمنظار، العلاج الإشعاعي المتطور، العلاج الكيميائي، بدائل الصوت بعد استئصال الحنجرة، وإعادة التأهيل الوظيفي." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تنسيق حالات أورام الرأس والعنق من ليبيا والسودان ودول الخليج؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم استقبال التوثيق الطبي من برلين وتقييمه من قِبل المنسق الطبي، ثم تحديد المسار العلاجي المناسب داخل منظومة أورام الرأس والعنق في ألمانيا." }
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
  "أورام الحنجرة وسرطان الحنجرة",
  "أورام البلعوم الأنفي والبلعوم الفموي",
  "سرطان الغدة الدرقية وأورام الغدة الدرقية",
  "أورام الغدة النكفية والغدد اللعابية",
  "أورام الجيوب الأنفية والتجويف الأنفي",
  "الأورام الليمفاوية في الرقبة",
  "أورام قاعدة الجمجمة المرتبطة بالرأس والعنق",
  "الحالات المعقدة بعد الجراحة والعلاج الإشعاعي",
  "الحالات التي تحتاج إلى تقييم ثانٍ",
];

const PATHWAY = [
  { n: "01", title: "مراجعة التقارير والأشعة والخزعة", body: "تحليل نتائج الخزعة والتصوير المقطعي أو PET-CT وتقارير الأورام." },
  { n: "02", title: "التنسيق مع فريق الأورام متعدد التخصصات", body: "ربط الحالة بالجراح وطبيب الأورام وأخصائي الإشعاع في المستشفى الجامعي." },
  { n: "03", title: "التقييم الشامل قبل العلاج", body: "فحص سريري مع مراجعة مرحلة الورم وتحديد خيارات العلاج." },
  { n: "04", title: "خطة العلاج المتكاملة", body: "تحديد البروتوكول — جراحي، إشعاعي، كيميائي، أو مشترك." },
  { n: "05", title: "التنسيق مع التخصصات المرتبطة", body: "ربط الحالة بالتأهيل الصوتي أو البلع أو إعادة التأهيل حسب الحاجة." },
];

const RELATED = [
  { href: "/ar/ent-germany",              label: "الأنف والأذن والحنجرة — المحور" },
  { href: "/ar/ent-surgery-germany",      label: "جراحة الأنف والأذن والحنجرة" },
  { href: "/ar/voice-prosthesis-germany", label: "بدائل الصوت وصمامات الكلام" },
  { href: "/ar/lung-cancer-treatment-germany", label: "سرطان الرئة" },
  { href: "/ar/submit-case",              label: "تقديم الحالة الطبية" },
];

export default function HeadNeckTumorGermany() {
  useEffect(() => {
    document.title = "أورام الرأس والعنق في ألمانيا — تقييم وتنسيق الحالات المعقدة | Medical Care Germany";
    const descContent = "تقييم وتنسيق أورام الرأس والعنق في ألمانيا. للحالات الدولية القادمة من ليبيا والسودان ودول الخليج — تنسيق طبي متخصص من برلين.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/head-neck-tumor-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HEAD_NECK_FAQ_JSONLD) }} />
      <SmartNavLayer currentPath="/ar/head-neck-tumor-germany" />
      <HreflangTags currentPath="/ar/head-neck-tumor-germany" />
      <title>أورام الرأس والعنق في ألمانيا | تقييم وتنسيق الحالات المعقدة</title>
      <meta
        name="description"
        content="تقييم وتنسيق أورام الرأس والعنق في ألمانيا — سرطان الحنجرة، الغدة الدرقية، البلعوم، الغدد اللعابية، والحالات المعقدة بعد الجراحة والإشعاع."
      />

      <section style={{ background: "#0B1C2C", padding: "72px 24px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — Kopf-Hals-Tumoren
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            أورام الرأس والعنق في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 32px" }}>
            تقييم وتنسيق حالات أورام الرأس والعنق في المستشفيات الجامعية الألمانية — من مراجعة التشخيص إلى تنسيق خطة العلاج متعددة التخصصات.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
              إرسال التقارير الطبية للتقييم
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              طلب تقييم أولي
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            الحالات المُنسَّقة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 36, textAlign: "center", lineHeight: 1.5 }}>
            أورام الرأس والعنق التي نُنسِّق تقييمها
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {CASES.map((c) => (
              <div key={c} style={{ background: "#fff", padding: "22px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ ...AR, fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
          مسار التقييم
        </p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 36, lineHeight: 1.5 }}>
          كيف نُنسِّق حالات أورام الرأس والعنق
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

      <section style={{ background: "#0B1C2C", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 20, lineHeight: 1.55 }}>
            ابدأ بإرسال التقارير الطبية للتقييم
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#94a3b8", lineHeight: 1.85, marginBottom: 32 }}>
            أرسل تقارير الأورام والأشعة ونتائج الخزعة. التقييم الأولي يحدد إمكانية التنسيق مع فريق الأورام في ألمانيا.
          </p>
          <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            إرسال التقارير الطبية للتقييم
          </a>
        </div>
      </section>

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
        clusters={["head_neck_tumor", "hno_neuro", "neuro_spine"]}
        excludeCurrentHref="/ar/head-neck-tumor-germany"
      />
      <ArabicFooterGuide />
    </div>
  );
}
