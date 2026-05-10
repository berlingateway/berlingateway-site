import { Link } from "wouter";
import { useEffect } from "react";
import ArabicHeaderLocked from "@/components/ArabicHeaderLocked";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const JOINT_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هل يمكن إنقاذ الطرف بدلاً من البتر؟",
      "acceptedAnswer": { "@type": "Answer", "text": "في بعض الحالات نعم. إنقاذ الطرف يعتمد على حجم الإصابة الوعائية والعصبية وسرعة التدخل. التقييم المتخصص في ألمانيا يحدد إمكانية الإنقاذ قبل اتخاذ قرار البتر للحالات الدولية القادمة من ليبيا والسودان ودول الخليج." }
    },
    {
      "@type": "Question",
      "name": "متى يكون استبدال المفصل ضرورياً بعد الإصابة؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يصبح استبدال المفصل ضرورياً عندما تكون المفاصل متضررة بشكل لا رجعة فيه أو عندما تفشل الخيارات التحافظية. التقييم المتخصص يحدد الخيار الأنسب لكل حالة." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تنسيق الحالات الدولية من ليبيا والسودان ودول الخليج؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم استقبال التوثيق الطبي من برلين وتقييمه من قِبل المنسق الطبي، ثم تحديد إمكانية إنقاذ الطرف أو استبدال المفصل والجدول الزمني للتدخل قبل اتخاذ قرار السفر." }
    },
    {
      "@type": "Question",
      "name": "كم تستغرق إعادة التأهيل بعد استبدال المفصل؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تتراوح مدة إعادة التأهيل بين 6 أسابيع و6 أشهر حسب نوع المفصل ودرجة التلف. برامج إعادة التأهيل في ألمانيا مصممة لاستعادة الحركة الكاملة." }
    }
  ]
};

const FONT = { fontFamily: "'Cairo', 'Noto Sans Arabic', sans-serif" };
const intakeHref = "/ar/send-medical-reports";
const whatsappHref = "https://wa.me/4917647757767";

export default function JointReplacementAfterTrauma() {
  useEffect(() => {
    document.title = "استبدال المفاصل بعد الإصابة في ألمانيا — إنقاذ الطرف أو تعويض المفصل | Medical Care Germany";
    const descContent = "تقييم وعلاج إصابات المفاصل الجسيمة بعد الحوادث في ألمانيا. إنقاذ الطرف أو استبدال المفصل للحالات الدولية القادمة من ليبيا والسودان ودول الخليج.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/joint-replacement-after-trauma";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JOINT_FAQ_JSONLD) }} />
      <ArabicHeaderLocked />

      {/* 1. HERO */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-4" style={FONT}>
            تقييم طبي متخصص · ألمانيا
          </p>
          <h1
            className="text-3xl md:text-4xl font-light text-slate-900 leading-snug mb-6"
            style={FONT}
          >
            هل يمكن إنقاذ الطرف؟ القرار الصحيح قبل البتر
          </h1>
          <p className="text-base text-slate-500 leading-relaxed mb-8" style={FONT}>
            ليس كل إصابة تعني بتر. في بعض الحالات، يمكن إنقاذ الطرف عبر تدخل جراحي متقدم أو استبدال المفصل.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={intakeHref}
              className="px-8 py-4 bg-[#0B1C2C] text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              style={FONT}
            >
              أرسل تقاريرك الآن
            </Link>
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
          <p className="mt-6 text-xs text-slate-400 leading-relaxed" style={FONT}>
            ⚠️ هذه الصفحة مخصصة للحالات المعقدة التي لم تستجب للعلاج أو تم اقتراح البتر لها دون تقييم متخصص
          </p>
        </div>
      </section>

      {/* 2. CHECKLIST */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-light text-slate-900 mb-8 text-center" style={FONT}>
            هذه الصفحة مخصصة للحالات:
          </h2>
          <ul className="space-y-4">
            {[
              "إصابات حوادث معقدة تؤثر على المفاصل أو العظام",
              "إصابات حرب بدون بتر مباشر ولكن مع تلف في المفصل",
              "حالات تم اقتراح البتر لها بدون تقييم متخصص كافٍ",
              "ألم مستمر بعد إصابة في الركبة أو الورك أو الكتف",
              "تشخيصات متضاربة حول ضرورة البتر أو إنقاذ الطرف",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. NARRATIVE */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-light text-slate-900 mb-6" style={FONT}>
            لماذا يُقترح البتر في حالات يمكن إنقاذها؟
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4" style={FONT}>
            في كثير من الحالات، يُقترح البتر بسبب محدودية الإمكانيات المتاحة في مكان الإصابة، وليس لأن إنقاذ الطرف مستحيل.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4" style={FONT}>
            التقييم المتخصص في ألمانيا يتضمن مراجعة شاملة لجميع الخيارات الجراحية المتاحة، بما في ذلك:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "استبدال المفصل الكلي أو الجزئي",
              "إعادة بناء العظام والأوتار",
              "تقنيات الحفاظ على الطرف المتقدمة",
              "تقييم الأوعية الدموية والأعصاب المتضررة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
            القرار يُتخذ بعد تقييم متكامل — وليس بناءً على الإمكانيات المتاحة في اللحظة.
          </p>
        </div>
      </section>

      {/* 4. GERMANY SECTION */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-light text-slate-900 mb-6" style={FONT}>
            التقييم في ألمانيا
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6" style={FONT}>
            يتم تقييم الحالة بشكل منهجي داخل شبكة من المستشفيات الجامعية المتخصصة في جراحة العظام وإعادة التأهيل.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "تصوير متقدم للمفصل",
              "تقييم جراح عظام متخصص",
              "مراجعة خيارات الإنقاذ",
              "خطة علاجية واضحة",
            ].map((item, i) => (
              <div key={i} className="p-4 border border-slate-200 bg-white text-center">
                <p className="text-xs text-slate-600" style={FONT}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVALUATION */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-light text-slate-900 mb-6" style={FONT}>
            الخيارات العلاجية
          </h2>
          <ul className="space-y-4">
            {[
              "استبدال المفصل الكلي أو الجزئي",
              "جراحة إعادة بناء الأوتار والأربطة",
              "تثبيت العظام بتقنيات متقدمة",
              "إعادة التأهيل الوظيفي بعد الجراحة",
              "متابعة طويلة الأمد للحالات غير الجراحية",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. MID CTA */}
      <section className="py-16 px-6 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base font-light mb-6 leading-relaxed" style={FONT}>
            لا تتخذ قرار البتر قبل الحصول على تقييم متخصص.
            <br />
            أرسل التقارير الآن — واحصل على تقييم خلال 24–48 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={intakeHref}
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
            </Link>
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
        </div>
      </section>

      {/* 7. PATIENT PATHWAY */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-light text-slate-900 mb-8 text-center" style={FONT}>
            مسار المريض
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "١", text: "إرسال التقارير الطبية" },
              { num: "٢", text: "مراجعة خلال 24–48 ساعة" },
              { num: "٣", text: "تحديد المركز المناسب" },
              { num: "٤", text: "بدء التنسيق مع المستشفى" },
            ].map((step, i) => (
              <div key={i} className="text-center p-4 border border-slate-100">
                <div className="text-2xl font-light text-slate-300 mb-2" style={FONT}>{step.num}</div>
                <p className="text-xs text-slate-600" style={FONT}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DECISION BLOCK */}
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
                href: "/ar/complex-trauma-germany",
                label: "تقييم إصابات معقدة",
              },
              {
                href: "/ar/nerve-injury-after-trauma-germany",
                label: "إصابات الأعصاب",
              },
              {
                href: "/ar/shrapnel-brain-injury-germany",
                label: "إصابات الشظايا",
              },
              {
                href: "/ar/prosthetics-after-amputation-germany",
                label: "الأطراف الصناعية",
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

      {/* 9. REVERSE BLOCK */}
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
            href="/ar/complex-trauma-germany"
            className="inline-block px-6 py-3 border border-slate-300 text-slate-700 text-sm hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
            style={FONT}
          >
            عرض جميع حالات الحوادث المعقدة
          </Link>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-light mb-4"
            style={FONT}
          >
            تحدث مع منسق طبي
          </h2>
          <p
            className="text-slate-300 text-sm mb-8 leading-relaxed"
            style={FONT}
          >
            يمكنك إرسال التقارير الطبية وسيتم مراجعتها خلال 24–48 ساعة
            <br />
            لتحديد إمكانية إنقاذ الطرف والمسار الطبي المناسب.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={intakeHref}
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
            </Link>
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

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100">
        <ArabicFooterGuide />
        <div className="py-8 px-6 text-center">
          <p className="text-xs text-slate-400" style={FONT}>
            ميديكال كير جيرماني · برلين، ألمانيا
          </p>
        </div>
      </footer>
    </div>
  );
}
