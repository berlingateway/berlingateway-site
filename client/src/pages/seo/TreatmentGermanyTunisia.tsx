import { GeoPage } from "./_GeoPageTemplate";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const CANONICAL = "https://medicalcaregermany.com/ar/treatment-germany-tunisia";

export default function TreatmentGermanyTunisia() {
  return (
    <>
      <SmartNavLayer currentPath="/ar/treatment-germany-tunisia" />
      <HreflangTags currentPath="/ar/treatment-germany-tunisia" />
      <GeoPage
        metaTitle="العلاج في ألمانيا للمرضى التونسيين | Medical Care Germany"
        metaDescription="تنسيق طبي متخصص للمرضى التونسيين في ألمانيا — مواعيد سريعة في المستشفيات الجامعية وخدمة عربية متكاملة من برلين. نوفر مساراً مكملاً للحالات التي تحتاج تقنيات أكثر تقدماً."
        canonicalUrl={CANONICAL}
        breadcrumb={[
          { label: "الرئيسية", href: "/ar" },
          { label: "العلاج في ألمانيا للعرب", href: "/ar/العلاج-في-المانيا-للعرب" },
          { label: "العلاج في ألمانيا للمرضى التونسيين" },
        ]}
        heroTitle="علاج المخ والأعصاب والأورام في ألمانيا — للمرضى التونسيين"
        heroSubtitle="تونس تمتلك بنية طبية متطورة — من مستشفى شارل نيكول ومعهد الأعصاب إلى مصحة التوفيق وحنبعل. لكن بعض الحالات المعقدة تحتاج مساراً إضافياً نوفره في ألمانيا — بمستشفيات جامعية وبروتوكولات علاجية متخصصة."
        heroTag="Medical Care Germany · منذ 2012"
        whyCards={[
          {
            title: "مستشفيات جامعية من الدرجة الأولى",
            body: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — من يصل إليها يفهم الفرق فور دخوله.",
          },
          {
            title: "مسار مكمل لا بديل",
            body: "نتعاون مع المسار العلاجي الذي بدأته في تونس — سواء في مستشفى سهلول أو مستشفى الهادي شاكر أو أي من المصحات الخاصة. نكمل من حيث توقف.",
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
        citiesTitle="نصل إليك أينما كنت في تونس"
        cities={[
          { name: "تونس العاصمة" },
          { name: "سوسة" },
          { name: "صفاقس" },
          { name: "بنزرت" },
          { name: "قابس" },
          { name: "القيروان" },
        ]}
        citiesNote="سواء كنت في تونس العاصمة أو في المدن الداخلية — نوصلك لأفضل المستشفيات الجامعية الألمانية."
        faqTitle="أسئلة شائعة"
        faqs={[
          {
            q: "هل يمكن للمرضى التونسيين العلاج في ألمانيا؟",
            a: "نعم. نتعامل مع المرضى التونسيين على نفقتهم الخاصة أو عبر التأمين الصحي. نساعد في تنسيق الملف الطبي والمستشفى والفيزا العلاجية.",
          },
          {
            q: "ما التخصصات الأكثر طلباً من تونس؟",
            a: "أورام المخ والجهاز العصبي، جراحة العمود الفقري، أورام البروستاتا والثدي — حالات تحتاج دقة تشخيصية وخبرة متراكمة.",
          },
          {
            q: "هل تتعاملون مع الحالات التي سبق علاجها في المصحات التونسية؟",
            a: "نعم. كثير من مرضانا وصلونا بعد تجربة علاجية في مصحة التوفيق أو حنبعل أو مصحة النصر. نوفر مساراً مكملاً للحالات التي تحتاج بروتوكولات أو تقنيات أكثر تقدماً.",
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
        currentCountryPath="/ar/treatment-germany-tunisia"
      />
    </>
  );
}
