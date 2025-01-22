import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { convertWKTToGeoJSON } from "../../../utils/converter.js";
import { addMapLayer, getActiveLayer, map } from "../mapModel.js";
import { removeFieldFromMap, renderFieldOnMap } from "../mapView.js";

export function handleFieldLayerAdd() {
  const { id } = getCurrentState();
  const field = getItemById("fields", id);

  const polygon = convertWKTToGeoJSON(field.location);
  removeFieldFromMap(map, getActiveLayer());

  const layer = renderFieldOnMap(map, polygon);
  addMapLayer(id, layer);
}
