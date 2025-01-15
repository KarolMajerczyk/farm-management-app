import { convertWKTToGeoJSON } from "../../../utils/converter.js";
import { getActiveLayer, map } from "../mapModel.js";
import {
  flyToFieldBounds,
  removeFieldFromMap,
  setMapSearchFormValue,
} from "../mapView.js";

export function handleFieldLayerFocus(id, location) {
  const polygon = convertWKTToGeoJSON(location);

  flyToFieldBounds(map, polygon);

  const activeLayer = getActiveLayer();
  setMapSearchFormValue(id);

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }
}
