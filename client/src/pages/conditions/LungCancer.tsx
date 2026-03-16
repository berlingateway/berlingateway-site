import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function LungCancer() {
  return (
    <MedicalConditionPage
      metaTitle="Lung Cancer Treatment in Germany"
      metaDescription="Multidisciplinary oncological care for lung cancer at German university cancer centers, including molecular profiling, immunotherapy, and thoracic surgery."
      canonicalPath="/lung-cancer-treatment-germany"
      headline="Lung Cancer Treatment in Germany"
      subtitle="Multidisciplinary oncological care for lung cancer at German university cancer centers."
      introduction="Lung cancer is among the most complex oncological diagnoses, requiring a coordinated multidisciplinary approach that integrates thoracic surgery, medical oncology, radiation oncology, and pulmonology. German university cancer centers operate structured tumor boards that review each case before treatment decisions are finalized, ensuring that all relevant specialties contribute to the treatment plan."
      aboutCondition="Lung cancer is classified into non-small cell lung cancer (NSCLC) and small cell lung cancer (SCLC), each with distinct biological behavior and treatment implications. Molecular profiling of tumor tissue — including testing for driver mutations such as EGFR, ALK, ROS1, and KRAS, as well as PD-L1 expression — is essential for guiding targeted therapy and immunotherapy decisions in NSCLC. Accurate staging through PET-CT and mediastinal assessment is required before treatment planning."
      whyGermany="German university thoracic oncology centers perform comprehensive molecular tumor profiling as a standard component of the diagnostic workup, enabling access to targeted therapies and clinical trials for eligible patients. Minimally invasive thoracic surgical techniques including VATS and robotic-assisted lobectomy are performed by experienced thoracic surgeons, and stereotactic body radiotherapy is available for inoperable early-stage disease."
      specialistEvaluation="Specialist evaluation involves a review of pathology reports, molecular profiling results, staging imaging, and prior treatment history. German thoracic oncologists assess whether the current staging and molecular workup are complete, determine the most appropriate systemic therapy or surgical approach, and identify whether clinical trial participation may be relevant."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Lung Cancer Treatment in Germany",
        "description": "Multidisciplinary oncological care for lung cancer at German university cancer centers, including molecular profiling, immunotherapy, and thoracic surgery.",
        "url": "https://www.medicalcaregermany.com/lung-cancer-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Lung Cancer" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
