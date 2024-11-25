import { DOM } from "../dom/domElements.js";

export function showDetailsPanel() {
  DOM.detailsPanel.classList.add("visible");
}

export function hideDetailsPanel() {
  DOM.detailsPanel.classList.remove("visible");
}
