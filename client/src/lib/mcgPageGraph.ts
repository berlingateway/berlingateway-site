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
  { href: "/ar/orthopedics-germany", label: "Orthopedics (Arabic)" },
  { href: "/en/spinal-rehabilitation-germany", label: "Spinal Rehabilitation" },
  { href: "/neurology-treatment-germany", label: "Neurology" },
  { href: "/submit-case", label: "Submit Medical Reports" },
];

const rehabRelatedDE = [
  { href: "/ar/orthopedics-germany", label: "Orthopädie (Arabisch)" },
  { href: "/de/spinale-rehabilitation-deutschland", label: "Spinale Rehabilitation" },
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
  { href: "/ar/ent-germany", label: "الأنف والأذن والحنجرة — المحور" },
];

const entRelatedAR = [
  { href: "/ar/neurology-treatment-germany", label: "الأعصاب والجهاز العصبي" },
  { href: "/ar/complex-trauma-evaluation", label: "تقييم الصدمات المعقدة" },
  { href: "/ar/orthopedics-germany", label: "العظام والمفاصل" },
  { href: "/ar/submit-case", label: "إرسال التقارير الطبية" },
];

// ─── PEDIATRIC CLUSTER ───────────────────────────────────────────────────────

const pediatricClusterAR = [
  { href: "/ar/pediatric-general-medicine-germany", label: "طب الأطفال العام" },
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

// ─── PAGE GRAPH ──────────────────────────────────────────────────────────────

export const PAGE_GRAPH: Record<string, PageNode> = {
  // ── AR REHABILITATION ──
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

  // ── EN REHABILITATION ──
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

  // ── DE REHABILITATION ──
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

  // ── AR ORTHOPEDICS ──
  "/ar/orthopedics-germany": {
    path: "/ar/orthopedics-germany",
    label: "العظام والمفاصل",
    lang: "ar",
    hub: "/ar/orthopedics-germany",
    hubLabel: "العظام والمفاصل",
    equivalents: {
      en: "/en/advanced-rehabilitation-germany", // fallback to closest hub
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
      en: "/en/advanced-rehabilitation-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: orthoClusterAR,
    related: orthoRelatedAR,
  },

  // ── AR ENT ──
  "/ar/ent-germany": {
    path: "/ar/ent-germany",
    label: "الأنف والأذن والحنجرة",
    lang: "ar",
    hub: "/ar/ent-germany",
    hubLabel: "الأنف والأذن والحنجرة",
    equivalents: {
      en: "/neurology-treatment-germany", // closest EN equivalent
      de: "/de/neurologische-rehabilitation-deutschland",
    },
    cluster: entClusterAR,
    related: entRelatedAR,
  },

  // ── AR PEDIATRICS ──
  "/ar/pediatric-general-medicine-germany": {
    path: "/ar/pediatric-general-medicine-germany",
    label: "طب الأطفال العام",
    lang: "ar",
    hub: "/ar/pediatric-general-medicine-germany",
    hubLabel: "طب الأطفال",
    equivalents: {
      en: "/en/advanced-rehabilitation-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: pediatricClusterAR,
    related: pediatricRelatedAR,
  },
  "/ar/pediatric-surgery-germany": {
    path: "/ar/pediatric-surgery-germany",
    label: "جراحة الأطفال",
    lang: "ar",
    hub: "/ar/pediatric-general-medicine-germany",
    hubLabel: "طب الأطفال",
    equivalents: {
      en: "/en/advanced-rehabilitation-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: pediatricClusterAR,
    related: pediatricRelatedAR,
  },
  "/ar/pediatric-rehabilitation-germany": {
    path: "/ar/pediatric-rehabilitation-germany",
    label: "تأهيل الأطفال",
    lang: "ar",
    hub: "/ar/pediatric-general-medicine-germany",
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
    hub: "/ar/pediatric-general-medicine-germany",
    hubLabel: "طب الأطفال",
    equivalents: {
      en: "/en/advanced-rehabilitation-germany",
      de: "/de/rehabilitation-deutschland",
    },
    cluster: pediatricClusterAR,
    related: pediatricRelatedAR,
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
