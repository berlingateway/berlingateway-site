import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function CongenitalHeart() {
  return (
    <>
      <SmartNavLayer currentPath="/congenital-heart-treatment-germany" />
      <HreflangTags currentPath="/congenital-heart-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Congenital Heart Disease Treatment Germany"
      metaDescription="Specialist pediatric and adult congenital cardiac care at German university heart centers, with structured evaluation for complex congenital heart conditions."
      canonicalPath="/congenital-heart-treatment-germany"
      headline="Congenital Heart Disease Treatment in Germany"
      subtitle="Specialist pediatric and adult congenital cardiac care at German university heart centers."
      introduction="Congenital heart disease encompasses a spectrum of structural cardiac abnormalities present from birth, ranging from simple septal defects to complex multi-lesion anatomy. German university heart centers with dedicated congenital heart programs provide comprehensive evaluation and management for both pediatric patients and adults with congenital heart disease (ACHD)."
      aboutCondition="Congenital heart conditions include atrial and ventricular septal defects, patent ductus arteriosus, tetralogy of Fallot, transposition of the great arteries, coarctation of the aorta, and complex single-ventricle anatomy. With advances in pediatric cardiac surgery, the majority of patients with congenital heart disease now survive to adulthood, creating a growing population of adults requiring specialized ACHD follow-up and reintervention."
      whyGermany="German university congenital heart centers operate multidisciplinary teams including pediatric cardiologists, ACHD cardiologists, congenital cardiac surgeons, and interventional cardiologists. Catheter-based interventions for congenital defects — including device closure of septal defects, balloon valvuloplasty, and transcatheter pulmonary valve implantation — are performed alongside surgical correction at centers with hybrid cardiac facilities."
      specialistEvaluation="Specialist evaluation involves a review of echocardiography, cardiac MRI, and prior surgical and interventional history. German congenital heart specialists assess the current anatomical and functional status, determine whether reintervention is indicated, and provide structured recommendations for ongoing surveillance and management within the ACHD framework."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Congenital Heart Disease Treatment in Germany",
        "description": "Specialist pediatric and adult congenital cardiac care at German university heart centers, with structured evaluation for complex congenital heart conditions.",
        "url": "https://www.medicalcaregermany.com/congenital-heart-treatment-germany",
        "about": { "@type": "MedicalCondition", "name": "Congenital Heart Disease" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
    />
    </>
  );
}
