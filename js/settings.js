
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/settings.js

document.addEventListener('DOMContentLoaded', () => {
    // Confirmation de déconnexion
    const logoutButton = document.querySelector('.button.button-danger');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
                // Redirige vers la page de déconnexion (par exemple home-deconnecte.html)
                window.location.href = 'home-deconnecte.html';
            }
        });
    }
});
