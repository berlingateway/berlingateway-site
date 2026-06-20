import MedicalConditionPage from "@/components/MedicalConditionPage";
import SmartNavLayer from "@/components/SmartNavLayer";
import HreflangTags from "@/components/HreflangTags";

const FAQ_ITEMS = [
  {
    question: "What are the treatment options for prostate cancer in Germany?",
    answer:
      "German university urology centers offer the full spectrum of prostate cancer treatment — from active surveillance for low-risk disease to robotic-assisted radical prostatectomy (RARP), precision radiation therapy (IMRT, SBRT), focal therapy including HIFU, and systemic therapies for advanced disease. PSMA-targeted radioligand therapy is available at German nuclear medicine centers for eligible patients with metastatic castration-resistant prostate cancer.",
  },
  {
    question: "What is PSMA PET-CT and is it available in Germany?",
    answer:
      "PSMA PET-CT is an advanced imaging technique that detects prostate cancer spread with significantly higher sensitivity than conventional CT or bone scan, particularly in the setting of biochemical recurrence after treatment. It is widely available at German university hospitals and has become a standard staging tool for high-risk and recurrent prostate cancer cases.",
  },
  {
    question: "How does robotic prostatectomy in Germany compare to other countries?",
    answer:
      "German university urology departments perform robotic-assisted radical prostatectomy (RARP) at high surgical volumes, which is associated with favorable oncological and functional outcomes including continence and potency preservation. The multidisciplinary tumor board review process ensures that surgery is recommended only when it represents the optimal treatment approach for the individual patient.",
  },
  {
    question: "What documents are needed for a prostate cancer specialist evaluation in Germany?",
    answer:
      "Required documents include: PSA history, biopsy pathology report with Gleason score, staging imaging (MRI, CT, bone scan, PSMA PET-CT if available), prior treatment records, and current medication list. Documents in Arabic are accepted; translation is coordinated as part of the process. A coordinator reviews the file and identifies the appropriate specialist.",
  },
  {
    question: "Can international patients access PSMA radioligand therapy in Germany?",
    answer:
      "Yes. PSMA-targeted radioligand therapy (Lu-177 PSMA) is available at German nuclear medicine centers for eligible patients with metastatic castration-resistant prostate cancer. Eligibility is determined through specialist evaluation including PSMA PET-CT imaging. International patients can submit their medical file for an initial assessment of eligibility.",
  },
  {
    question: "Is prostate cancer with liver metastases treatable in Germany?",
    answer:
      "Yes. Visceral metastatic prostate cancer, including liver metastases, is managed in German university centers using a combination of systemic therapy (Lu-177 PSMA, novel hormonal agents, or chemotherapy) and liver-directed local treatments such as TACE, SBRT, or radiofrequency ablation. All cases are reviewed by a multidisciplinary tumor board.",
  },
  {
    question: "What is the cost of prostate cancer treatment in Germany?",
    answer:
      "Costs are determined case by case depending on stage, treatment modality, and hospital. There is no standard fixed price. We obtain a formal cost estimate from the hospital at no charge — submit your medical file and we will return with a detailed breakdown within 3–5 working days.",
  },
  {
    question: "Can I get a second opinion on my prostate cancer diagnosis from a German specialist?",
    answer:
      "Yes. We coordinate second opinion consultations with department heads at Charité, Vivantes, and other certified centers. Submit your pathology report, PSA history, biopsy results, and imaging — the specialist reviews remotely and provides a written assessment.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const ADDITIONAL_SECTIONS = `
<section style="padding: 60px 0; background: #f8f9fa;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <p style="font-size: 12px; font-weight: 700; color: #b8902a; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">Treatment Pathways</p>
    <h2 style="font-size: 28px; color: #0f1f35; margin-bottom: 16px; line-height: 1.4;">Treatment Options by Stage</h2>
    <p style="font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 36px;">
      Treatment selection in German prostate cancer centers is determined by a multidisciplinary tumor board — urologist, radiation oncologist, and medical oncologist reviewing each case together. The approach depends on PSA level, Gleason score, clinical stage, and patient preference.
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
      <div style="background: #fff; border: 1px solid #e0e0e0; border-top: 4px solid #0f1f35; border-radius: 8px; padding: 28px 22px;">
        <div style="font-size: 13px; font-weight: 700; color: #b8902a; margin-bottom: 8px;">LOW TO INTERMEDIATE RISK</div>
        <h3 style="font-size: 17px; color: #0f1f35; margin-bottom: 14px;">Localised Disease</h3>
        <ul style="list-style: none; padding: 0; font-size: 14px; color: #555; line-height: 2.1;">
          <li>→ Active surveillance (PSA monitoring)</li>
          <li>→ Robotic radical prostatectomy (da Vinci)</li>
          <li>→ Stereotactic body radiotherapy (SBRT)</li>
          <li>→ Brachytherapy (seed implant)</li>
          <li>→ Focal HIFU therapy</li>
        </ul>
      </div>
      <div style="background: #fff; border: 1px solid #e0e0e0; border-top: 4px solid #b8902a; border-radius: 8px; padding: 28px 22px;">
        <div style="font-size: 13px; font-weight: 700; color: #b8902a; margin-bottom: 8px;">HIGH RISK / LOCALLY ADVANCED</div>
        <h3 style="font-size: 17px; color: #0f1f35; margin-bottom: 14px;">Advanced Local Disease</h3>
        <ul style="list-style: none; padding: 0; font-size: 14px; color: #555; line-height: 2.1;">
          <li>→ Radical prostatectomy + lymph node dissection</li>
          <li>→ External beam radiotherapy + ADT</li>
          <li>→ Extended pelvic lymph node dissection</li>
          <li>→ Salvage radiation after PSA recurrence</li>
        </ul>
      </div>
      <div style="background: #fff; border: 1px solid #e0e0e0; border-top: 4px solid #c0392b; border-radius: 8px; padding: 28px 22px;">
        <div style="font-size: 13px; font-weight: 700; color: #c0392b; margin-bottom: 8px;">METASTATIC / STAGE IV</div>
        <h3 style="font-size: 17px; color: #0f1f35; margin-bottom: 14px;">Advanced &amp; Metastatic</h3>
        <ul style="list-style: none; padding: 0; font-size: 14px; color: #555; line-height: 2.1;">
          <li>→ PSMA radioligand therapy (Lu-177)</li>
          <li>→ Enzalutamide / Abiraterone</li>
          <li>→ Docetaxel / Cabazitaxel chemotherapy</li>
          <li>→ PARP inhibitors (BRCA-mutated)</li>
          <li>→ Liver metastases: TACE / RFA / SBRT</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section style="padding: 60px 0; background: #0f1f35; color: #fff;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <p style="font-size: 12px; font-weight: 700; color: #d4aa50; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">Advanced Diagnostics</p>
    <h2 style="font-size: 28px; color: #fff; margin-bottom: 16px; line-height: 1.4;">PSMA PET-CT — Germany's Diagnostic Advantage</h2>
    <p style="font-size: 16px; color: #c8d8e8; line-height: 1.8; margin-bottom: 36px;">
      PSMA PET-CT has transformed prostate cancer staging in Germany. It detects nodal and distant metastases — including liver metastases — with significantly higher sensitivity than conventional CT or bone scan, particularly in cases of PSA recurrence after local treatment.
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
      <div style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 24px 18px;">
        <div style="font-size: 28px; font-weight: 700; color: #d4aa50; margin-bottom: 8px;">Ga-68</div>
        <h3 style="font-size: 15px; color: #fff; margin-bottom: 6px;">Gallium PSMA PET-CT</h3>
        <p style="font-size: 13px; color: #9ab; line-height: 1.6;">Standard PSMA imaging — detects recurrence at PSA levels as low as 0.2 ng/mL</p>
      </div>
      <div style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 24px 18px;">
        <div style="font-size: 28px; font-weight: 700; color: #d4aa50; margin-bottom: 8px;">Lu-177</div>
        <h3 style="font-size: 15px; color: #fff; margin-bottom: 6px;">PSMA Radioligand Therapy</h3>
        <p style="font-size: 13px; color: #9ab; line-height: 1.6;">Theranostic approach for mCRPC — available in German university centers after VISION trial results</p>
      </div>
      <div style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 24px 18px;">
        <div style="font-size: 28px; font-weight: 700; color: #d4aa50; margin-bottom: 8px;">mpMRI</div>
        <h3 style="font-size: 15px; color: #fff; margin-bottom: 6px;">Multiparametric MRI</h3>
        <p style="font-size: 13px; color: #9ab; line-height: 1.6;">PI-RADS scoring for local staging and targeted biopsy guidance — standard in German centers</p>
      </div>
      <div style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 24px 18px;">
        <div style="font-size: 28px; font-weight: 700; color: #d4aa50; margin-bottom: 8px;">NGS</div>
        <h3 style="font-size: 15px; color: #fff; margin-bottom: 6px;">Molecular Tumour Profiling</h3>
        <p style="font-size: 13px; color: #9ab; line-height: 1.6;">BRCA1/2 and HRR gene panel testing — determines eligibility for PARP inhibitors and clinical trials</p>
      </div>
    </div>
  </div>
</section>

<section style="padding: 60px 0; background: #fff;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <p style="font-size: 12px; font-weight: 700; color: #b8902a; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">Advanced Disease</p>
    <h2 style="font-size: 28px; color: #0f1f35; margin-bottom: 16px; line-height: 1.4;">Prostate Cancer with Liver Metastases — Treatment in Germany</h2>
    <p style="font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 30px;">
      Liver metastases from prostate cancer (visceral metastatic disease) represent an advanced stage requiring a coordinated multidisciplinary approach. German university centers manage this with concurrent urological oncology, interventional radiology, and hepatobiliary surgery involvement.
    </p>
    <div style="background: #f8f9fa; border: 1px solid #e0e0e0; border-right: 4px solid #b8902a; border-radius: 8px; padding: 28px; margin-bottom: 28px;">
      <h3 style="font-size: 18px; color: #0f1f35; margin-bottom: 16px;">Local Treatment Options for Liver Metastases</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div>
          <div style="font-weight: 700; color: #0f1f35; font-size: 14px; margin-bottom: 6px;">TACE</div>
          <p style="font-size: 13px; color: #666; line-height: 1.6;">Transarterial chemoembolisation — delivers chemotherapy directly to liver lesions via catheter</p>
        </div>
        <div>
          <div style="font-weight: 700; color: #0f1f35; font-size: 14px; margin-bottom: 6px;">SBRT / SABR</div>
          <p style="font-size: 13px; color: #666; line-height: 1.6;">Stereotactic body radiotherapy — highly precise radiation targeting individual liver metastases</p>
        </div>
        <div>
          <div style="font-weight: 700; color: #0f1f35; font-size: 14px; margin-bottom: 6px;">RFA / MWA</div>
          <p style="font-size: 13px; color: #666; line-height: 1.6;">Radiofrequency or microwave ablation — minimally invasive destruction of liver lesions under imaging</p>
        </div>
        <div>
          <div style="font-weight: 700; color: #0f1f35; font-size: 14px; margin-bottom: 6px;">SIRT / Y-90</div>
          <p style="font-size: 13px; color: #666; line-height: 1.6;">Selective internal radiation — microspheres delivering internal radiation to liver metastases</p>
        </div>
      </div>
    </div>
    <p style="font-size: 15px; color: #555; line-height: 1.8;">
      Systemic treatment — typically Lu-177 PSMA therapy, novel hormonal agents, or chemotherapy — runs in parallel with local liver-directed treatment where appropriate. All cases are reviewed in the weekly tumor board before any treatment decision is made.
    </p>
  </div>
</section>

<section style="padding: 60px 0; background: #f0f4f8;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <p style="font-size: 12px; font-weight: 700; color: #b8902a; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">Centers of Excellence</p>
    <h2 style="font-size: 28px; color: #0f1f35; margin-bottom: 16px; line-height: 1.4;">Prostate Cancer Centers We Work With</h2>
    <p style="font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 30px;">
      We coordinate with certified prostate cancer centers (Prostatakarzinomzentrum) holding DKG or DGU certification — the highest quality standard in German oncology.
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px;">
      <div style="background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 22px; border-right: 4px solid #b8902a;">
        <div style="font-size: 12px; color: #b8902a; font-weight: 700; margin-bottom: 6px;">BERLIN</div>
        <h3 style="font-size: 16px; color: #0f1f35; margin-bottom: 8px;">Charité — Universitätsmedizin Berlin</h3>
        <p style="font-size: 13px; color: #666; line-height: 1.6;">Department of Urology with full PSMA PET-CT, robotic surgery (da Vinci Xi), and radioligand therapy program.</p>
      </div>
      <div style="background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 22px; border-right: 4px solid #b8902a;">
        <div style="font-size: 12px; color: #b8902a; font-weight: 700; margin-bottom: 6px;">BERLIN</div>
        <h3 style="font-size: 16px; color: #0f1f35; margin-bottom: 8px;">Vivantes Humboldt-Klinikum</h3>
        <p style="font-size: 13px; color: #666; line-height: 1.6;">Certified prostate cancer center with multidisciplinary tumor board and full urological oncology services.</p>
      </div>
      <div style="background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 22px; border-right: 4px solid #b8902a;">
        <div style="font-size: 12px; color: #b8902a; font-weight: 700; margin-bottom: 6px;">NATIONWIDE</div>
        <h3 style="font-size: 16px; color: #0f1f35; margin-bottom: 8px;">Helios Kliniken</h3>
        <p style="font-size: 13px; color: #666; line-height: 1.6;">Network of DKG-certified cancer centers across Germany with standardised prostate cancer protocols.</p>
      </div>
      <div style="background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 22px; border-right: 4px solid #b8902a;">
        <div style="font-size: 12px; color: #b8902a; font-weight: 700; margin-bottom: 6px;">BONN</div>
        <h3 style="font-size: 16px; color: #0f1f35; margin-bottom: 8px;">Universitätsklinikum Bonn</h3>
        <p style="font-size: 13px; color: #666; line-height: 1.6;">Comprehensive cancer center with dedicated urological oncology and nuclear medicine departments.</p>
      </div>
    </div>
  </div>
</section>

<section style="padding: 60px 0; background: #fff;">
  <div style="max-width: 900px; margin: 0 auto; padding: 0 24px;">
    <p style="font-size: 12px; font-weight: 700; color: #b8902a; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">Cost &amp; Planning</p>
    <h2 style="font-size: 28px; color: #0f1f35; margin-bottom: 16px; line-height: 1.4;">Cost of Prostate Cancer Treatment in Germany</h2>
    <p style="font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 24px;">
      Treatment costs depend on the clinical stage, chosen hospital, and treatment protocol. There is no single fixed price — costs are determined case by case following specialist review of your pathology and imaging.
    </p>
    <div style="background: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 8px; padding: 28px; margin-bottom: 24px;">
      <h3 style="font-size: 17px; color: #0f1f35; margin-bottom: 18px;">What Determines the Final Cost</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px;">
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="width: 24px; height: 24px; background: #0f1f35; color: #d4aa50; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 2px;">1</div>
          <div>
            <div style="font-weight: 600; font-size: 14px; color: #0f1f35; margin-bottom: 4px;">Disease stage</div>
            <p style="font-size: 13px; color: #666; line-height: 1.5;">Localised vs metastatic disease requires entirely different resources</p>
          </div>
        </div>
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="width: 24px; height: 24px; background: #0f1f35; color: #d4aa50; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 2px;">2</div>
          <div>
            <div style="font-weight: 600; font-size: 14px; color: #0f1f35; margin-bottom: 4px;">Treatment modality</div>
            <p style="font-size: 13px; color: #666; line-height: 1.5;">Robotic surgery, radiation, or Lu-177 PSMA — each has a different cost structure</p>
          </div>
        </div>
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="width: 24px; height: 24px; background: #0f1f35; color: #d4aa50; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 2px;">3</div>
          <div>
            <div style="font-weight: 600; font-size: 14px; color: #0f1f35; margin-bottom: 4px;">Hospital &amp; specialist</div>
            <p style="font-size: 13px; color: #666; line-height: 1.5;">University hospital vs private clinic and department head consultation fees</p>
          </div>
        </div>
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="width: 24px; height: 24px; background: #0f1f35; color: #d4aa50; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 2px;">4</div>
          <div>
            <div style="font-weight: 600; font-size: 14px; color: #0f1f35; margin-bottom: 4px;">Diagnostics required</div>
            <p style="font-size: 13px; color: #666; line-height: 1.5;">PSMA PET-CT, mpMRI, genomic profiling — billed separately</p>
          </div>
        </div>
      </div>
    </div>
    <div style="background: linear-gradient(135deg, #0f1f35, #1a3a5c); color: #fff; border-radius: 8px; padding: 28px; text-align: center;">
      <div style="font-size: 18px; font-weight: 700; margin-bottom: 10px;">We obtain a formal cost estimate from the hospital — at no charge to you</div>
      <p style="font-size: 15px; color: #c8d8e8; margin-bottom: 20px;">Send us your PSA history, biopsy report, and latest imaging. We submit to the relevant specialist and return with a detailed cost breakdown before any commitment.</p>
      <a href="https://tally.so/r/68MrBP" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #b8902a; color: #fff; padding: 13px 32px; border-radius: 6px; text-decoration: none; font-size: 16px; font-weight: 600;">Request Cost Estimate — Free</a>
    </div>
  </div>
</section>
`;

export default function ProstateCancer() {
  return (
    <>
      <SmartNavLayer currentPath="/prostate-cancer-treatment-germany" />
      <HreflangTags currentPath="/prostate-cancer-treatment-germany" />
      <MedicalConditionPage
      metaTitle="Prostate Cancer Treatment in Germany | Expert Review Before Any Decision"
      metaDescription="Complex prostate cancer cases reviewed by specialist professors at German university hospitals. Send your medical file — response within 24 hours."
      canonicalPath="/prostate-cancer-treatment-germany"
      headline="Prostate Cancer Treatment in Germany"
      subtitle="Advanced urological oncology including robotic surgery at German university hospitals."
      introduction="Prostate cancer management in Germany is conducted within certified prostate cancer centers that apply multidisciplinary tumor board review for all cases. German university urology departments offer the full spectrum of treatment options — from active surveillance for low-risk disease to radical prostatectomy, radiation therapy, and systemic therapies for advanced and metastatic disease."
      aboutCondition="Prostate cancer is the most common malignancy in men and encompasses a wide range of disease stages and risk profiles. Risk stratification based on PSA level, Gleason score, and clinical stage guides treatment decisions. PSMA PET-CT has become an important staging tool in Germany for detecting nodal and distant metastases with higher sensitivity than conventional imaging, particularly in the context of biochemical recurrence."
      whyGermany="German university urology centers perform robotic-assisted radical prostatectomy (RARP) with high surgical volume, which is associated with favorable functional and oncological outcomes. PSMA-targeted radioligand therapy is available at German nuclear medicine centers for eligible patients with metastatic castration-resistant prostate cancer, and focal therapy options including HIFU are offered at selected centers."
      specialistEvaluation="Specialist evaluation involves a review of PSA history, biopsy pathology, staging imaging including PSMA PET-CT where available, and prior treatment history. German urological oncologists assess whether the current risk stratification is accurate, determine the most appropriate primary or salvage treatment approach, and evaluate eligibility for systemic or radioligand therapies."
      additionalSections={ADDITIONAL_SECTIONS}
      faqSection={{
        title: "Frequently Asked Questions — Prostate Cancer Treatment in Germany",
        items: FAQ_ITEMS,
      }}
      relatedLinks={[
        { href: "/oncology-germany", label: "Oncology in Germany" },
        { href: "/cancer-treatment-germany", label: "Cancer Treatment Germany" },
        { href: "/university-hospital-treatment-germany", label: "University Hospital Treatment" },
        { href: "/second-opinion-germany", label: "Second Medical Opinion" },
      ]}
      customCTA={{
        title: "Next Step",
        heading: "Send your medical file — a coordinator will review your case within 24 hours",
        body: "Submit your PSA history, biopsy pathology, and imaging. A Berlin-based clinical coordinator will assess your case and identify the appropriate urological oncology specialist.",
        buttonLabel: "Send Medical File",
        buttonHref: "https://tally.so/r/68MrBP",
        note: "All submissions are handled with strict confidentiality.",
      }}
      structuredData={JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Prostate Cancer Treatment in Germany",
          "description": "Advanced urological oncology including robotic-assisted surgery and PSMA PET imaging for prostate cancer at German university hospitals.",
          "url": "https://medicalcaregermany.com/prostate-cancer-treatment-germany",
          "about": { "@type": "MedicalCondition", "name": "Prostate Cancer" },
          "publisher": { "@type": "Organization", "name": "Medical Care Germany", "url": "https://medicalcaregermany.com", "logo": { "@type": "ImageObject", "url": "https://medicalcaregermany.com/og-image.jpg" } },
          "image": "https://medicalcaregermany.com/og-image.jpg"
        },
        FAQ_SCHEMA,
      ])}
    />
    </>
  );
}
