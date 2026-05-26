import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FAQ_ITEMS = [
  {
    question: "What are the treatment options for prostate cancer in Germany?",
    answer:
      "German university urology centers offer the full spectrum of prostate cancer treatment — from active surveillance for low-risk disease to robotic-assisted radical prostatectomy (RARP), precision radiation therapy (IMRT, SBRT), focal therapy including HIFU, and systemic therapies for advanced disease. PSMA-targeted radioligand therapy is available at German nuclear medicine centers for eligible patients with metastatic castration-resistant prostate cancer.",
  },
  {
    question: "What is PSMA PET-CT and is it available in Germany?",
    answer:
      "PSMA PET-CT is an advanced imaging technique that detects prostate cancer spread with significantly higher sensitivity than conventional CT or bone scan, particularly in the setting of biochemical recurrence after treatment. It is widely available at German university hospitals and has become a standard staging tool for high-risk and recurrent prostate cancer cases.",
  },
  {
    question: "How does robotic prostatectomy in Germany compare to other countries?",
    answer:
      "German university urology departments perform robotic-assisted radical prostatectomy (RARP) at high surgical volumes, which is associated with favorable oncological and functional outcomes including continence and potency preservation. The multidisciplinary tumor board review process ensures that surgery is recommended only when it represents the optimal treatment approach for the individual patient.",
  },
  {
    question: "What documents are needed for a prostate cancer specialist evaluation in Germany?",
    answer:
      "Required documents include: PSA history, biopsy pathology report with Gleason score, staging imaging (MRI, CT, bone scan, PSMA PET-CT if available), prior treatment records, and current medication list. Documents in Arabic are accepted; translation is coordinated as part of the process. A coordinator reviews the file and identifies the appropriate specialist.",
  },
  {
    question: "Can international patients access PSMA radioligand therapy in Germany?",
    answer:
      "Yes. PSMA-targeted radioligand therapy (Lu-177 PSMA) is available at German nuclear medicine centers for eligible patients with metastatic castration-resistant prostate cancer. Eligibility is determined through specialist evaluation including PSMA PET-CT imaging. International patients can submit their medical file for an initial assessment of eligibility.",
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

export default function ProstateCancer() {
  return (
    <>
      <SmartNavLayer currentPath="/prostate-cancer-treatment-germany" />
      <HreflangTags currentPath="/prostate-cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Prostate Cancer Treatment in Germany | Expert Review Before Any Decision"
      metaDescription="Complex prostate cancer cases reviewed by specialist professors at German university hospitals. Send your medical file — response within 24 hours."
      canonicalPath="/prostate-cancer-treatment-germany"
      headline="Prostate Cancer Treatment in Germany"
      subtitle="Advanced urological oncology including robotic surgery at German university hospitals."
      introduction="Prostate cancer management in Germany is conducted within certified prostate cancer centers that apply multidisciplinary tumor board review for all cases. German university urology departments offer the full spectrum of treatment options — from active surveillance for low-risk disease to radical prostatectomy, radiation therapy, and systemic therapies for advanced and metastatic disease."
      aboutCondition="Prostate cancer is the most common malignancy in men and encompasses a wide range of disease stages and risk profiles. Risk stratification based on PSA level, Gleason score, and clinical stage guides treatment decisions. PSMA PET-CT has become an important staging tool in Germany for detecting nodal and distant metastases with higher sensitivity than conventional imaging, particularly in the context of biochemical recurrence."
      whyGermany="German university urology centers perform robotic-assisted radical prostatectomy (RARP) with high surgical volume, which is associated with favorable functional and oncological outcomes. PSMA-targeted radioligand therapy is available at German nuclear medicine centers for eligible patients with metastatic castration-resistant prostate cancer, and focal therapy options including HIFU are offered at selected centers."
      specialistEvaluation="Specialist evaluation involves a review of PSA history, biopsy pathology, staging imaging including PSMA PET-CT where available, and prior treatment history. German urological oncologists assess whether the current risk stratification is accurate, determine the most appropriate primary or salvage treatment approach, and evaluate eligibility for systemic or radioligand therapies."
      faqSection={{
        title: "Frequently Asked Questions — Prostate Cancer Treatment in Germany",
        items: FAQ_ITEMS,
      }}
      customCTA={{
        title: "Next Step",
        heading: "Send your medical file — a coordinator will review your case within 24 hours",
        body: "Submit your PSA history, biopsy pathology, and imaging. A Berlin-based clinical coordinator will assess your case and identify the appropriate urological oncology specialist.",
        buttonLabel: "Send Medical File",
        buttonHref: "/send-medical-reports",
        note: "All submissions are handled with strict confidentiality.",
      }}
      structuredData={JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Prostate Cancer Treatment in Germany",
          "description": "Advanced urological oncology including robotic-assisted surgery and PSMA PET imaging for prostate cancer at German university hospitals.",
          "url": "https://medicalcaregermany.com/prostate-cancer-treatment-germany",
          "about": { "@type": "MedicalCondition", "name": "Prostate Cancer" },
          "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com", "logo": { "@type": "ImageObject", "url": "https://medicalcaregermany.com/og-image.jpg" } },
          "image": "https://medicalcaregermany.com/og-image.jpg"
        },
        FAQ_SCHEMA,
      ])}
    />
    </>
  );
}
