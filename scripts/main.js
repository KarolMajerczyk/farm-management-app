import { initMapController } from "./features/map/mapController.js";

import { initTodosController } from "./features/todos/todoController.js";
import { initBudgetController } from "./features/budget/budgetController.js";
import { initItemsController } from "./features/items/itemsController.js";
import { initContentController } from "./features/content/contentController.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // localStorage.clear();

  if (document.querySelector("#map")) {
    initMapController();
  }

  initItemsController();
  // initTodosController();
  // initBudgetController();
  // initContentController();

  // localStorage.clear();
});
