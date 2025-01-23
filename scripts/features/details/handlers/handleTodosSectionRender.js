import { getCurrentState } from "../../../shared/state.js";
import { getItemById } from "../../../shared/storage.js";
import { getCurrentDate } from "../../../utils/getCurrentDate.js";
import { filterTodoItems } from "../detailsModel.js";

import { prepareDetailsSection, renderTodosSection } from "../detailsView.js";

export function handleTodosSectionRender(val) {
  prepareDetailsSection("Lista zadań", "todos");

  if (!val) {
    document.querySelector("#todos-calendar").value = getCurrentDate();
  }

  const date = document.querySelector("#todos-calendar").value;

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const todos = filterTodoItems(item.todos, date);
  renderTodosSection(todos);
}
