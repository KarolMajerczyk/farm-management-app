import { initMapController } from "./features/map/mapController.js";
import { initItemsController } from "./features/items/itemsController.js";

import { initTodosController } from "./features/todos/todoController.js";
import { initBudgetController } from "./features/budget/budgetController.js";
import { initContentController } from "./features/content/contentController.js";
import { initPanelController } from "./features/panel/panelController.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // localStorage.clear();

  if (document.querySelector("#map")) {
    initMapController();
  }

  initPanelController();
  initItemsController();

  // initTodosController();
  // initBudgetController();
  // initContentController();
});
