import { useEffect } from "react";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

export default function AboutArabic() {
  useEffect(() => {
    document.title = "من نحن | ميديكال كير جيرماني — برلين";
    const descContent =
      "فريق طبي عربي-ألماني يعمل من برلين منذ 2012. نتحدث لغتك ونفهم المنظومة الطبية الألمانية من الداخل. أكثر من 500 حالة معقدة منسّقة.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = descContent;
      document.head.appendChild(n);
    }

    // Organization + AboutPage Schema JSON-LD
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "من نحن — ميديكال كير جيرماني",
        "url": "https://medicalcaregermany.com/ar/about",
        "description":
          "فريق طبي عربي-ألماني يعمل من برلين منذ 2012. أكثر من 500 حالة معقدة منسّقة من ليبيا والجزائر والعراق والسعودية وأكثر من 20 دولة عربية.",
        "inLanguage": "ar",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Medical Care Germany",
          "url": "https://medicalcaregermany.com",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Medical Care Germany",
        "url": "https://medicalcaregermany.com",
        "foundingDate": "2012",
        "description":
          "فريق طبي عربي-ألماني متخصص في تنسيق الحالات المعقدة مع مستشفيات وأساتذة في ألمانيا.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Perleberger Str. 41",
          "addressLocality": "Berlin",
          "postalCode": "10559",
          "addressCountry": "DE",
        },
        "telephone": "+493025730875",
        "email": "info@medicalcaregermany.com",
      },
    ];
    const existing = document.querySelector('script[data-schema="about-ar"]');
    if (!existing) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-schema", "about-ar");
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
    return () => {
      const s = document.querySelector('script[data-schema="about-ar"]');
      if (s) s.remove();
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      dir="rtl"
      style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, 'Segoe UI', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      <HreflangTags currentPath="/ar/about" />
      <SmartNavLayer currentPath="/ar/about" />

      {/* ══ SECTION 1: HERO (dark) ══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#0B1C2C",
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              ...AR,
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            MEDICAL CARE GERMANY — برلين
          </p>
          <h1
            style={{
              ...AR,
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 300,
              color: "#f8fafc",
              lineHeight: 1.4,
              marginBottom: 32,
            }}
          >
            نحن لسنا وسيطاً.
            <br />
            نحن الجسر.
          </h1>
          <p
            style={{
              ...AR,
              fontSize: "clamp(16px, 2vw, 19px)",
              fontWeight: 300,
              color: "#94a3b8",
              lineHeight: 1.9,
              marginBottom: 40,
              maxWidth: 620,
              margin: "0 auto 40px",
            }}
          >
            جئنا من مجتمع عربي — ونعيش منذ عقود
            <br />
            في المجتمع الألماني.
            <br />
            درسنا هنا. عملنا هنا. وفهمنا كيف يفكر
            <br />
            الطبيب الألماني حين يقرأ ملفك.
            <br />
            <br />
            رأينا كثيرين يضيعون وسط المستشفيات —
            <br />
            مترجمون لا يفهمون الطب،
            <br />
            ولغة طبية لا تصل كما ينبغي.
            <br />
            <br />
            قررنا أن نكون الحل.
          </p>
          <a
            href="https://wa.me/4915781497451?text=%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D8%AB%20%D9%85%D8%B9%20%D9%85%D9%86%D8%B3%D9%82%20%D8%B7%D8%A8%D9%8A%20%D8%AD%D9%88%D9%84%20%D8%AD%D8%A7%D9%84%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 4,
              fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            تحدث معنا عبر واتساب
          </a>
        </div>
      </section>

      {/* ══ SECTION 2: 3 CARDS (light) ══════════════════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              title: "من داخل ألمانيا",
              body: "فريقنا يعمل يومياً من برلين — مع ملفات المرضى، مع المستشفيات، مع الأطباء. ليس من مكتب بعيد.",
            },
            {
              title: "نفهم اللغتين",
              body: "نتحدث العربية الطبية ونكتب الألمانية الأكاديمية. الفرق بين ترجمة صحيحة وترجمة طبية دقيقة — نحن نعرفه.",
            },
            {
              title: "منذ 2012",
              body: "أكثر من 500 حالة معقدة. من ليبيا والجزائر والعراق والسعودية وأكثر من 20 دولة عربية.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                padding: "32px 28px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  ...AR,
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: 12,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  ...AR,
                  fontSize: 15,
                  fontWeight: 300,
                  color: "#475569",
                  lineHeight: 1.85,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 3: WHY WE DO THIS (dark quote) ══════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px 72px",
          background: "#0f172a",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 52,
              color: "#334155",
              marginBottom: 24,
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              ...AR,
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 300,
              color: "#f1f5f9",
              lineHeight: 1.9,
              marginBottom: 0,
            }}
          >
            رأينا مريضاً يجلس أمام بروفيسور ألماني
            <br />
            ولا يفهم ما يقوله.
            <br />
            رأينا عائلة تتخذ قراراً جراحياً
            <br />
            بناءً على ترجمة خاطئة.
            <br />
            <br />
            هذا ما جعلنا نقرر:
            <br />
            أن يصل كل مريض عربي إلى الطبيب الصحيح،
            <br />
            بالمعلومة الصحيحة،
            <br />
            في الوقت الصحيح.
          </blockquote>
        </div>
      </section>

      {/* ══ SECTION 4: HOW WE WORK (light, 4 steps) ═════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 400,
              color: "#0f172a",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            كيف نعمل معك
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                num: "١",
                title: "نقرأ ملفك كاملاً",
                body: "شخص حقيقي يقرأ كل تقاريرك ويفهم تاريخك الطبي.",
              },
              {
                num: "٢",
                title: "نتحدث مع الطبيب المناسب",
                body: "بلغته وبمصطلحاته — ليس فقط نرسل ورقة.",
              },
              {
                num: "٣",
                title: "نترجم لك كل شيء",
                body: "القرار الطبي، الخيارات، المخاطر — بعربية واضحة لا تحتاج تفسيراً.",
              },
              {
                num: "٤",
                title: "نبقى معك حتى النهاية",
                body: "من المطار إلى المستشفى إلى العودة لبلدك.",
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  padding: "24px 28px",
                  background: "#f8fafc",
                  borderRadius: 8,
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    minWidth: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#0B1C2C",
                    color: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      ...AR,
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: 6,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      ...AR,
                      fontSize: 15,
                      fontWeight: 300,
                      color: "#475569",
                      lineHeight: 1.8,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: TESTIMONIAL — د. خالد ════════════════════════════════════ */}
      <section
        style={{
          padding: "72px 24px 64px",
          background: "#0B1C2C",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 48,
              color: "#475569",
              marginBottom: 24,
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              ...AR,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 400,
              color: "#f8fafc",
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            الشكر كل الشكر لشركة برلين للرعاية الطبية
            <br />
            لما قدمته وتقدمه من خدمة فائقة في المجال الطبي
            <br />
            للمرضى العرب الذين يأتون إلى ألمانيا لتلقي العلاج.
            <br />
            يتميز الفريق بالصدق والأمانة ويبذلون قصارا جهدهم
            <br />
            باختيار أفضل الأطباء في ألمانيا،
            <br />
            ولديهم أيضا الخبرة في مجال الفيزا والإقامة في ألمانيا،
            <br />
            يسعون لراحة المريض منذ وصولهم للمطار وحتى وداعهم.
          </blockquote>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <p
              style={{
                ...AR,
                color: "#cbd5e1",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              د. خالد — مقيم في الإمارات العربية المتحدة
            </p>
            <p style={{ color: "#facc15", fontSize: 20, letterSpacing: "0.15em" }}>
              ★★★★★
            </p>
            <p
              style={{
                color: "#64748b",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Google Reviews
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: FINAL CTA (dark) ══════════════════════════════════════════ */}
      <section
        style={{
          padding: "80px 24px 72px",
          background: "#0f172a",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2
            style={{
              ...AR,
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontWeight: 400,
              color: "#f8fafc",
              lineHeight: 1.65,
              marginBottom: 16,
            }}
          >
            تحدث معنا — قبل أي قرار.
          </h2>
          <p
            style={{
              ...AR,
              fontSize: 17,
              fontWeight: 300,
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            لا نحتاج ملفاً كاملاً لنبدأ.
            <br />
            رسالة واحدة على واتساب تكفي.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <a
              href="/send-medical-reports"
              style={{
                display: "inline-block",
                background: "#f8fafc",
                color: "#0f172a",
                padding: "14px 28px",
                borderRadius: 4,
                fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              أرسل ملفك الطبي
            </a>
            <a
              href="https://wa.me/4915781497451?text=%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D8%AB%20%D9%85%D8%B9%20%D9%85%D9%86%D8%B3%D9%82%20%D8%B7%D8%A8%D9%8A%20%D8%AD%D9%88%D9%84%20%D8%AD%D8%A7%D9%84%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 4,
                fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              تحدث معنا عبر واتساب
            </a>
          </div>
          <p
            style={{
              ...AR,
              color: "#475569",
              fontSize: 13,
            }}
          >
            نرد خلال 24 ساعة.
          </p>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
