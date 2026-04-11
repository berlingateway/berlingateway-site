import { Link } from "wouter";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

export default function CardiologyTreatmentArabic() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      dir="rtl"
      lang="ar"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* SEO meta handled via document title */}

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            أمراض وجراحة القلب في ألمانيا
          </p>
          <h1
            className="text-2xl md:text-4xl font-medium leading-snug mb-6 text-white"
            style={FONT}
          >
            عندما تصبح حالة القلب معقدة… نحدد لك المسار العلاجي أو الجراحي الصحيح في ألمانيا
          </h1>
          <p className="text-base text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            تقييم طبي وجراحي للحالات القلبية المعقدة خلال 24–48 ساعة وربطها بالمركز المناسب.
          </p>
          <Link
            href="/send-medical-reports"
            className="inline-block px-10 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            ابدأ التقييم الآن
          </Link>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-10" style={FONT}>
            هل هذه حالتك؟
          </h2>
          <ul className="space-y-4">
            {[
              "تم إبلاغك بضرورة إجراء عملية قلب وتريد رأيًا ثانيًا",
              "تحتاج إلى تدخل جراحي أو قسطرة لعلاج الصمامات",
              "تعاني من أعراض قلبية مستمرة بدون تشخيص واضح",
              "حالتك معقدة وتحتاج مركز متخصص في ألمانيا",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <p className="text-base text-slate-700 leading-relaxed" style={FONT}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-10" style={FONT}>
            المنظومة القلبية في ألمانيا
          </h2>
          <ul className="space-y-4">
            {[
              "مراكز قلب متخصصة (Herzzentrum)",
              "قرارات علاجية عبر Heart Team",
              "تقنيات جراحية وتداخلية متقدمة",
              "بروتوكولات صارمة بعد العمليات",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <p className="text-base text-slate-700 leading-relaxed" style={FONT}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DECISION GATEWAY */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "جراحة القلب والصدر",
                desc: "عمليات القلب المفتوح والحالات الجراحية المعقدة",
              },
              {
                title: "القسطرة والتدخلات",
                desc: "الدعامات وصمامات القلب عبر القسطرة",
              },
              {
                title: "كهرباء القلب",
                desc: "منظمات القلب وعلاج اضطرابات النظم",
              },
              {
                title: "حالة غير مشخصة",
                desc: "تقييم أولي للحالات غير الواضحة",
              },
            ].map((card, i) => (
              <Link
                key={i}
                href="/send-medical-reports"
                className="block p-6 border border-slate-200 bg-white hover:border-[#0B1C2C] hover:bg-slate-50 transition-all duration-200"
              >
                <h3 className="text-base font-medium text-slate-900 mb-2" style={FONT}>
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed" style={FONT}>
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAY */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-12" style={FONT}>
            مسار التنسيق
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {[
              { step: "الخطوة الأولى", label: "مراجعة التقارير" },
              { step: "الخطوة الثانية", label: "تحديد التخصص المناسب" },
              { step: "الخطوة الثالثة", label: "اختيار المركز" },
              { step: "الخطوة الرابعة", label: "بدء العلاج" },
            ].map((s, i) => (
              <div key={i} className="flex-1 text-center">
                <div className="text-sm font-medium text-slate-400 mb-2" style={FONT}>{s.step}</div>
                <h3 className="text-base font-medium text-slate-900" style={FONT}>{s.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-8" style={FONT}>
            ابدأ الآن
          </h2>
          <Link
            href="/send-medical-reports"
            className="inline-block px-10 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            أرسل ملفك الطبي
          </Link>
        </div>
      </section>
    </div>
  );
}
