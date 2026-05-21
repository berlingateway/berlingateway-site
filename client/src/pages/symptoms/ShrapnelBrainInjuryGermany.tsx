import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export default function ShrapnelBrainInjuryGermany() {
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
            Medical Care Germany
          </p>
          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-6"
            style={FONT}
          >
            شظايا في الرأس بعد انفجار أو إصابة؟
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed"
            style={FONT}
          >
            صداع مستمر؟ دوخة؟ تنميل؟
            في هذه الحالات، المشكلة ليست في الألم… بل في موقع الشظايا وتأثيرها على الدماغ.
            نوفر تقييمًا دقيقًا خلال 24–48 ساعة داخل مستشفيات جامعية في ألمانيا.
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
            أرسل التقارير الآن للحصول على قرار طبي واضح
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
              "صداع مستمر بعد إصابة في الرأس",
              "دوخة أو فقدان توازن",
              "تنميل أو ضعف في أحد الأطراف",
              "مشاكل في التركيز أو الذاكرة بعد الحادث",
              "شظايا تم تجاهلها أو لم يتم تقييمها بدقة",
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
            هذه الصفحة مخصصة للحالات التي لم يتم تقييمها بدقة أو لم تستجب للعلاج.
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
              التأخير في تقييم شظايا الرأس قد يُخفي تأثيرًا عصبيًا خطيرًا يحتاج تدخلاً دقيقًا قبل تفاقم الحالة.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MID CTA */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-slate-600 mb-6" style={FONT}>
            لا تنتظر حتى تتفاقم الحالة.
            <br />
            أرسل التقارير الآن — واحصل على تقييم خلال 24–48 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={intakeHref}
              className="px-8 py-4 bg-[#0B1C2C] text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
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
                href="/ar/nerve-injury-after-trauma-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                إصابات الأعصاب بعد الحوادث
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
                q: "هل الحالات الحربية تحتاج تقييماً خاصاً؟",
                a: "نعم. إصابات الحرب والانفجارات تتضمن أحياناً شظايا متعددة وإصابات متزامنة في أعضاء مختلفة. هذه الحالات تتطلب فريقاً متعدد التخصصات ومرفقاً طبياً قادراً على التعامل مع التعقيد المتعدد الأنظمة.",
              },
              {
                q: "هل يمكن إزالة الشظايا من الدماغ جراحياً؟",
                a: "يعتمد ذلك على موقع الشظايا وقربها من مناطق حيوية. التصوير بالرنين المغناطيسي والمقطعي يحدد إمكانية التدخل الجراحي الآمن. بعض الشظايا يمكن إزالتها بدقة عالية في مراكز جراحة الدماغ المتخصصة.",
              },
              {
                q: "كم تستغرق إعادة التأهيل بعد إصابة الرأس؟",
                a: "تتراوح مدة إعادة التأهيل بين أشهر وسنوات حسب شدة الإصابة. برامج إعادة التأهيل العصبي في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للوظيفة المعرفية والحركية.",
              },
              {
                q: "هل إصابات الشظايا الناتجة عن الانفجارات تختلف عن الحوادث العادية؟",
                a: "نعم. إصابات الانفجارات تسبب موجة ضغط تؤثر على الدماغ حتى بدون اختراق مباشر، إضافة إلى الشظايا المتعددة. هذا النوع يحتاج تقييماً أكثر شمولاً يتضمن اختبارات عصبية معرفية وتصوير متخصص.",
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
