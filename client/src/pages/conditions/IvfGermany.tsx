import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA_HREF = "https://wa.me/4915781497451?text=" + encodeURIComponent("مرحباً، أود إرسال تقاريري الطبية لتقييم حالة الخصوبة");
const intakeHref = "/send-medical-reports";

export default function IvfGermany() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/ivf-germany" />
      <HreflangTags currentPath="/ar/ivf-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany · برلين، ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            أطفال الأنابيب (IVF) في ألمانيا
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            مراحل العلاج، البروتوكولات، والتنسيق الطبي من برلين
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            أطفال الأنابيب (IVF) هو البروتوكول العلاجي الأكثر استخداماً لحالات تأخر الإنجاب المعقدة.
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
            متى يكون IVF الخيار المناسب؟
          </h2>
          <ul className="space-y-4">
            {[
              "انسداد أو تلف قناتي فالوب",
              "فشل التلقيح الاصطناعي (IUI) المتكرر",
              "انخفاض احتياطي المبيض مع الرغبة في التحفيز المكثف",
              "عوامل ذكورية متوسطة (مع إمكانية الجمع مع ICSI)",
              "الرغبة في إجراء الفحص الجيني (PGD) قبل نقل الجنين",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500 border-t border-slate-100 pt-4" style={FONT}>
            التقييم المتخصص يحدد ما إذا كان IVF هو البروتوكول الأنسب أو إذا كان ICSI أو PGD مطلوباً بالتوازي.
          </p>
        </div>
      </section>

      {/* HOW IVF WORKS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>كيف يعمل IVF؟</h2>
          <div className="space-y-4">
            {[
              "IVF (التخصيب خارج الجسم) يمر بأربع مراحل رئيسية: تحفيز المبيض بالهرمونات لإنتاج عدة بويضات، استخلاص البويضات بإجراء بسيط تحت تخدير موضعي، تخصيب البويضات في المختبر، ثم نقل الجنين إلى الرحم بعد 3 إلى 5 أيام.",
              "في ألمانيا، يُراقَب كل مرحلة بدقة عبر تحاليل هرمونية وفحوصات بالموجات فوق الصوتية لضمان الاستجابة المثلى وتقليل مخاطر فرط التحفيز.",
            ].map((p, i) => (
              <p key={i} className="text-slate-700 text-sm leading-relaxed" style={FONT}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN RECOMMENDED */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>متى يُوصى بـ IVF؟</h2>
          <ul className="space-y-3">
            {[
              "تأخر الإنجاب مع تشخيص سبب عضوي محدد",
              "انسداد قناتي فالوب أو غيابهما",
              "فشل دورتي IUI أو أكثر",
              "عمر المرأة فوق 35 مع انخفاض الاحتياطي",
              "ضعف متوسط في السائل المنوي",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROTOCOLS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>البروتوكولات المتاحة</h2>
          <ul className="space-y-3">
            {[
              "بروتوكول طويل (GnRH agonist): يبدأ قبل الدورة — مناسب لحالات الاستجابة المنتظمة",
              "بروتوكول قصير (GnRH antagonist): يبدأ مع الدورة — مناسب لانخفاض الاحتياطي أو خطر فرط التحفيز",
              "IVF مع ICSI: يُضاف عند وجود عوامل ذكورية أو ضعف في التخصيب",
              "IVF مع PGD: يُضاف عند الرغبة في الفحص الجيني للأجنة قبل النقل",
              "نقل الجنين المجمد (FET): في دورة لاحقة لتحسين ظروف الرحم",
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
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>لماذا IVF في ألمانيا؟</h2>
          <div className="space-y-4">
            {[
              "مراكز IVF الألمانية تعمل وفق معايير ESHRE وتخضع لرقابة منتظمة من السجل الألماني لتقنيات المساعدة على الإنجاب (DIR). هذا يضمن شفافية في معدلات النجاح ومقارنة موضوعية بين المراكز.",
              "التخصيب الجيني المتقدم (ICSI، IMSI، PICSI) متاح في معظم المراكز الألمانية كخيار إضافي يُحدد بناءً على نتائج تحليل السائل المنوي.",
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
              "إرسال التقارير الطبية المتوفرة (تحاليل هرمونية، سونار، تحليل السائل المنوي)",
              "مراجعة أولية وتحديد ما إذا كان IVF هو البروتوكول المناسب",
              "تنسيق موعد الاستشارة مع المتخصص في برلين",
              "تصميم بروتوكول التحفيز المخصص",
              "متابعة مستمرة خلال جميع مراحل الدورة",
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
              { href: "/ar/icsi-germany", label: "الحقن المجهري (ICSI) في ألمانيا" },
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
            أرسل تقاريرك الطبية لتحديد ما إذا كان IVF هو البروتوكول المناسب لحالتك.
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
