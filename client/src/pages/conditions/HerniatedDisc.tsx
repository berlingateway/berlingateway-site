import { Link } from "wouter";

export default function HerniatedDisc() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>

      {/* Page Content */}
      <main className="max-w-2xl mx-auto px-5 py-12 space-y-10">

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900 leading-snug">
            علاج الانزلاق الغضروفي في ألمانيا
          </h1>
          <p className="text-base text-slate-500 font-medium">
            تشخيص دقيق. قرار علاجي واضح. علاج مناسب للحالة.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Intro */}
        <section className="space-y-3">
          <p className="text-base text-slate-700 leading-relaxed">
            ألم في أسفل الظهر يمتد إلى الساق، أو تنميل وضعف في القدم؟ قد تشير هذه الأعراض إلى ضغط على الأعصاب بسبب انزلاق غضروفي.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            في ألمانيا، يتم تقييم كل حالة بشكل فردي بناءً على صور الرنين المغناطيسي والفحص السريري من قبل أطباء متخصصين في جراحة العمود الفقري.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Treatment */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-800">العلاج</h2>
          <p className="text-base text-slate-700 leading-relaxed">
            معظم الحالات تُعالج بدون جراحة.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            إذا استمرت الأعراض أو ظهر ضعف عصبي، يمكن اللجوء إلى تقنيات دقيقة مثل الجراحة الميكروسكوبية أو المنظار.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Decision Box */}
        <section>
          <div className="border-r-4 border-slate-800 pr-4 py-1">
            <p className="text-base text-slate-800 font-medium leading-relaxed">
              الأهم ليس إجراء العملية، بل تحديد الحاجة إليها بدقة.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Video Card */}
        <section>
          <a
            href="https://youtube.com/shorts/lnxXzDQ8dts"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-md border border-slate-100 bg-white hover:shadow-lg transition-shadow"
          >
            {/* Thumbnail */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <img
                src="https://i.ytimg.com/vi/lnxXzDQ8dts/hqdefault.jpg"
                alt="فيديو تجربة المريض بعد الجراحة"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="p-4 space-y-2">
              <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                بعد العملية
              </span>
              <h3 className="text-base font-semibold text-slate-900 leading-snug">
                ماذا حدث بعد الجراحة؟
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                نتيجة العملية وتجربة المريض بعد العلاج في برلين
              </p>
            </div>
          </a>
        </section>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* CTA */}
        <section className="space-y-4">
          <p className="text-base text-slate-700">
            أرسل ملفك الطبي لتقييم الحالة.
          </p>
          <Link href="/send-medical-reports">
            <button className="w-full bg-slate-900 text-white text-base font-medium py-3 px-6 rounded-none hover:bg-slate-800 transition-colors">
              أرسل الملف الطبي
            </button>
          </Link>
        </section>

      </main>
    </div>
  );
}
