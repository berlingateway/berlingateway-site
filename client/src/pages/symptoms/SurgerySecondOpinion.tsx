/**
 * /ar/surgery-second-opinion
 * MCG — رأي طبي ثانٍ قبل العملية
 */

import { useEffect } from "react";
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
  "قيل لك إن الحل الوحيد هو الجراحة",
  "تشخيصات مختلفة من أطباء مختلفين",
  "العملية مقترحة لكن لا أحد شرح البديل",
  "خضت عمليات سابقة والمشكلة لم تحل",
  "الحالة معقدة وأكثر من طبيب رفض علاجها",
  "تريد التأكد قبل قرار لا رجعة فيه",
  "أهلك قلقون ويريدون رأياً ثانياً موثوقاً",
  "الطبيب المحلي يستعجل والوقت ضاغط",
];

const WHY_CARDS = [
  {
    title: "بروفيسور متخصص — لا طبيب عام",
    body: "كل حالة تُراجَع مع أستاذ جامعي في تخصصها الدقيق",
  },
  {
    title: "تشخيص مستقل — بدون ضغط",
    body: "الطبيب الألماني لا يعرف من اقترح العملية — رأيه مستقل تماماً",
  },
  {
    title: "قرار مبني على الأدلة",
    body: "إذا كانت العملية ضرورية — سيقولون ذلك. وإذا كان هناك بديل — ستعرفه",
  },
];

export default function SurgerySecondOpinion() {
  useEffect(() => {
    document.title =
      "رأي ثانٍ قبل العملية في ألمانيا | ميديكال كير جيرماني";
    const descContent =
      "قبل أي قرار جراحي — راجع ملفك مع بروفيسور متخصص في برلين. كثير من الحالات وجدت بديلاً للجراحة.";
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
    c.href = "https://medicalcaregermany.com/ar/surgery-second-opinion";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/surgery-second-opinion" />
      <HreflangTags currentPath="/ar/surgery-second-opinion" />

      {/* ══ SECTION 1: HERO (dark) ═══════════════════════════════════════════ */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            MEDICAL CARE GERMANY — برلين
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.55, marginBottom: 24 }}>
            قالوا تحتاج عملية.
            <br />
            قبل أي قرار —
            <br />
            اعرف رأياً ثانياً من برلين.
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.9, maxWidth: 620, margin: "0 auto 36px" }}>
            كثير من المرضى يصلون إلينا بقرار جراحي جاهز.
            <br />
            بعضهم يحتاج العملية فعلاً.
            <br />
            وبعضهم يكتشف أن هناك خياراً آخر لم يُطرح بعد.
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
            هل وجدت نفسك في إحدى هذه المواقف؟
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
          <p style={{ ...AR, fontSize: 14, color: "#475569", lineHeight: 1.8, textAlign: "center", marginTop: 32 }}>
            الرأي الثاني ليس شكاً في طبيبك — هو حقك قبل أي قرار مصيري.
          </p>
        </div>
      </section>

      {/* ══ SECTION 3: PATIENT STORY (dark) ══════════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#0B1C2C", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            من حالاتنا
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.8vw, 28px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.6, marginBottom: 32 }}>
            "قالوا لها تحتاج استئصال كلية — برلين قالت عكس ذلك"
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 2, maxWidth: 640, margin: "0 auto 32px" }}>
            طفلة صغيرة — قالوا لأهلها لا خيار إلا استئصال إحدى الكليتين.
            <br />
            الأسرة رفضت الاستسلام. أرسلوا الملف إلينا.
            <br /><br />
            في برلين — راجع أستاذ متخصص الحالة كاملة.
            <br />
            الرأي كان مختلفاً تماماً.
            <br />
            الحالة لا تستدعي الاستئصال — هناك خيار علاجي آخر لم يُطرح.
            <br /><br />
            اليوم هي بكلتا كليتيها. وبصحة جيدة.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24 }}>
            <p style={{ ...AR, fontSize: 16, color: "#f8fafc", fontWeight: 500, lineHeight: 1.7 }}>
              قبل أي قرار جراحي — أرسل الملف. المراجعة لا تكلفك شيئاً.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: WHY SECOND OPINION IN GERMANY (light, 3 cards) ════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 48, textAlign: "center" }}>
            لماذا الرأي الثاني في ألمانيا مختلف؟
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

      {/* ══ SECTION 5: FINAL CTA (dark) ══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px 72px", background: "#0B1C2C", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.65, marginBottom: 28 }}>
            أرسل الملف الطبي قبل أي قرار.
            <br />
            سيقرأه متخصص ويرد عليك خلال 24 ساعة.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 20 }}>
            <Link
              href="/ar/send-medical-reports"
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
              تحدث معنا عبر واتساب
            </a>
          </div>
          <p style={{ ...AR, fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
            لا تشخيص عن بُعد. فقط تقييم حقيقي لما تحتاجه فعلاً.
            <br />
            يمكنك إرسال ملفاتك لاحقاً بعد التقييم الأولي.
          </p>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
