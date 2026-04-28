import { Link } from "wouter";

const FONT = { fontFamily: "'IBM Plex Sans Arabic', Cairo, sans-serif" };
const intakeHref = "/send-medical-reports";
const whatsappHref =
  "https://wa.me/4915781497451?text=" +
  encodeURIComponent("أريد التحدث مع منسق طبي");

export interface SeoStep {
  number: string;
  title: string;
  body: string;
}

export interface SeoQA {
  q: string;
  a: string;
}

export interface SeoInternalLink {
  href: string;
  label: string;
}

export interface SeoGatewayPageProps {
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  heroTitle: string;
  heroSubtitle: string;
  qaItems: SeoQA[];
  steps: SeoStep[];
  detailsTitle: string;
  detailsItems: string[];
  internalLinks: SeoInternalLink[];
  faqSchema?: Array<{ question: string; answer: string }>;
}

export function SeoGatewayPage({
  metaTitle,
  metaDescription,
  canonicalPath,
  heroTitle,
  heroSubtitle,
  qaItems,
  steps,
  detailsTitle,
  detailsItems,
  internalLinks,
  faqSchema,
}: SeoGatewayPageProps) {
  const canonical = `https://www.medicalcaregermany.com${canonicalPath}`;

  const faqJsonLd = faqSchema
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSchema.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      })
    : null;

  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl" lang="ar">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500&family=Cairo:wght@300;400;500;600&display=swap');`}</style>

      {/* SEO meta via head injection */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      )}

      {/* 1. HERO */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4" style={FONT}>
            ميديكال كير جيرماني · برلين، ألمانيا
          </p>
          <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={FONT}>
            {heroTitle}
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10" style={FONT}>
            {heroSubtitle}
          </p>
          <Link
            href={intakeHref}
            className="inline-block px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
            style={FONT}
          >
            أرسل ملفك الطبي للتقييم
          </Link>
        </div>
      </section>

      {/* 2. QUICK ANSWERS */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            أسئلة شائعة
          </h2>
          <div className="space-y-6">
            {qaItems.map((item, i) => (
              <div key={i} className="border-b border-slate-100 pb-5">
                <p className="text-sm font-medium text-[#0B1C2C] mb-2" style={FONT}>
                  {item.q}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed" style={FONT}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP PROCESS */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium text-slate-900 mb-8 text-center" style={FONT}>
            خطوات البدء
          </h2>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4" style={FONT}>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1C2C] text-white text-xs flex items-center justify-center font-medium">
                  {step.number}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-900 mb-1">{step.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. DETAILS / LOGISTICS */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>
            {detailsTitle}
          </h2>
          <ul className="space-y-3">
            {detailsItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={FONT}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0B1C2C] flex-shrink-0" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. INTERNAL LINKS */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-base font-medium text-slate-900 mb-6 text-center" style={FONT}>
            اختر المسار المناسب لحالتك
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block px-4 py-3 border border-slate-200 bg-white text-sm text-slate-700 hover:border-[#0B1C2C] hover:text-[#0B1C2C] transition-colors"
                style={FONT}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 px-6 bg-[#0B1C2C] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={FONT}>
            ابدأ بإرسال ملفك الطبي الآن
          </h2>
          <p className="text-slate-300 text-sm mb-8 leading-relaxed" style={FONT}>
            يتم مراجعة الملفات خلال 24–48 ساعة من قِبل منسق طبي في برلين.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={intakeHref}
              className="px-8 py-4 bg-white text-[#0B1C2C] text-sm font-medium hover:bg-slate-100 transition-colors"
              style={FONT}
            >
              إرسال التقارير الطبية
            </Link>
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
      <footer className="py-8 px-6 bg-white border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400 mb-4" style={FONT}>
          ميديكال كير جيرماني · برلين، ألمانيا
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {[
            { href: "/ar/العلاج-في-المانيا-للعرب", label: "العلاج في ألمانيا للعرب" },
            { href: "/ar/تكلفة-العلاج-في-المانيا", label: "تكلفة العلاج" },
            { href: "/ar/فيزا-العلاج-في-المانيا", label: "فيزا العلاج" },
            { href: "/ar/مستشفيات-المانيا-للعرب", label: "المستشفيات" },
            { href: "/ar/السفر-للعلاج-في-المانيا", label: "السفر للعلاج" },
            { href: "/send-medical-reports", label: "إرسال التقارير الطبية" },
          ].map((l, i) => (
            <Link key={i} href={l.href} className="text-xs text-slate-400 hover:text-slate-700 transition-colors" style={FONT}>
              {l.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
