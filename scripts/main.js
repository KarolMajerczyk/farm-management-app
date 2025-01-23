import { initItemsController } from "./features/items/itemsController.js";
import { initMapController } from "./features/map/mapController.js";
// import { initContentController } from "./features/content/contentController.js";
import { initDetailsController } from "./features/details/detailsController.js";

document.addEventListener("DOMContentLoaded", (e) => {
  initDetailsController();
  // initContentController();
  initItemsController();

  if (document.querySelector("#map")) {
    initMapController();
  }
});
