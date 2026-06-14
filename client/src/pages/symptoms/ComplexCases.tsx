/**
 * /ar/complex-cases
 * MCG — الحالات المعقدة التي رفضها غيرهم
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

const CASE_TYPES = [
  "حالة رُفضت في أكثر من مستشفى",
  "تشخيص غير مؤكد بعد سنوات من الفحوصات",
  "مريض يحتاج أكثر من تخصص في آنٍ واحد",
  "حالة نادرة لا بروتوكول علاجي واضح لها",
  "فشل علاجي بعد عمليات أو علاجات سابقة",
  "ورم في موقع دقيق يرفضه الجراحون",
  "حالة أعصاب معقدة بدون تشخيص نهائي",
  "مريض كبير في السن مع أمراض متعددة",
];

const APPROACH_CARDS = [
  {
    title: "مجلس طبي — لا طبيب واحد",
    body: "الحالات المعقدة تُعرض على فريق من التخصصات المختلفة في نفس الجلسة",
  },
  {
    title: "مستشفيات جامعية — لا عيادات خاصة",
    body: "نصل إلى مراكز الأبحاث التي تقبل الحالات التي يرفضها غيرها",
  },
  {
    title: "تقييم شامل — لا حل جزئي",
    body: "نراجع كل التقارير السابقة ونبني خطة علاجية متكاملة من الصفر",
  },
];

export default function ComplexCases() {
  useEffect(() => {
    document.title =
      "حالات طبية معقدة | علاج في ألمانيا بعد رحلة بحث طويلة";
    const descContent =
      "إذا زرت أطباء كثيرين بدون نتيجة — نراجع ملفك كاملاً مع فريق متخصص في برلين. أكثر من 500 حالة منذ 2012.";
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
    c.href = "https://medicalcaregermany.com/ar/complex-cases";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/complex-cases" />
      <HreflangTags currentPath="/ar/complex-cases" />

      {/* ══ SECTION 1: HERO (dark) ═══════════════════════════════════════════ */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            MEDICAL CARE GERMANY — برلين
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.55, marginBottom: 24 }}>
            رفضوا حالتك.
            <br />
            أو قالوا لا يوجد علاج.
            <br />
            هذا بالضبط ما نتخصص فيه.
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.9, maxWidth: 620, margin: "0 auto 36px" }}>
            الحالات المعقدة لا تحتاج طبيباً واحداً — تحتاج فريقاً.
            <br />
            نصل إلى المراكز الجامعية التي تقبل ما يرفضه غيرها.
            <br />
            أرسل الملف — سنقيّم الخيارات المتاحة خلال 24 ساعة.
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

      {/* ══ SECTION 2: CASE TYPES (light) ════════════════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 40, textAlign: "center" }}>
            أنواع الحالات التي نتعامل معها
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {CASE_TYPES.map((text, i) => (
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
            إذا كانت حالتك لا تشبه أياً مما سبق — أرسل الملف على أي حال. نقيّم كل حالة بشكل مستقل.
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
            "رفضته ثلاثة مستشفيات — القبول الرابع كان في برلين"
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 2, maxWidth: 640, margin: "0 auto 32px" }}>
            مريض من العراق — ورم في موقع دقيق قرب جذع الدماغ.
            <br />
            ثلاثة مستشفيات رفضت إجراء العملية. المخاطر عالية جداً.
            <br /><br />
            أرسل أهله الملف إلينا.
            <br />
            وصلنا إلى مركز جامعي في برلين متخصص في هذا النوع بالذات.
            <br />
            البروفيسور راجع الحالة — وقبلها.
            <br /><br />
            أُجريت العملية بنجاح.
            <br />
            المريض اليوم في مرحلة التعافي.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24 }}>
            <p style={{ ...AR, fontSize: 16, color: "#f8fafc", fontWeight: 500, lineHeight: 1.7 }}>
              الرفض ليس نهاية الطريق. أحياناً هو بداية البحث الصحيح.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: OUR APPROACH (light, 3 cards) ═════════════════════════ */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 48, textAlign: "center" }}>
            كيف نتعامل مع الحالات المعقدة؟
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {APPROACH_CARDS.map((card, i) => (
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


      {/* TESTIMONIAL — د. خالد */}
      <section style={{ padding: '72px 24px 64px', background: '#0B1C2C', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }} dir="rtl">
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 48, color: '#475569', marginBottom: 24, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
          <blockquote style={{ ...{fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif"}, fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 400, color: '#f8fafc', lineHeight: 1.8, marginBottom: 32 }}>
            الشكر كل الشكر لشركة برلين للرعاية الطبية
            لما قدمته وتقدمه من خدمة فائقة في المجال الطبي
            للمرضى العرب الذين يأتون إلى ألمانيا لتلقي العلاج.
            يتميز الفريق بالصدق والأمانة ويبذلون قصارا جهدهم
            باختيار أفضل الأطباء في ألمانيا،
            ولديهم أيضا الخبرة في مجال الفيزا والإقامة في ألمانيا،
            يسعون لراحة المريض منذ وصولهم للمطار وحتى وداعهم.
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <p style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif", color: '#cbd5e1', fontSize: 15, fontWeight: 500 }}>
              د. خالد — مقيم في الإمارات العربية المتحدة
            </p>
            <p style={{ color: '#facc15', fontSize: 20, letterSpacing: '0.15em' }}>★★★★★</p>
            <p style={{ color: '#64748b', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Google Reviews</p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: FINAL CTA (dark) ══════════════════════════════════════ */}
      <section style={{ padding: "80px 24px 72px", background: "#0B1C2C", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.65, marginBottom: 28 }}>
            إذا قيل لك لا يوجد حل —
            <br />
            أرسل الملف. سنبحث عن الخيار الذي لم يُطرح بعد.
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
