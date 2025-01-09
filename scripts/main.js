import {
  handleMapInitialization,
  map,
} from "./events/handleMapInitialization.js";

import { handleMapDrag } from "./events/handleMapDrag.js";
import { handleMapClick } from "./events/handleMapClick.js";

import { handleCardTileClick } from "./events/handleCardTileClick.js";
import { handleMapSearch } from "./events/handleMapSearch.js";
import { handleMapLoad } from "./events/handleMapLoad.js";

import { DOM } from "./dom/domElements.js";
import { handleSidePanelMenuClick } from "./events/handleSidePanelMenuClick.js";
import { handlePageChange } from "./events/handlePageChange.js";
import { handleItemsPanelClick } from "./events/handleItemsPanelClick.js";

document.addEventListener("DOMContentLoaded", (e) => {
  handlePageChange(e);

  const mapContainer = document.getElementById("map");

  if (mapContainer) {
    handleMapInitialization();
    handleMapLoad();

    map.on("drag", handleMapDrag);
    map.on("click", (e) => handleMapClick(e));
  }

  DOM.mapSearch.addEventListener("click", (e) => handleMapSearch(e));
  DOM.cardsList.addEventListener("click", (e) => handleCardTileClick(e));
  DOM.sidePanelMenu.addEventListener("click", (e) =>
    handleSidePanelMenuClick(e)
  );

  DOM.itemsPanel.addEventListener("click", (e) => handleItemsPanelClick(e));
});
