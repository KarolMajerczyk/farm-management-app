import { setActiveObject } from "../budgetModel.js";
import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetSectionRender(obj) {
  setActiveObject(obj);
  document.querySelector(".budget #dropdown").selectedIndex = 0;
  renderBudgetItems(obj.budget);
}
