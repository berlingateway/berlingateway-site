import { Button } from "@/components/ui/button";
import { FileText, Users, Network, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PhysicianReferral() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/">Home</Link>
          <Link href="/physician-referral" className="text-slate-900">Physician Referral</Link>
          <Link href="/governmental-bodies">Embassies & Government</Link>
        </div>
        <a href="/#contact">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Confidential Inquiry
          </Button>
        </a>
      </nav>

      {/* Hero */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400 mb-8">For Referring Physicians</p>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-12 leading-tight">
          Physician Referral
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Referring physicians are provided structured advanced treatment pathways within Germany's hospital system for medically complex cases requiring cross-border coordination.
        </p>
      </section>

      {/* When Physicians Typically Refer */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-12">When Physicians Typically Refer</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-slate-300 pl-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Diagnostic Uncertainty</h3>
              <p className="text-slate-600 leading-relaxed">
                Cases requiring tertiary-level diagnostic evaluation or subspecialty consultation not readily available locally.
              </p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Treatment Resistance</h3>
              <p className="text-slate-600 leading-relaxed">
                Patients presenting with inadequate response to standard therapeutic approaches requiring advanced intervention strategies.
              </p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Need for Subspecialty Care</h3>
              <p className="text-slate-600 leading-relaxed">
                Access to highly specialized medical or surgical expertise within specific clinical domains.
              </p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Multidisciplinary Planning</h3>
              <p className="text-slate-600 leading-relaxed">
                Complex cases requiring coordinated input from multiple subspecialties and institutional resources.
              </p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Access to Advanced Surgical Environments</h3>
              <p className="text-slate-600 leading-relaxed">
                High-risk procedures requiring specialized perioperative infrastructure and subspecialty surgical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role in the Referral Pathway */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-slate-900 mb-12">Our Role in the Referral Pathway</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">Structured Medical File Review</h3>
            <p className="text-slate-600 leading-relaxed">
              Comprehensive analysis of clinical documentation, imaging, pathology, and treatment history to establish case complexity and institutional requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">Identification of Appropriate Institutions</h3>
            <p className="text-slate-600 leading-relaxed">
              Alignment with German hospitals and specialists based on clinical requirements, subspecialty expertise, and institutional capacity.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">Coordination Preparation</h3>
            <p className="text-slate-600 leading-relaxed">
              Structured preparation of case presentation, documentation transfer, and scheduling coordination with German medical institutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">Administrative Clarity</h3>
            <p className="text-slate-600 leading-relaxed">
              Management of logistical and administrative requirements to facilitate smooth cross-border treatment coordination.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">Continuity Communication When Appropriate</h3>
            <p className="text-slate-600 leading-relaxed">
              Structured communication channels between referring physicians and German specialists when clinically indicated and authorized.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Respect Block */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">Professional Respect</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Medical Care Germany maintains full respect for the referring physician's clinical authority.
            </p>
            <p>
              The organization does not interfere with medical judgment.
            </p>
            <p>
              Its role is structural and coordinative.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-serif text-slate-900 mb-8">Professional Coordination</h2>
        <p className="text-slate-600 leading-relaxed mb-12">
          For case-specific coordination inquiries, please initiate professional referral through our secure intake process.
        </p>
        <a href="/#contact">
          <Button className="bg-slate-900 text-white hover:bg-slate-800 px-10 py-6 text-base">
            Initiate Professional Referral
          </Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-slate-200">
        <p className="text-slate-500 text-sm font-serif mb-1">Medical Care Germany</p>
        <p className="text-slate-400 text-xs">Independent Strategic Medical Advisory • Headquartered in Berlin</p>
        <p className="text-slate-300 text-xs mt-4">© 2026 Berlin Medical Care</p>
        <p className="text-slate-400 text-xs mt-6">Operating within the regulatory and clinical standards of the German healthcare environment.</p>
      </footer>

    </div>
  );
}
