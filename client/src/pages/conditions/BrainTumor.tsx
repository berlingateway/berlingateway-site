import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function BrainTumor() {
  return (
    <>
      <SmartNavLayer currentPath="/brain-tumor-treatment-germany" />
      <HreflangTags currentPath="/brain-tumor-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Brain Tumor Treatment in Germany | Specialist Neurosurgery"
      metaDescription="Structured access to neurosurgical and neuro-oncological expertise at German university hospitals for brain tumor diagnosis and treatment planning."
      canonicalPath="/brain-tumor-treatment-germany"
      headline="عندما يكون الورم في المخ… القرار لا يحتمل الخطأ."
      subtitle="ليست كل أورام المخ متشابهة، ولا كل خطة علاج مناسبة لكل مريض. التقييم الدقيق يحدد الفرق بين مسار صحيح وقرار قد يصعب التراجع عنه."
      trustLine="مراجعة طبية منظمة ضمن شبكة المستشفيات الجامعية في ألمانيا."
      ctaLabel="إرسال التقارير الطبية"
      introduction="مراجعة طبية منظمة ضمن شبكة المستشفيات الجامعية في ألمانيا."
      aboutCondition={[
        "أورام المخ هي نمو غير طبيعي للخلايا داخل أنسجة المخ أو في المناطق المحيطة به. وقد تكون أورامًا أولية نشأت داخل المخ نفسه، أو أورامًا ثانوية انتقلت من عضو آخر في الجسم. تختلف هذه الأورام بشكل كبير من حيث طبيعتها؛ فبعضها بطيء النمو وبعضها سريع، وبعضها حميد وبعضها خبيث.",
        "ولا يقتصر تأثير الورم على حجمه فقط، بل يرتبط أيضًا بموقعه داخل المخ وبالمنطقة التي يضغط عليها أو يؤثر في وظائفها. ولهذا قد تتشابه الأعراض بين حالات مختلفة، بينما يكون التشخيص الحقيقي مختلفًا تمامًا. التقييم الدقيق لا يعتمد على صورة واحدة أو انطباع أولي، بل على قراءة متكاملة للصور، والتقارير، والوصف السريري للحالة."
      ]}
      symptoms={[
        "صداع مستمر أو متزايد، خاصة إذا اختلف عن الصداع المعتاد",
        "غثيان أو قيء متكرر دون سبب واضح",
        "نوبات تشنج أو صرع لأول مرة",
        "ضعف أو تنميل في طرف من الأطراف",
        "اضطراب في الكلام أو الرؤية أو التوازن",
        "تغيرات في الذاكرة أو التركيز أو السلوك",
        "بطء في الاستجابة أو تراجع في الأداء الذهني",
        "أعراض عصبية تتفاقم تدريجيًا مع الوقت"
      ]}
      treatmentOptions="يعتمد العلاج على نوع الورم، ومكانه، ومرحلته، وعمر المريض، والحالة العامة، ونتائج التقييم الكامل."
      treatmentList={[
        "المتابعة الدقيقة في بعض الحالات المحددة",
        "الجراحة إذا كان الورم قابلًا للاستئصال أو يحتاج إلى أخذ عينة",
        "العلاج الإشعاعي بأنواعه المختلفة",
        "العلاج الدوائي أو الموجه بحسب نوع الورم",
        "الجمع بين أكثر من وسيلة علاجية ضمن خطة مرحلية"
      ]}
      whyGermany={[
        "يلجأ بعض المرضى إلى ألمانيا عندما تكون الحالة معقدة، أو عندما يكون هناك شك في دقة التشخيص، أو عندما يحتاج القرار إلى خبرة متعددة التخصصات.",
        "ما يميز هذا المسار هو التنظيم، ودقة التقييم، وإمكانية مراجعة الحالة داخل بيئة جامعية متخصصة تجمع أكثر من تخصص في وقت واحد."
      ]}
      specialistEvaluation={[
        "أورام المخ ليست تشخيصًا واحدًا، بل مجموعة معقدة من الحالات تختلف في النوع، والموقع، وسرعة النمو.",
        "في بعض الحالات يكون القرار العلاجي واضحًا، لكن في حالات أخرى يكون التقييم غير كافٍ أو الخطة غير مكتملة.",
        "قد يغيّر التقييم المنظم من فريق متخصص مسار العلاج بالكامل."
      ]}
      patientPathway={[
        "إرسال التقارير الطبية والصور والتقارير المرضية المتوفرة",
        "مراجعة أولية للملف خلال 24–48 ساعة",
        "تحديد ما إذا كانت الحالة تحتاج إلى تقييم متخصص أو مسار علاجي محدد",
        "توجيه الحالة إلى الجهة أو التخصص الأنسب عند الحاجة",
        "توضيح الخطوات التالية بشكل منظم قبل اتخاذ القرار"
      ]}
      ctaTitle="الخطوة التالية"
      ctaText="إذا كانت الحالة غير واضحة، أو كانت الخطة العلاجية المطروحة تحتاج إلى تأكيد، يمكن إرسال التقارير الطبية للحصول على مراجعة أولية منظمة قبل اتخاذ أي قرار علاجي."
      ctaButton="إرسال التقارير الطبية"
      relatedLinks={[
        { href: "/neurology-germany", label: "Neurology in Germany" },
        { href: "/brain-surgery-germany", label: "Brain Surgery in Germany" },
        { href: "/neurology-treatment-germany", label: "Neurology Treatment" },
        { href: "/advanced-diagnostics-germany", label: "Advanced Diagnostics" },
        { href: "/second-opinion-germany", label: "Second Medical Opinion" },
        { href: "/university-hospital-treatment-germany", label: "University Hospital Treatment" }
      ]}
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Brain Tumor Treatment in Germany",
        "description": "Structured access to neurosurgical and neuro-oncological expertise at German university hospitals for brain tumor diagnosis and treatment.",
        "url": "https://medicalcaregermany.com/brain-tumor-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Brain Tumor" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com" }
      })}
      arabicSummaryTitle="متى تحتاج الحالة إلى مراجعة متخصصة؟"
      arabicSummary="أورام المخ ليست تشخيصًا واحدًا، بل مجموعة معقدة من الحالات تختلف في النوع، الموقع، وسرعة النمو. في بعض الحالات، قد يكون القرار العلاجي واضحًا. لكن في حالات أخرى، يكون التقييم غير كافٍ أو الخطة غير مكتملة. قد يغيّر التقييم المنظم من فريق متخصص مسار العلاج بالكامل. يمكن إرسال التقارير الطبية للحصول على تقييم أولي قبل اتخاذ أي قرار علاجي."
    />
    </>
  );
}
