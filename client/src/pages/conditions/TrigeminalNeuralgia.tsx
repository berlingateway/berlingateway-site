import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function TrigeminalNeuralgia() {
  return (
    <MedicalConditionPage
      metaTitle="Trigeminal Neuralgia Treatment in Germany"
      metaDescription="Specialist evaluation for trigeminal neuralgia at German university hospitals, including microvascular decompression and radiosurgery options."
      canonicalPath="/trigeminal-neuralgia-treatment-germany"
      headline="Trigeminal Neuralgia Treatment in Germany"
      subtitle="Specialist evaluation for one of the most complex pain conditions in neurology."
      introduction="Trigeminal neuralgia is a chronic pain disorder characterized by severe, episodic facial pain along the distribution of the trigeminal nerve. It is considered one of the most debilitating pain conditions in clinical neurology, and its management requires specialist expertise in both neurology and neurosurgery."
      aboutCondition="The condition typically presents as sudden, electric shock-like pain triggered by routine activities such as eating, speaking, or touching the face. It may be caused by vascular compression of the trigeminal nerve root, demyelinating disease, or structural lesions. Accurate diagnosis requires high-resolution MRI to identify the underlying etiology before treatment decisions are made."
      whyGermany="German university hospitals offer the full spectrum of treatment options for trigeminal neuralgia, including pharmacological management, percutaneous procedures, stereotactic radiosurgery, and microvascular decompression surgery. Neurosurgical teams at German academic centers have extensive experience with posterior fossa surgery and apply intraoperative neurophysiological monitoring to optimize outcomes."
      specialistEvaluation="A specialist evaluation involves review of neuroimaging, pain history, and prior treatment responses. German neurologists and neurosurgeons assess whether a structural cause is identifiable and which intervention — medical, percutaneous, radiosurgical, or open surgical — is most appropriate given the individual clinical profile."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Trigeminal Neuralgia Treatment in Germany",
        "description": "Specialist evaluation for trigeminal neuralgia at German university hospitals, including microvascular decompression and radiosurgery options.",
        "url": "https://www.medicalcaregermany.com/trigeminal-neuralgia-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Trigeminal Neuralgia" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
