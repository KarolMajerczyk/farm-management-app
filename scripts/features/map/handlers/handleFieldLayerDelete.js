import { map, removeMapLayer } from "../mapModel.js";
import { removeFieldFromMap } from "../mapView.js";

export function handleFieldLayerDelete(id) {
  const layer = removeMapLayer(id);
  removeFieldFromMap(map, layer);
}
