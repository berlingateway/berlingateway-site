/* 
   File: anchor-nav.js
   Version: 1.0.0
   Description: Logic for sticky navigation and active state on scroll.
   Namespace: bg-
*/

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.bg-anchor-nav');
    if (!nav) return;

    const links = nav.querySelectorAll('.bg-anchor-nav__link');
    const sections = Array.from(links).map(link => {
        const id = link.getAttribute('href').substring(1);
        return document.getElementById(id);
    }).filter(section => section !== null);

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Offset for sticky nav

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('bg-anchor-nav__link--active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('bg-anchor-nav__link--active');
            }
        });
    });

    // Smooth scroll
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });
});
