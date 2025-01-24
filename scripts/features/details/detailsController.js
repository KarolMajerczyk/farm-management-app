import { eventBus } from "../../shared/eventBus.js";
import { handleBudgetItemAdd } from "./handlers/handleBudgetItemAdd.js";
import { handleBudgetItemDelete } from "./handlers/handleBudgetItemDelete.js";

import { handleBudgetSectionRender } from "./handlers/handleBudgetSectionRender.js";
import { handleOverviewSectionRender } from "./handlers/handleOverviewSectionRender.js";
import { handleOverviewSectionUpdate } from "./handlers/handleOverviewSectionUpdate.js";
import { handleTodosItemAdd } from "./handlers/handleTodosItemAdd.js";
import { handleTodosItemDelete } from "./handlers/handleTodosItemDelete.js";
import { handleTodosItemStatusChange } from "./handlers/handleTodosItemStatusChange.js";
import { handleTodosSectionRender } from "./handlers/handleTodosSectionRender.js";

export function initDetailsController() {
  // DETAILS
  document.querySelector("#side-menu").addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-item")) {
      switch (e.target.dataset.section) {
        case "overview":
          handleOverviewSectionRender();
          break;
        case "budget":
          handleBudgetSectionRender();
          break;
        case "todos":
          handleTodosSectionRender();
          break;
      }
    }
  });

  // OVERVIEW
  document.querySelector("#overview").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-edit")) {
      handleOverviewSectionRender("edit");
      return;
    }

    if (e.target.classList.contains("btn-close")) {
      handleOverviewSectionRender();
      return;
    }
  });

  document.querySelector("#overview").addEventListener("submit", (e) => {
    handleOverviewSectionUpdate(e);
  });

  // BUDGET
  document
    .querySelector("#budget-filter")
    .addEventListener("change", (e) =>
      handleBudgetSectionRender(e.target.value)
    );

  document.querySelector("#budget-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      handleBudgetItemDelete(e);
    }
  });

  document
    .querySelector("#budget-form")
    .addEventListener("submit", (e) => handleBudgetItemAdd(e));

  // TODOS
  document
    .querySelector("#todos-calendar")
    .addEventListener("change", (e) =>
      handleTodosSectionRender(e.target.value)
    );

  document.querySelector("#todos").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      handleTodosItemDelete(e);
      return;
    }

    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
      handleTodosItemStatusChange(e);
      return;
    }
  });

  document
    .querySelector("#todos-form")
    .addEventListener("submit", (e) => handleTodosItemAdd(e));

  // OTHERS
  eventBus.on("itemCardSelected", handleOverviewSectionRender);
  eventBus.on("itemUpdated", handleOverviewSectionRender);
  // eventBus.on("itemCardUnselected", hideSidePanel);
}
