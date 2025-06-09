
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\messages.js

document.addEventListener('DOMContentLoaded', () => {
    // Exemple : Au clic sur un message non lu, le marquer comme lu
    const unreadMessages = document.querySelectorAll('.message-item.unread');
    unreadMessages.forEach(message => {
        message.addEventListener('click', () => {
            message.classList.remove('unread');
            // Optionnel : Redirection vers la discussion
            // window.location.href = message.getAttribute('href');
        });
    });
});
