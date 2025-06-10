
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/notifications-settings.js

document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('.button');
    if (saveButton) {
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Récupération des états des toggles
            const toggleInputs = document.querySelectorAll('.settings-toggle-item input[type="checkbox"]');
            let settings = {};
            toggleInputs.forEach((input, index) => {
                settings[`toggle_${index}`] = input.checked;
            });
            console.log('Paramètres sauvegardés', settings);
            alert('Vos paramètres de notifications ont été enregistrés.');
        });
    }
});
