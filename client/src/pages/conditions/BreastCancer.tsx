import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FAQ_ITEMS = [
  {
    question: "Can breast cancer be treated in Germany without full mastectomy?",
    answer:
      "In many cases yes — breast-conserving surgery combined with radiation therapy is an available option determined by a specialist team after thorough evaluation.",
  },
  {
    question: "What is the difference between HER2-positive and HER2-negative breast cancer?",
    answer:
      "HER2-positive breast cancer responds to targeted therapies available in Germany — the distinction between HER2-positive and HER2-negative completely changes the treatment protocol.",
  },
  {
    question: "Is immunotherapy available for breast cancer in Germany?",
    answer:
      "Yes — in specific cases such as Triple Negative Breast Cancer, immunotherapy is available at German academic medical centers.",
  },
  {
    question: "How do I send my file for a breast cancer case evaluation?",
    answer:
      "Send your reports and imaging via the website or WhatsApp — a coordinator will respond within 24 hours.",
  },
  {
    question: "Is BRCA genetic testing available in Germany?",
    answer:
      "Yes — genetic testing is available and forms part of the comprehensive diagnostic protocol at German academic medical centers.",
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

export default function BreastCancer() {
  return (
    <>
      <SmartNavLayer currentPath="/breast-cancer-treatment-germany" />
      <HreflangTags currentPath="/breast-cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Breast Cancer Treatment in Germany | Expert Review Before Any Decision"
      metaDescription="Breast cancer cases reviewed by specialist professors at certified German university breast centers. Send your medical file — response within 24 hours."
      canonicalPath="/breast-cancer-treatment-germany"
      headline="Breast Cancer Treatment in Germany"
      subtitle="Certified breast cancer centers and multidisciplinary tumor boards at German university hospitals."
      introduction="Breast cancer treatment in Germany is delivered through certified breast centers (Brustzentren) that meet rigorous quality standards defined by the German Cancer Society and the German Society for Senology. These centers integrate surgical oncology, medical oncology, radiation oncology, pathology, and radiology within a structured multidisciplinary team that reviews each case at a tumor conference."
      aboutCondition="Breast cancer encompasses a spectrum of histological subtypes and molecular profiles — including hormone receptor-positive, HER2-positive, and triple-negative disease — each requiring a distinct treatment approach. Accurate pathological characterization including receptor status, HER2 testing, and genomic profiling where indicated is essential for treatment planning. Staging, surgical planning, and systemic therapy selection are determined within the multidisciplinary team framework."
      whyGermany="German certified breast centers perform high-volume breast surgery including breast-conserving procedures, oncoplastic techniques, and immediate or delayed reconstruction, supported by dedicated breast radiologists and pathologists. Neoadjuvant systemic therapy is offered where appropriate, and genomic tests such as Oncotype DX and Mammaprint are used to guide chemotherapy decisions in hormone receptor-positive early-stage disease."
      specialistEvaluation="Specialist evaluation involves a review of pathology, receptor and HER2 status, staging imaging, and proposed treatment plan. German breast oncologists assess whether the current workup is complete, whether the planned surgical approach and systemic therapy are aligned with current guidelines, and whether additional molecular testing may refine treatment decisions."
      faqSection={{
        title: "Frequently Asked Questions — Breast Cancer Treatment in Germany",
        items: FAQ_ITEMS,
      }}
      customCTA={{
        title: "Next Step",
        heading: "Send your medical file — a coordinator will review your case within 24 hours",
        body: "Submit your pathology report, receptor status, imaging, and treatment history. A Berlin-based clinical coordinator will assess your case and identify the appropriate breast oncology specialist.",
        buttonLabel: "Send Medical File",
        buttonHref: "https://tally.so/r/68MrBP",
        note: "All submissions are handled with strict confidentiality.",
      }}
      structuredData={JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Breast Cancer Treatment in Germany",
          "description": "Breast cancer cases reviewed by specialist professors at certified German university breast centers. Send your medical file — response within 24 hours.",
          "url": "https://medicalcaregermany.com/breast-cancer-treatment-germany",
          "about": { "@type": "MedicalCondition", "name": "Breast Cancer" },
          "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com", "logo": { "@type": "ImageObject", "url": "https://medicalcaregermany.com/og-image.jpg" } },
          "image": "https://medicalcaregermany.com/og-image.jpg"
        },
        FAQ_SCHEMA,
      ])}
    />
    </>
  );
}
