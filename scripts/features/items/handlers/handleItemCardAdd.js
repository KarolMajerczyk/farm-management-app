import { getCurrentState, setCurrentState } from "../../../shared/state.js";
import { getItems, addItem } from "../../../shared/storage.js";

import { eventBus } from "../../../shared/eventBus.js";
import { getFieldData } from "../../../shared/getFieldData.js";

import {
  createFieldItem,
  createHerdItem,
  createMachineItem,
} from "../itemsModel.js";

import { renderItemsList } from "../itemsView.js";
import { hideElement } from "../../../utils/hideElement.js";
import { toggleElementActive } from "../../../utils/toggleElementActive.js";

export async function handleItemCardAdd(e) {
  const page = getCurrentState().page;
  let obj;

  if (page === "fields") {
    const id = document.querySelector("#map-search input").value;
    const data = await getFieldData({ id });

    obj = createFieldItem(data);
    hideElement(document.querySelector("#add-item"));

    eventBus.emit("fieldAdded", { id, location: obj.location });
  } else if (page === "herds") {
    obj = createHerdItem();
  } else if (page === "machines") {
    obj = createMachineItem();
  }

  addItem(page, obj);
  const items = getItems(page);

  renderItemsList(page, items);

  const el = document.querySelector(`.card[data-id="${obj.id}"]`);
  toggleElementActive(el);
  eventBus.emit("itemCardSelected", obj);
  setCurrentState({ id: obj.id });
}
