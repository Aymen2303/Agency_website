function initMap() {
    var location = {
        lat: 36.5610,
        lng: 3.0056
    }; // Replace with your desired coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
window.onerror = function(msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "google maps";
    if (string.indexOf(substring) !== -1) {
        alert("There is an issue loading Google Maps. Please check the JavaScript console for more details.");
    }
    return false;
};