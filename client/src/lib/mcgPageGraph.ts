/**
 * MCG Page Knowledge Graph
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for:
 *  - route → language equivalents (AR / EN / DE)
 *  - route → category hub
 *  - route → cluster siblings
 *  - route → related cross-cluster pages
 *
 * Rules:
 *  - If an equivalent language page exists → link directly.
 *  - If no equivalent exists → link to the closest hub (never homepage, never 404).
 *  - All paths are absolute, starting with "/".
 */

export type Lang = "ar" | "en" | "de";

export interface PageNode {
  /** Canonical path for this language version */
  path: string;
  /** Display label in the page's own language */
  label: string;
  /** Language of this node */
  lang: Lang;
  /** Category hub path (same language) */
  hub: string;
  /** Hub display label */
  hubLabel: string;
  /** Language equivalents: path to switch to; falls back to hub if undefined */
  equivalents: Partial<Record<Lang, string>>;
  /** Sibling pages within the same cluster */
  cluster: Array<{ href: string; label: string }>;
  /** Cross-cluster related pages */
  related: Array<{ href: string; label: string }>;
}

// ─── REHABILITATION CLUSTER ──────────────────────────────────────────────────

const rehabClusterAR = [
  { href: "/ar/advanced-rehabilitation-germany", label: "مركز التأهيل المتقدم" },
  { href: "/ar/war-injury-rehabilitation-germany", label: "تأهيل إصابات الحرب" },
  { href: "/ar/prosthetics-germany", label: "الأطراف الصناعية" },
  { href: "/ar/spinal-rehabilitation-germany", label: "تأهيل العمود الفقري" },
  { href: "/ar/neurological-rehabilitation-germany", label: "التأهيل العصبي" },
  { href: "/ar/second-medical-evaluation-germany", label: "الرأي الطبي الثاني" },
  { href: "/ar/long-term-rehabilitation-germany", label: "التأهيل طويل الأمد" },
];

const rehabClusterEN = [
  { href: "/en/advanced-rehabilitation-germany", label: "Advanced Rehabilitation" },
  { href: "/en/war-injury-rehabilitation-germany", label: "War Injury Rehabilitation" },
  { href: "/en/prosthetics-germany", label: "Prosthetics & Orthotics" },
  { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
  { href: "/en/neurological-rehabilitation-germany", label: "Neurological Rehabilitation" },
  { href: "/en/second-medical-evaluation-germany", label: "Second Medical Evaluation" },
  { href: "/en/long-term-rehabilitation-germany", label: "Long-Term Rehabilitation" },
];

const rehabClusterDE = [
  { href: "/de/rehabilitation-deutschland", label: "Rehabilitationszentrum" },
  { href: "/de/rehabilitation-kriegsverletzungen-deutschland", label: "Kriegsverletzungen" },
  { href: "/de/prothetik-deutschland", label: "Prothetik & Orthopädie" },
  { href: "/de/spinale-rehabilitation-deutschland", label: "Spinale Rehabilitation" },
  { href: "/de/neurologische-rehabilitation-deutschland", label: "Neurologische Rehabilitation" },
  { href: "/de/medizinische-zweitbewertung-deutschland", label: "Medizinische Zweitbewertung" },
  { href: "/de/langzeit-rehabilitation-deutschland", label: "Langzeit-Rehabilitation" },
];

const rehabRelatedAR = [
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
  { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
  { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

const rehabRelatedEN = [
  { href: "/orthopedic-surgery-germany", label: "Orthopedics" },
  { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
  { href: "/neurology-treatment-germany", label: "Neurology" },
  { href: "/submit-case", label: "Submit Medical Reports" },
];

const rehabRelatedDE = [
  { href: "/de/spinale-rehabilitation-deutschland", label: "Spinale Rehabilitation" },
  { href: "/de/neurologische-rehabilitation-deutschland", label: "Neurologische Rehabilitation" },
  { href: "/submit-case", label: "Medizinische Berichte einreichen" },
];

// ─── ORTHOPEDICS CLUSTER ─────────────────────────────────────────────────────

const orthoClusterAR = [
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل — المحور" },
  { href: "/ar/pediatric-orthopedics-germany", label: "عظام وجراحة الأطفال" },
];

const orthoRelatedAR = [
  { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
  { href: "/ar/war-injury-rehabilitation-germany", label: "تأهيل إصابات الحرب" },
  { href: "/ar/prosthetics-germany", label: "الأطراف الصناعية" },
  { href: "/ar/advanced-rehabilitation-germany", label: "إعادة التأهيل المتقدم" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

// ─── ENT CLUSTER ─────────────────────────────────────────────────────────────

const entClusterAR = [
  { href: "/ar/ent-germany",                  label: "الأنف والأذن والحنجرة — المحور" },
  { href: "/ar/ent-surgery-germany",          label: "جراحة الأنف والأذن والحنجرة" },
  { href: "/ar/hearing-implant-germany",      label: "زراعة القوقعة وضعف السمع" },
  { href: "/ar/tinnitus-treatment-germany",   label: "الطنين وطنين الأذن" },
  { href: "/ar/voice-prosthesis-germany",     label: "بدائل الصوت وصمامات الكلام" },
  { href: "/ar/head-neck-tumor-germany",      label: "أورام الرأس والعنق" },
  { href: "/ar/sleep-apnea-snoring-germany",  label: "الشخير وانقطاع النفس" },
  { href: "/ar/pediatric-ent-germany",        label: "أنف وأذن وحنجرة للأطفال" },
  { href: "/ar/dizziness-long-term",          label: "الدوخة المزمنة واضطرابات التوازن" },
];

const entRelatedAR = [
  { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/complex-trauma-evaluation", label: "تقييم الصدمات المعقدة" },
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

// ─── PEDIATRIC CLUSTER ───────────────────────────────────────────────────────

const pediatricClusterAR = [
  { href: "/ar/pediatric-medicine-germany", label: "طب الأطفال العام" },
  { href: "/ar/pediatric-surgery-germany", label: "جراحة الأطفال" },
  { href: "/ar/pediatric-orthopedics-germany", label: "عظام وجراحة الأطفال" },
  { href: "/ar/pediatric-rehabilitation-germany", label: "تأهيل الأطفال" },
  { href: "/ar/pediatric-neurology-germany", label: "أعصاب الأطفال" },
];

const pediatricRelatedAR = [
  { href: "/ar/advanced-rehabilitation-germany", label: "إعادة التأهيل المتقدم" },
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
  { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

// ─── NEUROLOGY CLUSTER ───────────────────────────────────────────────────────

const neurologyClusterAR = [
  { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/brain-tumor-treatment-germany", label: "أورام المخ" },
  { href: "/ar/trigeminal-neuralgia-treatment-germany", label: "ألم العصب الخامس" },
  { href: "/ar/parkinsons-treatment-germany", label: "مرض باركنسون" },
  { href: "/ar/pediatric-neurology-germany", label: "أعصاب الأطفال" },
];

const neurologyClusterEN = [
  { href: "/neurology-treatment-germany", label: "Neurology Treatment" },
  { href: "/brain-tumor-treatment-germany", label: "Brain Tumor" },
  { href: "/trigeminal-neuralgia-treatment-germany", label: "Trigeminal Neuralgia" },
  { href: "/parkinson-treatment-germany", label: "Parkinson's Disease" },
  { href: "/multiple-sclerosis-treatment-germany", label: "Multiple Sclerosis" },
  { href: "/epilepsy-treatment-germany", label: "Epilepsy" },
];

const neurologyRelatedAR = [
  { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
  { href: "/ar/ent-germany", label: "الأنف والأذن والحنجرة" },
  { href: "/ar/neurological-rehabilitation-germany", label: "التأهيل العصبي" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

const neurologyRelatedEN = [
  { href: "/spine-surgery-germany", label: "Spine Surgery" },
  { href: "/en/neurological-rehabilitation-germany", label: "Neurological Rehabilitation" },
  { href: "/submit-case", label: "Submit Medical Reports" },
];

// ─── SPINE CLUSTER ───────────────────────────────────────────────────────────

const spineClusterAR = [
  { href: "/ar/spine-surgery-germany", label: "جراحة العمود الفقري" },
  { href: "/ar/spinal-rehabilitation-germany", label: "تأهيل العمود الفقري" },
];

const spineClusterEN = [
  { href: "/spine-surgery-germany", label: "Spine Surgery" },
  { href: "/spinal-stenosis-treatment-germany", label: "Spinal Stenosis" },
  { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
];

const spineRelatedAR = [
  { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
  { href: "/ar/spinal-rehabilitation-germany", label: "تأهيل العمود الفقري" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

const spineRelatedEN = [
  { href: "/neurology-treatment-germany", label: "Neurology" },
  { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
  { href: "/submit-case", label: "Submit Medical Reports" },
];

// ─── FERTILITY CLUSTER ───────────────────────────────────────────────────────

const fertilityClusterAR = [
  { href: "/ar/fertility-treatment-germany", label: "الخصوبة والإنجاب" },
  { href: "/ar/ivf-germany", label: "أطفال الأنابيب" },
  { href: "/ar/icsi-germany", label: "حقن الحيوانات المنوية" },
  { href: "/ar/pgd-germany", label: "التشخيص الجيني" },
  { href: "/ar/failed-ivf-causes-germany", label: "أسباب فشل التلقيح" },
  { href: "/ar/repeated-miscarriage-causes-germany", label: "الإجهاض المتكرر" },
  { href: "/ar/male-infertility-germany", label: "العقم عند الرجل" },
];

const fertilityRelatedAR = [
  { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

// ─── ONCOLOGY CLUSTER ────────────────────────────────────────────────────────

const oncologyClusterEN = [
  { href: "/cancer-treatment-germany", label: "Cancer Treatment" },
  { href: "/brain-tumor-treatment-germany", label: "Brain Tumor" },
  { href: "/lung-cancer-treatment-germany", label: "Lung Cancer" },
  { href: "/breast-cancer-treatment-germany", label: "Breast Cancer" },
  { href: "/prostate-cancer-treatment-germany", label: "Prostate Cancer" },
  { href: "/colon-cancer-treatment-germany", label: "Colon Cancer" },
  { href: "/liver-cancer-treatment-germany", label: "Liver Cancer" },
];

const oncologyRelatedEN = [
  { href: "/advanced-diagnostics-germany", label: "Advanced Diagnostics" },
  { href: "/second-opinion-germany", label: "Second Opinion" },
  { href: "/submit-case", label: "Submit Medical Reports" },
];

// ─── CARDIOLOGY CLUSTER ──────────────────────────────────────────────────────

const cardiologyClusterEN = [
  { href: "/cardiology-treatment-germany", label: "Cardiology Treatment" },
  { href: "/heart-surgery-germany", label: "Heart Surgery" },
  { href: "/arrhythmia-treatment-germany", label: "Arrhythmia" },
  { href: "/congenital-heart-treatment-germany", label: "Congenital Heart" },
];

const cardiologyRelatedEN = [
  { href: "/advanced-diagnostics-germany", label: "Advanced Diagnostics" },
  { href: "/second-opinion-germany", label: "Second Opinion" },
  { href: "/submit-case", label: "Submit Medical Reports" },
];

// ─── GENERAL SURGERY CLUSTER (AR) ────────────────────────────────────────────

const generalSurgeryClusterAR = [
  { href: "/ar/hernia-treatment-germany", label: "علاج الفتق" },
  { href: "/ar/laparoscopic-surgery-germany", label: "الجراحة التنظيرية" },
  { href: "/ar/gastrointestinal-surgery-germany", label: "جراحة الجهاز الهضمي" },
];

const generalSurgeryRelatedAR = [
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
  { href: "/ar/advanced-rehabilitation-germany", label: "إعادة التأهيل المتقدم" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

// ─── COSMETIC / RECONSTRUCTIVE CLUSTER (AR) ──────────────────────────────────

const cosmeticClusterAR = [
  { href: "/ar/reconstructive-surgery-germany", label: "الجراحة الترميمية" },
  { href: "/ar/maxillofacial-surgery-germany", label: "جراحة الوجه والفكين" },
  { href: "/ar/corrective-plastic-surgery-germany", label: "التجميل التصحيحي" },
];

const cosmeticRelatedAR = [
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
  { href: "/ar/complex-trauma-evaluation", label: "تقييم الصدمات المعقدة" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

// ─── PAGE GRAPH ──────────────────────────────────────────────────────────────

export const PAGE_GRAPH: Record<string, PageNode> = {

  // ══════════════════════════════════════════════════════════════════════════
  // AR REHABILITATION
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/advanced-rehabilitation-germany": {
    path: "/ar/advanced-rehabilitation-germany",
    label: "مركز التأهيل المتقدم",
    lang: "ar",
    hub: "/ar/advanced-rehabilitation-germany",
    hubLabel: "التأهيل المتقدم",
    equivalents: {
      en: "/en/advanced-rehabilitation-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: rehabClusterAR,
    related: rehabRelatedAR,
  },
  "/ar/war-injury-rehabilitation-germany": {
    path: "/ar/war-injury-rehabilitation-germany",
    label: "تأهيل إصابات الحرب",
    lang: "ar",
    hub: "/ar/advanced-rehabilitation-germany",
    hubLabel: "التأهيل المتقدم",
    equivalents: {
      en: "/en/war-injury-rehabilitation-germany",
      de: "/de/rehabilitation-kriegsverletzungen-deutschland",
    },
    cluster: rehabClusterAR,
    related: rehabRelatedAR,
  },
  "/ar/prosthetics-germany": {
    path: "/ar/prosthetics-germany",
    label: "الأطراف الصناعية",
    lang: "ar",
    hub: "/ar/advanced-rehabilitation-germany",
    hubLabel: "التأهيل المتقدم",
    equivalents: {
      en: "/en/prosthetics-germany",
      de: "/de/prothetik-deutschland",
    },
    cluster: rehabClusterAR,
    related: rehabRelatedAR,
  },
  "/ar/spinal-rehabilitation-germany": {
    path: "/ar/spinal-rehabilitation-germany",
    label: "تأهيل العمود الفقري",
    lang: "ar",
    hub: "/ar/advanced-rehabilitation-germany",
    hubLabel: "التأهيل المتقدم",
    equivalents: {
      en: "/en/spinal-rehabilitation-germany",
      de: "/de/spinale-rehabilitation-deutschland",
    },
    cluster: rehabClusterAR,
    related: rehabRelatedAR,
  },
  "/ar/neurological-rehabilitation-germany": {
    path: "/ar/neurological-rehabilitation-germany",
    label: "التأهيل العصبي",
    lang: "ar",
    hub: "/ar/advanced-rehabilitation-germany",
    hubLabel: "التأهيل المتقدم",
    equivalents: {
      en: "/en/neurological-rehabilitation-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: rehabClusterAR,
    related: rehabRelatedAR,
  },
  "/ar/second-medical-evaluation-germany": {
    path: "/ar/second-medical-evaluation-germany",
    label: "الرأي الطبي الثاني",
    lang: "ar",
    hub: "/ar/advanced-rehabilitation-germany",
    hubLabel: "التأهيل المتقدم",
    equivalents: {
      en: "/en/second-medical-evaluation-germany",
      de: "/de/medizinische-zweitbewertung-deutschland",
    },
    cluster: rehabClusterAR,
    related: rehabRelatedAR,
  },
  "/ar/long-term-rehabilitation-germany": {
    path: "/ar/long-term-rehabilitation-germany",
    label: "التأهيل طويل الأمد",
    lang: "ar",
    hub: "/ar/advanced-rehabilitation-germany",
    hubLabel: "التأهيل المتقدم",
    equivalents: {
      en: "/en/long-term-rehabilitation-germany",
      de: "/de/langzeit-rehabilitation-deutschland",
    },
    cluster: rehabClusterAR,
    related: rehabRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EN REHABILITATION
  // ══════════════════════════════════════════════════════════════════════════
  "/en/advanced-rehabilitation-germany": {
    path: "/en/advanced-rehabilitation-germany",
    label: "Advanced Rehabilitation",
    lang: "en",
    hub: "/en/advanced-rehabilitation-germany",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/advanced-rehabilitation-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: rehabClusterEN,
    related: rehabRelatedEN,
  },
  "/en/war-injury-rehabilitation-germany": {
    path: "/en/war-injury-rehabilitation-germany",
    label: "War Injury Rehabilitation",
    lang: "en",
    hub: "/en/advanced-rehabilitation-germany",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/war-injury-rehabilitation-germany",
      de: "/de/rehabilitation-kriegsverletzungen-deutschland",
    },
    cluster: rehabClusterEN,
    related: rehabRelatedEN,
  },
  "/en/prosthetics-germany": {
    path: "/en/prosthetics-germany",
    label: "Prosthetics & Orthotics",
    lang: "en",
    hub: "/en/advanced-rehabilitation-germany",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/prosthetics-germany",
      de: "/de/prothetik-deutschland",
    },
    cluster: rehabClusterEN,
    related: rehabRelatedEN,
  },
  "/en/spinal-rehabilitation-germany": {
    path: "/en/spinal-rehabilitation-germany",
    label: "Spinal Rehabilitation",
    lang: "en",
    hub: "/en/advanced-rehabilitation-germany",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/spinal-rehabilitation-germany",
      de: "/de/spinale-rehabilitation-deutschland",
    },
    cluster: rehabClusterEN,
    related: rehabRelatedEN,
  },
  "/en/neurological-rehabilitation-germany": {
    path: "/en/neurological-rehabilitation-germany",
    label: "Neurological Rehabilitation",
    lang: "en",
    hub: "/en/advanced-rehabilitation-germany",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/neurological-rehabilitation-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: rehabClusterEN,
    related: rehabRelatedEN,
  },
  "/en/second-medical-evaluation-germany": {
    path: "/en/second-medical-evaluation-germany",
    label: "Second Medical Evaluation",
    lang: "en",
    hub: "/en/advanced-rehabilitation-germany",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/second-medical-evaluation-germany",
      de: "/de/medizinische-zweitbewertung-deutschland",
    },
    cluster: rehabClusterEN,
    related: rehabRelatedEN,
  },
  "/en/long-term-rehabilitation-germany": {
    path: "/en/long-term-rehabilitation-germany",
    label: "Long-Term Rehabilitation",
    lang: "en",
    hub: "/en/advanced-rehabilitation-germany",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/long-term-rehabilitation-germany",
      de: "/de/langzeit-rehabilitation-deutschland",
    },
    cluster: rehabClusterEN,
    related: rehabRelatedEN,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DE REHABILITATION
  // ══════════════════════════════════════════════════════════════════════════
  "/de/rehabilitation-deutschland": {
    path: "/de/rehabilitation-deutschland",
    label: "Rehabilitationszentrum",
    lang: "de",
    hub: "/de/rehabilitation-deutschland",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/advanced-rehabilitation-germany",
      en: "/en/advanced-rehabilitation-germany",
    },
    cluster: rehabClusterDE,
    related: rehabRelatedDE,
  },
  "/de/rehabilitation-kriegsverletzungen-deutschland": {
    path: "/de/rehabilitation-kriegsverletzungen-deutschland",
    label: "Kriegsverletzungen",
    lang: "de",
    hub: "/de/rehabilitation-deutschland",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/war-injury-rehabilitation-germany",
      en: "/en/war-injury-rehabilitation-germany",
    },
    cluster: rehabClusterDE,
    related: rehabRelatedDE,
  },
  "/de/prothetik-deutschland": {
    path: "/de/prothetik-deutschland",
    label: "Prothetik & Orthopädie",
    lang: "de",
    hub: "/de/rehabilitation-deutschland",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/prosthetics-germany",
      en: "/en/prosthetics-germany",
    },
    cluster: rehabClusterDE,
    related: rehabRelatedDE,
  },
  "/de/spinale-rehabilitation-deutschland": {
    path: "/de/spinale-rehabilitation-deutschland",
    label: "Spinale Rehabilitation",
    lang: "de",
    hub: "/de/rehabilitation-deutschland",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/spinal-rehabilitation-germany",
      en: "/en/spinal-rehabilitation-germany",
    },
    cluster: rehabClusterDE,
    related: rehabRelatedDE,
  },
  "/de/neurologische-rehabilitation-deutschland": {
    path: "/de/neurologische-rehabilitation-deutschland",
    label: "Neurologische Rehabilitation",
    lang: "de",
    hub: "/de/rehabilitation-deutschland",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/neurological-rehabilitation-germany",
      en: "/en/neurological-rehabilitation-germany",
    },
    cluster: rehabClusterDE,
    related: rehabRelatedDE,
  },
  "/de/medizinische-zweitbewertung-deutschland": {
    path: "/de/medizinische-zweitbewertung-deutschland",
    label: "Medizinische Zweitbewertung",
    lang: "de",
    hub: "/de/rehabilitation-deutschland",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/second-medical-evaluation-germany",
      en: "/en/second-medical-evaluation-germany",
    },
    cluster: rehabClusterDE,
    related: rehabRelatedDE,
  },
  "/de/langzeit-rehabilitation-deutschland": {
    path: "/de/langzeit-rehabilitation-deutschland",
    label: "Langzeit-Rehabilitation",
    lang: "de",
    hub: "/de/rehabilitation-deutschland",
    hubLabel: "Rehabilitation",
    equivalents: {
      ar: "/ar/long-term-rehabilitation-germany",
      en: "/en/long-term-rehabilitation-germany",
    },
    cluster: rehabClusterDE,
    related: rehabRelatedDE,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR ORTHOPEDICS
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/orthopedics-germany": {
    path: "/ar/orthopedics-germany",
    label: "العظام والمفاصل",
    lang: "ar",
    hub: "/ar/orthopedics-germany",
    hubLabel: "العظام والمفاصل",
    equivalents: {
      en: "/orthopedic-surgery-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: orthoClusterAR,
    related: orthoRelatedAR,
  },
  "/ar/pediatric-orthopedics-germany": {
    path: "/ar/pediatric-orthopedics-germany",
    label: "عظام وجراحة الأطفال",
    lang: "ar",
    hub: "/ar/orthopedics-germany",
    hubLabel: "العظام والمفاصل",
    equivalents: {
      en: "/orthopedic-surgery-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: orthoClusterAR,
    related: orthoRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR ENT
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/ent-surgery-germany": {
    path: "/ar/ent-surgery-germany",
    label: "جراحة الأنف والأذن والحنجرة",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: { en: "/", de: "/de" },
    cluster: entClusterAR,
    related: entRelatedAR,
  },
  "/ar/hearing-implant-germany": {
    path: "/ar/hearing-implant-germany",
    label: "زراعة القوقعة وضعف السمع",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: { en: "/", de: "/de" },
    cluster: entClusterAR,
    related: entRelatedAR,
  },
  "/ar/tinnitus-treatment-germany": {
    path: "/ar/tinnitus-treatment-germany",
    label: "الطنين وطنين الأذن",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: { en: "/", de: "/de" },
    cluster: entClusterAR,
    related: entRelatedAR,
  },
  "/ar/voice-prosthesis-germany": {
    path: "/ar/voice-prosthesis-germany",
    label: "بدائل الصوت وصمامات الكلام",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: { en: "/", de: "/de" },
    cluster: entClusterAR,
    related: entRelatedAR,
  },
  "/ar/head-neck-tumor-germany": {
    path: "/ar/head-neck-tumor-germany",
    label: "أورام الرأس والعنق",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: { en: "/", de: "/de" },
    cluster: entClusterAR,
    related: entRelatedAR,
  },
  "/ar/sleep-apnea-snoring-germany": {
    path: "/ar/sleep-apnea-snoring-germany",
    label: "الشخير وانقطاع النفس أثناء النوم",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: { en: "/", de: "/de" },
    cluster: entClusterAR,
    related: entRelatedAR,
  },
  "/ar/pediatric-ent-germany": {
    path: "/ar/pediatric-ent-germany",
    label: "أنف وأذن وحنجرة للأطفال",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: { en: "/", de: "/de" },
    cluster: entClusterAR,
    related: entRelatedAR,
  },
  "/ar/ent-germany": {
    path: "/ar/ent-germany",
    label: "الأنف والأذن والحنجرة",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: {
      en: "/neurology-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: entClusterAR,
    related: entRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR PEDIATRICS
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/pediatric-medicine-germany": {
    path: "/ar/pediatric-medicine-germany",
    label: "طب الأطفال العام",
    lang: "ar",
    hub: "/ar/pediatric-medicine-germany",
    hubLabel: "طب الأطفال",
    equivalents: {
      en: "/pediatric-neurology-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: pediatricClusterAR,
    related: pediatricRelatedAR,
  },
  "/ar/pediatric-surgery-germany": {
    path: "/ar/pediatric-surgery-germany",
    label: "جراحة الأطفال",
    lang: "ar",
    hub: "/ar/pediatric-medicine-germany",
    hubLabel: "طب الأطفال",
    equivalents: {
      en: "/pediatric-neurology-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: pediatricClusterAR,
    related: pediatricRelatedAR,
  },
  "/ar/pediatric-rehabilitation-germany": {
    path: "/ar/pediatric-rehabilitation-germany",
    label: "تأهيل الأطفال",
    lang: "ar",
    hub: "/ar/pediatric-medicine-germany",
    hubLabel: "طب الأطفال",
    equivalents: {
      en: "/en/advanced-rehabilitation-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: pediatricClusterAR,
    related: pediatricRelatedAR,
  },
  "/ar/pediatric-neurology-germany": {
    path: "/ar/pediatric-neurology-germany",
    label: "أعصاب الأطفال",
    lang: "ar",
    hub: "/ar/pediatric-medicine-germany",
    hubLabel: "طب الأطفال",
    equivalents: {
      en: "/pediatric-neurology-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: pediatricClusterAR,
    related: pediatricRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR NEUROLOGY
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/neurology-treatment-germany": {
    path: "/ar/neurology-treatment-germany",
    label: "الأعصاب والجهاز العصبي",
    lang: "ar",
    hub: "/ar/neurology-treatment-germany",
    hubLabel: "الأعصاب والجهاز العصبي",
    equivalents: {
      en: "/neurology-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterAR,
    related: neurologyRelatedAR,
  },
  "/ar/brain-tumor-treatment-germany": {
    path: "/ar/brain-tumor-treatment-germany",
    label: "أورام المخ",
    lang: "ar",
    hub: "/ar/neurology-treatment-germany",
    hubLabel: "الأعصاب والجهاز العصبي",
    equivalents: {
      en: "/brain-tumor-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterAR,
    related: neurologyRelatedAR,
  },
  "/ar/trigeminal-neuralgia-treatment-germany": {
    path: "/ar/trigeminal-neuralgia-treatment-germany",
    label: "ألم العصب الخامس",
    lang: "ar",
    hub: "/ar/neurology-treatment-germany",
    hubLabel: "الأعصاب والجهاز العصبي",
    equivalents: {
      en: "/trigeminal-neuralgia-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterAR,
    related: neurologyRelatedAR,
  },
  "/ar/parkinsons-treatment-germany": {
    path: "/ar/parkinsons-treatment-germany",
    label: "مرض باركنسون",
    lang: "ar",
    hub: "/ar/neurology-treatment-germany",
    hubLabel: "الأعصاب والجهاز العصبي",
    equivalents: {
      en: "/parkinson-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterAR,
    related: neurologyRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EN NEUROLOGY
  // ══════════════════════════════════════════════════════════════════════════
  "/neurology-treatment-germany": {
    path: "/neurology-treatment-germany",
    label: "Neurology Treatment",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/neurology-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },
  "/brain-tumor-treatment-germany": {
    path: "/brain-tumor-treatment-germany",
    label: "Brain Tumor Treatment",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/brain-tumor-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },
  "/trigeminal-neuralgia-treatment-germany": {
    path: "/trigeminal-neuralgia-treatment-germany",
    label: "Trigeminal Neuralgia",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/trigeminal-neuralgia-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },
  "/parkinson-treatment-germany": {
    path: "/parkinson-treatment-germany",
    label: "Parkinson's Disease",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/parkinsons-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },
  "/multiple-sclerosis-treatment-germany": {
    path: "/multiple-sclerosis-treatment-germany",
    label: "Multiple Sclerosis",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/neurology-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },
  "/epilepsy-treatment-germany": {
    path: "/epilepsy-treatment-germany",
    label: "Epilepsy Treatment",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/neurology-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },
  "/pediatric-neurology-germany": {
    path: "/pediatric-neurology-germany",
    label: "Pediatric Neurology",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/pediatric-neurology-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EN ORTHOPEDICS HUB
  // ══════════════════════════════════════════════════════════════════════════
  "/en/orthopedics-germany": {
    path: "/en/orthopedics-germany",
    label: "Orthopedics Germany",
    lang: "en",
    hub: "/en/orthopedics-germany",
    hubLabel: "Orthopedics",
    equivalents: {
      ar: "/ar/orthopedics-germany",
      de: "/de/orthopaedie-deutschland",
    },
    cluster: [
      { href: "/en/orthopedics-germany", label: "Orthopedics Hub" },
      { href: "/en/prosthetics-germany", label: "Prosthetics" },
      { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
    ],
    related: [
      { href: "/en/war-injury-rehabilitation-germany", label: "War Injury Rehabilitation" },
      { href: "/en/advanced-rehabilitation-germany", label: "Advanced Rehabilitation" },
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DE ORTHOPEDICS HUB
  // ══════════════════════════════════════════════════════════════════════════
  "/de/orthopaedie-deutschland": {
    path: "/de/orthopaedie-deutschland",
    label: "Orthopädie Deutschland",
    lang: "de",
    hub: "/de/orthopaedie-deutschland",
    hubLabel: "Orthopädie",
    equivalents: {
      ar: "/ar/orthopedics-germany",
      en: "/en/orthopedics-germany",
    },
    cluster: [
      { href: "/de/orthopaedie-deutschland", label: "Orthopädie Hub" },
      { href: "/de/prothetik-deutschland", label: "Prothetik" },
      { href: "/de/spinale-rehabilitation-deutschland", label: "Spinale Rehabilitation" },
    ],
    related: [
      { href: "/de/rehabilitation-kriegsverletzungen-deutschland", label: "Kriegsverletzungen" },
      { href: "/de/rehabilitation-deutschland", label: "Rehabilitation" },
      { href: "/submit-case", label: "Berichte einreichen" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR SPINE
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/spine-surgery-germany": {
    path: "/ar/spine-surgery-germany",
    label: "جراحة العمود الفقري",
    lang: "ar",
    hub: "/ar/spine-surgery-germany",
    hubLabel: "العمود الفقري",
    equivalents: {
      en: "/spine-surgery-germany",
      de: "/de/spinale-rehabilitation-deutschland",
    },
    cluster: spineClusterAR,
    related: spineRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EN SPINE
  // ══════════════════════════════════════════════════════════════════════════
  "/spine-surgery-germany": {
    path: "/spine-surgery-germany",
    label: "Spine Surgery",
    lang: "en",
    hub: "/spine-surgery-germany",
    hubLabel: "Spine",
    equivalents: {
      ar: "/ar/spine-surgery-germany",
      de: "/de/spinale-rehabilitation-deutschland",
    },
    cluster: spineClusterEN,
    related: spineRelatedEN,
  },
  "/spinal-stenosis-treatment-germany": {
    path: "/spinal-stenosis-treatment-germany",
    label: "Spinal Stenosis",
    lang: "en",
    hub: "/spine-surgery-germany",
    hubLabel: "Spine",
    equivalents: {
      ar: "/ar/spine-surgery-germany",
      de: "/de/spinale-rehabilitation-deutschland",
    },
    cluster: spineClusterEN,
    related: spineRelatedEN,
  },
  "/herniated-disc-treatment-germany": {
    path: "/herniated-disc-treatment-germany",
    label: "Herniated Disc",
    lang: "en",
    hub: "/spine-surgery-germany",
    hubLabel: "Spine",
    equivalents: {
      ar: "/ar/spine-surgery-germany",
      de: "/de/spinale-rehabilitation-deutschland",
    },
    cluster: spineClusterEN,
    related: spineRelatedEN,
  },
  "/brain-surgery-germany": {
    path: "/brain-surgery-germany",
    label: "Brain Surgery",
    lang: "en",
    hub: "/neurology-treatment-germany",
    hubLabel: "Neurology",
    equivalents: {
      ar: "/ar/neurology-treatment-germany",
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: neurologyClusterEN,
    related: neurologyRelatedEN,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR FERTILITY
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/fertility-treatment-germany": {
    path: "/ar/fertility-treatment-germany",
    label: "الخصوبة والإنجاب",
    lang: "ar",
    hub: "/ar/fertility-treatment-germany",
    hubLabel: "الخصوبة والإنجاب",
    equivalents: {
      en: "/submit-case",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: fertilityClusterAR,
    related: fertilityRelatedAR,
  },
  "/ar/ivf-germany": {
    path: "/ar/ivf-germany",
    label: "أطفال الأنابيب",
    lang: "ar",
    hub: "/ar/fertility-treatment-germany",
    hubLabel: "الخصوبة والإنجاب",
    equivalents: { en: "/submit-case" },
    cluster: fertilityClusterAR,
    related: fertilityRelatedAR,
  },
  "/ar/icsi-germany": {
    path: "/ar/icsi-germany",
    label: "حقن الحيوانات المنوية",
    lang: "ar",
    hub: "/ar/fertility-treatment-germany",
    hubLabel: "الخصوبة والإنجاب",
    equivalents: { en: "/submit-case" },
    cluster: fertilityClusterAR,
    related: fertilityRelatedAR,
  },
  "/ar/pgd-germany": {
    path: "/ar/pgd-germany",
    label: "التشخيص الجيني",
    lang: "ar",
    hub: "/ar/fertility-treatment-germany",
    hubLabel: "الخصوبة والإنجاب",
    equivalents: { en: "/submit-case" },
    cluster: fertilityClusterAR,
    related: fertilityRelatedAR,
  },
  "/ar/failed-ivf-causes-germany": {
    path: "/ar/failed-ivf-causes-germany",
    label: "أسباب فشل التلقيح",
    lang: "ar",
    hub: "/ar/fertility-treatment-germany",
    hubLabel: "الخصوبة والإنجاب",
    equivalents: { en: "/submit-case" },
    cluster: fertilityClusterAR,
    related: fertilityRelatedAR,
  },
  "/ar/repeated-miscarriage-causes-germany": {
    path: "/ar/repeated-miscarriage-causes-germany",
    label: "الإجهاض المتكرر",
    lang: "ar",
    hub: "/ar/fertility-treatment-germany",
    hubLabel: "الخصوبة والإنجاب",
    equivalents: { en: "/submit-case" },
    cluster: fertilityClusterAR,
    related: fertilityRelatedAR,
  },
  "/ar/male-infertility-germany": {
    path: "/ar/male-infertility-germany",
    label: "العقم عند الرجل",
    lang: "ar",
    hub: "/ar/fertility-treatment-germany",
    hubLabel: "الخصوبة والإنجاب",
    equivalents: { en: "/submit-case" },
    cluster: fertilityClusterAR,
    related: fertilityRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EN ONCOLOGY
  // ══════════════════════════════════════════════════════════════════════════
  "/cancer-treatment-germany": {
    path: "/cancer-treatment-germany",
    label: "Cancer Treatment",
    lang: "en",
    hub: "/cancer-treatment-germany",
    hubLabel: "Oncology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: oncologyClusterEN,
    related: oncologyRelatedEN,
  },
  "/lung-cancer-treatment-germany": {
    path: "/lung-cancer-treatment-germany",
    label: "Lung Cancer",
    lang: "en",
    hub: "/cancer-treatment-germany",
    hubLabel: "Oncology",
    equivalents: { ar: "/ar/lung-cancer-treatment-germany", de: "/de/rehabilitation-deutschland" },
    cluster: oncologyClusterEN,
    related: oncologyRelatedEN,
  },
  "/ar/lung-cancer-treatment-germany": {
    path: "/ar/lung-cancer-treatment-germany",
    label: "سرطان الرئة",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/lung-cancer-treatment-germany" },
    cluster: [],
    related: [
      { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
      { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
    ],
  },
  "/breast-cancer-treatment-germany": {
    path: "/breast-cancer-treatment-germany",
    label: "Breast Cancer",
    lang: "en",
    hub: "/cancer-treatment-germany",
    hubLabel: "Oncology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: oncologyClusterEN,
    related: oncologyRelatedEN,
  },
  "/prostate-cancer-treatment-germany": {
    path: "/prostate-cancer-treatment-germany",
    label: "Prostate Cancer",
    lang: "en",
    hub: "/cancer-treatment-germany",
    hubLabel: "Oncology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: oncologyClusterEN,
    related: oncologyRelatedEN,
  },
  "/colon-cancer-treatment-germany": {
    path: "/colon-cancer-treatment-germany",
    label: "Colon Cancer",
    lang: "en",
    hub: "/cancer-treatment-germany",
    hubLabel: "Oncology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: oncologyClusterEN,
    related: oncologyRelatedEN,
  },
  "/liver-cancer-treatment-germany": {
    path: "/liver-cancer-treatment-germany",
    label: "Liver Cancer",
    lang: "en",
    hub: "/cancer-treatment-germany",
    hubLabel: "Oncology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: oncologyClusterEN,
    related: oncologyRelatedEN,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EN CARDIOLOGY
  // ══════════════════════════════════════════════════════════════════════════
  "/cardiology-treatment-germany": {
    path: "/cardiology-treatment-germany",
    label: "Cardiology Treatment",
    lang: "en",
    hub: "/cardiology-treatment-germany",
    hubLabel: "Cardiology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: cardiologyClusterEN,
    related: cardiologyRelatedEN,
  },
  "/heart-surgery-germany": {
    path: "/heart-surgery-germany",
    label: "Heart Surgery",
    lang: "en",
    hub: "/cardiology-treatment-germany",
    hubLabel: "Cardiology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: cardiologyClusterEN,
    related: cardiologyRelatedEN,
  },
  "/arrhythmia-treatment-germany": {
    path: "/arrhythmia-treatment-germany",
    label: "Arrhythmia Treatment",
    lang: "en",
    hub: "/cardiology-treatment-germany",
    hubLabel: "Cardiology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: cardiologyClusterEN,
    related: cardiologyRelatedEN,
  },
  "/congenital-heart-treatment-germany": {
    path: "/congenital-heart-treatment-germany",
    label: "Congenital Heart",
    lang: "en",
    hub: "/cardiology-treatment-germany",
    hubLabel: "Cardiology",
    equivalents: { ar: "/ar", de: "/de/rehabilitation-deutschland" },
    cluster: cardiologyClusterEN,
    related: cardiologyRelatedEN,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EN ORTHOPEDICS
  // ══════════════════════════════════════════════════════════════════════════
  "/orthopedic-surgery-germany": {
    path: "/orthopedic-surgery-germany",
    label: "Orthopedic Surgery",
    lang: "en",
    hub: "/orthopedic-surgery-germany",
    hubLabel: "Orthopedics",
    equivalents: { ar: "/ar/orthopedics-germany", de: "/de/spinale-rehabilitation-deutschland" },
    cluster: [
      { href: "/orthopedic-surgery-germany", label: "Orthopedic Surgery" },
      { href: "/knee-replacement-germany", label: "Knee Replacement" },
      { href: "/hip-replacement-germany", label: "Hip Replacement" },
      { href: "/scoliosis-treatment-germany", label: "Scoliosis" },
    ],
    related: [
      { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
      { href: "/en/prosthetics-germany", label: "Prosthetics" },
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },
  "/knee-replacement-germany": {
    path: "/knee-replacement-germany",
    label: "Knee Replacement",
    lang: "en",
    hub: "/orthopedic-surgery-germany",
    hubLabel: "Orthopedics",
    equivalents: { ar: "/ar/orthopedics-germany", de: "/de/spinale-rehabilitation-deutschland" },
    cluster: [
      { href: "/orthopedic-surgery-germany", label: "Orthopedic Surgery" },
      { href: "/knee-replacement-germany", label: "Knee Replacement" },
      { href: "/hip-replacement-germany", label: "Hip Replacement" },
    ],
    related: [
      { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },
  "/hip-replacement-germany": {
    path: "/hip-replacement-germany",
    label: "Hip Replacement",
    lang: "en",
    hub: "/orthopedic-surgery-germany",
    hubLabel: "Orthopedics",
    equivalents: { ar: "/ar/orthopedics-germany", de: "/de/spinale-rehabilitation-deutschland" },
    cluster: [
      { href: "/orthopedic-surgery-germany", label: "Orthopedic Surgery" },
      { href: "/knee-replacement-germany", label: "Knee Replacement" },
      { href: "/hip-replacement-germany", label: "Hip Replacement" },
    ],
    related: [
      { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },
  "/scoliosis-treatment-germany": {
    path: "/scoliosis-treatment-germany",
    label: "Scoliosis Treatment",
    lang: "en",
    hub: "/orthopedic-surgery-germany",
    hubLabel: "Orthopedics",
    equivalents: { ar: "/ar/orthopedics-germany", de: "/de/spinale-rehabilitation-deutschland" },
    cluster: [
      { href: "/orthopedic-surgery-germany", label: "Orthopedic Surgery" },
      { href: "/scoliosis-treatment-germany", label: "Scoliosis" },
    ],
    related: [
      { href: "/spine-surgery-germany", label: "Spine Surgery" },
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR GENERAL SURGERY
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/hernia-treatment-germany": {
    path: "/ar/hernia-treatment-germany",
    label: "علاج الفتق",
    lang: "ar",
    hub: "/ar/hernia-treatment-germany",
    hubLabel: "الجراحة العامة",
    equivalents: { en: "/submit-case", de: "/de/rehabilitation-deutschland" },
    cluster: generalSurgeryClusterAR,
    related: generalSurgeryRelatedAR,
  },
  "/ar/laparoscopic-surgery-germany": {
    path: "/ar/laparoscopic-surgery-germany",
    label: "الجراحة التنظيرية",
    lang: "ar",
    hub: "/ar/hernia-treatment-germany",
    hubLabel: "الجراحة العامة",
    equivalents: { en: "/submit-case", de: "/de/rehabilitation-deutschland" },
    cluster: generalSurgeryClusterAR,
    related: generalSurgeryRelatedAR,
  },
  "/ar/gastrointestinal-surgery-germany": {
    path: "/ar/gastrointestinal-surgery-germany",
    label: "جراحة الجهاز الهضمي",
    lang: "ar",
    hub: "/ar/hernia-treatment-germany",
    hubLabel: "الجراحة العامة",
    equivalents: { en: "/submit-case", de: "/de/rehabilitation-deutschland" },
    cluster: generalSurgeryClusterAR,
    related: generalSurgeryRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AR COSMETIC / RECONSTRUCTIVE
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/reconstructive-surgery-germany": {
    path: "/ar/reconstructive-surgery-germany",
    label: "الجراحة الترميمية",
    lang: "ar",
    hub: "/ar/reconstructive-surgery-germany",
    hubLabel: "الجراحة التجميلية والترميمية",
    equivalents: { en: "/submit-case", de: "/de/rehabilitation-deutschland" },
    cluster: cosmeticClusterAR,
    related: cosmeticRelatedAR,
  },
  "/ar/maxillofacial-surgery-germany": {
    path: "/ar/maxillofacial-surgery-germany",
    label: "جراحة الوجه والفكين",
    lang: "ar",
    hub: "/ar/reconstructive-surgery-germany",
    hubLabel: "الجراحة التجميلية والترميمية",
    equivalents: { en: "/submit-case", de: "/de/rehabilitation-deutschland" },
    cluster: cosmeticClusterAR,
    related: cosmeticRelatedAR,
  },
  "/ar/corrective-plastic-surgery-germany": {
    path: "/ar/corrective-plastic-surgery-germany",
    label: "التجميل التصحيحي",
    lang: "ar",
    hub: "/ar/reconstructive-surgery-germany",
    hubLabel: "الجراحة التجميلية والترميمية",
    equivalents: { en: "/submit-case", de: "/de/rehabilitation-deutschland" },
    cluster: cosmeticClusterAR,
    related: cosmeticRelatedAR,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UTILITY / CONSULTATION PAGES
  // ══════════════════════════════════════════════════════════════════════════
  "/second-opinion-germany": {
    path: "/second-opinion-germany",
    label: "Second Opinion",
    lang: "en",
    hub: "/second-opinion-germany",
    hubLabel: "Consultation",
    equivalents: {
      ar: "/ar/second-medical-evaluation-germany",
      de: "/de/medizinische-zweitbewertung-deutschland",
    },
    cluster: [
      { href: "/second-opinion-germany", label: "Second Opinion" },
      { href: "/advanced-diagnostics-germany", label: "Advanced Diagnostics" },
      { href: "/specialist-referral-germany", label: "Specialist Referral" },
    ],
    related: [
      { href: "/submit-case", label: "Submit Medical Reports" },
      { href: "/neurology-treatment-germany", label: "Neurology" },
    ],
  },
  "/advanced-diagnostics-germany": {
    path: "/advanced-diagnostics-germany",
    label: "Advanced Diagnostics",
    lang: "en",
    hub: "/advanced-diagnostics-germany",
    hubLabel: "Diagnostics",
    equivalents: {
      ar: "/ar",
      de: "/de/medizinische-zweitbewertung-deutschland",
    },
    cluster: [
      { href: "/advanced-diagnostics-germany", label: "Advanced Diagnostics" },
      { href: "/second-opinion-germany", label: "Second Opinion" },
    ],
    related: [
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HOMEPAGE ROOTS (AR / EN / DE)
  // ══════════════════════════════════════════════════════════════════════════
  "/ar": {
    path: "/ar",
    label: "الرئيسية",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { ar: "/ar", en: "/", de: "/de" },
    cluster: [],
    related: [
      { href: "/ar/advanced-rehabilitation-germany", label: "إعادة التأهيل المتقدم" },
      { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
      { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
      { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
    ],
  },
  "/": {
    path: "/",
    label: "Home",
    lang: "en",
    hub: "/",
    hubLabel: "Home",
    equivalents: { ar: "/ar", en: "/", de: "/de" },
    cluster: [],
    related: [
      { href: "/neurology-treatment-germany", label: "Neurology" },
      { href: "/orthopedic-surgery-germany", label: "Orthopedics" },
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },
  "/de": {
    path: "/de",
    label: "Startseite",
    lang: "de",
    hub: "/de",
    hubLabel: "Startseite",
    equivalents: { ar: "/ar", en: "/", de: "/de" },
    cluster: [],
    related: [
      { href: "/de/rehabilitation-deutschland", label: "Rehabilitation" },
      { href: "/de/spinale-rehabilitation-deutschland", label: "Spinale Rehabilitation" },
      { href: "/submit-case", label: "Berichte einreichen" },
    ],
  },
  "/ar/submit-case": {
    path: "/ar/submit-case",
    label: "إرسال التقارير الطبية",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { ar: "/ar/submit-case", en: "/submit-case", de: "/de" },
    cluster: [
      { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/العلاج-في-المانيا-للعرب", label: "العلاج في ألمانيا" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ARABIC SYMPTOM & CONSULTATION PAGES (recently added)
  // ══════════════════════════════════════════════════════════════════════════
  "/ar/dizziness-long-term": {
    path: "/ar/dizziness-long-term",
    label: "الدوخة المزمنة",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/" },
    cluster: [
      { href: "/ar/dizziness-long-term", label: "الدوخة المزمنة" },
      { href: "/ar/unexplained-dizziness", label: "دوخة بدون تشخيص" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
  "/ar/unexplained-dizziness": {
    path: "/ar/unexplained-dizziness",
    label: "دوخة بدون تشخيص",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/" },
    cluster: [
      { href: "/ar/unexplained-dizziness", label: "دوخة بدون تشخيص" },
      { href: "/ar/dizziness-long-term", label: "الدوخة المزمنة" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
  "/ar/surgery-second-opinion": {
    path: "/ar/surgery-second-opinion",
    label: "رأي ثانٍ قبل العملية",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/second-opinion-germany" },
    cluster: [
      { href: "/ar/surgery-second-opinion", label: "رأي ثانٍ قبل العملية" },
      { href: "/ar/second-opinion-germany", label: "رأي طبي ثانٍ" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/complex-cases", label: "الحالات المعقدة" },
    ],
  },
  "/ar/complex-cases": {
    path: "/ar/complex-cases",
    label: "الحالات الطبية المعقدة",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/complex-medical-cases-germany" },
    cluster: [
      { href: "/ar/complex-cases", label: "الحالات المعقدة" },
      { href: "/ar/surgery-second-opinion", label: "رأي ثانٍ قبل العملية" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
  "/ar/second-opinion-germany": {
    path: "/ar/second-opinion-germany",
    label: "رأي طبي ثانٍ من ألمانيا",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/second-opinion-germany" },
    cluster: [
      { href: "/ar/second-opinion-germany", label: "رأي طبي ثانٍ" },
      { href: "/ar/surgery-second-opinion", label: "رأي ثانٍ قبل العملية" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
  "/ar/liver-cancer-treatment-germany": {
    path: "/ar/liver-cancer-treatment-germany",
    label: "سرطان الكبد في ألمانيا",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/liver-cancer-treatment-germany" },
    cluster: [
      { href: "/ar/liver-cancer-treatment-germany", label: "سرطان الكبد" },
      { href: "/ar/lung-cancer-treatment-germany", label: "سرطان الرئة" },
      { href: "/ar/brain-tumor-treatment-germany", label: "أورام المخ" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },

  "/ar/prostate-cancer-treatment-germany": {
    path: "/ar/prostate-cancer-treatment-germany",
    label: "سرطان البروستاتا في ألمانيا",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/prostate-cancer-treatment-germany" },
    cluster: [
      { href: "/ar/prostate-cancer-treatment-germany", label: "سرطان البروستاتا" },
      { href: "/ar/liver-cancer-treatment-germany", label: "سرطان الكبد" },
      { href: "/ar/lung-cancer-treatment-germany", label: "سرطان الرئة" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },

  "/ar/breast-cancer-treatment-germany": {
    path: "/ar/breast-cancer-treatment-germany",
    label: "سرطان الثدي في ألمانيا",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/breast-cancer-treatment-germany" },
    cluster: [
      { href: "/ar/breast-cancer-treatment-germany", label: "سرطان الثدي" },
      { href: "/ar/prostate-cancer-treatment-germany", label: "سرطان البروستاتا" },
      { href: "/ar/liver-cancer-treatment-germany", label: "سرطان الكبد" },
      { href: "/ar/lung-cancer-treatment-germany", label: "سرطان الرئة" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },

  "/ar/colon-cancer-treatment-germany": {
    path: "/ar/colon-cancer-treatment-germany",
    label: "سرطان القولون في ألمانيا",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/colon-cancer-treatment-germany" },
    cluster: [
      { href: "/ar/colon-cancer-treatment-germany", label: "سرطان القولون" },
      { href: "/ar/prostate-cancer-treatment-germany", label: "سرطان البروستاتا" },
      { href: "/ar/liver-cancer-treatment-germany", label: "سرطان الكبد" },
      { href: "/ar/lung-cancer-treatment-germany", label: "سرطان الرئة" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // STANDALONE PAGES (no HreflangTags component yet)
  // ══════════════════════════════════════════════════════════════════════════
  "/international-patients": {
    path: "/international-patients",
    label: "International Patients",
    lang: "en",
    hub: "/",
    hubLabel: "Home",
    equivalents: { en: "/international-patients" },
    cluster: [
      { href: "/international-patients", label: "International Patients" },
      { href: "/consultation-services-germany", label: "Consultation Services" },
    ],
    related: [
      { href: "/", label: "Home" },
      { href: "/submit-case", label: "Submit Medical Reports" },
    ],
  },
  "/ar/nerve-injury-after-trauma-germany": {
    path: "/ar/nerve-injury-after-trauma-germany",
    label: "إصابات الأعصاب بعد الحوادث",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/" },
    cluster: [
      { href: "/ar/nerve-injury-after-trauma-germany", label: "إصابات الأعصاب" },
      { href: "/ar/complex-trauma-germany", label: "الصدمات المعقدة" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
  "/ar/prosthetics-after-amputation-germany": {
    path: "/ar/prosthetics-after-amputation-germany",
    label: "الأطراف الصناعية بعد البتر",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/" },
    cluster: [
      { href: "/ar/prosthetics-after-amputation-germany", label: "الأطراف الصناعية" },
      { href: "/ar/complex-trauma-germany", label: "الصدمات المعقدة" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
  "/ar/joint-replacement-after-trauma": {
    path: "/ar/joint-replacement-after-trauma",
    label: "استبدال المفاصل بعد الإصابة",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/" },
    cluster: [
      { href: "/ar/joint-replacement-after-trauma", label: "استبدال المفاصل" },
      { href: "/ar/complex-trauma-germany", label: "الصدمات المعقدة" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
  "/ar/complex-trauma-germany": {
    path: "/ar/complex-trauma-germany",
    label: "الصدمات المعقدة",
    lang: "ar",
    hub: "/ar",
    hubLabel: "الرئيسية",
    equivalents: { en: "/" },
    cluster: [
      { href: "/ar/complex-trauma-germany", label: "الصدمات المعقدة" },
      { href: "/ar/nerve-injury-after-trauma-germany", label: "إصابات الأعصاب" },
      { href: "/ar/joint-replacement-after-trauma", label: "استبدال المفاصل" },
    ],
    related: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/ارسال-التقارير-الطبية", label: "إرسال التقارير" },
    ],
  },
};

/**
 * Resolve the best language-switch target for a given page + target language.
 * If an exact equivalent exists → return it.
 * Otherwise → return the hub of the target language (never homepage, never 404).
 */
export function resolveLanguageSwitch(
  currentPath: string,
  targetLang: Lang
): string {
  const node = PAGE_GRAPH[currentPath];
  if (!node) {
    // Unknown page: fall back to language root
    const roots: Record<Lang, string> = {
      ar: "/ar",
      en: "/",
      de: "/de",
    };
    return roots[targetLang];
  }
  return node.equivalents[targetLang] ?? node.hub;
}
