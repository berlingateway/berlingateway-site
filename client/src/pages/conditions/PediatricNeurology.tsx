import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function PediatricNeurology() {
  return (
    <MedicalConditionPage
      metaTitle="Pediatric Neurology in Germany"
      metaDescription="Specialist neurological care for children at German university pediatric centers, covering epilepsy, neuromuscular disorders, and developmental conditions."
      canonicalPath="/pediatric-neurology-germany"
      headline="Pediatric Neurology in Germany"
      subtitle="Specialist neurological care for children at German university pediatric centers."
      introduction="Pediatric neurology encompasses the diagnosis and management of neurological disorders in infants, children, and adolescents. German university children's hospitals maintain dedicated neuropediatric departments staffed by specialists with subspecialty training in childhood neurological conditions, supported by pediatric neuroradiology, neurophysiology, and neuropathology services."
      aboutCondition="Neurological conditions in children include epilepsy and epileptic encephalopathies, neuromuscular disorders, cerebral palsy, metabolic and genetic neurological diseases, brain tumors, and acquired brain injuries. Diagnosis often requires integration of clinical assessment with advanced neuroimaging, genetic testing, metabolic screening, and neurophysiological studies tailored to the pediatric patient."
      whyGermany="German university pediatric neurology centers apply age-appropriate diagnostic protocols and have access to the full range of advanced neuroimaging and genetic diagnostic technologies. Multidisciplinary teams including neuropediatricians, pediatric neurosurgeons, geneticists, and developmental specialists collaborate to provide integrated care for children with complex neurological conditions."
      specialistEvaluation="Specialist evaluation involves a review of developmental history, neurological examination findings, neuroimaging, and prior diagnostic workup. German neuropediatricians assess whether the current diagnosis is supported by available evidence, identify whether additional investigations are required, and provide structured recommendations for management and follow-up."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Pediatric Neurology in Germany",
        "description": "Specialist neurological care for children at German university pediatric centers, covering epilepsy, neuromuscular disorders, and developmental conditions.",
        "url": "https://www.medicalcaregermany.com/pediatric-neurology-germany",
        "about": { "@type": "MedicalCondition", "name": "Pediatric Neurological Disorder" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
