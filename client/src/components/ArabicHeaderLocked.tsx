/*
LOCKED COMPONENT — DO NOT MODIFY
Source: /ar/trigeminal-neuralgia-treatment-germany (MedicalConditionPage Arabic nav)
Updated: Added Medical Conditions dropdown with 7 specialties
*/

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe, ChevronDown } from "lucide-react";

const MEDICAL_CONDITIONS = [
  { label: "الأعصاب والجهاز العصبي", href: "/ar/neurology-treatment-germany" },
  { label: "العمود الفقري والانزلاق الغضروفي", href: "/ar/herniated-disc" },
  { label: "أورام المخ", href: "/ar/brain-tumor-treatment-germany" },
  { label: "القلب والأوعية الدموية", href: "/ar/cardiology-treatment-germany" },
  { label: "العظام والمفاصل", href: "/ar/orthopedics-germany" },
  { label: "إعادة التأهيل المتقدم", href: "/ar/advanced-rehabilitation-germany" },
  { label: "ألم العصب الخامس", href: "/ar/trigeminal-neuralgia-treatment-germany" },
];

export default function ArabicHeaderLocked() {
  const [location] = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const [condOpen, setCondOpen] = useState(false);
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

  // Render ONLY on Arabic routes — conditional AFTER all hooks
  if (!location.startsWith("/ar")) return null;

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
        className="sticky z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm"
        style={{ top: "var(--banner-height, 0px)" }}
      >
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

        {/* Right side: Medical Conditions dropdown + Globe + CTA */}
        <div className="flex items-center gap-4">

          {/* Medical Conditions dropdown */}
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
                    onClick={() => setCondOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Globe language switch */}
          <div className="relative" ref={langRef}>
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
                  onClick={() => setLangOpen(false)}
                >
                  العربية
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 text-right"
                  onClick={() => setLangOpen(false)}
                >
                  English
                </Link>
              </div>
            )}
          </div>

          {/* CTA button */}
          <Link
            href="/send-medical-reports"
            className="bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors tracking-wide"
          >
            إرسال التقارير الطبية
          </Link>
        </div>
      </nav>
    </>
  );
}
