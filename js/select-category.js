document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const categoryItems = document.querySelectorAll('.category-item');

    // Filtrage dynamique des catégories en fonction du texte recherché
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            categoryItems.forEach(item => {
                // Recherche dans le texte contenu dans le span
                const title = item.querySelector('span').textContent.toLowerCase();
                if(title.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});