import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

const conditions = [
  { href: "/orthopedic-surgery-germany", en: "Orthopedic Surgery", ar: "جراحة العظام" },
  { href: "/orthopedic-treatment-germany", en: "Orthopedic Treatment", ar: "علاج العظام والمفاصل" },
  { href: "/knee-replacement-germany", en: "Knee Replacement", ar: "تركيب مفصل الركبة" },
  { href: "/hip-replacement-germany", en: "Hip Replacement", ar: "تركيب مفصل الورك" },
  { href: "/scoliosis-treatment-germany", en: "Scoliosis", ar: "الجنف" },
  { href: "/spinal-stenosis-treatment-germany", en: "Spinal Stenosis", ar: "تضيق القناة الشوكية" },
];

export default function OrthopedicsHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Helmet>
        <title>Orthopedics in Germany — Specialist Bone and Joint Care</title>
        <meta name="description" content="Specialist orthopedic evaluation and surgery at German university hospitals for joint replacement, scoliosis, spinal stenosis, and complex musculoskeletal conditions." />
        <link rel="canonical" href="https://medicalcaregermany.com/orthopedics-germany" />
      </Helmet>

      <div className="w-full bg-slate-900 text-white py-3 px-6 text-center text-sm">
        <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">info@medicalcaregermany.com</a>
      </div>

      <nav className="w-full py-4 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "Georgia, serif" }}>Medical Care Germany</Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/ar" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">العربية</Link>
          <Link href="/send-medical-reports" className="bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors">Send Medical Reports</Link>
        </div>
      </nav>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <Link href="/" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">← Medical Care Germany</Link>
        </div>
        <h1 className="text-4xl font-serif font-medium text-slate-900 mb-4">Orthopedics in Germany</h1>
        <p className="text-lg text-slate-500 font-light mb-8 max-w-2xl">
          Specialist orthopedic evaluation at German university hospitals for complex bone, joint, and musculoskeletal conditions requiring surgical or non-surgical management.
        </p>
        <div className="h-px w-16 bg-slate-200 mb-10" />

        <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 mb-12 text-right" dir="rtl" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
          <h2 className="text-base font-semibold text-slate-800 mb-3">علاج العظام والمفاصل في ألمانيا</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            تشمل أمراض العظام والمفاصل تآكل الغضاريف، والتشوهات الهيكلية، وحالات تركيب المفاصل، والحالات التي تحتاج إلى مراجعة جراحية بعد تدخلات سابقة. توفر مستشفيات ألمانيا الجامعية تقنيات تصوير متقدمة وأنظمة توجيه جراحي دقيقة. يمكن إرسال التقارير للتقييم قبل اتخاذ أي قرار جراحي.
          </p>
        </div>

        <h2 className="text-xl font-serif text-slate-800 mb-6">Orthopedic Conditions</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {conditions.map(c => (
            <Link key={c.href} href={c.href} className="flex justify-between items-center px-5 py-4 border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all group">
              <span className="text-sm text-slate-700 group-hover:text-slate-900">{c.en}</span>
              <span className="text-xs text-slate-400 group-hover:text-slate-600" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>{c.ar}</span>
            </Link>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-10 text-center">
          <p className="text-slate-500 text-sm mb-6">Medical reports may be submitted for specialist review. A Berlin-based coordinator will assess the case and identify the appropriate orthopedic specialist.</p>
          <Link href="/send-medical-reports" className="inline-block bg-slate-900 text-white text-sm font-medium px-8 py-4 hover:bg-slate-700 transition-colors tracking-wide">Send Medical Reports</Link>
        </div>
      </section>

      <footer className="py-10 bg-white text-center border-t border-slate-100 mt-12">
        <p className="text-slate-400 text-xs font-serif">Medical Care Germany · Berlin</p>
        <p className="text-slate-300 text-xs mt-1">Operating within established clinical coordination frameworks.</p>
      </footer>
    </div>
  );
}
