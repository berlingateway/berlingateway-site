import MedicalConditionPage from "@/components/MedicalConditionPage";

const WA_HREF = "https://wa.me/4915781497451?text=" + encodeURIComponent("مرحباً، أود إرسال تقاريري الطبية لتقييم حالة الخصوبة");

export default function IcsiGermany() {
  return (
    <MedicalConditionPage
      pageDir="rtl"
      metaTitle="الحقن المجهري (ICSI) في ألمانيا — علاج العقم الذكوري وضعف التخصيب"
      metaDescription="الحقن المجهري ICSI في ألمانيا لحالات العوامل الذكورية وضعف التخصيب. علاج العقم في ألمانيا بتقنيات IMSI وPICSI المتقدمة."
      canonicalPath="/ar/icsi-germany"
      heroEyebrow="Medical Care Germany · برلين"
      headline="الحقن المجهري (ICSI) في ألمانيا"
      subtitle="للعوامل الذكورية وحالات ضعف التخصيب — تقنيات متقدمة وتنسيق من برلين"
      introduction="الحقن المجهري (ICSI) هو تقنية تخصيب متقدمة تُستخدم حين لا يستطيع الحيوان المنوي اختراق البويضة بشكل طبيعي. يُحقن حيوان منوي واحد مختار مباشرة داخل البويضة تحت المجهر — مما يتجاوز عوائق التخصيب الطبيعي."
      checklistSection={{
        title: "متى يكون ICSI الخيار المناسب؟",
        items: [
          "انخفاض حاد في عدد الحيوانات المنوية أو حركتها",
          "نسبة مورفولوجيا طبيعية منخفضة جداً",
          "فشل التخصيب في دورة IVF سابقة",
          "الحصول على الحيوانات المنوية جراحياً (TESE/MESA)",
          "الرغبة في إجراء PGD مع ضمان التخصيب",
        ],
        footer: "تحليل السائل المنوي الشامل يحدد ما إذا كان ICSI ضرورياً أو إذا كان IVF التقليدي كافياً.",
      }}
      aboutCondition={[
        "في ICSI، يختار علماء الأجنة (embryologists) الحيوان المنوي الأنسب تحت تكبير عالٍ، ثم يُحقنونه مباشرة في سيتوبلازم البويضة باستخدام إبرة دقيقة جداً. هذا يتجاوز الحاجة إلى قدرة الحيوان المنوي على اختراق البويضة بشكل ذاتي.",
        "تقنية IMSI (الحقن المجهري بتكبير عالٍ جداً) تتيح فحص بنية الحيوان المنوي بدقة أعلى قبل الاختيار — وهي متاحة في المراكز الألمانية المتخصصة للحالات التي فشلت فيها دورات ICSI سابقة.",
      ]}
      symptoms={[
        "تقرير تحليل السائل المنوي يُظهر: oligospermia، asthenospermia، أو teratospermia",
        "انعدام الحيوانات المنوية في السائل المنوي (azoospermia) مع إمكانية الاستخلاص الجراحي",
        "فشل التخصيب في دورة IVF سابقة رغم وجود بويضات وحيوانات منوية",
        "نتائج تحليل DNA الحيوانات المنوية تُظهر تلفاً مرتفعاً",
        "عمليات جراحية سابقة في الخصية أو البربخ",
      ]}
      treatmentOptions={[
        "ICSI قياسي: حقن حيوان منوي من السائل المنوي مباشرة في البويضة",
        "ICSI مع TESE: استخلاص الحيوانات المنوية جراحياً من الخصية في حالات انعدامها بالسائل المنوي",
        "IMSI: تكبير ×6000 لاختيار الحيوان المنوي الأسلم بنيوياً — للحالات المعقدة",
        "PICSI: اختيار الحيوانات المنوية الناضجة بيولوجياً عبر ارتباطها بحمض الهيالورونيك",
        "ICSI مع PGD: فحص الأجنة وراثياً بعد التخصيب — للحالات ذات الخطر الوراثي",
      ]}
      whyGermany={[
        "مختبرات الأجنة في المراكز الألمانية المتخصصة تعمل وفق معايير ISO وتخضع لرقابة دورية. علماء الأجنة (embryologists) المعتمدون يتولون عملية الحقن بدقة عالية.",
        "تقنيات IMSI وPICSI متاحة في المراكز الألمانية المتخصصة للحالات التي تستدعي مستوى أعلى من الدقة في اختيار الحيوان المنوي.",
      ]}
      specialistEvaluation="يبدأ التقييم بتحليل السائل المنوي الشامل وفق معايير WHO 2021، ومراجعة تاريخ الحالة. يُحدد المتخصص ما إذا كان ICSI القياسي كافياً أو إذا كانت IMSI أو PICSI مطلوبة."
      patientPathway={[
        "إرسال تقرير تحليل السائل المنوي الأخير (لا يزيد عمره عن 6 أشهر)",
        "مراجعة أولية وتحديد نوع ICSI المناسب للحالة",
        "تنسيق موعد الاستشارة مع المتخصص",
        "تصميم بروتوكول ICSI المخصص",
        "متابعة نتائج التخصيب وتطور الأجنة",
      ]}
      relatedLinks={[
        { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
        { href: "/ar/ivf-germany", label: "أطفال الأنابيب (IVF) في ألمانيا" },
        { href: "/ar/pgd-germany", label: "الفحص الوراثي للأجنة (PGD) في ألمانيا" },
      ]}
      ctaTitle="ابدأ بتقييم حالتك"
      ctaText="أرسل تقرير تحليل السائل المنوي لتحديد ما إذا كان ICSI أو IMSI هو الخيار الأنسب لحالتك."
      ctaButton="تواصل عبر واتساب"
      ctaHref={WA_HREF}
      arabicSummaryTitle="ملخص"
      arabicSummary="الحقن المجهري (ICSI) في ألمانيا يُستخدم للعوامل الذكورية وحالات ضعف التخصيب. تقنيات IMSI وPICSI متاحة للحالات المعقدة. نتولى التنسيق الكامل من برلين."
      trustLine="جميع البيانات محمية وفق اللائحة الأوروبية لحماية البيانات (GDPR)."
      sectionLabels={{
        aboutCondition: "كيف يعمل ICSI؟",
        symptoms: "متى يُوصى بـ ICSI؟",
        treatmentOptions: "تقنيات ICSI المتاحة",
        whyGermany: "لماذا ICSI في ألمانيا؟",
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
        "name": "الحقن المجهري (ICSI) في ألمانيا",
        "description": "الحقن المجهري ICSI في ألمانيا لحالات العوامل الذكورية وضعف التخصيب.",
        "url": "https://www.medicalcaregermany.com/ar/icsi-germany",
        "inLanguage": "ar",
        "about": { "@type": "MedicalCondition", "name": "Male Infertility" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
