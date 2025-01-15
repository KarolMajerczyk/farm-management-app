import { hideItemsListAddButton, toggleItemCardActive } from "../itemsView.js";

export function handleItemDataLoad(id) {
  toggleItemCardActive(id);
  hideItemsListAddButton();
}
