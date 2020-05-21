function initMap() {
  var uluru = { lat: 2.8, lng: -187.3 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: uluru,
    mapTypeId: "terrain",
  });
  map.data.loadGeoJson("2.5_week.json");
  map.data.setStyle(function (feature) {
    var magnitude = feature.getProperty("mag");
    return {
      icon: getCircle(magnitude),
    };
  });
  function getCircle(magnitude) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "red",
      fillOpacity: 0.2,
      scale: Math.pow(2, magnitude) / 2,
      strokeColor: "white",
      strokeWeight: 0.5,
    };
  }
}
