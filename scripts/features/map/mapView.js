export const renderFieldOnMap = (map, location) => {
  return L.geoJSON(location).addTo(map);
};

export function removeFieldFromMap(map, layer) {
  map.removeLayer(layer);
}

export const setMapSearchFormValue = (id) => {
  document.querySelector("#teryt-input").value = id;
};

export function flyToFieldBounds(polygon) {
  const layer = L.geoJSON(polygon);

  map.flyToBounds(layer.getBounds(), {
    duration: 2,
  });
}
