// Inicializa o mapa na div com o id 'map'
var map = L.map('map').setView([-23.5505, -46.6333], 15); // Coordenadas fictícias da Biblioteca Aurora

// Adiciona uma camada de tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 28, // Nível máximo de zoom
}).addTo(map); // Adiciona a camada ao mapa

// Adiciona um marcador no mapa para a Biblioteca Aurora
L.marker([-23.5505, -46.6333]) // Coordenadas do marcador
    .addTo(map) // Adiciona o marcador ao mapa
    .bindPopup('Biblioteca Aurora') // Texto do popup
    .openPopup(); // Abre o popup automaticamente