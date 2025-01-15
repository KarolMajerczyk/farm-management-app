import { eventBus } from "../../shared/eventBus.js";
import { handleOverviewSectionRender } from "./handlers/handleOverviewSectionRender.js";

export function initOverviewController() {
  document.querySelector("#side-menu").addEventListener("click", (e) => {
    if (e.target.dataset.page === "overview") {
      handleOverviewSectionRender();
    }
  });

  eventBus.on("itemCardSelected", (obj) => handleOverviewSectionRender(obj));
}
