/* 
   File: decision-tree.js
   Version: 1.0.0
   Description: Logic for interactive decision trees without frameworks.
   Namespace: bg-
*/

document.addEventListener('DOMContentLoaded', () => {
    const trees = document.querySelectorAll('.bg-decision-tree');
    
    trees.forEach(tree => {
        const steps = tree.querySelectorAll('.bg-decision-tree__step');
        const buttons = tree.querySelectorAll('.bg-decision-tree__button');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const nextStepId = button.getAttribute('data-next');
                const currentStep = button.closest('.bg-decision-tree__step');
                
                // Hide current step
                currentStep.classList.remove('bg-decision-tree__step--active');
                currentStep.style.display = 'none';
                
                // Show next step
                const nextStep = tree.querySelector(`#${nextStepId}`);
                if (nextStep) {
                    nextStep.classList.add('bg-decision-tree__step--active');
                    nextStep.style.display = 'block';
                    
                    // Smooth scroll to tree top if needed
                    tree.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Initialize: Show only the first step
        steps.forEach((step, index) => {
            if (index === 0) {
                step.classList.add('bg-decision-tree__step--active');
                step.style.display = 'block';
            } else {
                step.classList.remove('bg-decision-tree__step--active');
                step.style.display = 'none';
            }
        });
    });
});
