import { eventBus } from "../../../shared/eventBus.js";
import { getItemById } from "../itemsModel.js";
import { hideItemsListAddButton, toggleItemCardActive } from "../itemsView.js";

export function handleItemCardSelect({ e, type, id }) {
  if (e) {
    type = e.target.dataset.type;
    id = e.target.dataset.id;
  }

  const obj = getItemById(type, id);

  if (type === "fields") {
    eventBus.emit("fieldCardSelected", { id, location: obj.location });
    hideItemsListAddButton();
  }

  toggleItemCardActive(id);
  eventBus.emit("itemCardSelected", obj);
}
