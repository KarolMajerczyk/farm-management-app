import {
  addBudgetItem,
  createBudgetItem,
  getBudgetItems,
} from "../budgetModel.js";

import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetItemAdd(e) {
  e.preventDefault();

  const cardData = document.querySelector(".card-tile.active").dataset;

  const form = e.target;
  const data = new FormData(form);

  const description = data.get("description");
  const amount = parseInt(data.get("amount"));

  form.reset();

  const budgetItem = createBudgetItem(description, amount);
  const obj = get;
  // addBudgetItem(type, id, budgetItem);

  // const budget = getBudgetItems(type, id);
  renderBudgetItems(obj.budget);
}
