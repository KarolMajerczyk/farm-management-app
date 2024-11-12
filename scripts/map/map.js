// Map settings

export const map = L.map("map").setView([51.919, 19.134], 7);

export const bounds = [
  [49.0, 14.0],
  [55.0, 24.0],
];

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 7,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.setMaxBounds(bounds);

// Map functions

const flyToFieldBounds = (geometry) => {
  const fieldLayer = L.geoJSON(geometry);

  map.flyToBounds(fieldLayer.getBounds(), {
    duration: 2,
  });
};

const renderFieldOnMap = (geojson) => L.geoJSON(geojson).addTo(map);

// Export

export const mapbox = { flyToFieldBounds, renderFieldOnMap };
