/**
 * Arabic-First Sitemap Generator
 * Medical Care Germany — SEO Authority Pack
 *
 * POLICY: Only the homepage and /ar/* Arabic pages are indexed.
 * All English-only and hybrid pages are excluded.
 */

import type { Request, Response } from 'express';

const CANONICAL_DOMAIN = 'https://www.medicalcaregermany.com';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * ARABIC-FIRST URL SET
 * Rule: homepage (/) + all /ar/* pages only.
 * Do NOT add English-only or hybrid pages here.
 */
const STATIC_ROUTES: SitemapUrl[] = [
  // ── Homepage ──────────────────────────────────────────────────────────────
  {
    loc: CANONICAL_DOMAIN,
    changefreq: 'weekly',
    priority: 1.0,
  },

  // ── Arabic Hub ────────────────────────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar`,
    changefreq: 'weekly',
    priority: 0.95,
  },

  // ── Arabic Condition Pages ─────────────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/neurology-treatment-germany`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/brain-tumor-treatment-germany`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/trigeminal-neuralgia-treatment-germany`,
    changefreq: 'monthly',
    priority: 0.85,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/herniated-disc`,
    changefreq: 'monthly',
    priority: 0.85,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/lung-cancer-treatment-germany`,
    changefreq: 'monthly',
    priority: 0.9,
  },

  // ── Arabic Utility Pages ───────────────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/videos`,
    changefreq: 'weekly',
    priority: 0.7,
  },
];

function generateSitemapXML(urls: SitemapUrl[]): string {
  const lastmod = new Date().toISOString().split('T')[0];
  
  const urlEntries = urls
    .map(url => {
      return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod || lastmod}</lastmod>
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority.toFixed(1)}</priority>` : ''}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;
}

export function handleSitemap(req: Request, res: Response): void {
  try {
    const sitemap = generateSitemapXML(STATIC_ROUTES);
    
    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
}
