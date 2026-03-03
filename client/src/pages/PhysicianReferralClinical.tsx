import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ContactBar from "@/components/ContactBar";
import PremiumFooter from "@/components/PremiumFooter";

export default function PhysicianReferralClinical() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      <ContactBar />
      
      {/* Navigation */}
      <nav className="w-full py-8 px-8 flex justify-between items-center border-b border-slate-200">
        <Link href="/" className="text-xl font-serif tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral-clinical" className="text-slate-900">Physician Referral</Link>
          <Link href="/governmental-bodies">Embassies & Government</Link>
          <Link href="/private-medical-advisory">Private Advisory</Link>
        </div>
        <a href="/#contact">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Contact
          </Button>
        </a>
      </nav>

      {/* Hero */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-12">For Referring Physicians</p>
        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-16 leading-tight font-normal">
          Physician Referral & Clinical Coordination
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Referring physicians may coordinate structured treatment pathways for patients requiring advanced medical care within Germany through established professional channels.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
          We act as the clinical bridge between international decision-makers and Germany's university-hospital infrastructure.
        </p>
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto mb-6">
          Coordination facilitates clinical alignment, institutional interfaces, and continuity across providers.
        </p>
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto mb-6">
          Medical decision-making remains under physician oversight.
        </p>
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
          Coordination structures the operational environment for efficient clinical execution.
        </p>
      </section>

      {/* When Physicians Typically Engage */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-12 font-normal">When Physicians Typically Engage</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Complex multidisciplinary cases</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Patients seeking treatment abroad</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Diagnostic uncertainty</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">High-risk surgical pathways</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Oncology coordination</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Cases requiring university-level centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Communication Principle */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl font-serif text-slate-800 leading-relaxed">
          "All clinical communication is conducted through structured channels that respect physician oversight, preserve medical context, and maintain continuity of care."
        </p>
      </section>

      {/* Referral Process */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-16 font-normal">Referral Process</h2>
          <div className="space-y-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">Step 1</p>
              <p className="text-xl text-slate-900">Preliminary Clinical Context</p>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">Step 2</p>
              <p className="text-xl text-slate-900">Strategic Case Review</p>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">Step 3</p>
              <p className="text-xl text-slate-900">Institutional Alignment</p>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">Step 4</p>
              <p className="text-xl text-slate-900">Coordinated Treatment Pathway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Assurance Block */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Medical Care Germany operates with respect for physician leadership and institutional treatment frameworks.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Our function is coordination — not clinical substitution.
        </p>
      </section>

            {/* Pre-Qualification Notice */}
      <section className="py-32 px-6 max-w-4xl mx-auto bg-white border-y border-slate-200">
        <p className="text-lg text-slate-700 leading-relaxed text-center">
          Case submissions undergo preliminary review to determine advisory suitability.
        </p>
      </section>

      {/* Referral Form */}
      <section className="py-40 px-6 max-w-3xl mx-auto">
        <div className="referral-form-container">
          <h2 className="text-3xl font-serif text-slate-900 mb-16 text-center font-normal">Clinical Referral Submission</h2>
          
          <form
            action="https://formsubmit.co/info@medicalcaregermany.com"
            method="POST"
            encType="multipart/form-data"
            className="space-y-8"
          >
            {/* FormSubmit.co control fields */}
            <input type="hidden" name="_subject" value="Medical Care Germany — Clinical Referral Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://medicalcaregermany.com/thankyou.html" />
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Referring Physician Name</label>
              <input type="text" name="Physician Name" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Medical Institution / Practice</label>
              <input type="text" name="Institution" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Specialty</label>
              <input type="text" name="Specialty" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Country</label>
              <input type="text" name="Country" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Patient Clinical Summary</label>
              <textarea name="Clinical Summary" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900 h-32" />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Specific Clinical Question</label>
              <textarea name="Clinical Question" required className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900 h-32" />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Email Address</label>
              <input type="email" name="email" required placeholder="your@email.com" className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900" />
            </div>

            <div className="pt-8">
              <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 py-6 text-base">
                Submit Clinical Referral
              </Button>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6">
              All referrals are handled with professional discretion.
            </p>
            <p className="text-center text-xs text-slate-500 mt-3">
              Case reviews are conducted in alignment with German clinical governance practices.
            </p>
          </form>
        </div>
      </section>

      <PremiumFooter />

    </div>
  );
}
