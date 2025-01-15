import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetSectionRender(obj) {
  renderBudgetItems(obj.budget);
}
