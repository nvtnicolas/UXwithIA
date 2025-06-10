// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/order-details.js

document.addEventListener('DOMContentLoaded', () => {
    // Exemple : Gestion des boutons d'action
    
    const contactSellerButton = document.querySelector('.order-actions .button:not(.button-secondary)');
    if (contactSellerButton) {
        contactSellerButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirection vers la page chat.html
            window.location.href = 'chat.html';
        });
    }
    
    const trackingButton = document.querySelector('.order-actions .button.button-secondary');
    if (trackingButton) {
        trackingButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Suivi de livraison : fonctionnalité à implémenter.");
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Redirige vers la page détail produit quand on clique sur le produit "TV Samsung 4K"
    const productCard = document.querySelector('.product-card');
    if (productCard) {
        productCard.addEventListener('click', (e) => {
            // Empêche d'éventuelles autres actions si besoin
            e.preventDefault();
            window.location.href = 'product-details.html';
        });
    }
    
    // Bouton "Contacter le vendeur" redirige vers la page chat
    const contactSellerBtn = document.querySelector('.order-actions .button:not(.button-secondary)');
    if (contactSellerBtn) {
        contactSellerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'chat.html';
        });
    }
    
    // Bouton "Suivi de livraison"
    const trackingBtn = document.querySelector('.order-actions .button.button-secondary');
    if (trackingBtn) {
        trackingBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Suivi de livraison : fonctionnalité à implémenter.');
        });
    }
    
    // Bouton "Laisser un avis"
    const leaveReviewBtn = document.querySelector('.leave-review-btn');
    if (leaveReviewBtn) {
        leaveReviewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'leave-review.html';
        });
    }
});
