function initMap() {
  var uluru = { lat: 2.8, lng: -187.3 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: uluru,
    mapTypeId: "terrain",
  });

  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      for (let i = 0; i < response.features.length; i++) {
        const coords = response.features[i].geometry.coordinates;
        const latLng = new google.maps.LatLng(coords[1], coords[0]);
        //magnitude = response.features[i].properties.mag;
        const marker = new google.maps.Marker({
          position: latLng,
          map: map,
        });
      }
    }
  };

  xhr.open("GET", "./2.5_week.json", true);
  xhr.send(null);
}
