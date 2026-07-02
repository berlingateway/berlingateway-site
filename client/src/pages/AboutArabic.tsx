import { useEffect } from "react";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

export default function AboutArabic() {
  useEffect(() => {
    document.title = "من نحن | Medical Care Germany — برلين منذ 2012";
    const descContent =
      "Medical Care Germany — تنسيق طبي متخصص للمرضى العرب في ألمانيا منذ 2012. فريق برلين يرافقك من إرسال الملف حتى العودة.";
    let m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", descContent);
    else {
      const n = document.createElement("meta");
      n.name = "description";
      n.content = descContent;
      document.head.appendChild(n);
    }

    // Schema: MedicalBusiness + Review
    const schemaId = "about-schema-ld";
    if (!document.getElementById(schemaId)) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4",
          reviewCount: "1",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "د. وفيق حمزة" },
          reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
          reviewBody:
            "عند تجربة ملف الفيزا العلاجية بالوالدة — انصح بيهم. معاملة جد ممتازة في المواعيد سواء عند العيادة أو المستشفى وبوليس الأجانب، وأيضاً في تسوية الأمور فيما يخص السكن وورقة الإقامة والبنوك.",
        },
      });
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, []);

  return (
    <>
      <HreflangTags currentPath="/ar/about" />
      <SmartNavLayer currentPath="/ar/about" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cairo:wght@300;400;600;700&display=swap');

        .about-page {
          --bg:          #0C0F14;
          --bg-card:     #131820;
          --bg-accent:   #161D26;
          --gold:        #C8A96E;
          --gold-light:  #E0C99A;
          --gold-dim:    rgba(200,169,110,0.18);
          --teal:        #2A8C7E;
          --teal-light:  #3AADA0;
          --text:        #E8E3DA;
          --text-muted:  #8A8880;
          --text-dim:    #5A5856;
          --border:      rgba(200,169,110,0.15);
          --border-dim:  rgba(255,255,255,0.07);
          --font-display:'Playfair Display', serif;
          --font-arabic: 'Cairo', 'IBM Plex Sans Arabic', sans-serif;

          font-family: var(--font-arabic);
          background: var(--bg);
          color: var(--text);
          line-height: 1.75;
          direction: rtl;
          -webkit-font-smoothing: antialiased;
          padding-top: 72px;
        }

        .about-page a { color: var(--gold); text-decoration: none; transition: color .2s; }
        .about-page a:hover { color: var(--gold-light); }

        /* ─── Hero ─────────────────────────────────── */
        .ab-hero {
          min-height: 65vh;
          display: flex; align-items: center;
          padding: 5rem 2.5rem 4rem;
          position: relative;
          overflow: hidden;
        }
        .ab-hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 30% 40%, rgba(42,140,126,.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 70% 70%, rgba(200,169,110,.07) 0%, transparent 60%);
          pointer-events: none;
        }
        .ab-hero-pattern {
          position: absolute;
          left: -60px; top: 50%;
          transform: translateY(-50%);
          width: 520px; height: 520px;
          opacity: .04;
          pointer-events: none;
        }
        .ab-hero-inner { position: relative; z-index: 2; max-width: 760px; }
        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: .6rem;
          font-size: .75rem; font-weight: 600;
          letter-spacing: .14em; color: var(--teal-light);
          text-transform: uppercase; margin-bottom: 1.5rem;
        }
        .ab-eyebrow::before {
          content: ''; display: block; width: 28px; height: 1px;
          background: var(--teal-light);
        }
        .ab-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 700; line-height: 1.2; color: #fff;
          margin-bottom: 1.5rem;
        }
        .ab-hero h1 em { font-style: normal; color: var(--gold); }
        .ab-hero-desc {
          font-size: 1.1rem; font-weight: 300;
          color: var(--text-muted); max-width: 580px; line-height: 1.9;
        }
        .ab-stats { display: flex; gap: 3rem; margin-top: 3rem; flex-wrap: wrap; }
        .ab-stat { display: flex; flex-direction: column; gap: .2rem; }
        .ab-stat-num {
          font-family: var(--font-display);
          font-size: 2.2rem; font-weight: 700;
          color: var(--gold); line-height: 1;
        }
        .ab-stat-label { font-size: .8rem; color: var(--text-muted); font-weight: 400; }

        /* ─── Sections ──────────────────────────────── */
        .ab-section { padding: 4rem 2.5rem; max-width: 1100px; margin: 0 auto; }
        .ab-section-sm { padding: 3rem 2.5rem; max-width: 1100px; margin: 0 auto; }
        .ab-divider { width: 100%; height: 1px; background: var(--border-dim); max-width: 1100px; margin: 0 auto; }
        .ab-label {
          font-size: .72rem; font-weight: 600;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1rem;
        }
        .ab-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 700; color: #fff;
          line-height: 1.25; margin-bottom: 1.5rem;
        }
        .ab-body { font-size: 1rem; color: var(--text-muted); line-height: 1.9; max-width: 680px; }

        /* ─── Story Grid ────────────────────────────── */
        .ab-story-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: start; margin-top: 3rem;
        }
        .ab-milestones { display: flex; flex-direction: column; }
        .ab-milestone {
          display: flex; gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-dim);
        }
        .ab-milestone:last-child { border-bottom: none; }
        .ab-m-year {
          font-family: var(--font-display);
          font-size: 1rem; font-weight: 700;
          color: var(--gold); min-width: 3.5rem; padding-top: .1rem;
        }
        .ab-m-title { font-size: .95rem; font-weight: 600; color: var(--text); margin-bottom: .3rem; }
        .ab-m-desc { font-size: .85rem; color: var(--text-muted); line-height: 1.7; }

        /* ─── Differentiators ───────────────────────── */
        .ab-diff-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1.5px; background: var(--border-dim);
          border: 1px solid var(--border-dim);
          border-radius: 4px; overflow: hidden; margin-top: 2.5rem;
        }
        .ab-diff-card {
          background: var(--bg-card); padding: 2rem 1.75rem;
          transition: background .2s;
        }
        .ab-diff-card:hover { background: var(--bg-accent); }
        .ab-diff-icon { width: 36px; height: 36px; margin-bottom: 1rem; color: var(--teal-light); }
        .ab-diff-icon svg { width: 100%; height: 100%; fill: currentColor; }
        .ab-diff-title { font-size: .95rem; font-weight: 700; color: var(--text); margin-bottom: .5rem; }
        .ab-diff-desc { font-size: .85rem; color: var(--text-muted); line-height: 1.7; }

        /* ─── Trust Bar ─────────────────────────────── */
        .ab-trust-bar {
          display: grid; grid-template-columns: repeat(4, 1fr);
          background: var(--border-dim);
          border: 1px solid var(--border-dim);
          border-radius: 4px; overflow: hidden; margin-top: 2.5rem;
        }
        .ab-trust-item {
          background: var(--bg-card); padding: 1.75rem 1.5rem;
          text-align: center; border-right: 1px solid var(--border-dim);
        }
        .ab-trust-item:last-child { border-right: none; }
        .ab-trust-num {
          font-family: var(--font-display);
          font-size: 2rem; font-weight: 700;
          color: var(--gold); line-height: 1; margin-bottom: .4rem;
        }
        .ab-trust-desc { font-size: .78rem; color: var(--text-muted); line-height: 1.5; }

        /* ─── Review Section ────────────────────────── */
        .ab-review-section { background: var(--bg-accent); }
        .ab-review-inner { max-width: 1100px; margin: 0 auto; padding: 4rem 2.5rem; }
        .ab-review-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;
        }
        .ab-google-badge {
          display: inline-flex; align-items: center; gap: .5rem;
          font-size: .78rem; color: var(--text-muted);
          border: 1px solid var(--border-dim);
          padding: .4rem .9rem; border-radius: 20px;
        }
        .ab-google-badge svg { width: 16px; height: 16px; }
        .ab-review-card {
          background: var(--bg-card);
          border: 1px solid var(--border-dim);
          border-radius: 4px; padding: 2rem;
          max-width: 760px;
        }
        .ab-reviewer-meta { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .ab-reviewer-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          background: var(--teal); color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 700; flex-shrink: 0;
        }
        .ab-reviewer-name { font-size: .95rem; font-weight: 600; color: var(--text); }
        .ab-reviewer-sub { font-size: .78rem; color: var(--text-dim); }
        .ab-stars { display: flex; gap: .15rem; margin-bottom: 1rem; }
        .ab-star { color: #FBBC05; font-size: 1.1rem; }
        .ab-star-empty { color: var(--text-dim); font-size: 1.1rem; }
        .ab-review-text { font-size: .9rem; color: var(--text-muted); line-height: 1.85; margin-bottom: 1.5rem; }
        .ab-review-location { font-size: .78rem; color: var(--text-dim); margin-bottom: 1.5rem; }
        .ab-review-reply {
          background: var(--bg-accent);
          border: 1px solid var(--border-dim);
          border-radius: 3px; padding: 1.25rem;
        }
        .ab-reply-header { display: flex; align-items: center; gap: .75rem; margin-bottom: .75rem; }
        .ab-reply-logo {
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--teal); color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: .6rem; font-weight: 700; flex-shrink: 0;
        }
        .ab-reply-brand { font-size: .85rem; font-weight: 600; color: var(--text); }
        .ab-reply-role { font-size: .75rem; color: var(--text-dim); }
        .ab-reply-text { font-size: .85rem; color: var(--text-muted); line-height: 1.75; }
        .ab-review-cta {
          margin-top: 2rem; padding: 1.25rem 1.75rem;
          background: var(--gold-dim); border: 1px solid var(--border);
          border-radius: 4px; display: flex; align-items: center;
          justify-content: space-between; gap: 1.5rem; max-width: 760px; flex-wrap: wrap;
        }
        .ab-review-cta-text { font-size: .9rem; color: var(--text-muted); }
        .ab-review-cta-text strong { color: var(--gold); }
        .ab-btn-review {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--gold); color: #0C0F14;
          font-size: .82rem; font-weight: 700;
          padding: .7rem 1.4rem; border-radius: 3px;
          white-space: nowrap; transition: background .2s;
          text-decoration: none;
        }
        .ab-btn-review:hover { background: var(--gold-light); color: #0C0F14; }

        /* ─── CTA Block ─────────────────────────────── */
        .ab-cta {
          text-align: center; padding: 4rem 2.5rem;
          position: relative; overflow: hidden;
        }
        .ab-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 70% at 50% 50%, rgba(42,140,126,.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .ab-cta h2 {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700; color: #fff; margin-bottom: 1rem; position: relative;
        }
        .ab-cta p {
          font-size: 1rem; color: var(--text-muted);
          max-width: 520px; margin: 0 auto 2rem;
          line-height: 1.85; position: relative;
        }
        .ab-cta-buttons {
          display: flex; gap: 1rem; justify-content: center;
          flex-wrap: wrap; position: relative;
        }
        .ab-btn-primary {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--teal); color: #fff;
          font-size: .9rem; font-weight: 700;
          padding: .9rem 2rem; border-radius: 3px;
          transition: background .2s; text-decoration: none;
        }
        .ab-btn-primary:hover { background: var(--teal-light); color: #fff; }
        .ab-btn-secondary {
          display: inline-flex; align-items: center; gap: .5rem;
          border: 1px solid var(--border); color: var(--gold);
          font-size: .9rem; font-weight: 600;
          padding: .9rem 2rem; border-radius: 3px;
          transition: border-color .2s, color .2s; text-decoration: none;
        }
        .ab-btn-secondary:hover { border-color: var(--gold); color: var(--gold-light); }

        /* ─── Responsive ────────────────────────────── */
        @media (max-width: 900px) {
          .ab-story-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .ab-diff-grid  { grid-template-columns: 1fr 1fr; }
          .ab-trust-bar  { grid-template-columns: repeat(2, 1fr); }
          .ab-trust-item { border-right: none; border-bottom: 1px solid var(--border-dim); }
          .ab-trust-item:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 600px) {
          .ab-hero { padding: 4rem 1.25rem 3rem; }
          .ab-section { padding: 3rem 1.25rem; }
          .ab-section-sm { padding: 2.5rem 1.25rem; }
          .ab-review-inner { padding: 3rem 1.25rem; }
          .ab-cta { padding: 3rem 1.25rem; }
          .ab-diff-grid { grid-template-columns: 1fr; }
          .ab-trust-bar { grid-template-columns: 1fr 1fr; }
          .ab-stats { gap: 2rem; }
          .ab-review-cta { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="about-page">

        {/* ════ HERO ════ */}
        <section className="ab-hero" aria-labelledby="ab-hero-heading">
          <svg className="ab-hero-pattern" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" stroke="white" strokeWidth=".8">
              <polygon points="200,20 380,110 380,290 200,380 20,290 20,110"/>
              <polygon points="200,60 340,135 340,265 200,340 60,265 60,135"/>
              <polygon points="200,100 300,155 300,245 200,300 100,245 100,155"/>
              <polygon points="200,140 260,170 260,230 200,260 140,230 140,170"/>
              <line x1="200" y1="20" x2="200" y2="380"/>
              <line x1="20" y1="110" x2="380" y2="290"/>
              <line x1="380" y1="110" x2="20" y2="290"/>
              <circle cx="200" cy="200" r="30"/>
              <circle cx="200" cy="200" r="80"/>
              <circle cx="200" cy="200" r="140"/>
            </g>
          </svg>

          <div className="ab-hero-inner">
            <span className="ab-eyebrow">برلين — منذ 2012</span>
            <h1 id="ab-hero-heading">
              نحن لسنا وسطاء.<br />
              نحن <em>فريقك الطبي</em><br />داخل ألمانيا.
            </h1>
            <p className="ab-hero-desc">
              منذ أكثر من عقد، تولّينا الملفات الأصعب — الحالات التي رفضتها مراكز أخرى، والمرضى الذين لا يعرفون من أين يبدأون.
              نحن نجلس في برلين، ونعمل داخل المستشفيات، ونتحدث العربية والألمانية بطلاقة تامة.
            </p>
            <div className="ab-stats">
              <div className="ab-stat">
                <span className="ab-stat-num">+12</span>
                <span className="ab-stat-label">سنة خبرة في برلين</span>
              </div>
              <div className="ab-stat">
                <span className="ab-stat-num">4</span>
                <span className="ab-stat-label">دول عربية نخدم مرضاءها بانتظام</span>
              </div>
              <div className="ab-stat">
                <span className="ab-stat-num">100%</span>
                <span className="ab-stat-label">متابعة من الملف حتى العودة</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ab-divider" />

        {/* ════ STORY ════ */}
        <div className="ab-section" aria-labelledby="ab-story-heading">
          <p className="ab-label">قصتنا</p>
          <h2 className="ab-title" id="ab-story-heading">بدأنا بحالة واحدة.<br />بنينا شبكة بأكملها.</h2>
          <div className="ab-story-grid">
            <div>
              <p className="ab-body">
                في عام 2012، لاحظنا فراغاً حقيقياً: المرضى العرب يصلون إلى ألمانيا وحيدين، لا يجدون من يترجم، ولا من يتابع مواعيدهم، ولا من يشرح لهم ما قاله الطبيب.
              </p>
              <br />
              <p className="ab-body">
                بنينا Medical Care Germany من الصفر — ليس كمكتب حجز، بل كشريك طبي حقيقي داخل المنظومة الألمانية. اليوم، لدينا علاقات مباشرة مع أقسام المستشفيات الكبرى في برلين، ونتابع كل ملف شخصياً من لحظة الاستفسار حتى مغادرة المريض.
              </p>
              <br />
              <p className="ab-body">
                ثقة عائلة د. وفيق حمزة من ليبيا تعني لنا أكثر من أي شهادة رسمية — لأنها ثقة مبنية على تجربة حقيقية.
              </p>
            </div>
            <div className="ab-milestones" aria-label="المحطات الرئيسية">
              <div className="ab-milestone">
                <span className="ab-m-year">2012</span>
                <div>
                  <p className="ab-m-title">التأسيس في برلين</p>
                  <p className="ab-m-desc">أول ملف تنسيق طبي لمريض ليبي في مستشفى برليني — هكذا بدأت الفكرة تتحول إلى مشروع.</p>
                </div>
              </div>
              <div className="ab-milestone">
                <span className="ab-m-year">2015</span>
                <div>
                  <p className="ab-m-title">توسع الشبكة العربية</p>
                  <p className="ab-m-desc">إضافة ملفات من الجزائر والعراق والخليج، وبناء علاقات مباشرة مع الأطباء المختصين.</p>
                </div>
              </div>
              <div className="ab-milestone">
                <span className="ab-m-year">2019</span>
                <div>
                  <p className="ab-m-title">خدمة الفيزا العلاجية</p>
                  <p className="ab-m-desc">إضافة دعم متكامل لإجراءات الفيزا وتسوية الإقامة وفتح الحسابات البنكية للمرضى وذويهم.</p>
                </div>
              </div>
              <div className="ab-milestone">
                <span className="ab-m-year">2024</span>
                <div>
                  <p className="ab-m-title">أكثر من عقد من الثقة</p>
                  <p className="ab-m-desc">مئات الملفات، وشبكة إحالة مبنية على التوصيات الشخصية بين الأطباء والعائلات.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ab-divider" />

        {/* ════ DIFFERENTIATORS ════ */}
        <div className="ab-section" aria-labelledby="ab-diff-heading">
          <p className="ab-label">لماذا نختلف</p>
          <h2 className="ab-title" id="ab-diff-heading">ما لا تجده في مكان آخر</h2>
          <div className="ab-diff-grid" role="list">
            <div className="ab-diff-card" role="listitem">
              <div className="ab-diff-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
              </div>
              <p className="ab-diff-title">حضور فعلي داخل المستشفيات</p>
              <p className="ab-diff-desc">لسنا نكتب إيميلات من بعيد. نحن نحضر المواعيد، نتحدث مع الأطباء مباشرة، ونتابع تقارير التحاليل.</p>
            </div>
            <div className="ab-diff-card" role="listitem">
              <div className="ab-diff-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              </div>
              <p className="ab-diff-title">عربي ألماني بلا حواجز</p>
              <p className="ab-diff-desc">نفهم ما يقوله الطبيب الألماني ونشرحه لك بالعربية — لا ترجمات ميكانيكية، بل شرح طبي حقيقي.</p>
            </div>
            <div className="ab-diff-card" role="listitem">
              <div className="ab-diff-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              </div>
              <p className="ab-diff-title">ملفك آمن ومتابع شخصياً</p>
              <p className="ab-diff-desc">كل ملف يُتابع من شخص واحد معروف لديك بالاسم — لا يضيع في بريد إلكتروني مشترك.</p>
            </div>
            <div className="ab-diff-card" role="listitem">
              <div className="ab-diff-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
              </div>
              <p className="ab-diff-title">دعم الفيزا والإقامة</p>
              <p className="ab-diff-desc">نساعدك في الفيزا العلاجية، بوليس الأجانب، ورقة الإقامة، وفتح الحساب البنكي — كل الإجراءات الجانبية.</p>
            </div>
            <div className="ab-diff-card" role="listitem">
              <div className="ab-diff-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
              </div>
              <p className="ab-diff-title">شبكة إحالة بالثقة الشخصية</p>
              <p className="ab-diff-desc">معظم عملاؤنا يأتون بتوصية من طبيب أو عائلة سبق وعملنا معهم — هذه هي معيارنا الحقيقي للجودة.</p>
            </div>
            <div className="ab-diff-card" role="listitem">
              <div className="ab-diff-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p className="ab-diff-title">حالات معقدة لا يقبلها الآخرون</p>
              <p className="ab-diff-desc">تخصصنا في الملفات التي تحتاج جهة طبية بمصداقية عالية لدى المستشفيات الجامعية الكبرى.</p>
            </div>
          </div>
        </div>

        <div className="ab-divider" />

        {/* ════ TRUST NUMBERS ════ */}
        <div className="ab-section-sm" aria-label="أرقام الثقة">
          <div className="ab-trust-bar" role="list">
            <div className="ab-trust-item" role="listitem">
              <p className="ab-trust-num">+12</p>
              <p className="ab-trust-desc">سنة عمل متواصل<br />من برلين</p>
            </div>
            <div className="ab-trust-item" role="listitem">
              <p className="ab-trust-num">4</p>
              <p className="ab-trust-desc">دول عربية<br />ليبيا · الجزائر · العراق · الخليج</p>
            </div>
            <div className="ab-trust-item" role="listitem">
              <p className="ab-trust-num">3+</p>
              <p className="ab-trust-desc">لغات عمل<br />عربي · ألماني · إنجليزي</p>
            </div>
            <div className="ab-trust-item" role="listitem">
              <p className="ab-trust-num">0</p>
              <p className="ab-trust-desc">ملف يُغلق قبل<br />عودة المريض سالماً</p>
            </div>
          </div>
        </div>

        <div className="ab-divider" />

        {/* ════ GOOGLE REVIEW ════ */}
        <section className="ab-review-section" aria-labelledby="ab-review-heading">
          <div className="ab-review-inner">
            <div className="ab-review-header">
              <p className="ab-label" id="ab-review-heading" style={{ marginBottom: 0 }}>ماذا يقول عملاؤنا</p>
              <div className="ab-google-badge" aria-label="تقييم على Google Business Profile">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google Business Profile
              </div>
            </div>

            <article className="ab-review-card" itemScope itemType="https://schema.org/Review">
              <div className="ab-reviewer-meta">
                <div className="ab-reviewer-avatar" aria-hidden="true">و</div>
                <div>
                  <p className="ab-reviewer-name" itemProp="author">د. وفيق حمزة</p>
                  <p className="ab-reviewer-sub">Local Guide · 4 Rezensionen · 3 Fotos</p>
                </div>
              </div>

              <div className="ab-stars" aria-label="تقييم 4 من 5 نجوم" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="4" />
                <meta itemProp="bestRating" content="5" />
                <span className="ab-star" aria-hidden="true">★</span>
                <span className="ab-star" aria-hidden="true">★</span>
                <span className="ab-star" aria-hidden="true">★</span>
                <span className="ab-star" aria-hidden="true">★</span>
                <span className="ab-star-empty" aria-hidden="true">★</span>
              </div>

              <p className="ab-review-text" itemProp="reviewBody">
                عند تجربة ملف الفيزا العلاجية بالوالدة — انصح بيهم ... معاملة جد ممتازة في المواعيد سواء عند العيادة والمستشفي وبوليس الأجانب ... وايضا في تسوية الامور فيما يخص السكن وورقة الإقامة وايضاً مع البنوك ...
                <br /><br />
                تحياتي اخوكم د. وفيق حمزة ليبيا ...
              </p>

              <p className="ab-review-location">ليبيا</p>

              <div className="ab-review-reply" aria-label="رد Medical Care Germany">
                <div className="ab-reply-header">
                  <div className="ab-reply-logo" aria-hidden="true">MCG</div>
                  <div>
                    <p className="ab-reply-brand">Medical Care Germany</p>
                    <p className="ab-reply-role">Inhaber · صاحب العمل</p>
                  </div>
                </div>
                <p className="ab-reply-text">
                  نشكرك د. حمزة على كلماتك الطيبة وثقتك الكبيرة. يسعدنا أن تجربتك معنا في ملف الفيزا العلاجية والتنسيق الطبي كانت إيجابية، ونقدّر إشادتك بدقة المواعيد وجودة المتابعة. نتمنى لكم دوام الصحة والعافية، ونعتز بثقتكم المستمرة.
                </p>
              </div>
            </article>

            <div className="ab-review-cta" aria-label="دعوة لترك تقييم">
              <p className="ab-review-cta-text">
                هل سبق وعملنا معك؟ <strong>تقييمك يساعد عائلات أخرى</strong> على اتخاذ قرارهم بثقة.
              </p>
              <a
                href="https://share.google/a0BstjyJQugEy0OXm"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-btn-review"
                aria-label="اترك تقييمك على Google"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#0C0F14" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#0C0F14" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#0C0F14" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#0C0F14" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                اترك تقييمك
              </a>
            </div>
          </div>
        </section>

        {/* ════ CTA ════ */}
        <section className="ab-cta" aria-labelledby="ab-cta-heading">
          <h2 id="ab-cta-heading">ملفك يستحق متابعة حقيقية</h2>
          <p>أرسل لنا ملخصاً عن حالتك الطبية، وسنردّ عليك خلال 24 ساعة بتقييم صادق — بدون التزامات.</p>
          <div className="ab-cta-buttons">
            <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" className="ab-btn-primary">أرسل ملفك الآن</a>
            <a href="https://wa.me/4915781497451" target="_blank" rel="noopener noreferrer" className="ab-btn-secondary">تحدث معنا عبر واتساب</a>
          </div>
        </section>

        <ArabicFooterGuide />
      </div>
    </>
  );
}
