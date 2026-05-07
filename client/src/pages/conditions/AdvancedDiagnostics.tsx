import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function AdvancedDiagnostics() {
  return (
    <>
      <SmartNavLayer currentPath="/advanced-diagnostics-germany" />
      <HreflangTags currentPath="/advanced-diagnostics-germany" />
      <MedicalConditionPage
      metaTitle="Advanced Medical Diagnostics in Germany"
      metaDescription="Comprehensive diagnostic evaluation using Germany's advanced imaging and laboratory technology, including 7T MRI, PET-CT, and molecular pathology."
      canonicalPath="/advanced-diagnostics-germany"
      headline="Advanced Medical Diagnostics in Germany"
      subtitle="Comprehensive diagnostic evaluation using Germany's most advanced imaging and laboratory technology."
      introduction="Germany's university hospitals maintain diagnostic infrastructure that encompasses the most advanced imaging, laboratory, and molecular diagnostic technologies available in contemporary medicine. For patients with complex or unresolved diagnostic questions, access to this infrastructure — combined with specialist interpretation — can provide clarity that is not available in standard clinical settings."
      aboutCondition="Complex diagnostic situations arise when standard investigations have not yielded a definitive diagnosis, when the severity of a condition warrants the most sensitive available diagnostic tools, or when treatment decisions depend on precise characterization of disease extent or biology. These situations may involve rare diseases, atypical presentations of common conditions, or cases where molecular or genetic profiling is required to guide therapy."
      whyGermany="German university hospitals operate 3-Tesla and 7-Tesla MRI systems, PET-CT and PET-MRI scanners, advanced nuclear medicine imaging including PSMA and amyloid PET, and comprehensive molecular pathology laboratories. Rare disease centers and specialized diagnostic units provide structured evaluation for diagnostically challenging cases, with access to interdisciplinary expertise across multiple specialties."
      specialistEvaluation="Specialist evaluation involves a review of prior diagnostic workup to identify gaps and determine which additional investigations may resolve the diagnostic question. German diagnostic specialists design a structured diagnostic pathway, prioritizing investigations with the highest clinical yield for the individual case and coordinating results across relevant specialties."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Advanced Medical Diagnostics in Germany",
        "description": "Comprehensive diagnostic evaluation using Germany's advanced imaging and laboratory technology, including 7T MRI, PET-CT, and molecular pathology.",
        "url": "https://www.medicalcaregermany.com/advanced-diagnostics-germany",
        "about": { "@type": "MedicalCondition", "name": "Complex Diagnostic Evaluation" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
      relatedLinks={[
        { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
      ]}
      sectionLabels={{ relatedLinks: "خدماتنا المتميزة" }}
    />
    </>
  );
}
