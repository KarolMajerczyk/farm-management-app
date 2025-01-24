import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { filterBudgetItems } from "../detailsModel.js";
import { renderBudgetSection } from "../detailsView.js";

export function handleBudgetItemDelete(e) {
  const filter = document.querySelector("#budget-filter").value;
  const budgetItemId = e.target.parentElement.dataset.id;

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const budgetItemInd = item.budget.findIndex((el) => el.id === budgetItemId);
  item.budget.splice(budgetItemInd, 1);

  const budget = filterBudgetItems(item.budget, filter);
  renderBudgetSection(budget);
  updateItem(page, item);
}
