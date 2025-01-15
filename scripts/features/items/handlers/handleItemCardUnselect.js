import { eventBus } from "../../../shared/eventBus.js";
import { showItemsListAddButton, toggleItemCardActive } from "../itemsView.js";

export function handleItemCardUnselect() {
  toggleItemCardActive();
  showItemsListAddButton();

  eventBus.emit("itemCardUnselected");
}
