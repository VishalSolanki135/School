var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 27.182117, lng: 77.964921},
    zoom: 8
  });
}
