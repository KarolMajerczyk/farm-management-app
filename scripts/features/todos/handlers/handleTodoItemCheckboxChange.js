import { toggleTodoItemStatus } from "../todosModel.js";

export function handleTodoItemCheckboxChange(e) {
  const todoId = e.target.parentElement.dataset.id;
  toggleTodoItemStatus(todoId);
}
