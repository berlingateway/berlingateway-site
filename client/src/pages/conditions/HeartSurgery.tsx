import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function HeartSurgery() {
  return (
    <>
      <SmartNavLayer currentPath="/heart-surgery-germany" />
      <HreflangTags currentPath="/heart-surgery-germany" />
      <MedicalConditionPage
      metaTitle="Heart Surgery in Germany"
      metaDescription="Open-heart and minimally invasive cardiac surgery at German university cardiac centers, including coronary bypass, valve repair, and aortic surgery."
      canonicalPath="/heart-surgery-germany"
      headline="Heart Surgery in Germany"
      subtitle="Open-heart and minimally invasive cardiac surgery at German university cardiac centers."
      introduction="Cardiac surgery in Germany is performed within university hospital cardiac surgical departments that operate in close collaboration with cardiology, cardiac anesthesia, and cardiac intensive care. German cardiac surgical centers manage the full spectrum of cardiac surgical conditions, from coronary artery bypass grafting and valve surgery to complex aortic procedures and reoperations."
      aboutCondition="Cardiac surgical conditions include coronary artery disease requiring bypass grafting, valvular heart disease requiring repair or replacement, diseases of the thoracic aorta including aneurysm and dissection, congenital heart defects in adults, and cardiac tumors. The appropriate surgical approach — conventional sternotomy, minimally invasive, or hybrid — depends on the specific pathology, the patient's anatomy, and the surgical team's expertise."
      whyGermany="German cardiac surgical centers perform high volumes of coronary bypass surgery, valve repair and replacement, and aortic surgery, with outcomes monitored through the German Society for Thoracic and Cardiovascular Surgery quality registry. Minimally invasive cardiac surgery including mini-thoracotomy approaches for mitral valve repair and aortic valve replacement is offered at specialized centers, reducing surgical trauma and recovery time."
      specialistEvaluation="Specialist evaluation involves a review of cardiac catheterization data, echocardiography, CT aortic imaging where relevant, and functional status. German cardiac surgeons assess the surgical risk profile, determine the most appropriate surgical technique, and evaluate whether a heart team discussion involving cardiology and cardiac surgery is required before a treatment decision is finalized."
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Heart Surgery in Germany",
        "description": "Open-heart and minimally invasive cardiac surgery at German university cardiac centers, including coronary bypass, valve repair, and aortic surgery.",
        "url": "https://medicalcaregermany.com/heart-surgery-germany",
        "about": { "@type": "MedicalCondition", "name": "Cardiac Surgical Condition" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com" },
        "image": "https://medicalcaregermany.com/og-image.jpg"
      })}
      arabicSummary="جراحة القلب تشمل طيفاً واسعاً من التدخلات، منها عمليات القسطرة التاجية، وإصلاح أو استبدال الصمامات، وجراحة الشريان الأبهر، وعيوب القلب الخلقية. تعتمد طريقة التدخل على طبيعة الحالة وتشريح المريض وخبرة الفريق الجراحي. تتميز مراكز جراحة القلب في ألمانيا بأعداد جراحية عالية ونتائج خاضعة لرقابة جودة مستمرة. يبدأ التقييم بمراجعة نتائج القسطرة والموجات فوق الصوتية وصور الأشعة لتحديد أنسب أسلوب جراحي."
    />
    </>
  );
}
