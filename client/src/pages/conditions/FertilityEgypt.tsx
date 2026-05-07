import { SymptomPage } from "../symptoms/_SymptomPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


export default function FertilityEgypt() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/fertility-treatment-germany" />
      <HreflangTags currentPath="/ar/fertility-treatment-germany" />
      <SymptomPage
      heroTitle="علاج الخصوبة في ألمانيا للمرضى من مصر — مراجعة حقيقية قبل تكرار المحاولة"
      heroLine2="إذا لم تنجح المحاولات السابقة، فالسبب يستحق التحقيق قبل البدء من جديد."
      triggers={[
        "فشلت دورة IVF أو ICSI واحدة أو أكثر في مصر دون تفسير واضح",
        "تلقيت تشخيصات متضاربة من أكثر من مركز",
        "تريد مراجعة بروتوكولك العلاجي السابق قبل تكرار التجربة",
        "تبحث عن تقنيات PGD أو IMSI غير متاحة بشكل كافٍ في مصر",
        "تريد خطة علاجية واضحة بتوقعات واقعية — لا وعوداً مبالغاً فيها",
      ]}
      warning="نسب النجاح تختلف من حالة لأخرى وتعتمد على عوامل متعددة: عمر المرأة، احتياطي المبيض، جودة السائل المنوي، وتاريخ المحاولات السابقة. لا يمكن تقدير فرص النجاح دون مراجعة الملف الطبي الكامل. أي رقم دون تقييم هو وعد غير مبني على أساس طبي."
      filterText="هذه الصفحة مخصصة للمرضى من مصر الذين يدفعون بشكل خاص ويبحثون عن تقييم طبي جاد — لا عن أرخص خيار أو أسرع حل."
    />
    </>
  );
}
