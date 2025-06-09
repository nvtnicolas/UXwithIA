
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\favorites-seller.js

document.addEventListener('DOMContentLoaded', function () {
    // Exemple de suppression du favori
    const unfavButtons = document.querySelectorAll('.icon-only-btn');
    unfavButtons.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            // On retire le vendeur de la liste
            const userCard = this.closest('.user-card');
            if (userCard) {
                userCard.remove();
            }
        });
    });
});