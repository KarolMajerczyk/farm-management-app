import { map } from "./map/map.js";

import { handleMapDrag } from "./events/handleMapDrag.js";
import { handleMapClick } from "./events/handleMapClick.js";

import { handleFieldClick } from "./events/handleFieldTileClick.js";
import { handleGoToFieldClick } from "./events/handleGoToFieldClick.js";
import { handleAddFieldClick } from "./events/handleAddFieldClick.js";
import { handleMapLoad } from "./events/handleMapLoad.js";

import { DOM } from "./dom/domElements.js";

window.addEventListener("DOMContentLoaded", () => {
  handleMapLoad();

  map.on("drag", handleMapDrag);
  map.on("click", (e) => handleMapClick(e));
});

DOM.fieldsList.addEventListener("click", (e) => handleFieldClick(e));
DOM.goToFieldButton.addEventListener("click", (e) => handleGoToFieldClick(e));
// DOM.addFieldButton.addEventListener("click", (e) => handleAddFieldClick(e));
