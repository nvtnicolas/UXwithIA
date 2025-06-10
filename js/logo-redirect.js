document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        // Modifier le curseur pour indiquer que c'est cliquable
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            window.location.href = 'homepage.html';
        });
    });
});