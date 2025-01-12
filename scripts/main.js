import { DOM } from "./dom/domElements.js";

import { map, handleMapLoad } from "./events/map/handleMapLoad.js";
import { handleMapDrag } from "./events/map/handleMapDrag.js";
import { handleMapClick } from "./events/map/handleMapClick.js";
import { handleMapSearch } from "./events/map/handleMapSearch.js";

import { handleCardTileClick } from "./events/handleCardTileClick.js";
import { handleSidePanelMenuClick } from "./events/handleSidePanelMenuClick.js";
import { handlePageChange } from "./events/handlePageChange.js";
import { handleItemsPanelClick } from "./events/handleItemsPanelClick.js";
import { initTodoController } from "./features/todos/todoController.js";
import { initBudgetController } from "./features/budget/budgetController.js";

document.addEventListener("DOMContentLoaded", (e) => {
  initTodoController();
  initBudgetController();
  // localStorage.clear();
  handlePageChange(e);

  const mapContainer = document.getElementById("map");

  if (mapContainer) {
    handleMapLoad();

    map.on("drag", handleMapDrag);
    map.on("click", (e) => handleMapClick(e));

    DOM.mapSearch.addEventListener("click", (e) => handleMapSearch(e));
  }

  DOM.cardsList.addEventListener("click", (e) => handleCardTileClick(e));
  DOM.sidePanelMenu.addEventListener("click", (e) =>
    handleSidePanelMenuClick(e)
  );

  DOM.itemsPanel.addEventListener("click", (e) => handleItemsPanelClick(e));
});
