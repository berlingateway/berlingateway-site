/*
LOCKED COMPONENT — DO NOT MODIFY
Source: trigeminal-neuralgia page (MedicalConditionPage nav, Arabic variant)
Any modification breaks design system
*/

import { Link, useLocation } from "wouter";

export default function ArabicHeaderLocked() {
  const [location] = useLocation();

  // Render ONLY on Arabic routes
  if (!location.startsWith("/ar")) return null;

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

      {/* Navigation — exact copy from MedicalConditionPage Arabic */}
      <nav
        className="sticky z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm"
        style={{ top: "var(--banner-height, 0px)" }}
      >
        <div className="flex flex-col">
          <Link
            href="/ar"
            className="text-xl font-serif font-bold tracking-tight text-slate-900"
          >
            ميديكال كير جيرماني
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden md:inline"
          >
            الإنجليزية
          </Link>
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
