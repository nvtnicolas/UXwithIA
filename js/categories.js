document.addEventListener('DOMContentLoaded', function() {
    // Styles pour l'icône de notification
    styleNotificationIcon();
    
    // Animation des éléments de catégorie
    setupCategoryAnimations();
    
    // Simuler des données dynamiques de notification
    setupDynamicNotifications();
});

// Fonction pour appliquer le style correct à l'icône de notification
function styleNotificationIcon() {
    const notificationIcon = document.querySelector('.header-right .notification-icon');
    
    if (notificationIcon) {
        // Appliquer la même couleur de fond que le header
        notificationIcon.style.backgroundColor = 'transparent';
        
        // S'assurer que l'icône a la bonne taille
        const notificationImg = notificationIcon.querySelector('img');
        if (notificationImg) {
            notificationImg.style.width = '24px';
            notificationImg.style.height = '24px';
        }
    }
}

// Animation des catégories
function setupCategoryAnimations() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach((item, index) => {
        // Stocker la catégorie au clic
        item.addEventListener('click', function(e) {
            // On pourrait ajouter un petit délai avant la redirection
            localStorage.setItem('selectedCategory', this.querySelector('span').textContent);
            this.classList.add('category-selected');
            
            // Le lien fonctionne normalement après ces animations
        });
    });
}

// Simulation de notifications dynamiques
function setupDynamicNotifications() {
    // Récupère le nombre actuel de notifications ou définit à 3 par défaut
    let notificationCount = parseInt(localStorage.getItem('notificationCount') || 3);
    
    // Met à jour le badge
    updateNotificationBadge(notificationCount);
    
    // Ajouter un événement au clic sur l'icône de notification
    const notificationIcon = document.querySelector('.notification-icon');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simulation de lecture des notifications
            notificationCount = 0;
            updateNotificationBadge(notificationCount);
            localStorage.setItem('notificationCount', notificationCount);
            
            // Feedback visuel
            this.classList.add('notification-read');
            setTimeout(() => {
                this.classList.remove('notification-read');
                alert('Toutes les notifications ont été lues');
            }, 300);
        });
    }
}

// Mettre à jour l'affichage du badge de notification
function updateNotificationBadge(count) {
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Fonction pour l'animation du bouton d'ajout
function setupAddButtonAnimation() {
    const addButton = document.querySelector('.add-btn');
    
    if (addButton) {
        addButton.addEventListener('click', function(e) {
            // Empêcher le comportement par défaut
            e.preventDefault();
            
            // Ajouter la classe pour l'animation
            this.classList.add('add-btn-active');
            
            // Attendre la fin de l'animation avant de rediriger
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 300);
        });
    }
}