import { getItems } from "../../../shared/storage.js";
import { convertWKTToGeoJSON } from "../../../utils/converter.js";
import { map, setMapLayers } from "../mapModel.js";
import { renderFieldOnMap } from "../mapView.js";

export function handleFieldLayersRender() {
  const fields = getItems("fields");
  const layers = [];

  fields.forEach((field) => {
    const polygon = convertWKTToGeoJSON(field.location);
    const fieldLayer = renderFieldOnMap(map, polygon);
    layers.push({ id: field.id, layer: fieldLayer });
  });

  setMapLayers(layers);
}
