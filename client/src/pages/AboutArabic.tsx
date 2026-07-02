import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   WhatsApp SVG icon (reused in multiple places)
───────────────────────────────────────────────────────────────── */
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.555 4.11 1.528 5.833L0 24l6.344-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-4.99-1.366l-.358-.213-3.765.893.952-3.659-.234-.376A9.79 9.79 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────
   FAQ data
───────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    id: "faq1",
    q: "هل خدماتكم مجانية؟",
    a: "نعمل برسوم تنسيق تُحدَّد بحسب طبيعة كل ملف ومداه. الاستشارة الأولى وتقييم الملف مجانيان تماماً.",
  },
  {
    id: "faq2",
    q: "كم يستغرق الحصول على موعد في مستشفيات برلين؟",
    a: "يختلف الأمر بحسب التخصص وطبيعة الحالة. في الغالب نستطيع تحديد موعد مبدئي خلال أسبوعين إلى أربعة أسابيع من استلام الملف.",
  },
  {
    id: "faq3",
    q: "هل تساعدون في إجراءات الفيزا العلاجية؟",
    a: "نعم. نُعدّ ملف دعوة المستشفى، ونساعدك في توثيق الأوراق المطلوبة للسفارة الألمانية، ونتابع إجراءات بوليس الأجانب بعد الوصول.",
  },
  {
    id: "faq4",
    q: "هل يوجد من يتحدث العربية طوال فترة العلاج؟",
    a: "نعم. فريقنا ثنائي اللغة ويتواصل معك ومع ذويك بالعربية — داخل العيادة وخارجها — طوال مدة الرحلة العلاجية.",
  },
  {
    id: "faq5",
    q: "ما أنواع الحالات التي تتخصصون فيها؟",
    a: "نتعامل مع طيف واسع: الأورام، أمراض القلب، الجراحات العظمية، الأمراض العصبية، وغيرها. نقيّم كل ملف على حدة ونوجّهك إلى المختص الأنسب في المستشفى الأنسب.",
  },
  {
    id: "faq6",
    q: "هل تتعاملون مع مرضى من جميع الدول العربية؟",
    a: "نعم. نخدم مرضى من أكثر من عشرين دولة عربية وأفريقية — ليبيا، الجزائر، العراق، المملكة العربية السعودية، اليمن، تونس، وغيرها.",
  },
];

/* ─────────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────────── */
export default function AboutArabic() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  /* Schema injection */
  useEffect(() => {
    const medicalBizSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Medical Care Germany",
      url: "https://medicalcaregermany.com/",
      description: "تنسيق طبي متخصص للمرضى العرب في ألمانيا منذ 2012",
      foundingDate: "2012",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Perleberger Str. 41",
        addressLocality: "Berlin",
        postalCode: "10559",
        addressCountry: "DE",
      },
      telephone: "+493025730875",
      email: "info@medicalcaregermany.com",
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };

    const injectSchema = (id: string, data: object) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        (el as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    injectSchema("schema-about-medical-biz", medicalBizSchema);
    injectSchema("schema-about-faq", faqSchema);

    return () => {
      document.getElementById("schema-about-medical-biz")?.remove();
      document.getElementById("schema-about-faq")?.remove();
    };
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ab-visible");
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".ab-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* ── Fonts & Scoped CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Cairo:wght@300;400;600;700&display=swap');

        .ab-page {
          --navy:        #0A1628;
          --navy-mid:    #112240;
          --gold:        #C8A96E;
          --gold-light:  #DFC28E;
          --gold-bg:     #FBF7F0;
          --gold-border: #E8D9B8;
          --wa:          #25D366;
          --wa-dark:     #1DA851;
          --white:       #FFFFFF;
          --off-white:   #F8F9FB;
          --text:        #1A1A2E;
          --text-mid:    #4A5568;
          --text-light:  #718096;
          --border:      #E2E8F0;
          --shadow-sm:   0 1px 4px rgba(0,0,0,.06);
          --font-ar:     'Cairo', sans-serif;
          --font-en:     'Playfair Display', serif;
          --radius:      6px;
          font-family: var(--font-ar);
          background: var(--white);
          color: var(--text);
          direction: rtl;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .ab-page a { color: inherit; text-decoration: none; }
        .ab-page ul { list-style: none; padding: 0; margin: 0; }

        /* Hero */
        .ab-hero {
          background: var(--navy);
          padding: 5.5rem 2.5rem 4.5rem;
          position: relative;
          overflow: hidden;
        }
        .ab-hero::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 70% at 20% 50%, rgba(200,169,110,.07), transparent 70%);
          pointer-events: none;
        }
        .ab-hero-inner { max-width: 760px; position: relative; z-index: 1; }
        .ab-hero-eyebrow {
          display: inline-flex; align-items: center; gap: .6rem;
          font-size: .72rem; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
        }
        .ab-hero-eyebrow::before {
          content: '';
          display: block; width: 24px; height: 1px;
          background: var(--gold);
        }
        .ab-hero h1 {
          font-family: var(--font-ar);
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--white);
          line-height: 1.4;
          margin-bottom: 1.25rem;
        }
        .ab-hero h1 span { color: var(--gold); }
        .ab-hero-sub {
          font-size: 1rem; font-weight: 400;
          color: rgba(255,255,255,.65);
          max-width: 560px;
          margin-bottom: 2.25rem;
          line-height: 1.85;
        }
        .ab-hero-cta { display: flex; gap: .9rem; flex-wrap: wrap; }
        .ab-btn-wa {
          display: inline-flex; align-items: center; gap: .55rem;
          background: var(--wa);
          color: #fff;
          font-size: .92rem; font-weight: 700;
          padding: .85rem 1.75rem;
          border-radius: 3px;
          transition: background .18s;
        }
        .ab-btn-wa:hover { background: var(--wa-dark); }
        .ab-btn-outline {
          display: inline-flex; align-items: center; gap: .55rem;
          border: 1px solid rgba(200,169,110,.5);
          color: var(--gold-light);
          font-size: .92rem; font-weight: 600;
          padding: .85rem 1.75rem;
          border-radius: 3px;
          transition: border-color .18s, color .18s;
        }
        .ab-btn-outline:hover { border-color: var(--gold); color: var(--gold); }

        /* Trust Strip */
        .ab-trust-strip {
          background: var(--navy-mid);
          border-bottom: 1px solid rgba(200,169,110,.15);
        }
        .ab-trust-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .ab-trust-cell {
          padding: 1.6rem 1.5rem;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,.07);
        }
        .ab-trust-cell:last-child { border-right: none; }
        .ab-trust-num {
          font-family: var(--font-en);
          font-size: 1.75rem; font-weight: 700;
          color: var(--gold);
          line-height: 1;
          margin-bottom: .3rem;
        }
        .ab-trust-label {
          font-size: .78rem; font-weight: 600;
          color: rgba(255,255,255,.55);
          line-height: 1.4;
        }

        /* Gold divider */
        .ab-gold-divider {
          height: 3px;
          background: linear-gradient(to left, transparent, var(--gold), transparent);
          opacity: .25;
        }

        /* Content sections */
        .ab-section { padding: 5rem 2.5rem; }
        .ab-section.ab-alt { background: var(--off-white); }
        .ab-section-wrap { max-width: 1100px; margin: 0 auto; }
        .ab-section-label {
          font-size: .7rem; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--gold);
          margin-bottom: .75rem;
        }
        .ab-section-title {
          font-size: clamp(1.5rem, 2.5vw, 2.1rem);
          font-weight: 700; color: var(--navy);
          line-height: 1.3;
          margin-bottom: 1.25rem;
        }
        .ab-section-body {
          font-size: .98rem; font-weight: 400;
          color: var(--text-mid);
          line-height: 1.9;
          max-width: 680px;
        }

        /* Two-col */
        .ab-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Cards */
        .ab-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 2.5rem;
        }
        .ab-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
        }
        .ab-section.ab-alt .ab-card { background: var(--white); }
        .ab-card-icon {
          width: 38px; height: 38px;
          background: var(--gold-bg);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .ab-card-icon svg { width: 18px; height: 18px; fill: var(--gold); }
        .ab-card-title {
          font-size: .92rem; font-weight: 700;
          color: var(--navy);
          margin-bottom: .5rem;
        }
        .ab-card-desc {
          font-size: .84rem; color: var(--text-light);
          line-height: 1.75;
        }

        /* Steps */
        .ab-steps { display: flex; flex-direction: column; gap: 0; margin-top: 2.5rem; }
        .ab-step {
          display: flex; gap: 1.5rem;
          padding: 1.6rem 0;
          border-bottom: 1px solid var(--border);
        }
        .ab-step:last-child { border-bottom: none; }
        .ab-step-num {
          font-family: var(--font-en);
          font-size: 1.5rem; font-weight: 700;
          color: var(--gold);
          min-width: 2.2rem;
          line-height: 1;
          padding-top: .15rem;
        }
        .ab-step-title {
          font-size: .95rem; font-weight: 700;
          color: var(--navy);
          margin-bottom: .3rem;
        }
        .ab-step-desc {
          font-size: .84rem; color: var(--text-light);
          line-height: 1.75;
        }

        /* Review */
        .ab-review-wrap { max-width: 760px; margin-top: 2.5rem; }
        .ab-review-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-right: 4px solid var(--gold);
          border-radius: var(--radius);
          padding: 2rem 2.25rem;
          box-shadow: var(--shadow-sm);
        }
        .ab-reviewer-row {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .ab-reviewer-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          background: var(--navy);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 700; color: var(--gold);
          flex-shrink: 0;
        }
        .ab-reviewer-name { font-size: .95rem; font-weight: 700; color: var(--navy); }
        .ab-reviewer-meta { font-size: .75rem; color: var(--text-light); margin-top: .1rem; }
        .ab-review-text {
          font-size: .97rem; color: var(--text-mid);
          line-height: 1.85;
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        .ab-review-attribution {
          font-size: .78rem; font-weight: 700;
          color: var(--text-light);
          letter-spacing: .04em;
        }
        .ab-review-reply {
          margin-top: 1.5rem;
          background: #F0FAF7;
          border: 1px solid #B7E4D5;
          border-radius: 4px;
          padding: 1.1rem 1.4rem;
        }
        .ab-reply-brand {
          font-size: .8rem; font-weight: 700;
          color: #1A6B50;
          margin-bottom: .5rem;
        }
        .ab-reply-text { font-size: .86rem; color: #2D5A47; line-height: 1.75; }
        .ab-review-cta-note {
          margin-top: 1.25rem;
          font-size: .83rem; color: var(--text-light);
        }
        .ab-review-cta-note a {
          color: var(--gold);
          font-weight: 600;
          border-bottom: 1px solid var(--gold-border);
          transition: color .15s;
        }
        .ab-review-cta-note a:hover { color: var(--navy); }

        /* Team */
        .ab-team-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2.25rem;
          max-width: 760px;
        }
        .ab-team-item {
          display: flex; align-items: flex-start; gap: .9rem;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.25rem 1.4rem;
          box-shadow: var(--shadow-sm);
        }
        .ab-team-bullet {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          margin-top: .55rem;
        }
        .ab-team-text { font-size: .9rem; color: var(--text-mid); line-height: 1.7; }
        .ab-team-text strong { color: var(--navy); font-weight: 700; }

        /* FAQ */
        .ab-faq-list { display: flex; flex-direction: column; gap: .75rem; margin-top: 2.25rem; max-width: 800px; }
        .ab-faq-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .ab-faq-q {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.2rem 1.5rem;
          font-size: .93rem; font-weight: 700;
          color: var(--navy);
          cursor: pointer;
          gap: 1rem;
          width: 100%;
          background: none;
          border: none;
          text-align: right;
          font-family: var(--font-ar);
        }
        .ab-faq-q svg {
          flex-shrink: 0; width: 18px; height: 18px;
          fill: var(--gold);
          transition: transform .25s;
        }
        .ab-faq-q.ab-open svg { transform: rotate(45deg); }
        .ab-faq-a {
          max-height: 0; overflow: hidden;
          transition: max-height .35s ease, padding .25s;
          font-size: .88rem; color: var(--text-mid);
          line-height: 1.8;
          padding: 0 1.5rem;
        }
        .ab-faq-a.ab-open {
          max-height: 200px;
          padding: 0 1.5rem 1.25rem;
        }

        /* CTA section */
        .ab-cta-section {
          background: var(--navy);
          padding: 5rem 2.5rem;
          text-align: center;
        }
        .ab-cta-section h2 {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700;
          color: var(--white);
          margin-bottom: .9rem;
        }
        .ab-cta-section p {
          font-size: .98rem; color: rgba(255,255,255,.6);
          max-width: 500px; margin: 0 auto 2.25rem;
          line-height: 1.85;
        }
        .ab-cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .ab-btn-wa-lg {
          display: inline-flex; align-items: center; gap: .6rem;
          background: var(--wa);
          color: #fff;
          font-size: .95rem; font-weight: 700;
          padding: .95rem 2rem;
          border-radius: 3px;
          transition: background .18s;
        }
        .ab-btn-wa-lg:hover { background: var(--wa-dark); }
        .ab-btn-email {
          display: inline-flex; align-items: center; gap: .6rem;
          border: 1px solid rgba(200,169,110,.45);
          color: var(--gold-light);
          font-size: .95rem; font-weight: 600;
          padding: .95rem 2rem;
          border-radius: 3px;
          transition: border-color .18s, color .18s;
        }
        .ab-btn-email:hover { border-color: var(--gold); color: var(--gold); }

        /* Scroll reveal */
        @media (prefers-reduced-motion: no-preference) {
          .ab-reveal { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; }
          .ab-reveal.ab-visible { opacity: 1; transform: none; }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ab-cards-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .ab-hero { padding: 4.5rem 1.25rem 3.5rem; }
          .ab-trust-inner { grid-template-columns: repeat(2,1fr); }
          .ab-trust-cell:nth-child(2) { border-right: none; }
          .ab-trust-cell:nth-child(3) { border-top: 1px solid rgba(255,255,255,.07); }
          .ab-trust-cell:nth-child(4) { border-right: none; border-top: 1px solid rgba(255,255,255,.07); }
          .ab-section { padding: 3.5rem 1.25rem; }
          .ab-two-col { grid-template-columns: 1fr; gap: 2.5rem; }
          .ab-cards-grid { grid-template-columns: 1fr; }
          .ab-team-list { grid-template-columns: 1fr; }
          .ab-cta-section { padding: 3.5rem 1.25rem; }
        }
        @media (max-width: 480px) {
          .ab-trust-inner { grid-template-columns: 1fr 1fr; }
          .ab-hero-cta { flex-direction: column; }
          .ab-cta-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="ab-page" dir="rtl">

        {/* ═══ HERO ═══════════════════════════════════════════════ */}
        <section className="ab-hero" aria-labelledby="ab-hero-h1">
          <div className="ab-hero-inner">
            <p className="ab-hero-eyebrow">برلين — منذ 2012</p>
            <h1 id="ab-hero-h1">
              نحن لا نبيع موعداً طبياً.<br />
              <span>نحن نبني الطريق الصحيح<br />للعلاج في ألمانيا.</span>
            </h1>
            <p className="ab-hero-sub">
              Medical Care Germany — تنسيق طبي متخصص للمرضى العرب منذ 2012.
              فريق برلين يرافقك من إرسال الملف حتى العودة.
            </p>
            <div className="ab-hero-cta">
              <a
                href="https://wa.me/493025730875"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-btn-wa"
                aria-label="ابدأ استشارتك المجانية عبر واتساب"
              >
                <WaIcon size={18} />
                ابدأ استشارتك المجانية
              </a>
              <a href="/ar/how-it-works" className="ab-btn-outline">
                كيف تسير الإجراءات؟
              </a>
            </div>
          </div>
        </section>

        {/* ═══ TRUST STRIP ════════════════════════════════════════ */}
        <div className="ab-trust-strip" aria-label="أرقام الثقة">
          <div className="ab-trust-inner">
            <div className="ab-trust-cell">
              <p className="ab-trust-num">2012</p>
              <p className="ab-trust-label">منذ عام</p>
            </div>
            <div className="ab-trust-cell">
              <p className="ab-trust-num">500+</p>
              <p className="ab-trust-label">ملف طبي معقد</p>
            </div>
            <div className="ab-trust-cell">
              <p className="ab-trust-num">20+</p>
              <p className="ab-trust-label">دولة عربية وأفريقية</p>
            </div>
            <div className="ab-trust-cell">
              <p className="ab-trust-num">Berlin</p>
              <p className="ab-trust-label">مقرنا الدائم</p>
            </div>
          </div>
        </div>

        <div className="ab-gold-divider" />

        {/* ═══ 1 · لماذا وُجدت MCG ════════════════════════════════ */}
        <section className="ab-section" aria-labelledby="ab-why-heading">
          <div className="ab-section-wrap ab-reveal">
            <p className="ab-section-label">لماذا وُجدنا</p>
            <h2 className="ab-section-title" id="ab-why-heading">
              فراغ حقيقي رأيناه قبل أن يراه غيرنا
            </h2>
            <div className="ab-two-col">
              <div>
                <p className="ab-section-body">
                  في عام 2012، كانت الصورة واضحة: مرضى من ليبيا والجزائر والعراق والخليج يصلون إلى ألمانيا وحيدين. لديهم تشخيصات معقدة، ولا أحد يشرح لهم ما قاله الطبيب. لا متابعة للمواعيد، لا من يساعد في إجراءات الإقامة، لا علاقة مباشرة مع الأقسام الطبية.
                </p>
                <br />
                <p className="ab-section-body">
                  لم نبنِ Medical Care Germany لنكون جسراً بين المريض والمستشفى فحسب — بل لنكون الشريك الذي يعرف طريقه داخل المنظومة الألمانية، ويتحمل مسؤولية الملف من أوله إلى آخره.
                </p>
              </div>
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: ".9rem" }}>
                  <div className="ab-card">
                    <p className="ab-card-title">المشكلة التي رأيناها</p>
                    <p className="ab-card-desc">
                      مرضى بحالات معقدة يضيعون في البيروقراطية الألمانية دون مرجع موثوق يتحدث لغتهم ويعرف طريقه داخل المستشفيات.
                    </p>
                  </div>
                  <div className="ab-card">
                    <p className="ab-card-title">الحل الذي بنيناه</p>
                    <p className="ab-card-desc">
                      فريق برلين الثنائي اللغة الذي يجلس داخل المنظومة — يتفاوض، يتابع، يترجم، ويحل المشكلات قبل أن تصل إليك.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2 · ماذا نفعل فعلياً ══════════════════════════════ */}
        <section className="ab-section ab-alt" aria-labelledby="ab-what-heading">
          <div className="ab-section-wrap ab-reveal">
            <p className="ab-section-label">ماذا نفعل</p>
            <h2 className="ab-section-title" id="ab-what-heading">
              أكثر من تنسيق مواعيد
            </h2>
            <p className="ab-section-body" style={{ marginBottom: "2rem" }}>
              نتولى كل ما يقع بين قرار العلاج والعودة إلى الوطن.
            </p>
            <div className="ab-cards-grid">
              <div className="ab-card">
                <div className="ab-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M20 6h-2.18c.07-.44.18-.86.18-1a3 3 0 00-6 0c0 .14.11.56.18 1H10c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 18H10V8h10v14z" /></svg>
                </div>
                <p className="ab-card-title">تقييم الملف الطبي</p>
                <p className="ab-card-desc">
                  نحلل التقارير الطبية ونختار المستشفى والقسم الأنسب بناء على طبيعة الحالة، لا بناء على الشهرة وحدها.
                </p>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" /></svg>
                </div>
                <p className="ab-card-title">تنسيق المواعيد الطبية</p>
                <p className="ab-card-desc">
                  نتواصل مع الأقسام مباشرة ونؤمّن المواعيد في أسرع وقت ممكن — مع الالتزام بالتسلسل الطبي الصحيح.
                </p>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                </div>
                <p className="ab-card-title">الترجمة الطبية المباشرة</p>
                <p className="ab-card-desc">
                  نحضر معك داخل العيادة ونترجم ما يقوله الطبيب بدقة — شرح طبي حقيقي لا ترجمة ميكانيكية.
                </p>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                </div>
                <p className="ab-card-title">إجراءات الفيزا والإقامة</p>
                <p className="ab-card-desc">
                  نُعدّ ملف الدعوة الطبية، ونساعد في بوليس الأجانب، وورقة الإقامة، وفتح الحساب البنكي إذا لزم.
                </p>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /></svg>
                </div>
                <p className="ab-card-title">ترتيب السكن والتنقل</p>
                <p className="ab-card-desc">
                  نساعدك في إيجاد سكن مناسب قريب من المستشفى، ونرتب التنقل بين المواعيد حسب احتياجك.
                </p>
              </div>
              <div className="ab-card">
                <div className="ab-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
                </div>
                <p className="ab-card-title">التواصل المستمر مع الأهل</p>
                <p className="ab-card-desc">
                  نُبقي ذوي المريض على اطلاع بمستجدات الملف — بالعربية وبأسلوب واضح بعيد عن التعقيد الطبي.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3 · لماذا برلين ════════════════════════════════════ */}
        <section className="ab-section" aria-labelledby="ab-berlin-heading">
          <div className="ab-section-wrap ab-reveal">
            <p className="ab-section-label">لماذا برلين</p>
            <h2 className="ab-section-title" id="ab-berlin-heading">
              المدينة التي تجمع أفضل الطب الألماني
            </h2>
            <div className="ab-two-col">
              <div>
                <p className="ab-section-body">
                  برلين ليست اختياراً عشوائياً. هي موطن بعض أكبر المستشفيات الجامعية في أوروبا — شاريتيه، فيفانتس، يوهانسشتيفت ديكوني، وغيرها — مع تخصصات تغطي أصعب الحالات في الأورام وأمراض القلب والأعصاب والجراحات المعقدة.
                </p>
                <br />
                <p className="ab-section-body">
                  فريقنا موجود فيزيائياً في برلين. هذا يعني علاقات مباشرة مع أقسام المستشفيات، ومتابعة حضورية، وقدرة على حل المشكلات فور ظهورها — لا عبر بريد إلكتروني من بلد آخر.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: ".9rem" }}>
                <div className="ab-card">
                  <p className="ab-card-title">Charité — جامعة برلين الطبية</p>
                  <p className="ab-card-desc">
                    واحدة من أكبر مستشفيات أوروبا، مرجع عالمي في الأورام والجراحة العصبية.
                  </p>
                </div>
                <div className="ab-card">
                  <p className="ab-card-title">Vivantes — شبكة المستشفيات الكبرى</p>
                  <p className="ab-card-desc">
                    شبكة مستشفيات برلينية متكاملة تغطي طيفاً واسعاً من التخصصات.
                  </p>
                </div>
                <div className="ab-card">
                  <p className="ab-card-title">Johannesstift Diakonie</p>
                  <p className="ab-card-desc">
                    مرجع في الجراحة العظمية وإعادة التأهيل — بمعايير رعاية عالية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4 · كيف نعمل معك ══════════════════════════════════ */}
        <section className="ab-section ab-alt" aria-labelledby="ab-how-heading">
          <div className="ab-section-wrap ab-reveal">
            <p className="ab-section-label">كيف نعمل</p>
            <h2 className="ab-section-title" id="ab-how-heading">
              خمس خطوات واضحة من الملف حتى العودة
            </h2>
            <div className="ab-two-col">
              <div>
                <p className="ab-section-body">
                  لا غموض ولا وعود فضفاضة. كل ملف يمر بمسار محدد، ومسؤول محدد، وتواصل مستمر في كل مرحلة.
                </p>
              </div>
              <div />
            </div>
            <div className="ab-steps" role="list" aria-label="خطوات العمل">
              {[
                {
                  num: "01",
                  title: "أرسل لنا الملف الطبي",
                  desc: "تقارير التحاليل، صور الأشعة، التشخيص الحالي — نستقبل كل شيء عبر واتساب أو البريد الإلكتروني.",
                },
                {
                  num: "02",
                  title: "تقييم مبدئي خلال 24 ساعة",
                  desc: "نراجع الملف ونرسل لك تقييماً صادقاً: هل نستطيع المساعدة؟ أي مستشفى؟ ما الإطار الزمني المتوقع؟",
                },
                {
                  num: "03",
                  title: "اتفاقية عمل واضحة",
                  desc: "نحدد معاً نطاق الخدمة والرسوم قبل أي إجراء — لا مفاجآت لاحقاً.",
                },
                {
                  num: "04",
                  title: "تنسيق كامل في برلين",
                  desc: "نحجز المواعيد، نُعدّ ملف الفيزا، ونرافقك داخل المستشفى طوال فترة العلاج.",
                },
                {
                  num: "05",
                  title: "متابعة ما بعد العودة",
                  desc: "نُرسل ملخص التقارير الطبية مترجماً، ونبقى متاحين للتنسيق مع طبيبك في بلدك.",
                },
              ].map((step) => (
                <div className="ab-step" role="listitem" key={step.num}>
                  <span className="ab-step-num">{step.num}</span>
                  <div>
                    <p className="ab-step-title">{step.title}</p>
                    <p className="ab-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 5 · ثقة المرضى ════════════════════════════════════ */}
        <section className="ab-section" aria-labelledby="ab-trust-heading">
          <div className="ab-section-wrap ab-reveal">
            <p className="ab-section-label">ثقة المرضى</p>
            <h2 className="ab-section-title" id="ab-trust-heading">
              لماذا يثق بنا المرضى؟
            </h2>
            <p className="ab-section-body">
              معظم عملائنا يأتون بتوصية شخصية من طبيب أو من عائلة سبق وعملنا معها.
              هذا هو مقياسنا الحقيقي — لا الإعلانات.
            </p>
            <div className="ab-review-wrap" itemScope itemType="https://schema.org/Review">
              <div className="ab-review-card">
                <div className="ab-reviewer-row">
                  <div className="ab-reviewer-avatar" aria-hidden="true">و</div>
                  <div>
                    <p className="ab-reviewer-name" itemProp="author">د. وفيق حمزة</p>
                    <p className="ab-reviewer-meta">ليبيا · Local Guide على Google</p>
                  </div>
                </div>
                <p className="ab-review-text" itemProp="reviewBody">
                  "عند تجربة ملف الفيزا العلاجية بالوالدة — انصح بيهم. معاملة جد ممتازة في المواعيد سواء عند العيادة والمستشفى وبوليس الأجانب، وأيضاً في تسوية الأمور فيما يخص السكن وورقة الإقامة والبنوك."
                </p>
                <p className="ab-review-attribution">تقييم على Google Business Profile</p>
                <div className="ab-review-reply" aria-label="رد Medical Care Germany">
                  <p className="ab-reply-brand">Medical Care Germany — رد الإدارة</p>
                  <p className="ab-reply-text">
                    نشكرك د. حمزة على كلماتك وثقتك الكبيرة. يسعدنا أن تجربتك كانت إيجابية، ونقدّر إشادتك بدقة المواعيد وجودة المتابعة. نتمنى لكم دوام الصحة والعافية.
                  </p>
                </div>
              </div>
              <p className="ab-review-cta-note">
                هل سبق وعملنا معك?{" "}
                <a
                  href="https://share.google/a0BstjyJQugEy0OXm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اترك تقييمك على Google
                </a>{" "}
                — يساعد عائلات أخرى على اتخاذ قرارهم بثقة.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 6 · من يقف خلف MCG ════════════════════════════════ */}
        <section className="ab-section ab-alt" aria-labelledby="ab-team-heading">
          <div className="ab-section-wrap ab-reveal">
            <p className="ab-section-label">الفريق</p>
            <h2 className="ab-section-title" id="ab-team-heading">
              من يقف خلف Medical Care Germany؟
            </h2>
            <p className="ab-section-body">
              لسنا شركة أُسست أمام الشاشة. نحن فريق بنى علاقاته داخل المستشفيات وعبر السنوات.
            </p>
            <div className="ab-team-list" role="list">
              {[
                {
                  strong: "منذ 2012 في برلين",
                  text: " — خبرة ميدانية متراكمة في التنسيق الطبي للمرضى القادمين من خارج ألمانيا.",
                },
                {
                  strong: "فريق عربي ألماني",
                  text: " — نعمل بالعربية والألمانية والإنجليزية دون وسيط خارجي.",
                },
                {
                  strong: "خبرة في الحالات المعقدة",
                  text: " — تخصصنا في الملفات التي تحتاج تقييماً دقيقاً وتواصلاً مباشراً مع الأطباء.",
                },
                {
                  strong: "علاقات مباشرة مع المستشفيات الجامعية",
                  text: " — نتواصل مع الأقسام الطبية بشكل مباشر، لا عبر بوابات حجز عامة.",
                },
                {
                  strong: "متابعة شخصية للمريض",
                  text: " — كل ملف يُسند إلى شخص مسؤول بالاسم طوال مدة العلاج.",
                },
              ].map((item, i) => (
                <div className="ab-team-item" role="listitem" key={i}>
                  <div className="ab-team-bullet" aria-hidden="true" />
                  <p className="ab-team-text">
                    <strong>{item.strong}</strong>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 7 · FAQ ════════════════════════════════════════════ */}
        <section className="ab-section" aria-labelledby="ab-faq-heading">
          <div className="ab-section-wrap ab-reveal">
            <p className="ab-section-label">أسئلة شائعة</p>
            <h2 className="ab-section-title" id="ab-faq-heading">
              ما يسألنا عنه المرضى دائماً
            </h2>
            <div className="ab-faq-list" role="list">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div className="ab-faq-item" role="listitem" key={item.id}>
                    <button
                      className={`ab-faq-q${isOpen ? " ab-open" : ""}`}
                      aria-expanded={isOpen}
                      aria-controls={item.id}
                      onClick={() => toggleFaq(item.id)}
                    >
                      {item.q}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </button>
                    <div
                      id={item.id}
                      className={`ab-faq-a${isOpen ? " ab-open" : ""}`}
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 8 · CTA ════════════════════════════════════════════ */}
        <section className="ab-cta-section" aria-labelledby="ab-cta-heading">
          <h2 id="ab-cta-heading">ملفك يستحق متابعة حقيقية</h2>
          <p>
            أرسل لنا ملخصاً عن حالتك الطبية. سنردّ بتقييم صادق خلال 24 ساعة — بدون التزامات.
          </p>
          <div className="ab-cta-buttons">
            <a
              href="https://wa.me/493025730875"
              target="_blank"
              rel="noopener noreferrer"
              className="ab-btn-wa-lg"
              aria-label="تواصل معنا عبر واتساب"
            >
              <WaIcon size={20} />
              تواصل عبر واتساب
            </a>
            <a href="mailto:info@medicalcaregermany.com" className="ab-btn-email">
              info@medicalcaregermany.com
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
