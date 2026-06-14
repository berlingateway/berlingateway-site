/**
 * /ar/maxillofacial-surgery-germany
 * SOVEREIGN SURGICAL AUTHORITY PAGE — Maxillofacial & Facial Reconstruction
 * Seven-section institutional layout.
 * Color system: Deep Navy #0B1C2C | White | Emerald accent #059669
 */

import React, { useState } from "react";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%D9%8A%20%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9%20%D8%A7%D9%84%D9%88%D8%AC%D9%87";

const SURGICAL_TECHNIQUES = [
  {
    code: "TRAUMA",
    title: "إعادة بناء الوجه بعد الحوادث",
    desc: "إصلاح كسور عظام الوجه والفكين والجمجمة بعد الحوادث والإصابات الكبرى.",
  },
  {
    code: "TUMOR",
    title: "الترميم بعد استئصال الأورام",
    desc: "إعادة بناء الوجه والفكين بعد استئصال الأورام الحميدة والخبيثة في منطقة الرأس والعنق.",
  },
  {
    code: "ORTHO",
    title: "جراحة تقويم الفكين",
    desc: "تصحيح التشوهات الهيكلية في الفكين — سواء خلقية أو مكتسبة — بتقنيات دقيقة.",
  },
  {
    code: "MICRO",
    title: "الجراحة الدقيقة الوعائية للوجه",
    desc: "نقل الأنسجة الحرة وإعادة توصيل الأوعية الدموية في منطقة الوجه والفكين.",
  },
];

const PATHWAY_STEPS = [
  { n: "01", label: "مراجعة الصور والتقارير الطبية" },
  { n: "02", label: "التقييم الأولي للحالة" },
  { n: "03", label: "التنسيق مع المركز الجراحي" },
  { n: "04", label: "التخطيط الجراحي ثلاثي الأبعاد" },
  { n: "05", label: "الإجراء الجراحي" },
  { n: "06", label: "المتابعة وإعادة التأهيل" },
];

const COMPLEX_INDICATORS = [
  "كسور الوجه والفكين بعد الحوادث",
  "الترميم بعد استئصال أورام الوجه والفكين",
  "تشوهات الفكين الخلقية أو المكتسبة",
  "الحالات التي فشلت فيها جراحات سابقة",
  "إصابات الوجه المعقدة التي تستدعي رأياً ثانياً",
  "الحالات التي تستدعي جراحة دقيقة وعائية",
];

const DOCUMENTS_REQUIRED = [
  "التقارير الطبية والتشخيصية الحالية",
  "صور الأشعة المقطعية للوجه والفكين",
  "صور الرنين المغناطيسي (إن وجدت)",
  "صور فوتوغرافية سريرية للحالة",
  "تقارير العمليات السابقة (إن وجدت)",
];

const COORDINATION_POINTS = [
  "مراجعة التوثيق الطبي والصور الجراحية",
  "التنسيق مع مراكز جراحة الوجه والفكين المتخصصة في ألمانيا",
  "التواصل مع الفريق الجراحي نيابةً عن المريض",
  "دعم المريض الدولي في مراحل التخطيط والتنفيذ",
  "إدارة المسار العلاجي من التقييم حتى المتابعة",
  "التنسيق مع فرق إعادة التأهيل بعد الجراحة",
];

const FAQ_ITEMS = [
  {
    q: "ما هي أفضل مستشفيات جراحة الوجه والفكين في ألمانيا؟",
    a: "تتصدر مستشفيات جامعية مثل Charité برلين، ومستشفى جامعة ميونخ (LMU)، ومستشفى هايدلبرغ الجامعي قائمة المراكز المتخصصة في جراحة الوجه والفكين. تتميز هذه المراكز بفرق متعددة التخصصات وتقنيات التخطيط الجراحي ثلاثي الأبعاد.",
  },
  {
    q: "كم تكلف جراحة الوجه والفكين في ألمانيا؟",
    a: "تتفاوت التكاليف بحسب نوع الجراحة وتعقيد الحالة. جراحات إعادة البناء بعد الحوادث أو الأورام تختلف عن جراحات تقويم الفكين. التقييم الأولي مجاني ويتضمن تحديد التكاليف التقريبية بناءً على التقارير الطبية.",
  },
  {
    q: "هل يمكن علاج تشوهات الفكين الخلقية في ألمانيا؟",
    a: "نعم. المراكز الجراحية الألمانية المتخصصة تعالج التشوهات الخلقية والمكتسبة في الفكين بتقنيات متقدمة تشمل التخطيط ثلاثي الأبعاد وجراحة تقويم الفكين (Orthognathic Surgery). كثير من الحالات التي لم تجد حلاً في بلدانها وجدت نتائج إيجابية في ألمانيا.",
  },
  {
    q: "كيف أحصل على رأي ثانٍ لجراحة الوجه والفكين؟",
    a: "أرسل تقاريرك الطبية وصور الأشعة المقطعية وأي وثائق سريرية عبر نموذج إرسال التقارير. يتم مراجعة الملف وتنسيق رأي ثانٍ مع متخصص في ألمانيا خلال 24-48 ساعة من الاستلام.",
  },
  {
    q: "ما الوثائق المطلوبة لتنسيق جراحة الوجه والفكين في ألمانيا؟",
    a: "المطلوب: التقارير الطبية والتشخيصية الحالية، صور الأشعة المقطعية للوجه والفكين، صور الرنين المغناطيسي إن وجدت، صور فوتوغرافية سريرية للحالة، وتقارير العمليات السابقة إن وجدت. يمكن إرسال الوثائق رقمياً.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section style={{ padding: "72px 24px", background: "#f8fafc" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p
          style={{
            ...AR,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "#94a3b8",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          أسئلة شائعة
        </p>
        <h2
          style={{
            ...AR,
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 500,
            color: "#0B1C2C",
            marginBottom: 36,
            lineHeight: 1.5,
          }}
        >
          أسئلة يبحث عنها المرضى
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid #e2e8f0",
                ...(i === FAQ_ITEMS.length - 1 ? { borderBottom: "1px solid #e2e8f0" } : {}),
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  ...AR,
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "18px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "right",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    ...AR,
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#0B1C2C",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    color: "#059669",
                    fontWeight: 300,
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div
                  style={{
                    ...AR,
                    fontSize: 14,
                    color: "#475569",
                    lineHeight: 1.8,
                    paddingBottom: 18,
                    paddingRight: 0,
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MaxillofacialSurgeryGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/maxillofacial-surgery-germany" />
      <HreflangTags currentPath="/ar/maxillofacial-surgery-germany" />
      {/* ── AUTHORITY STATS BLOCK ──────────────────────────────── */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "40px 24px",
          textAlign: "center",
          borderBottom: "1px solid #1e3a5f",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: "clamp(18px, 3vw, 24px)",
              fontWeight: 500,
              color: "#f8fafc",
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            جراحة الوجه والفكين في ألمانيا — تقييم قبل أي قرار
          </p>
          <p
            style={{
              ...AR,
              fontSize: 14,
              color: "#94a3b8",
              marginBottom: 28,
              letterSpacing: "0.05em",
            }}
          >
            أكثر من 500 حالة منسّقة منذ 2012
          </p>
          <a
            href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
            style={{
              ...AR,
              display: "inline-block",
              padding: "12px 28px",
              background: "#fff",
              color: "#0B1C2C",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            إرسال التقارير الطبية
          </a>
        </div>
      </section>

      {/* ── SECTION 1: HERO ──────────────────────────────────────── */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "80px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Medical Care Germany — تنسيق جراحي متخصص
          </p>
          <h1
            style={{
              ...AR,
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 500,
              color: "#f8fafc",
              lineHeight: 1.45,
              marginBottom: 20,
            }}
          >
            جراحة الوجه والفكين في ألمانيا
          </h1>
          <p
            style={{
              ...AR,
              fontSize: 16,
              color: "#94a3b8",
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto 36px",
            }}
          >
            تنسيق جراحي متخصص لحالات الوجه والفكين المعقدة — من إعادة البناء
            بعد الحوادث والأورام إلى تصحيح التشوهات الهيكلية — ضمن مراكز
            ألمانية متقدمة.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              style={{
                ...AR,
                display: "inline-block",
                padding: "12px 28px",
                background: "#fff",
                color: "#0B1C2C",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid #fff",
              }}
            >
              إرسال التقارير الطبية
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...AR,
                display: "inline-block",
                padding: "12px 28px",
                background: "transparent",
                color: "#94a3b8",
                fontSize: 13,
                fontWeight: 400,
                textDecoration: "none",
                border: "1px solid #334155",
              }}
            >
              طلب تقييم أولي
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CLINICAL UNDERSTANDING ──────────────────── */}
      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p
          style={{
            ...AR,
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "#94a3b8",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          الفهم السريري
        </p>
        <h2
          style={{
            ...AR,
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 500,
            color: "#0B1C2C",
            marginBottom: 24,
            lineHeight: 1.5,
          }}
        >
          لماذا تحتاج حالات الوجه والفكين إلى تقييم متخصص في ألمانيا؟
        </h2>
        <p
          style={{
            ...AR,
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.9,
            marginBottom: 20,
          }}
        >
          جراحة الوجه والفكين تجمع بين الدقة التقنية والفهم العميق للتشريح
          الوجهي. الحالات التي تعقب الحوادث الكبرى، أو استئصال الأورام، أو
          التشوهات الخلقية تتطلب تخطيطاً جراحياً متكاملاً يجمع بين التقنيات
          الحديثة والخبرة المتخصصة.
        </p>
        <p
          style={{
            ...AR,
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.9,
          }}
        >
          في ألمانيا، تُجرى هذه الجراحات في مراكز متخصصة تجمع بين التخطيط
          ثلاثي الأبعاد، والجراحة الدقيقة الوعائية، وفرق متعددة التخصصات —
          مع التنسيق الكامل من التقييم حتى إعادة التأهيل.
        </p>
        <div
          style={{
            marginTop: 36,
            borderTop: "1px solid #e2e8f0",
            paddingTop: 28,
          }}
        >
          <p
            style={{
              ...AR,
              fontSize: 11,
              color: "#94a3b8",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            الحالات التي نتلقاها
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {COMPLEX_INDICATORS.map((item) => (
              <li
                key={item}
                style={{
                  ...AR,
                  fontSize: 14,
                  color: "#334155",
                  padding: "8px 0",
                  borderBottom: "1px solid #f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#059669",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 3: SURGICAL TECHNOLOGY ─────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            التخصصات الجراحية
          </p>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              color: "#0B1C2C",
              marginBottom: 48,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            تخصصات جراحة الوجه والفكين في ألمانيا
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 1,
              background: "#e2e8f0",
            }}
          >
            {SURGICAL_TECHNIQUES.map((t) => (
              <div
                key={t.code}
                style={{ background: "#fff", padding: "28px 24px" }}
              >
                <p
                  style={{
                    ...AR,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "#059669",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {t.code}
                </p>
                <p
                  style={{
                    ...AR,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#0B1C2C",
                    marginBottom: 8,
                    lineHeight: 1.5,
                  }}
                >
                  {t.title}
                </p>
                <p
                  style={{
                    ...AR,
                    fontSize: 12,
                    color: "#64748b",
                    lineHeight: 1.7,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: AUTHORITY STATEMENT ─────────────────────── */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            الموقف السريري
          </p>
          <p
            style={{
              ...AR,
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: 400,
              color: "#f8fafc",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            "جراحة الوجه والفكين في ألمانيا تبدأ من تقييم تشريحي دقيق — لا من
            قرار جراحي مسبق. كل حالة تُدرس بمعزل عن غيرها وفق احتياجاتها
            الوظيفية والجمالية الخاصة."
          </p>
          <div
            style={{
              marginTop: 32,
              height: 1,
              background: "#1e3a5f",
              maxWidth: 120,
              margin: "32px auto 0",
            }}
          />
        </div>
      </section>

      {/* ── SECTION 5: PATIENT PATHWAY ──────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            مسار المريض
          </p>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              color: "#0B1C2C",
              marginBottom: 48,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            من التقييم إلى إعادة التأهيل
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: 1,
              background: "#e2e8f0",
            }}
          >
            {PATHWAY_STEPS.map((step) => (
              <div
                key={step.n}
                style={{
                  background: "#fff",
                  padding: "24px 16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <span
                    style={{
                      ...AR,
                      fontSize: 10,
                      color: "#059669",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.n}
                  </span>
                </div>
                <p
                  style={{
                    ...AR,
                    fontSize: 12,
                    color: "#94a3b8",
                    lineHeight: 1.6,
                  }}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: REQUIRED DOCUMENTS + COORDINATION ───────── */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 48,
            }}
          >
            <div>
              <p
                style={{
                  ...AR,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                الوثائق المطلوبة
              </p>
              <h2
                style={{
                  ...AR,
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  fontWeight: 500,
                  color: "#0B1C2C",
                  marginBottom: 20,
                  lineHeight: 1.5,
                }}
              >
                للتقييم الأولي
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {DOCUMENTS_REQUIRED.map((doc) => (
                  <li
                    key={doc}
                    style={{
                      ...AR,
                      fontSize: 13,
                      color: "#334155",
                      padding: "8px 0",
                      borderBottom: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#059669",
                        flexShrink: 0,
                      }}
                    />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                style={{
                  ...AR,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                منظومة التنسيق
              </p>
              <h2
                style={{
                  ...AR,
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  fontWeight: 500,
                  color: "#0B1C2C",
                  marginBottom: 20,
                  lineHeight: 1.5,
                }}
              >
                دورنا في المسار العلاجي
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {COORDINATION_POINTS.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      ...AR,
                      fontSize: 13,
                      color: "#334155",
                      padding: "8px 0",
                      borderBottom: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#059669",
                        flexShrink: 0,
                        marginTop: 6,
                      }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────────── */}
      <FAQAccordion />

      {/* ── RELATED EXPERTISE ───────────────────────────────────── */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "48px 24px",
          borderTop: "1px solid #1e3a5f",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            تخصصات ذات صلة
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { href: "/ar/reconstructive-surgery-germany", label: "الجراحة الترميمية" },
              { href: "/ar/corrective-plastic-surgery-germany", label: "التجميل التصحيحي" },
              { href: "/ar/complex-trauma-germany", label: "الإصابات المعقدة" },
              { href: "/ar/neurology-germany", label: "طب الأعصاب" },
              { href: "/send-medical-reports", label: "إرسال التقارير الطبية" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  ...AR,
                  fontSize: 12,
                  color: "#94a3b8",
                  padding: "8px 16px",
                  border: "1px solid #1e3a5f",
                  textDecoration: "none",
                  background: "transparent",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL INSTITUTIONAL CTA ─────────────────── */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "80px 24px",
          textAlign: "center",
          borderTop: "1px solid #1e3a5f",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            التقييم الأولي
          </p>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              color: "#f8fafc",
              marginBottom: 16,
              lineHeight: 1.5,
            }}
          >
            إرسال التقارير الطبية للتقييم
          </h2>
          <p
            style={{
              ...AR,
              fontSize: 14,
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            يتم تقييم حالات الوجه والفكين بالتنسيق مع المراكز الجراحية
            المتخصصة وفق طبيعة كل حالة.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              style={{
                ...AR,
                display: "inline-block",
                padding: "13px 32px",
                background: "#fff",
                color: "#0B1C2C",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              إرسال التقارير الطبية للتقييم
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...AR,
                display: "inline-block",
                padding: "13px 32px",
                background: "transparent",
                color: "#94a3b8",
                fontSize: 13,
                fontWeight: 400,
                textDecoration: "none",
                border: "1px solid #334155",
              }}
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER GUIDE ────────────────────────────────────────── */}
      <ArabicFooterGuide />
    </div>
  );
}
