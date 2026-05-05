import MedicalConditionPage from "@/components/MedicalConditionPage";

const WA_NUMBER = "4915781497451";
const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("مرحباً، أنا من ليبيا وأرغب في تقييم حالتي بخصوص تأخر الإنجاب")}`;

export default function FertilityLibya() {
  return (
    <MedicalConditionPage
      pageDir="rtl"
      metaTitle="علاج تأخر الإنجاب في ألمانيا للمرضى القادمين من ليبيا"
      metaDescription="إعادة تقييم حالات تأخر الإنجاب الفاشلة في ليبيا عبر متخصصين ألمان. تشخيص دقيق وخطة علاجية واضحة من برلين."
      canonicalPath="/ar/fertility-treatment-libya-germany"
      heroEyebrow="Medical Care Germany · برلين"
      headline="هل فشلت المحاولات السابقة؟ إعادة التقييم ممكنة"
      subtitle="للمرضى القادمين من ليبيا — تقييم متخصص لحالات تأخر الإنجاب في ألمانيا"
      introduction="كثير من الحالات التي لم تستجب للعلاج المحلي تحتاج إلى إعادة تقييم كاملة، لا إلى تكرار نفس البروتوكول. في ألمانيا، يبدأ الأمر بتشخيص شامل يكشف ما لم يُكتشف من قبل."
      checklistSection={{
        title: "هل هذه حالتك؟",
        items: [
          "محاولات IVF أو IUI سابقة دون نتيجة",
          "تشخيصات متضاربة أو غير محددة",
          "رغبة في الحصول على رأي طبي ثانٍ متخصص",
          "قلق من تكرار نفس الأخطاء في العلاج",
        ],
        footer: "إذا كانت إجابتك نعم على أي من هذه النقاط، فإن إعادة التقييم في ألمانيا قد تغير مسار حالتك.",
      }}
      aboutCondition={[
        "إعادة التقييم ليست بداية من الصفر — بل هي قراءة أعمق لما حدث. يقوم المتخصصون الألمان بمراجعة كامل ملف الحالة، بما يشمل نتائج التحاليل، بروتوكولات العلاج السابقة، وأسباب الفشل المحتملة.",
        "تشمل إعادة التقييم: تحليل احتياطي المبيض (AMH)، تقييم جودة البويضات والحيوانات المنوية، فحص الرحم بالتفصيل، وتحليل العوامل الوراثية إذا لزم الأمر.",
      ]}
      symptoms={[
        "فشل دورتين أو أكثر من IVF",
        "إسقاط متكرر دون تفسير واضح",
        "ضعف الاستجابة للتحفيز الهرموني",
        "نتائج تحاليل طبيعية لكن دون حمل",
        "تشخيص سابق بـ 'سبب غير معروف'",
      ]}
      treatmentOptions="بعد إعادة التقييم، يتم تصميم خطة علاجية مخصصة. قد تشمل: تعديل بروتوكول التحفيز، استخدام تقنية ICSI أو IMSI، اختبار PGD للكشف عن الأجنة السليمة وراثياً، أو علاج عوامل مناعية لم تُعالج سابقاً."
      whyGermany={[
        "المراكز الألمانية المتخصصة في الإنجاب تعمل وفق بروتوكولات موحدة ومُراجعة علمياً، مع إمكانية الوصول إلى أحدث تقنيات التشخيص الجيني.",
        "الميزة الأساسية للمريض الليبي: الحصول على تقرير طبي مفصل يشرح أسباب الفشل السابق وخطة واضحة للمضي قدماً — وهو ما يصعب الحصول عليه في كثير من الأحيان محلياً.",
      ]}
      specialistEvaluation="يبدأ التقييم بمراجعة الملف الطبي الكامل عن بُعد. بعد ذلك، يُحدد المنسق الطبي في برلين الخطوات التالية، سواء كانت زيارة للفحص المباشر أو استشارة متخصصة عبر الفيديو."
      patientPathway={[
        "إرسال الملف الطبي الكامل عبر البريد الإلكتروني أو واتساب",
        "مراجعة أولية من قِبل المنسق الطبي خلال 48 ساعة",
        "تحديد نوع التقييم المطلوب (عن بُعد أو حضوري)",
        "تقرير طبي مفصل بالنتائج والتوصيات",
        "خطة علاجية واضحة مع جدول زمني",
      ]}
      relatedLinks={[
        { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
        { href: "/ar/pgd-germany", label: "الفحص الجيني للأجنة (PGD) في ألمانيا" },
        { href: "/ar/complex-trauma-evaluation", label: "تقييم الحالات المعقدة" },
      ]}
      ctaTitle="ابدأ بإعادة التقييم"
      ctaText="أرسل ملفك الطبي الآن للحصول على مراجعة أولية من برلين. لا قرار علاجي قبل التشخيص الصحيح."
      ctaButton="تواصل عبر واتساب"
      ctaHref={waHref}
      arabicSummaryTitle="ملخص"
      arabicSummary="إذا فشلت محاولات سابقة في ليبيا، فإن إعادة التقييم الطبي في ألمانيا قد تكشف أسباباً لم تُعالج. نبدأ بمراجعة ملفك الطبي الكامل قبل أي قرار."
      trustLine="جميع المعلومات تُعالج وفق أنظمة حماية البيانات الألمانية."
      sectionLabels={{
        aboutCondition: "ما الذي يختلف في إعادة التقييم؟",
        symptoms: "علامات تستدعي إعادة التقييم",
        treatmentOptions: "خيارات العلاج بعد التقييم",
        whyGermany: "لماذا ألمانيا للمريض الليبي؟",
        specialistEvaluation: "كيف يتم التقييم؟",
        patientPathway: "مسار الحالة خطوة بخطوة",
        relatedLinks: "صفحات ذات صلة",
        footerNote: "جميع البيانات تُعالج وفق قوانين حماية البيانات الألمانية.",
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
        "name": "علاج تأخر الإنجاب في ألمانيا للمرضى من ليبيا",
        "description": "إعادة تقييم حالات تأخر الإنجاب الفاشلة في ليبيا عبر متخصصين ألمان.",
        "url": "https://www.medicalcaregermany.com/ar/fertility-treatment-libya-germany",
        "inLanguage": "ar",
        "about": { "@type": "MedicalCondition", "name": "Infertility" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" },
        "audience": { "@type": "Audience", "geographicArea": { "@type": "Country", "name": "Libya" } }
      })}
    />
  );
}
