import { eventBus } from "../../shared/eventBus.js";
import { handleOverviewSectionRender } from "./handlers/handleOverviewSectionRender.js";

export function initOverviewController() {
  eventBus.on("overviewSectionSelected", (obj) => {
    handleOverviewSectionRender(obj);
  });
}
