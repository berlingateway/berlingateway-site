import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AdvisoryAccess() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-8 px-8 flex justify-between items-center border-b border-slate-200">
        <Link href="/" className="text-xl font-serif tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-clinical">Physician Referral</Link>
          <Link href="/governmental-bodies">Embassies & Government</Link>
          <Link href="/private-medical-advisory">Private Advisory</Link>
        </div>
        <Link href="/">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Return to Main
          </Button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-12">Professional Intake System</p>
        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-16 leading-tight font-normal">
          International Medical Advisory Access
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Access to structured medical coordination in Germany begins with a professional case evaluation.
        </p>
      </section>

      {/* Silent Filter */}
      <section className="py-32 px-6 max-w-4xl mx-auto bg-slate-50 border-y border-slate-200">
        <p className="text-lg text-slate-700 leading-relaxed text-center mb-6">
          Due to coordination depth and cross-border clinical requirements, case intake is selectively limited.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed text-center">
          Medically complex cases where structured coordination materially influences treatment direction are prioritized for review.
        </p>
      </section>

      {/* Pathway Selection */}
      <section className="py-40 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-slate-900 mb-8 font-normal">Select Entry Pathway</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Each pathway is designed for specific case types and institutional requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Pathway 1: Institutional / Embassy */}
          <div className="border border-slate-300 p-12 bg-white">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Pathway 1</p>
              <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">Institutional / Embassy Sponsored Cases</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                For cases referred through diplomatic missions, governmental health authorities, or official sponsoring entities.
              </p>
            </div>
            <Link href="/governmental-bodies">
              <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 py-6 text-base">
                Access Institutional Pathway
              </Button>
            </Link>
          </div>

          {/* Pathway 2: Private Complex Medical */}
          <div className="border border-slate-300 p-12 bg-white">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Pathway 2</p>
              <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">Private Complex Medical Cases</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                For international private patients seeking structured coordination for medically complex situations.
              </p>
            </div>
            <Link href="/private-medical-advisory">
              <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 py-6 text-base">
                Access Private Pathway
              </Button>
            </Link>
          </div>

          {/* Pathway 3: Physician Referrals */}
          <div className="border border-slate-300 p-12 bg-white">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">Pathway 3</p>
              <h3 className="text-2xl font-serif text-slate-900 mb-6 font-normal">Physician Referrals</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                For referring physicians coordinating cross-border treatment pathways for their patients.
              </p>
            </div>
            <Link href="/physician-referral-clinical">
              <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 py-6 text-base">
                Access Physician Pathway
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Pre-Qualification Notice */}
      <section className="py-32 px-6 max-w-4xl mx-auto bg-slate-50 border-y border-slate-200">
        <p className="text-lg text-slate-700 leading-relaxed text-center mb-8">
          Case submissions undergo preliminary review to determine advisory suitability.
        </p>
        <div className="w-20 h-[1px] bg-slate-300 mx-auto mb-8"></div>
        <p className="text-base text-slate-600 leading-relaxed text-center">
          All submissions are handled within structured confidential channels aligned with German data protection expectations.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white text-center border-t border-slate-200">
        <p className="text-slate-500 text-sm font-serif mb-1">Medical Care Germany</p>
        <p className="text-slate-400 text-xs">Independent Strategic Medical Advisory • Headquartered in Berlin</p>
        <p className="text-slate-300 text-xs mt-4">© 2026 Medical Care Germany</p>
        <p className="text-slate-400 text-xs mt-6">Operating within the regulatory and clinical standards of the German healthcare environment.</p>
      </footer>

    </div>
  );
}
