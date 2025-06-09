/* filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\chat.js */
document.addEventListener('DOMContentLoaded', function() {
    setupChatInteractions();
    scrollToBottom();
});

// Configurer les interactions du chat
function setupChatInteractions() {
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.send-btn');
    const chatContainer = document.querySelector('.chat-container');
    
    // Envoyer un message au clic sur le bouton
    sendButton.addEventListener('click', function() {
        sendMessage(chatInput.value);
    });
    
    // Envoyer un message avec la touche Entrée
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage(chatInput.value);
        }
    });
    
    // Animation du bouton d'envoi
    chatInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            sendButton.classList.add('active');
        } else {
            sendButton.classList.remove('active');
        }
    });
    
    // Fonction pour envoyer un message
    function sendMessage(text) {
        if (text.trim() === '') return;
        
        // Créer un nouveau message
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;
        
        const messageHTML = `
            <div class="message sent">
                <p>${text}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        // Récupérer le wrapper ou le créer s'il n'existe pas
        let messageWrapper = document.querySelector('.message-wrapper');
        if (!messageWrapper) {
            messageWrapper = document.createElement('div');
            messageWrapper.className = 'message-wrapper';
            document.querySelector('.chat-container').appendChild(messageWrapper);
        }
        
        // Ajouter le message au wrapper
        messageWrapper.insertAdjacentHTML('beforeend', messageHTML);
        
        // Effacer l'input et remettre le focus
        chatInput.value = '';
        chatInput.focus();
        sendButton.classList.remove('active');
        
        // Faire défiler jusqu'au dernier message
        scrollToBottom();
        
        // Simuler une réponse après un délai
        setTimeout(() => {
            simulateResponse();
        }, 2000);
    }
    
    // Mise à jour de la fonction de réponse
    function simulateResponse() {
        const responses = [
            "D'accord, merci !",
            "Parfait, à bientôt alors.",
            "Super ! Merci pour ces informations.",
            "Entendu, je vous confirmerai par message avant de venir.",
            "C'est noté, merci beaucoup."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;
        
        const responseHTML = `
            <div class="message received">
                <p>${randomResponse}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        // Ajouter la réponse au wrapper
        document.querySelector('.message-wrapper').insertAdjacentHTML('beforeend', responseHTML);
        
        // Faire défiler jusqu'au dernier message
        scrollToBottom();
    }
}

// Faire défiler jusqu'au dernier message
function scrollToBottom() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}