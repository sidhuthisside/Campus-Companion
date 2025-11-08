// Initialize the API client
window.api = new CampusCompanionAPI();

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    // Initialize API client and load page data if backend is healthy
    try {
        window.api.testConnection().then(response => {
            console.log('Backend connection test:', response);
            if (response && response.status === 'success') {
                const path = window.location.pathname;
                if (path.includes('departments.html')) {
                    if (window.loadDepartments) window.loadDepartments();
                } else if (path.includes('procedures.html')) {
                    if (window.loadProcedures) window.loadProcedures();
                } else if (path.includes('faqs.html')) {
                    if (window.loadFAQs) window.loadFAQs();
                } else if (path.includes('tips.html')) {
                    if (window.loadTips) window.loadTips();
                }
            }
        }).catch(error => {
            console.error('Backend connection test failed:', error);
        });
    } catch (error) {
        console.error('Failed to initialize API client:', error);
    }
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // FAQ Search Functionality
    const faqSearch = document.getElementById('faq-search');
    if (faqSearch) {
        faqSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const faqItems = document.querySelectorAll('.accordion-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.accordion-header h3').textContent.toLowerCase();
                const answer = item.querySelector('.accordion-content').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // FAQ Category Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                const faqItems = document.querySelectorAll('.accordion-item');
                
                faqItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Tips Category Filtering
    const tipCategoryButtons = document.querySelectorAll('.tips-categories .category-btn');
    if (tipCategoryButtons.length > 0) {
        tipCategoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tipCategoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                const tipCards = document.querySelectorAll('.tip-card');
                
                tipCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});