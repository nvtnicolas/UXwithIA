
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\filter-page.js

document.addEventListener('DOMContentLoaded', () => {
    // Cibler l’input range et la zone d’affichage pour la distance
    const rangeInput = document.querySelector('.range-slider input[type="range"]');
    const rangeValue = document.querySelector('.range-slider .range-value');

    if (rangeInput && rangeValue) {
        // Mettre à jour la distance au chargement
        rangeValue.textContent = `${rangeInput.value} km`;

        // Mettre à jour la distance lors du changement de valeur
        rangeInput.addEventListener('input', () => {
            rangeValue.textContent = `${rangeInput.value} km`;
        });
    }
});
