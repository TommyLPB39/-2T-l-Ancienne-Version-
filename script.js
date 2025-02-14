// Pour le filtrage des archives
function filterVideos() {
    // Il récupère la valeur des archives (si c'est des catégories, types, dates ou ect...)
    const searchInput = document.getElementById('search').value.toLowerCase();
    const categorySelect = document.getElementById('category').value;
    const typeSelect = document.getElementById('types').value;
    const dateSelect = document.getElementById('date').value;

    // Il sélectionne toutes les vidéos
    const videos = document.querySelectorAll('.video-item');

    // Il parcours chaque vidéo pour leur appliquer un filtre
    videos.forEach(video => {
        const title = video.querySelector('h2').textContent.toLowerCase(); // Titre de la vidéo
        const category = video.getAttribute('data-category');             // Catégorie principale
        const type = video.getAttribute('data-category2');                // Type
        const date = video.getAttribute('data-category3');                // Date

        // Il vérifie si la vidéo correspond bien à la catégorie
        const matchesSearch = title.includes(searchInput);
        const matchesCategory = categorySelect === 'all' || category === categorySelect;
        const matchesType = typeSelect === 'all' || type === typeSelect;
        const matchesDate = dateSelect === 'all' || date === dateSelect;

        // Appliquer les vidéos en fonction des filtres
        video.style.display = (matchesSearch && matchesCategory && matchesType && matchesDate) ? 'block' : 'none';
    });
}

// Ajouter un écouteur d'événement à chaque filtre
document.getElementById('search').addEventListener('input', filterVideos);
document.getElementById('category').addEventListener('change', filterVideos);
document.getElementById('types').addEventListener('change', filterVideos);
document.getElementById('date').addEventListener('change', filterVideos);