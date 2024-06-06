document.addEventListener('DOMContentLoaded', function() {
    function initLeafletMap() {
        var location = [36.5610, 3.0056]; // Replace with your desired coordinates
        var map = L.map('map').setView(location, 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map);

        var marker = L.marker(location).addTo(map)
            .bindPopup('<b>Agence Taous</b><br>Cité 50 villas, Boghni, Tizi-Ouzou, Algérie.')
            .openPopup();
    }

    initLeafletMap();
});