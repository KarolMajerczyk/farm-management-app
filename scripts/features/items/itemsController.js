import { eventBus } from "../../shared/eventBus.js";
import { handleAddItemClick } from "./handlers/handleAddItemClick.js";
import { handleDeleteItemClick } from "./handlers/handleDeleteItemClick.js";
import { handleItemsListRender } from "./handlers/handleItemsListRender.js";
import { handleItemCardClick } from "./handlers/handleItemCardClick.js";

export function initItemsController() {
  handleItemsListRender();

  document
    .querySelector("#add-item")
    .addEventListener("click", (e) => handleAddItemClick(e));

  // eventBus.on("fieldPolygonClicked", (id) => handleItemCardState(id));

  document.querySelector("#items-list").addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.classList.contains("card-tile")) {
      handleItemCardClick(e);
      return;
    }

    if (e.target.classList.contains("delete")) {
      handleDeleteItemClick(e);
      return;
    }
  });
}
