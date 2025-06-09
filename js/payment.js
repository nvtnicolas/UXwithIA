// Vérifier si le document est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Formater automatiquement le numéro de carte
    setupCardNumberFormatting();
    
    // Mettre à jour la prévisualisation de la carte
    setupCardPreview();
    
    // Formater la date d'expiration
    setupExpiryFormatting();
    
    // Animation du bouton de soumission
    setupSubmitButtonEffect();
    
    // Effet visuel sur la carte
    setupCardVisualEffects();
});

// Formater le numéro de carte avec des espaces tous les 4 chiffres
function setupCardNumberFormatting() {
    const cardInput = document.getElementById('card-number');
    const cardPreview = document.querySelector('.card-number');
    
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = '';
            
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }
            
            // Limiter à 19 caractères (16 chiffres + 3 espaces)
            if (formattedValue.length <= 19) {
                e.target.value = formattedValue;
                
                // Mettre à jour la prévisualisation
                if (cardPreview) {
                    if (value.length > 0) {
                        // Montrer les 4 premiers et derniers chiffres, * au milieu
                        let displayValue = '';
                        
                        if (value.length <= 4) {
                            displayValue = formattedValue.padEnd(19, '*');
                        } else {
                            let visiblePart = formattedValue.substring(0, 5);
                            for (let i = 5; i < 15; i++) {
                                displayValue += (i % 5 === 0) ? ' ' : '*';
                            }
                            displayValue = visiblePart + displayValue;
                            
                            if (value.length > 12) {
                                displayValue = displayValue.substring(0, 15) + formattedValue.substring(formattedValue.length - 4);
                            }
                        }
                        cardPreview.textContent = displayValue;
                    } else {
                        cardPreview.textContent = '**** **** **** ****';
                    }
                }
            }
        });
    }
}

// Mettre à jour la prévisualisation de la carte
function setupCardPreview() {
    const cardHolder = document.getElementById('card-holder');
    const cardHolderPreview = document.querySelector('.card-holder');
    const expiryInput = document.getElementById('expiry');
    const expiryPreview = document.querySelector('.card-expiry');
    
    if (cardHolder && cardHolderPreview) {
        cardHolder.addEventListener('input', function(e) {
            if (e.target.value.length > 0) {
                cardHolderPreview.textContent = e.target.value.toUpperCase();
            } else {
                cardHolderPreview.textContent = 'NOM DU TITULAIRE';
            }
        });
    }
    
    if (expiryInput && expiryPreview) {
        expiryInput.addEventListener('input', function(e) {
            if (e.target.value.length > 0) {
                expiryPreview.textContent = e.target.value;
            } else {
                expiryPreview.textContent = 'MM/AA';
            }
        });
    }
}

// Formater automatiquement la date d'expiration
function setupExpiryFormatting() {
    const expiryInput = document.getElementById('expiry');
    
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                // Limiter le premier chiffre du mois à 0 ou 1
                if (value[0] > 1) {
                    value = '0' + value[0];
                }
                
                // Limiter le deuxième chiffre du mois si le premier est 1
                if (value[0] == 1 && value[1] > 2) {
                    value = '1' + '2';
                }
            }
            
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            
            e.target.value = value;
        });
    }
}

// Animation du bouton de soumission
function setupSubmitButtonEffect() {
    const submitBtn = document.querySelector('button[type="submit"]');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            // Vérifier si le formulaire est valide avant d'animer
            const form = document.querySelector('form');
            const isValid = form.checkValidity();
            
            if (!isValid) {
                return; // Ne pas animer si le formulaire n'est pas valide
            }
            
            e.preventDefault();
            
            // Ajouter la classe d'animation
            this.classList.add('button-loading');
            this.textContent = 'Traitement...';
            
            // Simuler un délai de traitement
            setTimeout(() => {
                this.textContent = 'Carte ajoutée !';
                this.classList.remove('button-loading');
                this.classList.add('button-success');
                
                // Rediriger après un court délai
                setTimeout(() => {
                    window.location.href = form.action;
                }, 1000);
            }, 1500);
        });
    }
}

// Effets visuels sur la carte
function setupCardVisualEffects() {
    const cardFront = document.querySelector('.card-front');
    
    if (cardFront) {
        // Effet de survol
        cardFront.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        cardFront.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Effet de focus quand un champ du formulaire est actif
        const formInputs = document.querySelectorAll('.form-group input');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                cardFront.classList.add('card-focus');
            });
            
            input.addEventListener('blur', function() {
                cardFront.classList.remove('card-focus');
            });
        });
    }
}