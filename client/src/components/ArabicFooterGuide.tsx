/**
 * ArabicFooterGuide — shared Treatment Guide link section
 * Injected into every Arabic page footer.
 * DO NOT redesign. DO NOT remove. DO NOT reorder links.
 */

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

const GUIDE_LINKS = [
  { href: "/ar/العلاج-في-المانيا-للعرب", label: "العلاج في ألمانيا للعرب" },
  { href: "/ar/تكلفة-العلاج-في-المانيا", label: "تكلفة العلاج في ألمانيا" },
  { href: "/ar/فيزا-العلاج-في-المانيا", label: "فيزا العلاج في ألمانيا" },
  { href: "/ar/مستشفيات-المانيا-للعرب", label: "مستشفيات ألمانيا للمرضى الدوليين" },
  { href: "/ar/السفر-للعلاج-في-المانيا", label: "السفر للعلاج في ألمانيا" },
  { href: "https://tally.so/r/68MrBP", label: "إرسال التقارير الطبية" },
  { href: "/ar/about", label: "من نحن" },
];

export function ArabicFooterGuide() {
  return (
    <div
      dir="rtl"
      className="border-t border-slate-200 pt-6 pb-2 px-4 text-center"
      style={FONT}
    >
      <p className="text-xs text-slate-500 mb-3 tracking-wide">دليل العلاج في ألمانيا</p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {GUIDE_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs text-slate-500 hover:text-slate-800 transition-colors underline-offset-2 hover:underline"
            style={FONT}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
