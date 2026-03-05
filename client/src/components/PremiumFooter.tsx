import { Button } from "@/components/ui/button";

export default function PremiumFooter() {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-slate-100">Contact</h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:info@medicalcaregermany.com" className="flex items-start gap-3 hover:text-slate-300 transition-colors group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:underline">info@medicalcaregermany.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sachsendamm 79<br/>10829 Berlin, Germany</span>
              </div>
            </div>
          </div>

          {/* Medical CTA */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-serif mb-6 text-slate-100">Professional Medical Evaluation</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Submit your case for a structured clinical review by our German medical coordination team.
            </p>
            <a href="#submit-case">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-8 py-3">
                Submit Case for Clinical Review
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>Operating within established clinical coordination frameworks.</p>
          <p>© 2026 Berlin Medical Care</p>
        </div>
      </div>
    </footer>
  );
}
