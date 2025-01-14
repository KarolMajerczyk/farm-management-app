import { convertWKTToGeoJSON } from "../../../utils/converter.js";
import { getActiveLayer, map } from "../mapModel.js";
import { flyToFieldBounds, removeFieldFromMap } from "../mapView.js";

export function handleFieldFocus(location) {
  const polygon = convertWKTToGeoJSON(location);

  flyToFieldBounds(map, polygon);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }
}
