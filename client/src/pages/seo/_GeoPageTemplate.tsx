/**
 * _GeoPageTemplate.tsx
 * Template موحد لصفحات geo-intent (السعودية، الإمارات، الكويت، إلخ)
 * يستخدم نفس بنية _SymptomPageTemplate مع إضافات: Breadcrumb، مدن، خطوات مرقمة، FAQ
 */
import React from "react";
import { Link } from "wouter";
import { ArabicFooterGuide } from "@/components/ArabicFooterGuide";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
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
  heroTag?: string; // e.g. "Medical Care Germany · منذ 2012"

  /** Why us — 3 cards */
  whyCards: Array<{ title: string; body: string }>;

  /** Steps — "من حيث أنت إلى برلين" */
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
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* 1. HERO */}
      <section className="py-16 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="mb-6 flex flex-wrap gap-1 items-center text-xs text-slate-400" style={FONT}>
              {breadcrumb.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="mx-1 text-slate-600">›</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-300">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            {heroTag}
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            {heroTitle}
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed" style={FONT}>
            {heroSubtitle}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={intakeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              أرسل ملفك الطبي الآن
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-sm font-medium transition-colors"
              style={{ ...FONT, border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}
            >
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHY US — 3 cards */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8" style={FONT}>
            لماذا نحن؟
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-6">
                <h3 className="text-sm font-medium text-slate-900 mb-3" style={FONT}>
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed" style={FONT}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEPS — "من حيث أنت إلى برلين" */}
      <section className="py-16 px-6 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium mb-10" style={FONT}>
            {stepsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-sm font-medium text-slate-300"
                  style={FONT}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-white mb-2" style={FONT}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed" style={FONT}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CITIES */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-6" style={FONT}>
            {citiesTitle}
          </h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {cities.map((city, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-50 border border-slate-200 text-sm text-slate-700 flex items-center gap-2"
                style={FONT}
              >
                {city.flag && <span>{city.flag}</span>}
                {city.name}
              </span>
            ))}
          </div>
          {citiesNote && (
            <p className="text-slate-500 text-sm mt-4" style={FONT}>
              {citiesNote}
            </p>
          )}
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8" style={FONT}>
            {faqTitle}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-200 pb-6">
                <h3 className="text-sm font-medium text-slate-900 mb-3" style={FONT}>
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKS */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-medium text-slate-700 mb-4" style={FONT}>
            {internalLinksTitle}
          </h3>
          <div className="flex flex-wrap gap-3">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="px-4 py-2 border border-slate-200 text-xs text-slate-600 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>
            {ctaTitle}
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            {ctaNote}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={intakeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال الملف الطبي
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white text-white text-sm font-light hover:bg-white hover:text-[#0B1C2C] transition-colors"
              style={FONT}
            >
              تحدث مع منسق عبر واتساب
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500 leading-relaxed" style={FONT}>
            لا تحتاج ملفاً كاملاً — أرسل ما هو متوفر الآن
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100">
        <ArabicFooterGuide />
        <div className="py-8 px-6 text-center">
          <p className="text-xs text-slate-400" style={FONT}>
            Medical Care Germany
          </p>
        </div>
      </footer>
    </div>
  );
}
