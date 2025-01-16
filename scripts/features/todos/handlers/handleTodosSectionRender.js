import { getTodoItems, setActiveObject } from "../todosModel.js";

import { renderTodoItems } from "../todosView.js";
import { getCurrentDate } from "../../../utils/getCurrentDate.js";

export function handleTodosSectionRender(obj) {
  setActiveObject(obj);

  const date = getCurrentDate();
  document.querySelector(".todos #date-picker").value = date;

  const todos = getTodoItems(date);
  renderTodoItems(todos);
}
