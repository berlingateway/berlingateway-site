import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function PhysicianReferralInterface() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-interface" className="hover:text-slate-900 transition-colors">Physician Referral</Link>
          <Link href="/governmental-bodies" className="hover:text-slate-900 transition-colors">Embassies & Government</Link>
          <Link href="/private-medical-advisory" className="hover:text-slate-900 transition-colors">Private Advisory</Link>
          <Link href="/#contact" className="hover:text-slate-900 transition-colors">Contact</Link>
        </div>
        <Link href="/#contact">
          <Button variant="outline" className="rounded-none border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Confidential Inquiry
          </Button>
        </Link>
      </nav>

      {/* Header */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-wider text-slate-400 font-medium">Professional Clinical Referral Gateway</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-normal text-slate-900 leading-tight mb-8">
          Physician Referral Interface
        </h1>
        
        {/* 1. Professional Opening Statement */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The Physician Referral Interface provides referring physicians with structured access to German medical institutions for medically complex cases requiring advanced treatment pathways.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            This interface functions as a clinical coordination channel aligned with institutional medical standards and cross-border care protocols.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Due to coordination depth and cross-border clinical requirements, case intake is selectively limited.
          </p>
        </div>
      </section>

      {/* 2. Appropriate Referral Scenarios */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-slate-50">
        <h2 className="text-3xl font-serif text-slate-900 mb-10 font-normal">Appropriate Referral Scenarios</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-lg text-slate-700">Unresolved diagnostic trajectories</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-lg text-slate-700">Multidisciplinary treatment requirements</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-lg text-slate-700">Rare conditions</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-lg text-slate-700">High-risk surgical candidates</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-lg text-slate-700">Treatment-resistant cases</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-lg text-slate-700">Cross-border care complexity</p>
          </div>
        </div>
      </section>

      {/* 3. Structured Review Process */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-slate-900 mb-8 font-normal">Structured Review Process</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Submitted documentation undergoes organized medical-administrative review prior to institutional alignment.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Case acceptance is selective and determined by clinical appropriateness, institutional compatibility, and treatment pathway feasibility.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Referral submission does not constitute acceptance or guarantee of coordination services.
        </p>
      </section>

      {/* 4. Collaboration Positioning */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-slate-50">
        <h2 className="text-3xl font-serif text-slate-900 mb-8 font-normal">Collaboration Framework</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Coordination occurs with accredited hospitals and specialized physicians based strictly on clinical requirements.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Institutional selection is determined by medical appropriateness, treatment pathway compatibility, and clinical governance standards.
        </p>
      </section>

      {/* 5. Confidential Document Handling */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-slate-900 mb-8 font-normal">Confidential Document Handling</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          All medical documentation is processed under strict confidentiality protocols aligned with German data protection standards.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Information flow is controlled and shared only with authorized medical entities involved in the treatment pathway coordination.
        </p>
      </section>

      {/* Pre-Qualification Notice */}
      <section className="py-12 px-6 max-w-4xl mx-auto bg-slate-100 border-y border-slate-300">
        <p className="text-base text-slate-600 text-center leading-relaxed">
          Case submissions undergo preliminary review to determine advisory suitability.
        </p>
      </section>

      {/* 6. Physician-Level Form */}
      <section className="py-20 px-6 max-w-3xl mx-auto" id="referral-form">
        <h2 className="text-3xl font-serif text-slate-900 mb-12 font-normal text-center">Professional Referral Submission</h2>
        
          <Card className="p-10 shadow-sm border-slate-200 bg-white">
            <form
              action="https://formsubmit.co/info@medicalcaregermany.com"
              method="POST"
              encType="multipart/form-data"
              className="space-y-8"
            >
              {/* FormSubmit.co control fields */}
              <input type="hidden" name="_subject" value="Medical Care Germany — Professional Referral Submission" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://medicalcaregermany.com/thankyou.html" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">Referring Physician Name *</label>
                <input type="text" name="Physician Name" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">Medical Institution *</label>
                <input type="text" name="Institution" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">Country *</label>
                  <input type="text" name="Country" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">Specialty *</label>
                  <input type="text" name="Specialty" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">Professional Email *</label>
                <input type="email" name="email" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">Case Summary *</label>
                <textarea name="Case Summary" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900 h-40" placeholder="Clinical presentation, diagnostic findings, treatment history, and referral rationale" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">Urgency Level *</label>
                <select name="Urgency" required defaultValue="" className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900">
                  <option value="" disabled>Select urgency level</option>
                  <option value="Routine">Routine</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Time-Sensitive">Time-Sensitive</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">Document Upload</label>
                <p className="text-xs text-slate-500 mb-2">Complete medical documentation enables efficient institutional evaluation.</p>
                <input type="file" name="Medical Documents" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
                <p className="text-xs text-slate-500">Accepted formats: PDF, DOC, DOCX, JPG, PNG</p>
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 py-6 text-base font-normal tracking-wide">
                  Submit Professional Referral
                </Button>
              </div>

              <p className="text-center text-xs text-slate-500 mt-6">
                All submissions are handled within structured confidential channels aligned with German data protection expectations.
              </p>
              <p className="text-center text-xs text-slate-500 mt-3">
                Case reviews are conducted in alignment with German clinical governance practices.
              </p>
            </form>
          </Card>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white text-center border-t border-slate-100 mt-20">
        <p className="text-slate-400 text-sm font-serif">Medical Care Germany © 2026</p>
        <p className="text-slate-300 text-xs mt-2">Strategic Medical Advisory • Berlin, Germany</p>
      </footer>

    </div>
  );
}
