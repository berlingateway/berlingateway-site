import MedicalConditionPage from "@/components/MedicalConditionPage";

export default function HerniatedDisc() {
  return (
    <MedicalConditionPage
      metaTitle="Herniated Disc Treatment in Germany | Microdiscectomy & Spine Surgery"
      metaDescription="Structured evaluation and surgical treatment of herniated disc at German spine centers. Microdiscectomy, endoscopic surgery, and cervical disc replacement."
      canonicalPath="/herniated-disc-germany"
      headline="Herniated Disc Treatment in Germany"
      subtitle="Clear diagnosis. Structured decision. Focused treatment."
      introduction="Lower back pain radiating to the leg, numbness, or foot weakness may indicate a herniated disc compressing a nerve root. In Germany, each case is evaluated individually based on MRI findings and clinical examination before any treatment decision is made."
      aboutCondition="A herniated disc occurs when the inner disc material pushes through the outer ring and presses on a spinal nerve. It most commonly affects the lumbar spine (L4/L5, L5/S1) and the cervical spine (C5/C6, C6/C7). Most cases resolve with conservative management. Surgery is considered only when neurological deficits progress or symptoms persist despite adequate non-operative treatment."
      symptoms={[
        "Radiating leg pain (sciatica) following the path of the compressed nerve root",
        "Numbness or tingling in the leg, foot, or toes",
        "Muscle weakness — foot drop or difficulty with ankle movement",
        "Neck or arm pain with sensory changes in the hand or fingers",
        "Bladder or bowel dysfunction — requires urgent evaluation"
      ]}
      causes="Disc herniation typically results from age-related degeneration combined with mechanical loading. Acute episodes may be triggered by lifting, bending, or rotational strain on a disc that has already weakened. Prolonged sitting, smoking, and obesity are contributing factors."
      diagnosticProcess="MRI is the primary diagnostic tool, providing clear visualization of disc morphology and nerve compression. Neurological examination confirms the affected level. EMG may be used when imaging and clinical findings are inconsistent. CT myelography is reserved for cases where MRI is not available or insufficient."
      treatmentOptions="Most herniated discs are managed conservatively with physiotherapy, pain management, and nerve root injections. Surgical decompression is indicated for persistent radiculopathy beyond six to twelve weeks, progressive motor weakness, or cauda equina syndrome. The correct indication matters more than the surgical technique."
      treatmentList={[
        "Structured physiotherapy and nerve root mobilisation",
        "Image-guided epidural steroid injection or nerve root block",
        "Microdiscectomy — standard posterior decompression for lumbar herniation",
        "Endoscopic disc surgery — minimally invasive percutaneous approach",
        "Anterior cervical discectomy and fusion (ACDF) for cervical herniation",
        "Cervical artificial disc replacement (ADR) — motion-preserving alternative"
      ]}
      whyGermany="German spine centers evaluate each case within a multidisciplinary framework combining neurosurgery and orthopedic spine surgery. Intraoperative neuromonitoring and neuronavigation are standard in complex procedures. The full range of surgical techniques is available, allowing the most appropriate approach to be selected for each patient rather than applying a single institutional default."
      specialistEvaluation="Evaluation begins with a structured review of MRI imaging, neurological findings, and prior treatment history. The spine specialist assesses whether the surgical indication is correct, which technique is most appropriate, and whether any additional investigations are needed. A written report outlines the recommended pathway."
      patientPathway={[
        "Submit MRI imaging, clinical history, and prior treatment records",
        "Case reviewed by the spine surgery subspecialty team",
        "Structured evaluation report prepared with treatment recommendation",
        "Case directed to the appropriate university hospital spine unit"
      ]}
      relatedLinks={[
        { href: "/spine-surgery-germany", label: "Spine Surgery in Germany" },
        { href: "/spinal-stenosis-germany", label: "Spinal Stenosis Treatment" },
        { href: "/scoliosis-treatment-germany", label: "Scoliosis Treatment" },
        { href: "/orthopedic-treatment-germany", label: "Orthopedic Treatment" },
        { href: "/second-opinion-germany", label: "Second Medical Opinion" }
      ]}
      structuredData={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Herniated Disc Treatment in Germany",
        "description": "Structured evaluation and surgical treatment of herniated disc at German spine centers, including microdiscectomy, endoscopic surgery, and cervical disc replacement.",
        "url": "https://www.medicalcaregermany.com/herniated-disc-germany",
        "about": { "@type": "MedicalCondition", "name": "Intervertebral Disc Herniation" },
        "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://www.medicalcaregermany.com" }
      })}
      arabicSummary="ألم في أسفل الظهر يمتد إلى الساق، أو تنميل وضعف في القدم — قد يشير ذلك إلى ضغط على عصب بسبب انزلاق غضروفي. في ألمانيا، تُقيَّم كل حالة بشكل فردي بناءً على صور الرنين المغناطيسي والفحص السريري. معظم الحالات تُعالج بدون جراحة. إذا استمرت الأعراض أو ظهر ضعف عصبي، يُلجأ إلى تقنيات دقيقة مثل الجراحة الميكروسكوبية أو المنظار. أرسل ملفك الطبي للمراجعة السريرية."
    />
  );
}
