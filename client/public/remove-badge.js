/**
 * SAFE MINIMAL BADGE REMOVAL SCRIPT
 * 
 * Ultra-conservative approach:
 * - Only removes elements containing "Made with Manus" text AND linking to manus domains
 * - Strict whitelist prevents touching core app elements
 * - Prefers CSS hiding over DOM removal
 * - Limited execution time (stops after 2 seconds)
 * - No aggressive loops or broad selectors
 */

(function() {
  'use strict';

  // Strict whitelist - NEVER touch these elements
  const WHITELIST_SELECTORS = [
    '#root',
    '#app', 
    'body',
    'html',
    'main',
    'header',
    'footer',
    'nav',
    '[role="main"]',
    '[role="navigation"]',
    '[role="banner"]',
    '[role="contentinfo"]'
  ];

  // Manus domain patterns for link verification
  const MANUS_DOMAINS = [
    'manus.im',
    'manus.space',
    'manus.computer',
    'manus-asia',
    'manuspre',
    'manuscomputer',
    'manusvm'
  ];

  // Badge text patterns (case-insensitive)
  const BADGE_TEXT_PATTERNS = [
    'made with manus',
    'powered by manus',
    'built with manus'
  ];

  /**
   * Check if element is whitelisted (critical app element)
   */
  function isWhitelisted(element) {
    if (!element || !element.matches) return true;
    
    // Check if element matches any whitelist selector
    for (const selector of WHITELIST_SELECTORS) {
      try {
        if (element.matches(selector)) return true;
        // Also check if element is inside a whitelisted element
        if (element.closest(selector)) return true;
      } catch (e) {
        // Ignore selector errors
      }
    }
    
    return false;
  }

  /**
   * Check if element is a Manus badge link
   */
  function isBadgeLink(element) {
    // Must be an anchor tag
    if (element.tagName !== 'A') return false;
    
    // Get href
    const href = (element.getAttribute('href') || '').toLowerCase();
    
    // Must link to a Manus domain
    const linksToManus = MANUS_DOMAINS.some(domain => href.includes(domain));
    if (!linksToManus) return false;
    
    // Get text content
    const text = (element.textContent || '').toLowerCase().trim();
    
    // Must contain badge text
    const hasBadgeText = BADGE_TEXT_PATTERNS.some(pattern => text.includes(pattern));
    
    return hasBadgeText;
  }

  /**
   * Safe badge removal - only removes confirmed badge links
   */
  function removeBadges() {
    let removedCount = 0;
    
    // Find all anchor tags
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
      // Skip if whitelisted
      if (isWhitelisted(link)) return;
      
      // Check if it's a badge link
      if (isBadgeLink(link)) {
        // Hide with CSS first (safer than removal)
        link.style.display = 'none';
        link.style.visibility = 'hidden';
        link.style.opacity = '0';
        link.style.pointerEvents = 'none';
        
        // Mark as removed
        link.setAttribute('data-badge-hidden', 'true');
        removedCount++;
        
        console.log('[Badge Removal] Hidden badge link:', link.textContent.trim());
      }
    });
    
    return removedCount;
  }

  /**
   * Inject minimal CSS to hide badges
   */
  function injectCSS() {
    const style = document.createElement('style');
    style.id = 'safe-badge-hiding';
    style.textContent = `
      /* Safe badge hiding - only targets confirmed badge links */
      a[data-badge-hidden="true"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Limited MutationObserver - runs for max 2 seconds
   */
  function setupLimitedObserver() {
    let observerActive = true;
    
    const observer = new MutationObserver(() => {
      if (!observerActive) return;
      removeBadges();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Stop observer after 2 seconds
    setTimeout(() => {
      observerActive = false;
      observer.disconnect();
      console.log('[Badge Removal] Observer stopped after 2 seconds');
    }, 2000);
    
    console.log('[Badge Removal] Limited observer active (2s max)');
  }

  /**
   * Initialize safe badge removal
   */
  function init() {
    console.log('[Badge Removal] Safe minimal script initialized');
    
    // Inject CSS
    injectCSS();
    
    // Initial removal on DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        const count = removeBadges();
        console.log(`[Badge Removal] Initial scan: ${count} badges hidden`);
      });
    } else {
      const count = removeBadges();
      console.log(`[Badge Removal] Initial scan: ${count} badges hidden`);
    }
    
    // Single follow-up check after 500ms
    setTimeout(() => {
      const count = removeBadges();
      if (count > 0) {
        console.log(`[Badge Removal] Follow-up scan: ${count} badges hidden`);
      }
    }, 500);
    
    // Limited observer (2 seconds max)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupLimitedObserver);
    } else {
      setupLimitedObserver();
    }
  }

  // Start
  init();
})();
