import { eventBus } from "../../../shared/eventBus.js";
import {
  addTodoItem,
  createTodoItem,
  getActiveObject,
  getTodoItems,
} from "../todosModel.js";

import { renderTodoItems } from "../todosView.js";

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
