/**
 * /ar/advanced-rehabilitation-germany
 * Central Rehabilitation Authority Hub — MCG Arabic Cluster
 */

import { useEffect } from "react";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const REHAB_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي خيارات إعادة التأهيل المتاحة في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تشمل خيارات إعادة التأهيل في ألمانيا: إعادة التأهيل العصبي، التأهيل بعد إصابات الحرب والحوادث، الأطراف الصناعية، التأهيل الروبوتي، وإدارة الألم المزمن للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تنسيق برنامج إعادة التأهيل للمريض الدولي؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم استقبال التوثيق الطبي من برلين وتقييمه من قِبل المنسق الطبي، ثم تحديد برنامج إعادة التأهيل المناسب والمركز المتخصص قبل اتخاذ قرار السفر." }
    },
    {
      "@type": "Question",
      "name": "هل يمكن تقييم حالتي من بعد قبل السفر إلى ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "نعم. يمكن إرسال التقارير الطبية عبر البريد الإلكتروني أو واتسآب وسيتم تقييمها من برلين خلال 24–48 ساعة لتحديد مدى ملاءمة برنامج إعادة التأهيل في ألمانيا." }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين إعادة التأهيل في ألمانيا وفي دول أخرى؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تتميز برامج إعادة التأهيل في ألمانيا بالتكامل بين التخصصات، استخدام التقنيات الروبوتية، والمتابعة المنتظمة عبر فريق متعدد التخصصات لضمان أفضل استعادة للوظيفة." }
    }
  ]
};

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%84%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%20%D9%84%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85";

const CLUSTER_PAGES = [
  { href: "/ar/war-injury-rehabilitation-germany", label: "إعادة تأهيل إصابات الحرب" },
  { href: "/ar/prosthetics-germany", label: "الأطراف الصناعية في ألمانيا" },
  { href: "/ar/spinal-rehabilitation-germany", label: "إعادة تأهيل العمود الفقري" },
  { href: "/ar/neurological-rehabilitation-germany", label: "إعادة التأهيل العصبي" },
  { href: "/ar/second-medical-evaluation-germany", label: "التقييم الطبي الثاني" },
  { href: "/ar/long-term-rehabilitation-germany", label: "العلاج التأهيلي طويل المدى" },
];

const THEMES = [
  "إعادة تأهيل إصابات الحرب والحوادث",
  "الأطراف الصناعية واستعادة الحركة",
  "إعادة التأهيل العصبي والحبل الشوكي",
  "التأهيل الروبوتي المتقدم",
  "إعادة التأهيل بعد البتر",
  "إدارة الألم المزمن",
  "التقييم الطبي الثاني",
  "العلاج التأهيلي متعدد التخصصات",
  "استمرارية التأهيل طويل المدى",
];

export default function AdvancedRehabilitationGermany() {
  useEffect(() => {
    document.title = "إعادة التأهيل المتقدم في ألمانيا — تنسيق متخصص للحالات الدولية | Medical Care Germany";
    const descContent = "تنسيق متخصص لمسارات إعادة التأهيل المتقدم في ألمانيا — إصابات الحرب، الأطراف الصناعية، التأهيل العصبي. للحالات الدولية من ليبيا والسودان ودول الخليج.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/advanced-rehabilitation-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REHAB_FAQ_JSONLD) }} />
      <SmartNavLayer currentPath="/ar/advanced-rehabilitation-germany" />
      <HreflangTags currentPath="/ar/advanced-rehabilitation-germany" />
      <title>إعادة التأهيل المتقدم في ألمانيا | تنسيق التأهيل الطبي المتخصص</title>
      <meta
        name="description"
        content="تنسيق متخصص لمسارات إعادة التأهيل المتقدم في ألمانيا — إصابات الحرب، الأطراف الصناعية، التأهيل العصبي، الحبل الشوكي، والتقييم الطبي الثاني."
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — تنسيق التأهيل الطبي المتقدم
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            إعادة التأهيل المتقدم في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 36px" }}>
            تنسيق مسارات التأهيل الطبي المعقدة داخل ألمانيا — للحالات القادمة من الخارج أو الموجودة داخل ألمانيا والتي تحتاج استمرارية علاجية أو تقييمًا تخصصيًا متقدمًا.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none", border: "1px solid #fff" }}>
              أرسل التقارير الطبية للتقييم الأولي
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              طلب تقييم أولي
            </a>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC MAGNETIC BLOCK ─────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "64px 24px", borderTop: "1px solid #1e3a52" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 20, lineHeight: 1.55 }}>
            بعض حالات التأهيل تحتاج أكثر من مرحلة علاجية
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
            في بعض إصابات الأعصاب، الحبل الشوكي، البتر، وإصابات الحركة المعقدة، قد تتطلب الخطة العلاجية مراحل إضافية من التقييم، التأهيل، والمتابعة متعددة التخصصات داخل ألمانيا وفق تطور الحالة السريرية واستجابة المريض للعلاج.
          </p>
          <p style={{ ...AR, fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            يعمل فريقنا على تنسيق المسارات الطبية والتأهيلية للحالات القادمة من الخارج أو الموجودة داخل ألمانيا والتي تحتاج تقييمًا تخصصيًا، استمرارية علاجية، أو متابعة متعددة التخصصات.
          </p>
          <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            أرسل التقارير الطبية للتقييم الأولي
          </a>
          <p style={{ ...AR, fontSize: 12, color: "#475569", marginTop: 12 }}>
            تنسيق طبي وتأهيلي للحالات المعقدة داخل ألمانيا
          </p>
        </div>
      </section>

      {/* ── CLUSTER THEMES ───────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            محاور التأهيل
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>
            مجالات التأهيل المتقدم المُنسَّقة
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {THEMES.map((t) => (
              <div key={t} style={{ background: "#fff", padding: "24px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ ...AR, fontSize: 14, color: "#1e293b", lineHeight: 1.6, margin: 0 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUSTER SUB-PAGES ────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
          صفحات التأهيل التخصصية
        </p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 32, lineHeight: 1.5 }}>
          مسارات التأهيل المتخصصة
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "#e2e8f0" }}>
          {CLUSTER_PAGES.map((p) => (
            <a key={p.href} href={p.href} style={{ background: "#fff", padding: "28px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", gap: 12 }}>
              <span style={{ ...AR, fontSize: 14, color: "#0B1C2C", fontWeight: 500 }}>{p.label}</span>
              <span style={{ color: "#94a3b8", fontSize: 18, flexShrink: 0 }}>←</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── SECOND PATHWAY BLOCK ─────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 20, lineHeight: 1.55 }}>
            عندما لا تكون المرحلة الأولى كافية
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
            بعض الحالات المعقدة قد تحتاج إعادة تقييم تخصصي أو مسار تأهيلي أكثر تقدمًا داخل ألمانيا، خاصة في إصابات الأعصاب، الألم المزمن، البتر، وإصابات الحركة المعقدة.
          </p>
          <p style={{ ...AR, fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            قد تشمل بعض الحالات مراحل إضافية من التقييم والمتابعة التأهيلية وفق احتياجات الحالة السريرية وتطور الخطة العلاجية.
          </p>
          <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            طلب مراجعة التقارير الطبية
          </a>
        </div>
      </section>

      {/* ── COORDINATION BLOCK ───────────────────────────────────── */}
      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
          التنسيق الطبي
        </p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 20, lineHeight: 1.5 }}>
          الحالات القادمة من خارج ألمانيا أو الموجودة داخلها
        </h2>
        <p style={{ ...AR, fontSize: 15, color: "#475569", lineHeight: 1.9, marginBottom: 32 }}>
          يقدم فريقنا تنسيقًا للحالات التي تحتاج تقييمًا طبيًا، إعادة تأهيل متقدمة، أو متابعة علاجية داخل ألمانيا، سواء للمرضى القادمين من الخارج أو الموجودين داخل ألمانيا ممن يحتاجون استمرارية علاجية أو إعادة تقييم تخصصي.
        </p>
        <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "#0B1C2C", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
          إرسال الملف الطبي للتقييم
        </a>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            صفحات ذات صلة
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
              { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
              { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
              { href: "/ar/complex-trauma-germany", label: "تقييم الصدمات المعقدة" },
              { href: "/ar/submit-case", label: "تقديم الحالة الطبية" },
              { href: "/ar/pediatric-rehabilitation-germany", label: "تأهيل الأطفال في ألمانيا" },
            ].map((link) => (
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
