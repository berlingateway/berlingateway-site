import { useEffect, useState } from "react";
import HreflangTags from "@/components/HreflangTags";
import SmartNavLayer from "@/components/SmartNavLayer";

/* ─────────────────────────────────────────────────────────────────
   About Us — English  (/about)
   Source: about-en.html  |  Canonical: https://medicalcaregermany.com/about
   Hreflang: ar → /ar/about | de → /de/ueber-uns | en → /about | x-default → /about
───────────────────────────────────────────────────────────────── */

export default function About() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  /* ── Meta & Schema ── */
  useEffect(() => {
    document.title =
      "About Us | Medical Care Germany — Berlin-Based Medical Coordination Since 2012";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        (el as HTMLMetaElement).name = name;
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Medical Care Germany provides specialized medical coordination for international patients seeking diagnosis, treatment, and second opinions at leading German hospitals. Berlin-based since 2012."
    );
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setOg("og:type", "website");
    setOg("og:url", "https://medicalcaregermany.com/about");
    setOg("og:title", "About Us | Medical Care Germany — Berlin Since 2012");
    setOg("og:description", "Specialized medical coordination for international patients at leading German hospitals. Berlin-based since 2012.");
    setOg("og:image", "https://medicalcaregermany.com/og-image.jpg");
    setOg("og:site_name", "Medical Care Germany");
    setOg("og:locale", "en_US");

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

    injectSchema("schema-about-en-org", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Medical Care Germany",
      url: "https://medicalcaregermany.com/",
      description:
        "Berlin-based medical coordination service for international patients seeking treatment at German hospitals. Operating since 2012.",
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
      areaServed: "Worldwide",
      knowsLanguage: ["ar", "de", "en"],
    });

    injectSchema("schema-about-en-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Are you a hospital?", acceptedAnswer: { "@type": "Answer", text: "No. Medical Care Germany is a medical coordination service. We are not a hospital, a clinic, or an emergency provider. We coordinate access, communication, and patient support with the appropriate German medical institutions." } },
        { "@type": "Question", name: "Do I need a complete medical file before contacting you?", acceptedAnswer: { "@type": "Answer", text: "A short summary of the diagnosis or current medical situation is sufficient to begin. We will advise on what additional documentation is needed for a proper clinical review." } },
        { "@type": "Question", name: "Can you help with Charité or other Berlin hospitals?", acceptedAnswer: { "@type": "Answer", text: "We work with hospitals and medical departments depending on the case and the medical indication. The selection of the appropriate institution is determined as part of our coordination process — not in advance of reviewing the file." } },
        { "@type": "Question", name: "How long does the initial review take?", acceptedAnswer: { "@type": "Answer", text: "We aim to respond within 24 hours of receiving the submitted documents with an initial assessment and a clear position on next steps." } },
        { "@type": "Question", name: "Do you help with medical visa documents?", acceptedAnswer: { "@type": "Answer", text: "Yes. We prepare the hospital invitation letter and support the documentation process required for the German embassy medical visa application." } },
        { "@type": "Question", name: "Do you provide Arabic interpretation during medical appointments in Germany?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our bilingual team accompanies patients at clinical appointments in Berlin and provides accurate Arabic-German medical interpretation — in the consultation room, not only in writing." } },
      ],
    });

    return () => {
      document.getElementById("schema-about-en-org")?.remove();
      document.getElementById("schema-about-en-faq")?.remove();
    };
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".about-en .reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: string) =>
    setOpenFaq((prev) => (prev === id ? null : id));

  /* ── WhatsApp SVG ── */
  const WaSvg = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.555 4.11 1.528 5.833L0 24l6.344-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-4.99-1.366l-.358-.213-3.765.893.952-3.659-.234-.376A9.79 9.79 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
    </svg>
  );

  const PlusIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0, width: 18, height: 18, fill: "var(--aen-gold)", transition: "transform .25s" }}>
      <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );

  return (
    <>
      <HreflangTags currentPath="/about" />
      <SmartNavLayer currentPath="/about" />

      <style>{`
        .about-en {
          --aen-navy:       #0A1628;
          --aen-navy-mid:   #112240;
          --aen-gold:       #C8A96E;
          --aen-gold-light: #DFC28E;
          --aen-gold-bg:    #FBF7F0;
          --aen-gold-bdr:   #E8D9B8;
          --aen-wa:         #25D366;
          --aen-wa-dark:    #1DA851;
          --aen-white:      #FFFFFF;
          --aen-off:        #F8F9FB;
          --aen-text:       #1A1A2E;
          --aen-mid:        #4A5568;
          --aen-light:      #718096;
          --aen-border:     #E2E8F0;
          --aen-shadow:     0 1px 4px rgba(0,0,0,.06);
          --aen-radius:     6px;
          font-family: 'Inter', sans-serif;
          background: var(--aen-white);
          color: var(--aen-text);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .about-en a { color: inherit; text-decoration: none; }
        .about-en ul { list-style: none; padding: 0; margin: 0; }

        /* Hero */
        .aen-hero {
          background: var(--aen-navy);
          padding: 8.5rem 2.5rem 5.5rem;
          position: relative; overflow: hidden;
        }
        .aen-hero::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,169,110,.07), transparent 70%);
          pointer-events: none;
        }
        .aen-hero-inner { max-width: 800px; position: relative; z-index: 1; }
        .aen-badge {
          display: inline-block;
          font-size: .68rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
          color: var(--aen-gold); border: 1px solid rgba(200,169,110,.3);
          padding: .35rem .9rem; border-radius: 2px; margin-bottom: 1.75rem;
        }
        .aen-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 700;
          color: var(--aen-white); line-height: 1.25; margin-bottom: 1.25rem;
        }
        .aen-hero h1 span { color: var(--aen-gold); }
        .aen-hero-sub {
          font-size: 1.05rem; color: rgba(255,255,255,.6);
          max-width: 600px; margin-bottom: 2.25rem; line-height: 1.85;
        }
        .aen-hero-cta { display: flex; gap: .9rem; flex-wrap: wrap; }
        .aen-btn-wa {
          display: inline-flex; align-items: center; gap: .55rem;
          background: var(--aen-wa); color: #fff;
          font-size: .92rem; font-weight: 700;
          padding: .85rem 1.75rem; border-radius: 3px; transition: background .18s;
        }
        .aen-btn-wa:hover { background: var(--aen-wa-dark); }
        .aen-btn-outline {
          display: inline-flex; align-items: center; gap: .55rem;
          border: 1px solid rgba(200,169,110,.5); color: var(--aen-gold-light);
          font-size: .92rem; font-weight: 600;
          padding: .85rem 1.75rem; border-radius: 3px;
          transition: border-color .18s, color .18s;
        }
        .aen-btn-outline:hover { border-color: var(--aen-gold); color: var(--aen-gold); }

        /* Trust strip */
        .aen-trust-strip { background: var(--aen-navy-mid); border-bottom: 1px solid rgba(200,169,110,.15); }
        .aen-trust-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); }
        .aen-trust-cell { padding: 1.6rem 1.5rem; text-align: center; border-right: 1px solid rgba(255,255,255,.07); }
        .aen-trust-cell:last-child { border-right: none; }
        .aen-trust-num { font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 700; color: var(--aen-gold); line-height: 1; margin-bottom: .3rem; }
        .aen-trust-label { font-size: .78rem; font-weight: 600; color: rgba(255,255,255,.55); line-height: 1.4; }

        /* Gold divider */
        .aen-gold-divider { height: 3px; background: linear-gradient(to right, transparent, var(--aen-gold), transparent); opacity: .25; }

        /* Sections */
        .aen-section { padding: 5rem 2.5rem; }
        .aen-section.aen-alt { background: var(--aen-off); }
        .aen-wrap { max-width: 1100px; margin: 0 auto; }
        .aen-label { font-size: .7rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--aen-gold); margin-bottom: .75rem; }
        .aen-title { font-family: 'Playfair Display', serif; font-size: clamp(1.5rem, 2.5vw, 2.1rem); font-weight: 700; color: var(--aen-navy); line-height: 1.3; margin-bottom: 1.25rem; }
        .aen-body { font-size: .98rem; color: var(--aen-mid); line-height: 1.9; max-width: 680px; }
        .aen-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }

        /* Cards */
        .aen-cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin-top: 2.5rem; }
        .aen-card { background: var(--aen-white); border: 1px solid var(--aen-border); border-radius: var(--aen-radius); padding: 1.75rem; box-shadow: var(--aen-shadow); }
        .aen-card-icon { width: 38px; height: 38px; background: var(--aen-gold-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .aen-card-icon svg { width: 18px; height: 18px; fill: var(--aen-gold); }
        .aen-card-title { font-size: .92rem; font-weight: 700; color: var(--aen-navy); margin-bottom: .5rem; }
        .aen-card-desc { font-size: .84rem; color: var(--aen-light); line-height: 1.75; }

        /* Inst note */
        .aen-inst-note { margin-top: 2.25rem; padding: 1.5rem 1.75rem; background: var(--aen-gold-bg); border: 1px solid var(--aen-gold-bdr); border-left: 4px solid var(--aen-gold); border-radius: var(--aen-radius); max-width: 760px; }
        .aen-inst-note p { font-size: .88rem; color: var(--aen-mid); line-height: 1.8; }

        /* Steps */
        .aen-steps { display: flex; flex-direction: column; margin-top: 2.5rem; }
        .aen-step { display: flex; gap: 1.5rem; padding: 1.6rem 0; border-bottom: 1px solid var(--aen-border); }
        .aen-step:last-child { border-bottom: none; }
        .aen-step-num { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: var(--aen-gold); min-width: 2.2rem; line-height: 1; padding-top: .15rem; }
        .aen-step-title { font-size: .95rem; font-weight: 700; color: var(--aen-navy); margin-bottom: .3rem; }
        .aen-step-desc { font-size: .84rem; color: var(--aen-light); line-height: 1.75; }

        /* Trust bullets */
        .aen-trust-bullets { display: flex; flex-direction: column; gap: .75rem; margin-top: 2rem; max-width: 640px; }
        .aen-bullet-item { display: flex; align-items: flex-start; gap: .9rem; padding: 1.1rem 1.25rem; background: var(--aen-white); border: 1px solid var(--aen-border); border-radius: var(--aen-radius); box-shadow: var(--aen-shadow); }
        .aen-bullet-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--aen-gold); flex-shrink: 0; margin-top: .45rem; }
        .aen-bullet-item p { font-size: .9rem; color: var(--aen-mid); line-height: 1.7; }
        .aen-bullet-item strong { color: var(--aen-navy); font-weight: 700; }

        /* Team */
        .aen-team-list { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2.25rem; max-width: 760px; }
        .aen-team-item { display: flex; align-items: flex-start; gap: .9rem; background: var(--aen-white); border: 1px solid var(--aen-border); border-radius: var(--aen-radius); padding: 1.25rem 1.4rem; box-shadow: var(--aen-shadow); }
        .aen-team-bullet { width: 8px; height: 8px; border-radius: 50%; background: var(--aen-gold); flex-shrink: 0; margin-top: .55rem; }
        .aen-team-text { font-size: .9rem; color: var(--aen-mid); line-height: 1.7; }
        .aen-team-text strong { color: var(--aen-navy); font-weight: 700; }

        /* Review */
        .aen-review-wrap { max-width: 680px; margin-top: 2.5rem; }
        .aen-review-card { background: var(--aen-white); border: 1px solid var(--aen-border); border-left: 4px solid var(--aen-gold); border-radius: var(--aen-radius); padding: 2rem 2.25rem; box-shadow: var(--aen-shadow); }
        .aen-review-text { font-size: .97rem; color: var(--aen-mid); line-height: 1.85; margin-bottom: 1.25rem; font-style: italic; }
        .aen-review-source { font-size: .78rem; font-weight: 700; color: var(--aen-light); letter-spacing: .06em; text-transform: uppercase; }
        .aen-review-cta { margin-top: 1.1rem; font-size: .83rem; color: var(--aen-light); }
        .aen-review-cta a { color: var(--aen-gold); font-weight: 600; border-bottom: 1px solid var(--aen-gold-bdr); transition: color .15s; }
        .aen-review-cta a:hover { color: var(--aen-navy); }

        /* FAQ */
        .aen-faq-list { display: flex; flex-direction: column; gap: .75rem; margin-top: 2.25rem; max-width: 800px; }
        .aen-faq-item { background: var(--aen-white); border: 1px solid var(--aen-border); border-radius: var(--aen-radius); overflow: hidden; }
        .aen-faq-q { display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 1.5rem; font-size: .93rem; font-weight: 700; color: var(--aen-navy); cursor: pointer; gap: 1rem; background: transparent; border: none; width: 100%; text-align: left; }
        .aen-faq-q.open svg { transform: rotate(45deg); }
        .aen-faq-a { max-height: 0; overflow: hidden; transition: max-height .35s ease, padding .25s; font-size: .88rem; color: var(--aen-mid); line-height: 1.8; padding: 0 1.5rem; }
        .aen-faq-a.open { max-height: 300px; padding: 0 1.5rem 1.25rem; }

        /* CTA */
        .aen-cta { background: var(--aen-navy); padding: 5rem 2.5rem; text-align: center; }
        .aen-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 700; color: var(--aen-white); margin-bottom: .9rem; }
        .aen-cta p { font-size: .98rem; color: rgba(255,255,255,.6); max-width: 540px; margin: 0 auto 2.25rem; line-height: 1.85; }
        .aen-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .aen-btn-wa-lg { display: inline-flex; align-items: center; gap: .6rem; background: var(--aen-wa); color: #fff; font-size: .95rem; font-weight: 700; padding: .95rem 2rem; border-radius: 3px; transition: background .18s; }
        .aen-btn-wa-lg:hover { background: var(--aen-wa-dark); }
        .aen-btn-email { display: inline-flex; align-items: center; gap: .6rem; border: 1px solid rgba(200,169,110,.45); color: var(--aen-gold-light); font-size: .95rem; font-weight: 600; padding: .95rem 2rem; border-radius: 3px; transition: border-color .18s, color .18s; }
        .aen-btn-email:hover { border-color: var(--aen-gold); color: var(--aen-gold); }

        /* Footer */
        .aen-footer { background: #070E1C; border-top: 1px solid rgba(255,255,255,.06); padding: 2rem 2.5rem; }
        .aen-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; font-size: .76rem; color: rgba(255,255,255,.3); }
        .aen-footer-links { display: flex; gap: 1.5rem; list-style: none; padding: 0; }
        .aen-footer-links a { color: rgba(255,255,255,.3); transition: color .15s; }
        .aen-footer-links a:hover { color: var(--aen-gold); }

        /* Reveal */
        @media (prefers-reduced-motion: no-preference) {
          .about-en .reveal { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; }
          .about-en .reveal.visible { opacity: 1; transform: none; }
        }

        /* Responsive */
        @media (max-width: 1024px) { .aen-cards-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 768px) {
          .aen-hero { padding: 7rem 1.25rem 4rem; }
          .aen-trust-inner { grid-template-columns: repeat(2,1fr); }
          .aen-trust-cell:nth-child(2) { border-right: none; }
          .aen-trust-cell:nth-child(3), .aen-trust-cell:nth-child(4) { border-top: 1px solid rgba(255,255,255,.07); }
          .aen-trust-cell:nth-child(4) { border-right: none; }
          .aen-section { padding: 3.5rem 1.25rem; }
          .aen-two-col { grid-template-columns: 1fr; gap: 2.5rem; }
          .aen-cards-grid { grid-template-columns: 1fr; }
          .aen-team-list { grid-template-columns: 1fr; }
          .aen-cta { padding: 3.5rem 1.25rem; }
          .aen-footer-inner { flex-direction: column; gap: 1rem; text-align: center; }
        }
        @media (max-width: 480px) {
          .aen-hero-cta, .aen-cta-btns { flex-direction: column; align-items: flex-start; }
          .aen-cta-btns { align-items: center; }
        }
      `}</style>

      <div className="about-en">

        {/* ═══ HERO ═══════════════════════════════════════════════ */}
        <section className="aen-hero" aria-labelledby="aen-h1">
          <div className="aen-hero-inner">
            <span className="aen-badge">Medical Care Germany · Berlin · Since 2012</span>
            <h1 id="aen-h1">
              We do not sell medical appointments.<br />
              <span>We build the right pathway<br />to treatment in Germany.</span>
            </h1>
            <p className="aen-hero-sub">
              Medical Care Germany provides specialized medical coordination for international patients seeking diagnosis, treatment, and second opinions at leading German hospitals.
            </p>
            <div className="aen-hero-cta">
              <a href="https://wa.me/493025730875" target="_blank" rel="noopener noreferrer" className="aen-btn-wa" aria-label="Start your free consultation on WhatsApp">
                <WaSvg size={18} />
                Start your free consultation
              </a>
              <a href="/how-it-works" className="aen-btn-outline">How the process works</a>
            </div>
          </div>
        </section>

        {/* ═══ TRUST STRIP ════════════════════════════════════════ */}
        <div className="aen-trust-strip" aria-label="Key facts">
          <div className="aen-trust-inner">
            {[
              { num: "2012", label: "Operating since" },
              { num: "500+", label: "complex medical cases coordinated" },
              { num: "20+", label: "Arab and African countries served" },
              { num: "Berlin", label: "based medical coordination" },
            ].map((c) => (
              <div className="aen-trust-cell" key={c.num}>
                <p className="aen-trust-num">{c.num}</p>
                <p className="aen-trust-label">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="aen-gold-divider" />

        {/* ═══ 1 · Why MCG exists ══════════════════════════════════ */}
        <section className="aen-section" aria-labelledby="aen-why">
          <div className="aen-wrap reveal">
            <p className="aen-label">Our purpose</p>
            <h2 className="aen-title" id="aen-why">Why Medical Care Germany exists</h2>
            <div className="aen-two-col">
              <div>
                <p className="aen-body">International patients seeking treatment in Germany often lose critical time before reaching the right specialist. The reasons are consistent: wrong points of contact, incomplete medical files submitted without clinical context, unclear translation of prior diagnoses, and limited understanding of how German hospital referral systems work.</p>
                <br />
                <p className="aen-body">Medical Care Germany was established in Berlin in 2012 to address this gap directly. We operate as a structured coordination layer between the patient and the German medical system — not as a booking platform, but as a clinical liaison with established relationships inside the institutions.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".9rem" }}>
                <div className="aen-card">
                  <p className="aen-card-title">The gap we identified</p>
                  <p className="aen-card-desc">Patients with serious diagnoses arriving in Germany without proper file preparation, institutional contacts, or language support — and losing weeks as a result.</p>
                </div>
                <div className="aen-card">
                  <p className="aen-card-title">What we built</p>
                  <p className="aen-card-desc">A Berlin-based, bilingual medical coordination team that prepares cases correctly, contacts the right departments, and accompanies patients through the full process.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2 · What we actually do ═════════════════════════════ */}
        <section className="aen-section aen-alt" aria-labelledby="aen-what">
          <div className="aen-wrap reveal">
            <p className="aen-label">Our services</p>
            <h2 className="aen-title" id="aen-what">What we actually do</h2>
            <p className="aen-body" style={{ marginBottom: "2rem" }}>We manage everything between the decision to seek treatment in Germany and the patient's return home.</p>
            <div className="aen-cards-grid">
              {[
                { icon: "M20 6h-2.18c.07-.44.18-.86.18-1a3 3 0 00-6 0c0 .14.11.56.18 1H10c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 18H10V8h10v14z", title: "Medical file review", desc: "We review submitted documents and assess clinical completeness before any hospital contact is made." },
                { icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z", title: "Specialist identification", desc: "We identify the appropriate specialist and department based on the clinical indication — not on general hospital rankings." },
                { icon: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z", title: "Hospital communication", desc: "We contact German hospitals and departments in medical German with properly structured clinical summaries." },
                { icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z", title: "Appointments and cost estimates", desc: "We coordinate appointment scheduling and request formal cost estimates from the hospital before patient travel." },
                { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", title: "Visa and travel preparation", desc: "We prepare the hospital invitation letter and support documentation for the medical visa application at the German embassy." },
                { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z", title: "In-Germany accompaniment", desc: "We accompany patients at clinical appointments, provide Arabic-German interpretation, and manage logistics throughout the stay." },
              ].map((c, i) => (
                <div className="aen-card" key={i}>
                  <div className="aen-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={c.icon} /></svg></div>
                  <p className="aen-card-title">{c.title}</p>
                  <p className="aen-card-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 3 · Why Berlin ══════════════════════════════════════ */}
        <section className="aen-section" aria-labelledby="aen-berlin">
          <div className="aen-wrap reveal">
            <p className="aen-label">Location</p>
            <h2 className="aen-title" id="aen-berlin">Why Berlin</h2>
            <div className="aen-two-col">
              <div>
                <p className="aen-body">Berlin is home to a concentration of university hospitals and specialized medical centers that cover a broad range of complex indications — including Charité, Vivantes, DRK Kliniken, Sana, UKB, and Immanuel, among others.</p>
                <br />
                <p className="aen-body">We work with hospitals and medical departments depending on the case and the medical indication. Our team is physically present in Berlin, which allows for direct departmental contact, personal appointment accompaniment, and immediate coordination when the situation requires it.</p>
                <div className="aen-inst-note" style={{ marginTop: "1.75rem" }}>
                  <p>We do not make hospital recommendations independent of clinical context. The appropriate institution for each case is determined as part of our coordination process, based on the specific diagnosis and treatment indication.</p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".9rem" }}>
                <div className="aen-card"><p className="aen-card-title">Charité — Universitätsmedizin Berlin</p><p className="aen-card-desc">One of Europe's largest university hospital systems. International reference center across oncology, neurology, and surgical specialties.</p></div>
                <div className="aen-card"><p className="aen-card-title">Vivantes — Klinikverbund</p><p className="aen-card-desc">Berlin's largest municipal hospital network, covering a broad range of medical and surgical disciplines.</p></div>
                <div className="aen-card"><p className="aen-card-title">Johannesstift Diakonie / Immanuel</p><p className="aen-card-desc">Specialized centers in orthopedics, rehabilitation, and internal medicine with established clinical standards.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4 · How we work ═════════════════════════════════════ */}
        <section className="aen-section aen-alt" aria-labelledby="aen-how">
          <div className="aen-wrap reveal">
            <p className="aen-label">Process</p>
            <h2 className="aen-title" id="aen-how">How we work with you</h2>
            <div className="aen-two-col" style={{ marginBottom: 0 }}>
              <p className="aen-body">Each case follows a defined sequence. There is a named coordinator responsible for your file at every stage, with consistent communication throughout.</p>
              <div />
            </div>
            <div className="aen-steps" role="list" aria-label="Process steps">
              {[
                { num: "01", title: "Submit your medical documents", desc: "Send existing reports, imaging, lab results, and a brief summary of your current diagnosis via WhatsApp or email." },
                { num: "02", title: "Initial medical review within 24 hours", desc: "We assess the file and respond with a clear position: whether we can assist, what is needed, and an indicative timeline." },
                { num: "03", title: "Specialist and hospital selection", desc: "Based on the clinical indication, we identify the appropriate department and contact the relevant specialist or admissions team." },
                { num: "04", title: "Appointment, cost estimate and invitation letter", desc: "We secure the appointment, request a formal cost estimate, and prepare the hospital invitation letter for the visa application." },
                { num: "05", title: "Accompaniment in Germany and follow-up", desc: "We accompany you through all clinical appointments, provide interpretation, and coordinate follow-up documentation until your return." },
              ].map((s) => (
                <div className="aen-step" role="listitem" key={s.num}>
                  <span className="aen-step-num">{s.num}</span>
                  <div><p className="aen-step-title">{s.title}</p><p className="aen-step-desc">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 5 · Why patients trust us ═══════════════════════════ */}
        <section className="aen-section" aria-labelledby="aen-trust">
          <div className="aen-wrap reveal">
            <p className="aen-label">Our approach</p>
            <h2 className="aen-title" id="aen-trust">Why patients trust us</h2>
            <p className="aen-body">Most of our cases come through direct referral — from a physician, or from a family we have previously worked with. The following principles guide how we operate.</p>
            <div className="aen-trust-bullets" role="list">
              {[
                { strong: "We are based in Berlin.", rest: " Our team is present at the hospitals we work with — not coordinating remotely from another country." },
                { strong: "We understand both sides.", rest: " We know how Arabic-speaking patients communicate their situation, and how the German medical system receives and processes clinical information." },
                { strong: "We do not forward files without preparation.", rest: " Every file we submit to a hospital is clinically structured and accompanied by the appropriate context." },
                { strong: "We explain clearly.", rest: " Risks, options, costs, and timelines are communicated directly — in Arabic, without ambiguity." },
                { strong: "We stay involved after the appointment.", rest: " Our coordination does not end when the patient leaves the clinic. We follow up until the case is properly closed." },
              ].map((b, i) => (
                <div className="aen-bullet-item" role="listitem" key={i}>
                  <div className="aen-bullet-dot" aria-hidden="true" />
                  <p><strong>{b.strong}</strong>{b.rest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 6 · Who stands behind MCG ══════════════════════════ */}
        <section className="aen-section aen-alt" aria-labelledby="aen-team">
          <div className="aen-wrap reveal">
            <p className="aen-label">The organization</p>
            <h2 className="aen-title" id="aen-team">Who stands behind Medical Care Germany</h2>
            <p className="aen-body">Medical Care Germany is operated by a Berlin-based Arabic-German medical coordination team with experience in complex international patient cases since 2012. We are not a hospital and not an emergency provider. We coordinate access, communication, and patient support with the appropriate medical providers.</p>
            <div className="aen-team-list" role="list" style={{ marginTop: "2rem" }}>
              {[
                { strong: "Berlin-based since 2012", rest: " — direct institutional presence, not remote facilitation." },
                { strong: "Arabic-German bilingual team", rest: " — operating across Arabic, German, and English without external intermediaries." },
                { strong: "Complex case experience", rest: " — specialized in files requiring precise clinical assessment and direct physician contact." },
                { strong: "Direct hospital relationships", rest: " — we communicate with medical departments directly, not through general booking portals." },
                { strong: "Named case coordinator", rest: " — each file has one responsible contact person for the full duration of the treatment process." },
              ].map((t, i) => (
                <div className="aen-team-item" role="listitem" key={i}>
                  <div className="aen-team-bullet" aria-hidden="true" />
                  <p className="aen-team-text"><strong>{t.strong}</strong>{t.rest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 7 · Patient review ══════════════════════════════════ */}
        <section className="aen-section" aria-labelledby="aen-review">
          <div className="aen-wrap reveal">
            <p className="aen-label">Patient feedback</p>
            <h2 className="aen-title" id="aen-review">What patients say</h2>
            <p className="aen-body">The majority of our cases arrive through personal recommendation. The following reflects a direct patient experience.</p>
            <div className="aen-review-wrap">
              <div className="aen-review-card">
                <p className="aen-review-text">"Professional support from the first contact until the medical appointments in Germany. The team helped with hospital coordination, visa-related steps, accommodation and communication with the treating doctors. A reliable point of contact throughout the entire process."</p>
                <p className="aen-review-source">Patient family — Libya · Google Business Profile</p>
              </div>
              <p className="aen-review-cta">
                Have you worked with us?{" "}
                <a href="https://share.google/a0BstjyJQugEy0OXm" target="_blank" rel="noopener noreferrer">Leave a review on Google</a>
                {" "}— it helps other families make an informed decision.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 8 · FAQ ═════════════════════════════════════════════ */}
        <section className="aen-section aen-alt" aria-labelledby="aen-faq">
          <div className="aen-wrap reveal">
            <p className="aen-label">Frequently asked questions</p>
            <h2 className="aen-title" id="aen-faq">What patients ask us</h2>
            <div className="aen-faq-list" role="list">
              {[
                { id: "aen-faq1", q: "Are you a hospital?", a: "No. Medical Care Germany is a medical coordination service. We are not a hospital, a clinic, or an emergency provider. We coordinate access, communication, and patient support with the appropriate German medical institutions." },
                { id: "aen-faq2", q: "Do I need a complete medical file before contacting you?", a: "A short summary of the diagnosis or current medical situation is sufficient to begin. We will advise on what additional documentation is needed for a proper clinical review." },
                { id: "aen-faq3", q: "Can you help with Charité or other Berlin hospitals?", a: "We work with hospitals and medical departments depending on the case and the medical indication. The selection of the appropriate institution is determined as part of our coordination process — not in advance of reviewing the file." },
                { id: "aen-faq4", q: "How long does the initial review take?", a: "We aim to respond within 24 hours of receiving the submitted documents with an initial assessment and a clear position on next steps." },
                { id: "aen-faq5", q: "Do you help with medical visa documents?", a: "Yes. We prepare the hospital invitation letter and support the documentation process required for the German embassy medical visa application." },
                { id: "aen-faq6", q: "Do you provide Arabic interpretation during medical appointments in Germany?", a: "Yes. Our bilingual team accompanies patients at clinical appointments in Berlin and provides accurate Arabic-German medical interpretation — in the consultation room, not only in writing." },
              ].map((f) => {
                const isOpen = openFaq === f.id;
                return (
                  <div className="aen-faq-item" role="listitem" key={f.id}>
                    <button className={`aen-faq-q${isOpen ? " open" : ""}`} aria-expanded={isOpen} aria-controls={f.id} onClick={() => toggleFaq(f.id)}>
                      {f.q}
                      <PlusIcon />
                    </button>
                    <div id={f.id} className={`aen-faq-a${isOpen ? " open" : ""}`}>{f.a}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 9 · CTA ═════════════════════════════════════════════ */}
        <section className="aen-cta" aria-labelledby="aen-cta-h">
          <h2 id="aen-cta-h">Your medical case deserves structured coordination.</h2>
          <p>Send us your medical documents or a short summary of your case. Our Berlin team will review your request and guide you on the next step.</p>
          <div className="aen-cta-btns">
            <a href="https://wa.me/493025730875" target="_blank" rel="noopener noreferrer" className="aen-btn-wa-lg" aria-label="Contact us via WhatsApp">
              <WaSvg size={20} />
              WhatsApp
            </a>
            <a href="mailto:info@medicalcaregermany.com" className="aen-btn-email">info@medicalcaregermany.com</a>
          </div>
        </section>

        {/* ═══ FOOTER ══════════════════════════════════════════════ */}
        <footer className="aen-footer" role="contentinfo">
          <div className="aen-footer-inner">
            <span>© 2024 Medical Care Germany · Perleberger Str. 41 · Berlin · +49 30 25730875</span>
            <ul className="aen-footer-links">
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/ar/about">عربي</a></li>
              <li><a href="/de/ueber-uns">Deutsch</a></li>
            </ul>
          </div>
        </footer>

      </div>
    </>
  );
}
