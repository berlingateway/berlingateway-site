import MedicalConditionPage from "@/components/MedicalConditionPage";

const WA_HREF = "https://wa.me/4915781497451?text=" + encodeURIComponent("مرحباً، أود إرسال تقاريري الطبية لتقييم حالة الخصوبة");

export default function PgdGermany() {
  return (
    <MedicalConditionPage
      pageDir="rtl"
      metaTitle="الفحص الوراثي للأجنة (PGD) في ألمانيا — علاج العقم الوراثي والفشل المتكرر"
      metaDescription="الفحص الجيني للأجنة PGD/PGT في ألمانيا: PGT-A للكروموسومات، PGT-M للأمراض الوراثية. علاج العقم في ألمانيا للحالات المعقدة."
      canonicalPath="/ar/pgd-germany"
      heroEyebrow="Medical Care Germany · برلين"
      headline="الفحص الوراثي للأجنة (PGD) في ألمانيا"
      subtitle="للحالات الوراثية والفشل المتكرر — تشخيص جيني دقيق قبل نقل الجنين"
      introduction="الفحص الجيني للأجنة قبل الزرع (PGD/PGT) يتيح فحص الأجنة وراثياً قبل نقلها إلى الرحم. هذا يرفع معدلات نجاح الحمل في الحالات المعقدة ويقلل خطر الإجهاض المرتبط بالتشوهات الكروموسومية."
      checklistSection={{
        title: "متى يكون PGD ضرورياً؟",
        items: [
          "فشل دورتي IVF أو أكثر دون تفسير واضح",
          "إجهاض متكرر (مرتين أو أكثر)",
          "تاريخ عائلي لأمراض وراثية محددة",
          "عمر المرأة فوق 37 مع رغبة في تحسين معدلات النجاح",
          "تشخيص سابق بتشوهات كروموسومية في الأجنة",
        ],
        footer: "PGD لا يُجرى في كل حالة — التقييم المتخصص يحدد ما إذا كان مبرراً طبياً.",
      }}
      aboutCondition={[
        "PGD يشمل نوعين رئيسيين: PGT-A (فحص التوازن الكروموسومي الكامل) الذي يكشف عن الأجنة ذات العدد الطبيعي من الكروموسومات، وPGT-M (الفحص الجيني للأمراض الوراثية المحددة) الذي يكشف عن جينات أمراض بعينها كالثلاسيميا والتليف الكيسي.",
        "الفحص يُجرى على خلايا من الجنين في مرحلة البلاستوسيست (اليوم الخامس أو السادس) — وهي المرحلة الأكثر دقة للفحص الجيني. يُنقل الجنين السليم وراثياً في دورة لاحقة لتحقيق أفضل النتائج.",
      ]}
      symptoms={[
        "فشل IVF متكرر مع أجنة تبدو طبيعية مورفولوجياً",
        "إجهاض متكرر مع تحليل الأجنة يُظهر تشوهات كروموسومية",
        "أحد الزوجين حامل لجين مرض وراثي",
        "تشخيص بانتقال كروموسومي متوازن (Balanced Translocation)",
        "رغبة في تحسين معدلات الحمل في الدورات القادمة",
      ]}
      treatmentOptions={[
        "PGT-A (Preimplantation Genetic Testing for Aneuploidy): فحص الـ 24 كروموسوم كاملاً — للفشل المتكرر والإجهاض المتكرر",
        "PGT-M (Preimplantation Genetic Testing for Monogenic disorders): فحص جين مرض وراثي محدد — يتطلب تحضيراً مسبقاً",
        "PGT-SR (Structural Rearrangements): للحالات ذات الانتقال الكروموسومي المتوازن",
        "PGD مع ICSI: الجمع بين الحقن المجهري والفحص الجيني في نفس الدورة",
        "نقل الجنين المجمد (FET) بعد PGD: نقل الجنين السليم في دورة لاحقة لتحسين ظروف الرحم",
      ]}
      whyGermany={[
        "PGD في ألمانيا مسموح به قانونياً للمؤشرات الطبية المبررة وفق قانون حماية الجنين الألماني. هذا يوفر إطاراً قانونياً واضحاً وشفافاً للمرضى الدوليين.",
        "مختبرات الجينات المتخصصة في ألمانيا تستخدم تقنية NGS (التسلسل الجيني من الجيل التالي) لفحص الكروموسومات بدقة عالية — مما يتجاوز دقة تقنيات FISH القديمة.",
      ]}
      specialistEvaluation="يبدأ التقييم بمراجعة تاريخ الحالة الكامل وتحديد نوع PGD المناسب. في حالات PGT-M، يُطلب تحضير مسبق (probe design) يستغرق 4-8 أسابيع قبل بدء دورة التحفيز."
      patientPathway={[
        "إرسال التقارير الطبية وتاريخ الحالة الكامل",
        "تحديد نوع PGD المناسب (PGT-A أو PGT-M أو PGT-SR)",
        "في حالة PGT-M: التنسيق مع مختبر الجينات للتحضير المسبق",
        "دورة IVF/ICSI مع خزعة الجنين في اليوم الخامس",
        "نقل الجنين السليم وراثياً في دورة FET لاحقة",
      ]}
      relatedLinks={[
        { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
        { href: "/ar/ivf-germany", label: "أطفال الأنابيب (IVF) في ألمانيا" },
        { href: "/ar/icsi-germany", label: "الحقن المجهري (ICSI) في ألمانيا" },
      ]}
      ctaTitle="ابدأ بتقييم حالتك"
      ctaText="أرسل تاريخ حالتك الكامل لتحديد ما إذا كان PGD مبرراً طبياً وأي نوع منه مناسب لحالتك."
      ctaButton="تواصل عبر واتساب"
      ctaHref={WA_HREF}
      arabicSummaryTitle="ملخص"
      arabicSummary="الفحص الجيني للأجنة (PGD) في ألمانيا يُستخدم للحالات الوراثية والفشل المتكرر. PGT-A وPGT-M متاحان في المراكز المتخصصة. التقييم يحدد ما إذا كان PGD مبرراً لحالتك."
      trustLine="جميع البيانات محمية وفق اللائحة الأوروبية لحماية البيانات (GDPR)."
      sectionLabels={{
        aboutCondition: "كيف يعمل PGD؟",
        symptoms: "متى يُوصى بـ PGD؟",
        treatmentOptions: "أنواع PGD المتاحة",
        whyGermany: "لماذا PGD في ألمانيا؟",
        specialistEvaluation: "ما الذي يشمله التقييم؟",
        patientPathway: "مسار الحالة",
        relatedLinks: "صفحات ذات صلة",
        footerNote: "جميع البيانات محمية وفق GDPR.",
      }}
      navLabels={{
        tagline: "مرجعية طبية استراتيجية",
        homeLink: "الرئيسية",
        backLink: "→ الرئيسية",
        backHref: "/ar",
        langLink: "English",
        langHref: "/",
        ctaButton: "إرسال التقارير الطبية",
        ctaHref: "/ar/ارسال-التقارير-الطبية",
        topBarEmail: "info@medicalcaregermany.com",
      }}
      footerLabels={{
        brand: "Medical Care Germany",
        location: "برلين، ألمانيا",
        trustLine: "تنسيق طبي مؤسسي للحالات الدولية",
      }}
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "الفحص الوراثي للأجنة (PGD) في ألمانيا",
        "description": "الفحص الجيني للأجنة PGD/PGT في ألمانيا للحالات الوراثية والفشل المتكرر.",
        "url": "https://www.medicalcaregermany.com/ar/pgd-germany",
        "inLanguage": "ar",
        "about": { "@type": "MedicalCondition", "name": "Infertility" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
