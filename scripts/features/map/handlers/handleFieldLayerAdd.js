import { convertWKTToGeoJSON } from "../../../utils/converter.js";
import { addMapLayer, getActiveLayer, map } from "../mapModel.js";
import { removeFieldFromMap, renderFieldOnMap } from "../mapView.js";

export function handleFieldLayerAdd(id, location) {
  const polygon = convertWKTToGeoJSON(location);
  removeFieldFromMap(map, getActiveLayer());

  const layer = renderFieldOnMap(map, polygon);
  addMapLayer(id, layer);
}
