import { eventBus } from "../../../shared/eventBus.js";
import { addTodoItem, createTodoItem, getActiveObject } from "../todosModel.js";

import { renderTodoItems } from "../todosView.js";

export function handleTodoItemAdd(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const description = data.get("description");

  form.reset();

  const item = createTodoItem(description);
  const todo = addTodoItem(item);

  renderTodoItems(todo);
  eventBus.emit("itemUpdated", getActiveObject());
}
