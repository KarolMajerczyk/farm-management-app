import { eventBus } from "../../shared/eventBus.js";
import { handleBudgetItemAdd } from "./handlers/handleBudgetItemAdd.js";

import { handleBudgetSectionRender } from "./handlers/handleBudgetSectionRender.js";
import { handleOverviewSectionRender } from "./handlers/handleOverviewSectionRender.js";
import { handleTodosItemAdd } from "./handlers/handleTodosItemAdd.js";
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
  // document.querySelector("#overview").addEventListener("click", (e) => {
  //   const el = e.target;

  //   if (el.classList.contains("btn-edit")) {
  //     renderObjectSummaryEdit();
  //     return;
  //   }

  //   if (el.classList.contains("btn-save")) {
  //     handleDetailsItemEdit();
  //     return;
  //   }

  //   if (el.classList.contains("btn-close")) {
  //     handleOverviewSectionRender();
  //     return;
  //   }
  // });

  // BUDGET
  document
    .querySelector("#budget-filter")
    .addEventListener("change", (e) =>
      handleBudgetSectionRender(e.target.value)
    );

  // document.querySelector("#budget").addEventListener("click", (e) => {
  //   const el = e.target;

  //   if (el.classList.contains("btn-delete")) {
  //     handleBudgetItemDelete(e);
  //   }
  // });

  document
    .querySelector("#budget-form")
    .addEventListener("submit", (e) => handleBudgetItemAdd(e));

  // TODOS
  document
    .querySelector("#todos-calendar")
    .addEventListener("change", (e) =>
      handleTodosSectionRender(e.target.value)
    );

  // document.querySelector("#todos").addEventListener("click", (e) => {
  //   const el = e.target;

  //   if (el.classList.contains("btn-delete")) {
  //     handleTodosItemDelete(e);
  //     return;
  //   }

  //   if (el.classList.contains("checkbox")) {
  //     handleTodosItemStatusChange();
  //     return;
  //   }
  // });

  document
    .querySelector("#todos-form")
    .addEventListener("submit", (e) => handleTodosItemAdd(e));

  // OTHERS
  eventBus.on("itemCardSelected", handleOverviewSectionRender);
  // eventBus.on("itemCardUnselected", hideSidePanel);
}

// export function handleTodoItemCheckboxChange(e) {
//   const todoId = e.target.parentElement.dataset.id;
//   toggleTodoItemStatus(todoId);
// }
