import { eventBus } from "../../../shared/eventBus.js";
import { deleteItem, getItems } from "../itemsModel.js";
import { renderItemsList, toggleItemCardActive } from "../itemsView.js";

export function handleItemCardDelete(e) {
  const type = e.target.parentElement.dataset.type;
  const id = e.target.parentElement.dataset.id;
  let card;

  if (!e.target.classList.contains("active")) {
    card = document.querySelector(".card-tile.active");
  }

  deleteItem(type, id);

  if (type === "fields") {
    eventBus.emit("fieldDeleted", id);
  }

  // inną to zostaw active na tej której jesteś

  const objArr = getItems(type);

  renderItemsList(type, objArr);
  toggleItemCardActive(card);
}
