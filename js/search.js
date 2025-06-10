document.addEventListener('DOMContentLoaded', () => {
    /* Activation ou désactivation du bouton favoris dans les listings */
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Basculer l'état "favori" (exemple d'animation ou de classe à ajouter)
            btn.classList.toggle('favorited');
            // Vous pouvez changer l'icône ou effectuer une action (enregistrement dans la BDD par exemple)
        });
    });
    
    /* Ajout d'un listener sur le bouton de recherche */
    const searchBarInput = document.querySelector('.search-bar input[type="text"]');
    const searchBtn = document.querySelector('.search-bar .icon-btn');
    if (searchBarInput && searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Action lors du clic sur l'icône de recherche
            // Par exemple, déclencher une fonction qui effectue la recherche
            console.log("Recherche de :", searchBarInput.value);
        });
        
        // Lancer la recherche quand on appuie sur Entrée dans le champ de texte
        searchBarInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchBtn.click();
            }
        });
    }
    
    /* Gestion des catégories : activation de la puce sélectionnée */
    const categoryChips = document.querySelectorAll('.category-chip');
    categoryChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            e.preventDefault();
            // Désactiver toutes les catégories
            categoryChips.forEach(c => c.classList.remove('active'));
            // Activer la catégorie cliquée
            chip.classList.add('active');
            // Vous pouvez ajouter ici l'action de filtrage des résultats
            console.log("Catégorie sélectionnée :", chip.textContent.trim());
        });
    });
});