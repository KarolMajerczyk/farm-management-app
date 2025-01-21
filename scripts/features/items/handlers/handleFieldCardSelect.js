import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { hideElement } from "../../../utils/hideElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleFieldCardSelect(id) {
  const page = getCurrentState().page;

  const obj = getItemById(page, id);

  hideElement(document.querySelector("#add-item"));

  const el = document.querySelector(`.card[data-id="${id}"]`);
  toggleElementActive(el);

  eventBus.emit("itemCardSelected", obj);
}
