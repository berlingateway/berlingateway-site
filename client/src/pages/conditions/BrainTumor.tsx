import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function BrainTumor() {
  return (
    <MedicalConditionPage
      metaTitle="Brain Tumor Treatment in Germany"
      metaDescription="Structured access to neurosurgical and neuro-oncological expertise at German university hospitals for brain tumor diagnosis and treatment."
      canonicalPath="/brain-tumor-treatment-germany"
      headline="Brain Tumor Treatment in Germany"
      subtitle="Structured access to neurosurgical and neuro-oncological expertise at German university hospitals."
      introduction="Brain tumors encompass a broad spectrum of intracranial neoplasms requiring precise diagnosis and individualized treatment planning. German university hospitals operate dedicated neuro-oncology units where neurosurgeons, radiation oncologists, and medical oncologists collaborate within structured tumor boards to determine the most appropriate treatment pathway for each case."
      aboutCondition="Brain tumors may be primary — arising from brain tissue itself — or secondary, representing metastases from other organ systems. Classification, grading, and molecular profiling are essential steps in determining prognosis and guiding therapy. Symptoms vary widely depending on tumor location and may include headaches, neurological deficits, cognitive changes, or seizures."
      whyGermany="Germany's university medical centers are equipped with intraoperative MRI, neuronavigation systems, and awake craniotomy capabilities that allow surgeons to maximize tumor resection while preserving neurological function. Multidisciplinary tumor conferences ensure that each case is reviewed by specialists across neurosurgery, neuroradiology, neuropathology, and oncology before treatment decisions are finalized."
      specialistEvaluation="A specialist evaluation begins with a review of available imaging and pathology documentation. German neuro-oncologists assess the completeness of prior workup, identify whether additional molecular diagnostics are indicated, and determine whether surgical, radiotherapeutic, or systemic approaches — or a combination — are appropriate for the individual case."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Brain Tumor Treatment in Germany",
        "description": "Structured access to neurosurgical and neuro-oncological expertise at German university hospitals for brain tumor diagnosis and treatment.",
        "url": "https://www.medicalcaregermany.com/brain-tumor-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Brain Tumor" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
      arabicSummary="أورام المخ هي نمو غير طبيعي للخلايا داخل الجمجمة، وقد تكون ابتدائية نشأت في أنسجة المخ، أو ثانوية انتقلت من عضو آخر في الجسم. تتفاوت الأعراض بحسب موقع الورم وقد تشمل الصداع المستمر، أو ضعف في الحركة، أو تغيرات في الكلام والذاكرة. في ألمانيا، تُعالج هذه الحالات ضمن فرق طبية متخصصة تضم جراحي الأعصاب وأطباء الأورام وأخصائيي الأشعة، مما يتيح وضع خطة علاجية دقيقة تناسب كل حالة على حدة. يمكن إرسال التقارير الطبية للتقييم الأولي قبل اتخاذ أي قرار علاجي."
    />
  );
}
