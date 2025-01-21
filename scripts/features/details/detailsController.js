import { eventBus } from "../../shared/eventBus.js";
import { hideSidePanel } from "./detailsView.js";

export function initDetailsController() {
  eventBus.on("itemCardSelected", handleDetailsSectionRender);

  document.querySelector("#side-menu").addEventListener("click", (e) => {
    if (!e.target.classList.contains("nav-item")) {
      return;
    }

    const page = e.target.dataset.page;
    handleDetailsSectionRender(page);
  });

  document
    .querySelector("#details")
    .addEventListener("change", (e) => handleDetailsSectionRender(e));

  document
    .querySelector("#details")
    .addEventListener("submit", (e) => handleDetailsItemAdd(e));

  document.querySelector("#details").addEventListener("click", (e) => {
    const btn = e.target;

    if (btn.classList.contains("btn-delete")) {
      handleDetailsItemDelete(e);
    } else if (btn.classList.contains("edit-btn")) {
      renderObjectSummaryEdit();
    } else if (btn.classList.contains("save-btn")) {
      handleDetailsItemEdit();
    } else if (btn.classList.contains("close-btn")) {
      renderObjectSummary();
    }
  });

  eventBus.on("itemCardUnselected", hideSidePanel);
}
