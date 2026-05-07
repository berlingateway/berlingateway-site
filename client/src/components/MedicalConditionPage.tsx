import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ArabicFooterGuide } from "./ArabicFooterGuide";

export interface MedicalConditionPageProps {
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  headline: string;
  subtitle: string;
  introduction?: string;
  aboutCondition: string | string[] | React.ReactNode[];
  symptoms?: string[];
  /** How many symptoms to show before "show more" button. Default: all */
  symptomsPreviewCount?: number;
  causes?: string;
  diagnosticProcess?: string;
  treatmentOptions?: string | string[];
  treatmentList?: string[];
  whyGermany: string | string[];
  specialistEvaluation: string | string[];
  patientPathway?: string[];
  relatedLinks?: Array<{ href: string; label: string }>;
  structuredData?: string;
  arabicSummary?: string;
  arabicSummaryTitle?: string;
  trustLine?: string;
  ctaLabel?: string;
  ctaTitle?: string;
  ctaText?: string;
  ctaButton?: string;
  ctaHref?: string;
  /** Mid-page CTA shown between specialistEvaluation and patientPathway */
  midPageCta?: { label: string; href: string };
  /** Expandable deep-dive block shown after treatmentOptions.
   * Provide either `content` (string | string[]) OR `sections` (array of {heading, content}) */
  deepDive?: {
    title: string;
    content?: string | string[];
    sections?: Array<{ heading: string; content: string }>;
  };
  /** GDPR / data protection note shown at bottom of CTA box */
  gdprNote?: string;
  sectionLabels?: {
    about?: string;
    aboutCondition?: string;
    symptoms?: string;
    showMoreSymptoms?: string;
    showLessSymptoms?: string;
    showMore?: string;
    showLess?: string;
    causes?: string;
    diagnosticProcess?: string;
    treatment?: string;
    treatmentOptions?: string;
    whyGermany?: string;
    evaluation?: string;
    specialistEvaluation?: string;
    pathway?: string;
    patientPathway?: string;
    related?: string;
    relatedLinks?: string;
    nextStep?: string;
    deepDiveToggle?: string;
    deepDiveClose?: string;
    footerNote?: string;
  };
  /** Override navigation strings — if omitted, English defaults are shown */
  navLabels?: {
    tagline?: string;
    homeLink?: string;
    backLink?: string;
    backHref?: string;
    langLink?: string;
    langHref?: string;
    ctaButton?: string;
    ctaHref?: string;
    topBarEmail?: string;
  };
  /** Override the brand name in the nav (default: "Medical Care Germany") */
  navBrandName?: string;
  /** Override footer strings — if omitted, English defaults are shown */
  footerLabels?: {
    line1?: string;
    line2?: string;
    /** Arabic-friendly aliases */
    brand?: string;
    location?: string;
    trustLine?: string;
  };
  /** Hero eyebrow line — omit to hide */
  heroEyebrow?: string;
  pageDir?: "rtl" | "ltr";
  /** Pre-filled WhatsApp message (URL-encoded). If omitted, the global FloatingWhatsApp handles it. */
  whatsappMessage?: string;
  /** When true, suppresses the built-in Top Contact Bar and sticky nav (use when a global header already renders above this component) */
  hideGlobalHeader?: boolean;
  /** Optional checklist section rendered between Hero and 'About' — ideal for 'هل هذه حالتك؟' blocks */
  checklistSection?: {
    title: string;
    items: string[];
    footer?: string;
  };
  /** Patient video cards shown between patientPathway and relatedLinks */
  patientVideos?: Array<{
    youtubeId: string;
    title: string;
    tag?: string;
    description?: string;
  }>;
  /** FAQ accordion shown after patientVideos and before relatedLinks */
  faqSection?: {
    title?: string;
    items: Array<{ question: string; answer: string }>;
  };
  /** Required documents checklist shown after faqSection */
  documentsSection?: {
    title?: string;
    items: string[];
    footer?: string;
  };
  /** Authority / trust block shown after documentsSection */
  authoritySection?: {
    title?: string;
    content: string | string[];
  };
  /** Custom CTA that overrides the built-in CTA box entirely */
  customCTA?: {
    title?: string;
    heading: string;
    body?: string;
    buttonLabel: string;
    buttonHref: string;
    note?: string;
  };
}

export default function MedicalConditionPage({
  metaTitle,
  metaDescription,
  canonicalPath,
  headline,
  subtitle,
  introduction,
  aboutCondition,
  symptoms,
  symptomsPreviewCount,
  causes,
  diagnosticProcess,
  treatmentOptions,
  treatmentList,
  whyGermany,
  specialistEvaluation,
  patientPathway,
  relatedLinks,
  structuredData,
  arabicSummary,
  arabicSummaryTitle,
  trustLine,
  ctaLabel,
  ctaTitle,
  ctaText,
  ctaButton,
  ctaHref,
  midPageCta,
  deepDive,
  gdprNote,
  sectionLabels,
  navLabels,
  navBrandName,
  footerLabels,
  heroEyebrow,
  pageDir,
  checklistSection,
  patientVideos,
  hideGlobalHeader,
  faqSection,
  documentsSection,
  authoritySection,
  customCTA,
}: MedicalConditionPageProps) {
  const [symptomsExpanded, setSymptomsExpanded] = useState(false);
  const [deepDiveExpanded, setDeepDiveExpanded] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const canonicalUrl = `https://medicalcaregermany.com${canonicalPath}`;
  const isArabic = pageDir === "rtl";

  // ── Nav strings ──────────────────────────────────────────────────────────
  const brandName = navBrandName ?? "Medical Care Germany";
  const navTagline = navLabels?.tagline ?? (isArabic ? null : "Institutional Clinical Coordination Authority");
  const navHomeLink = navLabels?.homeLink ?? (isArabic ? null : "← Home");
  const navLangLink = navLabels?.langLink ?? (isArabic ? "الإنجليزية" : "العربية");
  const navLangHref = navLabels?.langHref ?? (isArabic ? "/" : "/ar");
  const navCtaButton = navLabels?.ctaButton ?? (isArabic ? null : "Send Medical Reports");
  const navCtaHref = navLabels?.ctaHref ?? "/send-medical-reports";

  // ── Hero eyebrow ─────────────────────────────────────────────────────────
  const eyebrow = heroEyebrow !== undefined ? heroEyebrow : (isArabic ? null : "Medical Care Germany · Berlin");

  // ── CTA section ──────────────────────────────────────────────────────────
  const resolvedCtaTitle = ctaTitle ?? (isArabic ? null : "Next Step");
  const resolvedCtaH2 = ctaTitle ?? (isArabic ? null : "Submit Your Medical Reports for Review");
  const resolvedCtaText = ctaText ?? (isArabic ? null : "Medical documentation may be submitted for preliminary review by a clinical coordinator in Berlin. Complex cases are directed to the appropriate specialist or university hospital within the German healthcare system.");
  const resolvedCtaButton = ctaButton ?? (isArabic ? null : "Send Medical Reports");
  const resolvedCtaHref = ctaHref ?? (isArabic ? "/ar#intake-form" : "/send-medical-reports");

  // ── Footer strings ───────────────────────────────────────────────────────
  const footerLine1 = footerLabels?.line1 ?? footerLabels?.trustLine ?? (isArabic ? null : "Operating within established clinical coordination frameworks.");
  const footerLine2 = footerLabels?.line2 ?? (footerLabels?.brand && footerLabels?.location ? `${footerLabels.brand} · ${footerLabels.location}` : null) ?? (isArabic ? null : "Medical Care Germany · Berlin, Germany");

  // ── Footer note in CTA box ───────────────────────────────────────────────
  const footerNote = sectionLabels?.footerNote ?? (isArabic ? null : "All documentation is handled in accordance with German data protection regulations.");

  // ── Symptoms expand logic ────────────────────────────────────────────────
  const previewCount = symptomsPreviewCount ?? (symptoms?.length ?? 0);
  const visibleSymptoms = symptomsExpanded ? symptoms : symptoms?.slice(0, previewCount);
  const hasHiddenSymptoms = symptoms && symptoms.length > previewCount;
  const showMoreLabel = sectionLabels?.showMoreSymptoms ?? (isArabic ? "عرض باقي الأعراض" : "Show all symptoms");
  const showLessLabel = sectionLabels?.showLessSymptoms ?? (isArabic ? "إخفاء الأعراض" : "Show less");

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans" dir={pageDir}>
      <Helmet>
        {pageDir === 'rtl' && <html lang="ar" dir="rtl" />}
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* hreflang: self-referencing for Arabic canonical */}
        {pageDir === 'rtl' && <link rel="alternate" hrefLang="ar" href={canonicalUrl} />}
        {pageDir === 'rtl' && <meta property="og:locale" content="ar_AR" />}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        {structuredData && (
          <script type="application/ld+json">{structuredData}</script>
        )}
      </Helmet>

       {!hideGlobalHeader && (
        <>
      {/* Top Contact Bar */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
            {navLabels?.topBarEmail ?? "info@medicalcaregermany.com"}
          </a>
        </div>
      </div>
      {/* Navigation */}
      <nav className="sticky z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm" style={{ top: 'var(--banner-height, 0px)' }}>
        <div className="flex flex-col">
          <Link href={isArabic ? "/ar" : "/"} className="text-xl font-serif font-bold tracking-tight text-slate-900">
            {brandName}
          </Link>
          {navTagline && (
            <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
              {navTagline}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {navHomeLink && (
            <Link href={isArabic ? "/ar" : "/"} className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden md:inline">
              {navHomeLink}
            </Link>
          )}
          <Link
            href={navLangHref}
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden md:inline"
          >
            {navLangLink}
          </Link>
          {navCtaButton && (
            <Link
              href={navCtaHref}
              className="bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors tracking-wide"
            >
              {navCtaButton}
            </Link>
          )}
        </div>
       </nav>
        </>
      )}
      {/* Hero */}
      <header className="bg-slate-50 border-b border-slate-200 py-14 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {eyebrow && (
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 leading-tight mb-4">
            {headline}
          </h1>
          <p className="text-lg text-slate-600 font-light">{subtitle}</p>
          {trustLine && (
            <p className="text-xs text-slate-400 mt-4 tracking-wide">{trustLine}</p>
          )}
          {ctaLabel && (
            <div className="mt-6">
              <a
                href={resolvedCtaHref}
                className="inline-block bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-700 transition-colors tracking-wide"
              >
                {ctaLabel}
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main content — pb-28 ensures floating WA button never overlaps last section on mobile */}
      <main className="max-w-5xl mx-auto px-6 py-14 md:py-20 space-y-14 pb-28 md:pb-20">

        {/* Arabic Summary / Hook Block */}
        {arabicSummary && (
          <section dir="rtl" lang="ar" className="bg-slate-50 border-r-4 border-slate-300 px-6 py-6">
            <h2 className="text-base font-semibold text-slate-800 mb-3 font-sans">
              {arabicSummaryTitle || "ما هو هذا المرض؟"}
            </h2>
            <p className="text-sm text-slate-700 leading-loose font-sans whitespace-pre-line">{arabicSummary}</p>
          </section>
        )}

        {arabicSummary && <div className="h-px bg-slate-100" />}

        {/* Checklist Section (e.g. هل هذه حالتك؟) */}
        {checklistSection && (
          <section className="bg-slate-50 border border-slate-200 px-6 py-6 rounded-sm">
            <h2 className="text-base font-semibold text-slate-800 mb-4">
              {checklistSection.title}
            </h2>
            <ul className="space-y-3">
              {checklistSection.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-bold">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {checklistSection.footer && (
              <p className="mt-4 text-xs text-slate-500 leading-relaxed border-t border-slate-200 pt-3">
                {checklistSection.footer}
              </p>
            )}
          </section>
        )}

        {/* Introduction */}
        {introduction && (
          <section>
            <p className="text-base text-slate-700 leading-relaxed">{introduction}</p>
          </section>
        )}

        <div className="h-px bg-slate-100" />

        {/* About the condition */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
            {sectionLabels?.aboutCondition ?? sectionLabels?.about ?? (isArabic ? "عن الحالة" : "About the Condition")}
          </h2>
          {Array.isArray(aboutCondition)
            ? aboutCondition.map((p, i) =>
                typeof p === 'string' && p.includes('<')
                  ? <p key={i} className="text-base text-slate-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: p }} />
                  : <p key={i} className="text-base text-slate-700 leading-relaxed mb-3">{p}</p>
              )
            : <p className="text-base text-slate-700 leading-relaxed">{aboutCondition}</p>}
        </section>

        {/* Symptoms — with expandable "show more" */}
        {symptoms && symptoms.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
                {sectionLabels?.symptoms || (isArabic ? "الأعراض الشائعة" : "Common Symptoms")}
              </h2>
              <ul className="space-y-2">
                {visibleSymptoms!.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
              {hasHiddenSymptoms && (
                <button
                  onClick={() => setSymptomsExpanded(v => !v)}
                  className="mt-4 text-sm text-slate-500 underline underline-offset-2 hover:text-slate-800 transition-colors"
                >
                  {symptomsExpanded ? showLessLabel : showMoreLabel}
                </button>
              )}
            </section>
          </>
        )}

        {/* Causes */}
        {causes && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
                {sectionLabels?.causes || (isArabic ? "الأسباب وعوامل الخطر" : "Causes and Risk Factors")}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">{causes}</p>
            </section>
          </>
        )}

        {/* Diagnostic Process */}
        {diagnosticProcess && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
                {sectionLabels?.diagnosticProcess || (isArabic ? "مسار التشخيص في ألمانيا" : "Diagnostic Process in Germany")}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">{diagnosticProcess}</p>
            </section>
          </>
        )}

        {/* Treatment Options */}
        {(treatmentOptions || (treatmentList && treatmentList.length > 0)) && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
                {sectionLabels?.treatmentOptions || (isArabic ? "الخيارات العلاجية" : "Treatment Options in Germany")}
              </h2>
              {treatmentOptions && (
                <p className="text-base text-slate-700 leading-relaxed mb-4">{treatmentOptions}</p>
              )}
              {treatmentList && treatmentList.length > 0 && (
                <ul className="space-y-2 mt-3">
                  {treatmentList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}

        {/* Deep-Dive expandable block */}
        {deepDive && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <button
                onClick={() => setDeepDiveExpanded(v => !v)}
                className="w-full flex items-center justify-between text-right py-3 px-0 group"
                aria-expanded={deepDiveExpanded}
              >
                <h2 className="text-xl font-serif font-medium text-slate-900 group-hover:text-slate-600 transition-colors">
                  {deepDive.title}
                </h2>
                <span className="text-slate-400 text-lg ml-2 flex-shrink-0 transition-transform duration-200" style={{ transform: deepDiveExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▾
                </span>
              </button>
              {deepDiveExpanded && (
                <div className="mt-4 space-y-3 animate-in fade-in duration-200">
                  {deepDive.sections && deepDive.sections.length > 0
                    ? deepDive.sections.map((sec, i) => (
                        <div key={i} className="mb-5">
                          <h3 className="text-base font-semibold text-slate-800 mb-2">{sec.heading}</h3>
                          <p className="text-base text-slate-700 leading-relaxed">{sec.content}</p>
                        </div>
                      ))
                    : Array.isArray(deepDive.content)
                      ? deepDive.content.map((p, i) => <p key={i} className="text-base text-slate-700 leading-relaxed">{p}</p>)
                      : <p className="text-base text-slate-700 leading-relaxed">{deepDive.content}</p>}
                </div>
              )}
            </section>
          </>
        )}

        <div className="h-px bg-slate-100" />

        {/* Why Germany */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
            {sectionLabels?.whyGermany || (isArabic ? "لماذا ألمانيا؟" : "Why Treatment in Germany")}
          </h2>
          {Array.isArray(whyGermany)
            ? whyGermany.map((p, i) => <p key={i} className="text-base text-slate-700 leading-relaxed mb-3">{p}</p>)
            : <p className="text-base text-slate-700 leading-relaxed">{whyGermany}</p>}
        </section>

        <div className="h-px bg-slate-100" />

        {/* Specialist evaluation */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
            {sectionLabels?.specialistEvaluation || (isArabic ? "مراجعة متخصصة" : "Specialist Evaluation")}
          </h2>
          {Array.isArray(specialistEvaluation)
            ? specialistEvaluation.map((p, i) => <p key={i} className="text-base text-slate-700 leading-relaxed mb-3">{p}</p>)
            : <p className="text-base text-slate-700 leading-relaxed">{specialistEvaluation}</p>}
        </section>

        {/* Mid-page CTA — shown between specialistEvaluation and patientPathway */}
        {midPageCta && (
          <>
            <div className="h-px bg-slate-100" />
            <section className="text-center py-4">
              <a
                href={midPageCta.href}
                className="inline-block bg-slate-900 text-white text-sm font-medium px-8 py-4 hover:bg-slate-700 transition-colors tracking-wide"
              >
                {midPageCta.label}
              </a>
            </section>
          </>
        )}

        {/* Patient Pathway */}
        {patientPathway && patientPathway.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-6">
                {sectionLabels?.patientPathway || (isArabic ? "مسار المريض" : "Patient Pathway")}
              </h2>
              <ol className="space-y-4">
                {patientPathway.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-medium flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-base text-slate-700 leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </>
        )}

        {/* Patient Videos */}
        {patientVideos && patientVideos.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section className="space-y-6">
              {(patientVideos as Array<{ youtubeId: string; title: string; tag?: string; description?: string }>).map((video, i: number) => (
                <a
                  key={i}
                  href={`https://youtube.com/shorts/${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden shadow-md border border-slate-100 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" style={{ marginRight: '-2px' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    {video.tag && (
                      <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {video.tag}
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-slate-900 leading-snug">{video.title}</h3>
                    {video.description && (
                      <p className="text-sm text-slate-500 leading-relaxed">{video.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </section>
          </>
        )}

        {/* FAQ Section */}
        {faqSection && faqSection.items.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-6">
                {faqSection.title ?? (isArabic ? "أسئلة شائعة" : "Frequently Asked Questions")}
              </h2>
              <div className="space-y-3">
                {faqSection.items.map((item, i) => (
                  <div key={i} className="border border-slate-200">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full text-start px-5 py-4 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                      aria-expanded={openFaqIndex === i}
                    >
                      <span className="text-sm font-medium text-slate-900 leading-snug">{item.question}</span>
                      <span className="flex-shrink-0 text-slate-400 text-lg leading-none">{openFaqIndex === i ? "−" : "+"}</span>
                    </button>
                    {openFaqIndex === i && (
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Documents Section */}
        {documentsSection && documentsSection.items.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-6">
                {documentsSection.title ?? (isArabic ? "الوثائق المطلوبة" : "Required Documents")}
              </h2>
              <ul className="space-y-3">
                {documentsSection.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center">✓</span>
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {documentsSection.footer && (
                <p className="text-xs text-slate-400 mt-5">{documentsSection.footer}</p>
              )}
            </section>
          </>
        )}

        {/* Authority Section */}
        {authoritySection && (
          <>
            <div className="h-px bg-slate-100" />
            <section className="bg-slate-50 border border-slate-200 px-8 py-8">
              {authoritySection.title && (
                <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">{authoritySection.title}</h2>
              )}
              {Array.isArray(authoritySection.content) ? (
                <div className="space-y-3">
                  {(authoritySection.content as string[]).map((para, i) => (
                    <p key={i} className="text-sm text-slate-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-600 leading-relaxed">{authoritySection.content as string}</p>
              )}
            </section>
          </>
        )}

        {/* Related Conditions — hidden on Arabic pages unless relatedLinks provided */}
        {relatedLinks && relatedLinks.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">
                {sectionLabels?.relatedLinks || (isArabic ? "حالات وخدمات مرتبطة" : "Related Conditions and Services")}
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-sm text-slate-600 border border-slate-200 px-4 py-2 hover:border-slate-400 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Custom CTA — overrides built-in CTA box when provided */}
        {customCTA ? (
          <>
            <div className="h-px bg-slate-100" />
            <section className="bg-slate-50 border border-slate-200 px-8 py-10">
              {customCTA.title && (
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">{customCTA.title}</p>
              )}
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-3">{customCTA.heading}</h2>
              {customCTA.body && (
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{customCTA.body}</p>
              )}
              <a
                href={customCTA.buttonHref}
                className="inline-block bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-700 transition-colors tracking-wide"
              >
                {customCTA.buttonLabel}
              </a>
              {customCTA.note && (
                <p className="text-xs text-slate-400 mt-4">{customCTA.note}</p>
              )}
            </section>
          </>
        ) : null}

        {/* Final CTA box — shown only when customCTA is not provided */}
        {!customCTA && (resolvedCtaH2 || resolvedCtaText || resolvedCtaButton) && (
          <>
            <div className="h-px bg-slate-100" />
            <section className="bg-slate-50 border border-slate-200 px-8 py-10">
              {resolvedCtaTitle && (
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">{resolvedCtaTitle}</p>
              )}
              {resolvedCtaH2 && (
                <h2 className="text-xl font-serif font-medium text-slate-900 mb-3">
                  {resolvedCtaH2}
                </h2>
              )}
              {resolvedCtaText && (
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {resolvedCtaText}
                </p>
              )}
              {resolvedCtaButton && (
                <Link
                  href={resolvedCtaHref}
                  className="inline-block bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-700 transition-colors tracking-wide"
                >
                  {resolvedCtaButton}
                </Link>
              )}
              {/* GDPR note — explicit prop takes priority over sectionLabels footerNote */}
              {(gdprNote || footerNote) && (
                <p className="text-xs text-slate-400 mt-4">{gdprNote ?? footerNote}</p>
              )}
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        {isArabic && <ArabicFooterGuide />}
        <div className="py-10 text-center">
          {footerLine1 && (
            <p className="text-xs text-slate-400">{footerLine1}</p>
          )}
          {footerLine2 && (
            <p className="text-xs text-slate-300 mt-1">{footerLine2}</p>
          )}
        </div>
      </footer>
    </div>
  );
}
