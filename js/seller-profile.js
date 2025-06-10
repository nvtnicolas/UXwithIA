// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/seller-profile.js

document.addEventListener('DOMContentLoaded', () => {
    // Gestion des onglets : basculement entre "Ses annonces" et "Avis"
    const tabButtons = document.querySelectorAll('.tab-btn');
    const sellerListingsContainer = document.querySelector('.seller-listings');

    // Création d'un conteneur pour les avis et insertion après sellerListingsContainer
    let reviewsContainer = document.createElement('div');
    reviewsContainer.className = 'reviews-container';
    reviewsContainer.style.display = 'none';
    sellerListingsContainer.parentNode.insertBefore(reviewsContainer, sellerListingsContainer.nextSibling);

    // Tableau de faux avis
    const fakeReviews = [
        {
            reviewer: 'Alice Martin',
            rating: '★★★★★',
            date: '10/06/2025',
            text: 'Jean est un vendeur très fiable. La transaction s’est déroulée sans encombre.'
        },
        {
            reviewer: 'Paul Rico',
            rating: '★★★★☆',
            date: '08/06/2025',
            text: "Produit conforme à la description. Je recommande Jean."
        },
        {
            reviewer: 'Claire Dubois',
            rating: '★★★★★',
            date: '05/06/2025',
            text: 'Service client exceptionnel et vente rapide. Merci Jean !'
        }
    ];

    function renderReviews() {
        reviewsContainer.innerHTML = ''; // Nettoyer le conteneur
        fakeReviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.innerHTML = `
                <div class="review-header">
                    <strong>${review.reviewer}</strong>
                    <span class="review-rating">${review.rating}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <p class="review-text">${review.text}</p>
            `;
            reviewsContainer.appendChild(reviewCard);
        });
    }

    // Création initiale des avis (contenu masqué par défaut)
    renderReviews();

    tabButtons.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            // Désactiver tous les onglets
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Activer l'onglet cliqué
            tab.classList.add('active');

            // Si l'onglet "Avis" est sélectionné, afficher les avis sinon afficher les annonces
            if (tab.textContent.trim().toLowerCase() === 'avis') {
                sellerListingsContainer.style.display = 'none';
                reviewsContainer.style.display = 'block';
            } else {
                sellerListingsContainer.style.display = 'flex';
                reviewsContainer.style.display = 'none';
            }
        });
    });

    // Action sur le bouton "Contacter"
    const contactBtn = document.querySelector('.profile-actions .button.button-secondary');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'chat.html';
        });
    }

    // Action sur le bouton "Suivre"
    const followBtn = document.querySelector('.profile-actions .button:not(.button-secondary)');
    if (followBtn) {
        followBtn.addEventListener('click', (e) => {
            e.preventDefault();
            followBtn.classList.toggle('active-follow');
            if (followBtn.classList.contains('active-follow')) {
                followBtn.textContent = "Suivi";
            } else {
                followBtn.textContent = "Suivre";
            }
        });
    }

    // Gestion du bouton favori pour chaque annonce de la liste
    const favoriteBtns = document.querySelectorAll('.seller-listings .favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('favorited');
            console.log("Favori mis à jour pour l'annonce");
        });
    });
});
