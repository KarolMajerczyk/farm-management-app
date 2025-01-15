import { eventBus } from "../../shared/eventBus.js";
import { hideSidePanel, renderOverview } from "./panelView.js";

export function initPanelController() {
  eventBus.on("itemCardSelected", (obj) => {
    const type = document.querySelector("#items-list").dataset.type;
    renderOverview(type, obj);
  });

  eventBus.on("itemCardUnselected", () => {
    hideSidePanel();
  });
}
