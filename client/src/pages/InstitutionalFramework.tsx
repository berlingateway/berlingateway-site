import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InstitutionalFramework() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-100">
        <Link href="/">
          <span className="text-xl font-serif font-normal tracking-tight text-slate-900 cursor-pointer">Medical Care Germany</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <Link href="/physician-referral-interface" className="hover:text-slate-900 transition-colors">Physician Referral</Link>
          <Link href="/governmental-bodies" className="hover:text-slate-900 transition-colors">Embassies & Government</Link>
          <Link href="/private-advisory" className="hover:text-slate-900 transition-colors">Private Advisory</Link>
          <Link href="/institutional-framework" className="hover:text-slate-900 transition-colors">Institutional Framework</Link>
        </div>
        <Link href="/gateway">
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
            Confidential Inquiry
          </Button>
        </Link>
      </nav>

      {/* Page Header */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center border-b border-slate-100">
        <h1 className="text-4xl md:text-5xl font-serif font-normal text-slate-900 leading-tight mb-6">
          Institutional Framework & Governance
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
          The operational structure, governance principles, and institutional alignment that define Medical Care Germany's role within the German healthcare environment.
        </p>
      </section>

      {/* Section 1: Structural Positioning */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-b border-slate-100">
        <h2 className="text-2xl font-serif font-normal text-slate-900 mb-6">Structural Positioning</h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Medical Care Germany functions as an independent strategic medical coordination office supporting cross-border treatment pathways within Germany's advanced hospital system. The office provides structured access and clinical pathway oversight for international patients, referring physicians, and institutional sponsors navigating complex medical cases.
          </p>
          <p>
            Medical Care Germany is not a hospital. It does not provide direct clinical treatment, diagnostic services, or surgical interventions. Medical Care Germany is not a broker. It does not operate on commission-based arrangements with healthcare providers or facilitate transactional relationships between patients and institutions. Medical Care Germany is not a travel agency. It does not arrange tourism services, leisure accommodations, or non-medical logistics.
          </p>
          <p>
            The office operates as a medical coordination entity, aligning clinical requirements with institutional capabilities across Germany's healthcare infrastructure.
          </p>
          <p>
            Operating within the structural standards of the German healthcare system and international referral protocols.
          </p>
        </div>
      </section>

      {/* Section 2: Clinical Alignment Principle */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-b border-slate-100">
        <h2 className="text-2xl font-serif font-normal text-slate-900 mb-6">Clinical Alignment Principle</h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Institutional selection and treatment pathway design are driven exclusively by clinical considerations. The coordination process evaluates each case according to medical indication, clinical urgency, specialization requirements, and treatment pathway suitability.
          </p>
          <p>
            Hospital and specialist selection follows a structured assessment of clinical capabilities, departmental expertise, procedural volume, and institutional experience with the specific medical condition under review. Geographic proximity, logistical efficiency, and continuity of care are secondary considerations that support, but do not supersede, clinical alignment.
          </p>
          <p>
            The office does not engage in pricing strategy, cost negotiation, or financial arrangement discussions with healthcare providers. Clinical coordination remains independent of commercial considerations to preserve the integrity of medical decision-making.
          </p>
        </div>
      </section>

      {/* Section 3: Governance Model */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-b border-slate-100">
        <h2 className="text-2xl font-serif font-normal text-slate-900 mb-6">Governance Model</h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Case coordination follows defined procedural frameworks designed to maintain clinical continuity across institutions, ensure documentation integrity, and preserve medical oversight throughout the treatment pathway.
          </p>
          <p>
            Structured oversight mechanisms include preliminary case evaluation, institutional alignment assessment, specialist consultation coordination, treatment pathway documentation, and post-treatment continuity planning. Each stage operates according to established protocols that prioritize medical appropriateness and patient safety.
          </p>
          <p>
            The governance structure ensures that clinical decisions remain under the authority of licensed medical professionals, while coordination activities support the operational execution of approved treatment plans. This separation preserves the clinical independence of treating physicians while providing the administrative infrastructure necessary for complex cross-border medical cases.
          </p>
        </div>
      </section>

      {/* Section 4: Data Protection & Confidentiality */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-b border-slate-100">
        <h2 className="text-2xl font-serif font-normal text-slate-900 mb-6">Data Protection & Confidentiality</h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            All case documentation, medical records, and patient information are handled in accordance with German data protection standards. The office operates under strict confidentiality protocols appropriate for sensitive medical information and diplomatic referrals.
          </p>
          <p>
            Document flows are controlled through secure channels, with access restricted to authorized personnel directly involved in case coordination. Medical records are transmitted only to licensed healthcare providers participating in the approved treatment pathway, and only to the extent necessary for clinical decision-making.
          </p>
          <p>
            The office does not disclose patient identities, case details, or institutional affiliations to third parties without explicit authorization. Confidentiality extends to all aspects of case coordination, including the existence of ongoing coordination activities.
          </p>
        </div>
      </section>

      {/* Section 5: Professional Interfaces */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-b border-slate-100">
        <h2 className="text-2xl font-serif font-normal text-slate-900 mb-6">Professional Interfaces</h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Medical Care Germany maintains structured communication channels for institutional partners, governmental sponsors, referring physicians, and embassy medical officers. These interfaces are designed to support professional-level coordination appropriate for complex international medical cases.
          </p>
          <p>
            Embassy medical officers and governmental sponsors receive direct coordination support for sponsored patients, including case status updates, institutional alignment reports, and treatment pathway documentation. Referring physicians access clinical coordination channels that preserve continuity of medical oversight and facilitate specialist-to-specialist communication. Institutional administrators engage through formal referral pathways designed for high-level medical cases requiring structured oversight.
          </p>
          <p>
            All professional interfaces operate according to established protocols that respect institutional hierarchies, preserve confidentiality, and maintain the formality appropriate for governmental and diplomatic engagement.
          </p>
        </div>
      </section>

      {/* Section 6: Medical Selectivity Statement */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-b border-slate-100">
        <h2 className="text-2xl font-serif font-normal text-slate-900 mb-6">Medical Selectivity Statement</h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            The office prioritizes medically complex cases where structured coordination materially improves treatment direction, institutional alignment, or clinical continuity. Case acceptance is determined by the degree to which professional coordination can contribute to medical decision-making, not by patient demographics or financial capacity. Cases that benefit from strategic medical oversight typically involve diagnostic uncertainty requiring tertiary evaluation, treatment pathways spanning multiple specialized institutions, high-risk interventions requiring institutional selection expertise, or cross-border medical coordination for governmental or diplomatic referrals. The office does not accept cases where standard patient navigation services would be sufficient, where medical urgency precludes structured evaluation, or where clinical requirements fall outside the scope of Germany's healthcare infrastructure.
          </p>
        </div>
      </section>

      {/* Section 7: Operational Discretion */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif font-normal text-slate-900 mb-6">Operational Discretion</h2>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Coordination activities are conducted with professional discretion appropriate for diplomatic and high-level medical referrals. The office recognizes that many cases involve sensitive circumstances requiring confidential handling, including governmental sponsorship, diplomatic status, or personal circumstances that necessitate operational privacy.
          </p>
          <p>
            Discretion extends to all external communications, institutional engagements, and administrative processes. The office does not publicly disclose case portfolios, patient testimonials, or institutional partnerships. Operational visibility is limited to what is necessary for professional credibility and institutional trust.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-slate-100 mt-24">
        <p className="text-slate-400 text-sm font-serif">Medical Care Germany</p>
        <p className="text-slate-300 text-xs mt-2">Strategic Medical Coordination • Berlin, Germany</p>
      </footer>

    </div>
  );
}
