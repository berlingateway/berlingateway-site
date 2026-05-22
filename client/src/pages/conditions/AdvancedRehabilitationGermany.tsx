/**
 * /ar/advanced-rehabilitation-germany
 * Central Recovery Intelligence Hub — MCG Arabic Cluster
 * 9-Section Authority Architecture
 */

import { useEffect, useState } from "react";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";
import { CrossClusterSection } from "@/components/CrossClusterSection";

// ── JSON-LD ────────────────────────────────────────────────────────────────
const MEDICAL_WEB_PAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "إعادة التأهيل المتقدم في ألمانيا — المحور المركزي للتعافي",
  "url": "https://medicalcaregermany.com/ar/advanced-rehabilitation-germany",
  "description": "تنسيق مسارات إعادة التأهيل المتقدم في ألمانيا للحالات المعقدة — إصابات الحرب، الأطراف الصناعية، التأهيل العصبي، الحبل الشوكي، والتقييم الطبي الثاني.",
  "inLanguage": "ar",
  "about": { "@type": "MedicalCondition", "name": "Advanced Rehabilitation" },
  "audience": { "@type": "Patient" }
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي الحالات التي تستوجب إعادة التأهيل المتقدم في ألمانيا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تشمل الحالات التي تستوجب إعادة التأهيل المتقدم: إصابات الحرب والحوادث المعقدة، شلل الأطراف، إصابات الحبل الشوكي، الإصابات العصبية المزمنة، البتر، والحالات التي فشل فيها التأهيل الأولي. يُنصح بالتقييم المتخصص قبل اتخاذ قرار السفر إلى ألمانيا."
      }
    },
    {
      "@type": "Question",
      "name": "كيف يختلف التأهيل العصبي عن التأهيل الجراحي في ألمانيا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "التأهيل العصبي يستهدف استعادة الوظائف العصبية والحركية بعد السكتة الدماغية وإصابات الدماغ والحبل الشوكي. التأهيل الجراحي يركز على استعادة الوظيفة بعد العمليات الكبرى كاستبدال المفاصل وجراحة العمود الفقري."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن تقييم حالتي عن بُعد قبل السفر إلى ألمانيا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم. يمكن إرسال التقارير الطبية والصور الإشعاعية عبر البريد الإلكتروني أو واتسآب وسيتم تقييمها من برلين خلال 24–48 ساعة لتحديد مدى ملاءمة برنامج إعادة التأهيل في ألمانيا."
      }
    },
    {
      "@type": "Question",
      "name": "ما مدة برامج إعادة التأهيل المتقدم في ألمانيا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تتراوح مدة برامج التأهيل بين 3 أسابيع للحالات الجراحية البسيطة وعدة أشهر للحالات العصبية والإصابات الشديدة. يُحدد البرنامج بناءً على التقييم السريري الأولي وأهداف التعافي الفردية."
      }
    },
    {
      "@type": "Question",
      "name": "هل يُقبل المرضى من ليبيا والسودان والعراق ودول الخليج في برامج التأهيل الألمانية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم. نُنسق مسارات التأهيل للمرضى الدوليين من ليبيا، السودان، العراق، والمملكة العربية السعودية وسائر دول الخليج. يشمل التنسيق تقييم الوثائق الطبية، اختيار المركز المتخصص، وتحديد البرنامج التأهيلي المناسب قبل السفر."
      }
    },
    {
      "@type": "Question",
      "name": "ما دور التقييم الطبي الثاني في مسار إعادة التأهيل؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "التقييم الطبي الثاني يُحدد ما إذا كان التشخيص الأولي صحيحًا وما إذا كان البرنامج التأهيلي المُتبع مناسبًا. في حالات الفشل التأهيلي أو الألم المزمن المستمر، يُعدّ التقييم الثاني خطوة أساسية قبل أي قرار علاجي جديد."
      }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين التأهيل الروبوتي والتأهيل التقليدي في ألمانيا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "التأهيل الروبوتي يستخدم أجهزة متخصصة (Lokomat، Armeo) لتحفيز الأنماط الحركية الطبيعية وتسريع إعادة التعلم الحركي — مفيد بشكل خاص في إصابات الحبل الشوكي والسكتة الدماغية. التأهيل التقليدي يعتمد على المعالج الفيزيائي مباشرة ويُكمل التأهيل الروبوتي في البرامج المتكاملة."
      }
    },
    {
      "@type": "Question",
      "name": "هل يُغطي التأمين الصحي الدولي برامج التأهيل في ألمانيا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يعتمد التغطية التأمينية على نوع الوثيقة وشركة التأمين. نُساعد في توثيق الحالة الطبية بالشكل المطلوب لتقديمه لشركات التأمين الدولية. للمرضى غير المؤمَّنين، نُقدم تقديرات تكلفة مفصلة قبل بدء البرنامج."
      }
    }
  ]
};

// ── STYLE CONSTANTS ────────────────────────────────────────────────────────
const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const WA_LINK =
  "https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%84%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%20%D9%84%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85";

// ── DATA ───────────────────────────────────────────────────────────────────
const CLINICAL_INDICATORS = [
  "إصابات الحرب والحوادث غير المُعالجة أو المُعالجة جزئيًا",
  "شلل أو ضعف في الأطراف بعد إصابة أو جراحة",
  "إصابات الحبل الشوكي مع ضعف حركي أو حسي",
  "فشل برنامج التأهيل الأولي في استعادة الوظيفة",
  "ألم مزمن مستمر بعد الجراحة أو الإصابة",
  "اضطرابات التوازن والمشي بعد إصابة عصبية أو رأسية",
  "البتر مع الحاجة إلى تركيب طرف صناعي متقدم",
  "إصابات الدماغ الرضية مع تداعيات معرفية أو حركية",
];

const TRAUMA_PATHWAYS = [
  { title: "إصابات الحرب والحوادث الشديدة", desc: "تنسيق مسارات التأهيل متعدد التخصصات للحالات القادمة من مناطق النزاع — تقييم شامل للإصابات المتعددة، الكسور المعقدة، وإصابات الأعصاب.", href: "/ar/complex-trauma-germany" },
  { title: "إعادة التأهيل بعد البتر", desc: "تنسيق مسار التأهيل ما بعد البتر — من الجراحة التحضيرية إلى تركيب الطرف الصناعي المتقدم وبرنامج التدريب الحركي.", href: "/ar/prosthetics-after-amputation-germany" },
  { title: "الكسور المعقدة وإصابات المفاصل", desc: "تقييم الكسور متعددة الشظايا، الكسور المفصلية، وإصابات الأربطة الشديدة — تنسيق التدخل الجراحي والتأهيل اللاحق.", href: "/ar/orthopedics-germany" },
  { title: "إصابات الأعصاب الطرفية", desc: "تقييم إصابات الأعصاب الطرفية بعد الصدمات — تحديد مدى الحاجة للتدخل الجراحي وبروتوكول التأهيل العصبي المناسب.", href: "/ar/nerve-injury-after-trauma-germany" },
  { title: "متلازمة ما بعد الحادث", desc: "تقييم الأعراض المزمنة بعد الحوادث — الألم المزمن، اضطرابات التوازن، الصداع المزمن، والتداعيات النفسية الجسدية.", href: "/ar/dizziness-long-term" },
  { title: "إعادة التقييم بعد فشل التأهيل", desc: "مراجعة مسار التأهيل للحالات التي لم تستجب للبرامج الأولية — تحليل أسباب الفشل وتصميم بروتوكول بديل.", href: "/ar/complex-trauma-germany" },
];

const SPINE_REHAB = [
  { phase: "المرحلة الأولى (0–6 أسابيع)", content: "تحفيز مبكر، تمارين التنفس، الوقاية من الجلطات، وإدارة الألم الحاد بعد جراحة العمود الفقري." },
  { phase: "المرحلة الثانية (6–12 أسبوعًا)", content: "تقوية عضلات الجذع والظهر، تحسين الوضعية، وإعادة تعليم الحركة الوظيفية." },
  { phase: "المرحلة الثالثة (3–6 أشهر)", content: "برامج التحمل والقوة، العودة التدريجية للنشاط، وتقييم نتائج الجراحة." },
  { phase: "التأهيل بعد فشل جراحة العمود الفقري", content: "تقييم أسباب الفشل الجراحي، تحديد الخيارات البديلة، وتصميم برنامج تأهيل للألم المزمن." },
  { phase: "الدوخة الرقبية بعد جراحة العنق", content: "تقييم الأعراض الدهليزية والرقبية بعد جراحات الرقبة — تنسيق مع أخصائيي الأنف والأذن والحنجرة." },
  { phase: "الاستمرارية طويلة المدى", content: "متابعة دورية لتقييم نتائج التأهيل وتعديل البرنامج وفق التطور السريري." },
];

const NEURO_REHAB = [
  { condition: "السكتة الدماغية", indicators: "شلل نصفي، اضطرابات الكلام، صعوبات البلع", approach: "تأهيل عصبي مكثف، تحفيز كهربائي، علاج النطق", link: "/ar/neurology-treatment-germany" },
  { condition: "إصابات الدماغ الرضية", indicators: "اضطرابات معرفية، تغيرات سلوكية، صداع مزمن", approach: "تأهيل معرفي، إدارة الأعراض، دعم نفسي", link: "/ar/complex-trauma-germany" },
  { condition: "إصابات الحبل الشوكي", indicators: "شلل كامل أو جزئي، اضطرابات المثانة والأمعاء", approach: "تأهيل روبوتي (Lokomat)، تحفيز عصبي، إدارة المضاعفات", link: "/ar/spine-surgery-germany" },
  { condition: "الشلل الرعاشي", indicators: "رعشة، تيبس، بطء الحركة", approach: "علاج حركي متخصص، تعديل الأدوية، دعم وظيفي", link: "/ar/neurology-treatment-germany" },
  { condition: "التصلب المتعدد", indicators: "إرهاق، اضطرابات التوازن، ضعف الأطراف", approach: "تأهيل وظيفي، إدارة الإرهاق، تمارين التوازن", link: "/ar/neurology-treatment-germany" },
];

const VESTIBULAR_REHAB = [
  { title: "إعادة تأهيل الدهليز", desc: "بروتوكولات متخصصة لاستعادة التوازن بعد إصابات الأذن الداخلية — تمارين Epley، Cawthorne-Cooksey." },
  { title: "الدوخة بعد الصدمة الرأسية", desc: "تقييم وعلاج الدوخة الموضعية الانتيابية الحميدة (BPPV) وغيرها من اضطرابات التوازن بعد إصابات الرأس." },
  { title: "اضطرابات التوازن المزمنة", desc: "برامج تأهيل طويلة المدى لحالات عدم التوازن المزمن — تدريب التكيف البصري والحسي الجسدي." },
  { title: "الدوخة الرقبية", desc: "تقييم وعلاج الدوخة الناجمة عن إصابات الرقبة أو الجراحة الرقبية — تنسيق مع أخصائيي الأنف والأذن والحنجرة." },
];

const PROSTHETICS_DATA = [
  { type: "الأطراف الصناعية الإلكترونية", desc: "أطراف صناعية تعمل بالتحكم العضلي الكهربائي (myoelectric) للذراعين والساقين — أعلى مستوى من الوظيفة الحركية." },
  { type: "الأطراف الصناعية الكربونية", desc: "أطراف صناعية خفيفة الوزن عالية الأداء للمرضى النشطين — مناسبة للعودة للنشاط البدني." },
  { type: "الأطراف الصناعية للأطفال", desc: "أطراف صناعية قابلة للتعديل مع نمو الطفل — تقييم دوري وتعديل منتظم." },
  { type: "تأهيل ما بعد البتر", desc: "برنامج تأهيل متكامل من الجراحة إلى التركيب والتدريب — يشمل إدارة الألم الوهمي والتأهيل النفسي." },
  { type: "الأجهزة التعويضية والدعامات", desc: "تقييم وتركيب الأجهزة التعويضية (orthoses) لدعم الوظيفة الحركية دون بتر." },
  { type: "إعادة التأهيل الروبوتي للحركة", desc: "استخدام الروبوتات العلاجية (Armeo، Lokomat) لاستعادة الأنماط الحركية الطبيعية." },
];

const CHRONIC_CASES = [
  { title: "الألم المزمن بعد الإصابة", desc: "إدارة الألم المزمن المستمر بعد الصدمات أو الجراحات — تقييم متعدد التخصصات وبروتوكولات الألم المزمن.", link: "/ar/complex-trauma-germany" },
  { title: "الإصابات المزمنة من الحروب", desc: "تقييم وعلاج الإصابات المزمنة الناجمة عن النزاعات المسلحة — شظايا معدنية، إصابات انفجارية، وإصابات متعددة.", link: "/ar/complex-trauma-germany" },
  { title: "فشل الجراحة المتكرر", desc: "مراجعة شاملة للحالات التي خضعت لجراحات متعددة دون تحسن — تحليل الأسباب وتقديم خيارات بديلة.", link: "/ar/spine-surgery-germany" },
  { title: "اضطرابات الحركة المزمنة", desc: "تقييم وعلاج اضطرابات المشي والحركة المزمنة — تحليل الخطوة، تقييم الجهاز العصبي الحركي.", link: "/ar/neurology-treatment-germany" },
  { title: "الإصابات العصبية المزمنة", desc: "متابعة طويلة المدى لإصابات الأعصاب المزمنة — تقييم دوري للوظيفة العصبية وتعديل بروتوكول التأهيل.", link: "/ar/nerve-injury-after-trauma-germany" },
  { title: "التأهيل النفسي الجسدي", desc: "دعم نفسي متخصص للمرضى الذين يعانون من تداعيات نفسية للإصابات المزمنة — اضطراب ما بعد الصدمة والاكتئاب المزمن.", link: "/ar/complex-trauma-germany" },
];

const FAQ_ITEMS = [
  { q: "ما هي الحالات التي تستوجب إعادة التأهيل المتقدم في ألمانيا؟", a: "تشمل الحالات التي تستوجب إعادة التأهيل المتقدم: إصابات الحرب والحوادث المعقدة، شلل الأطراف، إصابات الحبل الشوكي، الإصابات العصبية المزمنة، البتر، والحالات التي فشل فيها التأهيل الأولي. يُنصح بالتقييم المتخصص قبل اتخاذ قرار السفر إلى ألمانيا." },
  { q: "كيف يختلف التأهيل العصبي عن التأهيل الجراحي في ألمانيا؟", a: "التأهيل العصبي يستهدف استعادة الوظائف العصبية والحركية بعد السكتة الدماغية وإصابات الدماغ والحبل الشوكي. التأهيل الجراحي يركز على استعادة الوظيفة بعد العمليات الكبرى كاستبدال المفاصل وجراحة العمود الفقري." },
  { q: "هل يمكن تقييم حالتي عن بُعد قبل السفر إلى ألمانيا؟", a: "نعم. يمكن إرسال التقارير الطبية والصور الإشعاعية عبر البريد الإلكتروني أو واتسآب وسيتم تقييمها من برلين خلال 24–48 ساعة لتحديد مدى ملاءمة برنامج إعادة التأهيل في ألمانيا." },
  { q: "ما مدة برامج إعادة التأهيل المتقدم في ألمانيا؟", a: "تتراوح مدة برامج التأهيل بين 3 أسابيع للحالات الجراحية البسيطة وعدة أشهر للحالات العصبية والإصابات الشديدة. يُحدد البرنامج بناءً على التقييم السريري الأولي وأهداف التعافي الفردية." },
  { q: "هل يُقبل المرضى من ليبيا والسودان والعراق ودول الخليج في برامج التأهيل الألمانية؟", a: "نعم. نُنسق مسارات التأهيل للمرضى الدوليين من ليبيا، السودان، العراق، والمملكة العربية السعودية وسائر دول الخليج. يشمل التنسيق تقييم الوثائق الطبية، اختيار المركز المتخصص، وتحديد البرنامج التأهيلي المناسب قبل السفر." },
  { q: "ما دور التقييم الطبي الثاني في مسار إعادة التأهيل؟", a: "التقييم الطبي الثاني يُحدد ما إذا كان التشخيص الأولي صحيحًا وما إذا كان البرنامج التأهيلي المُتبع مناسبًا. في حالات الفشل التأهيلي أو الألم المزمن المستمر، يُعدّ التقييم الثاني خطوة أساسية قبل أي قرار علاجي جديد." },
  { q: "ما الفرق بين التأهيل الروبوتي والتأهيل التقليدي في ألمانيا؟", a: "التأهيل الروبوتي يستخدم أجهزة متخصصة (Lokomat، Armeo) لتحفيز الأنماط الحركية الطبيعية وتسريع إعادة التعلم الحركي — مفيد بشكل خاص في إصابات الحبل الشوكي والسكتة الدماغية." },
  { q: "هل يُغطي التأمين الصحي الدولي برامج التأهيل في ألمانيا؟", a: "يعتمد التغطية التأمينية على نوع الوثيقة وشركة التأمين. نُساعد في توثيق الحالة الطبية بالشكل المطلوب لتقديمه لشركات التأمين الدولية. للمرضى غير المؤمَّنين، نُقدم تقديرات تكلفة مفصلة قبل بدء البرنامج." },
];

// ── COMPONENT ──────────────────────────────────────────────────────────────
export default function AdvancedRehabilitationGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "إعادة التأهيل المتقدم في ألمانيا — المحور المركزي للتعافي | Medical Care Germany";
    const descContent =
      "تنسيق مسارات إعادة التأهيل المتقدم في ألمانيا للحالات المعقدة — إصابات الحرب، الأطراف الصناعية، التأهيل العصبي، الحبل الشوكي، والتقييم الطبي الثاني. للمرضى من ليبيا والسودان والعراق ودول الخليج.";
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
    c.href = "https://medicalcaregermany.com/ar/advanced-rehabilitation-germany";
  }, []);

  return (
    <div dir="rtl" style={{ ...AR, background: "#fff", color: "#1a1a2e" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MEDICAL_WEB_PAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <SmartNavLayer currentPath="/ar/advanced-rehabilitation-germany" />
      <HreflangTags currentPath="/ar/advanced-rehabilitation-germany" />

      {/* ══ S1: HERO ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px 72px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>
            رأي طبي ثانٍ في إعادة التأهيل · برلين · ألمانيا
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            برنامجك التأهيلي لم ينجح — هل جربت تقييمًا متخصصًا في ألمانيا؟
          </h1>
          <p style={{ ...AR, fontSize: 16, color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 16px" }}>
            كثير من حالات إعادة التأهيل التي وصلتنا كانت تتبع برنامجًا غير مناسب لطبيعة الإصابة — أو كانت تحتاج تدخلاً جراحيًا إضافيًا لم يتم تشخيصه. التقييم الصحيح يبدأ بمراجعة الملف كاملاً من برلين.
          </p>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 36px" }}>
            إصابات الحرب والحوادث · الأطراف الصناعية · التأهيل العصبي · الحبل الشوكي · الألم المزمن · فشل الجراحة
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "13px 32px", background: "#fff", color: "#0B1C2C", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              أرسل ملفك الآن للمراجعة
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "13px 32px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              تحدث مع منسق عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* ══ S2: CLINICAL INDICATORS ══════════════════════════════════════ */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            المؤشرات السريرية
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 12, textAlign: "center", lineHeight: 1.5 }}>
            متى يُشير التقييم إلى الحاجة لإعادة التأهيل المتقدم؟
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, textAlign: "center", marginBottom: 40, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            الحالات التالية تستدعي تقييمًا تخصصيًا قبل اتخاذ أي قرار علاجي أو تأهيلي
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {CLINICAL_INDICATORS.map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "20px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669", marginTop: 7, flexShrink: 0 }} />
                <p style={{ ...AR, fontSize: 14, color: "#1e293b", lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S3: POST-TRAUMA REHABILITATION PATHWAYS ══════════════════════ */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
            مسارات التأهيل بعد الصدمة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 12, lineHeight: 1.5 }}>
            التأهيل بعد الصدمات والإصابات الشديدة
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
            تنسيق مسارات التأهيل للحالات القادمة من مناطق النزاع أو الحوادث الشديدة — تقييم شامل قبل السفر وتحديد البرنامج المناسب.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {TRAUMA_PATHWAYS.map((p) => (
              <a key={p.href} href={p.href} style={{ background: "#fff", padding: "28px 24px", textDecoration: "none", display: "block" }}>
                <h3 style={{ ...AR, fontSize: 15, fontWeight: 600, color: "#0B1C2C", marginBottom: 10, lineHeight: 1.5 }}>{p.title}</h3>
                <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                <span style={{ ...AR, fontSize: 12, color: "#94a3b8", display: "block", marginTop: 12 }}>اقرأ المزيد ←</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S4: POST-SPINE REHABILITATION ════════════════════════════════ */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#64748b", textTransform: "uppercase", marginBottom: 12 }}>
            التأهيل بعد جراحة العمود الفقري
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#f8fafc", marginBottom: 12, lineHeight: 1.5 }}>
            مراحل التأهيل بعد جراحات العمود الفقري
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
            كل مرحلة من مراحل التأهيل لها بروتوكول محدد — من الأسابيع الأولى بعد الجراحة حتى الاستمرارية طويلة المدى.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "#1e3a52" }}>
            {SPINE_REHAB.map((item, i) => (
              <div key={i} style={{ background: "#0f2235", padding: "24px 20px" }}>
                <p style={{ ...AR, fontSize: 11, color: "#059669", fontWeight: 600, marginBottom: 8, letterSpacing: "0.05em" }}>{item.phase}</p>
                <p style={{ ...AR, fontSize: 13, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <a href="/ar/spine-surgery-germany" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              مزيد من المعلومات حول جراحة العمود الفقري في ألمانيا
            </a>
          </div>
        </div>
      </section>

      {/* ══ S5: NEUROLOGICAL REHABILITATION ══════════════════════════════ */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
            التأهيل العصبي
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 12, lineHeight: 1.5 }}>
            إعادة التأهيل العصبي — الحالات والمقاربات
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
            التأهيل العصبي يتطلب تقييمًا دقيقًا لكل حالة وتصميم برنامج مخصص — لا توجد بروتوكولات موحدة لجميع الحالات.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ background: "#0B1C2C" }}>
                  <th style={{ ...AR, padding: "14px 16px", color: "#94a3b8", fontSize: 12, fontWeight: 500, textAlign: "right", borderBottom: "1px solid #1e3a52" }}>الحالة</th>
                  <th style={{ ...AR, padding: "14px 16px", color: "#94a3b8", fontSize: 12, fontWeight: 500, textAlign: "right", borderBottom: "1px solid #1e3a52" }}>المؤشرات السريرية</th>
                  <th style={{ ...AR, padding: "14px 16px", color: "#94a3b8", fontSize: 12, fontWeight: 500, textAlign: "right", borderBottom: "1px solid #1e3a52" }}>المقاربة التأهيلية</th>
                </tr>
              </thead>
              <tbody>
                {NEURO_REHAB.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "14px 16px" }}>
                      <a href={row.link} style={{ ...AR, fontSize: 13, color: "#0B1C2C", fontWeight: 600, textDecoration: "none" }}>{row.condition}</a>
                    </td>
                    <td style={{ ...AR, padding: "14px 16px", fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{row.indicators}</td>
                    <td style={{ ...AR, padding: "14px 16px", fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{row.approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ S6: VESTIBULAR / BALANCE REHABILITATION ══════════════════════ */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
            إعادة تأهيل التوازن والدهليز
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 12, lineHeight: 1.5 }}>
            التأهيل الدهليزي واضطرابات التوازن
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
            اضطرابات التوازن بعد الإصابات تحتاج تقييمًا متخصصًا يجمع بين الأنف والأذن والحنجرة وطب الأعصاب وإعادة التأهيل.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {VESTIBULAR_REHAB.map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "28px 24px" }}>
                <h3 style={{ ...AR, fontSize: 15, fontWeight: 600, color: "#0B1C2C", marginBottom: 10, lineHeight: 1.5 }}>{item.title}</h3>
                <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <a href="/ar/dizziness-long-term" style={{ ...AR, display: "inline-block", padding: "10px 24px", background: "#0B1C2C", color: "#fff", fontSize: 13, textDecoration: "none" }}>
              اقرأ عن الدوخة المزمنة واضطرابات التوازن
            </a>
          </div>
        </div>
      </section>

      {/* ══ S7: PROSTHETICS + MOBILITY RESTORATION ═══════════════════════ */}
      <section style={{ background: "#0B1C2C", padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#64748b", textTransform: "uppercase", marginBottom: 12 }}>
            الأطراف الصناعية واستعادة الحركة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#f8fafc", marginBottom: 12, lineHeight: 1.5 }}>
            الأطراف الصناعية المتقدمة وإعادة الحركة
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
            تنسيق مسارات تركيب الأطراف الصناعية المتقدمة والتأهيل الحركي — من التقييم الأولي إلى إتقان استخدام الطرف الصناعي.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "#1e3a52" }}>
            {PROSTHETICS_DATA.map((item, i) => (
              <div key={i} style={{ background: "#0f2235", padding: "24px 20px" }}>
                <h3 style={{ ...AR, fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 10, lineHeight: 1.5 }}>{item.type}</h3>
                <p style={{ ...AR, fontSize: 13, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <a href="/ar/prosthetics-after-amputation-germany" style={{ ...AR, display: "inline-block", padding: "12px 28px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
              مزيد من المعلومات حول الأطراف الصناعية في ألمانيا
            </a>
          </div>
        </div>
      </section>

      {/* ══ S8: LONG-TERM CHRONIC RECOVERY ═══════════════════════════════ */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
            الحالات المزمنة طويلة المدى
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 12, lineHeight: 1.5 }}>
            التعافي طويل المدى والحالات المزمنة
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#64748b", lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
            بعض الحالات تحتاج متابعة تأهيلية ممتدة لأشهر أو سنوات — تنسيق الاستمرارية العلاجية جزء أساسي من مسار التعافي.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#e2e8f0" }}>
            {CHRONIC_CASES.map((item, i) => (
              <a key={i} href={item.link} style={{ background: "#fff", padding: "28px 24px", textDecoration: "none", display: "block" }}>
                <h3 style={{ ...AR, fontSize: 15, fontWeight: 600, color: "#0B1C2C", marginBottom: 10, lineHeight: 1.5 }}>{item.title}</h3>
                <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ S9: FAQ ACCORDION ════════════════════════════════════════════ */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12 }}>
            الأسئلة الشائعة
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 40, lineHeight: 1.5 }}>
            أسئلة حول إعادة التأهيل المتقدم في ألمانيا
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#e2e8f0" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ background: "#fff" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ ...AR, width: "100%", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "right", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}
                >
                  <span style={{ ...AR, fontSize: 14, color: "#0B1C2C", fontWeight: 500, lineHeight: 1.6, flex: 1 }}>{item.q}</span>
                  <span style={{ color: "#94a3b8", fontSize: 18, flexShrink: 0, marginTop: 2 }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PATIENT STORIES ══════════════════════════════════════════════════════ */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            من ملفات المرضى
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 500, color: "#0B1C2C", marginBottom: 40, lineHeight: 1.5, textAlign: "center" }}>
            تجارب وصلتنا
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <blockquote style={{ borderRight: "4px solid #0B1C2C", paddingRight: 24, paddingTop: 8, paddingBottom: 8, margin: 0 }}>
              <p style={{ ...AR, fontSize: 14, color: "#334155", lineHeight: 1.85, marginBottom: 12 }}>
                "كنت في برنامج تأهيل في السودان بعد إصابة بالحبل الشوكي من حادث سيارة، لكن بعد ستة أشهر لم يتحسن الوضع. أرسلنا الملف لبرلين — التقييم كشف أن هناك ضغطًا على جذر عصبية لم يتم علاجها بعد، وتم تصحيح المسار التأهيلي كاملاً. بعد أربعة أشهر بدأت أمشي بشكل طبيعي."
              </p>
              <footer style={{ ...AR, fontSize: 13, color: "#64748b" }}>محمد، 38 عامًا — السودان</footer>
            </blockquote>
            <blockquote style={{ borderRight: "4px solid #0B1C2C", paddingRight: 24, paddingTop: 8, paddingBottom: 8, margin: 0 }}>
              <p style={{ ...AR, fontSize: 14, color: "#334155", lineHeight: 1.85, marginBottom: 12 }}>
                "فقدت ساقي في حادثة وبعد البتر كنت أحتاج طرفًا صناعيًا. في ليبيا قالوا لي إن الخيارات محدودة. طلبت تقييمًا من ألمانيا — الفريق حدد نوع الطرف المناسب وبرنامج التدريب بدقة، والنتيجة تجاوزت توقعاتي."
              </p>
              <footer style={{ ...AR, fontSize: 13, color: "#64748b" }}>عبدالله، 44 عامًا — ليبيا</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══ CROSS-CLUSTER SECTION ══════════════════════════════════════════════════ */}
      <CrossClusterSection
        clusters={["trauma_mri_rehab", "neuro_spine", "vestibular_audiology", "hno_neuro"]}
        excludeCurrentHref="/ar/advanced-rehabilitation-germany"
      />

      {/* ══ S10: AUTHORITY CTA ═══════════════════════════════════════════ */}
      <section style={{ background: "#0B1C2C", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#64748b", textTransform: "uppercase", marginBottom: 20 }}>
            تنسيق طبي متخصص
          </p>
          <h2 style={{ ...AR, fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.5, marginBottom: 20 }}>
            مسارك التأهيلي يبدأ بتقييم دقيق من برلين
          </h2>
          <p style={{ ...AR, fontSize: 15, color: "#64748b", lineHeight: 1.85, marginBottom: 16 }}>
            نُقيّم التقارير الطبية من برلين ونُحدد مدى ملاءمة برامج التأهيل المتقدم في ألمانيا — للحالات القادمة من ليبيا، السودان، العراق، ودول الخليج.
          </p>
          <p style={{ ...AR, fontSize: 13, color: "#475569", lineHeight: 1.8, marginBottom: 36 }}>
            لا يُتخذ قرار السفر إلا بعد التقييم الأولي وتحديد البرنامج المناسب.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/send-medical-reports" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "#fff", color: "#0B1C2C", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              أرسل ملفك الآن للمراجعة
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ ...AR, display: "inline-block", padding: "14px 36px", background: "transparent", color: "#94a3b8", fontSize: 14, textDecoration: "none", border: "1px solid #334155" }}>
              تحدث مع منسق عبر واتساب
            </a>
          </div>
          <p style={{ ...AR, fontSize: 11, color: "#334155", marginTop: 20 }}>
            تنسيق طبي وتأهيلي للحالات المعقدة داخل ألمانيا — Medical Care Germany، برلين
          </p>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
