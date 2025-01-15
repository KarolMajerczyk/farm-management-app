import { eventBus } from "../../../shared/eventBus.js";
import { getActiveObject } from "../panelModel.js";
import { togglePanelSectionVisibility } from "../panelView.js";

export function handlePanelMenuSelect(e) {
  const obj = getActiveObject();

  const page = e.target.dataset.page;
  togglePanelSectionVisibility(page);

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
