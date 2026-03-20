import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export interface MedicalConditionPageProps {
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  headline: string;
  subtitle: string;
  introduction: string;
  aboutCondition: string;
  symptoms?: string[];
  causes?: string;
  diagnosticProcess?: string;
  treatmentOptions?: string;
  treatmentList?: string[];
  whyGermany: string;
  specialistEvaluation: string;
  patientPathway?: string[];
  relatedLinks?: Array<{ href: string; label: string }>;
  structuredData?: string;
  arabicSummary?: string;
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
}: MedicalConditionPageProps) {
  const canonicalUrl = `https://www.medicalcaregermany.com${canonicalPath}`;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        {structuredData && (
          <script type="application/ld+json">{structuredData}</script>
        )}
      </Helmet>

      {/* Top Contact Bar */}
      <div className="w-full bg-slate-900 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          <a href="mailto:info@medicalcaregermany.com" className="hover:text-slate-300 transition-colors">
            info@medicalcaregermany.com
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky z-50 w-full py-3 px-8 flex justify-between items-center border-b border-slate-100 bg-white/95 backdrop-blur-sm" style={{ top: 'var(--banner-height, 0px)' }}>
        <div className="flex flex-col">
          <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
            Medical Care Germany
          </Link>
          <span className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
            Institutional Clinical Coordination Authority
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden md:inline">
            ← Home
          </Link>
          <Link
            href="/ar"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden md:inline"
            style={{ fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" }}
          >
            العربية
          </Link>
          <Link
            href="/send-medical-reports"
            className="bg-slate-900 text-white text-xs font-medium px-4 py-2 hover:bg-slate-700 transition-colors tracking-wide"
          >
            Send Medical Reports
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-slate-50 border-b border-slate-200 py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
            Medical Care Germany · Berlin
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 leading-tight mb-4">
            {headline}
          </h1>
          <p className="text-lg text-slate-600 font-light">{subtitle}</p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-6 py-14 md:py-20 space-y-14">

        {/* Arabic Summary Block */}
        {arabicSummary && (
          <section dir="rtl" lang="ar" className="bg-slate-50 border-r-4 border-slate-300 px-6 py-6">
            <h2 className="text-base font-semibold text-slate-800 mb-3 font-sans">
              ما هو هذا المرض؟
            </h2>
            <p className="text-sm text-slate-700 leading-loose font-sans">{arabicSummary}</p>
          </section>
        )}

        {arabicSummary && <div className="h-px bg-slate-100" />}

        {/* Introduction */}
        <section>
          <p className="text-base text-slate-700 leading-relaxed">{introduction}</p>
        </section>

        <div className="h-px bg-slate-100" />

        {/* About the condition */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">About the Condition</h2>
          <p className="text-base text-slate-700 leading-relaxed">{aboutCondition}</p>
        </section>

        {/* Symptoms */}
        {symptoms && symptoms.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">Common Symptoms</h2>
              <ul className="space-y-2">
                {symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* Causes */}
        {causes && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">Causes and Risk Factors</h2>
              <p className="text-base text-slate-700 leading-relaxed">{causes}</p>
            </section>
          </>
        )}

        {/* Diagnostic Process */}
        {diagnosticProcess && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">Diagnostic Process in Germany</h2>
              <p className="text-base text-slate-700 leading-relaxed">{diagnosticProcess}</p>
            </section>
          </>
        )}

        {/* Treatment Options */}
        {(treatmentOptions || (treatmentList && treatmentList.length > 0)) && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">Treatment Options in Germany</h2>
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

        <div className="h-px bg-slate-100" />

        {/* Why Germany */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">Why Treatment in Germany</h2>
          <p className="text-base text-slate-700 leading-relaxed">{whyGermany}</p>
        </section>

        <div className="h-px bg-slate-100" />

        {/* Specialist evaluation */}
        <section>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">Specialist Evaluation</h2>
          <p className="text-base text-slate-700 leading-relaxed">{specialistEvaluation}</p>
        </section>

        {/* Patient Pathway */}
        {patientPathway && patientPathway.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-6">Patient Pathway</h2>
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

        {/* Related Conditions / Internal Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <>
            <div className="h-px bg-slate-100" />
            <section>
              <h2 className="text-xl font-serif font-medium text-slate-900 mb-4">Related Conditions and Services</h2>
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

        <div className="h-px bg-slate-100" />

        {/* Call to action */}
        <section className="bg-slate-50 border border-slate-200 px-8 py-10">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">Next Step</p>
          <h2 className="text-xl font-serif font-medium text-slate-900 mb-3">
            Submit Your Medical Reports for Review
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Medical documentation may be submitted for preliminary review by a clinical coordinator in Berlin.
            Complex cases are directed to the appropriate specialist or university hospital within the German healthcare system.
          </p>
          <Link
            href="/send-medical-reports"
            className="inline-block bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-700 transition-colors tracking-wide"
          >
            Send Medical Reports
          </Link>
          <p className="text-xs text-slate-400 mt-4">
            All documentation is handled in accordance with German data protection regulations.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          Operating within established clinical coordination frameworks.
        </p>
        <p className="text-xs text-slate-300 mt-1">
          Medical Care Germany · Berlin, Germany
        </p>
      </footer>
    </div>
  );
}
