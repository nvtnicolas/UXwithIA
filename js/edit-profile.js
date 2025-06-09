document.addEventListener('DOMContentLoaded', function () {
    const photoEditBtn = document.querySelector('.photo-edit-btn');
    if (photoEditBtn) {
        photoEditBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Simuler l'ouverture d'un input file
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.style.display = 'none';
            document.body.appendChild(input);

            input.addEventListener('change', function () {
                if (input.files && input.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function (ev) {
                        const profileImg = document.querySelector('.profile-img');
                        if (profileImg) {
                            profileImg.src = ev.target.result;
                        }
                    };
                    reader.readAsDataURL(input.files[0]);
                }
                document.body.removeChild(input);
            });

            input.click();
        });
    }
});
