import { setActiveObject } from "../budgetModel.js";
import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetSectionRender(obj) {
  setActiveObject(obj);
  renderBudgetItems(obj.budget);
}
