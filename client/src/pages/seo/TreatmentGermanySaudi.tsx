import { useEffect } from "react";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const CANONICAL = "https://medicalcaregermany.com/ar/treatment-germany-saudi";
const intakeHref = "https://tally.so/r/68MrBP";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي بخصوص العلاج في ألمانيا من السعودية");

export default function TreatmentGermanySaudi() {
  useEffect(() => {
    document.title =
      "العلاج في ألمانيا للمقيمين في السعودية | Medical Care Germany";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content =
      "علاج المخ والأعصاب والأورام في ألمانيا للمقيمين في الرياض وجدة والدمام والمدينة المنورة. بروفيسورات ألمان وأكبر المستشفيات الجامعية منذ 2012.";

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      (canonicalEl as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    (canonicalEl as HTMLLinkElement).href = CANONICAL;

    const ogTags: Record<string, string> = {
      "og:title": "العلاج في ألمانيا للمقيمين في السعودية | Medical Care Germany",
      "og:description":
        "علاج المخ والأعصاب والأورام في ألمانيا للمقيمين في الرياض وجدة والدمام والمدينة المنورة. بروفيسورات ألمان وأكبر المستشفيات الجامعية منذ 2012.",
      "og:url": CANONICAL,
      "og:type": "article",
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        (el as HTMLMetaElement).setAttribute("property", prop);
        document.head.appendChild(el);
      }
      (el as HTMLMetaElement).content = content;
    });

    const schemaId = "treatment-germany-saudi-jsonld";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "هل يمكن للمقيمين في السعودية العلاج في ألمانيا؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم. نتعامل مع المواطنين السعوديين والمقيمين على حد سواء. نساعد في تنسيق الملف الطبي والمستشفى والفيزا العلاجية.",
            },
          },
          {
            "@type": "Question",
            name: "ما التخصصات الأكثر طلباً من السعودية؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "أورام المخ والجهاز العصبي، جراحة العمود الفقري، وأورام البروستاتا — حالات تحتاج دقة تشخيصية وخبرة متراكمة.",
            },
          },
          {
            "@type": "Question",
            name: "ما المستشفيات التي تتعاملون معها في ألمانيا؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Charité Berlin، Vivantes، Unfallkrankenhaus Berlin، Bundeswehr Krankenhaus، Johannes Stift Diakonie، Helios Kliniken — من أكبر المستشفيات الجامعية في ألمانيا.",
            },
          },
        ],
      });
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/treatment-germany-saudi" />
      <HreflangTags currentPath="/ar/treatment-germany-saudi" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany · منذ 2012
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            علاج المخ والأعصاب والأورام في ألمانيا{" "}
            <span className="font-medium">— للمقيمين في السعودية</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            الطب الألماني ليس خياراً من بين خيارات. هو مستوى مختلف.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={intakeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              أرسل ملفك الطبي الآن
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-sm font-medium transition-colors"
              style={{ ...FONT, border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}
            >
              تحدث مع منسق عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — الطب الألماني */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            الطب الألماني ليس خياراً من بين خيارات. هو مستوى مختلف —
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            في التشخيص قبل العلاج، وفي البروفيسور الذي أمضى عقوداً
            في حالة واحدة مثل حالتك.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-6" style={FONT}>
            من يصل إلى{" "}
            <span className="font-medium text-slate-900">Charité Berlin</span> أو{" "}
            <span className="font-medium text-slate-900">Vivantes</span> أو{" "}
            <span className="font-medium text-slate-900">Unfallkrankenhaus Berlin</span> أو{" "}
            <span className="font-medium text-slate-900">Bundeswehr Krankenhaus</span> أو{" "}
            <span className="font-medium text-slate-900">Johannes Stift Diakonie</span> أو{" "}
            <span className="font-medium text-slate-900">Helios Kliniken</span> —
            يفهم الفرق فور دخوله.
          </p>
        </div>
      </section>

      {/* SECTION 2 — التخصصات */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8" style={FONT}>
            نعمل في ثلاثة تخصصات رئيسية
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "أورام المخ والجهاز العصبي",
                desc: "تشخيص دقيق وخطة علاجية متكاملة بإشراف أبرز أطباء الأعصاب في ألمانيا.",
              },
              {
                title: "جراحة العمود الفقري",
                desc: "تقييم شامل للحالات المعقدة وتحديد المسار الجراحي الأنسب.",
              },
              {
                title: "أورام البروستاتا",
                desc: "بروتوكولات علاجية متقدمة وخبرة متراكمة في المستشفيات الجامعية الألمانية.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6">
                <h3 className="text-sm font-medium text-slate-900 mb-3" style={FONT}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed" style={FONT}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-6" style={FONT}>
            حالات تحتاج دقة تشخيصية حقيقية، وخبرة متراكمة
            لا تتوفر في كل مكان.
          </p>
        </div>
      </section>

      {/* SECTION 3 — المدن */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            نصل إليك أينما كنت في السعودية
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "الرياض",
              "جدة",
              "الدمام",
              "المدينة المنورة",
              "مكة المكرمة",
              "الخبر",
              "تبوك",
              "أبها",
            ].map((city, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-50 border border-slate-200 text-sm text-slate-700"
                style={FONT}
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed" style={FONT}>
            سواء كنت مواطناً أو مقيماً — نفهم وضعك ونتعامل معه.
          </p>
        </div>
      </section>

      {/* SECTION 4 — كيف نعمل */}
      <section className="py-16 px-6 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium mb-8" style={FONT}>
            كيف نعمل
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4" style={FONT}>
            لا نعطيك قائمة مستشفيات تبحث فيها وحدك.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-4" style={FONT}>
            نقرأ ملفك الطبي، نفهم حالتك، ونحدد المسار الصحيح —
            المستشفى، التخصص، التوقيت. كل شيء.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-4" style={FONT}>
            كثير ممن وصلونا جاؤوا بتوصية من طبيب أو من مريض
            عرف الفرق بنفسه. هذه الثقة بنيناها منذ 2012 —
            ليس بالإعلانات، بل بالنتائج.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-4" style={FONT}>
            أرسل ملفك الطبي الآن
          </h2>
          <p className="text-slate-500 text-sm mb-8" style={FONT}>
            سنرد خلال 24 ساعة.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={intakeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#0B1C2C] text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              style={FONT}
            >
              أرسل ملفك الطبي
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
              style={FONT}
            >
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-sm font-medium text-slate-700 mb-4" style={FONT}>
            صفحات ذات صلة
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/ar/brain-tumor-treatment-germany", label: "علاج أورام المخ في ألمانيا" },
              { href: "/ar/neurology-treatment-germany", label: "علاج أمراض الأعصاب في ألمانيا" },
              { href: "/ar/herniated-disc", label: "علاج الانزلاق الغضروفي في ألمانيا" },
              { href: "/ar/prostate-cancer-treatment-germany", label: "علاج سرطان البروستاتا في ألمانيا" },
              { href: "/ar/العلاج-في-المانيا-للعرب", label: "العلاج في ألمانيا للمرضى العرب" },
              { href: "/ar/فيزا-العلاج-في-المانيا", label: "فيزا العلاج في ألمانيا" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="px-4 py-2 border border-slate-200 text-xs text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors"
                style={FONT}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
