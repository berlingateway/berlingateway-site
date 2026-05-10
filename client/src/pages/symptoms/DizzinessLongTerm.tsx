/**
 * /ar/dizziness-long-term
 * MCG Vestibular Authority Entry Page
 * High-authority diagnostic entry system — HNO + Neurology overlap
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D8%AF%D9%88%D8%AE%D8%A9";

const DIZZINESS_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "هل يمكن أن تكون الدوخة من الأذن الداخلية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الأذن الداخلية مسؤولة عن التوازن، وأي اضطراب في الجهاز الدهليزي — كمرض منيير أو التهاب العصب الدهليزي — يمكن أن يسبب دوخة مزمنة. التشخيص يتطلب تقييماً متخصصاً في طب الأنف والأذن والحنجرة.",
      },
    },
    {
      "@type": "Question",
      name: "لماذا تستمر الدوخة رغم سلامة الفحوصات؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الفحوصات القياسية كـ MRI الدماغ قد لا تكشف اضطرابات الأذن الداخلية أو الاضطرابات الدهليزية الوظيفية. التقييم المتخصص يشمل اختبارات دهليزية متقدمة وتقييم عصبي دقيق.",
      },
    },
    {
      "@type": "Question",
      name: "هل طنين الأذن مرتبط بالدوخة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "في كثير من الحالات نعم. الطنين والدوخة معاً قد يشيران إلى اضطراب في الأذن الداخلية كمرض منيير أو اضطراب دهليزي قوقعي. التقييم المشترك لكليهما ضروري للتشخيص الدقيق.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن أن تكون الدوخة بسبب الأعصاب؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الدوخة ذات المنشأ العصبي تشمل: الصداع النصفي الدهليزي، اضطرابات المخيخ، وبعض أمراض الأعصاب المركزية. التمييز بين المنشأ العصبي والأذني يتطلب تقييماً متخصصاً مشتركاً.",
      },
    },
    {
      "@type": "Question",
      name: "متى تحتاج الحالة إلى تقييم متقدم في ألمانيا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "عندما تستمر الدوخة لأكثر من 3 أشهر، أو لم تستجب للعلاجات المتاحة، أو التشخيص غير محدد، أو توجد أعراض مصاحبة كالطنين أو ضعف السمع أو الاضطرابات البصرية — يكون التقييم المتخصص في ألمانيا مبرراً سريرياً.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن أن تكون الدوخة مرتبطة بإصابة سابقة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الدوخة ما بعد الصدمة شائعة بعد إصابات الرأس والرقبة والحوادث. يمكن أن تنشأ من تلف الأذن الداخلية أو إصابة عصبية أو اضطراب في العمود الفقري العنقي. التقييم متعدد التخصصات ضروري.",
      },
    },
  ],
};

const MEDICAL_WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "دوخة مستمرة لأشهر — تقييم الحالات المعقدة في ألمانيا",
  description:
    "صفحة تشخيصية متخصصة لحالات الدوخة المزمنة وغير المحسومة — تنسيق التقييم المتخصص في ألمانيا عبر شبكة HNO وطب الأعصاب.",
  url: "https://medicalcaregermany.com/ar/dizziness-long-term",
  inLanguage: "ar",
  audience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalCondition",
    name: "Vestibular Disorders / Chronic Dizziness",
  },
};

const CONDITIONS = [
  {
    title: "مرض منيير",
    body: "اضطراب في الأذن الداخلية يسبب نوبات دوخة مصحوبة بطنين وضعف سمع.",
    href: "/ar/tinnitus-treatment-germany",
  },
  {
    title: "اضطرابات الأذن الداخلية",
    body: "اضطرابات دهليزية متعددة تؤثر على الجهاز المسؤول عن التوازن.",
    href: "/ar/ent-germany",
  },
  {
    title: "الدوخة بعد الإصابات",
    body: "دوخة ما بعد الصدمة الناتجة عن إصابات الرأس والرقبة والحوادث.",
    href: "/ar/complex-trauma-germany",
  },
  {
    title: "اضطرابات التوازن العصبية",
    body: "اضطرابات المخيخ والمسارات العصبية المركزية المرتبطة بالتوازن.",
    href: "/ar/neurology-treatment-germany",
  },
  {
    title: "طنين + دوخة",
    body: "الارتباط بين الطنين المزمن والدوخة — تقييم مشترك ضروري.",
    href: "/ar/tinnitus-treatment-germany",
  },
  {
    title: "مشاكل العمود الفقري والتوازن",
    body: "الاضطرابات العنقية وتأثيرها على الجهاز الدهليزي والتوازن.",
    href: "/ar/spine-surgery-germany",
  },
  {
    title: "الصداع النصفي الدهليزي",
    body: "نوع من الصداع النصفي يسبب دوخة مزمنة بدون ألم رأس واضح دائماً.",
    href: "/ar/neurology-treatment-germany",
  },
  {
    title: "حالات غير مشخصة",
    body: "دوخة مستمرة مع فحوصات طبيعية — تحتاج تقييماً متخصصاً متعدد التخصصات.",
    href: "/ar/submit-case",
  },
];

const PATHWAY_STEPS = [
  {
    n: "01",
    title: "مراجعة التقارير السابقة",
    body: "استقبال وتحليل جميع التقارير الطبية والفحوصات السابقة المتعلقة بالدوخة.",
  },
  {
    n: "02",
    title: "تحليل الأعراض المزمنة",
    body: "تقييم مفصّل لطبيعة الدوخة، مدتها، محفزاتها، والأعراض المصاحبة.",
  },
  {
    n: "03",
    title: "تحديد الحاجة إلى تقييم HNO أو أعصاب",
    body: "تصنيف الحالة: هل المنشأ أذني (HNO) أم عصبي أم مشترك؟",
  },
  {
    n: "04",
    title: "مراجعة الصور MRI / CT",
    body: "تحليل التصوير المتاح وتحديد ما إذا كان التصوير المتخصص للأذن الداخلية مطلوباً.",
  },
  {
    n: "05",
    title: "تحديد المسار التشخيصي المناسب",
    body: "وضع خطة تشخيصية واضحة: اختبارات دهليزية، تقييم عصبي، أو كليهما.",
  },
  {
    n: "06",
    title: "تنسيق التقييم داخل ألمانيا",
    body: "تنسيق الموعد مع التخصص المناسب داخل شبكة المستشفيات الجامعية الألمانية.",
  },
];

const INTERNAL_LINKS = [
  { href: "/ar/ent-germany", label: "الأنف والأذن والحنجرة في ألمانيا" },
  { href: "/ar/tinnitus-treatment-germany", label: "علاج الطنين في ألمانيا" },
  { href: "/ar/head-neck-tumor-germany", label: "أورام الرأس والعنق" },
  { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
  { href: "/ar/neurology-treatment-germany", label: "علاج الأعصاب في ألمانيا" },
  { href: "/ar/complex-trauma-germany", label: "الصدمات المعقدة والإصابات" },
];

export default function DizzinessLongTerm() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "دوخة مستمرة لأشهر — تقييم الحالات المعقدة في ألمانيا | Medical Care Germany";
    const descContent =
      "تقييم متخصص لحالات الدوخة المزمنة وغير المحسومة في ألمانيا — اضطرابات الأذن الداخلية، الجهاز الدهليزي، الدوخة العصبية، وما بعد الإصابات.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = descContent;
      document.head.appendChild(n);
    }
    let c = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!c) {
      c = document.createElement("link") as HTMLLinkElement;
      c.rel = "canonical";
      document.head.appendChild(c);
    }
    c.href = "https://medicalcaregermany.com/ar/dizziness-long-term";
  }, []);

  return (
    <div dir="rtl" style={{ ...FONT, background: "#fff", color: "#1a1a2e" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIZZINESS_FAQ_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MEDICAL_WEBPAGE_JSONLD),
        }}
      />

      <SmartNavLayer currentPath="/ar/dizziness-long-term" />
      <HreflangTags currentPath="/ar/dizziness-long-term" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "80px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Medical Care Germany — تقييم دهليزي متخصص
          </p>
          <h1
            style={{
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 500,
              color: "#f8fafc",
              lineHeight: 1.45,
              marginBottom: 20,
            }}
          >
            دوخة مستمرة لأشهر بدون تفسير واضح؟
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#94a3b8",
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto 36px",
            }}
          >
            في هذه الحالات، المشكلة ليست في الأعراض بل في دقة التشخيص.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Link
              href="/ar/send-medical-reports"
              style={{
                padding: "14px 32px",
                background: "#fff",
                color: "#0B1C2C",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              إرسال التقارير الطبية
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 32px",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#f8fafc",
                fontSize: 14,
                fontWeight: 300,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              تحدث مع منسق
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: CLINICAL ENTRY BLOCK ─────────────────────── */}
      <section
        style={{ padding: "72px 24px 64px", background: "#fff" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            مؤشرات سريرية
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 500,
              color: "#0B1C2C",
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            متى تصبح الدوخة علامة على مشكلة أعمق؟
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                icon: "◈",
                text: "دوخة مستمرة لأكثر من 3 أشهر دون تحسن",
              },
              {
                icon: "◈",
                text: "عدم الاتزان عند المشي أو تغيير الوضعية",
              },
              {
                icon: "◈",
                text: "دوخة ظهرت بعد إصابة أو حادث",
              },
              {
                icon: "◈",
                text: "ضغط في الأذن مصحوب بطنين",
              },
              {
                icon: "◈",
                text: "صور MRI طبيعية لكن الأعراض مستمرة",
              },
              {
                icon: "◈",
                text: "علاجات متعددة لم تُحسّن الحالة",
              },
              {
                icon: "◈",
                text: "تشخيصات متضاربة أو غير محددة",
              },
              {
                icon: "◈",
                text: "دوخة تؤثر على القدرة على العمل والحياة اليومية",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 20px",
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#0B1C2C", fontSize: 16, marginTop: 2 }}>
                  {item.icon}
                </span>
                <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 32,
              borderRight: "4px solid #0B1C2C",
              paddingRight: 20,
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8 }}>
              التأخير في تشخيص الدوخة المزمنة قد يُخفي سبباً عصبياً أو أذنياً
              يحتاج تدخلاً تشخيصياً دقيقاً. هذه الصفحة مخصصة للحالات غير
              المحسومة فقط.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: HNO + NEUROLOGY OVERLAP ──────────────────── */}
      <section
        style={{ padding: "72px 24px 64px", background: "#f8fafc" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            علاقات تشخيصية
          </p>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 500,
              color: "#0B1C2C",
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            العلاقة بين اضطرابات التوازن والأعصاب والأنف والأذن
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "الجهاز الدهليزي",
                body: "الأذن الداخلية تحتوي على الجهاز الدهليزي المسؤول عن الإحساس بالتوازن والحركة. أي اضطراب فيه يؤدي إلى دوخة.",
              },
              {
                title: "الأذن الداخلية والقوقعة",
                body: "الاضطرابات القوقعية والدهليزية تتداخل — ضعف السمع والطنين والدوخة قد تكون مظاهر لنفس الحالة.",
              },
              {
                title: "التداخل العصبي",
                body: "الصداع النصفي الدهليزي، اضطرابات المخيخ، والتصلب المتعدد يمكن أن تسبب دوخة مزمنة بمنشأ عصبي مركزي.",
              },
              {
                title: "العمود الفقري العنقي",
                body: "اضطرابات الفقرات العنقية تؤثر على تدفق الدم للمخيخ وقد تسبب دوخة وضعية مزمنة.",
              },
              {
                title: "الدوخة ما بعد الصدمة",
                body: "إصابات الرأس والرقبة تسبب تلفاً في الأذن الداخلية أو الأعصاب الدهليزية — تحتاج تقييماً متخصصاً مشتركاً.",
              },
              {
                title: "الصداع النصفي الدهليزي",
                body: "نوع من الصداع النصفي يسبب دوخة مزمنة دون ألم رأس واضح دائماً — كثيراً ما يُشخَّص متأخراً.",
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 20px",
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderTop: "3px solid #0B1C2C",
                }}
              >
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0B1C2C",
                    marginBottom: 10,
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DIAGNOSTIC PATHWAY ───────────────────────── */}
      <section
        style={{ padding: "72px 24px 64px", background: "#0B1C2C" }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            المسار التشخيصي
          </p>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 500,
              color: "#f8fafc",
              lineHeight: 1.5,
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            كيف تتم مراجعة حالات الدوخة المعقدة؟
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PATHWAY_STEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  paddingBottom: i < PATHWAY_STEPS.length - 1 ? 0 : 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      color: "#94a3b8",
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  >
                    {step.n}
                  </div>
                  {i < PATHWAY_STEPS.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        height: 40,
                        background: "rgba(255,255,255,0.1)",
                      }}
                    />
                  )}
                </div>
                <div style={{ paddingBottom: 32 }}>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#f1f5f9",
                      marginBottom: 6,
                      marginTop: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7 }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONDITIONS MATRIX ─────────────────────────── */}
      <section
        style={{ padding: "72px 24px 64px", background: "#fff" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            مصفوفة الحالات
          </p>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 500,
              color: "#0B1C2C",
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            الحالات المرتبطة بالدوخة واضطرابات التوازن
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {CONDITIONS.map((cond, i) => (
              <a
                key={i}
                href={cond.href}
                style={{
                  display: "block",
                  padding: "20px 18px",
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "#0B1C2C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "#e2e8f0")
                }
              >
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0B1C2C",
                    marginBottom: 8,
                  }}
                >
                  {cond.title}
                </h3>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>
                  {cond.body}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FAQ ACCORDION ─────────────────────────────── */}
      <section
        style={{ padding: "72px 24px 64px", background: "#f8fafc" }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            أسئلة سريرية شائعة
          </p>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 500,
              color: "#0B1C2C",
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            أسئلة حول الدوخة المزمنة
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {DIZZINESS_FAQ_JSONLD.mainEntity.map((item, i) => (
              <div
                key={i}
                style={{ borderBottom: "1px solid #e2e8f0" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "right",
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    ...FONT,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#0B1C2C",
                      lineHeight: 1.5,
                      textAlign: "right",
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontSize: 18,
                      color: "#94a3b8",
                      flexShrink: 0,
                      transform:
                        openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: 20 }}>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#475569",
                        lineHeight: 1.8,
                      }}
                    >
                      {item.acceptedAnswer.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INTERNAL MEDICAL CONNECTIONS ─────────────── */}
      <section
        style={{ padding: "64px 24px 56px", background: "#fff" }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            مسارات مرتبطة
          </p>
          <h2
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 500,
              color: "#0B1C2C",
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            مسارات طبية مرتبطة
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {INTERNAL_LINKS.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                style={{
                  display: "block",
                  padding: "14px 18px",
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                  fontSize: 13,
                  color: "#0B1C2C",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: AUTHORITY CTA ─────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px 72px",
          background: "#0B1C2C",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            تقييم أولي
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 34px)",
              fontWeight: 400,
              color: "#f8fafc",
              lineHeight: 1.5,
              marginBottom: 20,
            }}
          >
            إرسال التقارير الطبية للتقييم الأولي
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 520,
              margin: "0 auto 40px",
            }}
          >
            تنسيق مراجعة الحالات المعقدة والمزمنة داخل شبكة من التخصصات
            المرتبطة بالتوازن والأعصاب والأنف والأذن في ألمانيا.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Link
              href="/ar/send-medical-reports"
              style={{
                padding: "16px 36px",
                background: "#fff",
                color: "#0B1C2C",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              إرسال التقارير الطبية
            </Link>
            <Link
              href="/ar/submit-case"
              style={{
                padding: "16px 36px",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#f8fafc",
                fontSize: 14,
                fontWeight: 300,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              طلب تقييم أولي
            </Link>
          </div>
          <p
            style={{
              marginTop: 24,
              fontSize: 12,
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            لا تحتاج ملفاً كاملاً — أرسل ما هو متوفر الآن
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <ArabicFooterGuide />
    </div>
  );
}
