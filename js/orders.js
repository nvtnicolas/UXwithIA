document.addEventListener('DOMContentLoaded', () => {
    // Gestion du filtre par onglets
    const tabButtons = document.querySelectorAll('.tab-btn');
    const orderItems = document.querySelectorAll('.order-item');
    
    tabButtons.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            // Mettre à jour l'onglet actif
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            
            // Filtrer les commandes en fonction du texte de l'onglet
            const filter = tab.textContent.trim().toLowerCase();
            orderItems.forEach(item => {
                // Si filtre "en cours", n'affiche que les items avec la classe "pending"
                if(filter === "en cours") {
                    if(item.querySelector('.order-status').classList.contains('pending')) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                }
                // Si filtre "terminés", n'affiche que les items sans classe "pending"
                else if(filter === "terminés") {
                    if(!item.querySelector('.order-status').classList.contains('pending')) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Gestion du filtre par onglets (déjà présent)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const orderItems = document.querySelectorAll('.order-item');
    
    tabButtons.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            // Mise à jour de l'onglet actif
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            
            // Filtrer les commandes selon le texte de l'onglet
            const filter = tab.textContent.trim().toLowerCase();
            orderItems.forEach(item => {
                const statusElem = item.querySelector('.order-status');
                if(filter === "en cours") {
                    if(statusElem && statusElem.classList.contains('pending')) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                } else if(filter === "terminés") {
                    if(statusElem && !statusElem.classList.contains('pending')) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
    
    // Rediriger vers la page produit détails quand on clique sur "TV Samsung 4K"
    orderItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const title = item.querySelector('.order-title').textContent.toLowerCase();
            if(title.includes("samsung") || title.includes("tv")) {
                e.preventDefault();
                window.location.href = 'product-details.html';
            }
        });
    });
});