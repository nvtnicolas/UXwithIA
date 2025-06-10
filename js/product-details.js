document.addEventListener('DOMContentLoaded', () => {
    /* Gestion de l'activation des miniatures de produit */
    const thumbnails = document.querySelectorAll('.product-thumbnails .thumbnail');
    const mainProductImg = document.querySelector('.main-product-img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Retiré la classe active de toutes les miniatures
            thumbnails.forEach(tn => tn.classList.remove('active'));
            // Ajoute la classe active à la miniature cliquée
            thumbnail.classList.add('active');
            // Met à jour l'image principale avec l'image de la miniature cliquée
            if (mainProductImg) {
                mainProductImg.src = thumbnail.src;
            }
        });
    });
    
    /* Gestion du bouton favori */
    const favoriteBtn = document.querySelector('.favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', () => {
            // Exemple de basculement visuel, à adapter selon votre logique d'authentification
            favoriteBtn.classList.toggle('favorited');
            // Vous pouvez modifier l'icône ou ajouter d'autres actions si nécessaire
        });
    }
    
    /* Vous pouvez ajouter d'autres interactions si nécessaire, par exemple sur les boutons d'action */
});