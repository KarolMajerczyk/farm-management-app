import { getItemById } from "../../../shared/storage.js";
import { getCurrentState } from "../../../shared/state.js";

import { convertWKTToGeoJSON } from "../../../utils/converter.js";
import { getActiveLayer, map } from "../mapModel.js";
import {
  flyToFieldBounds,
  removeFieldFromMap,
  setMapSearchFormValue,
} from "../mapView.js";

export function handleFieldLayerFocus() {
  const { id } = getCurrentState();

  if (!id) {
    return;
  }

  const field = getItemById("fields", id);
  const polygon = convertWKTToGeoJSON(field.location);

  flyToFieldBounds(map, polygon);
  setMapSearchFormValue(id);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }
}
