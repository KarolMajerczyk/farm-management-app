import { eventBus } from "../../../shared/eventBus.js";
import { setActiveObject } from "../panelModel.js";
import { showSidePanel, togglePanelSectionVisibility } from "../panelView.js";

export function handlePanelLoad(obj) {
  showSidePanel();
  togglePanelSectionVisibility("overview");
  setActiveObject(obj);
  eventBus.emit("overviewSectionSelected", obj);
}
