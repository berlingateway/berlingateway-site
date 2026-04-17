/*
LOCKED COMPONENT — DO NOT MODIFY
Source: /ar/trigeminal-neuralgia-treatment-germany (MedicalConditionPage Arabic nav)
Any modification breaks design system
*/

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Globe } from "lucide-react";

export default function ArabicHeaderLocked() {
  const [location] = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Render ONLY on Arabic routes
  if (!location.startsWith("/ar")) return null;

  // Close dropdown on outside click
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Contact Bar — exact copy from MedicalConditionPage Arabic */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <a
            href="mailto:info@medicalcaregermany.com"
            className="hover:text-slate-300 transition-colors"
          >
            info@medicalcaregermany.com
          </a>
        </div>
      </div>

      {/* Navigation — exact copy from MedicalConditionPage Arabic nav */}
      <nav
        className="sticky z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm"
        style={{ top: "var(--banner-height, 0px)" }}
      >
        {/* Brand block — left side (RTL: right side) */}
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

        {/* Right side: Globe dropdown + CTA */}
        <div className="flex items-center gap-4">
          {/* Globe language switch */}
          <div className="relative" ref={dropdownRef}>
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

          {/* CTA button — exact styling from MedicalConditionPage */}
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
