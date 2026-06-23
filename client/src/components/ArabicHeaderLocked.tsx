/*
LOCKED COMPONENT — DO NOT MODIFY
Source: /ar/trigeminal-neuralgia-treatment-germany (MedicalConditionPage Arabic nav)
Updated: Added Medical Conditions dropdown with 9 specialties + hamburger mobile menu
*/

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

const MEDICAL_CONDITIONS = [
  { label: "الأعصاب والجهاز العصبي", href: "/ar/neurology-treatment-germany" },
  { label: "تنميل اليدين والقدمين", href: "/ar/numbness-hands-feet-germany" },
  { label: "ألم الرقبة مع دوخة", href: "/ar/neck-pain-dizziness-germany" },
  { label: "العمود الفقري والانزلاق الغضروفي", href: "/ar/herniated-disc" },
  { label: "أورام المخ", href: "/ar/brain-tumor-treatment-germany" },
  { label: "القلب والأوعية الدموية", href: "/ar/cardiology-treatment-germany" },
  { label: "العظام والمفاصل", href: "/ar/orthopedics-germany" },
  { label: "استبدال مفصل الركبة", href: "/ar/knee-replacement-germany" },
  { label: "استبدال مفصل الورك", href: "/ar/hip-replacement-germany" },
  { label: "جراحة الكتف", href: "/ar/shoulder-surgery-germany" },
  { label: "إعادة التأهيل المتقدم", href: "/ar/advanced-rehabilitation-germany" },
  { label: "ألم العصب الخامس", href: "/ar/trigeminal-neuralgia-treatment-germany" },
  { label: "سرطان البروستاتا", href: "/ar/prostate-cancer-treatment-germany" },
  { label: "سرطان الكبد", href: "/ar/liver-cancer-treatment-germany" },
  { label: "سرطان الثدي", href: "/ar/breast-cancer-treatment-germany" },
  { label: "سرطان القولون", href: "/ar/colon-cancer-treatment-germany" },
  { label: "رأي ثانٍ قبل العملية", href: "/ar/surgery-second-opinion" },
  { label: "الحالات المعقدة", href: "/ar/complex-cases" },
];

const INTERNATIONAL_PATIENTS = [
  { label: "العلاج في ألمانيا للمقيمين في السعودية", href: "/ar/treatment-germany-saudi" },
  { label: "العلاج في ألمانيا للمقيمين في الإمارات", href: "/ar/treatment-germany-uae" },
  { label: "العلاج في ألمانيا للليبيين", href: "/ar/treatment-germany-libya/" },
  { label: "تأشيرة العلاج الطبي للليبيين", href: "/ar/medical-visa-germany-libya/" },
  { label: "علاج السرطان للمرضى الليبيين", href: "/ar/oncology-germany-libya/" },
  { label: "إعادة التأهيل للمرضى الليبيين", href: "/ar/rehabilitation-germany-libya/" },
  { label: "العلاج في ألمانيا للعراقيين", href: "/ar/treatment-germany-iraq/" },
  { label: "العلاج في ألمانيا لليمنيين", href: "/ar/treatment-germany-yemen/" },
];

const MAIN_LINKS = [
  { label: "الرئيسية", href: "/ar" },
  { label: "من نحن", href: "/ar/about" },
  { label: "إرسال التقارير الطبية", href: "https://tally.so/r/68MrBP" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function ArabicHeaderLocked() {
  const [location] = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const [condOpen, setCondOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const condRef = useRef<HTMLDivElement>(null);

  // All hooks MUST be called before any conditional return
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (condRef.current && !condRef.current.contains(e.target as Node)) {
        setCondOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Render ONLY on Arabic routes — conditional AFTER all hooks
  if (!location.startsWith("/ar")) return null;

  const closeAll = () => {
    setMobileOpen(false);
    setCondOpen(false);
    setLangOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 text-sm">
          <a
            href="mailto:info@medicalcaregermany.com"
            className="hover:text-slate-300 transition-colors"
          >
            info@medicalcaregermany.com
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="tel:+493025730875"
            className="hover:text-slate-300 transition-colors"
          >
            +49 30 25730875
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="sticky z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100"
        style={{ top: "var(--banner-height, 0px)" }}
      >
        <div className="w-full py-3 px-8 flex justify-between items-center">
          {/* Brand block */}
          <div className="flex flex-col">
            <Link
              href="/ar"
              className="text-xl font-serif font-bold tracking-tight text-slate-900"
            >
              ميديكال كير جيرماني
            </Link>
            <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
              مرجعية طبية استراتيجية للمرضى الدوليين
            </span>
          </div>

          {/* Right side: desktop nav + hamburger */}
          <div className="flex items-center gap-4">

            {/* Desktop: Medical Conditions dropdown */}
            <div className="relative hidden md:block" ref={condRef}>
              <button
                type="button"
                onClick={() => setCondOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
                aria-label="الحالات الطبية"
              >
                الحالات الطبية
                <ChevronDown size={14} strokeWidth={2} className={condOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {condOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 shadow-lg z-50"
                  dir="rtl"
                >
                  {MEDICAL_CONDITIONS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-b border-slate-100 last:border-0 text-right transition-colors"
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="px-4 py-2 bg-slate-50 border-b border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                      المرضى الدوليون
                    </span>
                  </div>
                  {INTERNATIONAL_PATIENTS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 border-b border-slate-100 last:border-0 text-right transition-colors"
                      onClick={closeAll}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop: Globe language switch */}
            <div className="relative hidden md:block" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="text-slate-500 hover:text-slate-900 transition-colors p-1 rounded focus:outline-none"
                aria-label="Language switch"
              >
                <Globe size={18} strokeWidth={1.5} />
              </button>
              {langOpen && (
                <div className="absolute left-0 mt-2 w-32 bg-white border border-slate-200 shadow-md z-50">
                  <Link
                    href="/ar"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 text-right"
                    onClick={closeAll}
                  >
                    العربية
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 text-right"
                    onClick={closeAll}
                  >
                    English
                  </Link>
                </div>
              )}
            </div>

            {/* Desktop: CTA button */}
            <Link
              href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
              className="hidden md:block bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors tracking-wide"
            >
              إرسال التقارير الطبية
            </Link>

            {/* Mobile: Hamburger button */}
            <button
              type="button"
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileOpen && (
          <div
            className="md:hidden bg-white border-t border-slate-100 shadow-lg"
            dir="rtl"
          >
            {/* Main links */}
            {MAIN_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-3.5 text-sm font-medium text-slate-800 hover:bg-slate-50 border-b border-slate-100 text-right transition-colors"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}

            {/* Divider + Medical Conditions section */}
            <div className="px-6 py-2 bg-slate-50 border-b border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                الحالات الطبية
              </span>
            </div>
            {MEDICAL_CONDITIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-100 last:border-0 text-right transition-colors"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}

            {/* Divider + International Patients section */}
            <div className="px-6 py-2 bg-slate-50 border-b border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                المرضى الدوليون
              </span>
            </div>
            {INTERNATIONAL_PATIENTS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-100 last:border-0 text-right transition-colors"
                onClick={closeAll}
              >
                {item.label}
              </a>
            ))}

            {/* Language switch */}
            <div className="px-6 py-2 bg-slate-50 border-b border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                اللغة
              </span>
            </div>
            <Link
              href="/ar"
              className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-100 text-right transition-colors"
              onClick={closeAll}
            >
              العربية
            </Link>
            <Link
              href="/"
              className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 text-right transition-colors"
              onClick={closeAll}
            >
              English
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
