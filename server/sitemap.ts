/**
 * Arabic-First Sitemap Generator
 * Medical Care Germany — SEO Authority Pack
 *
 * POLICY: Only the homepage and /ar/* Arabic pages are indexed.
 * All English-only and hybrid pages are excluded.
 */

import type { Request, Response } from 'express';

const CANONICAL_DOMAIN = 'https://medicalcaregermany.com';

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
    loc: CANONICAL_DOMAIN + '/',
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
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/complex-trauma-evaluation`,
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

  // ── Arabic Cardiology ──────────────────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/cardiology-treatment-germany`,
    changefreq: 'monthly',
    priority: 0.85,
  },

  // ── Arabic Symptom Entry Pages ────────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/dizziness-long-term`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/vertigo-unknown-cause`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/unexplained-balance-loss`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/numbness-one-side-body`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/tingling-burning-sensation`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/nerve-pain-face`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/back-pain-with-numbness`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/chronic-neck-pain`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/head-pressure-unknown`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/chronic-headache-unknown`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/weakness-in-limbs`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/sudden-body-weakness`,
    changefreq: 'monthly',
    priority: 0.75,
  },

  // ── Arabic Symptom Pages (new) ───────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/parkinsons-treatment-germany`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/pediatric-neurology-germany`,
    changefreq: 'monthly',
    priority: 0.75,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/shrapnel-brain-injury-germany`,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/nerve-injury-after-trauma-germany`,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/medical-visa-residency-germany`,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/prosthetics-after-amputation-germany`,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/joint-replacement-after-trauma`,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/complex-trauma-germany`,
    changefreq: 'monthly',
    priority: 0.8,
  },

  // ── Arabic SEO Gateway Pages ───────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/العلاج-في-المانيا-للعرب`,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/تكلفة-العلاج-في-المانيا`,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/فيزا-العلاج-في-المانيا`,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/مستشفيات-المانيا-للعرب`,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/السفر-للعلاج-في-المانيا`,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/ارسال-التقارير-الطبية`,
    changefreq: 'monthly',
    priority: 0.6,
  },

   // ── Arabic Utility Pages ─────────────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/videos`,
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/submit-case`,
    changefreq: 'monthly',
    priority: 0.8,
  },

  // ── Arabic HNO/ENT Cluster ─────────────────────────────────────────────────
  {
    loc: `${CANONICAL_DOMAIN}/ar/ent-germany`,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/ent-surgery-germany`,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/hearing-implant-germany`,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/tinnitus-treatment-germany`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/voice-prosthesis-germany`,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/head-neck-tumor-germany`,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/sleep-apnea-snoring-germany`,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${CANONICAL_DOMAIN}/ar/pediatric-ent-germany`,
    changefreq: 'monthly',
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
