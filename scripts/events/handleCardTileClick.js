import { DOM } from "../dom/domElements.js";

import { getItemById } from "../api/getItemById.js";
import { flyToFieldBounds } from "../services/flyToFieldBounds.js";
import { toggleElementActive } from "../services/toggleElementActive.js";
import { setMapSearchFormValue } from "../services/setMapSearchFormValue.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";

import {
  removeFieldFromMap,
  getActiveLayer,
  resetActiveLayer,
} from "../services/renderFieldOnMap.js";

import { renderOverview } from "../services/renderOverview.js";
import { renderContentList } from "../services/renderContentList.js";

export async function handleCardTileClick(e) {
  e.stopPropagation();

  const el = e.target;
  const objType = el.dataset.type;

  if (!el.classList.contains("card-tile")) {
    return;
  }

  let obj;

  toggleElementActive(el, true);
  obj = await getItemById(objType, el.dataset.id);

  if (objType === "field") {
    handleFieldCardTileClick(obj, el);
  } else if (objType === "herd") {
    renderContentList(obj.animals, "animal");
  } else if (objType === "machine") {
    renderContentList(obj.files, "file");
  }

  toggleElementVisibility(DOM.sidePanel, true);
  renderOverview(obj, objType);
}

function handleFieldCardTileClick(obj, el) {
  toggleElementVisibility(DOM.addFieldButton, false);
  setMapSearchFormValue(el.dataset.id);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(activeLayer);
  }

  resetActiveLayer();
  flyToFieldBounds(obj.location);
}
