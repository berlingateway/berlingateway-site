import { SymptomPage } from "../symptoms/_SymptomPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function FertilityIraq() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/fertility-treatment-germany" />
      <HreflangTags currentPath="/ar/fertility-treatment-germany" />
      <SymptomPage
      heroTitle="تشخيص واضح. خطة محددة. لا غموض."
      heroLine2="للمرضى العراقيين — علاج تأخر الإنجاب في ألمانيا بخارطة طريق طبية واضحة"
      triggers={[
        "تأخر الإنجاب لأكثر من سنة دون سبب محدد",
        "تشخيصات سابقة متضاربة أو غير مقنعة",
        "رغبة في فهم السبب الحقيقي قبل البدء بأي علاج",
        "قلق من الوقت المهدر في علاجات غير مناسبة",
        "الحاجة إلى خطة علاجية بجدول زمني واقعي وتكلفة شفافة",
      ]}
      warning="المشكلة الأكثر شيوعاً هي التشخيص الناقص أو المتأخر، مما يؤدي إلى علاجات غير مناسبة. في ألمانيا، تبدأ الإجابات من اليوم الأول — تشخيص شامل، تقرير مفصل، وخطة علاجية بجدول زمني واقعي."
      filterText="هذه الصفحة مخصصة للحالات التي تبحث عن وضوح كامل: السبب، الخيارات، التوقعات، والتكاليف — قبل اتخاذ أي قرار."
    />
    </>
  );
}
