import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function ProstateCancer() {
  return (
    <>
      <SmartNavLayer currentPath="/prostate-cancer-treatment-germany" />
      <HreflangTags currentPath="/prostate-cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Prostate Cancer Treatment in Germany"
      metaDescription="Advanced urological oncology including robotic-assisted surgery and PSMA PET imaging for prostate cancer at German university hospitals."
      canonicalPath="/prostate-cancer-treatment-germany"
      headline="Prostate Cancer Treatment in Germany"
      subtitle="Advanced urological oncology including robotic surgery at German university hospitals."
      introduction="Prostate cancer management in Germany is conducted within certified prostate cancer centers that apply multidisciplinary tumor board review for all cases. German university urology departments offer the full spectrum of treatment options — from active surveillance for low-risk disease to radical prostatectomy, radiation therapy, and systemic therapies for advanced and metastatic disease."
      aboutCondition="Prostate cancer is the most common malignancy in men and encompasses a wide range of disease stages and risk profiles. Risk stratification based on PSA level, Gleason score, and clinical stage guides treatment decisions. PSMA PET-CT has become an important staging tool in Germany for detecting nodal and distant metastases with higher sensitivity than conventional imaging, particularly in the context of biochemical recurrence."
      whyGermany="German university urology centers perform robotic-assisted radical prostatectomy (RARP) with high surgical volume, which is associated with favorable functional and oncological outcomes. PSMA-targeted radioligand therapy is available at German nuclear medicine centers for eligible patients with metastatic castration-resistant prostate cancer, and focal therapy options including HIFU are offered at selected centers."
      specialistEvaluation="Specialist evaluation involves a review of PSA history, biopsy pathology, staging imaging including PSMA PET-CT where available, and prior treatment history. German urological oncologists assess whether the current risk stratification is accurate, determine the most appropriate primary or salvage treatment approach, and evaluate eligibility for systemic or radioligand therapies."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Prostate Cancer Treatment in Germany",
        "description": "Advanced urological oncology including robotic-assisted surgery and PSMA PET imaging for prostate cancer at German university hospitals.",
        "url": "https://medicalcaregermany.com/prostate-cancer-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Prostate Cancer" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com", "logo": { "@type": "ImageObject", "url": "https://medicalcaregermany.com/og-image.jpg" } },
        "image": "https://medicalcaregermany.com/og-image.jpg"
      })}
    />
    </>
  );
}
