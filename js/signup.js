
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js/signup.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                e.preventDefault();
                alert("Les mots de passe ne correspondent pas. Veuillez vérifier.");
            }
        });
    }
});
