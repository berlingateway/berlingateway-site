export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
}

const CANONICAL_DOMAIN = "https://www.medicalcaregermany.com";
const DEFAULT_OG_IMAGE = CANONICAL_DOMAIN + "/og-image.jpg";

export const SEO_METADATA: Record<string, PageMetadata> = {
  home: {
    title: "Germany's Premier Medical Coordination Authority",
    description: "Berlin-based clinical coordination for international patients requiring complex medical interventions. Structured pathways to Germany's leading specialists.",
    canonical: CANONICAL_DOMAIN,
    ogTitle: "Germany's Premier Medical Coordination Authority",
    ogDescription: "Berlin-based clinical coordination for international patients requiring complex, high-priority medical interventions.",
    ogImage: DEFAULT_OG_IMAGE,
    twitterCard: "summary_large_image",
  },
};

export function getPageMetadata(page: string): PageMetadata {
  return SEO_METADATA[page] || SEO_METADATA.home;
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Medical Care Germany",
  url: CANONICAL_DOMAIN,
  logo: CANONICAL_DOMAIN + "/logo.png",
  description: "Germany's premier medical coordination authority for international patients requiring complex, high-priority medical interventions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Perleberger Str. 41",
    addressLocality: "Berlin",
    postalCode: "10559",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-30-25730875",
    contactType: "customer service",
    email: "info@medicalcaregermany.com",
    availableLanguage: ["English", "German", "Arabic"],
  },
  sameAs: [
    "https://www.facebook.com/medicalcaregermany",
    "https://www.linkedin.com/company/medical-care-germany",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Medical Care Germany",
  url: CANONICAL_DOMAIN,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: CANONICAL_DOMAIN + "/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
