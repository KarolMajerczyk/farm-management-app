import { setActiveObject } from "../todosModel.js";
import { renderTodoItems } from "../todosView.js";

export function handleTodosSectionRender(obj) {
  setActiveObject(obj);
  renderTodoItems(obj.todos);
}

