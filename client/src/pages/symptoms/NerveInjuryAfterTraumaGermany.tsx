import { Link } from "wouter";
import HreflangTags from "@/components/HreflangTags";
import { useEffect } from "react";
import { CrossClusterSection } from "@/components/CrossClusterSection";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const NERVE_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هل يمكن علاج إصابات الأعصاب بعد الحوادث؟",
      "acceptedAnswer": { "@type": "Answer", "text": "نعم، في كثير من الحالات يمكن استعادة الوظيفة العصبية جزئياً أو كلياً عبر الجراحة الدقيقة للأعصاب، خاصة إذا تم التقييم مبكراً. ألمانيا تمتلك مراكز متخصصة في إعادة توصيل الأعصاب الطرفية للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تشخيص إصابة الأعصاب الطرفية؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم التشخيص عبر تخطيط الأعصاب الكهربائي والرنين المغناطيسي. هذه الفحوصات تحدد موقع الإصابة ودرجتها وإمكانية التدخل الجراحي." }
    },
    {
      "@type": "Question",
      "name": "كم تستغرق إعادة التأهيل بعد إصابة الأعصاب؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تتراوح مدة إعادة التأهيل بين 3 أشهر وسنة كاملة حسب نوع الإصابة ومستوى التدخل الجراحي. برامج إعادة التأهيل في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للوظيفة." }
    },
    {
      "@type": "Question",
      "name": "هل يمكن تجنب البتر في حالات إصابة الأعصاب؟",
      "acceptedAnswer": { "@type": "Answer", "text": "في بعض الحالات نعم. إنقاذ الطرف يعتمد على حجم الإصابة الوعائية والعصبية وسرعة التدخل. التقييم المتخصص في ألمانيا يحدد إمكانية الإنقاذ قبل اتخاذ قرار البتر." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تنسيق الحالات الدولية القادمة من ليبيا والسودان ودول الخليج؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم استقبال التوثيق الطبي من برلين وتقييمه من قِبل المنسق الطبي، ثم تحديد المسار العلاجي المناسب داخل المنظومة الطبية الألمانية بما يشمل الجراحة الدقيقة للأعصاب أو إعادة التأهيل المتخصصة." }
    }
  ]
};

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "https://tally.so/r/68MrBP";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export default function NerveInjuryAfterTraumaGermany() {
  useEffect(() => {
    document.title = "إصابات الأعصاب بعد الحوادث في ألمانيا — جراحة دقيقة وإعادة تأهيل | Medical Care Germany";
    const descContent = "تقييم وعلاج إصابات الأعصاب الطرفية بعد الحوادث والإصابات الجسيمة في ألمانيا. للحالات الدولية القادمة من ليبيا والسودان ودول الخليج — تنسيق طبي متخصص من برلين.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/nerve-injury-after-trauma-germany";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <HreflangTags currentPath="/ar/nerve-injury-after-trauma-germany" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(NERVE_FAQ_JSONLD) }} />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* 1. HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest text-slate-400 mb-4"
            style={FONT}
          >
            Medical Care Germany
          </p>
          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-6"
            style={FONT}
          >
            تنميل أو ضعف بعد إصابة؟ قد تكون المشكلة في الأعصاب
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed"
            style={FONT}
          >
            ألم يمتد من الرقبة إلى اليد؟ فقدان الإحساس؟ ضعف في الحركة؟
            في هذه الحالات، السبب غالباً إصابة في الأعصاب وليس في العضلات.
            نوفر تقييم متخصص خلال 24–48 ساعة في ألمانيا.
          </p>
          <p className="text-sm text-slate-400 mb-2" style={FONT}>
            مخصص للحالات المعقدة فقط.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            نحدد لك السبب الحقيقي والمسار الطبي بناءً على ملفك.
          </p>
          <a

            href={intakeHref} target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            أرسل التقارير الآن للحصول على تشخيص واضح
          </a>
        </div>
      </section>

      {/* HUB BREADCRUMB */}
      <section className="py-4 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-500" style={FONT}>
            هذه الصفحة جزء من نظام الحالات المعقدة:{" "}
            <a
              href="/ar/complex-trauma-germany"
              className="text-[#0B1C2C] underline hover:no-underline"
              style={FONT}
            >
              عرض جميع الحالات المعقدة في ألمانيا
            </a>
          </p>
        </div>
      </section>

      {/* 2. TRIGGERS */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center"
            style={FONT}
          >
            هل هذه حالتك؟
          </h2>
          <ul className="space-y-4">
            {[
              "تنميل مستمر في اليد أو القدم",
              "ضعف في الذراع أو الساق بعد حادث",
              "ألم يمتد من الرقبة إلى الأطراف",
              "فقدان الإحساس أو وخز مستمر",
              "عدم تحسن بعد العلاج أو العملية",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. FILTER */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3
                className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-4"
                style={FONT}
              >
                هذه الصفحة ليست لـ:
              </h3>
              <ul className="space-y-2">
                {[
                  "الحالات الخفيفة أو العابرة",
                  "الاستفسارات العامة",
                  "الحالات التي تحسنت مع العلاج",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-500 flex items-start gap-2"
                    style={FONT}
                  >
                    <span className="mt-1 text-slate-300">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-sm font-medium text-[#0B1C2C] uppercase tracking-widest mb-4"
                style={FONT}
              >
                هذه الصفحة مخصصة لـ:
              </h3>
              <ul className="space-y-2">
                {[
                  "الحالات غير المحسومة",
                  "التشخيصات المتضاربة",
                  "العلاجات التي لم تنجح",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 flex items-start gap-2"
                    style={FONT}
                  >
                    <span className="mt-1 text-[#0B1C2C]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p
            className="mt-8 text-sm font-medium text-[#0B1C2C] border-t border-slate-200 pt-6"
            style={FONT}
          >
            هذه الصفحة مخصصة للحالات التي لم يتم تشخيصها بدقة أو لم تستجب للعلاج السابق.
          </p>
        </div>
      </section>

      {/* 4. WARNING */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div
            className="border-r-4 border-[#0B1C2C] pr-5 py-2"
            style={FONT}
          >
            <p className="text-slate-700 text-sm leading-relaxed">
              التأخير في تشخيص إصابة الأعصاب يؤدي إلى استمرار الأعراض وتفاقم الحالة. التقييم المبكر يحدد العصب المتضرر بدقة ويحسم مسار العلاج.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MID CTA */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-slate-600 mb-6" style={FONT}>
            لا تترك الحالة تتفاقم.
            <br />
            أرسل التقارير الآن — واحصل على تقييم خلال 24–48 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a

              href={intakeHref} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0B1C2C] text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#0B1C2C] text-[#0B1C2C] text-sm font-light hover:bg-[#0B1C2C] hover:text-white transition-colors"
              style={FONT}
            >
              تحدث مع منسق طبي
            </a>
          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKS */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-base font-medium text-slate-900 mb-6 text-center"
            style={FONT}
          >
            اختر المسار المناسب لحالتك
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/ar/complex-trauma-evaluation",
                label: "إصابات الحوادث والحروب",
              },
              {
                href: "/ar/shrapnel-brain-injury-germany",
                label: "شظايا في الرأس أو الدماغ",
              },
              {
                href: "/ar/prosthetics-after-amputation-germany",
                label: "تركيب طرف صناعي في ألمانيا",
              },
              {
                href: "/ar/joint-replacement-after-trauma",
                label: "استبدال المفاصل بعد الإصابات",
              },
              {
                href: "/ar/medical-visa-residency-germany",
                label: "فيزا العلاج في ألمانيا",
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

      {/* 7. REVERSE BLOCK */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-base font-medium text-slate-900 mb-3"
            style={FONT}
          >
            هل إصابتك ليست ضمن هذا النوع؟
          </h2>
          <p className="text-sm text-slate-500 mb-6" style={FONT}>
            بعض الحالات تكون أكثر تعقيداً وتحتاج تقييم شامل متعدد التخصصات.
          </p>
          <Link
            href="/ar/complex-trauma-evaluation"
            className="inline-block px-6 py-3 border border-slate-300 text-slate-700 text-sm hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
            style={FONT}
          >
            عرض جميع حالات الحوادث المعقدة
          </Link>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-light mb-4"
            style={FONT}
          >
            لا تنتظر حتى تتعقد الحالة أكثر
          </h2>
          <p
            className="text-slate-300 text-sm mb-8 leading-relaxed"
            style={FONT}
          >
            حالتك تستحق مراجعة حقيقية — وليس رأياً عاماً.
            <br />
            أرسل تقاريرك الآن وسيتم تقييمها خلال 24–48 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a

              href={intakeHref} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white text-white text-sm font-light hover:bg-white hover:text-[#0B1C2C] transition-colors"
              style={FONT}
            >
              تحدث مع منسق طبي
            </a>
          </div>
          <p
            className="mt-6 text-xs text-slate-500 leading-relaxed"
            style={FONT}
          >
            لا تحتاج ملفاً كاملاً — أرسل ما هو متوفر الآن
          </p>
        </div>
      </section>

      {/* RELATED CASES */}
      <section className="py-14 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-base font-medium text-slate-900 mb-6 text-center"
            style={FONT}
          >
            حالات مرتبطة
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/ar/shrapnel-brain-injury-germany" className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors" style={FONT}>
                إصابات الشظايا والدماغ
              </a>
            </li>
            <li>
              <a href="/ar/prosthetics-after-amputation-germany" className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors" style={FONT}>
                تركيب الأطراف الصناعية في ألمانيا
              </a>
            </li>
            <li>
              <a href="/ar/joint-replacement-after-trauma" className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors" style={FONT}>
                استبدال المفاصل بعد الإصابة
              </a>
            </li>
            <li>
              <a href="/ar/advanced-rehabilitation-germany" className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors" style={FONT}>
                إعادة التأهيل المتقدمة في ألمانيا
              </a>
            </li>
            <li>
              <a href="/ar/complex-trauma-germany" className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors" style={FONT}>
                جميع الحالات المعقدة بعد الحوادث
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-base font-medium text-slate-900 mb-8 text-center"
            style={FONT}
          >
            أسئلة شائعة
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "هل يمكن علاج إصابات الأعصاب بعد الحوادث؟",
                a: "نعم، في كثير من الحالات يمكن استعادة الوظيفة العصبية جزئياً أو كلياً عبر الجراحة الدقيقة للأعصاب، خاصة إذا تم التقييم مبكراً. ألمانيا تمتلك مراكز متخصصة في إعادة توصيل الأعصاب الطرفية للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج.",
              },
              {
                q: "كيف يتم تنسيق الحالات الدولية القادمة من ليبيا والسودان ودول الخليج؟",
                a: "يتم استقبال التوثيق الطبي من برلين وتقييمه من قِبل المنسق الطبي، ثم تحديد المسار العلاجي المناسب داخل المنظومة الطبية الألمانية بما يشمل الجراحة الدقيقة للأعصاب أو إعادة التأهيل المتخصصة.",
              },
              {
                q: "كيف يتم تشخيص إصابة الأعصاب؟",
                a: "يتم التشخيص عبر تخطيط الأعصاب الكهربائي والرنين المغناطيسي. هذه الفحوصات تحدد موقع الإصابة ودرجتها وإمكانية التدخل الجراحي.",
              },
              {
                q: "كم تستغرق إعادة التأهيل بعد إصابة الأعصاب؟",
                a: "تتراوح مدة إعادة التأهيل بين 3 أشهر وسنة كاملة حسب نوع الإصابة ومستوى التدخل الجراحي. برامج إعادة التأهيل في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للوظيفة.",
              },
              {
                q: "هل يمكن تجنب البتر في حالات إصابة الأعصاب؟",
                a: "في بعض الحالات نعم. إنقاذ الطرف يعتمد على حجم الإصابة الوعائية والعصبية وسرعة التدخل. التقييم المتخصص في ألمانيا يحدد إمكانية الإنقاذ قبل اتخاذ قرار البتر.",
              },
            ].map((item, i) => (
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

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100">
        <CrossClusterSection
        clusters={["trauma_mri_rehab", "neuro_spine"]}
        excludeCurrentHref="/ar/nerve-injury-after-trauma-germany"
      />
      <ArabicFooterGuide />
        <div className="py-8 px-6 text-center">
          <p className="text-xs text-slate-400" style={FONT}>
            Medical Care Germany
          </p>
        </div>
      </footer>
    </div>
  );
}
