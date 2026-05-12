/**
 * /ar/dizziness-long-term
 * MCG Vestibular Authority Entry Page — Phase 1 Cross-Cluster Intelligence
 * 9-section authority architecture: HNO + Neuro + Spine + Trauma + MRI
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1%20%D8%AD%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D8%AF%D9%88%D8%AE%D8%A9";

// ── JSON-LD: FAQPage ────────────────────────────────────────────────────────
const DIZZINESS_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "هل يمكن أن تكون الدوخة من الأذن الداخلية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الأذن الداخلية مسؤولة عن التوازن، وأي اضطراب في الجهاز الدهليزي — كمرض منيير أو التهاب العصب الدهليزي — يمكن أن يسبب دوخة مزمنة. يُنسَّق تقييم هذه الحالات في ألمانيا عبر طب الأنف والأذن والحنجرة المتخصص. يتلقى هذا التقييم مرضى من ليبيا والسودان ودول الخليج العربي.",
      },
    },
    {
      "@type": "Question",
      name: "لماذا تستمر الدوخة رغم سلامة فحوصات MRI؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MRI الدماغ القياسي لا يُظهر اضطرابات الأذن الداخلية أو الاضطرابات الدهليزية الوظيفية. التقييم المتخصص يشمل اختبارات دهليزية متقدمة (VNG، VEMP، vHIT) وتصوير MRI مخصص للأذن الداخلية بتقنية عالية الدقة.",
      },
    },
    {
      "@type": "Question",
      name: "هل طنين الأذن مرتبط بالدوخة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "في كثير من الحالات نعم. الطنين والدوخة معاً قد يشيران إلى اضطراب في الأذن الداخلية كمرض منيير أو اضطراب دهليزي قوقعي. التقييم المشترك لكليهما ضروري للتشخيص الدقيق — خاصة في الحالات القادمة من ليبيا والسودان والكويت والإمارات.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن أن تسبب مشاكل العمود الفقري العنقي دوخة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الاضطرابات العنقية تؤثر على تدفق الدم للمخيخ وعلى المستقبلات الحسية في الرقبة، مما قد يسبب دوخة وضعية مزمنة. هذا النوع يُعالَج بالتنسيق بين جراحة العمود الفقري وطب الأعصاب.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن أن تكون الدوخة بسبب إصابة قديمة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الدوخة ما بعد الصدمة شائعة بعد إصابات الرأس والرقبة والحوادث. يمكن أن تنشأ من تلف الأذن الداخلية أو إصابة عصبية أو اضطراب في العمود الفقري العنقي. التقييم متعدد التخصصات ضروري — وهو ما تُنسِّقه Medical Care Germany لحالات من دول الخليج وشمال أفريقيا.",
      },
    },
    {
      "@type": "Question",
      name: "متى تحتاج الحالة إلى تقييم متقدم في ألمانيا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "عندما تستمر الدوخة لأكثر من 3 أشهر، أو لم تستجب للعلاجات المتاحة، أو التشخيص غير محدد، أو توجد أعراض مصاحبة كالطنين أو ضعف السمع أو الاضطرابات البصرية — يكون التقييم المتخصص في ألمانيا مبرراً سريرياً. تُنسِّق Medical Care Germany هذه المسارات للمرضى الدوليين.",
      },
    },
    {
      "@type": "Question",
      name: "ما الفرق بين الدوخة الأذنية والدوخة العصبية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الدوخة الأذنية تنشأ من الأذن الداخلية وتتميز بنوبات دوارية مصحوبة بطنين أو ضعف سمع. الدوخة العصبية تنشأ من الجهاز العصبي المركزي وقد تكون مستمرة مع اضطرابات بصرية أو عصبية. التمييز بينهما يتطلب تقييماً مشتركاً بين HNO وطب الأعصاب.",
      },
    },
    {
      "@type": "Question",
      name: "هل يُعالَج الصداع النصفي الدهليزي في ألمانيا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الصداع النصفي الدهليزي هو أحد أكثر أسباب الدوخة المزمنة تشخيصاً متأخراً. يُعالَج في ألمانيا بالتنسيق بين طب الأعصاب وطب الأذن الداخلية. تُنسِّق Medical Care Germany هذه الحالات للمرضى الدوليين بما فيهم من ليبيا والسودان ودول الخليج.",
      },
    },
  ],
};

// ── JSON-LD: MedicalWebPage ─────────────────────────────────────────────────
const MEDICAL_WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "دوخة مستمرة لأشهر — تقييم الحالات المعقدة في ألمانيا",
  description:
    "صفحة تشخيصية متخصصة لحالات الدوخة المزمنة وغير المحسومة — تنسيق التقييم المتخصص في ألمانيا عبر شبكة HNO وطب الأعصاب وجراحة العمود الفقري.",
  url: "https://medicalcaregermany.com/ar/dizziness-long-term",
  inLanguage: "ar",
  audience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalCondition",
    name: "Vestibular Disorders / Chronic Dizziness",
  },
  geographicArea: [
    { "@type": "Country", name: "Libya" },
    { "@type": "Country", name: "Sudan" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
};

// ── Data constants ──────────────────────────────────────────────────────────
const CLINICAL_INDICATORS = [
  "دوخة مستمرة لأكثر من 3 أشهر دون تحسن",
  "عدم الاتزان عند المشي أو تغيير الوضعية",
  "دوخة ظهرت بعد إصابة أو حادث",
  "ضغط في الأذن مصحوب بطنين",
  "صور MRI طبيعية لكن الأعراض مستمرة",
  "علاجات متعددة لم تُحسّن الحالة",
  "تشخيصات متضاربة أو غير محددة",
  "دوخة تؤثر على القدرة على العمل والحياة اليومية",
];

const HNO_NEURO_CARDS = [
  {
    title: "الجهاز الدهليزي (HNO)",
    body: "الأذن الداخلية تحتوي على الجهاز الدهليزي المسؤول عن الإحساس بالتوازن والحركة. أي اضطراب فيه يؤدي إلى دوخة — يُقيَّم من قِبَل طبيب HNO متخصص.",
    tag: "أذن داخلية",
  },
  {
    title: "القوقعة والدهليز المشترك",
    body: "الاضطرابات القوقعية والدهليزية تتداخل — ضعف السمع والطنين والدوخة قد تكون مظاهر لنفس الحالة. مرض منيير نموذج على هذا التداخل.",
    tag: "HNO",
  },
  {
    title: "التداخل العصبي المركزي",
    body: "الصداع النصفي الدهليزي، اضطرابات المخيخ، والتصلب المتعدد يسببون دوخة مزمنة بمنشأ عصبي مركزي — يُميَّز عن الأذني بالتقييم المشترك.",
    tag: "أعصاب",
  },
  {
    title: "العصب الدهليزي القوقعي",
    body: "التهاب العصب الدهليزي وورم الأعصاب الصوتية (Acoustic Neuroma) يُسببان دوخة مزمنة — يتطلبان تصوير MRI مخصصاً للعصب الثامن.",
    tag: "HNO + أعصاب",
  },
  {
    title: "الصداع النصفي الدهليزي",
    body: "نوع من الصداع النصفي يسبب دوخة مزمنة دون ألم رأس واضح دائماً — كثيراً ما يُشخَّص متأخراً. يُعالَج بالتنسيق بين HNO وطب الأعصاب.",
    tag: "أعصاب",
  },
  {
    title: "الدوخة الوظيفية (PPPD)",
    body: "اضطراب دهليزي وظيفي مزمن يُسبب دوخة مستمرة مع فحوصات طبيعية — يتطلب تقييماً متخصصاً لاستبعاد الأسباب العضوية أولاً.",
    tag: "دهليزي",
  },
];

const PATHWAY_STEPS = [
  {
    n: "01",
    title: "مراجعة التقارير السابقة",
    body: "استقبال وتحليل جميع التقارير الطبية والفحوصات السابقة المتعلقة بالدوخة — بما فيها نتائج MRI وتقارير السمع.",
  },
  {
    n: "02",
    title: "تحليل الأعراض المزمنة",
    body: "تقييم مفصّل لطبيعة الدوخة، مدتها، محفزاتها، والأعراض المصاحبة — طنين، ضعف سمع، اضطرابات بصرية، أو ألم عنقي.",
  },
  {
    n: "03",
    title: "تصنيف المنشأ: HNO أم أعصاب أم عمود فقري؟",
    body: "تحديد ما إذا كانت الدوخة أذنية (HNO)، عصبية مركزية، عنقية، أو مشتركة — هذا التصنيف يحدد المسار التشخيصي الكامل.",
  },
  {
    n: "04",
    title: "مراجعة التصوير الموجود وتحديد الفجوات",
    body: "تحليل MRI / CT المتاح وتحديد ما إذا كان التصوير المتخصص للأذن الداخلية أو العمود الفقري العنقي مطلوباً.",
  },
  {
    n: "05",
    title: "وضع خطة التقييم التشخيصي",
    body: "تحديد البروتوكول التشخيصي: اختبارات دهليزية (VNG، VEMP، vHIT)، تقييم عصبي، تصوير متخصص، أو تقييم عنقي.",
  },
  {
    n: "06",
    title: "تنسيق التقييم داخل ألمانيا",
    body: "تنسيق الموعد مع التخصص المناسب داخل شبكة المستشفيات الجامعية الألمانية — HNO، أعصاب، أو جراحة عمود فقري.",
  },
];

const MRI_LAYERS = [
  {
    title: "MRI الدماغ القياسي",
    limitation: "لا يُظهر اضطرابات الأذن الداخلية الوظيفية",
    needed: "MRI مخصص للأذن الداخلية (3T، تسلسل CISS/FIESTA)",
    color: "#f59e0b",
  },
  {
    title: "MRI الأذن الداخلية",
    limitation: "يكشف الأورام والتليف والتشوهات التشريحية",
    needed: "يُطلَب عند الاشتباه في ورم العصب الصوتي أو مرض منيير",
    color: "#059669",
  },
  {
    title: "MRI العمود الفقري العنقي",
    limitation: "يكشف الانزلاق والضغط على الأوعية والأعصاب",
    needed: "يُطلَب عند الدوخة الوضعية أو الألم العنقي المصاحب",
    color: "#3b82f6",
  },
  {
    title: "CT العظام الصدغية",
    limitation: "يكشف الكسور والتشوهات العظمية في الأذن الوسطى",
    needed: "يُطلَب عند تاريخ إصابة أو جراحة أذن سابقة",
    color: "#8b5cf6",
  },
  {
    title: "تصوير الأوعية (MRA)",
    limitation: "يكشف اضطرابات تدفق الدم للمخيخ والجذع الدماغي",
    needed: "يُطلَب عند الاشتباه في قصور وعائي دهليزي",
    color: "#ef4444",
  },
];

const SPINE_OVERLAP = [
  {
    title: "الدوخة العنقية (Cervicogenic Dizziness)",
    body: "اضطرابات الفقرات العنقية تؤثر على المستقبلات الحسية في الرقبة وعلى تدفق الدم للمخيخ. تتميز بارتباطها بحركة الرأس والرقبة.",
  },
  {
    title: "قصور الشريان الفقري القاعدي",
    body: "ضيق الشرايين المغذية للمخيخ والجذع الدماغي يسبب دوخة وضعية مزمنة — يُكشَف بتصوير MRA الأوعية.",
  },
  {
    title: "الانزلاق الغضروفي العنقي",
    body: "الضغط على الأعصاب الجذرية في الرقبة قد يسبب أعراضاً دهليزية غير مباشرة — يتطلب تقييماً مشتركاً بين جراحة العمود الفقري وطب الأعصاب.",
  },
  {
    title: "التنسيق بين HNO وجراحة العمود الفقري",
    body: "الحالات المشتركة تحتاج تقييماً متكاملاً — استبعاد المنشأ الأذني أولاً، ثم تقييم العمود الفقري إذا استمرت الأعراض.",
  },
];

const TRAUMA_OVERLAP = [
  {
    title: "دوخة ما بعد الارتجاج (Post-Concussion Dizziness)",
    body: "إصابات الرأس تسبب تلفاً في الأذن الداخلية أو الأعصاب الدهليزية — قد تستمر لأشهر أو سنوات بعد الحادث.",
  },
  {
    title: "إصابة الرقبة (Whiplash) والدوخة",
    body: "إصابات الرقبة في الحوادث تُسبب اضطراباً في المستقبلات الحسية العنقية — تُسبب دوخة وضعية مزمنة.",
  },
  {
    title: "BPPV ما بعد الصدمة",
    body: "إصابات الرأس تُسبب تحرك حصيات الأذن (Otoliths) — أكثر أسباب الدوخة الانتيابية الوضعية شيوعاً بعد الحوادث.",
  },
  {
    title: "التقييم متعدد التخصصات",
    body: "الدوخة ما بعد الصدمة تحتاج تقييماً مشتركاً: HNO + أعصاب + جراحة عمود فقري + إعادة تأهيل دهليزي.",
  },
];

const CONDITIONS_MATRIX = [
  {
    title: "مرض منيير",
    body: "اضطراب في الأذن الداخلية يسبب نوبات دوخة مصحوبة بطنين وضعف سمع.",
    href: "/ar/tinnitus-treatment-germany",
  },
  {
    title: "اضطرابات الأذن الداخلية",
    body: "اضطرابات دهليزية متعددة تؤثر على الجهاز المسؤول عن التوازن.",
    href: "/ar/ent-germany",
  },
  {
    title: "الدوخة بعد الإصابات",
    body: "دوخة ما بعد الصدمة الناتجة عن إصابات الرأس والرقبة والحوادث.",
    href: "/ar/complex-trauma-germany",
  },
  {
    title: "اضطرابات التوازن العصبية",
    body: "اضطرابات المخيخ والمسارات العصبية المركزية المرتبطة بالتوازن.",
    href: "/ar/neurology-treatment-germany",
  },
  {
    title: "طنين + دوخة",
    body: "الارتباط بين الطنين المزمن والدوخة — تقييم مشترك ضروري.",
    href: "/ar/tinnitus-treatment-germany",
  },
  {
    title: "مشاكل العمود الفقري والتوازن",
    body: "الاضطرابات العنقية وتأثيرها على الجهاز الدهليزي والتوازن.",
    href: "/ar/spine-surgery-germany",
  },
  {
    title: "الصداع النصفي الدهليزي",
    body: "نوع من الصداع النصفي يسبب دوخة مزمنة بدون ألم رأس واضح دائماً.",
    href: "/ar/neurology-treatment-germany",
  },
  {
    title: "حالات غير مشخصة",
    body: "دوخة مستمرة مع فحوصات طبيعية — تحتاج تقييماً متخصصاً متعدد التخصصات.",
    href: "/ar/submit-case",
  },
];

const INTERNAL_LINKS = [
  { href: "/ar/ent-germany", label: "الأنف والأذن والحنجرة في ألمانيا" },
  { href: "/ar/tinnitus-treatment-germany", label: "علاج الطنين في ألمانيا" },
  { href: "/ar/hearing-implant-germany", label: "زراعة القوقعة وضعف السمع" },
  { href: "/ar/head-neck-tumor-germany", label: "أورام الرأس والعنق" },
  { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
  { href: "/ar/neurology-treatment-germany", label: "علاج الأعصاب في ألمانيا" },
  { href: "/ar/complex-trauma-germany", label: "الصدمات المعقدة والإصابات" },
  { href: "/ar/advanced-rehabilitation-germany", label: "إعادة التأهيل المتقدم" },
];

// ── Component ───────────────────────────────────────────────────────────────
export default function DizzinessLongTerm() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "دوخة مستمرة لأشهر — تقييم الحالات المعقدة في ألمانيا | Medical Care Germany";
    const descContent =
      "تقييم متخصص لحالات الدوخة المزمنة وغير المحسومة في ألمانيا — اضطرابات الأذن الداخلية، الجهاز الدهليزي، الدوخة العصبية، الدوخة العنقية، وما بعد الإصابات. يُنسَّق للمرضى من ليبيا والسودان ودول الخليج.";
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
    c.href = "https://medicalcaregermany.com/ar/dizziness-long-term";
  }, []);

  return (
    <div dir="rtl" style={{ ...FONT, background: "#fff", color: "#1a1a2e" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIZZINESS_FAQ_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MEDICAL_WEBPAGE_JSONLD) }}
      />

      <SmartNavLayer currentPath="/ar/dizziness-long-term" />
      <HreflangTags currentPath="/ar/dizziness-long-term" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            Medical Care Germany — تقييم دهليزي متخصص
          </p>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            دوخة مستمرة لأشهر بدون تفسير واضح؟
          </h1>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 620, margin: "0 auto 12px" }}>
            في هذه الحالات، المشكلة ليست في الأعراض بل في دقة التشخيص.
          </p>
          <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, maxWidth: 580, margin: "0 auto 36px" }}>
            تُنسِّق Medical Care Germany تقييم حالات الدوخة المزمنة غير المحسومة للمرضى الدوليين — من ليبيا، السودان، الكويت، الإمارات، والمملكة العربية السعودية.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href="/ar/send-medical-reports"
              style={{ padding: "14px 32px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-block" }}
            >
              إرسال التقارير الطبية
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "14px 32px", border: "1px solid rgba(255,255,255,0.3)", color: "#f8fafc", fontSize: 14, fontWeight: 300, textDecoration: "none", display: "inline-block" }}
            >
              تحدث مع منسق
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: CLINICAL INDICATORS ──────────────────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            مؤشرات سريرية
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 40 }}>
            متى تصبح الدوخة علامة على مشكلة أعمق؟
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {CLINICAL_INDICATORS.map((text, i) => (
              <div key={i} style={{ padding: "20px", border: "1px solid #e2e8f0", background: "#f8fafc", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#0B1C2C", fontSize: 16, marginTop: 2, flexShrink: 0 }}>◈</span>
                <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, borderRight: "4px solid #0B1C2C", paddingRight: 20, paddingTop: 8, paddingBottom: 8 }}>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, margin: 0 }}>
              التأخير في تشخيص الدوخة المزمنة قد يُخفي سبباً عصبياً أو أذنياً يحتاج تدخلاً تشخيصياً دقيقاً. هذه الصفحة مخصصة للحالات غير المحسومة فقط.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: HNO vs NEURO DIFFERENTIATION ─────────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            التمييز التشخيصي
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 12 }}>
            HNO مقابل طب الأعصاب — أين تبدأ الدوخة؟
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            التمييز بين الدوخة الأذنية والعصبية هو الخطوة الأولى في أي مسار تشخيصي صحيح. كثير من الحالات تنطوي على تداخل بين التخصصين.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {HNO_NEURO_CARDS.map((card, i) => (
              <div key={i} style={{ padding: "24px 20px", background: "#fff", border: "1px solid #e2e8f0", borderTop: "3px solid #0B1C2C" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.15em", color: "#94a3b8", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  {card.tag}
                </span>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#0B1C2C", marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: VESTIBULAR DIAGNOSTIC PATHWAY ────────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#0B1C2C" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#64748b", textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>
            المسار التشخيصي الدهليزي
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.5, marginBottom: 48, textAlign: "center" }}>
            كيف تتم مراجعة حالات الدوخة المعقدة؟
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PATHWAY_STEPS.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#94a3b8", fontWeight: 500, flexShrink: 0 }}>
                    {step.n}
                  </div>
                  {i < PATHWAY_STEPS.length - 1 && (
                    <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />
                  )}
                </div>
                <div style={{ paddingBottom: 32 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 500, color: "#f1f5f9", marginBottom: 6, marginTop: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MRI / CT INTERPRETATION LAYER ────────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            طبقة التصوير التشخيصي
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 12 }}>
            MRI وCT في تشخيص الدوخة — ما يُظهره وما لا يُظهره
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            التصوير القياسي لا يكفي في حالات الدوخة المزمنة. كل نوع من أنواع التصوير له هدف تشخيصي محدد — واختيار التصوير الخاطئ يؤخر التشخيص.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#e2e8f0" }}>
            {MRI_LAYERS.map((layer, i) => (
              <div key={i} style={{ background: "#fff", padding: "24px 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, alignItems: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 4, height: 32, background: layer.color, display: "block", flexShrink: 0 }} />
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "#0B1C2C", margin: 0, lineHeight: 1.4 }}>{layer.title}</h3>
                </div>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.1em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 4 }}>القيود</p>
                  <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, margin: 0 }}>{layer.limitation}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.1em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 4 }}>متى يُطلَب</p>
                  <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.6, margin: 0 }}>{layer.needed}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, padding: "16px 20px", background: "#f8fafc", borderRight: "3px solid #0B1C2C" }}>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "#0B1C2C" }}>ملاحظة سريرية:</strong> تحديد نوع التصوير المناسب يتطلب تقييماً سريرياً أولياً — وليس طلب جميع الأنواع بشكل عشوائي. Medical Care Germany تُنسِّق هذا التسلسل التشخيصي.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SPINE-RELATED DIZZINESS OVERLAP ──────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            تداخل العمود الفقري
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 12 }}>
            الدوخة المرتبطة بالعمود الفقري العنقي
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            نسبة من حالات الدوخة المزمنة ذات منشأ عنقي — تُشخَّص متأخراً لأن التقييم يقتصر على الأذن والأعصاب دون فحص العمود الفقري.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {SPINE_OVERLAP.map((item, i) => (
              <div key={i} style={{ padding: "24px 20px", background: "#fff", border: "1px solid #e2e8f0" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#0B1C2C", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Link
              href="/ar/spine-surgery-germany"
              style={{ fontSize: 13, color: "#0B1C2C", textDecoration: "none", padding: "10px 20px", border: "1px solid #cbd5e1", background: "#fff", display: "inline-block" }}
            >
              جراحة العمود الفقري في ألمانيا ←
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TRAUMA-INDUCED BALANCE DISORDERS ─────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#0B1C2C" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#64748b", textTransform: "uppercase", marginBottom: 16 }}>
            الصدمة واضطرابات التوازن
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.5, marginBottom: 12 }}>
            اضطرابات التوازن الناجمة عن الإصابات والحوادث
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 680 }}>
            الدوخة ما بعد الصدمة تُصنَّف ضمن أصعب الحالات تشخيصاً — لأنها تجمع بين منشأ أذني وعصبي وعنقي في آنٍ واحد.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {TRAUMA_OVERLAP.map((item, i) => (
              <div key={i} style={{ padding: "24px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Link
              href="/ar/complex-trauma-germany"
              style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", padding: "10px 20px", border: "1px solid rgba(255,255,255,0.15)", display: "inline-block" }}
            >
              الصدمات المعقدة والإصابات ←
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CONDITIONS MATRIX ─────────────────────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            مصفوفة الحالات
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 40 }}>
            أنواع حالات الدوخة التي يُنسَّق تقييمها
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {CONDITIONS_MATRIX.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                style={{ background: "#fff", padding: "24px 20px", textDecoration: "none", display: "block" }}
              >
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#0B1C2C", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ACCORDION ─────────────────────────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            أسئلة شائعة
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 40 }}>
            أسئلة حول الدوخة المزمنة والتقييم في ألمانيا
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e2e8f0" }}>
            {DIZZINESS_FAQ_JSONLD.mainEntity.map((item, i) => (
              <div key={i} style={{ borderBottom: i < DIZZINESS_FAQ_JSONLD.mainEntity.length - 1 ? "1px solid #e2e8f0" : "none" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", background: "#fff", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, textAlign: "right" }}
                >
                  <span style={{ ...FONT, fontSize: 14, fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5 }}>
                    {item.name}
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: 18, flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", background: "#fff" }}>
                    <p style={{ ...FONT, fontSize: 13, color: "#475569", lineHeight: 1.8, margin: 0 }}>
                      {item.acceptedAnswer.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: INTERNAL AUTHORITY MATRIX + CTA ───────────────────── */}
      <section style={{ padding: "72px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            الشبكة الطبية المرتبطة
          </p>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", lineHeight: 1.5, marginBottom: 12 }}>
            تخصصات مرتبطة بتقييم الدوخة المزمنة
          </h2>
          <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 36, maxWidth: 640 }}>
            الدوخة المزمنة نادراً ما تكون تخصصاً واحداً — التقييم الشامل يمتد عبر HNO، الأعصاب، العمود الفقري، وإعادة التأهيل.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
            {INTERNAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: 13, color: "#0B1C2C", textDecoration: "none", padding: "10px 18px", border: "1px solid #cbd5e1", background: "#f8fafc", display: "inline-block" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Authority CTA */}
          <div style={{ background: "#0B1C2C", padding: "48px 32px", textAlign: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", color: "#64748b", textTransform: "uppercase", marginBottom: 16 }}>
              Medical Care Germany
            </p>
            <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.55, marginBottom: 16 }}>
              تقييم حالات الدوخة المزمنة في ألمانيا
            </h2>
            <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.85, maxWidth: 560, margin: "0 auto 12px" }}>
              تُنسِّق Medical Care Germany تقييم الحالات غير المحسومة عبر شبكة متخصصة تشمل HNO، طب الأعصاب، وجراحة العمود الفقري داخل المستشفيات الجامعية الألمانية.
            </p>
            <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 32px" }}>
              يُستقبَل هذا التنسيق للمرضى من ليبيا، السودان، الكويت، الإمارات، المملكة العربية السعودية، وسائر الدول العربية.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <Link
                href="/ar/send-medical-reports"
                style={{ padding: "14px 36px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-block" }}
              >
                إرسال التقارير الطبية للتقييم
              </Link>
              <Link
                href="/ar/submit-case"
                style={{ padding: "14px 36px", border: "1px solid rgba(255,255,255,0.2)", color: "#94a3b8", fontSize: 13, textDecoration: "none", display: "inline-block" }}
              >
                تقديم الحالة الطبية
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CrossClusterSection
        clusters={["hno_neuro", "neuro_spine", "trauma_mri_rehab", "vestibular_audiology", "head_neck_tumor"]}
        excludeCurrentHref="/ar/dizziness-long-term"
      />
      <ArabicFooterGuide />
    </div>
  );
}
