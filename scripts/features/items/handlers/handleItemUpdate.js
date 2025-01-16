import { updateItem } from "../itemsModel.js";

export function handleItemUpdate(obj) {
  const type = document.querySelector("#items-list").dataset.type;
  updateItem(type, obj);
}
