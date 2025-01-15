import { eventBus } from "../../../shared/eventBus.js";
import { getItemById } from "../itemsModel.js";
import { hideItemsListAddButton, toggleItemCardActive } from "../itemsView.js";

export function handleItemCardSelect(e) {
  const type = e.target.dataset.type;
  const id = e.target.dataset.id;

  const obj = getItemById(type, id);

  if (type === "fields") {
    eventBus.emit("fieldCardSelected", { id, location: obj.location });
    hideItemsListAddButton();
  }

  toggleItemCardActive(e.target);
}
