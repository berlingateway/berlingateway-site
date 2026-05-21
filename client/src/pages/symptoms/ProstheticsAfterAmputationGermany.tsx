import { Link } from "wouter";
import { useEffect } from "react";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const PROSTHETICS_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي أنواع الأطراف الصناعية المتوفرة في ألمانيا؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تتراوح بين الأطراف التقليدية والأطراف الذكية التي تعمل بإشارات العضلات. ألمانيا تضم شركات عالمية متخصصة تصنع أطرافاً متطورة للمرضى الدوليين القادمين من ليبيا والسودان ودول الخليج." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم اختيار الطرف الصناعي المناسب؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يعتمد الاختيار على مستوى البتر، حالة الأنسجة المتبقية، وأهداف إعادة التأهيل. التقييم المتخصص يحدد أفضل خيار قبل اتخاذ أي قرار نهائي." }
    },
    {
      "@type": "Question",
      "name": "كم تستغرق إعادة التأهيل بعد البتر؟",
      "acceptedAnswer": { "@type": "Answer", "text": "تتراوح بين 3 أشهر وسنة كاملة حسب مستوى البتر ونوع الطرف الصناعي. برامج إعادة التأهيل في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للحركة." }
    },
    {
      "@type": "Question",
      "name": "كيف يتم تنسيق حالات البتر الدولية من ليبيا والسودان ودول الخليج؟",
      "acceptedAnswer": { "@type": "Answer", "text": "يتم استقبال التوثيق الطبي من برلين وتقييمه من قِبل المنسق الطبي، ثم تحديد نوع الطرف الصناعي المناسب وبرنامج إعادة التأهيل قبل اتخاذ قرار السفر." }
    }
  ]
};

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export default function ProstheticsAfterAmputationGermany() {
  useEffect(() => {
    document.title = "تركيب الأطراف الصناعية بعد البتر في ألمانيا — تقييم وتأهيل متخصص | Medical Care Germany";
    const descContent = "تركيب الأطراف الصناعية وإعادة التأهيل بعد البتر في ألمانيا. للحالات الدولية القادمة من ليبيا والسودان ودول الخليج — تنسيق طبي متخصص من برلين.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else { const n = document.createElement("meta"); n.name = "description"; n.content = descContent; document.head.appendChild(n); }
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!c) { c = document.createElement("link") as HTMLLinkElement; c.rel = "canonical"; document.head.appendChild(c); }
    c.href = "https://medicalcaregermany.com/ar/prosthetics-after-amputation-germany";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PROSTHETICS_FAQ_JSONLD) }} />
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
            بتر الأطراف؟ القرار الخاطئ قد يعيق حياتك
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed"
            style={FONT}
          >
            اختيار الطرف الصناعي ليس مجرد جهاز، بل قرار طبي دقيق يعتمد على حالتك.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            مخصص للحالات التي تعاني من مشاكل في الطرف الصناعي أو تحتاج تقييم متخصص.
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
              "صعوبة في المشي بعد البتر",
              "ألم عند استخدام الطرف الصناعي",
              "عدم ثبات الطرف",
              "تعب سريع أثناء الحركة",
              "طرف صناعي غير مناسب",
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

      {/* 3. WHY FAILURE */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl md:text-2xl font-medium text-slate-900 mb-6 text-center"
            style={FONT}
          >
            لماذا يفشل الطرف الصناعي؟
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed text-center" style={FONT}>
            المشكلة ليست في البتر، بل في اختيار نوع الطرف الصناعي المناسب لكل حالة.
          </p>
        </div>
      </section>

      {/* 4. SPECIALIST EVALUATION */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl md:text-2xl font-medium text-slate-900 mb-6 text-center"
            style={FONT}
          >
            التقييم المتخصص في ألمانيا
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed text-center" style={FONT}>
            يتم تقييم الحالة بشكل دقيق وربطها بمراكز متخصصة في ألمانيا حسب الحاجة.
            في بعض الحالات، يتم التعاون مع شركات عالمية مثل Ottobock وغيرها وفقاً لتقييم الحالة.
          </p>
        </div>
      </section>

      {/* 5. MID CTA */}
      <section className="py-16 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            لا تترك الحالة تتفاقم.
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

      {/* 6. PATIENT PATHWAY */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center"
            style={FONT}
          >
            مسار المريض
          </h2>
          <ol className="space-y-4">
            {[
              "إرسال التقارير",
              "مراجعة خلال 24–48 ساعة",
              "تحديد المركز المناسب",
              "بدء التنسيق",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4" style={FONT}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0B1C2C] text-white text-xs flex items-center justify-center font-medium">
                  {i + 1}
                </span>
                <span className="text-slate-700 text-sm leading-relaxed pt-0.5">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. DECISION BLOCK */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-base font-medium text-slate-900 mb-6 text-center"
            style={FONT}
          >
            اختر المسار المناسب لحالتك:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/ar/complex-trauma-evaluation",
                label: "إصابات الحوادث والحروب",
              },
              {
                href: "/ar/nerve-injury-after-trauma-germany",
                label: "إصابة الأعصاب بعد البتر",
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

      {/* 8. REVERSE BLOCK */}
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

      {/* 9. FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-light mb-4"
            style={FONT}
          >
            إرسال التقارير الطبية
          </h2>
          <p
            className="text-slate-300 text-sm mb-8 leading-relaxed"
            style={FONT}
          >
            يمكنك إرسال التقارير الطبية وسيتم مراجعتها خلال 24–48 ساعة
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
                إصابات الأعصاب بعد الحوادث
              </a>
            </li>
            <li>
              <a
                href="/ar/complex-trauma-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
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
                q: "ما هي أنواع الأطراف الصناعية المتوفرة في ألمانيا؟",
                a: "تتراوح بين الأطراف التقليدية والأطراف الذكية التي تعمل بإشارات العضلات. ألمانيا تضم شركات عالمية مثل Ottobock وغيرها التي تصنع أطرافاً متطورة جداً.",
              },
              {
                q: "كيف يتم اختيار الطرف الصناعي المناسب؟",
                a: "يعتمد الاختيار على مستوى البتر، حالة الأنسجة المتبقية، وأهداف إعادة التأهيل. التقييم المتخصص يحدد أفضل خيار قبل اتخاذ أي قرار نهائي.",
              },
              {
                q: "كم تستغرق إعادة التأهيل بعد البتر؟",
                a: "تتراوح بين 3 أشهر وسنة كاملة حسب مستوى البتر ونوع الطرف الصناعي. برامج إعادة التأهيل في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للحركة.",
              },
              {
                q: "هل يمكن تجنب البتر في بعض الحالات؟",
                a: "في بعض الحالات نعم. إنقاذ الطرف يعتمد على حجم الإصابة الوعائية وسرعة التدخل. التقييم المتخصص يحدد إمكانية الإنقاذ قبل اتخاذ قرار البتر.",
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
