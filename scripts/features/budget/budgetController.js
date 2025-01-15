import { eventBus } from "../../shared/eventBus.js";
import { handleBudgetSectionRender } from "./handlers/handleBudgetSectionRender.js";
import { handleBudgetItemAdd } from "./handlers/handleBudgetItemAdd.js";

export function initBudgetController() {
  eventBus.on("budgetSectionSelected", (obj) => {
    handleBudgetSectionRender(obj);
  });

  document
    .querySelector("#budget-form")
    .addEventListener("submit", handleBudgetItemAdd);
}
