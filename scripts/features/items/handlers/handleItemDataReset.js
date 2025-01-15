import { showItemsListAddButton, toggleItemCardActive } from "../itemsView.js";

export function handleItemDataReset() {
  toggleItemCardActive();
  showItemsListAddButton();
}
