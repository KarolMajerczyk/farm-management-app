import { DOM } from "../dom/domElements.js";

import { convertWKTToGeoJSON } from "../utils/converter.js";

import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import {
  renderFieldOnMap,
  getActiveLayer,
  removeFieldFromMap,
  resetActiveLayer,
  isTheSameLayer,
} from "../services/renderFieldOnMap.js";

import { getItemById } from "../db/db.js";
import { toggleElementActive } from "../services/toggleElementActive.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";

import { renderOverview } from "../services/renderOverview.js";

export async function controlMapRenderPolygons(fieldId, fieldGeometry) {
  const activeLayer = getActiveLayer();
  const fieldPolygon = convertWKTToGeoJSON(fieldGeometry);

  flyToFieldBounds(fieldPolygon);

  if (activeLayer && isTheSameLayer(activeLayer, fieldPolygon)) {
    return;
  }

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  const field = await getItemById("fields", fieldId);

  if (field) {
    const fieldCard = document.querySelector(`[data-id="${field.id}"]`);

    toggleElementActive(fieldCard, true);
    toggleElementVisibility(DOM.addFieldButton, false);
    toggleElementVisibility(DOM.sidePanel, true);
    renderOverview(field, "fields");

    resetActiveLayer();
    return;
  }

  toggleElementActive(document.querySelector(".card-tile"));
  toggleElementVisibility(DOM.sidePanel, false);
  toggleElementVisibility(DOM.addFieldButton, true);

  renderFieldOnMap(fieldPolygon);
}
