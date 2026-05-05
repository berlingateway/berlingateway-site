import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref =
  "https://wa.me/4917647757767?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export default function ComplexTraumaGermany() {
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
              الحالات الناتجة عن انفجارات أو حوادث حرب تتضمن شظايا داخل الجمجمة أو الدماغ. هذه الحالات تستدعي تقييماً جراحياً دقيقاً يشمل التصوير المقطعي والرنين المغناطيسي وتحديد إمكانية الاستئصال الجراحي. يختلف مسار العلاج كلياً عن إصابات الأعصاب الطرفية.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-2" style={FONT}>
              إصابات الأعصاب بعد الحوادث
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
              إصابات الأعصاب الطرفية الناتجة عن حوادث السير أو الإصابات المباشرة تتطلب تقييم تفصيلي للأعصاب المتضررة وإمكانية إعادة التوصيل الجراحي. الجراحة الدقيقة للأعصاب في ألمانيا تتيح استعادة الوظيفة في حالات كثيرة كان يُعتقد أنها غير قابلة للعلاج.
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

      {/* 4. RELATED CASES */}
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
                href="/ar/prosthetics-after-amputation-germany"
                className="block px-4 py-3 border border-slate-200 text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                تركيب الأطراف الصناعية في ألمانيا
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. FAQ */}
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
                a: "نعم، في كثير من الحالات يمكن استعادة الوظيفة العصبية جزئياً أو كلياً عبر الجراحة الدقيقة للأعصاب، خاصة إذا تم التقييم مبكراً. ألمانيا تمتلك مراكز متخصصة في إعادة توصيل الأعصاب الطرفية.",
              },
              {
                q: "هل يمكن تجنب البتر؟",
                a: "في بعض الحالات نعم. إنقاذ الطرف يعتمد على حجم الإصابة الوعائية والعصبية وسرعة التدخل. التقييم المتخصص في ألمانيا يحدد إمكانية الإنقاذ قبل اتخاذ قرار البتر.",
              },
              {
                q: "كم تستغرق إعادة التأهيل؟",
                a: "تتراوح مدة إعادة التأهيل بين 3 أشهر وسنة كاملة حسب نوع الإصابة ومستوى التدخل الجراحي. برامج إعادة التأهيل في ألمانيا مكثفة ومصممة لتحقيق أقصى استعادة للوظيفة.",
              },
              {
                q: "هل الحالات الحربية تحتاج تقييماً خاصاً؟",
                a: "نعم. إصابات الحرب تتضمن أحياناً شظايا متعددة وإصابات متزامنة في أعضاء مختلفة. هذه الحالات تتطلب فريقاً متعدد التخصصات ومرفقاً طبياً قادراً على التعامل مع التعقيد المتعدد الأنظمة.",
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
