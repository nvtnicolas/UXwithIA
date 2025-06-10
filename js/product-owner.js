
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/product-owner.js

document.addEventListener('DOMContentLoaded', () => {
    /* Gestion du changement d'image via les miniatures */
    const thumbnails = document.querySelectorAll('.product-thumbnails .thumbnail');
    const mainProductImg = document.querySelector('.main-product-img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Retire la classe active de toutes les miniatures
            thumbnails.forEach(tn => tn.classList.remove('active'));
            // Ajoute la classe active à la miniature cliquée
            thumbnail.classList.add('active');
            // Met à jour l'image principale
            if (mainProductImg) {
                mainProductImg.src = thumbnail.src;
            }
        });
    });
    
    /* Action pour le bouton "Marquer comme vendu" */
    const markAsSoldBtn = document.querySelector('.button.button-secondary');
    if (markAsSoldBtn) {
        markAsSoldBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm("Voulez-vous vraiment marquer cette annonce comme vendue ?")) {
                // Ici, vous pouvez ajouter la logique pour mettre à jour le statut
                alert("Annonce marquée comme vendue.");
                // Par exemple, rediriger ou mettre à jour l'affichage
            }
        });
    }
    
    /* Action pour le bouton "Supprimer" */
    const deleteBtn = document.querySelector('.button.button-danger');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm("Êtes-vous sûr de vouloir supprimer cette annonce ? Cette action est irréversible.")) {
                // Logique de suppression à implémenter
                alert("Annonce supprimée.");
                // Par exemple, rediriger vers la liste des annonces
                window.location.href = 'my-listings.html';
            }
        });
    }
    
    /* Action pour le bouton "Modifier l'annonce" : redirection vers la page d'édition */
    const editBtn = document.querySelector('.product-actions a.button');
    if (editBtn) {
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'edit-listing.html';
        });
    }
    
    /* Action pour le bouton "Plus d'options" dans le header */
    const headerBtn = document.querySelector('header .header-btn');
    if (headerBtn) {
        headerBtn.addEventListener('click', () => {
            // Exemple d'affichage de menu contextuel pour les options supplémentaires
            alert("Menu d'options à implémenter.");
        });
    }
});
