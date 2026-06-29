import { useEffect } from "react";
import { SymptomPage } from "../symptoms/_SymptomPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function IvfCostGermany() {
  useEffect(() => {
    document.title = "تكلفة أطفال الأنابيب في ألمانيا | أرقام حقيقية 2025";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "تكلفة IVF في ألمانيا تتراوح بين 3000 و6000 يورو للدورة الواحدة — نوفر لك تقديراً دقيقاً لتكاليف علاج العقم في برلين.");
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = "تكلفة IVF في ألمانيا تتراوح بين 3000 و6000 يورو للدورة الواحدة — نوفر لك تقديراً دقيقاً لتكاليف علاج العقم في برلين.";
      document.head.appendChild(n);
    }
  }, []);

  return (
    <>
      <SmartNavLayer currentPath="/ar/ivf-germany" />
      <HreflangTags currentPath="/ar/ivf-germany" />
      <SymptomPage
      heroTitle="تكلفة علاج الخصوبة في ألمانيا — شفافية كاملة قبل القرار"
      heroLine2="لا أرقام ثابتة. تكلفة كل حالة تُحدد بعد التقييم الطبي الكامل."
      triggers={[
        "تريد فهم العوامل التي تؤثر على تكلفة IVF في ألمانيا",
        "تبحث عن مقارنة شفافة بين الخيارات العلاجية",
        "تحتاج إلى تقدير تكلفة واقعي قبل اتخاذ قرار السفر",
        "تريد معرفة ما يشمله البروتوكول الطبي الكامل",
        "تسأل عن تكلفة PGD أو ICSI كإضافة لبروتوكول IVF",
      ]}
      warning="التكلفة الحقيقية لا تُحدد بدون تقييم طبي. العوامل المؤثرة تشمل: عمر المريضة، احتياطي المبيض، نوع البروتوكول، وعدد الدورات المطلوبة. أي رقم دون تقييم هو تقدير غير موثوق."
      filterText="هذه الصفحة مخصصة لمن يريد فهم منطق التكلفة — لا لمن يبحث عن أرخص خيار. الشفافية تبدأ بالتشخيص الصحيح."
    />
    </>
  );
}
