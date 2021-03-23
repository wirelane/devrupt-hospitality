document.addEventListener('DOMContentLoaded', function(event) {
  initMap();
});

function initMap() {
  mapkit.init({
    authorizationCallback: function(done) {
      fetch("/services/mapkit/jwt")
        .then(response => response.json())
        .then(result => {
          done(result.token)
        });
    }
  });
}

function setChargingPoint(chargingPoint) {
  var chargingPointCoordinate = new mapkit.Coordinate(chargingPoint.latitude, chargingPoint.longitude);

  var chargingPointMarker = new mapkit.MarkerAnnotation(
    chargingPointCoordinate,
    {
      color: "black",
      title: chargingPoint.evseId,
      subtitle: "Charging Station by Wirelane",
      glyphImage: { 1: "/images/logo-20.png" }
    }
  );

  var center = new mapkit.CoordinateRegion(
    chargingPointCoordinate,
    new mapkit.CoordinateSpan(0.25, 0.25)
  );

  var map = new mapkit.Map("map");
  map.region = center;
  map.showItems([chargingPointMarker]);
}
