import { GeoPage } from "./_GeoPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const CANONICAL = "https://medicalcaregermany.com/ar/treatment-germany-saudi";

export default function TreatmentGermanySaudi() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/treatment-germany-saudi" />
      <HreflangTags currentPath="/ar/treatment-germany-saudi" />
      <GeoPage
        metaTitle="العلاج في ألمانيا للمقيمين في السعودية | Medical Care Germany"
        metaDescription="علاج المخ والأعصاب والأورام في ألمانيا للمقيمين في الرياض وجدة والدمام والمدينة المنورة. بروفيسورات ألمان وأكبر المستشفيات الجامعية منذ 2012."
        canonicalUrl={CANONICAL}
        breadcrumb={[
          { label: "الرئيسية", href: "/ar" },
          { label: "العلاج في ألمانيا للعرب", href: "/ar/العلاج-في-المانيا-للعرب" },
          { label: "العلاج في ألمانيا للمقيمين في السعودية" },
        ]}
        heroTitle="علاج المخ والأعصاب والأورام في ألمانيا — للمقيمين في السعودية"
        heroSubtitle="الطب الألماني ليس خياراً من بين خيارات. هو مستوى مختلف — في التشخيص قبل العلاج، وفي البروفيسور الذي أمضى عقوداً في حالة واحدة مثل حالتك."
        heroTag="Medical Care Germany · منذ 2012"
        whyCards={[
          {
            title: "مستشفيات جامعية من الدرجة الأولى",
            body: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — من يصل إليها يفهم الفرق فور دخوله.",
          },
          {
            title: "ثلاثة تخصصات رئيسية",
            body: "أورام المخ والجهاز العصبي، جراحة العمود الفقري، أورام البروستاتا — حالات تحتاج دقة تشخيصية وخبرة متراكمة لا تتوفر في كل مكان.",
          },
          {
            title: "منذ 2012 — ليس بالإعلانات",
            body: "كثير ممن وصلونا جاؤوا بتوصية من طبيب أو من مريض عرف الفرق بنفسه. هذه الثقة بنيناها بالنتائج.",
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
        citiesTitle="نصل إليك أينما كنت في السعودية"
        cities={[
          { name: "الرياض" },
          { name: "جدة" },
          { name: "الدمام" },
          { name: "المدينة المنورة" },
          { name: "مكة المكرمة" },
          { name: "الخبر" },
          { name: "تبوك" },
          { name: "أبها" },
        ]}
        citiesNote="سواء كنت مواطناً أو مقيماً — نفهم وضعك ونتعامل معه."
        faqTitle="أسئلة شائعة"
        faqs={[
          {
            q: "هل يمكن للمقيمين في السعودية العلاج في ألمانيا؟",
            a: "نعم. نتعامل مع المواطنين السعوديين والمقيمين على حد سواء. نساعد في تنسيق الملف الطبي والمستشفى والفيزا العلاجية.",
          },
          {
            q: "ما التخصصات الأكثر طلباً من السعودية؟",
            a: "أورام المخ والجهاز العصبي، جراحة العمود الفقري، وأورام البروستاتا — حالات تحتاج دقة تشخيصية وخبرة متراكمة.",
          },
          {
            q: "ما المستشفيات التي تتعاملون معها في ألمانيا؟",
            a: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — من أكبر المستشفيات الجامعية في ألمانيا.",
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
          { href: "/ar/herniated-disc", label: "علاج الانزلاق الغضروفي في ألمانيا" },
          { href: "/ar/prostate-cancer-treatment-germany", label: "علاج سرطان البروستاتا في ألمانيا" },
          { href: "/ar/العلاج-في-المانيا-للعرب", label: "العلاج في ألمانيا للمرضى العرب" },
          { href: "/ar/فيزا-العلاج-في-المانيا", label: "فيزا العلاج في ألمانيا" },
        ]}
        ctaTitle="أرسل ملفك الطبي الآن"
        ctaNote="سنرد خلال 24 ساعة."
      />
    </>
  );
}
