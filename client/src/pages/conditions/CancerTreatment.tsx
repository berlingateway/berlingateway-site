import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function CancerTreatment() {
  return (
    <>
      <SmartNavLayer currentPath="/cancer-treatment-germany" />
      <HreflangTags currentPath="/cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Cancer Treatment in Germany — Specialist Oncology Access"
      metaDescription="Structured access to oncological expertise at German university hospitals for complex cancer cases requiring specialist evaluation, multidisciplinary review, and advanced treatment planning."
      canonicalPath="/cancer-treatment-germany"
      headline="Cancer Treatment in Germany"
      subtitle="Structured access to oncological expertise at German university hospitals for complex cases requiring multidisciplinary evaluation."
      introduction="Germany's university medical centers operate comprehensive oncology departments where specialists across surgical oncology, medical oncology, radiation oncology, and pathology collaborate within structured tumor boards. International patients with complex or advanced cancer diagnoses may access this framework through coordinated clinical pathway management, ensuring that treatment decisions are supported by the full depth of German academic medicine."
      aboutCondition="Cancer encompasses a broad range of malignant conditions affecting different organ systems, each requiring individualized diagnostic workup, staging, and treatment planning. Accurate molecular profiling, imaging interpretation, and pathological classification are foundational to determining the appropriate therapeutic strategy. Complex cases — including rare tumors, recurrent disease, or cases where prior treatment has not achieved the desired response — often benefit from specialist re-evaluation within a multidisciplinary setting."
      whyGermany="German university hospitals are equipped with advanced diagnostic infrastructure including PET-CT, molecular pathology laboratories, and interventional radiology capabilities. Tumor boards convene regularly to review individual cases, ensuring that treatment recommendations reflect current evidence and the combined expertise of multiple specialists. Germany's healthcare framework supports structured access to clinical trials, targeted therapies, and immunotherapy protocols for eligible patients."
      specialistEvaluation="A specialist evaluation begins with a structured review of available documentation, including pathology reports, imaging studies, and prior treatment records. German oncologists assess the completeness of the diagnostic workup, identify whether additional staging or molecular testing is indicated, and determine which treatment modalities — surgical, systemic, radiotherapeutic, or combined — are appropriate for the individual clinical situation."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Cancer Treatment in Germany",
        "description": "Structured access to oncological expertise at German university hospitals for complex cancer cases requiring specialist evaluation and advanced treatment planning.",
        "url": "https://www.medicalcaregermany.com/cancer-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Cancer" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
      arabicSummary="السرطان هو نمو غير طبيعي للخلايا يمكن أن يصيب أي جزء من الجسم، وتختلف طريقة علاجه بحسب نوع الورم ومرحلته. تتضمن خيارات العلاج الجراحة، والعلاج الكيميائي، والعلاج الإشعاعي، والعلاجات المستهدفة الحديثة. في ألمانيا، تُدرس حالات السرطان ضمن مجالس طبية متخصصة تجمع خبراء من تخصصات متعددة لوضع خطة علاجية متكاملة. الحالات المعقدة أو التي لم تستجب للعلاج السابق تستفيد بشكل خاص من إعادة التقييم في مراكز طبية جامعية ألمانية."
    />
    </>
  );
}
