import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function BrainSurgery() {
  return (
    <MedicalConditionPage
      metaTitle="Brain Surgery in Germany"
      metaDescription="Neurosurgical intervention at German university medical centers with advanced intraoperative technology, neuronavigation, and awake craniotomy capabilities."
      canonicalPath="/brain-surgery-germany"
      headline="Brain Surgery in Germany"
      subtitle="Neurosurgical intervention at German university medical centers with advanced intraoperative technology."
      introduction="Neurosurgical procedures in Germany are performed within university hospital settings that combine surgical expertise with advanced intraoperative technology. German neurosurgical departments manage a broad spectrum of intracranial pathologies including tumors, vascular malformations, hydrocephalus, and traumatic brain injuries within a structured multidisciplinary framework."
      aboutCondition="Brain surgery encompasses craniotomy for tumor resection, vascular procedures for aneurysms and arteriovenous malformations, endoscopic ventricular procedures, deep brain stimulation, and epilepsy surgery. The appropriate surgical approach is determined by the underlying pathology, its anatomical location, and the patient's neurological status and overall condition."
      whyGermany="German university neurosurgical centers are equipped with intraoperative MRI, neuronavigation, fluorescence-guided surgery, and neurophysiological monitoring systems that allow surgeons to operate with precision while continuously assessing neurological function. Awake craniotomy is performed at specialized centers to enable real-time cortical mapping during procedures near eloquent brain areas."
      specialistEvaluation="Specialist evaluation involves a comprehensive review of neuroimaging, prior surgical and medical history, and neurological examination findings. German neurosurgeons assess the surgical risk-benefit profile, determine whether the planned procedure is technically feasible with available technology, and identify whether additional preoperative workup is required."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Brain Surgery in Germany",
        "description": "Neurosurgical intervention at German university medical centers with advanced intraoperative technology, neuronavigation, and awake craniotomy capabilities.",
        "url": "https://www.medicalcaregermany.com/brain-surgery-germany",
        "about": { "@type": "MedicalCondition", "name": "Brain Surgery" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
