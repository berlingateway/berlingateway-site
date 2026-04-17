import { Link } from "wouter";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref = "https://wa.me/4917647757767?text=" + encodeURIComponent("أريد التحدث مع منسق طبي بخصوص حالة عصبية");

export default function NeurologyHubArabic() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      dir="rtl"
      lang="ar"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>


      {/* 1. HERO — dark blue */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            جراحة الأعصاب في ألمانيا · ميديكال كير جيرماني
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            عندما تصبح الأعراض العصبية غير مفهومة…<br />
            <span className="font-medium">القرار الخاطئ قد يُغلق أبواباً لا تعود</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-3 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            تقييم طبي متخصص لحالات الأعصاب خلال 24–48 ساعة<br />
            ضمن شبكة المستشفيات الجامعية في ألمانيا.<br />
            مخصص للحالات المعقدة أو غير الواضحة فقط.
          </p>
          <p className="text-xs text-slate-500 mb-10" style={FONT}>
            نحن لا نقدم معلومات عامة — بل نحدد لك المسار الطبي الصحيح بناءً على ملفك.
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

      {/* 2. URGENT EVALUATION SECTION — white */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            متى تصبح حالتك بحاجة لتقييم عاجل؟
          </h2>
          <ul className="space-y-4">
            {[
              "قيل لك أنك تحتاج جراحة وتريد تأكيد القرار",
              "الأعراض مستمرة رغم العلاج لأشهر",
              "التشخيص غير واضح أو متضارب بين أطباء",
              "تنميل أو ضعف في الأطراف يتزايد",
              "دوخة أو اضطراب في التوازن بدون سبب محدد",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-medium text-[#0B1C2C] text-center border-t border-slate-100 pt-6" style={FONT}>
            في هذه الحالات، التأخير ليس خياراً آمناً.
          </p>
        </div>
      </section>

      {/* 3. RISK SECTION — dark blue */}
      <section className="py-16 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-light mb-6" style={FONT}>
            لماذا التأخير في حالات الأعصاب خطير؟
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto" style={FONT}>
            في حالات الأعصاب، التأخير في القرار قد يؤدي إلى فقدان وظائف لا يمكن استعادتها.<br />
            الضغط على العصب الذي لم يُعالج اليوم قد يتحول إلى تلف دائم غداً.<br />
            والتشخيص الخاطئ لا يضيّع الوقت فقط، بل قد يُغلق خيارات علاجية كانت متاحة في البداية.
          </p>
        </div>
      </section>

      {/* 4. GERMAN DECISION SYSTEM — white */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6 text-center" style={FONT}>
            كيف يعمل النظام الطبي الألماني؟
          </h2>
          <p className="text-slate-700 text-sm mb-6 text-center" style={FONT}>
            لا يتم اتخاذ القرار من طبيب واحد.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="border border-slate-100 p-5">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-2" style={FONT}>الفريق الطبي</p>
              <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
                جراحو الأعصاب · أطباء الأعصاب · أخصائيو الأشعة العصبية
              </p>
            </div>
            <div className="border border-slate-100 p-5">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-2" style={FONT}>ما يتم تحليله</p>
              <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
                صور الرنين المغناطيسي · التقارير السابقة · التاريخ المرضي الكامل
              </p>
            </div>
            <div className="border border-slate-100 p-5">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-2" style={FONT}>القرار النهائي</p>
              <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
                هل تحتاج جراحة؟ علاج دوائي؟ أم متابعة دقيقة؟
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATIENT PATH — 4 STEPS — white */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-10 text-center" style={FONT}>
            مسار المريض
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "1", label: "إرسال التقارير الطبية" },
              { n: "2", label: "مراجعة أولية خلال 24–48 ساعة" },
              { n: "3", label: "تحديد التخصص والمركز المناسب" },
              { n: "4", label: "بدء التنسيق الطبي" },
            ].map((step) => (
              <div key={step.n} className="text-center p-4 bg-white border border-slate-100">
                <p className="text-2xl font-light text-slate-300 mb-2" style={FONT}>{step.n}</p>
                <p className="text-xs text-slate-700 leading-relaxed" style={FONT}>{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SHORT REAL CASE — light neutral */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-medium text-slate-900 mb-6 text-center" style={FONT}>
            من تجارب مرضانا
          </h2>
          <blockquote className="border-r-2 border-[#0B1C2C] pr-5 text-slate-700 text-sm leading-relaxed" style={FONT}>
            مريض من الجزائر، 44 عاماً — وصل بتشخيص أولي يشير إلى انزلاق غضروفي وقرار بجراحة عاجلة.
            بعد مراجعة الحالة في برلين، تبيّن أن السبب الحقيقي ضغط وعائي على العصب، ولم يحتج إلى جراحة.
            اليوم يعيش حياته الطبيعية بدون تدخل جراحي.
          </blockquote>
          <p className="mt-4 text-xs text-slate-400 text-center" style={FONT}>
            تُنشر التجارب بموافقة المريض وبدون بيانات شخصية.
          </p>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>
            اختر المسار المناسب لحالتك
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/ar/brain-tumor-treatment-germany", label: "أورام الدماغ — تقييم أورام الدماغ في ألمانيا" },
              { href: "/ar/trigeminal-neuralgia-treatment-germany", label: "ألم العصب الخامس — تشخيص دقيق وعلاج متخصص" },
              { href: "/ar/herniated-disc", label: "العمود الفقري — تقييم جراحي للعمود الفقري" },
              { href: intakeHref, label: "أعراض غير مشخصة — ابدأ التقييم الآن" },
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

      {/* 7. FINAL CTA — dark blue */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>
            لا تنتظر حتى تتعقد الحالة أكثر
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            حالتك تستحق مراجعة حقيقية — ليس رأياً عاماً.<br />
            أرسل تقاريرك الطبية الآن وسيتواصل معك منسق طبي خلال 24 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={intakeHref}
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير للمراجعة
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white text-white text-sm font-light hover:bg-white hover:text-[#0B1C2C] transition-colors"
              style={FONT}
            >
              تحدث مع منسق عبر واتساب
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500 leading-relaxed" style={FONT}>
            لا تحتاج ملفاً كاملاً — أرسل ما هو متوفر الآن<br />
            مشفّر · متوافق مع GDPR · سري تماماً
          </p>
        </div>
      </section>

      {/* SYMPTOM ENTRY PAGES */}
      <section className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6 text-center" style={FONT}>
            أعراض شائعة — ابحث عن حالتك
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { href: "/ar/dizziness-long-term", label: "دوخة مستمرة" },
              { href: "/ar/vertigo-unknown-cause", label: "دوار حاد متكرر" },
              { href: "/ar/unexplained-balance-loss", label: "اضطراب التوازن" },
              { href: "/ar/numbness-one-side-body", label: "تنميل جانب واحد" },
              { href: "/ar/tingling-burning-sensation", label: "وخز وحرقة" },
              { href: "/ar/nerve-pain-face", label: "ألم عصبي في الوجه" },
              { href: "/ar/back-pain-with-numbness", label: "آلام الظهر مع تنميل" },
              { href: "/ar/chronic-neck-pain", label: "ألم الرقبة المزمن" },
              { href: "/ar/head-pressure-unknown", label: "ضغط في الرأس" },
              { href: "/ar/chronic-headache-unknown", label: "صداع مزمن" },
              { href: "/ar/weakness-in-limbs", label: "ضعف في الأطراف" },
              { href: "/ar/sudden-body-weakness", label: "ضعف مفاجئ" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block px-3 py-2 border border-slate-200 bg-slate-50 text-xs text-slate-600 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors text-center"
                style={FONT}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-white border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400" style={FONT}>
          ميديكال كير جيرماني · برلين، ألمانيا
        </p>
        <p className="text-xs text-slate-300 mt-1" style={FONT}>
          تنسيق طبي منظم ضمن المنظومة الصحية الألمانية.
        </p>
      </footer>
    </div>
  );
}
