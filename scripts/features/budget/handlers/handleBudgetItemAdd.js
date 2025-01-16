import { eventBus } from "../../../shared/eventBus.js";
import {
  addBudgetItem,
  createBudgetItem,
  getActiveObject,
} from "../budgetModel.js";

import { renderBudgetItems } from "../budgetView.js";

export function handleBudgetItemAdd(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const description = data.get("description");
  const amount = parseInt(data.get("amount"));

  form.reset();

  const item = createBudgetItem(description, amount);
  const budget = addBudgetItem(item);

  renderBudgetItems(budget);
  eventBus.emit("itemUpdated", getActiveObject());
}
