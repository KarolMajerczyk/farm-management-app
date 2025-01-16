import { eventBus } from "../../../shared/eventBus.js";
import { getActiveObject } from "../panelModel.js";
import {
  togglePanelSectionVisible,
  toggleMenuItemActive,
} from "../panelView.js";

export function handlePanelMenuSelect(e) {
  const obj = getActiveObject();

  if (!e.target.classList.contains("nav-item")) {
    return;
  }

  const page = e.target.dataset.page;
  togglePanelSectionVisible(page);
  toggleMenuItemActive(page);

  switch (page) {
    case "overview":
      eventBus.emit("overviewSectionSelected", obj);
      break;
    case "budget":
      eventBus.emit("budgetSectionSelected", obj);
      break;
    case "todos":
      eventBus.emit("todosSectionSelected", obj);
      break;
  }
}
