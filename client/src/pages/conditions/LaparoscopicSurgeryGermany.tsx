/**
 * /ar/laparoscopic-surgery-germany
 * SOVEREIGN SURGICAL AUTHORITY PAGE — Laparoscopic & Minimally Invasive Surgery
 * Seven-section institutional layout.
 * Color system: Deep Navy #0B1C2C | White | Emerald accent #059669
 * DO NOT introduce marketing language, consumer UI, or startup aesthetics.
 */

import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9%20%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%AC%D8%B1%D8%A7%D8%AD%D9%8A%D8%A9";

const SURGICAL_TECHNIQUES = [
  {
    code: "LAP",
    title: "الجراحة التنظيرية الكلاسيكية",
    desc: "ثلاثة إلى أربعة شقوق صغيرة، كاميرا دقيقة، تعافٍ أسرع وندبات أقل مقارنة بالجراحة المفتوحة.",
  },
  {
    code: "SILS",
    title: "الجراحة أحادية المنفذ",
    desc: "شق واحد فقط في منطقة السرة — أقل ألماً وأفضل نتيجة تجميلية.",
  },
  {
    code: "ROB",
    title: "الجراحة الروبوتية المساعدة",
    desc: "دقة ميكانيكية فائقة في الحالات المعقدة، مع تحكم ثلاثي الأبعاد للجراح.",
  },
  {
    code: "NOTES",
    title: "الجراحة عبر الفتحات الطبيعية",
    desc: "تقنية متقدمة بدون شقوق جلدية ظاهرة — متاحة في مراكز ألمانية مختارة.",
  },
];

const PATHWAY_STEPS = [
  { n: "01", label: "مراجعة التقارير الطبية" },
  { n: "02", label: "التقييم الأولي للحالة" },
  { n: "03", label: "التنسيق مع المركز الجراحي" },
  { n: "04", label: "التخطيط الجراحي التفصيلي" },
  { n: "05", label: "الإجراء الجراحي التنظيري" },
  { n: "06", label: "المتابعة بعد العلاج" },
];

const COMPLEX_INDICATORS = [
  "الحالات التي رُفضت للجراحة التقليدية",
  "التدخلات الجراحية المتكررة",
  "الحالات التي تستدعي تقنية أحادية المنفذ",
  "جراحة السمنة والجهاز الهضمي المتقدمة",
  "الأورام الحميدة في التجويف البطني",
  "الحالات التي تتطلب دقة روبوتية",
];

const COORDINATION_POINTS = [
  "مراجعة التوثيق الطبي وتقييم الحالة الجراحية",
  "التنسيق مع مراكز الجراحة التنظيرية المتخصصة في ألمانيا",
  "التواصل مع الفريق الجراحي نيابةً عن المريض",
  "دعم المريض الدولي في مراحل التخطيط والتنفيذ",
  "إدارة المسار العلاجي من التقييم حتى المتابعة",
  "التنسيق مع الجهات المرجعية والراعين الطبيين",
];

export default function LaparoscopicSurgeryGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/laparoscopic-surgery-germany" />
      <HreflangTags currentPath="/ar/laparoscopic-surgery-germany" />
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
            الجراحة التنظيرية المتقدمة في ألمانيا
          </h1>
          <p
            style={{
              ...AR,
              fontSize: 16,
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 600,
              margin: "0 auto 36px",
            }}
          >
            تنسيق جراحي متخصص للحالات التي تستدعي تقنيات تنظيرية أو روبوتية
            متقدمة ضمن مراكز ألمانية رائدة في الجراحة الطفيفة التوغل.
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
          متى تكون الجراحة التنظيرية هي الخيار الأمثل؟
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
          الجراحة التنظيرية ليست مجرد بديل للجراحة المفتوحة — بل هي منهج
          جراحي مستقل يتطلب تخطيطاً دقيقاً وخبرة متخصصة. في الحالات المعقدة،
          يُحدث اختيار التقنية المناسبة فارقاً جوهرياً في النتيجة والتعافي.
        </p>
        <p
          style={{
            ...AR,
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.9,
          }}
        >
          في ألمانيا، تُجرى الجراحات التنظيرية المتقدمة في مراكز متخصصة تجمع
          بين أحدث التقنيات الروبوتية، والكفاءة الجراحية العالية، والتخطيط
          الجراحي المبني على بيانات دقيقة — مع التنسيق الكامل من التقييم حتى
          المتابعة.
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
            التقنية الجراحية
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
            التقنيات التنظيرية المتاحة في ألمانيا
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
                style={{
                  background: "#fff",
                  padding: "28px 24px",
                }}
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
            "الجراحة التنظيرية في ألمانيا ليست مجرد خيار تقني — بل هي قرار
            سريري يُبنى على تقييم دقيق لكل حالة بمعزل عن غيرها."
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

      {/* ── SECTION 6: INSTITUTIONAL COORDINATION ──────────────── */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              color: "#0B1C2C",
              marginBottom: 16,
              lineHeight: 1.5,
            }}
          >
            منظومة التنسيق الطبي في ألمانيا
          </h2>
          <p
            style={{
              ...AR,
              fontSize: 15,
              color: "#475569",
              lineHeight: 1.9,
              marginBottom: 36,
              maxWidth: 640,
            }}
          >
            نُقدّم خدمة التنسيق — لا الجراحة ذاتها. دورنا هو ضمان وصول المريض
            إلى المركز الجراحي المناسب وفق طبيعة حالته، مع إدارة كاملة للمسار
            العلاجي.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 1,
              background: "#e2e8f0",
            }}
          >
            {COORDINATION_POINTS.map((point, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "20px 22px",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#059669",
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                <p
                  style={{
                    ...AR,
                    fontSize: 13,
                    color: "#334155",
                    lineHeight: 1.7,
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              ...AR,
              fontSize: 12,
              color: "#94a3b8",
              marginTop: 24,
              lineHeight: 1.7,
              borderTop: "1px solid #f1f5f9",
              paddingTop: 16,
            }}
          >
            بالتنسيق مع البيئات الطبية الجامعية الألمانية — التنسيق المنظم مع
            المراكز الجراحية التنظيرية المتخصصة.
          </p>
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
              { href: "/ar/reconstructive-surgery-germany", label: "الجراحة الترميمية" },
              { href: "/ar/complex-trauma-germany", label: "الإصابات المعقدة" },
              { href: "https://tally.so/r/68MrBP", label: "إرسال التقارير الطبية" },
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
            إرسال التقارير الطبية للمراجعة الأولية
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
            يتم تقييم الحالات الجراحية بالتنسيق مع المراكز التنظيرية المناسبة
            وفق طبيعة كل حالة.
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
              إرسال التقارير الطبية
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
