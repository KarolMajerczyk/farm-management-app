import { hideDetailsPanel, showDetailsPanel } from "../detailsView.js";

export function handleDetailsPanelVisibilityToggle(state) {
  if (state) {
    showDetailsPanel();
  } else {
    hideDetailsPanel();
  }
}
