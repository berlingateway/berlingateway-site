import { useEffect } from "react";
import { SymptomPage } from "./_SymptomPageTemplate";

export default function ChronicNeckPain() {
  useEffect(() => {
    document.title = "ألم الرقبة المزمن في ألمانيا | تشخيص وعلاج في برلين";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "ألم الرقبة المزمن الذي لم يُشخَّص بشكل صحيح — نوفر لك رأياً طبياً ثانياً من أفضل متخصصي العمود الفقري في ألمانيا.");
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = "ألم الرقبة المزمن الذي لم يُشخَّص بشكل صحيح — نوفر لك رأياً طبياً ثانياً من أفضل متخصصي العمود الفقري في ألمانيا.";
      document.head.appendChild(n);
    }
  }, []);

  return (
    <SymptomPage
      heroTitle="ألم الرقبة المزمن — متى يصبح الأمر أكثر من مجرد توتر؟"
      heroLine2="نحدد لك المسار الطبي الصحيح بناءً على ملفك — لا على افتراضات."
      triggers={[
        "ألم مستمر في الرقبة لأكثر من 3 أشهر",
        "الألم مصحوب بصداع أو دوخة أو تنميل",
        "العلاجات الفيزيائية لم تحل المشكلة",
        "الألم يزداد عند الحركة أو في الليل",
        "التشخيص غير واضح أو لم يُحدَّد السبب الجذري",
      ]}
      warning="ألم الرقبة المزمن غير المشخص قد يكون مؤشراً لضغط على الأعصاب أو الحبل الشوكي يحتاج تقييماً دقيقاً."
      filterText="هذه الصفحة مخصصة للحالات المزمنة التي لم يُحسم سببها."
    />
  );
}
