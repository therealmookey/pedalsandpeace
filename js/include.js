// ===== INCLUDE NAVIGATIE =====
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('nav-placeholder');
    
    if (navContainer) {
        fetch('includes/navigatie.html')
            .then(response => response.text())
            .then(data => {
                navContainer.innerHTML = data;
                
                // Actieve link markeren
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                document.querySelectorAll('.nav-links a').forEach(link => {
                    if (link.getAttribute('href') === currentPage) {
                        link.classList.add('active');
                    }
                });
                
                // Hamburger menu functionaliteit
                const hamburger = document.getElementById('hamburger');
                const navLinks = document.querySelector('.nav-links');
                const navCta = document.querySelector('.nav-cta');
                
                if (hamburger) {
                    hamburger.addEventListener('click', function() {
                        navLinks.classList.toggle('active');
                        navCta.classList.toggle('active');
                        hamburger.classList.toggle('active');
                    });
                }
            })
            .catch(error => console.error('Navigatie laden mislukt:', error));
    }
});