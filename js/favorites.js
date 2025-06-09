
// filepath: c:\Users\nicol\OneDrive\Documents\B2 INFO\UX Design\js\favorites.js

document.addEventListener('DOMContentLoaded', () => {
    const unfavButtons = document.querySelectorAll('.icon-only-btn');
    unfavButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const listing = button.closest('.listing');
            if (listing) listing.remove();
        });
    });
});
