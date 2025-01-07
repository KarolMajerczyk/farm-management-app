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

import { getItemById } from "../api/getItemById.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";
import { renderOverview } from "../services/renderOverview.js";
import { hideSidePanel, showSidePanel } from "../services/toggleSidePanel.js";

import {
  showAddFieldButton,
  hideAddFieldButton,
} from "../services/toggleAddFieldButton.js";

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
  const field = await getItemById("fields", terytValue);

  if (activeLayer && isTheSameLayer(activeLayer, fieldPolygon)) {
    return;
  }

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  if (field) {
    const fieldCard = document.querySelector(`[data-id="${field.id}"]`);

    hideAddFieldButton();
    toggleCardTileActive(fieldCard);
    showSidePanel();
    renderOverview(field, "field");

    resetActiveLayer();
    return;
  }

  toggleCardTileActive();
  hideSidePanel();
  showAddFieldButton();

  renderFieldOnMap(fieldPolygon);
};
