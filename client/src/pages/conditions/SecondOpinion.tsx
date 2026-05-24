import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FAQ_ITEMS = [
  {
    question: "When should I get a second medical opinion in Germany?",
    answer:
      "A second opinion is particularly valuable when a diagnosis is uncertain or atypical, when a proposed treatment carries significant risk or irreversibility \u2014 such as major surgery, chemotherapy, or radiation \u2014 when multiple treatment options exist with different risk-benefit profiles, or when a patient has not responded to initial treatment as expected. German university specialists provide independent assessments that are not influenced by the treating institution.",
  },
  {
    question: "How does the second opinion process work for international patients?",
    answer:
      "International patients submit their complete medical file \u2014 including imaging, pathology reports, laboratory results, and prior treatment records \u2014 to Medical Care Germany. A Berlin-based coordinator reviews the documentation and identifies the appropriate German university specialist. The specialist conducts a structured review and provides a written second opinion report. The process does not require travel in most cases.",
  },
  {
    question: "How long does it take to receive a second opinion from a German specialist?",
    answer:
      "Written second opinions based on submitted documentation are typically completed within 2\u20133 weeks of file submission. Cases requiring additional imaging or in-person evaluation may take longer. Urgent cases are prioritized. A coordinator provides a realistic timeline after reviewing the submitted medical documentation.",
  },
  {
    question: "What documents are required for a second opinion in Germany?",
    answer:
      "Required documents typically include: recent imaging (MRI, CT, PET-CT with original DICOM files where possible), pathology reports with biopsy results, laboratory results, operative reports if prior surgery was performed, current medication list, and a brief clinical summary. Documents in Arabic are accepted; translation is coordinated as part of the process.",
  },
  {
    question: "Can a German second opinion change my treatment plan?",
    answer:
      "Yes. Second opinions from German university specialists frequently result in revised diagnoses, modified treatment plans, or identification of alternative approaches \u2014 including less invasive options. In cases where the original plan is confirmed, the independent validation supports informed decision-making. The written report is structured to be actionable for the patient and their treating physician.",
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

export default function SecondOpinion() {
  return (
    <>
      <SmartNavLayer currentPath="/second-opinion-germany" />
      <HreflangTags currentPath="/second-opinion-germany" />
      <MedicalConditionPage
      metaTitle="Second Medical Opinion in Germany"
      metaDescription="Independent specialist review of complex diagnoses and treatment plans by German university physicians, structured for international patients."
      canonicalPath="/second-opinion-germany"
      headline="Second Medical Opinion in Germany"
      subtitle="Independent specialist review of complex diagnoses and treatment plans by German university physicians."
      trustLine="500+ cases coordinated since 2012 \u00b7 15+ university hospitals \u00b7 Berlin-based coordination"
      checklistSection={{
        title: "An independent opinion \u2014 before any irreversible decision",
        items: [
          "500+ cases coordinated since 2012",
          "Independent review by German university specialists \u2014 no commercial treatment incentives",
          "Written structured report addressing diagnosis, treatment plan, and alternatives",
          "Coordination for international patients from Libya, Iraq, Saudi Arabia, and Algeria",
        ],
        footer:
          "Send your medical file \u2014 a coordinator will review your case and identify the appropriate specialist.",
      }}
      introduction="A second medical opinion from a German university specialist provides an independent assessment of a diagnosis, proposed treatment plan, or surgical recommendation. For patients facing complex, high-stakes medical decisions, structured access to an independent specialist review can provide clarity and support informed decision-making."
      aboutCondition="Second opinions are particularly valuable when a diagnosis is uncertain or atypical, when a proposed treatment carries significant risk or irreversibility, when multiple treatment options exist with different risk-benefit profiles, or when a patient has not responded to initial treatment as expected. The process involves a structured review of all available medical documentation by a specialist with relevant subspecialty expertise."
      whyGermany="German university physicians operate within academic medical environments that maintain independence from commercial treatment incentives. A second opinion from a German university specialist is supported by access to the full diagnostic infrastructure of the institution and, where relevant, can be discussed within a multidisciplinary tumor board or specialist conference. The opinion is documented in a structured written report."
      specialistEvaluation="The second opinion process begins with a review of all available medical documentation including imaging, pathology, laboratory results, and prior treatment records. The German specialist provides a structured written assessment addressing the accuracy of the current diagnosis, the appropriateness of the proposed treatment plan, and any alternative approaches that merit consideration."
      faqSection={{
        title: "Frequently Asked Questions \u2014 Second Medical Opinion in Germany",
        items: FAQ_ITEMS,
      }}
      customCTA={{
        title: "Next Step",
        heading:
          "Send your medical file \u2014 a coordinator will review your case within 24 hours",
        body: "Submit your imaging, pathology reports, and treatment history. A Berlin-based clinical coordinator will assess your case and identify the appropriate specialist for an independent second opinion.",
        buttonLabel: "Send Medical File",
        buttonHref: "/send-medical-reports",
        note: "All submissions are handled with strict confidentiality.",
      }}
      structuredData={JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Second Medical Opinion in Germany",
          "description": "Independent specialist review of complex diagnoses and treatment plans by German university physicians, structured for international patients.",
          "url": "https://medicalcaregermany.com/second-opinion-germany",
          "about": { "@type": "MedicalCondition", "name": "Second Medical Opinion" },
          "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com" },
        "image": "https://medicalcaregermany.com/og-image.jpg",
        },
        FAQ_SCHEMA,
      ])}
      arabicSummary="الرأي الطبي الثاني هو تقييم مستقل للتشخيص أو خطة العلاج المقترحة من قبل طبيب متخصص آخر. يكون مفيداً بشكل خاص عندما يكون التشخيص غير مؤكد، أو عندما تتضمن خطة العلاج مخاطر كبيرة، أو عندما لم يستجب المريض للعلاج السابق. يعتمد الرأي الثاني في ألمانيا على مراجعة شاملة لجميع التقارير والصور ونتائج التحاليل، وينتهي بتقرير طبي مكتوب ومفصل. يمكن إرسال التقارير لبدء عملية التقييم."
    />
    </>
  );
}
