/**
 * Dynamic Sitemap Generator
 * Medical Care Germany - SEO Authority Pack
 */

import type { Request, Response } from 'express';

const CANONICAL_DOMAIN = 'https://www.medicalcaregermany.com';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const STATIC_ROUTES: SitemapUrl[] = [
  {
    loc: CANONICAL_DOMAIN,
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: `${CANONICAL_DOMAIN}/physician-referral-clinical`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: `${CANONICAL_DOMAIN}/governmental-bodies`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: `${CANONICAL_DOMAIN}/private-medical-advisory`,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: `${CANONICAL_DOMAIN}/institutional-framework`,
    changefreq: 'monthly',
    priority: 0.8,
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export function handleSitemap(req: Request, res: Response): void {
  try {
    const sitemap = generateSitemapXML(STATIC_ROUTES);
    
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
}
