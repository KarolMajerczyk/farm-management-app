export function handleFieldAdd(id, location) {
  const polygon = convertWKTToGeoJSON(location);
  removeFieldFromMap(map, getActiveLayer());

  const layer = renderFieldOnMap(map, polygon);
  addMapLayer(id, layer);
}
