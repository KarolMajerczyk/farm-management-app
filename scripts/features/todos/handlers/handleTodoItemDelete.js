import { eventBus } from "../../../shared/eventBus.js";
import {
  deleteTodoItem,
  getActiveObject,
  getTodoItems,
} from "../todosModel.js";
import { renderTodoItems } from "../todosView.js";

export function handleTodoItemDelete(e) {
  const id = e.target.parentElement.dataset.id;
  deleteTodoItem(id);

  const date = document.querySelector(".todos #date-picker").value;
  const todos = getTodoItems(date);

  renderTodoItems(todos);
  eventBus.emit("itemUpdated", getActiveObject());
}
