import { eventBus } from "../../../shared/eventBus.js";
import { deleteItem, getItems } from "../itemsModel.js";
import { renderItemsList } from "../itemsView.js";

export function handleDeleteItemClick(e) {
  const type = e.target.parentElement.dataset.type;
  const id = e.target.parentElement.dataset.id;

  deleteItem(type, id);

  if (type === "fields") {
    eventBus.emit("fieldDeleted", id);
  }

  const objArr = getItems(type);

  renderItemsList(type, objArr);
}
