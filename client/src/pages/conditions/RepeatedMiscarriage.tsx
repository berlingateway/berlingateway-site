import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";


const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const WA =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent(
    "مرحباً، أود إرسال تقارير المحاولات السابقة لتقييم أسباب الفشل."
  );

export default function RepeatedMiscarriage() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <SmartNavLayer currentPath="/ar/repeated-miscarriage-causes-germany" />
      <HreflangTags currentPath="/ar/repeated-miscarriage-causes-germany" />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            Medical Care Germany
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            الإجهاض المتكرر رغم سلامة الفحوصات — متى تحتاج الحالة إلى تقييم أعمق؟
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed" style={FONT}>
            الإجهاض المتكرر مع فحوصات طبيعية ظاهرياً يعني أن الأدوات التشخيصية المستخدمة لم تصل إلى العمق الكافي.
          </p>
          <p className="text-sm text-slate-400 mb-10" style={FONT}>
            مخصص للحالات التي تعرضت لإجهاضين أو أكثر دون تفسير واضح.
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

      {/* SECTION 2 — WHY STANDARD TESTS MAY MISS */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            لماذا قد تبدو الفحوصات طبيعية رغم الإجهاض المتكرر؟
          </h2>
          <div className="space-y-5 text-sm text-slate-700 leading-relaxed" style={FONT}>
            <p>
              الإجهاض المتكرر مع فحوصات "طبيعية" يُشير في الغالب إلى أن الفحوصات المُجراة لم تشمل المستوى التشخيصي الكافي.
              الأسباب الخفية متعددة ولا تُكتشف بالفحص الروتيني.
            </p>
            <p>
              <strong className="text-slate-900">الاضطرابات الكروموسومية في الجنين:</strong> نسبة كبيرة من حالات الإجهاض المبكر تعود إلى اضطرابات كروموسومية في الجنين.
              الفحص الجيني للأجنة (PGT-A) يُقلل من هذا الخطر بشكل ملحوظ.
            </p>
            <p>
              <strong className="text-slate-900">اضطرابات التخثر والمناعة:</strong> متلازمة أضداد الفوسفوليبيد وحالات التخثر الوراثية قد تُسبب الإجهاض المتكرر.
              بعض هذه الحالات لا تُكتشف إلا بفحوصات متخصصة.
            </p>
            <p>
              <strong className="text-slate-900">تشوهات الرحم والبطانة:</strong> الحاجز الرحمي، الأورام الليفية داخل التجويف، والتصاقات بطانة الرحم قد تمنع الانغراس السليم أو تؤدي إلى الإجهاض المبكر.
            </p>
            <p>
              <strong className="text-slate-900">العوامل الوراثية في الوالدين:</strong> الانتقالات الكروموسومية المتوازنة في أحد الوالدين قد تُسبب إجهاضاً متكرراً دون أعراض ظاهرة عليهما.
              الكاريوتايب لكلا الشريكين ضروري في حالات الإجهاض المتكرر.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — GERMAN REASSESSMENT */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            منهجية إعادة التقييم في ألمانيا لحالات الإجهاض المتكرر
          </h2>
          <ul className="space-y-3 text-sm text-slate-700" style={FONT}>
            {[
              "مراجعة تاريخ الإجهاض كاملاً: التوقيت، الأسبوع، الأعراض، والفحوصات السابقة",
              "كاريوتايب لكلا الشريكين لاستبعاد الاضطرابات الكروموسومية الوراثية",
              "فحوصات التخثر والمناعة الشاملة (أضداد الفوسفوليبيد، Factor V Leiden، وغيرها)",
              "تقييم تجويف الرحم بالتصوير المتقدم أو التنظير",
              "فحص جيني للأجنة (PGT-A) في دورات IVF التالية عند الحاجة",
              "مراجعة متعددة التخصصات تشمل علم الوراثة وأمراض الدم عند الإشارة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-500 border-t border-slate-200 pt-4" style={FONT}>
            ملاحظة: التقييم لا يضمن منع الإجهاض. هدفه تحديد العوامل القابلة للعلاج وبناء مسار طبي أكثر دقة.
          </p>
        </div>
      </section>

      {/* SECTION 4 — WHEN TO CONSIDER */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            متى يحتاج الزوجان إلى إعادة تقييم كاملة؟
          </h2>
          <ul className="space-y-3 text-sm text-slate-700" style={FONT}>
            {[
              "إجهاضان أو أكثر دون تفسير واضح",
              "إجهاض متكرر بعد نجاح IVF أو ICSI",
              "فحوصات طبيعية مع استمرار الإجهاض",
              "تاريخ عائلي لاضطرابات التخثر أو الكروموسومات",
              "رغبة في مراجعة مستقلة قبل محاولة جديدة",
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
          <p className="text-sm text-slate-600 mb-6 leading-relaxed" style={FONT}>
            إعادة تقييم التفاصيل الصغيرة قد تغيّر مسار العلاج بالكامل في بعض الحالات المعقدة.
          </p>
          <h3 className="text-sm font-medium text-slate-900 mb-3 uppercase tracking-widest" style={FONT}>
            الوثائق المطلوبة للتقييم
          </h3>
          <ul className="space-y-2 text-sm text-slate-700 mb-8" style={FONT}>
            {[
              "تقارير الإجهاض السابقة (التوقيت، الأسبوع، نتائج الفحوصات)",
              "نتائج فحوصات التخثر والمناعة إن أُجريت",
              "نتائج الكاريوتايب لكلا الشريكين إن أُجري",
              "تقارير تصوير الرحم أو التنظير إن وجدت",
              "نتائج AMH وFSH وAFC",
              "تقارير محاولات IVF / ICSI السابقة إن وجدت",
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
              { href: "/ar/pgd-germany", label: "الفحص الوراثي للأجنة PGD" },
              { href: "/ar/ivf-germany", label: "أطفال الأنابيب IVF في ألمانيا" },
              { href: "/ar/ivf-cost-germany", label: "تكلفة أطفال الأنابيب في ألمانيا" },
              { href: "/ar/failed-ivf-causes-germany", label: "أسباب فشل محاولات IVF المتكررة" },
              { href: "/ar/male-infertility-germany", label: "عقم الرجال المستعصي — التقييم المتقدم" },
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
                q: "لماذا يحدث الإجهاض رغم سلامة التحاليل الظاهرة؟",
                a: "الفحوصات الروتينية لا تشمل جميع الأسباب المحتملة. اضطرابات التخثر الوراثية، الاضطرابات الكروموسومية في الجنين، واضطرابات المناعة الخفية قد لا تُكتشف إلا بفحوصات متخصصة.",
              },
              {
                q: "هل العوامل الوراثية قد تكون السبب؟",
                a: "نعم. الانتقالات الكروموسومية المتوازنة في أحد الوالدين تُسبب إجهاضاً متكرراً في نسبة من الحالات. الكاريوتايب لكلا الشريكين يُستحسن في حالات الإجهاض المتكرر.",
              },
              {
                q: "متى يحتاج الأمر إلى تقييم أعمق؟",
                a: "عند الإجهاض مرتين أو أكثر دون سبب واضح، أو عند الإجهاض بعد نجاح IVF، أو عند وجود تاريخ عائلي لاضطرابات التخثر أو الكروموسومات.",
              },
              {
                q: "هل يمكن منع الإجهاض المتكرر بعد التقييم؟",
                a: "في حالات كثيرة، تحديد السبب يُتيح علاجاً موجهاً يُقلل من خطر الإجهاض. لكن لا يوجد ضمان مطلق — الهدف هو بناء مسار علاجي أكثر دقة بناءً على التشخيص الفردي.",
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
          <p className="text-xs text-slate-400" style={FONT}>Medical Care Germany</p>
        </div>
      </footer>
    </div>
  );
}
