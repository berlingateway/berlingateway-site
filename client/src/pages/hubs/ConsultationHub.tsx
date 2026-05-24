import { useState } from "react";
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

const FAQ_ITEMS = [
  {
    question: "How does medical consultation in Germany work for international patients?",
    answer:
      "International patients submit their medical file — including imaging, lab results, and prior treatment history — to Medical Care Germany. A Berlin-based coordinator reviews the documentation and identifies the appropriate specialist or university hospital. The patient then receives a structured consultation plan, including appointment scheduling, translation support, and logistical coordination.",
  },
  {
    question: "How long does it take to get a specialist appointment in Germany?",
    answer:
      "For coordinated international patients, specialist appointments at German university hospitals are typically arranged within 2–4 weeks of file submission. Urgent cases are prioritized. The timeline depends on the specialty and the complexity of the case. A coordinator provides a realistic estimate after reviewing your medical documentation.",
  },
  {
    question: "Can I get a remote medical opinion from a German specialist?",
    answer:
      "Yes. German specialists can provide written second opinions based on submitted medical documentation — imaging, pathology reports, and clinical history — without requiring the patient to travel. This is particularly useful for evaluating treatment plans or surgical recommendations before committing to travel.",
  },
  {
    question: "What documents do I need for medical consultation in Germany?",
    answer:
      "Typically required: recent imaging (MRI, CT, PET-CT), laboratory results, pathology reports (if applicable), operative reports (if prior surgery), current medication list, and a brief clinical summary. Documents in Arabic are accepted; translation is arranged as part of the coordination process.",
  },
  {
    question: "Is medical coordination in Germany covered by insurance?",
    answer:
      "Coverage depends on the patient's insurance provider and policy. Some international health insurance plans cover specialist consultations and second opinions at German university hospitals. Medical Care Germany can provide documentation to support insurance reimbursement claims. Patients are advised to verify coverage with their insurer before travel.",
  },
];

function ConsultationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 mb-12">
      <h2 className="text-xl font-serif text-slate-800 mb-6">
        Frequently Asked Questions — Medical Consultation in Germany
      </h2>
      <div className="divide-y divide-slate-200 border border-slate-200">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}>
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="text-sm font-medium text-slate-800 leading-relaxed">{item.question}</span>
              <span className="text-slate-400 text-lg flex-shrink-0 mt-0.5">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5">
                <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConsultationHub() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Helmet>
        <title>Medical Consultation Services in Germany — Second Opinion &amp; Specialist Referral</title>
        <meta
          name="description"
          content="Structured medical consultation services in Germany including second opinions, specialist referrals, advanced diagnostics, and coordination for international patients at German university hospitals."
        />
        <link rel="canonical" href="https://medicalcaregermany.com/consultation-services-germany" />
      </Helmet>

      <div className="w-full bg-slate-900 text-white py-3 px-6 text-center text-sm">
        <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
          info@medicalcaregermany.com
        </a>
      </div>

      <nav className="w-full py-4 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "Georgia, serif" }}>
          Medical Care Germany
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="/ar" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            العربية
          </Link>
          <Link
            href="/send-medical-reports"
            className="bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors"
          >
            Send Medical Reports
          </Link>
        </div>
      </nav>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="mb-4">
          <Link href="/" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">
            ← Medical Care Germany
          </Link>
        </div>
        <h1 className="text-4xl font-serif font-medium text-slate-900 mb-4">
          Consultation Services in Germany
        </h1>
        <p className="text-lg text-slate-500 font-light mb-8 max-w-2xl">
          Structured medical consultation and coordination services for international patients, referring
          physicians, and institutional partners seeking structured access to Germany's specialist medical
          system.
        </p>

        {/* ── Addition 1: Authority Stats Block ── */}
        <div className="bg-slate-900 text-white px-8 py-10 mb-10">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Since 2012</p>
          <h2 className="text-xl font-serif font-medium mb-6">
            Complex cases from across the Arab world
          </h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-3xl font-light text-white">500+</p>
              <p className="text-xs text-slate-400 mt-1">Cases coordinated</p>
            </div>
            <div>
              <p className="text-3xl font-light text-white">15+</p>
              <p className="text-xs text-slate-400 mt-1">University hospitals</p>
            </div>
          </div>
          <Link
            href="/send-medical-reports"
            className="inline-block bg-white text-slate-900 text-sm font-medium px-6 py-3 hover:bg-slate-100 transition-colors tracking-wide"
          >
            Start Your Consultation
          </Link>
        </div>

        <div className="h-px w-16 bg-slate-200 mb-10" />

        <div
          className="bg-slate-50 border border-slate-200 rounded-sm p-6 mb-12 text-right"
          dir="rtl"
          style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
        >
          <h2 className="text-base font-semibold text-slate-800 mb-3">خدمات الاستشارة الطبية في ألمانيا</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            تشمل خدمات الاستشارة الطبية الحصول على رأي طبي ثانٍ من متخصصين ألمان، والإحالة إلى أخصائيين في
            المستشفيات الجامعية، وتقييم الحالات المعقدة التي تحتاج إلى فريق طبي متعدد التخصصات. يمكن إرسال
            التقارير الطبية للمراجعة الأولية قبل اتخاذ أي قرار علاجي.
          </p>
        </div>

        <h2 className="text-xl font-serif text-slate-800 mb-6">Consultation Services</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {conditions.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="flex justify-between items-center px-5 py-4 border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all group"
            >
              <span className="text-sm text-slate-700 group-hover:text-slate-900">{c.en}</span>
              <span
                className="text-xs text-slate-400 group-hover:text-slate-600"
                style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
              >
                {c.ar}
              </span>
            </Link>
          ))}
        </div>

        {/* ── Addition 2: FAQ Accordion ── */}
        <ConsultationFAQ />

        {/* ── Addition 3: Dark CTA ── */}
        <div className="bg-slate-900 text-white px-8 py-10 mt-4">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">Next Step</p>
          <h2 className="text-xl font-serif font-medium mb-3">
            Send your medical file — a coordinator will review your case within 24 hours
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Submit your medical reports and imaging. A Berlin-based clinical coordinator will assess your
            case and identify the appropriate specialist pathway.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/send-medical-reports"
              className="inline-block bg-white text-slate-900 text-sm font-medium px-6 py-3 hover:bg-slate-100 transition-colors tracking-wide"
            >
              Send Medical File
            </Link>
            <a
              href="https://wa.me/4915781497451"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white text-sm font-medium px-6 py-3 hover:bg-white hover:text-slate-900 transition-colors tracking-wide"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-4">All submissions are handled with strict confidentiality.</p>
        </div>
      </section>

      <footer className="py-10 bg-white text-center border-t border-slate-100 mt-12">
        <p className="text-slate-400 text-xs font-serif">Medical Care Germany · Berlin</p>
        <p className="text-slate-300 text-xs mt-1">Operating within established clinical coordination frameworks.</p>
      </footer>
    </div>
  );
}
