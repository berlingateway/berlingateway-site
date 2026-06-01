import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import SmartNavLayer from "@/components/SmartNavLayer";

export default function SendMedicalReports() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Helmet>
        <title>Send Medical Reports for Specialist Review in Germany | Medical Care Germany</title>
        <meta
          name="description"
          content="Submit your medical reports for review by a clinical coordinator in Berlin. Complex cases are directed to the appropriate specialist or university hospital in Germany."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medicalcaregermany.com/send-medical-reports" />
      </Helmet>

      <SmartNavLayer currentPath="/send-medical-reports" />

      {/* Page Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Page Header */}
        <div className="mb-10">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
            Medical Documentation Submission
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 leading-tight mb-5">
            Send Medical Reports for Specialist Review in Germany
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Patients may submit their medical reports for review by a medical coordinator in Berlin.
            Complex cases can be directed to the appropriate specialist or university hospital.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 mb-10" />

        {/* Tally Form */}
        <section id="submit-file">
          <iframe
            src="https://tally.so/embed/68MrBP?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            style={{ minHeight: "1200px", border: "none" }}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Medical Care Germany — Send Medical Reports"
          />
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
