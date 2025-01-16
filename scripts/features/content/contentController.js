import { eventBus } from "../../shared/eventBus.js";
import { hideContentListAddButton } from "./contentView.js";
import { handleContentItemAdd } from "./handlers/handleContentItemAdd.js";
import { handleContentListRender } from "./handlers/handleContentListRender.js";

export function initContentController() {
  eventBus.on("itemCardSelected", (obj) => {
    if (document.querySelector("#items-list").dataset.type !== "fields") {
      handleContentListRender(obj);
    }
  });

  eventBus.on("itemCardUnselected", hideContentListAddButton);

  if (document.querySelector(".content #add-item")) {
    document
      .querySelector(".content #add-item")
      .addEventListener("click", (e) => {
        handleContentItemAdd(e);
      });
  }
}
