document.addEventListener('DOMContentLoaded', function() {
    var googleMapInitialized = false;

    function initGoogleMap() {
        var location = { lat: 36.5610, lng: 3.0056 }; // Replace with your desired coordinates
        var map = new google.maps.Map(document.getElementById('google-map'), {
            zoom: 15,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        googleMapInitialized = true;
    }

    function initLeafletMap() {
        var map = L.map('map').setView([20, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map);

        // Load GeoJSON data and highlight specific countries
        fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data, {
                    style: function(feature) {
                        // Highlight specific countries
                        switch (feature.properties.name) {
                            case 'Australia':
                                return { color: "#ff0000" };
                            case 'Canada':
                                return { color: "#00ff00" };
                            case 'New Zealand':
                                return { color: "#0000ff" };
                            case 'United Kingdom':
                                return { color: "#00ff00" };
                            case 'Ireland':
                                return { color: "#ff0000" };
                            case 'Norway':
                                return { color: "#0000ff" };
                            default:
                                return { color: "#cccccc" };
                        }
                    }
                }).addTo(map);
            });
    }

    function loadGoogleMapsScript(callback) {
        var script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=${callback}`;
        script.async = true;
        script.defer = true;
        script.onerror = function() {
            alert("There is an issue loading Google Maps. Please check the JavaScript console for more details.");
        };
        document.head.appendChild(script);
    }

    // Initialize both maps
    initLeafletMap();
    loadGoogleMapsScript('initGoogleMap');
});