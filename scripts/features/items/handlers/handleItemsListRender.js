import { getItems } from "../itemsModel.js";
import { renderItemsList, toggleItemCardActive } from "../itemsView.js";

import { eventBus } from "../../../shared/eventBus.js";

export function handleItemsListRender() {
  const type = document.querySelector("#items-list").dataset.type;

  const data = getItems(type);

  if (data.length <= 0) {
    return;
  }

  renderItemsList(type, data);
  toggleItemCardActive();

  if (type === "fields" && data.length !== 0) {
    eventBus.emit("fieldsListLoaded", data);
  }
}
