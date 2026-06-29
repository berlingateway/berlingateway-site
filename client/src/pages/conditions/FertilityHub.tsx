import { useEffect } from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA_HREF = "https://wa.me/4915781497451?text=" + encodeURIComponent("مرحباً، أود إرسال تقاريري الطبية لتقييم حالة الخصوبة");
const intakeHref = "https://tally.so/r/68MrBP";

export default function FertilityHub() {
  useEffect(() => {
    document.title = "علاج العقم في ألمانيا | مراكز متخصصة في برلين";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "علاج العقم في ألمانيا بأعلى معدلات النجاح — أطفال الأنابيب، ICSI، وتشخيص أسباب العقم. نرتب تقييمك في أفضل المراكز.");
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = "علاج العقم في ألمانيا بأعلى معدلات النجاح — أطفال الأنابيب، ICSI، وتشخيص أسباب العقم. نرتب تقييمك في أفضل المراكز.";
      document.head.appendChild(n);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/fertility-treatment-germany" />
      <HreflangTags currentPath="/ar/fertility-treatment-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany · برلين، ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            علاج تأخر الإنجاب والعقم في ألمانيا
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-2 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            تقييم طبي متخصص وتنسيق مباشر مع مراكز الخصوبة الألمانية
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            علاج العقم في ألمانيا يبدأ بتشخيص شامل يحدد السبب الدقيق قبل اختيار البروتوكول العلاجي.
          </p>
          <a
 href={intakeHref} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors" style={FONT}>
            أرسل تقاريرك الآن للحصول على قرار طبي واضح
          </a>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            ما الذي يميز التقييم الألماني؟
          </h2>
          <ul className="space-y-4">
            {[
              "تشخيص شامل في زيارة واحدة منظمة",
              "بروتوكول علاجي مخصص لكل حالة",
              "إمكانية الوصول إلى IVF وICsi وPGD في مركز واحد",
              "تقرير طبي مفصل بالعربية مع خارطة طريق واضحة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500 border-t border-slate-100 pt-4" style={FONT}>
            التنسيق الطبي من برلين يتولى جميع الترتيبات — من المواعيد إلى الترجمة.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>ما الذي يشمله التقييم؟</h2>
          <div className="space-y-4">
            {[
              "تأخر الإنجاب والعقم حالتان تستدعيان تقييماً دقيقاً قبل أي قرار علاجي. في ألمانيا، يشمل التقييم الأساسي: تحليل الهرمونات الكامل، تقييم احتياطي المبيض (AMH)، تحليل السائل المنوي وفق معايير WHO، وفحص قناتي فالوب والرحم.",
              "بناءً على نتائج التقييم، يُحدد المتخصص البروتوكول الأنسب: تحفيز التبويض البسيط، التلقيح الاصطناعي (IUI)، أطفال الأنابيب (IVF)، الحقن المجهري (ICSI)، أو الفحص الجيني للأجنة (PGD) في الحالات المعقدة.",
            ].map((p, i) => (
              <p key={i} className="text-slate-700 text-sm leading-relaxed" style={FONT}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO SEEK */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>متى تحتاج إلى تقييم متخصص؟</h2>
          <ul className="space-y-3">
            {[
              "تأخر الإنجاب لأكثر من 12 شهراً مع علاقة زوجية منتظمة",
              "فشل دورات IVF أو ICSI سابقة",
              "إجهاض متكرر دون تفسير واضح",
              "تشخيص بانخفاض احتياطي المبيض",
              "عوامل ذكورية: ضعف الحيوانات المنوية أو انعدامها",
              "تاريخ عائلي لأمراض وراثية",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>خيارات العلاج المتاحة</h2>
          <ul className="space-y-3">
            {[
              "أطفال الأنابيب (IVF): تحفيز المبيض، استخلاص البويضات، تخصيب خارجي، نقل الجنين",
              "الحقن المجهري (ICSI): حقن حيوان منوي واحد مباشرة في البويضة — للعوامل الذكورية",
              "الفحص الجيني للأجنة (PGD/PGT): فحص الكروموسومات قبل نقل الجنين — للحالات الوراثية والفشل المتكرر",
              "تجميد البويضات والأجنة: للحفاظ على الخصوبة أو في حالات الاستجابة الجيدة",
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
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>لماذا ألمانيا لعلاج العقم؟</h2>
          <div className="space-y-4">
            {[
              "المراكز الألمانية المتخصصة في الخصوبة تعمل وفق معايير الجمعية الأوروبية للتكاثر البشري (ESHRE)، مما يضمن جودة موحدة ومراجعة علمية مستمرة للبروتوكولات.",
              "الميزة الجوهرية: الحصول على تقرير طبي شامل يشرح السبب الدقيق لتأخر الإنجاب، الخيارات المتاحة، التوقعات الواقعية، والتكاليف التقريبية — قبل اتخاذ أي قرار.",
            ].map((p, i) => (
              <p key={i} className="text-slate-700 text-sm leading-relaxed" style={FONT}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAY */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-6" style={FONT}>مسار الحالة خطوة بخطوة</h2>
          <ol className="space-y-3">
            {[
              "إرسال الملف الطبي الكامل عبر واتساب أو البريد الإلكتروني",
              "مراجعة أولية من المنسق الطبي خلال 48 ساعة",
              "تحديد نوع التقييم المطلوب (عن بُعد أو حضوري)",
              "تنسيق المواعيد مع المركز المتخصص في برلين",
              "تقرير طبي مفصل بالعربية مع خارطة الطريق العلاجية",
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
              { href: "/ar/ivf-germany", label: "أطفال الأنابيب (IVF) في ألمانيا" },
              { href: "/ar/icsi-germany", label: "الحقن المجهري (ICSI) في ألمانيا" },
              { href: "/ar/pgd-germany", label: "الفحص الوراثي للأجنة (PGD) في ألمانيا" },
              { href: "/ar/fertility-treatment-libya-germany", label: "علاج الخصوبة للمرضى من ليبيا" },
              { href: "/ar/fertility-treatment-saudi-germany", label: "علاج الخصوبة للمرضى من السعودية" },
              { href: "/ar/fertility-treatment-iraq-germany", label: "علاج الخصوبة للمرضى من العراق" },
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
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>ابدأ بإرسال ملفك الطبي</h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            أرسل تقاريرك الطبية للحصول على مراجعة أولية من برلين.<br />
            سيتواصل معك المنسق الطبي خلال 48 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
 href={intakeHref} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors" style={FONT}>
              إرسال التقارير للمراجعة
            </a>
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
