document.addEventListener('DOMContentLoaded', function () {
    // Suppression d'une photo
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const photoItem = this.closest('.photo-item');
            if (photoItem) photoItem.remove();
        });
    });

    // Ajout d'une photo (simulation)
    const upload = document.querySelector('.upload-placeholder');
    if (upload) {
        upload.addEventListener('click', function () {
            // Simuler l'ouverture d'un input file
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.style.display = 'none';
            document.body.appendChild(input);

            input.addEventListener('change', function () {
                if (input.files && input.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const gallery = upload.parentElement;
                        const div = document.createElement('div');
                        div.className = 'photo-item';
                        div.innerHTML = `
                            <img src="${e.target.result}" alt="Photo produit">
                            <button class="delete-btn">×</button>
                        `;
                        gallery.insertBefore(div, upload);

                        // Ajouter l'événement de suppression à la nouvelle photo
                        div.querySelector('.delete-btn').addEventListener('click', function (e) {
                            e.preventDefault();
                            div.remove();
                        });
                    };
                    reader.readAsDataURL(input.files[0]);
                }
                document.body.removeChild(input);
            });

            input.click();
        });
    }
});