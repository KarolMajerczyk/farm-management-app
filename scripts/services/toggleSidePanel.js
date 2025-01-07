import { DOM } from "../dom/domElements.js";

export function showSidePanel() {
  DOM.sidePanel.classList.add("visible");
}

export function hideSidePanel() {
  DOM.sidePanel.classList.remove("visible");
}
