import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function ColonCancer() {
  return (
    <MedicalConditionPage
      metaTitle="Colon Cancer Treatment in Germany"
      metaDescription="Surgical and oncological management of colorectal cancer at German university medical centers, with multidisciplinary tumor board review for each case."
      canonicalPath="/colon-cancer-treatment-germany"
      headline="Colon Cancer Treatment in Germany"
      subtitle="Surgical and oncological management of colorectal cancer at German university medical centers."
      introduction="Colorectal cancer treatment in Germany is coordinated through certified colorectal cancer centers that integrate surgical oncology, gastroenterology, medical oncology, radiation oncology, and pathology. Each case is reviewed at a multidisciplinary tumor conference before treatment decisions are finalized, ensuring that all relevant clinical and pathological factors are considered."
      aboutCondition="Colorectal cancer encompasses malignancies of the colon and rectum, with distinct anatomical and biological characteristics that influence surgical approach and systemic therapy selection. Molecular profiling including RAS and BRAF mutation testing, microsatellite instability status, and HER2 assessment is performed as standard in Germany to guide systemic therapy decisions. Accurate staging with CT of the chest, abdomen, and pelvis — and MRI of the rectum for rectal cancer — is essential for treatment planning."
      whyGermany="German colorectal cancer centers perform laparoscopic and robotic-assisted colorectal surgery with high surgical volume, and total mesorectal excision (TME) is the standard surgical approach for rectal cancer. Neoadjuvant chemoradiotherapy or short-course radiotherapy is applied for locally advanced rectal cancer according to current guidelines, and liver metastasis surgery is performed at centers with dedicated hepatobiliary surgical expertise."
      specialistEvaluation="Specialist evaluation involves a review of pathology, molecular profiling results, staging imaging, and proposed treatment plan. German colorectal oncologists assess whether the staging workup is complete, whether the planned surgical and systemic approach is aligned with current evidence, and whether the case warrants discussion at a specialized tumor board."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Colon Cancer Treatment in Germany",
        "description": "Surgical and oncological management of colorectal cancer at German university medical centers, with multidisciplinary tumor board review for each case.",
        "url": "https://www.medicalcaregermany.com/colon-cancer-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Colorectal Cancer" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
  );
}
