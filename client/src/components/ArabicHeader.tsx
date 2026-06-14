import { useLocation } from "wouter";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

// Map Arabic routes to their English equivalents
const EN_ROUTE_MAP: Record<string, string> = {
  "/ar": "/",
  "/ar/neurology-treatment-germany": "/neurology-treatment-germany",
  "/ar/brain-tumor-treatment-germany": "/brain-tumor-treatment-germany",
  "/ar/trigeminal-neuralgia-treatment-germany": "/trigeminal-neuralgia-treatment-germany",
  "/ar/cardiology-treatment-germany": "/cardiology-treatment-germany",
  "/ar/lung-cancer-treatment-germany": "/lung-cancer-treatment-germany",
  "/ar/herniated-disc": "/herniated-disc-treatment-germany",
};

export default function ArabicHeader() {
  const [location] = useLocation();

  // Only render on Arabic routes
  if (!location.startsWith("/ar")) return null;

  const enRoute = EN_ROUTE_MAP[location] ?? "/";

  return (
    <header
      className="bg-[#0B1C2C] border-b border-slate-700 sticky top-0 z-50"
      dir="rtl"
      lang="ar"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Branding */}
        <a href="/ar" className="flex flex-col" style={FONT}>
          <span className="text-white text-sm font-medium leading-tight">
            Medical Care Germany
          </span>
          <span className="text-slate-400 text-xs leading-tight hidden sm:block">
            مرجعية طبية استراتيجية للمرضى الدوليين
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-block px-3 py-1.5 bg-white text-[#0B1C2C] text-xs font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            إرسال التقارير الطبية
          </a>

          {/* Language switch */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400">🌍</span>
            <a href="/ar" className="text-slate-300 hover:text-white transition-colors">AR</a>
            <span className="text-slate-600">|</span>
            <a href={enRoute} className="text-slate-400 hover:text-slate-200 transition-colors">EN</a>
          </div>
        </div>
      </div>
    </header>
  );
}
