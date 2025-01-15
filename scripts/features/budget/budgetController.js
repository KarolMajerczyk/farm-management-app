import { handleBudgetSectionRender } from "./handlers/handleBudgetSectionRender.js";
import { handleBudgetItemAdd } from "./handlers/handleBudgetItemAdd.js";

export function initBudgetController() {
  document.querySelector("#side-menu").addEventListener("click", (e) => {
    if (e.target.dataset.page === "budget") {
      handleBudgetSectionRender();
    }
  });

  document
    .getElementById("add-budget-form")
    .addEventListener("submit", (e) => handleBudgetItemAdd(e));
}
