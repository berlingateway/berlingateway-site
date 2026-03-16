import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function ParkinsonTreatment() {
  return (
    <MedicalConditionPage
      metaTitle="Parkinson's Disease Treatment in Germany"
      metaDescription="Specialist neurological care for Parkinson's disease in Germany, including deep brain stimulation and advanced pharmacological management at university hospitals."
      canonicalPath="/parkinson-treatment-germany"
      headline="Parkinson's Disease Treatment in Germany"
      subtitle="Specialist neurological care including deep brain stimulation at German university hospitals."
      introduction="Parkinson's disease is a progressive neurodegenerative disorder requiring long-term specialist management that evolves as the condition advances. German university neurology departments offer comprehensive Parkinson's care that integrates pharmacological optimization, neurorehabilitation, and surgical intervention within a structured multidisciplinary team."
      aboutCondition="Parkinson's disease is characterized by motor symptoms including tremor, rigidity, bradykinesia, and postural instability, as well as a range of non-motor features including autonomic dysfunction, cognitive changes, and sleep disturbances. Diagnosis is clinical, supported by neuroimaging and dopaminergic functional scans where indicated. Treatment decisions depend on disease stage, symptom profile, and individual patient factors."
      whyGermany="German university hospitals with dedicated movement disorder units offer deep brain stimulation (DBS) surgery for appropriately selected patients, performed by experienced neurosurgical teams with specialized expertise in functional neurosurgery. Continuous dopaminergic infusion therapies and advanced pharmacological regimens are also available and managed by neurologists with subspecialty training in movement disorders."
      specialistEvaluation="Specialist evaluation involves a comprehensive assessment of motor and non-motor symptom burden, current medication regimen, and functional status. German movement disorder specialists determine whether the current treatment is optimized, assess eligibility for advanced therapies including DBS, and provide structured recommendations for ongoing management."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Parkinson's Disease Treatment in Germany",
        "description": "Specialist neurological care for Parkinson's disease in Germany, including deep brain stimulation and advanced pharmacological management at university hospitals.",
        "url": "https://www.medicalcaregermany.com/parkinson-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Parkinson's Disease" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
