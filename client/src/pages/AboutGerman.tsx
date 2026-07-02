import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   Über uns — Deutsch  (/de/ueber-uns)
   Source: ueber-uns-de.html  |  Canonical: https://medicalcaregermany.com/de/ueber-uns
   Hreflang: ar → /ar/about | de → /de/ueber-uns | en → /about | x-default → /about
───────────────────────────────────────────────────────────────── */

export default function AboutGerman() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  /* ── Meta & Schema ── */
  useEffect(() => {
    document.title = "Über uns | Medical Care Germany — Berlin seit 2012";

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

    setMeta("description", "Medical Care Germany — spezialisierte medizinische Koordination für arabischsprachige Patienten in Deutschland seit 2012. Unser Berliner Team begleitet Sie vom ersten Kontakt bis zur Heimreise.");
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setOg("og:type", "website");
    setOg("og:url", "https://medicalcaregermany.com/de/ueber-uns");
    setOg("og:title", "Über uns | Medical Care Germany — Berlin seit 2012");
    setOg("og:description", "Spezialisierte medizinische Koordination für arabischsprachige Patienten seit 2012. Unser Berliner Team begleitet Sie vom ersten Kontakt bis zur Heimreise.");
    setOg("og:image", "https://medicalcaregermany.com/og-image.jpg");
    setOg("og:site_name", "Medical Care Germany");
    setOg("og:locale", "de_DE");

    /* Canonical */
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://medicalcaregermany.com/de/ueber-uns");

    /* Hreflang */
    const hreflangs: [string, string][] = [
      ["ar", "https://medicalcaregermany.com/ar/about"],
      ["de", "https://medicalcaregermany.com/de/ueber-uns"],
      ["en", "https://medicalcaregermany.com/about"],
      ["x-default", "https://medicalcaregermany.com/about"],
    ];
    hreflangs.forEach(([lang, href]) => {
      const id = `hl-de-${lang}`;
      let el = document.getElementById(id) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link") as HTMLLinkElement;
        el.id = id;
        el.rel = "alternate";
        document.head.appendChild(el);
      }
      el.setAttribute("hreflang", lang);
      el.setAttribute("href", href);
    });

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

    injectSchema("schema-de-medical", {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Medical Care Germany",
      url: "https://medicalcaregermany.com/",
      description: "Spezialisierte medizinische Koordination für arabischsprachige Patienten in Deutschland seit 2012",
      foundingDate: "2012",
      address: { "@type": "PostalAddress", streetAddress: "Perleberger Str. 41", addressLocality: "Berlin", postalCode: "10559", addressCountry: "DE" },
      telephone: "+493025730875",
      email: "info@medicalcaregermany.com",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4", reviewCount: "1", bestRating: "5", worstRating: "1" },
    });

    injectSchema("schema-de-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Sind Ihre Leistungen kostenlos?", acceptedAnswer: { "@type": "Answer", text: "Wir arbeiten mit Koordinationsgebühren, die je nach Umfang der Akte individuell festgelegt werden. Die Erstberatung und Aktenprüfung sind kostenlos." } },
        { "@type": "Question", name: "Wie lange dauert es, einen Termin zu bekommen?", acceptedAnswer: { "@type": "Answer", text: "Das hängt vom Fachgebiet und der Dringlichkeit ab. In der Regel können wir innerhalb von zwei bis vier Wochen nach Eingang der Unterlagen einen ersten Kliniktermin koordinieren." } },
        { "@type": "Question", name: "Helfen Sie bei der Beantragung des medizinischen Visums?", acceptedAnswer: { "@type": "Answer", text: "Ja. Wir erstellen das Einladungsschreiben des Krankenhauses, helfen bei der Dokumentation für die Botschaft und begleiten bei der Ausländerbehörde nach der Ankunft." } },
        { "@type": "Question", name: "Gibt es während des Aufenthalts arabischsprachige Begleitung?", acceptedAnswer: { "@type": "Answer", text: "Ja. Unser Team kommuniziert während der gesamten Behandlungsreise auf Arabisch — in der Klinik und außerhalb — mit Ihnen und Ihren Angehörigen." } },
        { "@type": "Question", name: "Auf welche Krankheitsbilder sind Sie spezialisiert?", acceptedAnswer: { "@type": "Answer", text: "Wir bearbeiten ein breites Spektrum: Onkologie, Kardiologie, Orthopädie, Neurologie und weitere Fachgebiete. Jede Akte wird einzeln bewertet und dem passenden Spezialisten zugewiesen." } },
        { "@type": "Question", name: "Betreuen Sie Patienten aus allen arabischen Ländern?", acceptedAnswer: { "@type": "Answer", text: "Ja. Wir betreuen Patienten aus mehr als zwanzig arabischen und afrikanischen Ländern — Libyen, Algerien, Irak, Saudi-Arabien, Jemen, Tunesien und weitere." } },
      ],
    });

    return () => {
      document.getElementById("schema-de-medical")?.remove();
      document.getElementById("schema-de-faq")?.remove();
      hreflangs.forEach(([lang]) => document.getElementById(`hl-de-${lang}`)?.remove());
    };
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".about-de .reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: string) => setOpenFaq((prev) => (prev === id ? null : id));

  const WaSvg = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.555 4.11 1.528 5.833L0 24l6.344-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-4.99-1.366l-.358-.213-3.765.893.952-3.659-.234-.376A9.79 9.79 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
    </svg>
  );

  return (
    <>
      <style>{`
        .about-de {
          --ade-navy:      #0A1628;
          --ade-navy-mid:  #112240;
          --ade-gold:      #C8A96E;
          --ade-gold-l:    #DFC28E;
          --ade-gold-bg:   #FBF7F0;
          --ade-gold-bdr:  #E8D9B8;
          --ade-wa:        #25D366;
          --ade-wa-dark:   #1DA851;
          --ade-white:     #FFFFFF;
          --ade-off:       #F8F9FB;
          --ade-text:      #1A1A2E;
          --ade-mid:       #4A5568;
          --ade-light:     #718096;
          --ade-border:    #E2E8F0;
          --ade-shadow:    0 1px 4px rgba(0,0,0,.06);
          --ade-radius:    6px;
          font-family: 'Inter', sans-serif;
          background: var(--ade-white);
          color: var(--ade-text);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .about-de a { color: inherit; text-decoration: none; }
        .about-de ul { list-style: none; padding: 0; margin: 0; }

        /* Nav */
        .ade-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          background: var(--ade-navy);
          border-bottom: 1px solid rgba(200,169,110,.2);
          display: flex; align-items: center; justify-content: space-between;
          padding: .9rem 2.5rem;
        }
        .ade-nav-brand { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--ade-gold-l); letter-spacing: .02em; }
        .ade-nav-links { display: flex; gap: 1.75rem; }
        .ade-nav-links a { font-size: .82rem; font-weight: 600; color: rgba(255,255,255,.6); transition: color .18s; }
        .ade-nav-links a:hover, .ade-nav-links a[aria-current] { color: var(--ade-gold); }
        .ade-nav-wa { display: flex; align-items: center; gap: .45rem; background: var(--ade-wa); color: #fff; font-size: .78rem; font-weight: 700; padding: .5rem 1rem; border-radius: 3px; transition: background .18s; }
        .ade-nav-wa:hover { background: var(--ade-wa-dark); }

        /* Hero */
        .ade-hero { background: var(--ade-navy); padding: 8.5rem 2.5rem 5.5rem; position: relative; overflow: hidden; }
        .ade-hero::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,169,110,.07), transparent 70%); pointer-events: none; }
        .ade-hero-inner { max-width: 760px; position: relative; z-index: 1; }
        .ade-eyebrow { display: inline-flex; align-items: center; gap: .6rem; font-size: .72rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--ade-gold); margin-bottom: 1.5rem; }
        .ade-eyebrow::after { content: ''; display: block; width: 24px; height: 1px; background: var(--ade-gold); }
        .ade-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 700; color: var(--ade-white); line-height: 1.3; margin-bottom: 1.25rem; }
        .ade-hero h1 span { color: var(--ade-gold); }
        .ade-hero-sub { font-size: 1rem; color: rgba(255,255,255,.65); max-width: 560px; margin-bottom: 2.25rem; line-height: 1.85; }
        .ade-hero-cta { display: flex; gap: .9rem; flex-wrap: wrap; }
        .ade-btn-wa { display: inline-flex; align-items: center; gap: .55rem; background: var(--ade-wa); color: #fff; font-size: .92rem; font-weight: 700; padding: .85rem 1.75rem; border-radius: 3px; transition: background .18s; }
        .ade-btn-wa:hover { background: var(--ade-wa-dark); }
        .ade-btn-outline { display: inline-flex; align-items: center; gap: .55rem; border: 1px solid rgba(200,169,110,.5); color: var(--ade-gold-l); font-size: .92rem; font-weight: 600; padding: .85rem 1.75rem; border-radius: 3px; transition: border-color .18s, color .18s; }
        .ade-btn-outline:hover { border-color: var(--ade-gold); color: var(--ade-gold); }

        /* Trust strip */
        .ade-trust-strip { background: var(--ade-navy-mid); border-bottom: 1px solid rgba(200,169,110,.15); }
        .ade-trust-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); }
        .ade-trust-cell { padding: 1.6rem 1.5rem; text-align: center; border-right: 1px solid rgba(255,255,255,.07); }
        .ade-trust-cell:last-child { border-right: none; }
        .ade-trust-num { font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 700; color: var(--ade-gold); line-height: 1; margin-bottom: .3rem; }
        .ade-trust-label { font-size: .78rem; font-weight: 600; color: rgba(255,255,255,.55); line-height: 1.4; }

        /* Gold divider */
        .ade-gold-divider { height: 3px; background: linear-gradient(to right, transparent, var(--ade-gold), transparent); opacity: .25; }

        /* Sections */
        .ade-section { padding: 5rem 2.5rem; }
        .ade-section.ade-alt { background: var(--ade-off); }
        .ade-wrap { max-width: 1100px; margin: 0 auto; }
        .ade-label { font-size: .7rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--ade-gold); margin-bottom: .75rem; }
        .ade-title { font-family: 'Playfair Display', serif; font-size: clamp(1.5rem, 2.5vw, 2.1rem); font-weight: 700; color: var(--ade-navy); line-height: 1.3; margin-bottom: 1.25rem; }
        .ade-body { font-size: .98rem; color: var(--ade-mid); line-height: 1.9; max-width: 680px; }
        .ade-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }

        /* Cards */
        .ade-cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin-top: 2.5rem; }
        .ade-card { background: var(--ade-white); border: 1px solid var(--ade-border); border-radius: var(--ade-radius); padding: 1.75rem; box-shadow: var(--ade-shadow); }
        .ade-card-icon { width: 38px; height: 38px; background: var(--ade-gold-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .ade-card-icon svg { width: 18px; height: 18px; fill: var(--ade-gold); }
        .ade-card-title { font-size: .92rem; font-weight: 700; color: var(--ade-navy); margin-bottom: .5rem; }
        .ade-card-desc { font-size: .84rem; color: var(--ade-light); line-height: 1.75; }

        /* Steps */
        .ade-steps { display: flex; flex-direction: column; gap: 0; margin-top: 2.5rem; }
        .ade-step { display: flex; gap: 1.5rem; padding: 1.6rem 0; border-bottom: 1px solid var(--ade-border); }
        .ade-step:last-child { border-bottom: none; }
        .ade-step-num { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: var(--ade-gold); min-width: 2.2rem; line-height: 1; padding-top: .15rem; }
        .ade-step-title { font-size: .95rem; font-weight: 700; color: var(--ade-navy); margin-bottom: .3rem; }
        .ade-step-desc { font-size: .84rem; color: var(--ade-light); line-height: 1.75; }

        /* Review */
        .ade-review-wrap { max-width: 760px; margin-top: 2.5rem; }
        .ade-review-card { background: var(--ade-white); border: 1px solid var(--ade-border); border-left: 4px solid var(--ade-gold); border-radius: var(--ade-radius); padding: 2rem 2.25rem; box-shadow: var(--ade-shadow); }
        .ade-reviewer-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; }
        .ade-reviewer-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--ade-navy); display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 700; color: var(--ade-gold); flex-shrink: 0; font-family: 'Playfair Display', serif; }
        .ade-reviewer-name { font-size: .95rem; font-weight: 700; color: var(--ade-navy); }
        .ade-reviewer-meta { font-size: .75rem; color: var(--ade-light); margin-top: .1rem; }
        .ade-review-text { font-size: .97rem; color: var(--ade-mid); line-height: 1.85; margin-bottom: 1.5rem; font-style: italic; }
        .ade-review-attr { font-size: .78rem; font-weight: 700; color: var(--ade-light); letter-spacing: .04em; }
        .ade-review-reply { margin-top: 1.5rem; background: #F0FAF7; border: 1px solid #B7E4D5; border-radius: 4px; padding: 1.1rem 1.4rem; }
        .ade-reply-brand { font-size: .8rem; font-weight: 700; color: #1A6B50; margin-bottom: .5rem; }
        .ade-reply-text { font-size: .86rem; color: #2D5A47; line-height: 1.75; }
        .ade-review-cta { margin-top: 1.25rem; font-size: .83rem; color: var(--ade-light); }
        .ade-review-cta a { color: var(--ade-gold); font-weight: 600; border-bottom: 1px solid var(--ade-gold-bdr); transition: color .15s; }
        .ade-review-cta a:hover { color: var(--ade-navy); }

        /* Team */
        .ade-team-list { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2.25rem; max-width: 760px; }
        .ade-team-item { display: flex; align-items: flex-start; gap: .9rem; background: var(--ade-white); border: 1px solid var(--ade-border); border-radius: var(--ade-radius); padding: 1.25rem 1.4rem; box-shadow: var(--ade-shadow); }
        .ade-team-bullet { width: 8px; height: 8px; border-radius: 50%; background: var(--ade-gold); flex-shrink: 0; margin-top: .55rem; }
        .ade-team-text { font-size: .9rem; color: var(--ade-mid); line-height: 1.7; }
        .ade-team-text strong { color: var(--ade-navy); font-weight: 700; }

        /* FAQ */
        .ade-faq-list { display: flex; flex-direction: column; gap: .75rem; margin-top: 2.25rem; max-width: 800px; }
        .ade-faq-item { background: var(--ade-white); border: 1px solid var(--ade-border); border-radius: var(--ade-radius); overflow: hidden; }
        .ade-faq-q { display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 1.5rem; font-size: .93rem; font-weight: 700; color: var(--ade-navy); cursor: pointer; gap: 1rem; background: transparent; border: none; width: 100%; text-align: left; }
        .ade-faq-q svg { flex-shrink: 0; width: 18px; height: 18px; fill: var(--ade-gold); transition: transform .25s; }
        .ade-faq-q.open svg { transform: rotate(45deg); }
        .ade-faq-a { max-height: 0; overflow: hidden; transition: max-height .35s ease, padding .25s; font-size: .88rem; color: var(--ade-mid); line-height: 1.8; padding: 0 1.5rem; }
        .ade-faq-a.open { max-height: 300px; padding: 0 1.5rem 1.25rem; }

        /* CTA */
        .ade-cta { background: var(--ade-navy); padding: 5rem 2.5rem; text-align: center; }
        .ade-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 700; color: var(--ade-white); margin-bottom: .9rem; }
        .ade-cta p { font-size: .98rem; color: rgba(255,255,255,.6); max-width: 500px; margin: 0 auto 2.25rem; line-height: 1.85; }
        .ade-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .ade-btn-wa-lg { display: inline-flex; align-items: center; gap: .6rem; background: var(--ade-wa); color: #fff; font-size: .95rem; font-weight: 700; padding: .95rem 2rem; border-radius: 3px; transition: background .18s; }
        .ade-btn-wa-lg:hover { background: var(--ade-wa-dark); }
        .ade-btn-email { display: inline-flex; align-items: center; gap: .6rem; border: 1px solid rgba(200,169,110,.45); color: var(--ade-gold-l); font-size: .95rem; font-weight: 600; padding: .95rem 2rem; border-radius: 3px; transition: border-color .18s, color .18s; }
        .ade-btn-email:hover { border-color: var(--ade-gold); color: var(--ade-gold); }

        /* Footer */
        .ade-footer { background: #070E1C; border-top: 1px solid rgba(255,255,255,.06); padding: 2rem 2.5rem; }
        .ade-footer-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; font-size: .76rem; color: rgba(255,255,255,.3); }
        .ade-footer-links { display: flex; gap: 1.5rem; list-style: none; padding: 0; }
        .ade-footer-links a { color: rgba(255,255,255,.3); transition: color .15s; }
        .ade-footer-links a:hover { color: var(--ade-gold); }

        /* Reveal */
        @media (prefers-reduced-motion: no-preference) {
          .about-de .reveal { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; }
          .about-de .reveal.visible { opacity: 1; transform: none; }
        }

        /* Responsive */
        @media (max-width: 1024px) { .ade-cards-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 768px) {
          .ade-nav-links { display: none; }
          .ade-nav { padding: .9rem 1.25rem; }
          .ade-hero { padding: 7rem 1.25rem 4rem; }
          .ade-trust-inner { grid-template-columns: repeat(2,1fr); }
          .ade-trust-cell:nth-child(2) { border-right: none; }
          .ade-trust-cell:nth-child(3), .ade-trust-cell:nth-child(4) { border-top: 1px solid rgba(255,255,255,.07); }
          .ade-trust-cell:nth-child(4) { border-right: none; }
          .ade-section { padding: 3.5rem 1.25rem; }
          .ade-two-col { grid-template-columns: 1fr; gap: 2.5rem; }
          .ade-cards-grid { grid-template-columns: 1fr; }
          .ade-team-list { grid-template-columns: 1fr; }
          .ade-cta { padding: 3.5rem 1.25rem; }
          .ade-footer-inner { flex-direction: column; gap: 1rem; text-align: center; }
        }
        @media (max-width: 480px) {
          .ade-hero-cta, .ade-cta-btns { flex-direction: column; align-items: flex-start; }
          .ade-cta-btns { align-items: center; }
        }
      `}</style>

      <div className="about-de" lang="de">

        {/* ═══ NAV ════════════════════════════════════════════════ */}
        <nav className="ade-nav" role="navigation" aria-label="Hauptnavigation">
          <a href="/de" className="ade-nav-brand">Medical Care Germany</a>
          <ul className="ade-nav-links">
            <li><a href="/de">Startseite</a></li>
            <li><a href="/de/ueber-uns" aria-current="page">Über uns</a></li>
            <li><a href="/de/fachgebiete">Fachgebiete</a></li>
            <li><a href="/de/ablauf">Ablauf</a></li>
            <li><a href="/de/kontakt">Kontakt</a></li>
          </ul>
          <a href="https://wa.me/493025730875" target="_blank" rel="noopener noreferrer" className="ade-nav-wa" aria-label="Kontakt per WhatsApp">
            <WaSvg size={15} />
            WhatsApp
          </a>
        </nav>

        {/* ═══ HERO ════════════════════════════════════════════════ */}
        <section className="ade-hero" aria-labelledby="ade-h1">
          <div className="ade-hero-inner">
            <p className="ade-eyebrow">Berlin — seit 2012</p>
            <h1 id="ade-h1">
              Wir verkaufen keine Termine.<br />
              <span>Wir bauen den richtigen Weg<br />zur Behandlung in Deutschland.</span>
            </h1>
            <p className="ade-hero-sub">
              Medical Care Germany — spezialisierte medizinische Koordination für arabischsprachige Patienten seit 2012.
              Unser Berliner Team begleitet Sie von der ersten Anfrage bis zur Heimreise.
            </p>
            <div className="ade-hero-cta">
              <a href="https://wa.me/493025730875" target="_blank" rel="noopener noreferrer" className="ade-btn-wa" aria-label="Kostenlose Erstberatung per WhatsApp">
                <WaSvg size={18} />
                Kostenlose Erstberatung
              </a>
              <a href="/de/ablauf" className="ade-btn-outline">Wie läuft der Prozess ab?</a>
            </div>
          </div>
        </section>

        {/* ═══ TRUST STRIP ════════════════════════════════════════ */}
        <div className="ade-trust-strip" aria-label="Vertrauenszahlen">
          <div className="ade-trust-inner">
            {[
              { num: "2012", label: "Tätig seit" },
              { num: "500+", label: "koordinierte Fälle" },
              { num: "20+", label: "arabische und afrikanische Länder" },
              { num: "Berlin", label: "unser fester Standort" },
            ].map((c) => (
              <div className="ade-trust-cell" key={c.num}>
                <p className="ade-trust-num">{c.num}</p>
                <p className="ade-trust-label">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ade-gold-divider" />

        {/* ═══ 1 · Warum MCG ══════════════════════════════════════ */}
        <section className="ade-section" aria-labelledby="ade-why">
          <div className="ade-wrap reveal">
            <p className="ade-label">Unsere Entstehung</p>
            <h2 className="ade-title" id="ade-why">Eine echte Lücke — die wir früher erkannt haben als andere</h2>
            <div className="ade-two-col">
              <div>
                <p className="ade-body">2012 war das Bild eindeutig: Patienten aus Libyen, Algerien, dem Irak und den Golfstaaten kamen allein nach Deutschland. Komplexe Diagnosen, niemand der erklärt was der Arzt gesagt hat. Keine Terminbegleitung, keine Unterstützung bei Behörden, kein direkter Draht zu den medizinischen Abteilungen.</p>
                <br />
                <p className="ade-body">Medical Care Germany haben wir nicht als Buchungsdienst aufgebaut — sondern als echten medizinischen Partner, der das deutsche System von innen kennt und die Verantwortung für eine Akte von Anfang bis Ende trägt.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".9rem" }}>
                <div className="ade-card">
                  <p className="ade-card-title">Das Problem, das wir sahen</p>
                  <p className="ade-card-desc">Patienten mit komplexen Fällen verloren sich in der deutschen Bürokratie — ohne verlässliche Anlaufstelle, die ihre Sprache sprach und das System kannte.</p>
                </div>
                <div className="ade-card">
                  <p className="ade-card-title">Die Lösung, die wir aufgebaut haben</p>
                  <p className="ade-card-desc">Ein zweisprachiges Berliner Team, das direkt im System sitzt — verhandelt, begleitet, übersetzt und Probleme löst, bevor sie den Patienten erreichen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2 · Was wir tun ════════════════════════════════════ */}
        <section className="ade-section ade-alt" aria-labelledby="ade-what">
          <div className="ade-wrap reveal">
            <p className="ade-label">Unsere Leistungen</p>
            <h2 className="ade-title" id="ade-what">Mehr als Terminkoordination</h2>
            <p className="ade-body" style={{ marginBottom: "2rem" }}>Wir übernehmen alles zwischen der Entscheidung zur Behandlung und der Rückreise.</p>
            <div className="ade-cards-grid">
              {[
                { icon: "M20 6h-2.18c.07-.44.18-.86.18-1a3 3 0 00-6 0c0 .14.11.56.18 1H10c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 18H10V8h10v14z", title: "Medizinische Aktenprüfung", desc: "Wir analysieren die Befunde und wählen das geeignete Krankenhaus und die richtige Fachabteilung — nicht nach Bekanntheit, sondern nach Falleignung." },
                { icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z", title: "Terminkoordination", desc: "Wir kommunizieren direkt mit den Kliniken und sichern Termine so schnell wie medizinisch sinnvoll — mit korrekter Reihenfolge der Untersuchungen." },
                { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z", title: "Medizinische Dolmetschung", desc: "Wir begleiten Sie persönlich in die Sprechstunde und übersetzen präzise — kein maschinelles Dolmetschen, sondern echte medizinische Kommunikation." },
                { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", title: "Visum und Aufenthaltstitel", desc: "Wir erstellen das Krankenhauseinladungsschreiben, unterstützen bei der Ausländerbehörde und helfen bei der Wohnsitzanmeldung und Kontoöffnung." },
                { icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z", title: "Unterkunft und Transfer", desc: "Wir helfen bei der Suche nach einer kliniknahen Unterkunft und organisieren Transfers zwischen den Terminen nach Bedarf." },
                { icon: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z", title: "Kommunikation mit Angehörigen", desc: "Wir halten die Familie des Patienten auf dem Laufenden — auf Arabisch, klar und ohne medizinisches Fachjargon." },
              ].map((c, i) => (
                <div className="ade-card" key={i}>
                  <div className="ade-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={c.icon} /></svg></div>
                  <p className="ade-card-title">{c.title}</p>
                  <p className="ade-card-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 3 · Warum Berlin ═══════════════════════════════════ */}
        <section className="ade-section" aria-labelledby="ade-berlin">
          <div className="ade-wrap reveal">
            <p className="ade-label">Unser Standort</p>
            <h2 className="ade-title" id="ade-berlin">Warum Berlin der richtige Ort ist</h2>
            <div className="ade-two-col">
              <div>
                <p className="ade-body">Berlin ist kein Zufall. Die Stadt beherbergt einige der größten Universitätskliniken Europas — Charité, Vivantes, Johannesstift Diakonie — mit Spezialisierungen, die auch die schwierigsten Fälle in Onkologie, Kardiologie, Neurologie und komplexer Chirurgie abdecken.</p>
                <br />
                <p className="ade-body">Unser Team ist physisch in Berlin präsent. Das bedeutet: direkte Beziehungen zu Kliniken und Fachabteilungen, persönliche Begleitung bei Terminen und die Fähigkeit, Probleme sofort zu lösen — nicht per E-Mail aus einem anderen Land.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: ".9rem" }}>
                <div className="ade-card"><p className="ade-card-title">Charité — Universitätsmedizin Berlin</p><p className="ade-card-desc">Eine der größten Universitätskliniken Europas. Internationale Referenz in Onkologie und Neurochirurgie.</p></div>
                <div className="ade-card"><p className="ade-card-title">Vivantes — Klinikverbund Berlin</p><p className="ade-card-desc">Großes klinisches Netzwerk mit breitem Fachspektrum und mehreren Standorten in Berlin.</p></div>
                <div className="ade-card"><p className="ade-card-title">Johannesstift Diakonie</p><p className="ade-card-desc">Referenzhaus für Orthopädie und Rehabilitation mit hohen Pflegestandards.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4 · Ablauf ═════════════════════════════════════════ */}
        <section className="ade-section ade-alt" aria-labelledby="ade-how">
          <div className="ade-wrap reveal">
            <p className="ade-label">Unser Ablauf</p>
            <h2 className="ade-title" id="ade-how">Fünf klare Schritte — von der Akte bis zur Heimreise</h2>
            <div className="ade-two-col" style={{ marginBottom: 0 }}>
              <p className="ade-body">Kein Graubereich, keine leeren Versprechen. Jede Akte durchläuft einen definierten Prozess — mit einer festen Ansprechperson und kontinuierlicher Kommunikation in jeder Phase.</p>
              <div />
            </div>
            <div className="ade-steps" role="list" aria-label="Prozessschritte">
              {[
                { num: "01", title: "Medizinische Unterlagen einsenden", desc: "Befundberichte, Bildgebung, aktuelle Diagnose — wir nehmen alles per WhatsApp oder E-Mail entgegen." },
                { num: "02", title: "Erste Einschätzung innerhalb von 24 Stunden", desc: "Wir prüfen die Akte und senden Ihnen eine ehrliche Rückmeldung: Können wir helfen? Welche Klinik? Welcher Zeitrahmen?" },
                { num: "03", title: "Klare Vereinbarung", desc: "Wir legen gemeinsam den Leistungsumfang und die Kosten fest — transparent und vor Beginn jeder Maßnahme." },
                { num: "04", title: "Vollständige Koordination in Berlin", desc: "Wir buchen Termine, bereiten die Visumsunterlagen vor und begleiten Sie persönlich durch den gesamten Klinikaufenthalt." },
                { num: "05", title: "Nachbetreuung nach der Heimreise", desc: "Wir senden eine übersetzte Zusammenfassung der Befunde und stehen für die Koordination mit dem Heimatarzt zur Verfügung." },
              ].map((s) => (
                <div className="ade-step" role="listitem" key={s.num}>
                  <span className="ade-step-num">{s.num}</span>
                  <div><p className="ade-step-title">{s.title}</p><p className="ade-step-desc">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 5 · Vertrauen ══════════════════════════════════════ */}
        <section className="ade-section" aria-labelledby="ade-trust">
          <div className="ade-wrap reveal">
            <p className="ade-label">Patientenvertrauen</p>
            <h2 className="ade-title" id="ade-trust">Warum Patienten uns vertrauen</h2>
            <p className="ade-body">Die meisten unserer Patienten kommen durch persönliche Empfehlung — von einem Arzt oder einer Familie, mit der wir bereits gearbeitet haben. Das ist unser eigentlicher Maßstab.</p>
            <div className="ade-review-wrap">
              <div className="ade-review-card">
                <div className="ade-reviewer-row">
                  <div className="ade-reviewer-avatar" aria-hidden="true">W</div>
                  <div>
                    <p className="ade-reviewer-name">Dr. Wafik Hamza</p>
                    <p className="ade-reviewer-meta">Libyen · Local Guide auf Google</p>
                  </div>
                </div>
                <p className="ade-review-text">"Bei der Bearbeitung des medizinischen Visums für meine Mutter — ich empfehle sie. Sehr professioneller Umgang mit Terminen, sowohl in der Klinik und dem Krankenhaus als auch bei der Ausländerbehörde. Auch bei der Regelung von Unterkunft, Aufenthaltstitel und Bankangelegenheiten."</p>
                <p className="ade-review-attr">Bewertung auf Google Business Profile</p>
                <div className="ade-review-reply">
                  <p className="ade-reply-brand">Medical Care Germany — Antwort der Geschäftsführung</p>
                  <p className="ade-reply-text">Vielen Dank, Dr. Hamza, für Ihre anerkennenden Worte und Ihr Vertrauen. Es freut uns sehr, dass Ihre Erfahrung mit uns positiv war. Wir wünschen Ihrer Familie beste Gesundheit.</p>
                </div>
              </div>
              <p className="ade-review-cta">
                Haben Sie bereits mit uns zusammengearbeitet?{" "}
                <a href="https://share.google/a0BstjyJQugEy0OXm" target="_blank" rel="noopener noreferrer">Hinterlassen Sie eine Bewertung auf Google</a>
                {" "}— andere Familien treffen damit eine informiertere Entscheidung.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 6 · Team ═══════════════════════════════════════════ */}
        <section className="ade-section ade-alt" aria-labelledby="ade-team">
          <div className="ade-wrap reveal">
            <p className="ade-label">Das Team</p>
            <h2 className="ade-title" id="ade-team">Wer hinter Medical Care Germany steht</h2>
            <p className="ade-body">Kein Unternehmen, das am Bildschirm entstand. Ein Team, das seine Beziehungen in Kliniken und über Jahre aufgebaut hat.</p>
            <div className="ade-team-list" role="list">
              {[
                { strong: "Seit 2012 in Berlin", rest: " — aufgebaute Erfahrung in der medizinischen Koordination für Patienten aus dem arabischsprachigen Raum." },
                { strong: "Arabisch-deutsches Team", rest: " — wir arbeiten auf Arabisch, Deutsch und Englisch ohne externen Vermittler." },
                { strong: "Erfahrung mit komplexen Fällen", rest: " — spezialisiert auf Akten, die eine präzise Fallbewertung und direkten Kontakt zu Fachärzten erfordern." },
                { strong: "Direkte Klinikbeziehungen", rest: " — wir kommunizieren mit medizinischen Abteilungen direkt, nicht über allgemeine Buchungsportale." },
                { strong: "Persönliche Fallbegleitung", rest: " — jede Akte hat eine namentlich bekannte Ansprechperson für die gesamte Behandlungsdauer." },
              ].map((t, i) => (
                <div className="ade-team-item" role="listitem" key={i}>
                  <div className="ade-team-bullet" aria-hidden="true" />
                  <p className="ade-team-text"><strong>{t.strong}</strong>{t.rest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 7 · FAQ ════════════════════════════════════════════ */}
        <section className="ade-section" aria-labelledby="ade-faq">
          <div className="ade-wrap reveal">
            <p className="ade-label">Häufige Fragen</p>
            <h2 className="ade-title" id="ade-faq">Was Patienten uns regelmäßig fragen</h2>
            <div className="ade-faq-list" role="list">
              {[
                { id: "ade-faq1", q: "Sind Ihre Leistungen kostenlos?", a: "Wir arbeiten mit Koordinationsgebühren, die je nach Umfang und Art der Akte individuell festgelegt werden. Die Erstberatung und Aktenprüfung sind kostenlos." },
                { id: "ade-faq2", q: "Wie lange dauert es, einen Termin zu bekommen?", a: "Das hängt vom Fachgebiet und der Dringlichkeit ab. In der Regel können wir innerhalb von zwei bis vier Wochen nach Eingang der Unterlagen einen ersten Kliniktermin koordinieren." },
                { id: "ade-faq3", q: "Helfen Sie bei der Beantragung des medizinischen Visums?", a: "Ja. Wir erstellen das Einladungsschreiben des Krankenhauses, helfen bei der Dokumentation für die Botschaft und begleiten bei der Ausländerbehörde nach der Ankunft." },
                { id: "ade-faq4", q: "Gibt es während des Aufenthalts arabischsprachige Begleitung?", a: "Ja. Unser Team kommuniziert während der gesamten Behandlungsreise auf Arabisch — in der Klinik und außerhalb — mit Ihnen und Ihren Angehörigen." },
                { id: "ade-faq5", q: "Auf welche Krankheitsbilder sind Sie spezialisiert?", a: "Wir bearbeiten ein breites Spektrum: Onkologie, Kardiologie, Orthopädie, Neurologie und weitere Fachgebiete. Jede Akte wird einzeln bewertet und dem passenden Spezialisten zugewiesen." },
                { id: "ade-faq6", q: "Betreuen Sie Patienten aus allen arabischen Ländern?", a: "Ja. Wir betreuen Patienten aus mehr als zwanzig arabischen und afrikanischen Ländern — Libyen, Algerien, Irak, Saudi-Arabien, Jemen, Tunesien und weitere." },
              ].map((f) => {
                const isOpen = openFaq === f.id;
                return (
                  <div className="ade-faq-item" role="listitem" key={f.id}>
                    <button className={`ade-faq-q${isOpen ? " open" : ""}`} aria-expanded={isOpen} aria-controls={f.id} onClick={() => toggleFaq(f.id)}>
                      {f.q}
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                    </button>
                    <div id={f.id} className={`ade-faq-a${isOpen ? " open" : ""}`}>{f.a}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 8 · CTA ════════════════════════════════════════════ */}
        <section className="ade-cta" aria-labelledby="ade-cta-h">
          <h2 id="ade-cta-h">Ihr Fall verdient echte Begleitung</h2>
          <p>Senden Sie uns eine kurze Zusammenfassung Ihrer medizinischen Situation. Wir antworten innerhalb von 24 Stunden mit einer ehrlichen Einschätzung — unverbindlich.</p>
          <div className="ade-cta-btns">
            <a href="https://wa.me/493025730875" target="_blank" rel="noopener noreferrer" className="ade-btn-wa-lg" aria-label="Kontakt per WhatsApp">
              <WaSvg size={20} />
              Per WhatsApp schreiben
            </a>
            <a href="mailto:info@medicalcaregermany.com" className="ade-btn-email">info@medicalcaregermany.com</a>
          </div>
        </section>

        {/* ═══ FOOTER ═════════════════════════════════════════════ */}
        <footer className="ade-footer" role="contentinfo">
          <div className="ade-footer-inner">
            <span>© 2024 Medical Care Germany · Perleberger Str. 41 · Berlin · +49 30 25730875</span>
            <ul className="ade-footer-links">
              <li><a href="/de/datenschutz">Datenschutz</a></li>
              <li><a href="/de/impressum">Impressum</a></li>
              <li><a href="/de/kontakt">Kontakt</a></li>
              <li><a href="/ar/about">عربي</a></li>
            </ul>
          </div>
        </footer>

      </div>
    </>
  );
}
