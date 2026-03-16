import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function EpilepsyTreatment() {
  return (
    <MedicalConditionPage
      metaTitle="Epilepsy Treatment in Germany"
      metaDescription="Comprehensive epilepsy evaluation including surgical options at German university epilepsy centers, with structured access for international patients."
      canonicalPath="/epilepsy-treatment-germany"
      headline="Epilepsy Treatment in Germany"
      subtitle="Comprehensive epilepsy evaluation including surgical options at German university epilepsy centers."
      introduction="Epilepsy is a neurological disorder characterized by recurrent unprovoked seizures, affecting patients across all age groups. German university hospitals operate dedicated epilepsy centers that provide comprehensive diagnostic evaluation and a full range of treatment options, including pharmacological management and surgical intervention for drug-resistant cases."
      aboutCondition="Epilepsy encompasses a broad spectrum of seizure types and epilepsy syndromes, each with distinct clinical, electroencephalographic, and neuroimaging characteristics. Approximately one-third of patients do not achieve adequate seizure control with antiseizure medications, constituting drug-resistant epilepsy. These cases require specialized evaluation to determine whether a structural cause is identifiable and whether surgical resection or neuromodulation may offer benefit."
      whyGermany="German epilepsy centers accredited by the German Society for Epileptology offer comprehensive presurgical evaluation including long-term video-EEG monitoring, high-resolution MRI, functional neuroimaging, and neuropsychological assessment. Surgical options include resective surgery, laser interstitial thermal therapy, and neuromodulation approaches such as vagus nerve stimulation and responsive neurostimulation."
      specialistEvaluation="Specialist evaluation involves a structured review of seizure history, EEG recordings, neuroimaging, and prior medication trials. German epileptologists assess whether the diagnosis and epilepsy syndrome classification are accurate, determine whether drug-resistant epilepsy criteria are met, and evaluate eligibility for presurgical workup."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Epilepsy Treatment in Germany",
        "description": "Comprehensive epilepsy evaluation including surgical options at German university epilepsy centers, with structured access for international patients.",
        "url": "https://www.medicalcaregermany.com/epilepsy-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Epilepsy" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
