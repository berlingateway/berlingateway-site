import { GeoPage } from "./_GeoPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const CANONICAL = "https://medicalcaregermany.com/ar/treatment-germany-yemen";

export default function TreatmentGermanyYemen() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/treatment-germany-yemen" />
      <HreflangTags currentPath="/ar/treatment-germany-yemen" />
      <GeoPage
        metaTitle="العلاج في ألمانيا للمرضى اليمنيين | Medical Care Germany"
        metaDescription="تنسيق طبي متخصص للمرضى اليمنيين في ألمانيا — نتعاون مع رحلة علاجك ونوفر مساراً إضافياً للحالات التي تحتاج تخصصاً دقيقاً غير متاح محلياً. مواعيد سريعة في المستشفيات الجامعية وخدمة عربية من برلين."
        canonicalUrl={CANONICAL}
        breadcrumb={[
          { label: "الرئيسية", href: "/ar" },
          { label: "العلاج في ألمانيا للعرب", href: "/ar/العلاج-في-المانيا-للعرب" },
          { label: "العلاج في ألمانيا للمرضى اليمنيين" },
        ]}
        heroTitle="علاج المخ والأعصاب والأورام في ألمانيا — للمرضى اليمنيين"
        heroSubtitle="نتعاون مع رحلة العلاج التي بدأها مرضانا في المستشفى السعودي الألماني بصنعاء أو مستشفى الثورة بتعز — ونوفر مساراً إضافياً للحالات التي تحتاج تخصصاً دقيقاً غير متاح محلياً."
        heroTag="Medical Care Germany · منذ 2012"
        whyCards={[
          {
            title: "شبكة مستشفيات جامعية برلينية",
            body: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — شبكة متكاملة من أرقى المستشفيات الجامعية الألمانية للحالات المعقدة.",
          },
          {
            title: "نكمل المسار معك",
            body: "سواء بدأت مسارك في مستشفى ابن سينا في صنعاء أو مستشفى اليمن الدولي في تعز — نوفر خياراً إضافياً للحالات التي تحتاج تخصصاً أعمق.",
          },
          {
            title: "ثقة مبنية على التوصيات",
            body: "منذ 2012 ومعظم من يصلنا يأتي بتوصية من طبيب يمني أو من مريض جرّب الفرق بنفسه — لا بإعلانات.",
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
        citiesTitle="نصل إليك أينما كنت في اليمن"
        cities={[
          { name: "صنعاء" },
          { name: "تعز" },
          { name: "عدن" },
          { name: "الحديدة" },
          { name: "إب" },
          { name: "المكلا" },
        ]}
        citiesNote="سواء كنت في صنعاء أو تعز أو عدن — نوصلك لأفضل المستشفيات الجامعية الألمانية."
        faqTitle="أسئلة شائعة"
        faqs={[
          {
            q: "هل يمكن للمرضى اليمنيين العلاج في ألمانيا؟",
            a: "نعم. نتعامل مع المرضى اليمنيين على نفقتهم الخاصة أو عبر الجهات الداعمة. نساعد في تنسيق الملف الطبي والمستشفى والفيزا العلاجية.",
          },
          {
            q: "ما التخصصات الأكثر طلباً من اليمن؟",
            a: "أورام المخ والجهاز العصبي، جراحة العمود الفقري، أورام البروستاتا والثدي، وحالات التأهيل العصبي — حالات تحتاج دقة تشخيصية وخبرة متراكمة.",
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
        currentCountryPath="/ar/treatment-germany-yemen"
      />
    </>
  );
}
