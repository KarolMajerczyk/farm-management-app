import { eventBus } from "../../shared/eventBus.js";
import { handleOverviewSectionRender } from "./handlers/handleOverviewSectionRender.js";
import { setActiveObject, getActiveObject } from "./overviewModel.js";
import {
  renderObjectSummary,
  renderObjectSummaryEdit,
} from "./overviewView.js";

export function initOverviewController() {
  eventBus.on("overviewSectionSelected", (obj) => {
    setActiveObject(obj);
    handleOverviewSectionRender(obj);
  });

  document.querySelector(".overview").addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      renderObjectSummaryEdit("fields", getActiveObject());
    } else if (e.target.classList.contains("save-btn")) {
      renderObjectSummary("fields", getActiveObject());
    }
  });
}
