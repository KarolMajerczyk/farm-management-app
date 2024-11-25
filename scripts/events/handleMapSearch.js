import { DOM } from "../dom/domElements.js";

import { getFieldData } from "../api/getFieldData.js";
import { convertWKTToGeoJSON } from "../utils/converter.js";

import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import {
  renderFieldOnMap,
  getActiveLayer,
  removeFieldFromMap,
  resetActiveLayer,
  isTheSameLayer,
} from "../services/renderFieldOnMap.js";

import { getFieldById } from "../api/getFieldById.js";

// 120709_2.0007.4719

export const handleMapSearch = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (e.target.id !== "goto-field") {
    return;
  }

  const terytValue = DOM.terytInput.value;

  const { fieldGeometry } = await getFieldData({
    id: terytValue,
  });
  const activeLayer = getActiveLayer();
  const fieldPolygon = convertWKTToGeoJSON(fieldGeometry);

  flyToFieldBounds(fieldPolygon);
  const field = await getFieldById(terytValue);

  if (activeLayer && isTheSameLayer(activeLayer, fieldPolygon)) {
    return;
  }

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  if (field) {
    // TODO: Set css styles active on this card tile
    resetActiveLayer();
    return;
  }

  // TODO: If not field, remove css styles active from card tile
  renderFieldOnMap(fieldPolygon);
};
