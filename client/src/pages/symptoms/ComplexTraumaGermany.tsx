import { useEffect, useState } from "react";
import HreflangTags from "@/components/HreflangTags";
import { Link } from "wouter";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "https://tally.so/r/68MrBP";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي بخصوص حالة إصابة معقدة");

// ─── CLINICAL INDICATOR DATA ────────────────────────────────────────────────
const CLINICAL_INDICATORS = [
  { label: "ألم مزمن بعد الحادث يتجاوز 6 أشهر", sub: "لم يستجب للعلاج المحلي" },
  { label: "جراحة سابقة لم تحقق النتيجة المتوقعة", sub: "فشل جراحي أو مضاعفات ما بعد الجراحة" },
  { label: "إصابات متعددة في حادث واحد", sub: "عظام، أعصاب، أوعية دموية في آنٍ واحد" },
  { label: "شظايا داخلية لم تُستأصل", sub: "شظايا في الدماغ، العمود الفقري، أو الأطراف" },
  { label: "اضطرابات في التوازن والمشي بعد الإصابة", sub: "دوخة، تعثر، ضعف في الأطراف" },
  { label: "تنميل أو شلل جزئي بعد الحادث", sub: "إصابة عصبية محتملة تحتاج تقييماً دقيقاً" },
  { label: "إصابات ما بعد النزاعات المسلحة", sub: "ليبيا، السودان، العراق، اليمن" },
  { label: "تقارير طبية متضاربة أو غير حاسمة", sub: "تحتاج مراجعة متخصصة من مركز ألماني" },
];

// ─── MRI / CT REASSESSMENT MATRIX ───────────────────────────────────────────
const MRI_FINDINGS = [
  {
    finding: "كسر قديم مع التئام غير صحيح",
    implication: "قد يستدعي إعادة الكسر وإعادة التثبيت الجراحي",
    modality: "CT + X-Ray",
  },
  {
    finding: "شظايا معدنية أو عظمية داخل الأنسجة",
    implication: "تقييم إمكانية الاستئصال وخطر الإضرار بالأعصاب المجاورة",
    modality: "CT مقطعي",
  },
  {
    finding: "ضغط على الحبل الشوكي أو الجذور العصبية",
    implication: "تحديد مستوى الضغط وإمكانية التدخل الجراحي التخفيفي",
    modality: "MRI عمود فقري",
  },
  {
    finding: "تلف في الأعصاب الطرفية",
    implication: "تحديد نوع الإصابة (قطع كامل / جزئي) وإمكانية إعادة التوصيل",
    modality: "MRI + تخطيط الأعصاب",
  },
  {
    finding: "إصابة دماغية رضحية قديمة",
    implication: "تقييم الندبات الدماغية وتأثيرها على الوظائف المعرفية والحركية",
    modality: "MRI دماغ مع تباين",
  },
  {
    finding: "تلف في الأوعية الدموية أو تكوّن أوعية جديدة",
    implication: "تقييم تدفق الدم وخطر الجلطات أو النزيف المتأخر",
    modality: "MRI وعائي / Angio-CT",
  },
];

// ─── NEURO-TRAUMA OVERLAP ────────────────────────────────────────────────────
const NEURO_OVERLAP = [
  {
    symptom: "صداع مزمن بعد الحادث",
    neuro: "إصابة دماغية رضحية، ارتفاع ضغط داخل الجمجمة",
    trauma: "كسر قاعدة الجمجمة، نزيف تحت الجافية",
    pathway: "MRI دماغ + تقييم أعصاب قحفية",
  },
  {
    symptom: "دوخة مزمنة بعد الحادث",
    neuro: "اضطراب دهليزي مركزي، إصابة المخيخ",
    trauma: "إصابة العمود الفقري العنقي، كسر هرم الصخرة",
    pathway: "MRI دماغ + عمود عنقي + تقييم HNO",
  },
  {
    symptom: "ضعف أو شلل في الأطراف",
    neuro: "إصابة الحبل الشوكي، تلف الجذور العصبية",
    trauma: "كسر فقرات، ضغط على الأعصاب، تلف الأعصاب الطرفية",
    pathway: "MRI عمود فقري + تخطيط الأعصاب EMG",
  },
  {
    symptom: "اضطرابات في الذاكرة والتركيز",
    neuro: "إصابة الفص الجبهي، اضطراب ما بعد الصدمة",
    trauma: "ارتجاج دماغي متكرر، نزيف صغير متعدد",
    pathway: "MRI وظيفي + تقييم نفسي عصبي",
  },
  {
    symptom: "تنميل أو وخز في الأطراف",
    neuro: "اعتلال الأعصاب الطرفية، ضغط على الجذور",
    trauma: "إصابة الضفيرة العضدية، كسر الأضلاع مع ضغط عصبي",
    pathway: "تخطيط الأعصاب + MRI موضعي",
  },
];

// ─── REHABILITATION COORDINATION ────────────────────────────────────────────
const REHAB_PROTOCOLS = [
  {
    phase: "التقييم الأولي",
    duration: "الأسبوع 1–2",
    content: "تقييم شامل متعدد التخصصات: جراحة العظام، الأعصاب، إعادة التأهيل. تحديد الأهداف الوظيفية.",
  },
  {
    phase: "إعادة التأهيل المكثف",
    duration: "الأسبوع 3–12",
    content: "فيزيوثيرابيا مكثفة، علاج وظيفي، تدريب على المشي والتوازن، إعادة تأهيل عصبي.",
  },
  {
    phase: "التكيف مع الأطراف الصناعية",
    duration: "الشهر 3–6",
    content: "تدريب على استخدام الطرف الصناعي، تعديل الجهاز، تحسين الأداء الوظيفي اليومي.",
  },
  {
    phase: "إعادة التأهيل المعرفي",
    duration: "حسب الحالة",
    content: "للحالات ذات الإصابة الدماغية: تدريب الذاكرة، التركيز، التواصل، إعادة التكيف الاجتماعي.",
  },
  {
    phase: "الدعم النفسي",
    duration: "طوال الفترة",
    content: "علاج اضطراب ما بعد الصدمة، الدعم النفسي للمريض والأسرة، إعادة التكيف مع الحياة اليومية.",
  },
  {
    phase: "المتابعة طويلة الأمد",
    duration: "السنة الأولى",
    content: "زيارات متابعة دورية، تعديل البروتوكول حسب التقدم، تقييم الاحتياجات المتغيرة.",
  },
];

// ─── LONG-TERM COMPLICATIONS ─────────────────────────────────────────────────
const COMPLICATIONS = [
  {
    title: "متلازمة الألم المزمن",
    desc: "ألم مستمر بعد الإصابة لا يستجيب للمسكنات التقليدية. يحتاج تقييماً متخصصاً لتحديد المصدر العصبي أو الهيكلي.",
    link: "/ar/spine-surgery-germany",
    linkText: "تقييم الألم المزمن",
  },
  {
    title: "اضطرابات التوازن والمشي",
    desc: "صعوبة في المشي أو التوازن بعد إصابات العمود الفقري أو الدماغ. قد تكون قابلة للتحسين بالتدخل الجراحي أو إعادة التأهيل.",
    link: "/ar/dizziness-long-term",
    linkText: "تقييم اضطرابات التوازن",
  },
  {
    title: "ضمور العضلات بعد الشلل",
    desc: "فقدان كتلة العضلات بعد الشلل الجزئي أو الكامل. برامج إعادة التأهيل المبكرة تحد من الضمور وتحسن النتائج.",
    link: "/ar/advanced-rehabilitation-germany",
    linkText: "برامج إعادة التأهيل",
  },
  {
    title: "الاعتلال العصبي المتأخر",
    desc: "تطور أعراض عصبية جديدة بعد سنوات من الإصابة. يحتاج مراجعة MRI وتقييم عصبي متخصص.",
    link: "/ar/nerve-injury-after-trauma-germany",
    linkText: "تقييم الأعصاب",
  },
  {
    title: "مضاعفات الجراحة السابقة",
    desc: "التهابات، فشل في التثبيت، أو ألم مستمر بعد جراحات العظام. يحتاج مراجعة جراحية متخصصة.",
    link: "/ar/joint-replacement-after-trauma",
    linkText: "مراجعة الجراحة السابقة",
  },
  {
    title: "اضطرابات ما بعد الصدمة النفسية",
    desc: "القلق، الاكتئاب، وكوابيس ما بعد الإصابة تؤثر على نتائج إعادة التأهيل الجسدي. التقييم النفسي جزء من البروتوكول الشامل.",
    link: "/ar/advanced-rehabilitation-germany",
    linkText: "الدعم النفسي والتأهيل",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "هل يمكن علاج إصابات الأعصاب بعد الحوادث والانفجارات؟",
    a: "نعم، في كثير من الحالات يمكن استعادة الوظيفة العصبية جزئياً أو كلياً عبر الجراحة الدقيقة للأعصاب، خاصة إذا تم التقييم مبكراً. ألمانيا تمتلك مراكز متخصصة في إعادة توصيل الأعصاب الطرفية للحالات الدولية القادمة من ليبيا والسودان والعراق ودول الخليج.",
  },
  {
    q: "هل يمكن تجنب البتر في إصابات النزاعات المسلحة؟",
    a: "في بعض الحالات نعم. إنقاذ الطرف يعتمد على حجم الإصابة الوعائية والعصبية وسرعة التدخل. التقييم المتخصص في ألمانيا يحدد إمكانية الإنقاذ قبل اتخاذ قرار البتر، بما في ذلك الحالات المعقدة القادمة من مناطق النزاعات في ليبيا والعراق.",
  },
  {
    q: "ما هي مدة إعادة التأهيل بعد الإصابات الجسيمة؟",
    a: "تتراوح مدة إعادة التأهيل بين 3 أشهر وسنة كاملة حسب نوع الإصابة ومستوى التدخل الجراحي. برامج إعادة التأهيل في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للوظيفة للمرضى الدوليين.",
  },
  {
    q: "هل الحالات المعقدة بعد النزاعات تحتاج تقييماً متعدد التخصصات؟",
    a: "نعم. إصابات النزاعات والانفجارات تتضمن أحياناً شظايا متعددة وإصابات متزامنة في أعضاء مختلفة. هذه الحالات تتطلب فريقاً متعدد التخصصات ومرفقاً طبياً قادراً على التعامل مع التعقيد المتعدد الأنظمة.",
  },
  {
    q: "هل يمكن مراجعة نتائج جراحة سابقة أُجريت في بلد آخر؟",
    a: "نعم. مراجعة الجراحات السابقة هي جزء أساسي من تقييم الحالات المعقدة. يشمل ذلك مراجعة التقارير، التصوير الإشعاعي، وتحديد ما إذا كانت هناك مضاعفات تستدعي تدخلاً جراحياً إضافياً.",
  },
  {
    q: "كيف يتم تنسيق الحالات الدولية القادمة من ليبيا والسودان والعراق؟",
    a: "يتم استقبال التوثيق الطبي وتقييمه من برلين، ثم تحديد المسار العلاجي المناسب داخل المنظومة الطبية الألمانية. التنسيق يشمل التواصل مع المراكز الجامعية المتخصصة وتحديد الجدول الزمني للتدخل.",
  },
  {
    q: "هل يمكن إجراء تقييم أولي عن بُعد قبل السفر إلى ألمانيا؟",
    a: "نعم. يمكن إرسال التقارير الطبية والتصوير الإشعاعي للتقييم الأولي من قِبل المنسق الطبي في برلين، مما يتيح تحديد جدوى التدخل والمسار العلاجي قبل اتخاذ قرار السفر.",
  },
  {
    q: "ما الفرق بين إصابات الأعصاب المركزية والطرفية في سياق الحوادث؟",
    a: "إصابات الأعصاب المركزية (الدماغ والحبل الشوكي) تختلف كلياً في التقييم والعلاج عن إصابات الأعصاب الطرفية. الأعصاب الطرفية قابلة للإصلاح الجراحي في حالات كثيرة، بينما إصابات الحبل الشوكي تتطلب تقييماً مختلفاً يركز على إعادة التأهيل وتحسين الوظيفة المتبقية.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const medicalJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "الحالات المعقدة بعد الحوادث والإصابات في ألمانيا",
  description:
    "تنسيق الحالات المعقدة بعد الحوادث والإصابات الجسيمة في ألمانيا — إصابات الأعصاب، الشظايا، البتر، وإعادة التأهيل. للحالات الدولية القادمة من ليبيا والسودان والعراق ودول الخليج.",
  url: "https://medicalcaregermany.com/ar/complex-trauma-germany",
  inLanguage: "ar",
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  image: "https://medicalcaregermany.com/og-image.jpg",
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function ComplexTraumaGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "الحالات المعقدة بعد الحوادث والإصابات في ألمانيا | Medical Care Germany";
    const descContent =
      "تنسيق الحالات المعقدة بعد الحوادث والإصابات الجسيمة في ألمانيا — إصابات الأعصاب، الشظايا، البتر، وإعادة التأهيل. للحالات الدولية القادمة من ليبيا والسودان والعراق ودول الخليج.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = descContent;
      document.head.appendChild(m);
    }
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      "https://medicalcaregermany.com/ar/complex-trauma-germany";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <HreflangTags currentPath="/ar/complex-trauma-germany" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalJsonLd) }}
      />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* ═══ 1. HERO ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest text-slate-400 mb-4"
            style={FONT}
          >
            Medical Care Germany
          </p>
          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-6"
            style={FONT}
          >
            الحالات المعقدة بعد الحوادث والإصابات في ألمانيا
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed"
            style={FONT}
          >
            منظومة تقييم متخصصة للحالات المزمنة والمعقدة بعد الصدمات — إصابات الحرب، الجراحات الفاشلة، تلف الأعصاب، واضطرابات الحركة.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            ليبيا · السودان · العراق · دول الخليج — كل حالة تحتاج مسار تقييم مختلف
          </p>
          <a
            href={intakeHref} target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            أرسل تقاريرك للتقييم
          </a>
        </div>
      </section>

      {/* ═══ 2. CLINICAL INDICATORS ════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg font-medium text-slate-900 mb-2 text-center"
            style={FONT}
          >
            مؤشرات الحالات التي تستدعي التقييم المتخصص
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8" style={FONT}>
            هذه الحالات لا تُحل بالعلاج التقليدي — تحتاج تقييماً متعدد التخصصات
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {CLINICAL_INDICATORS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white border border-slate-200"
              >
                <span className="text-[#0B3B8C] font-medium text-sm mt-0.5 shrink-0" style={FONT}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-900" style={FONT}>
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5" style={FONT}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. TRAUMA PATHWAYS ════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg font-medium text-slate-900 mb-2 text-center"
            style={FONT}
          >
            مسارات الحالات الرئيسية
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8" style={FONT}>
            كل مسار يقود إلى تقييم متخصص مختلف
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "إصابات الشظايا والدماغ",
                desc: "شظايا داخل الجمجمة أو الدماغ ناتجة عن انفجارات. تستدعي تقييماً جراحياً دقيقاً يشمل CT وMRI وتحديد إمكانية الاستئصال.",
                href: "/ar/shrapnel-brain-injury-germany",
              },
              {
                title: "إصابات الأعصاب الطرفية",
                desc: "قطع أو تلف الأعصاب الطرفية بعد الحوادث. الجراحة الدقيقة للأعصاب تتيح استعادة الوظيفة في حالات كثيرة.",
                href: "/ar/nerve-injury-after-trauma-germany",
              },
              {
                title: "تركيب الأطراف الصناعية",
                desc: "اختيار الطرف الصناعي المناسب بعد البتر. الأطراف الحديثة بالذكاء الاصطناعي تستجيب لإشارات العضلات.",
                href: "/ar/prosthetics-after-amputation-germany",
              },
              {
                title: "الكسور المعقدة واستبدال المفاصل",
                desc: "كسور قديمة مع التئام غير صحيح أو تلف في المفاصل يستدعي استبدالها بعد الإصابة.",
                href: "/ar/joint-replacement-after-trauma",
              },
              {
                title: "اضطرابات التوازن والمشي",
                desc: "صعوبة في المشي أو التوازن بعد إصابات العمود الفقري أو الدماغ. قد تكون قابلة للتحسين بالتدخل الجراحي.",
                href: "/ar/dizziness-long-term",
              },
              {
                title: "إعادة التأهيل المتقدمة",
                desc: "برامج إعادة تأهيل مكثفة بعد الإصابات الجسيمة — فيزيوثيرابيا، علاج وظيفي، إعادة تأهيل عصبي.",
                href: "/ar/advanced-rehabilitation-germany",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block p-5 border border-slate-200 bg-white hover:border-[#0B1C2C] hover:bg-slate-50 transition-colors group"
              >
                <h3
                  className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-[#0B1C2C]"
                  style={FONT}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed" style={FONT}>
                  {item.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. MRI / CT REASSESSMENT ══════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#0B1C2C] text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-medium text-white mb-2 text-center" style={FONT}>
            مراجعة التصوير الإشعاعي وإعادة التقييم
          </h2>
          <p className="text-sm text-slate-400 text-center mb-8" style={FONT}>
            كثير من الحالات المعقدة تحتاج إعادة قراءة التصوير بعيون متخصصة
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-right py-3 px-4 text-slate-400 font-medium" style={FONT}>
                    النتيجة الإشعاعية
                  </th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium" style={FONT}>
                    الدلالة السريرية
                  </th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium" style={FONT}>
                    وسيلة التصوير
                  </th>
                </tr>
              </thead>
              <tbody>
                {MRI_FINDINGS.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3 px-4 text-slate-200" style={FONT}>
                      {row.finding}
                    </td>
                    <td className="py-3 px-4 text-slate-400 text-xs leading-relaxed" style={FONT}>
                      {row.implication}
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1" style={FONT}>
                        {row.modality}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center" style={FONT}>
            يمكن إرسال التصوير الإشعاعي الحالي للمراجعة الأولية قبل السفر إلى ألمانيا
          </p>
        </div>
      </section>

      {/* ═══ 5. NEURO-TRAUMA OVERLAP ═══════════════════════════════════════ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg font-medium text-slate-900 mb-2 text-center"
            style={FONT}
          >
            التداخل بين الإصابة والأعراض العصبية
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8" style={FONT}>
            الأعراض العصبية بعد الحوادث قد تكون ذات مصدر مركزي أو طرفي — التمييز ضروري للعلاج
          </p>
          <div className="space-y-4">
            {NEURO_OVERLAP.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white border border-slate-200"
              >
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span
                    className="text-sm font-semibold text-slate-900"
                    style={FONT}
                  >
                    {item.symptom}
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="text-slate-400 mb-1" style={FONT}>المصدر العصبي</p>
                    <p className="text-slate-700" style={FONT}>{item.neuro}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1" style={FONT}>المصدر الرضحي</p>
                    <p className="text-slate-700" style={FONT}>{item.trauma}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1" style={FONT}>مسار التقييم</p>
                    <p className="text-[#0B3B8C] font-medium" style={FONT}>{item.pathway}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. REHABILITATION COORDINATION ═══════════════════════════════ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg font-medium text-slate-900 mb-2 text-center"
            style={FONT}
          >
            بروتوكولات إعادة التأهيل بعد الإصابات الجسيمة
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8" style={FONT}>
            إعادة التأهيل في ألمانيا مبنية على بروتوكولات متدرجة ومصممة للحالات الدولية المعقدة
          </p>
          <div className="space-y-3">
            {REHAB_PROTOCOLS.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-slate-50 border border-slate-200"
              >
                <div className="shrink-0 text-center min-w-[80px]">
                  <p
                    className="text-xs font-semibold text-[#0B1C2C] mb-1"
                    style={FONT}
                  >
                    {item.phase}
                  </p>
                  <span className="text-xs text-slate-400 bg-white border border-slate-200 px-2 py-0.5" style={FONT}>
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/ar/advanced-rehabilitation-germany"
              className="inline-block text-sm text-[#0B3B8C] hover:underline"
              style={FONT}
            >
              مزيد من التفاصيل حول إعادة التأهيل المتقدمة ←
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 7. LONG-TERM COMPLICATIONS ════════════════════════════════════ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-lg font-medium text-slate-900 mb-2 text-center"
            style={FONT}
          >
            المضاعفات طويلة الأمد بعد الإصابات
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8" style={FONT}>
            حالات تظهر بعد أشهر أو سنوات من الإصابة الأصلية — وكثير منها قابل للتحسين
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {COMPLICATIONS.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white border border-slate-200"
              >
                <h3
                  className="text-sm font-semibold text-slate-900 mb-2"
                  style={FONT}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3" style={FONT}>
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  className="text-xs text-[#0B3B8C] hover:underline"
                  style={FONT}
                >
                  {item.linkText} ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. GEO CONTEXT ════════════════════════════════════════════════ */}
      <section className="py-14 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-base font-medium text-slate-900 mb-4"
            style={FONT}
          >
            التنسيق الدولي للحالات المعقدة
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4" style={FONT}>
            تتلقى ميديكال كير جيرماني حالات دولية معقدة من{" "}
            <strong>ليبيا والسودان والعراق</strong> ومصر ودول الخليج العربي بما فيها الإمارات والمملكة العربية السعودية. كثير من هذه الحالات تشمل إصابات جسيمة بعد حوادث السير أو الإصابات الناجمة عن النزاعات المسلحة، وتحتاج إلى تقييم متعدد التخصصات داخل المنظومة الطبية الألمانية.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
            يتم استقبال التوثيق الطبي من برلين، وتحديد المسار العلاجي المناسب بما يشمل{" "}
            <a href="/ar/nerve-injury-after-trauma-germany" className="text-[#0B3B8C] hover:underline" style={FONT}>إعادة التوصيل العصبي</a>،{" "}
            <a href="/ar/prosthetics-after-amputation-germany" className="text-[#0B3B8C] hover:underline" style={FONT}>تركيب الأطراف الصناعية</a>،{" "}
            <a href="/ar/spine-surgery-germany" className="text-[#0B3B8C] hover:underline" style={FONT}>جراحة العمود الفقري</a>، أو{" "}
            <a href="/ar/advanced-rehabilitation-germany" className="text-[#0B3B8C] hover:underline" style={FONT}>إعادة التأهيل المتقدمة</a>.
          </p>
        </div>
      </section>

      {/* ═══ 9. FAQ ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-lg font-medium text-slate-900 mb-8 text-center"
            style={FONT}
          >
            أسئلة شائعة حول الحالات المعقدة بعد الإصابات
          </h2>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 bg-white"
              >
                <button
                  className="w-full text-right px-5 py-4 flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-medium text-slate-900" style={FONT}>
                    {item.q}
                  </span>
                  <span className="text-slate-400 shrink-0 text-lg leading-none">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed pt-3" style={FONT}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. CTA ═══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            ميديكال كير جيرماني · برلين
          </p>
          <h2 className="text-xl font-light mb-4" style={FONT}>
            ابدأ بتقييم حالتك المعقدة
          </h2>
          <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto leading-relaxed" style={FONT}>
            أرسل التقارير الطبية والتصوير الإشعاعي للحصول على تقييم متخصص من فريق طبي في ألمانيا — قبل اتخاذ قرار السفر.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={intakeHref} target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white text-white text-sm font-medium hover:bg-white hover:text-[#0B1C2C] transition-colors"
              style={FONT}
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      <CrossClusterSection
        clusters={["trauma_mri_rehab", "neuro_spine", "hno_neuro", "vestibular_audiology"]}
        excludeCurrentHref="/ar/complex-trauma-germany"
      />
      <ArabicFooterGuide />
    </div>
  );
}
