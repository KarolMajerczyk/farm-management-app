import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";

export function handleTodosItemStatusChange(e) {
  const todoItemId = e.target.closest("[data-id]").dataset.id;

  const isTodoChecked = e.target.checked;

  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const todoItemInd = item.todos.findIndex((el) => el.id === todoItemId);
  item.todos[todoItemInd].status = isTodoChecked ? "done" : "pending";

  updateItem(page, item);
}
