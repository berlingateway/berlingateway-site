/**
 * _GeoPageTemplate.tsx
 * Template موحد لصفحات geo-intent (السعودية، الإمارات، الكويت، إلخ)
 * الألوان تطابق صفحة ليبيا الثابتة
 */
import React from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };

// ألوان موحدة مطابقة لصفحة ليبيا الثابتة
const C = {
  navy:       "#0f1f35",
  navyMid:    "#162840",
  gold:       "#b8902a",
  goldDark:   "#8a6a1a",
  bg:         "#ffffff",
  bgSoft:     "#f8f7f4",
  bgSection:  "#f3f1ec",
  text:       "#1a1a2e",
  textMid:    "#3a3a4a",
  textMuted:  "#6b7280",
  border:     "#e5e0d5",
  green:      "#25D366",
};

const intakeHref = "https://tally.so/r/68MrBP";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export interface GeoCity {
  name: string;
  flag?: string;
}

export interface GeoStep {
  number: string;
  title: string;
  body: string;
}

export interface GeoFAQ {
  q: string;
  a: string;
}

export interface GeoInternalLink {
  href: string;
  label: string;
}

export interface GeoPageProps {
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;

  /** Breadcrumb */
  breadcrumb?: Array<{ label: string; href?: string }>;

  /** Hero */
  heroTitle: string;
  heroSubtitle: string;
  heroTag?: string;

  /** Why us — 3 cards */
  whyCards: Array<{ title: string; body: string }>;

  /** Steps */
  stepsTitle?: string;
  steps: GeoStep[];

  /** Cities */
  citiesTitle?: string;
  cities: GeoCity[];
  citiesNote?: string;

  /** FAQ */
  faqTitle?: string;
  faqs: GeoFAQ[];

  /** Internal links */
  internalLinksTitle?: string;
  internalLinks: GeoInternalLink[];

  /** Final CTA */
  ctaTitle?: string;
  ctaNote?: string;
}

export function GeoPage({
  metaTitle,
  metaDescription,
  canonicalUrl,
  breadcrumb,
  heroTitle,
  heroSubtitle,
  heroTag = "Medical Care Germany · منذ 2012",
  whyCards,
  stepsTitle = "من حيث أنت إلى برلين",
  steps,
  citiesTitle = "نصل إليك أينما كنت",
  cities,
  citiesNote,
  faqTitle = "أسئلة شائعة",
  faqs,
  internalLinksTitle = "صفحات ذات صلة",
  internalLinks,
  ctaTitle = "أرسل ملفك الطبي الآن",
  ctaNote = "سنرد خلال 24 ساعة.",
}: GeoPageProps) {
  React.useEffect(() => {
    document.title = metaTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content = metaDescription;

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      (canonicalEl as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    (canonicalEl as HTMLLinkElement).href = canonicalUrl;

    const ogTags: Record<string, string> = {
      "og:title": metaTitle,
      "og:description": metaDescription,
      "og:url": canonicalUrl,
      "og:type": "article",
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        (el as HTMLMetaElement).setAttribute("property", prop);
        document.head.appendChild(el);
      }
      (el as HTMLMetaElement).content = content;
    });
  }, [metaTitle, metaDescription, canonicalUrl]);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, direction: "rtl" }} lang="ar">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');
        .geo-hero-glow {
          background: radial-gradient(ellipse at 60% 40%, rgba(184,144,42,0.12) 0%, transparent 65%);
        }
        .geo-btn-primary:hover { background: #e8e0d0; }
        .geo-btn-outline:hover { background: rgba(255,255,255,0.08); }
        .geo-card:hover { border-color: ${C.gold}; }
        .geo-link:hover { border-color: ${C.gold}; color: ${C.gold}; }
        .geo-city:hover { border-color: ${C.gold}; }
        .geo-step-num { background: ${C.gold}; }
      `}</style>

      {/* 1. HERO */}
      <section style={{ background: C.navyMid, padding: "60px 24px 56px", position: "relative", overflow: "hidden" }}>
        <div className="geo-hero-glow" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav style={{ marginBottom: 20, display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }}>
              {breadcrumb.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span style={{ color: "#4a6080", margin: "0 4px", fontSize: 12 }}>›</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} style={{ color: "#8aaccc", fontSize: 12, textDecoration: "none", ...FONT }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ color: "#b0c4d8", fontSize: 12, ...FONT }}>{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: 16, ...FONT }}>
            {heroTag}
          </p>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 300, lineHeight: 1.35, color: "#ffffff", marginBottom: 20, ...FONT }}>
            {heroTitle}
          </h1>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", color: "#a8bfd4", lineHeight: 1.7, maxWidth: 680, marginBottom: 36, ...FONT }}>
            {heroSubtitle}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={intakeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="geo-btn-primary"
              style={{ display: "inline-block", padding: "14px 32px", background: "#ffffff", color: C.navy, fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "background 0.2s", ...FONT }}
            >
              أرسل ملفك الطبي الآن
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="geo-btn-outline"
              style={{ display: "inline-block", padding: "14px 28px", border: "1px solid rgba(255,255,255,0.25)", color: "#ffffff", fontSize: 13, textDecoration: "none", transition: "background 0.2s", ...FONT }}
            >
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY US — 3 cards */}
      <section style={{ padding: "56px 24px", background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: 8, ...FONT }}>
            لماذا نحن
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 24 }}>
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="geo-card"
                style={{ background: C.bgSoft, border: `1px solid ${C.border}`, padding: "24px 20px", transition: "border-color 0.2s" }}
              >
                <h3 style={{ fontSize: 13, fontWeight: 500, color: C.text, marginBottom: 10, ...FONT }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.7, ...FONT }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEPS */}
      <section style={{ padding: "56px 24px", background: C.navy, borderBottom: `1px solid #1e3050` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: 8, ...FONT }}>
            {stepsTitle}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 28 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 16 }}>
                <span
                  className="geo-step-num"
                  style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 500, color: "#ffffff", ...FONT }}
                >
                  {step.number}
                </span>
                <div>
                  <h3 style={{ fontSize: 13, fontWeight: 500, color: "#ffffff", marginBottom: 8, ...FONT }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 12, color: "#8aaccc", lineHeight: 1.7, ...FONT }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CITIES */}
      <section style={{ padding: "56px 24px", background: C.bgSection, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: 8, ...FONT }}>
            {citiesTitle}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
            {cities.map((city, i) => (
              <span
                key={i}
                className="geo-city"
                style={{ padding: "8px 16px", background: C.bg, border: `1px solid ${C.border}`, fontSize: 13, color: C.textMid, display: "flex", alignItems: "center", gap: 6, transition: "border-color 0.2s", ...FONT }}
              >
                {city.flag && <span>{city.flag}</span>}
                {city.name}
              </span>
            ))}
          </div>
          {citiesNote && (
            <p style={{ fontSize: 12, color: C.textMuted, marginTop: 16, ...FONT }}>
              {citiesNote}
            </p>
          )}
        </div>
      </section>

      {/* 5. FAQ */}
      <section style={{ padding: "56px 24px", background: C.bgSoft, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: 8, ...FONT }}>
            {faqTitle}
          </p>
          <div style={{ marginTop: 24 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 24, marginBottom: 24 }}>
                <h3 style={{ fontSize: 13, fontWeight: 500, color: C.text, marginBottom: 10, ...FONT }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.75, ...FONT }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKS */}
      <section style={{ padding: "40px 24px", background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: 16, ...FONT }}>
            {internalLinksTitle}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="geo-link"
                style={{ padding: "8px 16px", border: `1px solid ${C.border}`, fontSize: 12, color: C.textMid, textDecoration: "none", transition: "border-color 0.2s, color 0.2s", ...FONT }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section style={{ padding: "72px 24px", background: C.navy, textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 300, color: "#ffffff", marginBottom: 12, ...FONT }}>
            {ctaTitle}
          </h2>
          <p style={{ fontSize: 13, color: "#8aaccc", marginBottom: 32, lineHeight: 1.7, ...FONT }}>
            {ctaNote}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            <a
              href={intakeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="geo-btn-primary"
              style={{ display: "inline-block", padding: "16px 40px", background: "#ffffff", color: C.navy, fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "background 0.2s", ...FONT }}
            >
              إرسال الملف الطبي
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="geo-btn-outline"
              style={{ display: "inline-block", padding: "14px 32px", border: "1px solid rgba(255,255,255,0.25)", color: "#ffffff", fontSize: 13, textDecoration: "none", transition: "background 0.2s", ...FONT }}
            >
              تحدث مع منسق عبر واتساب
            </a>
          </div>
          <p style={{ marginTop: 24, fontSize: 11, color: "#4a6080", ...FONT }}>
            لا تحتاج ملفاً كاملاً — أرسل ما هو متوفر الآن
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <ArabicFooterGuide />
        <div style={{ padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: 11, color: C.textMuted, ...FONT }}>
            Medical Care Germany
          </p>
        </div>
      </footer>
    </div>
  );
}
