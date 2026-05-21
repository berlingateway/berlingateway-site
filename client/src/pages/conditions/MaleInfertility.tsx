import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA =
  "https://wa.me/4917647757767?text=" +
  encodeURIComponent(
    "مرحباً، أود إرسال تقارير المحاولات السابقة لتقييم أسباب الفشل."
  );

export default function MaleInfertility() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/male-infertility-germany" />
      <HreflangTags currentPath="/ar/male-infertility-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            عقم الرجال المستعصي — متى يحتاج الأمر إلى تقييم متخصص في ألمانيا؟
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            تحليل السائل المنوي الطبيعي لا يعني غياب العامل الذكوري. الأسباب الخفية تحتاج إلى أدوات تشخيصية أعمق.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            مخصص للحالات التي أجرت محاولات متعددة دون نجاح أو تلقت تشخيصاً بعقم ذكوري دون مسار علاجي واضح.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            إرسال التقارير الطبية للتقييم الأولي
          </a>
        </div>
      </section>

      {/* SECTION 2 — HIDDEN MALE FACTORS */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            العوامل الذكورية الخفية التي لا يكشفها التحليل الاعتيادي
          </h2>
          <div className="space-y-5 text-sm text-slate-700 leading-relaxed" style={FONT}>
            <p>
              كثير من الأزواج يصلون بعد سنوات من المحاولات مع تقارير تُظهر تحليل سائل منوي "طبيعي" — لكن المحاولات تستمر في الفشل.
              هذا لا يعني أن العامل الذكوري مستبعد، بل يعني أن الفحوصات المُجراة لم تصل إلى المستوى الكافي.
            </p>
            <p>
              <strong className="text-slate-900">تشرذم الحمض النووي للحيوانات المنوية (DNA Fragmentation):</strong> مؤشر تشرذم الـ DNA المرتفع يؤثر مباشرة على جودة الأجنة وقدرتها على الانغراس والتطور — حتى عندما يكون التحليل الاعتيادي طبيعياً.
            </p>
            <p>
              <strong className="text-slate-900">الدوالي الخصوية (Varicocele):</strong> دوالي الخصية تؤثر على جودة الحيوانات المنوية بشكل تدريجي. علاجها الجراحي في بعض الحالات يُحسن المعايير بشكل ملحوظ.
            </p>
            <p>
              <strong className="text-slate-900">الأسباب الهرمونية والوراثية:</strong> اضطرابات الهرمونات (FSH، LH، Testosterone) والعوامل الوراثية مثل متلازمة كلاينفلتر أو حذف الكروموسوم Y قد تُسبب عقماً ذكورياً دون أعراض ظاهرة.
            </p>
            <p>
              <strong className="text-slate-900">انسداد القنوات التناسلية:</strong> انسداد الأسهر أو البربخ قد يكون سبباً في غياب الحيوانات المنوية (Azoospermia) — وفي بعض الحالات يمكن الحصول على حيوانات منوية مباشرة من الخصية (TESE/MESA).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — GERMAN APPROACH */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            منهجية التقييم المتقدم للعامل الذكوري في ألمانيا
          </h2>
          <ul className="space-y-3 text-sm text-slate-700" style={FONT}>
            {[
              "تحليل سائل منوي متقدم يشمل مورفولوجيا Kruger الصارمة",
              "قياس مؤشر تشرذم الـ DNA (DFI) بطرق متعددة",
              "فحوصات هرمونية شاملة (FSH، LH، Testosterone، Prolactin، Inhibin B)",
              "كاريوتايب وفحص حذف الكروموسوم Y (AZF)",
              "تقييم الدوالي الخصوية بالموجات فوق الصوتية",
              "استشارة أندرولوجية متخصصة لتحديد خيارات الاسترداد الجراحي عند الحاجة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-500 border-t border-slate-200 pt-4" style={FONT}>
            ملاحظة: التقييم لا يضمن النجاح. هدفه تحديد العوامل القابلة للعلاج وبناء مسار طبي أكثر دقة.
          </p>
        </div>
      </section>

      {/* SECTION 4 — WHEN TO CONSIDER */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            متى يحتاج الرجل إلى تقييم متخصص في ألمانيا؟
          </h2>
          <ul className="space-y-3 text-sm text-slate-700" style={FONT}>
            {[
              "محاولات IVF / ICSI متعددة فاشلة مع تحليل سائل منوي ظاهرياً طبيعي",
              "تشخيص Azoospermia (غياب الحيوانات المنوية في السائل المنوي)",
              "ضعف شديد في الحركة أو التشكل لم يستجب للعلاج",
              "تاريخ عائلي لاضطرابات الخصوبة الذكورية",
              "رغبة في مراجعة مستقلة قبل قرار TESE أو MESA",
              "آراء طبية متضاربة حول السبب أو الخطوة التالية",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 — ASSESSMENT PATH */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-4" style={FONT}>
            ابدأ التقييم الطبي للحالة
          </h2>
          <h3 className="text-sm font-medium text-slate-900 mb-3 uppercase tracking-widest" style={FONT}>
            الوثائق المطلوبة للتقييم
          </h3>
          <ul className="space-y-2 text-sm text-slate-700 mb-8" style={FONT}>
            {[
              "تحاليل السائل المنوي السابقة (آخر 2–3 تحاليل)",
              "نتائج DNA Fragmentation إن أُجريت",
              "الفحوصات الهرمونية (FSH، LH، Testosterone، Prolactin)",
              "الكاريوتايب وفحص AZF إن أُجريا",
              "تقارير محاولات IVF / ICSI السابقة إن وجدت",
              "تقارير الموجات فوق الصوتية للخصيتين إن وجدت",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-[#0B1C2C] text-xs">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#0B1C2C] text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية للتقييم الأولي
            </a>
            <a
              href="/send-medical-reports"
              className="inline-block px-6 py-3 border border-slate-300 text-slate-700 text-sm hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
              style={FONT}
            >
              استخدام نموذج الإرسال الرسمي
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-5 text-center" style={FONT}>
            صفحات ذات صلة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/ar/fertility-treatment-germany", label: "علاج تأخر الإنجاب في ألمانيا" },
              { href: "/ar/icsi-germany", label: "الحقن المجهري ICSI في ألمانيا" },
              { href: "/ar/pgd-germany", label: "الفحص الوراثي للأجنة PGD" },
              { href: "/ar/ivf-germany", label: "أطفال الأنابيب IVF في ألمانيا" },
              { href: "/ar/failed-ivf-causes-germany", label: "أسباب فشل محاولات IVF المتكررة" },
              { href: "/ar/repeated-miscarriage-causes-germany", label: "الإجهاض المتكرر — التقييم المتخصص" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block px-4 py-3 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            أسئلة شائعة
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "هل يمكن علاج Azoospermia (غياب الحيوانات المنوية)؟",
                a: "يعتمد على السبب. في حالات الانسداد، يمكن استرداد الحيوانات المنوية جراحياً (TESE/MESA) واستخدامها في ICSI. في حالات الإنتاج المنعدم، يُقيَّم الوضع بشكل فردي بما يشمل الخيارات الوراثية.",
              },
              {
                q: "هل تشرذم الـ DNA يمكن تحسينه؟",
                a: "في بعض الحالات نعم. تغييرات نمط الحياة، علاج الدوالي الخصوية، وبعض البروتوكولات الدوائية قد تُقلل من مؤشر التشرذم. التقييم الفردي يحدد ما إذا كان التدخل ممكناً ومفيداً.",
              },
              {
                q: "هل ICSI يحل جميع مشاكل العامل الذكوري؟",
                a: "ICSI يتجاوز كثيراً من العوائق الميكانيكية، لكنه لا يُصلح جودة الحمض النووي للحيوانات المنوية. في حالات تشرذم الـ DNA المرتفع، قد تظل جودة الأجنة منخفضة رغم نجاح الإخصاب.",
              },
              {
                q: "متى يُنصح بالفحص الجيني قبل ICSI؟",
                a: "عند وجود عامل ذكوري وراثي محتمل، أو عند الفشل المتكرر، أو عند تشخيص Azoospermia. الكاريوتايب وفحص AZF يُحددان ما إذا كان هناك خطر وراثي ينتقل إلى الأبناء.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-5">
                <h3 className="text-sm font-medium text-slate-900 mb-2" style={FONT}>{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>
            حالتك تستحق مراجعة حقيقية
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            أرسل التقارير الطبية وسيتم تقييمها خلال 24–48 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية للتقييم الأولي
            </a>
            <a
              href="/send-medical-reports"
              className="px-8 py-4 border border-white text-white text-sm font-light hover:bg-white hover:text-[#0B1C2C] transition-colors"
              style={FONT}
            >
              نموذج الإرسال الرسمي
            </a>
          </div>
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
