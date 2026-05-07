import { SymptomPage } from "../symptoms/_SymptomPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function FertilitySaudi() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/fertility-treatment-germany" />
      <HreflangTags currentPath="/ar/fertility-treatment-germany" />
      <SymptomPage
      heroTitle="دقة التشخيص الجيني + خصوصية تامة"
      heroLine2="للمرضى السعوديين — علاج تأخر الإنجاب في ألمانيا بأعلى معايير الدقة والسرية"
      triggers={[
        "الرغبة في تقنية PGD لاختيار الجنين الأسلم وراثياً",
        "الحاجة إلى سرية تامة في التعامل الطبي",
        "البحث عن دقة تشخيصية تتجاوز ما هو متاح محلياً",
        "حالات أمراض وراثية في العائلة تستدعي الفحص المبكر",
        "إجهاض متكرر أو فشل دورات IVF متعددة",
      ]}
      warning="الخصوصية مكفولة بموجب قانون حماية البيانات الأوروبي (GDPR) — أحد أصرم الأنظمة في العالم. لا يُشارك أي ملف طبي دون موافقة صريحة من المريض."
      filterText="هذه الصفحة مخصصة للحالات التي تتطلب دقة تشخيصية متقدمة وسرية مطلقة في التعامل الطبي."
    />
    </>
  );
}
