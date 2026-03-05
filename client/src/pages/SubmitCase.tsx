import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

// Sovereign iframe form component — completely independent of React/tRPC/backend
function IframeForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(720);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data && event.data.type === "resize" && typeof event.data.height === "number") {
        setIframeHeight(event.data.height + 32);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/intake-form.html"
      title="Medical Case Submission Form"
      width="100%"
      height={iframeHeight}
      style={{ border: "none", display: "block" }}
      loading="lazy"
    />
  );
}

export default function SubmitCase() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Berlin Medical Care
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/ar" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">AR</Link>
        </div>
      </nav>

      {/* Main content — semantic HTML for Google indexing */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* H1 — required for Google to understand page purpose */}
        <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-center">
          Submit Your Medical Case
        </h1>

        {/* Paragraph 1 — explains page purpose */}
        <p className="text-slate-600 leading-relaxed mb-5 text-center max-w-2xl mx-auto">
          Berlin Medical Care is a Berlin-based medical coordination office assisting international patients who seek diagnosis, second opinions and specialized treatment in Germany. Through this secure form patients can submit their medical reports for an initial case review by our coordination team.
        </p>

        {/* Paragraph 2 — describes coordination process */}
        <p className="text-slate-600 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
          Our office coordinates consultations with specialized physicians and leading hospitals in Germany. After submitting the form, our team evaluates the medical documentation and provides guidance regarding possible diagnostic or treatment options.
        </p>

        {/* Address block — structured, semantic */}
        <address className="not-italic text-center text-sm text-slate-500 mb-12 leading-relaxed">
          <strong className="text-slate-700">Berlin Medical Care</strong><br />
          Sachsendamm 79<br />
          10829 Berlin<br />
          Germany
        </address>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-slate-200 mx-auto mb-12"></div>

        {/* Form section heading */}
        <h2 className="text-xl font-serif text-slate-800 mb-2 text-center">
          Case Submission for Clinical Review
        </h2>
        <p className="text-center text-slate-500 text-sm mb-8 leading-relaxed">
          Case reviews are conducted in alignment with German clinical governance practices.
        </p>

        {/* Sovereign iframe form — no React/tRPC dependency */}
        <div className="border border-slate-200 bg-white shadow-sm">
          <IframeForm />
        </div>

        <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed">
          All submissions are handled under strict clinical confidentiality protocols.{" "}
          Direct inquiries:{" "}
          <a href="mailto:info@medicalcaregermany.com" className="text-slate-600 hover:underline">
            info@medicalcaregermany.com
          </a>
        </p>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <a href="mailto:info@medicalcaregermany.com" className="block text-sm hover:text-slate-300 transition-colors">
            info@medicalcaregermany.com
          </a>
          <p className="text-sm text-slate-500">Sachsendamm 79 · 10829 Berlin · Germany</p>
          <div className="w-16 h-[1px] bg-slate-700 mx-auto"></div>
          <p className="text-sm text-slate-400">Berlin Medical Care © 2026</p>
        </div>
      </footer>

    </div>
  );
}
