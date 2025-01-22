import { eventBus } from "../../shared/eventBus.js";
import { handleItemCardAdd } from "./handlers/handleItemCardAdd.js";
import { handleItemCardDelete } from "./handlers/handleItemCardDelete.js";
import { handleItemsListRender } from "./handlers/handleItemsListRender.js";
import { handleItemCardSelect } from "./handlers/handleItemCardSelect.js";
import { handleItemCardUnselect } from "./handlers/handleItemCardUnselect.js";
import { handleItemUpdate } from "./handlers/handleItemUpdate.js";

export function initItemsController() {
  handleItemsListRender();

  document
    .querySelector("#add-item")
    .addEventListener("click", (e) => handleItemCardAdd(e));

  document.querySelector("#items-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      handleItemCardDelete(e);
    } else {
      handleItemCardSelect({ e });
    }
  });

  eventBus.on("fieldLayerSelected", handleItemCardSelect);
  eventBus.on("emptyLayerSelected", handleItemCardUnselect);
  eventBus.on("itemUpdated", handleItemUpdate);
}
