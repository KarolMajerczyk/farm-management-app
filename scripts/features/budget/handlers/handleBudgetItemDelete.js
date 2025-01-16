import { eventBus } from "../../../shared/eventBus.js";
import { deleteBudgetItem, getActiveObject } from "../budgetModel.js";
import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetItemDelete(e) {
  const id = e.target.parentElement.dataset.id;
  const budget = deleteBudgetItem(id);

  renderBudgetItems(budget);
  eventBus.emit("itemUpdated", getActiveObject());
}
