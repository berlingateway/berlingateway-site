import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

/* ─────────────────────────────────────────────────────────────────────────────
   ألم العصب ثلاثي التوائم — صفحة عربية كاملة
   /ar/trigeminal-neuralgia-treatment-germany
   صفر نص إنجليزي — جميع التسميات مُضمَّنة صراحةً
───────────────────────────────────────────────────────────────────────────── */

const WA_NUMBER = "4915781497451";
const WA_MSG = encodeURIComponent("مرحباً، أودّ الاستفسار عن علاج ألم العصب ثلاثي التوائم في ألمانيا.");
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
const INTAKE_HREF = "/ar#intake-form";

const SYMPTOMS_VISIBLE = [
  "نوبات ألم مفاجئة وشديدة تشبه الصدمة الكهربائية أو الطعن.",
  "ألم يحفزه اللمس الخفيف، المضغ، الكلام، أو غسل الوجه.",
  "فترات خالية من الألم تقصر تدريجياً مع تقدم الحالة.",
];

const SYMPTOMS_HIDDEN = [
  "ألم يقتصر عادةً على جانب واحد من الوجه.",
  "قد يصاحبه تشنج عضلي في الوجه أثناء النوبة.",
  "تزداد النوبات تكراراً وشدةً مع مرور الوقت دون علاج مناسب.",
  "قد يُخطأ في تشخيصه كألم أسنان أو صداع نصفي.",
  "في الحالات المتقدمة قد يكون الألم شبه مستمر.",
];

const PATHWAY_STEPS = [
  "إرسال التقارير الطبية والصور والوثائق المتوفرة.",
  "مراجعة أولية للملف خلال 24–48 ساعة.",
  "تحديد ما إذا كانت الحالة تستدعي تقييماً متخصصاً أو مساراً علاجياً محدداً.",
  "توجيه الحالة إلى التخصص الأنسب عند الحاجة.",
  "توضيح الخطوات التالية بشكل منظم قبل اتخاذ أي قرار.",
];

const RELATED_LINKS = [
  { href: "/ar/brain-tumor-treatment-germany", label: "علاج أورام المخ في ألمانيا" },
  { href: "/neurology-treatment-germany", label: "علاج أمراض الأعصاب في ألمانيا" },
  { href: "/brain-surgery-germany", label: "جراحة المخ والأعصاب في ألمانيا" },
  { href: "/second-medical-opinion", label: "الرأي الطبي الثاني" },
  { href: "/advanced-diagnostics", label: "التشخيص المتقدم والدقيق" },
];

/* ── Reusable section divider ── */
function Divider() {
  return <div className="h-px bg-slate-100" />;
}

/* ── Bullet list item ── */
function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-base text-slate-700">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}

export default function TrigeminalNeuralgiaArabic() {
  const [showAllSymptoms, setShowAllSymptoms] = useState(false);
  const [showDeepDive, setShowDeepDive] = useState(false);

  const scrollToIntake = () => {
    const el = document.getElementById("intake-form");
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      window.location.href = INTAKE_HREF;
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-slate-900 font-sans"
      dir="rtl"
      lang="ar"
    >
      <Helmet>
        <title>علاج ألم العصب ثلاثي التوائم في ألمانيا | تقييم متخصص</title>
        <meta
          name="description"
          content="تقييم متخصص من استشاريي جراحة المخ والأعصاب وعلاج الألم لأحد أشد أنواع آلام الوجه. مراجعة طبية منظمة ضمن شبكة المستشفيات الجامعية في ألمانيا."
        />
        <link
          rel="canonical"
          href="https://www.medicalcaregermany.com/ar/trigeminal-neuralgia-treatment-germany"
        />
        <meta property="og:title" content="علاج ألم العصب ثلاثي التوائم في ألمانيا" />
        <meta
          property="og:description"
          content="تقييم متخصص من استشاريي جراحة المخ والأعصاب وعلاج الألم لأحد أشد أنواع آلام الوجه."
        />
        <meta
          property="og:url"
          content="https://www.medicalcaregermany.com/ar/trigeminal-neuralgia-treatment-germany"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "علاج ألم العصب ثلاثي التوائم في ألمانيا",
          description: "تقييم متخصص من استشاريي جراحة المخ والأعصاب وعلاج الألم.",
          url: "https://www.medicalcaregermany.com/ar/trigeminal-neuralgia-treatment-germany",
          about: { "@type": "MedicalCondition", name: "Trigeminal Neuralgia" },
          publisher: { "@type": "Organization", name: "Medical Care Germany", url: "https://www.medicalcaregermany.com" },
          inLanguage: "ar",
        })}</script>
      </Helmet>

      {/* ── شريط الاتصال العلوي ── */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
            info@medicalcaregermany.com
          </a>
        </div>
      </div>

      {/* ── شريط التنقل ── */}
      <nav className="sticky top-0 z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="flex flex-col">
          <Link href="/ar" className="text-xl font-serif font-bold tracking-tight text-slate-900">
            Medical Care Germany
          </Link>
          <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
            سلطة التنسيق الطبي الدولي
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/ar" className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden md:inline">
            → الرئيسية
          </Link>
          <Link
            href="/trigeminal-neuralgia-treatment-germany"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden md:inline"
          >
            EN
          </Link>
          <button
            onClick={scrollToIntake}
            className="bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors tracking-wide"
          >
            إرسال التقارير الطبية
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <header className="bg-slate-50 border-b border-slate-200 py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
            Medical Care Germany · برلين
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 leading-tight mb-4">
            علاج ألم العصب ثلاثي التوائم في ألمانيا
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            تقييم متخصص من استشاريي جراحة المخ والأعصاب وعلاج الألم لأحد أشد أنواع آلام الوجه.
          </p>
          <div className="mt-6">
            <button
              onClick={scrollToIntake}
              className="inline-block bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-700 transition-colors tracking-wide"
            >
              إرسال التقارير الطبية
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN
      ══════════════════════════════════════════════════════════════════════ */}
      <main className="max-w-3xl mx-auto px-6 py-14 md:py-20 space-y-14">

        {/* ── 2. ملخص سريع ── */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
            ما هو هذا المرض وكيف يتم تقييمه؟
          </h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4">
            العصب الثلاثي التوائم يُعد من أشد أسباب الألم في الوجه. يظهر على شكل نوبات مفاجئة وقوية تشبه الصدمة الكهربائية، وقد تؤثر بشكل كبير على الحياة اليومية.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            في بعض الحالات يكون العلاج الدوائي كافياً، لكن في حالات أخرى يحتاج المريض إلى تقييم دقيق لتحديد ما إذا كان التدخل الجراحي هو الخيار الأنسب. في ألمانيا، يتم تقييم هذه الحالات ضمن فرق متخصصة في جراحة المخ والأعصاب وعلاج الألم، لتحديد المسار العلاجي الأكثر دقة وأماناً.
          </p>
        </section>

        <Divider />

        {/* ── 3. أعراض سريعة (مع toggle) ── */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-5">
            أعراض تستدعي الانتباه
          </h2>
          <ul className="space-y-3 mb-4">
            {SYMPTOMS_VISIBLE.map((s, i) => <BulletItem key={i} text={s} />)}
            {showAllSymptoms && SYMPTOMS_HIDDEN.map((s, i) => (
              <BulletItem key={`h${i}`} text={s} />
            ))}
          </ul>
          <button
            onClick={() => setShowAllSymptoms(v => !v)}
            className="text-sm text-slate-500 border border-slate-200 px-4 py-2 hover:border-slate-400 hover:text-slate-900 transition-colors mt-1"
          >
            {showAllSymptoms ? "إخفاء التفاصيل" : "عرض كافة الأعراض والتفاصيل السريرية"}
          </button>
        </section>

        <Divider />

        {/* ── 4. التفاصيل الطبية الكاملة (expandable) ── */}
        <section>
          <button
            onClick={() => setShowDeepDive(v => !v)}
            className="w-full flex justify-between items-center text-right py-4 px-5 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <span className="text-base font-medium text-slate-800">
              التفاصيل الطبية الكاملة للمختصين
            </span>
            <span className="text-slate-400 text-lg leading-none ml-2 mr-0">
              {showDeepDive ? "−" : "+"}
            </span>
          </button>

          {showDeepDive && (
            <div className="border border-t-0 border-slate-200 px-5 py-8 space-y-10 bg-white">

              {/* عن الحالة */}
              <div>
                <h3 className="text-lg font-serif font-medium text-slate-900 mb-3">عن الحالة</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-3">
                  ألم العصب ثلاثي التوائم (Trigeminal Neuralgia) هو اضطراب عصبي مزمن يصيب العصب الخامس (العصب الثلاثي التوائم)، المسؤول عن نقل الإحساس من الوجه إلى الدماغ. يُعدّ من أشد أنواع الألم المزمن المعروفة في الطب.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  يحدث الألم عادةً نتيجة ضغط وعاء دموي على جذر العصب عند دخوله جذع الدماغ، مما يؤدي إلى تلف في الغلاف الواقي للعصب (الميالين) وبالتالي إرسال إشارات ألم مفاجئة وشديدة.
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              {/* الأسباب وعوامل الخطر */}
              <div>
                <h3 className="text-lg font-serif font-medium text-slate-900 mb-3">الأسباب وعوامل الخطر</h3>
                <ul className="space-y-2">
                  {[
                    "ضغط وعاء دموي على جذر العصب الثلاثي التوائم (السبب الأكثر شيوعاً).",
                    "إصابة بالتصلب المتعدد تؤثر على غلاف الميالين.",
                    "ورم أو تشوه وعائي يضغط على العصب.",
                    "إصابة أو جراحة سابقة في منطقة الوجه أو الجمجمة.",
                    "في بعض الحالات لا يُحدَّد سبب واضح (ألم عصبي مجهول السبب).",
                  ].map((item, i) => <BulletItem key={i} text={item} />)}
                </ul>
              </div>

              <div className="h-px bg-slate-100" />

              {/* التشخيص في ألمانيا */}
              <div>
                <h3 className="text-lg font-serif font-medium text-slate-900 mb-3">التشخيص في ألمانيا</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-3">
                  يعتمد التشخيص الدقيق على مجموعة من الأدوات السريرية والتصويرية:
                </p>
                <ul className="space-y-2">
                  {[
                    "التقييم السريري التفصيلي لوصف الألم وأنماطه ومحفزاته.",
                    "التصوير بالرنين المغناطيسي (MRI) بروتوكول خاص لتصوير الأوعية الدموية بالقرب من العصب.",
                    "استبعاد الأسباب الأخرى كالتصلب المتعدد أو الأورام.",
                    "تقييم متعدد التخصصات يشمل طب الأعصاب وجراحة المخ وعلاج الألم.",
                  ].map((item, i) => <BulletItem key={i} text={item} />)}
                </ul>
              </div>

              <div className="h-px bg-slate-100" />

              {/* الخيارات العلاجية */}
              <div>
                <h3 className="text-lg font-serif font-medium text-slate-900 mb-3">الخيارات العلاجية</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-3">
                  يعتمد اختيار العلاج على شدة الحالة، ونتائج التصوير، والاستجابة للعلاج الدوائي السابق:
                </p>
                <ul className="space-y-2">
                  {[
                    "العلاج الدوائي: مضادات الاختلاج (كالكاربامازيبين) كخط علاجي أول.",
                    "جراحة تخفيف الضغط الوعائي (MVD): إزالة الضغط عن العصب جراحياً.",
                    "التدخلات الإشعاعية التوجيهية (Gamma Knife / Radiosurgery).",
                    "الإجراءات التدخلية على العقدة العصبية (Percutaneous procedures).",
                    "تقييم متكامل لتحديد الخيار الأنسب بحسب كل حالة على حدة.",
                  ].map((item, i) => <BulletItem key={i} text={item} />)}
                </ul>
              </div>

            </div>
          )}
        </section>

        <Divider />

        {/* ── لماذا ألمانيا؟ ── */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">لماذا ألمانيا؟</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-3">
            يلجأ بعض المرضى إلى ألمانيا عندما تكون الحالة معقدة، أو عندما يكون هناك شك في دقة التشخيص، أو عندما لم يستجب العلاج الدوائي بالشكل المطلوب.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            ما يميز هذا المسار هو التنظيم، ودقة التقييم، وإمكانية مراجعة الحالة داخل بيئة جامعية متخصصة تجمع أكثر من تخصص في وقت واحد — جراحة أعصاب، طب ألم، وتصوير عصبي دقيق.
          </p>
        </section>

        <Divider />

        {/* ── مراجعة متخصصة ── */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">مراجعة متخصصة</h2>
          <p className="text-base text-slate-700 leading-relaxed mb-3">
            تحتاج الحالة إلى مراجعة متخصصة إذا كان هناك:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "ألم مستمر أو متكرر رغم العلاج الدوائي.",
              "عدم وضوح في التشخيص أو تضارب في الآراء الطبية.",
              "توصية بتدخل جراحي أو إجراء إشعاعي دون تقييم كافٍ.",
              "رغبة في الحصول على رأي ثانٍ قبل اتخاذ قرار علاجي نهائي.",
              "حالة متقدمة لم تستجب للعلاجات المتاحة محلياً.",
            ].map((item, i) => <BulletItem key={i} text={item} />)}
          </ul>
          <p className="text-sm text-slate-500 leading-relaxed">
            يمكن إرسال التقارير الطبية للحصول على تقييم أولي قبل اتخاذ أي قرار علاجي.
          </p>
        </section>

        <Divider />

        {/* ── مسار المريض ── */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-6">مسار المريض</h2>
          <ol className="space-y-4">
            {PATHWAY_STEPS.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-medium flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-base text-slate-700 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <Divider />

        {/* ── حالات وخدمات مرتبطة ── */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">حالات وخدمات مرتبطة</h2>
          <div className="flex flex-wrap gap-3">
            {RELATED_LINKS.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm text-slate-600 border border-slate-200 px-4 py-2 hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── CTA box ── */}
        <section className="bg-slate-50 border border-slate-200 px-8 py-10">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">الخطوة التالية</p>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-3">
            إرسال التقارير الطبية للمراجعة
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            إذا كانت الحالة غير واضحة، أو لم يستجب الألم للعلاج الدوائي، يمكن إرسال التقارير الطبية للحصول على مراجعة أولية منظمة قبل اتخاذ أي قرار علاجي.
          </p>
          <button
            onClick={scrollToIntake}
            className="inline-block bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-700 transition-colors tracking-wide"
          >
            إرسال التقارير الطبية
          </button>
          <p className="text-xs text-slate-400 mt-4">
            يتم التعامل مع كافة الوثائق وفقاً لمعايير حماية البيانات الألمانية الصارمة (GDPR).
          </p>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">إطار تنسيق طبي منظم ضمن المنظومة الصحية الألمانية.</p>
        <p className="text-xs text-slate-300 mt-1">Medical Care Germany · برلين، ألمانيا</p>
      </footer>

      {/* ── زر WhatsApp العائم ── */}
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-green-600 text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        style={{ maxWidth: "calc(100vw - 3rem)" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline">التنسيق الطبي</span>
      </a>
    </div>
  );
}
