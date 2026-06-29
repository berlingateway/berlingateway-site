import { useEffect } from "react";
import { SymptomPage } from "./_SymptomPageTemplate";

export default function PediatricNeurologyGermany() {
  useEffect(() => {
    document.title = "أعصاب الأطفال في ألمانيا | تشخيص دقيق في برلين";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "أمراض الأعصاب عند الأطفال تحتاج تخصصاً دقيقاً — نوصلك بأفضل أطباء أعصاب الأطفال في المستشفيات الجامعية الألمانية.");
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = "أمراض الأعصاب عند الأطفال تحتاج تخصصاً دقيقاً — نوصلك بأفضل أطباء أعصاب الأطفال في المستشفيات الجامعية الألمانية.";
      document.head.appendChild(n);
    }
  }, []);

  return (
    <SymptomPage
      heroTitle="نوبات تشنج أو تأخر في النمو عند طفلك بدون تفسير واضح؟"
      heroLine2="في هذه الحالات، المشكلة ليست في الأعراض بل في دقة التشخيص العصبي للأطفال."
      triggers={[
        "يعاني طفلك من نوبات تشنج أو صرع لم تُسيطر عليها",
        "تأخر في النمو أو الكلام أو الحركة بدون تشخيص واضح",
        "ضعف عضلي غير مفسر يؤثر على حركة الطفل",
        "اضطرابات عصبية عضلية تحتاج تقييماً متخصصاً",
        "قيل لك بإجراء مزيد من الفحوصات دون خطة علاجية واضحة",
      ]}
      warning="التأخير في تشخيص الاضطرابات العصبية عند الأطفال قد يؤثر على مسار النمو والتطور."
      filterText="هذه الصفحة مخصصة للحالات العصبية المعقدة عند الأطفال غير المحسومة فقط."
    />
  );
}
