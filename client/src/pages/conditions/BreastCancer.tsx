import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function BreastCancer() {
  return (
    <>
      <SmartNavLayer currentPath="/breast-cancer-treatment-germany" />
      <HreflangTags currentPath="/breast-cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Breast Cancer Treatment in Germany"
      metaDescription="Certified breast cancer centers and multidisciplinary tumor boards at German university hospitals for comprehensive breast cancer care."
      canonicalPath="/breast-cancer-treatment-germany"
      headline="Breast Cancer Treatment in Germany"
      subtitle="Certified breast cancer centers and multidisciplinary tumor boards at German university hospitals."
      introduction="Breast cancer treatment in Germany is delivered through certified breast centers (Brustzentren) that meet rigorous quality standards defined by the German Cancer Society and the German Society for Senology. These centers integrate surgical oncology, medical oncology, radiation oncology, pathology, and radiology within a structured multidisciplinary team that reviews each case at a tumor conference."
      aboutCondition="Breast cancer encompasses a spectrum of histological subtypes and molecular profiles — including hormone receptor-positive, HER2-positive, and triple-negative disease — each requiring a distinct treatment approach. Accurate pathological characterization including receptor status, HER2 testing, and genomic profiling where indicated is essential for treatment planning. Staging, surgical planning, and systemic therapy selection are determined within the multidisciplinary team framework."
      whyGermany="German certified breast centers perform high-volume breast surgery including breast-conserving procedures, oncoplastic techniques, and immediate or delayed reconstruction, supported by dedicated breast radiologists and pathologists. Neoadjuvant systemic therapy is offered where appropriate, and genomic tests such as Oncotype DX and Mammaprint are used to guide chemotherapy decisions in hormone receptor-positive early-stage disease."
      specialistEvaluation="Specialist evaluation involves a review of pathology, receptor and HER2 status, staging imaging, and proposed treatment plan. German breast oncologists assess whether the current workup is complete, whether the planned surgical approach and systemic therapy are aligned with current guidelines, and whether additional molecular testing may refine treatment decisions."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Breast Cancer Treatment in Germany",
        "description": "Certified breast cancer centers and multidisciplinary tumor boards at German university hospitals for comprehensive breast cancer care.",
        "url": "https://medicalcaregermany.com/breast-cancer-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Breast Cancer" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com", "logo": { "@type": "ImageObject", "url": "https://medicalcaregermany.com/og-image.jpg" } },
        "image": "https://medicalcaregermany.com/og-image.jpg"
      })}
    />
    </>
  );
}
