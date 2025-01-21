import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { hideElement } from "../../../utils/hideElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleItemCardSelect(e) {
  const page = getCurrentState().page;
  const id = e.target.dataset.id;

  const obj = getItemById(page, id);

  if (page === "fields") {
    eventBus.emit("fieldCardSelected", { id, location: obj.location });
    hideElement(document.querySelector("#add-item"));
  }

  const el = document.querySelector(`.card[data-id="${id}"]`);
  toggleElementActive(el);

  eventBus.emit("itemCardSelected", obj);
}
