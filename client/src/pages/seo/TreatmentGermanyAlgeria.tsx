import { GeoPage } from "./_GeoPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const CANONICAL = "https://medicalcaregermany.com/ar/treatment-germany-algeria";

export default function TreatmentGermanyAlgeria() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/treatment-germany-algeria" />
      <HreflangTags currentPath="/ar/treatment-germany-algeria" />
      <GeoPage
        metaTitle="العلاج في ألمانيا للمرضى الجزائريين | Medical Care Germany"
        metaDescription="نساعد المرضى الجزائريين في الوصول للمستشفيات الجامعية الألمانية — من مستشفى مصطفى باشا وCHU وهران إلى Charité برلين. تواصل معنا اليوم."
        canonicalUrl={CANONICAL}
        breadcrumb={[
          { label: "الرئيسية", href: "/ar" },
          { label: "العلاج في ألمانيا للعرب", href: "/ar/العلاج-في-المانيا-للعرب" },
          { label: "العلاج في ألمانيا للمرضى الجزائريين" },
        ]}
        heroTitle="علاج المخ والأعصاب والأورام في ألمانيا — للمرضى الجزائريين"
        heroSubtitle="مستشفى مصطفى باشا ومستشفى وهران الجامعي من أعرق المستشفيات في الجزائر، لكن بعض الحالات المعقدة — خاصة في جراحة الأعصاب والأورام — تحتاج مساراً إضافياً نوفره من ألمانيا."
        heroTag="Medical Care Germany · منذ 2012"
        whyCards={[
          {
            title: "تقنيات جراحية لا تتوفر في كل مكان",
            body: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — مستشفيات جامعية برلينية تعتمد تقنيات جراحية وبروتوكولات علاجية لا تجدها في كل مكان.",
          },
          {
            title: "مسار مكمل لا بديل",
            body: "نوفر خياراً إضافياً للحالات التي استنفدت الخيارات المتاحة في مستشفى مصطفى باشا أو مستشفى بن باديس الجامعي في قسنطينة أو CHU وهران — نكمل المسار معك في ألمانيا.",
          },
          {
            title: "تواصل جزائري منذ 2012",
            body: "منذ 2012 ومعظم من يصلنا من الجزائر يأتي بتوصية من طبيب جزائري أو من مريض عاد وأخبر عائلته. لم نبنِ هذه الثقة بالإعلانات.",
          },
        ]}
        stepsTitle="من حيث أنت إلى برلين"
        steps={[
          {
            number: "١",
            title: "أرسل ملفك الطبي",
            body: "لا تحتاج ملفاً كاملاً — أرسل ما هو متوفر الآن عبر النموذج أو واتساب.",
          },
          {
            number: "٢",
            title: "مراجعة الملف وتحديد المسار",
            body: "نقرأ ملفك، نفهم حالتك، ونحدد المستشفى والتخصص والتوقيت المناسب.",
          },
          {
            number: "٣",
            title: "تنسيق الموعد مع البروفيسور",
            body: "نتواصل مباشرة مع الفريق الطبي الألماني المتخصص لتحديد موعد التقييم.",
          },
          {
            number: "٤",
            title: "الوصول إلى برلين",
            body: "نساعدك في استكمال ملف الفيزا العلاجية وترتيبات الإقامة والتنقل.",
          },
        ]}
        citiesTitle="نصل إليك أينما كنت في الجزائر"
        cities={[
          { name: "الجزائر العاصمة" },
          { name: "وهران" },
          { name: "قسنطينة" },
          { name: "سطيف" },
          { name: "عنابة" },
          { name: "باتنة" },
        ]}
        citiesNote="سواء كنت في الجزائر العاصمة أو وهران أو قسنطينة — نوصلك لأفضل المستشفيات الجامعية الألمانية."
        faqTitle="أسئلة شائعة"
        faqs={[
          {
            q: "هل يمكن للمرضى الجزائريين العلاج في ألمانيا؟",
            a: "نعم. نتعامل مع المرضى الجزائريين على نفقتهم الخاصة أو عبر التأمين الصحي. نساعد في تنسيق الملف الطبي والمستشفى والفيزا العلاجية.",
          },
          {
            q: "ما التخصصات الأكثر طلباً من الجزائر؟",
            a: "أورام المخ والجهاز العصبي، جراحة العمود الفقري، أورام البروستاتا والثدي، وقسطرة القلب المعقدة — حالات تحتاج دقة تشخيصية وخبرة متراكمة.",
          },
          {
            q: "ما المستشفيات التي تتعاملون معها في ألمانيا؟",
            a: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — من أكبر المستشفيات الجامعية في ألمانيا.",
          },
          {
            q: "هل تتعاملون مع الحالات التي سبق علاجها في الجزائر؟",
            a: "نعم. نوفر مساراً مكملاً للحالات التي استنفدت الخيارات المتاحة في مستشفى مصطفى باشا أو مستشفى سعادنة في سطيف أو مستشفى نفيسة حمود — نكمل المسار معك في ألمانيا.",
          },
          {
            q: "كيف أبدأ؟",
            a: "أرسل ملفك الطبي عبر النموذج أو واتساب. سنرد خلال 24 ساعة بتقييم أولي وخطة واضحة.",
          },
        ]}
        internalLinksTitle="صفحات ذات صلة"
        internalLinks={[
          { href: "/ar/brain-tumor-treatment-germany", label: "علاج أورام المخ في ألمانيا" },
          { href: "/ar/neurology-treatment-germany", label: "علاج أمراض الأعصاب في ألمانيا" },
          { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري في ألمانيا" },
          { href: "/ar/prostate-cancer-treatment-germany", label: "علاج سرطان البروستاتا في ألمانيا" },
          { href: "/ar/breast-cancer-treatment-germany", label: "علاج سرطان الثدي في ألمانيا" },
          { href: "/ar/فيزا-العلاج-في-المانيا", label: "فيزا العلاج في ألمانيا" },
        ]}
        ctaTitle="أرسل ملفك الطبي الآن"
        ctaNote="سنرد خلال 24 ساعة."
        currentCountryPath="/ar/treatment-germany-algeria"
      />
    </>
  );
}
