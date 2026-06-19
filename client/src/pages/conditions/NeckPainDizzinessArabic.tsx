import { useEffect } from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const CANONICAL = "https://medicalcaregermany.com/ar/neck-pain-dizziness-germany";
const intakeHref = "https://tally.so/r/68MrBP";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي بخصوص ألم الرقبة مع دوخة");

export default function NeckPainDizzinessArabic() {
  useEffect(() => {
    document.title = "كيف اعرف أن الدوخة بسبب الرقبة؟ | تقييم عصبي وعلاج في ألمانيا";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content =
      "أعراض الدوخة من الرقبة تشمل عدم الاتزان والدوار عند تحريك الرأس. تعرف على التشخيص والعلاج في مستشفيات ألمانيا الجامعية.";

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
      "og:title": "ألم الرقبة مع دوخة — عصبي أم وعائي؟",
      "og:description":
        "ألم الرقبة المصحوب بدوخة قد يكون عصبياً أو وعائياً أو عضلياً. تعرّف على الفرق، ومتى يصبح خطيراً، وكيف يتم التقييم الدقيق في ألمانيا.",
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
    const schemaId = "neck-pain-dizziness-schema-jsonld";
    let existingScript = document.getElementById(schemaId);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "ألم الرقبة مع دوخة | تقييم عصبي ووعائي في ألمانيا",
          description:
            "ألم الرقبة المصحوب بدوخة قد يكون عصبياً أو وعائياً أو عضلياً. تعرّف على الفرق، ومتى يصبح خطيراً، وكيف يتم التقييم الدقيق في ألمانيا.",
          url: CANONICAL,
          inLanguage: "ar",
          about: [
            {
              "@type": "MedicalCondition",
              name: "Cervicogenic Dizziness",
              alternateName: "الدوخة العنقية",
              description:
                "دوخة ناتجة عن المستقبلات الحسية في مفاصل الرقبة، تزداد عند تحريك الرأس أو تثبيته فترة طويلة.",
              possibleTreatment: {
                "@type": "MedicalTherapy",
                name: "تقييم عصبي وعائي متخصص في ألمانيا",
              },
            },
            {
              "@type": "MedicalCondition",
              name: "Cervical Radiculopathy",
              alternateName: "اعتلال الجذور العصبية العنقية",
              description:
                "ضغط على الجذور العصبية في الرقبة يسبب ألماً ينتشر إلى الكتف أو الذراع مصحوباً بتنميل أو ضعف.",
              possibleTreatment: {
                "@type": "MedicalTherapy",
                name: "MRI عنق بروتوكول عصبي وعائي وتقييم متخصص",
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

    // FAQPage JSON-LD
    const faqSchemaId = "neck-pain-dizziness-faq-jsonld";
    let existingFaqScript = document.getElementById(faqSchemaId);
    if (!existingFaqScript) {
      const faqScript = document.createElement("script");
      faqScript.id = faqSchemaId;
      faqScript.type = "application/ld+json";
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "كيف أعرف أن الدوخة بسبب الرقبة؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "الدوخة الناتجة عن الرقبة تتميز بارتباطها بتحريك الرأس أو تثبيته فترة طويلة، وتزداد عند النظر لأعلى أو الالتفات. إذا صاحبت الدوخة ألم في الرقبة أو تنميل في الذراع، فهذا مؤشر قوي على منشأ عنقي.",
            },
          },
          {
            "@type": "Question",
            name: "هل ألم الرقبة يسبب الدوخة؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم. الدوخة العنقية من الأسباب الشائعة التي تُغفَل كثيراً. المستقبلات الحسية في مفاصل الرقبة تؤثر مباشرة على نظام التوازن.",
            },
          },
          {
            "@type": "Question",
            name: "هل شرايين الرقبة تسبب دوخة؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ضغط على الشريان الفقري الذي يمر عبر فقرات الرقبة قد يسبب دوخة عند دوران الرأس. هذه الحالة تحتاج تقييماً وعائياً متخصصاً.",
            },
          },
          {
            "@type": "Question",
            name: "هل ألم الرقبة يسبب صداعاً ودوخة معاً؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "نعم. الثلاثة مترابطون في كثير من الحالات العنقية. الصداع القادم من الرقبة يُسمى صداعاً عنقياً (Cervicogenic Headache) وغالباً يصاحبه دوخة وتوتر.",
            },
          },
          {
            "@type": "Question",
            name: "هل ألم الفقرات يسبب دوخة؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ضغط على الجذور العصبية في الفقرات العنقية قد يسبب دوخة، خصوصاً في مستوى C1-C2. التقييم بالرنين المغناطيسي مع بروتوكول عنقي يحدد السبب.",
            },
          },
        ],
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
      const fs = document.getElementById(faqSchemaId);
      if (fs) fs.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/neck-pain-dizziness-germany" />
      <HreflangTags currentPath="/ar/neck-pain-dizziness-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO داكن */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            تقييم عصبي ووعائي متخصص · برلين · ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            هل الدوخة بسبب الرقبة؟{" "}
            <span className="font-medium">أعراض وعلاج في ألمانيا</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            ألم تعرفه جيداً — لكن لم يُفسَّر بشكل صحيح.
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

      {/* SECTION 1 — ألم تعرفه جيداً */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8" style={FONT}>
            ألم تعرفه جيداً — لكن لم يُفسَّر بشكل صحيح
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            كثيرون يصفون نفس التجربة.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            ألم في الرقبة يصحو معهم كل صباح.<br />
            دوخة تأتي عند تحريك الرأس.<br />
            أحياناً ضباب في الرأس.<br />
            أحياناً طنين خفيف في الأذن.<br />
            أحياناً إحساس بعدم الثبات عند الوقوف.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            يُقال لهم: "توتر عضلي"، أو "انزلاق بسيط"، أو "من الضغط النفسي".
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-4" style={FONT}>
            ويمضون — والأعراض تبقى.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-2" style={FONT}>
            لكن حين يجتمع ألم الرقبة مع الدوخة —<br />
            في نفس الوقت، بشكل متكرر —<br />
            يصبح السؤال الحقيقي:
          </p>
          <p className="text-slate-900 text-sm font-medium leading-relaxed" style={FONT}>
            من أين يأتي هذا فعلاً؟
          </p>
        </div>
      </section>

      {/* SECTION 2 — لماذا يجتمع ألم الرقبة مع الدوخة؟ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            لماذا يجتمع ألم الرقبة مع الدوخة؟
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-6" style={FONT}>
            ليس صدفة أن يظهرا معاً.<br /><br />
            الرقبة تحتوي على:<br />
            أعصاب، شرايين، عضلات، وفقرات —<br />
            كلها قريبة من بعضها.<br />
            وكلها تؤثر على التوازن والإحساس.
          </p>
          <p className="text-slate-700 text-sm font-medium mb-4" style={FONT}>الأسباب الأكثر شيوعاً:</p>
          <div className="space-y-5">
            {[
              {
                title: "الدوخة العنقية (Cervicogenic Dizziness)",
                body: "تأتي من المستقبلات الحسية في مفاصل الرقبة. تزداد عند تحريك الرأس أو تثبيته فترة طويلة. لا تظهر في MRI العادي.",
              },
              {
                title: "ضغط على الشريان الفقري",
                body: "الشريان الذي يمر عبر فقرات الرقبة. ضغط عليه يسبب دوخة عند دوران الرأس. نادر، لكن يُغفَل كثيراً.",
              },
              {
                title: "ضغط على الجذور العصبية العنقية",
                body: "يسبب ألماً ينتشر إلى الكتف أو الذراع. مصحوباً أحياناً بتنميل أو ضعف.",
              },
              {
                title: "اختلال عضلي وظيفي",
                body: "توتر مزمن في عضلات الرقبة والقاعدة. يؤثر على التوازن عبر الجهاز العصبي المركزي.",
              },
              {
                title: "أسباب مركزية",
                body: "أقل شيوعاً، لكن أهمها: مشاكل في جذع الدماغ أو المخيخ. تحتاج تصويراً دقيقاً للاستبعاد.",
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
        </div>
      </section>

      {/* SECTION 3 — متى يصبح الأمر أكثر من مجرد توتر عضلي؟ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            متى يصبح الأمر أكثر من مجرد توتر عضلي؟
          </h2>
          <p className="text-slate-700 text-sm font-medium mb-4" style={FONT}>
            هذه العلامات تستدعي تقييماً متخصصاً:
          </p>
          <ul className="space-y-3">
            {[
              "الدوخة تظهر أو تزيد عند تحريك الرأس في اتجاه معين",
              "ألم الرقبة يمتد إلى الكتف أو الذراع أو الأصابع",
              "صعوبة في التركيز أو ضباب ذهني مصاحب للألم",
              "اضطراب في التوازن عند المشي أو الوقوف",
              "طنين أذن أو تغير في السمع مصاحب للأعراض",
              "أعراض تزيد عند الإجهاد أو قلة النوم وتؤثر على جودة الحياة",
              "فحوصات سابقة طبيعية — لكن الأعراض مستمرة أو تتقدم",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4 — لماذا يظل هذا التشخيص غائباً سنوات؟ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            لماذا يظل هذا التشخيص غائباً سنوات؟
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-6" style={FONT}>
            لأن ألم الرقبة والدوخة يُعالَجان عادةً بشكل منفصل.<br /><br />
            طبيب العظام يرى الفقرات.<br />
            طبيب الأذن يرى التوازن.<br />
            طبيب الأعصاب يرى العصب.<br /><br />
            لكن لا أحد يجمع الصورة كاملة.
          </p>
          <p className="text-slate-700 text-sm font-medium mb-4" style={FONT}>
            التشخيص الدقيق يحتاج:
          </p>
          <div className="space-y-3">
            {[
              "تقييماً عصبياً وعائياً مشتركاً",
              "فحص حركة الرقبة وتأثيرها على التوازن",
              "دوبلر شرايين الرقبة إذا لزم",
              "MRI عنق بروتوكول عصبي وعائي",
              "اختبارات توازن متخصصة (Videonystagmography)",
              "تنسيق بين أكثر من تخصص في نفس الوقت",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-700 border-t border-slate-200 pt-6" style={FONT}>
            هذا النوع من التقييم المتكامل نادر في العيادات العامة.<br />
            وهو بالضبط ما يوفره التقييم في ألمانيا.
          </p>
        </div>
      </section>

      {/* SECTION 5 — كيف يتم التقييم في ألمانيا؟ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            كيف يتم التقييم في ألمانيا؟
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-8" style={FONT}>
            التقييم لا يبدأ بالسفر.<br />
            يبدأ بمراجعة ملفك أولاً.
          </p>
          <div className="space-y-6">
            {[
              {
                num: "١",
                title: "مراجعة كاملة للتاريخ المرضي",
                body: "كل الفحوصات السابقة، كل الأدوية، كل الأعراض. نحدد ما تم — وما لم يُبحث عنه بعد.",
              },
              {
                num: "٢",
                title: "تقييم عصبي سريري",
                body: "فحص منهجي للأعصاب القحفية، والتوازن، والقوة العضلية.",
              },
              {
                num: "٣",
                title: "تقييم وعائي عنقي",
                body: "دوبلر شرايين الرقبة — للتحقق من الشرايين الفقرية والسباتية.",
              },
              {
                num: "٤",
                title: "تصوير موجّه",
                body: "MRI عنق وجذع دماغ — بروتوكول يختاره المتخصص بناءً على الأعراض.",
              },
              {
                num: "٥",
                title: "اختبارات التوازن التخصصية",
                body: "لتحديد: هل الدوخة من الأذن الداخلية، من الرقبة، أم من المركز؟",
              },
              {
                num: "٦",
                title: "رأي متكامل",
                body: "من فريق يجمع: أعصاب، وعائي، وعظام — في نفس الإطار التشخيصي.",
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4" style={FONT}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1C2C] text-white flex items-center justify-center text-xs font-medium">
                  {step.num}
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-medium mb-1">{step.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 bg-slate-50 border-r-4 border-[#0B1C2C]" style={FONT}>
            <p className="text-slate-800 text-sm font-medium mb-1">النتيجة:</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              لا مزيد من الأجوبة المجزأة.<br />
              إجابة واحدة واضحة — من أين يأتي هذا، وما الخطوة التالية.
            </p>
          </div>
        </div>
      </section>

      {/* روابط داخلية */}
      <section className="py-10 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-widest" style={FONT}>
            صفحات ذات صلة
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/ar/dizziness-long-term"
              className="text-sm text-[#0B1C2C] underline underline-offset-2 hover:text-slate-600 transition-colors"
              style={FONT}
            >
              الدوخة المزمنة
            </Link>
            <span className="text-slate-300">·</span>
            <Link
              href="/ar/neurology-treatment-germany"
              className="text-sm text-[#0B1C2C] underline underline-offset-2 hover:text-slate-600 transition-colors"
              style={FONT}
            >
              الأعصاب والجهاز العصبي
            </Link>
            <span className="text-slate-300">·</span>
            <Link
              href="/ar/numbness-hands-feet-germany"
              className="text-sm text-[#0B1C2C] underline underline-offset-2 hover:text-slate-600 transition-colors"
              style={FONT}
            >
              تنميل اليدين والقدمين
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA نهائي داكن */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6 leading-snug" style={FONT}>
            ألمك يستحق تفسيراً حقيقياً
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-xl mx-auto" style={FONT}>
            إذا كنت تعيش مع ألم رقبة ودوخة منذ أشهر أو سنوات —<br />
            وكل الفحوصات قالت "طبيعي" —<br />
            أو تلقيت علاجات متعددة دون نتيجة واضحة —<br /><br />
            يمكننا مراجعة ملفك أولاً.<br /><br />
            بدون التزام.<br />
            بدون قرار مسبق.<br /><br />
            نحدد معك: هل حالتك تستدعي تقييماً في ألمانيا — أم لا.
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

      {/* FAQ SECTION */}
      <section className="py-16 px-6 bg-white border-t border-slate-100" dir="rtl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            أسئلة شائعة حول ألم الرقبة والدوخة
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "كيف أعرف أن الدوخة بسبب الرقبة؟",
                a: "الدوخة الناتجة عن الرقبة تتميز بارتباطها بتحريك الرأس أو تثبيته فترة طويلة، وتزداد عند النظر لأعلى أو الالتفات. إذا صاحبت الدوخة ألم في الرقبة أو تنميل في الذراع، فهذا مؤشر قوي على منشأ عنقي.",
              },
              {
                q: "هل ألم الرقبة يسبب الدوخة؟",
                a: "نعم. الدوخة العنقية من الأسباب الشائعة التي تُغفَل كثيراً. المستقبلات الحسية في مفاصل الرقبة تؤثر مباشرة على نظام التوازن.",
              },
              {
                q: "هل شرايين الرقبة تسبب دوخة؟",
                a: "ضغط على الشريان الفقري الذي يمر عبر فقرات الرقبة قد يسبب دوخة عند دوران الرأس. هذه الحالة تحتاج تقييماً وعائياً متخصصاً.",
              },
              {
                q: "هل ألم الرقبة يسبب صداعاً ودوخة معاً؟",
                a: "نعم. الثلاثة مترابطون في كثير من الحالات العنقية. الصداع القادم من الرقبة يُسمى صداعاً عنقياً (Cervicogenic Headache) وغالباً يصاحبه دوخة وتوتر.",
              },
              {
                q: "هل ألم الفقرات يسبب دوخة؟",
                a: "ضغط على الجذور العصبية في الفقرات العنقية قد يسبب دوخة، خصوصاً في مستوى C1-C2. التقييم بالرنين المغناطيسي مع بروتوكول عنقي يحدد السبب.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-slate-100 pb-5">
                <p className="text-sm font-medium text-[#0B1C2C] mb-2" style={FONT}>{item.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ArabicFooterGuide />
    </div>
  );
}
