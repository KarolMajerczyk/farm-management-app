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

  document.querySelector("#items-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("card-tile")) {
      handleItemCardClick(e);
    }

    if (e.target.classList.contains("delete")) {
      handleDeleteItemClick(e);
    }
  });

  eventBus.on("fieldLayerSelected", (id) => handleItemCardState(id));
}
