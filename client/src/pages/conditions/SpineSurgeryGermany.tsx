/**
 * /ar/spine-surgery-germany
 * MCG Cross-Cluster Spine Authority Page — 9 sections
 * Chronic spine + failed treatment + neuro overlap + MRI logic + rehab
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────
const SPINE_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هل يمكن مراجعة صور MRI الخاصة بي من خارج ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "نعم. يتم إرسال صور الرنين المغناطيسي والتقارير الطبية عبر البريد الإلكتروني أو واتسآب، ويتم تقييمها من برلين خلال 24–48 ساعة لتحديد الخيار الجراحي أو التأهيلي المناسب." }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين جراحة العمود الفقري الفاشلة ومتلازمة الظهر الفاشل؟",
      "acceptedAnswer": { "@type": "Answer", "text": "متلازمة الظهر الفاشل (Failed Back Surgery Syndrome) هي حالة سريرية محددة تشمل استمرار الألم بعد تدخل جراحي تقني ناجح. تتطلب تقييماً متعدد التخصصات يشمل الأعصاب وإعادة التأهيل وأحياناً إعادة الجراحة." }
    },
    {
      "@type": "Question",
      "name": "هل الدوخة المرتبطة بالرقبة تحتاج إلى جراح عمود فقري أم طبيب أعصاب؟",
      "acceptedAnswer": { "@type": "Answer", "text": "الدوخة العنقية (Cervicogenic Dizziness) تتطلب تقييماً مشتركاً بين جراح العمود الفقري وطبيب الأعصاب وأخصائي التوازن. في ألمانيا، يتم تنسيق هذا التقييم ضمن مسار تشخيصي متكامل." }
    },
    {
      "@type": "Question",
      "name": "هل يمكن علاج تضيق القناة الشوكية بدون جراحة؟",
      "acceptedAnswer": { "@type": "Answer", "text": "في حالات معينة، يمكن إدارة تضيق القناة الشوكية (Spinal Stenosis) بإعادة التأهيل المتخصص والعلاج الطبيعي. القرار يعتمد على درجة التضيق، الأعراض العصبية، وعمر المريض. التقييم الدقيق لصور MRI ضروري قبل أي قرار." }
    },
    {
      "@type": "Question",
      "name": "كيف تتعامل ألمانيا مع حالات الألم المزمن بعد جراحة العمود الفقري؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تعتمد المراكز الألمانية المتخصصة على برامج متعددة التخصصات تشمل: إعادة التأهيل العصبي، علاج الألم المزمن، الدعم النفسي، والعلاج الطبيعي المتقدم. هذا النهج يختلف جوهرياً عن الجراحة المتكررة." }
    },
    {
      "@type": "Question",
      "name": "هل يمكن للمرضى من ليبيا والسودان ودول الخليج الوصول إلى هذه الخدمات؟",
      "acceptedAnswer": { "@type": "Answer", "text": "نعم. يدعم Medical Care Germany المرضى الدوليين من ليبيا والسودان ودول الخليج العربي في الوصول إلى المسارات التشخيصية والعلاجية المتخصصة في ألمانيا، بما في ذلك حالات العمود الفقري المعقدة." }
    },
    {
      "@type": "Question",
      "name": "ما الوثائق المطلوبة لتقييم حالة العمود الفقري في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تشمل الوثائق الأساسية: صور MRI أو CT حديثة (DICOM أو JPEG عالي الجودة)، تقارير الجراحات السابقة إن وجدت، ملخص التاريخ الطبي، وقائمة الأدوية الحالية. يمكن إرسالها إلكترونياً للتقييم الأولي." }
    },
    {
      "@type": "Question",
      "name": "هل يمكن مراجعة حالة عدم الاستقرار في المشي بسبب مشكلة في العمود الفقري؟",
      "acceptedAnswer": { "@type": "Answer", "text": "نعم. اضطرابات المشي الناتجة عن ضغط على النخاع الشوكي أو الأعصاب تستدعي تقييماً عاجلاً. في ألمانيا، يتم تنسيق هذا التقييم بين جراح العمود الفقري وطبيب الأعصاب وأخصائي إعادة التأهيل." }
    }
  ]
};

// ── JSON-LD: MedicalWebPage ─────────────────────────────────────────────────
const SPINE_WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "جراحة العمود الفقري وعلاج الألم المزمن في ألمانيا",
  "description": "تنسيق متخصص لحالات العمود الفقري المعقدة في ألمانيا: الجراحة الفاشلة، الألم المزمن، الدوخة العنقية، اضطرابات المشي، وتقييم MRI. خدمة متاحة للمرضى من ليبيا والسودان ودول الخليج.",
  "url": "https://medicalcaregermany.com/ar/spine-surgery-germany",
  "inLanguage": "ar",
  "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
  "about": { "@type": "MedicalCondition", "name": "Spinal Disorders" }
};

const AR: React.CSSProperties = {
  fontFamily: "'Cairo', 'IBM Plex Sans Arabic', sans-serif",
  direction: "rtl",
};

const SYMPTOM_INDICATORS = [
  { ar: "ألم مزمن في الظهر أو الرقبة لأكثر من 3 أشهر", en: "Chronic back/neck pain > 3 months" },
  { ar: "استمرار الألم بعد جراحة سابقة", en: "Pain persisting after prior surgery" },
  { ar: "تنميل أو ضعف في الأطراف", en: "Numbness or weakness in limbs" },
  { ar: "اضطراب في المشي أو عدم الاستقرار", en: "Gait disturbance or instability" },
  { ar: "دوخة مرتبطة بحركة الرقبة", en: "Cervicogenic dizziness" },
  { ar: "ألم ينتشر إلى الساق أو الذراع", en: "Radiating pain to leg or arm" },
  { ar: "صور MRI غير واضحة أو متضاربة", en: "Unclear or conflicting MRI findings" },
  { ar: "ضغط على النخاع الشوكي أو الأعصاب", en: "Spinal cord or nerve compression" },
];

const MRI_FINDINGS = [
  { finding: "Disc herniation (L4-L5 / L5-S1)", arabic: "انزلاق غضروفي قطني", implication: "قد يسبب ألماً إشعاعياً في الساق (Sciatica). التقييم يحدد الحاجة للجراحة مقابل العلاج التحفظي." },
  { finding: "Spinal Stenosis", arabic: "تضيق القناة الشوكية", implication: "ضغط على الأعصاب يسبب ألماً عند المشي. الجراحة تُقيَّم بناءً على درجة التضيق والأعراض." },
  { finding: "Spondylolisthesis", arabic: "انزلاق الفقرات", implication: "إزاحة فقرة على أخرى. قد يتطلب تثبيتاً جراحياً أو إعادة تأهيل مكثفاً." },
  { finding: "Failed fusion / pseudarthrosis", arabic: "فشل الاندماج الجراحي", implication: "عدم التحام الفقرات بعد الجراحة. يستدعي مراجعة جراحية أو تقييم متعدد التخصصات." },
  { finding: "Epidural fibrosis", arabic: "تليف حول الأعصاب", implication: "ندبة حول الأعصاب بعد الجراحة. تُشخَّص بـ MRI مع حقن الصبغة وتُعالج بإعادة التأهيل." },
  { finding: "Cervical myelopathy", arabic: "اعتلال النخاع العنقي", implication: "ضغط على النخاع في الرقبة يسبب اضطرابات المشي والتوازن. يستدعي تقييماً عاجلاً." },
];

const FAILED_SURGERY_TYPES = [
  { title: "متلازمة الظهر الفاشل (FBSS)", desc: "استمرار الألم بعد جراحة تقنياً ناجحة. تتطلب تقييماً متعدد التخصصات وليس جراحة متكررة بالضرورة." },
  { title: "فشل الاندماج الجراحي", desc: "عدم التحام الفقرات بعد جراحة التثبيت. يُشخَّص بالأشعة الديناميكية وقد يستدعي إعادة التدخل." },
  { title: "تليف ما بعد الجراحة", desc: "نسيج ندبي حول الأعصاب يسبب ألماً مستمراً. يُميَّز عن الانزلاق المتكرر بـ MRI مع الصبغة." },
  { title: "الانزلاق المتكرر", desc: "عودة الانزلاق الغضروفي في نفس المستوى أو مستوى مجاور. يتطلب تقييماً دقيقاً قبل أي قرار جراحي." },
  { title: "عدم الاستقرار بعد الجراحة", desc: "حركة غير طبيعية بين الفقرات بعد التدخل. يُشخَّص بالأشعة الديناميكية ويُعالج بالتثبيت." },
  { title: "الألم العصبي المزمن", desc: "تلف عصبي دائم يسبب ألماً حارقاً أو تنميلاً. يُدار بعلاج الألم المتخصص وإعادة التأهيل العصبي." },
];

const NEURO_SPINE_OVERLAP = [
  { spine: "تضيق قناة عنقية", neuro: "اعتلال النخاع الشوكي", symptom: "اضطراب المشي، ضعف اليدين، اضطراب التوازن" },
  { spine: "انزلاق قطني", neuro: "اعتلال جذر العصب", symptom: "ألم إشعاعي في الساق، تنميل، ضعف عضلي" },
  { spine: "تضيق قناة قطنية", neuro: "متلازمة ذيل الفرس", symptom: "ألم عند المشي، اضطراب المثانة، ضعف الساقين" },
  { spine: "انزلاق عنقي", neuro: "اعتلال جذر عصبي عنقي", symptom: "ألم في الذراع، تنميل الأصابع، ضعف القبضة" },
  { spine: "دوخة عنقية", neuro: "اضطراب التوازن المركزي", symptom: "دوخة عند دوران الرأس، غثيان، عدم الاستقرار" },
  { spine: "كسر ضغطي فقري", neuro: "ضغط على النخاع الشوكي", symptom: "ألم حاد مفاجئ، ضعف الأطراف، اضطراب الحساسية" },
];

const REHAB_PROTOCOLS = [
  { title: "إعادة التأهيل متعدد التخصصات", desc: "برامج تجمع الجراحة والأعصاب والعلاج الطبيعي وعلم النفس لعلاج الألم المزمن بعد الجراحة." },
  { title: "العلاج الطبيعي المتخصص للعمود الفقري", desc: "تقنيات McKenzie، Maitland، والتدريب على الاستقرار الوظيفي لإعادة بناء القوة والتوازن." },
  { title: "علاج الألم المزمن", desc: "إدارة الألم العصبي بالأدوية المتخصصة، الحصار العصبي، والتحفيز الكهربائي للحبل الشوكي (SCS)." },
  { title: "إعادة التأهيل العصبي للمشي", desc: "برامج متخصصة لاستعادة نمط المشي الطبيعي بعد الضغط على النخاع أو الأعصاب." },
  { title: "التقييم النفسي للألم المزمن", desc: "الدعم النفسي جزء أساسي من علاج متلازمة الظهر الفاشل وحالات الألم المزمن المعقدة." },
  { title: "إعادة التأهيل المائي", desc: "العلاج في الماء يقلل الضغط على العمود الفقري ويسمح بتمارين مبكرة بعد الجراحة." },
];

const DIAGNOSTIC_STEPS = [
  { n: "01", label: "مراجعة صور MRI / CT والتقارير الطبية", detail: "تحليل الصور الحالية وتقارير الجراحات السابقة لتحديد الحالة الدقيقة." },
  { n: "02", label: "تقييم الأعراض العصبية", detail: "فحص الوظيفة الحركية والحسية، تقييم المشي، وتحديد مستوى الضغط العصبي." },
  { n: "03", label: "استشارة متعددة التخصصات", detail: "جراح العمود الفقري + طبيب الأعصاب + أخصائي إعادة التأهيل في جلسة تقييم مشتركة." },
  { n: "04", label: "تحديد المسار العلاجي", detail: "جراحة / إعادة تأهيل / علاج ألم متخصص — القرار يعتمد على الحالة الفردية." },
  { n: "05", label: "تنسيق الدخول المستشفى", detail: "تنسيق موعد الدخول، الإقامة، والمترجم الطبي للمرضى الدوليين." },
  { n: "06", label: "متابعة ما بعد العلاج", detail: "تقارير المتابعة ترسل إلى الطبيب المحيل في بلد المريض." },
];

export default function SpineSurgeryGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "جراحة العمود الفقري وعلاج الألم المزمن في ألمانيا | Medical Care Germany";
    let m = document.querySelector('meta[name="description"]');
    const descContent = "تنسيق متخصص لحالات العمود الفقري المعقدة في ألمانيا: الجراحة الفاشلة، الألم المزمن، الدوخة العنقية، اضطرابات المشي، وتقييم MRI. للمرضى من ليبيا والسودان ودول الخليج.";
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/spine-surgery-germany";
  }, []);

  return (
    <div dir="rtl" lang="ar" style={{ ...AR, background: "#fff", color: "#0B1C2C" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPINE_FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPINE_WEBPAGE_JSONLD) }} />

      <SmartNavLayer currentPath="/ar/spine-surgery-germany" />
      <HreflangTags currentPath="/ar/spine-surgery-germany" />

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #0B1C2C 0%, #1a3a5c 60%, #0B1C2C 100%)", padding: "clamp(56px, 10vw, 96px) 24px clamp(48px, 8vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(100,160,220,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <p style={{ color: "#7EB8D4", fontSize: "clamp(11px, 2vw, 13px)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>
            رأي طبي ثانٍ في جراحة العمود الفقري · برلين · ألمانيا
          </p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, lineHeight: 1.35, marginBottom: 20 }}>
            ألم العمود الفقري لم يتوقف رغم العلاج؟<br />قبل أي قرار جراحي — حالتك تستحق مراجعة حقيقية في برلين.
          </h1>
          <p style={{ color: "#A8C8E0", fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.8, marginBottom: 12 }}>
            كثير من حالات العمود الفقري التي وصلتنا بقرار جراحي — أو بعد جراحة فاشلة — وجدت مساراً مختلفاً بعد التقييم.
            نراجع ملفك وصور الرنين مع متخصصين في المستشفيات الجامعية الألمانية.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/ar/submit-case" style={{ background: "#fff", color: "#0B1C2C", padding: "14px 32px", fontWeight: 700, fontSize: 15, display: "inline-block", textDecoration: "none" }}>
              أرسل ملفك الآن للمراجعة
            </a>
            <a href="https://wa.me/4917647757767" target="_blank" rel="noopener noreferrer" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "14px 32px", fontWeight: 500, fontSize: 15, display: "inline-block", textDecoration: "none" }}>
              تحدث مع منسق عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SYMPTOM INDICATORS ───────────────────────── */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 24px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ color: "#7EB8D4", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
          مؤشرات التحويل السريري
        </p>
        <h2 style={{ fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 700, color: "#0B1C2C", marginBottom: 12, lineHeight: 1.4 }}>
          الحالات التي تستدعي تقييماً متخصصاً في ألمانيا
        </h2>
        <p style={{ color: "#4A6B85", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
          إذا كنت تعاني من أي من هذه الأعراض — حالتك تستحق مراجعة متخصصة قبل أي قرار.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {SYMPTOM_INDICATORS.map((s, i) => (
            <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2eaf2", padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ color: "#7EB8D4", fontWeight: 700, fontSize: 13, minWidth: 28, paddingTop: 2 }}>0{i + 1}</span>
              <div>
                <p style={{ color: "#0B1C2C", fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.ar}</p>
                <p style={{ color: "#7EB8D4", fontSize: 11, letterSpacing: "0.04em" }}>{s.en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 REMOVED — MRI table deleted per content strategy */}
      {/* Patient Stories — after Section 2 */}
      <section style={{ background: "#f8fafc", padding: "clamp(48px, 8vw, 80px) 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ color: "#7EB8D4", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
          من تجارب مرضانا
        </p>
        <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 700, color: "#0B1C2C", marginBottom: 36, lineHeight: 1.4 }}>
          من تجارب مرضانا
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <blockquote style={{ borderRight: "3px solid #7EB8D4", paddingRight: 20, margin: 0 }}>
            <p style={{ color: "#0B1C2C", fontWeight: 600, fontSize: 15, marginBottom: 8 }}>مريض من العراق، 48 عاماً</p>
            <p style={{ color: "#4A6B85", fontSize: 14, lineHeight: 1.8 }}>أجرى جراحة عمود فقري منذ سنة، الألم لم يتوقف. بعد مراجعة الملف والصور في برلين، تبيّن أن سبب الألم المستمر قابل للعلاج بدون جراحة ثانية. بدأ برنامج علاج موجّه — وتحسّن بشكل ملحوظ خلال ستة أسابيع.</p>
          </blockquote>
          <blockquote style={{ borderRight: "3px solid #7EB8D4", paddingRight: 20, margin: 0 }}>
            <p style={{ color: "#0B1C2C", fontWeight: 600, fontSize: 15, marginBottom: 8 }}>مريضة من ليبيا، 52 عاماً</p>
            <p style={{ color: "#4A6B85", fontSize: 14, lineHeight: 1.8 }}>دوخة مستمرة مرتبطة بحركة الرقبة وألم مزمن. ثلاثة أطباء، ثلاثة تشخيصات مختلفة. بعد التقييم المشترك في برلين — تحدد المصدر الحقيقي للمشكلة ووُضع مسار علاجي واضح.</p>
          </blockquote>
        </div>
        <p style={{ color: "#9BB5C8", fontSize: 12, marginTop: 24 }}>تُنشر التجارب بموافقة المريض وبدون بيانات شخصية.</p>
      </section>

      {/* ── SECTION 4: FAILED SURGERY EVALUATION ────────────────── */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 24px", maxWidth: 960, margin: "0 auto" }}>
        <p style={{ color: "#7EB8D4", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
          تقييم الجراحة الفاشلة
        </p>
        <h2 style={{ fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 700, color: "#0B1C2C", marginBottom: 12, lineHeight: 1.4 }}>
          أنواع الجراحة الفاشلة وآليات التقييم
        </h2>
        <p style={{ color: "#4A6B85", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, marginBottom: 40, maxWidth: 700 }}>
          الجراحة الفاشلة لا تعني بالضرورة خطأ جراحياً. في كثير من الحالات، التقييم الصحيح الأولي هو ما كان مفقوداً. المراكز الألمانية المتخصصة تقيّم هذه الحالات بمنهجية متعددة التخصصات.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {FAILED_SURGERY_TYPES.map((item, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e2eaf2", borderTop: "3px solid #0B1C2C", padding: "24px 20px" }}>
              <h3 style={{ color: "#0B1C2C", fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ color: "#4A6B85", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 REMOVED — neuro-spine overlap table deleted per content strategy */}

      {/* SECTION 6 REMOVED — rehab protocols deleted per content strategy */}

      {/* ── SECTION 7: DIAGNOSTIC TIMELINE ──────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "clamp(48px, 8vw, 80px) 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ color: "#7EB8D4", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
            الجدول الزمني التشخيصي
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 700, color: "#0B1C2C", marginBottom: 12, lineHeight: 1.4 }}>
            مسار التقييم والعلاج في ألمانيا
          </h2>
          <p style={{ color: "#4A6B85", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, marginBottom: 40 }}>
            يبدأ المسار بمراجعة الوثائق الطبية الحالية من برلين. عند الحاجة، يتم تنسيق الدخول إلى المستشفى المتخصص خلال إطار زمني محدد.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {DIAGNOSTIC_STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 20, paddingBottom: 28, borderRight: i < DIAGNOSTIC_STEPS.length - 1 ? "2px solid #e2eaf2" : "2px solid transparent", marginRight: 20, paddingRight: 24, position: "relative" }}>
                <div style={{ position: "absolute", right: -10, top: 0, width: 20, height: 20, borderRadius: "50%", background: "#0B1C2C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>{step.n}</span>
                </div>
                <div style={{ paddingRight: 8 }}>
                  <h3 style={{ color: "#0B1C2C", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{step.label}</h3>
                  <p style={{ color: "#4A6B85", fontSize: 13, lineHeight: 1.7 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ACCORDION ─────────────────────────────── */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 24px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ color: "#7EB8D4", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
          أسئلة شائعة
        </p>
        <h2 style={{ fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 700, color: "#0B1C2C", marginBottom: 36, lineHeight: 1.4 }}>
          أسئلة المرضى الدوليين حول جراحة العمود الفقري في ألمانيا
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {SPINE_FAQ_JSONLD.mainEntity.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e2eaf2" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", textAlign: "right", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}
              >
                <span style={{ color: "#0B1C2C", fontWeight: 600, fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.5, flex: 1 }}>{item.name}</span>
                <span style={{ color: "#7EB8D4", fontSize: 20, fontWeight: 300, flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: 20 }}>
                  <p style={{ color: "#4A6B85", fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.8 }}>{item.acceptedAnswer.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 9: AUTHORITY CTA ─────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "clamp(56px, 10vw, 96px) 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ color: "#7EB8D4", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, fontWeight: 600 }}>
            Medical Care Germany — Berlin
          </p>
          <h2 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.4, marginBottom: 20 }}>
            تقييم حالة العمود الفقري من برلين
          </h2>
          <p style={{ color: "#A8C8E0", fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.8, marginBottom: 40 }}>
            قبل أي قرار جراحي في العمود الفقري — أو إذا استمر الألم بعد جراحة سابقة — حالتك تستحق مراجعة حقيقية.
            أرسل ملفك وصور الرنين وسيتواصل معك منسق متخصص خلال 24 ساعة.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/ar/submit-case" style={{ background: "#fff", color: "#0B1C2C", padding: "16px 36px", fontWeight: 700, fontSize: 15, display: "inline-block", textDecoration: "none" }}>
              أرسل ملفك الآن — مراجعة خلال 24 ساعة
            </a>
          </div>
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "إعادة التأهيل المتقدم", href: "/ar/advanced-rehabilitation-germany" },
              { label: "الدوخة العنقية", href: "/ar/dizziness-long-term" },
              { label: "إصابات الأعصاب", href: "/ar/nerve-injury-after-trauma-germany" },
              { label: "الصدمات المعقدة", href: "/ar/complex-trauma-germany" },
              { label: "العظام والمفاصل", href: "/ar/orthopedics-germany" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <a style={{ color: "#7EB8D4", fontSize: 13, textDecoration: "none", borderBottom: "1px solid rgba(126,184,212,0.3)", paddingBottom: 2 }}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CROSS-CLUSTER SECTION ────────────────────────────────── */}
      <CrossClusterSection
        clusters={["neuro_spine", "trauma_mri_rehab", "hno_neuro"]}
        excludeCurrentHref="/ar/spine-surgery-germany"
      />

      <ArabicFooterGuide />
    </div>
  );
}
