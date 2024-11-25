import { getFieldById } from "../api/getFieldById.js";
import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";
import { setMapSearchFormValue } from "../services/setMapSearchFormValue.js";
import { renderFieldOverviewSection } from "../services/renderFieldOverviewSection.js";
import { showDetailsPanel } from "../services/toggleDetailsPanel.js";

import {
  removeFieldFromMap,
  getActiveLayer,
  resetActiveLayer,
} from "../services/renderFieldOnMap.js";

import { hideAddFieldButton } from "../services/toggleAddFieldButton.js";

export async function handleFieldCardClick(e) {
  e.stopPropagation();

  if (!e.target.classList.contains("field")) {
    return;
  }

  hideAddFieldButton();
  toggleCardTileActive(e.target);
  setMapSearchFormValue(e.target.dataset.id);

  const field = await getFieldById(e.target.dataset.id);

  resetActiveLayer();

  showDetailsPanel();
  renderFieldOverviewSection(field);
  flyToFieldBounds(field.location);
}
