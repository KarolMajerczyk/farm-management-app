import { showElement } from "../../../utils/showElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleItemCardUnselect() {
  showElement(document.querySelector("#add-item"));

  const el = document.querySelector(".card.active");
  if (!el) {
    return;
  }

  toggleElementActive(el, true);
}
