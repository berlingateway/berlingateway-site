/**
 * /ar/prostate-cancer-treatment-germany
 * MCG — سرطان البروستاتا في ألمانيا
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
  "تشخيص سرطان البروستاتا مؤكد وتريد رأياً ثانياً",
  "PSA مرتفع والتقارير غير حاسمة",
  "قيل لك إن الجراحة هي الحل الوحيد",
  "العلاج الهرموني لم يعطِ نتيجة",
  "الورم في مرحلة متقدمة وتريد خيارات أخرى",
  "تريد تقييم العلاج الإشعاعي الموجّه (PSMA)",
  "تريد بروتوكول علاجي من مركز أكاديمي",
  "سبق أن خضعت لعلاج وعادت الأعراض",
];

const WHY_CARDS = [
  {
    title: "تقنية PSMA PET-CT — التشخيص الأدق لسرطان البروستاتا",
    body: "تقنية تصوير متقدمة تكشف انتشار الورم بدقة عالية — متاحة في المستشفيات الجامعية الألمانية",
  },
  {
    title: "علاج إشعاعي موجّه بدقة عالية — IMRT وSBRT",
    body: "بروتوكولات علاجية متقدمة لا تتوفر في كل مكان — تُطبَّق في مراكز الأورام الجامعية الألمانية",
  },
  {
    title: "فريق متكامل — أورام وجراحة وأشعة تداخلية",
    body: "كل حالة تُناقَش في لجنة متعددة التخصصات — طبيب الأورام والجراح وأخصائي الأشعة",
  },
];

const FAQ_DATA = [
  {
    q: "هل يمكن علاج سرطان البروستاتا في ألمانيا بدون جراحة؟",
    a: "نعم — العلاج الإشعاعي الموجّه وتقنية PSMA خيارات متاحة في ألمانيا لحالات كثيرة لا تحتاج جراحة.",
  },
  {
    q: "ما هي تقنية PSMA في تشخيص سرطان البروستاتا؟",
    a: "تقنية تصوير متقدمة تكشف انتشار الورم بدقة عالية — متاحة في المستشفيات الجامعية الألمانية.",
  },
  {
    q: "هل PSA المرتفع يعني بالضرورة سرطان البروستاتا؟",
    a: "لا — PSA المرتفع يحتاج تقييماً متكاملاً. كثير من الحالات تُشخَّص خطأ بسبب الاعتماد على PSA وحده.",
  },
  {
    q: "كيف أرسل ملفي الطبي لتقييم حالة سرطان البروستاتا؟",
    a: "أرسل التقارير والأشعة عبر الموقع أو واتساب — منسق يرد خلال 24 ساعة.",
  },
  {
    q: "ما الفرق بين العلاج الإشعاعي والجراحة في سرطان البروستاتا؟",
    a: "كلاهما خيار علاجي فعّال — الاختيار يعتمد على مرحلة الورم وعمر المريض ويحدده فريق متخصص.",
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
  name: "سرطان البروستاتا في ألمانيا | تقييم متخصص وخيارات العلاج",
  description:
    "تقييم حالات سرطان البروستاتا مع أساتذة متخصصين في المستشفيات الجامعية الألمانية. نخدم المرضى من ليبيا والسعودية والعراق والجزائر. رد خلال 24 ساعة.",
  url: "https://medicalcaregermany.com/ar/prostate-cancer-treatment-germany",
  inLanguage: "ar",
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Prostate Cancer" },
  publisher: {
    "@type": "Organization",
    name: "Medical Care Germany",
    url: "https://medicalcaregermany.com",
    logo: { "@type": "ImageObject", url: "https://medicalcaregermany.com/og-image.jpg" },
  },
  image: "https://medicalcaregermany.com/og-image.jpg",
};

export default function ProstateCancerArabic() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "سرطان البروستاتا في ألمانيا | تقييم متخصص وخيارات العلاج";
    const descContent =
      "تقييم حالات سرطان البروستاتا مع أساتذة متخصصين في المستشفيات الجامعية الألمانية. نخدم المرضى من ليبيا والسعودية والعراق والجزائر. رد خلال 24 ساعة.";
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
    c.href = "https://medicalcaregermany.com/ar/prostate-cancer-treatment-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/prostate-cancer-treatment-germany" />
      <HreflangTags currentPath="/ar/prostate-cancer-treatment-germany" />

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
            سرطان البروستاتا في ألمانيا
            <br />
            قبل أي قرار — تقييم متخصص في برلين.
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.9, maxWidth: 620, margin: "0 auto 36px" }}>
            سرطان البروستاتا من أكثر الحالات التي تحتاج رأياً ثانياً قبل اختيار العلاج.
            <br />
            ألمانيا تملك بروتوكولات علاجية متقدمة لا تتوفر في كل مكان.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/ar/ارسال-التقارير-الطبية"
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
            متى تحتاج تقييماً متخصصاً في ألمانيا؟
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
            "قالوا إن الجراحة ضرورية — برلين وجدت خياراً آخر"
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 2, maxWidth: 640, margin: "0 auto 32px" }}>
            مريض ليبي — سرطان بروستاتا في مرحلة متقدمة.
            <br />
            في بلده أوصوا باستئصال فوري.
            <br />
            أرسل ملفه إلينا.
            <br /><br />
            في برلين — راجع فريق أورام البروستاتا الحالة كاملة.
            <br />
            تبيّن أن العلاج الإشعاعي الموجّه أنسب لحالته.
            <br />
            بدأ البروتوكول. تحسنت المؤشرات خلال 3 أشهر.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24 }}>
            <p style={{ ...AR, fontSize: 16, color: "#f8fafc", fontWeight: 500, lineHeight: 1.7 }}>
              الخيار الصحيح يبدأ بالتشخيص الصحيح.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: WHY GERMANY (light, 3 cards) ══════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 48, textAlign: "center" }}>
            لماذا ألمانيا لعلاج سرطان البروستاتا؟
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
            أرسل ملفك — سيقرأه متخصص خلال 24 ساعة.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 20 }}>
            <Link
              href="/ar/ارسال-التقارير-الطبية"
              style={{ padding: "14px 32px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-block" }}
            >
              أرسل ملفك الطبي
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "14px 32px", border: "1px solid rgba(255,255,255,0.3)", color: "#f8fafc", fontSize: 14, fontWeight: 300, textDecoration: "none", display: "inline-block" }}
            >
              تحدث عبر واتساب
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
