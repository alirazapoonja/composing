document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const movieCards = document.querySelectorAll('.movie-card');

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        movieCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});