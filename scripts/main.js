import { map } from "./map/map.js";

import { handleMapDrag } from "./events/handleMapDrag.js";
import { handleMapClick } from "./events/handleMapClick.js";

import { handleFieldCardClick } from "./events/handleFieldCardClick.js";
import { handleMapSearch } from "./events/handleMapSearch.js";
import { handleAddFieldClick } from "./events/handleAddFieldClick.js";
import { handleMapLoad } from "./events/handleMapLoad.js";

import { DOM } from "./dom/domElements.js";
import { handleDetailsPanelMenuClick } from "./events/handleDetailsPanelMenuClick.js";

window.addEventListener("DOMContentLoaded", () => {
  handleMapLoad();

  map.on("drag", handleMapDrag);
  map.on("click", (e) => handleMapClick(e));
});

DOM.fieldsList.addEventListener("click", (e) => handleFieldCardClick(e));
DOM.mapSearch.addEventListener("click", (e) => handleMapSearch(e));
DOM.addFieldButton.addEventListener("click", (e) => handleAddFieldClick(e));

DOM.detailsPanelMenu.addEventListener("click", (e) =>
  handleDetailsPanelMenuClick(e)
);
