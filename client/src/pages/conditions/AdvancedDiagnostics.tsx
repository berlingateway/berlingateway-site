import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FAQ_ITEMS = [
  {
    question: "What advanced diagnostic technologies are available in Germany?",
    answer:
      "German university hospitals operate 3-Tesla and 7-Tesla MRI systems, PET-CT and PET-MRI scanners, advanced nuclear medicine imaging including PSMA PET and amyloid PET, whole-body diffusion MRI, and comprehensive molecular pathology laboratories. These technologies are available within structured diagnostic programs at rare disease centers and specialist units, with results interpreted by subspecialty-trained physicians.",
  },
  {
    question: "When is advanced diagnostics in Germany appropriate for international patients?",
    answer:
      "Advanced diagnostics in Germany is appropriate when standard investigations have not yielded a definitive diagnosis, when the severity of a condition warrants the most sensitive available tools, when treatment decisions depend on precise characterization of disease extent or biology, or when molecular or genetic profiling is required to guide therapy. Cases involving rare diseases, atypical presentations, or complex oncological staging are particularly suited to Germany's diagnostic infrastructure.",
  },
  {
    question: "How does the diagnostic evaluation process work for international patients?",
    answer:
      "International patients submit their prior diagnostic workup \u2014 including imaging, laboratory results, and clinical history \u2014 to Medical Care Germany. A Berlin-based coordinator reviews the documentation and identifies the appropriate diagnostic specialist or program. The German specialist designs a structured diagnostic pathway, prioritizing investigations with the highest clinical yield for the individual case. Results are coordinated across relevant specialties and provided in a written report.",
  },
  {
    question: "What is the difference between 3T and 7T MRI, and when is 7T MRI needed?",
    answer:
      "7-Tesla MRI provides significantly higher spatial resolution and signal-to-noise ratio than standard 3-Tesla systems, enabling visualization of fine anatomical structures that are not visible on conventional MRI. 7T MRI is particularly valuable for detailed brain imaging in epilepsy, small lesion characterization, hippocampal assessment, and research-level neurological evaluation. It is available at selected German university centers and is indicated for specific diagnostic questions rather than routine imaging.",
  },
  {
    question: "How do I send my medical file for diagnostic evaluation in Germany?",
    answer:
      "Submit your prior imaging (including DICOM files where available), laboratory results, pathology reports, and a brief clinical summary to Medical Care Germany. A coordinator will review the documentation and identify the appropriate diagnostic pathway at the relevant German university center. Documents in Arabic are accepted; translation is coordinated as part of the process. Initial review is completed within 24\u201348 hours of submission.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

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
        trustLine="500+ cases coordinated since 2012 \u00b7 7T MRI \u00b7 PET-CT \u00b7 Molecular pathology"
        checklistSection={{
          title: "When standard diagnostics have not provided an answer",
          items: [
            "500+ cases coordinated since 2012",
            "Access to 7T MRI, PET-CT, PET-MRI, and molecular pathology at German university hospitals",
            "Structured diagnostic pathway designed by subspecialty-trained specialists",
            "Coordination for international patients from Libya, Iraq, Saudi Arabia, and Algeria",
          ],
          footer:
            "Send your prior diagnostic workup \u2014 a coordinator will identify the appropriate diagnostic pathway within 24\u201348 hours.",
        }}
        introduction="Germany's university hospitals maintain diagnostic infrastructure that encompasses the most advanced imaging, laboratory, and molecular diagnostic technologies available in contemporary medicine. For patients with complex or unresolved diagnostic questions, access to this infrastructure \u2014 combined with specialist interpretation \u2014 can provide clarity that is not available in standard clinical settings."
        aboutCondition="Complex diagnostic situations arise when standard investigations have not yielded a definitive diagnosis, when the severity of a condition warrants the most sensitive available diagnostic tools, or when treatment decisions depend on precise characterization of disease extent or biology. These situations may involve rare diseases, atypical presentations of common conditions, or cases where molecular or genetic profiling is required to guide therapy."
        whyGermany="German university hospitals operate 3-Tesla and 7-Tesla MRI systems, PET-CT and PET-MRI scanners, advanced nuclear medicine imaging including PSMA and amyloid PET, and comprehensive molecular pathology laboratories. Rare disease centers and specialized diagnostic units provide structured evaluation for diagnostically challenging cases, with access to interdisciplinary expertise across multiple specialties."
        specialistEvaluation="Specialist evaluation involves a review of prior diagnostic workup to identify gaps and determine which additional investigations may resolve the diagnostic question. German diagnostic specialists design a structured diagnostic pathway, prioritizing investigations with the highest clinical yield for the individual case and coordinating results across relevant specialties."
        faqSection={{
          title: "Frequently Asked Questions \u2014 Advanced Diagnostics in Germany",
          items: FAQ_ITEMS,
        }}
        customCTA={{
          title: "Next Step",
          heading:
            "Send your medical file \u2014 a coordinator will review your case within 24 hours",
          body: "Submit your prior imaging, laboratory results, and clinical history. A Berlin-based coordinator will identify the appropriate diagnostic pathway at the relevant German university center.",
          buttonLabel: "Send Medical File",
          buttonHref: "/send-medical-reports",
          note: "All submissions are handled with strict confidentiality.",
        }}
        structuredData={JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: "Advanced Medical Diagnostics in Germany",
            description:
              "Comprehensive diagnostic evaluation using Germany's advanced imaging and laboratory technology, including 7T MRI, PET-CT, and molecular pathology.",
            url: "https://medicalcaregermany.com/advanced-diagnostics-germany",
            about: { "@type": "MedicalCondition", name: "Complex Diagnostic Evaluation" },
            publisher: {
              "@type": "Organization",
              name: "Medical Care Germany",
              url: "https://medicalcaregermany.com",
            },
            image: "https://medicalcaregermany.com/og-image.jpg",
          },
          FAQ_SCHEMA,
        ])}
        relatedLinks={[
          { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
        ]}
        sectionLabels={{ relatedLinks: "خدماتنا المتميزة" }}
      />
    </>
  );
}
