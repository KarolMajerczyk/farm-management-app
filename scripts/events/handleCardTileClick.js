import { DOM } from "../dom/domElements.js";

import { getItemById } from "../db/db.js";
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
  const el = e.target;
  const objType = el.dataset.type;
  const objId = el.dataset.id;

  if (!el.classList.contains("card-tile")) {
    return;
  }

  let obj = await getItemById(objType, objId);

  toggleElementActive(el, true);

  if (objType === "fields") {
    toggleElementVisibility(DOM.addFieldButton, false);
    setMapSearchFormValue(objId);

    const activeLayer = getActiveLayer();

    if (activeLayer) {
      removeFieldFromMap(activeLayer);
    }

    resetActiveLayer();
    flyToFieldBounds(obj.location);
  } else {
    renderContentList(obj, objType);
  }

  toggleElementVisibility(DOM.sidePanel, true);
  renderOverview(obj, objType);
}
