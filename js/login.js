// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\login.js

document.addEventListener('DOMContentLoaded', () => {
    // Exemple de comportement pour le formulaire de connexion
    const loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // Ici vous pouvez ajouter votre logique d'authentification
            // Pour l'exemple, on laisse le comportement normal de redirection
            // e.g., validation ou affichage d'un message d'erreur
            console.log('Formulaire soumis');
        });
    }
    
    // Exemple : ajout d'un effet de survol sur le lien "Mot de passe oublié?"
    const forgotLink = document.querySelector('.link-text');
    if (forgotLink) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Rediriger vers la page de récupération ou afficher une modal
            alert("Page de récupération de mot de passe non implémentée.");
        });
    }
});
