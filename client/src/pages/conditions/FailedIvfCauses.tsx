import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent(
    "مرحباً، أود إرسال تقارير المحاولات السابقة لتقييم أسباب الفشل."
  );

export default function FailedIvfCauses() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/failed-ivf-causes-germany" />
      <HreflangTags currentPath="/ar/failed-ivf-causes-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            ميديكال كير جيرماني · برلين، ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            لماذا تفشل محاولات الحقن المجهري المتكررة؟
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            الفشل المتكرر ليس نهاية المسار — بل هو إشارة إلى أن التقييم الأولي لم يكن كافياً.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            مخصص للحالات التي أجرت محاولتين أو أكثر دون نجاح وتحتاج إلى إعادة تقييم دقيقة.
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

      {/* SECTION 2 — WHY STANDARD TESTS MAY MISS THE ROOT CAUSE */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            لماذا قد تظهر الفحوصات الاعتيادية طبيعية رغم الفشل المتكرر؟
          </h2>
          <div className="space-y-5 text-sm text-slate-700 leading-relaxed" style={FONT}>
            <p>
              كثير من الأزواج يصلون بعد سنوات من المحاولات غير الناجحة دون تفسير واضح لسبب الفشل.
              الفحوصات الاعتيادية تُظهر نتائج طبيعية، لكن المحاولات تستمر في الفشل.
              هذا لا يعني غياب المشكلة — بل يعني أن الأدوات التشخيصية المستخدمة لم تصل إلى المستوى الكافي.
            </p>
            <p>
              <strong className="text-slate-900">جودة الأجنة:</strong> قد تبدو الأجنة طبيعية في المختبر لكنها تحمل اضطرابات جينية خفية لا تظهر في التقييم المجهري العادي.
              الفحص الجيني المتقدم (PGT-A) يكشف عن هذه الاضطرابات قبل الزرع.
            </p>
            <p>
              <strong className="text-slate-900">تشرذم الحمض النووي للحيوانات المنوية:</strong> تحليل السائل المنوي الاعتيادي قد يُظهر نتائج طبيعية بينما يكون مؤشر تشرذم الـ DNA مرتفعاً.
              هذا يؤثر مباشرة على جودة الأجنة وقدرتها على الانغراس.
            </p>
            <p>
              <strong className="text-slate-900">استجابة بطانة الرحم:</strong> فشل الانغراس قد يرتبط باضطرابات في بطانة الرحم لا تُكتشف بالفحص الروتيني.
              اختبارات مثل ERA (نافذة الانغراس) تحدد التوقيت الأمثل للزرع بدقة أعلى.
            </p>
            <p>
              <strong className="text-slate-900">بروتوكول التحفيز:</strong> البروتوكول الموحد لا يناسب جميع الحالات.
              مراجعة استجابة المبيض في المحاولات السابقة قد تكشف عن ضرورة تعديل الجرعات أو تغيير نوع البروتوكول كلياً.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — GERMAN REASSESSMENT APPROACH */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            منهجية إعادة التقييم في ألمانيا
          </h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed" style={FONT}>
            <p>
              إعادة التقييم في ألمانيا لا تعني تكرار نفس الفحوصات.
              تبدأ بمراجعة شاملة لكل تفاصيل المحاولات السابقة: البروتوكولات المستخدمة، جودة الأجنة، توقيت الزرع، ونتائج المختبر.
            </p>
            <ul className="space-y-3 mt-4">
              {[
                "مراجعة كلا الشريكين بشكل متوازٍ — لا يُكتفى بتقييم أحدهما",
                "تحليل متقدم للسائل المنوي يشمل مؤشر تشرذم الـ DNA",
                "فحص جيني للأجنة (PGT-A) لاستبعاد الاضطرابات الكروموسومية",
                "اختبار ERA لتحديد نافذة الانغراس الفردية",
                "مراجعة متعددة التخصصات تشمل علم الوراثة عند الحاجة",
                "بروتوكول تحفيز مخصص بناءً على استجابة المبيض السابقة",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-slate-500 text-xs border-t border-slate-200 pt-4">
              ملاحظة: إعادة التقييم لا تضمن النجاح. هدفها تحديد العوامل غير المُقيَّمة سابقاً وبناء مسار علاجي أكثر دقة.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHEN TO CONSIDER SECOND OPINION */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            متى يحتاج الزوجان إلى إعادة تقييم كاملة؟
          </h2>
          <ul className="space-y-3 text-sm text-slate-700" style={FONT}>
            {[
              "محاولتان أو أكثر من IVF أو ICSI بدون نجاح",
              "فشل الانغراس رغم جودة الأجنة الظاهرة",
              "تشخيص غير محدد أو متضارب بين أكثر من طبيب",
              "آراء طبية متعارضة حول الخطوة التالية",
              "تقدم العمر مع محاولات متعددة غير ناجحة",
              "رغبة في مراجعة مستقلة قبل تكرار البروتوكول",
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
          <p className="text-sm text-slate-600 mb-6 leading-relaxed" style={FONT}>
            إعادة تقييم التفاصيل الصغيرة قد تغيّر مسار العلاج بالكامل في بعض الحالات المعقدة.
          </p>
          <h3 className="text-sm font-medium text-slate-900 mb-3 uppercase tracking-widest" style={FONT}>
            الوثائق المطلوبة للتقييم
          </h3>
          <ul className="space-y-2 text-sm text-slate-700 mb-8" style={FONT}>
            {[
              "تقارير محاولات IVF / ICSI السابقة كاملة",
              "نتائج AMH وFSH وAFC",
              "تحليل السائل المنوي (آخر تحليل)",
              "Sperm DNA fragmentation إن أُجري",
              "تقارير الأجنة السابقة (عدد، جودة، مرحلة التجميد)",
              "تقارير بطانة الرحم إن وجدت",
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
              { href: "/ar/ivf-germany", label: "أطفال الأنابيب IVF في ألمانيا" },
              { href: "/ar/icsi-germany", label: "الحقن المجهري ICSI في ألمانيا" },
              { href: "/ar/pgd-germany", label: "الفحص الوراثي للأجنة PGD" },
              { href: "/ar/ivf-cost-germany", label: "تكلفة أطفال الأنابيب في ألمانيا" },
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
                q: "هل يمكن أن تنجح المحاولة بعد عدة دورات فاشلة؟",
                a: "نعم، في حالات كثيرة. الفشل المتكرر غالباً يشير إلى عامل لم يُكتشف بعد — وليس إلى استحالة النجاح. إعادة التقييم الدقيقة تحدد ما إذا كان التغيير في البروتوكول أو الفحوصات قد يُحدث فرقاً.",
              },
              {
                q: "هل يؤثر المختبر على جودة الأجنة؟",
                a: "نعم. جودة المختبر وكفاءة علماء الأجنة تؤثر مباشرة على نتائج الإخصاب والتطور الجنيني. ليس كل المختبرات متساوية في مستوى التجهيزات أو الخبرة.",
              },
              {
                q: "هل العمر وحده هو السبب في الفشل المتكرر؟",
                a: "العمر عامل مؤثر لكنه ليس العامل الوحيد. حالات كثيرة لنساء فوق الأربعين نجحت بعد تعديل البروتوكول أو إجراء فحوصات إضافية. التقييم الفردي أدق من الاستناد إلى العمر وحده.",
              },
              {
                q: "هل تشرذم الـ DNA في الحيوانات المنوية يُفسر الفشل؟",
                a: "في بعض الحالات نعم. مؤشر تشرذم الـ DNA المرتفع يرتبط بانخفاض جودة الأجنة وزيادة احتمال الفشل — حتى عندما يكون التحليل الاعتيادي طبيعياً.",
              },
              {
                q: "ما الفرق بين IVF وICIS في حالات الفشل المتكرر؟",
                a: "ICSI يُستخدم عادةً عندما يكون هناك عامل ذكوري أو عندما فشل IVF الاعتيادي. لكن الاختيار بين البروتوكولين يعتمد على التقييم الشامل لكلا الشريكين — وليس على قاعدة ثابتة.",
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
            أرسل تقارير المحاولات السابقة وسيتم تقييمها خلال 24–48 ساعة.
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
          <p className="text-xs text-slate-400" style={FONT}>ميديكال كير جيرماني · برلين، ألمانيا</p>
        </div>
      </footer>
    </div>
  );
}
