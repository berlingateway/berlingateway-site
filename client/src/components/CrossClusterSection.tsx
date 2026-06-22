/**
 * CrossClusterSection — Semantic Medical Ecosystem Architecture
 *
 * Renders a configurable set of diagnostic relationship clusters.
 * Each cluster card shows: specialty pair title, 4-6 clinical terms, and deep links.
 * Design: institutional dark-navy, compressed density, Arabic RTL, no marketing language.
 *
 * Usage: import and place before <ArabicFooterGuide /> on any Arabic authority page.
 * Pass `clusters` prop to select which cluster types to show (default: all 5).
 */

import { Link } from "wouter";

// ─── Cluster definitions ────────────────────────────────────────────────────

export type ClusterKey =
  | "hno_neuro"
  | "neuro_spine"
  | "trauma_mri_rehab"
  | "vestibular_audiology"
  | "head_neck_tumor";

interface ClusterLink {
  label: string;
  href: string;
}

interface ClusterDef {
  key: ClusterKey;
  title: string;
  terms: string[];
  links: ClusterLink[];
}

const ALL_CLUSTERS: ClusterDef[] = [
  {
    key: "hno_neuro",
    title: "الأنف والأذن والأعصاب",
    terms: [
      "اضطرابات الجهاز الدهليزي",
      "الطنين مع تداخل عصبي",
      "مسارات التوازن",
      "أعراض الأعصاب القحفية",
      "الدوخة المزمنة",
      "أعراض السمع والجهاز العصبي",
    ],
    links: [
      { label: "الأنف والأذن والحنجرة في ألمانيا", href: "/ar/ent-germany" },
      { label: "علاج الأعصاب في ألمانيا", href: "/ar/neurology-treatment-germany" },
      { label: "علاج الطنين في ألمانيا", href: "/ar/tinnitus-treatment-germany" },
      { label: "الدوخة المزمنة واضطرابات التوازن", href: "/ar/dizziness-long-term" },
    ],
  },
  {
    key: "neuro_spine",
    title: "الأعصاب والعمود الفقري",
    terms: [
      "عدم استقرار الفقرات العنقية",
      "ضغط الأعصاب",
      "اضطرابات التوازن",
      "التنميل والخدر",
      "تورط الحبل الشوكي",
      "اضطرابات المشية",
    ],
    links: [
      { label: "جراحة العمود الفقري في ألمانيا", href: "/ar/spine-surgery-germany" },
      { label: "علاج الأعصاب في ألمانيا", href: "/ar/neurology-treatment-germany" },
      { label: "الإصابات المعقدة في ألمانيا", href: "/ar/complex-trauma-germany" },
    ],
  },
  {
    key: "trauma_mri_rehab",
    title: "الإصابات المعقدة والتصوير وإعادة التأهيل",
    terms: [
      "الدوخة ما بعد الإصابة",
      "إصابة عصبية خفية",
      "صدمة الجهاز الدهليزي",
      "مراجعة التصوير بالرنين المغناطيسي",
      "مسارات إعادة التأهيل",
      "أعراض مزمنة غير مفسرة",
    ],
    links: [
      { label: "الإصابات المعقدة في ألمانيا", href: "/ar/complex-trauma-germany" },
      { label: "إعادة التأهيل المتقدمة في ألمانيا", href: "/ar/advanced-rehabilitation-germany" },
      { label: "الرأي الثاني في التصوير الطبي", href: "https://tally.so/r/68MrBP" },
    ],
  },
  {
    key: "vestibular_audiology",
    title: "التوازن والسمع",
    terms: [
      "اضطرابات الأذن الداخلية",
      "مسارات القوقعة",
      "اختبارات الجهاز الدهليزي",
      "تذبذب السمع",
      "مرض مينيير",
      "اختلال التوازن السمعي",
    ],
    links: [
      { label: "زراعة القوقعة وضعف السمع", href: "/ar/hearing-implant-germany" },
      { label: "علاج الطنين في ألمانيا", href: "/ar/tinnitus-treatment-germany" },
      { label: "الأنف والأذن والحنجرة في ألمانيا", href: "/ar/ent-germany" },
    ],
  },
  {
    key: "head_neck_tumor",
    title: "أورام الرأس والعنق والمسارات التشخيصية",
    terms: [
      "أعراض قحفية",
      "صعوبة البلع",
      "تداخل عصبي",
      "مسارات أورام الأنف والأذن والحنجرة",
      "تصوير بالرنين المغناطيسي والتصوير المقطعي",
      "مراجعة متعددة التخصصات",
    ],
    links: [
      { label: "أورام الرأس والعنق في ألمانيا", href: "/ar/head-neck-tumor-germany" },
      { label: "جراحة الأنف والأذن والحنجرة في ألمانيا", href: "/ar/ent-surgery-germany" },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

interface CrossClusterSectionProps {
  /** Which clusters to render. Defaults to all 5. */
  clusters?: ClusterKey[];
  /** Exclude the current page's own cluster to avoid self-referential links */
  excludeCurrentHref?: string;
}

export function CrossClusterSection({
  clusters,
  excludeCurrentHref,
}: CrossClusterSectionProps) {
  const keys = clusters ?? (ALL_CLUSTERS.map((c) => c.key) as ClusterKey[]);
  const defs = ALL_CLUSTERS.filter((c) => keys.includes(c.key));

  return (
    <section
      dir="rtl"
      style={{
        background: "#0d1f30",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "68px 24px 60px",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 44 }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            بنية التخصصات المترابطة
          </p>
          <h2
            style={{
              fontSize: "clamp(18px, 2.8vw, 26px)",
              fontWeight: 400,
              color: "#f1f5f9",
              lineHeight: 1.5,
              marginBottom: 12,
            }}
          >
            العلاقة بين التخصصات المرتبطة بالحالة
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#64748b",
              lineHeight: 1.75,
              maxWidth: 620,
            }}
          >
            بعض الحالات المعقدة لا ترتبط بتخصص واحد فقط، بل تتطلب مراجعة
            مترابطة بين عدة مسارات تشخيصية.
          </p>
        </div>

        {/* Cluster grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 1,
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {defs.map((cluster) => {
            const visibleLinks = excludeCurrentHref
              ? cluster.links.filter((l) => l.href !== excludeCurrentHref)
              : cluster.links;

            return (
              <div
                key={cluster.key}
                style={{
                  background: "#0B1C2C",
                  padding: "28px 24px 24px",
                }}
              >
                {/* Cluster title */}
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#cbd5e1",
                    marginBottom: 16,
                    lineHeight: 1.4,
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    paddingBottom: 12,
                  }}
                >
                  {cluster.title}
                </p>

                {/* Clinical terms */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {cluster.terms.map((term) => (
                    <li
                      key={term}
                      style={{
                        fontSize: 12,
                        color: "#475569",
                        lineHeight: 1.5,
                        paddingRight: 10,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          right: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 3,
                          height: 3,
                          borderRadius: "50%",
                          background: "#334155",
                          display: "inline-block",
                        }}
                      />
                      {term}
                    </li>
                  ))}
                </ul>

                {/* Deep links */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {visibleLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        fontSize: 12,
                        color: "#94a3b8",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#e2e8f0";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#94a3b8";
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 14,
                          height: 1,
                          background: "currentColor",
                          flexShrink: 0,
                        }}
                      />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
