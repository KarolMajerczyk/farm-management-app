import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { createTodoItem, filterTodoItems } from "../detailsModel.js";
import { renderTodosSection } from "../detailsView.js";

export function handleTodosItemAdd(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const description = data.get("description");
  const date = document.querySelector("#todos-calendar").value;

  form.reset();

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const todoItem = createTodoItem(description, date);
  item.todos.push(todoItem);

  const todos = filterTodoItems(item.todos, date);
  renderTodosSection(todos);
  updateItem(page, item);
}
