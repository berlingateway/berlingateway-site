/**
 * /ar/tinnitus-treatment-germany
 * علاج الطنين وطنين الأذن في ألمانيا
 * MCG Cross-Cluster Tinnitus Intelligence Layer — 9 Sections
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const AR: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif",
  direction: "rtl",
};

const NAVY = "#0B1C2C";
const LIGHT = "#f8fafc";
const ACCENT = "#1a3a5c";
const BORDER = "#d1dde8";
const CANONICAL = "https://medicalcaregermany.com/ar/tinnitus-treatment-germany";

// ─── Data ────────────────────────────────────────────────────────────────────

const SYMPTOM_MATRIX = [
  { ar: "طنين مستمر لأكثر من 3 أشهر", sub: "Chronic Tinnitus" },
  { ar: "طنين نابض متزامن مع النبض", sub: "Pulsatile Tinnitus" },
  { ar: "طنين مصحوب بدوخة أو اختلال توازن", sub: "Tinnitus + Vestibular" },
  { ar: "طنين مع فقدان سمع تدريجي", sub: "Tinnitus + Hearing Loss" },
  { ar: "طنين ظهر بعد إصابة رأس أو رقبة", sub: "Post-Traumatic Tinnitus" },
  { ar: "طنين مع أعراض عصبية (صداع، تنميل)", sub: "Neurological Tinnitus" },
  { ar: "طنين في أذن واحدة فقط", sub: "Unilateral Tinnitus" },
  { ar: "طنين مع ضغط أو امتلاء في الأذن", sub: "Aural Fullness" },
];

const CAUSES = [
  {
    title: "اضطرابات الأذن الداخلية",
    items: ["مرض مينيير", "ضعف السمع الحسي العصبي", "التهاب العصب السمعي", "ضغط اللمف الداخلي"],
  },
  {
    title: "الأسباب العصبية والمركزية",
    items: ["إصابات الجهاز العصبي المركزي", "الأورام الصوتية (Acoustic Neuroma)", "التصلب المتعدد", "الصداع النصفي الدهليزي"],
  },
  {
    title: "الأسباب الوعائية",
    items: ["تضيق الشريان السباتي", "الأورام الوريدية (Glomus Tumor)", "التشوهات الشريانية الوريدية", "ارتفاع الضغط داخل الجمجمة"],
  },
  {
    title: "العمود الفقري العنقي والصدمات",
    items: ["اعتلال الفقرات العنقية C1–C3", "إصابات الجلد (Whiplash)", "الصدمات الصوتية الحادة", "ما بعد جراحات الرأس والعنق"],
  },
];

const VESTIBULAR_OVERLAP = [
  {
    condition: "مرض مينيير",
    tinnitus: "طنين متذبذب الشدة",
    vestibular: "نوبات دوخة حادة",
    hearing: "فقدان سمع متقطع",
    path: "/ar/dizziness-long-term",
  },
  {
    condition: "الصداع النصفي الدهليزي",
    tinnitus: "طنين أثناء النوبة",
    vestibular: "دوخة مزمنة بين النوبات",
    hearing: "حساسية صوتية",
    path: "/ar/dizziness-long-term",
  },
  {
    condition: "التهاب العصب الدهليزي",
    tinnitus: "طنين مؤقت",
    vestibular: "دوخة حادة مفاجئة",
    hearing: "طبيعي في الغالب",
    path: "/ar/dizziness-long-term",
  },
  {
    condition: "الورم الصوتي (Schwannoma)",
    tinnitus: "طنين أحادي الجانب",
    vestibular: "اختلال توازن تدريجي",
    hearing: "فقدان سمع تدريجي",
    path: "/ar/hearing-implant-germany",
  },
];

const MRI_LOGIC = [
  {
    modality: "MRI + غادولينيوم",
    indication: "الاشتباه بالورم الصوتي أو الأورام الوعائية",
    protocol: "بروتوكول CISS/FIESTA للعصب السمعي",
    limitation: "لا يكشف عن اضطرابات الأذن الوسطى",
  },
  {
    modality: "MRI الأوعية (MRA)",
    indication: "الطنين النابض — استبعاد التشوهات الوعائية",
    protocol: "TOF-MRA للشريان السباتي والجيوب الوريدية",
    limitation: "يتطلب تقنية عالية الدقة",
  },
  {
    modality: "CT مع تباين",
    indication: "الاشتباه بأورام الجيب الوريدي أو الأذن الوسطى",
    protocol: "CT عظام الصدغ بدقة عالية",
    limitation: "إشعاع — يُستخدم عند الضرورة فقط",
  },
  {
    modality: "MRI العمود الفقري العنقي",
    indication: "الطنين المرتبط بأعراض عنقية",
    protocol: "T2 Sagittal + Axial C0–C4",
    limitation: "لا يثبت العلاقة السببية مباشرة",
  },
  {
    modality: "قياس السمع الشامل",
    indication: "تحديد نوع وشدة فقدان السمع المصاحب",
    protocol: "PTA + Tympanometry + OAE + ABR",
    limitation: "لا يصور التشريح — يُكمل التصوير فقط",
  },
];

const HEARING_EVAL = [
  { test: "قياس السمع النقي (PTA)", purpose: "تحديد عتبة السمع عبر الترددات", relevance: "أساسي" },
  { test: "قياس الطبل (Tympanometry)", purpose: "تقييم وظيفة الأذن الوسطى والطبلة", relevance: "أساسي" },
  { test: "انبعاثات صوتية (OAE)", purpose: "تقييم خلايا الشعر الخارجية في القوقعة", relevance: "مهم" },
  { test: "استجابة جذع الدماغ (ABR/BERA)", purpose: "تقييم مسار العصب السمعي المركزي", relevance: "مهم" },
  { test: "قياس الطنين (Tinnitus Matching)", purpose: "تحديد تردد وشدة الطنين الذاتي", relevance: "تشخيصي" },
  { test: "قياس الإخفاء (Masking Level)", purpose: "تقييم قابلية الطنين للإخفاء", relevance: "تخطيطي" },
];

const NEURO_OVERLAP = [
  {
    condition: "الورم الصوتي (Acoustic Neuroma)",
    signal: "طنين أحادي الجانب تدريجي + فقدان سمع",
    urgency: "عالية",
    link: "/ar/head-neck-tumor-germany",
  },
  {
    condition: "التصلب المتعدد (MS)",
    signal: "طنين مع أعراض عصبية متعددة",
    urgency: "عالية",
    link: "/ar/ent-germany",
  },
  {
    condition: "الصداع النصفي الدهليزي",
    signal: "طنين + دوخة + حساسية ضوئية وصوتية",
    urgency: "متوسطة",
    link: "/ar/dizziness-long-term",
  },
  {
    condition: "ارتفاع الضغط داخل الجمجمة",
    signal: "طنين نابض + صداع + اضطراب رؤية",
    urgency: "عالية",
    link: "/ar/ent-germany",
  },
];

const REHAB_CONCEPTS = [
  {
    title: "العلاج بإعادة التدريب (TRT)",
    desc: "بروتوكول منظم يجمع الإرشاد السمعي مع أجهزة توليد الصوت لتقليل الوعي بالطنين على مدى 12–24 شهراً.",
  },
  {
    title: "العلاج بالصوت (Sound Therapy)",
    desc: "استخدام أصوات بيئية أو موسيقى منخفضة لتقليل التباين بين الطنين والهدوء، خاصة أثناء النوم.",
  },
  {
    title: "العلاج المعرفي السلوكي (CBT)",
    desc: "تعديل الاستجابة النفسية للطنين — يُثبت فعاليته في تقليل الضيق وتحسين جودة الحياة.",
  },
  {
    title: "تعويض السمع (Hearing Aids)",
    desc: "في حالات الطنين المصحوب بفقدان سمع: تضخيم الأصوات الخارجية يقلل من إدراك الطنين.",
  },
  {
    title: "التحفيز الصوتي المخصص",
    desc: "برامج صوتية مصممة بناءً على تردد الطنين الفردي — متاحة في مراكز متخصصة بألمانيا.",
  },
  {
    title: "إعادة التأهيل العنقي",
    desc: "في حالات الطنين الجسدي الصوتي المرتبط بالعمود الفقري العنقي: العلاج الطبيعي المتخصص.",
  },
];

const FAQS = [
  {
    q: "هل الطنين المزمن قابل للعلاج في ألمانيا؟",
    a: "الطنين المزمن نادراً ما يُشفى تماماً، لكن البروتوكولات الألمانية المتخصصة — كـ TRT والعلاج المعرفي السلوكي — تُثبت فعاليتها في تقليل الضيق وتحسين جودة الحياة بشكل ملحوظ. الهدف هو التكيف الوظيفي وليس الإزالة الكاملة.",
  },
  {
    q: "متى يكون الطنين علامة تحتاج تقييماً عاجلاً؟",
    a: "الطنين النابض، الطنين الأحادي الجانب المفاجئ، الطنين المصحوب بفقدان سمع مفاجئ أو أعراض عصبية — كلها تستوجب تقييماً طارئاً لاستبعاد أسباب وعائية أو ورمية.",
  },
  {
    q: "ما الفرق بين الطنين الذاتي والطنين الموضوعي؟",
    a: "الطنين الذاتي يسمعه المريض فقط وهو الأكثر شيوعاً. الطنين الموضوعي أو النابض يمكن سماعه بالسماعة الطبية ويشير إلى مصدر وعائي أو عضلي — وهو أقل شيوعاً لكن أكثر قابلية للعلاج.",
  },
  {
    q: "هل العمود الفقري العنقي يمكن أن يسبب الطنين؟",
    a: "نعم — الطنين الجسدي الصوتي مرتبط بالفقرات العنقية C1–C3 والعضلات المحيطة. يتميز بتغير شدته مع حركات الرأس والرقبة، ويستجيب للعلاج الطبيعي العنقي المتخصص.",
  },
  {
    q: "هل يحتاج كل مريض طنين إلى MRI؟",
    a: "لا — MRI مُشار إليه في حالات الطنين الأحادي الجانب، الطنين النابض، الطنين مع فقدان سمع تدريجي، أو وجود أعراض عصبية. في الطنين الثنائي المستقر مع سمع طبيعي، قد يكفي الفحص السمعي الشامل.",
  },
  {
    q: "كيف يتم تقييم الطنين في المراكز الألمانية المتخصصة؟",
    a: "يشمل البروتوكول الألماني: قياس السمع الشامل، قياس الطنين وتحديد تردده، ABR/BERA، تقييم دهليزي إذا كانت هناك أعراض توازن، وتصوير MRI عند الإشارة. يتم التنسيق بين طبيب الأنف والأذن والحنجرة وأخصائي السمعيات.",
  },
  {
    q: "هل يمكن للمرضى من ليبيا والسودان ودول الخليج الحصول على تقييم متخصص في ألمانيا؟",
    a: "نعم — Medical Care Germany تنسق مسارات التقييم للمرضى الدوليين من ليبيا، السودان، والإمارات والسعودية وقطر والكويت. يشمل التنسيق ترتيب المواعيد المتخصصة، مراجعة الوثائق الطبية، وتنسيق الفحوصات اللازمة قبل الوصول.",
  },
  {
    q: "ما الفرق بين مراكز الطنين في ألمانيا ومراكز أخرى؟",
    a: "المراكز الألمانية المتخصصة تعمل بنهج متعدد التخصصات يجمع طبيب الأنف والأذن والحنجرة، أخصائي السمعيات، طبيب الأعصاب، وأخصائي علم النفس الطبي في بروتوكول واحد. هذا النهج يُتيح تشخيصاً دقيقاً وخطة علاجية مخصصة لكل حالة.",
  },
];

const INTERNAL_LINKS = [
  { href: "/ar/ent-germany", label: "مركز الأنف والأذن والحنجرة" },
  { href: "/ar/hearing-implant-germany", label: "زراعة القوقعة وضعف السمع" },
  { href: "/ar/dizziness-long-term", label: "الدوخة المزمنة واضطرابات التوازن" },
  { href: "/ar/head-neck-tumor-germany", label: "أورام الرأس والعنق" },
  { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
  { href: "/ar/ent-surgery-germany", label: "جراحة الأنف والأذن والحنجرة" },
  { href: "/ar/submit-case", label: "إرسال الملف الطبي" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TinnitusTreatmentGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "علاج الطنين وطنين الأذن في ألمانيا | Medical Care Germany";

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content",
        "تقييم وعلاج الطنين المزمن والطنين النابض في ألمانيا — تنسيق متخصص للمرضى الدوليين من ليبيا والسودان ودول الخليج. تشخيص HNO + سمعيات + أعصاب + MRI."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = CANONICAL;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    };

    const medSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "علاج الطنين وطنين الأذن في ألمانيا",
      "url": CANONICAL,
      "description": "صفحة طبية متخصصة في تقييم وعلاج الطنين المزمن والنابض في ألمانيا — تنسيق HNO + سمعيات + أعصاب.",
      "inLanguage": "ar",
      "about": { "@type": "MedicalCondition", "name": "Tinnitus" },
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "image": "https://medicalcaregermany.com/og-image.jpg",
    };

    const existing = document.querySelectorAll('script[data-mcg-ld]');
    existing.forEach(el => el.remove());

    [faqSchema, medSchema].forEach(schema => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-mcg-ld", "true");
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
    });
  }, []);

  const cell: React.CSSProperties = {
    ...AR, padding: "10px 14px", fontSize: 13, borderBottom: `1px solid ${BORDER}`, verticalAlign: "top",
  };

  return (
    <div dir="rtl" style={{ ...AR, background: LIGHT, minHeight: "100vh" }}>
      <SmartNavLayer currentPath="/ar/tinnitus-treatment-germany" />
      <HreflangTags currentPath="/ar/tinnitus-treatment-germany" />

      {/* ── SECTION 1: Hero ── */}
      <section style={{ background: NAVY, padding: "72px 24px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ ...AR, fontSize: 11, letterSpacing: "0.18em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 16 }}>
            Tinnitus · Audiology · HNO · Neurology
          </p>
          <h1 style={{ ...AR, fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 500, color: "#f8fafc", lineHeight: 1.45, marginBottom: 20 }}>
            علاج الطنين وطنين الأذن في ألمانيا
          </h1>
          <p style={{ ...AR, fontSize: "clamp(14px, 2vw, 16px)", color: "#94a3b8", lineHeight: 1.85, maxWidth: 640, margin: "0 auto 32px" }}>
            تنسيق تشخيصي وعلاجي متخصص للطنين المزمن والنابض — يجمع طب الأنف والأذن والحنجرة، السمعيات، طب الأعصاب، والتصوير التشخيصي في مسار واحد منظم.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer">
              <a style={{ ...AR, display: "inline-block", padding: "13px 30px", background: "#fff", color: NAVY, fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
                إرسال الملف الطبي للتقييم
              </a>
            </Link>
            <Link href="/ar/ent-germany">
              <a style={{ ...AR, display: "inline-block", padding: "13px 30px", background: "transparent", color: "#94a3b8", fontSize: 13, textDecoration: "none", border: "1px solid #334155" }}>
                مركز الأنف والأذن والحنجرة
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Symptom Matrix ── */}
      <section style={{ background: LIGHT, padding: "64px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 12, textAlign: "center" }}>
            مصفوفة الأعراض — متى يستوجب الطنين تقييماً متخصصاً؟
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#4a6070", textAlign: "center", marginBottom: 36, lineHeight: 1.7 }}>
            الطنين ليس مرضاً واحداً — هو عَرَض يعكس اضطرابات متعددة. التمييز بين أنواعه يحدد مسار التشخيص.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 1, background: BORDER }}>
            {SYMPTOM_MATRIX.map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "18px 20px", borderRight: `3px solid ${NAVY}` }}>
                <p style={{ ...AR, fontSize: 14, fontWeight: 600, color: NAVY, marginBottom: 4 }}>{item.ar}</p>
                <p style={{ fontFamily: "sans-serif", fontSize: 11, color: "#7a9bbf", letterSpacing: 1 }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Tinnitus Causes ── */}
      <section style={{ background: "#eef2f7", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 12, textAlign: "center" }}>
            أسباب الطنين — التصنيف التشخيصي
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#4a6070", textAlign: "center", marginBottom: 40, lineHeight: 1.7 }}>
            التشخيص الدقيق يبدأ بتصنيف السبب — كل فئة تستوجب بروتوكولاً تشخيصياً مختلفاً.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {CAUSES.map((cat, i) => (
              <div key={i} style={{ background: "#fff", border: `1px solid ${BORDER}`, padding: "20px 22px" }}>
                <h3 style={{ ...AR, fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 14, borderBottom: `1px solid ${BORDER}`, paddingBottom: 10 }}>
                  {cat.title}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ ...AR, fontSize: 13, color: "#3a5060", padding: "5px 0", borderBottom: j < cat.items.length - 1 ? `1px solid #eef2f7` : "none" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Vestibular Overlap ── */}
      <section style={{ background: LIGHT, padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 12, textAlign: "center" }}>
            الطنين والجهاز الدهليزي — التداخل التشخيصي
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#4a6070", textAlign: "center", marginBottom: 36, lineHeight: 1.7 }}>
            الطنين والدوخة يتشاركان كثيراً من المسببات — التمييز بينهما يتطلب تقييماً مشتركاً لطبيب HNO وأخصائي الدهليز.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 580 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  {["الحالة", "نمط الطنين", "الأعراض الدهليزية", "السمع", ""].map((h, i) => (
                    <th key={i} style={{ ...AR, padding: "12px 14px", fontSize: 13, color: "#f8fafc", fontWeight: 500, textAlign: "right", borderBottom: `2px solid ${ACCENT}` }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VESTIBULAR_OVERLAP.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f0f4f8" }}>
                    <td style={{ ...cell, fontWeight: 600, color: NAVY }}>{row.condition}</td>
                    <td style={cell}>{row.tinnitus}</td>
                    <td style={cell}>{row.vestibular}</td>
                    <td style={cell}>{row.hearing}</td>
                    <td style={{ ...cell, textAlign: "center" }}>
                      <Link href={row.path}>
                        <a style={{ color: "#1a5276", fontSize: 12, textDecoration: "none", fontFamily: "sans-serif" }}>→</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...AR, fontSize: 13, color: "#7a9bbf", marginTop: 16, textAlign: "center" }}>
            للتفصيل في اضطرابات التوازن:{" "}
            <Link href="/ar/dizziness-long-term">
              <a style={{ color: "#1a5276", textDecoration: "underline" }}>الدوخة المزمنة واضطرابات التوازن</a>
            </Link>
          </p>
        </div>
      </section>

      {/* ── SECTION 5: MRI Diagnostic Logic ── */}
      <section style={{ background: NAVY, padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 12, textAlign: "center" }}>
            التصوير التشخيصي في الطنين — منطق الإشارة والاختيار
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#94a3b8", textAlign: "center", marginBottom: 36, lineHeight: 1.7 }}>
            ليس كل طنين يحتاج MRI — لكن بعض الأنماط تستوجبه بشكل عاجل. الجدول التالي يوضح منطق الاختيار.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
              <thead>
                <tr style={{ background: ACCENT }}>
                  {["وسيلة التصوير", "الإشارة السريرية", "البروتوكول", "القيود"].map((h, i) => (
                    <th key={i} style={{ ...AR, padding: "12px 14px", fontSize: 13, color: "#f8fafc", fontWeight: 500, textAlign: "right", borderBottom: `2px solid #2a5a8c` }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MRI_LOGIC.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#0d2035" : "#0f2540" }}>
                    <td style={{ ...cell, color: "#c8ddf0", fontWeight: 600, borderColor: "#1a3a5c" }}>{row.modality}</td>
                    <td style={{ ...cell, color: "#94a3b8", borderColor: "#1a3a5c" }}>{row.indication}</td>
                    <td style={{ ...cell, color: "#94a3b8", borderColor: "#1a3a5c", fontFamily: "sans-serif", fontSize: 12 }}>{row.protocol}</td>
                    <td style={{ ...cell, color: "#7a9bbf", borderColor: "#1a3a5c", fontSize: 12 }}>{row.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Hearing System Evaluation ── */}
      <section style={{ background: LIGHT, padding: "64px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 12, textAlign: "center" }}>
            تقييم الجهاز السمعي — البروتوكول التشخيصي
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#4a6070", textAlign: "center", marginBottom: 36, lineHeight: 1.7 }}>
            التقييم السمعي الشامل هو العمود الفقري لتشخيص الطنين — يُحدد طبيعة الاضطراب ويوجه خطة العلاج.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {HEARING_EVAL.map((item, i) => (
              <div key={i} style={{
                background: "#fff", border: `1px solid ${BORDER}`, padding: "18px 20px",
                borderTop: `3px solid ${item.relevance === "أساسي" ? NAVY : item.relevance === "مهم" ? "#1a5276" : "#2a7a9c"}`,
              }}>
                <p style={{ ...AR, fontSize: 14, fontWeight: 600, color: NAVY, marginBottom: 6 }}>{item.test}</p>
                <p style={{ ...AR, fontSize: 13, color: "#4a6070", lineHeight: 1.6, marginBottom: 8 }}>{item.purpose}</p>
                <span style={{
                  ...AR, fontSize: 11, color: "#fff",
                  background: item.relevance === "أساسي" ? NAVY : item.relevance === "مهم" ? "#1a5276" : "#2a7a9c",
                  padding: "2px 8px", borderRadius: 2,
                }}>
                  {item.relevance}
                </span>
              </div>
            ))}
          </div>
          <p style={{ ...AR, fontSize: 13, color: "#7a9bbf", marginTop: 24, textAlign: "center" }}>
            في حالات الطنين مع فقدان سمع شديد:{" "}
            <Link href="/ar/hearing-implant-germany">
              <a style={{ color: "#1a5276", textDecoration: "underline" }}>زراعة القوقعة وضعف السمع في ألمانيا</a>
            </Link>
          </p>
        </div>
      </section>

      {/* ── SECTION 7: Neurological Overlap ── */}
      <section style={{ background: "#eef2f7", padding: "64px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 12, textAlign: "center" }}>
            الطنين والجهاز العصبي — الإشارات التحذيرية
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#4a6070", textAlign: "center", marginBottom: 36, lineHeight: 1.7 }}>
            بعض أنماط الطنين تعكس اضطرابات عصبية تستوجب تقييماً عاجلاً — التمييز المبكر يُحدد مسار التدخل.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {NEURO_OVERLAP.map((item, i) => (
              <div key={i} style={{
                background: "#fff", border: `1px solid ${BORDER}`, padding: "18px 22px",
                display: "grid", gridTemplateColumns: "1fr 2fr auto auto", gap: 16, alignItems: "center",
              }}>
                <p style={{ ...AR, fontSize: 14, fontWeight: 600, color: NAVY }}>{item.condition}</p>
                <p style={{ ...AR, fontSize: 13, color: "#3a5060", lineHeight: 1.6 }}>{item.signal}</p>
                <span style={{
                  ...AR, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap",
                  color: item.urgency === "عالية" ? "#c0392b" : "#1a5276",
                }}>
                  {item.urgency}
                </span>
                <Link href={item.link}>
                  <a style={{ color: "#1a5276", fontSize: 12, textDecoration: "none", fontFamily: "sans-serif", whiteSpace: "nowrap" }}>→ تفاصيل</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: Rehabilitation Concepts ── */}
      <section style={{ background: LIGHT, padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 12, textAlign: "center" }}>
            مفاهيم إعادة التأهيل في الطنين المزمن
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#4a6070", textAlign: "center", marginBottom: 36, lineHeight: 1.7 }}>
            الهدف ليس إزالة الطنين — بل تقليل تأثيره على الحياة اليومية من خلال بروتوكولات منظمة ومتعددة التخصصات.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
            {REHAB_CONCEPTS.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: `1px solid ${BORDER}`, padding: "20px 22px" }}>
                <h3 style={{ ...AR, fontSize: 14, fontWeight: 600, color: NAVY, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ ...AR, fontSize: 13, color: "#4a6070", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FAQ Accordion ── */}
      <section style={{ background: "#eef2f7", padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: NAVY, marginBottom: 12, textAlign: "center" }}>
            أسئلة شائعة — الطنين في ألمانيا
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#4a6070", textAlign: "center", marginBottom: 36, lineHeight: 1.7 }}>
            أسئلة المرضى الدوليين من ليبيا والسودان ودول الخليج حول تقييم وعلاج الطنين في ألمانيا.
          </p>
          <div style={{ display: "grid", gap: 8 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    ...AR, width: "100%", textAlign: "right", padding: "16px 20px",
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                  }}
                >
                  <span style={{ ...AR, fontSize: 14, fontWeight: 600, color: NAVY, lineHeight: 1.5 }}>{faq.q}</span>
                  <span style={{ color: NAVY, fontSize: 18, flexShrink: 0, fontFamily: "sans-serif" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 18px" }}>
                    <p style={{ ...AR, fontSize: 13, color: "#3a5060", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Authority Matrix ── */}
      <section style={{ background: LIGHT, padding: "48px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: 18, fontWeight: 500, color: NAVY, marginBottom: 24, textAlign: "center" }}>
            المسارات الطبية ذات الصلة
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
            {INTERNAL_LINKS.map((link, i) => (
              <Link key={i} href={link.href}>
                <a style={{
                  ...AR, display: "block", background: "#fff", border: `1px solid ${BORDER}`,
                  padding: "12px 16px", fontSize: 13, color: NAVY, textDecoration: "none",
                  borderRight: `3px solid ${NAVY}`,
                }}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Authority CTA ── */}
      <section style={{ background: NAVY, padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ ...AR, fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#f8fafc", marginBottom: 16, lineHeight: 1.55 }}>
            تقييم متخصص للطنين في ألمانيا
          </h2>
          <p style={{ ...AR, fontSize: 14, color: "#94a3b8", lineHeight: 1.85, marginBottom: 32 }}>
            Medical Care Germany تنسق مسارات التقييم التشخيصي للطنين المزمن والنابض — تشمل HNO، سمعيات، أعصاب، وتصوير MRI — للمرضى الدوليين القادمين من ليبيا، السودان، والإمارات والسعودية وقطر والكويت.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer">
              <a style={{ ...AR, display: "inline-block", background: "#fff", color: NAVY, padding: "14px 32px", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                إرسال الملف الطبي
              </a>
            </Link>
            <Link href="/ar/ent-germany">
              <a style={{ ...AR, display: "inline-block", background: "transparent", color: "#94a3b8", padding: "14px 32px", fontSize: 14, border: "1px solid #334155", textDecoration: "none" }}>
                مركز الأنف والأذن والحنجرة
              </a>
            </Link>
          </div>
        </div>
      </section>

      <CrossClusterSection
        clusters={["hno_neuro", "vestibular_audiology", "head_neck_tumor"]}
        excludeCurrentHref="/ar/tinnitus-treatment-germany"
      />
      <ArabicFooterGuide />
    </div>
  );
}
