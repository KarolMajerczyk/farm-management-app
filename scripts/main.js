import { initNavController } from "./features/nav/navController.js";
import { initMapController } from "./features/map/mapController.js";
import { initItemsController } from "./features/items/itemsController.js";

// import { initOverviewController } from "./features/overview/overviewController.js";
// import { initBudgetController } from "./features/budget/budgetController.js";
// import { initTodosController } from "./features/todos/todosController.js";
// import { initContentController } from "./features/content/contentController.js";
// import { initPanelController } from "./features/panel/panelController.js";

document.addEventListener("DOMContentLoaded", (e) => {
  initNavController();
  initItemsController();

  if (document.querySelector("#map")) {
    initMapController();
  }

  // initContentController();
  // initPanelController();
  // initOverviewController();

  // initBudgetController();
  // initTodosController();
});
