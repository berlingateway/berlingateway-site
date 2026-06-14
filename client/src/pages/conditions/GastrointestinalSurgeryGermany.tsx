/**
 * /ar/gastrointestinal-surgery-germany
 * SOVEREIGN SURGICAL AUTHORITY PAGE — Gastrointestinal & Abdominal Surgery
 * Seven-section institutional layout.
 * Color system: Deep Navy #0B1C2C | White | Emerald accent #059669
 */

import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%D9%8A%20%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2%20%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%8A";

const SURGICAL_TECHNIQUES = [
  {
    code: "LAP",
    title: "الجراحة التنظيرية للجهاز الهضمي",
    desc: "استئصال المرارة، علاج الارتجاع المريئي، وجراحة الأمعاء بتقنيات تنظيرية دقيقة.",
  },
  {
    code: "COLON",
    title: "جراحة القولون والمستقيم",
    desc: "استئصال الأورام الحميدة والخبيثة، علاج التهاب القولون التقرحي، وجراحة الفتق الداخلي.",
  },
  {
    code: "UPPER",
    title: "جراحة الجهاز الهضمي العلوي",
    desc: "جراحة المعدة والمريء والاثني عشر — بما فيها حالات السمنة المرضية وارتجاع الحمض.",
  },
  {
    code: "HEPATO",
    title: "جراحة الكبد والبنكرياس والمرارة",
    desc: "استئصال الأورام الكبدية، علاج حصى المرارة المعقدة، وجراحة البنكرياس المتخصصة.",
  },
];

const PATHWAY_STEPS = [
  { n: "01", label: "مراجعة التقارير والتحاليل" },
  { n: "02", label: "التقييم الأولي للحالة" },
  { n: "03", label: "التنسيق مع المركز الجراحي" },
  { n: "04", label: "التخطيط الجراحي التفصيلي" },
  { n: "05", label: "الإجراء الجراحي" },
  { n: "06", label: "المتابعة بعد العلاج" },
];

const COMPLEX_INDICATORS = [
  "أورام الجهاز الهضمي الحميدة والخبيثة",
  "الحالات التي تستدعي رأياً ثانياً جراحياً",
  "التهاب القولون التقرحي وداء كرون المعقد",
  "حصى المرارة المتكررة أو المعقدة",
  "الارتجاع المريئي المزمن غير المستجيب للعلاج",
  "جراحة السمنة المرضية وتكميم المعدة",
];

const DOCUMENTS_REQUIRED = [
  "التقارير الطبية والتشخيصية الحالية",
  "نتائج التنظير الهضمي (إن وجدت)",
  "صور الأشعة المقطعية أو الرنين المغناطيسي",
  "نتائج التحاليل المخبرية الحديثة",
  "تقارير العمليات السابقة (إن وجدت)",
];

const COORDINATION_POINTS = [
  "مراجعة التوثيق الطبي وتقييم الحالة الجراحية",
  "التنسيق مع مراكز جراحة الجهاز الهضمي المتخصصة في ألمانيا",
  "التواصل مع الفريق الجراحي نيابةً عن المريض",
  "دعم المريض الدولي في مراحل التخطيط والتنفيذ",
  "إدارة المسار العلاجي من التقييم حتى المتابعة",
  "التنسيق مع الجهات المرجعية والراعين الطبيين",
];

export default function GastrointestinalSurgeryGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/gastrointestinal-surgery-germany" />
      <HreflangTags currentPath="/ar/gastrointestinal-surgery-germany" />
      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
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
            جراحة الجهاز الهضمي في ألمانيا
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
            تنسيق جراحي متخصص لحالات الجهاز الهضمي المعقدة — من أورام القولون
            وجراحة المعدة إلى الكبد والبنكرياس — ضمن مراكز ألمانية متقدمة.
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
          متى تستدعي حالات الجهاز الهضمي مراجعة جراحية متخصصة؟
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
          حالات الجهاز الهضمي المعقدة — كأورام القولون، والتهاب الأمعاء
          المزمن، وجراحة الكبد والبنكرياس — تتطلب تقييماً جراحياً متخصصاً
          يتجاوز البروتوكولات الاعتيادية. الرأي الثاني الجراحي في ألمانيا قد
          يُغيّر مسار العلاج بشكل جوهري.
        </p>
        <p
          style={{
            ...AR,
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.9,
          }}
        >
          في ألمانيا، تُعالَج هذه الحالات ضمن مراكز متخصصة تجمع بين الجراحة
          التنظيرية المتقدمة، والجراحة الروبوتية، والتخطيط الجراحي متعدد
          التخصصات — مع التنسيق الكامل من التقييم الأولي حتى المتابعة.
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
            تخصصات جراحة الجهاز الهضمي في ألمانيا
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
            "الرأي الجراحي الثاني في ألمانيا ليس ترفاً — بل هو قرار سريري قد
            يُحدد مسار العلاج بأكمله في حالات الجهاز الهضمي المعقدة."
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
            من التقييم إلى الإجراء الجراحي
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
            {/* Documents */}
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

            {/* Coordination */}
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
              { href: "/ar/hernia-treatment-germany", label: "علاج الفتق في ألمانيا" },
              { href: "/ar/laparoscopic-surgery-germany", label: "الجراحة التنظيرية المتقدمة" },
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
            يتم تقييم حالات الجهاز الهضمي بالتنسيق مع المراكز الجراحية
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
