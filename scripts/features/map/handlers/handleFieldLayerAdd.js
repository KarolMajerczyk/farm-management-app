import { convertWKTToGeoJSON } from "../../../utils/converter.js";
import { addMapLayer, map } from "../mapModel.js";
import { renderFieldOnMap } from "../mapView.js";

export function handleFieldLayerAdd(id, location) {
  const polygon = convertWKTToGeoJSON(location);
  const layer = renderFieldOnMap(map, polygon);
  addMapLayer(id, layer);
}
