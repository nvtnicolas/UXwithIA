
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/my-listings.js

document.addEventListener('DOMContentLoaded', () => {
    // Exemple : Gestion d'un clic sur l'icône "more options" de chaque annonce
    const moreIcons = document.querySelectorAll('.listing-options');
    moreIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            // Affichez ici un menu contextuel, une alerte par exemple
            alert('Options de l\'annonce');
        });
    });
    
    // Vous pouvez ajouter d'autres interactions selon vos besoins (ex. filtrer les onglets)
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            // Marquer l'onglet actif
            tabButtons.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // Ici vous pourriez filtrer les annonces affichées
            console.log('Filtrer en fonction de :', tab.textContent);
        });
    });
});
