import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA_HREF = "https://wa.me/4915781497451?text=" + encodeURIComponent("مرحباً، أود إرسال تقاريري الطبية لتقييم حالة الخصوبة");
const intakeHref = "/send-medical-reports";

export default function PgdGermany() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/pgd-germany" />
      <HreflangTags currentPath="/ar/pgd-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany · برلين، ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            الفحص الوراثي للأجنة (PGD) في ألمانيا
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            للحالات الوراثية والفشل المتكرر — تشخيص جيني دقيق قبل نقل الجنين
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            الفحص الجيني للأجنة قبل الزرع (PGD/PGT) يتيح فحص الأجنة وراثياً قبل نقلها إلى الرحم.
          </p>
          <Link href={intakeHref} className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors" style={FONT}>
            أرسل تقاريرك الآن للحصول على قرار طبي واضح
          </Link>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            متى يكون PGD ضرورياً؟
          </h2>
          <ul className="space-y-4">
            {[
              "فشل دورتي IVF أو أكثر دون تفسير واضح",
              "إجهاض متكرر (مرتين أو أكثر)",
              "تاريخ عائلي لأمراض وراثية محددة",
              "عمر المرأة فوق 37 مع رغبة في تحسين معدلات النجاح",
              "تشخيص سابق بتشوهات كروموسومية في الأجنة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500 border-t border-slate-100 pt-4" style={FONT}>
            PGD لا يُجرى في كل حالة — التقييم المتخصص يحدد ما إذا كان مبرراً طبياً.
          </p>
        </div>
      </section>

      {/* HOW PGD WORKS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>كيف يعمل PGD؟</h2>
          <div className="space-y-4">
            {[
              "PGD يشمل نوعين رئيسيين: PGT-A (فحص التوازن الكروموسومي الكامل) الذي يكشف عن الأجنة ذات العدد الطبيعي من الكروموسومات، وPGT-M (الفحص الجيني للأمراض الوراثية المحددة) الذي يكشف عن جينات أمراض بعينها كالثلاسيميا والتليف الكيسي.",
              "الفحص يُجرى على خلايا من الجنين في مرحلة البلاستوسيست (اليوم الخامس أو السادس) — وهي المرحلة الأكثر دقة للفحص الجيني. يُنقل الجنين السليم وراثياً في دورة لاحقة لتحقيق أفضل النتائج.",
            ].map((p, i) => (
              <p key={i} className="text-slate-700 text-sm leading-relaxed" style={FONT}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN RECOMMENDED */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>متى يُوصى بـ PGD؟</h2>
          <ul className="space-y-3">
            {[
              "فشل IVF متكرر مع أجنة تبدو طبيعية مورفولوجياً",
              "إجهاض متكرر مع تحليل الأجنة يُظهر تشوهات كروموسومية",
              "أحد الزوجين حامل لجين مرض وراثي",
              "تشخيص بانتقال كروموسومي متوازن (Balanced Translocation)",
              "رغبة في تحسين معدلات الحمل في الدورات القادمة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>أنواع PGD المتاحة</h2>
          <ul className="space-y-3">
            {[
              "PGT-A (Preimplantation Genetic Testing for Aneuploidy): فحص الـ 24 كروموسوم كاملاً — للفشل المتكرر والإجهاض المتكرر",
              "PGT-M (Preimplantation Genetic Testing for Monogenic disorders): فحص جين مرض وراثي محدد — يتطلب تحضيراً مسبقاً",
              "PGT-SR (Structural Rearrangements): للحالات ذات الانتقال الكروموسومي المتوازن",
              "PGD مع ICSI: الجمع بين الحقن المجهري والفحص الجيني في نفس الدورة",
              "نقل الجنين المجمد (FET) بعد PGD: نقل الجنين السليم في دورة لاحقة لتحسين ظروف الرحم",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY GERMANY */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>لماذا PGD في ألمانيا؟</h2>
          <div className="space-y-4">
            {[
              "PGD في ألمانيا مسموح به قانونياً للمؤشرات الطبية المبررة وفق قانون حماية الجنين الألماني. هذا يوفر إطاراً قانونياً واضحاً وشفافاً للمرضى الدوليين.",
              "مختبرات الجينات المتخصصة في ألمانيا تستخدم تقنية NGS (التسلسل الجيني من الجيل التالي) لفحص الكروموسومات بدقة عالية — مما يتجاوز دقة تقنيات FISH القديمة.",
            ].map((p, i) => (
              <p key={i} className="text-slate-700 text-sm leading-relaxed" style={FONT}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAY */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>مسار الحالة</h2>
          <ol className="space-y-3">
            {[
              "إرسال التقارير الطبية وتاريخ الحالة الكامل",
              "تحديد نوع PGD المناسب (PGT-A أو PGT-M أو PGT-SR)",
              "في حالة PGT-M: التنسيق مع مختبر الجينات للتحضير المسبق",
              "دورة IVF/ICSI مع خزعة الجنين في اليوم الخامس",
              "نقل الجنين السليم وراثياً في دورة FET لاحقة",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-0.5 text-xs font-semibold text-[#0B1C2C] w-5 flex-shrink-0">{i + 1}.</span>
                <span className="text-slate-700 text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>صفحات ذات صلة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
              { href: "/ar/ivf-germany", label: "أطفال الأنابيب (IVF) في ألمانيا" },
              { href: "/ar/icsi-germany", label: "الحقن المجهري (ICSI) في ألمانيا" },
              { href: "/ar/ivf-cost-germany", label: "تكلفة أطفال الأنابيب في ألمانيا" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="block px-4 py-3 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors" style={FONT}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>ابدأ بتقييم حالتك</h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            أرسل تاريخ حالتك الكامل لتحديد ما إذا كان PGD مبرراً طبياً وأي نوع منه مناسب لحالتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={intakeHref} className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors" style={FONT}>
              إرسال التقارير للمراجعة
            </Link>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white text-white text-sm font-light hover:bg-white hover:text-[#0B1C2C] transition-colors" style={FONT}>
              تواصل عبر واتساب
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500" style={FONT}>جميع البيانات محمية وفق اللائحة الأوروبية لحماية البيانات (GDPR).</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100">
        <ArabicFooterGuide />
        <div className="py-8 px-6 text-center">
          <p className="text-xs text-slate-400" style={FONT}>Medical Care Germany</p>
        </div>
      </footer>
    </div>
  );
}
