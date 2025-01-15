import { eventBus } from "../../../shared/eventBus.js";
import { deleteItem, getItems } from "../itemsModel.js";
import { renderItemsList, toggleItemCardActive } from "../itemsView.js";

export function handleItemCardDelete(e) {
  const type = e.target.parentElement.dataset.type;
  const id = e.target.parentElement.dataset.id;

  let activeCardId;
  if (document.querySelector(".card-tile.active")) {
    activeCardId = document.querySelector(".card-tile.active").dataset.id;
  }

  deleteItem(type, id);

  if (type === "fields") {
    eventBus.emit("fieldDeleted", id);
  }

  const objArr = getItems(type);

  renderItemsList(type, objArr);

  if (id === activeCardId) {
    eventBus.emit("itemCardUnselected");
  } else {
    toggleItemCardActive(activeCardId);
  }
}
