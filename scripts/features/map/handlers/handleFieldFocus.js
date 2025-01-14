export function handleFieldFocus(location) {
  const polygon = convertWKTToGeoJSON(location);

  flyToFieldBounds(polygon);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }
}
