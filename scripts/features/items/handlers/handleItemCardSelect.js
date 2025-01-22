import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { hideElement } from "../../../utils/hideElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleItemCardSelect({ id, e }) {
  if (!id) {
    id = e.target.dataset.id;
  }

  const { page } = getCurrentState();

  const el = document.querySelector(`.card[data-id="${id}"]`);
  toggleElementActive(el);

  eventBus.emit("itemCardSelected");

  if (page === "fields") {
    eventBus.emit("fieldCardSelected");
    hideElement(document.querySelector("#add-item"));
  }
}
