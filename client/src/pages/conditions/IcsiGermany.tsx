import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA_HREF = "https://wa.me/4915781497451?text=" + encodeURIComponent("مرحباً، أود إرسال تقاريري الطبية لتقييم حالة الخصوبة");
const intakeHref = "/send-medical-reports";

export default function IcsiGermany() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/icsi-germany" />
      <HreflangTags currentPath="/ar/icsi-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany · برلين، ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            الحقن المجهري (ICSI) في ألمانيا
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            للعوامل الذكورية وحالات ضعف التخصيب — تقنيات متقدمة وتنسيق من برلين
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            الحقن المجهري (ICSI) هو تقنية تخصيب متقدمة تُستخدم حين لا يستطيع الحيوان المنوي اختراق البويضة بشكل طبيعي.
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
            متى يكون ICSI الخيار المناسب؟
          </h2>
          <ul className="space-y-4">
            {[
              "انخفاض حاد في عدد الحيوانات المنوية أو حركتها",
              "نسبة مورفولوجيا طبيعية منخفضة جداً",
              "فشل التخصيب في دورة IVF سابقة",
              "الحصول على الحيوانات المنوية جراحياً (TESE/MESA)",
              "الرغبة في إجراء PGD مع ضمان التخصيب",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500 border-t border-slate-100 pt-4" style={FONT}>
            تحليل السائل المنوي الشامل يحدد ما إذا كان ICSI ضرورياً أو إذا كان IVF التقليدي كافياً.
          </p>
        </div>
      </section>

      {/* HOW ICSI WORKS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>كيف يعمل ICSI؟</h2>
          <div className="space-y-4">
            {[
              "في ICSI، يختار علماء الأجنة (embryologists) الحيوان المنوي الأنسب تحت تكبير عالٍ، ثم يُحقنونه مباشرة في سيتوبلازم البويضة باستخدام إبرة دقيقة جداً. هذا يتجاوز الحاجة إلى قدرة الحيوان المنوي على اختراق البويضة بشكل ذاتي.",
              "تقنية IMSI (الحقن المجهري بتكبير عالٍ جداً) تتيح فحص بنية الحيوان المنوي بدقة أعلى قبل الاختيار — وهي متاحة في المراكز الألمانية المتخصصة للحالات التي فشلت فيها دورات ICSI سابقة.",
            ].map((p, i) => (
              <p key={i} className="text-slate-700 text-sm leading-relaxed" style={FONT}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN RECOMMENDED */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>متى يُوصى بـ ICSI؟</h2>
          <ul className="space-y-3">
            {[
              "تقرير تحليل السائل المنوي يُظهر: oligospermia، asthenospermia، أو teratospermia",
              "انعدام الحيوانات المنوية في السائل المنوي (azoospermia) مع إمكانية الاستخلاص الجراحي",
              "فشل التخصيب في دورة IVF سابقة رغم وجود بويضات وحيوانات منوية",
              "نتائج تحليل DNA الحيوانات المنوية تُظهر تلفاً مرتفعاً",
              "عمليات جراحية سابقة في الخصية أو البربخ",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>تقنيات ICSI المتاحة</h2>
          <ul className="space-y-3">
            {[
              "ICSI قياسي: حقن حيوان منوي من السائل المنوي مباشرة في البويضة",
              "ICSI مع TESE: استخلاص الحيوانات المنوية جراحياً من الخصية في حالات انعدامها بالسائل المنوي",
              "IMSI: تكبير ×6000 لاختيار الحيوان المنوي الأسلم بنيوياً — للحالات المعقدة",
              "PICSI: اختيار الحيوانات المنوية الناضجة بيولوجياً عبر ارتباطها بحمض الهيالورونيك",
              "ICSI مع PGD: فحص الأجنة وراثياً بعد التخصيب — للحالات ذات الخطر الوراثي",
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
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>لماذا ICSI في ألمانيا؟</h2>
          <div className="space-y-4">
            {[
              "مختبرات الأجنة في المراكز الألمانية المتخصصة تعمل وفق معايير ISO وتخضع لرقابة دورية. علماء الأجنة (embryologists) المعتمدون يتولون عملية الحقن بدقة عالية.",
              "تقنيات IMSI وPICSI متاحة في المراكز الألمانية المتخصصة للحالات التي تستدعي مستوى أعلى من الدقة في اختيار الحيوان المنوي.",
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
              "إرسال تقرير تحليل السائل المنوي الأخير (لا يزيد عمره عن 6 أشهر)",
              "مراجعة أولية وتحديد نوع ICSI المناسب للحالة",
              "تنسيق موعد الاستشارة مع المتخصص",
              "تصميم بروتوكول ICSI المخصص",
              "متابعة نتائج التخصيب وتطور الأجنة",
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
              { href: "/ar/pgd-germany", label: "الفحص الوراثي للأجنة (PGD) في ألمانيا" },
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
            أرسل تقرير تحليل السائل المنوي لتحديد ما إذا كان ICSI أو IMSI هو الخيار الأنسب لحالتك.
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
          <p className="text-xs text-slate-400" style={FONT}>ميديكال كير جيرماني · برلين، ألمانيا</p>
        </div>
      </footer>
    </div>
  );
}
