/**
 * AGGRESSIVE PLATFORM BRANDING REMOVAL
 * 
 * Multi-layered client-side removal system for any injected platform badges.
 * Removes badges immediately on page load and monitors for dynamic injection.
 * 
 * Layers:
 * 1. Immediate removal on DOMContentLoaded
 * 2. Multiple timed removal passes
 * 3. MutationObserver for dynamic injection
 * 4. CSS hiding during removal process
 */

(function() {
  'use strict';

  // Aggressive selector list targeting all possible badge variations
  const BADGE_SELECTORS = [
    // Link-based badges
    'a[href*="manus.im"]',
    'a[href*="manus.space"]',
    'a[href*="manus.computer"]',
    'a[href*="manus-asia"]',
    'a[href*="manuspre"]',
    'a[href*="manuscomputer"]',
    'a[href*="manusvm"]',
    
    // Text content badges
    '[class*="manus"]',
    '[id*="manus"]',
    '[data-manus]',
    '[data-powered-by]',
    '[data-made-with]',
    
    // Common badge patterns
    'a[href*="made-with"]',
    'a[href*="powered-by"]',
    'a[href*="built-with"]',
    
    // Fixed position elements (common for badges)
    'a[style*="position: fixed"]',
    'div[style*="position: fixed"][style*="bottom"]',
    
    // Common badge class names
    '.badge-footer',
    '.platform-badge',
    '.attribution-badge',
    '.powered-by-badge',
    '.made-with-badge',
    
    // Specific text content
    '*:not(script):not(style)'
  ];

  /**
   * Remove all matching badge elements
   */
  function removeBadges() {
    let removedCount = 0;

    // Remove by selectors
    BADGE_SELECTORS.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          // Additional text content check for generic selectors
          if (selector.includes('*:not(script)')) {
            const text = el.textContent?.toLowerCase() || '';
            if (
              text.includes('made with manus') ||
              text.includes('powered by manus') ||
              text.includes('built with manus') ||
              (text.includes('manus') && (text.includes('made') || text.includes('powered') || text.includes('built')))
            ) {
              el.remove();
              removedCount++;
            }
          } else {
            el.remove();
            removedCount++;
          }
        });
      } catch (e) {
        // Ignore selector errors
      }
    });

    // Remove iframes that might contain badges
    document.querySelectorAll('iframe').forEach(iframe => {
      const src = iframe.src?.toLowerCase() || '';
      if (src.includes('manus')) {
        iframe.remove();
        removedCount++;
      }
    });

    if (removedCount > 0) {
      console.log(`[Badge Removal] Removed ${removedCount} elements`);
    }

    return removedCount;
  }

  /**
   * Inject CSS to hide badges during removal
   */
  function injectHidingCSS() {
    const style = document.createElement('style');
    style.id = 'badge-hiding-css';
    style.textContent = `
      /* Hide platform badges immediately */
      a[href*="manus"],
      [class*="manus"],
      [id*="manus"],
      [data-manus],
      [data-powered-by],
      [data-made-with],
      .badge-footer,
      .platform-badge,
      .attribution-badge,
      .powered-by-badge,
      .made-with-badge {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Set up MutationObserver to catch dynamically injected badges
   */
  function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      let shouldRemove = false;
      
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            const el = node;
            const text = el.textContent?.toLowerCase() || '';
            const href = el.getAttribute?.('href')?.toLowerCase() || '';
            const className = el.className?.toString().toLowerCase() || '';
            
            if (
              href.includes('manus') ||
              className.includes('manus') ||
              text.includes('made with manus') ||
              text.includes('powered by manus')
            ) {
              shouldRemove = true;
            }
          }
        });
      });

      if (shouldRemove) {
        removeBadges();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id', 'href', 'style']
    });

    console.log('[Badge Removal] MutationObserver active');
  }

  /**
   * Initialize badge removal system
   */
  function init() {
    // Layer 1: Inject hiding CSS immediately
    injectHidingCSS();

    // Layer 2: Remove badges on DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        removeBadges();
      });
    } else {
      removeBadges();
    }

    // Layer 3: Multiple timed removal passes
    const timings = [50, 100, 200, 500, 1000, 2000, 5000];
    timings.forEach(delay => {
      setTimeout(removeBadges, delay);
    });

    // Layer 4: Set up MutationObserver after initial load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(setupMutationObserver, 100);
      });
    } else {
      setTimeout(setupMutationObserver, 100);
    }

    console.log('[Badge Removal] System initialized');
  }

  // Start immediately
  init();
})();
