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
      introduction="Liver cancer — encompassing hepatocellular carcinoma (HCC) and intrahepatic cholangiocarcinoma — requires complex multidisciplinary management that integrates hepatobiliary surgery, interventional radiology, medical oncology, and hepatology. German university hospitals with dedicated hepatobiliary centers offer the full spectrum of treatment modalities within a structured tumor board framework."
      aboutCondition="Hepatocellular carcinoma typically arises in the context of chronic liver disease and cirrhosis, and treatment decisions must account for both tumor characteristics and underlying liver function. Staging using the Barcelona Clinic Liver Cancer (BCLC) system guides treatment allocation. Treatment options range from surgical resection and liver transplantation for early-stage disease to locoregional therapies such as TACE and SIRT, and systemic therapies for advanced disease."
      whyGermany="German hepatobiliary surgery centers perform complex liver resections including extended hepatectomy and anatomical segmentectomy, and are experienced in portal vein embolization to augment the future liver remnant before major resection. Liver transplantation is performed at German university transplant centers within the Eurotransplant framework, and interventional oncology services offer TACE, SIRT, and ablative therapies for patients not eligible for surgery."
      specialistEvaluation="Specialist evaluation involves a review of liver function tests, tumor imaging including multiphasic CT or MRI, staging assessment, and prior treatment history. German hepatobiliary specialists assess resectability, transplant eligibility, and the appropriateness of locoregional or systemic therapies based on the individual's tumor burden and hepatic reserve."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Liver Cancer Treatment in Germany",
        "description": "Hepatobiliary surgery and interventional oncology for liver cancer at German university centers, with multidisciplinary tumor board evaluation.",
        "url": "https://medicalcaregermany.com/liver-cancer-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Liver Cancer" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com" }
      })}
    />
    </>
  );
}
