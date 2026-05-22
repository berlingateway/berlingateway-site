/**
 * SmartNavLayer
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable institutional navigation intelligence layer for MCG.
 *
 * Renders:
 *  1. Language switcher  AR | EN | DE
 *  2. Breadcrumb trail   Home → Hub → Current page
 *  3. Cluster siblings   (horizontal pill links)
 *  4. Related pages      (subtle cross-cluster links)
 *
 * Usage:
 *   import SmartNavLayer from "@/components/SmartNavLayer";
 *   <SmartNavLayer currentPath="/ar/advanced-rehabilitation-germany" />
 *
 * Design principles:
 *  - Institutional minimalism — no consumer-style menus
 *  - Dark navy (#0B1C2C) + white hierarchy
 *  - RTL-aware (Arabic pages use dir="rtl")
 *  - Subtle, not noisy
 */

import React from "react";
import { PAGE_GRAPH, resolveLanguageSwitch, type Lang } from "@/lib/mcgPageGraph";

interface SmartNavLayerProps {
  currentPath: string;
}

const LANG_LABELS: Record<Lang, string> = {
  ar: "العربية",
  en: "English",
  de: "Deutsch",
};

const LANG_ORDER: Lang[] = ["ar", "en", "de"];

const HOME_LABELS: Record<Lang, string> = {
  ar: "الرئيسية",
  en: "Home",
  de: "Startseite",
};

const HOME_PATHS: Record<Lang, string> = {
  ar: "/ar",
  en: "/",
  de: "/de",
};

const SUBMIT_LABELS: Record<Lang, string> = {
  ar: "إرسال التقارير الطبية",
  en: "Submit Medical Reports",
  de: "Medizinische Berichte einreichen",
};

// Minimal inline style tokens — no Tailwind to avoid conflicts with page styles
const NAVY = "#0B1C2C";
const SLATE = "#475569";
const LIGHT_BORDER = "#e2e8f0";
const PILL_BG = "#f1f5f9";
const PILL_ACTIVE = NAVY;

const s = {
  wrapper: (isRTL: boolean): React.CSSProperties => ({
    direction: isRTL ? "rtl" : "ltr",
    fontFamily: isRTL
      ? "'Cairo', 'Noto Sans Arabic', sans-serif"
      : "'Inter', 'Helvetica Neue', sans-serif",
    background: "#fff",
    borderBottom: `1px solid ${LIGHT_BORDER}`,
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
  }),
  inner: (): React.CSSProperties => ({
    maxWidth: 1100,
    margin: "0 auto",
  }),
  topBar: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
    padding: "10px 0",
    borderBottom: `1px solid ${LIGHT_BORDER}`,
  }),
  breadcrumb: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    color: SLATE,
    flexWrap: "wrap",
  }),
  breadcrumbLink: (): React.CSSProperties => ({
    color: SLATE,
    textDecoration: "none",
    fontSize: 12,
  }),
  breadcrumbSep: (): React.CSSProperties => ({
    color: "#cbd5e1",
    fontSize: 11,
    userSelect: "none",
  }),
  breadcrumbCurrent: (): React.CSSProperties => ({
    color: NAVY,
    fontWeight: 600,
    fontSize: 12,
  }),
  langSwitch: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 4,
  }),
  langBtn: (active: boolean): React.CSSProperties => ({
    fontSize: 11,
    fontWeight: active ? 700 : 400,
    color: active ? NAVY : SLATE,
    background: "none",
    border: "none",
    cursor: active ? "default" : "pointer",
    padding: "2px 6px",
    textDecoration: "none",
    letterSpacing: "0.03em",
    borderBottom: active ? `2px solid ${NAVY}` : "2px solid transparent",
    transition: "color 0.15s",
  }),
  langSep: (): React.CSSProperties => ({
    color: "#cbd5e1",
    fontSize: 10,
    userSelect: "none",
  }),
  clusterBar: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 0",
    flexWrap: "wrap",
    overflowX: "auto",
  }),
  clusterLabel: (): React.CSSProperties => ({
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#94a3b8",
    whiteSpace: "nowrap",
    marginInlineEnd: 4,
  }),
  pill: (active: boolean): React.CSSProperties => ({
    fontSize: 12,
    color: active ? "#fff" : NAVY,
    background: active ? PILL_ACTIVE : PILL_BG,
    border: `1px solid ${active ? NAVY : LIGHT_BORDER}`,
    borderRadius: 4,
    padding: "4px 12px",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background 0.15s, color 0.15s",
    display: "inline-block",
    fontWeight: active ? 600 : 400,
  }),
  relatedBar: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "8px 0",
    flexWrap: "wrap",
    borderTop: `1px solid ${LIGHT_BORDER}`,
  }),
  relatedLabel: (): React.CSSProperties => ({
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#94a3b8",
    whiteSpace: "nowrap",
    marginInlineEnd: 4,
  }),
  relatedLink: (): React.CSSProperties => ({
    fontSize: 12,
    color: SLATE,
    textDecoration: "none",
    borderBottom: "1px solid transparent",
    transition: "color 0.15s, border-color 0.15s",
    whiteSpace: "nowrap",
  }),
};

const CLUSTER_LABELS: Record<Lang, string> = {
  ar: "في هذا القسم",
  en: "In this section",
  de: "In diesem Bereich",
};

const RELATED_LABELS: Record<Lang, string> = {
  ar: "صفحات ذات صلة",
  en: "Related pathways",
  de: "Verwandte Bereiche",
};

export default function SmartNavLayer({ currentPath }: SmartNavLayerProps) {
  // Arabic pages have ArabicHeaderLocked as the global header — no duplicate nav needed
  if (currentPath.startsWith("/ar")) return null;

  const node = PAGE_GRAPH[currentPath];

  // If page not in graph, render minimal language switcher only
  if (!node) {
    return (
      <div style={s.wrapper(false)}>
        <div style={s.inner()}>
          <div style={s.topBar()}>
            <span />
            <div style={s.langSwitch()}>
              <a href="/" style={s.langBtn(false)}>English</a>
              <span style={s.langSep()}>|</span>
              <a href="/ar" style={s.langBtn(false)}>العربية</a>
              <span style={s.langSep()}>|</span>
              <a href="/de" style={s.langBtn(false)}>Deutsch</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { lang, label, hub, hubLabel, equivalents, cluster, related } = node;
  const isRTL = lang === "ar";
  const sep = isRTL ? "›" : "›";

  // Filter cluster to exclude current page
  const clusterLinks = cluster.filter((c) => c.href !== currentPath);

  return (
    <div style={s.wrapper(isRTL)}>
      <div style={s.inner()}>
        {/* ── TOP BAR: breadcrumb + language switcher ── */}
        <div style={s.topBar()}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={s.breadcrumb()}>
            <a href={HOME_PATHS[lang]} style={s.breadcrumbLink()}>
              {HOME_LABELS[lang]}
            </a>
            {hub !== currentPath && (
              <>
                <span style={s.breadcrumbSep()}>{sep}</span>
                <a href={hub} style={s.breadcrumbLink()}>
                  {hubLabel}
                </a>
              </>
            )}
            <span style={s.breadcrumbSep()}>{sep}</span>
            <span style={s.breadcrumbCurrent()}>{label}</span>
          </nav>

          {/* Language switcher */}
          <div style={s.langSwitch()} role="navigation" aria-label="Language switch">
            {LANG_ORDER.map((l, i) => {
              const isActive = l === lang;
              const target = isActive ? currentPath : resolveLanguageSwitch(currentPath, l);
              return (
                <React.Fragment key={l}>
                  {i > 0 && <span style={s.langSep()}>|</span>}
                  {isActive ? (
                    <span style={s.langBtn(true)}>{LANG_LABELS[l]}</span>
                  ) : (
                    <a href={target} style={s.langBtn(false)}>
                      {LANG_LABELS[l]}
                    </a>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── CLUSTER SIBLINGS ── */}
        {clusterLinks.length > 0 && (
          <div style={s.clusterBar()}>
            <span style={s.clusterLabel()}>{CLUSTER_LABELS[lang]}</span>
            {/* Hub pill first if we're on a sub-page */}
            {hub !== currentPath && (
              <a href={hub} style={s.pill(false)}>
                {hubLabel}
              </a>
            )}
            {clusterLinks.map((c) => (
              <a key={c.href} href={c.href} style={s.pill(false)}>
                {c.label}
              </a>
            ))}
          </div>
        )}

        {/* ── RELATED CROSS-CLUSTER LINKS ── */}
        {related.length > 0 && (
          <div style={s.relatedBar()}>
            <span style={s.relatedLabel()}>{RELATED_LABELS[lang]}</span>
            {related.map((r) => (
              <a key={r.href} href={r.href} style={s.relatedLink()}>
                {r.label}
              </a>
            ))}
            {/* Always include submit CTA */}
            {!related.some((r) => r.href.includes("submit")) && (
              <a
                href={lang === "ar" ? "/ar/submit-case" : "/submit-case"}
                style={{ ...s.relatedLink(), color: NAVY, fontWeight: 600 }}
              >
                {SUBMIT_LABELS[lang]}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
