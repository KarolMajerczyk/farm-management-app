import { eventBus } from "../../../shared/eventBus.js";
import { getCurrentState, resetCurrentState } from "../../../shared/state.js";
import { deleteItem, getItems } from "../../../shared/storage.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";
import { renderItemsList } from "../itemsView.js";

export function handleItemCardDelete(e) {
  const page = getCurrentState().page;
  const id = e.target.parentElement.dataset.id;

  deleteItem(page, id);

  if (page === "fields") {
    eventBus.emit("fieldDeleted", id);
  }

  const items = getItems(page);
  renderItemsList(page, items);

  if (id === getCurrentState().id) {
    eventBus.emit("itemCardUnselected");
    resetCurrentState("id");
  } else if (getCurrentState().id) {
    const id = getCurrentState().id;
    const el = document.querySelector(`.card[data-id="${id}"]`);
    toggleElementActive(el);
  }
}
