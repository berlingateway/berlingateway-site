import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function HerniatedDisc() {
  return (
    <MedicalConditionPage
      metaTitle="Herniated Disc Treatment in Germany"
      metaDescription="Minimally invasive and surgical options for herniated disc at German spine centers, with structured specialist evaluation for international patients."
      canonicalPath="/herniated-disc-treatment-germany"
      headline="Herniated Disc Treatment in Germany"
      subtitle="Minimally invasive and surgical options for disc pathology at German spine centers."
      introduction="A herniated intervertebral disc occurs when the nucleus pulposus protrudes through the annulus fibrosus, potentially compressing adjacent nerve roots or the spinal cord. The condition can cause radicular pain, sensory disturbances, and motor weakness depending on the level and degree of neural compression."
      aboutCondition="Herniated discs most commonly occur in the lumbar and cervical spine and may result from degenerative changes, acute mechanical loading, or trauma. Diagnosis is established through clinical examination and MRI, which provides detailed visualization of disc morphology and the extent of neural compression. The majority of cases respond to conservative management, though surgical intervention is indicated when neurological deficits progress or symptoms persist despite adequate non-operative treatment."
      whyGermany="German spine centers offer a range of surgical options including microdiscectomy, endoscopic disc surgery, and cervical disc arthroplasty, selected according to the specific clinical and anatomical presentation. Minimally invasive approaches are prioritized where appropriate, and surgical planning incorporates advanced imaging analysis to optimize the procedure for each patient."
      specialistEvaluation="Specialist evaluation includes a review of MRI findings, neurological examination results, and the course of prior conservative treatment. German spine surgeons assess whether surgical decompression is indicated and determine the most appropriate technique — open, microscopic, or endoscopic — based on the individual case characteristics."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Herniated Disc Treatment in Germany",
        "description": "Minimally invasive and surgical options for herniated disc at German spine centers, with structured specialist evaluation for international patients.",
        "url": "https://www.medicalcaregermany.com/herniated-disc-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Herniated Disc" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
