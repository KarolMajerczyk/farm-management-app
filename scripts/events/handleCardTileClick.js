import { getFieldById } from "../api/getFieldById.js";
import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { toggleCardTileActive } from "../services/toggleCardTileActive.js";
import { setMapSearchFormValue } from "../services/setMapSearchFormValue.js";
import { showSidePanel } from "../services/toggleSidePanel.js";

import {
  removeFieldFromMap,
  getActiveLayer,
  resetActiveLayer,
} from "../services/renderFieldOnMap.js";

import { hideAddFieldButton } from "../services/toggleAddFieldButton.js";
import { changeSidePanelSection } from "../services/changeSidePanelSection.js";

export async function handleCardTileClick(e) {
  e.stopPropagation();

  const el = e.target;
  const objType = el.dataset.type;

  if (!el.classList.contains("card-tile")) {
    return;
  }

  let obj;

  toggleCardTileActive(el);

  if (objType === "field") {
    obj = await handleFieldCardTileClick(el);
  } else if (objType === "herd") {
    obj = await handleHerdCardTileClick(el);
  } else if (objType === "machine") {
    obj = await handleMachineCardTileClick(el);
  }

  showSidePanel();
  changeSidePanelSection("overview", obj);
}

async function handleFieldCardTileClick(el) {
  hideAddFieldButton();
  setMapSearchFormValue(el.dataset.id);

  const obj = await getFieldById(el.dataset.id);
  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  resetActiveLayer();
  flyToFieldBounds(obj.location);

  return obj;
}

async function handleHerdCardTileClick(el) {}
async function handleMachineCardTileClick(el) {}
