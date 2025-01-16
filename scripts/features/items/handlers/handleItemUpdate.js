import { getItems, updateItem } from "../itemsModel.js";
import { renderItemsList, toggleItemCardActive } from "../itemsView.js";

export function handleItemUpdate(obj) {
  const type = document.querySelector("#items-list").dataset.type;
  updateItem(type, obj);

  const data = getItems(type);
  renderItemsList(type, data);

  toggleItemCardActive(obj.id);
}
