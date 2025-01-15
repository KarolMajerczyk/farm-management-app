import { eventBus } from "../../shared/eventBus.js";
import { handleItemCardAdd } from "./handlers/handleItemCardAdd.js";
import { handleItemCardDelete } from "./handlers/handleItemCardDelete.js";
import { handleItemsListRender } from "./handlers/handleItemsListRender.js";
import { handleItemCardSelect } from "./handlers/handleItemCardSelect.js";
import { handleItemDataReset } from "./handlers/handleItemDataReset.js";
import { handleItemDataLoad } from "./handlers/handleItemDataLoad.js";

export function initItemsController() {
  handleItemsListRender();

  document
    .querySelector("#add-item")
    .addEventListener("click", (e) => handleItemCardAdd(e));

  document.querySelector("#items-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("card-tile")) {
      handleItemCardSelect(e);
    }

    if (e.target.classList.contains("delete")) {
      handleItemCardDelete(e);
    }
  });

  eventBus.on("fieldLayerSelected", (id) => handleItemDataLoad(id));
  eventBus.on("emptyLayerSelected", handleItemDataReset);
}
