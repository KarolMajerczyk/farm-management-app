import { eventBus } from "../../shared/eventBus.js";
import { handleBudgetSectionRender } from "./handlers/handleBudgetSectionRender.js";
import { handleBudgetItemAdd } from "./handlers/handleBudgetItemAdd.js";
import { handleBudgetItemDelete } from "./handlers/handleBudgetItemDelete.js";
import { handleBudgetFilterChange } from "./handlers/handleBudgetFilterChange.js";

export function initBudgetController() {
  eventBus.on("budgetSectionSelected", (obj) => {
    handleBudgetSectionRender(obj);
  });

  document
    .querySelector("#budget-form")
    .addEventListener("submit", handleBudgetItemAdd);

  document.querySelector("#budget-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      handleBudgetItemDelete(e);
    }
  });

  document
    .querySelector(".budget #dropdown")
    .addEventListener("change", (e) => handleBudgetFilterChange(e));
}
