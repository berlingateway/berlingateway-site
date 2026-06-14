/**
 * ArabicSubmitCase — /ar/submit-case
 * Arabic RTL submission entry point.
 * Prevents 404 from Arabic navigation links.
 */

import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const NAVY = "#0B1C2C";
const SLATE_TEXT = "#94a3b8";
const SLATE_BODY = "#64748b";
const WHITE = "#f8fafc";
const WA_LINK = "https://wa.me/4915781497451";

export default function ArabicSubmitCase() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: NAVY }} className="form-page-main">
      <SmartNavLayer currentPath="/ar/submit-case" />
      <HreflangTags currentPath="/ar/submit-case" />
      <title>إرسال التقارير الطبية | Medical Care Germany</title>
      <meta
        name="description"
        content="إرسال التقارير الطبية للتقييم الأولي من قِبَل فريق التنسيق الطبي في Medical Care Germany — برلين."
      />
      <link rel="canonical" href="https://medicalcaregermany.com/ar/submit-case" />
      <link rel="alternate" hrefLang="en" href="https://medicalcaregermany.com/submit-case" />
      <link rel="alternate" hrefLang="de" href="https://medicalcaregermany.com/de" />
      <link rel="alternate" hrefLang="ar" href="https://medicalcaregermany.com/ar/submit-case" />

      {/* ── HERO ── */}
      <section style={{ background: NAVY, padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: SLATE_TEXT, textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — برلين
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 500, color: WHITE, lineHeight: 1.45, marginBottom: 20 }}>
            إرسال التقارير الطبية للتقييم
          </h1>
          <p style={{ ...AR, fontSize: 16, color: SLATE_TEXT, lineHeight: 1.85, maxWidth: 600, margin: "0 auto 36px" }}>
            يمكنكم إرسال التقارير الطبية وملفات الأشعة والنتائج المخبرية لمراجعة أولية من قِبَل فريق التنسيق الطبي.
            تُعالَج جميع الملفات بسرية تامة.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              style={{ ...AR, display: "inline-block", padding: "13px 32px", background: "#fff", color: NAVY, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
            >
              إرسال التقارير الطبية
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...AR, display: "inline-block", padding: "13px 32px", background: "transparent", color: SLATE_TEXT, fontSize: 14, textDecoration: "none", border: "1px solid #334155" }}
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW TO SUBMIT ── */}
      <section style={{ background: "#0B1C2C", padding: "64px 24px", borderTop: "1px solid #1e3a52" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 20, lineHeight: 1.55 }}>
            ما الذي يمكن إرساله؟
          </h2>
          <p style={{ ...AR, fontSize: 15, color: SLATE_TEXT, lineHeight: 1.9, marginBottom: 20 }}>
            يقبل فريق التنسيق الطبي جميع أنواع الوثائق الطبية — التقارير السريرية، نتائج الأشعة (MRI، CT، PET)،
            التقارير المخبرية، ملخصات الخروج من المستشفى، والتقارير الجراحية السابقة.
          </p>
          <p style={{ ...AR, fontSize: 15, color: SLATE_BODY, lineHeight: 1.9, marginBottom: 32 }}>
            تُراجَع الوثائق المُرسَلة من قِبَل فريق التنسيق وتُوجَّه إلى الاختصاصي المناسب في ألمانيا
            بناءً على طبيعة الحالة والتخصص المطلوب.
          </p>
          <a
            href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
            style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}
          >
            إرسال التقارير الطبية
          </a>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: SLATE_BODY, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            مسار التقييم
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 40, textAlign: "center", lineHeight: 1.5 }}>
            كيف تسير عملية المراجعة؟
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { n: "١", t: "إرسال الوثائق الطبية", d: "إرسال التقارير والأشعة والنتائج عبر نموذج الإرسال الآمن." },
              { n: "٢", t: "مراجعة أولية من فريق التنسيق", d: "يراجع فريق التنسيق الوثائق ويحدد التخصص الطبي المناسب." },
              { n: "٣", t: "توجيه الحالة للاختصاصي", d: "تُوجَّه الحالة إلى الطبيب المختص في ألمانيا للتقييم الأولي." },
              { n: "٤", t: "تقرير التقييم الأولي", d: "يُعَدّ تقرير بالرأي الطبي الأولي والخطوات المقترحة." },
            ].map((step, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 20, padding: "28px 0", borderBottom: "1px solid #e2e8f0", alignItems: "flex-start" }}
              >
                <span style={{ ...AR, fontSize: 22, fontWeight: 600, color: "#059669", flexShrink: 0, minWidth: 32, textAlign: "center" }}>
                  {step.n}
                </span>
                <div>
                  <p style={{ ...AR, fontSize: 15, fontWeight: 500, color: NAVY, marginBottom: 6, lineHeight: 1.5 }}>{step.t}</p>
                  <p style={{ ...AR, fontSize: 14, color: SLATE_BODY, lineHeight: 1.7, margin: 0 }}>{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFIDENTIALITY ── */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 500, color: NAVY, marginBottom: 20, lineHeight: 1.5 }}>
            السرية والخصوصية
          </h2>
          <p style={{ ...AR, fontSize: 15, color: SLATE_BODY, lineHeight: 1.9, marginBottom: 20 }}>
            تُعامَل جميع الوثائق الطبية المُرسَلة بسرية تامة وفق إجراءات حماية البيانات المعمول بها في ألمانيا.
            لا تُشارَك أي معلومات مع أطراف خارجية دون موافقة صريحة من المريض.
          </p>
          <p style={{ ...AR, fontSize: 14, color: SLATE_TEXT, lineHeight: 1.8 }}>
            للاستفسار المباشر: info@medicalcaregermany.com
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: NAVY, padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: WHITE, marginBottom: 16, lineHeight: 1.5 }}>
            ابدأ بإرسال تقاريرك الطبية
          </h2>
          <p style={{ ...AR, fontSize: 14, color: SLATE_TEXT, lineHeight: 1.8, marginBottom: 28 }}>
            تُراجَع الحالات بناءً على الأولوية الطبية ومدى اكتمال الوثائق.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              style={{ ...AR, display: "inline-block", padding: "13px 32px", background: "#fff", color: NAVY, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
            >
              إرسال التقارير الطبية
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...AR, display: "inline-block", padding: "13px 32px", background: "transparent", color: SLATE_TEXT, fontSize: 14, textDecoration: "none", border: "1px solid #334155" }}
            >
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "32px 24px 16px", borderTop: "1px solid #e2e8f0" }}>
        <ArabicFooterGuide />
        <p style={{ ...AR, textAlign: "center", fontSize: 11, color: SLATE_TEXT, marginTop: 16 }}>
          Medical Care Germany — برلين، ألمانيا
        </p>
      </footer>
    </div>
  );
}
