import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FAQ_ITEMS = [
  {
    question: "Is robotic surgery for colon cancer available in Germany?",
    answer:
      "Yes — da Vinci robotic surgery is available at specialized centers in Berlin, providing higher precision and faster recovery compared to conventional surgery.",
  },
  {
    question: "Can colon cancer be treated if it has spread to the liver?",
    answer:
      "In many cases yes — liver metastasis does not mean treatment is impossible, and each case is evaluated by a joint specialist team.",
  },
  {
    question: "What is the difference between colon cancer and rectal cancer in diagnosis?",
    answer:
      "The location of the tumor determines the surgical and treatment protocol — precise distinction is necessary before any decision.",
  },
  {
    question: "How do I send my file for a colon cancer case evaluation?",
    answer:
      "Send your reports and imaging via the website or WhatsApp — a coordinator will respond within 24 hours.",
  },
  {
    question: "Is neoadjuvant chemotherapy before surgery an option in Germany?",
    answer:
      "Yes — chemotherapy before surgery (neoadjuvant) is an available option in many cases to reduce tumor size before surgical intervention.",
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

export default function ColonCancer() {
  return (
    <>
      <SmartNavLayer currentPath="/colon-cancer-treatment-germany" />
      <HreflangTags currentPath="/colon-cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Colon Cancer Treatment in Germany | Expert Review Before Any Decision"
      metaDescription="Colorectal cancer cases reviewed by specialist professors at certified German university centers. Send your medical file — response within 24 hours."
      canonicalPath="/colon-cancer-treatment-germany"
      headline="Colon Cancer Treatment in Germany"
      subtitle="Surgical and oncological management of colorectal cancer at German university medical centers."
      introduction="Colorectal cancer treatment in Germany is coordinated through certified colorectal cancer centers that integrate surgical oncology, gastroenterology, medical oncology, radiation oncology, and pathology. Each case is reviewed at a multidisciplinary tumor conference before treatment decisions are finalized, ensuring that all relevant clinical and pathological factors are considered."
      aboutCondition="Colorectal cancer encompasses malignancies of the colon and rectum, with distinct anatomical and biological characteristics that influence surgical approach and systemic therapy selection. Molecular profiling including RAS and BRAF mutation testing, microsatellite instability status, and HER2 assessment is performed as standard in Germany to guide systemic therapy decisions. Accurate staging with CT of the chest, abdomen, and pelvis — and MRI of the rectum for rectal cancer — is essential for treatment planning."
      whyGermany="German colorectal cancer centers perform laparoscopic and robotic-assisted colorectal surgery with high surgical volume, and total mesorectal excision (TME) is the standard surgical approach for rectal cancer. Neoadjuvant chemoradiotherapy or short-course radiotherapy is applied for locally advanced rectal cancer according to current guidelines, and liver metastasis surgery is performed at centers with dedicated hepatobiliary surgical expertise."
      specialistEvaluation="Specialist evaluation involves a review of pathology, molecular profiling results, staging imaging, and proposed treatment plan. German colorectal oncologists assess whether the staging workup is complete, whether the planned surgical and systemic approach is aligned with current evidence, and whether the case warrants discussion at a specialized tumor board."
      faqSection={{
        title: "Frequently Asked Questions — Colon Cancer Treatment in Germany",
        items: FAQ_ITEMS,
      }}
      customCTA={{
        title: "Next Step",
        heading: "Send your medical file — a coordinator will review your case within 24 hours",
        body: "Submit your pathology report, molecular profiling results, staging imaging, and treatment history. A Berlin-based clinical coordinator will assess your case and identify the appropriate colorectal oncology specialist.",
        buttonLabel: "Send Medical File",
        buttonHref: "https://tally.so/r/68MrBP",
        note: "All submissions are handled with strict confidentiality.",
      }}
      structuredData={JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Colon Cancer Treatment in Germany",
          "description": "Colorectal cancer cases reviewed by specialist professors at certified German university centers. Send your medical file — response within 24 hours.",
          "url": "https://medicalcaregermany.com/colon-cancer-treatment-germany",
          "about": { "@type": "MedicalCondition", "name": "Colorectal Cancer" },
          "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com", "logo": { "@type": "ImageObject", "url": "https://medicalcaregermany.com/og-image.jpg" } },
          "image": "https://medicalcaregermany.com/og-image.jpg"
        },
        FAQ_SCHEMA,
      ])}
    />
    </>
  );
}
