import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

const conditions = [
  { href: "/advanced-diagnostics-germany", en: "Advanced Diagnostics", ar: "التشخيص المتقدم" },
  { href: "/second-opinion-germany", en: "Second Medical Opinion", ar: "الرأي الطبي الثاني" },
  { href: "/complex-medical-cases-germany", en: "Complex Medical Cases", ar: "الحالات المعقدة" },
  { href: "/treatment-in-germany-for-international-patients", en: "International Patients", ar: "المرضى الدوليون" },
  { href: "/specialist-referral-germany", en: "Specialist Referral", ar: "الإحالة للمختصين" },
  { href: "/university-hospital-treatment-germany", en: "University Hospital Treatment", ar: "المستشفيات الجامعية" },
  { href: "/international-patients", en: "Treatment for International Patients", ar: "العلاج للمرضى الدوليين" },
];

export default function ConsultationHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Helmet>
        <title>Medical Consultation Services in Germany — Second Opinion &amp; Specialist Referral</title>
        <meta name="description" content="Structured medical consultation services in Germany including second opinions, specialist referrals, advanced diagnostics, and coordination for international patients at German university hospitals." />
        <link rel="canonical" href="https://medicalcaregermany.com/consultation-services-germany" />
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
        <h1 className="text-4xl font-serif font-medium text-slate-900 mb-4">Consultation Services in Germany</h1>
        <p className="text-lg text-slate-500 font-light mb-8 max-w-2xl">
          Structured medical consultation and coordination services for international patients, referring physicians, and institutional partners seeking structured access to Germany's specialist medical system.
        </p>
        <div className="h-px w-16 bg-slate-200 mb-10" />

        <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 mb-12 text-right" dir="rtl" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
          <h2 className="text-base font-semibold text-slate-800 mb-3">خدمات الاستشارة الطبية في ألمانيا</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            تشمل خدمات الاستشارة الطبية الحصول على رأي طبي ثانٍ من متخصصين ألمان، والإحالة إلى أخصائيين في المستشفيات الجامعية، وتقييم الحالات المعقدة التي تحتاج إلى فريق طبي متعدد التخصصات. يمكن إرسال التقارير الطبية للمراجعة الأولية قبل اتخاذ أي قرار علاجي.
          </p>
        </div>

        <h2 className="text-xl font-serif text-slate-800 mb-6">Consultation Services</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {conditions.map(c => (
            <Link key={c.href} href={c.href} className="flex justify-between items-center px-5 py-4 border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all group">
              <span className="text-sm text-slate-700 group-hover:text-slate-900">{c.en}</span>
              <span className="text-xs text-slate-400 group-hover:text-slate-600" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>{c.ar}</span>
            </Link>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-10 text-center">
          <p className="text-slate-500 text-sm mb-6">Medical reports may be submitted for specialist review. A Berlin-based coordinator will assess the case and identify the appropriate pathway.</p>
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
