import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { createBudgetItem } from "../detailsModel.js";
import { renderBudgetSection } from "../detailsView.js";

export function handleBudgetItemAdd(e) {
  e.preventDefault();
  document.querySelector("#budget-filter").value = "all";

  const form = e.target;
  const data = new FormData(form);

  const description = data.get("description");
  const amount = parseInt(data.get("amount"));

  form.reset();

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const budgetItem = createBudgetItem(description, amount);
  item.budget.push(budgetItem);

  renderBudgetSection(item.budget);
  updateItem(page, item);
}
