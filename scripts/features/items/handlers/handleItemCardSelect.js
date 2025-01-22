import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { hideElement } from "../../../utils/hideElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleItemCardSelect(e) {
  const page = getCurrentState().page;
  const id = e.target.dataset.id;

  const item = getItemById(page, id);

  if (page === "fields") {
    eventBus.emit("fieldCardSelected", { id, location: item.location });
    hideElement(document.querySelector("#add-item"));
  }

  const el = document.querySelector(`.card[data-id="${id}"]`);
  toggleElementActive(el);

  eventBus.emit("itemCardSelected", item);
}

export function handleFieldCardSelect(id) {
  const page = getCurrentState().page;

  const obj = getItemById(page, id);

  hideElement(document.querySelector("#add-item"));

  const el = document.querySelector(`.card[data-id="${id}"]`);
  toggleElementActive(el);

  eventBus.emit("itemCardSelected", obj);
}
