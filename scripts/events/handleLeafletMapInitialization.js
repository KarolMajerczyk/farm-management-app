// Map settings

let map = null;
let bounds = null;

export function handleLeafletMapInitialization() {
  map = L.map("map").setView([51.919, 19.134], 7);

  bounds = [
    [49.0, 14.0],
    [55.0, 24.0],
  ];

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 19,
      minZoom: 7,
      // attribution:
      //   "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  ).addTo(map);

  // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   maxZoom: 20,
  //   minZoom: 7,
  //   // attribution:
  //   //   '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // }).addTo(map);

  map.setMaxBounds(bounds);
}

export { map, bounds };
