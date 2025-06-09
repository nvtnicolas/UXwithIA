// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\leave-review.js

document.addEventListener('DOMContentLoaded', () => {
    // Gestion du chargement de photos
    const uploadPlaceholder = document.querySelector('.upload-placeholder');
    
    if (uploadPlaceholder) {
        uploadPlaceholder.addEventListener('click', () => {
            // Création d'un input de type file caché
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            document.body.appendChild(fileInput);
            
            fileInput.addEventListener('change', () => {
                if (fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        // Création d'un aperçu de l'image
                        const previewImg = document.createElement('img');
                        previewImg.src = event.target.result;
                        previewImg.style.width = '80px';
                        previewImg.style.height = '80px';
                        previewImg.style.objectFit = 'cover';
                        previewImg.style.borderRadius = '8px';
                        // Ajout de l'aperçu dans le conteneur photo-upload
                        const photoUploadContainer = document.querySelector('.photo-upload');
                        if (photoUploadContainer) {
                            photoUploadContainer.appendChild(previewImg);
                        }
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                }
                document.body.removeChild(fileInput);
            });
            
            fileInput.click();
        });
    }
});
