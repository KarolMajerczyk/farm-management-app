export const renderFieldOnMap = (map, location) => {
  return L.geoJSON(location).addTo(map);
};

export function removeFieldFromMap(map, layer) {
  map.removeLayer(layer);
}

export const setMapSearchFormValue = (id) => {
  document.querySelector("#map-search input").value = id || "";
};

export function flyToFieldBounds(map, polygon) {
  const layer = L.geoJSON(polygon);

  map.flyToBounds(layer.getBounds(), {
    duration: 3,
  });
}
