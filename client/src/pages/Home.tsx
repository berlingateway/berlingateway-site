import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { FileText, Activity, Network, Calendar, Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Sovereign iframe form — completely independent of React/tRPC/backend
function IframeForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(720);

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
      src="/intake-form.html"
      title="Clinical Case Submission"
      width="100%"
      height={iframeHeight}
      style={{ border: 'none', display: 'block', width: '100%' }}
      scrolling="no"
      loading="lazy"
    />
  );
}

// Geo-detection: detect Arabic-speaking regions via browser language / timezone
function useArabicBanner() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed in this session
    if (sessionStorage.getItem('arabic-banner-dismissed')) return;

    const lang = navigator.language || '';
    const langs = navigator.languages || [];
    const isArabicLang = lang.startsWith('ar') || langs.some(l => l.startsWith('ar'));

    // MENA timezones
    const menaTimezones = [
      'Asia/Riyadh', 'Asia/Dubai', 'Asia/Kuwait', 'Asia/Qatar', 'Asia/Bahrain',
      'Asia/Muscat', 'Asia/Aden', 'Africa/Cairo', 'Africa/Tripoli', 'Africa/Tunis',
      'Africa/Algiers', 'Africa/Casablanca', 'Asia/Baghdad', 'Asia/Amman',
      'Asia/Beirut', 'Asia/Damascus', 'Asia/Gaza', 'Asia/Hebron',
      'Africa/Khartoum', 'Africa/Mogadishu', 'Asia/Sanaa',
    ];
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isMenaTz = menaTimezones.includes(tz);

    if (isArabicLang || isMenaTz) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('arabic-banner-dismissed', '1');
  };

  return { show: show && !dismissed, dismiss };
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { show: showArabicBanner, dismiss: dismissArabicBanner } = useArabicBanner();

  // Active section tracking based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'governance', 'operations', 'submit-case', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

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
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Arabic Language Suggestion Banner — shown to MENA visitors */}
      {showArabicBanner && (
        <div
          role="banner"
          className="w-full bg-slate-800 text-white py-2 px-4 flex items-center justify-between gap-3 text-sm"
          style={{ fontFamily: 'IBM Plex Sans Arabic, Cairo, sans-serif' }}
        >
          <span className="flex-1 text-center" dir="rtl">
            هل تفضل عرض هذه الصفحة باللغة العربية؟
          </span>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/ar"
              className="bg-white text-slate-900 hover:bg-slate-100 px-3 py-1 text-xs font-medium rounded-none transition-colors"
            >
              فتح النسخة العربية
            </Link>
            <button
              onClick={dismissArabicBanner}
              aria-label="Dismiss"
              className="text-slate-400 hover:text-white transition-colors text-base leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Top Contact Bar - Minimal */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
            info@medicalcaregermany.com
          </a>
        </div>
      </div>
      
      {/* Navigation - Sticky Premium Header */}
      <nav className="sticky top-0 z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="flex flex-col">
          <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
            Medical Care Germany
          </Link>
          <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">Institutional Clinical Coordination Authority</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav flex gap-10 text-sm text-slate-500">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#governance" className={`nav-link ${activeSection === 'governance' ? 'active' : ''}`}>Governance</a>
          <a href="#operations" className={`nav-link ${activeSection === 'operations' ? 'active' : ''}`}>How We Operate</a>
          <a href="#submit-case" className={`nav-link ${activeSection === 'submit-case' ? 'active' : ''}`}>Submit Case</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </div>
        
        {/* Language Switch + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-900 font-medium">EN</span>
          <span className="text-slate-300 text-xs">|</span>
          <a href="/ar" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">AR</a>
        </div>
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-5 text-slate-900"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#governance" onClick={() => setMobileMenuOpen(false)}>Governance</a>
        <a href="#operations" onClick={() => setMobileMenuOpen(false)}>How We Operate</a>
        <a href="#submit-case" onClick={() => setMobileMenuOpen(false)}>Submit Case</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>

      {/* DOMINANT CTA SECTION - Priority Medical Evaluation */}
      <section id="home" className="relative py-12 md:py-16 px-6 bg-slate-50 border-b border-slate-200" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4 leading-tight">
            Request Priority Medical Evaluation
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-600 font-light mb-8 max-w-2xl mx-auto">
            Structured medical access to German clinical excellence for global patients.
          </p>
          
          {/* Primary CTA Button */}
          <div className="mb-8">
            <a href="#contact">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-12 py-7 text-lg font-medium shadow-lg">
                Submit Case for Clinical Review
              </Button>
            </a>
          </div>
          
          {/* Trust Indicators Below CTA */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="text-sm font-medium text-slate-900 mb-1">Berlin-Based</div>
              <div className="text-xs text-slate-500">Coordination</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-900 mb-1">University Hospital</div>
              <div className="text-xs text-slate-500">Network</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-900 mb-1">International</div>
              <div className="text-xs text-slate-500">Patient Experience</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-sm font-medium text-slate-900 mb-1">Fast-Track</div>
              <div className="text-xs text-slate-500">Case Evaluation</div>
            </div>
          </div>
          
          {/* Urgency Trigger */}
          <div className="mt-6 text-sm text-slate-500 font-light">
            Priority cases are reviewed with clinical urgency.
          </div>
        </div>
      </section>

      {/* SECTION 1: HERO - Elite Medical Authority Landing */}
      <section id="home" className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* H1: Clear Authority Statement */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-8 tracking-tight">
            Institutional Medical Authority for International Patients
          </h1>
          
          {/* HERO AUTHORITY DECLARATION - Legal Sub-Statement Style */}
          <p className="text-base md:text-lg font-normal mb-12 mx-auto leading-relaxed" style={{ color: '#5F6368', letterSpacing: '0.4px', maxWidth: '720px', marginTop: '12px' }}>
            Engaged by patients, families, and physicians when medical decisions carry irreversible consequences.
          </p>
          
          {/* Subheadline: Who We Serve + Outcomes */}
          <p className="text-lg md:text-xl text-slate-300 font-light mb-4 max-w-3xl mx-auto leading-relaxed">
            Trusted cross-border clinical coordination for global patients requiring complex, high-priority medical interventions.
          </p>
          <p className="text-base md:text-lg text-slate-400 font-light mb-6 max-w-2xl mx-auto">
            Operating at the intersection of international medicine and German clinical excellence.
          </p>

          {/* Reassurance Line */}
          <p className="text-sm text-slate-300 font-light mb-10 tracking-wide">
            International medical case review within 24–48 hours.
          </p>
          
          {/* Targeting Line */}
          <p className="text-xs text-slate-400 font-light mb-6 max-w-xl mx-auto tracking-wide uppercase" style={{ letterSpacing: '0.06em' }}>
            Designed for complex or unresolved medical cases seeking specialist review in Germany.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a href="#submit-case">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-10 py-6 text-base font-medium shadow-lg">
                Submit Case for Clinical Review
              </Button>
            </a>
            <a href="https://wa.me/493025730875" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-400 text-slate-200 hover:bg-slate-800 hover:text-white rounded-none px-8 py-6 text-base font-light bg-transparent">
                Speak with a Medical Coordinator
              </Button>
            </a>
          </div>

          {/* Examples of cases we review */}
          <div className="max-w-2xl mx-auto mb-10 border border-slate-700/60 rounded-none px-6 py-4 text-left bg-slate-800/40">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-3 font-medium">Examples of cases we review</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-slate-300 font-light">
              <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">—</span>Persistent or unexplained symptoms</li>
              <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">—</span>Complex neurosurgery cases</li>
              <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">—</span>Oncology requiring specialist review</li>
              <li className="flex items-start gap-2"><span className="text-slate-500 mt-0.5">—</span>Rare or undiagnosed diseases</li>
            </ul>
          </div>
          
          {/* Trust Strip - 5 Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Berlin-Based</div>
              <div className="text-xs text-slate-400">Clinical Coordination</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Senior Specialists</div>
              <div className="text-xs text-slate-400">Network Access</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Clinical Urgency</div>
              <div className="text-xs text-slate-400">Priority Review</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-300 mb-1">Multilingual</div>
              <div className="text-xs text-slate-400">AR • EN • DE</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-sm font-medium text-slate-300 mb-1">Privacy-First</div>
              <div className="text-xs text-slate-400">GDPR Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL METRICS BAR */}
      <section className="py-8 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">15+</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">University Hospital<br/>Network</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">150+</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">Professors &amp;<br/>Senior Consultants</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">500+</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">Complex Cases<br/>Coordinated</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">24–48h</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">Initial Review<br/>Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL POSITIONING BLOCK - Under Hero */}
      <section className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-slate-700 font-light max-w-4xl mx-auto leading-relaxed mb-6">
            Operating as a cross-border medical authority, we structure priority access to Germany's rigorous specialist networks, university hospitals, and aligned treatment pathways.
          </p>
          <p className="text-base md:text-lg text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
            Trusted by international patients, referring physicians, and institutional partners seeking structured medical coordination.
          </p>
        </div>
      </section>

      {/* HIGH-TRUST MICRO-SECTION - Minimal */}
      <section className="py-12 md:py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed">
            For international patients, families, and referring physicians seeking structured access to German medical excellence.
          </p>
        </div>
      </section>

      {/* SECTION 2: INTRO BLOCK - Institutional Positioning */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-slate-900">
            International Medical Gateway — Not a Referral Service
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-slate-600 leading-relaxed space-y-6">
            <p>
              Medical Care Germany operates as an institutional medical authority, connecting global patients with structured physician networks and established hospital pathways across German clinical excellence.
            </p>
            <p>
              The organization functions as a cross-border clinical coordination system, providing international patients with appropriate specialist-level medical environments for complex diagnostic and treatment requirements.
            </p>
            <p>
              This framework is designed to reduce procedural uncertainty and ensure continuity across multi-phase international medical interventions.
            </p>
          </div>
          
          {/* GATEKEEPER STATEMENT - Protected with whitespace */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <p className="text-xl md:text-2xl font-serif text-slate-900 text-center leading-relaxed max-w-3xl mx-auto mb-16">
              We operate within structured medical networks — not open marketplaces.
            </p>
          </div>
        </div>
      </section>

      {/* AUTHORITY INJECTION - Where Medical Complexity Meets Institutional Discipline */}
      <section id="governance" className="py-20 md:py-28 px-6 bg-slate-50 border-b border-slate-200" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-16 text-center text-slate-900">
            Where Medical Complexity Meets Institutional Discipline
          </h2>
          <div className="space-y-10 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed text-center">
              Consulted before high-risk surgical or clinical interventions.
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed text-center">
              Coordinating cross-border care for patients requiring precision, discretion, and structured oversight.
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed text-center">
              Directing multidisciplinary alignment within Germany's rigorous university hospital systems.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH - Institutional Authority */}
      <section className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">Who We Work With</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            {/* University Hospitals */}
            <div className="text-center">
              <div className="mb-4">
                <div className="text-6xl font-serif text-slate-300">01</div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">University Hospitals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Established coordination pathways within Germany's structured academic medical centers.
              </p>
            </div>

            {/* Specialist Professors */}
            <div className="text-center">
              <div className="mb-4">
                <div className="text-6xl font-serif text-slate-300">02</div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Specialist Professors</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct access to senior-level physicians across complex medical disciplines.
              </p>
            </div>

            {/* Certified Medical Centers */}
            <div className="text-center">
              <div className="mb-4">
                <div className="text-6xl font-serif text-slate-300">03</div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Certified Medical Centers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verified specialist environments for advanced diagnostic and treatment procedures.
              </p>
            </div>

            {/* Government & Embassy Referrals */}
            <div className="text-center">
              <div className="mb-4">
                <div className="text-6xl font-serif text-slate-300">04</div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Government & Embassy Referrals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Structured coordination for institutional and governmental medical cases.
              </p>
            </div>

            {/* Complex International Cases */}
            <div className="text-center col-span-full lg:col-span-1">
              <div className="mb-4">
                <div className="text-6xl font-serif text-slate-300">05</div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Complex International Cases</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Multi-phase medical interventions requiring cross-institutional coordination.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLINICAL PROCESS STRIP - Horizontal, Minimal, Clinical */}
      <section id="operations" className="py-16 md:py-20 px-6 bg-white border-b border-slate-200" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-slate-900">Clinical Process</h2>
          
          {/* AUTHORITY SIGNALS */}
          <div className="max-w-3xl mx-auto mb-16 space-y-2 text-center">
            <p className="text-sm text-slate-600">• Complex Neurological Pathways</p>
            <p className="text-sm text-slate-600">• High-Risk Surgical Decisions</p>
            <p className="text-sm text-slate-600">• Cross-Border Treatment Governance</p>
          </div>
          
          {/* Horizontal Process Strip */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-5xl mx-auto">
            
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="text-sm font-semibold text-slate-400 mb-2">STEP 1</div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">Case Intelligence Review</h3>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-slate-300 text-2xl">→</div>

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="text-sm font-semibold text-slate-400 mb-2">STEP 2</div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">Specialist Alignment</h3>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-slate-300 text-2xl">→</div>

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="text-sm font-semibold text-slate-400 mb-2">STEP 3</div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">Treatment Pathway Design</h3>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-slate-300 text-2xl">→</div>

            {/* Step 4 */}
            <div className="flex-1 text-center">
              <div className="text-sm font-semibold text-slate-400 mb-2">STEP 4</div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1">Medical Entry Coordination</h3>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE MEDICAL PATH (LEGACY - HIDDEN) */}
      <section className="hidden py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">The Medical Path</h2>
          <div className="grid md:grid-cols-5 gap-8">
            
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">1</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Case Submission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Confidential medical file review
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">2</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Physician Evaluation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Specialist-level assessment within German hospital networks
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Network className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">3</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Medical Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Defined treatment direction and clinical pathway
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">4</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Treatment Coordination</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hospital placement and timeline structuring
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-serif text-slate-300 mb-3">5</div>
              <h3 className="text-lg font-serif text-slate-900 mb-3">Continuity of Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Post-treatment medical alignment
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLINICAL FOCUS AREAS */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center text-slate-900">Clinical Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900">Neurosurgery &amp; Complex Spine</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900">Precision Oncology</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900">Advanced Cardiology</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900">Rare &amp; Undiagnosed Diseases</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GERMANY MICRO-SECTION WITH HOSPITAL IMAGE */}
      <section className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-8 text-slate-900">Why Germany</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0"></div>
                  <p className="text-base text-slate-700">University hospital system with integrated multidisciplinary care</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0"></div>
                  <p className="text-base text-slate-700">Multidisciplinary medical evaluation across specialist disciplines</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0"></div>
                  <p className="text-base text-slate-700">Precision diagnostics and structured clinical protocols</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663074485748/kkYOGTpHHPOyfzBG.jpg"
                alt="University Hospital Germany"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PHYSICIAN PORTRAIT + MRI SECTION */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663074485748/mPPrgswEzDQzOnFG.jpg"
                alt="Senior Medical Specialist"
                className="w-full h-72 object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-serif mb-6 text-slate-900">Physician-Level Coordination</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Medical Care Germany operates through established clinical networks, ensuring every case is reviewed at the appropriate specialist level before any pathway is defined.
              </p>
              <div className="relative">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663074485748/lWGLcpyoGHOzOzEg.jpg"
                  alt="Advanced MRI Imaging Equipment"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 text-white text-xs px-3 py-2">
                  Advanced diagnostic imaging infrastructure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLINICAL CASE INSIGHTS (EXTREMELY IMPORTANT) */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center text-slate-900">Clinical Case Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Case 1 */}
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <h3 className="text-xl font-serif text-slate-900 mb-4">Neurological Recovery — Complex Mobility Case</h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>International patient presenting severe mobility impairment.</p>
                <p>Multidisciplinary evaluation conducted.</p>
                <p>Advanced neuro-rehabilitation pathway initiated in Germany.</p>
                <p className="font-medium text-slate-900">Outcome: Significant functional restoration.</p>
              </div>
            </Card>

            {/* Case 2 */}
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <h3 className="text-xl font-serif text-slate-900 mb-4">Oncological Coordination — Multi-Phase Treatment</h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>Complex oncological diagnosis requiring specialized intervention.</p>
                <p>Coordinated access to university hospital environment.</p>
                <p>Structured treatment pathway across multiple clinical phases.</p>
                <p className="font-medium text-slate-900">Outcome: Treatment protocol completed as planned.</p>
              </div>
            </Card>

            {/* Case 3 */}
            <Card className="p-8 bg-slate-50 border-slate-200 rounded-none">
              <h3 className="text-xl font-serif text-slate-900 mb-4">Cardiovascular Intervention — High-Risk Assessment</h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>Time-sensitive cardiovascular situation requiring senior specialist review.</p>
                <p>Rapid diagnostic pathway established.</p>
                <p>Advanced interventional procedure coordinated.</p>
                <p className="font-medium text-slate-900">Outcome: Successful procedural completion.</p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* SECTION 5: DIFFERENTIATION BLOCK */}
      <section className="py-24 md:py-32 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-slate-900">
            Why Structured Medical Coordination Matters
          </h2>
          <div className="space-y-12">
            <div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Reduces Diagnostic Delay</h3>
                <p className="text-slate-600 leading-relaxed">
                  Structured pathways minimize procedural gaps between initial assessment and definitive diagnosis.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Connects to Advanced Treatment Environments</h3>
                <p className="text-slate-600 leading-relaxed">
                  Direct coordination with university hospitals and specialized medical centers across Germany.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Ensures Physician-Level Oversight</h3>
                <p className="text-slate-600 leading-relaxed">
                  Medical coordination maintained through established clinical networks, not administrative channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT FORM */}
      <section id="submit-case" className="py-16 md:py-20 px-6 bg-white" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center text-slate-900">Case Submission for Strategic Review</h2>
          <p className="text-center text-slate-500 text-sm mb-12 leading-relaxed">
            Case reviews are conducted in alignment with German clinical governance practices.
          </p>

          {/* SOVEREIGN IFRAME FORM — No React, No tRPC, No backend dependency */}
          <div className="border border-slate-200 bg-white shadow-sm">
            <IframeForm />

          </div>
          <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed">
            All submissions are handled under strict clinical confidentiality protocols. Direct inquiries: <a href="mailto:info@medicalcaregermany.com" className="text-slate-600 hover:underline">info@medicalcaregermany.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-10 bg-slate-900 text-white text-center" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-3">
            <a href="mailto:info@medicalcaregermany.com" className="block text-lg hover:text-slate-300 transition-colors">
              info@medicalcaregermany.com
            </a>
            <a
              href="https://wa.me/493025730875"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <p className="text-sm text-slate-500">Berlin, Germany</p>
          </div>
          <div className="w-20 h-[1px] bg-slate-700 mx-auto"></div>
          <p className="text-sm text-slate-400">Medical Care Germany © 2026</p>
          <p className="mt-6 mx-auto leading-relaxed text-center" style={{ fontSize: '13px', color: '#6B7280', opacity: 0.85 }}>
            Consulted by decision-makers seeking clarity before irreversible medical steps.
          </p>
        </div>
      </footer>

    </div>
  );
}
