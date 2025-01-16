import { getBudgetItems } from "../budgetModel.js";
import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetFilterChange(e) {
  const filter = e.target.value;
  const budget = getBudgetItems(filter);

  renderBudgetItems(budget);
}
