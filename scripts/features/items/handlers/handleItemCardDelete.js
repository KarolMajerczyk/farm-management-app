import { eventBus } from "../../../shared/eventBus.js";
import { deleteItem, getItems } from "../itemsModel.js";
import { renderItemsList } from "../itemsView.js";

export function handleItemCardDelete(e) {
  const type = e.target.parentElement.dataset.type;
  const id = e.target.parentElement.dataset.id;

  // jeśli to inna karta to zostaw active

  deleteItem(type, id);

  if (type === "fields") {
    eventBus.emit("fieldDeleted", id);
  }

  const objArr = getItems(type);

  renderItemsList(type, objArr);
}
