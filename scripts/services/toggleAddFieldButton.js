import { DOM } from "../dom/domElements.js";

export function showAddFieldButton() {
  DOM.addFieldButton.classList.add("visible");
}

export function hideAddFieldButton() {
  DOM.addFieldButton.classList.remove("visible");
}


