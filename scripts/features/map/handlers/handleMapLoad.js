export async function handleMapLoad(fields) {
  const layers = [];

  fields.forEach((field) => {
    const polygon = convertWKTToGeoJSON(field.location);
    const fieldLayer = renderFieldOnMap(map, polygon);
    layers.push({ id: field.id, layer: fieldLayer });
  });

  setMapLayers(layers);
}
