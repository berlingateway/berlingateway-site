/**
 * /ar/second-medical-evaluation-germany
 * Arabic Authority Page — Second Medical Evaluation Germany
 */

import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const CASES = [
  "التشخيص غير المؤكد أو المتضارب",
  "توصية جراحية تحتاج مراجعة مستقلة",
  "خطة علاجية معقدة تحتاج تأكيدًا",
  "حالات السرطان والأورام",
  "إصابات الأعصاب والحبل الشوكي",
  "أمراض القلب المعقدة",
  "الحالات التي لم تستجب للعلاج المتوقع",
];

const PATHWAY = [
  { n: "01", label: "مراجعة جميع التقارير والتشخيصات السابقة" },
  { n: "02", label: "تحديد التخصص الطبي المناسب للتقييم الثاني" },
  { n: "03", label: "التنسيق مع المتخصص الألماني المختار" },
  { n: "04", label: "إعداد ملخص الحالة بصيغة مناسبة للمراجعة" },
  { n: "05", label: "تقديم نتائج التقييم الثاني وتوصياته" },
];

const DOCUMENTS = [
  "جميع التقارير الطبية والتشخيصات السابقة",
  "صور الأشعة MRI / CT / PET",
  "نتائج الفحوصات المخبرية",
  "تقارير الخزعات والتحليل النسيجي إن وجدت",
  "وصف الأعراض الحالية والمسار الزمني",
];

export default function SecondMedicalEvaluationGermany() {
  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <SmartNavLayer currentPath="/ar/second-medical-evaluation-germany" />
      <HreflangTags currentPath="/ar/second-medical-evaluation-germany" />
      <title>التقييم الطبي الثاني في ألمانيا | مراجعة مستقلة للتشخيص والخطة العلاجية</title>
      <meta
        name="description"
        content="تنسيق التقييم الطبي الثاني في ألمانيا — مراجعة مستقلة للتشخيص، خطط العلاج، والتوصيات الجراحية من قبل متخصصين ألمان."
      />

      {/* HERO */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — التقييم الطبي المستقل
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            التقييم الطبي الثاني في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 620, margin: "0 auto 36px" }}>
            مراجعة مستقلة للتشخيص والخطة العلاجية من قبل متخصصين ألمان، لتوفير وضوح سريري قبل اتخاذ القرارات الطبية الكبرى.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none", border: "1px solid #fff" }}>
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
          التقييم الثاني: وضوح سريري قبل القرار
        </h2>
        <p style={{ ...AR, fontSize: 15, color: "#475569", lineHeight: 1.9, marginBottom: 20 }}>
          في الحالات المعقدة، قد يكون التشخيص غير مؤكد، أو قد تتضارب التوصيات الطبية، أو قد يكون القرار الجراحي ذا أثر كبير يستدعي مراجعة مستقلة. التقييم الطبي الثاني ليس تشكيكًا في الطبيب المعالج، بل هو إجراء معياري في الطب المتقدم.
        </p>
        <p style={{ ...AR, fontSize: 15, color: "#475569", lineHeight: 1.9 }}>
          في ألمانيا، يتم تنسيق مراجعة الحالة مع متخصصين مستقلين في التخصص المناسب، لتقديم رأي سريري موضوعي يدعم اتخاذ القرار الطبي الصحيح.
        </p>
        <div style={{ marginTop: 36, borderTop: "1px solid #e2e8f0", paddingTop: 28 }}>
          <p style={{ ...AR, fontSize: 11, color: "#94a3b8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>الحالات التي تستدعي التقييم الثاني</p>
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
            كيف يتم تنسيق التقييم الثاني؟
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
          <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            طلب مراجعة التقارير الطبية
          </a>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>التوثيق المطلوب</p>
        <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 28, lineHeight: 1.5 }}>
          المستندات المطلوبة للتقييم الثاني
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
          <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "#0B1C2C", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
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
              { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
              { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
              { href: "/ar/complex-trauma-evaluation", label: "تقييم الصدمات المعقدة" },
              { href: "/ar/submit-case", label: "تقديم الحالة" },
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
