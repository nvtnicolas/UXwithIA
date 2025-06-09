
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\home-deconnecte.js

document.addEventListener('DOMContentLoaded', () => {
    // Exemple : Gérer la recherche au clic sur le bouton.
    const searchBtn = document.querySelector('.search-bar .icon-btn');
    const searchInput = document.querySelector('.search-bar input[type="text"]');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                // Redirection fictive vers la page search.html
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    }
});
