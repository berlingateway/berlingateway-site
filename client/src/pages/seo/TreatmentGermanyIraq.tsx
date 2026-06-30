import { GeoPage } from "./_GeoPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const CANONICAL = "https://medicalcaregermany.com/ar/treatment-germany-iraq";

export default function TreatmentGermanyIraq() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/treatment-germany-iraq" />
      <HreflangTags currentPath="/ar/treatment-germany-iraq" />
      <GeoPage
        metaTitle="العلاج في ألمانيا للمرضى العراقيين | Medical Care Germany"
        metaDescription="تنسيق طبي متخصص للمرضى العراقيين في ألمانيا — مواعيد سريعة في المستشفيات الجامعية وخدمة عربية متكاملة من برلين. نوفر مساراً مباشراً لأقسام جراحة الأعصاب والأورام الجامعية في ألمانيا."
        canonicalUrl={CANONICAL}
        breadcrumb={[
          { label: "الرئيسية", href: "/ar" },
          { label: "العلاج في ألمانيا للعرب", href: "/ar/العلاج-في-المانيا-للعرب" },
          { label: "العلاج في ألمانيا للمرضى العراقيين" },
        ]}
        heroTitle="علاج المخ والأعصاب والأورام في ألمانيا — للمرضى العراقيين"
        heroSubtitle="حالات جراحة الأعصاب المعقدة التي تُحال عادة إلى مستشفى جراحة الجملة العصبية في بغداد أو مستشفى ابن النفيس — نوفر لها أيضاً مساراً مباشراً لأقسام جراحة الأعصاب الجامعية في ألمانيا."
        heroTag="Medical Care Germany · منذ 2012"
        whyCards={[
          {
            title: "مستشفيات جامعية ألمانية للحالات المعقدة",
            body: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — مراكز جامعية ألمانية تتخصص في جراحة الأعصاب والأورام والحالات التي تحتاج مستوى أعلى.",
          },
          {
            title: "خبرة في الحالات المعقدة",
            body: "نتخصص في الحالات التي تحتاج تقييماً دقيقاً — من أورام المخ وجراحة الأعصاب إلى أورام البروستاتا والثدي والعمود الفقري.",
          },
          {
            title: "سنوات من الخبرة مع المريض العراقي",
            body: "منذ 2012 ومعظم من يصلنا من العراق يأتي بتوصية من طبيب عراقي أو من مريض جرّب وأخبر عائلته — لا بإعلانات.",
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
        citiesTitle="نصل إليك أينما كنت في العراق"
        cities={[
          { name: "بغداد" },
          { name: "البصرة" },
          { name: "النجف" },
          { name: "أربيل" },
          { name: "الموصل" },
          { name: "كربلاء" },
        ]}
        citiesNote="سواء كنت في بغداد أو البصرة أو أربيل — نوصلك لأفضل المستشفيات الجامعية الألمانية."
        faqTitle="أسئلة شائعة"
        faqs={[
          {
            q: "هل يمكن للمرضى العراقيين العلاج في ألمانيا؟",
            a: "نعم. نتعامل مع المرضى العراقيين على نفقتهم الخاصة أو عبر التأمين الصحي. نساعد في تنسيق الملف الطبي والمستشفى والفيزا العلاجية.",
          },
          {
            q: "ما التخصصات الأكثر طلباً من العراق؟",
            a: "جراحة الأعصاب وأورام المخ، أورام البروستاتا والثدي، جراحة القلب والأوعية الدموية — حالات تحتاج دقة تشخيصية وخبرة متراكمة.",
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
          { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري في ألمانيا" },
          { href: "/ar/prostate-cancer-treatment-germany", label: "علاج سرطان البروستاتا في ألمانيا" },
          { href: "/ar/advanced-rehabilitation-germany", label: "التأهيل المتقدم في ألمانيا" },
          { href: "/ar/فيزا-العلاج-في-المانيا", label: "فيزا العلاج في ألمانيا" },
        ]}
        ctaTitle="أرسل ملفك الطبي الآن"
        ctaNote="سنرد خلال 24 ساعة."
        currentCountryPath="/ar/treatment-germany-iraq"
      />
    </>
  );
}
