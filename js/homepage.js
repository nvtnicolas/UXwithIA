// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/homepage.js

document.addEventListener('DOMContentLoaded', () => {
    // Gestion du clic sur le bouton de recherche
    const searchButton = document.querySelector('.search-bar .icon-btn');
    const searchInput = document.querySelector('.search-bar input[type="text"]');

    if(searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if(query) {
                // Redirection vers la page de recherche avec le terme encodé dans l'URL
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    }
});
