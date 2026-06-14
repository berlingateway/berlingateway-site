/**
 * /ar/orthopedics-germany
 * Orthopedic Structural Intelligence Hub — MCG Authority Page
 * 9 sections: symptom indicators, joint replacement, trauma reconstruction,
 * spine-ortho overlap, prosthetics integration, MRI/CT review,
 * chronic pain + mobility, FAQ accordion, authority CTA
 */

import { useEffect, useState } from "react";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%84%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%20%D9%84%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85";

const ORTHO_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ما هي حالات العظام والمفاصل التي يتم تنسيقها في ألمانيا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تشمل الحالات المنسقة: إصابات المفاصل الكبرى، كسور العظام المعقدة، تآكل المفاصل، زراعة المفاصل الصناعية، وإصابات ما بعد الحوادث والحروب للمرضى الدوليين القادمين من ليبيا والسودان والعراق ودول الخليج.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن تقييم حالة كسر العظام أو تآكل المفصل عن بُعد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. يتم إرسال الأشعة والتقارير الطبية إلكترونيًا، ويتم تقييمها من برلين خلال 24–48 ساعة لتحديد الخيار الجراحي أو غير الجراحي المناسب قبل السفر.",
      },
    },
    {
      "@type": "Question",
      name: "ما الفرق بين تآكل المفصل الذي يحتاج جراحة وذلك الذي لا يحتاجها؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يعتمد القرار على درجة التآكل، العمر، مستوى النشاط، وصور الرنين المغناطيسي. في الحالات المبكرة يمكن العلاج بالحقن المفصلي أو العلاج الفيزيائي. في الحالات المتقدمة (Grade III–IV) تكون زراعة المفصل الخيار الأمثل.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي مخاطر إعادة الجراحة بعد عملية عظام فاشلة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إعادة الجراحة بعد فشل العملية الأولى تحمل مخاطر أعلى: التهابات، تليف الأنسجة، ضعف الالتئام. لذلك يتطلب التقييم الكامل للتقارير السابقة والأشعة قبل أي قرار جراحي جديد.",
      },
    },
    {
      "@type": "Question",
      name: "كيف يتداخل العمود الفقري مع حالات العظام والمفاصل؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ألم الورك والركبة يمكن أن يكون مصدره العمود الفقري القطني (الانزلاق الغضروفي، تضيق القناة الشوكية). التقييم المتكامل يشمل الفقرات القطنية والمفاصل معًا لتجنب الجراحة الخاطئة.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن للمريض من ليبيا أو السودان أو العراق الحصول على تقييم أولي قبل السفر؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. يتم إرسال الملف الطبي الكامل إلكترونيًا، ويتم تقييمه من برلين مع تحديد الخيارات العلاجية والتكاليف التقديرية قبل اتخاذ قرار السفر.",
      },
    },
    {
      "@type": "Question",
      name: "ما هو دور إعادة التأهيل بعد جراحة العظام؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "إعادة التأهيل بعد جراحة العظام تحدد نتيجة الجراحة بنسبة كبيرة. تشمل: العلاج الفيزيائي المكثف، تقوية العضلات المحيطة، تدريب المشية، والتأهيل الوظيفي — تنسيق كامل من برلين.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي مدة التعافي بعد زراعة مفصل الركبة أو الورك في ألمانيا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "عادةً 6–12 أسبوعًا للتعافي الأولي، و3–6 أشهر للعودة الكاملة للنشاط. يعتمد ذلك على العمر، الوزن، ومستوى التأهيل. التخطيط المسبق لمرحلة التأهيل جزء أساسي من التنسيق.",
      },
    },
  ],
};

const MEDICAL_WEB_PAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "علاج العظام والمفاصل في ألمانيا — تنسيق الحالات الجراحية المعقدة",
  description:
    "تنسيق متخصص لحالات العظام والمفاصل في ألمانيا: كسور معقدة، زراعة مفاصل، تآكل المفاصل، إصابات الحوادث والحروب، وإعادة التأهيل بعد الجراحة.",
  url: "https://medicalcaregermany.com/ar/orthopedics-germany",
  inLanguage: "ar",
  audience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
    geographicArea: "Libya, Sudan, Iraq, Gulf countries",
  },
  about: {
    "@type": "MedicalSpecialty",
    name: "Orthopedics",
  },
  image: "https://medicalcaregermany.com/og-image.jpg",
};

const SYMPTOM_INDICATORS = [
  { label: "ألم مزمن في الركبة أو الورك أو الكتف لأكثر من 3 أشهر" },
  { label: "كسر عظام معقد بعد حادث أو إصابة حربية" },
  { label: "تآكل مفصلي متقدم مع تقييد الحركة" },
  { label: "فشل عملية عظام سابقة أو ألم مستمر بعد الجراحة" },
  { label: "تشوه عظمي أو عدم التئام الكسر" },
  { label: "ضعف في المشية أو عدم استقرار المفصل" },
  { label: "ألم في الظهر السفلي يمتد إلى الساق أو الورك" },
  { label: "إصابات الأوتار والأربطة المزمنة غير المستجيبة للعلاج" },
];

const JOINT_REPLACEMENT = [
  {
    joint: "مفصل الركبة",
    indication: "تآكل Grade III–IV، ألم مزمن، تقييد الحركة",
    approach: "زراعة كلية أو جزئية — تقييم مسبق بالرنين المغناطيسي والأشعة المقطعية",
    recovery: "6–12 أسبوع تأهيل مكثف",
  },
  {
    joint: "مفصل الورك",
    indication: "نخر رأس الفخذ، كسر عنق الفخذ، تآكل متقدم",
    approach: "زراعة كلية — اختيار المادة والتصميم بناءً على العمر والنشاط",
    recovery: "8–12 أسبوع مع دعم التأهيل",
  },
  {
    joint: "مفصل الكتف",
    indication: "تمزق الكفة المدورة المزمن، تآكل المفصل الكتفي",
    approach: "إصلاح بالمنظار أو زراعة جزئية/كلية",
    recovery: "3–6 أشهر تأهيل وظيفي",
  },
  {
    joint: "مفصل الكاحل",
    indication: "تآكل ما بعد الكسر، التهاب مفصلي مزمن",
    approach: "تثبيت جراحي أو زراعة — تقييم بيوميكانيكي مسبق",
    recovery: "3–4 أشهر مع دعم التأهيل",
  },
];

const TRAUMA_RECONSTRUCTION = [
  {
    type: "كسور العظام المعقدة",
    desc: "كسور متعددة الشظايا، كسور المفاصل، كسور ما بعد الحوادث الشديدة — تقييم بالأشعة المقطعية ثلاثية الأبعاد وتخطيط جراحي دقيق.",
  },
  {
    type: "عدم التئام الكسر",
    desc: "حالات الكسر التي لم تلتئم بعد 6 أشهر — تقييم الأسباب (نقص التروية، العدوى، الفجوة العظمية) وخيارات الإصلاح الجراحي.",
  },
  {
    type: "إصابات الحرب والانفجارات",
    desc: "كسور متعددة، إصابات الأنسجة الرخوة، بتر جزئي — تقييم متكامل يشمل الأوعية الدموية والأعصاب والعظام.",
  },
  {
    type: "إعادة بناء العظام",
    desc: "زراعة عظم ذاتي أو اصطناعي، تطويل العظام، تصحيح التشوهات — تنسيق مع مراكز متخصصة في جراحة إعادة البناء.",
  },
  {
    type: "إصابات الأوتار والأربطة",
    desc: "تمزق الرباط الصليبي، تمزق الكفة المدورة، إصابات وتر أكيليس — تقييم بالرنين المغناطيسي وتحديد الخيار الجراحي أو التحفظي.",
  },
  {
    type: "الكسور المفصلية",
    desc: "كسور داخل المفصل تؤثر على سطح الغضروف — تتطلب إصلاحًا دقيقًا لتجنب تآكل المفصل المبكر.",
  },
];

const SPINE_ORTHO_OVERLAP = [
  {
    symptom: "ألم الورك",
    spineSource: "انزلاق غضروفي L4–L5 أو L5–S1",
    orthoSource: "تآكل مفصل الورك أو نخر رأس الفخذ",
    evaluation: "رنين مغناطيسي للعمود القطني + الورك معًا",
  },
  {
    symptom: "ألم الركبة",
    spineSource: "تضيق القناة الشوكية — ضغط على جذر L3–L4",
    orthoSource: "تآكل غضروف الركبة أو إصابة الرباط",
    evaluation: "فحص عصبي + تصوير الركبة والعمود الفقري",
  },
  {
    symptom: "ضعف المشية",
    spineSource: "اعتلال النخاع الشوكي العنقي أو القطني",
    orthoSource: "ضعف العضلات بعد إصابة المفصل أو الكسر",
    evaluation: "تقييم عصبي + تقييم عضلي هيكلي متكامل",
  },
  {
    symptom: "ألم الكتف",
    spineSource: "انزلاق غضروفي عنقي C5–C6 أو C6–C7",
    orthoSource: "تمزق الكفة المدورة أو التهاب الجراب",
    evaluation: "رنين مغناطيسي عنقي + رنين مغناطيسي الكتف",
  },
];

const MRI_CT_REVIEW = [
  {
    modality: "الرنين المغناطيسي للمفاصل",
    findings: "تآكل الغضروف، تمزق الأوتار، إصابات الأربطة، التهاب الغشاء الزليلي",
    limitation: "لا يُظهر تفاصيل العظام بدقة كافية في الكسور الحديثة",
  },
  {
    modality: "الأشعة المقطعية ثلاثية الأبعاد",
    findings: "تفاصيل الكسور، تقييم الكثافة العظمية، تخطيط الجراحة",
    limitation: "جرعة إشعاعية أعلى — تُستخدم عند الضرورة",
  },
  {
    modality: "أشعة X الوظيفية",
    findings: "عدم استقرار المفصل، تقييم محاذاة العظام، متابعة الالتئام",
    limitation: "لا تُظهر الأنسجة الرخوة أو الغضروف",
  },
  {
    modality: "مسح العظام النووي",
    findings: "كشف العدوى، نخر العظام، الكسور غير الظاهرة في الأشعة العادية",
    limitation: "يتطلب حقن مادة مشعة — يُستخدم في حالات محددة",
  },
  {
    modality: "الموجات فوق الصوتية للأوتار",
    findings: "تمزق الأوتار الجزئي، التهاب الجراب، تجمع السوائل المفصلية",
    limitation: "يعتمد على خبرة الفاحص — لا يُغني عن الرنين المغناطيسي",
  },
];

const CHRONIC_MOBILITY = [
  {
    condition: "الألم المزمن بعد الجراحة",
    desc: "استمرار الألم لأكثر من 3 أشهر بعد عملية العظام — يستوجب إعادة تقييم الجراحة والأعصاب والتأهيل.",
    link: "/ar/complex-trauma-germany",
    linkLabel: "تقييم الصدمات المعقدة",
  },
  {
    condition: "اضطرابات المشية",
    desc: "صعوبة المشية بعد الكسر أو الجراحة — تقييم عصبي وعضلي هيكلي متكامل مع تأهيل متخصص.",
    link: "/ar/advanced-rehabilitation-germany",
    linkLabel: "إعادة التأهيل المتقدم",
  },
  {
    condition: "الألم المزمن في العمود الفقري والمفاصل",
    desc: "ألم يمتد من الظهر إلى الأطراف — يتطلب تقييمًا متكاملًا للعمود الفقري والمفاصل معًا.",
    link: "/ar/spine-surgery-germany",
    linkLabel: "جراحة العمود الفقري",
  },
  {
    condition: "ضعف العضلات بعد الإصابة",
    desc: "ضمور العضلات وضعف القوة بعد الكسر أو الجراحة — يحتاج تأهيلًا وظيفيًا مكثفًا.",
    link: "/ar/advanced-rehabilitation-germany",
    linkLabel: "التأهيل الوظيفي",
  },
];

const FAQ_ITEMS = [
  {
    q: "ما هي حالات العظام والمفاصل التي يتم تنسيقها في ألمانيا؟",
    a: "تشمل الحالات المنسقة: إصابات المفاصل الكبرى، كسور العظام المعقدة، تآكل المفاصل، زراعة المفاصل الصناعية، وإصابات ما بعد الحوادث والحروب للمرضى الدوليين القادمين من ليبيا والسودان والعراق ودول الخليج.",
  },
  {
    q: "هل يمكن تقييم حالة كسر العظام أو تآكل المفصل عن بُعد؟",
    a: "نعم. يتم إرسال الأشعة والتقارير الطبية إلكترونيًا، ويتم تقييمها من برلين خلال 24–48 ساعة لتحديد الخيار الجراحي أو غير الجراحي المناسب قبل السفر.",
  },
  {
    q: "ما الفرق بين تآكل المفصل الذي يحتاج جراحة وذلك الذي لا يحتاجها؟",
    a: "يعتمد القرار على درجة التآكل، العمر، مستوى النشاط، وصور الرنين المغناطيسي. في الحالات المبكرة يمكن العلاج بالحقن المفصلي أو العلاج الفيزيائي. في الحالات المتقدمة (Grade III–IV) تكون زراعة المفصل الخيار الأمثل.",
  },
  {
    q: "ما هي مخاطر إعادة الجراحة بعد عملية عظام فاشلة؟",
    a: "إعادة الجراحة بعد فشل العملية الأولى تحمل مخاطر أعلى: التهابات، تليف الأنسجة، ضعف الالتئام. لذلك يتطلب التقييم الكامل للتقارير السابقة والأشعة قبل أي قرار جراحي جديد.",
  },
  {
    q: "كيف يتداخل العمود الفقري مع حالات العظام والمفاصل؟",
    a: "ألم الورك والركبة يمكن أن يكون مصدره العمود الفقري القطني (الانزلاق الغضروفي، تضيق القناة الشوكية). التقييم المتكامل يشمل الفقرات القطنية والمفاصل معًا لتجنب الجراحة الخاطئة.",
  },
  {
    q: "هل يمكن للمريض من ليبيا أو السودان أو العراق الحصول على تقييم أولي قبل السفر؟",
    a: "نعم. يتم إرسال الملف الطبي الكامل إلكترونيًا، ويتم تقييمه من برلين مع تحديد الخيارات العلاجية والتكاليف التقديرية قبل اتخاذ قرار السفر.",
  },
  {
    q: "ما هو دور إعادة التأهيل بعد جراحة العظام؟",
    a: "إعادة التأهيل بعد جراحة العظام تحدد نتيجة الجراحة بنسبة كبيرة. تشمل: العلاج الفيزيائي المكثف، تقوية العضلات المحيطة، تدريب المشية، والتأهيل الوظيفي — تنسيق كامل من برلين.",
  },
  {
    q: "ما هي مدة التعافي بعد زراعة مفصل الركبة أو الورك في ألمانيا؟",
    a: "عادةً 6–12 أسبوعًا للتعافي الأولي، و3–6 أشهر للعودة الكاملة للنشاط. يعتمد ذلك على العمر، الوزن، ومستوى التأهيل. التخطيط المسبق لمرحلة التأهيل جزء أساسي من التنسيق.",
  },
];

const S = {
  sectionDark: { background: "#0B1C2C", padding: "72px 24px" } as React.CSSProperties,
  sectionLight: { background: "#f8fafc", padding: "72px 24px" } as React.CSSProperties,
  sectionWhite: { padding: "72px 24px" } as React.CSSProperties,
  inner760: { maxWidth: 760, margin: "0 auto" } as React.CSSProperties,
  inner900: { maxWidth: 900, margin: "0 auto" } as React.CSSProperties,
  label: { ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase" as const, marginBottom: 12 },
  h2Dark: { ...AR, fontSize: "clamp(20px,3vw,28px)", fontWeight: 500, color: "#f8fafc", marginBottom: 32, lineHeight: 1.5 } as React.CSSProperties,
  h2Light: { ...AR, fontSize: "clamp(20px,3vw,28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 32, lineHeight: 1.5 } as React.CSSProperties,
  bodyDark: { ...AR, fontSize: 14, color: "#94a3b8", lineHeight: 1.85 } as React.CSSProperties,
  bodyLight: { ...AR, fontSize: 14, color: "#475569", lineHeight: 1.85 } as React.CSSProperties,
  ctaWhite: { ...AR, display: "inline-block", padding: "12px 28px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 500, textDecoration: "none", border: "1px solid #fff" } as React.CSSProperties,
  ctaGhost: { ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" } as React.CSSProperties,
};

export default function OrthopedicsGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "علاج العظام والمفاصل في ألمانيا — تنسيق الحالات الجراحية المعقدة | Medical Care Germany";
    const descContent =
      "تنسيق متخصص لحالات العظام والمفاصل في ألمانيا: كسور معقدة، زراعة مفاصل، تآكل المفاصل، إصابات الحوادث والحروب، وإعادة التأهيل. للمرضى من ليبيا والسودان والعراق ودول الخليج.";
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
    c.href = "https://medicalcaregermany.com/ar/orthopedics-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORTHO_FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MEDICAL_WEB_PAGE_JSONLD) }} />
      <SmartNavLayer currentPath="/ar/orthopedics-germany" />
      <HreflangTags currentPath="/ar/orthopedics-germany" />

      {/* ── SECTION 1: HERO ───────────────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...S.label, textAlign: "center" }}>
            Medical Care Germany — تنسيق جراحة العظام والمفاصل
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px,4vw,42px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            علاج العظام والمفاصل في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 12px" }}>
            تقييم طبي متخصص للحالات الجراحية وغير الجراحية في العظام والمفاصل — من الكسور المعقدة إلى زراعة المفاصل الصناعية وإعادة التأهيل بعد الجراحة.
          </p>
          <p style={{ ...AR, fontSize: 13, color: "#64748b", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px" }}>
            للمرضى الدوليين القادمين من ليبيا، السودان، العراق، ودول الخليج — تنسيق طبي متخصص من برلين.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={S.ctaWhite}>إرسال التقارير الطبية للتقييم</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={S.ctaGhost}>طلب تقييم أولي</a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SYMPTOM INDICATORS ────────────────────────── */}
      <section style={S.sectionLight}>
        <div style={S.inner900}>
          <p style={{ ...S.label, textAlign: "center" }}>مؤشرات التقييم التخصصي</p>
          <h2 style={{ ...S.h2Light, textAlign: "center" }}>متى يُنصح بالتقييم الجراحي في ألمانيا؟</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {SYMPTOM_INDICATORS.map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "20px 18px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#059669", marginTop: 6, flexShrink: 0 }} />
                <p style={{ ...AR, fontSize: 13, color: "#1e293b", lineHeight: 1.65, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: JOINT REPLACEMENT SYSTEMS ─────────────────── */}
      <section style={S.sectionDark}>
        <div style={S.inner900}>
          <p style={S.label}>أنظمة زراعة المفاصل</p>
          <h2 style={S.h2Dark}>تقييم زراعة المفاصل الصناعية في ألمانيا</h2>
          <p style={{ ...S.bodyDark, marginBottom: 36 }}>
            قرار زراعة المفصل يستوجب تقييمًا دقيقًا يشمل درجة التآكل، العمر، مستوى النشاط، وجودة العظام المحيطة. كل مفصل له معايير تقييم خاصة ومتطلبات تأهيل مختلفة.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#1e3a52" }}>
            {JOINT_REPLACEMENT.map((item, i) => (
              <div key={i} style={{ background: "#0B1C2C", padding: "24px 20px", display: "grid", gridTemplateColumns: "1fr 2fr 2fr 1fr", gap: 16 }}>
                <div>
                  <p style={{ ...AR, fontSize: 10, color: "#64748b", letterSpacing: "0.12em", marginBottom: 6 }}>المفصل</p>
                  <p style={{ ...AR, fontSize: 14, color: "#f8fafc", fontWeight: 600 }}>{item.joint}</p>
                </div>
                <div>
                  <p style={{ ...AR, fontSize: 10, color: "#64748b", letterSpacing: "0.12em", marginBottom: 6 }}>مؤشرات الجراحة</p>
                  <p style={{ ...AR, fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{item.indication}</p>
                </div>
                <div>
                  <p style={{ ...AR, fontSize: 10, color: "#64748b", letterSpacing: "0.12em", marginBottom: 6 }}>النهج الجراحي</p>
                  <p style={{ ...AR, fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{item.approach}</p>
                </div>
                <div>
                  <p style={{ ...AR, fontSize: 10, color: "#64748b", letterSpacing: "0.12em", marginBottom: 6 }}>التعافي</p>
                  <p style={{ ...AR, fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{item.recovery}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TRAUMA RECONSTRUCTION ─────────────────────── */}
      <section style={S.sectionWhite}>
        <div style={S.inner900}>
          <p style={{ ...S.label, color: "#64748b" }}>إعادة البناء بعد الصدمات</p>
          <h2 style={S.h2Light}>مسارات إعادة بناء العظام بعد الإصابات</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {TRAUMA_RECONSTRUCTION.map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "24px 20px" }}>
                <p style={{ ...AR, fontSize: 13, fontWeight: 600, color: "#0B1C2C", marginBottom: 10 }}>{item.type}</p>
                <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: "20px 24px", background: "#f1f5f9", borderRight: "3px solid #0B1C2C" }}>
            <p style={{ ...AR, fontSize: 14, color: "#1e293b", lineHeight: 1.8 }}>
              <strong>ملاحظة سريرية:</strong> حالات إصابات الحرب والانفجارات تتطلب تقييمًا متكاملًا يشمل الأوعية الدموية والأعصاب والعظام — لا يكفي تقييم العظام وحده.{" "}
              <a href="/ar/complex-trauma-germany" style={{ color: "#0B1C2C", fontWeight: 600 }}>تقييم الصدمات المعقدة ←</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SPINE + ORTHO OVERLAP ─────────────────────── */}
      <section style={S.sectionLight}>
        <div style={S.inner900}>
          <p style={{ ...S.label, textAlign: "center" }}>التداخل مع العمود الفقري</p>
          <h2 style={{ ...S.h2Light, textAlign: "center" }}>متى يكون مصدر ألم المفصل في العمود الفقري؟</h2>
          <p style={{ ...S.bodyLight, textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
            ألم الورك والركبة والكتف قد يكون مصدره العمود الفقري وليس المفصل نفسه. التقييم المتكامل يمنع الجراحة الخاطئة.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", ...AR }}>
              <thead>
                <tr style={{ background: "#0B1C2C" }}>
                  {["الأعراض", "المصدر الفقري المحتمل", "المصدر المفصلي المحتمل", "التقييم المطلوب"].map((h) => (
                    <th key={h} style={{ ...AR, padding: "12px 16px", fontSize: 11, color: "#94a3b8", fontWeight: 500, textAlign: "right", letterSpacing: "0.08em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPINE_ORTHO_OVERLAP.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ ...AR, padding: "14px 16px", fontSize: 13, color: "#0B1C2C", fontWeight: 600 }}>{row.symptom}</td>
                    <td style={{ ...AR, padding: "14px 16px", fontSize: 12, color: "#475569", lineHeight: 1.6 }}>{row.spineSource}</td>
                    <td style={{ ...AR, padding: "14px 16px", fontSize: 12, color: "#475569", lineHeight: 1.6 }}>{row.orthoSource}</td>
                    <td style={{ ...AR, padding: "14px 16px", fontSize: 12, color: "#059669", lineHeight: 1.6 }}>{row.evaluation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <a href="/ar/spine-surgery-germany" style={{ ...AR, fontSize: 13, color: "#0B1C2C", textDecoration: "none", padding: "10px 20px", border: "1px solid #0B1C2C", display: "inline-block" }}>
              تقييم جراحة العمود الفقري ←
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MRI / CT REVIEW ────────────────────────────── */}
      <section style={S.sectionDark}>
        <div style={S.inner900}>
          <p style={S.label}>مراجعة التصوير الشعاعي</p>
          <h2 style={S.h2Dark}>منطق قراءة الأشعة في حالات العظام والمفاصل</h2>
          <p style={{ ...S.bodyDark, marginBottom: 36 }}>
            كل نوع من التصوير يُظهر معلومات مختلفة. التقييم الصحيح يعتمد على اختيار النوع المناسب من الأشعة بناءً على الحالة السريرية.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#1e3a52" }}>
            {MRI_CT_REVIEW.map((item, i) => (
              <div key={i} style={{ background: "#0B1C2C", padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 2fr 1.5fr", gap: 16 }}>
                <p style={{ ...AR, fontSize: 13, color: "#f8fafc", fontWeight: 600 }}>{item.modality}</p>
                <p style={{ ...AR, fontSize: 12, color: "#94a3b8", lineHeight: 1.65 }}>{item.findings}</p>
                <p style={{ ...AR, fontSize: 12, color: "#64748b", lineHeight: 1.65, fontStyle: "italic" }}>{item.limitation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CHRONIC PAIN + MOBILITY ───────────────────── */}
      <section style={S.sectionWhite}>
        <div style={S.inner900}>
          <p style={{ ...S.label, color: "#64748b" }}>الألم المزمن واضطرابات الحركة</p>
          <h2 style={S.h2Light}>الحالات المزمنة التي تحتاج تقييمًا متكاملًا</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {CHRONIC_MOBILITY.map((item, i) => (
              <div key={i} style={{ padding: "24px 20px", border: "1px solid #e2e8f0", background: "#fff" }}>
                <p style={{ ...AR, fontSize: 14, fontWeight: 600, color: "#0B1C2C", marginBottom: 10 }}>{item.condition}</p>
                <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.7, marginBottom: 14 }}>{item.desc}</p>
                <a href={item.link} style={{ ...AR, fontSize: 12, color: "#0B1C2C", textDecoration: "none", borderBottom: "1px solid #0B1C2C", paddingBottom: 1 }}>
                  {item.linkLabel} ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ACCORDION ──────────────────────────────── */}
      <section style={S.sectionLight}>
        <div style={S.inner760}>
          <p style={{ ...S.label, textAlign: "center" }}>أسئلة شائعة</p>
          <h2 style={{ ...S.h2Light, textAlign: "center" }}>أسئلة المرضى حول علاج العظام في ألمانيا</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#e2e8f0" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ background: "#fff" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ ...AR, width: "100%", padding: "18px 20px", textAlign: "right", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                >
                  <span style={{ ...AR, fontSize: 14, color: "#0B1C2C", fontWeight: 500, lineHeight: 1.5 }}>{item.q}</span>
                  <span style={{ fontSize: 18, color: "#94a3b8", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 18px" }}>
                    <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: AUTHORITY CTA ──────────────────────────────── */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ ...S.label, textAlign: "center" }}>Medical Care Germany</p>
          <h2 style={{ ...AR, fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 400, color: "#f8fafc", lineHeight: 1.5, marginBottom: 20 }}>
            تقييم حالتك الجراحية من برلين
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#94a3b8", lineHeight: 1.85, marginBottom: 12 }}>
            نستقبل الملفات الطبية من ليبيا، السودان، العراق، ودول الخليج — تقييم أولي خلال 24–48 ساعة، تنسيق مع المختصين الألمان، ومسار علاجي واضح قبل السفر.
          </p>
          <p style={{ ...AR, fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 36 }}>
            السرية التامة في التعامل مع الملفات الطبية مبدأ أساسي في عملنا.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style={S.ctaWhite}>إرسال التقارير الطبية</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={S.ctaGhost}>تواصل عبر واتسآب</a>
          </div>
        </div>
      </section>

      <CrossClusterSection
        clusters={["trauma_mri_rehab", "neuro_spine"]}
        excludeCurrentHref="/ar/orthopedics-germany"
      />
      <ArabicFooterGuide />
    </div>
  );
}
