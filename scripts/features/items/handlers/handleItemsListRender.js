import { getItems } from "../itemsModel.js";
import { renderItemsList } from "../itemsView.js";

import { eventBus } from "../../../shared/eventBus.js";

export function handleItemsListRender() {
  const type = document.querySelector("#items-list").dataset.type;

  const data = getItems(type);
  renderItemsList(type, data);

  if (type === "fields" && data.length !== 0) {
    eventBus.emit("fieldsListLoaded", data);
  }
}
