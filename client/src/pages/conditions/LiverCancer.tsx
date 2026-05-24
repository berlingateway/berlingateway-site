import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function LiverCancer() {
  return (
    <>
      <SmartNavLayer currentPath="/liver-cancer-treatment-germany" />
      <HreflangTags currentPath="/liver-cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Liver Cancer Treatment in Germany"
      metaDescription="Hepatobiliary surgery and interventional oncology for liver cancer at German university centers, with multidisciplinary tumor board evaluation."
      canonicalPath="/liver-cancer-treatment-germany"
      headline="Liver Cancer Treatment in Germany"
      subtitle="Hepatobiliary surgery and interventional oncology for liver cancer at German university centers."
      trustLine="500+ cases coordinated since 2012 · 15+ university hospitals · Berlin-based coordination"
      checklistSection={{
        title: "Liver cancer needs a team — not a single physician",
        items: [
          "500+ cases coordinated since 2012",
          "Direct access to hepatobiliary surgeons at German university hospitals",
          "Multidisciplinary tumor board evaluation within 24–48 hours",
          "Coordination for international patients from Libya, Iraq, Saudi Arabia, and Algeria",
        ],
        footer: "Send your medical file — a coordinator will review your case and identify the appropriate specialist pathway.",
      }}
      introduction="Liver cancer — encompassing hepatocellular carcinoma (HCC) and intrahepatic cholangiocarcinoma — requires complex multidisciplinary management that integrates hepatobiliary surgery, interventional radiology, medical oncology, and hepatology. German university hospitals with dedicated hepatobiliary centers offer the full spectrum of treatment modalities within a structured tumor board framework."
      aboutCondition="Hepatocellular carcinoma typically arises in the context of chronic liver disease and cirrhosis, and treatment decisions must account for both tumor characteristics and underlying liver function. Staging using the Barcelona Clinic Liver Cancer (BCLC) system guides treatment allocation. Treatment options range from surgical resection and liver transplantation for early-stage disease to locoregional therapies such as TACE and SIRT, and systemic therapies for advanced disease."
      whyGermany="German hepatobiliary surgery centers perform complex liver resections including extended hepatectomy and anatomical segmentectomy, and are experienced in portal vein embolization to augment the future liver remnant before major resection. Liver transplantation is performed at German university transplant centers within the Eurotransplant framework, and interventional oncology services offer TACE, SIRT, and ablative therapies for patients not eligible for surgery."
      specialistEvaluation="Specialist evaluation involves a review of liver function tests, tumor imaging including multiphasic CT or MRI, staging assessment, and prior treatment history. German hepatobiliary specialists assess resectability, transplant eligibility, and the appropriateness of locoregional or systemic therapies based on the individual's tumor burden and hepatic reserve."
      faqSection={{
        title: "Frequently Asked Questions — Liver Cancer Treatment in Germany",
        items: [
          {
            question: "What are the best hospitals in Germany for liver cancer?",
            answer: "Germany's leading liver cancer centers include Charité Berlin, University Hospital Frankfurt (known for its liver transplant program), University Hospital Munich (LMU), and Heidelberg University Hospital. These centers operate dedicated hepatobiliary units with multidisciplinary tumor boards that evaluate each case individually.",
          },
          {
            question: "How long does liver cancer treatment take in Germany?",
            answer: "Treatment duration depends on the stage and chosen modality. Surgical resection typically requires a hospital stay of 7–14 days followed by recovery. Locoregional therapies such as TACE or SIRT are performed on an outpatient or short-stay basis. Liver transplantation involves a longer process including waitlist evaluation. A coordinator can provide a realistic timeline after reviewing your medical file.",
          },
          {
            question: "Can international patients access liver transplant in Germany?",
            answer: "Yes. International patients can be evaluated for liver transplantation at German university transplant centers operating within the Eurotransplant framework. Eligibility is assessed based on tumor characteristics, liver function, and overall health status. The process begins with a formal evaluation at the transplant center.",
          },
          {
            question: "What is the cost of liver cancer surgery in Germany?",
            answer: "Costs vary significantly based on the procedure, hospital, and individual case complexity. Surgical resection, transplantation, and locoregional therapies each carry different cost structures. A detailed cost estimate is provided after the specialist evaluation and treatment plan are established. Medical Care Germany coordinates this process for international patients.",
          },
          {
            question: "How do I get a second opinion for liver cancer in Germany?",
            answer: "Submit your medical file — including imaging (CT/MRI), pathology reports, and current treatment history — to Medical Care Germany. A Berlin-based coordinator will review the documentation and arrange a specialist second opinion at the appropriate German university center, typically within 24–48 hours of submission.",
          },
        ],
      }}
      customCTA={{
        title: "Next Step",
        heading: "Send your medical file — a coordinator will review your case within 24 hours",
        body: "Submit your imaging, pathology reports, and treatment history. A Berlin-based clinical coordinator will assess your case and identify the appropriate specialist or university hospital pathway.",
        buttonLabel: "Send Medical File",
        buttonHref: "/send-medical-reports",
        note: "All submissions are handled with strict confidentiality.",
      }}
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalWebPage",
            "name": "Liver Cancer Treatment in Germany",
            "description": "Hepatobiliary surgery and interventional oncology for liver cancer at German university centers, with multidisciplinary tumor board evaluation.",
            "url": "https://medicalcaregermany.com/liver-cancer-treatment-germany",
            "about": { "@type": "MedicalCondition", "name": "Liver Cancer" },
            "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com", "logo": { "@type": "ImageObject", "url": "https://medicalcaregermany.com/og-image.jpg" } },
        "image": "https://medicalcaregermany.com/og-image.jpg"
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the best hospitals in Germany for liver cancer?",
                "acceptedAnswer": { "@type": "Answer", "text": "Germany's leading liver cancer centers include Charité Berlin, University Hospital Frankfurt (known for its liver transplant program), University Hospital Munich (LMU), and Heidelberg University Hospital. These centers operate dedicated hepatobiliary units with multidisciplinary tumor boards that evaluate each case individually." }
              },
              {
                "@type": "Question",
                "name": "How long does liver cancer treatment take in Germany?",
                "acceptedAnswer": { "@type": "Answer", "text": "Treatment duration depends on the stage and chosen modality. Surgical resection typically requires a hospital stay of 7–14 days followed by recovery. Locoregional therapies such as TACE or SIRT are performed on an outpatient or short-stay basis. Liver transplantation involves a longer process including waitlist evaluation." }
              },
              {
                "@type": "Question",
                "name": "Can international patients access liver transplant in Germany?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. International patients can be evaluated for liver transplantation at German university transplant centers operating within the Eurotransplant framework. Eligibility is assessed based on tumor characteristics, liver function, and overall health status." }
              },
              {
                "@type": "Question",
                "name": "What is the cost of liver cancer surgery in Germany?",
                "acceptedAnswer": { "@type": "Answer", "text": "Costs vary significantly based on the procedure, hospital, and individual case complexity. Surgical resection, transplantation, and locoregional therapies each carry different cost structures. A detailed cost estimate is provided after the specialist evaluation and treatment plan are established." }
              },
              {
                "@type": "Question",
                "name": "How do I get a second opinion for liver cancer in Germany?",
                "acceptedAnswer": { "@type": "Answer", "text": "Submit your medical file — including imaging (CT/MRI), pathology reports, and current treatment history — to Medical Care Germany. A Berlin-based coordinator will review the documentation and arrange a specialist second opinion at the appropriate German university center, typically within 24–48 hours of submission." }
              }
            ]
          }
        ]
      })}
    />
    </>
  );
}
