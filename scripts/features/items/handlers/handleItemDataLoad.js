import { eventBus } from "../../../shared/eventBus.js";
import { getItemById } from "../itemsModel.js";
import { hideItemsListAddButton, toggleItemCardActive } from "../itemsView.js";

export function handleItemDataLoad(id) {
  toggleItemCardActive(id);
  hideItemsListAddButton();

  const obj = getItemById("fields", id);
  eventBus.emit("itemCardSelected", obj);
}
