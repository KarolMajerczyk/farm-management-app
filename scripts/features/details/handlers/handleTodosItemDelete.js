import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { filterTodoItems } from "../detailsModel.js";
import { renderTodosSection } from "../detailsView.js";

export function handleTodosItemDelete(e) {
  const date = document.querySelector("#todos-calendar").value;
  const todoItemId = e.target.parentElement.dataset.id;

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const todoItemInd = item.todos.findIndex((el) => el.id === todoItemId);
  item.todos.splice(todoItemInd, 1);

  const todos = filterTodoItems(item.todos, date);
  renderTodosSection(todos);
  updateItem(page, item);
}
