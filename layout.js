/**
 * Berlin Gateway — Centralized Layout System
 * 
 * This module provides:
 * 1. Shared CSS (design system, typography, spacing, grid)
 * 2. Bilingual Header (English/German/Arabic)
 * 3. Bilingual Footer (English/German/Arabic)
 * 4. Responsive behavior
 * 
 * Usage:
 * <script src="/layout.js"></script>
 * <script>
 *   initializeLayout({
 *     lang: 'en',  // 'en', 'de', 'ar'
 *     currentPage: 'home'  // 'home', 'framework', 'eligibility', 'thankyou'
 *   });
 * </script>
 */

// ============================================================================
// 1. SHARED CSS (Design System)
// ============================================================================

function injectSharedCSS() {
  const styleId = 'bg-shared-styles';
  
  // Prevent duplicate injection
  if (document.getElementById(styleId)) return;
  
  const sharedCSS = `
    :root {
      --navy: #0b1220;
      --ink: #0f172a;
      --muted: #64748b;
      --line: #e2e8f0;
      --bg: #f6f8fb;
      --card: #ffffff;
      --radius: 18px;
      --shadow: 0 14px 40px rgba(2,6,23, .10);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      color: var(--ink);
      background: radial-gradient(900px 400px at 50% -120px, rgba(11,18,32, .10), transparent 70%), var(--bg);
    }

    html[lang="ar"] body {
      font-family: "IBM Plex Sans Arabic", Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* ===== LAYOUT CONTAINER ===== */
    .wrap {
      max-width: 1040px;
      margin: 0 auto;
      padding: 22px 18px 40px;
    }

    /* ===== HEADER ===== */
    header.bg-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      margin-bottom: 16px;
    }

    .bg-brand {
      font-weight: 800;
      letter-spacing: -0.02em;
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 1rem;
    }

    .bg-dot {
      width: 10px;
      height: 10px;
      border-radius: 99px;
      background: var(--navy);
    }

    .bg-nav {
      display: flex;
      gap: 14px;
      color: var(--muted);
      font-size: 0.95rem;
      flex-wrap: wrap;
    }

    .bg-nav a {
      padding: 8px 10px;
      border-radius: 10px;
      transition: background 0.2s ease;
    }

    .bg-nav a:hover {
      background: rgba(2, 6, 23, 0.06);
    }

    .bg-nav a.active {
      color: var(--navy);
      font-weight: 600;
    }

    /* ===== FOOTER ===== */
    footer.bg-footer {
      margin-top: 22px;
      color: var(--muted);
      font-size: 0.92rem;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: space-between;
      align-items: center;
      padding-top: 14px;
      border-top: 1px solid var(--line);
    }

    .bg-footlinks {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .bg-footlinks a {
      text-decoration: underline;
      text-underline-offset: 3px;
      transition: color 0.2s ease;
    }

    .bg-footlinks a:hover {
      color: var(--navy);
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 900px) {
      .bg-nav {
        display: none;
      }

      header.bg-header {
        justify-content: flex-start;
      }

      .bg-brand {
        font-size: 0.95rem;
      }

      footer.bg-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }
    }

    /* ===== UTILITY CLASSES ===== */
    .bg-hidden-mobile {
      display: block;
    }

    @media (max-width: 900px) {
      .bg-hidden-mobile {
        display: none;
      }
    }
  `;

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = sharedCSS;
  document.head.appendChild(style);
}

// ============================================================================
// 2. HEADER COMPONENT
// ============================================================================

const headerConfig = {
  en: {
    brand: 'Berlin Gateway',
    nav: [
      { label: 'Framework', href: '/framework.html' },
      { label: 'Deutsch', href: '/de/' },
      { label: 'العربية', href: '/ar/eligibility.html' }
    ]
  },
  de: {
    brand: 'Berlin Gateway',
    nav: [
      { label: 'Home', href: '/index.html' },
      { label: 'Framework', href: '/framework.html' },
      { label: 'العربية (Start)', href: '/ar/eligibility.html' }
    ]
  },
  ar: {
    brand: 'Berlin Gateway',
    nav: [
      { label: 'الرئيسية', href: '/index.html' },
      { label: 'Framework', href: '/framework.html' },
      { label: 'Deutsch', href: '/de/' }
    ]
  }
};

function createHeader(lang = 'en', currentPage = '') {
  const config = headerConfig[lang] || headerConfig.en;
  
  const header = document.createElement('header');
  header.className = 'bg-header';
  
  // Brand
  const brand = document.createElement('div');
  brand.className = 'bg-brand';
  brand.innerHTML = `<span class="bg-dot"></span> ${config.brand}`;
  
  // Navigation
  const nav = document.createElement('nav');
  nav.className = 'bg-nav';
  
  config.nav.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    if (item.href === currentPage || (currentPage === '/' && item.href === '/index.html')) {
      link.classList.add('active');
    }
    nav.appendChild(link);
  });
  
  header.appendChild(brand);
  header.appendChild(nav);
  
  return header;
}

// ============================================================================
// 3. FOOTER COMPONENT
// ============================================================================

const footerConfig = {
  en: {
    copyright: '© Berlin Gateway — Germany',
    links: [
      { label: 'info@berlingateway.de', href: 'mailto:info@berlingateway.de' },
      { label: 'Framework', href: '/framework.html' }
    ]
  },
  de: {
    copyright: '© Berlin Gateway — Germany',
    links: [
      { label: 'info@berlingateway.de', href: 'mailto:info@berlingateway.de' },
      { label: 'Framework', href: '/framework.html' }
    ]
  },
  ar: {
    copyright: '© Berlin Gateway — Germany',
    links: [
      { label: 'info@berlingateway.de', href: 'mailto:info@berlingateway.de' },
      { label: 'Framework', href: '/framework.html' }
    ]
  }
};

function createFooter(lang = 'en') {
  const config = footerConfig[lang] || footerConfig.en;
  
  const footer = document.createElement('footer');
  footer.className = 'bg-footer';
  
  // Copyright
  const copyright = document.createElement('div');
  copyright.textContent = config.copyright;
  
  // Links
  const linksContainer = document.createElement('div');
  linksContainer.className = 'bg-footlinks';
  
  config.links.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    linksContainer.appendChild(link);
  });
  
  footer.appendChild(copyright);
  footer.appendChild(linksContainer);
  
  return footer;
}

// ============================================================================
// 4. INITIALIZATION FUNCTION
// ============================================================================

function initializeLayout(options = {}) {
  const {
    lang = 'en',
    currentPage = '',
    insertHeaderSelector = 'body > .wrap > header',
    insertFooterSelector = 'body > .wrap > footer'
  } = options;

  // Inject shared CSS
  injectSharedCSS();

  // Set HTML lang attribute
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Create and insert header
  const existingHeader = document.querySelector('header.bg-header');
  if (!existingHeader) {
    const headerElement = createHeader(lang, currentPage);
    const wrap = document.querySelector('.wrap');
    if (wrap) {
      wrap.insertBefore(headerElement, wrap.firstChild);
    }
  }

  // Create and insert footer
  const existingFooter = document.querySelector('footer.bg-footer');
  if (!existingFooter) {
    const footerElement = createFooter(lang);
    const wrap = document.querySelector('.wrap');
    if (wrap) {
      wrap.appendChild(footerElement);
    }
  }
}

// ============================================================================
// 5. EXPORT FOR USE
// ============================================================================

// Make available globally
window.BGLayout = {
  initializeLayout,
  createHeader,
  createFooter,
  injectSharedCSS
};

// Auto-initialize if data attribute is present
document.addEventListener('DOMContentLoaded', function() {
  const htmlElement = document.documentElement;
  const lang = htmlElement.getAttribute('lang') || 'en';
  const currentPage = window.location.pathname;
  
  // Only auto-initialize if layout hasn't been manually initialized
  if (!document.querySelector('header.bg-header')) {
    initializeLayout({ lang, currentPage });
  }
});
