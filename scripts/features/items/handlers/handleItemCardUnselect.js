import { getCurrentState } from "../../../shared/state.js";
import { showElement } from "../../../utils/showElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleItemCardUnselect() {
  const { id } = getCurrentState();

  if (id) {
    const el = document.querySelector(`.card[data-id="${id}"]`);
    toggleElementActive(el, true);
  }

  showElement(document.querySelector("#add-item"));
}
