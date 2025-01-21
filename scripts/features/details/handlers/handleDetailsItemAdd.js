import { eventBus } from "../../../shared/eventBus.js";
import {
  addBudgetItem,
  createBudgetItem,
  getActiveObject,
} from "../../budget/budgetModel.js";

import { renderBudgetItems } from "../../budget/budgetView.js";

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

export function handleTodoItemAdd(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const description = data.get("description");

  form.reset();

  const date = document.querySelector(".todos #date-picker").value;

  const item = createTodoItem(description, date);
  addTodoItem(item);

  const todos = getTodoItems(date);
  renderTodoItems(todos);
  eventBus.emit("itemUpdated", getActiveObject());
}
