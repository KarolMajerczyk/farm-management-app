import { eventBus } from "../../shared/eventBus.js";
import { handleAnimalItemAdd } from "./handlers/handleAnimalItemAdd.js";
import { handleFileItemAdd } from "./handlers/handleFileItemAdd.js";
import { handleContentRender } from "./handlers/handleContentRender.js";
import { handleContentVisibilityToggle } from "./handlers/handleContentVisibilityToggle.js";

export function initContentController() {
  eventBus.on("itemCardSelected", handleContentRender);
  eventBus.on("itemCardUnselected", handleContentVisibilityToggle);

  if (document.querySelector("#add-animal")) {
    document
      .querySelector("#add-animal")
      .addEventListener("click", handleAnimalItemAdd);
  }

  if (document.querySelector("#content")) {
    document.querySelector("#content").addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    document.querySelector("#content").addEventListener("drop", (e) => {
      e.preventDefault();
      handleFileItemAdd(e);
    });
  }
}
