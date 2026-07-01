/**
 * Server-side meta injection map.
 * Each entry: path (exact, no trailing slash) → { title, description, ogTitle?, ogDescription? }
 * Used by vite.ts (dev) and serveStatic (production) to inject correct meta tags
 * into index.html BEFORE sending to crawlers/browsers.
 *
 * Phase 1: Two test pages only.
 * To expand: add more entries following the same pattern.
 */

export interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

const BASE_URL = "https://medicalcaregermany.com";

export const META_MAP: Record<string, PageMeta> = {
  // ── Phase 1: Test pages ──────────────────────────────────────────────────

  "/ar/neurology-treatment-germany": {
    title: "علاج الأمراض العصبية في ألمانيا | تشخيص دقيق في برلين",
    description:
      "أمراض الأعصاب المعقدة تحتاج تشخيصاً دقيقاً — نوصلك بأفضل أطباء الأعصاب في المستشفيات الجامعية الألمانية.",
    ogTitle: "علاج الأمراض العصبية في ألمانيا | تشخيص دقيق في برلين",
    ogDescription:
      "أمراض الأعصاب المعقدة تحتاج تشخيصاً دقيقاً — نوصلك بأفضل أطباء الأعصاب في المستشفيات الجامعية الألمانية.",
    canonical: `${BASE_URL}/ar/neurology-treatment-germany`,
  },

  "/ar/brain-tumor-treatment-germany": {
    title: "علاج أورام المخ في ألمانيا | جراحة دقيقة في برلين",
    description:
      "أورام المخ تحتاج أفضل الجراحين — نوصلك بأقسام جراحة الأعصاب في المستشفيات الجامعية الألمانية لتقييم حالتك بدقة.",
    ogTitle: "علاج أورام المخ في ألمانيا | جراحة دقيقة في برلين",
    ogDescription:
      "أورام المخ تحتاج أفضل الجراحين — نوصلك بأقسام جراحة الأعصاب في المستشفيات الجامعية الألمانية لتقييم حالتك بدقة.",
    canonical: `${BASE_URL}/ar/brain-tumor-treatment-germany`,
  },
};

/**
 * Inject page-specific meta tags into the index.html template string.
 * Replaces <title>, meta description, og:title, og:description, og:url, canonical.
 * Falls back to original template if no entry found for the path.
 */
export function injectMeta(html: string, urlPath: string): string {
  // Normalize: strip trailing slash (except root "/")
  const path =
    urlPath.length > 1 ? urlPath.replace(/\/+$/, "") : urlPath;

  // Strip query string
  const cleanPath = path.split("?")[0];

  const meta = META_MAP[cleanPath];
  if (!meta) return html; // No entry → return unchanged

  let result = html;

  // 1. <title>
  result = result.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  // 2. meta description (use double-quote-aware regex to handle apostrophes in content)
  result = result.replace(
    /<meta\s+name=["']description["']\s+content="[^"]*"\s*\/>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );

  // 3. og:title
  const ogTitle = meta.ogTitle ?? meta.title;
  result = result.replace(
    /<meta\s+property=["']og:title["']\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`
  );

  // 4. og:description
  const ogDesc = meta.ogDescription ?? meta.description;
  result = result.replace(
    /<meta\s+property=["']og:description["']\s+content="[^"]*"\s*\/>/i,
    `<meta property="og:description" content="${escapeHtml(ogDesc)}" />`
  );

  // 5. og:url
  if (meta.canonical) {
    result = result.replace(
      /<meta\s+property=["']og:url["']\s+content="[^"]*"\s*\/>/i,
      `<meta property="og:url" content="${escapeHtml(meta.canonical)}" />`
    );
  }

  // 6. twitter:title
  result = result.replace(
    /<meta\s+name=["']twitter:title["']\s+content="[^"]*"\s*\/>/i,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`
  );

  // 7. twitter:description
  result = result.replace(
    /<meta\s+name=["']twitter:description["']\s+content="[^"]*"\s*\/>/i,
    `<meta name="twitter:description" content="${escapeHtml(ogDesc)}" />`
  );

  // 8. canonical link tag (if exists)
  if (meta.canonical) {
    result = result.replace(
      /<link\s+rel=["']canonical["']\s+href="[^"]*"\s*\/>/i,
      `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`
    );
  }

  return result;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
