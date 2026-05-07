import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function SpineSurgery() {
  return (
    <>
      <SmartNavLayer currentPath="/spine-surgery-germany" />
      <HreflangTags currentPath="/spine-surgery-germany" />
      <MedicalConditionPage
      metaTitle="Spine Surgery in Germany"
      metaDescription="Advanced spinal surgical procedures at accredited German university hospitals, from minimally invasive techniques to complex spinal reconstruction."
      canonicalPath="/spine-surgery-germany"
      headline="Spine Surgery in Germany"
      subtitle="Advanced spinal surgical procedures at accredited German university hospitals."
      introduction="Spinal surgery encompasses a wide range of procedures addressing degenerative, traumatic, oncological, and deformity-related conditions of the vertebral column. German university spine centers integrate orthopedic surgery, neurosurgery, and neuroradiology to provide comprehensive spinal care within a structured multidisciplinary framework."
      aboutCondition="Spinal conditions requiring surgical intervention include disc herniation, spinal stenosis, spondylolisthesis, spinal tumors, vertebral fractures, and complex deformities such as scoliosis and kyphosis. The appropriate surgical approach depends on the specific pathology, its location within the spine, the patient's neurological status, and prior treatment history."
      whyGermany="German spine centers are equipped with intraoperative CT and fluoroscopy, neuronavigation systems, and neurophysiological monitoring that allow surgeons to perform complex procedures with a high degree of precision. Minimally invasive techniques are applied where appropriate to reduce surgical trauma and accelerate recovery, while complex reconstructive procedures are performed by experienced spinal surgical teams."
      specialistEvaluation="Specialist evaluation involves a structured review of spinal imaging including MRI, CT, and standing radiographs, as well as neurological assessment and functional status. German spine surgeons determine whether conservative management has been adequately trialed and identify the most appropriate surgical strategy based on the individual anatomical and clinical findings."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Spine Surgery in Germany",
        "description": "Advanced spinal surgical procedures at accredited German university hospitals, from minimally invasive techniques to complex spinal reconstruction.",
        "url": "https://www.medicalcaregermany.com/spine-surgery-germany",
        "about": { "@type": "MedicalCondition", "name": "Spinal Disorder" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
      arabicSummary="جراحة العمود الفقري تشمل طيفاً واسعاً من الحالات، منها انزلاق الغضاريف، وتضيق القناة الشوكية، والكسور الفقرية، والتشوهات الهيكلية. قد يعاني المريض من آلام في الظهر أو الرقبة، أو خدر وتنمل يمتد إلى الأطراف. تمتلك مراكز العمود الفقري في ألمانيا تقنيات جراحية متطورة تتيح إجراء العمليات بدقة عالية وبأقل تدخل ممكن. يبدأ التقييم بمراجعة صور الأشعة والتقارير الطبية المتوفرة لتحديد أنسب خيار جراحي."
      relatedLinks={[
        { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
      ]}
      sectionLabels={{ relatedLinks: "خدماتنا المتميزة" }}
    />
    </>
  );
}
