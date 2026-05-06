import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

// ─── Diagnostic Entry Layer (v2) ─────────────────────────────────────────────

const AR_FONT: React.CSSProperties = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

interface DiagCategory {
  id: string;
  label: string;        // shown on primary button
  ctaLabel: string;     // dynamic CTA text
  subs: string[];       // always present; empty = direct CTA
}

const DIAG_CATEGORIES: DiagCategory[] = [
  {
    id: "tumors",
    label: "أورام",
    ctaLabel: "إرسال تقارير الأورام للمراجعة",
    subs: ["أورام الدماغ", "أورام الرئة", "أورام الجهاز الهضمي", "أورام العمود الفقري", "غير محدد"],
  },
  {
    id: "dizziness",
    label: "دوخة وعدم توازن",
    ctaLabel: "إرسال تقارير الدوخة للمراجعة",
    subs: ["دوخة مستمرة", "فقدان توازن", "دوار مفاجئ"],
  },
  {
    id: "numbness",
    label: "تنميل في الأطراف",
    ctaLabel: "إرسال تقارير التنميل للمراجعة",
    subs: ["اليدين", "القدمين", "نصف الجسم"],
  },
  {
    id: "bones",
    label: "العظام والمفاصل",
    ctaLabel: "إرسال تقارير العظام للمراجعة",
    subs: ["العمود الفقري", "الركبة", "المفاصل"],
  },
  {
    id: "nerves",
    label: "الأعصاب",
    ctaLabel: "إرسال تقارير الأعصاب للمراجعة",
    subs: ["الصداع", "الأعصاب الطرفية", "أمراض الدماغ"],
  },
  {
    id: "undiagnosed",
    label: "حالة غير مشخصة",
    ctaLabel: "إرسال التقارير الطبية للمراجعة",
    subs: [],
  },
];

function DiagnosticLayer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);

  const activeCategory = DIAG_CATEGORIES.find(c => c.id === activeId) ?? null;
  // CTA is visible once a primary is chosen (direct) or a sub is chosen
  const showCTA = activeId !== null && (activeCategory?.subs.length === 0 || selectedSub !== null);

  function handlePrimary(cat: DiagCategory) {
    if (activeId === cat.id) {
      setActiveId(null);
      setSelectedSub(null);
      return;
    }
    setActiveId(cat.id);
    setSelectedSub(null);
    // scroll sub-panel into view
    setTimeout(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  }

  function handleSub(sub: string) {
    setSelectedSub(sub);
    setTimeout(() => ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  }

  // Dynamic CTA label
  const ctaLabel = activeCategory?.ctaLabel ?? "إرسال التقارير الطبية للمراجعة";

  // Sub-panel is open when active category has subs
  const subPanelOpen = activeCategory !== null && activeCategory.subs.length > 0;

  return (
    <section className="py-14 px-6 bg-slate-50 border-b border-slate-200" dir="rtl">
      <div className="max-w-4xl mx-auto">

        {/* ── Title ── */}
        <h2
          className="text-xl md:text-2xl font-medium text-slate-900 text-center mb-10"
          style={AR_FONT}
        >
          ما الحالة التي تعاني منها؟
        </h2>

        {/* ── Level 1: 6 equal boxes ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {DIAG_CATEGORIES.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handlePrimary(cat)}
                className={
                  "w-full py-5 px-4 text-sm font-medium text-center border cursor-pointer " +
                  "transition-all duration-200 select-none " +
                  (isActive
                    ? "bg-[#0B1C2C] text-white border-[#0B1C2C] shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A]")
                }
                style={AR_FONT}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Level 2: Sub-selection panel (CSS transition) ── */}
        <div
          ref={panelRef}
          style={{
            maxHeight: subPanelOpen ? "320px" : "0px",
            opacity:   subPanelOpen ? 1 : 0,
            marginTop: subPanelOpen ? "16px" : "0px",
            overflow:  "hidden",
            transition: "max-height 0.35s ease, opacity 0.3s ease, margin-top 0.3s ease",
          }}
        >
          {activeCategory && activeCategory.subs.length > 0 && (
            <div className="bg-white border border-slate-200 p-5">
              <p className="text-xs text-slate-400 mb-4" style={AR_FONT}>
                حدد الحالة بشكل أدق:
              </p>
              <div className="flex flex-wrap gap-2 justify-end">
                {activeCategory.subs.map((sub) => {
                  const isSubActive = selectedSub === sub;
                  return (
                    <button
                      key={sub}
                      onClick={() => handleSub(sub)}
                      className={
                        "px-4 py-2 text-xs border cursor-pointer transition-all duration-150 " +
                        (isSubActive
                          ? "bg-[#1E4A7A] text-white border-[#1E4A7A]"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A]")
                      }
                      style={AR_FONT}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ── CTA block (fade in) ── */}
        <div
          ref={ctaRef}
          style={{
            maxHeight: showCTA ? "160px" : "0px",
            opacity:   showCTA ? 1 : 0,
            marginTop: showCTA ? "24px" : "0px",
            overflow:  "hidden",
            transition: "max-height 0.35s ease, opacity 0.3s ease, margin-top 0.3s ease",
          }}
        >
          {showCTA && (
            <div className="text-center">
              <button
                onClick={() => {
                  const el = document.getElementById('intake-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-block px-10 py-4 bg-[#0B1C2C] text-white text-sm font-medium hover:bg-[#1E3A5A] transition-colors cursor-pointer"
                style={AR_FONT}
              >
                {ctaLabel}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

// Sovereign iframe form — Arabic version
function ArabicIframeForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(680);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'form-height' && typeof event.data.height === 'number') {
        setIframeHeight(Math.max(600, event.data.height + 32));
      }
      if (event.data?.type === 'form-success') {
        setIframeHeight(360);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/intake-form-ar.html"
      title="تقديم الحالة الطبية"
      width="100%"
      height={iframeHeight}
      style={{ border: 'none', display: 'block', width: '100%' }}
      scrolling="no"
      loading="lazy"
    />
  );
}

// ─── Single source of truth for Arabic conditions navigation ────────────────
const AR_NAV_CONDITIONS = {
  hub: { label: "أمراض الأعصاب →", href: "/ar/neurology-treatment-germany" },
  items: [
    { label: "أورام المخ",          href: "/ar/brain-tumor-treatment-germany" },
    { label: "ألم العصب الخامس",   href: "/ar/trigeminal-neuralgia-treatment-germany" },
    { label: "الانزلاق الغضروفي",  href: "/ar/herniated-disc" },
    { label: "سرطان الرئة",         href: "/ar/lung-cancer-treatment-germany" },
    { label: "أمراض وجراحة القلب المتقدمة", href: "/ar/cardiology-treatment-germany" },
    { label: "أعراض غير مشخصة",             href: "/ar/neurology-treatment-germany" },
    { label: "مرض باركنسون",                  href: "/ar/parkinsons-treatment-germany" },
    { label: "أعصاب الأطفال",                 href: "/ar/pediatric-neurology-germany" },
    { label: "إصابات الحوادث والحروب",           href: "/ar/complex-trauma-evaluation" },
    { label: "الأطراف الصناعية بعد البتر",          href: "/ar/prosthetics-after-amputation-germany" },
    { label: "استبدال المفاصل بعد الإصابة",        href: "/ar/joint-replacement-after-trauma" },
  ],
  fertility: [
    { label: "علاج تأخر الإنجاب في ألمانيا",           href: "/ar/fertility-treatment-germany" },
    { label: "أطفال الأنابيب IVF في ألمانيا",           href: "/ar/ivf-germany" },
    { label: "الحقن المجهري ICSI في ألمانيا",           href: "/ar/icsi-germany" },
    { label: "الفحص الوراثي للأجنة PGD في ألمانيا",    href: "/ar/pgd-germany" },
    { label: "تكلفة أطفال الأنابيب في ألمانيا",         href: "/ar/ivf-cost-germany" },
    { label: "علاج الخصوبة لليبيين في ألمانيا",         href: "/ar/fertility-treatment-libya-germany" },
    { label: "علاج الخصوبة للسعوديين في ألمانيا",       href: "/ar/fertility-treatment-saudi-germany" },
    { label: "علاج الخصوبة للعراقيين في ألمانيا",       href: "/ar/fertility-treatment-iraq-germany" },
    { label: "علاج الخصوبة للمصريين في ألمانيا",          href: "/ar/fertility-treatment-egypt-germany" },
  ],
  services: [
    { label: "إرسال التقارير الطبية", href: "/send-medical-reports" },
    { label: "فيزا العلاج في ألمانيا والإقامة الطبية", href: "/ar/medical-visa-residency-germany" },
    { label: "مكتبة الفيديو",         href: "/ar/videos" },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

export default function ArabicHome() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false);
  const [activeMedCat, setActiveMedCat] = useState<string>('neurology');
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const conditionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (conditionsRef.current && !conditionsRef.current.contains(e.target as Node)) {
        setConditionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'focus', 'why-germany', 'submit-case', 'contact'];
      const scrollPosition = window.scrollY + 150;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-slate-900 font-sans"
      dir="rtl"
      style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, 'Segoe UI', sans-serif" }}
    >
      {/* Google Fonts: IBM Plex Sans Arabic */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>



      {/* Navigation */}
      <nav className="sticky z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm" style={{ top: 'var(--banner-height, 0px)' }}>
        <div className="flex flex-col items-end">
          <Link href="/ar" className="text-xl font-bold tracking-tight text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
            Medical Care Germany
          </Link>
          <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">سلطة التنسيق السريري المؤسسي</span>
        </div>

        {/* Desktop Navigation — mirrors English 1:1, RTL */}
        <div className="desktop-nav flex gap-8 text-sm text-slate-500 items-center">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>الرئيسية</a>
          <a href="#focus" className={`nav-link ${activeSection === 'focus' ? 'active' : ''}`}>الحوكمة</a>
          <a href="#why-germany" className={`nav-link ${activeSection === 'why-germany' ? 'active' : ''}`}>كيف نعمل</a>
          <a href="/ar/videos" className="nav-link">مكتبة الفيديو</a>
          {/* Medical Conditions Mega-Menu (Arabic) — no scroll, full visibility */}
          <div className="relative" ref={conditionsRef}>
            <button
              onClick={() => setConditionsOpen(v => !v)}
              className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              الحالات الطبية <span className={`text-xs transition-transform inline-block ${conditionsOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {conditionsOpen && (
              <div
                className="absolute top-full right-0 mt-0 bg-white z-50"
                dir="rtl"
                style={{
                  minWidth: '440px',
                  maxWidth: '460px',
                  border: '1px solid #d1d5db',
                  borderTop: '2px solid #0B1C2C',
                  boxShadow: '0 4px 16px rgba(11,28,44,0.10)'
                }}
              >
                <div className="flex" style={{ minHeight: '240px' }}>
                  {/* Left: Category column — institutional sidebar */}
                  <div className="flex-shrink-0 bg-[#f7f8fa] border-l border-[#e5e7eb]" style={{ width: '148px' }}>
                    <div className="px-4 pt-4 pb-1">
                      <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold" style={AR_FONT}>التخصصات الطبية</span>
                    </div>
                    {[
                      { id: 'neurology', label: 'الأعصاب والجهاز العصبي' },
                      { id: 'heart', label: 'أمراض القلب' },
                      { id: 'spine', label: 'العمود الفقري' },
                      { id: 'fertility', label: 'الخصوبة والإنجاب' },
                      { id: 'pediatric', label: 'طب الأطفال' },
                      { id: 'general-surgery', label: 'الجراحة العامة' },
                      { id: 'cosmetic-surgery', label: 'الجراحة التجميلية والترميمية' },
                    ].map(cat => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveMedCat(cat.id)}
                        onClick={() => setActiveMedCat(cat.id)}
                        className="w-full text-right transition-colors"
                        style={{
                          ...AR_FONT,
                          display: 'block',
                          padding: '9px 16px 9px 12px',
                          fontSize: '11px',
                          fontWeight: activeMedCat === cat.id ? '600' : '400',
                          color: activeMedCat === cat.id ? '#0B1C2C' : '#4b5563',
                          background: activeMedCat === cat.id ? '#ffffff' : 'transparent',
                          borderRight: activeMedCat === cat.id ? '2px solid #0B1C2C' : '2px solid transparent',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                  {/* Right: Content column */}
                  <div className="flex-1 py-4 px-5">
                    {activeMedCat === 'neurology' && (
                      <>
                        <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-3 border-b border-[#f0f0f0] pb-2" style={AR_FONT}>الحالات والإصابات</span>
                        {[
                          { href: '/ar/brain-tumor-treatment-germany', label: 'أورام المخ' },
                          { href: '/ar/trigeminal-neuralgia-treatment-germany', label: 'ألم العصب الخامس' },
                          { href: '/ar/parkinsons-treatment-germany', label: 'مرض باركنسون' },
                          { href: '/ar/pediatric-neurology-germany', label: 'أعصاب الأطفال' },
                          { href: '/ar/complex-trauma-evaluation', label: 'إصابات الحوادث والحروب' },
                        ].map(item => (
                          <Link key={item.href} href={item.href} onClick={() => setConditionsOpen(false)}
                            className="block transition-colors"
                            style={{ ...AR_FONT, padding: '7px 4px', fontSize: '12px', color: '#374151', letterSpacing: '0.01em' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                          >{item.label}</Link>
                        ))}
                      </>
                    )}
                    {activeMedCat === 'heart' && (
                      <>
                        <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-3 border-b border-[#f0f0f0] pb-2" style={AR_FONT}>أمراض القلب والأوعية</span>
                        <Link href="/ar/cardiology-treatment-germany" onClick={() => setConditionsOpen(false)}
                          className="block transition-colors"
                          style={{ ...AR_FONT, padding: '7px 4px', fontSize: '12px', color: '#374151' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                        >علاج القلب في ألمانيا</Link>
                      </>
                    )}
                    {activeMedCat === 'spine' && (
                      <>
                        <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-3 border-b border-[#f0f0f0] pb-2" style={AR_FONT}>الجراحة والعلاج</span>
                        {[
                          { href: '/ar/herniated-disc', label: 'انزلاق الغضروف' },
                          { href: '/ar/spine-surgery-germany', label: 'جراحة العمود الفقري' },
                        ].map(item => (
                          <Link key={item.href} href={item.href} onClick={() => setConditionsOpen(false)}
                            className="block transition-colors"
                            style={{ ...AR_FONT, padding: '7px 4px', fontSize: '12px', color: '#374151' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                          >{item.label}</Link>
                        ))}
                      </>
                    )}
                    {activeMedCat === 'fertility' && (
                      <>
                        <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-2 border-b border-[#f0f0f0] pb-2" style={AR_FONT}>العلاج والتشخيص</span>
                        {[
                          { href: '/ar/fertility-treatment-germany', label: 'علاج تأخر الإنجاب في ألمانيا' },
                          { href: '/ar/ivf-germany', label: 'أطفال الأنابيب IVF' },
                          { href: '/ar/icsi-germany', label: 'الحقن المجهري ICSI' },
                          { href: '/ar/pgd-germany', label: 'الفحص الوراثي PGD' },
                          { href: '/ar/ivf-cost-germany', label: 'تكلفة أطفال الأنابيب' },
                        ].map(item => (
                          <Link key={item.href} href={item.href} onClick={() => setConditionsOpen(false)}
                            className="block transition-colors"
                            style={{ ...AR_FONT, padding: '6px 4px', fontSize: '12px', color: '#374151' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                          >{item.label}</Link>
                        ))}
                        <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #f0f0f0' }}>
                          <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-2" style={AR_FONT}>حسب بلدك</span>
                          {[
                            { href: '/ar/fertility-treatment-libya-germany', label: 'للمرضى من ليبيا' },
                            { href: '/ar/fertility-treatment-saudi-germany', label: 'للمرضى من السعودية' },
                            { href: '/ar/fertility-treatment-iraq-germany', label: 'للمرضى من العراق' },
                            { href: '/ar/fertility-treatment-egypt-germany', label: 'للمرضى من مصر' },
                          ].map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setConditionsOpen(false)}
                              className="block transition-colors"
                              style={{ ...AR_FONT, padding: '5px 4px', fontSize: '11px', color: '#6b7280' }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; }}
                            >{item.label}</Link>
                          ))}
                        </div>
                      </>
                    )}
                    {activeMedCat === 'pediatric' && (
                      <>
                        <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-3 border-b border-[#f0f0f0] pb-2" style={AR_FONT}>طب الأطفال</span>
                        <Link href="/ar/pediatric-neurology-germany" onClick={() => setConditionsOpen(false)}
                          className="block transition-colors"
                          style={{ ...AR_FONT, padding: '7px 4px', fontSize: '12px', color: '#374151' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                        >أعصاب الأطفال</Link>
                      </>
                    )}
                    {activeMedCat === 'general-surgery' && (
                      <>
                        <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-3 border-b border-[#f0f0f0] pb-2" style={AR_FONT}>الجراحة العامة</span>
                        {[
                          { href: '/ar/hernia-treatment-germany', label: 'علاج الفتق في ألمانيا' },
                          { href: '#', label: 'جراحة الجهاز الهضمي' },
                          { href: '#', label: 'الجراحة التنظيرية المتقدمة' },
                        ].map(item => (
                          <Link key={item.label} href={item.href} onClick={() => setConditionsOpen(false)}
                            className="block transition-colors"
                            style={{ ...AR_FONT, padding: '7px 4px', fontSize: '12px', color: '#374151' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                          >{item.label}</Link>
                        ))}
                      </>
                    )}
                    {activeMedCat === 'cosmetic-surgery' && (
                      <>
                        <span className="block text-[8px] text-[#9ca3af] uppercase tracking-[0.18em] font-semibold mb-3 border-b border-[#f0f0f0] pb-2" style={AR_FONT}>الجراحة التجميلية والترميمية</span>
                        {[
                          { href: '#', label: 'الترميم بعد الحوادث والأورام' },
                          { href: '#', label: 'جراحة الوجه والفكين' },
                          { href: '#', label: 'التجميل التصحيحي' },
                        ].map(item => (
                          <Link key={item.label} href={item.href} onClick={() => setConditionsOpen(false)}
                            className="block transition-colors"
                            style={{ ...AR_FONT, padding: '7px 4px', fontSize: '12px', color: '#374151' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                          >{item.label}</Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                {/* Footer strip — institutional */}
                <div style={{ borderTop: '1px solid #e5e7eb', padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f7f8fa' }}>
                  <Link href="/send-medical-reports" onClick={() => setConditionsOpen(false)}
                    style={{ ...AR_FONT, fontSize: '10px', color: '#6b7280', letterSpacing: '0.02em' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; }}
                  >إرسال التقارير الطبية</Link>
                  <Link href="/ar/medical-visa-residency-germany" onClick={() => setConditionsOpen(false)}
                    style={{ ...AR_FONT, fontSize: '10px', color: '#6b7280', letterSpacing: '0.02em' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#0B1C2C'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b7280'; }}
                  >فيزا العلاج والإقامة</Link>
                </div>
              </div>
            )}
          </div>
          <a href="#submit-case" className={`nav-link ${activeSection === 'submit-case' ? 'active' : ''}`}>تقديم الحالة</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>تواصل</a>
        </div>

        {/* Send Medical Reports CTA + Language Switch */}
        <div className="flex items-center gap-3">
          <a
            href="/send-medical-reports"
            className="hidden md:inline-block bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors tracking-wide"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            إرسال التقارير الطبية
          </a>
          <a href="/" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">EN</a>
          <span className="text-slate-300 text-xs">|</span>
          <span className="text-xs text-slate-900 font-medium">AR</span>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة"
          >
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-end p-8 gap-6 text-lg text-slate-700">
          <button onClick={() => setMobileMenuOpen(false)} className="self-start text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>الرئيسية</a>
          <a href="#focus" onClick={() => setMobileMenuOpen(false)}>مجالات التخصص</a>
          <a href="#why-germany" onClick={() => setMobileMenuOpen(false)}>لماذا ألمانيا</a>
          <a href="/ar/videos" onClick={() => setMobileMenuOpen(false)}>مكتبة الفيديو</a>
          <a href="#submit-case" onClick={() => setMobileMenuOpen(false)}>تقديم الحالة</a>
          {/* Mobile Medical Conditions (Arabic) */}
          <button
            onClick={() => setMobileConditionsOpen(v => !v)}
            className="flex items-center justify-between w-full text-right text-slate-700 font-medium text-sm py-2 border-t border-slate-100"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            الحالات الطبية <span className={`text-xs transition-transform inline-block ${mobileConditionsOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {mobileConditionsOpen && (
            <div className="flex flex-col w-full pb-2" dir="rtl" style={AR_FONT}>
              {/* Accordion: الأعصاب */}
              <button
                onClick={() => setMobileAccordion(v => v === 'neurology' ? null : 'neurology')}
                className="flex items-center justify-between w-full text-right text-sm font-medium text-slate-700 py-3 border-b border-slate-100 px-2"
              >
                <span>الأعصاب</span>
                <span className="text-slate-400 text-xs">{mobileAccordion === 'neurology' ? '−' : '+'}</span>
              </button>
              {mobileAccordion === 'neurology' && (
                <div className="flex flex-col gap-0.5 px-4 py-2 bg-slate-50">
                  <Link href="/ar/brain-tumor-treatment-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">أورام المخ</Link>
                  <Link href="/ar/trigeminal-neuralgia-treatment-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">ألم العصب الخامس</Link>
                  <Link href="/ar/parkinsons-treatment-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">مرض باركنسون</Link>
                  <Link href="/ar/pediatric-neurology-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">أعصاب الأطفال</Link>
                  <Link href="/ar/complex-trauma-evaluation" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">إصابات الحوادث والحروب</Link>
                </div>
              )}
              {/* Accordion: القلب */}
              <button
                onClick={() => setMobileAccordion(v => v === 'heart' ? null : 'heart')}
                className="flex items-center justify-between w-full text-right text-sm font-medium text-slate-700 py-3 border-b border-slate-100 px-2"
              >
                <span>القلب</span>
                <span className="text-slate-400 text-xs">{mobileAccordion === 'heart' ? '−' : '+'}</span>
              </button>
              {mobileAccordion === 'heart' && (
                <div className="flex flex-col gap-0.5 px-4 py-2 bg-slate-50">
                  <Link href="/ar/cardiology-treatment-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">علاج القلب في ألمانيا</Link>
                </div>
              )}
              {/* Accordion: العمود الفقري */}
              <button
                onClick={() => setMobileAccordion(v => v === 'spine' ? null : 'spine')}
                className="flex items-center justify-between w-full text-right text-sm font-medium text-slate-700 py-3 border-b border-slate-100 px-2"
              >
                <span>العمود الفقري</span>
                <span className="text-slate-400 text-xs">{mobileAccordion === 'spine' ? '−' : '+'}</span>
              </button>
              {mobileAccordion === 'spine' && (
                <div className="flex flex-col gap-0.5 px-4 py-2 bg-slate-50">
                  <Link href="/ar/herniated-disc" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">انزلاق الغضروف</Link>
                  <Link href="/ar/spine-surgery-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">جراحة العمود الفقري</Link>
                </div>
              )}
              {/* Accordion: الخصوبة والإنجاب */}
              <button
                onClick={() => setMobileAccordion(v => v === 'fertility' ? null : 'fertility')}
                className="flex items-center justify-between w-full text-right text-sm font-medium text-slate-700 py-3 border-b border-slate-100 px-2"
              >
                <span>الخصوبة والإنجاب</span>
                <span className="text-slate-400 text-xs">{mobileAccordion === 'fertility' ? '−' : '+'}</span>
              </button>
              {mobileAccordion === 'fertility' && (
                <div className="flex flex-col gap-0.5 px-4 py-2 bg-slate-50">
                  <Link href="/ar/fertility-treatment-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">علاج تأخر الإنجاب في ألمانيا</Link>
                  <Link href="/ar/ivf-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">أطفال الأنابيب IVF</Link>
                  <Link href="/ar/icsi-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">الحقن المجهري ICSI</Link>
                  <Link href="/ar/pgd-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">الفحص الوراثي PGD</Link>
                  <Link href="/ar/ivf-cost-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">تكلفة أطفال الأنابيب</Link>
                </div>
              )}
              {/* Accordion: الأطفال */}
              <button
                onClick={() => setMobileAccordion(v => v === 'pediatric' ? null : 'pediatric')}
                className="flex items-center justify-between w-full text-right text-sm font-medium text-slate-700 py-3 border-b border-slate-100 px-2"
              >
                <span>الأطفال</span>
                <span className="text-slate-400 text-xs">{mobileAccordion === 'pediatric' ? '−' : '+'}</span>
              </button>
              {mobileAccordion === 'pediatric' && (
                <div className="flex flex-col gap-0.5 px-4 py-2 bg-slate-50">
                  <Link href="/ar/pediatric-neurology-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">أعصاب الأطفال</Link>
                </div>
              )}
              {/* Accordion: الجراحة العامة */}
              <button
                onClick={() => setMobileAccordion(v => v === 'general-surgery' ? null : 'general-surgery')}
                className="flex items-center justify-between w-full text-right text-sm font-medium text-slate-700 py-3 border-b border-slate-100 px-2"
              >
                <span>الجراحة العامة</span>
                <span className="text-slate-400 text-xs">{mobileAccordion === 'general-surgery' ? '−' : '+'}</span>
              </button>
              {mobileAccordion === 'general-surgery' && (
                <div className="flex flex-col gap-0.5 px-4 py-2 bg-slate-50">
                  <a href="/ar/hernia-treatment-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">علاج الفتق في ألمانيا</a>
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">جراحة الجهاز الهضمي</a>
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">الجراحة التنظيرية المتقدمة</a>
                </div>
              )}
              {/* Accordion: الجراحة التجميلية */}
              <button
                onClick={() => setMobileAccordion(v => v === 'cosmetic-surgery' ? null : 'cosmetic-surgery')}
                className="flex items-center justify-between w-full text-right text-sm font-medium text-slate-700 py-3 border-b border-slate-100 px-2"
              >
                <span>الجراحة التجميلية والترميمية</span>
                <span className="text-slate-400 text-xs">{mobileAccordion === 'cosmetic-surgery' ? '−' : '+'}</span>
              </button>
              {mobileAccordion === 'cosmetic-surgery' && (
                <div className="flex flex-col gap-0.5 px-4 py-2 bg-slate-50">
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">الترميم بعد الحوادث والأورام</a>
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">جراحة الوجه والفكين</a>
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-600 py-1.5 hover:text-slate-900">التجميل التصحيحي</a>
                </div>
              )}
              {/* Direct links */}
              <Link href="/send-medical-reports" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-500 py-2.5 border-b border-slate-100 px-2 hover:text-slate-900">إرسال التقارير الطبية</Link>
              <Link href="/ar/medical-visa-residency-germany" onClick={() => setMobileMenuOpen(false)} className="text-xs text-slate-500 py-2.5 px-2 hover:text-slate-900">فيزا العلاج والإقامة الطبية</Link>
            </div>
          )}
          <a
            href="/send-medical-reports"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-slate-900 text-white text-sm font-medium px-4 py-3 text-center hover:bg-slate-700 transition-colors w-full"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            إرسال التقارير الطبية
          </a>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative py-20 md:py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-6" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif", lineHeight: '1.5' }}>
            عندما تصبح الحالة الطبية معقدة…<br />
            يحتاج القرار إلى خبرة أكبر
          </h1>

          <p className="text-base md:text-lg text-slate-300 font-light mb-4 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            تنسيق مراجعة الحالات الطبية الدولية في ألمانيا ضمن شبكة المستشفيات الجامعية وكبار البروفيسورات المتخصصين.
          </p>
          <p className="text-sm text-slate-400 font-light mb-10 tracking-wide">
            مراجعة أولية للحالة خلال 24 – 48 ساعة
          </p>

          {/* Arabic Targeting Line */}
          <p className="text-xs text-slate-400 font-light mb-6 max-w-xl mx-auto tracking-wide" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            مخصص للحالات الطبية المعقدة أو غير المشخصة التي تحتاج مراجعة تخصصية في ألمانيا.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a href="#submit-case">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-10 py-6 text-base font-medium shadow-lg" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
                إرسال التقارير الطبية للمراجعة
              </Button>
            </a>
            <a href="https://wa.me/493025730875" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-400 text-slate-200 hover:bg-slate-800 hover:text-white rounded-none px-8 py-6 text-base font-light bg-transparent" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
                التحدث مع منسق طبي
              </Button>
            </a>
          </div>

          {/* Arabic Cases Examples Box */}
          <div className="max-w-2xl mx-auto mb-10 border border-slate-700/60 rounded-none px-6 py-4 text-right bg-slate-800/40" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            <p className="text-xs text-slate-400 tracking-widest mb-3 font-medium">أمثلة على الحالات التي نراجعها</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-slate-300 font-light">
              <li className="flex items-start gap-2 flex-row-reverse"><span className="text-slate-500 mt-0.5">—</span>أعراض مستمرة أو غير مفسرة</li>
              <li className="flex items-start gap-2 flex-row-reverse"><span className="text-slate-500 mt-0.5">—</span>حالات جراحة المخ والأعصاب المعقدة</li>
              <li className="flex items-start gap-2 flex-row-reverse"><span className="text-slate-500 mt-0.5">—</span>أورام تتطلب مراجعة متخصصة</li>
              <li className="flex items-start gap-2 flex-row-reverse"><span className="text-slate-500 mt-0.5">—</span>أمراض نادرة أو غير مشخصة</li>
            </ul>
          </div>

          {/* Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">برلين</div>
              <div className="text-xs text-slate-400">مقر التنسيق</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">كبار المتخصصين</div>
              <div className="text-xs text-slate-400">شبكة الوصول</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">الأولوية السريرية</div>
              <div className="text-xs text-slate-400">مراجعة عاجلة</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">متعدد اللغات</div>
              <div className="text-xs text-slate-400">AR • EN • DE</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-sm font-medium text-slate-300 mb-1">الخصوصية أولاً</div>
              <div className="text-xs text-slate-400">متوافق مع GDPR</div>
            </div>
          </div>
        </div>
      </section>

      {/* PATH ROUTING BLOCK */}
      <section className="py-10 px-6 bg-white border-b border-slate-200" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-base md:text-lg font-medium text-slate-900 text-center mb-6"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            اختر المسار الطبي المناسب لحالتك
          </h2>
          <div className="flex flex-col gap-3">
            <Link
              href="/ar/neurology-treatment-germany"
              className="block w-full py-5 px-4 text-sm font-medium text-center border border-slate-200 bg-white text-slate-700 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A] transition-all duration-200"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              جراحة الأعصاب
            </Link>
            <Link
              href="/ar/brain-tumor-treatment-germany"
              className="block w-full py-5 px-4 text-sm font-medium text-center border border-slate-200 bg-white text-slate-700 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A] transition-all duration-200"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              علاج الأورام
            </Link>
            <Link
              href="/send-medical-reports"
              className="block w-full py-5 px-4 text-sm font-medium text-center border border-[#0B1C2C] bg-[#0B1C2C] text-white hover:bg-[#1E3A5A] transition-all duration-200"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              أعراض غير مشخصة
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALTY CARDS — مجالات التخصص الطبي */}
      <section className="py-10 px-6 bg-slate-50 border-b border-slate-200" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-base md:text-lg font-medium text-slate-900 text-center mb-6"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            مجالات التخصص الطبي
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/ar/brain-tumor-treatment-germany"
              className="block py-5 px-4 text-sm font-medium text-center border border-slate-200 bg-white text-slate-700 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A] transition-all duration-200"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              الأورام والسرطانات المعقدة
            </Link>
            <Link
              href="/ar/neurology-treatment-germany"
              className="block py-5 px-4 text-sm font-medium text-center border border-slate-200 bg-white text-slate-700 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A] transition-all duration-200"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              جراحة المخ والأعصاب والعمود الفقري
            </Link>
            <Link
              href="/send-medical-reports"
              className="block py-5 px-4 text-sm font-medium text-center border border-slate-200 bg-white text-slate-700 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A] transition-all duration-200"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              الأمراض النادرة وغير المشخصة
            </Link>
            <Link
              href="/ar/cardiology-treatment-germany"
              className="block py-5 px-4 text-sm font-medium text-center border border-slate-200 bg-white text-slate-700 hover:border-[#1E4A7A] hover:bg-blue-50 hover:text-[#1E4A7A] transition-all duration-200"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              أمراض وجراحة القلب المتقدمة
            </Link>
          </div>
        </div>
      </section>







      {/* SUBMIT CASE FORM */}
      <section id="submit-case" className="py-16 md:py-20 px-6 bg-white border-b border-slate-200" style={{ scrollMarginTop: '90px' }}>
        <span id="intake-form" style={{ display: 'block', marginTop: '-90px', paddingTop: '90px', pointerEvents: 'none' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-center text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            تقديم الحالة للمراجعة الطبية
          </h2>
          <p className="text-center text-slate-500 text-sm mb-12 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            تُجرى مراجعات الحالات وفق ممارسات الحوكمة السريرية الألمانية.
          </p>
          <div className="border border-slate-200 bg-white shadow-sm">
            <ArabicIframeForm />
          </div>
          <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            يتم التعامل مع جميع الملفات بسرية تامة.
          </p>
        </div>
      </section>

      {/* WHY GERMANY */}
      <section id="why-germany" className="py-16 md:py-20 px-6 bg-white border-b border-slate-200" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663074485748/JqQAhVtqiy55V3DmpshfM9/historic-university-courtyard-dK5oZvyC3Ux2zXKDKdYE7N.webp"
                alt="حرم الجامعة الأوروبية التاريخية"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-medium mb-8 text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
                لماذا ألمانيا
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0"></div>
                  <p className="text-base text-slate-700" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>منظومة المستشفيات الجامعية</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0"></div>
                  <p className="text-base text-slate-700" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>تقييم طبي متعدد التخصصات</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0"></div>
                  <p className="text-base text-slate-700" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>دقة التشخيص والبروتوكولات السريرية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            مسار التنسيق
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-slate-400 mb-2">الخطوة الأولى</div>
              <h3 className="text-base font-medium text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>مراجعة أولية خلال 24–48 ساعة</h3>
            </div>
            <div className="hidden md:block text-slate-300 text-2xl">←</div>
            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-slate-400 mb-2">الخطوة الثانية</div>
              <h3 className="text-base font-medium text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>توجيه الحالة للتخصص المناسب خلال 3–5 أيام</h3>
            </div>
            <div className="hidden md:block text-slate-300 text-2xl">←</div>
            <div className="flex-1 text-center">
              <div className="text-sm font-medium text-slate-400 mb-2">الخطوة الثالثة</div>
              <h3 className="text-base font-medium text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>توضيح المسار العلاجي خلال 7 أيام</h3>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            خدمات التنسيق
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              'تنسيق المواعيد الطبية',
              'الترجمة الطبية المتخصصة',
              'ترتيبات الإقامة للمريض والمرافقين',
              'استقبال المريض عند الحاجة',
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-serif text-slate-200 mb-3">0{i + 1}</div>
                <p className="text-sm text-slate-700" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHYSICIAN + MRI */}
      <section className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
                تنسيق على المستوى الطبي
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
                تعمل Medical Care Germany من خلال شبكات سريرية راسخة، مما يضمن مراجعة كل حالة على المستوى المتخصص المناسب قبل تحديد أي مسار علاجي.
              </p>
              <div className="relative">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663074485748/vKzMUrxQnyIZoHoi.jpg"
                  alt="تقنية التصوير التشخيصي المتقدمة — الرنين المغناطيسي والأشعة المقطعية"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 text-white text-xs px-3 py-2 text-right" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
                  بنية تحتية متقدمة للتصوير التشخيصي
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663074485748/CKOERCSkJxQAYnsX.jpg"
                alt="مجلس المراجعة الطبية — أطباء يراجعون صور التشخيص"
                className="w-full h-72 object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO SECTION — Arabic */}
      <section className="py-16 md:py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto" dir="rtl">
          {/* Section header */}
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-3" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif", letterSpacing: '0' }}>
              توثيق سريري
            </p>
            <h2
              className="text-2xl md:text-3xl text-slate-900 mb-4"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif", fontWeight: 500 }}
            >
              حالة واقعية: كيف غيّر التقييم الطبي المسار العلاجي
            </h2>
            <p
              className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              توثيق واقعي لمسار علاجي في ألمانيا، من التقييم السريري الأولي إلى القرار العلاجي والمتابعة.
            </p>
          </div>

          {/* Micro text above video */}
          <p
            className="text-xs text-slate-400 text-center mb-5 leading-relaxed"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            ليست كل الأعراض بسيطة… بعض الحالات تحتاج تقييم دقيق.
          </p>

          {/* YouTube embed — centered, clean, no black margins */}
          <div className="flex justify-center">
            <div
              className="w-full bg-slate-50 rounded-sm overflow-hidden shadow-sm border-t-2 border-[#C9A646]"
              style={{ maxWidth: '720px' }}
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/ooHPXMqzlbU?rel=0&modestbranding=1&color=white"
                  title="حالة واقعية: كيف غيّر التقييم الطبي المسار العلاجي"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Secondary text link */}
          <div className="mt-4 text-center">
            <a
              href="https://www.youtube.com/watch?v=ooHPXMqzlbU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors underline underline-offset-4"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              مشاهدة الفيديو الكامل
            </a>
            <span className="text-slate-300 mx-2">|</span>
            <a
              href="/ar/videos"
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors underline underline-offset-4"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              مكتبة الفيديو الطبي
            </a>
          </div>

          {/* CTA button */}
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/493025730875?text=%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D8%AB%20%D9%85%D8%B9%20%D9%85%D9%86%D8%B3%D9%82%20%D8%B7%D8%A8%D9%8A%20%D8%AD%D9%88%D9%84%20%D8%AD%D8%A7%D9%84%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-slate-900 text-white text-sm hover:bg-slate-700 transition-colors"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              تحدث مع منسق طبي
            </a>
            <p
              className="mt-3 text-xs text-slate-400"
              style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
            >
              يمكنك إرسال ملفاتك الطبية لاحقاً بعد التقييم الأولي
            </p>
          </div>
        </div>
      </section>



      {/* COMPLEX TRAUMA HUB SECTION */}
      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200" dir="rtl">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-xl font-medium text-slate-900 mb-3"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            حالات طبية معقدة
          </h2>
          <p
            className="text-sm text-slate-500 mb-6 leading-relaxed"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            نقوم بتقييم الحالات الناتجة عن الحوادث والإصابات المعقدة.
          </p>
          <a
            href="/ar/complex-trauma-germany"
            className="inline-block px-6 py-3 border border-slate-300 text-slate-700 text-sm hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            استعرض جميع الحالات
          </a>
        </div>
      </section>

      {/* TRAUMA SEO ENTRY POINT */}
      <section style={{ marginTop: '60px', padding: '30px', background: '#0b1d2a', borderRadius: '12px' }} dir="rtl">
        <h2 style={{ color: 'white', fontSize: '22px', marginBottom: '15px', fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
          إصابات الحروب والحوادث المعقدة
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.6', fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
          حالات البتر، إصابات الأعصاب، والشظايا تحتاج تقييم دقيق قبل اتخاذ أي قرار علاجي.
          في ألمانيا، يتم التعامل مع هذه الحالات ضمن منظومة طبية متقدمة تشمل الجراحة،
          إعادة التأهيل، وتركيب الأطراف الصناعية.
        </p>
        <a
          href="/ar/complex-trauma-germany"
          style={{ display: 'inline-block', marginTop: '20px', padding: '12px 20px', background: '#1e3a5f', color: 'white', textDecoration: 'none', borderRadius: '6px', fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
        >
          عرض جميع الحالات المعقدة في ألمانيا
        </a>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-slate-900 text-white text-center" style={{ scrollMarginTop: '90px' }}>
        {/* Treatment Guide Links — dark variant */}
        <div className="border-b border-slate-700 py-6 px-4">
          <p className="text-xs text-slate-500 mb-3 tracking-wide" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>دليل العلاج في ألمانيا</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {[
              { href: "/ar/العلاج-في-المانيا-للعرب", label: "العلاج في ألمانيا للعرب" },
              { href: "/ar/تكلفة-العلاج-في-المانيا", label: "تكلفة العلاج" },
              { href: "/ar/فيزا-العلاج-في-المانيا", label: "فيزا العلاج" },
              { href: "/ar/مستشفيات-المانيا-للعرب", label: "مستشفيات ألمانيا" },
              { href: "/ar/السفر-للعلاج-في-المانيا", label: "السفر للعلاج" },
              { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-xs text-slate-400 hover:text-slate-200 transition-colors" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div className="py-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-3">
            <a href="mailto:info@medicalcaregermany.com" className="block text-lg hover:text-slate-300 transition-colors">
              info@medicalcaregermany.com
            </a>
            <p className="text-sm text-slate-400" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>Sachsendamm 79 · 10829 برلين · ألمانيا</p>
          </div>
          <div className="w-20 h-[1px] bg-slate-700 mx-auto"></div>
          <p className="text-sm text-slate-400">Medical Care Germany © 2026</p>
          <p className="mt-6 mx-auto leading-relaxed text-center" style={{ fontSize: '13px', color: '#6B7280', opacity: 0.85, fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            يُستشار رأيه قبل اتخاذ القرارات الطبية الحاسمة.
          </p>
        </div>
        </div>
      </footer>
    </div>
  );
}
