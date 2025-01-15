import { getBudgetItems } from "../budgetModel.js";
import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetSectionRender(page) {
  document.querySelector(".side-panel .visible").classList.remove("visible");
  document.querySelector(".side-panel .visible").classList.remove("visible");

  const cardData = document.querySelector(".card-tile.active").dataset;
  const { type, id } = cardData;

  const budget = getBudgetItems(type, id);
  renderBudgetItems(budget);
}
