import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref =
  "https://wa.me/4917647757767?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export default function MedicalVisaResidencyGermany() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* SEO */}
      <title>Medical Visa Germany & Medical Residency | Treatment Access Germany</title>
      <meta
        name="description"
        content="تأشيرة العلاج في ألمانيا (فيزا) والإقامة الطبية للحالات المعقدة. تقييم الملف خلال 24–48 ساعة مع دعوة طبية مبنية على تشخيص ومسار علاجي واضح."
      />
      <link rel="canonical" href="https://medicalcaregermany.com/ar/medical-visa-residency-germany" />

      {/* 1. HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            ميديكال كير جيرماني · برلين، ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            تأشيرة العلاج في ألمانيا (فيزا) والإقامة الطبية
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            الدخول إلى ألمانيا ليس هو التحدي الحقيقي…
          </p>
          <p className="text-sm text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            في الحالات الطبية المعقدة، القرار يبدأ من التشخيص الصحيح واستمرارية العلاج داخل ألمانيا.
          </p>
          <Link
            href={intakeHref}
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            إرسال الملف الطبي للتقييم
          </Link>
        </div>
      </section>

      {/* 2. WHY THIS PAGE */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            لماذا هذه الصفحة مهمة؟
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-5" style={FONT}>
            في كثير من الحالات القادمة إلى ألمانيا، لا يكون السؤال الأول هو العلاج فقط.
          </p>
          <ul className="space-y-4">
            {[
              "هل يمكن الحصول على فيزا علاج؟",
              "هل يمكن الاستمرار داخل ألمانيا إذا احتاجت الحالة متابعة؟",
              "هل الملف الطبي قوي بما يكفي أمام المستشفى والسفارة؟",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. VISA SECTION */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6 text-center" style={FONT}>
            فيزا العلاج في ألمانيا
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
            تأشيرة العلاج تتطلب دعوة طبية رسمية من مستشفى ألماني.
            هذه الدعوة لا تصدر بشكل عشوائي، بل بعد مراجعة الملف الطبي، تحديد الحاجة العلاجية، وبناء خطة واضحة.
          </p>
        </div>
      </section>

      {/* 4. RESIDENCY SECTION */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6 text-center" style={FONT}>
            الإقامة الطبية في ألمانيا
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed" style={FONT}>
            في بعض الحالات، لا يكفي الوصول إلى ألمانيا.
            بعد العمليات الكبرى أو الحالات المعقدة، قد يحتاج المريض إلى متابعة طبية، إعادة تقييم، أو استمرارية علاج.
            لهذا يتم تجهيز الملف منذ البداية بطريقة تسمح بالحصول على الفيزا واستمرار الإقامة حسب الحاجة الطبية.
          </p>
        </div>
      </section>

      {/* 5. CASES SECTION */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            الحالات التي تحتاج هذا المسار
          </h2>
          <ul className="space-y-4">
            {[
              "عمليات جراحية كبرى",
              "جراحة الأعصاب والعمود الفقري",
              "الأورام والعلاجات المعقدة",
              "حالات تحتاج متابعة بعد العملية",
              "حالات بتقارير طبية غير واضحة أو متضاربة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. FILTER */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6 text-center" style={FONT}>
            ليس كل ملف يتم قبوله
          </h2>
          <div className="border-r-4 border-[#0B1C2C] pr-5 py-2" style={FONT}>
            <p className="text-slate-700 text-sm leading-relaxed">
              نحن نعمل فقط على الملفات التي تحتاج قرارًا طبيًا دقيقًا أو متابعة داخل ألمانيا.
              الهدف ليس السفر فقط، بل بناء مسار علاجي صحيح ومكتمل.
            </p>
          </div>
        </div>
      </section>

      {/* 7. INTERNAL LINKS */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>
            اختر المسار المناسب لحالتك
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/ar/neurology-treatment-germany", label: "جراحة الأعصاب في ألمانيا" },
              { href: "/ar/brain-tumor-treatment-germany", label: "أورام الدماغ في ألمانيا" },
              { href: "/ar/complex-trauma-evaluation", label: "إصابات الحوادث والحروب" },
              { href: "/ar/herniated-disc", label: "العمود الفقري والانزلاق الغضروفي" },
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

      {/* 8. FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>
            ابدأ بإرسال ملفك الطبي
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            يتم تقييم الملف خلال 24–48 ساعة لتحديد المسار الطبي المناسب، وإمكانية إصدار دعوة طبية رسمية عند توفر الشروط الطبية.
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
