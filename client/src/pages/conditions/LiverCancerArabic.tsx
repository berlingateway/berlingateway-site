/**
 * /ar/liver-cancer-treatment-germany
 * MCG — سرطان الكبد في ألمانيا
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
  "تشخيص سرطان الكبد مؤكد وتريد رأياً ثانياً",
  "التقارير متضاربة في تحديد المرحلة",
  "قيل لك إن الحالة غير قابلة للجراحة",
  "العلاج الكيميائي لم يعطِ نتيجة",
  "تريد تقييم إمكانية زراعة الكبد",
  "الورم في موضع معقد يحتاج جراحة دقيقة",
  "تريد بروتوكول علاجي من مركز أكاديمي",
  "الحالة نادرة وتحتاج خبرة متخصصة",
];

const WHY_CARDS = [
  {
    title: "مراكز متخصصة في جراحة الكبد والمرارة",
    body: "المستشفيات الجامعية الألمانية تضم أقساماً متخصصة حصراً في جراحة الكبد والمرارة والبنكرياس",
  },
  {
    title: "تقنيات متقدمة — TACE وSIRT والجراحة الروبوتية",
    body: "تتوفر في ألمانيا أحدث تقنيات العلاج التدخلي والجراحة الدقيقة لأورام الكبد",
  },
  {
    title: "فريق متكامل — جراحة وأورام وأشعة تداخلية",
    body: "كل حالة تُناقَش في لجنة متعددة التخصصات — جراح الكبد وطبيب الأورام وأخصائي الأشعة التداخلية",
  },
];

const FAQ_DATA = [
  {
    q: "هل يمكن علاج سرطان الكبد في ألمانيا؟",
    a: "نعم — ألمانيا من أفضل دول العالم في جراحة الكبد وعلاج الأورام بتقنيات متقدمة.",
  },
  {
    q: "ما تكلفة علاج سرطان الكبد في ألمانيا؟",
    a: "تختلف حسب المرحلة والبروتوكول — المراجعة الأولية للملف مجانية وتحدد المسار المناسب.",
  },
  {
    q: "هل زراعة الكبد متاحة في ألمانيا للمرضى الدوليين؟",
    a: "نعم — المستشفيات الجامعية الألمانية تستقبل مرضى دوليين لتقييم إمكانية الزراعة.",
  },
  {
    q: "كيف أرسل ملفي الطبي لتقييم حالة سرطان الكبد؟",
    a: "أرسل التقارير والأشعة عبر الموقع أو واتساب — منسق يرد خلال 24 ساعة.",
  },
  {
    q: "ما الفرق بين TACE وSIRT في علاج سرطان الكبد؟",
    a: "كلاهما علاج تدخلي موجّه للورم — الاختيار يعتمد على حجم الورم وموضعه ويحدده فريق متخصص.",
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
  name: "سرطان الكبد في ألمانيا | تقييم متخصص وتنسيق العلاج",
  description:
    "تنسيق تقييم وعلاج سرطان الكبد في المستشفيات الجامعية الألمانية. نخدم المرضى من ليبيا والجزائر والعراق والسعودية. رد خلال 24 ساعة.",
  url: "https://medicalcaregermany.com/ar/liver-cancer-treatment-germany",
  inLanguage: "ar",
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  about: { "@type": "MedicalCondition", name: "Liver Cancer" },
  publisher: {
    "@type": "Organization",
    name: "Medical Care Germany",
    url: "https://medicalcaregermany.com",
    logo: { "@type": "ImageObject", url: "https://medicalcaregermany.com/og-image.jpg" },
  },
  image: "https://medicalcaregermany.com/og-image.jpg",
};

export default function LiverCancerArabic() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "سرطان الكبد في ألمانيا | تقييم متخصص وتنسيق العلاج";
    const descContent =
      "تنسيق تقييم وعلاج سرطان الكبد في المستشفيات الجامعية الألمانية. نخدم المرضى من ليبيا والجزائر والعراق والسعودية. رد خلال 24 ساعة.";
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
    c.href = "https://medicalcaregermany.com/ar/liver-cancer-treatment-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/liver-cancer-treatment-germany" />
      <HreflangTags currentPath="/ar/liver-cancer-treatment-germany" />

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
            سرطان الكبد — التقييم في ألمانيا قبل أي قرار
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.9, maxWidth: 620, margin: "0 auto 36px" }}>
            سرطان الكبد من أكثر الحالات التي تحتاج فريقاً متكاملاً — لا طبيباً واحداً.
            <br />
            نسّق Medical Care Germany وصولك إلى أفضل مراكز أورام الكبد في ألمانيا.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
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
            "قالوا إن الحالة غير قابلة للجراحة — برلين رأت غير ذلك"
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 2, maxWidth: 640, margin: "0 auto 32px" }}>
            مريض من ليبيا — ورم في الكبد.
            <br />
            في بلده قالوا: الموضع معقد والجراحة مستحيلة.
            <br />
            أرسل ملفه إلينا.
            <br /><br />
            في برلين — راجع فريق جراحة الكبد الحالة كاملة.
            <br />
            تبيّن أن الجراحة ممكنة بتقنية متقدمة.
            <br />
            تمت العملية بنجاح.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24 }}>
            <p style={{ ...AR, fontSize: 16, color: "#f8fafc", fontWeight: 500, lineHeight: 1.7 }}>
              الحالة المعقدة تحتاج المكان الصحيح — لا الاستسلام.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: WHY GERMANY (light, 3 cards) ══════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 48, textAlign: "center" }}>
            لماذا ألمانيا لعلاج سرطان الكبد؟
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
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
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
