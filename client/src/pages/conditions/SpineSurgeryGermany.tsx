/**
 * /ar/spine-surgery-germany
 * Arabic Authority Page — Spine Surgery Germany
 * Sovereign institutional layout — dark navy hero, ArabicFooterGuide.
 */

import { useEffect } from "react";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const SPINE_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي حالات العمود الفقري التي يتم تنسيقها في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تشمل الحالات المنسقة: الانزلاق الغضروفي، تضيق القناة الشوكية، فشل العمليات السابقة، إصابات الحوادث، وأمراض العمود الفقري المعقدة للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تقييم حالة الانزلاق الغضروفي من بعد؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم إرسال صور الرنين المغناطيسي (MRI) والتقارير الطبية عبر البريد الإلكتروني أو واتسآب، ويتم تقييمها من برلين خلال 24–48 ساعة لتحديد الخيار الجراحي المناسب." }
    },
    {
      "@type": "Question",
      "name": "هل يمكن علاج فشل العمليات السابقة في العمود الفقري في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "نعم. ألمانيا تمتلك مراكز متخصصة في تقييم وعلاج حالات فشل العمليات السابقة، بما يشمل التقييم المعمق وخيارات الجراحة التصحيحية." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تنسيق حالات العمود الفقري من ليبيا والسودان ودول الخليج؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم استقبال صور الرنين والتقارير من برلين وتقييمها من قِبل المنسق الطبي، ثم تحديد المسار الجراحي المناسب داخل منظومة جراحة العمود الفقري في ألمانيا." }
    }
  ]
};

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B9%D9%85%D9%88%D8%AF%20%D8%A7%D9%84%D9%81%D9%82%D8%B1%D9%8A";

const CHECKLIST = [
  "ألم ظهر أو رقبة مستمر رغم العلاج",
  "تنميل أو ضعف في الذراعين أو الساقين",
  "انزلاق غضروفي مع ضغط على الأعصاب",
  "تضيق القناة الشوكية",
  "فشل عملية سابقة في العمود الفقري",
  "إصابة بعد حادث أو سقوط",
];

const CASES = [
  "الانزلاق الغضروفي",
  "تضيق القناة الشوكية",
  "عدم ثبات الفقرات",
  "تشوهات العمود الفقري",
  "آلام ما بعد عمليات سابقة",
  "إصابات العمود الفقري بعد الحوادث",
];

const DOCUMENTS = [
  "تقرير MRI أو CT حديث",
  "تقارير العمليات السابقة إن وجدت",
  "وصف الأعراض الحالية",
  "قائمة العلاجات السابقة",
  "تقرير طبي من الطبيب المعالج إن وجد",
];

export default function SpineSurgeryGermany() {
  useEffect(() => {
    document.title = "جراحة العمود الفقري في ألمانيا — تقييم الحالات المعقدة | Medical Care Germany";
    const descContent = "تنسيق متخصص لجراحة العمود الفقري في ألمانيا. للحالات الدولية القادمة من ليبيا والسودان ودول الخليج — تنسيق طبي متخصص من برلين.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/spine-surgery-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPINE_FAQ_JSONLD) }} />
      <SmartNavLayer currentPath="/ar/spine-surgery-germany" />
      <HreflangTags currentPath="/ar/spine-surgery-germany" />

      {/* ── SEO META ─────────────────────────────────────────────── */}
      <title>جراحة العمود الفقري في ألمانيا | تقييم الحالات المعقدة</title>
      <meta
        name="description"
        content="تقييم طبي متخصص لجراحة العمود الفقري في ألمانيا، الانزلاق الغضروفي، تضيق القناة الشوكية، فشل العمليات السابقة، وإصابات الحوادث."
      />

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
            جراحة العمود الفقري في ألمانيا
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
            تقييم دقيق للحالات المعقدة في العمود الفقري قبل اتخاذ قرار جراحي.
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
              إرسال تقارير العمود الفقري للتقييم
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

      {/* ── SECTION 2: INTRO ────────────────────────────────────── */}
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
          لماذا لا يكون القرار الجراحي بسيطاً؟
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
          ليست كل آلام الظهر أو الرقبة تحتاج إلى جراحة. في الحالات المعقدة،
          يكون القرار الجراحي مرتبطاً بدقة التشخيص، نتائج التصوير، الأعراض
          العصبية، ومدى تأثير الحالة على الحركة والحياة اليومية.
        </p>
        <p
          style={{
            ...AR,
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.9,
          }}
        >
          في جراحة العمود الفقري، لا يكفي وجود ألم أو صورة MRI غير طبيعية
          لاتخاذ قرار العملية. يجب ربط التصوير بالأعراض العصبية، قوة العضلات،
          الإحساس، المشي، ونتائج العلاج السابق.
        </p>

        {/* Checklist */}
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
            متى تحتاج الحالة إلى تقييم جراحي متخصص؟
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {CHECKLIST.map((item) => (
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

      {/* ── SECTION 3: CASES REVIEWED ───────────────────────────── */}
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
            الحالات المقيَّمة
          </p>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              color: "#0B1C2C",
              marginBottom: 40,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            الحالات التي يتم تقييمها
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 1,
              background: "#e2e8f0",
            }}
          >
            {CASES.map((c) => (
              <div
                key={c}
                style={{
                  background: "#fff",
                  padding: "28px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#059669",
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    ...AR,
                    fontSize: 14,
                    color: "#1e293b",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PATHWAY ──────────────────────────────────── */}
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
          المسار التشخيصي
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
          كيف يتم التقييم في ألمانيا؟
        </h2>
        <p
          style={{
            ...AR,
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.9,
            marginBottom: 16,
          }}
        >
          يبدأ المسار بمراجعة صور MRI أو CT والتقارير السابقة. عند الحاجة، يتم
          توجيه الملف إلى جراحي عمود فقري أو جراحة أعصاب أو عظام حسب نوع
          الحالة، لتحديد ما إذا كانت الجراحة ضرورية أو أن هناك بدائل علاجية
          أخرى.
        </p>
        <div style={{ marginTop: 32 }}>
          {[
            { n: "01", label: "مراجعة صور MRI / CT والتقارير الطبية" },
            { n: "02", label: "التقييم الأولي وتحديد نوع الحالة" },
            { n: "03", label: "التنسيق مع الجراح المختص (عظام / أعصاب)" },
            { n: "04", label: "تحديد ضرورة الجراحة أو البدائل العلاجية" },
            { n: "05", label: "التخطيط للمسار الجراحي إن لزم" },
            { n: "06", label: "المتابعة بعد الإجراء" },
          ].map((step) => (
            <div
              key={step.n}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                padding: "16px 0",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "#059669",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  minWidth: 28,
                  paddingTop: 2,
                }}
              >
                {step.n}
              </span>
              <p
                style={{
                  ...AR,
                  fontSize: 14,
                  color: "#334155",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: DOCUMENTS ────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            التوثيق المطلوب
          </p>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              color: "#f8fafc",
              marginBottom: 32,
              lineHeight: 1.5,
            }}
          >
            المستندات المطلوبة للتقييم
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {DOCUMENTS.map((doc) => (
              <li
                key={doc}
                style={{
                  ...AR,
                  fontSize: 14,
                  color: "#94a3b8",
                  padding: "10px 0",
                  borderBottom: "1px solid #1e3a52",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
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
      </section>

      {/* ── SECTION 6: CTA ──────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            التقييم الأولي
          </p>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 500,
              color: "#0B1C2C",
              marginBottom: 20,
              lineHeight: 1.5,
            }}
          >
            إرسال تقارير العمود الفقري للتقييم
          </h2>
          <p
            style={{
              ...AR,
              fontSize: 14,
              color: "#64748b",
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            يتم مراجعة الملفات الطبية بشكل سري ضمن إطار استشاري منظم.
          </p>
          <a
            href="/send-medical-reports"
            style={{
              ...AR,
              display: "inline-block",
              padding: "14px 36px",
              background: "#0B1C2C",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            إرسال التقارير الطبية
          </a>
        </div>
      </section>

      {/* ── SECTION 7: RELATED LINKS ────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "56px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            صفحات ذات صلة
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {[
              { href: "/ar/neurology-treatment-germany", label: "علاج الأعصاب في ألمانيا" },
              { href: "/ar/complex-trauma-germany", label: "تقييم الصدمات المعقدة" },
              { href: "/ar/orthopedics-germany", label: "العظام والمفاصل في ألمانيا" },
              { href: "/ar/submit-case", label: "تقديم الحالة الطبية" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  ...AR,
                  fontSize: 13,
                  color: "#0B1C2C",
                  textDecoration: "none",
                  padding: "8px 16px",
                  border: "1px solid #cbd5e1",
                  background: "#fff",
                  display: "inline-block",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <CrossClusterSection
        clusters={["neuro_spine", "trauma_mri_rehab", "hno_neuro"]}
        excludeCurrentHref="/ar/spine-surgery-germany"
      />
      <ArabicFooterGuide />
    </div>
  );
}
