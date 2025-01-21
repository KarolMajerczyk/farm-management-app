import { resetCurrentState } from "../../../shared/state.js";
import { showElement } from "../../../utils/showElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleItemCardUnselect() {
  showElement(document.querySelector("#add-item"));
  resetCurrentState("id");

  const el = document.querySelector(".card.active");
  if (!el) {
    return;
  }

  toggleElementActive(el, true);
}
