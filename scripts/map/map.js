// Map settings

export const map = L.map("map").setView([51.919, 19.134], 7);

export const bounds = [
  [49.0, 14.0],
  [55.0, 24.0],
];

const mapLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  minZoom: 7,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add Esri Satellite tile layer
// L.tileLayer(
//   "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
//   {
//     maxZoom: 18,
//     minZoom: 7,
//     attribution:
//       "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
//   }
// ).addTo(map);

map.setMaxBounds(bounds);
