/**
 * /ar/hernia-treatment-germany
 * MASTER TEMPLATE — Sovereign Surgical Authority Page
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
  "https://wa.me/4917647757767?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9%20%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%81%D8%AA%D9%82";

const SURGICAL_TECHNIQUES = [
  {
    code: "TEP",
    title: "الإصلاح خلف الصفاق الكلي",
    desc: "تقنية تنظيرية تماماً — لا شق مفتوح، لا دخول للتجويف البريتوني.",
  },
  {
    code: "TAPP",
    title: "الإصلاح عبر البطن قبل الصفاق",
    desc: "وصول تنظيري عبر التجويف البريتوني مع تثبيت الشبكة في الفضاء قبل الصفاقي.",
  },
  {
    code: "Lap.",
    title: "الجراحة التنظيرية المتقدمة",
    desc: "ثلاثة شقوق صغيرة، كاميرا دقيقة، تعافٍ أسرع وندبات أقل.",
  },
  {
    code: "Rob.",
    title: "الجراحة الروبوتية المساعدة",
    desc: "دقة ميكانيكية فائقة في الحالات المعقدة وإعادة الإصلاح.",
  },
];

const PATHWAY_STEPS = [
  { n: "01", label: "مراجعة التقارير الطبية" },
  { n: "02", label: "التقييم الأولي" },
  { n: "03", label: "التنسيق مع المركز الجراحي" },
  { n: "04", label: "التخطيط العلاجي" },
  { n: "05", label: "الإجراء الجراحي" },
  { n: "06", label: "المتابعة بعد العلاج" },
];

const COMPLEX_INDICATORS = [
  "الفتق المتكرر بعد عملية سابقة",
  "الفتق العملاق أو متعدد الفتحات",
  "الألم المزمن بعد الجراحة الأولى",
  "مضاعفات الشبكة الجراحية",
  "فشل أكثر من إصلاح واحد",
  "حالات الرياضيين المحترفين",
];

const COORDINATION_POINTS = [
  "مراجعة التوثيق الطبي وتقييم الحالة",
  "التنسيق مع المراكز الجراحية المتخصصة في ألمانيا",
  "التواصل مع الفريق الجراحي نيابةً عن المريض",
  "دعم المريض الدولي في مراحل التخطيط والتنفيذ",
  "إدارة المسار العلاجي من التقييم حتى المتابعة",
  "التنسيق مع الجهات المرجعية والراعين الطبيين",
];

export default function HerniaTreatmentGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/hernia-treatment-germany" />
      <HreflangTags currentPath="/ar/hernia-treatment-germany" />
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
            علاج الفتق المتقدم في ألمانيا
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
            تنسيق جراحي متخصص للحالات البسيطة والمعقدة ضمن مراكز ألمانية
            متقدمة لجراحة الفتق والجراحة التنظيرية.
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
              href="/send-medical-reports"
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
          لماذا تحتاج بعض حالات الفتق إلى مراجعة متقدمة؟
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
          ليست كل حالات الفتق متشابهة. الحالات المتكررة، والفتق الكبير، وحالات
          الألم المزمن بعد الجراحة تتطلب تقييماً جراحياً متخصصاً يتجاوز
          الإجراءات الاعتيادية.
        </p>
        <p
          style={{
            ...AR,
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.9,
          }}
        >
          في ألمانيا، تُعالَج هذه الحالات ضمن منظومة جراحية متكاملة تجمع بين
          التقنيات التنظيرية المتقدمة، والجراحة الروبوتية، والتخطيط الجراحي
          الدقيق — مع التنسيق الكامل من لحظة التقييم حتى المتابعة.
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
            {[
              "تكرار الفتق بعد عملية سابقة",
              "الألم المزمن بعد الجراحة",
              "الفتق الكبير أو متعدد الفتحات",
              "فشل العمليات السابقة",
              "الحالات المعقدة للرياضيين المحترفين",
            ].map((item) => (
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
            التقنيات الجراحية المتقدمة في ألمانيا
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
                    marginBottom: 10,
                    lineHeight: 1.5,
                  }}
                >
                  {t.title}
                </p>
                <p
                  style={{
                    ...AR,
                    fontSize: 13,
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

      {/* ── SECTION 4: COMPLEX CASE INDICATORS ─────────────────── */}
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
          مؤشرات التعقيد
        </p>
        <h2
          style={{
            ...AR,
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 500,
            color: "#0B1C2C",
            marginBottom: 32,
            lineHeight: 1.5,
          }}
        >
          متى تصبح الحالة الجراحية معقدة؟
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {COMPLEX_INDICATORS.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "18px 20px",
                borderRight: "2px solid #0B1C2C",
                background: "#f8fafc",
              }}
            >
              <p style={{ ...AR, fontSize: 14, color: "#334155", lineHeight: 1.6 }}>
                {item}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            ...AR,
            fontSize: 13,
            color: "#94a3b8",
            marginTop: 28,
            lineHeight: 1.7,
            borderTop: "1px solid #e2e8f0",
            paddingTop: 20,
          }}
        >
          تستهدف هذه الصفحة المرضى الباحثين عن حلول جراحية متقدمة بعد تجارب
          علاجية سابقة غير مُرضية.
        </p>
      </section>

      {/* ── SECTION 5: CLINICAL PATHWAY ─────────────────────────── */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#475569",
              textTransform: "uppercase",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            المسار السريري
          </p>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              color: "#f1f5f9",
              marginBottom: 52,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            مراحل التنسيق الجراحي
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: 0,
              position: "relative",
            }}
          >
            {PATHWAY_STEPS.map((step, i) => (
              <div
                key={step.n}
                style={{
                  textAlign: "center",
                  padding: "0 12px 0",
                  position: "relative",
                }}
              >
                {/* connector line */}
                {i < PATHWAY_STEPS.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 18,
                      left: "-50%",
                      width: "100%",
                      height: 1,
                      background: "#1e3a5f",
                      zIndex: 0,
                    }}
                  />
                )}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                    position: "relative",
                    zIndex: 1,
                    background: "#0B1C2C",
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
            المراكز الجراحية المتخصصة.
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
              { href: "#", label: "الجراحة التنظيرية المتقدمة" },
              { href: "#", label: "خدمات التنسيق الطبي" },
              { href: "#", label: "مراجعة الحالات الجراحية المعقدة" },
              { href: "/ar/complex-trauma-germany", label: "الإصابات المعقدة" },
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
                  transition: "border-color 0.2s",
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
            يتم تقييم الحالات المعقدة بالتنسيق مع الجهات الطبية المناسبة وفق
            طبيعة كل حالة.
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
              href="/send-medical-reports"
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
