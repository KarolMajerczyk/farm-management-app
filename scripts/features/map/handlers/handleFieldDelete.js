import { getMapLayer, map, removeMapLayer } from "../mapModel.js";
import { removeFieldFromMap } from "../mapView.js";

export function handleFieldDelete(id) {
  console.log("adsds");
  const layer = removeMapLayer(id);
  console.log(layer);
  removeFieldFromMap(map, layer);
}
