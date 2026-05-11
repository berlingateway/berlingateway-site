/**
 * Master Cross-Cluster System
 * Reusable components for Berlin Gateway institutional modules
 */

class ClusterSystem {
    constructor() {
        this.initFAQ();
        this.initMatrix();
    }

    /**
     * Initialize FAQ Accordion System
     */
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            if (!question || !answer) return;
            
            question.addEventListener('click', () => {
                const isActive = question.classList.contains('active');
                
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherQuestion && otherAnswer) {
                        otherQuestion.classList.remove('active');
                        otherAnswer.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });
    }

    /**
     * Initialize Matrix Responsive Behavior
     */
    initMatrix() {
        const matrices = document.querySelectorAll('.matrix-table');
        
        matrices.forEach(matrix => {
            // Add responsive class if needed
            const container = matrix.closest('.matrix-container');
            if (container) {
                // Ensure proper scrolling on mobile
                container.style.webkitOverflowScrolling = 'touch';
            }
        });
    }

    /**
     * Scroll to section with smooth behavior
     */
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * Track cluster navigation for analytics
     */
    trackClusterNavigation(fromPage, toPage) {
        if (window.gtag) {
            gtag('event', 'cluster_navigation', {
                from_page: fromPage,
                to_page: toPage,
                timestamp: new Date().toISOString()
            });
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new ClusterSystem();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClusterSystem;
}
