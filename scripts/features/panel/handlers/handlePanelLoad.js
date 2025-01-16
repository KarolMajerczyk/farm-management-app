import { eventBus } from "../../../shared/eventBus.js";
import { setActiveObject } from "../panelModel.js";
import {
  showSidePanel,
  toggleMenuItemActive,
  togglePanelSectionVisible,
} from "../panelView.js";

export function handlePanelLoad(obj) {
  showSidePanel();
  togglePanelSectionVisible("overview");
  toggleMenuItemActive("overview");
  setActiveObject(obj);
  eventBus.emit("overviewSectionSelected", obj);
}
