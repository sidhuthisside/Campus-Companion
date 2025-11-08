// Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordion = document.querySelector('.accordion');

    // Event delegation to support dynamically injected FAQ items
    if (accordion) {
        accordion.addEventListener('click', function(e) {
            const header = e.target.closest('.accordion-header');
            if (!header) return;
            const item = header.closest('.accordion-item');
            if (!item) return;

            // Toggle active on clicked item and close others
            const allItems = accordion.querySelectorAll('.accordion-item');
            allItems.forEach(other => {
                if (other === item) {
                    other.classList.toggle('active');
                } else {
                    other.classList.remove('active');
                }
            });
        });
    }

    // Open first accordion item by default on FAQ page (after static load)
    if (window.location.pathname.includes('faqs.html')) {
        const first = document.querySelector('.accordion .accordion-item');
        if (first) first.classList.add('active');
    }
});