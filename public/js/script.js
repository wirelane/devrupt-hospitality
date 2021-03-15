document.addEventListener('DOMContentLoaded', function(event) {
  mapkit.init({
    authorizationCallback: function(done) {
      fetch("/services/mapkit/jwt")
        .then(response => response.json())
        .then(result => {
          done(result.token)
        });
    }
  });

  var chargePointCoordinate = new mapkit.Coordinate(48.134420, 11.665720);

  var chargePoint = new mapkit.MarkerAnnotation(
    chargePointCoordinate,
    {
      color: "black",
      title: "DE*WLN*E0004457",
      subtitle: "Charging Station by Wirelane",
      glyphImage: { 1: "/images/logo-20.png" }
    }
  );

  var center = new mapkit.CoordinateRegion(
    chargePointCoordinate,
    new mapkit.CoordinateSpan(0.25, 0.25)
  );

  var map = new mapkit.Map("map");
  map.region = center;
  map.showItems([chargePoint]);
})
