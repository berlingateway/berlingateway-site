import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function SpecialistReferral() {
  return (
    <>
      <SmartNavLayer currentPath="/specialist-referral-germany" />
      <HreflangTags currentPath="/specialist-referral-germany" />
      <MedicalConditionPage
      metaTitle="Specialist Referral in Germany"
      metaDescription="Coordinated referral pathways to senior German specialists across all major medical disciplines, structured for international patients and referring physicians."
      canonicalPath="/specialist-referral-germany"
      headline="Specialist Referral in Germany"
      subtitle="Coordinated referral pathways to senior German specialists across all major medical disciplines."
      introduction="Accessing the appropriate specialist within Germany's university hospital system requires knowledge of the institutional structure, subspecialty distribution, and referral protocols of German academic medicine. Structured referral coordination ensures that patients are directed to the physician with the most relevant expertise for their specific clinical situation, rather than to a general department."
      aboutCondition="Specialist referral is relevant for patients who require evaluation by a physician with subspecialty expertise that is not available in their home country, for cases where a second opinion from a senior German specialist is sought, and for situations where treatment at a German university hospital is being considered and a pre-admission specialist assessment is required. The referral process involves preparation and transmission of clinical documentation in a format appropriate for German academic medicine."
      whyGermany="Germany's university hospitals employ senior specialists — Professoren and Oberärzte — with deep subspecialty expertise across all major medical disciplines. The German academic medical hierarchy ensures that complex cases are reviewed by physicians with the highest level of clinical and research experience in their field. Referral to the appropriate specialist is a prerequisite for efficient and effective engagement with the German university hospital system."
      specialistEvaluation="Structured referral coordination begins with a review of the patient's medical documentation to identify the most appropriate specialist and institution. The Berlin-based coordinator prepares a structured clinical summary, identifies the relevant specialist, and manages the communication and appointment process on behalf of the patient or referring physician."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Specialist Referral in Germany",
        "description": "Coordinated referral pathways to senior German specialists across all major medical disciplines, structured for international patients and referring physicians.",
        "url": "https://www.medicalcaregermany.com/specialist-referral-germany",
        "about": { "@type": "MedicalCondition", "name": "Specialist Medical Referral" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
    </>
  );
}
