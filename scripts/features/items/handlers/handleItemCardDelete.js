import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState } from "../../../shared/state.js";
import { deleteItem, getItems } from "../../../shared/storage.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";
import { renderItemsList } from "../itemsView.js";

export function handleItemCardDelete(e) {
  const { page, currId } = getCurrentState();
  const id = e.target.parentElement.dataset.id;

  deleteItem(page, id);

  if (page === "fields") {
    eventBus.emit("fieldDeleted", id);
  }

  const items = getItems(page);
  renderItemsList(page, items);

  console.log(id, currId);
  
  if (id === getCurrentState().id) {
    eventBus.emit("itemCardUnselected");
  } else if (getCurrentState().id) {
    const id = getCurrentState().id;
    const el = document.querySelector(`.card[data-id="${id}"]`);
    toggleElementActive(el);
  }

  eventBus.emit("itemCardUnselected");
}
