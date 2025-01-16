import { getTodoItems } from "../todosModel.js";
import { renderTodoItems } from "../todosView.js";

export function handleTodosDateChange(e) {
  const todos = getTodoItems(e.target.value);
  renderTodoItems(todos);
}
