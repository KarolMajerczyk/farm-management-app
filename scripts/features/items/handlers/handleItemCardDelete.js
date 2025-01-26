import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { deleteItem, getItems } from "../../../shared/storage.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";
import { renderItemsList } from "../itemsView.js";

export function handleItemCardDelete(e) {
  const { page, id } = getCurrentState();
  const elId = e.target.parentElement.dataset.id;

  deleteItem(page, elId);

  if (page === "fields") {
    eventBus.emit("fieldDeleted", elId);
  }

  const items = getItems(page);
  renderItemsList(page, items);

  if (elId === id) {
    eventBus.emit("itemCardUnselected");
  } else if (id) {
    const el = document.querySelector(`.card[data-id="${id}"]`);
    toggleElementActive(el);
  }
}
