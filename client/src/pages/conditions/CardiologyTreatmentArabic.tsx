import { Link } from "wouter";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

export default function CardiologyTreatmentArabic() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      dir="rtl"
      lang="ar"
    >
      <SmartNavLayer currentPath="/ar/neurology-treatment-germany" />
      <HreflangTags currentPath="/ar/neurology-treatment-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* SEO meta handled via document title */}


      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            رأي طبي ثانٍ في أمراض القلب · برلين · ألمانيا
          </p>
          <h1
            className="text-2xl md:text-4xl font-medium leading-snug mb-6 text-white"
            style={FONT}
          >
            قبل أن تقرر العملية أو القسطرة — اعرف رأيًا طبيًا ثانيًا من ألمانيا
          </h1>
          <p className="text-base text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            كثير من الحالات القلبية التي وصلتنا كانت تحمل قرارًا جراحيًا لم يكن ضروريًا — أو العكس، تأخير علاجي كان خطيرًا. التقييم الصحيح يبدأ بمراجعة الملف الطبي كاملاً من برلين.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              أرسل ملفك الآن للمراجعة
            </Link>
            <a
              href="https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%84%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%20%D9%84%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-slate-300 text-sm border border-slate-600 hover:border-slate-400 transition-colors"
              style={FONT}
            >
              تحدث مع منسق عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* TASK 1 — URGENT EVALUATION BLOCK */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-10" style={FONT}>
            متى تصبح حالتك القلبية بحاجة لتقييم عاجل؟
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "تم إبلاغك بضرورة إجراء عملية قلب وتحتاج تأكيد القرار",
              "لديك انسداد في الشرايين أو مشاكل في الصمامات",
              "تعاني من أعراض مستمرة (ضيق تنفس، ألم صدر، خفقان) بدون تفسير واضح",
              "قيل لك أن الحالة \"مستقرة\" لكنك لا تشعر بتحسن",
              "تم اقتراح قسطرة أو تدخل جراحي وتريد التأكد من الخيار الصحيح",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <p className="text-base text-slate-700 leading-relaxed" style={FONT}>{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500 leading-relaxed border-r-2 border-slate-300 pr-4" style={FONT}>
            في هذه الحالات، القرار الطبي الخاطئ قد يؤدي إلى تدخل غير ضروري أو تأخير خطير.
          </p>
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

      {/* TASK 2 — HEART TEAM EVALUATION PROCESS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-6" style={FONT}>
            كيف يتم تقييم حالتك القلبية في ألمانيا؟
          </h2>
          <p className="text-base text-slate-600 text-center mb-10 leading-relaxed" style={FONT}>
            لا يتم اتخاذ القرار من طبيب واحد.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-slate-200 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-semibold" style={FONT}>
                Heart Team يشمل
              </p>
              <ul className="space-y-2">
                {["أطباء القلب", "جراحي القلب", "أخصائيي الأشعة والتشخيص"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700" style={FONT}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-semibold" style={FONT}>
                يتم تحليل
              </p>
              <ul className="space-y-2">
                {["صور القسطرة", "تخطيط القلب", "الأشعة (CT / MRI)", "التقارير الطبية السابقة"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700" style={FONT}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-semibold" style={FONT}>
                ثم يتم تحديد
              </p>
              <ul className="space-y-2">
                {["هل تحتاج قسطرة؟", "عملية جراحية؟", "أم علاج تحفظي بدون تدخل؟"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700" style={FONT}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION GATEWAY */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
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
                href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
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

      {/* TASK 1 — SYSTEM LOGIC BLOCK */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-6" style={FONT}>
            كيف تعمل المنظومة الطبية الموحدة في ألمانيا؟
          </h2>
          <p className="text-base text-slate-600 text-center mb-10 leading-relaxed" style={FONT}>
            عند إرسال ملفك الطبي، لا يتم اتخاذ القرار بشكل فردي.
          </p>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed" style={FONT}>
            يتم إدخال حالتك ضمن منظومة طبية متكاملة تشمل:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "مراجعة دقيقة لكل التقارير والصور",
              "تحديد التخصص المناسب بدقة",
              "عرض الحالة على فريق طبي متخصص (Heart Team)",
              "مقارنة الخيارات العلاجية (قسطرة – جراحة – علاج تحفظي)",
              "اختيار المركز الأنسب بناءً على الحالة وليس بشكل عشوائي",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <p className="text-base text-slate-700 leading-relaxed" style={FONT}>{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500 leading-relaxed border-r-2 border-slate-300 pr-4" style={FONT}>
            كل قرار يتم اتخاذه بناءً على تقييم جماعي دقيق، وليس رأي طبيب واحد فقط.
          </p>
        </div>
      </section>

      {/* PATHWAY */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
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

      {/* TASK 3 — REQUIRED DOCUMENTS BLOCK */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-10" style={FONT}>
            لبدء التقييم الطبي، نحتاج:
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "تقارير القلب (إن وجدت)",
              "صور القسطرة أو الأشعة",
              "نتائج التحاليل",
              "وصف الأعراض الحالية",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                <p className="text-base text-slate-700 leading-relaxed" style={FONT}>{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500 leading-relaxed border-r-2 border-slate-300 pr-4" style={FONT}>
            لا يشترط أن يكون الملف كاملاً. نبدأ بما هو متوفر، ونطلب الباقي لاحقًا إذا لزم الأمر.
          </p>
        </div>
      </section>

      {/* TASK 2 — PEAK DECISION BLOCK */}
      <section className="py-16 px-6 bg-[#0B1C2C] text-white border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-white text-center mb-8" style={FONT}>
            في الحالات القلبية، التأخير في القرار قد يغيّر النتيجة بالكامل.
          </h2>
          <p className="text-sm text-slate-300 mb-6 leading-relaxed" style={FONT}>
            بعض المرضى:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "يخضعون لتدخل لم يكن ضروريًا",
              "أو يتم تأجيل العلاج رغم الحاجة",
              "أو يتم اختيار مسار غير مناسب للحالة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                <p className="text-base text-slate-300 leading-relaxed" style={FONT}>{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-base text-slate-300 leading-relaxed mb-4" style={FONT}>
            الفرق لا يكون في العلاج فقط… بل في دقة القرار في الوقت المناسب.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed border-r-2 border-slate-600 pr-4" style={FONT}>
            إذا كانت حالتك غير واضحة، أو القرار غير مؤكد، فالتقييم الصحيح في الوقت الصحيح يصنع الفرق.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-8" style={FONT}>
            قرارك القلبي يستحق مراجعة دقيقة
          </h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              أرسل ملفك الآن للمراجعة
            </Link>
            <a
              href="https://wa.me/4915781497451?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%84%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%20%D9%84%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D9%85"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-slate-300 text-sm border border-slate-600 hover:border-slate-400 transition-colors"
              style={FONT}
            >
              تحدث مع منسق عبر واتساب
            </a>
          </div>
        </div>
      </section>
      {/* PATIENT STORIES */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-10" style={FONT}>
            من ملفات المرضى
          </h2>
          <div className="space-y-8">
            <blockquote className="border-r-4 border-[#0B1C2C] pr-6 py-2">
              <p className="text-base text-slate-700 leading-relaxed mb-3" style={FONT}>
                "كنت أعاني من ضيق في التنفس وخفقان متكرر لأكثر من سنة. في ليبيا قالوا لي إن عندي مشكلة في صمام القلب وأحتاج عملية. أرسلت ملفي لبرلين — الفريق الطبي راجع كل شيء وقال إن الوضع لا يستدعي جراحة الآن، وأعطوني بروتوكول علاجي بديل. مضت ثمانية أشهر وأنا بخير."
              </p>
              <footer className="text-sm text-slate-400" style={FONT}>مريض من ليبيا، 54 عامًا</footer>
            </blockquote>
            <blockquote className="border-r-4 border-[#0B1C2C] pr-6 py-2">
              <p className="text-base text-slate-700 leading-relaxed mb-3" style={FONT}>
                "أُصبت بنوبة قلبية خفيفة وبعدها قالوا لي إن عندي انسداد في شريانين وأحتاج قسطرة عاجلة. طلبت رأيًا ثانيًا من ألمانيا — بعد مراجعة صور القسطرة والتقارير، أكد الفريق أن التدخل ضروري لكن في مركز متخصص بتقنية مختلفة. السفر كان القرار الصحيح."
              </p>
              <footer className="text-sm text-slate-400" style={FONT}>مريض من العراق، 61 عامًا</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-4" style={FONT}>
            قد تكون هذه المسارات أقرب لحالتك
          </h2>
          <p className="text-sm text-slate-500 text-center mb-10 leading-relaxed" style={FONT}>
            إذا لم تكن الحالة القلبية هي المسار الأدق، يمكنك مراجعة هذه الصفحات الطبية المرتبطة:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "الأعصاب", desc: "للأعراض العصبية، التنميل، الدوخة، واضطرابات التوازن", href: "/ar/neurology-treatment-germany" },
              { label: "الانزلاق الغضروفي", desc: "للانزلاق الغضروفي، الضغط على الأعصاب، وآلام الظهر الممتدة", href: "/ar/herniated-disc" },
              { label: "سرطان الرئة", desc: "للحالات الورمية التي تحتاج تقييمًا تشخيصيًا وعلاجيًا دقيقًا", href: "/ar/lung-cancer-treatment-germany" },
              { label: "أورام المخ", desc: "للحالات الورمية التي تحتاج تقييمًا تشخيصيًا وعلاجيًا دقيقًا", href: "/ar/brain-tumor-treatment-germany" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block p-6 border border-slate-200 bg-white hover:border-[#0B1C2C] hover:bg-slate-50 transition-all duration-200"
              >
                <h3 className="text-base font-medium text-slate-900 mb-2" style={FONT}>{item.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed" style={FONT}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
