import { getItems } from "../itemsModel.js";
import {
  hideItemsListAddButton,
  renderItemsList,
  showItemsListAddButton,
  toggleItemCardActive,
} from "../itemsView.js";

import { eventBus } from "../../../shared/eventBus.js";

export function handleItemsListRender() {
  const type = document.querySelector("#items-list").dataset.type;

  const data = getItems(type);
  showItemsListAddButton();

  if (type === "fields" && data) {
    hideItemsListAddButton();
  }

  if (data.length <= 0) {
    return;
  }

  renderItemsList(type, data);
  toggleItemCardActive(data[0].id);

  if (type === "fields" && data.length !== 0) {
    eventBus.emit("fieldsListLoaded", data);
  }

  eventBus.emit("itemCardSelected", data[0]);
}
