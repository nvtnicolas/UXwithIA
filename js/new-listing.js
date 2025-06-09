document.addEventListener('DOMContentLoaded', function() {
    setupPhotoUpload();
    setupCharCounter();
    setupLocationButton();
    setupFormSubmission();
    ensureButtonVisibility();
});

// Gérer l'upload et la prévisualisation des photos
function setupPhotoUpload() {
    const fileInput = document.getElementById('photo-upload');
    const previewContainer = document.getElementById('photo-preview-container');
    
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            // Vider le conteneur de prévisualisation si des images existent déjà
            if (previewContainer.children.length > 0) {
                previewContainer.innerHTML = '';
            }
            
            // Limiter à 10 photos
            const maxFiles = 10;
            const files = Array.from(this.files).slice(0, maxFiles);
            
            files.forEach(file => {
                if (!file.type.match('image.*')) {
                    return;
                }
                
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const previewDiv = document.createElement('div');
                    previewDiv.className = 'photo-preview';
                    
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'preview-img';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'remove-photo-btn';
                    removeBtn.innerHTML = '&times;';
                    removeBtn.addEventListener('click', function() {
                        previewContainer.removeChild(previewDiv);
                    });
                    
                    previewDiv.appendChild(img);
                    previewDiv.appendChild(removeBtn);
                    previewContainer.appendChild(previewDiv);
                };
                
                reader.readAsDataURL(file);
            });
        });
    }
}

// Compteur de caractères pour la description
function setupCharCounter() {
    const textarea = document.getElementById('listing-description');
    const charCount = document.getElementById('char-count');
    
    if (textarea && charCount) {
        textarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            if (currentLength > 2000) {
                charCount.classList.add('char-limit-exceeded');
                this.value = this.value.substring(0, 2000);
            } else {
                charCount.classList.remove('char-limit-exceeded');
            }
        });
    }
}

// Bouton de géolocalisation
function setupLocationButton() {
    const locationButton = document.getElementById('get-location');
    const locationInput = document.getElementById('listing-location');
    
    if (locationButton && locationInput) {
        locationButton.addEventListener('click', function() {
            if (navigator.geolocation) {
                locationButton.disabled = true;
                locationButton.classList.add('loading');
                
                navigator.geolocation.getCurrentPosition(
                    // Success callback
                    function(position) {
                        // Simuler une conversion de coordonnées en adresse
                        setTimeout(() => {
                            locationInput.value = "Paris, 75001";
                            locationButton.disabled = false;
                            locationButton.classList.remove('loading');
                        }, 1000);
                    },
                    // Error callback
                    function(error) {
                        alert("Impossible de récupérer votre position. Veuillez entrer votre localisation manuellement.");
                        locationButton.disabled = false;
                        locationButton.classList.remove('loading');
                    }
                );
            } else {
                alert("La géolocalisation n'est pas supportée par votre navigateur.");
            }
        });
    }
}

// Gestion de la soumission du formulaire
function setupFormSubmission() {
    const form = document.getElementById('new-listing-form');
    const submitBtn = document.getElementById('submit-listing');
    
    if (form && submitBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Vérifier si le formulaire est valide
            if (this.checkValidity()) {
                // Animation du bouton
                submitBtn.textContent = "Publication en cours...";
                submitBtn.disabled = true;
                submitBtn.classList.add('button-loading');
                
                // Simuler le temps de traitement
                setTimeout(() => {
                    submitBtn.classList.remove('button-loading');
                    submitBtn.classList.add('button-success');
                    submitBtn.textContent = "Annonce publiée !";
                    
                    // Redirection après succès
                    setTimeout(() => {
                        window.location.href = "my-listings.html";
                    }, 1000);
                }, 1500);
            } else {
                // Déclencher la validation HTML5 native
                this.reportValidity();
            }
        });
    }
}

// Fonction pour s'assurer que le bouton est visible lors du scroll
function ensureButtonVisibility() {
    const submitBtn = document.getElementById('submit-listing');
    const bottomNav = document.querySelector('.bottom-nav');
    
    if (submitBtn && bottomNav) {
        // Calculer si le bouton est visible ou sous la barre de navigation
        window.addEventListener('scroll', function() {
            const buttonRect = submitBtn.getBoundingClientRect();
            const navRect = bottomNav.getBoundingClientRect();
            
            // Si le bas du bouton est caché sous la barre de navigation
            if (buttonRect.bottom > navRect.top) {
                // Ajouter classe pour le rendre visible
                submitBtn.classList.add('ensure-visible');
            } else {
                // Retirer la classe si le bouton est complètement visible
                submitBtn.classList.remove('ensure-visible');
            }
        });
    }
}