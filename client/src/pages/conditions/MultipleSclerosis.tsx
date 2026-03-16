import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function MultipleSclerosis() {
  return (
    <MedicalConditionPage
      metaTitle="Multiple Sclerosis Treatment in Germany"
      metaDescription="Advanced MS diagnostics and disease-modifying therapy at German neurological centers, with structured specialist evaluation for international patients."
      canonicalPath="/multiple-sclerosis-treatment-germany"
      headline="Multiple Sclerosis Treatment in Germany"
      subtitle="Advanced MS diagnostics and disease-modifying therapy at German neurological centers."
      introduction="Multiple sclerosis is a chronic inflammatory demyelinating disease of the central nervous system that requires long-term specialist management. German university neurology departments offer comprehensive MS care, from initial diagnostic workup to advanced disease-modifying therapy selection and monitoring within dedicated MS centers."
      aboutCondition="MS presents with a wide range of neurological symptoms depending on the location of demyelinating lesions, including visual disturbances, sensory changes, motor weakness, fatigue, and cognitive impairment. Diagnosis is established according to the McDonald criteria, incorporating clinical findings, MRI, and cerebrospinal fluid analysis. Disease course varies significantly between individuals, and treatment decisions must account for disease activity, disability progression, and individual risk factors."
      whyGermany="German MS centers are recognized within European MS networks and apply current international treatment guidelines with access to the full range of approved disease-modifying therapies. High-field MRI is used for sensitive lesion detection and treatment monitoring, and neuroimmunology specialists manage complex cases including atypical presentations and treatment-refractory disease."
      specialistEvaluation="Specialist evaluation involves a review of MRI findings, clinical history, and current treatment status. German MS neurologists assess disease activity, determine whether the current disease-modifying therapy is appropriate for the individual's disease course, and provide recommendations regarding escalation, switch, or continuation of treatment."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Multiple Sclerosis Treatment in Germany",
        "description": "Advanced MS diagnostics and disease-modifying therapy at German neurological centers, with structured specialist evaluation for international patients.",
        "url": "https://www.medicalcaregermany.com/multiple-sclerosis-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Multiple Sclerosis" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
