import { eventBus } from "../../../shared/eventBus.js";
import { deleteBudgetItem, getActiveObject } from "../../budget/budgetModel.js";
import { renderBudgetItems } from "../../budget/budgetView.js";

export function handleBudgetItemDelete(e) {
  const id = e.target.parentElement.dataset.id;
  const budget = deleteBudgetItem(id);

  renderBudgetItems(budget);
  eventBus.emit("itemUpdated", getActiveObject());
}

export function handleTodoItemDelete(e) {
  const id = e.target.parentElement.dataset.id;
  deleteTodoItem(id);

  const date = document.querySelector(".todos #date-picker").value;
  const todos = getTodoItems(date);

  renderTodoItems(todos);
  eventBus.emit("itemUpdated", getActiveObject());
}
