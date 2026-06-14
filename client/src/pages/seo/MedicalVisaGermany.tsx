import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/ar/ارسال-التقارير-الطبية";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

const CANONICAL = "https://medicalcaregermany.com/ar/فيزا-العلاج-في-المانيا";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ما نوع الفيزا المطلوبة للعلاج في ألمانيا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تأشيرة شنغن لأغراض طبية (Medical Visa). تُمنح لمدة تتناسب مع مدة العلاج المتوقعة.",
      },
    },
    {
      "@type": "Question",
      name: "ما المستند الأساسي المطلوب من المستشفى؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "خطاب دعوة رسمي من المستشفى الألماني يؤكد الموعد ونوع العلاج والتكلفة التقديرية.",
      },
    },
    {
      "@type": "Question",
      name: "كم تستغرق إجراءات الفيزا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تتراوح عادةً بين أسبوعين وأربعة أسابيع من تاريخ تقديم الطلب الكامل.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن استصدار فيزا لمرافق المريض؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. يمكن تقديم طلب فيزا لمرافق واحد مع الإشارة إلى العلاقة بالمريض في ملف الطلب.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن تمديد الفيزا العلاجية إذا استمر العلاج؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. يمكن تمديد الإقامة من داخل ألمانيا بتقرير طبي محدّث من المستشفى المعالج يثبت استمرار الحاجة للعلاج.",
      },
    },
    {
      "@type": "Question",
      name: "هل يستطيع المرافق البقاء طوال فترة العلاج؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. يحق لمرافق واحد التقديم على فيزا مرافق ضمن نفس الملف. مدة الفيزا تتناسب مع مدة علاج المريض.",
      },
    },
    {
      "@type": "Question",
      name: "هل أحتاج دعوة رسمية من مستشفى ألماني؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. خطاب الدعوة الرسمي من المستشفى الألماني هو المستند الأساسي في طلب الفيزا العلاجية. يؤكد الموعد والتكلفة التقديرية ونوع العلاج.",
      },
    },
    {
      "@type": "Question",
      name: "هل يمكن العلاج في ألمانيا لأكثر من 90 يوماً؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. الفيزا العلاجية يمكن أن تتجاوز 90 يوماً للحالات التي تتطلب ذلك، بناءً على خطة العلاج الموثقة من المستشفى الألماني.",
      },
    },
    {
      "@type": "Question",
      name: "هل تحتاج السفارة تقريراً طبياً من بلد الإقامة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "غالباً نعم. التقارير الطبية الحالية تُقوّي الملف وتثبت الحاجة الفعلية للعلاج في ألمانيا. إرسالها مسبقاً للمراجعة يساعد في إعداد ملف متكامل.",
      },
    },
    {
      "@type": "Question",
      name: "كم تستغرق إجراءات فيزا العلاج في ألمانيا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تتراوح عادةً بين أسبوعين وأربعة أسابيع من تاريخ تقديم الطلب الكامل.",
      },
    },
  ],
};

export default function MedicalVisaGermany() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      <SmartNavLayer currentPath="/ar/فيزا-العلاج-في-المانيا" />
      <HreflangTags currentPath="/ar/فيزا-العلاج-في-المانيا" />

      {/* SEO */}
      <title>فيزا علاجية ألمانيا | تأشيرة العلاج والإقامة الطبية</title>
      <meta
        name="description"
        content="دليل الفيزا العلاجية في ألمانيا: الدعوة الطبية، فيزا المرافق، تمديد الإقامة أثناء العلاج، والتنسيق الطبي للحالات المعقدة في برلين."
      />
      <link rel="canonical" href={CANONICAL} />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* 1. HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            فيزا العلاج في ألمانيا
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10" style={FONT}>
            تأشيرة العلاج تتطلب دعوة رسمية من المستشفى — وهذا يبدأ بتقييم الملف الطبي.
          </p>
          <Link
            href={intakeHref}
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            أرسل ملفك الطبي للتقييم
          </Link>
        </div>
      </section>

      {/* 1b. CLINICAL CONTEXT BLOCK */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto" dir="rtl">
          <p className="text-sm text-slate-700 leading-relaxed mb-5" style={FONT}>
            في بعض الحالات، تستمر الأعراض لسنوات دون تشخيص واضح، رغم إجراء فحوصات متعددة.
          </p>
          <p className="text-sm font-medium text-slate-800 mb-3" style={FONT}>مثل:</p>
          <ul className="space-y-2 mb-5">
            {["دوخة مستمرة", "عدم توازن", "تنميل أو ضعف"].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-700 leading-relaxed mb-5" style={FONT}>
            غالبًا يتم التعامل مع هذه الأعراض بشكل منفصل، دون الوصول إلى السبب الحقيقي.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-5" style={FONT}>
            عند مراجعة الملف الطبي بشكل منهجي في ألمانيا، يتم تحليل جميع النتائج ضمن سياق واحد، مما يسمح بتحديد التشخيص الصحيح.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
            في هذه الحالات، لا يكون التغيير في العلاج فقط،<br />بل في اتخاذ القرار الطبي من البداية.
          </p>
          {/* Internal Link 1 — contextual neurology link */}
          <p className="text-sm text-slate-700 leading-relaxed mt-5" style={FONT}>
            إذا كانت الحالة تشمل أعراضاً عصبية كالدوخة المزمنة أو ألم الوجه المتكرر، يُنصح بمراجعة متخصص في{" "}
            <Link href="/ar/neurology-treatment-germany" className="text-[#0B1C2C] underline underline-offset-2 hover:opacity-70" style={FONT}>
              أمراض الأعصاب في ألمانيا
            </Link>{" "}
            قبل تحديد مسار العلاج.
          </p>
        </div>
      </section>

      {/* 2. QUICK ANSWERS */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            أسئلة شائعة
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "ما نوع الفيزا المطلوبة للعلاج في ألمانيا؟",
                a: "تأشيرة شنغن لأغراض طبية (Medical Visa). تُمنح لمدة تتناسب مع مدة العلاج المتوقعة.",
              },
              {
                q: "ما المستند الأساسي المطلوب من المستشفى؟",
                a: "خطاب دعوة رسمي من المستشفى الألماني يؤكد الموعد ونوع العلاج والتكلفة التقديرية.",
              },
              {
                q: "كم تستغرق إجراءات الفيزا؟",
                a: "تتراوح عادةً بين أسبوعين وأربعة أسابيع من تاريخ تقديم الطلب الكامل.",
              },
              {
                q: "هل يمكن استصدار فيزا لمرافق المريض؟",
                a: "نعم. يمكن تقديم طلب فيزا لمرافق واحد مع الإشارة إلى العلاقة بالمريض في ملف الطلب.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-slate-100 pb-5">
                <p className="text-sm font-medium text-[#0B1C2C] mb-2" style={FONT}>{item.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP PROCESS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            خطوات البدء
          </h2>
          <ol className="space-y-6">
            {[
              {
                number: "١",
                title: "الحصول على دعوة المستشفى",
                body: "يُصدر المستشفى خطاب دعوة رسمياً بعد تأكيد الموعد والدفع المقدم.",
              },
              {
                number: "٢",
                title: "تجهيز الوثائق",
                body: "جواز سفر ساري، صور شخصية، تأمين سفر، كشف حساب بنكي، وثائق طبية.",
              },
              {
                number: "٣",
                title: "التقديم في السفارة الألمانية",
                body: "يُقدَّم الطلب في السفارة أو القنصلية الألمانية في بلد الإقامة.",
              },
              {
                number: "٤",
                title: "استلام التأشيرة والسفر",
                body: "بعد الموافقة، يُنسق موعد السفر بما يتوافق مع موعد المستشفى.",
              },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4" style={FONT}>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1C2C] text-white text-xs flex items-center justify-center font-medium">
                  {step.number}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-900 mb-1">{step.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          {/* Internal Link 2 — after خطوات البدء */}
          <p className="text-sm text-slate-700 leading-relaxed mt-8 pt-6 border-t border-slate-100" style={FONT}>
            بعد تأكيد خطة العلاج، يمكنك{" "}
            <Link href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" className="text-[#0B1C2C] underline underline-offset-2 hover:opacity-70" style={FONT}>
              إرسال ملفك الطبي
            </Link>{" "}
            للمراجعة وتحديد الخطوة التالية.
          </p>
        </div>
      </section>

      {/* NEW SECTION — ماذا يحدث إذا احتاج العلاج عدة أشهر؟ */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8" style={FONT}>
            ماذا يحدث إذا احتاج العلاج عدة أشهر؟
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4" style={FONT}>
            بعض الحالات الطبية المعقدة لا تنتهي في زيارة واحدة.
            جراحات العمود الفقري، علاج الأورام، إعادة التأهيل العصبي —
            كلها قد تمتد من أسابيع إلى أشهر.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-8" style={FONT}>
            وهذا يطرح سؤالاً عملياً تسأله كل أسرة:
            كيف نبقى؟
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-base font-medium text-slate-900 mb-3" style={FONT}>
                فيزا علاجية طويلة المدى
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
                الفيزا العلاجية الأساسية تُمنح بمدة تتناسب مع خطة العلاج.
                في الحالات المطولة، يمكن التقديم على فيزا تغطي المدة الكاملة
                بناءً على تقرير المستشفى الألماني وخطة العلاج المعتمدة.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-slate-900 mb-3" style={FONT}>
                تمديد الإقامة أثناء العلاج
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
                إذا تطلّب العلاج وقتاً أطول من المتوقع،
                يمكن تمديد الإقامة من داخل ألمانيا عبر مكتب الأجانب (Ausländerbehörde)
                بتقرير طبي محدّث من المستشفى المعالج.
                هذا الإجراء معتاد ومُنظَّم في الحالات الطبية.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-slate-900 mb-3" style={FONT}>
                فيزا المرافق
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
                يحق لمرافق واحد التقديم على فيزا مرافق (Begleitperson)
                ضمن نفس ملف طلب الفيزا.
                في حالات المرضى الذين يحتاجون رعاية مستمرة،
                يُذكر ذلك صراحةً في خطاب الدعوة من المستشفى.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-slate-900 mb-3" style={FONT}>
                التنسيق الإداري في برلين
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
                بعد الوصول، تبقى هناك متطلبات إدارية:
                تسجيل الإقامة، التواصل مع المستشفى،
                ومتابعة الوثائق المطلوبة للتمديد.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mt-3" style={FONT}>
                فريق التنسيق في برلين يتابع هذا الجانب بالتوازي مع المسار العلاجي —
                حتى تتفرغ العائلة للمريض فقط.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILS / LOGISTICS */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>
            الوثائق المطلوبة عادةً
          </h2>
          <ul className="space-y-3">
            {[
              "جواز سفر ساري لمدة لا تقل عن 6 أشهر",
              "خطاب دعوة رسمي من المستشفى الألماني",
              "وثائق طبية تثبت الحاجة للعلاج",
              "تأمين سفر يغطي التكاليف الطبية الطارئة",
              "كشف حساب بنكي يثبت القدرة على تغطية التكاليف",
              "صور شخصية وفق مواصفات السفارة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. INTERNAL LINKS */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>
            اختر المسار المناسب لحالتك
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/ar/العلاج-في-المانيا-للعرب", label: "العلاج في ألمانيا للعرب" },
              { href: "/treatment-in-germany-arab-patients", label: "دليل العلاج في ألمانيا للمرضى العرب" },
              { href: "/ar/تكلفة-العلاج-في-المانيا", label: "تكلفة العلاج في ألمانيا" },
              { href: "/ar/neurology-treatment-germany", label: "علاج أمراض الأعصاب" },
              { href: "/ar/cardiology-treatment-germany", label: "علاج أمراض القلب" },
              { href: "/ar/brain-tumor-treatment-germany", label: "علاج أورام المخ" },
              { href: "/ar/herniated-disc", label: "علاج الانزلاق الغضروفي" },
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

      {/* 5b. TRUST INDICATORS */}
      <section className="py-10 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "تنسيق من برلين" },
              { label: "مراجعة خلال 48 ساعة" },
              { label: "خبرة مع المرضى الدوليين" },
              { label: "سرية تامة" },
            ].map((t, i) => (
              <div key={i} className="py-4 px-2 border border-slate-100">
                <p className="text-xs text-slate-500 leading-snug" style={FONT}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>
            ابدأ بإرسال ملفك الطبي الآن
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            يتم مراجعة الملفات خلال 24–48 ساعة من قِبل منسق طبي في برلين.
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
              تحدث مع منسق عبر واتساب
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500 leading-relaxed" style={FONT}>
            لا تحتاج ملفاً كاملاً — أرسل ما هو متوفر الآن
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            أسئلة شائعة حول الفيزا العلاجية في ألمانيا
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "هل يمكن تمديد الفيزا العلاجية إذا استمر العلاج؟",
                a: "نعم. يمكن تمديد الإقامة من داخل ألمانيا بتقرير طبي محدّث من المستشفى المعالج يثبت استمرار الحاجة للعلاج.",
              },
              {
                q: "هل يستطيع المرافق البقاء طوال فترة العلاج؟",
                a: "نعم. يحق لمرافق واحد التقديم على فيزا مرافق ضمن نفس الملف. مدة الفيزا تتناسب مع مدة علاج المريض.",
              },
              {
                q: "هل أحتاج دعوة رسمية من مستشفى ألماني؟",
                a: "نعم. خطاب الدعوة الرسمي من المستشفى الألماني هو المستند الأساسي في طلب الفيزا العلاجية. يؤكد الموعد والتكلفة التقديرية ونوع العلاج.",
              },
              {
                q: "كم تستغرق إجراءات الفيزا العلاجية؟",
                a: "تتراوح عادةً بين أسبوعين وأربعة أسابيع من تاريخ تقديم الطلب الكامل. يُنصح بالتقديم المبكر بعد تأكيد موعد المستشفى مباشرة.",
              },
              {
                q: "هل يمكن العلاج في ألمانيا لأكثر من 90 يوماً؟",
                a: "نعم. الفيزا العلاجية يمكن أن تتجاوز 90 يوماً للحالات التي تتطلب ذلك، بناءً على خطة العلاج الموثقة من المستشفى الألماني.",
              },
              {
                q: "هل تحتاج السفارة تقريراً طبياً من بلد الإقامة؟",
                a: "غالباً نعم. التقارير الطبية الحالية تُقوّي الملف وتثبت الحاجة الفعلية للعلاج في ألمانيا. إرسالها مسبقاً للمراجعة يساعد في إعداد ملف متكامل.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-slate-100 pb-5">
                <p className="text-sm font-medium text-[#0B1C2C] mb-2" style={FONT}>{item.q}</p>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TALLY FORM */}
      <section id="submit-file" className="py-16 px-6 bg-white border-t border-slate-100" dir="rtl" style={{ scrollMarginTop: "90px" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            أرسل ملفك الطبي الآن
          </h2>
          <iframe
            src="https://tally.so/embed/68MrBP?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            style={{ minHeight: "1200px", border: "none" }}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Medical Care Germany — إرسال التقارير الطبية"
          />
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
