/**
 * HreflangTags
 * ─────────────────────────────────────────────────────────────────────────────
 * Injects hreflang link tags + canonical into document.head for the current page.
 *
 * Usage:
 *   import HreflangTags from "@/components/HreflangTags";
 *   <HreflangTags currentPath="/ar/advanced-rehabilitation-germany" />
 *
 * Reads from PAGE_GRAPH to resolve language equivalents.
 * Falls back gracefully if the page is not in the graph.
 *
 * Renders null — no visible DOM output.
 */

import { useEffect } from "react";
import { PAGE_GRAPH } from "@/lib/mcgPageGraph";

const BASE_URL = "https://medicalcaregermany.com";

interface HreflangTagsProps {
  currentPath: string;
}

function setOrCreate(rel: string, hreflang: string, href: string) {
  const existing = document.querySelector(
    `link[rel="${rel}"][hreflang="${hreflang}"]`
  ) as HTMLLinkElement | null;
  if (existing) {
    existing.href = href;
  } else {
    const link = document.createElement("link");
    link.rel = rel;
    link.setAttribute("hreflang", hreflang);
    link.href = href;
    document.head.appendChild(link);
  }
}

function setCanonical(href: string) {
  const existing = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;
  if (existing) {
    existing.href = href;
  } else {
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = href;
    document.head.appendChild(link);
  }
}

function removeHreflangTags() {
  document
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((el) => el.remove());
}

const LANG_TO_HREFLANG: Record<string, string> = {
  ar: "ar",
  en: "en",
  de: "de",
};

export default function HreflangTags({ currentPath }: HreflangTagsProps) {
  useEffect(() => {
    const node = PAGE_GRAPH[currentPath];

    // Always set canonical
    setCanonical(`${BASE_URL}${currentPath}`);

    if (!node) {
      removeHreflangTags();
      return;
    }

    // Remove old hreflang tags before setting new ones
    removeHreflangTags();

    const { lang, equivalents } = node;

    // Self-referencing hreflang
    setOrCreate("alternate", LANG_TO_HREFLANG[lang], `${BASE_URL}${currentPath}`);

    // Equivalents
    for (const [targetLang, targetPath] of Object.entries(equivalents)) {
      if (targetPath) {
        setOrCreate(
          "alternate",
          LANG_TO_HREFLANG[targetLang] ?? targetLang,
          `${BASE_URL}${targetPath}`
        );
      }
    }

    // x-default → Arabic version (primary audience)
    const arPath = lang === "ar" ? currentPath : (equivalents["ar"] ?? currentPath);
    setOrCreate("alternate", "x-default", `${BASE_URL}${arPath}`);

    return () => {
      // Cleanup on unmount (route change)
      removeHreflangTags();
    };
  }, [currentPath]);

  return null;
}
