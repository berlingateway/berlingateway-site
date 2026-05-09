/**
 * Berlin Gateway Centralized Layout System
 * Master layout module for institutional consistency across all pages
 * Based on /de/chancenkarte.html as the visual authority reference
 */

const LayoutSystem = {
  // Configuration
  config: {
    colors: {
      black: '#1A1D24',
      white: '#FFFFFF',
      darkGray: '#2A2F3A',
      lightGray: '#f8f9fa',
      border: '#D9E1EA'
    },
    spacing: {
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '40px',
      xxl: '60px'
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
      sizes: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '32px'
      },
      weights: {
        regular: 400,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      }
    }
  },

  // Initialize layout system
  init: function() {
    this.applyGlobalStyles();
    this.setupMobileNavigation();
    this.setupLanguageSwitch();
    this.setupResponsiveBehavior();
  },

  // Apply global institutional styles
  applyGlobalStyles: function() {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --color-black: ${this.config.colors.black};
        --color-white: ${this.config.colors.white};
        --color-dark-gray: ${this.config.colors.darkGray};
        --color-light-gray: ${this.config.colors.lightGray};
        --color-border: ${this.config.colors.border};
        --spacing-xs: ${this.config.spacing.xs};
        --spacing-sm: ${this.config.spacing.sm};
        --spacing-md: ${this.config.spacing.md};
        --spacing-lg: ${this.config.spacing.lg};
        --spacing-xl: ${this.config.spacing.xl};
        --spacing-xxl: ${this.config.spacing.xxl};
        --font-family: ${this.config.typography.fontFamily};
      }

      * {
        box-sizing: border-box;
      }

      body {
        font-family: var(--font-family);
        color: var(--color-black);
        background: var(--color-white);
        margin: 0;
        padding: 0;
      }

      /* Ensure no blue accents remain */
      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        opacity: 0.85;
      }

      button, .btn {
        background: var(--color-black);
        color: var(--color-white);
        border: 1px solid var(--color-black);
        cursor: pointer;
        font-family: var(--font-family);
        transition: background 0.2s, opacity 0.2s;
      }

      button:hover, .btn:hover {
        background: var(--color-dark-gray);
        border-color: var(--color-dark-gray);
      }

      /* Institutional card system */
      .card, .intelligence-card, .demand-card, .navigation-module {
        background: var(--color-white);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        padding: var(--spacing-lg);
      }

      .intelligence-card {
        border-left: 4px solid var(--color-black);
        background: var(--color-light-gray);
      }

      /* Dense spacing (20-30% reduction) */
      section, .section {
        padding: var(--spacing-xl) 0;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: ${this.config.typography.weights.bold};
      }

      h1 {
        font-size: var(--spacing-xxl);
        line-height: 1.3;
      }

      h2 {
        font-size: var(--spacing-xl);
        line-height: 1.4;
      }

      p {
        line-height: 1.6;
        margin: 0;
      }
    `;
    document.head.appendChild(style);
  },

  // Setup mobile navigation
  setupMobileNavigation: function() {
    const header = document.querySelector('header');
    if (!header) return;

    // Check if hamburger already exists
    if (document.querySelector('.hamburger')) return;

    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
      display: none;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--color-black);
      padding: 12px;
      z-index: 1000;
    `;

    const nav = header.querySelector('nav');
    if (nav) {
      nav.id = 'mobile-nav';
      nav.style.cssText = `
        display: flex;
        gap: 24px;
        align-items: center;
      `;
    }

    header.appendChild(hamburger);

    // Mobile behavior
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateMobileNav = (e) => {
      if (e.matches) {
        hamburger.style.display = 'block';
        if (nav) nav.style.display = 'none';
      } else {
        hamburger.style.display = 'none';
        if (nav) nav.style.display = 'flex';
      }
    };

    mediaQuery.addListener(updateMobileNav);
    updateMobileNav(mediaQuery);

    hamburger.addEventListener('click', () => {
      if (nav) {
        nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
      }
    });
  },

  // Setup language switch
  setupLanguageSwitch: function() {
    const langSwitch = document.querySelector('.lang-switch');
    if (!langSwitch) return;

    langSwitch.style.cssText = `
      background: var(--color-black) !important;
      color: var(--color-white) !important;
      border: 1px solid var(--color-black) !important;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: background 0.2s;
    `;

    langSwitch.addEventListener('mouseover', () => {
      langSwitch.style.background = 'var(--color-dark-gray) !important';
    });

    langSwitch.addEventListener('mouseout', () => {
      langSwitch.style.background = 'var(--color-black) !important';
    });
  },

  // Setup responsive behavior
  setupResponsiveBehavior: function() {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        h1 {
          font-size: 24px;
        }

        h2 {
          font-size: 20px;
        }

        section, .section {
          padding: var(--spacing-lg) 0;
        }

        .container, .chancenkarte-container {
          padding: 0 16px;
        }

        .demand-cards, .navigation-modules {
          grid-template-columns: 1fr !important;
        }

        nav {
          flex-direction: column;
          gap: 12px;
        }

        .header__inner {
          flex-direction: column;
          gap: 16px;
        }
      }

      @media (max-width: 480px) {
        h1 {
          font-size: 20px;
        }

        h2 {
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }

        section, .section {
          padding: var(--spacing-md) 0;
        }

        .container, .chancenkarte-container {
          padding: 0 12px;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => LayoutSystem.init());
} else {
  LayoutSystem.init();
}
