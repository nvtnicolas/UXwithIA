document.addEventListener('DOMContentLoaded', () => {
    // Exemple éventuel de comportement : afficher un message lors d'un clic sur l'icône paramètres
    const settingsIcon = document.querySelector('.settings-icon');
    if (settingsIcon) {
        settingsIcon.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirection vers la page des paramètres
            window.location.href = 'settings.html';
        });
    }
    
    // Gestion de la notification : par exemple, rediriger vers la page messages lors d'un clic
    const notificationIcon = document.querySelector('.notification-icon');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'messages.html';
        });
    }
    
    // Autres interactions spécifiques au profil peuvent être ajoutées ici
});