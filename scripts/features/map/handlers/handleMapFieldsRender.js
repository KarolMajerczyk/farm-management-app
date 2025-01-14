export function handleMapFieldsRender(id, location) {
  const polygon = convertWKTToGeoJSON(location);

  flyToFieldBounds(polygon);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }

  if (getMapLayer(id)) {
    eventBus.emit("fieldPolygonClicked", id);

    return;
  }

  const layer = renderFieldOnMap(map, polygon);
  setActiveLayer(layer);
}
