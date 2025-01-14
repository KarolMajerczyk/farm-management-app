import { eventBus } from "../../../shared/eventBus.js";
import { getFieldData } from "../../../shared/getFieldData.js";
import { convertWKTToGeoJSON } from "../../../utils/converter.js";

import {
  getActiveLayer,
  getMapLayer,
  map,
  setActiveLayer,
} from "../mapModel.js";

import {
  flyToFieldBounds,
  removeFieldFromMap,
  renderFieldOnMap,
} from "../mapView.js";

export async function handleMapSearchFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const id = data.get("id");

  const { location } = await getFieldData({ id });
  const polygon = convertWKTToGeoJSON(location);

  flyToFieldBounds(map, polygon);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }

  if (getMapLayer(id)) {
    eventBus.emit("fieldLayerSelected", id);
    return;
  }

  const layer = renderFieldOnMap(map, polygon);
  setActiveLayer(layer);
}
