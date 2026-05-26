/**
 * /ar/breast-cancer-treatment-germany
 * MCG — سرطان الثدي في ألمانيا
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%20%D8%AD%D8%A7%D9%84%D8%AA%D9%8A";

const SITUATIONS = [
  "تشخيص سرطان الثدي مؤكد وتريدين رأياً ثانياً",
  "التقارير متضاربة في تحديد نوع الورم",
  "قيل لك إن الاستئصال الكامل ضروري",
  "العلاج الكيميائي لم يعطِ نتيجة كافية",
  "الورم هرموني وتريدين فهم خيارات العلاج",
  "تريدين تقييم العلاج المناعي (Immunotherapy)",
  "الورم في مرحلة متقدمة وتريدين خيارات أخرى",
  "سبق أن خضعت للعلاج وعاد الورم",
];

const WHY_CARDS = [
  {
    title: "تشخيص جيني متقدم — BRCA وHER2 وغيرها",
    body: "المستشفيات الجامعية الألمانية تُجري الفحوصات الجينية الكاملة لتحديد نوع الورم بدقة وتخصيص بروتوكول العلاج",
  },
  {
    title: "علاج موجّه حسب نوع الورم — ليس بروتوكولاً واحداً للجميع",
    body: "كل حالة تُعالَج بناءً على نتائج التشخيص الجيني — علاج مستهدف أو مناعي أو هرموني حسب طبيعة الورم",
  },
  {
    title: "فريق متكامل في نفس المركز الأكاديمي",
    body: "جراح الثدي وطبيب الأورام وأخصائي الأشعة يعملون معاً في لجنة متعددة التخصصات لكل حالة",
  },
];

const FAQ_DATA = [
  {
    q: "هل يمكن علاج سرطان الثدي في ألمانيا بدون استئصال كامل؟",
    a: "في حالات كثيرة نعم — الاستئصال الجزئي مع العلاج الإشعاعي خيار متاح يحدده فريق متخصص بعد التقييم الدقيق.",
  },
  {
    q: "ما الفرق بين سرطان الثدي HER2 وHER2 سلبي؟",
    a: "HER2 إيجابي يستجيب لعلاجات مستهدفة متاحة في ألمانيا — التمييز بينهما يغيّر بروتوكول العلاج كاملاً.",
  },
  {
    q: "هل العلاج المناعي متاح لسرطان الثدي في ألمانيا؟",
    a: "نعم — في حالات محددة مثل Triple Negative Breast Cancer، العلاج المناعي متاح في المراكز الأكاديمية الألمانية.",
  },
  {
    q: "كيف أرسل ملفي لتقييم حالة سرطان الثدي؟",
    a: "أرسلي التقارير والأشعة عبر الموقع أو واتساب — منسق يرد خلال 24 ساعة.",
  },
  {
    q: "هل يمكن إجراء الفحص الجيني BRCA في ألمانيا؟",
    a: "نعم — الفحص الجيني متاح وجزء من بروتوكول التشخيص الشامل في المراكز الأكاديمية الألمانية.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const MEDICAL_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "سرطان الثدي في ألمانيا | تقييم متخصص وخيارات العلاج",
  description:
    "تقييم حالات سرطان الثدي مع أساتذة متخصصين في المستشفيات الجامعية الألمانية. نخدم المريضات من ليبيا والجزائر والسعودية والعراق. رد خلال 24 ساعة.",
  url: "https://medicalcaregermany.com/ar/breast-cancer-treatment-germany",
  inLanguage: "ar",
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Breast Cancer" },
  publisher: {
    "@type": "Organization",
    name: "Medical Care Germany",
    url: "https://medicalcaregermany.com",
    logo: { "@type": "ImageObject", url: "https://medicalcaregermany.com/og-image.jpg" },
  },
  image: "https://medicalcaregermany.com/og-image.jpg",
};

export default function BreastCancerArabic() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "سرطان الثدي في ألمانيا | تقييم متخصص وخيارات العلاج";
    const descContent =
      "تقييم حالات سرطان الثدي مع أساتذة متخصصين في المستشفيات الجامعية الألمانية. نخدم المريضات من ليبيا والجزائر والسعودية والعراق. رد خلال 24 ساعة.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = descContent;
      document.head.appendChild(n);
    }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) {
      c = document.createElement("link") as HTMLLinkElement;
      c.rel = "canonical";
      document.head.appendChild(c);
    }
    c.href = "https://medicalcaregermany.com/ar/breast-cancer-treatment-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/breast-cancer-treatment-germany" />
      <HreflangTags currentPath="/ar/breast-cancer-treatment-germany" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([MEDICAL_WEBPAGE_SCHEMA, FAQ_SCHEMA]) }}
      />

      {/* ══ SECTION 1: HERO (dark) ═══════════════════════════════════════════ */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            MEDICAL CARE GERMANY — برلين
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.55, marginBottom: 24 }}>
            سرطان الثدي في ألمانيا
            <br />
            قبل أي قرار — تقييم متخصص في برلين.
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.9, maxWidth: 620, margin: "0 auto 36px" }}>
            سرطان الثدي يحتاج فريقاً متكاملاً من أورام وجراحة وأشعة تداخلية.
            <br />
            ألمانيا من أفضل دول العالم في علاجه.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/ar/send-medical-reports"
              style={{ padding: "14px 32px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-block" }}
            >
              أرسل ملفك — رد خلال 24 ساعة
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: SITUATIONS (light) ════════════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 40, textAlign: "center" }}>
            متى تحتاجين تقييماً متخصصاً في ألمانيا؟
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {SITUATIONS.map((text, i) => (
              <div
                key={i}
                style={{ padding: "20px", border: "1px solid #e2e8f0", background: "#fff", display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <span style={{ color: "#0B1C2C", fontSize: 16, marginTop: 2, flexShrink: 0 }}>◈</span>
                <p style={{ ...AR, fontSize: 14, color: "#334155", lineHeight: 1.65, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: PATIENT STORY (dark) ══════════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#0B1C2C", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            من حالاتنا
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.8vw, 28px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.6, marginBottom: 32 }}>
            "قالوا إن الاستئصال الكامل ضروري — برلين وجدت خياراً أدق"
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 2, maxWidth: 640, margin: "0 auto 32px" }}>
            مريضة جزائرية — سرطان ثدي.
            <br />
            أوصى أطباؤها باستئصال كامل.
            <br />
            أرسلت ملفها إلينا.
            <br /><br />
            في برلين — راجع فريق الأورام الحالة بدقة.
            <br />
            تبيّن أن الاستئصال الجزئي مع علاج إشعاعي
            <br />
            يعطي نفس النتيجة مع حفاظ أكبر.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24 }}>
            <p style={{ ...AR, fontSize: 16, color: "#f8fafc", fontWeight: 500, lineHeight: 1.7 }}>
              القرار الطبي الصحيح يبدأ بالتشخيص الكامل.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: WHY GERMANY (light, 3 cards) ══════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 48, textAlign: "center" }}>
            لماذا ألمانيا لعلاج سرطان الثدي؟
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {WHY_CARDS.map((card, i) => (
              <div
                key={i}
                style={{ padding: "28px 24px", border: "1px solid #e2e8f0", background: "#f8fafc" }}
              >
                <h3 style={{ ...AR, fontSize: 16, fontWeight: 600, color: "#0B1C2C", marginBottom: 12 }}>
                  {card.title}
                </h3>
                <p style={{ ...AR, fontSize: 14, color: "#475569", lineHeight: 1.7, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: FAQ ACCORDION ══════════════════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 2.8vw, 30px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 40, textAlign: "center" }}>
            أسئلة شائعة
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQ_DATA.map((item, i) => (
              <div
                key={i}
                style={{ border: "1px solid #e2e8f0", background: "#fff" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    ...AR,
                    width: "100%",
                    padding: "18px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#0B1C2C",
                    textAlign: "right",
                    gap: 12,
                  }}
                >
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span style={{ fontSize: 20, color: "#94a3b8", flexShrink: 0 }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 18px" }}>
                    <p style={{ ...AR, fontSize: 14, color: "#475569", lineHeight: 1.8, margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: FINAL CTA (dark) ══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px 72px", background: "#0B1C2C", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.65, marginBottom: 28 }}>
            أرسلي ملفك — سيقرأه متخصص خلال 24 ساعة.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 20 }}>
            <Link
              href="/ar/send-medical-reports"
              style={{ padding: "14px 32px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-block" }}
            >
              أرسلي ملفك الطبي
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "14px 32px", border: "1px solid rgba(255,255,255,0.3)", color: "#f8fafc", fontSize: 14, fontWeight: 300, textDecoration: "none", display: "inline-block" }}
            >
              تحدثي عبر واتساب
            </a>
          </div>
          <p style={{ ...AR, fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
            لا تشخيص عن بُعد. فقط تقييم حقيقي.
          </p>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
