document.addEventListener('DOMContentLoaded', () => {
    // Gestion du clic sur les boutons "Plus d'options"
    const optionButtons = document.querySelectorAll('.payment-actions .icon-only-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Affichage d'un menu contextuel ou redirection
            alert("Options du moyen de paiement à implémenter.");
        });
    });
});