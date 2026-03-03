import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ContactBar from "@/components/ContactBar";
import PremiumFooter from "@/components/PremiumFooter";

export default function PrivateMedicalAdvisory() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      <ContactBar />
      
      {/* Navigation */}
      <nav className="w-full py-8 px-8 flex justify-between items-center border-b border-slate-200">
        <Link href="/" className="text-xl font-serif tracking-tight text-slate-900">
          Medical Care Germany
        </Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-500">
          <Link href="/physician-referral">Physician Referral</Link>
          <Link href="/governmental-bodies">Embassies & Government</Link>
          <Link href="/private-medical-advisory" className="text-slate-900">Private Advisory</Link>
        </div>
        <a href="/#contact">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
            Contact
          </Button>
        </a>
      </nav>

      {/* Hero */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-12">For International Private Patients</p>
        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-16 leading-tight font-normal">
          Private Medical Advisory
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
          A limited number of medically complex international cases requiring structured clinical coordination within Germany are reviewed for coordination eligibility.
        </p>
        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
          Engagement is selective and based on strategic case evaluation.
        </p>
      </section>

      {/* Positioning Block */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-12 font-normal">Appropriate Clinical Situations</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-12">
            Coordination is structured for patients presenting with:
          </p>
          <div className="space-y-6 mb-16">
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Complex or high-risk diagnoses</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Unresolved medical trajectories</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Prior treatment failure</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Need for multidisciplinary evaluation</p>
            </div>
            <div className="border-l-2 border-slate-300 pl-8">
              <p className="text-slate-700 text-lg">Time-sensitive conditions</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Medical Care Germany operates as a strategic advisory — ensuring clarity, alignment, and continuity across institutions.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            We do not replace physicians or hospitals.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            We structure the pathway.
          </p>
        </div>
      </section>

      {/* Elite Filter */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl font-serif text-slate-800 leading-relaxed italic">
          "Medical Care Germany prioritizes cases where structured oversight can meaningfully influence treatment direction."
        </p>
      </section>

      {/* Discretion Block */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-8 font-normal">Confidentiality</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            All inquiries are handled under strict confidentiality protocols aligned with German data protection standards.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Case information is reviewed within controlled medical-administrative channels.
          </p>
        </div>
      </section>

      {/* Pre-Qualification Notice */}
      <section className="py-32 px-6 max-w-4xl mx-auto bg-white border-y border-slate-200">
        <p className="text-lg text-slate-700 leading-relaxed text-center">
          Case submissions undergo preliminary review to determine advisory suitability.
        </p>
      </section>

      {/* Form */}
      <section className="py-40 px-6 max-w-3xl mx-auto">
        <div className="inquiry-form-container">
          <h2 className="text-3xl font-serif text-slate-900 mb-16 text-center font-normal">Private Medical Inquiry</h2>
          
          <form
            action="https://formsubmit.co/info@medicalcaregermany.com"
            method="POST"
            encType="multipart/form-data"
            className="space-y-8"
          >
            {/* FormSubmit.co control fields */}
            <input type="hidden" name="_subject" value="Medical Care Germany — Private Medical Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://medicalcaregermany.com/thankyou.html" />
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Full Name</label>
              <input
                type="text"
                name="Full Name"
                required
                className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Country of Residence</label>
              <input
                type="text"
                name="Country"
                required
                className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Ability to Travel to Germany</label>
              <select
                name="Ability to Travel"
                required
                defaultValue=""
                className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900"
              >
                <option value="" disabled>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Under evaluation">Under evaluation</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Medical Urgency</label>
              <select
                name="Medical Urgency"
                required
                defaultValue=""
                className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900"
              >
                <option value="" disabled>Select</option>
                <option value="Routine">Routine</option>
                <option value="Urgent">Urgent</option>
                <option value="Time-sensitive">Time-sensitive</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Prior Treatments Performed</label>
              <textarea
                name="Prior Treatments"
                required
                className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900 h-32"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm text-slate-600 uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full p-4 border border-slate-300 focus:border-slate-500 outline-none transition-colors bg-white text-slate-900"
              />
            </div>

            <div className="pt-8">
              <Button
                type="submit"
                className="w-full bg-slate-900 text-white hover:bg-slate-800 py-6 text-base"
              >
                Submit for Medical Consideration
              </Button>
            </div>

            <p className="text-center text-xs text-slate-400 mt-6">
              All inquiries are handled with strict confidentiality.
            </p>
          </form>
        </div>
      </section>

      <PremiumFooter />

    </div>
  );
}
