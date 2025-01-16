import { eventBus } from "../../../shared/eventBus.js";
import { deleteTodoItem, getActiveObject } from "../todosModel.js";
import { renderTodoItems } from "../todosView.js";

export function handleTodoItemDelete(e) {
  const id = e.target.parentElement.dataset.id;
  const todos = deleteTodoItem(id);

  renderTodoItems(todos);
  eventBus.emit("itemUpdated", getActiveObject());
}
