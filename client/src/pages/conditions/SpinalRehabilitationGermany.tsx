/**
 * /ar/spinal-rehabilitation-germany
 * Arabic Authority Page — Spinal Rehabilitation Germany
 */

import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const CASES = [
  "إصابات الحبل الشوكي الكاملة والجزئية",
  "الشلل النصفي والرباعي",
  "تضيق القناة الشوكية مع أعراض عصبية",
  "مضاعفات جراحة العمود الفقري",
  "الألم المزمن في الظهر والرقبة",
  "الحاجة إلى تقييم ثانٍ لخطة التأهيل",
  "إصابات الحوادث والسقوط",
];

const PATHWAY = [
  { n: "01", label: "مراجعة MRI والتقارير العصبية والجراحية" },
  { n: "02", label: "تقييم الوظيفة الحركية والحسية الحالية" },
  { n: "03", label: "التنسيق مع متخصصي التأهيل العصبي والعمود الفقري" },
  { n: "04", label: "بناء خطة تأهيل متعددة التخصصات" },
  { n: "05", label: "المتابعة الدورية وتعديل المسار" },
];

const DOCUMENTS = [
  "تقرير MRI أو CT للعمود الفقري",
  "تقارير الجراحة السابقة إن وجدت",
  "تقييم الوظيفة الحركية والحسية",
  "وصف الأعراض الحالية والتغيرات الأخيرة",
  "قائمة الأدوية والعلاجات الجارية",
];

export default function SpinalRehabilitationGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/spinal-rehabilitation-germany" />
      <HreflangTags currentPath="/ar/spinal-rehabilitation-germany" />
      <title>تأهيل العمود الفقري في ألمانيا | برامج متخصصة في برلين</title>
      <meta
        name="description"
        content="برامج تأهيل العمود الفقري في ألمانيا بعد الجراحة أو الإصابة — نوصلك بأفضل مراكز التأهيل الفقري في المستشفيات الجامعية."
      />

      {/* HERO */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — تنسيق التأهيل الشوكي
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            إعادة تأهيل العمود الفقري في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 620, margin: "0 auto 36px" }}>
            تقييم وتنسيق مسارات التأهيل لإصابات الحبل الشوكي والعمود الفقري المعقدة، ضمن مراكز التأهيل العصبي الألمانية المتخصصة.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none", border: "1px solid #fff" }}>
              إرسال التقارير الطبية للتقييم
            </a>
            <a href="/ar/advanced-rehabilitation-germany" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              مركز التأهيل المتقدم
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>المنظور السريري</p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 24, lineHeight: 1.5 }}>
          التأهيل الشوكي: مسار طويل يحتاج تخطيطًا دقيقًا
        </h2>
        <p style={{ ...AR, fontSize: 15, color: "#475569", lineHeight: 1.9, marginBottom: 20 }}>
          إصابات الحبل الشوكي والعمود الفقري تتطلب مسارًا تأهيليًا متكاملًا يجمع بين إعادة التأهيل الحركي، العلاج الطبيعي المتخصص، الدعم العصبي، وإدارة المضاعفات المزمنة.
        </p>
        <p style={{ ...AR, fontSize: 15, color: "#475569", lineHeight: 1.9 }}>
          في ألمانيا، تتوفر مراكز متخصصة في التأهيل الشوكي تستخدم تقنيات التأهيل الروبوتي، التحفيز الكهربائي، وبرامج استعادة الحركة المتقدمة.
        </p>
        <div style={{ marginTop: 36, borderTop: "1px solid #e2e8f0", paddingTop: 28 }}>
          <p style={{ ...AR, fontSize: 11, color: "#94a3b8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>الحالات المقيَّمة</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {CASES.map((item) => (
              <li key={item} style={{ ...AR, fontSize: 14, color: "#334155", padding: "8px 0", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#059669", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PATHWAY */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>مسار التنسيق</p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 32, lineHeight: 1.5 }}>
            كيف يتم تنسيق مسار التأهيل؟
          </h2>
          {PATHWAY.map((step) => (
            <div key={step.n} style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "16px 0", borderBottom: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: 11, color: "#059669", fontWeight: 600, letterSpacing: "0.1em", minWidth: 28, paddingTop: 2 }}>{step.n}</span>
              <p style={{ ...AR, fontSize: 14, color: "#334155", margin: 0, lineHeight: 1.7 }}>{step.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECOND PATHWAY */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 20, lineHeight: 1.55 }}>
            عندما لا تكون المرحلة الأولى كافية
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
            بعض الحالات المعقدة قد تحتاج إعادة تقييم تخصصي أو مسار تأهيلي أكثر تقدمًا داخل ألمانيا، خاصة في إصابات الأعصاب، الألم المزمن، البتر، وإصابات الحركة المعقدة.
          </p>
          <p style={{ ...AR, fontSize: 15, color: "#64748b", lineHeight: 1.9, marginBottom: 32 }}>
            قد تشمل بعض الحالات مراحل إضافية من التقييم والمتابعة التأهيلية وفق احتياجات الحالة السريرية وتطور الخطة العلاجية.
          </p>
          <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            طلب مراجعة التقارير الطبية
          </a>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>التوثيق المطلوب</p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 28, lineHeight: 1.5 }}>
          المستندات المطلوبة للتقييم
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {DOCUMENTS.map((doc) => (
            <li key={doc} style={{ ...AR, fontSize: 14, color: "#334155", padding: "10px 0", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#059669", flexShrink: 0 }} />
              {doc}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: "#f8fafc" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 20, lineHeight: 1.5 }}>
            إرسال التقارير الطبية للتقييم
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 32 }}>
            يتم مراجعة الملفات الطبية بشكل سري ضمن إطار استشاري منظم.
          </p>
          <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "#0B1C2C", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            إرسال التقارير الطبية
          </a>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: "#fff", padding: "56px 24px", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>صفحات ذات صلة</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { href: "/ar/advanced-rehabilitation-germany", label: "مركز التأهيل المتقدم" },
              { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
              { href: "/ar/neurological-rehabilitation-germany", label: "التأهيل العصبي" },
              { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
              { href: "https://tally.so/r/68MrBP", label: "تقديم الحالة" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ ...AR, fontSize: 13, color: "#0B1C2C", textDecoration: "none", padding: "8px 16px", border: "1px solid #cbd5e1", background: "#f8fafc", display: "inline-block" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
