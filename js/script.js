const newsData = [
    {
        title: "Manchester City gana la Liga Premier",
        category: "premier",
        summary: "El Manchester City se consagró campeón de la Liga Premier tras una emocionante temporada.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Real Madrid se lleva la victoria en La Liga",
        category: "laliga",
        summary: "El Real Madrid logró una importante victoria en su camino hacia el título de La Liga.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Juventus se clasifica a la Champions League",
        category: "seriea",
        summary: "La Juventus aseguró su lugar en la próxima edición de la Champions League.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Bayern Múnich arrasa en la Bundesliga",
        category: "bundesliga",
        summary: "Bayern Múnich continúa dominando la Bundesliga con una racha impresionante.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "PSG se prepara para la próxima temporada",
        category: "ligue1",
        summary: "El PSG está en plena preparación para la próxima temporada tras un año complicado.",
        image: "https://via.placeholder.com/150"
    }
];

const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search');

// Función para cargar noticias
const loadNews = (category = '') => {
    newsContainer.innerHTML = '';
    const filteredNews = category ? newsData.filter(news => news.category === category) : newsData;

    filteredNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <h3>${news.title}</h3>
            <p>${news.summary}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
};

// Cargar todas las noticias al inicio
loadNews();

// Eventos de filtrado
document.querySelectorAll('.ligas-nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        loadNews(category);
    });
});

// Funcionalidad de búsqueda
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredNews = newsData.filter(news => news.title.toLowerCase().includes(searchTerm));
    newsContainer.innerHTML = '';
    filteredNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <h3>${news.title}</h3>
            <p>${news.summary}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
});