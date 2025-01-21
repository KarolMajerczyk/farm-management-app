import { getCurrentState, setCurrentState } from "../../../shared/state.js";
import { getItems } from "../../../shared/storage.js";

import { showElement } from "../../../utils/showElement.js";
import { hideElement } from "../../../utils/hideElement.js";
import { renderItemsList } from "../itemsView.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export function handleItemsListRender() {
  const page = getCurrentState().page;

  const items = getItems(page);
  showElement(document.querySelector("#add-item"));

  if (page === "fields" && items) {
    hideElement(document.querySelector("#add-item"));
  }

  if (items.length <= 0) {
    return;
  }

  renderItemsList(page, items);

  const firstItem = document.querySelectorAll(".card")[0];
  toggleElementActive(firstItem);
  setCurrentState({ id: firstItem.dataset.id });

  //
  // toggleItemCardActive(items[0].id);

  // if (page === "fields" && items.length !== 0) {
  //   eventBus.emit("fieldsListLoaded", items);
  // }

  // eventBus.emit("itemCardSelected", items[0]);
}
