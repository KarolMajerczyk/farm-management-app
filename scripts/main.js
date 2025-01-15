import { initMapController } from "./features/map/mapController.js";
import { initItemsController } from "./features/items/itemsController.js";

import { initOverviewController } from "./features/overview/overviewController.js";
import { initBudgetController } from "./features/budget/budgetController.js";
import { initTodosController } from "./features/todos/todoController.js";
import { initContentController } from "./features/content/contentController.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // localStorage.clear();

  if (document.querySelector("#map")) {
    initMapController();
  }

  initOverviewController();
  initItemsController();

  initBudgetController();
  initTodosController();

  // initContentController();
});

// Można pierwsze pozbierać init dla eventów on.
// a potem resztę i w main.js zrobić kolejność
