import { useEffect } from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref =
  "https://wa.me/4917647757767?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

const FAQ_ITEMS = [
  {
    q: "هل يمكن علاج إصابات الأعصاب بعد الحوادث والانفجارات؟",
    a: "نعم، في كثير من الحالات يمكن استعادة الوظيفة العصبية جزئياً أو كلياً عبر الجراحة الدقيقة للأعصاب، خاصة إذا تم التقييم مبكراً. ألمانيا تمتلك مراكز متخصصة في إعادة توصيل الأعصاب الطرفية للحالات الدولية القادمة من ليبيا والسودان ودول الخليج.",
  },
  {
    q: "هل يمكن تجنب البتر في إصابات النزاعات المسلحة؟",
    a: "في بعض الحالات نعم. إنقاذ الطرف يعتمد على حجم الإصابة الوعائية والعصبية وسرعة التدخل. التقييم المتخصص في ألمانيا يحدد إمكانية الإنقاذ قبل اتخاذ قرار البتر، بما في ذلك الحالات المعقدة القادمة من مناطق النزاعات.",
  },
  {
    q: "كم تستغرق إعادة التأهيل بعد الإصابات الجسيمة؟",
    a: "تتراوح مدة إعادة التأهيل بين 3 أشهر وسنة كاملة حسب نوع الإصابة ومستوى التدخل الجراحي. برامج إعادة التأهيل في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للوظيفة للمرضى الدوليين.",
  },
  {
    q: "هل الحالات المعقدة بعد النزاعات تحتاج تقييماً متعدد التخصصات؟",
    a: "نعم. إصابات النزاعات والانفجارات تتضمن أحياناً شظايا متعددة وإصابات متزامنة في أعضاء مختلفة. هذه الحالات تتطلب فريقاً متعدد التخصصات ومرفقاً طبياً قادراً على التعامل مع التعقيد المتعدد الأنظمة.",
  },
  {
    q: "كيف يتم تنسيق الحالات الدولية القادمة من ليبيا والسودان ودول الخليج؟",
    a: "يتم استقبال التوثيق الطبي وتقييمه من برلين، ثم تحديد المسار العلاجي المناسب داخل المنظومة الطبية الألمانية. التنسيق يشمل التواصل مع المراكز الجامعية المتخصصة وتحديد الجدول الزمني للتدخل.",
  },
  {
    q: "هل يمكن إجراء تقييم أولي عن بُعد قبل السفر إلى ألمانيا؟",
    a: "نعم. يمكن إرسال التقارير الطبية والتصوير الإشعاعي للتقييم الأولي من قِبل المنسق الطبي في برلين، مما يتيح تحديد جدوى التدخل والمسار العلاجي قبل اتخاذ قرار السفر.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a,
    },
  })),
};

export default function ComplexTraumaGermany() {
  useEffect(() => {
    document.title = "الحالات المعقدة بعد الحوادث والإصابات في ألمانيا | Medical Care Germany";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "تنسيق الحالات المعقدة بعد الحوادث والإصابات الجسيمة في ألمانيا — إصابات الأعصاب، الشظايا، البتر، وإعادة التأهيل. للحالات الدولية القادمة من ليبيا والسودان ودول الخليج.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = descContent;
      document.head.appendChild(m);
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://medicalcaregermany.com/ar/complex-trauma-germany";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* 1. HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest text-slate-400 mb-4"
            style={FONT}
          >
            ميديكال كير جيرماني · برلين، ألمانيا
          </p>
          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-6"
            style={FONT}
          >
            الحالات المعقدة بعد الحوادث والإصابات في ألمانيا
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed"
            style={FONT}
          >
            صفحة توجيهية للحالات المعقدة تشمل إصابات الأعصاب، الشظايا، وبتر الأطراف.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            كل حالة تحتاج مسار تقييم مختلف — اختر الأنسب لوضعك.
          </p>
          <Link
            href={intakeHref}
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            أرسل تقاريرك الآن
          </Link>
        </div>
      </section>

      {/* 2. PATH SELECTION */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-medium text-slate-900 mb-3 text-center"
            style={FONT}
          >
            اختر المسار المناسب لحالتك
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8" style={FONT}>
            كل مسار يقود إلى تقييم متخصص مختلف
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="/ar/shrapnel-brain-injury-germany"
                className="block px-5 py-4 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors text-center"
                style={FONT}
              >
                إصابات الشظايا والدماغ
              </a>
            </li>
            <li>
              <a
                href="/ar/nerve-injury-after-trauma-germany"
                className="block px-5 py-4 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors text-center"
                style={FONT}
              >
                إصابات الأعصاب بعد الحوادث
              </a>
            </li>
            <li>
              <a
                href="/ar/prosthetics-after-amputation-germany"
                className="block px-5 py-4 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors text-center"
                style={FONT}
              >
                تركيب الأطراف الصناعية بعد البتر
              </a>
            </li>
            <li>
              <a
                href="/ar/advanced-rehabilitation-germany"
                className="block px-5 py-4 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors text-center"
                style={FONT}
              >
                إعادة التأهيل المتقدمة بعد الإصابات الجسيمة
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. CASE DIFFERENTIATION */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-2" style={FONT}>
              إصابات الشظايا والدماغ
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
              الحالات الناتجة عن انفجارات أو إصابات جسيمة تتضمن شظايا داخل الجمجمة أو الدماغ. هذه الحالات تستدعي تقييماً جراحياً دقيقاً يشمل التصوير المقطعي والرنين المغناطيسي وتحديد إمكانية الاستئصال الجراحي. يختلف مسار العلاج كلياً عن إصابات الأعصاب الطرفية.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-2" style={FONT}>
              إصابات الأعصاب الطرفية بعد الحوادث
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
              إصابات الأعصاب الطرفية الناتجة عن حوادث السير أو الإصابات المباشرة تتطلب تقييماً تفصيلياً للأعصاب المتضررة وإمكانية إعادة التوصيل الجراحي. الجراحة الدقيقة للأعصاب في ألمانيا تتيح استعادة الوظيفة في حالات كثيرة للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-2" style={FONT}>
              تركيب الأطراف الصناعية بعد البتر
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
              قرار اختيار الطرف الصناعي يعتمد على مستوى البتر، حالة الأنسجة المتبقية، وأهداف إعادة التأهيل. الأطراف الصناعية الحديثة في ألمانيا تشمل أجهزة تعمل بالذكاء الاصطناعي وتستجيب لإشارات العضلات. التقييم المبكر يحدد أفضل خيار قبل اتخاذ أي قرار نهائي.
            </p>
          </div>
        </div>
      </section>

      {/* GEO CONTEXT SECTION */}
      <section className="py-14 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-base font-medium text-slate-900 mb-4" style={FONT}>
            التنسيق الدولي للحالات المعقدة
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4" style={FONT}>
            تتلقى ميديكال كير جيرماني حالات دولية معقدة من ليبيا والسودان ومصر ودول الخليج العربي بما فيها الإمارات والمملكة العربية السعودية. كثير من هذه الحالات تشمل إصابات جسيمة بعد حوادث السير أو الإصابات الناجمة عن النزاعات، وتحتاج إلى تقييم متعدد التخصصات داخل المنظومة الطبية الألمانية.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
            يتم استقبال التوثيق الطبي من برلين، وتحديد المسار العلاجي المناسب بما يشمل{" "}
            <a href="/ar/nerve-injury-after-trauma-germany" className="text-[#0B3B8C] hover:underline" style={FONT}>إعادة التوصيل العصبي</a>،{" "}
            <a href="/ar/prosthetics-after-amputation-germany" className="text-[#0B3B8C] hover:underline" style={FONT}>تركيب الأطراف الصناعية</a>،{" "}
            أو{" "}
            <a href="/ar/advanced-rehabilitation-germany" className="text-[#0B3B8C] hover:underline" style={FONT}>إعادة التأهيل المتقدمة</a>.
          </p>
        </div>
      </section>

      {/* 4. RELATED CASES */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-base font-medium text-slate-900 mb-6 text-center"
            style={FONT}
          >
            حالات مرتبطة
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/ar/shrapnel-brain-injury-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                إصابات الشظايا والدماغ
              </a>
            </li>
            <li>
              <a
                href="/ar/nerve-injury-after-trauma-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                إصابات الأعصاب الطرفية بعد الحوادث
              </a>
            </li>
            <li>
              <a
                href="/ar/prosthetics-after-amputation-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                تركيب الأطراف الصناعية في ألمانيا
              </a>
            </li>
            <li>
              <a
                href="/ar/advanced-rehabilitation-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                إعادة التأهيل المتقدمة في ألمانيا
              </a>
            </li>
            <li>
              <a
                href="/ar/joint-replacement-after-trauma"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                استبدال المفاصل بعد الإصابة
              </a>
            </li>
            <li>
              <a
                href="/ar/orthopedics-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                جراحة العظام والمفاصل في ألمانيا
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-base font-medium text-slate-900 mb-8 text-center"
            style={FONT}
          >
            أسئلة شائعة
          </h3>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border-b border-slate-100 pb-5">
                <p className="text-sm font-medium text-slate-900 mb-2" style={FONT}>
                  {item.q}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-light mb-4" style={FONT}>
            ابدأ بتقييم حالتك
          </h2>
          <p className="text-sm text-slate-400 mb-8" style={FONT}>
            أرسل التقارير الطبية للحصول على تقييم متخصص من فريق طبي في ألمانيا.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={intakeHref}
              className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white text-white text-sm font-medium hover:bg-white hover:text-[#0B1C2C] transition-colors"
              style={FONT}
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      <ArabicFooterGuide />
    </div>
  );
}
