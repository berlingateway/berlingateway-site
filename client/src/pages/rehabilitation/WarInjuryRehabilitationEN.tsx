import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function WarInjuryRehabilitationEN() {
  return (
    <MedicalConditionPage
      metaTitle="War Injury Rehabilitation in Germany | Complex Trauma Recovery Pathways"
      metaDescription="Medical Care Germany coordinates rehabilitation evaluation and pathway access for war injury, blast trauma, and complex conflict-related injuries at German specialist rehabilitation centres."
      canonicalPath="/en/war-injury-rehabilitation-germany"
      headline="War Injury Rehabilitation in Germany"
      subtitle="Structured rehabilitation pathway coordination for complex conflict-related injuries and blast trauma."
      introduction="War injuries and conflict-related trauma present complex rehabilitation requirements that extend well beyond the acute surgical phase. Blast injuries, penetrating trauma, spinal cord injuries, traumatic brain injuries, and amputation each require structured, specialist rehabilitation programmes delivered by multidisciplinary teams with experience in complex trauma recovery. German rehabilitation centres with specialist trauma rehabilitation programmes provide the clinical infrastructure for structured recovery in these cases."
      aboutCondition="War injury rehabilitation addresses the functional consequences of blast trauma, penetrating injuries, spinal cord injury, traumatic brain injury, amputation, and the psychological sequelae of conflict exposure. These cases typically involve multiple concurrent injury patterns requiring coordinated management across rehabilitation medicine, neurology, orthopaedics, prosthetics, neuropsychology, and psychological support. The rehabilitation programme is structured around a comprehensive functional assessment and a defined set of recovery goals."
      symptoms={[
        "Functional impairment following blast injury or penetrating trauma",
        "Incomplete neurological recovery following spinal cord or brain injury",
        "Limb loss requiring prosthetic rehabilitation and functional training",
        "Chronic pain, spasticity, or contracture following complex trauma",
        "Cognitive or psychological sequelae of traumatic brain injury",
        "Incomplete recovery following prior rehabilitation programme"
      ]}
      causes="War injuries produce complex injury patterns through multiple mechanisms. Blast injuries cause primary, secondary, tertiary, and quaternary injury through pressure wave, fragmentation, displacement, and thermal effects. Penetrating injuries cause direct tissue damage to neural, vascular, and musculoskeletal structures. Spinal cord injuries result in partial or complete motor and sensory deficits below the level of injury. Traumatic brain injuries produce a spectrum of cognitive, behavioural, and neurological sequelae. Amputation requires prosthetic fitting, functional training, and psychological adjustment."
      diagnosticProcess="Rehabilitation assessment for war injury cases begins with a comprehensive review of the patient's injury history, surgical records, prior rehabilitation, and current functional status. The assessment identifies residual impairments, functional goals, and the appropriate rehabilitation setting. Medical Care Germany coordinates the preparation of clinical documentation and the pre-admission evaluation at the relevant rehabilitation centre."
      treatmentOptions="War injury rehabilitation programmes in Germany are delivered by specialist multidisciplinary teams with experience in complex trauma recovery. Programmes integrate physical rehabilitation, prosthetic training, neuropsychological rehabilitation, pain management, and psychological support within a structured clinical framework. Advanced rehabilitation technologies including robotic gait training, functional electrical stimulation, and prosthetic fitting services are available within specialist centres."
      treatmentList={[
        "Blast injury rehabilitation with multidisciplinary trauma team",
        "Spinal cord injury rehabilitation programme",
        "Traumatic brain injury neurological rehabilitation",
        "Prosthetic fitting and functional rehabilitation training",
        "Chronic pain management within rehabilitation framework",
        "Neuropsychological rehabilitation and cognitive recovery",
        "Psychological support and trauma-informed care",
        "Long-term rehabilitation planning and programme coordination"
      ]}
      whyGermany="German rehabilitation centres with specialist trauma rehabilitation programmes have experience managing complex injury patterns including those arising from conflict-related trauma. The structured clinical governance framework, multidisciplinary team composition, and access to advanced rehabilitation technologies provide the clinical infrastructure for complex trauma recovery. Medical Care Germany coordinates access to these centres for international patients and government-sponsored cases."
      specialistEvaluation="War injury rehabilitation evaluation begins with a comprehensive assessment of the patient's injury profile, surgical history, prior rehabilitation, and current functional status. The rehabilitation physician formulates a structured programme plan addressing the full range of residual impairments. Medical Care Germany coordinates the documentation preparation, centre selection, and admission process."
      patientPathway={[
        "Submit injury records, surgical reports, imaging, and prior rehabilitation documentation",
        "Clinical coordinator reviews documentation and identifies appropriate rehabilitation pathway",
        "Specialist rehabilitation centre pre-admission evaluation coordinated",
        "Multidisciplinary programme plan formulated",
        "Admission and programme commencement coordinated",
        "Ongoing liaison with rehabilitation team and referring institution"
      ]}
      relatedLinks={[
        { href: "/en/advanced-rehabilitation-germany", label: "Advanced Rehabilitation" },
        { href: "/en/prosthetics-germany", label: "Prosthetics Germany" },
        { href: "/en/neurological-rehabilitation-germany", label: "Neurological Rehabilitation" },
        { href: "/en/second-medical-evaluation-germany", label: "Second Medical Evaluation" },
        { href: "/ar/war-injury-rehabilitation-germany", label: "النسخة العربية" }
      ]}
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "War Injury Rehabilitation in Germany",
        "description": "Structured rehabilitation pathway coordination for complex conflict-related injuries and blast trauma.",
        "url": "https://www.medicalcaregermany.com/en/war-injury-rehabilitation-germany",
        "about": { "@type": "MedicalSpecialty", "name": "Physical Medicine and Rehabilitation" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
