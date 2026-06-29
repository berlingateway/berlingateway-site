import { useEffect } from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const CANONICAL = "https://medicalcaregermany.com/ar/numbness-hands-feet-germany";
const intakeHref = "https://tally.so/r/68MrBP";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي بخصوص تنميل في اليدين أو القدمين");

export default function NumbnessTreatmentArabic() {
  useEffect(() => {
    document.title = "تنميل اليدين والقدمين في ألمانيا | تشخيص دقيق في برلين";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content =
      "تنميل مستمر في اليدين أو القدمين قد يكون إشارة لمشكلة عصبية تحتاج تقييماً دقيقاً. تعرّف على متى يصبح خطيراً وكيف يتم التقييم في ألمانيا.";

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      (canonicalEl as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    (canonicalEl as HTMLLinkElement).href = CANONICAL;

    // OG tags
    const ogTags: Record<string, string> = {
      "og:title": "تنميل اليدين والقدمين — متى يصبح إشارة خطر حقيقية؟",
      "og:description":
        "تنميل مستمر في اليدين أو القدمين قد يكون إشارة لمشكلة عصبية تحتاج تقييماً دقيقاً. تعرّف على متى يصبح خطيراً وكيف يتم التقييم في ألمانيا.",
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

    // MedicalCondition Schema JSON-LD
    const schemaId = "numbness-schema-jsonld";
    let existingScript = document.getElementById(schemaId);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "تنميل اليدين والقدمين | تقييم عصبي في ألمانيا",
          description:
            "تنميل مستمر في اليدين أو القدمين قد يكون إشارة لمشكلة عصبية تحتاج تقييماً دقيقاً.",
          url: CANONICAL,
          inLanguage: "ar",
          about: [
            {
              "@type": "MedicalCondition",
              name: "Peripheral Neuropathy",
              alternateName: "اعتلال الأعصاب الطرفية",
              description:
                "تلف في الأعصاب الصغيرة التي تنقل الإحساس، يبدأ في أطراف الأصابع ويمتد تدريجياً.",
              possibleTreatment: {
                "@type": "MedicalTherapy",
                name: "تقييم عصبي متخصص في ألمانيا",
              },
            },
            {
              "@type": "MedicalCondition",
              name: "Numbness",
              alternateName: "تنميل",
              description:
                "إحساس بالخدر أو فقدان الإحساس في اليدين أو القدمين، قد يكون علامة على مشكلة عصبية.",
              possibleTreatment: {
                "@type": "MedicalTherapy",
                name: "فحص EMG وNCS وتقييم عصبي سريري",
              },
            },
          ],
          provider: {
            "@type": "MedicalBusiness",
            name: "Medical Care Germany",
            url: "https://medicalcaregermany.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Berlin",
              addressCountry: "DE",
            },
          },
        },
      ]);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/numbness-hands-feet-germany" />
      <HreflangTags currentPath="/ar/numbness-hands-feet-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* SECTION 1 — HERO داكن */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            تقييم عصبي متخصص · برلين · ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            تنميل اليدين والقدمين —{" "}
            <span className="font-medium">متى يصبح إشارة خطر حقيقية؟</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            تنميل تجاهلته سنوات — لكنه لم يختفِ.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a

              href={intakeHref} target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              ابدأ بمراجعة ملفك الطبي
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

      {/* SECTION 1 BODY — تنميل تجاهلته سنوات */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8" style={FONT}>
            تنميل تجاهلته سنوات — لكنه لم يختفِ
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            كثيرون يصفون نفس الشيء.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            خدر يأتي ويذهب.<br />
            أحياناً في الأصابع فقط.<br />
            أحياناً في القدم كاملة.<br />
            أحياناً يستيقظون عليه في منتصف الليل.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            يُقال لهم: "ضغط عصبي"، أو "من التعب"، أو "جرّب مغنيسيوم".
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            ويمضون.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-2" style={FONT}>
            لكن حين يصبح التنميل يومياً —<br />
            أو يمتد من طرف لآخر —<br />
            أو يصاحبه ضعف في الإمساك بالأشياء —<br />
            أو يبدأ يؤثر على المشي —
          </p>
          <p className="text-slate-900 text-sm font-medium leading-relaxed" style={FONT}>
            يصبح سؤالاً يستحق إجابة حقيقية.
          </p>
        </div>
      </section>

      {/* SECTION 2 — ما الذي يسبب التنميل المزمن؟ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            ما الذي يسبب التنميل المزمن؟
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-6" style={FONT}>
            التنميل المستمر ليس أحساساً عشوائياً.<br />
            هو إشارة من الجهاز العصبي أن شيئاً ما يستحق الانتباه.
          </p>
          <p className="text-slate-700 text-sm font-medium mb-4" style={FONT}>الأسباب الأكثر شيوعاً:</p>
          <div className="space-y-5">
            {[
              {
                title: "اعتلال الأعصاب الطرفية",
                body: "تلف في الأعصاب الصغيرة التي تنقل الإحساس. يبدأ في أطراف الأصابع ويمتد تدريجياً.",
              },
              {
                title: "ضغط على الجذور العصبية",
                body: "في العنق أو أسفل الظهر. يتبع مساراً محدداً في الذراع أو الساق.",
              },
              {
                title: "مشاكل في النخاع الشوكي",
                body: "أكثر ندرة، لكن أكثر خطورة. يحتاج تصويراً دقيقاً للكشف عنه.",
              },
              {
                title: "أسباب استقلابية",
                body: "السكري ونقص B12 من أكثر الأسباب التي تُغفَل. حتى مع فحوصات \"طبيعية\" سابقة.",
              },
              {
                title: "أمراض مناعية",
                body: "مثل التصلب المتعدد أو متلازمة غيلان باريه. نادرة، لكن قابلة للتشخيص إذا بُحث عنها.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <div>
                  <span className="text-slate-900 text-sm font-medium">{item.title}</span>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-700 border-t border-slate-200 pt-6" style={FONT}>
            المشكلة أن كثيراً من هذه الأسباب لا تظهر في الفحوصات العامة.
          </p>
        </div>
      </section>

      {/* SECTION 3 — متى يحتاج التنميل تقييماً عصبياً متخصصاً؟ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            متى يحتاج التنميل تقييماً عصبياً متخصصاً؟
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-6" style={FONT}>
            ليس كل تنميل يحتاج سفراً أو تقييماً معقداً.
          </p>
          <p className="text-slate-700 text-sm font-medium mb-4" style={FONT}>
            لكن هذه العلامات تستدعي موقفاً مختلفاً:
          </p>
          <ul className="space-y-3">
            {[
              "استمر أكثر من ثلاثة أسابيع دون سبب واضح",
              "امتد تدريجياً من منطقة إلى أخرى",
              "صاحبه ضعف في العضلات أو صعوبة في الإمساك",
              "أثّر على توازنك أو طريقة مشيك",
              "أجريت فحوصات سابقة وجاءت \"طبيعية\" — لكن الأعراض لم تتوقف",
              "بدأت تشعر أنك لا تثق بقدمك على الأرض",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-slate-700 text-sm leading-relaxed mb-2" style={FONT}>
              إذا تعرّفت على واحدة أو أكثر من هذه العلامات —<br />
              فأنت لست بحاجة إلى طمأنة.<br />
              أنت بحاجة إلى تقييم.
            </p>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-10 px-6 bg-[#0B1C2C]">
        <div className="max-w-2xl mx-auto text-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            ابدأ بمراجعة ملفك الطبي — مجاناً
          </a>
        </div>
      </section>

      {/* SECTION 4 — لماذا يُجاهَل التنميل سنوات؟ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            لماذا يُجاهَل التنميل سنوات؟
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-6" style={FONT}>
            لأن الفحص العام لا يكفي.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-6" style={FONT}>
            التنميل لا يظهر في تحليل الدم الروتيني.<br />
            ولا في أشعة X العادية.<br />
            وكثيراً ما لا يظهر حتى في MRI — إذا لم يُطلب بالبروتوكول الصحيح.
          </p>
          <p className="text-slate-700 text-sm font-medium mb-4" style={FONT}>التشخيص الدقيق يحتاج:</p>
          <ul className="space-y-3">
            {[
              "طبيباً يسمع وصف الأعراض بالكامل",
              "فحصاً عصبياً سريرياً منهجياً",
              "EMG وNCS لقياس سرعة التوصيل العصبي",
              "تصويراً موجّهاً بناءً على نمط الأعراض",
              "خبرة في قراءة الأنماط — لا الأرقام فقط",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate-700 border-t border-slate-200 pt-6" style={FONT}>
            هذا النوع من التقييم نادر في العيادات العامة.<br />
            وهذا بالضبط ما يوفره التقييم المتخصص في ألمانيا.
          </p>
        </div>
      </section>

      {/* SECTION 5 — كيف يتم التقييم العصبي في ألمانيا؟ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            كيف يتم التقييم العصبي في ألمانيا؟
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-8" style={FONT}>
            التقييم لا يبدأ في برلين.<br />
            يبدأ بمراجعة ملفك قبل أي سفر.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                n: "١",
                title: "مراجعة التاريخ المرضي",
                body: "نحدد ما تم، وما لم يتم، وما يجب البحث عنه.",
              },
              {
                n: "٢",
                title: "تقييم عصبي سريري متخصص",
                body: "فحص منهجي للإحساس، والقوة العضلية، والردود العصبية.",
              },
              {
                n: "٣",
                title: "EMG وNCS إذا لزم",
                body: "لقياس سرعة التوصيل العصبي وتحديد موقع المشكلة.",
              },
              {
                n: "٤",
                title: "تصوير موجّه",
                body: "MRI عمود فقري أو دماغ — بناءً على نمط الأعراض وليس بشكل روتيني.",
              },
              {
                n: "٥",
                title: "رأي متخصص في أمراض الأعصاب",
                body: "من مراكز جامعية أو مستشفيات متخصصة في برلين.",
              },
            ].map((step, i) => (
              <div key={i} className="bg-white border border-slate-100 p-5">
                <p className="text-2xl font-light text-slate-300 mb-2" style={FONT}>{step.n}</p>
                <p className="text-sm font-medium text-slate-900 mb-1" style={FONT}>{step.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed" style={FONT}>{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-[#0B1C2C] border-t border-slate-200 pt-6" style={FONT}>
            النتيجة: إجابة واضحة — لماذا يحدث هذا، وما الخطوة التالية.
          </p>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>
            صفحات ذات صلة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/ar/neurology-treatment-germany",
                label: "الأعصاب — تقييم عصبي متخصص في ألمانيا",
              },
              {
                href: "/ar/dizziness-long-term",
                label: "الدوخة المزمنة — متى تحتاج تقييماً عصبياً؟",
              },
              {
                href: "/ar/neck-pain-dizziness-germany",
                label: "ألم الرقبة مع دوخة — التقييم العنقي في ألمانيا",
              },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block px-4 py-3 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA نهائي داكن */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>
            هل تنميلك يستحق تقييماً حقيقياً؟
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            إذا كنت تعيش مع تنميل لم تجد له تفسيراً —<br />
            أو أجريت فحوصات وقيل لك إنها طبيعية —<br />
            أو تشعر أن الأعراض تتقدم ببطء —<br />
            <br />
            يمكننا مراجعة ملفك أولاً.<br />
            بدون التزام. بدون قرار مسبق.<br />
            <br />
            نحدد معك: هل حالتك تستدعي تقييماً في ألمانيا — أم لا.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a

              href={intakeHref} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              ابدأ بمراجعة ملفك الطبي
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-medium transition-colors"
              style={{ ...FONT, border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}
            >
              تحدث مع منسق عبر واتساب
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500" style={FONT}>
            نرد خلال 24 ساعة.
          </p>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
