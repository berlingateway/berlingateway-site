import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref =
  "https://wa.me/4917647757767?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export default function ComplexTraumaEvaluation() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
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
            إصابات معقدة بعد الحوادث أو الحروب تحتاج تقييم دقيق
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed"
            style={FONT}
          >
            لماذا فشلت العلاجات السابقة؟ المشكلة ليست في جسدك بل في دقة التشخيص.
            نحن نوفر القرار الطبي النهائي من كبار المتخصصين في ألمانيا.
          </p>
          <p className="text-sm text-slate-400 mb-2" style={FONT}>
            مخصص للحالات المعقدة فقط.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            نحدد لك السبب الحقيقي والمسار الطبي بناءً على ملفك.
          </p>
          <Link
            href={intakeHref}
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            أرسل تقاريرك الآن للحصول على قرار طبي واضح
          </Link>
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
              "إصابات شظايا في الرأس أو العمود الفقري لم يتم تقييمها بدقة",
              <>
                فقدان الإحساس أو{" "}
                <Link
                  href="/ar/nerve-injury-after-trauma-germany"
                  className="text-[#8B6914] underline underline-offset-2 hover:text-[#0B1C2C] transition-colors"
                  style={FONT}
                >
                  تنميل
                </Link>{" "}
                مستمر بعد حادث أو انفجار
              </>,
              "فشل العمليات الجراحية السابقة أو تدهور الحالة بعدها",
              "الحاجة لتقييم الأطراف الصناعية الذكية وإعادة التأهيل العصبي",
              "ألم مزمن غير مستجيب للعلاج التقليدي",
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

      {/* 3. DECISION BLOCK — حدد نوع إصابتك بدقة */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl md:text-2xl font-medium text-slate-900 mb-3 text-center"
            style={FONT}
          >
            حدد نوع إصابتك بدقة
          </h2>
          <p
            className="text-sm text-slate-500 text-center mb-8"
            style={FONT}
          >
            كل مسار يقود إلى تقييم متخصص مختلف
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/ar/nerve-injury-after-trauma-germany",
                label: "تنميل أو ضعف في الأطراف",
              },
              {
                href: "/ar/shrapnel-in-brain",
                label: "إصابة في الرأس أو شظايا",
              },
              {
                href: "/ar/prosthetics-after-amputation",
                label: "بتر أو طرف صناعي",
              },
              {
                href: "/ar/joint-replacement-after-trauma",
                label: "ألم بعد عملية",
              },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block px-5 py-4 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors text-center"
                style={FONT}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FILTER */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
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
            هذه الصفحة مخصصة فقط للحالات المعقدة التي لم تستجب للعلاج وليست للاستفسارات العامة أو الحالات البسيطة.
          </p>
        </div>
      </section>

      {/* 5. WARNING */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div
            className="border-r-4 border-[#0B1C2C] pr-5 py-2"
            style={FONT}
          >
            <p className="text-slate-700 text-sm leading-relaxed">
              في الحالات المعقدة، المشكلة ليست في الإصابة نفسها، بل في القرار الطبي الذي تم اتخاذه سابقاً. العديد من المرضى يصلون إلى هذه المرحلة بعد مسار علاجي طويل لم يعطِ النتيجة المطلوبة بسبب غياب التقييم المتعدد التخصصات.
              {" "}
              <Link
                href="/ar/nerve-injury-after-trauma-germany"
                className="text-[#8B6914] underline underline-offset-2 hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                إصابات الأعصاب
              </Link>
              {" "}و{" "}
              <Link
                href="/ar/shrapnel-in-brain"
                className="text-[#8B6914] underline underline-offset-2 hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                الشظايا
              </Link>
              {" "}تحتاج تقييماً متخصصاً مختلفاً عن الإصابات العادية.
            </p>
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
                href: "/ar/neurology-treatment-germany",
                label: "جراحة الأعصاب في ألمانيا",
              },
              {
                href: "/ar/brain-tumor-treatment-germany",
                label: "أورام الدماغ في ألمانيا",
              },
              {
                href: "/ar/trigeminal-neuralgia-treatment-germany",
                label: "ألم العصب الخامس",
              },
              {
                href: "/ar/herniated-disc",
                label: "العمود الفقري والانزلاق الغضروفي",
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

      {/* 7. FINAL CTA */}
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
