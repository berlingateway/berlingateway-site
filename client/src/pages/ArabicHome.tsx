import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

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

export default function ArabicHome() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {/* Top Contact Bar */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
            info@medicalcaregermany.com
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="flex flex-col items-end">
          <span className="text-xl font-bold tracking-tight text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
            Medical Care Germany
          </span>
          <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">سلطة التنسيق السريري المؤسسي</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm text-slate-500">
          <a href="#home" className={`hover:text-slate-900 transition-colors ${activeSection === 'home' ? 'text-slate-900 font-medium' : ''}`}>الرئيسية</a>
          <a href="#focus" className={`hover:text-slate-900 transition-colors ${activeSection === 'focus' ? 'text-slate-900 font-medium' : ''}`}>مجالات التخصص</a>
          <a href="#why-germany" className={`hover:text-slate-900 transition-colors ${activeSection === 'why-germany' ? 'text-slate-900 font-medium' : ''}`}>لماذا ألمانيا</a>
          <a href="#submit-case" className={`hover:text-slate-900 transition-colors ${activeSection === 'submit-case' ? 'text-slate-900 font-medium' : ''}`}>تقديم الحالة</a>
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
          <a href="#submit-case" onClick={() => setMobileMenuOpen(false)}>تقديم الحالة</a>
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

      {/* METRICS BAR */}
      <section className="py-8 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">+15</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">شبكة المستشفيات الجامعية</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">+150</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">البروفيسورات والاستشاريون</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">+500</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">حالات معقدة تمت مراجعتها</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-slate-900 font-medium">24–48h</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">المراجعة الأولية</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL FOCUS AREAS */}
      <section id="focus" className="py-16 md:py-20 px-6 bg-slate-50 border-b border-slate-200" style={{ scrollMarginTop: '90px' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            مجالات التخصص السريري
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>جراحة المخ والأعصاب والعمود الفقري</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>الأورام والسرطانات المعقدة</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>أمراض القلب والتدخلات المتقدمة</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div className="text-sm font-medium text-slate-900" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>الأمراض النادرة وغير المشخصة</div>
            </div>
          </div>
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

      {/* SUBMIT CASE FORM */}
      <section id="submit-case" className="py-16 md:py-20 px-6 bg-white" style={{ scrollMarginTop: '90px' }}>
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
            يتم التعامل مع جميع الملفات بسرية تامة. للتواصل المباشر:{' '}
            <a href="mailto:info@medicalcaregermany.com" className="text-slate-600 hover:underline">info@medicalcaregermany.com</a>
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
            <p className="text-sm text-slate-400" style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>Sachsendamm 79 · 10829 برلين · ألمانيا</p>
          </div>
          <div className="w-20 h-[1px] bg-slate-700 mx-auto"></div>
          <p className="text-sm text-slate-400">Medical Care Germany © 2026</p>
          <p className="mt-6 mx-auto leading-relaxed text-center" style={{ fontSize: '13px', color: '#6B7280', opacity: 0.85, fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}>
            يُستشار رأيه قبل اتخاذ القرارات الطبية الحاسمة.
          </p>
        </div>
      </footer>
    </div>
  );
}
