import { eventBus } from "../../shared/eventBus.js";
import { handlePanelMenuSelect } from "./handlers/handlePanelMenuSelect.js";
import { handlePanelLoad } from "./handlers/handlePanelLoad.js";
import { hideSidePanel } from "./panelView.js";

export function initPanelController() {
  eventBus.on("itemCardSelected", (obj) => handlePanelLoad(obj));

  document
    .querySelector("#side-menu")
    .addEventListener("click", (e) => handlePanelMenuSelect(e));

  eventBus.on("itemCardUnselected", hideSidePanel);
}
